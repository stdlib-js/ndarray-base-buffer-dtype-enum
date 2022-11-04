// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).dtypeEnum=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,t=Object.defineProperty,n=Object.prototype,i=n.toString,o=n.__defineGetter__,a=n.__defineSetter__,u=n.__lookupGetter__,f=n.__lookupSetter__;r=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var l,c,y,s;if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(e,r)||f.call(e,r)?(l=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=l):e[r]=t.value),y="get"in t,s="set"in t,c&&(y||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(e,r,t.get),s&&a&&a.call(e,r,t.set),e};var l=r;function c(e,r,t){l(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var y=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function s(){return y.slice()}function h(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function p(e,r,t){l(e,r,{configurable:!1,enumerable:!0,writable:!1,value:t})}function m(e){return Object.keys(Object(e))}var g=void 0!==Object.keys;var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function w(){return b&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function E(e,r){return null!=e&&d.call(e,r)}var A="function"==typeof Symbol?Symbol.toStringTag:"";var _,T=w()?function(e){var r,t,n;if(null==e)return v.call(e);t=e[A],r=E(e,A);try{e[A]=void 0}catch(r){return v.call(e)}return n=v.call(e),r?e[A]=t:delete e[A],n}:function(e){return v.call(e)};function j(e){return"[object Arguments]"===T(e)}_=function(){return j(arguments)}();var x=_;function S(e){return"string"==typeof e}var B=String.prototype.valueOf;var L=w();function O(e){return"object"==typeof e&&(e instanceof String||(L?function(e){try{return B.call(e),!0}catch(e){return!1}}(e):"[object String]"===T(e)))}function k(e){return S(e)||O(e)}function V(e){return"number"==typeof e}c(k,"isPrimitive",S),c(k,"isObject",O);var I=Number,R=I.prototype.toString;var C=w();function M(e){return"object"==typeof e&&(e instanceof I||(C?function(e){try{return R.call(e),!0}catch(e){return!1}}(e):"[object Number]"===T(e)))}function P(e){return V(e)||M(e)}function U(e){return e!=e}function F(e){return V(e)&&U(e)}function N(e){return M(e)&&U(e.valueOf())}function Y(e){return F(e)||N(e)}c(P,"isPrimitive",V),c(P,"isObject",M),c(Y,"isPrimitive",F),c(Y,"isObject",N);var W=Number.POSITIVE_INFINITY,G=I.NEGATIVE_INFINITY,X=Math.floor;function H(e){return X(e)===e}function J(e){return e<W&&e>G&&H(e)}function D(e){return V(e)&&J(e)}function q(e){return M(e)&&J(e.valueOf())}function z(e){return D(e)||q(e)}c(z,"isPrimitive",D),c(z,"isObject",q);var K=Object.prototype.propertyIsEnumerable;var Q=!K.call("beep","0");function Z(e,r){var t;return null!=e&&(!(t=K.call(e,r))&&Q&&k(e)?!F(r=+r)&&D(r)&&r>=0&&r<e.length:t)}var $=Array.isArray?Array.isArray:function(e){return"[object Array]"===T(e)},ee=4294967295;var re=x?j:function(e){return null!==e&&"object"==typeof e&&!$(e)&&"number"==typeof e.length&&H(e.length)&&e.length>=0&&e.length<=ee&&E(e,"callee")&&!Z(e,"callee")},te=Array.prototype.slice;function ne(e){return null!==e&&"object"==typeof e}c(ne,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(r){var t,n;if(!$(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(ne));var ie=Z((function(){}),"prototype"),oe=!Z({toString:null},"toString");function ae(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&H(e.length)&&e.length>=0&&e.length<=9007199254740991}function ue(e,r,t){var n,i;if(!ae(e)&&!S(e))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+e+"`.");if(0===(n=e.length))return-1;if(3===arguments.length){if(!D(t))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+t+"`.");if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(Y(r)){for(;i<n;i++)if(Y(e[i]))return i}else for(;i<n;i++)if(e[i]===r)return i;return-1}var fe=/./;function le(e){return"boolean"==typeof e}var ce=Boolean.prototype.toString;var ye=w();function se(e){return"object"==typeof e&&(e instanceof Boolean||(ye?function(e){try{return ce.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===T(e)))}function he(e){return le(e)||se(e)}function pe(){return new Function("return this;")()}c(he,"isPrimitive",le),c(he,"isObject",se);var me="object"==typeof self?self:null,ge="object"==typeof window?window:null,be="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},we="object"==typeof be?be:null;var ve=function(e){if(arguments.length){if(!le(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return pe()}if(me)return me;if(ge)return ge;if(we)return we;throw new Error("unexpected error. Unable to resolve global object.")}(),de=ve.document&&ve.document.childNodes,Ee=Int8Array;function Ae(){return/^\s*function\s*([^(]*)/i}var _e=/^\s*function\s*([^(]*)/i;function Te(e){return ne(e)&&(e._isBuffer||e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e))}function je(e){var r,t,n;if(("Object"===(t=T(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=_e.exec(n.toString()))return r[1]}return Te(e)?"Buffer":t}c(Ae,"REGEXP",_e);var xe="function"==typeof fe||"object"==typeof Ee||"function"==typeof de?function(e){return je(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?je(e).toLowerCase():r};function Se(e){return e.constructor&&e.constructor.prototype===e}var Be=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Le="undefined"==typeof window?void 0:window;var Oe=function(){var e;if("undefined"===xe(Le))return!1;for(e in Le)try{-1===ue(Be,e)&&E(Le,e)&&null!==Le[e]&&"object"===xe(Le[e])&&Se(Le[e])}catch(e){return!0}return!1}(),ke="undefined"!=typeof window;var Ve,Ie=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Ve=g?function(){return 2!==(m(arguments)||"").length}(1,2)?function(e){return re(e)?m(te.call(e)):m(e)}:m:function(e){var r,t,n,i,o,a,u;if(i=[],re(e)){for(u=0;u<e.length;u++)i.push(u.toString());return i}if("string"==typeof e){if(e.length>0&&!E(e,"0"))for(u=0;u<e.length;u++)i.push(u.toString())}else{if(!1==(n="function"==typeof e)&&!ne(e))return i;t=ie&&n}for(o in e)t&&"prototype"===o||!E(e,o)||i.push(String(o));if(oe)for(r=function(e){if(!1===ke&&!Oe)return Se(e);try{return Se(e)}catch(e){return!1}}(e),u=0;u<Ie.length;u++)a=Ie[u],r&&"constructor"===a||!E(e,a)||i.push(String(a));return i};var Re=Ve;c(s,"enum",h),function(e,r){var t,n,i;for(t=Re(r),i=0;i<t.length;i++)p(e,n=t[i],r[n])}(s,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Ce={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};var Me={Buffer:"binary",Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Object:"generic",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"},Pe="function"==typeof Float64Array;var Ue="function"==typeof Float64Array?Float64Array:null;var Fe,Ne="function"==typeof Float64Array?Float64Array:void 0;Fe=function(){var e,r,t;if("function"!=typeof Ue)return!1;try{r=new Ue([1,3.14,-3.14,NaN]),t=r,e=(Pe&&t instanceof Float64Array||"[object Float64Array]"===T(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?Ne:function(){throw new Error("not implemented")};var Ye=Fe,We="function"==typeof Float32Array;var Ge="function"==typeof Float32Array?Float32Array:null;var Xe,He="function"==typeof Float32Array?Float32Array:void 0;Xe=function(){var e,r,t;if("function"!=typeof Ge)return!1;try{r=new Ge([1,3.14,-3.14,5e40]),t=r,e=(We&&t instanceof Float32Array||"[object Float32Array]"===T(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===W}catch(r){e=!1}return e}()?He:function(){throw new Error("not implemented")};var Je=Xe,De="function"==typeof Uint32Array;var qe="function"==typeof Uint32Array?Uint32Array:null;var ze,Ke="function"==typeof Uint32Array?Uint32Array:void 0;ze=function(){var e,r,t;if("function"!=typeof qe)return!1;try{r=new qe(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,e=(De&&t instanceof Uint32Array||"[object Uint32Array]"===T(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?Ke:function(){throw new Error("not implemented")};var Qe=ze,Ze="function"==typeof Int32Array;var $e="function"==typeof Int32Array?Int32Array:null;var er,rr="function"==typeof Int32Array?Int32Array:void 0;er=function(){var e,r,t;if("function"!=typeof $e)return!1;try{r=new $e([1,3.14,-3.14,2147483648]),t=r,e=(Ze&&t instanceof Int32Array||"[object Int32Array]"===T(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-2147483648===r[3]}catch(r){e=!1}return e}()?rr:function(){throw new Error("not implemented")};var tr=er,nr="function"==typeof Uint16Array;var ir="function"==typeof Uint16Array?Uint16Array:null;var or,ar="function"==typeof Uint16Array?Uint16Array:void 0;or=function(){var e,r,t;if("function"!=typeof ir)return!1;try{r=new ir(r=[1,3.14,-3.14,65536,65537]),t=r,e=(nr&&t instanceof Uint16Array||"[object Uint16Array]"===T(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?ar:function(){throw new Error("not implemented")};var ur=or,fr="function"==typeof Int16Array;var lr="function"==typeof Int16Array?Int16Array:null;var cr,yr="function"==typeof Int16Array?Int16Array:void 0;cr=function(){var e,r,t;if("function"!=typeof lr)return!1;try{r=new lr([1,3.14,-3.14,32768]),t=r,e=(fr&&t instanceof Int16Array||"[object Int16Array]"===T(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-32768===r[3]}catch(r){e=!1}return e}()?yr:function(){throw new Error("not implemented")};var sr=cr,hr="function"==typeof Uint8Array;var pr="function"==typeof Uint8Array?Uint8Array:null;var mr,gr="function"==typeof Uint8Array?Uint8Array:void 0;mr=function(){var e,r,t;if("function"!=typeof pr)return!1;try{r=new pr(r=[1,3.14,-3.14,256,257]),t=r,e=(hr&&t instanceof Uint8Array||"[object Uint8Array]"===T(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?gr:function(){throw new Error("not implemented")};var br=mr,wr="function"==typeof Uint8ClampedArray;var vr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var dr,Er="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;dr=function(){var e,r,t;if("function"!=typeof vr)return!1;try{r=new vr([-1,0,1,3.14,4.99,255,256]),t=r,e=(wr&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===T(t))&&0===r[0]&&0===r[1]&&1===r[2]&&3===r[3]&&5===r[4]&&255===r[5]&&255===r[6]}catch(r){e=!1}return e}()?Er:function(){throw new Error("not implemented")};var Ar=dr,_r="function"==typeof Int8Array;var Tr="function"==typeof Int8Array?Int8Array:null;var jr,xr="function"==typeof Int8Array?Int8Array:void 0;jr=function(){var e,r,t;if("function"!=typeof Tr)return!1;try{r=new Tr([1,3.14,-3.14,128]),t=r,e=(_r&&t instanceof Int8Array||"[object Int8Array]"===T(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-128===r[3]}catch(r){e=!1}return e}()?xr:function(){throw new Error("not implemented")};var Sr=jr;function Br(e){return D(e)&&e>=0}function Lr(e){return q(e)&&e.valueOf()>=0}function Or(e){return Br(e)||Lr(e)}c(Or,"isPrimitive",Br),c(Or,"isObject",Lr);function kr(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&H(e.length)&&e.length>=0&&e.length<=4294967295}var Vr="function"==typeof ArrayBuffer;function Ir(e){return Vr&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===T(e)}function Rr(e){return"object"==typeof e&&null!==e&&!$(e)}function Cr(e){return"function"===xe(e)}function Mr(e,r){if(!(this instanceof Mr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!V(e))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+e+"`.");if(!V(r))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+r+"`.");return l(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),l(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}c(Mr,"BYTES_PER_ELEMENT",8),c(Mr.prototype,"BYTES_PER_ELEMENT",8),c(Mr.prototype,"byteLength",16),c(Mr.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),c(Mr.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var Pr="function"==typeof Math.fround?Math.fround:null,Ur=new Je(1);var Fr="function"==typeof Pr?Pr:function(e){return Ur[0]=e,Ur[0]};function Nr(e,r){if(!(this instanceof Nr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!V(e))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+e+"`.");if(!V(r))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+r+"`.");return l(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Fr(e)}),l(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Fr(r)}),this}function Yr(e){return e instanceof Mr||e instanceof Nr||"object"==typeof e&&null!==e&&"number"==typeof e.re&&"number"==typeof e.im}function Wr(e){return H(e/2)}function Gr(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&E(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}c(Nr,"BYTES_PER_ELEMENT",4),c(Nr.prototype,"BYTES_PER_ELEMENT",4),c(Nr.prototype,"byteLength",8),c(Nr.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),c(Nr.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e}));var Xr=Gr()?Symbol.iterator:null;function Hr(e,r,t){l(e,r,{configurable:!1,enumerable:!1,get:t})}function Jr(e){return e.re}function Dr(e){return e.im}function qr(e,r){return new Je(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function zr(e,r){return new Ye(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function Kr(e,r){return e[r]}function Qr(e,r){return e.get(r)}function Zr(e,r,t){e[r]=t}function $r(e,r,t){e.set(t,r)}function et(e){var r=Boolean(e.get&&e.set);return{data:e,accessors:r,getter:r?Qr:Kr,setter:r?$r:Zr}}function rt(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(kr(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!Yr(n))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+n+"`.");r.push(Jr(n),Dr(n))}return r}function tt(e,r,t){var n,i,o,a;for(n=[],a=-1;!(i=e.next()).done;)if(a+=1,kr(o=r.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Yr(o))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+o+"`.");n.push(Jr(o),Dr(o))}return n}function nt(e,r){var t,n,i,o;for(t=r.length,o=0,i=0;i<t;i++){if(!Yr(n=r[i]))return null;e[o]=Jr(n),e[o+1]=Dr(n),o+=2}return e}var it=2*Je.BYTES_PER_ELEMENT,ot=Gr();function at(e){return e instanceof ct||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function ut(e){return e===ct||"Complex128Array"===e.name}function ft(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===it}function lt(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===2*it}function ct(){var e,r,t,n;if(r=arguments.length,!(this instanceof ct))return 0===r?new ct:1===r?new ct(arguments[0]):2===r?new ct(arguments[0],arguments[1]):new ct(arguments[0],arguments[1],arguments[2]);if(0===r)t=new Je(0);else if(1===r)if(Br(arguments[0]))t=new Je(2*arguments[0]);else if(ae(arguments[0]))if((n=(t=arguments[0]).length)&&$(t)&&Yr(t[0])){if(null===(t=nt(new Je(2*n),t))){if(!Wr(n))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new Je(arguments[0])}}else{if(ft(t))t=qr(t,0);else if(lt(t))t=zr(t,0);else if(!Wr(n))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new Je(t)}else if(Ir(arguments[0])){if(!H((t=arguments[0]).byteLength/it))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+it+". Byte length: `"+t.byteLength+"`.");t=new Je(t)}else{if(!Rr(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(t=arguments[0],!1===ot)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!Cr(t[Xr]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(!Cr((t=t[Xr]()).next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if((t=rt(t))instanceof Error)throw t;t=new Je(t)}else{if(!Ir(t=arguments[0]))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(!Br(e=arguments[1]))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+e+"`.");if(!H(e/it))throw new RangeError("invalid argument. Byte offset must be a multiple of "+it+". Value: `"+e+"`.");if(2===r){if(!H((n=t.byteLength-e)/it))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+it+". View byte length: `"+n+"`.");t=new Je(t,e)}else{if(!Br(n=arguments[2]))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+n+"`.");if(n*it>t.byteLength-e)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+n*it+"`.");t=new Je(t,e,2*n)}}return c(this,"_buffer",t),c(this,"_length",t.length/2),this}function yt(e){return e.re}function st(e){return e.im}function ht(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(kr(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!Yr(n))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+n+"`.");r.push(yt(n),st(n))}return r}function pt(e,r,t){var n,i,o,a;for(n=[],a=-1;!(i=e.next()).done;)if(a+=1,kr(o=r.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Yr(o))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+o+"`.");n.push(yt(o),st(o))}return n}function mt(e,r){var t,n,i,o;for(t=r.length,o=0,i=0;i<t;i++){if(!Yr(n=r[i]))return null;e[o]=yt(n),e[o+1]=st(n),o+=2}return e}c(ct,"BYTES_PER_ELEMENT",it),c(ct,"name","Complex64Array"),c(ct,"from",(function(e){var r,t,n,i,o,a,u,f,l,c,y;if(!Cr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ut(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Cr(n=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");t>2&&(r=arguments[2])}if(at(e)){if(u=e.length,n){for(o=(i=new this(u))._buffer,y=0,c=0;c<u;c++){if(Yr(l=n.call(r,e.get(c),c)))o[y]=Jr(l),o[y+1]=Dr(l);else{if(!(kr(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");o[y]=l[0],o[y+1]=l[1]}y+=2}return i}return new this(e)}if(ae(e)){if(n){for(u=e.length,a=et(e),c=0;c<u;c++)if(!Yr(a.getter(e,c))){f=!0;break}if(f){if(!Wr(u))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+u+"`.");for(o=(i=new this(u/2))._buffer,c=0;c<u;c++)o[c]=n.call(r,a.getter(e,c),c);return i}for(o=(i=new this(u))._buffer,y=0,c=0;c<u;c++){if(Yr(l=n.call(r,a.getter(e,c),c)))o[y]=Jr(l),o[y+1]=Dr(l);else{if(!(kr(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");o[y]=l[0],o[y+1]=l[1]}y+=2}return i}return new this(e)}if(Rr(e)&&ot&&Cr(e[Xr])){if(!Cr((o=e[Xr]()).next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if((a=n?tt(o,n,r):rt(o))instanceof Error)throw a;for(o=(i=new this(u=a.length/2))._buffer,c=0;c<u;c++)o[c]=a[c];return i}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+e+"`.")})),c(ct,"of",(function(){var e,r;if(!Cr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ut(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),Hr(ct.prototype,"buffer",(function(){return this._buffer.buffer})),Hr(ct.prototype,"byteLength",(function(){return this._buffer.byteLength})),Hr(ct.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),c(ct.prototype,"BYTES_PER_ELEMENT",ct.BYTES_PER_ELEMENT),c(ct.prototype,"copyWithin",(function(e,r){if(!at(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),c(ct.prototype,"entries",(function(){var e,r,t,n,i,o,a;if(!at(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,o=-1,a=-2,c(t={},"next",(function(){var r;if(o+=1,i||o>=n)return{done:!0};return r=new Nr(e[a+=2],e[a+1]),{value:[o,r],done:!1}})),c(t,"return",(function(e){if(i=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),Xr&&c(t,Xr,(function(){return r.entries()})),t})),c(ct.prototype,"get",(function(e){var r;if(!at(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Br(e))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+e+"`.");if(!(e>=this._length))return new Nr((r=this._buffer)[e*=2],r[e+1])})),Hr(ct.prototype,"length",(function(){return this._length})),c(ct.prototype,"set",(function(e){var r,t,n,i,o,a,u,f,l;if(!at(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!Br(t=arguments[1]))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+t+"`.")}else t=0;if(Yr(e)){if(t>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+t+"`.");return n[t*=2]=Jr(e),void(n[t+1]=Dr(e))}if(at(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*it,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new Je(r.length),f=0;f<r.length;f++)i[f]=r[f];r=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!ae(e))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+e+"`.");for(a=e.length,f=0;f<a;f++)if(!Yr(e[f])){o=!0;break}if(o){if(!Wr(a))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+a+"`.");if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*it,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new Je(a),f=0;f<a;f++)i[f]=r[f];r=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=Jr(u),n[t+1]=Dr(u),t+=2}}));var gt=2*Ye.BYTES_PER_ELEMENT,bt=Gr();function wt(e){return e instanceof At||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function vt(e){return e===At||"Complex64Array"===e.name}function dt(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===gt/2}function Et(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===gt}function At(){var e,r,t,n;if(r=arguments.length,!(this instanceof At))return 0===r?new At:1===r?new At(arguments[0]):2===r?new At(arguments[0],arguments[1]):new At(arguments[0],arguments[1],arguments[2]);if(0===r)t=new Ye(0);else if(1===r)if(Br(arguments[0]))t=new Ye(2*arguments[0]);else if(ae(arguments[0]))if((n=(t=arguments[0]).length)&&$(t)&&Yr(t[0])){if(null===(t=mt(new Ye(2*n),t))){if(!Wr(n))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new Ye(arguments[0])}}else{if(dt(t))t=qr(t,0);else if(Et(t))t=zr(t,0);else if(!Wr(n))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new Ye(t)}else if(Ir(arguments[0])){if(!H((t=arguments[0]).byteLength/gt))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+gt+". Byte length: `"+t.byteLength+"`.");t=new Ye(t)}else{if(!Rr(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(t=arguments[0],!1===bt)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!Cr(t[Xr]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(!Cr((t=t[Xr]()).next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if((t=ht(t))instanceof Error)throw t;t=new Ye(t)}else{if(!Ir(t=arguments[0]))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(!Br(e=arguments[1]))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+e+"`.");if(!H(e/gt))throw new RangeError("invalid argument. Byte offset must be a multiple of "+gt+". Value: `"+e+"`.");if(2===r){if(!H((n=t.byteLength-e)/gt))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+gt+". View byte length: `"+n+"`.");t=new Ye(t,e)}else{if(!Br(n=arguments[2]))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+n+"`.");if(n*gt>t.byteLength-e)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+n*gt+"`.");t=new Ye(t,e,2*n)}}return c(this,"_buffer",t),c(this,"_length",t.length/2),this}c(At,"BYTES_PER_ELEMENT",gt),c(At,"name","Complex128Array"),c(At,"from",(function(e){var r,t,n,i,o,a,u,f,l,c,y;if(!Cr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!vt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Cr(n=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");t>2&&(r=arguments[2])}if(wt(e)){if(u=e.length,n){for(o=(i=new this(u))._buffer,y=0,c=0;c<u;c++){if(Yr(l=n.call(r,e.get(c),c)))o[y]=yt(l),o[y+1]=st(l);else{if(!(kr(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");o[y]=l[0],o[y+1]=l[1]}y+=2}return i}return new this(e)}if(ae(e)){if(n){for(u=e.length,a=et(e),c=0;c<u;c++)if(!Yr(a.getter(e,c))){f=!0;break}if(f){if(!Wr(u))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+u+"`.");for(o=(i=new this(u/2))._buffer,c=0;c<u;c++)o[c]=n.call(r,a.getter(e,c),c);return i}for(o=(i=new this(u))._buffer,y=0,c=0;c<u;c++){if(Yr(l=n.call(r,a.getter(e,c),c)))o[y]=yt(l),o[y+1]=st(l);else{if(!(kr(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");o[y]=l[0],o[y+1]=l[1]}y+=2}return i}return new this(e)}if(Rr(e)&&bt&&Cr(e[Xr])){if(!Cr((o=e[Xr]()).next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if((a=n?pt(o,n,r):ht(o))instanceof Error)throw a;for(o=(i=new this(u=a.length/2))._buffer,c=0;c<u;c++)o[c]=a[c];return i}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+e+"`.")})),c(At,"of",(function(){var e,r;if(!Cr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!vt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),Hr(At.prototype,"buffer",(function(){return this._buffer.buffer})),Hr(At.prototype,"byteLength",(function(){return this._buffer.byteLength})),Hr(At.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),c(At.prototype,"BYTES_PER_ELEMENT",At.BYTES_PER_ELEMENT),c(At.prototype,"copyWithin",(function(e,r){if(!wt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),c(At.prototype,"entries",(function(){var e,r,t,n,i,o,a;if(!wt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,o=-1,a=-2,c(t={},"next",(function(){var r;if(o+=1,i||o>=n)return{done:!0};return r=new Mr(e[a+=2],e[a+1]),{value:[o,r],done:!1}})),c(t,"return",(function(e){if(i=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),Xr&&c(t,Xr,(function(){return r.entries()})),t})),c(At.prototype,"get",(function(e){var r;if(!wt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Br(e))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+e+"`.");if(!(e>=this._length))return new Mr((r=this._buffer)[e*=2],r[e+1])})),Hr(At.prototype,"length",(function(){return this._length})),c(At.prototype,"set",(function(e){var r,t,n,i,o,a,u,f,l;if(!wt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!Br(t=arguments[1]))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+t+"`.")}else t=0;if(Yr(e)){if(t>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+t+"`.");return n[t*=2]=yt(e),void(n[t+1]=st(e))}if(wt(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*gt,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new Ye(r.length),f=0;f<r.length;f++)i[f]=r[f];r=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!ae(e))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+e+"`.");for(a=e.length,f=0;f<a;f++)if(!Yr(e[f])){o=!0;break}if(o){if(!Wr(a))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+a+"`.");if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*gt,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new Ye(a),f=0;f<a;f++)i[f]=r[f];r=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=yt(u),n[t+1]=st(u),t+=2}}));var _t=[Ye,Je,tr,Qe,sr,ur,Sr,br,Ar,ct,At],Tt=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"],jt=Tt.length;return function(e){var r=function(e){var r;if($(e))return"generic";if(Te(e))return"binary";for(r=0;r<jt;r++)if(e instanceof _t[r])return Tt[r];return Me[je(e)]||null}(e);return r?function(e){var r=Ce[e];return"number"==typeof r?r:null}(r):null}}));
//# sourceMappingURL=browser.js.map
