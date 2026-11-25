import { useEffect, useState } from 'react';
import { BookList } from './components/BookList';
import { BookForm } from './components/BookForm';
import { ReaderForm } from './components/ReaderForm';
import { LoanForm } from './components/LoanForm';
import { LoanList } from './components/LoanList';

const screens = [
  { id: 'acervo', label: 'Acervo', icon: '▤', hint: 'Livros e disponibilidade' },
  { id: 'cadastro', label: 'Cadastros', icon: '✎', hint: 'Livros e leitores' },
  { id: 'emprestimo', label: 'Novo empréstimo', icon: '↗', hint: 'Registrar uma retirada' },
  { id: 'devolucoes', label: 'Empréstimos', icon: '↺', hint: 'Acompanhar e devolver' }
];

export default function App() {
  const [screen, setScreen] = useState('acervo');
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('entrelinhas-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'); }
    catch { return 'light'; }
  });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('entrelinhas-theme', theme); } catch { /* navegação também funciona sem armazenamento */ }
  }, [theme]);
  const [previousScreen, setPreviousScreen] = useState('acervo');
  function navigate(next) {
    if (next === screen) return;
    if (next === 'emprestimo') setPreviousScreen(screen);
    setScreen(next);
  }
  const active = screens.find(item => item.id === screen);
  return <main className="workspace">
    <aside className="sidebar">
      <div className="identity"><span className="identity-mark" aria-hidden="true">✦</span><div><h1>Entrelinhas</h1></div></div>
      <p className="sidebar-caption">SEU ESPAÇO</p>
      <nav className="workspace-nav" aria-label="Navegação principal">{screens.map(item => <button key={item.id} type="button" aria-current={screen === item.id ? 'page' : undefined} onClick={() => navigate(item.id)} className={`workspace-link ${screen === item.id ? 'workspace-link-active' : ''}`}><span className="nav-icon" aria-hidden="true">{item.icon}</span><span className="nav-copy"><strong>{item.label}</strong><small>{item.hint}</small></span></button>)}</nav>
      <div className="sidebar-note"><svg className="doodle-books" viewBox="0 0 80 66" fill="none" aria-hidden="true"><path d="M9 51c16-4 40-4 61 1M16 46l-2-29 10-2 3 31M29 46l1-35 10 1-1 34M43 46l4-27 9 2-4 25M59 46l3-22 8 2-3 20M16 24l9-2M30 19l10 1M47 27l8 2"/><path d="M8 8l2-4m-5 8 3-1m54-7 3 4m4 1 3-2"/></svg><p>Histórias circulam.<br /><strong>O cuidado também.</strong></p></div>
    </aside>
    <div className="workspace-main"><header className="workspace-header"><div><p className="eyebrow">ENTRELINHAS <span> / </span> {active.label.toUpperCase()}</p><p className="workspace-greeting">Um bom lugar para as histórias. <span className="greeting-leaf" aria-hidden="true">❧</span></p></div><div className="header-tools"><svg className="doodle-leaf" viewBox="0 0 68 42" fill="none" aria-hidden="true"><path d="M5 35C22 32 34 21 55 7M24 29C17 20 19 14 20 12c8 1 12 5 12 12M39 20c-2-8 1-13 7-16 5 5 4 10 0 14M54 10c2-5 7-6 10-5-1 5-4 8-9 8"/></svg><button type="button" className="theme-toggle" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} aria-label={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'} title={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}><span aria-hidden="true">{theme === 'light' ? '☾' : '☼'}</span></button></div></header>
      <div className="workspace-content"><div className="screen-enter" key={screen}>{screen === 'acervo' && <BookList />}{screen === 'cadastro' && <div className="grid gap-5 lg:grid-cols-2"><BookForm /><ReaderForm /></div>}{screen === 'emprestimo' && <LoanForm onCancel={() => setScreen(previousScreen)} onOpenCadastro={() => setScreen('cadastro')} />}{screen === 'devolucoes' && <LoanList />}</div></div>
      <footer className="workspace-footer"><span>Feito para acolher leitores e livros.</span><span aria-hidden="true">✦</span></footer>
    </div>
  </main>;
}
