import { createVNode } from './kvdom';

function createElement(type, props, ...children) {
    let vtype;
    props.children = children;
    if (typeof type === 'string') {
        vtype = 1;
    } else if (typeof type === 'function') {
        if (type.isClassComponent) {
            vtype = 2;
        } else {
            vtype = 3;
        }
    }
    return createVNode(vtype, type, props)
}

export class Component {
    static isClassComponent = true;

    constructor(props) {
        this.props = props;
        this.state = {};
    }
    setState() {

    }
}

export default { createElement, Component }