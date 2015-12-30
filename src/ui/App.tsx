var style:any = require('./App.scss');

import * as React from 'react';
import { Component } from 'react';
import { NICE, SUPER_NICE } from './colors';
import { Counter } from './Counter';

export class App extends Component<{}, {}> {
  render() {
    return (
      <div className={style.app}>
        <div>Some text here.</div>
        <Counter increment={1} color={NICE} />
        <Counter increment={5} color={SUPER_NICE} />
      </div>
    );
  }
}