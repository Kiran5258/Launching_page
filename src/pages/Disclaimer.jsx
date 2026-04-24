import React from 'react';
import LegalLayout from '../components/LegalLayout';

const Disclaimer = () => {
  return (
    <LegalLayout title="Disclaimer">
      <div className="space-y-8 text-slate-300 leading-relaxed text-lg">
        <p>
          GIGIMAN is a technology platform and does not provide professional services. 
          GIGIMAN does not guarantee service quality, pricing, or outcomes.
        </p>
        <p>
          All services are provided by independent professionals. 
          GIGIMAN shall not be liable for any claims, damages, or losses arising from service usage.
        </p>
      </div>
    </LegalLayout>
  );
};

export default Disclaimer;
