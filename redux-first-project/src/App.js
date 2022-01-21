import {Fragment} from 'react';
import Counter from './components/Counter';
import Auth from './components/Auth.js';
import Header from './components/Header.js';


function App() {
  return (
<Fragment>
    <Header/>
    <Auth/>
    <Counter />
</Fragment>    
  );
}

export default App;
