!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("@kissmybutton/motorcortex")):"function"==typeof define&&define.amd?define(["exports","@kissmybutton/motorcortex"],n):n((t="undefined"!=typeof globalThis?globalThis:t||self)["@kissmybutton/motorcortex-animebanners"]={},t.MotorCortex)}(this,(function(t,n){"use strict";function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var i=e(n);function o(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function r(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,n){return(s=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function l(t,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function p(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,i=a(t);if(n){var o=a(this).constructor;e=Reflect.construct(i,arguments,o)}else e=i.apply(this,arguments);return l(this,e)}}function c(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function u(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function d(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function h(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,i)}return e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function g(t,n){return(g=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function m(t,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}var b={},x={duration:1e3,round:0},v=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective"],w={CSS:{}};function k(t,n,e){return Math.min(Math.max(t,n),e)}function O(t,n){return t.indexOf(n)>-1}var P={arr:function(t){return Array.isArray(t)},obj:function(t){return O(Object.prototype.toString.call(t),"Object")},pth:function(t){return P.obj(t)&&t.hasOwnProperty("totalLength")},svg:function(t){return t instanceof SVGElement},inp:function(t){return t instanceof HTMLInputElement},dom:function(t){return t.nodeType||P.svg(t)},str:function(t){return"string"==typeof t},fnc:function(t){return"function"==typeof t},und:function(t){return void 0===t},hex:function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)},rgb:function(t){return/^rgb/.test(t)},hsl:function(t){return/^hsl/.test(t)},col:function(t){return P.hex(t)||P.rgb(t)||P.hsl(t)},key:function(t){return!b.hasOwnProperty(t)&&!x.hasOwnProperty(t)&&"targets"!==t&&"keyframes"!==t}},j={linear:function(){return function(t){return t}}};function A(t,n){for(var e=t.length,i=arguments.length>=2?arguments[1]:void 0,o=[],r=0;r<e;r++)if(r in t){var a=t[r];n.call(i,a,r,t)&&o.push(a)}return o}function S(t){return t.reduce((function(t,n){return t.concat(P.arr(n)?S(n):n)}),[])}function I(t){return P.arr(t)?t:(P.str(t)&&(t=function(t){try{return document.querySelectorAll(t)}catch(t){return}}(t)||t),t instanceof NodeList||t instanceof HTMLCollection?[].slice.call(t):[t])}function M(t,n){return t.some((function(t){return t===n}))}function R(t){var n={};for(var e in t)n[e]=t[e];return n}function C(t,n){var e=R(t);for(var i in t)e[i]=n.hasOwnProperty(i)?n[i]:t[i];return e}function T(t,n){var e=R(t);for(var i in n)e[i]=P.und(t[i])?n[i]:t[i];return e}function V(t){return P.rgb(t)?(e=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(n=t))?"rgba("+e[1]+",1)":n:P.hex(t)?function(t){var n=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(t,n,e,i){return n+n+e+e+i+i})),e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n);return"rgba("+parseInt(e[1],16)+","+parseInt(e[2],16)+","+parseInt(e[3],16)+",1)"}(t):P.hsl(t)?function(t){var n,e,i,o=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t),r=parseInt(o[1],10)/360,a=parseInt(o[2],10)/100,s=parseInt(o[3],10)/100,l=o[4]||1;function p(t,n,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?t+6*(n-t)*e:e<.5?n:e<2/3?t+(n-t)*(2/3-e)*6:t}if(0==a)n=e=i=s;else{var c=s<.5?s*(1+a):s+a-s*a,u=2*s-c;n=p(u,c,r+1/3),e=p(u,c,r),i=p(u,c,r-1/3)}return"rgba("+255*n+","+255*e+","+255*i+","+l+")"}(t):void 0;var n,e}function E(t){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t);if(n)return n[1]}function z(t,n){return P.fnc(t)?t(n.target,n.id,n.total):t}function X(t,n){return t.getAttribute(n)}function Y(t,n,e){if(M([e,"deg","rad","turn"],E(n)))return n;var i=w.CSS[n+e];if(!P.und(i))return i;var o=document.createElement(t.tagName),r=t.parentNode&&t.parentNode!==document?t.parentNode:document.body;r.appendChild(o),o.style.position="absolute",o.style.width=100+e;var a=100/o.offsetWidth;r.removeChild(o);var s=a*parseFloat(n);return w.CSS[n+e]=s,s}function B(t,n,e){if(n in t.style){var i=n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),o=t.style[n]||getComputedStyle(t).getPropertyValue(i)||"0";return e?Y(t,o,e):o}}function _(t,n){return P.dom(t)&&!P.inp(t)&&(X(t,n)||P.svg(t)&&t[n])?"attribute":P.dom(t)&&M(v,n)?"transform":P.dom(t)&&"transform"!==n&&B(t,n)?"css":null!=t[n]?"object":void 0}function W(t){if(P.dom(t)){for(var n,e=t.style.transform||"",i=/(\w+)\(([^)]*)\)/g,o=new Map;n=i.exec(e);)o.set(n[1],n[2]);return o}}function L(t,n,e,i){var o=O(n,"scale")?1:0+function(t){return O(t,"translate")||"perspective"===t?"px":O(t,"rotate")||O(t,"skew")?"deg":void 0}(n),r=W(t).get(n)||o;return e&&(e.transforms.list.set(n,r),e.transforms.last=n),i?Y(t,r,i):r}function Q(t,n,e,i){switch(_(t,n)){case"transform":return L(t,n,i,e);case"css":return B(t,n,e);case"attribute":return X(t,n);default:return t[n]||0}}function F(t,n){var e=/^(\*=|\+=|-=)/.exec(t);if(!e)return t;var i=E(t)||0,o=parseFloat(n),r=parseFloat(t.replace(e[0],""));switch(e[0][0]){case"+":return o+r+i;case"-":return o-r+i;case"*":return o*r+i}}function D(t,n){if(P.col(t))return V(t);if(/\s/g.test(t))return t;var e=E(t),i=e?t.substr(0,t.length-e.length):t;return n?i+n:i}function H(t,n){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,i=D(P.pth(t)?t.totalLength:t,n)+"";return{original:i,numbers:i.match(e)?i.match(e).map(Number):[0],strings:P.str(t)||n?i.split(e):[]}}function Z(t){var n=function(t){return A(t?S(P.arr(t)?t.map(I):I(t)):[],(function(t,n,e){return e.indexOf(t)===n}))}(t);return n.map((function(t,e){return{target:t,id:e,total:n.length,transforms:{list:W(t)}}}))}function G(t,n){var e=R(n);if(P.arr(t)){var i=t.length;2===i&&!P.obj(t[0])?t={value:t}:P.fnc(n.duration)||(e.duration=n.duration/i)}return(P.arr(t)?t:[t]).map((function(t,n){return P.obj(t)&&!P.pth(t)?t:{value:t}})).map((function(t){return T(t,e)}))}function N(t,n){var e;return t.tweens.map((function(i){var o=function(t,n){var e={};for(var i in t){var o=z(t[i],n);P.arr(o)&&1===(o=o.map((function(t){return z(t,n)}))).length&&(o=o[0]),e[i]=o}return e.duration=parseFloat(e.duration),e}(i,n),r=o.value,a=P.arr(r)?r[1]:r,s=E(a),l=Q(n.target,t.name,s,n),p=e?e.to.original:l,c=P.arr(r)?r[0]:p,u=E(c)||E(l),d=s||u;return P.und(a)&&(a=p),o.from=H(c,d),o.to=H(F(a,c),d),o.start=e?e.end:0,o.end=o.start+o.duration,o.isPath=!1,o.isColor=P.col(o.from.original),o.isColor&&(o.round=1),e=o,o}))}var $={css:function(t,n,e){return t.style[n]=e},attribute:function(t,n,e){return t.setAttribute(n,e)},object:function(t,n,e){return t[n]=e},transform:function(t,n,e,i,o){if(i.list.set(n,e),n===i.last||o){var r="";i.list.forEach((function(t,n){r+=n+"("+t+") "})),t.style.transform=r}}};function K(t,n){Z(t).forEach((function(t){for(var e in n){var i=z(n[e],t),o=t.target,r=E(i),a=Q(o,e,r,t),s=F(D(i,r||E(a)),a),l=_(o,e);$[l](o,e,s,t.transforms,!0)}}))}function U(t,n){return A(S(t.map((function(t){return n.map((function(n){return function(t,n){var e=_(t.target,n.name);if(e){var i=N(n,t),o=i[i.length-1];return{type:e,property:n.name,animatable:t,tweens:i,duration:o.end}}}(t,n)}))}))),(function(t){return!P.und(t)}))}var q=0;function J(t){var n=C(b,t),e=C(x,t),i=function(t,n){var e=[];for(var i in n)P.key(i)&&e.push({name:i,tweens:G(n[i],t)});return e}(e,t),o=Z(t.targets),r=U(o,i),a=function(t,n){var e=t.length,i={};return i.duration=e?Math.max.apply(Math,t.map((function(t){return t.duration}))):n.duration,i}(r,e),s=q;return q++,T(n,{id:s,children:[],animatables:o,animations:r,duration:a.duration})}function tt(t){void 0===t&&(t={});var n,e=0,i=null;function o(t){var n=window.Promise&&new Promise((function(t){return i=t}));return t.finished=n,n}var r=J(t);o(r);function a(t,n){n&&n.seek(t)}function s(t){var s=r.duration,l=t;r.progress=k(l/s*100,0,100),r.reversePlayback=l<r.currentTime,n&&function(t){if(r.reversePlayback)for(var i=e;i--;)a(t,n[i]);else for(var o=0;o<e;o++)a(t,n[o])}(l),!r.began&&r.currentTime>0&&(r.began=!0),function(t){for(var n=0,e=r.animations,i=e.length;n<i;){var o=e[n],a=o.animatable,s=o.tweens,l=s.length-1,p=s[l];l&&(p=A(s,(function(n){return t<n.end}))[0]||p);for(var c=k(t-p.start,0,p.duration)/p.duration,u=p.to.strings,d=p.round,h=[],f=p.to.numbers.length,g=void 0,y=0;y<f;y++){var m=void 0,b=p.to.numbers[y],x=p.from.numbers[y]||0;m=x+c*(b-x),d&&(p.isColor&&y>2||(m=Math.round(m*d)/d)),h.push(m)}var v=u.length;if(v){g=u[0];for(var w=0;w<v;w++){u[w];var O=u[w+1],P=h[w];isNaN(P)||(g+=O?P+O:P+" ")}}else g=h[0];$[o.type](a.target,o.property,g,a.transforms),o.currentValue=g,n++}}(l),r.currentTime=k(l,0,s),t>=s&&(r.paused=!0,r.completed||(r.completed=!0,!r.passThrough&&"Promise"in window&&(i(),o(r))))}return r.reset=function(){r.passThrough=!1,r.currentTime=0,r.progress=0,r.paused=!0,r.began=!1,r.completed=!1,r.reversePlayback=!1,n=r.children;for(var t=e=n.length;t--;)r.children[t].reset()},r.set=function(t,n){return K(t,n),r},r.seek=function(t){s(t)},r.reset(),r}tt.version="3.1.0",tt.get=Q,tt.set=K,tt.convertPx=Y,tt.penner=j;var nt={transform:["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skewX","skewY","perspective"]};var et=["cm","mm","in","px","pt","pc","em","ex","ch","rem","vw","vh","vmin","vmax","%"],it=["deg","rad","grad","turn"],ot="measurement",rt="color",at={npm_name:"@kissmybutton/motorcortex-anime",incidents:[{exportable:function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&g(t,n)}(a,t);var n,e,i,o,r=(n=a,function(){var t,e=f(n);if(y()){var i=f(this).constructor;t=Reflect.construct(e,arguments,i)}else t=e.apply(this,arguments);return m(this,t)});function a(){return c(this,a),r.apply(this,arguments)}return e=a,(i=[{key:"onGetContext",value:function(){var t={},n={};if(Object.prototype.hasOwnProperty.call(nt,this.attributeKey))for(var e=nt[this.attributeKey],i=0;i<e.length;i++)Object.prototype.hasOwnProperty.call(this.targetValue,e[i])&&(t[e[i]]=[this.getInitialValue()[e[i]],this.targetValue[e[i]]],n[e[i]]=[this.getScratchValue(),this.targetValue[e[i]]]);else t[this.attributeKey]=[this.getInitialValue(),this.targetValue],n[this.targetValue]=[this.getScratchValue(),this.targetValue];this.target=tt(function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?h(Object(e),!0).forEach((function(n){d(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):h(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}({autoplay:!1,duration:this.props.duration,easing:"linear",targets:this.element},(this.attrs||{}).attrs||{},{},t))}},{key:"getScratchValue",value:function(){if("transform"===this.attributeKey){for(var t={},n=nt[this.attributeKey],e=function(t,n){var e=t.getComputedStyle(n).transform;if(""===e||"none"===e)return{};var i,o,r,a,s,l,p,c,u=e.split("(")[1].split(")")[0].split(",");return i=u,o=Math.atan2(i[1],i[0]),r=Math.pow(i[0],2)+Math.pow(i[1],2),a=Math.pow(i[2],2)+Math.pow(i[3],2),s=Math.sqrt(r),l=(i[0]*i[3]-i[2]*i[1])/s,p=Math.atan2(i[0]*i[2]+i[1]*i[3],r),c=Math.atan2(i[1]*i[3]+i[0]*i[2],a),{rotate:o/(Math.PI/180)+"deg",scaleX:s,scaleY:l,skewX:(1===r?p/(Math.PI/180):0)+"deg",skewY:(1===a?c/(Math.PI/180):0)+"deg",translateX:i[4]+"px",translateY:i[5]+"px"}}(this.context.window,this.element),i=0;i<n.length;i++)Object.prototype.hasOwnProperty.call(e,n[i])?t[n[i]]=e[n[i]]:t[n[i]]=tt.get(this.element,n[i]);return t}return tt.get(this.element,this.attributeKey)}},{key:"onProgress",value:function(t){return this.target.seek(this.target.duration*t)}}])&&u(e.prototype,i),o&&u(e,o),a}(i.default.API.MonoIncident),name:"Anime",attributesValidationRules:{animatedAttrs:{type:"object",props:{background:{optional:!0,type:rt},backgroundColor:{optional:!0,type:rt},backgroundPosition:{optional:!0,type:"string"},backgroundSize:{optional:!0,type:"string"},border:{optional:!0,type:"string"},borderBottom:{optional:!0,type:"string"},borderBottomColor:{optional:!0,type:rt},borderBottomLeftRadius:{optional:!0,type:ot,units:et},borderBottomRightRadius:{optional:!0,type:ot,units:et},borderBottomWidth:{optional:!0,type:ot,units:et},borderColor:{optional:!0,type:rt},borderEndEndRadius:{optional:!0,type:ot,units:et},borderEndStartRadius:{optional:!0,type:ot,units:et},borderImageOutset:{optional:!0,type:ot,units:et,min:0},borderImageSlice:{optional:!0,type:ot,units:et,min:0},borderImageWidth:{optional:!0,type:ot,units:et,min:0},borderLeft:{optional:!0,type:"string"},borderLeftColor:{optional:!0,type:rt},borderLeftWidth:{optional:!0,type:ot,units:et},borderRadius:{optional:!0,type:ot,units:et},borderRight:{optional:!0,type:"string"},borderRightColor:{optional:!0,type:rt},borderRightWidth:{optional:!0,type:ot,units:et},borderStartEndRadius:{optional:!0,type:ot,units:et},borderStartStartRadius:{optional:!0,type:ot,units:et},borderTop:{optional:!0,type:"string"},borderTopColor:{optional:!0,type:rt},borderTopLeftRadius:{optional:!0,type:ot,units:et},borderTopRightRadius:{optional:!0,type:ot,units:et},borderTopWidth:{optional:!0,type:ot,units:et},borderWidth:{optional:!0,type:ot,units:et},bottom:{optional:!0,type:ot,units:et},boxShadow:{optional:!0,type:"string"},caretColor:{optional:!0,type:rt},color:{optional:!0,type:rt},columnCount:{optional:!0,type:"number",min:0,integer:!0},columnGap:{optional:!0,type:ot,units:et},columnRule:{optional:!0,type:"string"},columnRuleColor:{optional:!0,type:rt},columnRuleWidth:{optional:!0,type:ot,units:et},columns:{optional:!0,type:"number",min:0,integer:!0},columnWidth:{optional:!0,type:ot,units:et},flex:{optional:!0,type:"number",min:0,integer:!0},flexBasis:{optional:!0,type:ot,units:et},flexGrow:{optional:!0,type:"number",min:0,integer:!0},flexShrink:{optional:!0,type:"number",min:0,integer:!0},font:{optional:!0,type:"string"},fontSize:{optional:!0,type:ot,units:et},fontSizeAdjust:{optional:!0,type:ot,units:et,min:0},fontStretch:{optional:!0,type:ot,units:["%"]},fontWeight:{optional:!0,type:"string"},gap:{optional:!0,type:ot,units:et},gridColumnGap:{optional:!0,type:ot,units:et},gridGap:{optional:!0,type:ot,units:et},gridRowGap:{optional:!0,type:ot,units:et},gridTemplateColumns:{optional:!0,type:ot,units:et},gridTemplateRows:{optional:!0,type:ot,units:et},height:{optional:!0,type:ot,units:et,min:0},inset:{optional:!0,type:ot,units:et,min:0},insetBlock:{optional:!0,type:ot,units:et},insetBlockEnd:{optional:!0,type:ot,units:et},insetBlockStart:{optional:!0,type:ot,units:et},insetInline:{optional:!0,type:ot,units:et},insetInlineEnd:{optional:!0,type:ot,units:et},insetInlineStart:{optional:!0,type:ot,units:et},left:{optional:!0,type:ot,units:et},letterSpacing:{optional:!0,type:ot,units:et},lineClamp:{optional:!0,type:"number",min:0,integer:!0},lineHeight:{optional:!0,type:ot,units:et,min:0},margin:{optional:!0,type:"string"},marginBottom:{optional:!0,type:ot,units:et},marginLeft:{optional:!0,type:ot,units:et},marginRight:{optional:!0,type:ot,units:et},marginTop:{optional:!0,type:ot,units:et},maskBorder:{optional:!0,type:ot,units:et,min:0},maskPosition:{optional:!0,type:"string"},maskSize:{optional:!0,type:"string"},maxHeight:{optional:!0,type:ot,units:et,min:0},maxWidth:{optional:!0,type:ot,units:et,min:0},objectPosition:{optional:!0,type:"string"},offset:{optional:!0,type:ot,units:et},offsetAnchor:{optional:!0,type:"string"},offsetDistance:{optional:!0,type:ot,units:et},offsetPath:{optional:!0,type:"string"},offsetPosition:{optional:!0,type:"string"},offsetRotate:{optional:!0,type:ot,units:it},opacity:{optional:!0,type:"number",min:0,max:1},order:{optional:!0,type:"number",integer:!0},outline:{optional:!0,type:"string"},outlineColor:{optional:!0,type:rt},outlineOffset:{optional:!0,type:ot,units:et},outlineRadius:{optional:!0,type:ot,units:et},outlineRadiusBottomleft:{optional:!0,type:ot,units:et},outlineRadiusBottomright:{optional:!0,type:ot,units:et},outlineRadiusTopleft:{optional:!0,type:ot,units:et},outlineRadiusTopright:{optional:!0,type:ot,units:et},outlineWidth:{optional:!0,type:ot,units:et},padding:{optional:!0,type:ot,units:et},paddingBottom:{optional:!0,type:ot,units:et},paddingLeft:{optional:!0,type:ot,units:et},paddingRight:{optional:!0,type:ot,units:et},paddingTop:{optional:!0,type:ot,units:et},perspective:{optional:!0,type:ot,units:et},perspectiveOrigin:{optional:!0,type:"string"},right:{optional:!0,type:ot,units:et},rotate:{optional:!0,type:ot,units:it},rowGap:{optional:!0,type:ot,units:et},scale:{optional:!0,type:"number",min:0},scrollbarColor:{optional:!0,type:rt},scrollMargin:{optional:!0,type:ot,units:et},scrollMarginBlock:{optional:!0,type:ot,units:et},scrollMarginBlockEnd:{optional:!0,type:ot,units:et},scrollMarginBlockStart:{optional:!0,type:ot,units:et},scrollMarginBottom:{optional:!0,type:ot,units:et},scrollMarginInline:{optional:!0,type:ot,units:et},scrollMarginInlineEnd:{optional:!0,type:ot,units:et},scrollMarginInlineStart:{optional:!0,type:ot,units:et},scrollMarginLeft:{optional:!0,type:ot,units:et},scrollMarginRight:{optional:!0,type:ot,units:et},scrollMarginTop:{optional:!0,type:ot,units:et},scrollPadding:{optional:!0,type:ot,units:et},scrollPaddingBlock:{optional:!0,type:ot,units:et},scrollPaddingBlockEnd:{optional:!0,type:ot,units:et},scrollPaddingBlockStart:{optional:!0,type:ot,units:et},scrollPaddingBottom:{optional:!0,type:ot,units:et},scrollPaddingInline:{optional:!0,type:ot,units:et},scrollPaddingInlineEnd:{optional:!0,type:ot,units:et},scrollPaddingInlineStart:{optional:!0,type:ot,units:et},scrollPaddingLeft:{optional:!0,type:ot,units:et},scrollPaddingRight:{optional:!0,type:ot,units:et},scrollPaddingTop:{optional:!0,type:ot,units:et},scrollSnapCoordinate:{optional:!0,type:"string"},scrollSnapDestination:{optional:!0,type:ot,units:et},shapeImageThreshold:{optional:!0,type:"string"},shapeMargin:{optional:!0,type:ot,units:et},shapeOutside:{optional:!0,type:"string"},tabSize:{optional:!0,type:"string"},textDecoration:{optional:!0,type:"string"},textDecorationColor:{optional:!0,type:rt},textDecorationThickness:{optional:!0,type:ot,units:et},textEmphasis:{optional:!0,type:"string"},textEmphasisColor:{optional:!0,type:rt},textFillColor:{optional:!0,type:rt},textIndent:{optional:!0,type:ot,units:et},textShadow:{optional:!0,type:"string"},textStroke:{optional:!0,type:"string"},textStrokeColor:{optional:!0,type:rt},textUnderlineOffset:{optional:!0,type:ot,units:et},top:{optional:!0,type:ot,units:et},transform:{optional:!0,type:"object",props:{translateX:{type:ot,units:et,optional:!0},translateY:{type:ot,units:et,optional:!0},translateZ:{type:ot,units:et,optional:!0},rotate:{type:ot,units:it,optional:!0},rotateX:{type:ot,units:it,optional:!0},rotateY:{type:ot,units:it,optional:!0},rotateZ:{type:ot,units:it,optional:!0},scale:{type:"number",min:0,optional:!0},scaleX:{type:"number",min:0,optional:!0},scaleY:{type:"number",min:0,optional:!0},scaleZ:{type:"number",min:0,optional:!0},skewX:{type:ot,units:it,optional:!0},skewY:{type:ot,units:it,optional:!0},perspective:{type:ot,units:et,optional:!0}}},transformOrigin:{optional:!0,type:"string"},verticalAlign:{optional:!0,type:"string"},visibility:{optional:!0,type:"string"},width:{optional:!0,type:ot,units:et},wordSpacing:{optional:!0,type:ot,units:et},zIndex:{optional:!0,type:"number",integer:!0},zoom:{optional:!0,type:ot,units:["%"],min:0}},transformOrigin:{type:"string"},verticalAlign:{type:"string"},visibility:{type:"string"},width:{type:ot,units:et},wordSpacing:{type:ot,units:et},zIndex:{type:"number",integer:!0},zoom:{type:ot,units:["%"],min:0}}}}],compositeAttributes:nt},st=i.default.loadPlugin(at),lt={npm_name:"@kissmybutton/motorcortex-animebanners",incidents:[{exportable:function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&s(t,n)}(c,t);var n,e,a,l=p(c);function c(){return o(this,c),l.apply(this,arguments)}return n=c,(e=[{key:"dinamicFontSize",value:function(t,n){var e;return(e=n/.6/t)>=200&&720===n&&(e=200),e>=100&&360===n&&(e=100),e}},{key:"buildTree",value:function(){for(var t=new st.Anime({animatedAttrs:{top:"-".concat(.1*this.attrs.height,"px"),height:"".concat(.1*this.attrs.height,"px")},initialValues:{top:"".concat(this.attrs.height,"px"),height:"".concat(this.attrs.height/2.5,"px")},attrs:{}},{duration:500,selector:".box",easing:"easeOutQuart",repeats:2}),n=new st.Anime({animatedAttrs:{backgroundPositionY:"".concat(this.attrs.height-this.attrs.imgHeight/2,"px"),top:"-50%"},initialValues:{backgroundPositionY:"".concat(this.attrs.height-this.attrs.imgHeight/2+this.attrs.height,"px"),top:"-150%"}},{duration:300,selector:".left-image",easing:"easeOutQuart"}),e=new st.Anime({animatedAttrs:{backgroundPositionX:"-".concat(this.attrs.imgWidth/2-this.attrs.width+this.attrs.width/4,"px "),left:"-50%"},initialValues:{backgroundPositionX:"-".concat(this.attrs.imgWidth/2-this.attrs.width+this.attrs.width/4+this.attrs.width/2,"px "),left:"100%"}},{duration:700,selector:".left-image",easing:"easeOutQuart"}),o=new st.Anime({animatedAttrs:{backgroundPositionY:"".concat(this.attrs.height-this.attrs.imgHeight/2,"px"),top:"-50%"},initialValues:{backgroundPositionY:"-".concat(4*(this.attrs.height-this.attrs.imgHeight/2),"px"),top:"100%"}},{duration:700,selector:".right-image",easing:"easeOutQuart"}),r=new st.Anime({animatedAttrs:{backgroundPositionX:"-".concat(this.attrs.imgWidth/2-this.attrs.width,"px"),left:"-200%"},initialValues:{backgroundPositionX:"-".concat(this.attrs.imgWidth/2-this.attrs.width,"px"),left:"-400%"}},{duration:200,selector:".right-image",easing:"easeOutQuart"}),a=new st.Anime({animatedAttrs:{width:"".concat(this.attrs.width/2,"px")},initialValues:{width:"".concat(this.attrs.width/2*.02,"px")}},{duration:200,selector:".right-image-wrapper",easing:"easeOutQuart"}),s=new st.Anime({animatedAttrs:{opacity:1},initialValues:{opacity:0}},{duration:1,selector:".doted-half",easing:"easeOutQuart"}),l=new st.Anime({animatedAttrs:{opacity:0},initialValues:{opacity:1}},{duration:1,selector:".doted-half",easing:"easeOutQuart"}),p=new st.Anime({animatedAttrs:{opacity:1},initialValues:{opacity:0}},{duration:1,selector:".doted",easing:"easeOutQuart"}),c=new st.Anime({animatedAttrs:{opacity:0},initialValues:{opacity:1}},{duration:1,selector:".doted",easing:"easeOutQuart"}),u=new st.Anime({animatedAttrs:{left:"0%"},initialValues:{left:"100%"}},{duration:500,selector:".bg2",easing:"easeOutQuart"}),d=new st.Anime({animatedAttrs:{backgroundPositionX:"50%"},initialValues:{backgroundPositionX:"100%"}},{duration:500,selector:".knockout",easing:"easeOutQuart"}),h=new i.default.Group,f=0;f<this.n;f++){var g=new st.Anime({animatedAttrs:{fontSize:"".concat(.2*this.attrs.width,"px"),marginLeft:f%2!=1?"14%":"6%"},initialValues:{fontSize:"0px",marginLeft:f%2!=1?"85%":"6%"}},{duration:500,selector:".txt-"+f,easing:"easeOutCubic"});h.addIncident(g,500+50*(f+1))}var y=new st.Anime({animatedAttrs:{width:"0px"}},{duration:300,selector:".bg2",easing:"easeOutQuart"}),m=new st.Anime({animatedAttrs:{opacity:1},initialValues:{opacity:0}},{duration:1,selector:".bg",easing:"easeOutQuart"}),b=new st.Anime({animatedAttrs:{left:"-100%",width:"".concat(this.attrs.width/2*.1,"px")},initialValues:{left:"100%"}},{duration:1e3,selector:".lines-wrapper",easing:"easeOutQuart"});this.addIncident(t,0),this.addIncident(n,350),this.addIncident(e,350),this.addIncident(o,0),this.addIncident(r,350),this.addIncident(a,350),this.addIncident(s,450),this.addIncident(l,600),this.addIncident(p,600),this.addIncident(c,1e3),this.addIncident(u,700),this.addIncident(d,700),this.addIncident(h,500),this.addIncident(y,1800),this.addIncident(m,1779),this.addIncident(b,1900)}},{key:"font",get:function(){return[{type:"google-font",src:"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap"}]}},{key:"html",get:function(){var t=this,n=function(){var n=[],e=Math.floor(t.attrs.height/(.2*t.attrs.width));t.n=e;for(var i=0;i<e;i++)n.push('<div class="txt-group txt-'.concat(i,'">brapapa</div>'));return n.join("")}(),e=this.attrs.strokeText.split(" "),i=function(n){for(var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=[],r=0;r<e.length;r++)o.push('<div style="'.concat(!0===i?"top:".concat(t.attrs.height/e.length*r,"px;"):" ",'" class="').concat(n).concat(r,'">').concat(e[r],"</div>"));return o.join("")};return'\n    <div class="wrapper">\n      <div class="left-image-wrapper">\n        <div class="left-image"> </div>\n      </div>\n\n      <div class="right-image-wrapper">\n        <div class="right-image"> </div>\n      </div>\n\n      <div  class="bg"></div>\n      <div class="bg2">\n        <div class="knockout">\n          '.concat(n,'\n        </div>\n      </div>\n\n      <div class="lines-wrapper">\n        <div class="lines lines-1" style="\n          height:  ').concat(.1*this.attrs.height*Math.random(),"px;\n          width: ").concat(.5*this.attrs.width*Math.random().toFixed(2),"px;\n          top:").concat(this.attrs.height*Math.random().toFixed(2),'px;\n          "></div>\n          \n        <div class="lines lines-2" style="\n          height:').concat(.1*this.attrs.height*Math.random(),"px;\n          width: ").concat(.5*this.attrs.width*Math.random().toFixed(2),"px;\n          top:").concat(this.attrs.height*Math.random().toFixed(2),'px;\n        "></div>\n        <div class="lines lines-3" style="\n          height: ').concat(.1*this.attrs.height*Math.random(),"px;\n          width: ").concat(.5*this.attrs.width*Math.random().toFixed(2),"px;\n          top:").concat(this.attrs.height*Math.random().toFixed(2),'px;\n        "></div>\n      </div>\n\n    \n\n      <div style="opacity: 0;" class="circles-wrapper">\n        <div class="circle-1 circle" ></div>\n        <div class="circle-2 circle "></div>\n        <div class="circle-3 circle "></div>\n      </div>\n      <div style="opacity: 0;" class="flex-center center-text-wrapper" >\n        <div class="center-text" data-text="Yeyey">Yeyey</div>\n      </div>\n\n      <div style="opacity: 0;" class="sliced-img-wrapper">\n        <div class="sliced-img"></div>\n      </div>\n      <div  style="opacity: 0;"class="stroke-text-wrapper flex-center">\n      \n        ').concat(i("stroke-text-center txt-stroke-"),"\n        ").concat(i("stroke-text-outline txt-stroke-outline-",!0),'\n      </div>\n      <div class="doted"></div>\n      <div class="doted-half"></div>\n      <div class="box"> </div>\n\t  </div>\n    ')}},{key:"css",get:function(){var t=this.attrs.strokeText.split(" ");return"\n    .wrapper{\n      width: ".concat(this.attrs.width,"px;\n      height: 700px;\n     \n      display:flex;\n      font-family: 'Poppins', sans-serif;\n    }\n    .box{\n      width: ").concat(.03*this.attrs.width,"px;\n      height: 300px;\n      background: yellow;\n      position:absolute;\n      left: ").concat(this.attrs.width/2,"px;\n    }\n\n    .doted{\n      background-image: radial-gradient(yellow 16%, #0000 20%);\n      background-position: 0 0;\n      background-size: 16px 14px;\n      height: ").concat(this.attrs.height/4.5,"px;\n      width: ").concat(this.attrs.width/2.7,"px;\n      position:absolute;\n      left: 7%;\n      top: 65%\n    }\n\n    .doted,.doted-half{\n      background-image: radial-gradient(yellow 16%, #0000 20%);\n      background-position: 0 0;\n      background-size: 16px 14px;\n      height: ").concat(this.attrs.height/4.5,"px;\n      width: ").concat(this.attrs.width/2.7,"px;\n      position:absolute;\n      left: 7%;\n      top: 65%;\n      opacity: 0;\n      \n    }\n    .doted-half{\n      clip-path: polygon(0 31%, 85% 31%, 100% 55%, 15% 55%);\n      left: 65%;\n      top: 7%\n    }\n\n    .lines-wrapper{\n      height: ").concat(this.attrs.height,"px;\n      width: ").concat(this.attrs.width,"px;\n      position: absolute;\n    }\n    .lines{\n      background: yellow;\n      position: absolute;\n    }\n\n    .left-image-wrapper, .right-image-wrapper{\n      width:").concat(this.attrs.width/2,"px;\n      overflow: hidden;\n    }\n\n  \n    .right-image{\n      height: ").concat(this.attrs.imgHeight,"px;\n      width: ").concat(this.attrs.imgWidth,"px;\n      position: relative;\n      background-image: url(").concat(this.attrs.bgUrl,");\n      background-size: ").concat(this.attrs.imgWidth,"px;\n      transform: scale(1);\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      flex-wrap: wrap;\n      flex: 1 0 auto;\n      background-repeat: no-repeat;\n    }\n    .left-image{\n      height: ").concat(this.attrs.imgHeight,"px;\n      width: ").concat(this.attrs.imgWidth,"px;\n      position: relative;\n      background-image: url(").concat(this.attrs.bgUrl,");\n      background-size: ").concat(this.attrs.imgWidth,'px;\n     \n      transform: scale(1);\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      flex-wrap: wrap;\n      flex: 1 0 auto;\n  \n    }\n    .left-image:after,.right-image:after {\n      content: "";\n      display: block;\n      background: linear-gradient(').concat(this.attrs.overlayColor,");\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      right: 0;\n      left: 0;\n      z-index: -1;\n    }\n    \n\n    .txt-group:nth-of-type(odd){\n      height: 14%;\n      \n    }\n    .txt-group:nth-of-type(2n+2) {\n    \n    height: 14%;\n    }\n    .knockout {\n      background: url(").concat(this.attrs.bgUrl,");\n      background-position: 50% 50%;\n      color: red;\n      -webkit-text-fill-color: transparent; \n      -webkit-background-clip: text;\n      font-weight: bold;\n      font-size: 0;\n      text-transform: uppercase;\n      width:").concat(this.attrs.width,"px;\n      height: ").concat(this.attrs.height,"px;\n      color: yellow;\n    }\n\n  body{\n    \n  }\n  .bg2{\n    background: yellow;\n    width:").concat(this.attrs.width,"px;\n    height: ").concat(this.attrs.height,"px;\n    position: absolute;\n    left:100%;\n  }\n  .bg{\n    background: url(").concat(this.attrs.bgUrl,");\n    background-position: 50% 50%;\n    width:").concat(this.attrs.width,"px;\n    height: ").concat(this.attrs.height,"px;\n    position: absolute;\n  }\n\n  .circle{\n    width: ",0,"px;\n    height: ",0,"px;\n    background: transparent;\n    border: ").concat(.05*this.attrs.width,"px solid yellow;\n    border-radius: 100%;\n  }\n  .circle-1{\n    position: absolute;\n    transform: rotate(").concat(360*Math.random()+"deg",")  translateX(0px) translateY(0px) \n    \n  }\n  .circle-2{\n    position: absolute;\n    transform: rotate(").concat(360*Math.random()+"deg",")  translateX(0px) translateY(0px) \n    \n  }\n  .circle-3{\n    position: absolute;\n    transform: rotate(").concat(360*Math.random()+"deg",")  translateX(0px) translateY(0px) \n    \n  }\n\n  .circles-wrapper{\n    position: absolute;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width:").concat(this.attrs.width,"px;\n    height: ").concat(this.attrs.height,"px;\n  }\n  .center-text{\n    font-weight: bold;\n    font-size: ",100,"px;\n    \n    text-transform: uppercase;\n    color:yellow\n  }\n  .center-text::before,.center-text::after{\n   content: attr(data-text);\n   position: absolute;\n   top: 50%;\n   left: 50%;\n   transform: translate(-50%, -50%);\n   z-index: -2;\n   opacity: 0.6;\n  }\n  .center-text::before{\n    color: #ff00c1;\n    left:52%;\n    top:49%;\n  }\n  .center-text::after{\n    color: #3498db;\n    left:48%;\n    top:51%;\n  }\n\n  .flex-center{\n    position: absolute;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width:").concat(this.attrs.width,"px;\n    height: ").concat(this.attrs.height,"px;\n    z-index: 1;\n  }\n  .sliced-img-wrapper{\n    position: absolute;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width:").concat(this.attrs.width,"px;\n    height: ").concat(this.attrs.height,"px;\n    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 90%);\n    overflow: hidden;\n  }\n  .sliced-img{\n    background: url(").concat(this.attrs.bgUrl,");\n    background-position: 50% 50%;\n    width:").concat(this.attrs.width,"px;\n    height: ").concat(this.attrs.height,'px;\n    position: absolute;\n    \n  }\n\n  .sliced-img::after{\n    content: "";\n      display: block;\n      background: linear-gradient(').concat(this.attrs.overlayColor,");\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      right: 0;\n      left: 0;\n  }\n\n  .stroke-text-center{\n    font-size: ").concat(.15*this.attrs.width,"px;\n    text-transform: uppercase;\n    width:").concat(this.attrs.width,"px;\n    color: yellow;\n    font-weight: 900;\n    display: flex;\n    height: 400px;\n    align-items: center;\n    z-index: 1;\n  }\n  .stroke-text-wrapper{\n    display:flex;\n    flex-direction: column;\n  }\n  .stroke-text-outline{\n    font-size: ").concat(.3*this.attrs.width,"px;\n    text-transform: uppercase;\n    width:").concat(this.attrs.width,"px;\n    color: transparent;\n    font-weight: 900;\n    display: flex;\n    height: 400px;\n    align-items: center;\n    -webkit-text-stroke: 3px aquamarine;\n    position: absolute;\n    height:").concat(this.attrs.height/t.length,"px;\n    \n  }\n    \n\n  ")}}])&&r(n.prototype,e),a&&r(n,a),c}(i.default.API.Clip),name:"BannerA"}]},pt=lt.npm_name,ct=lt.incidents;t.default=lt,t.incidents=ct,t.npm_name=pt,Object.defineProperty(t,"__esModule",{value:!0})}));
