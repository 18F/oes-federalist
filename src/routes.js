import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Forms from "./components/forms";
import Success from "./components/success";
import { CONSTANT } from './components/constants';
const Routing = () => {
//  `${CONSTANT.BASE_URL}
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/success' element={<Success />} />
        <Route
          path='/form/version-a'
          element={<Forms />}
        />
        <Route
          path='/form/version-b'
          element={<Forms />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
