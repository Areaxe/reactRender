function createElement(type, props, ...children) {
    props = props || {};
    props.children = children;
    return {
        type,
        props,
    }
}

class Component {
    static isClassComponent = true;
    constructor(props) {
        this.props = props;
    }
}

export default { createElement, Component }