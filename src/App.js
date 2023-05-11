import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Customers from './Components/Customers';
import AddCustomer from './Components/AddCustomer';
import Login from './Components/Login';
import About from './Components/About';
import Pricing from './Components/Pricing';

function App() {
  return (
    <div className="" style={{ height: '100vh' }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Customers />} />
          <Route path="/addcustomer" element={<AddCustomer />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/About" element={<About />} />
          <Route path="/Pricing" element={<Pricing />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
