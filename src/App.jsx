import React, { useEffect } from 'react';
import styles from './style';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Services, Testimonial, ContactForm, Navbar, WhyUs, Hero, Stats, Business, Footer } from './components';
import { ThemeProvider } from './components/ThemeContext';  // Import ThemeProvider
const App = () => {

  return (
    <ThemeProvider>
      <div className={`bg-primary w-full overflow-hidden`}>
        {/* paddingX: "sm:px-16 px-6", flexCenter: "flex justify-center items-center",*/}
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          {/* boxWidth: "xl:max-w-[1280px] w-full" */}
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        {/* paddingX: "sm:px-16 px-6", flexStart: "flex justify-center items-start",*/}
        <div className={`bg-primary ${styles.flexStart}`}>
          {/* boxWidth: "xl:max-w-[1280px] w-full" */}
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>

        {/* paddingX: "sm:px-16 px-6", flexEnd: "flex justify-center items-end",*/}
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          {/* boxWidth: "xl:max-w-[1280px] w-full" */}
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <Services />
            <Business />
            <WhyUs />
            <Testimonial />
            <ContactForm />

            <Footer />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
