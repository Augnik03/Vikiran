import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DocLogin from "./pages/DocLogin";
import DocHome from "./pages/DocHome";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/doclogin" element={<DocLogin />} />
          <Route path="/dochome" element={<DocHome />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
