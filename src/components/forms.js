import React, { useState } from "react";
import { Form } from "react-formio";
import { useLocation } from "react-router-dom";
import { Formio } from "formiojs";
import uswds from "@formio/uswds";
import LoadingOverlay from "react-loading-overlay";
import { FadeLoader } from "react-spinners";
import { Navigate } from "react-router-dom";
import { CONSTANT } from './constants';
Formio.use(uswds);

const Forms = () => {
  const [loader, setLoader] = useState(true);
  const [done, setDone] = useState(false);
  let formSrcDev = '';
  const handleOnSubmitDone = () => {
    setDone(true);
  };
  const handelOnFormReady = () => {
    setLoader(false);
  };
  const location = useLocation();
  console.log("Base url " + CONSTANT.BASE_URL);
  console.log("location.pathname " + location.pathname);
  if(location.pathname === '/form/version-a'){
    formSrcDev = "https://portal-test.forms.gov/oes-dev/oessurveyforma";
  }
  if(location.pathname === '/form/version-b'){
    formSrcDev = "https://portal-test.forms.gov/oes-dev/oessurveyformb";
  }
  
  if (done) {
    return <Navigate to={`${CONSTANT.BASE_URL}/success`} />;
  }
  return (
    <LoadingOverlay
      active={loader}
      styles={{
        overlay: (base) => ({ ...base, background: "rgba(0, 0, 0, 0.1)" }),
      }}
      spinner={<FadeLoader color={"#4A90E2"} />}
    >
      <Form
        src={formSrcDev}
        onRender={handelOnFormReady}
        onSubmitDone={handleOnSubmitDone}
      />
    </LoadingOverlay>
  );
};

export default Forms;
