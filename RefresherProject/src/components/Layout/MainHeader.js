import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';
import {cartActions} from '../../Store/index.js';
import {useDispatch} from 'react-redux';

const MainHeader = (props) => {
  const dispatch = useDispatch();
  const show = ()=>{
    
    dispatch(cartActions.setStatus())
  }
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton onClick = {show}/>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
