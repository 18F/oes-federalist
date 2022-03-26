import React, { useState } from 'react';
import './App.css'
import { Form } from 'react-formio';
import uswds from '@formio/uswds';
import { Formio } from 'formiojs';
import LoadingOverlay from 'react-loading-overlay';
import { FadeLoader } from 'react-spinners';
import { GovBanner } from '@trussworks/react-uswds';
Formio.use(uswds);
export const App = () => {
  const [loader, setLoader] = useState(true);
  const handelOnFormReady = () => {
    setLoader(false);
  };
  return (
    <>
  <GovBanner aria-label="Official government website" />
    <div className="main-content">
    <LoadingOverlay
      active={loader}
      styles={{ overlay: base => ({ ...base, background: 'rgba(0, 0, 0, 0.1)' }) }}
      spinner={<FadeLoader color={'#4A90E2'} />}
    >
      <Form src="https://portal-test.forms.gov/oes-dev/oessurveyforma"
       onRender={handelOnFormReady} />
    </LoadingOverlay>
    </div>
    </>
  );
};

export default App;