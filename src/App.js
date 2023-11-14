import React from 'react';
import Home from './pages/Home/Home'
import File from './pages/File/File';
import About from './pages/About/About';
import Inquiry from './pages/Inquiry/Inquiry'
import RealEstate from './pages/Real-Estate/RealEstate'
import Commission from './pages/Commission/Commission'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/inquiry" element={<Inquiry />} />
        <Route path="/profile/real-estate" element={<RealEstate />} />
        <Route path="/commission-calculation" element={<Commission />} />
        <Route path="/files/:fileId" element={<File />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;