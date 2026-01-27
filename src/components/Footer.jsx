import './Footer.css';

export const Footer = ({ total, onCarrinhoClick }) => {
  return (
    <footer className="footer-pdv">
      <div className="footer-controles">
        <div className="footer-info-total">
          <span className="label-total">Total:</span>
          <span className="valor-total">R$ {total.toFixed(2)}</span>
        </div>
        
        <button className="btn-footer-carrinho" onClick={onCarrinhoClick}>
          VER CARRINHO
        </button>
      </div>
      <p className="footer-creditos">© 2026 - Desenvolvido por Vinicio Paiva</p>
    </footer>
  );
};