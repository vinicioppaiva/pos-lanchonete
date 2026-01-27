import { useState } from 'react';
import './App.css';

// Importação das Páginas
import Login from './pages/Login';
import Cardapio from './pages/Cardapio';
import Carrinho from './pages/Carrinho';
import Pagamento from './pages/Pagamento';

// Imports de Imagens
import imgHamburguer from './assets/images/hamburguer.png';
import imgHotdog from './assets/images/hotdog.png';
import imgSalgado from './assets/images/salgado.png';
import imgBatata from './assets/images/batatafrita.png';
import imgEspetinho from './assets/images/espetinho.png';
import imgSalsichao from './assets/images/salsichao.png';
import imgChips from './assets/images/chips.png';
import imgAgua from './assets/images/agua.png';
import imgGuaravita from './assets/images/guaravita.png';
import imgMate from './assets/images/mate.png';
import imgRefri from './assets/images/refrigerante.png';
import imgBrahma from './assets/images/brahma.png';
import imgSpaten from './assets/images/spaten.png';
import imgBud from './assets/images/budzero.png';
import imgCorona from './assets/images/corona.png';

function App() {
  // 1. Estados de Navegação e Usuário
  const [telaAtual, setTelaAtual] = useState('LOGIN');
  const [dadosCaixa, setDadosCaixa] = useState({ nome: '', quiosque: '' });
  
  // 2. Estado Global de Produtos
  const [produtos, setProdutos] = useState([
    { id: 1, nome: "Hamburguer", preco: 22.0, img: imgHamburguer, cat: "LANCHES", qtd: 0 },
    { id: 2, nome: "Hot Dog", preco: 15.0, img: imgHotdog, cat: "LANCHES", qtd: 0 },
    { id: 3, nome: "Salgado", preco: 8.0, img: imgSalgado, cat: "LANCHES", qtd: 0 },
    { id: 4, nome: "Batata Frita", preco: 12.0, img: imgBatata, cat: "LANCHES", qtd: 0 },
    { id: 5, nome: "Espetinho", preco: 10.0, img: imgEspetinho, cat: "LANCHES", qtd: 0 },
    { id: 6, nome: "Salsichão", preco: 9.0, img: imgSalsichao, cat: "LANCHES", qtd: 0 },
    { id: 7, nome: "Chips", preco: 6.0, img: imgChips, cat: "LANCHES", qtd: 0 },
    { id: 8, nome: "Água", preco: 4.0, img: imgAgua, cat: "BEBIDAS", qtd: 0 },
    { id: 9, nome: "Guaravita", preco: 5.0, img: imgGuaravita, cat: "BEBIDAS", qtd: 0 },
    { id: 10, nome: "Mate", preco: 6.0, img: imgMate, cat: "BEBIDAS", qtd: 0 },
    { id: 11, nome: "Refrigerante", preco: 7.0, img: imgRefri, cat: "BEBIDAS", qtd: 0 },
    { id: 12, nome: "Brahma", preco: 8.0, img: imgBrahma, cat: "CERVEJAS", qtd: 0 },
    { id: 13, nome: "Spaten", preco: 9.0, img: imgSpaten, cat: "CERVEJAS", qtd: 0 },
    { id: 14, nome: "Bud Zero", preco: 8.5, img: imgBud, cat: "CERVEJAS", qtd: 0 },
    { id: 15, nome: "Corona", preco: 12.0, img: imgCorona, cat: "CERVEJAS", qtd: 0 },
  ]);

  // 3. Cálculos Automáticos
  const valorTotal = produtos.reduce((acc, p) => acc + (p.preco * p.qtd), 0);
  const totalItens = produtos.reduce((acc, p) => acc + p.qtd, 0);

  // 4. Funções de Ação
  const fazerLogin = (nome, quiosque) => {
    setDadosCaixa({ nome, quiosque });
    setTelaAtual('CARDAPIO');
  };

  const alterarQuantidade = (id, delta) => {
    setProdutos(prev => prev.map(p => 
      p.id === id ? { ...p, qtd: Math.max(0, p.qtd + delta) } : p
    ));
  };

  return (
    <div className="App">
      {/* Navegação entre telas baseada no estado telaAtual */}
      {telaAtual === 'LOGIN' && (
        <Login onLogin={fazerLogin} />
      )}

      {telaAtual === 'CARDAPIO' && (
        <Cardapio 
          produtos={produtos}
          valorTotal={valorTotal}
          dadosCaixa={dadosCaixa}
          alterarQuantidade={alterarQuantidade} // RESOLVE O ERRO
          onAbrirCarrinho={() => setTelaAtual('CARRINHO')}
        />
      )}

      {telaAtual === 'CARRINHO' && (
        <Carrinho 
          produtos={produtos}
          valorTotal={valorTotal}
          onVoltar={() => setTelaAtual('CARDAPIO')}
          onPagar={() => setTelaAtual('PAGAMENTO')}
          alterarQuantidade={alterarQuantidade}
        />
      )}

      {telaAtual === 'PAGAMENTO' && (
        <Pagamento 
          valorTotal={valorTotal}
          onVoltar={() => setTelaAtual('CARRINHO')}
          onFinalizar={() => {
            alert("Venda realizada com sucesso!");
            setProdutos(prev => prev.map(p => ({ ...p, qtd: 0 })));
            setTelaAtual('CARDAPIO'); 
          }}
        />
      )}
    </div>
  );
}

export default App;