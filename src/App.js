import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Services from './components/pages/Services';
//import Products from './components/pages/Products';
//import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Navbar />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
