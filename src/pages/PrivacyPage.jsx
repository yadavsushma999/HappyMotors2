// src/pages/ContactPage.jsx
import {  Navbar, Footer} from '../components';
import styles from '../style';
import PrivacyPolicy from '../components/Privacypolicy';
import { useTheme } from '../components/ThemeContext';

const PrivacyPage = () => {
  const { darkMode } = useTheme();
    return (
        <div className={`${darkMode ? 'bg-primary' : 'bg-white'} w-full overflow-hidden`}>
          {/* Header and Navbar */}
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Navbar />
            </div>
          </div>
    
          {/* Main Content */}
          <div className={`${darkMode ? 'bg-primary' : 'bg-white'} ${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              
              <PrivacyPolicy />
              <Footer />
            </div>
          </div>
        </div>
      );
};

export default PrivacyPage;
