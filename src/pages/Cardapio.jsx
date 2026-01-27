import { useState } from 'react';
import './Cardapio.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Produto } from '../components/Produto';

const Cardapio = ({ produtos, valorTotal, dadosCaixa, alterarQuantidade, onAbrirCarrinho }) => {
  const [categoriaAtiva, setCategoriaAtiva] = useState('LANCHES');
  const produtosFiltrados = produtos.filter(p => p.cat === categoriaAtiva);

  return (
    <div className="pagina-cardapio">
      <Header 
        operador={dadosCaixa.nome} 
        unidade={dadosCaixa.quiosque} 
        setCategoria={setCategoriaAtiva} 
      />
      
      <main className="conteudo-principal">
        <div className="grid-produtos">
          {produtosFiltrados.map((prod) => (
            <Produto 
              key={prod.id} 
              {...prod} 
              imagem={prod.img}
              quantidade={prod.qtd}
              onAdd={() => alterarQuantidade(prod.id, 1)} // Chave para o funcionamento
              onRemove={() => alterarQuantidade(prod.id, -1)}
            />
          ))}
        </div>
      </main>

      <Footer 
        total={valorTotal} 
        onCarrinhoClick={onAbrirCarrinho} 
      />
    </div>
  );
};

export default Cardapio;