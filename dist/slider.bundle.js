(()=>{"use strict";var r,n,e,t,o,i,a,s,c,d,l,u,p,f,h={473:(r,n,e)=>{e.d(n,{Z:()=>h});var t=e(81),o=e.n(t),i=e(645),a=e.n(i),s=e(667),c=e.n(s),d=new URL(e(161),e.b),l=new URL(e(188),e.b),u=a()(o()),p=c()(d),f=c()(l);u.push([r.id,".slider-container {\r\n    width: 640px;\r\n    height: 360px;\r\n    background-color: #222;\r\n}\r\n\r\n.slides {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: relative;\r\n}\r\n\r\n.slides .slide-navigation-container {\r\n    height: 100%;\r\n    width: 100%;\r\n    z-index: 2;\r\n    position: absolute;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-template-rows: 1fr;\r\n    align-items: center;\r\n    padding: 0 12px;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.slide-navigation {\r\n    width: 48px;\r\n    height: 48px;\r\n    background-color: rgba(255, 255, 255, 0.4);\r\n    border-radius: 100%;\r\n    border: 1px solid #888;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.slide-navigation:hover {\r\n    background-color: rgba(255, 255, 255, 0.8);\r\n    cursor: pointer;\r\n}\r\n\r\n.slide-navigation-prev {\r\n    justify-self: start;\r\n    grid-column: 1 / 2;\r\n    grid-row: 1;\r\n}\r\n\r\n.slide-navigation-next {\r\n    justify-self: end;\r\n    grid-column: 2 / 3;\r\n    grid-row: 1;\r\n}\r\n\r\n.slides > img {\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: contain;\r\n}\r\n\r\n.next-arrow {\r\n    background: url("+p+");\r\n    background-size: 32px 32px;\r\n    width: 32px;\r\n    height: 32px;\r\n}\r\n\r\n.prev-arrow {\r\n    background: url("+f+");\r\n    background-size: 32px 32px;\r\n    width: 32px;\r\n    height: 32px;\r\n}\r\n\r\n.slider-dot-navigation-container {\r\n    align-self: end;\r\n    width: 60%;\r\n    justify-self: center;\r\n    grid-column: 1 / span 2;\r\n    height: 32px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 5px;\r\n}\r\n\r\n.slider-dot-container {\r\n    height: 14px;\r\n    width: 14px;\r\n    border-radius: 100%;\r\n    border: 2px solid #ddd;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.slider-dot-container:hover {\r\n    cursor: pointer;\r\n    background-color: #aaa;\r\n}\r\n\r\n.slider-dot {\r\n    height: 10px;\r\n    width: 10px;\r\n    box-sizing: border-box;\r\n    border-radius: 100%;\r\n}\r\n\r\n.slider-dot.selected {\r\n    border: 1px solid #ddd;\r\n    background-color: #555;\r\n}",""]);const h=u},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e="",t=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),t&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=r(n),t&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(r,e,t,o,i){"string"==typeof r&&(r=[[null,r,void 0]]);var a={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var d=0;d<r.length;d++){var l=[].concat(r[d]);t&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:r=>{r.exports=function(r,n){return n||(n={}),r?(r=String(r.__esModule?r.default:r),/^['"].*['"]$/.test(r)&&(r=r.slice(1,-1)),n.hash&&(r+=n.hash),/["'() \t\n]|(%20)/.test(r)||n.needQuotes?'"'.concat(r.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):r):r}},81:r=>{r.exports=function(r){return r[1]}},379:r=>{var n=[];function e(r){for(var e=-1,t=0;t<n.length;t++)if(n[t].identifier===r){e=t;break}return e}function t(r,t){for(var i={},a=[],s=0;s<r.length;s++){var c=r[s],d=t.base?c[0]+t.base:c[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var p=e(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var h=o(f,t);t.byIndex=s,n.splice(s,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function o(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;e.update(r=n)}else e.remove()}}r.exports=function(r,o){var i=t(r=r||[],o=o||{});return function(r){r=r||[];for(var a=0;a<i.length;a++){var s=e(i[a]);n[s].references--}for(var c=t(r,o),d=0;d<i.length;d++){var l=e(i[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=c}}},569:r=>{var n={};r.exports=function(r,e){var t=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,e)=>{r.exports=function(r){var n=e.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(t,r,n.options)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}},188:(r,n,e)=>{r.exports=e.p+"36bec1667db89cdb26a7.svg"},161:(r,n,e)=>{r.exports=e.p+"16e447b4597e29038bb9.svg"}},g={};function v(r){var n=g[r];if(void 0!==n)return n.exports;var e=g[r]={id:r,exports:{}};return h[r](e,e.exports,v),e.exports}v.m=h,v.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return v.d(n,{a:n}),n},v.d=(r,n)=>{for(var e in n)v.o(n,e)&&!v.o(r,e)&&Object.defineProperty(r,e,{enumerable:!0,get:n[e]})},v.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"==typeof window)return window}}(),v.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),(()=>{var r;v.g.importScripts&&(r=v.g.location+"");var n=v.g.document;if(!r&&n&&(n.currentScript&&(r=n.currentScript.src),!r)){var e=n.getElementsByTagName("script");e.length&&(r=e[e.length-1].src)}if(!r)throw new Error("Automatic publicPath is not supported in this browser");r=r.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),v.p=r})(),v.b=document.baseURI||self.location.href,v.nc=void 0,r=v(379),n=v.n(r),e=v(795),t=v.n(e),o=v(569),i=v.n(o),a=v(565),s=v.n(a),c=v(216),d=v.n(c),l=v(589),u=v.n(l),p=v(473),(f={}).styleTagTransform=u(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=t(),f.insertStyleElement=d(),n()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals,v(161)})();