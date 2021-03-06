import './App.css';
import React from 'react'
import axios from 'axios'
import { Header } from './components';
import { Home, Cart } from './pages'
import { Route } from 'react-router-dom'

function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      setItems(data.items);
    });
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" render={() => <Home items={items} />} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div >
  );
}

export default App;
