import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/DocLogin" element={<DocLogin />} />
          <Route path="/DocHome" element={<DocHome />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
