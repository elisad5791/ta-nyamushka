import { useEffect, useState } from 'react';
import Card from './Card.js';
import data from './data.js';
import './css/App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, []);

  return (
    <div className="app">
      <p className="app__question">Ты сегодня покормил кота?</p>
      <div className="app__wrapper">
        {products.map((product) => <Card product={product} key={product.id} />)}
      </div>
    </div>
  );
}

export default App;
