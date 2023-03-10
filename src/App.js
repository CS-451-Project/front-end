import React from 'react';
import './App.css';
import HomePage from './pages/HomePage.js';
import NavBar from './components/NavBar.js';
import LoginPage from './pages/LoginPage.js';
import SignupPage from './pages/SignupPage.js';
import FundraiserPage from './pages/FundraiserPage';
import Dashboard from './pages/Dashboard';
// react router dom is a package that allows you to navigate between pages
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    // This is the main container that holds all the pages
    // This is where you can add css to the whole app
    // className is the css class that is imported from App.css
    <div className='bg-green-300 min-h-screen'>
      {/* Imported npm package that displays messages throughout the browser pages */}
        {/* Container that hold different routes in the pages */}
        <Router>
          {/* Nav bar will show in all browser pages */}
          <div>
            <NavBar />
          </div>
          <div className='bg-white px-16'>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              />
          </div>

          {/* Routes in the browser to different pages */}
        <Routes>
          {/* The path is how you get to the page and the element is what shows on the page */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/organizer/:userId/fundraiser/:fundraiserId" element={<FundraiserPage />} />
          <Route path="dashboard/user/:userId" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
