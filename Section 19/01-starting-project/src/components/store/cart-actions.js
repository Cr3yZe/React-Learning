import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.setNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!'
      }));

    const sendRequest = async () => {
      const response = await fetch('https://reduxcart-2894d-default-rtdb.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        });

      if (!response.ok) {
        throw new Error('Something went wrond');
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.setNotification({
          status: 'success',
          title: 'Success',
          message: 'Send cart data successfully!'
        }));
    } catch (error) {
      dispatch(
        uiActions.setNotification({
          status: 'error',
          title: 'Error',
          message: 'Sending cart data failed!'
        }));
    }
  }
};

export const getCartData = () => {
  return async (dispatch) => {
    const getData = async () => {
      const response = await fetch('https://reduxcart-2894d-default-rtdb.firebaseio.com/cart.json');
      const responseData = await response.json();

      if (!responseData) {
        return;
      }

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      return responseData;
    }

    try {
      const cartData = await getData();

      dispatch(cartActions.updateCart({ cartData }))
    } catch (error) {
      dispatch(
        uiActions.setNotification({
          status: 'error',
          title: 'Error',
          message: 'Could not get the data'
        }));
    }
  };
}