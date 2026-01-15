import './Footer.css';

export function Footer({ total }) {
  return (
    <footer className="footer-container">
      <h2>Total: R$ {total.toFixed(2).replace('.', ',')}</h2>
      <p>© 2026 - Desenvolvido por Vinicio Paiva</p>
    </footer>
  );
}