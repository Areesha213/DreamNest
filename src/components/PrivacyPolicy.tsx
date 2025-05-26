import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <h1 className="text-4xl font-spectral font-medium mb-8 text-blue-900 dark:text-white">Privacy Policy</h1>
      
      <div className="prose prose-lg dark:prose-invert">
        <section className="mb-8">
          <h2 className="text-2xl font-spectral font-medium mb-4 text-blue-900 dark:text-white">1. Introduction</h2>
          <p className="text-blue-800/70 dark:text-lavender/80 mb-4">
            At DreamNest, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-spectral font-medium mb-4 text-blue-900 dark:text-white">2. Information We Collect</h2>
          <h3 className="text-xl font-spectral font-medium mb-3 text-blue-900 dark:text-white">2.1 Personal Information</h3>
          <p className="text-blue-800/70 dark:text-lavender/80 mb-4">
            We collect information that you provide directly to us, including:
          </p>
          <ul className="list-disc pl-6 mb-4 text-blue-800/70 dark:text-lavender/80">
            <li>Email address</li>
            <li>Name (if provided)</li>
            <li>Journal entries and reflections</li>
            <li>User preferences and settings</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-spectral font-medium mb-4 text-blue-900 dark:text-white">3. How We Use Your Information</h2>
          <p className="text-blue-800/70 dark:text-lavender/80 mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 mb-4 text-blue-800/70 dark:text-lavender/80">
            <li>Provide and maintain our service</li>
            <li>Personalize your experience</li>
            <li>Communicate with you about updates and changes</li>
            <li>Ensure the security of your data</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-spectral font-medium mb-4 text-blue-900 dark:text-white">4. Data Security</h2>
          <p className="text-blue-800/70 dark:text-lavender/80 mb-4">
            We implement appropriate technical and organizational measures to protect your personal information, including:
          </p>
          <ul className="list-disc pl-6 mb-4 text-blue-800/70 dark:text-lavender/80">
            <li>End-to-end encryption of journal entries</li>
            <li>Secure data storage and transmission</li>
            <li>Regular security audits and updates</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-spectral font-medium mb-4 text-blue-900 dark:text-white">5. Your Rights</h2>
          <p className="text-blue-800/70 dark:text-lavender/80 mb-4">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 mb-4 text-blue-800/70 dark:text-lavender/80">
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to data processing</li>
            <li>Data portability</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;