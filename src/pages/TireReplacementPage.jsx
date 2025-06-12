
import {  TireReplacement, Navbar, Footer, } from '../components';
import styles from '../style';
import { useTheme } from '../components/ThemeContext';

const TireReplacementPage = () => {
  const { darkMode } = useTheme();
    return (
         <div className={`${darkMode ? 'bg-primary' : 'bg-[#F5F8FF]'} w-full overflow-hidden`}>
          {/* Header and Navbar */}
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Navbar />
            </div>
          </div>
    
          {/* Main Content */}
          <div className={`${darkMode ? 'bg-primary' : 'bg-[#F5F8FF]'} ${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              
              <TireReplacement />
              <Footer />
            </div>
          </div>
        </div>
      );
};

export default TireReplacementPage;
