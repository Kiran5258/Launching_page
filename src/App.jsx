import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import UserTerms from './pages/UserTerms';
import UserPrivacy from './pages/UserPrivacy';
import ProTerms from './pages/ProTerms';
import ProPrivacy from './pages/ProPrivacy';
import RefundPolicy from './pages/RefundPolicy';
import Disclaimer from './pages/Disclaimer';

import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<UserTerms />} />
        <Route path="/privacy-policy" element={<UserPrivacy />} />
        <Route path="/pro-terms" element={<ProTerms />} />
        <Route path="/pro-privacy" element={<ProPrivacy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
      </Routes>
    </Router>
  );
}
