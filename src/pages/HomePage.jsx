// src/pages/HomePage.jsx
import React from 'react';
import { Services, Testinomial, ContactForm, Navbar, WhyUs, Hero, Stats, Business, Footer} from '../components';
import styles from '../style';

const HomePage = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      {/* Header and Navbar */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* Hero Section */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      {/* Main Content */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Services />
          <Business />
          <WhyUs />
          <Testinomial/>
          <ContactForm />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
