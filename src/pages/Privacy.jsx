import React from "react";

const Privacy = () => {
  return (
    <article className="prose prose-slate max-w-none">
      <h1>Privacy Policy</h1>
      <p>
        <strong>Last updated:</strong> 19th September 2025
      </p>
      <p>
        DXX Photography Limited respects your privacy and is committed to
        protecting your personal data.
      </p>

      <h2>1. Data We Collect</h2>
      <ul>
        <li>Account information (name, email, billing address).</li>
        <li>
          Payment data (processed via PCI-compliant providers; we do not store
          full card details).
        </li>
        <li>Usage data (IP address, device type, site activity).</li>
      </ul>

      <h2>2. How We Use Data</h2>
      <ul>
        <li>To provide access to our website and content.</li>
        <li>To process payments and manage subscriptions.</li>
        <li>
          To ensure compliance with age verification and legal requirements.
        </li>
        <li>To improve our services.</li>
      </ul>

      <h2>3. Sharing</h2>
      <p>
        We do not sell your personal information. We may share with trusted
        service providers (hosting, payment processing, analytics) under
        confidentiality agreements.
      </p>

      <h2>4. Retention</h2>
      <p>
        Data is retained for as long as you have an account and as required for
        legal or regulatory obligations.
      </p>

      <h2>5. Your Rights</h2>
      <p>
        Depending on your jurisdiction, you may have rights to access, correct,
        or delete your personal data. Please contact us to exercise these.
      </p>

      <h2>6. Security</h2>
      <p>
        We use reasonable measures to protect your information but cannot
        guarantee absolute security of transmissions online.
      </p>

      <h2>7. Cookies</h2>
      <p>Our site uses cookies for essential functions and analytics.</p>

      <h2>8. Age Restriction</h2>
      <p>
        We do not knowingly collect data from anyone under 18. If you are
        underage, do not use our site.
      </p>
    </article>
  );
};

export default Privacy;
