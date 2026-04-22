import React, { useEffect } from 'react';
import './Legal.css';

const RefundPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="legal-page">
      <div className="legal-container">
        <div className="legal-header">
          <h1>Refund Policy</h1>
          <p>Our approach to cancellations, refunds, and dispute resolution</p>
        </div>

        <div className="legal-card">
          <p className="legal-updated">Last updated: January 2025</p>

          <p className="intro">
            At Techland IT Solutions, client satisfaction is at the core of everything we do. Because our
            services involve custom design, development, and ongoing effort from our team, refund eligibility
            is governed by the stage of the project and the nature of the work performed. This policy
            outlines when and how refunds are processed.
          </p>

          <div className="legal-section">
            <h2>1. Scope</h2>
            <p>
              This Refund Policy applies to all services purchased from Techland IT Solutions, including
              web development, mobile app development, UI/UX design, digital marketing, custom software,
              and staffing solutions.
            </p>
          </div>

          <div className="legal-section">
            <h2>2. Advance Payments</h2>
            <p>
              An advance payment is required to initiate any project. This advance covers resource
              allocation, planning, discovery, and initial design effort. Advances become non-refundable
              once work has commenced.
            </p>
          </div>

          <div className="legal-section">
            <h2>3. Refund Eligibility</h2>
            <ul>
              <li><strong>Before work begins:</strong> If a cancellation request is raised before any work has started, you may receive a refund of the advance amount minus a small administrative fee.</li>
              <li><strong>During discovery or design phase:</strong> A partial refund may be issued after deducting charges for the time, resources, and deliverables already produced.</li>
              <li><strong>During development:</strong> Refunds are not available once development has begun. However, you will receive all deliverables completed up to that point.</li>
              <li><strong>After delivery:</strong> No refunds are issued once the final deliverables have been handed over and accepted.</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>4. Non-Refundable Services</h2>
            <ul>
              <li>Domain registration, hosting, third-party licenses, and any fees paid to external vendors.</li>
              <li>Digital marketing ad spend and campaign budgets paid to platforms like Google, Meta, or LinkedIn.</li>
              <li>Completed milestones that have been formally approved or signed off by the client.</li>
              <li>Consulting, strategy, or training sessions that have already been delivered.</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>5. Grounds for Refund Request</h2>
            <p>You may request a refund under the following conditions:</p>
            <ul>
              <li>The service was not delivered within the agreed timeline due to reasons solely attributable to us.</li>
              <li>Significant defects in deliverables that we are unable to remedy within a reasonable period.</li>
              <li>A mutually agreed cancellation where work has not progressed beyond the initial stage.</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>6. How to Request a Refund</h2>
            <ul>
              <li>Send a written request to <a href="mailto:info@techlanditsolutions.com">info@techlanditsolutions.com</a> from the email used during booking.</li>
              <li>Include your project name, invoice number, and a clear reason for the refund request.</li>
              <li>Our team will review the request and respond within 5-7 business days with next steps.</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>7. Processing Time</h2>
            <p>
              Approved refunds will be processed within 10-14 business days and credited back to the
              original payment method. Delays from banking channels or payment gateways are beyond our
              control.
            </p>
          </div>

          <div className="legal-section">
            <h2>8. Project Pause &amp; Resumption</h2>
            <p>
              In place of cancellation, clients may request a project pause for genuine business reasons.
              Paused projects can be resumed within 90 days at no additional mobilization cost. Beyond 90
              days, a fresh scope review may be required.
            </p>
          </div>

          <div className="legal-section">
            <h2>9. Chargebacks</h2>
            <p>
              We encourage you to reach out to us directly before initiating a chargeback. Unwarranted
              chargebacks without first attempting resolution with our support team may be contested with
              supporting documentation of work delivered.
            </p>
          </div>

          <div className="legal-section">
            <h2>10. Changes to Policy</h2>
            <p>
              We may update this Refund Policy from time to time. The most current version will always be
              available on this page, and the effective date will reflect any changes.
            </p>
          </div>

          <div className="legal-contact">
            <h3>Need Help?</h3>
            <p>For refund-related queries, please contact our billing team:</p>
            <p>Email: <a href="mailto:info@techlanditsolutions.com">info@techlanditsolutions.com</a></p>
            <p>Phone: <a href="tel:+917842385604">+91 78423 85604</a></p>
            <p>Address: Flat No. 101, Sirisampada Hitec Apartment, Kavuri Hills, Madhapur, Hyderabad, Telangana 500081</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RefundPolicy;
