import { useEffect, useState } from 'react';
import { supabase, isSupabaseConfigured, configurationError } from '../lib/supabase';
import { Badge, Button, Card, Input } from './UI';
import { EmptyState, ErrorState, LoadingState } from './States';

export function BookList() {
  const [books, setBooks] = useState([]); const [query, setQuery] = useState('');
  const [state, setState] = useState('loading'); const [error, setError] = useState(''); const [refreshing, setRefreshing] = useState(false);
  async function loadBooks() {
    if (state === 'success') setRefreshing(true); else setState('loading'); setError('');
    if (!isSupabaseConfigured) { setError(configurationError()); setState('error'); return; }
    let request = supabase.from('livros').select('id,codigo,titulo,autor,status,previsao_devolucao').order('titulo');
    if (query.trim()) request = request.or(`titulo.ilike.%${query.trim()}%,codigo.ilike.%${query.trim()}%`);
    const { data, error: requestError } = await request;
    setRefreshing(false);
    if (requestError) { setError(requestError.message); setState('error'); return; }
    setBooks(data || []); setState((data || []).length ? 'success' : 'empty');
  }
  useEffect(() => { loadBooks(); }, []);
  return <Card><div><h2 className="text-xl font-extrabold">Acervo e disponibilidade</h2><p className="text-slate-600">Busque por título ou código e confira a situação do exemplar.</p></div>
    <form className="search-form" onSubmit={(event) => { event.preventDefault(); loadBooks(); }}><div className="search-field"><Input id="book-search" label="Buscar no acervo" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Ex.: LIV-001 ou Dom Casmurro" /></div><Button type="submit">Buscar</Button></form>
    <div className="mt-5 list-region" aria-busy={state === 'loading' || refreshing}>{state === 'loading' && <LoadingState list message="Carregando acervo..." />}{state === 'error' && <ErrorState message={error} onRetry={loadBooks} />}{state === 'empty' && <EmptyState title="Nenhum livro encontrado" description="Cadastre o primeiro exemplar para começar o acervo." />}{state === 'success' && <><span className="refresh-status" role="status">{refreshing ? 'Atualizando acervo...' : ''}</span><ul className={`book-grid list-enter grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 ${refreshing ? 'is-refreshing' : ''}`} aria-label="Livros encontrados">{books.map((book) => <li key={book.id} className="book-card"><div className="flex items-start justify-between gap-2"><div><p className="book-title font-bold">{book.titulo}</p><p className="book-author text-sm">{book.autor}</p></div><Badge status={book.status} /></div><p className="book-code mt-3 text-sm">Código: {book.codigo}</p><span className="book-doodle" aria-hidden="true">✧</span></li>)}</ul></>}</div>
  </Card>;
}
