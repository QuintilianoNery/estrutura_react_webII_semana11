import Cabecalho from "./components/Cabecalho";
import CursoCard from "./components/CursoCard";
import ProdutoCard from "./components/ProdutoCard";
import Rodape from "./components/Rodape";

import "./App.css";

// Dados fictícios: um array de objetos (igual ao que você viu em JS).
const cursos = [
  {
    id: 1, titulo: "Desenvolvimento Front-End",
    descricao: "HTML, CSS, JavaScript e React.", cargaHoraria: 75,
    modalidade: "EAD"
  },
  {
    id: 2, titulo: "Banco de Dados",
    descricao: "Modelagem e SQL na prática.", cargaHoraria: 60,
    modalidade: "Presencial"
  },
  {
    id: 3, titulo: "Programação Orientada a Objetos",
    descricao: "Classes, objetos e herança.", cargaHoraria: 60,
    modalidade: "EAD"
  },
  {
    id: 4, titulo: "Engenharia de Software",
    descricao: "Processos e qualidade de software.", cargaHoraria: 45,
    modalidade: "Presencial"
  },
  {
    id: 5, titulo: "Qualidade de Software",
    descricao: "Processos e qualidade de software.", cargaHoraria: 45,
    modalidade: "EAD"
  },
  {
    id: 6, titulo: "UX/UI Design",
    descricao: "Processos e qualidade de software.", cargaHoraria: 45,
    modalidade: "Presencial"
  },
];

const produtos = [
{ id: 1, nome: "Notebook", preco: 3499.90,
emoji: "💻", categoria: "Eletrônicos", freteGratis: true, estoque: 10 },
{ id: 2, nome: "Fone Bluetooth", preco: 199.90,
emoji: "🎧", categoria: "Eletrônicos", freteGratis: false, estoque: 5 },
{ id: 3, nome: "Teclado Mecânico", preco: 349.00,
emoji: "⌨️", categoria: "Eletrônicos", freteGratis: false, estoque: 0 },
{ id: 4, nome: "Mouse Gamer", preco: 129.90,
emoji: "🖱️", categoria: "Eletrônicos", freteGratis: true, estoque: 15 },
{ id: 5, nome: "Memória Ram", preco: 349.00,
emoji: "⌨", categoria: "Eletrônicos", freteGratis: false, estoque: 0 },
{ id: 6, nome: "Monitor 24\"", preco: 899.90,
emoji: "🖥️", categoria: "Eletrônicos", freteGratis: true, estoque: 0 },
];


function App() {
  return (
    <div className="app">
      <Cabecalho
        titulo="Catálogo de Cursos"
        subtitulo="Conheça as formações do nosso TADS" />
      <main className="lista-cursos">
        {/* .map() gera um CursoCard para CADA item do array */}
        {cursos.map((curso) => (
          <CursoCard
            key={curso.id}
            titulo={curso.titulo}
            descricao={curso.descricao}
            modalidade={curso.modalidade}
            cargaHoraria={curso.cargaHoraria} />

        ))}
      </main>
      
      <h1>Vitrine de Produtos Do Quin</h1>
      <main className="vitrine">
        {produtos.map((p) => (
          <ProdutoCard
            key={p.id}
            nome={p.nome}
            preco={p.preco}
            emoji={p.emoji}
            estoque={p.estoque}
            categoria={p.categoria}
            freteGratis={p.freteGratis} />
        ))}
      </main>

      <Rodape />
    </div>
  );
}
export default App;