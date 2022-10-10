import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Shop from "./Components/Shop";
import { useState } from 'react'
import { catalog } from '../src/Utils/Catalog'
import Cart from "./Components/Cart";
import Footer from "./Components/Footer"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const { productItems } = catalog
  const [cart, setCart] = useState([])
  const [ItemsInCart, SetItemsInCart] = useState(0)

  //If item exists add item to cart, if item is already in cart add 1 to current quantity
  const handleAddProduct = (product) => {
    const cartItem = cart.find((item) => item.id === product.id)
    SetItemsInCart(ItemsInCart + 1)
    setCart(cart + 1)
    if (cartItem) {
      setCart(cart.map((item) => item.id === product.id ?
        { ...cartItem, quantity: cartItem.quantity + 1, } : item))
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
    console.log(ItemsInCart)
  }

  //If quantity of item is 1, filter item from cart. If item quantity is more than 1 remove 1 on click. 
  const handleRemoveProduct = (product) => {
    const cartItem = cart.find((item) => item.id === product.id)
    SetItemsInCart(ItemsInCart - 1)
    if (cartItem.quantity === 1) {
      setCart(cart.filter((item) => item.id !== product.id))
    } else {
      setCart(
        cart.map((item) =>
          item.id === product.id ?
            { ...cartItem, quantity: cartItem.quantity - 1 } : item))
    }
  }
  return (
    <div className="flex flex-col min-h-100">
      <Router>
        <Nav ItemsInCart={ItemsInCart} cart={cart}/>
        <Routes>
          <Route path="/shopping-cart" element={<Home/>} />
          <Route path="/catalog" element={<Shop productItems={productItems} handleAddProduct={handleAddProduct} />} />
          <Route path="/cart" element={<Cart cart={cart} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} />} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;

