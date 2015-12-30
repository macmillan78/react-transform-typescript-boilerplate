import * as React from 'react';
import { Component } from 'react';

export interface CounterState {
  counter:number;
}
export interface CounterProps {
  color:string;
  increment:number;
}

export class Counter extends Component<CounterProps, CounterState> {
  private interval:number;

  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.interval = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({
      counter: this.state.counter + this.props.increment
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
        <h1 style={{ color: this.props.color }}>
          Counter ({this.props.increment}): {this.state.counter}
        </h1>
    );
  }
}