import React from 'react';
import './App.css';
import HomePage from './pages/HomePage.js';
import NavBar from './components/NavBar.js';
import LoginPage from './pages/LoginPage.js';
import SignupPage from './pages/SignupPage.js';
import AddEmployee from './pages/AddEmployee.js';
import IndividualFundraiserPage from './pages/IndividualFundraiserPage';
// react router dom is a package that allows you to navigate between pages
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    // This is the main container that holds all the pages
    // This is where you can add css to the whole app
    // className is the css class that is imported from App.css
    <div className='bg-green-300 min-h-screen'>
      {/* Imported npm package that displays messages throughout the browser pages */}
      <ToastContainer />
        {/* Container that hold different routes in the pages */}
        <Router>
          {/* Nav bar will show in all browser pages */}
          <div>
            <NavBar />
          </div>

          {/* Routes in the browser to different pages */}
        <Routes>
          {/* The path is how you get to the page and the element is what shows on the page */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/fundraiser/:fundraiserId" element={<IndividualFundraiserPage />} />
          <Route path="/addEmployee" element={<AddEmployee />}/>
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
