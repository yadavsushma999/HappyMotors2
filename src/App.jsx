import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router, Route, Routes
import { ThemeProvider } from './components/ThemeContext';  // Import ThemeProvider
import HomePage from './pages/HomePage';  // Import HomePage
import ContactPage from './pages/ContactPage'; 
import ServicesPage from './pages/ServicesPages';
import FAQPage from './pages/FAQPage';
import PrivacyPage from './pages/PrivacyPage';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; // Import slick carousel styles


const App = () => {
  const isProduction = process.env.NODE_ENV === 'production';

  return (
    <ThemeProvider>
      <Router basename={isProduction ? "/HappyMotors2" : "/HappyMotors2"}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
