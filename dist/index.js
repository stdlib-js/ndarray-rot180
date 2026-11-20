"use strict";var n=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var s=n(function(q,t){
var u=require('@stdlib/assert-is-integer-array/dist').primitives,m=require('@stdlib/assert-is-plain-object/dist'),v=require('@stdlib/assert-is-ndarray-like/dist'),d=require('@stdlib/assert-has-own-property/dist'),o=require('@stdlib/ndarray-base-rot180/dist'),a=require('@stdlib/error-tools-fmtprodmsg/dist');function f(e,r){var i;if(!v(e))throw new TypeError(a('2nl4f',e));if(i=[-2,-1],arguments.length>1){if(!m(r))throw new TypeError(a('2nl2V',r));if(d(r,"dims")){if(!u(r.dims))throw new TypeError(a('2nlHk',"dims",r.dims));i=r.dims}}return o(e,i,!1)}t.exports=f
});var g=s();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
