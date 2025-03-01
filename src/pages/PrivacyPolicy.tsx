
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-navy mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg">
            <p className="text-gray-700 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-4">
              LuxeInvest ("we," "our," or "us") respects your privacy and is committed to protecting it through our compliance with this policy.
            </p>
            
            <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">2. Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              We collect several types of information from and about users of our website, including information:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>By which you may be personally identified, such as name, email address, telephone number ("personal information");</li>
              <li>About your internet connection, the equipment you use to access our Website, and usage details.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use information that we collect about you or that you provide to us:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>To present our Website and its contents to you.</li>
              <li>To provide you with information, products, or services that you request from us.</li>
              <li>To fulfill any other purpose for which you provide it.</li>
              <li>To carry out our obligations and enforce our rights.</li>
              <li>In any other way we may describe when you provide the information.</li>
              <li>For any other purpose with your consent.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">4. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-gray-700 mb-4">
              Email: privacy@luxeinvest.com<br />
              Phone: +971 4 123 4567
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
