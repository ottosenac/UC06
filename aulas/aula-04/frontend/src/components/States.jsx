import { Button } from './UI';

export function LoadingState({ message = 'Carregando dados...', list = false }) {
  if (list) return <div className="list-skeleton" role="status"><span className="sr-only">{message}</span>{[0, 1, 2].map(i => <div className="skeleton-card" aria-hidden="true" key={i}><span /><span /><span /></div>)}</div>;
  return <div className="state-box state-loading" role="status"><span aria-hidden="true">✦</span>{message}</div>;
}

export function EmptyState({ title, description, action }) {
  return <div className="state-box state-empty">
    <p className="state-icon" aria-hidden="true">⌁</p><h3>{title}</h3><p>{description}</p>{action && <div className="mt-4">{action}</div>}
  </div>;
}

export function ErrorState({ message, onRetry }) {
  return <div className="state-box state-error" role="alert"><p className="font-bold">Vamos tentar de novo?</p><p className="mt-1">{message}</p>{onRetry && <Button className="mt-3" variant="danger" onClick={onRetry}>Tentar novamente</Button>}</div>;
}

export function SuccessState({ message }) {
  return <p className="state-box state-success" role="status">✦ {message}</p>;
}
