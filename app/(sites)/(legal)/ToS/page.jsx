// app/terms/page.tsx
import React from "react";

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 pt-20">
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-cyan-700 mb-6">
          Terms of Service
        </h1>
        <p className="text-gray-600 mb-12">Last updated: November 11, 2025</p>

        <div className="space-y-10 text-gray-700 leading-relaxed">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              1. Introduction
            </h2>
            <p>
              Welcome to CJ Logistics (“CJ Logistics,” “we,” “us,” or “our”).
              These Terms of Service (“Terms”) govern your access to and use of
              our website, digital platforms, and logistics-related services
              (collectively, the “Services”). By using or accessing our
              Services, you agree to comply with and be bound by these Terms. If
              you do not agree, please do not use our Services.
            </p>
            <p className="mt-3">
              CJ Logistics is a global logistics and supply chain management
              company that provides integrated solutions for transportation,
              warehousing, and distribution. These Terms ensure that all users
              of our Services understand their rights, obligations, and the
              limitations of our responsibility.
            </p>
          </section>

          {/* Eligibility */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              2. Eligibility
            </h2>
            <p>
              To use our Services, you must be at least 18 years old or have
              reached the legal age of majority in your jurisdiction. By
              accessing or using our platform, you represent that you have the
              authority to enter into these Terms and that all information you
              provide is accurate, complete, and current.
            </p>
          </section>

          {/* Modifications */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              3. Modifications to Terms
            </h2>
            <p>
              CJ Logistics reserves the right to modify or update these Terms at
              any time without prior notice. Any changes will be effective
              immediately upon posting on our website. The updated date at the
              top of this page indicates the latest revision. Continued use of
              our Services after such modifications constitutes your acceptance
              of the revised Terms.
            </p>
          </section>

          {/* Services */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              4. Description of Services
            </h2>
            <p>
              CJ Logistics offers a wide range of logistics solutions including
              but not limited to freight forwarding, warehousing, supply chain
              management, last-mile delivery, and digital logistics tracking.
              The scope of our Services may vary depending on geography,
              customer requirements, and contractual agreements.
            </p>
            <p className="mt-3">
              While we strive to ensure continuous and accurate service, we do
              not guarantee that our digital platforms will always be available,
              error-free, or uninterrupted. Scheduled maintenance, upgrades, or
              technical issues may temporarily affect accessibility.
            </p>
          </section>

          {/* User Responsibilities */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              5. User Responsibilities
            </h2>
            <p>
              Users agree to use our Services only for lawful purposes and in
              accordance with these Terms. You shall not:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>
                Use the Services to transmit unlawful, misleading, or harmful
                content.
              </li>
              <li>
                Attempt to gain unauthorized access to our systems or networks.
              </li>
              <li>
                Interfere with the functionality or security of the Services.
              </li>
              <li>
                Use our intellectual property without express written consent.
              </li>
            </ul>
            <p className="mt-3">
              You are responsible for maintaining the confidentiality of your
              account credentials and for all activities that occur under your
              account. If you believe your account has been compromised, please
              notify us immediately.
            </p>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              6. Intellectual Property
            </h2>
            <p>
              All content, materials, designs, trademarks, and intellectual
              property appearing on CJ Logistics’ platforms are the exclusive
              property of CJ Logistics or its licensors. You are granted a
              limited, non-exclusive, non-transferable license to access and use
              our Services solely for business or personal purposes in
              accordance with these Terms.
            </p>
            <p className="mt-3">
              You may not reproduce, distribute, or modify any portion of our
              Services without prior written authorization from CJ Logistics.
            </p>
          </section>

          {/* Privacy */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              7. Privacy Policy
            </h2>
            <p>
              Your privacy is important to us. Our collection and use of
              personal information are governed by our{" "}
              <a
                href="/privacy"
                className="text-cyan-700 hover:underline font-medium"
              >
                Privacy Policy
              </a>
              , which forms part of these Terms. By using our Services, you
              consent to the collection and processing of your information as
              described therein.
            </p>
          </section>

          {/* Payment & Billing */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              8. Payment and Billing
            </h2>
            <p>
              Certain Services may require payment. All fees, charges, and
              payment terms will be outlined in your service agreement or order
              confirmation. Unless otherwise stated, payments are due upon
              receipt and are non-refundable. Failure to make payments on time
              may result in service suspension or termination.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              9. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, CJ Logistics, its
              affiliates, and employees shall not be liable for any direct,
              indirect, incidental, or consequential damages arising from your
              use of or inability to use our Services, including but not limited
              to loss of profits, data, or business opportunities.
            </p>
            <p className="mt-3">
              We make no warranties, express or implied, regarding the accuracy,
              reliability, or completeness of any information provided through
              our Services. Your use of the Services is at your own risk.
            </p>
          </section>

          {/* Indemnification */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              10. Indemnification
            </h2>
            <p>
              You agree to indemnify, defend, and hold harmless CJ Logistics,
              its officers, directors, employees, and partners from and against
              any claims, damages, liabilities, losses, or expenses (including
              legal fees) arising from your violation of these Terms or misuse
              of our Services.
            </p>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              11. Termination
            </h2>
            <p>
              CJ Logistics reserves the right to suspend or terminate your
              access to our Services at any time, with or without cause or
              notice, particularly in cases of suspected fraud, violation of
              these Terms, or unlawful behavior.
            </p>
            <p className="mt-3">
              Upon termination, your right to use the Services will immediately
              cease, but any obligations or liabilities incurred prior to
              termination shall survive.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              12. Governing Law and Dispute Resolution
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of the Republic of Korea, without regard to conflict of
              law principles. Any disputes arising under or in connection with
              these Terms shall be resolved through good faith negotiations. If
              not resolved, disputes will be submitted to the competent courts
              located in Seoul, South Korea.
            </p>
          </section>

          {/* Miscellaneous */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              13. Miscellaneous
            </h2>
            <p>
              If any provision of these Terms is found to be invalid or
              unenforceable, the remaining provisions shall continue in full
              force and effect. Our failure to enforce any right or provision
              shall not constitute a waiver of such right or provision.
            </p>
            <p className="mt-3">
              These Terms constitute the entire agreement between you and CJ
              Logistics regarding your use of the Services and supersede any
              prior agreements or understandings.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              14. Contact Us
            </h2>
            <p>For questions about these Terms, please contact us at:</p>
            <div className="mt-4 bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-medium text-gray-800">CJ Logistics</p>
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
