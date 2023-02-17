import React from 'react';

//router
import { 
  Route,
  Routes
} from 'react-router-dom';

//style
import './app.css';

//Pages
import Search from './pages/main/search/Search';
import Products from './pages/main/products/Products';
import Cart from './pages/cart/Cart';
import ProductDetails from './pages/product-details/ProductDetails';

const App = () => {
  return (
      <Routes>
         <Route path='/' element={<Search />}>
             <Route index element={<Products />}></Route>
             <Route path='cart' element={<Cart />}></Route>
             <Route path=':id' element={<ProductDetails />}></Route>
         </Route>
      </Routes>
  );
};

export default App;