import React from "react";
import Navbar from "./components/NavbarStuff/Navbar";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Developers from "./pages/Developers";
import Documentation from "./pages/Documentation";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/spudify-website" exact element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="/Home" index element={<Home />} />
            <Route path="/developers" index element={<Developers />} />
            <Route path="/Documentation" index element={<Documentation />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
