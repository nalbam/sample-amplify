import React, { Component, Fragment } from 'react';

class Popup extends Component {
  render() {
    return (
      <Fragment>
        <div className="pop-layer">
          <div className="pop-bg"></div>
          <div className="pop-container">
            <div className="pop-title">{this.props.title}</div>
            <div className="pop-racer">{this.props.racer}</div>
            <div className="pop-time">{this.props.time}</div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Popup;
