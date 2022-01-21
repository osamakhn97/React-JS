import {Fragment} from 'react';
import {useSelector } from 'react-redux';
import Counter from './components/Counter';
import Auth from './components/Auth.js';
import Header from './components/Header.js';

import UserProfile from './components/UserProfile.js';
// import { authActions } from './store/index.js';

function App() {
  const authState = useSelector(state=>state.auths.isAuthenticated);
  console.log(authState);
  return (
<Fragment>
    <Header/>
    {!authState && <Auth /> }
    {authState && <UserProfile/>}
    <Counter />
</Fragment>    
  );
}

export default App;
