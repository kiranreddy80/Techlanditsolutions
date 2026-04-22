import React, { useEffect } from 'react';
import './Legal.css';

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="legal-page">
      <div className="legal-container">
        <div className="legal-header">
          <h1>Terms &amp; Conditions</h1>
          <p>The rules governing the use of our website and services</p>
        </div>

        <div className="legal-card">
          <p className="legal-updated">Last updated: January 2025</p>

          <p className="intro">
            Welcome to Techland IT Solutions. By accessing our website or engaging our services, you agree
            to the following Terms and Conditions. Please read them carefully before proceeding. If you do
            not agree with any part of these terms, kindly refrain from using our services.
          </p>

          <div className="legal-section">
            <h2>1. Definitions</h2>
            <ul>
              <li><strong>"Company," "we," "our," "us"</strong> refers to Techland IT Solutions.</li>
              <li><strong>"Client," "you," "your"</strong> refers to the individual or organization using our services.</li>
              <li><strong>"Services"</strong> includes web development, mobile app development, UI/UX design, digital marketing, custom software, and staffing solutions offered by us.</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>2. Use of Our Website</h2>
            <ul>
              <li>You agree to use the website lawfully and not engage in any activity that disrupts its operation.</li>
              <li>You will not attempt to gain unauthorized access to any part of the website, servers, or connected systems.</li>
              <li>Content on the website is for general information and may be updated without notice.</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>3. Service Agreement</h2>
            <p>
              All projects are executed based on a mutually agreed proposal, scope of work, or statement of
              work (SOW). The specific deliverables, timelines, and payment milestones will be outlined in
              that document and will govern the engagement alongside these terms.
            </p>
          </div>

          <div className="legal-section">
            <h2>4. Payments &amp; Billing</h2>
            <ul>
              <li>All fees are quoted in the agreed currency and are exclusive of applicable taxes unless stated otherwise.</li>
              <li>An advance payment is required before project commencement, as specified in the proposal.</li>
              <li>Invoices must be paid within the timelines mentioned; delayed payments may incur additional charges or pause the project.</li>
              <li>Final deliverables and source code ownership transfer only upon full payment.</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>5. Client Responsibilities</h2>
            <ul>
              <li>Provide timely, accurate, and complete information, content, and feedback required for the project.</li>
              <li>Assign a point of contact authorized to approve deliverables and sign off milestones.</li>
              <li>Ensure any content provided does not infringe on third-party rights.</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>6. Intellectual Property</h2>
            <p>
              All content on our website, including logos, designs, text, and graphics, is the property of
              Techland IT Solutions and protected under applicable intellectual property laws. For client
              projects, ownership of final deliverables transfers to the client upon full payment, except
              for our pre-existing tools, frameworks, and reusable components.
            </p>
          </div>

          <div className="legal-section">
            <h2>7. Revisions &amp; Change Requests</h2>
            <p>
              Each project includes a predefined number of revisions per the proposal. Additional change
              requests or out-of-scope work will be handled through a separate change request with its own
              timeline and cost estimate.
            </p>
          </div>

          <div className="legal-section">
            <h2>8. Confidentiality</h2>
            <p>
              Both parties agree to keep shared business, technical, and commercial information confidential
              and use it solely for the purpose of executing the project. This obligation continues even
              after the engagement ends.
            </p>
          </div>

          <div className="legal-section">
            <h2>9. Limitation of Liability</h2>
            <p>
              Techland IT Solutions shall not be liable for any indirect, incidental, or consequential
              damages arising from the use of our website or services. Our total liability, if any, shall
              be limited to the amount paid by the client for the specific service in question.
            </p>
          </div>

          <div className="legal-section">
            <h2>10. Termination</h2>
            <p>
              Either party may terminate the engagement with written notice if the other party materially
              breaches these terms and fails to remedy the breach within a reasonable period. The client
              will be billed for all work completed up to the termination date.
            </p>
          </div>

          <div className="legal-section">
            <h2>11. Governing Law</h2>
            <p>
              These terms are governed by and construed in accordance with the laws of India. Any disputes
              shall be subject to the exclusive jurisdiction of the courts of Hyderabad, Telangana.
            </p>
          </div>

          <div className="legal-section">
            <h2>12. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms and Conditions at any time. Updated terms take
              effect when posted on this page. Continued use of our services implies acceptance of the
              revised terms.
            </p>
          </div>

          <div className="legal-contact">
            <h3>Contact Us</h3>
            <p>For any questions about these Terms, please contact:</p>
            <p>Email: <a href="mailto:info@techlanditsolutions.com">info@techlanditsolutions.com</a></p>
            <p>Phone: <a href="tel:+917842385604">+91 78423 85604</a></p>
            <p>Address: Flat No. 101, Sirisampada Hitec Apartment, Kavuri Hills, Madhapur, Hyderabad, Telangana 500081</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
