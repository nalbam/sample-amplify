import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import signUpConfig from '../config/signUpConfig'

import { withAuthenticator } from 'aws-amplify-react'
import Amplify from 'aws-amplify';
import aws_exports from '../aws-exports';
Amplify.configure(aws_exports);

function Submit() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Submit
        </p>
      </header>
    </div>
  );
}

// export default Submit;
// export default withAuthenticator(Submit, true);
export default withAuthenticator(Submit, { usernameAttributes: 'email', signUpConfig });
