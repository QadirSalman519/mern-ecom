
import './App.css';
import Nav from './components/Nav.js';
import Footer from './components/Footer.js';
import Signup from './components/SignUp.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateComponent from './components/PrivateComponent.js';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComponent/>}> {/* This will make components private */}
            <Route path="/" element={<h1>Product Listing Component</h1>} />
            <Route path="/add" element={<h1>Add Product Component</h1>} />
            <Route path="/update" element={<h1>Update Product Component</h1>} />
            <Route path="/logout" element={<h1>Logout Component</h1>} />
            <Route path="/profile" element={<h1>Profile Component</h1>} />
          </Route>
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </BrowserRouter >
        <Footer />
    </div>
  );
}

export default App;

