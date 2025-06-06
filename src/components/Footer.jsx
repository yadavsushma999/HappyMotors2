
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { useTheme } from '../components/ThemeContext'; // Import the custom hook
import { Link } from 'react-router-dom';

const Footer = () => {
  const { darkMode } = useTheme(); // Use darkMode from the ThemeContext

  return (
    <footer
      className={`py-16 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Title and Theme Toggle */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold">Happy Motors</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {/* Column 1: About AutoGarage */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Happy Motors</h3>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              We are your trusted partner for all car repair and maintenance services. Our certified
              mechanics are here to ensure your vehicle runs smoothly.
            </p>
            <div className="flex space-x-6">
              <a href="https://www.facebook.com/" className="text-blue-600 hover:text-blue-500">
                <FaFacebook size={20} />
              </a>
              <a href="https://www.instagram.com/" className="text-pink-600 hover:text-pink-500">
                <FaInstagram size={20} />
              </a>
              <a href="https://www.twitter.com/" className="text-blue-400 hover:text-blue-300">
                <FaTwitter size={20} />
              </a>
              <a href="https://www.linkedin.com/" className="text-blue-700 hover:text-blue-600">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Our Services</h3>
            <ul className="space-y-2">
              <li>
              <Link to="/engine-diagnostics" className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} hover:text-blue-500`}>
        Engine Repair
      </Link>
              </li>
              <li>
              <Link to="/oil-change" className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} hover:text-blue-500`}>
          Oil Change
      </Link>
              </li>
              <li>
              <Link to="/brake-service" className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} hover:text-blue-500`}>
        Brake Service
      </Link>
              </li>
              <li>
              <Link to="/tire-service" className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} hover:text-blue-500`}>
        Tire Replacement
      </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
            <Link to="/contact" className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} hover:text-blue-500`}>
        Contact Us
      </Link>
              <li>
              <Link to="/faq" className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} hover:text-blue-500`}>
       FAQ
      </Link>
              </li>
              <li>
              <Link to="/privacy" className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} hover:text-blue-500`}>
       Privacy Policy
      </Link>
              </li>
              <li>
              <Link to="/terms" className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} hover:text-blue-500`}>
      Terms Of Service
      </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Location & Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Find Us</h3>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            B/H M Cube- 2nd , National Highway No. 48, Salvav, Vapi - 396191
            </p>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>(91) 7779026788</p>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            happymotorsvapi@gmail.com</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={`border-t mt-8 pt-4 ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <p className={`text-center text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            &copy; 2025 AutoGarage. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
