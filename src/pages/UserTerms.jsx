import React from 'react';
import LegalLayout from '../components/LegalLayout';

const UserTerms = () => {
  return (
    <LegalLayout title="Terms & Conditions (Users)">
      <div className="space-y-8 text-slate-300 leading-relaxed">
        <section>
          <p className="text-lg">
            GIGIMAN is a digital technology platform that enables users to connect with independent service professionals for home and personal services. GIGIMAN does not provide any services directly.
          </p>
          <p className="mt-4">By using the GIGIMAN website or app, users agree to the following:</p>
        </section>

        <ul className="space-y-4 list-disc pl-5">
          <li>GIGIMAN acts only as an intermediary between users and service professionals.</li>
          <li>Service professionals are independent third parties and are not employees or agents of GIGIMAN.</li>
          <li>GIGIMAN is not responsible for service quality, pricing, behavior, delays, damages, losses, or injuries.</li>
          <li>Payments, disputes, and service-related issues are strictly between the user and the professional.</li>
          <li>Users must provide accurate information during booking.</li>
          <li>Fake bookings, misuse, or abuse may result in account suspension or termination.</li>
          <li>GIGIMAN may update these terms at any time.</li>
        </ul>

        <div className="pt-8 border-t border-white/10 grid grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="text-white font-semibold mb-1">Governing Law</h4>
            <p>Indian Law</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-1">Jurisdiction</h4>
            <p>Tamil Nadu</p>
          </div>
        </div>
      </div>
    </LegalLayout>
  );
};

export default UserTerms;
