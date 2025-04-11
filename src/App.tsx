import axios from 'axios';
import { useState } from 'react';

interface Produto {
  id: number;
  nome: string;
  preco: number;
}

function App() {
  const [produto, setProduto] = useState<Produto | null>(null);

  return (
    <div>
      <button onClick={() => {
        axios
        .put('http://localhost:8081/api/salvarProduto',
          {
            id: 1,
            nome: 'Teste',
            preco: 50
          }
        )
        .then(() => {
          console.log("Produto salvo!")
        })
        .catch(error => {
          console.error('Erro:', error);
        });
      }}>
        Clique aqui!
      </button>
      <button onClick={() => {
        axios
        .get('http://localhost:8081/api/buscarProduto')
        .then(response => {
          console.log("Produto:", response.data);
          setProduto(response.data);
        })
        .catch(error => {
          console.error('Erro:', error);
        });
      }}>
        Buscar
      </button>
      <div style={{
        display: 'column'
      }}>
        <h1>{produto?.id}</h1>
        <h1>{produto?.nome}</h1>
        <h1>{produto?.preco}</h1>
      </div>
    </div>
  )
}

export default App
