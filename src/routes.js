import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Forma from "./components/form-a";
import Formb from "./components/form-b";
import Success from "./components/success";
import { CONSTANT } from './components/constants';
const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/success' element={<Success />} />
        <Route
          path='/form/version-a'
          element={<Forma />}
        />
        <Route
          path='form/version-b'
          element={<Formb/>}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
