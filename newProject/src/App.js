import React , {Fragment,useState} from 'react';
import Header from './components/Layout/Header/Header.js';
import Meals from './components/Meals/Meals.js';
import Cart from './components/Cart/Cart.js';
function App() {
  const [showModal,setStatus] = useState(false);

  const showModalHandler = ()=>{
    setStatus(true)
  }
  const hideModalHandler = ()=>{
    setStatus(false)
  }
  
  return (
    <Fragment>
      {showModal && <Cart onAct={hideModalHandler}/>}
      
      <Header onAct={showModalHandler}/>
      <main>
        <Meals/>
      </main>
    </Fragment>  
    
  );
}

export default App;
