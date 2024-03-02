import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DocLogin from "./pages/DocLogin";
import DocHome from "./pages/DocHome";
import DocFeed from "./pages/DocFeed";
import DocPatient from "./pages/DocPatient";
import Diagnosis from "./pages/Diagnosis";
import LandingPage from './pages/LandingPage'
import Calendar from "./pages/Calendar";
import Inbox from "./pages/Inbox";
import DocProfile from "./pages/DocProfile";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<LandingPage/>} /> */}
          <Route path="/doclogin" element={<DocLogin />} />
          <Route path="/dochome" element={<DocHome />} />
          <Route path="/docfeed" element={<DocFeed />} />
          <Route path="/docpatient" element={<DocPatient />} />
          <Route path="/diagnosis" element={<Diagnosis />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/docprofile" element={<DocProfile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
