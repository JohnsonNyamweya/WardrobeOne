import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Cart from './pages/Cart.jsx'
import Collection from './pages/Collection.jsx'
import Contact from './pages/Contact.jsx'
import Login from './pages/Login.jsx'
import Product from './pages/Product.jsx'
import Orders from './pages/Orders.jsx'
import PlaceOrder from './pages/PlaceOrder.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import SearchBar from './components/SearchBar.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Verify from './pages/Verify.jsx'

const App = () => {
  return (
    <div className='px-2 sm:px-[3vw] md:px-[5vw] lg:px-[7vw] min-h-screen bg-cyan-600'>

      <ToastContainer/> 
      <Navbar/>
      <SearchBar/>

      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/about' element = {<About/>} />
        <Route path='/contact' element = {<Contact/>} />
        <Route path='/cart' element = {<Cart/>} />
        <Route path='/product/:productId' element = {<Product/>} />
        <Route path='/orders' element = {<Orders/>} />
        <Route path='/place-order' element = {<PlaceOrder/>} />
        <Route path='/collection' element = {<Collection/>} />
        <Route path='/login' element = {<Login/>} />
        <Route path='/verify' element = {<Verify/>} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App