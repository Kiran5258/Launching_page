import React from 'react';
import LegalLayout from '../components/LegalLayout';

const UserPrivacy = () => {
  return (
    <LegalLayout title="Privacy Policy (Users)">
      <div className="space-y-10 text-slate-300 leading-relaxed">
        <p className="text-lg">
          GIGIMAN values user privacy and collects only necessary information to provide services.
        </p>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">Information Collected</h2>
          <ul className="space-y-2 list-disc pl-5">
            <li>Name, mobile number, email</li>
            <li>Location details</li>
            <li>Booking and service history</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">Usage of Information</h2>
          <ul className="space-y-2 list-disc pl-5">
            <li>Service booking and assignment</li>
            <li>Customer support</li>
            <li>Fraud prevention and security</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">Data Sharing</h2>
          <ul className="space-y-2 list-disc pl-5">
            <li>Shared only with assigned service professionals</li>
            <li>Not sold or rented to third parties</li>
            <li>Shared with authorities if legally required</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">Data Security</h2>
          <p>
            Reasonable security measures are implemented, but no system guarantees 100% security.
          </p>
        </section>

        <p className="pt-8 text-sm italic">
          By using GIGIMAN, users consent to this Privacy Policy.
        </p>
      </div>
    </LegalLayout>
  );
};

export default UserPrivacy;
