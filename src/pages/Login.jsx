import { useState } from 'react';
import './Login.css';

const Login = ({ onLogin }) => {
  const [operador, setOperador] = useState('');
  const [bar, setBar] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (operador.trim() && bar.trim()) {
      // Envia os dados para o App.jsx e muda a tela
      onLogin(operador, bar);
    } else {
      alert("Por favor, preencha o nome do operador e o bar.");
    }
  };

  return (
    <div className="tela-login">
      <div className="login-container">
        <h1 className="login-titulo">LANCHONETE POS</h1>
        <p className="login-subtitulo">Acesso ao Sistema de Vendas</p>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label>NOME DO OPERADOR</label>
            <input 
              type="text" 
              placeholder="Ex: Vinício" 
              value={operador}
              onChange={(e) => setOperador(e.target.value)}
              required
            />
          </div>

          {/* Dentro do form no Login.jsx */}
        <div className="input-group">
            <label>RESTAURANTE</label>
            <select 
                value={bar}
                onChange={(e) => setBar(e.target.value)}
                required
            >
                <option value="">Selecione um bar...</option>
                <option value="Bar 01">Bar 01</option>
                <option value="Bar 02">Bar 02</option>
                <option value="Bar 03">Bar 03</option>
            </select>
        </div>

          <button type="submit" className="btn-entrar">
            ENTRAR
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;