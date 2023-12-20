import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/accueil'
import About from './pages/about'
import Logement from './pages/logement'
import Error from './pages/error'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/logement/:id" element={<Logement />} />
    <Route path="/*" element={<Error />} />
  </Routes>
</Router>
);