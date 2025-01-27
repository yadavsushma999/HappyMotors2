// src/pages/ContactPage.jsx
import React from 'react';
import {  Navbar, Footer, AllServices} from '../components';
import styles from '../style';

const ServicesPage = () => {
    return (
        <div className="bg-primary w-full overflow-hidden">
          {/* Header and Navbar */}
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Navbar />
            </div>
          </div>
    
          {/* Main Content */}
          <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              
              <AllServices />
              <Footer />
            </div>
          </div>
        </div>
      );
};

export default ServicesPage;
