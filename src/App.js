import React from 'react';
import './App.css'
import uswds from '@formio/uswds';
import { Formio } from 'formiojs';

import { GovBanner } from '@trussworks/react-uswds';
import Routing from './routes';

Formio.use(uswds);
export const App = () => {
  return (
    <>
  <GovBanner aria-label="Official government website" />
    <div className="main-content">
      <Routing />
    </div>
    </>
  );
};



export default App;