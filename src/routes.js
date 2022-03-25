import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Forms from "./components/forms";
import Home from "./components/home";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/site/18f/oes-federalist/" element={<Home />} />
        <Route
          path="/site/18f/oes-federalist/form/version-a"
          element={<Forms />}
        />
        <Route
          path="/site/18f/oes-federalist/form/version-b"
          element={<Forms />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
