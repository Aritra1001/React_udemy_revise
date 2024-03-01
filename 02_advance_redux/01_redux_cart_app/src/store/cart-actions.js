import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

// creating a thunk to handle async tasks in redux.
export const getCartData = () => {
  return async (dispatch) => {

    const fetchData = async () => {
      const response = await fetch(
        "https://cart-b3957-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error("Cannot fetch cart data");
      }
      const data = await response.json();
      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(cartActions.replaceCart({
        items: cartData.items || [],
        totalQuantity: cartData.totalQuantity
      }));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Some error occurred",
          message: "Cart data not fetched...",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "Sending...",
        title: "Sending!",
        message: "Sending Cart Data..",
      })
    );

    const sendReq = async () => {
      const response = await fetch(
        "https://cart-b3957-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Sending Cart Data Failed");
      }
    };

    try {
      await sendReq();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Successful!",
          message: "Cart Data Sent Successfully..",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Some error occurred",
          message: "Cart data not sent...",
        })
      );
    }
  };
};
