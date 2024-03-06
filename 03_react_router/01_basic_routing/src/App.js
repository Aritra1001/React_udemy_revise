import logo from "./logo.svg";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";
import RootLayout from "./Pages/Root";
import ErrorPage from "./Pages/ErrorPage";

/**createBrowserRouter function allows us to define our routes that we want in our appliation
 * To this function we pass an array of route definition objects
 */

// Another way of defining routes using the jsx
// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<HomePage/>}/>
//     <Route path='/products' element={<ProductPage/>}/>
//   </Route>
// )

// const router = createBrowserRouter(routeDefinitions);

const router = createBrowserRouter([
  /**
   * By defining the routes like this we make the routes as child routes of the main route
   * The RootLayout component also acts like a wrapper to these routes
   */
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage/>,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// Routing - Different URL paths load different contents on the screen
/**Adding routing is a multi step process
 * 1. We must define the routes (urls) that we want to support, and the omponents which will be loaded with the urls
 * 2. Activate our router and load the route definitions
 * 3. We have the components that we want to load and also provide some means to navigate between those routes
 */
