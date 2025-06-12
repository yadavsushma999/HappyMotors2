
import {EngineDiagnostics, Navbar, Footer} from '../components';
import styles from '../style';
import { useTheme } from '../components/ThemeContext'; 


const EnginePage = () => {
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
          <div className={`${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              
              <EngineDiagnostics />
              <Footer />
            </div>
          </div>
        </div>
      );
};

export default EnginePage;
