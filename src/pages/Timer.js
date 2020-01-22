import React, { Component } from 'react';

import './Timer.css';

class App extends Component {
  /**
   * timer.js
   */

  // class Timer {
  //   constructor(limiter, display, bestlap, results) {
  //       limiter = limiter;
  //       display = display;
  //       bestlap = bestlap;
  //       results = results;
  //       clear();
  //   }

  time = null;
  running = null;

  times = [0, 0, 0];

  limiter = null;
  display = null;
  bestlap = null;
  results = null;

  start() {
      if (!time) {
          time = performance.now();
      }
      if (!running) {
          running = true;
          requestAnimationFrame(step.bind(this));
      }
  }

  pause() {
      time = null;
      running = false;
  }

  passed() {
      if (!time) {
          return;
      }
      if (times[0] > 0 || times[1] > 3) {
          record();
          restart();
      }
  }

  reset() {
      times = [0, 0, 0];
      print();
      pause();
  }

  clear() {
      if (time) {
          return;
      }
      records = [];
      sorted = [];
      limit = [4, 0, 0];
      reset();
      bestlap.innerText = '';
      while (results.lastChild) {
          results.removeChild(results.lastChild);
      }
  }

  press() {
      var stamp = new Date().getTime();
      if (!pressed || (stamp - pressed) > 3000) {
          passed();
          pressed = new Date().getTime();
      }
  }

  restart() {
      reset();
      start();
  }

  step(timestamp) {
      if (!running) {
          return;
      }
      calculate(timestamp);
      time = timestamp;
      print();
      requestAnimationFrame(step.bind(this));
  }

  calculate(timestamp) {
      var diff = timestamp - time;

      // limit
      limit[2] -= diff;
      if (limit[2] < 0) {
          limit[2] += 1000;
          limit[1] -= 1;
      }
      if (limit[1] < 0) {
          limit[1] += 60;
          limit[0] -= 1;
      }
      if (limit[0] < 0) {
          limit[2] = 0
          limit[1] = 0
          limit[0] = 0
          pause();
          return;
      }

      // times
      times[2] += diff;
      if (times[2] >= 1000) {
          times[2] -= 1000;
          times[1] += 1;
      }
      if (times[1] >= 60) {
          times[1] -= 60;
          times[0] += 1;
      }
      if (times[0] >= 60) {
          times[0] -= 60
      }
      if (times[2] < 0) {
          times[2] = 0;
      }
  }

  print() {
      limiter.innerText = format(limit);
      display.innerText = format(times);

      if (limit[0] <= 0 && limit[1] <= 30) {
          limiter.classList.add("limiter_red");
          limiter.classList.remove("limiter_yellow");
          limiter.classList.remove("limiter_normal");
      } else if (limit[0] <= 0 && limit[1] <= 60) {
          limiter.classList.add("limiter_yellow");
          limiter.classList.remove("limiter_normal");
          limiter.classList.remove("limiter_red");
      } else {
          limiter.classList.add("limiter_normal");
          limiter.classList.remove("limiter_yellow");
          limiter.classList.remove("limiter_red");
      }
  }

  record() {
      let li = document.createElement('li');
      li.innerText = format(times);
      results.appendChild(li);

      console.log(`record ${format(times)}`);

      records.push(times);
      sorted = records.slice();
      sorted.sort(compare);

      bestlap.innerText = format(sorted[0]);
  }

  squeeze() {
      if (records.length === 0) {
          return;
      }

      let latest = records[records.length - 1];

      console.log(`squeeze ${format(latest)}`);

      pause();

      times[2] += latest[2];
      times[1] += latest[1];
      times[0] += latest[0];
      if (times[2] >= 1000) {
          times[2] -= 1000;
          times[1] += 1;
      }
      if (times[1] >= 60) {
          times[1] -= 60;
          times[0] += 1;
      }
      if (times[0] >= 60) {
          times[0] -= 60
      }
      if (times[2] < 0) {
          times[2] = 0;
      }

      records.splice(records.length - 1, 1);
      sorted = records.slice();
      sorted.sort(compare);

      bestlap.innerText = format(sorted[0]);

      results.removeChild(results.lastChild);

      start();
  }

  format(times) {
      return `${lpad(times[0], 2)}:${lpad(times[1], 2)}.${lpad(Math.floor(times[2]), 3)}`;
  }
  // }

  compare(a, b) {
    if (a[0] < b[0]) {
        return -1;
    } else if (a[0] > b[0]) {
        return 1;
    }
    if (a[1] < b[1]) {
        return -1;
    } else if (a[1] > b[1]) {
        return 1;
    }
    if (a[2] < b[2]) {
        return -1;
    } else if (a[2] > b[2]) {
        return 1;
    }
    return 0;
  }

  lpad(value, count) {
    var result = '000' + value.toString();
    return result.substr(result.length - count);
  }

  // ** socket.io //

  // let socket = io();

  // socket.on('timer', function (name) {
  //     console.log(`socket timer ${name}`);
  //     exec(name);
  // });

  // function send(name) {
  //     socket.emit('timer', name);
  // }

  // ** socket.io //

  // let timer = null;

  exec(name) {
    switch (name) {
        case 'start':
            timer.start();
            break;
        case 'pause':
            timer.pause();
            break;
        case 'passed':
            timer.passed();
            break;
        case 'press':
            timer.press();
            break;
        case 'reset':
            timer.reset();
            break;
        case 'clear':
            timer.clear();
            break;
        case 'squeeze':
            timer.squeeze();
            break;
    }
  }

  key_map = {
    '81': 'start', // q
    '87': 'pause', // w
    '69': 'passed', // e
    '82': 'reset', // r
    '84': 'clear', // t
    '89': 'squeeze', // y
  };

  btn_listener(event) {
    let name = event.target.id.substring(4);

    exec(name);
  }

  componentDidMount() {
    limiter = document.querySelector('.limiter');
    display = document.querySelector('.display');
    bestlap = document.querySelector('.bestlap');
    results = document.querySelector('.results');

    clear();

    document.getElementById('btn_start').addEventListener('click', btn_listener);
    document.getElementById('btn_pause').addEventListener('click', btn_listener);
    document.getElementById('btn_passed').addEventListener('click', btn_listener);
    document.getElementById('btn_reset').addEventListener('click', btn_listener);
    document.getElementById('btn_clear').addEventListener('click', btn_listener);

    document.addEventListener('keydown', function (event) {
      console.log(`keydown ${event.keyCode} : ${key_map[event.keyCode]}`);

      // send(key_map[event.keyCode]);
      exec(key_map[event.keyCode]);
    });
  }

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
