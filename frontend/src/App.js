
import './App.css';
import Nav from './components/Nav.js';
import Footer from './components/Footer.js';
import Signup from './components/SignUp.js'
import Login from './components/Login.js'
import AddProduct from './components/AddProduct.js';
import Product from './components/Product.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateComponent from './components/PrivateComponent.js';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComponent/>}> {/* This will make components private */}
            <Route path="/" element={<Product />} />
            <Route path="/add" element={<AddProduct/>} />
            <Route path="/update" element={<h1>Update Product Component</h1>} />
            <Route path="/logout" element={<h1>Logout Component</h1>} />
            <Route path="/profile" element={<h1>Profile Component</h1>} />
          </Route>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter >
        <Footer />
    </div>
  );
}

export default App;

