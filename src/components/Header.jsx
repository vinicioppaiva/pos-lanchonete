import './Header.css';

export function Header({ setCategoria }) {
  return (
    <div className="header-container">
      <span onClick={() => setCategoria('LANCHES')}>LANCHES</span>
      <span onClick={() => setCategoria('BEBIDAS')}>BEBIDAS</span>
      <span onClick={() => setCategoria('CERVEJAS')}>CERVEJAS</span>
    </div>
  );
}