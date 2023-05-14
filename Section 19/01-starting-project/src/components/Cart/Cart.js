import { useSelector } from 'react-redux';

import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const cartPrice = useSelector(state => state.cart.totalCartPrice);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map(product => (
          <CartItem
            key={product.id}
            item={{ title: product.product, quantity: product.quantity, total: product.totalPrice, price: product.price, id: product.id }}
          />
        ))}
      </ul>
      <div className={classes.totalPrice}>
        <span>
          {`Total cart price: $${cartPrice}`}
        </span>
      </div>
    </Card>
  );
};

export default Cart;
