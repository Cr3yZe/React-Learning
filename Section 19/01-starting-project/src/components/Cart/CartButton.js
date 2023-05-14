import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../store/ui-slice';

import classes from './CartButton.module.css';

const CartButton = () => {
  const cartItems = useSelector(state => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const cartButtonHandler = () => {
    dispatch(uiActions.cartToggle())
  };

  return (
    <button onClick={cartButtonHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItems}</span>
    </button>
  );
};

export default CartButton;
