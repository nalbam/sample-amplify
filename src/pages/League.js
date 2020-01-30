import React, { Component, Fragment } from 'react';

import Times from '../component/Times';
import Title from '../component/Title';

import '../pop.css';

// import '../assets/confetti.min.js';

class App extends Component {
  render() {
    // console.log(this.props.match.params.league);

    return (
      <Fragment>
        <header className="App-header">
          <Title league={this.props.match.params.league} />
        </header>
        <div className="App-body">
          <Times league={this.props.match.params.league} />
        </div>
      </Fragment>
    );
  }
}

export default App;
