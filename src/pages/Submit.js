import React, { Component, Fragment } from 'react';

// import Amplify, { Analytics, Storage, API } from 'aws-amplify'
import { withAuthenticator, Authenticator } from 'aws-amplify-react'
import signUpConfig from '../config/signUpConfig'

import Title from '../component/Title';

class App extends Component {
  render() {
    return (
      <Fragment>
        <header className="App-header">
          <Authenticator usernameAttributes='email' />
        </header>
        <header className="App-header">
          <Title league="demo" />
        </header>
        <div className="App-body">
          Submit
        </div>
      </Fragment>
    );
  }
}

// export default App;
// export default withAuthenticator(App, true);
export default withAuthenticator(App, { usernameAttributes: 'email', signUpConfig });
