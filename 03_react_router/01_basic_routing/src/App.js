import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './Pages/HomePage';
import ProductPage from './Pages/ProductPage';

/**createBrowserRouter function allows us to define our routes that we want in our appliation
 * To this function we pass an array of route definition objects
 */
const router = createBrowserRouter([
  {path: '/', element: <HomePage/>},
  {path: '/products', element: <ProductPage/>}
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;

// Routing - Different URL paths load different contents on the screen
/**Adding routing is a multi step process
 * 1. We must define the routes (urls) that we want to support, and the omponents which will be loaded with the urls
 * 2. Activate our router and load the route definitions
 * 3. We have the components that we want to load and also provide some means to navigate between those routes
 */
