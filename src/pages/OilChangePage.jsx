
import { OilChangeServices, Navbar, Footer } from '../components';
import styles from '../style';
import { useTheme } from '../components/ThemeContext';

const OilChangePage = () => {
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
      <div className="bg-primary w-full">
        <OilChangeServices />
        <Footer />
      </div>
    </div>
  );
};

export default OilChangePage;
