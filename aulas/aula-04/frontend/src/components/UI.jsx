export function Button({ children, variant = 'primary', className = '', ...props }) {
  return <button className={`btn btn-${variant} ${className}`} {...props}>{children}</button>;
}

export function Card({ children, className = '' }) {
  return <section className={`paper-card ${className}`}>{children}</section>;
}

export function Input({ label, error, id, ...props }) {
  return <label className="field-label" htmlFor={id}>
    {label}
    <span className={`input-wrap ${props.type === 'date' ? 'input-wrap-date' : ''}`}><input id={id} className={`field-input ${error ? 'field-input-error' : ''}`} {...props} /></span>
    {error && <span className="field-error">{error}</span>}
  </label>;
}

export function Badge({ status }) {
  const styles = {
    disponivel: 'bg-emerald-100 text-emerald-800',
    emprestado: 'bg-blue-100 text-blue-800',
    em_dia: 'bg-blue-100 text-blue-800',
    atrasado: 'bg-red-100 text-red-800',
    devolvido: 'bg-slate-200 text-slate-700'
  };
  const labels = { disponivel: 'Disponível', emprestado: 'Emprestado', em_dia: 'Em dia', atrasado: 'Atrasado', devolvido: 'Devolvido' };
  return <span className={`badge ${styles[status] || styles.em_dia}`}>{labels[status] || status}</span>;
}
