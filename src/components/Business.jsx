
import { features } from '../constants';
import styles, { layout } from '../style';
import { useTheme } from './ThemeContext'; // Import the custom hook to use theme

const FeatureCard = ({ icon, title, content, index }) => {
  const { darkMode } = useTheme(); // Access the darkMode state from the ThemeContext

  return (
    <div
      className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card ${darkMode ? 'dark-mode' : 'light-mode'
        }`}
    >
      <div
        className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} ${darkMode ? 'bg-dimBlue' : 'bg-lightBlue'
          }`}
      >
        <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
      </div>

      <div className="flex-1 flex flex-col ml-3">
        <h4
          className={`font-poppins font-semibold text-[18px] leading-[23px] mb-1 ${darkMode ? 'text-white' : 'text-gray-800'
            }`}
        >
          {title}
        </h4>
        <p
          className={`font-poppins font-normal text-[16px] leading-[24px] mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
        >
          {content}
        </p>
      </div>
    </div>
  );
};

const Business = () => {
  const { darkMode } = useTheme(); // Access darkMode and toggleTheme

  return (
    <section
      id="features"
      className={`${darkMode ? '' : 'bg-gray-100 mt-2' // Light grey background in light mode
        } ${layout.section}`}
    >
      <div className={layout.sectionInfo}>
        <h2
          className={`${darkMode ? 'text-white' : 'text-gray-700'
            } ${styles.heading2} text-center`}
        >
          One Stop Shop For All Auto Repairs
        </h2>


        <p
          className={`${darkMode ? 'text-gray-300' : 'text-gray-700'
            } ${styles.paragraph} max-w-[470px] mt-5 text-center mx-auto`}
        >
          We understand the value your car holds for you.
        </p>
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
