import React from 'react';
import LegalLayout from '../components/LegalLayout';

const RefundPolicy = () => {
  return (
    <LegalLayout title="Refund & Cancellation Policy">
      <div className="space-y-8 text-slate-300 leading-relaxed">
        <ul className="space-y-4 list-disc pl-5">
          <li>Users may cancel bookings before service start, subject to cancellation rules.</li>
          <li>Late cancellations may incur charges.</li>
          <li>If a professional cancels or fails to arrive, appropriate action will be taken.</li>
          <li>Refunds, if applicable, will be processed within 5–7 working days.</li>
          <li>Completed services are non-refundable.</li>
        </ul>
      </div>
    </LegalLayout>
  );
};

export default RefundPolicy;
