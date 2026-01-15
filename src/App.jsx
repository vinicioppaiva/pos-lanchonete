import { useState } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Produto } from './components/Produto'

// Importações das suas imagens
import imgAgua from './assets/images/agua.png'
import imgBatata from './assets/images/batatafrita.png'
import imgBrahma from './assets/images/brahma.png'
import imgBud from './assets/images/budzero.png'
import imgChips from './assets/images/chips.png'
import imgCorona from './assets/images/corona.png'
import imgEspetinho from './assets/images/espetinho.png'
import imgGuaravita from './assets/images/guaravita.png'
import imgHamburguer from './assets/images/hamburguer.png'
import imgHotdog from './assets/images/hotdog.png'
import imgMate from './assets/images/mate.png'
import imgRefri from './assets/images/refrigerante.png'
import imgSalgado from './assets/images/salgado.png'
import imgSalsichao from './assets/images/salsichao.png'
import imgSpaten from './assets/images/spaten.png'

function App() {
  const [categoriaAtiva, setCategoriaAtiva] = useState('LANCHES');
  
  // Estado que guarda a lista de produtos com suas quantidades
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

  // Função para aumentar ou diminuir a quantidade
  const alterarQuantidade = (id, valor) => {
    setProdutos(produtos.map(p => {
      if (p.id === id) {
        const novaQtd = p.qtd + valor;
        return { ...p, qtd: novaQtd < 0 ? 0 : novaQtd };
      }
      return p;
    }));
  };

  // Cálculo do Total Geral
  const totalGeral = produtos.reduce((acc, p) => acc + (p.preco * p.qtd), 0);

  const produtosFiltrados = produtos.filter(p => p.cat === categoriaAtiva);

  return (
    <div className="App">
      <Header setCategoria={setCategoriaAtiva} />
      
      <main style={{ 
        marginTop: '70px', marginBottom: '90px', 
        display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', 
        gap: '5px', padding: '5px' 
      }}>
        {produtosFiltrados.map((prod) => (
          <Produto 
            key={prod.id} 
            nome={prod.nome} 
            preco={prod.preco} 
            imagem={prod.img} 
            quantidade={prod.qtd}
            onAdd={() => alterarQuantidade(prod.id, 1)}
            onRemove={() => alterarQuantidade(prod.id, -1)}
          />
        ))}
      </main>

      <Footer total={totalGeral} />
    </div>
  )
}

export default App