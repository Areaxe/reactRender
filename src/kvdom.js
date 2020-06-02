export function initVNode(vnode) {
    const { vtype } = vnode;
    if (!vtype) {
        return document.createTextNode(vnode);
    }
    if (vtype === 1) {
        return createElement(vnode)
    } else if (vtype === 2) {
        return createClassComp(vnode);
    } else if (vtype === 3) {
        return createFuncComp(vnode);
    }
}

export function createVNode(vtype, type, props) {
    return { vtype, type, props }
}

function createElement(vNode) {
    let { type, props } = vNode;
    let node = document.createElement(type);
    let { key, children, ...rest } = props;
    Object.keys(rest).forEach(k => {
        if (k === 'className') {
            node.setAttribute('class', rest[k]);
        } else if (k === 'htmlfor') {
            node.setAttribute('for', rest[k]);
        } else if (k === 'style' && typeof rest[k] === 'object') {
            let style = Object.keys(rest[k]).map(s => `${s}: ${rest[k][s]}`).join(';');
            node.setAttribute('style', style);
        } else if (k.startsWith('on')) {
            // node.addEventListener(k.toLowerCase(), rest[k])
            node[k.toLowerCase()] = rest[k]
        } else {
            node.setAttribute(k, rest[k]);
        }
    });

    children.forEach(c => {
        node.appendChild(initVNode(c))
    })

    return node;
}

function createFuncComp(vNode) {
    let { type, props } = vNode;
    return initVNode(type(props));
}

function createClassComp(vNode) {
    let { type, props } = vNode;
    const compoment = new type(props)
    return initVNode(compoment.render());
}