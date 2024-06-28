import './App.css';
import Nav from './components/Nav.js';
import Footer from './components/Footer.js';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Register from './components/SignUp.js';
import PrivateComponent from './components/PrivateComponent.js'

function App() {
  return (

    <div className="App">
        <BrowserRouter>
        <Nav/>
        <Routes>

          <Route element={<PrivateComponent />} />

          <Route path="/" element={ <h1>Home Component!</h1> } />
          <Route path="/products" element={ <h1>Products Component!</h1> } />
          <Route path="/about" element={ <h1>About Component!</h1> } />
          <Route path="/contact" element={ <h1>Contact Component!</h1> } />
          <Route path="/login" element={ <h1>Login Component!</h1> } />
          <Route path="/register" element={ <Register /> } />
        </Routes>
        <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
