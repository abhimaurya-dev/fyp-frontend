import React from "react";
import { Routes, Route } from "react-router-dom";
import CropRecommendation from "./components/cropRecommendation/CropRecommendation";

const App = () => {
  return (
    <Routes>
      <Route exact path="/getRecommendation" element={<CropRecommendation />} />
    </Routes>
  );
};

export default App;
