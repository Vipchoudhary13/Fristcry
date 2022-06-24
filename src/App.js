import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Home } from './components/home/Home';
import { Signup } from './components/signup/Signup';
import { Signin } from './components/signin/Signin';
import { Route, Routes } from 'react-router-dom';
import { Fashion } from './components/fashion/Fashion';
import { Product } from './components/product/Product';
import { Cart } from './components/cart/Cart';
import { Address } from './components/address/Address';
import { Payment } from './components/payment/Payment';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/fashion' element={<Fashion />}></Route>
        <Route path='/signin' element={<Signin />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/product' element={<Product />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/address' element={<Address />}></Route>
        <Route path='/payment' element={<Payment />}></Route>
      </Routes>

      {/* <Payment /> */}
    </div>
  );
}

export default App;
