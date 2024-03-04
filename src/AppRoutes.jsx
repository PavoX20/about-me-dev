// src/AppRoutes.jsx
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HeaderWebPage } from "./HeaderWebPage";
import { Hero } from "./Hero";
import "./App.css";

export function AppRoutes() {
  return (
    <Router>
      <div className=' bg-light'>
        
            <h4 >Web page in development...</h4>
        <HeaderWebPage />
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
      </div>
    </Router>
  );
}


