import React from "react";
import Home from "./Pages/Home.js";
import MLtester from "./Pages/MLtester.js";
import Layout from "./Layout.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="test" element={<MLtester />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
