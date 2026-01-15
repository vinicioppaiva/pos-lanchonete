import './Produto.css';

export function Produto({ nome, preco, imagem, quantidade, onAdd, onRemove }) {
  return (
    <div className="produto-card">
      <img src={imagem} alt={nome} className="produto-img" />
      <div className="produto-detalhes">
        <div className="linha-info">
          <span className="produto-nome">{nome}</span>
          <span className="produto-preco">R${preco.toFixed(2)}</span>
        </div>
        <div className="linha-controles">
          <button onClick={onRemove} className="btn-menos">-</button>
          <span className="label-qtd">{quantidade}</span>
          <button onClick={onAdd} className="btn-mais">+</button>
        </div>
      </div>
    </div>
  );
}