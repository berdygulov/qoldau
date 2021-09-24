import $ from 'jquery';

window.jQuery = $;
window.$ = $;

require('../vendor/jsplumb/jsPlumb.min');
require('../vendor/jsplumb/jsplumb-tree');

export default function () {
    const connectorPaintStyle = {
        lineWidth: 3,
        strokeStyle: "#4F81BE",
        joinstyle: "round"
    };

    const pdef = {
        // disable dragging
        DragOptions: null,
        // the tree container
        Container: "treemain"
    };

    const plumb = jsPlumb.getInstance(pdef);

    // all sizes are in pixels
    const opts = {
        prefix: 'node_',
        // left margin of the root node
        baseLeft: 24,
        // top margin of the root node
        baseTop: 24,
        // node width
        nodeWidth: 100,
        // horizontal margin between nodes
        hSpace: 36,
        // vertical margin between nodes
        vSpace: 10,
        imgPlus: 'tree_expand.png',
        imgMinus: 'tree_collapse.png',
        // queste non sono tutte in pixel
        sourceAnchor: [1, 0.5, 1, 0, 10, 0],
        targetAnchor: "LeftMiddle",
        sourceEndpoint: {
            endpoint: ["Image", {url: "tree_collapse.png"}],
            cssClass: "collapser",
            isSource: true,
            connector: ["Flowchart", {stub: [40, 60], gap: [10, 0], cornerRadius: 5, alwaysRespectStubs: false}],
            connectorStyle: connectorPaintStyle,
            enabled: false,
            maxConnections: -1,
            dragOptions: null
        },
        targetEndpoint: {
            endpoint: "Blank",
            maxConnections: -1,
            dropOptions: null,
            enabled: false,
            isTarget: true
        },
        connectFunc: function (tree, node) {
            const cid = node.data('id');
            console.log('Connecting node ' + cid);
        }
    };

    const tree = jQuery.jsPlumbTree(plumb, opts);
    tree.init();
    window.treemain = tree;
}