import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import FourOFour from './Pages/FourOFour';
import Navbar from './component/Common/Navbar';
import Footer from './component/Common/Footer';
import LoadingScreen from './component/Common/LoadingScreen';

function App() {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // 1.2 sec ke baad loading hat jaye
      const timer = setTimeout(() => setLoading(false), 1500);
      return () => clearTimeout(timer);
    }, []);
  
    if (loading) return <LoadingScreen />;
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
