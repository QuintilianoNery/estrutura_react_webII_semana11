function ProdutoCard({ nome, preco, emoji, categoria, freteGratis, estoque }) {
    // toLocaleString formata o número como moeda brasileira: R$ 1.299,90
    const precoFormatado = preco.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
    return (
        <article className="produto-card">
            <div className="thumb">{emoji}</div>
            <h3>{nome}</h3>
            <p className="preco">{precoFormatado}</p>
            <p className="categoria">{categoria}</p>
            {/* Renderização condicional: o selo só aparece se */}
            {/* freteGratis for true. O && significa "E então mostre". */}
            {freteGratis && <span className="selo">Frete grátis</span>}
            {/* Mostrar selo Esgotado quando estoque for 0 e esconder o botão Comprar */}
            {estoque === 0 ? (
                <span className="selo-esgotado">Esgotado</span>
            ) : (
                <button>Comprar</button>
            )}
        </article>
    );
}
export default ProdutoCard;