// app/privacy/page.tsx
import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 pt-20">
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-cyan-700 mb-6">
          Privacy Policy
        </h1>
        <p className="text-gray-600 mb-12">Last updated: November 11, 2025</p>

        <div className="space-y-10">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              1. Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed">
              CJ Logistics (“we”, “our”, or “us”) respects your privacy and is
              committed to protecting your personal data. This Privacy Policy
              explains how we collect, use, and safeguard information when you
              interact with our website, services, and digital platforms.
            </p>
          </section>

          {/* Data Collection */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              2. Information We Collect
            </h2>
            <p className="text-gray-700 mb-4">
              We may collect personal and non-personal information including:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Full name, email address, and contact details</li>
              <li>Company information and shipping data</li>
              <li>Website usage analytics and cookies</li>
              <li>Communications and feedback submitted to us</li>
            </ul>
          </section>

          {/* Usage */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              3. How We Use Your Information
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The information we collect helps us improve logistics services,
              personalize user experiences, and communicate important updates.
              We do not sell or rent your data to third parties.
            </p>
          </section>

          {/* Data Protection */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              4. Data Protection
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We implement appropriate technical and organizational measures to
              ensure your data is secure and protected from unauthorized access,
              alteration, or disclosure.
            </p>
          </section>

          {/* Third Parties */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              5. Third-Party Services
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our website may include links to third-party services or tools.
              Please note that we are not responsible for their privacy
              practices. We recommend reviewing their policies before sharing
              personal information.
            </p>
          </section>

          {/* Rights */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              6. Your Rights
            </h2>
            <p className="text-gray-700 leading-relaxed">
              You have the right to access, correct, or request deletion of your
              personal data. To exercise these rights, please contact us at{" "}
              <a
                href="mailto:privacy@cjlogistics.com"
                className="text-cyan-700 hover:underline font-medium"
              >
                cjlogistics.customerinformation@gmail.com
              </a>
              .
            </p>
          </section>

          {/* Updates */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              7. Updates to This Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy periodically. All updates will
              be posted on this page with the updated date indicated above.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              8. Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed">
              For any questions or concerns regarding this Privacy Policy,
              please contact:
            </p>
            <div className="mt-4 bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-medium text-gray-800">CJ Logistics</p>
              123 Global Chibiak Ave, Suite 400 <br />
              New York, NY.
              <p>Email: cjlogistics.customerinformation@gmail.com</p>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
