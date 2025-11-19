import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import AIChatAssistant from './components/AIChatAssistant';
import Home from './pages/Home';
import Protocols from './pages/Protocols';
import ProtocolDetail from './pages/ProtocolDetail';
import Contact from './pages/Contact';
import ImportProtocol from './pages/ImportProtocol';
import { ProtocolProvider } from './contexts/ProtocolContext';
import { PageRoute } from './types';

const App: React.FC = () => {
  return (
    <ProtocolProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path={PageRoute.HOME} element={<Home />} />
            <Route path={PageRoute.PROTOCOLS} element={<Protocols />} />
            <Route path="/protocolos/:id" element={<ProtocolDetail />} />
            <Route path={PageRoute.CONTACTS} element={<Contact />} />
            <Route path={PageRoute.IMPORT} element={<ImportProtocol />} />
          </Routes>
          <AIChatAssistant />
        </Layout>
      </Router>
    </ProtocolProvider>
  );
};

export default App;