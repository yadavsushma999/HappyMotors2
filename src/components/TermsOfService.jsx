// src/pages/TermsOfServicePage.jsx
import React from 'react';
import { useTheme } from '../components/ThemeContext'; // Import the theme context to check dark mode
import styles from '../style'; // Import global styles

const TermsOfService = () => {
  const { darkMode } = useTheme(); // Access darkMode state from ThemeContext

  return (
    <section
      className={`${
        darkMode ? ' text-white' : 'bg-white text-gray-900'
      } ${styles.paddingY} p-6`}
    >
      <div className="container mx-auto max-w-5xl px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold mb-4">Terms of Service</h1>
          <p className="text-lg text-white dark:text-gray-400">
            Effective Date: January 5, 2025
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p>
              Welcome to Happy Motors. By accessing or using our website, you agree to comply with these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our website.
            </p>
          </section>

          {/* Use of Website */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Use of Website</h2>
            <p>
              This website is provided for informational purposes only. You may browse the content to learn about our services, contact us, or book an appointment through the provided contact methods. You agree not to:
            </p>
            <ul className="list-disc pl-6">
              <li>Use the website for any unlawful purposes.</li>
              <li>Attempt to gain unauthorized access to our systems or data.</li>
              <li>Engage in activities that disrupt or interfere with the proper functioning of the website.</li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
            <p>
              All content on this website, including text, images, logos, and graphics, is the property of Happy Motors and is protected by copyright and trademark laws. You may not copy, distribute, or modify our content without prior written consent.
            </p>
          </section>

          {/* Third-Party Links */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Third-Party Links</h2>
            <p>
              Our website may include links to third-party websites for your convenience. Happy Motors is not responsible for the content, privacy practices, or policies of these third-party sites. Access them at your own risk.
            </p>
          </section>

          {/* Disclaimer of Warranties */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Disclaimer of Warranties</h2>
            <p>
              Our website and its content are provided "as is" without any warranties of any kind, either express or implied. While we strive to ensure accuracy, we do not guarantee that the content is free from errors or omissions.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
            <p>
              Happy Motors will not be liable for any direct, indirect, incidental, or consequential damages arising from your use of the website or reliance on its content.
            </p>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. Any changes will be posted on this page with an updated effective date. Your continued use of the website constitutes your acceptance of the revised Terms.
            </p>
          </section>

          {/* Contact Us */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p>
              If you have questions about these Terms of Service, please contact us at:
            </p>
            <p className="mt-2">
              <strong>Happy Motors</strong>
              <br />
              Email: <a href="mailto:info@happymotors.com" className="text-blue-600 dark:text-blue-400 underline">info@happymotors.com</a>
              <br />
              Phone: +1234567890
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default TermsOfService;
