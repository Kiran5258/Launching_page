import React from 'react';
import LegalLayout from '../components/LegalLayout';

const ProPrivacy = () => {
  return (
    <LegalLayout title="Professional Privacy Policy">
      <div className="space-y-10 text-slate-300 leading-relaxed">
        <p className="text-lg">
          GIGIMAN collects professional data for platform operations.
        </p>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">Information Collected</h2>
          <ul className="space-y-2 list-disc pl-5">
            <li>Name, mobile number, ID proof, skill details, and service category.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">Usage</h2>
          <ul className="space-y-2 list-disc pl-5">
            <li>This information is used only for verification, job assignment, platform safety, and service operations.</li>
            <li>Professional details are shown to users only to the extent necessary to complete the service.</li>
            <li>Professional data is never sold, rented, or shared with third parties for marketing purposes.</li>
            <li>Information may be shared if required by law, court order, or government authority.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">Data Security</h2>
          <p>
            GIGIMAN takes reasonable security measures to protect data; however, 100% data security cannot be guaranteed.
          </p>
        </section>

        <p className="pt-8 text-sm italic">
          By using the app, the service professional agrees to this Privacy Policy.
        </p>
      </div>
    </LegalLayout>
  );
};

export default ProPrivacy;
