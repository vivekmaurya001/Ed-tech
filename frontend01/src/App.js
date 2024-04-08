import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/notUsing/HomePage";
import Dashboard from "./Components/DashboardTabPages/Dashboard";
import Login2 from "./Components/AuthPages/Login2";
import Signup2 from "./Components/AuthPages/Signup2";
import React from "react";
import SitePage from "./Components/notUsing/SitePage";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<SitePage />} />
        <Route exact path="/login" element={<Login2 />} />
        <Route exact path="/signup" element={<Signup2 />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
