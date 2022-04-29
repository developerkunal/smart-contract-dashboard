import React from 'react';
import Dashboard from './View/Dashboard';
import Login from './View/Login';
import Verify from './View/Verify';
import Update from './View/Update';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/login" element={<Login />} />
          <Route path="/update" element={<Update />} />
          <Route path="/verify" element={<Verify />} />
      </Routes>
    </Router>

  );
}

export default App;
