
import {  Navbar, Footer} from '../components';
import styles from '../style';
import TermsOfService from '../components/TermsOfService';
import { useTheme } from '../components/ThemeContext';

const TermsPage = () => {
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
              
              <TermsOfService />
              <Footer />
            </div>
          </div>
        </div>
      );
};

export default TermsPage;
