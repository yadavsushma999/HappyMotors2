import React from 'react'
import styles from '../style';
import { discount, robot, carvideo } from '../assets';
import GetStarted from './GetStarted';

const Hero = () => (
  <section id="home" className={`flex md:flex-row 
    flex-col ${styles.paddingY} mr-[50px]`}>
    <div className={`flex-1  flex-col
      xl:px-0 sm:px-16 px-6`}>


      <div className="flex flex-col items-center w-full mt-4">
        <h1
          className="font-poppins font-semibold 
      ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px] text-center"
        >
          Keep Your Vehicle <br className="sm:block hidden" />{" "}
          <span className="text-gradient block">
            IN GEAR
          </span>


        </h1>
      </div>

      <p className={`${styles.paragraph} ${styles.paddingY} max-w-[520px] `}>
        Dependable, Trustworthy Garage Services Just A Click Away
      </p>

      <div className={`flex flex-row items-center
         py-[6px]  px-4 bg-discount-gradient rounded-[10px]
         mb-2 mt-2`}>
        <img src={discount} alt='discount'
          className="w-[32px] h-[32px]" />

        <p className={`${styles.paragraph}  ml-2`}>
          <span className="text-white">20%</span> DISCOUNT FOR {''}
          <span className="text-white">1 MONTH</span> <span className="text-white">ACCOUNT</span>
        </p>
      </div>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      {/* Video Player */}
      <div className="w-[80%] h-[100%] relative z-[5] rounded-lg overflow-hidden">
        <video
          src={carvideo} // Use the imported video
          autoPlay
          muted          // Optional: to prevent autoplay from being blocked by some browsers
          loop           // Optional: to make the video loop continuously
          className="w-full h-full object-cover"  // Ensure video fills the container properly
        >
          Your browser does not support the video tag.
        </video>
      </div>



      {/* Gradients */}
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>


    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />

    </div>
  </section>
)


export default Hero