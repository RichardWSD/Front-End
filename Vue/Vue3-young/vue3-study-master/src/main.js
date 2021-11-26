import { createApp, createRenderer, h, defineComponent } from "vue";
import App from "./App.vue";
import "./index.css";
import CanvasApp from "./CanvasApp.vue";

createApp(App)
  .component("comp", { render: () => h("div", "i am comp") })
  .mount("#app");

// // alert('来了老弟')
// const nodeOps = {
//   insert: (child, parent, anchor) => {
//     child.parent = parent;
//     if (!parent.childs) { // 格式化父子关系
//       parent.childs = [child]
//     } else {
//       parent.childs.push(child);
//     }
//     if (parent.nodeType == 1) {
//       draw(child); // 开始绘图
//       if (child.onClick) {
//         ctx.canvas.addEventListener('click', () => {
//           child.onClick();
//           setTimeout(() => {
//             draw(child)
//           }, 0);
//         }, false)
//       }
//     }
//   },
//   remove: child => { },
//   createElement: (tag, isSVG, is) => {
//     return { tag }
//   },
//   createText: text => { },
//   createComment: text => { },
//   setText: (node, text) => { },
//   setElementText: (el, text) => { },
//   parentNode: node => { },
//   nextSibling: node => { },
//   querySelector: selector => { },
//   setScopeId(el, id) { },
//   cloneNode(el) { },
//   insertStaticContent(content, parent, anchor, isSVG) { },
//   patchProp(el, key, prevValue, nextValue) {
//     el[key] = nextValue;
//   },
// };

// const draw = (el, noClear) => {
//   if (!noClear) {
//     ctx.clearRect(0, 0, canvas.width, canvas.height)
//   }
//   if (el.tag == 'piechart') {
//     let { data, r, x, y } = el;
//     let total = data.reduce((memo, current) => memo + current.count, 0);
//     let start = 0,
//       end = 0;
//     data.forEach(item => {
//       end += item.count / total * 360;
//       drawPieChart(start, end, item.color, x, y, r);
//       drawPieChartText(item.name, (start + end) / 2, x, y, r);
//       start = end;
//     });
//   }
//   el.childs && el.childs.forEach(child => draw(child, true));
// }

// const d2a = (n) => {
//   return n * Math.PI / 180;
// }
// const drawPieChart = (start, end, color, cx, cy, r) => {
//   let x = cx + Math.cos(d2a(start)) * r;
//   let y = cy + Math.sin(d2a(start)) * r;
//   ctx.beginPath();
//   ctx.moveTo(cx, cy);
//   ctx.lineTo(x, y);
//   ctx.arc(cx, cy, r, d2a(start), d2a(end), false);
//   ctx.fillStyle = color;
//   ctx.fill();
//   ctx.stroke();
//   ctx.closePath();
// }
// const drawPieChartText = (val, position, cx, cy, r) => {
//   ctx.beginPath();
//   let x = cx + Math.cos(d2a(position)) * r / 1.25 - 20;
//   let y = cy + Math.sin(d2a(position)) * r / 1.25;
//   ctx.fillStyle = '#000';
//   ctx.font = '20px 微软雅黑';
//   ctx.fillText(val, x, y);
//   ctx.closePath();
// }

// let renderer = createRenderer(nodeOps);
// let ctx;
// let canvas;
// // 扩展mount，首先创建一个画布元素
// function createCanvasApp(App) {
//   const app = renderer.createApp(App);

//   const mount = app.mount
//   app.mount = function(selector) {
//     canvas = document.createElement('canvas');
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     document.querySelector(selector).appendChild(canvas);
//     ctx = canvas.getContext('2d');
//     mount(canvas);
//   }
//   return app
// }

// createCanvasApp(CanvasApp).mount('#demo')
