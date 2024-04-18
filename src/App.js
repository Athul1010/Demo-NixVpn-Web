import logo from './logo.svg';
import './App.css';


import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import About from './component/About';
import Linux_Client_Configuration from './component/Linux_Client_Configuration';
import MacOs_Client_Configuration from './component/MacOs_Client_Configuration';
import Windows_Client_Configuration from './component/Windows_Client_Configuration';
import ContactUs1 from './component/ContactUs1';
import HomePage from './component/HomePage';
import Navbar from './component/Navbar'
import Footer from './component/Footer';


function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/about-us/' element={<About />} />
            <Route path='/linux-client-configuration/' element={<Linux_Client_Configuration />} />
            <Route path='/macos-client-configurations/' element={<MacOs_Client_Configuration />} />
            <Route path='/windows-client-setup-configuration/' element={<Windows_Client_Configuration />} />
            <Route path='/contact-us/' element={<ContactUs1 />} />
          </Routes>
          <Footer />
        </BrowserRouter>

      </div>
    </div>
  );
}

export default App;
