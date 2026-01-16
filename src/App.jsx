import './App.css';
import { useState, useRef } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Produto } from './components/Produto';

// Imports de Imagens (Certifique-se de que os caminhos estão corretos)
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
  const [categoriaAtiva, setCategoriaAtiva] = useState('LANCHES');
  const timerRef = useRef(null); // Referência para o timer do clique longo

  // Estado Global de Produtos
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

  // Lógica de Alteração de Quantidade
  const alterarQuantidade = (id, valor) => {
    setProdutos(prev => prev.map(p => 
      p.id === id ? { ...p, qtd: Math.max(0, p.qtd + valor) } : p
    ));
  };

  // Lógica de "Clique e Segura" para Limpar Carrinho
  const iniciarTimerLimpar = () => {
    timerRef.current = setTimeout(() => {
      if (window.confirm("Deseja zerar todos os itens do carrinho?")) {
        setProdutos(prev => prev.map(p => ({ ...p, qtd: 0 })));
      }
    }, 1200); // Segurar por 1.2 segundos
  };

  const cancelarTimerLimpar = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  // Cálculos para o Footer e Botão Flutuante
  const totalItens = produtos.reduce((acc, p) => acc + p.qtd, 0);
  const valorTotal = produtos.reduce((acc, p) => acc + (p.preco * p.qtd), 0);
  const produtosFiltrados = produtos.filter(p => p.cat === categoriaAtiva);

  return (
    <div 
      className="App" 
      onMouseDown={iniciarTimerLimpar} 
      onMouseUp={cancelarTimerLimpar}
      onTouchStart={iniciarTimerLimpar}
      onTouchEnd={cancelarTimerLimpar}
    >
      <Header setCategoria={setCategoriaAtiva} />
      
      <main className='conteudo-principal'>
        {produtosFiltrados.map((prod) => (
          <Produto 
            key={prod.id} 
            {...prod} 
            imagem={prod.img}
            quantidade={prod.qtd}
            onAdd={() => alterarQuantidade(prod.id, 1)}
            onRemove={() => alterarQuantidade(prod.id, -1)}
          />
        ))}
      </main>

      {/* Botão Flutuante do Carrinho - Aparece apenas se houver itens 
      {totalItens > 0 && (
        <button className="btn-flutuante-carrinho" onClick={() => alert('Abrindo tela de revisão...')}>
          <span className="badge-carrinho">{totalItens}</span>
          🛒
        </button>
      )}
*/}
      <Footer total={valorTotal} />
    </div>
  );
}

export default App;