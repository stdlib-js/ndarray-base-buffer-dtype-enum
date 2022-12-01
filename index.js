// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).dtypeEnum=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,t=Object.defineProperty,n=Object.prototype,i=n.toString,o=n.__defineGetter__,a=n.__defineSetter__,u=n.__lookupGetter__,f=n.__lookupSetter__;r=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var l,c,y,s;if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(e,r)||f.call(e,r)?(l=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=l):e[r]=t.value),y="get"in t,s="set"in t,c&&(y||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(e,r,t.get),s&&a&&a.call(e,r,t.set),e};var l=r;function c(e,r,t){l(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var y=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function s(){return y.slice()}function h(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function p(e,r,t){l(e,r,{configurable:!1,enumerable:!0,writable:!1,value:t})}function m(e){return Object.keys(Object(e))}var g=void 0!==Object.keys;var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function w(){return b&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function E(e,r){return null!=e&&d.call(e,r)}var A="function"==typeof Symbol?Symbol.toStringTag:"";var _,T=w()?function(e){var r,t,n;if(null==e)return v.call(e);t=e[A],r=E(e,A);try{e[A]=void 0}catch(r){return v.call(e)}return n=v.call(e),r?e[A]=t:delete e[A],n}:function(e){return v.call(e)};function j(e){return"[object Arguments]"===T(e)}_=function(){return j(arguments)}();var x=_;function S(e){return"string"==typeof e}var B=String.prototype.valueOf;var L=w();function O(e){return"object"==typeof e&&(e instanceof String||(L?function(e){try{return B.call(e),!0}catch(e){return!1}}(e):"[object String]"===T(e)))}function k(e){return S(e)||O(e)}function V(e){return"number"==typeof e}c(k,"isPrimitive",S),c(k,"isObject",O);var I=Number,R=I.prototype.toString;var C=w();function M(e){return"object"==typeof e&&(e instanceof I||(C?function(e){try{return R.call(e),!0}catch(e){return!1}}(e):"[object Number]"===T(e)))}function P(e){return V(e)||M(e)}function U(e){return e!=e}function F(e){return V(e)&&U(e)}function N(e){return M(e)&&U(e.valueOf())}function Y(e){return F(e)||N(e)}c(P,"isPrimitive",V),c(P,"isObject",M),c(Y,"isPrimitive",F),c(Y,"isObject",N);var W=Number.POSITIVE_INFINITY,G=I.NEGATIVE_INFINITY,X=Math.floor;function H(e){return X(e)===e}function J(e){return e<W&&e>G&&H(e)}function D(e){return V(e)&&J(e)}function q(e){return M(e)&&J(e.valueOf())}function z(e){return D(e)||q(e)}c(z,"isPrimitive",D),c(z,"isObject",q);var K=Object.prototype.propertyIsEnumerable;var Q=!K.call("beep","0");function Z(e,r){var t;return null!=e&&(!(t=K.call(e,r))&&Q&&k(e)?!F(r=+r)&&D(r)&&r>=0&&r<e.length:t)}var $=Array.isArray?Array.isArray:function(e){return"[object Array]"===T(e)},ee=4294967295;var re=x?j:function(e){return null!==e&&"object"==typeof e&&!$(e)&&"number"==typeof e.length&&H(e.length)&&e.length>=0&&e.length<=ee&&E(e,"callee")&&!Z(e,"callee")},te=Array.prototype.slice;function ne(e){return null!==e&&"object"==typeof e}c(ne,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(r){var t,n;if(!$(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(ne));var ie=Z((function(){}),"prototype"),oe=!Z({toString:null},"toString");function ae(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&H(e.length)&&e.length>=0&&e.length<=9007199254740991}function ue(e,r,t){var n,i;if(!ae(e)&&!S(e))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+e+"`.");if(0===(n=e.length))return-1;if(3===arguments.length){if(!D(t))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+t+"`.");if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(Y(r)){for(;i<n;i++)if(Y(e[i]))return i}else for(;i<n;i++)if(e[i]===r)return i;return-1}var fe=/./;function le(e){return"boolean"==typeof e}var ce=Boolean.prototype.toString;var ye=w();function se(e){return"object"==typeof e&&(e instanceof Boolean||(ye?function(e){try{return ce.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===T(e)))}function he(e){return le(e)||se(e)}function pe(){return new Function("return this;")()}c(he,"isPrimitive",le),c(he,"isObject",se);var me="object"==typeof self?self:null,ge="object"==typeof window?window:null,be="object"==typeof global?global:null;var we=function(e){if(arguments.length){if(!le(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return pe()}if(me)return me;if(ge)return ge;if(be)return be;throw new Error("unexpected error. Unable to resolve global object.")}(),ve=we.document&&we.document.childNodes,de=Int8Array;function Ee(){return/^\s*function\s*([^(]*)/i}var Ae=/^\s*function\s*([^(]*)/i;function _e(e){return ne(e)&&(e._isBuffer||e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e))}function Te(e){var r,t,n;if(("Object"===(t=T(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=Ae.exec(n.toString()))return r[1]}return _e(e)?"Buffer":t}c(Ee,"REGEXP",Ae);var je="function"==typeof fe||"object"==typeof de||"function"==typeof ve?function(e){return Te(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?Te(e).toLowerCase():r};function xe(e){return e.constructor&&e.constructor.prototype===e}var Se=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Be="undefined"==typeof window?void 0:window;var Le=function(){var e;if("undefined"===je(Be))return!1;for(e in Be)try{-1===ue(Se,e)&&E(Be,e)&&null!==Be[e]&&"object"===je(Be[e])&&xe(Be[e])}catch(e){return!0}return!1}(),Oe="undefined"!=typeof window;var ke,Ve=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];ke=g?function(){return 2!==(m(arguments)||"").length}(1,2)?function(e){return re(e)?m(te.call(e)):m(e)}:m:function(e){var r,t,n,i,o,a,u;if(i=[],re(e)){for(u=0;u<e.length;u++)i.push(u.toString());return i}if("string"==typeof e){if(e.length>0&&!E(e,"0"))for(u=0;u<e.length;u++)i.push(u.toString())}else{if(!1==(n="function"==typeof e)&&!ne(e))return i;t=ie&&n}for(o in e)t&&"prototype"===o||!E(e,o)||i.push(String(o));if(oe)for(r=function(e){if(!1===Oe&&!Le)return xe(e);try{return xe(e)}catch(e){return!1}}(e),u=0;u<Ve.length;u++)a=Ve[u],r&&"constructor"===a||!E(e,a)||i.push(String(a));return i};var Ie=ke;c(s,"enum",h),function(e,r){var t,n,i;for(t=Ie(r),i=0;i<t.length;i++)p(e,n=t[i],r[n])}(s,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Re={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};var Ce={Buffer:"binary",Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Object:"generic",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"},Me="function"==typeof Float64Array;var Pe="function"==typeof Float64Array?Float64Array:null;var Ue,Fe="function"==typeof Float64Array?Float64Array:void 0;Ue=function(){var e,r,t;if("function"!=typeof Pe)return!1;try{r=new Pe([1,3.14,-3.14,NaN]),t=r,e=(Me&&t instanceof Float64Array||"[object Float64Array]"===T(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?Fe:function(){throw new Error("not implemented")};var Ne=Ue,Ye="function"==typeof Float32Array;var We="function"==typeof Float32Array?Float32Array:null;var Ge,Xe="function"==typeof Float32Array?Float32Array:void 0;Ge=function(){var e,r,t;if("function"!=typeof We)return!1;try{r=new We([1,3.14,-3.14,5e40]),t=r,e=(Ye&&t instanceof Float32Array||"[object Float32Array]"===T(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===W}catch(r){e=!1}return e}()?Xe:function(){throw new Error("not implemented")};var He=Ge,Je="function"==typeof Uint32Array;var De="function"==typeof Uint32Array?Uint32Array:null;var qe,ze="function"==typeof Uint32Array?Uint32Array:void 0;qe=function(){var e,r,t;if("function"!=typeof De)return!1;try{r=new De(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,e=(Je&&t instanceof Uint32Array||"[object Uint32Array]"===T(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?ze:function(){throw new Error("not implemented")};var Ke=qe,Qe="function"==typeof Int32Array;var Ze="function"==typeof Int32Array?Int32Array:null;var $e,er="function"==typeof Int32Array?Int32Array:void 0;$e=function(){var e,r,t;if("function"!=typeof Ze)return!1;try{r=new Ze([1,3.14,-3.14,2147483648]),t=r,e=(Qe&&t instanceof Int32Array||"[object Int32Array]"===T(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-2147483648===r[3]}catch(r){e=!1}return e}()?er:function(){throw new Error("not implemented")};var rr=$e,tr="function"==typeof Uint16Array;var nr="function"==typeof Uint16Array?Uint16Array:null;var ir,or="function"==typeof Uint16Array?Uint16Array:void 0;ir=function(){var e,r,t;if("function"!=typeof nr)return!1;try{r=new nr(r=[1,3.14,-3.14,65536,65537]),t=r,e=(tr&&t instanceof Uint16Array||"[object Uint16Array]"===T(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?or:function(){throw new Error("not implemented")};var ar=ir,ur="function"==typeof Int16Array;var fr="function"==typeof Int16Array?Int16Array:null;var lr,cr="function"==typeof Int16Array?Int16Array:void 0;lr=function(){var e,r,t;if("function"!=typeof fr)return!1;try{r=new fr([1,3.14,-3.14,32768]),t=r,e=(ur&&t instanceof Int16Array||"[object Int16Array]"===T(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-32768===r[3]}catch(r){e=!1}return e}()?cr:function(){throw new Error("not implemented")};var yr=lr,sr="function"==typeof Uint8Array;var hr="function"==typeof Uint8Array?Uint8Array:null;var pr,mr="function"==typeof Uint8Array?Uint8Array:void 0;pr=function(){var e,r,t;if("function"!=typeof hr)return!1;try{r=new hr(r=[1,3.14,-3.14,256,257]),t=r,e=(sr&&t instanceof Uint8Array||"[object Uint8Array]"===T(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?mr:function(){throw new Error("not implemented")};var gr=pr,br="function"==typeof Uint8ClampedArray;var wr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var vr,dr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;vr=function(){var e,r,t;if("function"!=typeof wr)return!1;try{r=new wr([-1,0,1,3.14,4.99,255,256]),t=r,e=(br&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===T(t))&&0===r[0]&&0===r[1]&&1===r[2]&&3===r[3]&&5===r[4]&&255===r[5]&&255===r[6]}catch(r){e=!1}return e}()?dr:function(){throw new Error("not implemented")};var Er=vr,Ar="function"==typeof Int8Array;var _r="function"==typeof Int8Array?Int8Array:null;var Tr,jr="function"==typeof Int8Array?Int8Array:void 0;Tr=function(){var e,r,t;if("function"!=typeof _r)return!1;try{r=new _r([1,3.14,-3.14,128]),t=r,e=(Ar&&t instanceof Int8Array||"[object Int8Array]"===T(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-128===r[3]}catch(r){e=!1}return e}()?jr:function(){throw new Error("not implemented")};var xr=Tr;function Sr(e){return D(e)&&e>=0}function Br(e){return q(e)&&e.valueOf()>=0}function Lr(e){return Sr(e)||Br(e)}c(Lr,"isPrimitive",Sr),c(Lr,"isObject",Br);function Or(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&H(e.length)&&e.length>=0&&e.length<=4294967295}var kr="function"==typeof ArrayBuffer;function Vr(e){return kr&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===T(e)}function Ir(e){return"object"==typeof e&&null!==e&&!$(e)}function Rr(e){return"function"===je(e)}function Cr(e,r){if(!(this instanceof Cr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!V(e))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+e+"`.");if(!V(r))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+r+"`.");return l(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),l(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}c(Cr,"BYTES_PER_ELEMENT",8),c(Cr.prototype,"BYTES_PER_ELEMENT",8),c(Cr.prototype,"byteLength",16),c(Cr.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),c(Cr.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var Mr="function"==typeof Math.fround?Math.fround:null,Pr=new He(1);var Ur="function"==typeof Mr?Mr:function(e){return Pr[0]=e,Pr[0]};function Fr(e,r){if(!(this instanceof Fr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!V(e))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+e+"`.");if(!V(r))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+r+"`.");return l(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Ur(e)}),l(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Ur(r)}),this}function Nr(e){return e instanceof Cr||e instanceof Fr||"object"==typeof e&&null!==e&&"number"==typeof e.re&&"number"==typeof e.im}function Yr(e){return H(e/2)}function Wr(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&E(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}c(Fr,"BYTES_PER_ELEMENT",4),c(Fr.prototype,"BYTES_PER_ELEMENT",4),c(Fr.prototype,"byteLength",8),c(Fr.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),c(Fr.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e}));var Gr=Wr()?Symbol.iterator:null;function Xr(e,r,t){l(e,r,{configurable:!1,enumerable:!1,get:t})}function Hr(e){return e.re}function Jr(e){return e.im}function Dr(e,r){return new He(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function qr(e,r){return new Ne(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function zr(e,r){return e[r]}function Kr(e,r){return e.get(r)}function Qr(e,r,t){e[r]=t}function Zr(e,r,t){e.set(t,r)}function $r(e){var r=Boolean(e.get&&e.set);return{data:e,accessors:r,getter:r?Kr:zr,setter:r?Zr:Qr}}function et(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(Or(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!Nr(n))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+n+"`.");r.push(Hr(n),Jr(n))}return r}function rt(e,r,t){var n,i,o,a;for(n=[],a=-1;!(i=e.next()).done;)if(a+=1,Or(o=r.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Nr(o))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+o+"`.");n.push(Hr(o),Jr(o))}return n}function tt(e,r){var t,n,i,o;for(t=r.length,o=0,i=0;i<t;i++){if(!Nr(n=r[i]))return null;e[o]=Hr(n),e[o+1]=Jr(n),o+=2}return e}var nt=2*He.BYTES_PER_ELEMENT,it=Wr();function ot(e){return e instanceof lt||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function at(e){return e===lt||"Complex128Array"===e.name}function ut(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===nt}function ft(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===2*nt}function lt(){var e,r,t,n;if(r=arguments.length,!(this instanceof lt))return 0===r?new lt:1===r?new lt(arguments[0]):2===r?new lt(arguments[0],arguments[1]):new lt(arguments[0],arguments[1],arguments[2]);if(0===r)t=new He(0);else if(1===r)if(Sr(arguments[0]))t=new He(2*arguments[0]);else if(ae(arguments[0]))if((n=(t=arguments[0]).length)&&$(t)&&Nr(t[0])){if(null===(t=tt(new He(2*n),t))){if(!Yr(n))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new He(arguments[0])}}else{if(ut(t))t=Dr(t,0);else if(ft(t))t=qr(t,0);else if(!Yr(n))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new He(t)}else if(Vr(arguments[0])){if(!H((t=arguments[0]).byteLength/nt))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+nt+". Byte length: `"+t.byteLength+"`.");t=new He(t)}else{if(!Ir(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(t=arguments[0],!1===it)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!Rr(t[Gr]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(!Rr((t=t[Gr]()).next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if((t=et(t))instanceof Error)throw t;t=new He(t)}else{if(!Vr(t=arguments[0]))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(!Sr(e=arguments[1]))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+e+"`.");if(!H(e/nt))throw new RangeError("invalid argument. Byte offset must be a multiple of "+nt+". Value: `"+e+"`.");if(2===r){if(!H((n=t.byteLength-e)/nt))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+nt+". View byte length: `"+n+"`.");t=new He(t,e)}else{if(!Sr(n=arguments[2]))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+n+"`.");if(n*nt>t.byteLength-e)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+n*nt+"`.");t=new He(t,e,2*n)}}return c(this,"_buffer",t),c(this,"_length",t.length/2),this}function ct(e){return e.re}function yt(e){return e.im}function st(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(Or(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!Nr(n))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+n+"`.");r.push(ct(n),yt(n))}return r}function ht(e,r,t){var n,i,o,a;for(n=[],a=-1;!(i=e.next()).done;)if(a+=1,Or(o=r.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Nr(o))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+o+"`.");n.push(ct(o),yt(o))}return n}function pt(e,r){var t,n,i,o;for(t=r.length,o=0,i=0;i<t;i++){if(!Nr(n=r[i]))return null;e[o]=ct(n),e[o+1]=yt(n),o+=2}return e}c(lt,"BYTES_PER_ELEMENT",nt),c(lt,"name","Complex64Array"),c(lt,"from",(function(e){var r,t,n,i,o,a,u,f,l,c,y;if(!Rr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!at(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Rr(n=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");t>2&&(r=arguments[2])}if(ot(e)){if(u=e.length,n){for(o=(i=new this(u))._buffer,y=0,c=0;c<u;c++){if(Nr(l=n.call(r,e.get(c),c)))o[y]=Hr(l),o[y+1]=Jr(l);else{if(!(Or(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");o[y]=l[0],o[y+1]=l[1]}y+=2}return i}return new this(e)}if(ae(e)){if(n){for(u=e.length,a=$r(e),c=0;c<u;c++)if(!Nr(a.getter(e,c))){f=!0;break}if(f){if(!Yr(u))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+u+"`.");for(o=(i=new this(u/2))._buffer,c=0;c<u;c++)o[c]=n.call(r,a.getter(e,c),c);return i}for(o=(i=new this(u))._buffer,y=0,c=0;c<u;c++){if(Nr(l=n.call(r,a.getter(e,c),c)))o[y]=Hr(l),o[y+1]=Jr(l);else{if(!(Or(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");o[y]=l[0],o[y+1]=l[1]}y+=2}return i}return new this(e)}if(Ir(e)&&it&&Rr(e[Gr])){if(!Rr((o=e[Gr]()).next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if((a=n?rt(o,n,r):et(o))instanceof Error)throw a;for(o=(i=new this(u=a.length/2))._buffer,c=0;c<u;c++)o[c]=a[c];return i}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+e+"`.")})),c(lt,"of",(function(){var e,r;if(!Rr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!at(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),Xr(lt.prototype,"buffer",(function(){return this._buffer.buffer})),Xr(lt.prototype,"byteLength",(function(){return this._buffer.byteLength})),Xr(lt.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),c(lt.prototype,"BYTES_PER_ELEMENT",lt.BYTES_PER_ELEMENT),c(lt.prototype,"copyWithin",(function(e,r){if(!ot(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),c(lt.prototype,"entries",(function(){var e,r,t,n,i,o,a;if(!ot(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,o=-1,a=-2,c(t={},"next",(function(){var r;if(o+=1,i||o>=n)return{done:!0};return r=new Fr(e[a+=2],e[a+1]),{value:[o,r],done:!1}})),c(t,"return",(function(e){if(i=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),Gr&&c(t,Gr,(function(){return r.entries()})),t})),c(lt.prototype,"get",(function(e){var r;if(!ot(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Sr(e))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+e+"`.");if(!(e>=this._length))return new Fr((r=this._buffer)[e*=2],r[e+1])})),Xr(lt.prototype,"length",(function(){return this._length})),c(lt.prototype,"set",(function(e){var r,t,n,i,o,a,u,f,l;if(!ot(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!Sr(t=arguments[1]))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+t+"`.")}else t=0;if(Nr(e)){if(t>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+t+"`.");return n[t*=2]=Hr(e),void(n[t+1]=Jr(e))}if(ot(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*nt,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new He(r.length),f=0;f<r.length;f++)i[f]=r[f];r=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!ae(e))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+e+"`.");for(a=e.length,f=0;f<a;f++)if(!Nr(e[f])){o=!0;break}if(o){if(!Yr(a))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+a+"`.");if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*nt,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new He(a),f=0;f<a;f++)i[f]=r[f];r=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=Hr(u),n[t+1]=Jr(u),t+=2}}));var mt=2*Ne.BYTES_PER_ELEMENT,gt=Wr();function bt(e){return e instanceof Et||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function wt(e){return e===Et||"Complex64Array"===e.name}function vt(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===mt/2}function dt(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===mt}function Et(){var e,r,t,n;if(r=arguments.length,!(this instanceof Et))return 0===r?new Et:1===r?new Et(arguments[0]):2===r?new Et(arguments[0],arguments[1]):new Et(arguments[0],arguments[1],arguments[2]);if(0===r)t=new Ne(0);else if(1===r)if(Sr(arguments[0]))t=new Ne(2*arguments[0]);else if(ae(arguments[0]))if((n=(t=arguments[0]).length)&&$(t)&&Nr(t[0])){if(null===(t=pt(new Ne(2*n),t))){if(!Yr(n))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new Ne(arguments[0])}}else{if(vt(t))t=Dr(t,0);else if(dt(t))t=qr(t,0);else if(!Yr(n))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new Ne(t)}else if(Vr(arguments[0])){if(!H((t=arguments[0]).byteLength/mt))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+mt+". Byte length: `"+t.byteLength+"`.");t=new Ne(t)}else{if(!Ir(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(t=arguments[0],!1===gt)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!Rr(t[Gr]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(!Rr((t=t[Gr]()).next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if((t=st(t))instanceof Error)throw t;t=new Ne(t)}else{if(!Vr(t=arguments[0]))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(!Sr(e=arguments[1]))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+e+"`.");if(!H(e/mt))throw new RangeError("invalid argument. Byte offset must be a multiple of "+mt+". Value: `"+e+"`.");if(2===r){if(!H((n=t.byteLength-e)/mt))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+mt+". View byte length: `"+n+"`.");t=new Ne(t,e)}else{if(!Sr(n=arguments[2]))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+n+"`.");if(n*mt>t.byteLength-e)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+n*mt+"`.");t=new Ne(t,e,2*n)}}return c(this,"_buffer",t),c(this,"_length",t.length/2),this}c(Et,"BYTES_PER_ELEMENT",mt),c(Et,"name","Complex128Array"),c(Et,"from",(function(e){var r,t,n,i,o,a,u,f,l,c,y;if(!Rr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!wt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Rr(n=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");t>2&&(r=arguments[2])}if(bt(e)){if(u=e.length,n){for(o=(i=new this(u))._buffer,y=0,c=0;c<u;c++){if(Nr(l=n.call(r,e.get(c),c)))o[y]=ct(l),o[y+1]=yt(l);else{if(!(Or(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");o[y]=l[0],o[y+1]=l[1]}y+=2}return i}return new this(e)}if(ae(e)){if(n){for(u=e.length,a=$r(e),c=0;c<u;c++)if(!Nr(a.getter(e,c))){f=!0;break}if(f){if(!Yr(u))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+u+"`.");for(o=(i=new this(u/2))._buffer,c=0;c<u;c++)o[c]=n.call(r,a.getter(e,c),c);return i}for(o=(i=new this(u))._buffer,y=0,c=0;c<u;c++){if(Nr(l=n.call(r,a.getter(e,c),c)))o[y]=ct(l),o[y+1]=yt(l);else{if(!(Or(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");o[y]=l[0],o[y+1]=l[1]}y+=2}return i}return new this(e)}if(Ir(e)&&gt&&Rr(e[Gr])){if(!Rr((o=e[Gr]()).next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if((a=n?ht(o,n,r):st(o))instanceof Error)throw a;for(o=(i=new this(u=a.length/2))._buffer,c=0;c<u;c++)o[c]=a[c];return i}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+e+"`.")})),c(Et,"of",(function(){var e,r;if(!Rr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!wt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),Xr(Et.prototype,"buffer",(function(){return this._buffer.buffer})),Xr(Et.prototype,"byteLength",(function(){return this._buffer.byteLength})),Xr(Et.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),c(Et.prototype,"BYTES_PER_ELEMENT",Et.BYTES_PER_ELEMENT),c(Et.prototype,"copyWithin",(function(e,r){if(!bt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),c(Et.prototype,"entries",(function(){var e,r,t,n,i,o,a;if(!bt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,o=-1,a=-2,c(t={},"next",(function(){var r;if(o+=1,i||o>=n)return{done:!0};return r=new Cr(e[a+=2],e[a+1]),{value:[o,r],done:!1}})),c(t,"return",(function(e){if(i=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),Gr&&c(t,Gr,(function(){return r.entries()})),t})),c(Et.prototype,"get",(function(e){var r;if(!bt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Sr(e))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+e+"`.");if(!(e>=this._length))return new Cr((r=this._buffer)[e*=2],r[e+1])})),Xr(Et.prototype,"length",(function(){return this._length})),c(Et.prototype,"set",(function(e){var r,t,n,i,o,a,u,f,l;if(!bt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!Sr(t=arguments[1]))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+t+"`.")}else t=0;if(Nr(e)){if(t>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+t+"`.");return n[t*=2]=ct(e),void(n[t+1]=yt(e))}if(bt(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*mt,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new Ne(r.length),f=0;f<r.length;f++)i[f]=r[f];r=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!ae(e))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+e+"`.");for(a=e.length,f=0;f<a;f++)if(!Nr(e[f])){o=!0;break}if(o){if(!Yr(a))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+a+"`.");if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*mt,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new Ne(a),f=0;f<a;f++)i[f]=r[f];r=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=ct(u),n[t+1]=yt(u),t+=2}}));var At=[Ne,He,rr,Ke,yr,ar,xr,gr,Er,lt,Et],_t=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"],Tt=_t.length;return function(e){var r=function(e){var r;if($(e))return"generic";if(_e(e))return"binary";for(r=0;r<Tt;r++)if(e instanceof At[r])return _t[r];return Ce[Te(e)]||null}(e);return r?function(e){var r=Re[e];return"number"==typeof r?r:null}(r):null}}));
//# sourceMappingURL=index.js.map