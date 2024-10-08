import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

import Home from './pages/home/Home';
import Order from './pages/order/Order';
import Cart from './pages/cart/Cart';
import Dashboard from './pages/admin/dashboard/Dashboard';
import NoPage from './pages/nopage/NoPage';
import MyState from './context/data/myState';
import Login from './pages/registration/Login';
import Signup from './pages/registration/Signup';
import ProductInfo from './pages/productInfo/ProductInfo';
import AddProduct from './pages/admin/page/AddProduct';
import UpdateProduct from './pages/admin/page/UpdateProduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Allproducts from './pages/allproducts/Allproducts';

const ProtectedRoute = ({ children, isLogged }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged) {
      navigate('/signup');
    }
  }, [isLogged, navigate]);

  return isLogged ? children : null; // Render children if logged in
};

function App() {
  const [isLogged, setIsLogged] = useState(localStorage.getItem("isLogged") === "true");

  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allproducts" element={<Allproducts isLogged = {isLogged} />} />
          <Route path="/order" element={<Order />} />
          <Route path="/cart" element={
            <ProtectedRoute isLogged={isLogged}>
              <Cart />
            </ProtectedRoute>
          } />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup setIsLogged = {setIsLogged} />} />
          <Route path='/productinfo/:id' element={<ProductInfo isLogged = {isLogged} />} />
          <Route path='/addproduct' element={<AddProduct />} />
          <Route path='/updateproduct' element={<UpdateProduct />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
        <ToastContainer />
      </Router>
    </MyState>
  );
}

export default App;
