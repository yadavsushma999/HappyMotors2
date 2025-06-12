import calendar3d from '../assets/3dcalendar.png';
import call1 from '../assets/call1.png';
import { useTheme } from '../components/ThemeContext';

const EmergencyCallSection = () => {
  const { darkMode } = useTheme();

  const sectionStyle = darkMode ? 'text-gray-100' : 'text-gray-800';

  const glassStyle = darkMode
    ? 'bg-white/5 backdrop-blur-md border border-white/10 shadow-lg'
    : 'bg-gradient-to-b from-white via-gray-50 to-gray-500 backdrop-blur-md border border-gray-200 shadow-xl';

  const linkStyle = darkMode
    ? 'text-blue-400 hover:underline'
    : 'text-blue-700 hover:underline';

  const bottomHalfBg = darkMode ? 'bg-gray-900' : 'bg-white';

  return (
    <div className={`relative w-full py-10 px-4 md:px-16 mb-9 ${sectionStyle}`}>
      {/* Bottom-half background */}
      <div className={`absolute inset-x-0 bottom-0 h-1/2 z-0`} />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-stretch">
        {/* Working Hours Card */}
        <div
          className={`relative rounded-2xl p-6 overflow-hidden ${glassStyle} ${bottomHalfBg} animate-fadeInUp transition-all duration-500`}
        >
          <h2 className="text-2xl font-bold mb-4">🕒 Working Hours</h2>
          <ul className="space-y-2 text-base leading-relaxed relative z-10">
            <li>📅 <strong>Weekdays:</strong> 09:00 - 19:00</li>
            <li>📅 <strong>Saturday:</strong> 09:00 - 18:00</li>
            <li>☀️ <strong>Sunday:</strong> 08:00 - 14:00</li>
          </ul>

          {/* Calendar Image */}
          <div className="absolute bottom-2 right-2 w-20 sm:w-24 md:w-28 h-auto pointer-events-none hidden sm:block">
            <img
              src={calendar3d}
              alt="3D Calendar"
              className="w-full h-auto object-contain opacity-90"
            />
          </div>
        </div>

        {/* Emergency Call Card */}
        <div
          className={`relative rounded-2xl p-6 text-center md:text-right overflow-hidden ${glassStyle} ${bottomHalfBg} animate-fadeInUp transition-all duration-500`}
        >
          <h2 className="text-2xl font-bold mb-4">📞 Emergency Call (24/7)</h2>
          <p className="text-xl">
            <a href="tel:911234567890" className={linkStyle}>
              91-123-456-7890
            </a>
          </p>
          <p className={`mt-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Always ready to assist — day or night.
          </p>

          {/* Call Image */}
          <div className="absolute bottom-2 left-2 hidden sm:block w-20 sm:w-24 md:w-28 h-auto pointer-events-none">
            <img
              src={call1}
              alt="Call Icon"
              className="w-full h-auto object-contain opacity-90"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyCallSection;
