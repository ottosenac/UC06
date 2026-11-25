import { useState } from 'react';
import { supabase, isSupabaseConfigured, configurationError } from '../lib/supabase';
import { Button, Card, Input } from './UI';
import { ErrorState, SuccessState } from './States';

export function ReaderForm() {
  const [form, setForm] = useState({ nome: '', telefone: '' });
  const [errors, setErrors] = useState({});
  const [feedback, setFeedback] = useState(null);
  const [saving, setSaving] = useState(false);

  function validate() {
    const next = {};
    if (form.nome.trim().length < 2) next.nome = 'Informe um nome com ao menos 2 caracteres.';
    if (form.telefone.replace(/\D/g, '').length < 8) next.telefone = 'Informe um telefone válido com ao menos 8 dígitos.';
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function submit(event) {
    event.preventDefault();
    if (saving) return;
    setFeedback(null);
    if (!validate()) return;
    if (!isSupabaseConfigured) {
      setFeedback({ type: 'error', message: configurationError() });
      return;
    }
    setSaving(true);
    try {
      const { error } = await supabase.from('leitores').insert({ nome: form.nome.trim(), telefone: form.telefone.trim() });
      if (error) { setFeedback({ type: 'error', message: 'Não foi possível cadastrar o leitor. Confira a conexão e tente novamente.' }); return; }
      setFeedback({ type: 'success', message: 'Leitor cadastrado com sucesso.' });
      setForm({ nome: '', telefone: '' });
    } catch {
      setFeedback({ type: 'error', message: 'Não foi possível conectar. Confira sua conexão e tente novamente.' });
    } finally { setSaving(false); }
  }

  return <Card><h2 className="text-xl font-extrabold">Cadastro de leitor</h2><p className="mt-1 text-slate-600">Registre os dados mínimos para vincular empréstimos.</p><form className="mt-5 grid gap-4" onSubmit={submit} noValidate><Input id="leitor-nome" label="Nome" value={form.nome} error={errors.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} /><Input id="leitor-telefone" label="Telefone" inputMode="tel" value={form.telefone} error={errors.telefone} onChange={(e) => setForm({ ...form, telefone: e.target.value })} /><div><Button type="submit" disabled={saving}>{saving ? 'Salvando...' : 'Cadastrar leitor'}</Button></div></form><div className="mt-4">{feedback?.type === 'error' && <ErrorState message={feedback.message} />}{feedback?.type === 'success' && <SuccessState message={feedback.message} />}</div></Card>;
}
