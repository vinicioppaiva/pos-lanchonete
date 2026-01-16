import './Header.css';

export function Header({ setCategoria }) {
  return (
    <header className="header-master">
      {/* Topo: Menu Operacional e Infos de Caixa alinhados à esquerda */}
      <div className="header-top">
        <button className="btn-menu-operacional">
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <div className="caixa-info">
          <span className="caixa-numero">QUIOSQUE 01</span>
          <span className="operador-nome">CAIXA: VINICIO</span>
        </div>
      </div>

      {/* Base: Navegação de Categorias */}
      <nav className="header-categories">
        <span onClick={() => setCategoria('LANCHES')}>LANCHES</span>
        <span onClick={() => setCategoria('BEBIDAS')}>BEBIDAS</span>
        <span onClick={() => setCategoria('CERVEJAS')}>CERVEJAS</span>
      </nav>
    </header>
  );
}