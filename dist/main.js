!function(e){var t={};function n(o){if(t[o])return t[o].exports;var d=t[o]={i:o,l:!1,exports:{}};return e[o].call(d.exports,d,d.exports,n),d.l=!0,d.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var d in e)n.d(o,d,function(t){return e[t]}.bind(null,d));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){var o=n(1),d=n(2);"string"==typeof(d=d.__esModule?d.default:d)&&(d=[[e.i,d,""]]);var i={insert:"head",singleton:!1};o(d,i);e.exports=d.locals||{}},function(e,t,n){"use strict";var o,d=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),r=[];function c(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function a(e,t){for(var n={},o=[],d=0;d<e.length;d++){var i=e[d],a=t.base?i[0]+t.base:i[0],l=n[a]||0,s="".concat(a," ").concat(l);n[a]=l+1;var u=c(s),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(r[u].references++,r[u].updater(p)):r.push({identifier:s,updater:v(p,t),references:1}),o.push(s)}return o}function l(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var d=n.nc;d&&(o.nonce=d)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var r=i(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var s,u=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function p(e,t,n,o){var d=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=u(t,d);else{var i=document.createTextNode(d),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(i,r[t]):e.appendChild(i)}}function m(e,t,n){var o=n.css,d=n.media,i=n.sourceMap;if(d?e.setAttribute("media",d):e.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var f=null,h=0;function v(e,t){var n,o,d;if(t.singleton){var i=h++;n=f||(f=l(t)),o=p.bind(null,n,i,!1),d=p.bind(null,n,i,!0)}else n=l(t),o=m.bind(null,n,t),d=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else d()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=d());var n=a(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var d=c(n[o]);r[d].references--}for(var i=a(e,t),l=0;l<n.length;l++){var s=c(n[l]);0===r[s].references&&(r[s].updater(),r.splice(s,1))}n=i}}}},function(e,t,n){(t=n(3)(!1)).push([e.i,"* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nheader {\n  background-color: #60dda7;\n  text-align: center;\n  font-family: 'Lato', sans-serif;\n  box-shadow: 0 7px 5px -2px rgba(96, 221, 167, 0.5);\n}\n\nh1 {\n  font-weight: 900 !important;\n  font-style: italic;\n  letter-spacing: 0.08rem;\n  padding: 5px 0 5px 0;\n  margin-bottom: 0;\n}\n\nh2 {\n  font-family: 'Lato', sans-serif;\n}\n\n.main-container {\n  font-family: Helvetica, sans-serif;\n}\n\n.left-menu {\n  width: 30%;\n  box-shadow: 6px 1px 7px -2px rgba(96, 221, 167, 1);\n  height: 94vh;\n}\n\n.todo-container {\n  width: 70%;\n  box-shadow: 0 1px 7px -2px rgba(96, 221, 167, 1);\n}\n\nli {\n  list-style: none;\n}\n\n.project {\n  color: rgb(104, 100, 100);\n}\n\n.active-project {\n  font-weight: bold;\n  color: #000;\n}\n\n.todo-item-priority {\n  border: 1px gray;\n  border-radius: 10px;\n  text-transform: uppercase;\n  font-size: 12px;\n  color: #fff;\n  font-weight: bold;\n}\n\n.high {\n  background-color: rgb(214, 19, 19);\n}\n\n.medium {\n  background-color: darkorange;\n}\n\n.low {\n  background-color: green;\n}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var d=(r=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(a," */")),i=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([d]).join("\n")}var r,c,a;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var d={};if(o)for(var i=0;i<this.length;i++){var r=this[i][0];null!=r&&(d[r]=!0)}for(var c=0;c<e.length;c++){var a=[].concat(e[c]);o&&d[a[0]]||(n&&(a[2]?a[2]="".concat(n," and ").concat(a[2]):a[2]=n),t.push(a))}},t}},function(e,t,n){"use strict";n.r(t);n(0);var o=()=>{const e=document.querySelector("#content"),t=document.createElement("header"),n=document.createElement("h1");e.appendChild(t),t.appendChild(n),n.textContent="ToDo APP";const o=document.createElement("div");o.classList.add("main-container","d-flex"),e.appendChild(o);const d=document.createElement("div");d.classList.add("left-menu","pt-3","px-2");const i=document.createElement("h2");i.textContent="Projects",o.appendChild(d),d.appendChild(i);const r=document.createElement("div");r.classList.add("new-project-container","d-flex"),d.appendChild(r);const c=document.createElement("input");c.classList.add("new-project","form-control"),c.id="new-project",c.setAttribute("type","text"),c.placeholder="Add New Project",r.appendChild(c);const a=document.createElement("button");a.classList.add("add-project-btn","btn-success","px-3"),a.id="add-project-btn",a.textContent="+",r.appendChild(a);const l=document.createElement("button");l.classList.add("delete-btn","btn","btn-danger","py-0","my-2"),l.textContent="Delete",d.appendChild(l);const s=document.createElement("div");s.classList.add("todo-container","pl-3","pt-3");const u=document.createElement("div");u.classList.add("todo-item-container"),o.appendChild(s),s.appendChild(u);const p=document.createElement("div");p.classList.add("new-todo-container"),p.style.display="none",s.appendChild(p);const m=document.createElement("form");m.classList.add("new-todo","form-group","d-flex","mx-auto","p-3");const f=document.createElement("input");f.classList.add("todo-input-title","form-control"),f.id="todo-item-title",f.setAttribute("type","text"),f.placeholder="New todo...",f.required=!0,m.appendChild(f);const h=document.createElement("input");h.classList.add("todo-input-descrip","form-control"),h.placeholder="Add description...",h.required=!0,m.appendChild(h);const v=document.createElement("input");v.setAttribute("type","date"),v.classList.add("todo-input-date","form-control"),v.required=!0,m.appendChild(v);const y=document.createElement("select");y.classList.add("todo-input-priority","form-control");const C=document.createElement("option");C.textContent="Low",y.appendChild(C);const g=document.createElement("option");g.textContent="Medium",y.appendChild(g);const b=document.createElement("option");b.textContent="High",y.appendChild(b),m.appendChild(y),p.appendChild(m);const x=document.createElement("input");x.setAttribute("type","submit"),x.classList.add("add-todo-btn","btn-success","px-3"),x.id="add-todo-btn",m.appendChild(x)};var d=e=>({title:e,id:Date.now().toString(),todoList:[]});var i=(e,t,n,o)=>({title:e,description:t,dueDate:n,priority:o,id:Date.now().toString(),isCheked:!1});const r=JSON.parse(localStorage.getItem("project.list"))||[];function c(){localStorage.setItem("project.list",JSON.stringify(r))}const a=e=>{const t=d(e);r.push(t),c()},l=(e,t,n,o,d)=>{const r=i(e,t,n,o);d.todoList.push(r),c()},s=()=>{const e=document.querySelector(".left-menu"),t=document.createElement("div");t.classList.add("project-list"),e.appendChild(t),r.forEach(e=>{const n=document.createElement("li");n.classList.add("project"),n.id=e.id,n.textContent=e.title,t.appendChild(n)})},u=e=>{const t=document.querySelector(".todo-item-container"),n=document.querySelector(".new-todo-container");(e=>{for(;e.firstChild;)e.removeChild(e.firstChild)})(t);const o=document.createElement("h2");o.classList.add("title-project"),o.textContent=e.title,t.appendChild(o),n.style.display="",n.classList.add="d-flex";const d=document.createElement("div");d.classList.add("todo-list","d-flex","flex-column"),t.appendChild(d);let i=0;e.todoList.forEach(t=>{const n=document.createElement("div"),o=document.createElement("div"),r=document.createElement("div"),a=document.createElement("div");n.id="todo-item-"+i,n.classList.add("todo-item","d-flex","flex-column","px-2","py-3"),o.classList.add("d-flex","justify-content-between","align-items-center"),r.classList.add("todo-item-left","d-flex","align-items-center"),r.id="todo-item-left-"+i,a.classList.add("todo-item-right","d-flex","align-items-center","mr-4"),a.id="todo-item-right-"+i,d.appendChild(n),n.appendChild(o),o.appendChild(r),o.appendChild(a);const l=document.createElement("input");l.setAttribute("type","checkbox"),r.appendChild(l);const s=document.createElement("div");s.classList.add("todo-item-title","font-weight-bold","ml-2"),s.id="todo-item-title-"+i,s.textContent=t.title,r.appendChild(s);const u=document.createElement("div");u.classList.add("todo-item-descrip","font-italic","col-12","ml-1"),u.id="todo-item-descrip-"+i,u.textContent=t.description,n.appendChild(u);const p=document.createElement("div");p.classList.add("todo-item-priority","px-2","mx-2"),p.id="todo-item-priority-"+i,p.textContent=t.priority,p.classList.remove("high","medium","low"),"high"===p.textContent.toLowerCase()?p.classList.add("high"):"medium"===p.textContent.toLowerCase()?p.classList.add("medium"):p.classList.add("low"),a.appendChild(p),l.addEventListener("click",()=>{l.checked?(s.style.textDecoration="line-through",n.style.backgroundColor="rgb(233, 233, 233)",n.style.color="gray",p.classList.add("bg-secondary")):(s.style.textDecoration="none",n.style.backgroundColor="#fff",n.style.color="black",p.classList.remove("bg-secondary"))});const m=document.createElement("div");m.classList.add("todo-item-date"),m.id="todo-item-date-"+i,m.textContent=t.dueDate,a.appendChild(m),((e,t)=>{const n=document.getElementById("todo-item-title-"+t);n.addEventListener("click",()=>{const e=document.getElementById("todo-item-left-"+t),o=document.createElement("input");o.classList.add("edit-todo-title"),o.value=n.textContent,n.textContent="",e.appendChild(o),o.addEventListener("keydown",e=>{13===e.keyCode&&""!==o.value&&(n.textContent=o.value,o.remove(),c())})});const o=document.getElementById("todo-item-descrip-"+t);o.addEventListener("click",()=>{const e=document.getElementById("todo-item-"+t),n=document.createElement("input");n.classList.add("edit-todo-title"),n.value=o.textContent,o.textContent="",e.appendChild(n),n.addEventListener("keydown",e=>{13===e.keyCode&&""!==n.value&&(o.textContent=n.value,n.remove(),c())})});const d=document.getElementById("todo-item-priority-"+t);d.addEventListener("click",()=>{const e=document.createElement("select"),t=document.createElement("option");t.textContent="Low",e.appendChild(t);const n=document.createElement("option");n.textContent="Medium",e.appendChild(n);const o=document.createElement("option");o.textContent="High",e.appendChild(o),e.classList.add("edit-todo-priority"),e.value=d.textContent,d.textContent="",d.after(e),e.addEventListener("keydown",t=>{13===t.keyCode&&""!==e.value&&(d.textContent=e.value,d.classList.remove("high","medium","low"),"high"===d.textContent.toLowerCase()?d.classList.add("high"):"medium"===d.textContent.toLowerCase()?d.classList.add("medium"):d.classList.add("low"),e.remove(),c())})});const i=document.getElementById("todo-item-date-"+t);i.addEventListener("click",()=>{const e=document.createElement("input");e.setAttribute("type","date"),e.classList.add("edit-todo-date"),e.value=i.textContent,i.textContent="",i.after(e),e.addEventListener("keydown",t=>{13===t.keyCode&&""!==e.value&&(i.textContent=e.value,e.remove(),c())})})})(0,i);const f=document.createElement("button");f.classList.add("btn","btn-danger","py-0","mx-2"),f.id="delete-btn-"+i,f.textContent="x",f.style.visibility="hidden",a.appendChild(f),((e,t)=>{const n=document.getElementById("delete-btn-"+t),o=document.getElementById("todo-item-"+t);n.addEventListener("click",()=>{o.remove(),e.todoList.splice(t,1),c()})})(e,i),n.addEventListener("mouseenter",()=>{f.style.visibility=""}),n.addEventListener("mouseleave",()=>{f.style.visibility="hidden"}),i+=1})};let p;const m=()=>{document.querySelector(".project-list").addEventListener("click",e=>{if(document.querySelectorAll(".project").forEach(e=>{e.classList.remove("active-project")}),"li"===e.target.tagName.toLowerCase()){const{id:t}=e.target;document.getElementById(t).classList.add("active-project"),p=r.find(e=>e.id===t),u(p)}})};o(),0===r.length&&(a("My First Project"),0===r[0].todoList.length&&(l("Create a Project","Type the name of the new project on the left pane",(new Date).toISOString().split("T")[0],"high",r[0]),l("Create a new Task","Click on the add button and fill the form",(new Date).toISOString().split("T")[0],"high",r[0]),l("Mark todo as done","Click on the check box",(new Date).toISOString().split("T")[0],"high",r[0]),l("Delete todo","Click on the red x icon to delete",(new Date).toISOString().split("T")[0],"medium",r[0]),l("Edit Todo","Click on the element you want to edit and press enter after edit it",(new Date).toISOString().split("T")[0],"low",r[0]))),s(),m(),(()=>{const e=document.getElementById("new-project");e.addEventListener("keyup",t=>{13===t.keyCode&&""!==e.value&&(document.querySelector(".project-list").remove(),a(e.value),e.value="",s(),m())});document.getElementById("add-project-btn").addEventListener("click",()=>{""!==e.value&&(document.querySelector(".project-list").remove(),a(e.value),e.value="",s(),m())})})(),document.querySelector(".delete-btn").addEventListener("click",()=>{const e=document.querySelector(".active-project");e.remove();for(let t=0;t<r.length;t+=1)if(r[t].title===e.textContent){r.splice(t,1);const e=document.querySelector(".todo-item-container");for(;e.firstChild;)e.removeChild(e.firstChild);document.querySelector(".new-todo-container").style.display="none",c()}}),(()=>{const e=document.querySelector(".todo-input-title"),t=document.querySelector(".todo-input-descrip"),n=document.querySelector(".todo-input-date"),o=document.querySelector(".todo-input-priority");document.addEventListener("click",d=>{d.target&&"add-todo-btn"===d.target.id&&""!==e.value&&""!==t.value&&""!==n.value&&(l(e.value,t.value,n.value,o.value,p),e.value="",t.value="",n.value="",o.value="Low",u(p))})})(),u(r[0])}]);