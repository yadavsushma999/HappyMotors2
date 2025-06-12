import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeContext';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPages';
import FAQPage from './pages/FAQPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import EnginePage from './pages/EnginePage';
import OilChangePage from './pages/OilChangePage';
import BrakePage from './pages/BrakePage';
import TireReplacementPage from './pages/TireReplacementPage';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  // Comment or adjust this if not deploying to GitHub Pages
  const isProduction = process.env.NODE_ENV === 'production';

  return (
    <ThemeProvider>
      <Router >
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/all-services" element={<ServicesPage />} />
          <Route path="/engine-diagnostics" element={<EnginePage />} />
          <Route path="/oil-change" element={<OilChangePage />} />
          <Route path="/brake-service" element={<BrakePage />} />
          <Route path="/tire-service" element={<TireReplacementPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
