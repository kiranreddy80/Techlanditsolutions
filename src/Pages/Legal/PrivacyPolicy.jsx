import React, { useEffect } from 'react';
import './Legal.css';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="legal-page">
      <div className="legal-container">
        <div className="legal-header">
          <h1>Privacy Policy</h1>
          <p>How Techland IT Solutions collects, uses, and protects your information</p>
        </div>

        <div className="legal-card">
          <p className="legal-updated">Last updated: January 2025</p>

          <p className="intro">
            At Techland IT Solutions, we respect your privacy and are committed to protecting the
            personal data you share with us. This Privacy Policy explains what information we collect,
            how we use it, and the choices you have regarding your data when you visit our website or
            engage our services.
          </p>

          <div className="legal-section">
            <h2>1. Information We Collect</h2>
            <ul>
              <li><strong>Personal Information:</strong> Name, email address, phone number, and company details shared through contact or inquiry forms.</li>
              <li><strong>Project Information:</strong> Requirements, specifications, and documents you share while discussing a project.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, device information, and pages visited, collected automatically through cookies and analytics tools.</li>
              <li><strong>Communication Records:</strong> Emails, chat messages, and call logs exchanged during business interactions.</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>2. How We Use Your Information</h2>
            <ul>
              <li>To respond to inquiries and provide quotations for our services.</li>
              <li>To deliver, maintain, and improve the products and services you have engaged us for.</li>
              <li>To send project updates, invoices, and service-related notifications.</li>
              <li>To analyze website traffic and improve user experience.</li>
              <li>To comply with legal obligations and enforce our agreements.</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>3. Cookies and Tracking Technologies</h2>
            <p>
              Our website uses cookies and similar technologies to remember your preferences, understand
              how visitors use the site, and improve overall performance. You can control cookies through
              your browser settings, though disabling them may affect some features.
            </p>
          </div>

          <div className="legal-section">
            <h2>4. Sharing of Information</h2>
            <p>
              We do not sell, rent, or trade your personal information. We may share data only with:
            </p>
            <ul>
              <li>Trusted service providers who support our operations under strict confidentiality agreements.</li>
              <li>Regulatory authorities when required by law or to protect our legal rights.</li>
              <li>Clients, only in the context of delivering the specific project they have engaged us for.</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>5. Data Security</h2>
            <p>
              We implement reasonable administrative, technical, and physical safeguards to protect your
              information against unauthorized access, alteration, disclosure, or destruction. However, no
              method of transmission over the internet is 100% secure.
            </p>
          </div>

          <div className="legal-section">
            <h2>6. Data Retention</h2>
            <p>
              We retain personal information only for as long as necessary to fulfill the purposes outlined
              in this policy, meet legal requirements, resolve disputes, and enforce our agreements.
            </p>
          </div>

          <div className="legal-section">
            <h2>7. Your Rights</h2>
            <ul>
              <li>Request access to the personal data we hold about you.</li>
              <li>Request correction or deletion of inaccurate or outdated data.</li>
              <li>Withdraw consent for marketing communications at any time.</li>
              <li>Request a copy of your data in a portable format.</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>8. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy
              practices or content of those sites. We encourage you to review their policies separately.
            </p>
          </div>

          <div className="legal-section">
            <h2>9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically to reflect changes in our practices or legal
              requirements. Updates will be posted on this page with a revised "Last updated" date.
            </p>
          </div>

          <div className="legal-contact">
            <h3>Contact Us</h3>
            <p>If you have any questions regarding this Privacy Policy, please reach out:</p>
            <p>Email: <a href="mailto:info@techlanditsolutions.com">info@techlanditsolutions.com</a></p>
            <p>Phone: <a href="tel:+917842385604">+91 78423 85604</a></p>
            <p>Address: Flat No. 101, Sirisampada Hitec Apartment, Kavuri Hills, Madhapur, Hyderabad, Telangana 500081</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
