import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Forms from "./components/forms";
import Success from "./components/success";
import { CONSTANT } from './components/constants';
const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${CONSTANT.BASE_URL}/success`} element={<Success />} />
        <Route
          path={`${CONSTANT.BASE_URL}/form/version-a`}
          element={<Forms />}
        />
        <Route
          path={`${CONSTANT.BASE_URL}/form/version-b`}
          element={<Forms />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
