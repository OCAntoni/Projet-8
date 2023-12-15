import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/accueil'
import Rooms from './pages/logements'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logements" element={<Rooms />} />
      </Routes>
    </Router>
  </React.StrictMode>,
   document.getElementById('root')
)
