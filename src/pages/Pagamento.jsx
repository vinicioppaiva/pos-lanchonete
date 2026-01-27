import './Pagamento.css';

const Pagamento = ({ onVoltar }) => {
  return (
    <div className="pagina-pagamento">
      <h1>Pagamento</h1>
      <button onClick={onVoltar}>Voltar</button>
    </div>
  );
};

export default Pagamento;