function PrivacyQuestionary() {
  return (
    <div>
      <h2>Privacy Policy (Questionary)</h2>
      <p>
        <strong>Effective Date:</strong> 01/01/2025
      </p>

      <h3>1. Introduction</h3>
      <p>
        Silent Monkey ("we," "our," or "us") respects your privacy. This Privacy
        Policy explains what information we collect, how we use it, and how you
        can manage your data.
      </p>

      <h3>2. Information We Collect</h3>
      <ul>
        <p>
          <strong>Usage Data:</strong> We use Firebase Analytics to track app
          usage (e.g., session duration, feature interactions).
        </p>
        <p>
          <strong>Device Information:</strong> Such as OS version and app
          performance data to improve functionality.
        </p>
      </ul>

      <h3>3. How We Use Your Information</h3>
      <ul>
        <p>Improve user experience and app performance.</p>
        <p>Analyze app usage trends through Firebase Analytics.</p>
      </ul>

      <h3>4. Third-Party Services</h3>
      <p>
        We use Firebase Analytics, which may collect data per
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          {' '}
          Google’s Privacy Policy
        </a>
        .
      </p>

      <h3>5. Your Rights</h3>
      <p>
        You can opt out of Firebase Analytics by adjusting your device settings
        or contacting us at <strong>admin@silentmonkey.co.nz</strong>.
      </p>

      <h3>6. Data Security</h3>
      <p>
        We take security seriously and use Firebase’s built-in protections to
        safeguard data.
      </p>

      <h3>7. Contact Us</h3>
      <p>
        For privacy concerns, contact us at{' '}
        <strong>admin@silentmonkey.co.nz</strong>.
      </p>
    </div>
  )
}

export default PrivacyQuestionary
