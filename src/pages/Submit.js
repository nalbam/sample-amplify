import React from 'react';

import Amplify, { Analytics, Storage, API } from 'aws-amplify';
import { withAuthenticator, Authenticator } from 'aws-amplify-react'

import signUpConfig from '../config/signUpConfig'

function Submit() {
  return (
    <div className="App">
      <header className="App-header">
        <Authenticator usernameAttributes='email' />
      </header>
      <div className="App-body">
        Submit
      </div>
    </div>
  );
}

// export default Submit;
// export default withAuthenticator(Submit, true);
export default withAuthenticator(Submit, { usernameAttributes: 'email', signUpConfig });
