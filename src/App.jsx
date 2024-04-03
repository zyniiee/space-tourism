import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

const App = () => {
  return (
    <Router>
      <>
        <GlobalStyle />
        <Navigation />
        <Routes>
          <Route path="/space-tourism" element={<Home />} />
          <Route path="/space-tourism/destination" element={<Destination />} />
          <Route path="/space-tourism/crew" element={<Crew />} />
          <Route path="/space-tourism/technology" element={<Technology />} />
        </Routes>
      </>
    </Router>
  );
};

export default App;
