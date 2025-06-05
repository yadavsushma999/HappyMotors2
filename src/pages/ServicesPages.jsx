import React from 'react';
import { Navbar, Footer, AllServices } from '../components';
import styles from '../style';

const ServicesPage = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      {/* Header and Navbar */}
      <div >
        <div className="w-full max-w-[1600px]"> {/* Allowing full width */}
          <Navbar />
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-primary w-full"> {/* Ensuring full width */}
        <AllServices />
        <Footer />
      </div>
    </div>
  );
};

export default ServicesPage;
