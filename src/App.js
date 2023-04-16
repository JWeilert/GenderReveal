import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Score from "./Score";
import Guess from "./Guess";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/score" element={<Score />} />
          <Route path="/guess" element={<Guess />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
