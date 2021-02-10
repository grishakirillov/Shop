import './App.css';
import React from 'react'
import { Header } from './components';
import { Home, Cart } from './pages'
import { Route } from 'react-router-dom'

function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3000/db.json").then((resp) => resp.json()).then(json => {
      setItems(json.items);
    })
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
