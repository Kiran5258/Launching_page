import React from 'react';
import LegalLayout from '../components/LegalLayout';

const ProTerms = () => {
  return (
    <LegalLayout title="Professional Terms & Conditions">
      <div className="space-y-8 text-slate-300 leading-relaxed">
        <section>
          <ul className="space-y-4 list-disc pl-5">
            <li>GIGIMAN is a digital intermediary platform only.</li>
            <li>GIGIMAN does not provide any services directly.</li>
            <li>Service professionals are fully responsible for their skills, service quality, conduct, safety, and compliance with laws.</li>
            <li>The service price charged to the user is the sole responsibility of the service professional.</li>
            <li>Once a job is accepted, the professional must not cancel or fail to show up without a valid reason.</li>
            <li>Overcharging, rude behavior, fraud, fake service claims, or misuse of the platform are strictly prohibited.</li>
            <li>If a user complaint is found to be valid, warning, temporary suspension, or permanent account termination may be applied.</li>
            <li>GIGIMAN is not responsible for any loss, damage, injury, payment dispute, or service-related issue.</li>
            <li>GIGIMAN reserves the right to suspend or permanently block any professional account without prior notice if these terms are violated.</li>
          </ul>
        </section>

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

export default ProTerms;
