
import { useTheme } from '../components/ThemeContext'; // Import the theme context to check dark mode
import styles from '../style'; // Import any global styles

const PrivacyPolicy = () => {
  const { darkMode } = useTheme(); // Access darkMode state from ThemeContext

  return (
    <section
      className={`${
        darkMode ? ' text-white' : 'bg-white text-gray-900'
      } ${styles.paddingY} p-6`}
    >
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold mb-4 text-center mt-8">Privacy Policy</h1>

        <p className="mb-4 text-center">
          <strong>Effective Date:</strong> January 5, 2025
        </p>

        <p className="mb-4 mt-11">
          At <strong>HAPPY MOTORS</strong>, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your personal data when you visit our website or use our services.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Information We Collect</h2>
        <p className="mb-4">
          We collect personal information such as your name, email address, phone number, and service details when you interact with us. We may also collect usage data like your IP address and browsing behavior on our website.
        </p>

        <h2 className="text-2xl font-semibold mt-6">How We Use Your Information</h2>
        <p className="mb-4">
          Your information helps us provide and improve our services, communicate with you about your requests, and send promotional offers (with your consent). We may also use it for internal purposes, such as improving our website.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Data Security</h2>
        <p className="mb-4">
          We take reasonable steps to protect your personal data using encryption and other security measures. However, no data transmission or storage system is completely secure.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Sharing Your Information</h2>
        <p className="mb-4">
          We do not sell or rent your personal information to third parties. We may share it with trusted service providers who assist us in running our business (e.g., payment processors, customer support). We may also disclose your data if required by law.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Cookies</h2>
        <p className="mb-4">
          We use cookies to enhance your experience on our website. You can control cookie settings through your browser.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Your Rights</h2>
        <p className="mb-4">
          You have the right to access, update, or delete your personal data. You can also opt out of marketing communications at any time.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Changes to This Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy or need assistance, please contact us at:
        </p>
        <p>
          <strong>Happy Motors</strong><br />
          Email: <a href="mailto:info@happymotors.com">info@happymotors.com</a><br />
          Phone: +1234567890
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
