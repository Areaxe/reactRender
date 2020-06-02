import React, { Component } from './kreact';
import ReactDOM from './kreact-dom';

const Comp1 = function (props) {
  return <div>Comp1</div>
}

class Comp2 extends Component {
  render() {
    return <div>Compon2</div>
  }
}

ReactDOM.render(
  <div>
    <h2 style={{color:'red'}}>H2</h2>
    <Comp2 />
    <Comp1 />
  </div>,
  document.getElementById('root')
);
