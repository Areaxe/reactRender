import { initVNode } from "./kvdom";

function render(vnode, container) {
    let node = initVNode(vnode);
    container.appendChild(node);
}

export default { render }