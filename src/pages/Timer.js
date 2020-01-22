import React, { Component } from 'react';

import './Timer.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="controls">
            <a href="#" id="btn_start" className="button btn_start">Start</a>
            <a href="#" id="btn_pause" className="button btn_pause">Pause</a>
            <a href="#" id="btn_passed" className="button btn_passed">Passed</a>
            <a href="#" id="btn_reset" className="button btn_reset">Reset</a>
            <a href="#" id="btn_clear" className="button btn_clear">Clear</a>
        </nav>
        <div className="limiter"></div>
        <div className="display"></div>
        <div className="bestlap"></div>
        <ul className="results"></ul>
      </div>
    );
  }
}

export default App;
// export default withAuthenticator(App, true);
