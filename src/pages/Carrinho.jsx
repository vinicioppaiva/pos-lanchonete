import './Carrinho.css';

const Carrinho = ({ produtos, onVoltar, onPagar }) => {
  // Filtra apenas produtos com quantidade
  const selecionados = produtos.filter(p => p.qtd > 0);
  
  const total = selecionados.reduce((acc, p) => acc + (p.preco * p.qtd), 0);

  return (
    <div className="pagina-carrinho-simples">
      <h2 className="titulo-revisar">REVISAR PEDIDO</h2>
      
      <div className="lista-texto">
        {selecionados.map(item => (
          <div key={item.id} className="linha-produto">
            <span>{item.qtd}x {item.nome}</span>
            <span>R$ {(item.preco * item.qtd).toFixed(2)}</span>
          </div>
        ))}
        <hr />
        <div className="linha-total">
          <strong>TOTAL:</strong>
          <strong>R$ {total.toFixed(2)}</strong>
        </div>
      </div>

      <div className="botoes-carrinho">
        <button className="btn-voltar-simples" onClick={onVoltar}>
          EDITAR PEDIDO
        </button>
        <button className="btn-pagar-simples" onClick={onPagar}>
          PAGAR AGORA
        </button>
      </div>
    </div>
  );
};

export default Carrinho;