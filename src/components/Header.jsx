import './Header.css';

export const Header = ({ setCategoria, operador, unidade }) => {
  return (
    <header className="header-master">
      <div className="header-top">
        <div className="btn-menu-operacional">
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <div className="caixa-info">
          <span className="caixa-numero">{unidade}</span>
          <span className="operador-nome">CAIXA: {operador}</span>
        </div>
      </div>

      <nav className="header-categories">
        <button className="btn-cat" onClick={() => setCategoria('LANCHES')}>LANCHES</button>
        <button className="btn-cat" onClick={() => setCategoria('BEBIDAS')}>BEBIDAS</button>
        <button className="btn-cat" onClick={() => setCategoria('CERVEJAS')}>CERVEJAS</button>
      </nav>
    </header>
  );
};