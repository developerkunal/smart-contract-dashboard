import React from 'react';
import Dashboard from './View/Dashboard';
import Login from './View/Login';
import Verify from './View/Verify';
import Update from './View/Update';
import Addresses from './View/Addresses';

import { Web3ReactProvider } from '@web3-react/core';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { getLibrary } from './utils/LibraryUtil';
import PrivateRoutes from './utils/PrivateRoutes';
import PublicRoutes from './utils/PublicRoutes';

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Router>
        <Routes>
          <Route path="/" element={<PrivateRoutes />}>

            <Route
              path="/dashboard"
              element={<Dashboard />} />
            <Route
              path="/update"
              element={<Update />} />
            <Route
              path="/verify"
              element={<Verify />} />
              <Route
              path="/viewaddresses"
              element={<Addresses />} />
          </Route>
          <Route path="login" element={<PublicRoutes />}>
            <Route
              path="/login"
              element={<Login />} />
          </Route>
        </Routes>

      </Router>
    </Web3ReactProvider>
  );
}

export default App;
