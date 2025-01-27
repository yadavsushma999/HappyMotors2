// src/pages/ContactPage.jsx
import React from 'react';
import {  OilChangeServices, Navbar, Footer} from '../components';
import styles from '../style';

const OilChangePage = () => {
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
              
              <OilChangeServices />
              <Footer />
            </div>
          </div>
        </div>
      );
};

export default OilChangePage;
