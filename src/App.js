import React from "react";
import Home from "./pages/Home/Home";
import File from "./pages/File/File";
import About from "./pages/About/About";
import Inquiry from "./pages/Inquiry/Inquiry";
import Register from "./pages/Real-Estate/RegisterRealEstate";
import Commission from "./pages/Commission/Commission";
import RealEstate from "./pages/Real-Estate/RealEstate";
import Create from "./pages/Create/Create";
import  Support from './pages/Support/Support'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/inquiry" element={<Inquiry />} />
        <Route path="/profile/real-estate" element={<Register />} />
        <Route path="/commission-calculation" element={<Commission />} />
        <Route path="/files/:fileId" element={<File />} />
        <Route path="/real-state/agency/:agentId" element={<RealEstate />} />
        <Route path="/profile/files/create" element={<Create />} />
        <Route path="/support" element={<Support />} />
        <Route
          path="/*"
          element={
            <div className="flex justify-center items-center mt-72 text-2xl text-right">
              <p>404 Not Found </p>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
