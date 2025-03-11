
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
            
            <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">Data Collection and Use</h2>
            <p className="text-gray-700 mb-4">
              When visitors leave comments on our site, we collect the data shown in the comments form, the visitor's IP address, and browser user agent string to aid spam detection. An anonymized string created from your email address (hash) may be provided to the Gravatar service to see if you are using it, subject to their privacy policy. Upon comment approval, your profile picture becomes visible to the public in the context of your comment.
            </p>
            
            <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">Media</h2>
            <p className="text-gray-700 mb-4">
              If you upload images to the website, avoid including images with embedded location data (EXIF GPS). Visitors can download and extract any location data from images on the website.
            </p>
            
            <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">Cookies</h2>
            <p className="text-gray-700 mb-4">
              If you leave a comment, you may opt-in to saving your name, email, and website in cookies for convenience, so you do not have to fill in your details again when you leave another comment. These cookies last for one year. Visiting our login page sets a temporary cookie to check if your browser accepts cookies, discarded when you close your browser. Logging in sets cookies to save your login info and screen display choices; these last for two days or one year, depending on your choices. Editing or publishing an article sets a cookie in your browser indicating the post ID of the article you just edited, expiring after one day.
            </p>
            
            <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">Embedded Content</h2>
            <p className="text-gray-700 mb-4">
              Articles on this site may include embedded content from other websites. Such content behaves exactly as if the visitor has visited the other website, which may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that content, including if you have accounts logged into those websites.
            </p>
            
            <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">Data Sharing</h2>
            <p className="text-gray-700 mb-4">
              We do not sell, rent, or trade personal information with third parties for promotional purposes. Personal information may be shared with third-party service providers to help operate our business and website or administer activities on our behalf.
            </p>
            
            <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">Data Retention</h2>
            <p className="text-gray-700 mb-4">
              Comments and their metadata are retained indefinitely to recognize and approve any follow-up comments automatically. We store personal information provided by registered users in their user profiles, which they can see, edit, or delete at any time (username changes not permitted). Administrators can also view and edit that information.
            </p>
            
            <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">Your Data Rights</h2>
            <p className="text-gray-700 mb-4">
              If you have an account or have left comments, you can request an exported file of personal data we hold about you, including data you provided. You may also request that we erase any personal data we hold, except for data we are obliged to keep for administrative, legal, or security purposes.
            </p>
            
            <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">Data Security</h2>
            <p className="text-gray-700 mb-4">
              We take reasonable measures to protect personal information from unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is ever fully secure or error-free. Please be aware that you use the site at your own risk.
            </p>
            
            <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">Privacy Policy Changes</h2>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy occasionally to reflect changes in our practices or in response to legal requirements. Any changes will be posted on our site with an updated "Effective Date."
            </p>
            
            <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-gray-700 mb-4">
              Email: sobharealtycapital@gmail.com<br />
              Phone: +44 7399 372291<br />
              WhatsApp: +44 7399 372291
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
