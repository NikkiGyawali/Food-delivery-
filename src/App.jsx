import { Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import Footer from './Components/Footer/Footer';
import { useState } from 'react';
import LoginPopup from './Components/LogInPopup/LoginPopup';

const App = () => {

  const[showLogin,setShowLogin]=useState(false)
  return (
    <>
    {showLogin? <LoginPopup setShowLogin ={setShowLogin} />:<></>}
   <div className='app'>
    <Navbar setShowLogin ={setShowLogin}/>
     {/* <section id="menu"> ... </section>
     <section id="mobile-app"> ... </section>
     <section id="contact-us"> ... </section> */}
    
    <Routes>
      <Route path='/' element={ <Home />} />
      <Route path='/cart' element={ <Cart />} />
      <Route path='/order' element={ <PlaceOrder />} />
    </Routes>
   </div>
    <Footer/>
    </>
  )
}

export default App;
