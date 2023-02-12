import React from 'react';
import './App.css';
import HomePage from './pages/HomePage.js';
import NavBar from './components/NavBar.js';
import LoginPage from './pages/LoginPage.js';
import SignupPage from './pages/SignupPage.js';
import AddEmployee from './pages/AddEmployee.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


function App() {
  return (
    <div className='bg-green-300 min-h-screen'>
      {/* Imported npm package that displays messages throughout the browser */}
      <ToastContainer />
        {/*  */}
        <Router>
          {/* Nav bar will show in all browser pages */}
          <div className='pb-8'>
            <NavBar />
          </div>
          {/* Routes in the browser to different pages */}
        <Routes>
          {/* The path is how you get to the page and the element is what shows on the page */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/addEmployee" element={<AddEmployee />}/>
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
