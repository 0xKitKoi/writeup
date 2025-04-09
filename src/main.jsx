import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
//import { HashRouter as Router } from 'react-router-dom';
import './index.css'
import Home from '@/pages/Home'
import WTDD from '@/pages/WTDD'
import Micro from '@/pages/Microcontroller'
import TODO from '@/pages/TODO'
import Game from '@/pages/Game'
// <Route path="*" element={<NotFound />} />
// <Route path="/" element={< />} />
// <Route path="/" element={<Home />} />
// <Route path="/project/:projectName" element={<ProjectLoader />} />
const App = () => {
  return (
    <Router basename="/writeup/dist">
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/WTDD" element={<WTDD />} />
        <Route path="/Micro" element={<Micro />} />
        <Route path="/ToDo" element={<TODO />} />
        <Route path="/Game" element={<Game />} />
      </Routes>
    </Router>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div >
      <App />
    </div>
  </React.StrictMode>,
)
