// As props (titulo, descricao, cargaHoraria) chegam "de fora",
// como se fossem atributos de uma tag. Cada card recebe os seus.
function CursoCard({ titulo, descricao, cargaHoraria, modalidade }) {
    return (
        <article className="curso-card">
            <h3>{titulo}</h3> {/* {} insere a variável na tela */}
            <p>{descricao}</p>
            <span className="carga">{cargaHoraria}h</span>
            <span className="modalidade">{modalidade}</span>
        </article>
    );
}
export default CursoCard;