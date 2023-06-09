import { useDispatch } from 'react-redux';

import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { cartActions } from '../store/cart-slice';

const ProductItem = props => {
  const { title, price, description, id} = props;

  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(cartActions.addItem(props));
  };

  return (
    <Card className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>${price.toFixed(2)}</div>
      </header>
      <p>{description}</p>
      <div className={classes.actions}>
        <button onClick={addItemHandler}>Add to Cart</button>
      </div>
    </Card>
  );
};

export default ProductItem;
