(function(e){function t(t){for(var a,r,c=t[0],s=t[1],u=t[2],l=0,d=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},o={app:0},i=[];function c(e){return s.p+"js/"+({"candidatePage~moviesPage":"candidatePage~moviesPage",candidatePage:"candidatePage",moviesPage:"moviesPage"}[e]||e)+"."+{"candidatePage~moviesPage":"0ac43f86",candidatePage:"27d91f1b",moviesPage:"1365c9eb"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={candidatePage:1,moviesPage:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({"candidatePage~moviesPage":"candidatePage~moviesPage",candidatePage:"candidatePage",moviesPage:"moviesPage"}[e]||e)+"."+{"candidatePage~moviesPage":"31d6cfe0",candidatePage:"7cba7a00",moviesPage:"50b8f068"}[e]+".css",o=s.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===a||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[e],f.parentNode.removeChild(f),n(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"5c0b":function(e,t,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},"9c0c":function(e,t,n){},"9c13":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/movies"}},[e._v("NYTimes Movie Reviews")]),e._v(" | "),n("router-link",{attrs:{to:"/candidate"}},[e._v("Custom Candidate API")])],1),n("router-view")],1)},o=[],i=(n("5c0b"),n("2877")),c={},s=Object(i["a"])(c,r,o,!1,null,null,null),u=s.exports,l=(n("caad"),n("d3b7"),n("4d63"),n("ac1f"),n("25f0"),n("2532"),n("466d"),n("8c4f")),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),a("HelloWorld",{attrs:{msg:"Demo Vue App, for Type-Safe APIs"}})],1)},f=[],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._m(0)])},m=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" For details on how we're handling type-safe APIs,"),n("br"),e._v(" check out the "),n("a",{attrs:{href:"https://github.com/jackkoppa/typesafe-api-clients-demo",target:"_blank",rel:"noopener"}},[e._v("repo here")]),e._v(". ")])}],v=a["a"].extend({name:"HelloWorld",props:{msg:String}}),g=v,h=(n("dc4c"),Object(i["a"])(g,p,m,!1,null,"85bd50d4",null)),P=h.exports,b=a["a"].extend({name:"HomePage",components:{HelloWorld:P}}),y=b,_=Object(i["a"])(y,d,f,!1,null,null,null),w=_.exports;a["a"].use(l["a"]);var k=[{path:"/",name:"home",component:w},{path:"/movies",name:"movies",component:function(){return Promise.all([n.e("candidatePage~moviesPage"),n.e("moviesPage")]).then(n.bind(null,"280c"))}},{path:"/candidate",name:"candidate",component:function(){return Promise.all([n.e("candidatePage~moviesPage"),n.e("candidatePage")]).then(n.bind(null,"f9db"))}}],j=new l["a"]({routes:k});j.beforeEach((function(e,t,n){var a,r,o="/access_token=";if(e.path.includes(o)){var i=(r=null===(a=e.path.match(new RegExp(o+"(.*)&token_type")))||void 0===a?void 0:a[1],null!==r&&void 0!==r?r:"");console.log("going to spotify",i),n({name:"spotify",params:{accessToken:i}})}else n()}));var E=j;a["a"].config.productionTip=!1,new a["a"]({router:E,render:function(e){return e(u)}}).$mount("#app")},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},dc4c:function(e,t,n){"use strict";var a=n("9c13"),r=n.n(a);r.a}});
//# sourceMappingURL=app.ccf82c52.js.map