import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "./store/ui-slice";
import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: "Sending...",
          title: "Sending!",
          message: "Sending Cart Data..",
        })
      );
      const response = await fetch(
        "https://cart-b3957-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Sending Cart Data Failed");
      }

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Successful!",
          message: "Cart Data Sent Successfully..",
        })
      );
    };

    if(isInitial){
      isInitial = false;
      return;
    }

    sendCartData().catch((err) => {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Some error occurred",
          message: "Cart data not sent...",
        })
      );
    });
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;

// Where to put our logic for side effects/ backend code?
// Fat reducers vs Fat components vs Fat Actions.

/** Synchronous code/ code without side effcts/ data transformations - Inside reducers,
 * Avoid action creators or components */

/** Async code/ code with side effects - Inside components or action creators
 * Never use reducers */

/** Now to sync our new state with the server/ update the server from the frontend with the new state that we derived,
 * we must follow these steps
 * 1. We can first do the data transformation work on the frontend in the reducer and let redux update its store.
 * 2. We send the request to the server from the component ProductItem.js file or App.js file.
 */
