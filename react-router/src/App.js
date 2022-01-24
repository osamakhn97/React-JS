import {Route, Switch, Redirect} from 'react-router-dom';
import Welcome from './pages/welcome.js';
import Products from './pages/products.js';
import Header from './components/header.js';
import ProductDetail from './pages/productDetails.js';
function App() {
  return (
    <div>
      <Header/>
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome"/>
          </Route>
      <Route path="/welcome">
        <Welcome/>
      </Route>
      <Route path="/products" exact>
        <Products/>
      </Route>
      <Route path="/products/:pid">
        <ProductDetail/>
      </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
