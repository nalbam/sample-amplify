import React, { Component, Fragment } from 'react';

import { API } from 'aws-amplify'

import Laptime from './Laptime';

class Times extends Component {
  constructor(props) {
    super(props);

    this.getTimes();
  }

  state = {
    times: [],
  }

  getTimes = async () => {
    // console.log('calling getTimes');
    const res = await API.get('apiefea82cc', `/items/${this.props.league}`);
    // alert(JSON.stringify(res, null, 2));
    if (res && res.length > 0) {
      let items = res.sort(this.compare);
      // console.log(items);
      this.setState({
        times: items,
      });
    }
  }

  compare(a, b) {
    let a1 = a.laptime.split(':');
    let b1 = b.laptime.split(':');
    let a2 = ((+a1[0]) * 60) + (+a1[1]);
    let b2 = ((+b1[0]) * 60) + (+b1[1]);
    // let a2 = this.sec2num(a.laptime);
    // let b2 = this.sec2num(b.laptime);
    if (a2 < b2) {
      return -1;
    } else if (a2 > b2) {
      return 1;
    }
    return 0;
  }

  sec2num(t) {
    let a = t.split(':');
    return ((+a[0]) * 60) + (+a[1]);
  }

  render() {
    const list = this.state.times.map(
      (item, index) => (<Laptime key={index} rank={index} item={item} />)
    );

    return (
      <Fragment>
        <div className="lb-items">
          <div className="lb-header">
            <div>Rank</div>
            <div>Name</div>
            <div>Time</div>
          </div>
          {list}
        </div>
      </Fragment>
    );
  }
}

export default Times;
