import React, { Component, Fragment } from 'react';

import { API } from 'aws-amplify'

class Title extends Component {
  constructor(props) {
    super(props);

    this.getLeague();
  }

  state = {
    logo: 'https://deepracer-logos.s3.ap-northeast-2.amazonaws.com/logo_deepracer.png',
    title: 'DeepRacer League',
  }

  getLeague = async () => {
    // console.log('calling getLeague');
    const response = await API.get('api39c9f475', `/leagues/object/${this.props.league}`);
    // alert(JSON.stringify(response, null, 2));
    if (response && response.league) {
      this.setState({
        logo: response.logo,
        title: response.title,
      });
    }
  };

  render() {
    return (
      <Fragment>
        <div className="logo">
          <img alt="deepracer" src={this.state.logo} />
        </div>
        <h1 className="title">
          {this.state.title}
        </h1>
      </Fragment>
    );
  }
}

export default Title;
