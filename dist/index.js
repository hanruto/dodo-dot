!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.dodot=e():t.dodot=e()}(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=13)}([function(t,e,n){t.exports=n(12)},function(t,e){function n(t,e,n,r,o,a,i){try{var u=t[a](i),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,o)}t.exports=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function u(t){n(i,o,a,u,c,"next",t)}function c(t){n(i,o,a,u,c,"throw",t)}u(void 0)}))}}},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},function(t,e){function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},function(t,e,n){var r=n(3);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},function(t,e,n){var r=n(5),o=n(3),a=n(10),i=n(11);function u(e){var n="function"==typeof Map?new Map:void 0;return t.exports=u=function(t){if(null===t||!a(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return i(t,arguments,r(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o(e,t)},u(e)}t.exports=u},function(t,e,n){var r=n(4),o=n(9);t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?o(t):e}},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,e){t.exports=function(t){return-1!==Function.toString.call(t).indexOf("[native code]")}},function(t,e,n){var r=n(3);function o(e,n,a){return!function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}()?t.exports=o=function(t,e,n){var o=[null];o.push.apply(o,e);var a=new(Function.bind.apply(t,o));return n&&r(a,n.prototype),a}:t.exports=o=Reflect.construct,o.apply(null,arguments)}t.exports=o},function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,n,r){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),i=new S(r||[]);return a._invoke=function(t,e,n){var r=f;return function(o,a){if(r===l)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw a;return P()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var u=E(i,n);if(u){if(u===d)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=l;var c=s(t,e,n);if("normal"===c.type){if(r=n.done?p:h,c.arg===d)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}(t,n,i),a}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var f="suspendedStart",h="suspendedYield",l="executing",p="completed",d={};function v(){}function y(){}function m(){}var g={};g[a]=function(){return this};var x=Object.getPrototypeOf,w=x&&x(x(T([])));w&&w!==n&&r.call(w,a)&&(g=w);var b=m.prototype=v.prototype=Object.create(g);function I(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function O(t){var e;this._invoke=function(n,o){function a(){return new Promise((function(e,a){!function e(n,o,a,i){var u=s(t[n],t,o);if("throw"!==u.type){var c=u.arg,f=c.value;return f&&"object"==typeof f&&r.call(f,"__await")?Promise.resolve(f.__await).then((function(t){e("next",t,a,i)}),(function(t){e("throw",t,a,i)})):Promise.resolve(f).then((function(t){c.value=t,a(c)}),(function(t){return e("throw",t,a,i)}))}i(u.arg)}(n,o,e,a)}))}return e=e?e.then(a,a):a()}}function E(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,E(t,n),"throw"===n.method))return d;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=s(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,d;var a=o.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,d):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function M(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(M,this),this.reset(!0)}function T(t){if(t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}return{next:P}}function P(){return{value:e,done:!0}}return y.prototype=b.constructor=m,m.constructor=y,m[u]=y.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},I(O.prototype),O.prototype[i]=function(){return this},t.AsyncIterator=O,t.async=function(e,n,r,o){var a=new O(c(e,n,r,o));return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},I(b),b[u]="Generator",b[a]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=T,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(N),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return u.type="throw",u.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],u=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),N(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;N(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:T(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},function(t,e,n){"use strict";n.r(e);var r={};n.r(r),n.d(r,"randomNumber",(function(){return d})),n.d(r,"showFps",(function(){return v})),n.d(r,"shuffle",(function(){return y})),n.d(r,"transformColorObjectToColor",(function(){return m})),n.d(r,"randomColor",(function(){return g})),n.d(r,"transformColorToColorObject",(function(){return x})),n.d(r,"withStashPanelData",(function(){return M})),n.d(r,"sleep",(function(){return N}));var o=n(2),a=n.n(o),i={perspective:200,dotsCount:0,panel:null},u=n(4),c=n.n(u),s=n(6),f=n.n(s),h=(n(8),n(5),n(7)),l=n.n(h);function p(t,e){p=function(t,e){return new a(t,void 0,e)};var n=l()(RegExp),r=RegExp.prototype,o=new WeakMap;function a(t,e,r){var a=n.call(this,t,e);return o.set(a,r||o.get(t)),a}function i(t,e){var n=o.get(e);return Object.keys(n).reduce((function(e,r){return e[r]=t[n[r]],e}),Object.create(null))}return f()(a,n),a.prototype.exec=function(t){var e=r.exec.call(this,t);return e&&(e.groups=i(e,this)),e},a.prototype[Symbol.replace]=function(t,e){if("string"==typeof e){var n=o.get(this);return r[Symbol.replace].call(this,t,e.replace(/\$<([^>]+)>/g,(function(t,e){return"$"+n[e]})))}if("function"==typeof e){var a=this;return r[Symbol.replace].call(this,t,(function(){var t=[];return t.push.apply(t,arguments),"object"!==c()(t[t.length-1])&&t.push(i(t,a)),e.apply(this,t)}))}return r[Symbol.replace].call(this,t,e)},p.apply(this,arguments)}function d(t,e){var n=e-t;return parseInt((t+Math.random()*n).toString(),10)}function v(){var t=0,e=document.createElement("span");e.style.cssText="\n    position: fixed;\n    bottom: 20px;\n    right: 20px;\n    color: rgba(0, 0, 0, 0.3);\n    font-size: 12px;\n  ",document.body.appendChild(e);!function e(){t++,requestAnimationFrame(e)}();setInterval((function(){var n=(1e3/(2e3/t)).toFixed(1),r=i.dotsCount;e.innerHTML="".concat(r," dots; ").concat(n," fps"),t=0}),2e3)}function y(t){var e=t.map((function(t){return t})),n=e.length;return e.forEach((function(t,r){var o=parseInt((Math.random()*n).toString(),10);e[r]=e[o],e[o]=t})),e}function m(t){var e=t.r,n=t.g,r=t.b,o=(t.a/255).toFixed(2);return"rgba(".concat(e,", ").concat(n,", ").concat(r,", ").concat(o,")")}function g(t,e){var n=t.r,r=t.g,o=t.b,a=t.a,i=e||{},u=i.min,c=void 0===u?0:u,s=i.max,f=(void 0===s?0:s)-c;return(n+=parseInt((Math.random()*f+c).toString(),10))<0&&(n=0),(r+=parseInt((Math.random()*f+c).toString(),10))<0&&(r=0),(o+=parseInt((Math.random()*f+c).toString(),10))<0&&(o=0),a<0&&(a=0),n>255&&(n=255),r>255&&(r=255),o>255&&(o=255),a>255&&(a=255),{r:n,g:r,b:o,a:a}}function x(t,e){var n=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/,r=p(/^rgba\(([0-9]{1,3}), ?([0-9]{1,3}), ?([0-9]{1,3}), ?([0-9]{1,3}) ?\)$/,{r:1,g:2,b:3,a:4}),o=p(/^rgb\(([0-9]{1,3}), ?([0-9]{1,3}), ?([0-9]{1,3}) ?\)$/,{r:1,g:2,b:3}),a=0,i=0,u=0,c=255;if(n.test(t)){var s=t.match(n)[1];3===s.length&&(a=15*Number("0x"+s[0]),i=15*Number("0x"+s[1]),u=15*Number("0x"+s[2])),6===s.length&&(a=Number("0x"+s.slice(0,2)),i=Number("0x"+s.slice(2,4)),u=Number("0x"+s.slice(4,6)))}if(r.test(t)){var f=t.match(r).groups;a=Number(f.r),i=Number(f.g),u=Number(f.b),c=Number(f.a)}if(o.test(t)){var h=t.match(o).groups;a=Number(h.r),i=Number(h.g),u=Number(h.b)}var l={r:a,g:i,b:u,a:c};return e&&e.randomColorRange?g(l,e.randomColorRange):{r:a,g:i,b:u,a:c}}var w,b,I,O,E,M=function(t){var e=i.panel,n=document.createElement("canvas"),r=n.getContext("2d"),o=e.canvas;n.width=o.width,n.height=o.height,r.drawImage(e.canvas,0,0);var a=t();return e.ctx.drawImage(n,0,0),a},N=function(t){return new Promise((function(e){return setTimeout(e,t)}))};!function(t){t.RUN="run",t.STOP="stop"}(w||(w={})),function(t){t.TEXT="text",t.IMAGE="image"}(b||(b={})),function(t){t.Quad="Quad",t.Cubic="Cubic",t.Quart="Quart",t.Quint="Quint",t.Sine="Sine",t.Expo="Expo",t.Circ="Circ",t.Elastic="Elastic",t.Back="Back",t.Bounce="Bounce"}(I||(I={})),function(t){t.DIVERGENCE="divergence",t.CONVERGENCE="convergence",t.CLONE="clone"}(O||(O={})),function(t){t.ARC="arc",t.RECT="rect"}(E||(E={}));var S=function t(e){var n=this;a()(this,t),this.canvas=void 0,this.ctx=void 0,this.width=void 0,this.height=void 0,this.drawBall=function(t,e,r,o){n.ctx.beginPath(),n.ctx.arc(t,e,r,0,2*Math.PI),n.ctx.fillStyle=o,n.ctx.fill()},this.drawReact=function(t,e,r,o,a){n.ctx.beginPath(),n.ctx.rect(t,e,r,o),n.ctx.fillStyle=a,n.ctx.fill(),n.ctx.closePath()},this.drawText=function(t,e,r,o,a,i){n.ctx.font=a||"微软雅黑 16px",n.ctx.textAlign=i||"center",n.ctx.fillStyle=o,n.ctx.fillText(t,e,r)},this.drawImage=function(t,e,r,o,a){n.ctx.drawImage(t,e,r,o,a)},this.drawDot=function(t){var e=i.perspective,r=t.x,o=t.y,a=t.color,u=t.radius,c=t.shape,s=void 0===c?E.ARC:c,f=t.z;t.z<-1*i.perspective&&(f=-199);var h=m(a),l=Number((e/(e+f)).toFixed(2)),p=parseInt(Math.abs(n.width/2+(r-n.width/2)*l).toString(),10),d=parseInt(Math.abs(n.height/2+(o-n.height/2)*l).toString(),10);try{s===E.ARC&&n.drawBall(p,d,u*l,h),s===E.RECT&&n.drawReact(p,d,u*l*2,u*l*2,h)}catch(e){console.log("invalid dot ".concat(JSON.stringify(t)))}},this.drawDots=function(t){t.forEach((function(t){return n.drawDot(t)}))},this.clear=function(){n.canvas.width=n.width},this.canvas=e,this.ctx=this.canvas.getContext("2d"),this.width=e.width,this.height=e.height};var T=function t(e){var n=this;a()(this,t),this.x=void 0,this.y=void 0,this.z=void 0,this.color=void 0,this.radius=void 0,this.shape=void 0,this.paint=function(){var t=i.perspective,e=i.panel;if(!e)return new Error("Please init panel before paint dot.");var r="string"==typeof n.color?n.color:m(n.color),o=Number((t/(t+n.z)).toFixed(2));n.x=parseInt(Math.abs(e.width/2+(n.x-e.width/2)*o).toString(),10),n.y=parseInt(Math.abs(e.height/2+(n.y-e.height/2)*o).toString(),10),e.drawBall(n.x,n.y,n.radius*o,r)};var r=e.x,o=e.y,u=e.z,c=e.color,s=e.radius,f=e.shape,h=e.randomColorRange;this.x=r,this.y=o,this.z=u,this.color="string"==typeof c?x(c,{randomColorRange:h}):g(c,h),this.radius=s||6,this.shape=f||E.ARC},P=function(t){return new T(t)},C=function(t,e){for(var n=e||{},r=n.radius,o=void 0===r?6:r,a=n.margin,i=void 0===a?0:a,u=n.randomColorRange,c=n.shape,s=[],f=2*(o+i),h=0;h<t.width;h+=f)for(var l=0;l<t.height;l+=f){var p=4*(l*t.width+h)-1,d={x:h,y:l,z:0,color:{r:t.data[p-3],g:t.data[p-2],b:t.data[p-1],a:t.data[p]},radius:o,randomColorRange:u,shape:c};t.data[p]>=128&&s.push(P(d))}return y(s)},R=function(t){var e=i.panel,n=t||{},r=n.color,o=void 0===r?"rgba(255, 255, 255, 0)":r,a=n.radius,u=void 0===a?6:a,c=n.xRange,s=void 0===c?{min:-e.width,max:2*e.width}:c,f=n.yRange,h=void 0===f?{min:-e.height,max:2*e.height}:f,l=n.zRange,p=void 0===l?{min:-i.perspective,max:i.perspective}:l,v=n.randomColorRange,y=n.shape,m=d(s.min,s.max),g=d(h.min,h.max),x=d(p.min,p.max),w=o,b=d(u/2,2*u);return P({x:m,y:g,z:x,color:w,radius:b,randomColorRange:v,shape:y})},_=function(t,e){return Array.from({length:t}).map((function(){return R(e)}))};function L(t,e,n){if(n!==O.CLONE){var r=i.panel,o=n===O.CONVERGENCE,a=function(t){var e=Number.NEGATIVE_INFINITY,n=Number.NEGATIVE_INFINITY,r=Number.POSITIVE_INFINITY,o=Number.POSITIVE_INFINITY;return t.forEach((function(t){t.x>e&&(e=t.x),t.y>n&&(n=t.y),t.x<r&&(r=t.x),t.y<o&&(o=t.y)})),{maxX:e,maxY:n,minX:r,minY:o}}(t),u=o?a.maxX:2*r.width,c=o?a.minX:-1*r.width,s=o?a.maxY:2*r.height,f=o?a.minY:-1*r.height,h=_(e,{xRange:{max:u,min:c},yRange:{max:s,min:f},zRange:{max:0,min:0}});return t.concat(h)}for(var l=[],p=t.length,v=0;v<e;v++)l.push(t[d(0,p)]);return t.concat(l)}var j=n(0),F=n.n(j),k=n(1),D=n.n(k),A={Linear:function(t,e,n,r){return n*t/r+e},Quad:{easeIn:function(t,e,n,r){return n*(t/=r)*t+e},easeOut:function(t,e,n,r){return-n*(t/=r)*(t-2)+e},easeInOut:function(t,e,n,r){return(t/=r/2)<1?n/2*t*t+e:-n/2*(--t*(t-2)-1)+e}},Cubic:{easeIn:function(t,e,n,r){return n*(t/=r)*t*t+e},easeOut:function(t,e,n,r){return n*((t=t/r-1)*t*t+1)+e},easeInOut:function(t,e,n,r){return(t/=r/2)<1?n/2*t*t*t+e:n/2*((t-=2)*t*t+2)+e}},Quart:{easeIn:function(t,e,n,r){return n*(t/=r)*t*t*t+e},easeOut:function(t,e,n,r){return-n*((t=t/r-1)*t*t*t-1)+e},easeInOut:function(t,e,n,r){return(t/=r/2)<1?n/2*t*t*t*t+e:-n/2*((t-=2)*t*t*t-2)+e}},Quint:{easeIn:function(t,e,n,r){return n*(t/=r)*t*t*t*t+e},easeOut:function(t,e,n,r){return n*((t=t/r-1)*t*t*t*t+1)+e},easeInOut:function(t,e,n,r){return(t/=r/2)<1?n/2*t*t*t*t*t+e:n/2*((t-=2)*t*t*t*t+2)+e}},Sine:{easeIn:function(t,e,n,r){return-n*Math.cos(t/r*(Math.PI/2))+n+e},easeOut:function(t,e,n,r){return n*Math.sin(t/r*(Math.PI/2))+e},easeInOut:function(t,e,n,r){return-n/2*(Math.cos(Math.PI*t/r)-1)+e}},Expo:{easeIn:function(t,e,n,r){return 0==t?e:n*Math.pow(2,10*(t/r-1))+e},easeOut:function(t,e,n,r){return t==r?e+n:n*(1-Math.pow(2,-10*t/r))+e},easeInOut:function(t,e,n,r){return 0==t?e:t==r?e+n:(t/=r/2)<1?n/2*Math.pow(2,10*(t-1))+e:n/2*(2-Math.pow(2,-10*--t))+e}},Circ:{easeIn:function(t,e,n,r){return-n*(Math.sqrt(1-(t/=r)*t)-1)+e},easeOut:function(t,e,n,r){return n*Math.sqrt(1-(t=t/r-1)*t)+e},easeInOut:function(t,e,n,r){return(t/=r/2)<1?-n/2*(Math.sqrt(1-t*t)-1)+e:n/2*(Math.sqrt(1-(t-=2)*t)+1)+e}},Elastic:{easeIn:function(t,e,n,r,o,a){var i;return 0==t?e:1==(t/=r)?e+n:(void 0===a&&(a=.3*r),!o||o<Math.abs(n)?(i=a/4,o=n):i=a/(2*Math.PI)*Math.asin(n/o),-o*Math.pow(2,10*(t-=1))*Math.sin((t*r-i)*(2*Math.PI)/a)+e)},easeOut:function(t,e,n,r,o,a){var i;return 0==t?e:1==(t/=r)?e+n:(void 0===a&&(a=.3*r),!o||o<Math.abs(n)?(o=n,i=a/4):i=a/(2*Math.PI)*Math.asin(n/o),o*Math.pow(2,-10*t)*Math.sin((t*r-i)*(2*Math.PI)/a)+n+e)},easeInOut:function(t,e,n,r,o,a){var i;return 0==t?e:2==(t/=r/2)?e+n:(void 0===a&&(a=r*(.3*1.5)),!o||o<Math.abs(n)?(o=n,i=a/4):i=a/(2*Math.PI)*Math.asin(n/o),t<1?o*Math.pow(2,10*(t-=1))*Math.sin((t*r-i)*(2*Math.PI)/a)*-.5+e:o*Math.pow(2,-10*(t-=1))*Math.sin((t*r-i)*(2*Math.PI)/a)*.5+n+e)}},Back:{easeIn:function(t,e,n,r,o){return void 0===o&&(o=1.70158),n*(t/=r)*t*((o+1)*t-o)+e},easeOut:function(t,e,n,r,o){return void 0===o&&(o=1.70158),n*((t=t/r-1)*t*((o+1)*t+o)+1)+e},easeInOut:function(t,e,n,r,o){return void 0===o&&(o=1.70158),(t/=r/2)<1?n/2*(t*t*((1+(o*=1.525))*t-o))+e:n/2*((t-=2)*t*((1+(o*=1.525))*t+o)+2)+e}},Bounce:{easeIn:function(t,e,n,r){return n-A.Bounce.easeOut(r-t,0,n,r)+e},easeOut:function(t,e,n,r){return(t/=r)<1/2.75?n*(7.5625*t*t)+e:t<2/2.75?n*(7.5625*(t-=1.5/2.75)*t+.75)+e:t<2.5/2.75?n*(7.5625*(t-=2.25/2.75)*t+.9375)+e:n*(7.5625*(t-=2.625/2.75)*t+.984375)+e},easeInOut:function(t,e,n,r){return t<r/2?.5*A.Bounce.easeIn(2*t,0,n,r)+e:.5*A.Bounce.easeOut(2*t-r,0,n,r)+.5*n+e}}},z=A,G=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.tweenType||I.Sine,o=z[r].easeOut,a=z.Linear,u=n.totalFrame||60,c=i.panel,s=n.supplementType||O.CONVERGENCE,f=n.delay||0,h=Math.max(t.length,e.length);i.dotsCount=h,t.length||(t=_(h)),e.length||(e=_(h)),t.length&&t.length<h&&(t=L(t,h-t.length,s)),e.length&&e.length<h&&(e=L(e,h-e.length,s));var l=0,p=w.STOP,d=0,v=function(){var n=D()(F.a.mark((function n(){return F.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(c.clear(),c.drawDots(t),!(f>0)){n.next=5;break}return n.next=5,N(f);case 5:return n.next=7,new Promise((function(n){!function r(){if(p!==w.STOP){for(var i=[],s=0;s<h;s++){var f=e[s],v=t[s],y=v.x,m=v.y,g=v.z,x=v.color,b=v.radius,I=f.x,O=f.y,E=f.z,M=f.color,N=f.radius,S=parseInt(o(l,y,I-y,u)),T=parseInt(o(l,m,O-m,u)),C=parseInt(o(l,g,E-g,u)),R={r:parseInt(a(l,x.r,M.r-x.r,u)),g:parseInt(a(l,x.g,M.g-x.g,u)),b:parseInt(a(l,x.b,M.b-x.b,u)),a:parseInt(a(l,x.a,M.a-x.a,u))},_=v.shape,L=parseInt(a(l,b,N-b,u));i.push(P({x:S,y:T,z:C,color:R,radius:L,shape:_}))}c.clear(),c.drawDots(i),l<u?(l++,d=requestAnimationFrame(r)):(c.clear(),c.drawDots(e),n())}else cancelAnimationFrame(d)}()}));case 7:return n.abrupt("return",n.sent);case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),y=function(){return l=0,p=w.RUN,v()},m=function(){p=w.STOP},g=function(){return p=w.RUN,v()};return{run:y,stop:m,continue:g}};n.d(e,"_dodot",(function(){return Y}));var B={createPanel:function(t){var e=new S(t);return i.panel=e,e},createDot:P,createDots:function(t){return t.map((function(t){return new T(t)}))},createRandomDot:R,createRandomDots:_,createDotsFromText:function(t,e){return M((function(){var n=function(t,e){var n=i.panel;n.clear();var r=e||{},o=r.fontSize,a=void 0===o?150:o,u=r.color,c=void 0===u?"#666":u,s=r.translateX,f=void 0===s?0:s,h=r.translateY,l=void 0===h?0:h;n.drawText(t,n.width/2+f,n.height/2+l+a/3,"string"==typeof c?c:m(c),a+"px impact","center");var p=n.ctx.getImageData(0,0,n.width,n.height);return n.clear(),p}(t,e);return C(n,e)}))},createDotsFromImage:function(t,e){return M((function(){var n=function(t,e){var n=i.panel;n.clear();var r=e||{},o=r.imageWidth,a=void 0===o?t.width:o,u=r.imageHeight,c=void 0===u?t.height:u,s=r.translateX,f=void 0===s?0:s,h=r.translateY,l=void 0===h?0:h;n.drawImage(t,n.width/2+f-a/2,n.height/2+l-c/2,a,c);var p=n.ctx.getImageData(0,0,n.width,n.height);return n.clear(),p}(t,e);return C(n,e)}))},createDotsAnimation:G,createMutiSegmentDotsAnimation:function(t,e){var n,r=0,o=function(){var o=D()(F.a.mark((function o(a){var i,u,c,s;return F.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return r=a,i=e.delay&&("number"==typeof e.delay?e.delay:e.delay[r]),u=e.tweenType&&("string"==typeof e.tweenType?e.tweenType:e.tweenType[r]),c=e.supplementType&&("string"==typeof e.supplementType?e.supplementType:e.supplementType[r]),s=e.totalFrame&&("number"==typeof e.totalFrame?e.totalFrame:e.totalFrame[r]),n=G(t[r],t[r+1],{delay:i,tweenType:u,supplementType:c,totalFrame:s}),o.next=8,n.run();case 8:return o.abrupt("return",o.sent);case 9:case"end":return o.stop()}}),o)})));return function(t){return o.apply(this,arguments)}}();return{run:function(){var e=D()(F.a.mark((function e(){var n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=0;case 1:if(!(n<t.length-1)){e.next=7;break}return e.next=4,o(n);case 4:n++,e.next=1;break;case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),stop:function(){n.stop()},continue:function(){var e=D()(F.a.mark((function e(){var a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.continue();case 2:a=r+1;case 3:if(!(a<t.length-1)){e.next=9;break}return e.next=6,o(a);case 6:a++,e.next=3;break;case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}},utils:r},Y=(e.default=B,B)}])}));