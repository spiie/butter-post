import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

//PAGES
import LogIn from './login';
import Register from './register';

//CSS
import "./css/index.css"

//MAIN FUNC
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogIn/>}/>
        <Route path="*" element={<LogIn/>}/>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </Router>
  )
}

//EXPORTS
export default App;
