import { Services, Testinomial, ContactForm, Navbar, WhyUs, Hero, Stats, Business, Footer, EmergencyCallSection } from '../components';
import styles from '../style';
import ScrollReveal from '../components/ScrollReveal';
import { useTheme } from '../components/ThemeContext';


const HomePage = () => {
  const { darkMode } = useTheme();
  return (
    <div className={`${darkMode ? 'bg-primary' : 'bg-white'} w-full overflow-hidden scroll-smooth`}>
      {/* Header and Navbar */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* Hero Section */}
      <div className={`${darkMode ? 'bg-primary' : 'bg-white'} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <ScrollReveal delay={0.2}><Hero /></ScrollReveal>
        </div>
      </div>

      {/* Main Content with animations */}
      <div className={`${darkMode ? 'bg-primary' : 'bg-white'} ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <EmergencyCallSection />
          <Services />
          <Business />
          <WhyUs />
          <Testinomial />
          <ContactForm />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
