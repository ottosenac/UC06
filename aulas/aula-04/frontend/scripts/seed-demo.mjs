import { createClient } from '@supabase/supabase-js';
process.loadEnvFile('.env.local');
const client = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY);
const books = [
  ['DEMO-101', 'A Hora da Estrela', 'Clarice Lispector'],
  ['DEMO-102', 'O Cortiço', 'Aluísio Azevedo'],
  ['DEMO-103', 'Quarto de Despejo', 'Carolina Maria de Jesus'],
  ['DEMO-104', 'O Pequeno Príncipe', 'Antoine de Saint-Exupéry'],
  ['DEMO-105', 'Memórias Póstumas de Brás Cubas', 'Machado de Assis'],
  ['DEMO-106', 'A Bolsa Amarela', 'Lygia Bojunga'],
  ['DEMO-107', 'O Meu Pé de Laranja Lima', 'José Mauro de Vasconcelos'],
  ['DEMO-108', 'O Quinze', 'Rachel de Queiroz']
].map(([codigo, titulo, autor]) => ({ codigo, titulo, autor, status: 'disponivel' }));
const readers = [
  { nome: 'Demonstração - Ana', telefone: '0000000101' },
  { nome: 'Demonstração - Bruno', telefone: '0000000102' },
  { nome: 'Demonstração - Clara', telefone: '0000000103' },
  { nome: 'Demonstração - Daniel', telefone: '0000000104' }
];
const { data: existingBooks, error: bookReadError } = await client.from('livros').select('codigo').in('codigo', books.map(book => book.codigo));
if (bookReadError) throw bookReadError;
const newBooks = books.filter(book => !existingBooks.some(existing => existing.codigo === book.codigo));
if (newBooks.length) { const { error } = await client.from('livros').insert(newBooks); if (error) throw error; }
const { data: existingReaders, error: readerReadError } = await client.from('leitores').select('nome').in('nome', readers.map(reader => reader.nome));
if (readerReadError) throw readerReadError;
const newReaders = readers.filter(reader => !existingReaders.some(existing => existing.nome === reader.nome));
if (newReaders.length) { const { error } = await client.from('leitores').insert(newReaders); if (error) throw error; }
console.log(`Livros inseridos: ${newBooks.length}; leitores fictícios inseridos: ${newReaders.length}.`);
