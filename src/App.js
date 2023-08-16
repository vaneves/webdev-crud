import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [publicacoes, setPublicacoes] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then((resposta) => {
        setPublicacoes(resposta.data);
      });
  }, []);

  return (
    <div className="App">
      <ul>
        {publicacoes.map((publicacao) => {
          return <li>{publicacao.title}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
