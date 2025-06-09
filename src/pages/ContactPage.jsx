// src/pages/ContactPage.jsx

import { ContactForm, Navbar, Footer } from '../components';
import styles from '../style';
import { useTheme } from '../components/ThemeContext';

const ContactPage = () => {
  const { darkMode } = useTheme();

  return (
    <div className={`${darkMode ? 'bg-primary' : 'bg-[#f0f4f9]'} w-full overflow-hidden`}>
      {/* Header and Navbar */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* Main Content */}
      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <ContactForm />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
