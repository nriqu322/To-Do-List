!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){var o=n(1),r=n(2);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var c={insert:"head",singleton:!1};o(r,c);e.exports=r.locals||{}},function(e,t,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},c=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function d(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function a(e,t){for(var n={},o=[],r=0;r<e.length;r++){var c=e[r],a=t.base?c[0]+t.base:c[0],l=n[a]||0,s="".concat(a," ").concat(l);n[a]=l+1;var u=d(s),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:s,updater:v(p,t),references:1}),o.push(s)}return o}function l(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var i=c(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var s,u=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function p(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=u(t,r);else{var c=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(c,i[t]):e.appendChild(c)}}function m(e,t,n){var o=n.css,r=n.media,c=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),c&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var f=null,h=0;function v(e,t){var n,o,r;if(t.singleton){var c=h++;n=f||(f=l(t)),o=p.bind(null,n,c,!1),r=p.bind(null,n,c,!0)}else n=l(t),o=m.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=a(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=d(n[o]);i[r].references--}for(var c=a(e,t),l=0;l<n.length;l++){var s=d(n[l]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}n=c}}}},function(e,t,n){(t=n(3)(!1)).push([e.i,"/* font-family: 'Lato', sans-serif; */\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nheader {\n  background-color: #60dda7;\n  text-align: center;\n  font-family: 'Lato', sans-serif;\n}\n\nh1 {\n  font-weight: 900 !important;\n  font-style: italic;\n  letter-spacing: 0.08rem;\n  padding: 5px 0 5px 0;\n  margin-bottom: 0;\n}\n\n.main-container {\n  font-family: Helvetica, sans-serif;\n}\n\n.left-menu {\n  background-color: lightskyblue;\n  width: 35%;\n}\n\n.todo-container {\n  background-color: lightcoral;\n  width: 65%;\n}\n\nli {\n  list-style: none;\n}\n\n.active-project {\n  font-weight: bold;\n  color: yellow;\n}\n\n/* .new-todo-container {\n  display: none;\n} */\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(i=o,d=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(d),"/*# ".concat(a," */")),c=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(c).concat([r]).join("\n")}var i,d,a;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(r[i]=!0)}for(var d=0;d<e.length;d++){var a=[].concat(e[d]);o&&r[a[0]]||(n&&(a[2]?a[2]="".concat(n," and ").concat(a[2]):a[2]=n),t.push(a))}},t}},function(e,t,n){"use strict";n.r(t);n(0);var o=()=>{const e=document.querySelector("#content"),t=document.createElement("header"),n=document.createElement("h1");e.appendChild(t),t.appendChild(n),n.textContent="ToDo APP";const o=document.createElement("div");o.classList.add("main-container","d-flex"),e.appendChild(o);const r=document.createElement("div");r.classList.add("left-menu");const c=document.createElement("h2");c.textContent="Projects",o.appendChild(r),r.appendChild(c);const i=document.createElement("div");i.classList.add("new-project-container","d-flex"),r.appendChild(i);const d=document.createElement("input");d.classList.add("new-project","form-control"),d.id="new-project",d.setAttribute("type","text"),d.placeholder="Add New Project",i.appendChild(d);const a=document.createElement("button");a.classList.add("add-project-btn","btn-success","px-3"),a.id="add-project-btn",a.textContent="+",i.appendChild(a);const l=document.createElement("button");l.classList.add("delete-btn","btn","btn-danger"),l.textContent="DELETE",r.appendChild(l);const s=document.createElement("div");s.classList.add("todo-container");const u=document.createElement("div");u.classList.add("todo-item-container"),o.appendChild(s),s.appendChild(u);const p=document.createElement("div");p.classList.add("new-todo-container"),p.style.display="none",s.appendChild(p);const m=document.createElement("div");m.classList.add("new-todo","form-group","d-flex","mx-auto");const f=document.createElement("input");f.classList.add("todo-item-title","form-control"),f.id="todo-item-title",f.setAttribute("type","text"),f.placeholder="New todo...",m.appendChild(f);const h=document.createElement("input");h.classList.add("todo-item-descrip","form-control"),h.placeholder="Add description...",m.appendChild(h);const v=document.createElement("input");v.setAttribute("type","date"),v.classList.add("todo-item-date","form-control"),m.appendChild(v);const y=document.createElement("select");y.classList.add("todo-item-priority","form-control");const C=document.createElement("option");C.textContent="High",y.appendChild(C);const b=document.createElement("option");b.textContent="Medium",y.appendChild(b);const g=document.createElement("option");g.textContent="Low",y.appendChild(g),m.appendChild(y),p.appendChild(m);const E=document.createElement("button");E.classList.add("add-todo-btn","btn-success","px-3"),E.id="add-todo-btn",E.textContent="Add",m.appendChild(E)};var r=e=>{const t=[];return{title:e,id:Date.now().toString(),addTodo:e=>t.push(e),removeTodo:e=>{t.splice(e,1)},getTodoList:()=>t,todoList:t}};var c=(e,t,n,o)=>({title:e,description:t,dueDate:n,priority:o,isCheked:!1});const i=JSON.parse(localStorage.getItem("project.list"))||[];function d(){localStorage.setItem("project.list",JSON.stringify(i))}const a=e=>{const t=r(e);i.push(t),d()},l=(e,t,n,o,r)=>{const i=c(e,t,n,o);r.addTodo(i)},s=()=>{const e=document.querySelector(".left-menu"),t=document.createElement("div");t.classList.add("project-list"),e.appendChild(t),i.forEach(e=>{const n=document.createElement("li");n.classList.add("project"),n.id=e.id,n.textContent=e.title,t.appendChild(n)})},u=()=>{const e=document.querySelector(".todo-item-container"),t=document.querySelector(".new-todo-container");(e=>{for(;e.firstChild;)e.removeChild(e.firstChild)})(e);const n=document.querySelector(".active-project"),o=i.find(e=>e.id===n.id),r=document.createElement("h2");r.classList.add("title-project"),r.textContent=o.title,e.appendChild(r),t.style.display="",t.classList.add="d-flex";const c=document.createElement("div");c.classList.add("todo-list"),e.appendChild(c),o.todoList.forEach(e=>{const t=document.createElement("div");t.classList.add("todo-item"),c.appendChild(t);const n=document.createElement("input");n.setAttribute("type","checkbox"),t.appendChild(n);const o=document.createElement("div");o.classList.add("todo-item-title"),o.textContent=e.title,t.appendChild(o);const r=document.createElement("div");r.classList.add("todo-item-descrip"),r.textContent=e.description,t.appendChild(r);const i=document.createElement("div");i.classList.add("todo-item-date"),i.textContent=e.dueDate,t.appendChild(i);const d=document.createElement("div");d.classList.add("todo-item-priority"),d.textContent=e.priority,t.appendChild(d)})},p=()=>{document.querySelector(".project-list").addEventListener("click",e=>{if(document.querySelectorAll(".project").forEach(e=>{e.classList.remove("active-project")}),"li"===e.target.tagName.toLowerCase()){const{id:t}=e.target;document.getElementById(t).classList.add("active-project"),u()}})};o(),0===i.length&&a("My First Project"),s(),p(),(()=>{const e=document.getElementById("new-project");e.addEventListener("keyup",t=>{13===t.keyCode&&""!==e.value&&(document.querySelector(".project-list").remove(),a(e.value),e.value="",s(),p())});document.getElementById("add-project-btn").addEventListener("click",()=>{""!==e.value&&(document.querySelector(".project-list").remove(),a(e.value),e.value="",s(),p())})})(),document.querySelector(".delete-btn").addEventListener("click",()=>{const e=document.querySelector(".active-project");e.remove();for(let t=0;t<i.length;t+=1)if(i[t].title===e.textContent){i.splice(t,1);const e=document.querySelector(".todo-item-container");for(;e.firstChild;)e.removeChild(e.firstChild);document.querySelector(".new-todo-container").style.display="none",d()}}),l("Create a Project","Type the name of the new project on the left pane",(new Date).toISOString().split("T")[0],"high",i[0]),l("Create a new Task","Click on the add button and fill the form",(new Date).toISOString().split("T")[0],"high",i[0]),l("Mark todo as done","Click on the check box",(new Date).toISOString().split("T")[0],"high",i[0]),l("Delete todo","Click on the trask icon to delete",(new Date).toISOString().split("T")[0],"medium",i[0]),u(),(()=>{const e=document.querySelector("#todo-item-title"),t=document.querySelector(".todo-item-descrip"),n=document.querySelector(".todo-item-date"),o=document.querySelector(".todo-item-priority"),r=document.querySelector("#add-todo-btn"),c=document.querySelector(".active-project"),d=i.find(e=>e.id===c.id);r.addEventListener("click",()=>{console.log(e.value),l(e.value,t.value,n.value,o.value,d),u()})})()}]);