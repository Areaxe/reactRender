import React from './react';
import ReactDom from './react-dom';

function Comp1(props) {
    return <div style={{ color: 'red' }}>{props.name}</div>
}

class Comp2 extends React.Component {
    handleClick() {
        alert(this.props.name)
    }
    render() {
        return <div onClick={() => this.handleClick()}>{this.props.name}</div>
    }
}

ReactDom.render(
    <div className="aaa">
        <h2>test h2</h2>
        <h3>test h2</h3>
        <Comp1 name="Comp1" />
        <Comp2 name="Comp2" />
    </div>,
    document.getElementById('root')
)