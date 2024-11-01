import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchVariants from './components/search/searchAutowidth';
import AllSwitches from './components/switch/switch';
import PrivateRoute from './components/router/privateRouter';
import AllTab from './components/tabs/tab';

function App() {
  //Change this to `false` to see the behaviour of the private router
  const [isAuthenticated] = useState(true);

  return (
    <Router>
      <Routes>
        {/* Public route for example */}
        <Route path="/" element={<h1>Welcome to the Home Page</h1>} />

        {/* Private Routes */}
        <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/search" element={<SearchVariants />} />
          <Route path="/switches" element={<AllSwitches />} />
          <Route path="/tabs" element={<AllTab />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
