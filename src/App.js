import Home from "./Components/Home";
import Nav from "./Components/Nav";
import './App.css';
import Shop from "./Components/Shop";
import { useState } from 'react'
import { catalog } from '../src/Utils/Catalog'
import Cart from "./Components/Cart";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const { productItems } = catalog
  const [cart, setCart] = useState([])


  //If item exists add item to cart, if item is already in cart add 1 to current quantity
  const handleAddProduct = (product) => {
    const cartItem = cart.find((item) => item.id === product.id);
    if(cartItem){
      setCart(cart.map((item) => item.id === product.id ?
      {...cartItem, quantity: cartItem.quantity + 1}: item))
    } else {
      setCart([...cart, {...product, quantity: 1}])
    }
  }
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Shop productItems={productItems} handleAddProduct={handleAddProduct} />} />
          <Route path="/cart" element={<Cart cart={cart} handleAddProduct={handleAddProduct} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

