import React , {useState} from 'react';
import Header from './components/Layout/Header/Header.js';
import Meals from './components/Meals/Meals.js';
import Cart from './components/Cart/Cart.js';
import CartProvider from './Store/CartProvider.js';
function App() {
  const [showModal,setStatus] = useState(false);

  const showModalHandler = ()=>{
    setStatus(true)
  }
  const hideModalHandler = ()=>{
    setStatus(false)
  }
  
  return (
    <CartProvider>
      {showModal && <Cart onAct={hideModalHandler}/>}
      
      <Header onAct={showModalHandler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>  
    
  );
}

export default App;
