// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,t=Object.defineProperty,n=Object.prototype,i=n.toString,o=n.__defineGetter__,a=n.__defineSetter__,u=n.__lookupGetter__,f=n.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var l,c,y,s;if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(r,e)||f.call(r,e)?(l=r.__proto__,r.__proto__=n,delete r[e],r[e]=t.value,r.__proto__=l):r[e]=t.value),y="get"in t,s="set"in t,c&&(y||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,e,t.get),s&&a&&a.call(r,e,t.set),r};var l=e;function c(r,e,t){l(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var y=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function s(){return y.slice()}function h(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function p(r,e,t){l(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})}function m(r){return Object.keys(Object(r))}var g=void 0!==Object.keys;var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function w(){return b&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function E(r,e){return null!=r&&d.call(r,e)}var A="function"==typeof Symbol?Symbol.toStringTag:"";var _=w()?function(r){var e,t,n;if(null==r)return v.call(r);t=r[A],e=E(r,A);try{r[A]=void 0}catch(e){return v.call(r)}return n=v.call(r),e?r[A]=t:delete r[A],n}:function(r){return v.call(r)};function T(r){return"[object Arguments]"===_(r)}var j=function(){return T(arguments)}();function x(r){return"string"==typeof r}var S=String.prototype.valueOf;var B=w();function L(r){return"object"==typeof r&&(r instanceof String||(B?function(r){try{return S.call(r),!0}catch(r){return!1}}(r):"[object String]"===_(r)))}function O(r){return x(r)||L(r)}function k(r){return"number"==typeof r}c(O,"isPrimitive",x),c(O,"isObject",L);var V=Number,I=V.prototype.toString;var R=w();function C(r){return"object"==typeof r&&(r instanceof V||(R?function(r){try{return I.call(r),!0}catch(r){return!1}}(r):"[object Number]"===_(r)))}function M(r){return k(r)||C(r)}function P(r){return r!=r}function U(r){return k(r)&&P(r)}function F(r){return C(r)&&P(r.valueOf())}function N(r){return U(r)||F(r)}c(M,"isPrimitive",k),c(M,"isObject",C),c(N,"isPrimitive",U),c(N,"isObject",F);var Y=Number.POSITIVE_INFINITY,W=V.NEGATIVE_INFINITY,G=Math.floor;function X(r){return G(r)===r}function H(r){return r<Y&&r>W&&X(r)}function J(r){return k(r)&&H(r)}function D(r){return C(r)&&H(r.valueOf())}function q(r){return J(r)||D(r)}c(q,"isPrimitive",J),c(q,"isObject",D);var z=Object.prototype.propertyIsEnumerable;var K=!z.call("beep","0");function Q(r,e){var t;return null!=r&&(!(t=z.call(r,e))&&K&&O(r)?!U(e=+e)&&J(e)&&e>=0&&e<r.length:t)}var Z=Array.isArray?Array.isArray:function(r){return"[object Array]"===_(r)};var $=j?T:function(r){return null!==r&&"object"==typeof r&&!Z(r)&&"number"==typeof r.length&&X(r.length)&&r.length>=0&&r.length<=4294967295&&E(r,"callee")&&!Q(r,"callee")},rr=Array.prototype.slice;function er(r){return null!==r&&"object"==typeof r}c(er,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!Z(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(er));var tr=Q((function(){}),"prototype"),nr=!Q({toString:null},"toString");function ir(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&X(r.length)&&r.length>=0&&r.length<=9007199254740991}function or(r,e,t){var n,i;if(!ir(r)&&!x(r))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+r+"`.");if(0===(n=r.length))return-1;if(3===arguments.length){if(!J(t))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+t+"`.");if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(N(e)){for(;i<n;i++)if(N(r[i]))return i}else for(;i<n;i++)if(r[i]===e)return i;return-1}var ar=/./;function ur(r){return"boolean"==typeof r}var fr=Boolean.prototype.toString;var lr=w();function cr(r){return"object"==typeof r&&(r instanceof Boolean||(lr?function(r){try{return fr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===_(r)))}function yr(r){return ur(r)||cr(r)}function sr(){return new Function("return this;")()}c(yr,"isPrimitive",ur),c(yr,"isObject",cr);var hr="object"==typeof self?self:null,pr="object"==typeof window?window:null,mr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},gr="object"==typeof mr?mr:null;var br=function(r){if(arguments.length){if(!ur(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return sr()}if(hr)return hr;if(pr)return pr;if(gr)return gr;throw new Error("unexpected error. Unable to resolve global object.")}(),wr=br.document&&br.document.childNodes,vr=Int8Array;function dr(){return/^\s*function\s*([^(]*)/i}var Er=/^\s*function\s*([^(]*)/i;function Ar(r){return er(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}function _r(r){var e,t,n;if(("Object"===(t=_(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Er.exec(n.toString()))return e[1]}return Ar(r)?"Buffer":t}c(dr,"REGEXP",Er);var Tr="function"==typeof ar||"object"==typeof vr||"function"==typeof wr?function(r){return _r(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?_r(r).toLowerCase():e};function jr(r){return r.constructor&&r.constructor.prototype===r}var xr=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Sr="undefined"==typeof window?void 0:window;var Br=function(){var r;if("undefined"===Tr(Sr))return!1;for(r in Sr)try{-1===or(xr,r)&&E(Sr,r)&&null!==Sr[r]&&"object"===Tr(Sr[r])&&jr(Sr[r])}catch(r){return!0}return!1}(),Lr="undefined"!=typeof window;var Or=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var kr=g?function(){return 2!==(m(arguments)||"").length}(1,2)?function(r){return $(r)?m(rr.call(r)):m(r)}:m:function(r){var e,t,n,i,o,a,u;if(i=[],$(r)){for(u=0;u<r.length;u++)i.push(u.toString());return i}if("string"==typeof r){if(r.length>0&&!E(r,"0"))for(u=0;u<r.length;u++)i.push(u.toString())}else{if(!1==(n="function"==typeof r)&&!er(r))return i;t=tr&&n}for(o in r)t&&"prototype"===o||!E(r,o)||i.push(String(o));if(nr)for(e=function(r){if(!1===Lr&&!Br)return jr(r);try{return jr(r)}catch(r){return!1}}(r),u=0;u<Or.length;u++)a=Or[u],e&&"constructor"===a||!E(r,a)||i.push(String(a));return i};c(s,"enum",h),function(r,e){var t,n,i;for(t=kr(e),i=0;i<t.length;i++)p(r,n=t[i],e[n])}(s,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Vr={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};var Ir={Buffer:"binary",Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Object:"generic",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"},Rr="function"==typeof Float64Array;var Cr="function"==typeof Float64Array?Float64Array:null;var Mr,Pr="function"==typeof Float64Array?Float64Array:void 0;Mr=function(){var r,e,t;if("function"!=typeof Cr)return!1;try{e=new Cr([1,3.14,-3.14,NaN]),t=e,r=(Rr&&t instanceof Float64Array||"[object Float64Array]"===_(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?Pr:function(){throw new Error("not implemented")};var Ur=Mr,Fr="function"==typeof Float32Array;var Nr="function"==typeof Float32Array?Float32Array:null;var Yr,Wr="function"==typeof Float32Array?Float32Array:void 0;Yr=function(){var r,e,t;if("function"!=typeof Nr)return!1;try{e=new Nr([1,3.14,-3.14,5e40]),t=e,r=(Fr&&t instanceof Float32Array||"[object Float32Array]"===_(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===Y}catch(e){r=!1}return r}()?Wr:function(){throw new Error("not implemented")};var Gr=Yr,Xr="function"==typeof Uint32Array;var Hr="function"==typeof Uint32Array?Uint32Array:null;var Jr,Dr="function"==typeof Uint32Array?Uint32Array:void 0;Jr=function(){var r,e,t;if("function"!=typeof Hr)return!1;try{e=new Hr(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(Xr&&t instanceof Uint32Array||"[object Uint32Array]"===_(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Dr:function(){throw new Error("not implemented")};var qr=Jr,zr="function"==typeof Int32Array;var Kr="function"==typeof Int32Array?Int32Array:null;var Qr,Zr="function"==typeof Int32Array?Int32Array:void 0;Qr=function(){var r,e,t;if("function"!=typeof Kr)return!1;try{e=new Kr([1,3.14,-3.14,2147483648]),t=e,r=(zr&&t instanceof Int32Array||"[object Int32Array]"===_(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-2147483648===e[3]}catch(e){r=!1}return r}()?Zr:function(){throw new Error("not implemented")};var $r=Qr,re="function"==typeof Uint16Array;var ee="function"==typeof Uint16Array?Uint16Array:null;var te,ne="function"==typeof Uint16Array?Uint16Array:void 0;te=function(){var r,e,t;if("function"!=typeof ee)return!1;try{e=new ee(e=[1,3.14,-3.14,65536,65537]),t=e,r=(re&&t instanceof Uint16Array||"[object Uint16Array]"===_(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?ne:function(){throw new Error("not implemented")};var ie=te,oe="function"==typeof Int16Array;var ae="function"==typeof Int16Array?Int16Array:null;var ue,fe="function"==typeof Int16Array?Int16Array:void 0;ue=function(){var r,e,t;if("function"!=typeof ae)return!1;try{e=new ae([1,3.14,-3.14,32768]),t=e,r=(oe&&t instanceof Int16Array||"[object Int16Array]"===_(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-32768===e[3]}catch(e){r=!1}return r}()?fe:function(){throw new Error("not implemented")};var le=ue,ce="function"==typeof Uint8Array;var ye="function"==typeof Uint8Array?Uint8Array:null;var se,he="function"==typeof Uint8Array?Uint8Array:void 0;se=function(){var r,e,t;if("function"!=typeof ye)return!1;try{e=new ye(e=[1,3.14,-3.14,256,257]),t=e,r=(ce&&t instanceof Uint8Array||"[object Uint8Array]"===_(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?he:function(){throw new Error("not implemented")};var pe=se,me="function"==typeof Uint8ClampedArray;var ge="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var be,we="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;be=function(){var r,e,t;if("function"!=typeof ge)return!1;try{e=new ge([-1,0,1,3.14,4.99,255,256]),t=e,r=(me&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===_(t))&&0===e[0]&&0===e[1]&&1===e[2]&&3===e[3]&&5===e[4]&&255===e[5]&&255===e[6]}catch(e){r=!1}return r}()?we:function(){throw new Error("not implemented")};var ve=be,de="function"==typeof Int8Array;var Ee="function"==typeof Int8Array?Int8Array:null;var Ae,_e="function"==typeof Int8Array?Int8Array:void 0;Ae=function(){var r,e,t;if("function"!=typeof Ee)return!1;try{e=new Ee([1,3.14,-3.14,128]),t=e,r=(de&&t instanceof Int8Array||"[object Int8Array]"===_(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-128===e[3]}catch(e){r=!1}return r}()?_e:function(){throw new Error("not implemented")};var Te=Ae;function je(r){return J(r)&&r>=0}function xe(r){return D(r)&&r.valueOf()>=0}function Se(r){return je(r)||xe(r)}c(Se,"isPrimitive",je),c(Se,"isObject",xe);function Be(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&X(r.length)&&r.length>=0&&r.length<=4294967295}var Le="function"==typeof ArrayBuffer;function Oe(r){return Le&&r instanceof ArrayBuffer||"[object ArrayBuffer]"===_(r)}function ke(r){return"object"==typeof r&&null!==r&&!Z(r)}function Ve(r){return"function"===Tr(r)}function Ie(r,e){if(!(this instanceof Ie))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!k(r))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+r+"`.");if(!k(e))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+e+"`.");return l(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),l(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}c(Ie,"BYTES_PER_ELEMENT",8),c(Ie.prototype,"BYTES_PER_ELEMENT",8),c(Ie.prototype,"byteLength",16),c(Ie.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),c(Ie.prototype,"toJSON",(function(){var r={type:"Complex128"};return r.re=this.re,r.im=this.im,r}));var Re="function"==typeof Math.fround?Math.fround:null,Ce=new Gr(1);var Me="function"==typeof Re?Re:function(r){return Ce[0]=r,Ce[0]};function Pe(r,e){if(!(this instanceof Pe))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!k(r))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+r+"`.");if(!k(e))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+e+"`.");return l(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Me(r)}),l(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Me(e)}),this}function Ue(r){return r instanceof Ie||r instanceof Pe||"object"==typeof r&&null!==r&&"number"==typeof r.re&&"number"==typeof r.im}function Fe(r){return X(r/2)}function Ne(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&E(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}c(Pe,"BYTES_PER_ELEMENT",4),c(Pe.prototype,"BYTES_PER_ELEMENT",4),c(Pe.prototype,"byteLength",8),c(Pe.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),c(Pe.prototype,"toJSON",(function(){var r={type:"Complex64"};return r.re=this.re,r.im=this.im,r}));var Ye=Ne()?Symbol.iterator:null;function We(r,e,t){l(r,e,{configurable:!1,enumerable:!1,get:t})}function Ge(r){return r.re}function Xe(r){return r.im}function He(r,e){return new Gr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function Je(r,e){return new Ur(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function De(r,e){return r[e]}function qe(r,e){return r.get(e)}function ze(r,e,t){r[e]=t}function Ke(r,e,t){r.set(t,e)}function Qe(r){var e=Boolean(r.get&&r.set);return{data:r,accessors:e,getter:e?qe:De,setter:e?Ke:ze}}function Ze(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(Be(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!Ue(n))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+n+"`.");e.push(Ge(n),Xe(n))}return e}function $e(r,e,t){var n,i,o,a;for(n=[],a=-1;!(i=r.next()).done;)if(a+=1,Be(o=e.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Ue(o))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+o+"`.");n.push(Ge(o),Xe(o))}return n}function rt(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(!Ue(n=e[i]))return null;r[o]=Ge(n),r[o+1]=Xe(n),o+=2}return r}var et=2*Gr.BYTES_PER_ELEMENT,tt=Ne();function nt(r){return r instanceof ut||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function it(r){return r===ut||"Complex128Array"===r.name}function ot(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===et}function at(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===2*et}function ut(){var r,e,t,n;if(e=arguments.length,!(this instanceof ut))return 0===e?new ut:1===e?new ut(arguments[0]):2===e?new ut(arguments[0],arguments[1]):new ut(arguments[0],arguments[1],arguments[2]);if(0===e)t=new Gr(0);else if(1===e)if(je(arguments[0]))t=new Gr(2*arguments[0]);else if(ir(arguments[0]))if((n=(t=arguments[0]).length)&&Z(t)&&Ue(t[0])){if(null===(t=rt(new Gr(2*n),t))){if(!Fe(n))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new Gr(arguments[0])}}else{if(ot(t))t=He(t,0);else if(at(t))t=Je(t,0);else if(!Fe(n))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new Gr(t)}else if(Oe(arguments[0])){if(!X((t=arguments[0]).byteLength/et))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+et+". Byte length: `"+t.byteLength+"`.");t=new Gr(t)}else{if(!ke(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(t=arguments[0],!1===tt)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!Ve(t[Ye]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(!Ve((t=t[Ye]()).next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if((t=Ze(t))instanceof Error)throw t;t=new Gr(t)}else{if(!Oe(t=arguments[0]))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(!je(r=arguments[1]))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+r+"`.");if(!X(r/et))throw new RangeError("invalid argument. Byte offset must be a multiple of "+et+". Value: `"+r+"`.");if(2===e){if(!X((n=t.byteLength-r)/et))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+et+". View byte length: `"+n+"`.");t=new Gr(t,r)}else{if(!je(n=arguments[2]))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+n+"`.");if(n*et>t.byteLength-r)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+n*et+"`.");t=new Gr(t,r,2*n)}}return c(this,"_buffer",t),c(this,"_length",t.length/2),this}function ft(r){return r.re}function lt(r){return r.im}function ct(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(Be(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!Ue(n))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+n+"`.");e.push(ft(n),lt(n))}return e}function yt(r,e,t){var n,i,o,a;for(n=[],a=-1;!(i=r.next()).done;)if(a+=1,Be(o=e.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Ue(o))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+o+"`.");n.push(ft(o),lt(o))}return n}function st(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(!Ue(n=e[i]))return null;r[o]=ft(n),r[o+1]=lt(n),o+=2}return r}c(ut,"BYTES_PER_ELEMENT",et),c(ut,"name","Complex64Array"),c(ut,"from",(function(r){var e,t,n,i,o,a,u,f,l,c,y;if(!Ve(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!it(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Ve(n=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");t>2&&(e=arguments[2])}if(nt(r)){if(u=r.length,n){for(o=(i=new this(u))._buffer,y=0,c=0;c<u;c++){if(Ue(l=n.call(e,r.get(c),c)))o[y]=Ge(l),o[y+1]=Xe(l);else{if(!(Be(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");o[y]=l[0],o[y+1]=l[1]}y+=2}return i}return new this(r)}if(ir(r)){if(n){for(u=r.length,a=Qe(r),c=0;c<u;c++)if(!Ue(a.getter(r,c))){f=!0;break}if(f){if(!Fe(u))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+u+"`.");for(o=(i=new this(u/2))._buffer,c=0;c<u;c++)o[c]=n.call(e,a.getter(r,c),c);return i}for(o=(i=new this(u))._buffer,y=0,c=0;c<u;c++){if(Ue(l=n.call(e,a.getter(r,c),c)))o[y]=Ge(l),o[y+1]=Xe(l);else{if(!(Be(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");o[y]=l[0],o[y+1]=l[1]}y+=2}return i}return new this(r)}if(ke(r)&&tt&&Ve(r[Ye])){if(!Ve((o=r[Ye]()).next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if((a=n?$e(o,n,e):Ze(o))instanceof Error)throw a;for(o=(i=new this(u=a.length/2))._buffer,c=0;c<u;c++)o[c]=a[c];return i}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+r+"`.")})),c(ut,"of",(function(){var r,e;if(!Ve(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!it(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),We(ut.prototype,"buffer",(function(){return this._buffer.buffer})),We(ut.prototype,"byteLength",(function(){return this._buffer.byteLength})),We(ut.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),c(ut.prototype,"BYTES_PER_ELEMENT",ut.BYTES_PER_ELEMENT),c(ut.prototype,"copyWithin",(function(r,e){if(!nt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),c(ut.prototype,"entries",(function(){var r,e,t,n,i,o,a;if(!nt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,a=-2,c(t={},"next",(function(){var e;if(o+=1,i||o>=n)return{done:!0};return e=new Pe(r[a+=2],r[a+1]),{value:[o,e],done:!1}})),c(t,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),Ye&&c(t,Ye,(function(){return e.entries()})),t})),c(ut.prototype,"get",(function(r){var e;if(!nt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!je(r))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+r+"`.");if(!(r>=this._length))return new Pe((e=this._buffer)[r*=2],e[r+1])})),We(ut.prototype,"length",(function(){return this._length})),c(ut.prototype,"set",(function(r){var e,t,n,i,o,a,u,f,l;if(!nt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!je(t=arguments[1]))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+t+"`.")}else t=0;if(Ue(r)){if(t>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+t+"`.");return n[t*=2]=Ge(r),void(n[t+1]=Xe(r))}if(nt(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*et,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new Gr(e.length),f=0;f<e.length;f++)i[f]=e[f];e=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!ir(r))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+r+"`.");for(a=r.length,f=0;f<a;f++)if(!Ue(r[f])){o=!0;break}if(o){if(!Fe(a))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+a+"`.");if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*et,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new Gr(a),f=0;f<a;f++)i[f]=e[f];e=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=Ge(u),n[t+1]=Xe(u),t+=2}}));var ht=2*Ur.BYTES_PER_ELEMENT,pt=Ne();function mt(r){return r instanceof vt||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function gt(r){return r===vt||"Complex64Array"===r.name}function bt(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===ht/2}function wt(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===ht}function vt(){var r,e,t,n;if(e=arguments.length,!(this instanceof vt))return 0===e?new vt:1===e?new vt(arguments[0]):2===e?new vt(arguments[0],arguments[1]):new vt(arguments[0],arguments[1],arguments[2]);if(0===e)t=new Ur(0);else if(1===e)if(je(arguments[0]))t=new Ur(2*arguments[0]);else if(ir(arguments[0]))if((n=(t=arguments[0]).length)&&Z(t)&&Ue(t[0])){if(null===(t=st(new Ur(2*n),t))){if(!Fe(n))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new Ur(arguments[0])}}else{if(bt(t))t=He(t,0);else if(wt(t))t=Je(t,0);else if(!Fe(n))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new Ur(t)}else if(Oe(arguments[0])){if(!X((t=arguments[0]).byteLength/ht))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+ht+". Byte length: `"+t.byteLength+"`.");t=new Ur(t)}else{if(!ke(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(t=arguments[0],!1===pt)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!Ve(t[Ye]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(!Ve((t=t[Ye]()).next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if((t=ct(t))instanceof Error)throw t;t=new Ur(t)}else{if(!Oe(t=arguments[0]))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(!je(r=arguments[1]))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+r+"`.");if(!X(r/ht))throw new RangeError("invalid argument. Byte offset must be a multiple of "+ht+". Value: `"+r+"`.");if(2===e){if(!X((n=t.byteLength-r)/ht))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+ht+". View byte length: `"+n+"`.");t=new Ur(t,r)}else{if(!je(n=arguments[2]))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+n+"`.");if(n*ht>t.byteLength-r)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+n*ht+"`.");t=new Ur(t,r,2*n)}}return c(this,"_buffer",t),c(this,"_length",t.length/2),this}c(vt,"BYTES_PER_ELEMENT",ht),c(vt,"name","Complex128Array"),c(vt,"from",(function(r){var e,t,n,i,o,a,u,f,l,c,y;if(!Ve(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!gt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Ve(n=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");t>2&&(e=arguments[2])}if(mt(r)){if(u=r.length,n){for(o=(i=new this(u))._buffer,y=0,c=0;c<u;c++){if(Ue(l=n.call(e,r.get(c),c)))o[y]=ft(l),o[y+1]=lt(l);else{if(!(Be(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");o[y]=l[0],o[y+1]=l[1]}y+=2}return i}return new this(r)}if(ir(r)){if(n){for(u=r.length,a=Qe(r),c=0;c<u;c++)if(!Ue(a.getter(r,c))){f=!0;break}if(f){if(!Fe(u))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+u+"`.");for(o=(i=new this(u/2))._buffer,c=0;c<u;c++)o[c]=n.call(e,a.getter(r,c),c);return i}for(o=(i=new this(u))._buffer,y=0,c=0;c<u;c++){if(Ue(l=n.call(e,a.getter(r,c),c)))o[y]=ft(l),o[y+1]=lt(l);else{if(!(Be(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");o[y]=l[0],o[y+1]=l[1]}y+=2}return i}return new this(r)}if(ke(r)&&pt&&Ve(r[Ye])){if(!Ve((o=r[Ye]()).next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if((a=n?yt(o,n,e):ct(o))instanceof Error)throw a;for(o=(i=new this(u=a.length/2))._buffer,c=0;c<u;c++)o[c]=a[c];return i}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+r+"`.")})),c(vt,"of",(function(){var r,e;if(!Ve(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!gt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),We(vt.prototype,"buffer",(function(){return this._buffer.buffer})),We(vt.prototype,"byteLength",(function(){return this._buffer.byteLength})),We(vt.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),c(vt.prototype,"BYTES_PER_ELEMENT",vt.BYTES_PER_ELEMENT),c(vt.prototype,"copyWithin",(function(r,e){if(!mt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),c(vt.prototype,"entries",(function(){var r,e,t,n,i,o,a;if(!mt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,a=-2,c(t={},"next",(function(){var e;if(o+=1,i||o>=n)return{done:!0};return e=new Ie(r[a+=2],r[a+1]),{value:[o,e],done:!1}})),c(t,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),Ye&&c(t,Ye,(function(){return e.entries()})),t})),c(vt.prototype,"get",(function(r){var e;if(!mt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!je(r))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+r+"`.");if(!(r>=this._length))return new Ie((e=this._buffer)[r*=2],e[r+1])})),We(vt.prototype,"length",(function(){return this._length})),c(vt.prototype,"set",(function(r){var e,t,n,i,o,a,u,f,l;if(!mt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!je(t=arguments[1]))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+t+"`.")}else t=0;if(Ue(r)){if(t>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+t+"`.");return n[t*=2]=ft(r),void(n[t+1]=lt(r))}if(mt(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*ht,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new Ur(e.length),f=0;f<e.length;f++)i[f]=e[f];e=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!ir(r))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+r+"`.");for(a=r.length,f=0;f<a;f++)if(!Ue(r[f])){o=!0;break}if(o){if(!Fe(a))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+a+"`.");if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*ht,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new Ur(a),f=0;f<a;f++)i[f]=e[f];e=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=ft(u),n[t+1]=lt(u),t+=2}}));var dt=[Ur,Gr,$r,qr,le,ie,Te,pe,ve,ut,vt],Et=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"],At=Et.length;function _t(r){var e=function(r){var e;if(Z(r))return"generic";if(Ar(r))return"binary";for(e=0;e<At;e++)if(r instanceof dt[e])return Et[e];return Ir[_r(r)]||null}(r);return e?function(r){var e=Vr[r];return"number"==typeof e?e:null}(e):null}export{_t as default};
//# sourceMappingURL=mod.js.map
