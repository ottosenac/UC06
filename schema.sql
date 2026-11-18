-- Serena Agenda - schema Supabase/PostgreSQL
-- Execute este arquivo no SQL Editor do projeto Supabase.

create extension if not exists pgcrypto;

-- 1. Catálogo de serviços
create table if not exists public.servicos (
  id uuid primary key default gen_random_uuid(),
  nome text not null check (char_length(nome) >= 3),
  duracao_min integer not null check (duracao_min between 10 and 480),
  preco numeric(10,2) not null check (preco > 0),
  ativo boolean not null default true,
  criado_em timestamptz not null default now(),
  atualizado_em timestamptz not null default now()
);

create index if not exists idx_servicos_ativo on public.servicos(ativo);

-- 2. Agendamentos vinculados ao usuário autenticado
create table if not exists public.agendamentos (
  id uuid primary key default gen_random_uuid(),
  servico_id uuid not null references public.servicos(id) on delete restrict,
  cliente_nome text not null check (char_length(cliente_nome) >= 2),
  cliente_telefone text,
  data date not null,
  horario time not null,
  status text not null default 'pendente'
    check (status in ('pendente', 'confirmado', 'concluido', 'cancelado')),
  created_by_user_id uuid not null default auth.uid()
    references auth.users(id) on delete cascade,
  criado_em timestamptz not null default now(),
  atualizado_em timestamptz not null default now(),
  unique (data, horario)
);

create index if not exists idx_agendamentos_data_horario
  on public.agendamentos(data, horario);
create index if not exists idx_agendamentos_owner
  on public.agendamentos(created_by_user_id);

-- Dados iniciais opcionais para demonstrar o catálogo.
insert into public.servicos (nome, duracao_min, preco)
select 'Corte feminino', 60, 85.00
where not exists (
  select 1 from public.servicos where nome = 'Corte feminino'
);
insert into public.servicos (nome, duracao_min, preco)
select 'Escova', 45, 55.00
where not exists (
  select 1 from public.servicos where nome = 'Escova'
);
insert into public.servicos (nome, duracao_min, preco)
select 'Manicure', 45, 40.00
where not exists (
  select 1 from public.servicos where nome = 'Manicure'
);

-- Atualiza atualizado_em em alterações das linhas.
create or replace function public.set_atualizado_em()
returns trigger
language plpgsql
security invoker
set search_path = public
as $$
begin
  new.atualizado_em = now();
  return new;
end;
$$;

drop trigger if exists set_servicos_atualizado_em on public.servicos;
create trigger set_servicos_atualizado_em
before update on public.servicos
for each row execute function public.set_atualizado_em();

drop trigger if exists set_agendamentos_atualizado_em on public.agendamentos;
create trigger set_agendamentos_atualizado_em
before update on public.agendamentos
for each row execute function public.set_atualizado_em();

-- Habilita RLS: nenhuma política é aplicada a dados que não sejam permitidos.
alter table public.servicos enable row level security;
alter table public.agendamentos enable row level security;

-- Serviços ativos podem ser consultados por usuários autenticados.
drop policy if exists "servicos_select_authenticated" on public.servicos;
create policy "servicos_select_authenticated"
  on public.servicos for select
  to authenticated
  using (ativo = true);

drop policy if exists "servicos_insert_authenticated" on public.servicos;
create policy "servicos_insert_authenticated"
  on public.servicos for insert
  to authenticated
  with check (true);

drop policy if exists "servicos_update_authenticated" on public.servicos;
create policy "servicos_update_authenticated"
  on public.servicos for update
  to authenticated
  using (ativo = true)
  with check (true);

drop policy if exists "servicos_delete_authenticated" on public.servicos;
create policy "servicos_delete_authenticated"
  on public.servicos for delete
  to authenticated
  using (ativo = true);

-- Agendamentos pertencem ao usuário que os criou.
drop policy if exists "agendamentos_select_owner" on public.agendamentos;
create policy "agendamentos_select_owner"
  on public.agendamentos for select
  to authenticated
  using (auth.uid() = created_by_user_id);

drop policy if exists "agendamentos_insert_owner" on public.agendamentos;
create policy "agendamentos_insert_owner"
  on public.agendamentos for insert
  to authenticated
  with check (auth.uid() = created_by_user_id);

drop policy if exists "agendamentos_update_owner" on public.agendamentos;
create policy "agendamentos_update_owner"
  on public.agendamentos for update
  to authenticated
  using (auth.uid() = created_by_user_id)
  with check (auth.uid() = created_by_user_id);

drop policy if exists "agendamentos_delete_owner" on public.agendamentos;
create policy "agendamentos_delete_owner"
  on public.agendamentos for delete
  to authenticated
  using (auth.uid() = created_by_user_id);

