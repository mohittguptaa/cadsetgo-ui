import React from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import FourOFour from './Pages/FourOFour';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

function App() {
  return (
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="*" element={<FourOFour/>} />
        </Routes>
        <Footer/>
      </Router>
  );
}

export default App;
