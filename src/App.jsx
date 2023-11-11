import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Order from './pages/Order'
import ContactUs from './pages/ContactUs'
import Error from './pages/Error'
import NavbarComp from './components/NavbarComp'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './pages/Footer'
import Menus from './pages/Menus'
import About from './pages/About'
import Cart from './components/Cart'





function App() {

  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const [warning, setWarning] = useState(false);

  const handleClick = (meal) => {
    // console.log(meal)
    let isPresent = false;
    cart.forEach((product) => {
      if (meal.id === product.id)
        isPresent = true;
    })
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false)
      }, 2000);
      return;
    }
    setCart([...cart, meal])
  }

  return (
    <>
      <BrowserRouter>
      {/*  size={cart.length} setShow={setShow}   */}
        <NavbarComp size={cart.length} setShow={setShow}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menus' element={<Menus />} />
          {/*  */}
          <Route path='/order' element={<Order handleClick={handleClick}  />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<Error />} />
          {/* {
            show ? <Route path='/order' element={<Order handleClick={handleClick}  />} /> : <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
          } */}
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* {
        show ? <Order handleClick={handleClick} /> : <Cart cart={cart} setCart={setCart} />
      } */}
      {warning && <div className='warning'>Item has been added already</div>}
    </>
  )
}

export default App
