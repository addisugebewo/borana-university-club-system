import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import PuplicLayout from './components/Layouts/PublicLayout.jsx'
import Home from './components/pages/Home/Home.jsx';
import Clubs from './components/pages/Clubs/Clubs.jsx';
import Events from './components/pages/Events/Events.jsx';

function App() {
 

  return (
    <div>
      <PuplicLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/events" element={<Events/>} />
        </Routes>
      </PuplicLayout>
    </div>
  );
}

export default App
