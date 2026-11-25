import { useEffect, useRef, useState } from 'react';
import Select from 'react-select';
import { DayPicker } from 'react-day-picker';
import { ptBR } from 'react-day-picker/locale';
import 'react-day-picker/style.css';

export function ChoiceField({ label, value, options, onChange, placeholder }) {
  const id = label === 'Leitor' ? 'choice-reader' : 'choice-book';
  return <div className="field-label"><label htmlFor={id}>{label}</label><Select inputId={id} className="choice" classNamePrefix="choice" unstyled options={options} value={options.find(option => option.value === value) || null} onChange={option => onChange(option?.value || '')} placeholder={placeholder} noOptionsMessage={() => 'Nenhum resultado encontrado'} isSearchable /></div>;
}

export function DateField({ label, value, onChange }) {
  const [open, setOpen] = useState(false);
  const root = useRef(null);
  const selected = value ? new Date(`${value}T12:00:00`) : undefined;
  useEffect(() => {
    function onPointer(event) { if (root.current && !root.current.contains(event.target)) setOpen(false); }
    function onKey(event) { if (event.key === 'Escape') setOpen(false); }
    document.addEventListener('pointerdown', onPointer); document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('pointerdown', onPointer); document.removeEventListener('keydown', onKey); };
  }, []);
  function choose(date) {
    if (!date) return;
    const dateString = [date.getFullYear(), String(date.getMonth() + 1).padStart(2, '0'), String(date.getDate()).padStart(2, '0')].join('-');
    onChange(dateString); setOpen(false);
  }
  return <div className="field-label date-field" ref={root}><span>{label}</span><button type="button" className="date-trigger" aria-label={`${label}: ${selected ? selected.toLocaleDateString('pt-BR') : 'selecionar data'}`} aria-expanded={open} onClick={() => setOpen(!open)}><span>{selected ? selected.toLocaleDateString('pt-BR') : 'Selecionar data'}</span><span aria-hidden="true">▦</span></button>{open && <div className="calendar-popover"><DayPicker mode="single" selected={selected} onSelect={choose} locale={ptBR} weekStartsOn={0} autoFocus /></div>}</div>;
}
