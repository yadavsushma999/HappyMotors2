
import { useTheme } from '../components/ThemeContext'; // Import the theme context
import styles from '../style';
import { car, calendar, lightBackground } from '../assets'; // Assuming you have a light background image

const Hero = () => {
  const { darkMode } = useTheme(); // Get the darkMode value from context

  // Define the styles for light mode
  const sectionStyle = darkMode
    ? '' // Keep the existing styles in dark mode
    : 'bg-white text-black'; // Light mode background and text color

  // Conditional background image based on darkMode
  const backgroundStyle = darkMode
    ? '' // Keep existing background styles in dark mode
    : `bg-cover bg-center`  // Light mode background image styles
    ;

  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}  ${sectionStyle} ${backgroundStyle}`}
      style={{ backgroundImage: darkMode ? 'none' : `url(${lightBackground})` }} // Light mode background image
    >
      <div className={`flex-1 flex-col xl:px-0 sm:px-16 px-6 py-10`}>
        <div className="flex flex-col items-center w-full mt-4">
          <h1 className={`font-poppins font-semibold 
              ss:text-[72px] text-[52px] ${darkMode ? 'text-white' : 'text-black'} 
              ss:leading-[100px] leading-[75px] text-center`}>
            Keep Your Vehicle <br className="sm:block hidden" />
            <span className={`block ${darkMode ? 'text-gradient' : 'light-gradient'}`}>
              IN GEAR
            </span>
          </h1>
        </div>

        <p className={`${styles.paragraph} ${styles.paddingY} max-w-[520px] ${darkMode ? ' text-dimWhite' : 'text-black'}`}>
          Dependable, Trustworthy Garage Services Just A Click Away
        </p>

        <div
          className={`flex flex-row items-center justify-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 mt-2`}
        >
          <button
            className="flex items-center"
            onClick={() => window.open("https://calendar.app.google/PcAWDUwbfphUFF299", "_blank")}
          >
            <img src={calendar} alt="calendar" className="w-[32px] h-[32px] mr-2" />
            <p className={`${styles.paragraph} text-white`}>
              <span className="text-white">BOOK</span> AN{' '}
              <span className="text-white">APPOINTMENT</span>
            </p>
          </button>
        </div>

      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative flex-col`}>

        {/* Image container */}
        <div className="w-full lg:w-full h-full flex items-end relative z-[5] rounded-lg overflow-hidden">

          {/* Image */}
          <img
            src={car} // Use the imported image
            className="w-full h-full object-contain brightness-[1.2] mb-0 transform transition-transform duration-1000 ease-in-out hover:translate-x-10"
            alt="Car" // Always good practice to add an alt attribute for accessibility
          />
        </div>

        {/* Gradients */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>


      {/* 
<div className={`ss:hidden ${styles.flexCenter}`}>
  <GetStarted />
</div> 
*/}
    </section>
  );
};

export default Hero;
