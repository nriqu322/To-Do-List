!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){var o=n(1),r=n(2);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var c={insert:"head",singleton:!1};o(r,c);e.exports=r.locals||{}},function(e,t,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},c=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function i(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function d(e,t){for(var n={},o=[],r=0;r<e.length;r++){var c=e[r],d=t.base?c[0]+t.base:c[0],l=n[d]||0,s="".concat(d," ").concat(l);n[d]=l+1;var u=i(s),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(a[u].references++,a[u].updater(p)):a.push({identifier:s,updater:h(p,t),references:1}),o.push(s)}return o}function l(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var a=c(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var s,u=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function p(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=u(t,r);else{var c=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(c,a[t]):e.appendChild(c)}}function f(e,t,n){var o=n.css,r=n.media,c=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),c&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var m=null,v=0;function h(e,t){var n,o,r;if(t.singleton){var c=v++;n=m||(m=l(t)),o=p.bind(null,n,c,!1),r=p.bind(null,n,c,!0)}else n=l(t),o=f.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=d(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=i(n[o]);a[r].references--}for(var c=d(e,t),l=0;l<n.length;l++){var s=i(n[l]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}n=c}}}},function(e,t,n){(t=n(3)(!1)).push([e.i,"/* font-family: 'Lato', sans-serif; */\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nheader {\n  background-color: #60dda7;\n  text-align: center;\n  font-family: 'Lato', sans-serif;\n}\n\nh1 {\n  font-weight: 900 !important;\n  font-style: italic;\n  letter-spacing: 0.08rem;\n  padding: 5px 0 5px 0;\n  margin-bottom: 0;\n}\n\n.main-container {\n  font-family: Helvetica, sans-serif;\n}\n\n.left-menu {\n  background-color: lightskyblue;\n  width: 35%;\n}\n\n.todo-container {\n  background-color: lightcoral;\n  width: 65%;\n}\n\nli {\n  list-style: none;\n}\n\n.active-project {\n  font-weight: bold;\n  color: yellow;\n}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(a=o,i=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),"/*# ".concat(d," */")),c=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(c).concat([r]).join("\n")}var a,i,d;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var c=0;c<this.length;c++){var a=this[c][0];null!=a&&(r[a]=!0)}for(var i=0;i<e.length;i++){var d=[].concat(e[i]);o&&r[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),t.push(d))}},t}},function(e,t,n){"use strict";n.r(t);n(0);var o=()=>{const e=document.querySelector("#content"),t=document.createElement("header"),n=document.createElement("h1");e.appendChild(t),t.appendChild(n),n.textContent="ToDo APP";const o=document.createElement("div");o.classList.add("main-container","d-flex"),e.appendChild(o);const r=document.createElement("div");r.classList.add("left-menu");const c=document.createElement("h2");c.textContent="Projects",o.appendChild(r),r.appendChild(c);const a=document.createElement("div");a.classList.add("todo-container");const i=document.createElement("h2");i.textContent="Project Selected",o.appendChild(a),a.appendChild(i);const d=document.createElement("div");d.classList.add("new-project-container","d-flex"),r.appendChild(d);const l=document.createElement("input");l.classList.add("new-project","form-control"),l.id="new-project",l.setAttribute("type","text"),l.placeholder="Add New Project",d.appendChild(l);const s=document.createElement("button");s.classList.add("add-project-btn","btn-success","px-3"),s.id="add-project-btn",s.textContent="+",d.appendChild(s);const u=document.createElement("button");u.classList.add("delete-btn","btn","btn-danger"),u.textContent="DELETE",r.appendChild(u)};var r=e=>{const t=[];return{title:e,id:Date.now().toString(),addTodo:e=>t.push(e),removeTodo:e=>{t.splice(e,1)},getTodoList:()=>t}};const c=JSON.parse(localStorage.getItem("project.list"))||[];function a(){localStorage.setItem("project.list",JSON.stringify(c))}const i=e=>{const t=r(e);c.push(t),a()},d=()=>{const e=document.querySelector(".left-menu"),t=document.createElement("div");t.classList.add("project-list"),e.appendChild(t),c.forEach(e=>{const n=document.createElement("li");n.classList.add("project"),n.id=e.id,n.textContent=e.title,t.appendChild(n)})},l=()=>{document.querySelector(".project-list").addEventListener("click",e=>{if(document.querySelectorAll(".project").forEach(e=>{e.classList.remove("active-project")}),"li"===e.target.tagName.toLowerCase()){const{id:t}=e.target;document.getElementById(t).classList.add("active-project")}})};o(),0===c.length&&i("My First Project"),d(),l(),(()=>{const e=document.getElementById("new-project");e.addEventListener("keyup",t=>{13===t.keyCode&&""!==e.value&&(document.querySelector(".project-list").remove(),i(e.value),e.value="",d(),l())});document.getElementById("add-project-btn").addEventListener("click",()=>{""!==e.value&&(document.querySelector(".project-list").remove(),i(e.value),e.value="",d(),l())})})(),document.querySelector(".delete-btn").addEventListener("click",()=>{const e=document.querySelector(".active-project");e.remove();for(let t=0;t<c.length;t+=1)c[t].title===e.textContent&&(c.splice(t,1),a())}),(()=>{const e=document.querySelector(".todo-container"),t=document.createElement("div");t.classList.add("todo-list"),e.appendChild(t);r.getTodoList().forEach(e=>{const[n,o,r,c]=e,a=document.createElement("div");a.classList.add("todo-item"),a.textContent=n,t.appendChild(a)})})()}]);