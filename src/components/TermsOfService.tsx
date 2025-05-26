import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <h1 className="text-4xl font-spectral font-medium mb-8 text-blue-900 dark:text-white">Terms of Service</h1>
      
      <div className="prose prose-lg dark:prose-invert">
        <section className="mb-8">
          <h2 className="text-2xl font-spectral font-medium mb-4 text-blue-900 dark:text-white">1. Agreement to Terms</h2>
          <p className="text-blue-800/70 dark:text-lavender/80 mb-4">
            By accessing or using DreamNest, you agree to be bound by these Terms of Service and all applicable laws and regulations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-spectral font-medium mb-4 text-blue-900 dark:text-white">2. User Responsibilities</h2>
          <p className="text-blue-800/70 dark:text-lavender/80 mb-4">
            As a user of DreamNest, you agree to:
          </p>
          <ul className="list-disc pl-6 mb-4 text-blue-800/70 dark:text-lavender/80">
            <li>Provide accurate and complete information</li>
            <li>Maintain the security of your account</li>
            <li>Use the service in a lawful manner</li>
            <li>Respect the privacy of others</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-spectral font-medium mb-4 text-blue-900 dark:text-white">3. Intellectual Property</h2>
          <p className="text-blue-800/70 dark:text-lavender/80 mb-4">
            The service and its original content, features, and functionality are owned by DreamNest and are protected by international copyright, trademark, and other intellectual property laws.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-spectral font-medium mb-4 text-blue-900 dark:text-white">4. Limitations of Liability</h2>
          <p className="text-blue-800/70 dark:text-lavender/80 mb-4">
            DreamNest shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-spectral font-medium mb-4 text-blue-900 dark:text-white">5. Changes to Terms</h2>
          <p className="text-blue-800/70 dark:text-lavender/80 mb-4">
            We reserve the right to modify or replace these terms at any time. We will provide notice of any significant changes.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;