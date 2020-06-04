let specialAttrs = ['htmlFor', 'className'];
let innerAttrs = ['key', 'children'];

function render(vnode, container) {
    let node = transFormVnodeToNode(vnode);
    container.appendChild(node);
}

function transFormVnodeToNode(vnode) {
    let node;
    if (typeof vnode === 'string') {
        return document.createTextNode(vnode)
    }

    let { type, props } = vnode;
    if (typeof type === 'string') {
        node = createElement(vnode);
    } else if (typeof type === "function") {
        if (type.isClassComponent) {
            node = createClassCompnent(vnode)
        } else {
            node = createFunCompnent(vnode);
        }
    }
    if (props.children) {
        props.children.forEach(c => {
            node.appendChild(transFormVnodeToNode(c));
        });
    }
    return node;
}

function createElement(vnode) {
    let { type, props } = vnode;
    console.log(props)
    let node = document.createElement(type);
    let { children, htmlFor, className, style, ...otherProps } = props;
    if (htmlFor) {
        node.setAttribute('for', htmlFor)
    }
    if (className) {
        node.setAttribute('class', className)
    }
    if (style) {
        let cssText = Object.keys(style).map(s => `${s}:${style[s]}`).join(';');
        console.log(cssText);
        node.setAttribute('style', cssText);
    }
    Object.keys(otherProps).forEach(k=>{
        if(k.startsWith('on')){
            console.log(k)
            console.log(otherProps[k])
            node[k.toLowerCase()] = otherProps[k];
        }
    })
    return node;
}

function createFunCompnent(vnode) {
    let { type, props } = vnode;
    return transFormVnodeToNode(type(props));
}

function createClassCompnent(vnode) {
    let { type, props } = vnode;
    let nodeInstance = new type(props)
    return transFormVnodeToNode(nodeInstance.render());
}

export default { render }