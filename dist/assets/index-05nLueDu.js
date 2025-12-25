(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();function lc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var $s={exports:{}},br={},Vs={exports:{}},N={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gn=Symbol.for("react.element"),oc=Symbol.for("react.portal"),ic=Symbol.for("react.fragment"),sc=Symbol.for("react.strict_mode"),ac=Symbol.for("react.profiler"),uc=Symbol.for("react.provider"),cc=Symbol.for("react.context"),dc=Symbol.for("react.forward_ref"),fc=Symbol.for("react.suspense"),hc=Symbol.for("react.memo"),pc=Symbol.for("react.lazy"),Oi=Symbol.iterator;function mc(e){return e===null||typeof e!="object"?null:(e=Oi&&e[Oi]||e["@@iterator"],typeof e=="function"?e:null)}var Ys={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qs=Object.assign,Gs={};function rn(e,t,n){this.props=e,this.context=t,this.refs=Gs,this.updater=n||Ys}rn.prototype.isReactComponent={};rn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};rn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ks(){}Ks.prototype=rn.prototype;function Ho(e,t,n){this.props=e,this.context=t,this.refs=Gs,this.updater=n||Ys}var Fo=Ho.prototype=new Ks;Fo.constructor=Ho;Qs(Fo,rn.prototype);Fo.isPureReactComponent=!0;var Ri=Array.isArray,Xs=Object.prototype.hasOwnProperty,Bo={current:null},Js={key:!0,ref:!0,__self:!0,__source:!0};function Zs(e,t,n){var r,l={},o=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)Xs.call(t,r)&&!Js.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var a=Array(s),c=0;c<s;c++)a[c]=arguments[c+2];l.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:Gn,type:e,key:o,ref:i,props:l,_owner:Bo.current}}function yc(e,t){return{$$typeof:Gn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Wo(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gn}function gc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ji=/\/+/g;function wl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?gc(""+e.key):t.toString(36)}function gr(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Gn:case oc:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+wl(i,0):r,Ri(l)?(n="",e!=null&&(n=e.replace(ji,"$&/")+"/"),gr(l,t,n,"",function(c){return c})):l!=null&&(Wo(l)&&(l=yc(l,n+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(ji,"$&/")+"/")+e)),t.push(l)),1;if(i=0,r=r===""?".":r+":",Ri(e))for(var s=0;s<e.length;s++){o=e[s];var a=r+wl(o,s);i+=gr(o,t,n,a,l)}else if(a=mc(e),typeof a=="function")for(e=a.call(e),s=0;!(o=e.next()).done;)o=o.value,a=r+wl(o,s++),i+=gr(o,t,n,a,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function er(e,t,n){if(e==null)return e;var r=[],l=0;return gr(e,r,"","",function(o){return t.call(n,o,l++)}),r}function vc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var se={current:null},vr={transition:null},wc={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:vr,ReactCurrentOwner:Bo};function qs(){throw Error("act(...) is not supported in production builds of React.")}N.Children={map:er,forEach:function(e,t,n){er(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return er(e,function(){t++}),t},toArray:function(e){return er(e,function(t){return t})||[]},only:function(e){if(!Wo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};N.Component=rn;N.Fragment=ic;N.Profiler=ac;N.PureComponent=Ho;N.StrictMode=sc;N.Suspense=fc;N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wc;N.act=qs;N.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Qs({},e.props),l=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=Bo.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)Xs.call(t,a)&&!Js.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var c=0;c<a;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:Gn,type:e.type,key:l,ref:o,props:r,_owner:i}};N.createContext=function(e){return e={$$typeof:cc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:uc,_context:e},e.Consumer=e};N.createElement=Zs;N.createFactory=function(e){var t=Zs.bind(null,e);return t.type=e,t};N.createRef=function(){return{current:null}};N.forwardRef=function(e){return{$$typeof:dc,render:e}};N.isValidElement=Wo;N.lazy=function(e){return{$$typeof:pc,_payload:{_status:-1,_result:e},_init:vc}};N.memo=function(e,t){return{$$typeof:hc,type:e,compare:t===void 0?null:t}};N.startTransition=function(e){var t=vr.transition;vr.transition={};try{e()}finally{vr.transition=t}};N.unstable_act=qs;N.useCallback=function(e,t){return se.current.useCallback(e,t)};N.useContext=function(e){return se.current.useContext(e)};N.useDebugValue=function(){};N.useDeferredValue=function(e){return se.current.useDeferredValue(e)};N.useEffect=function(e,t){return se.current.useEffect(e,t)};N.useId=function(){return se.current.useId()};N.useImperativeHandle=function(e,t,n){return se.current.useImperativeHandle(e,t,n)};N.useInsertionEffect=function(e,t){return se.current.useInsertionEffect(e,t)};N.useLayoutEffect=function(e,t){return se.current.useLayoutEffect(e,t)};N.useMemo=function(e,t){return se.current.useMemo(e,t)};N.useReducer=function(e,t,n){return se.current.useReducer(e,t,n)};N.useRef=function(e){return se.current.useRef(e)};N.useState=function(e){return se.current.useState(e)};N.useSyncExternalStore=function(e,t,n){return se.current.useSyncExternalStore(e,t,n)};N.useTransition=function(){return se.current.useTransition()};N.version="18.3.1";Vs.exports=N;var el=Vs.exports;const bs=lc(el);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kc=el,Sc=Symbol.for("react.element"),Tc=Symbol.for("react.fragment"),xc=Object.prototype.hasOwnProperty,Ic=kc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ec={key:!0,ref:!0,__self:!0,__source:!0};function ea(e,t,n){var r,l={},o=null,i=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)xc.call(t,r)&&!Ec.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Sc,type:e,key:o,ref:i,props:l,_owner:Ic.current}}br.Fragment=Tc;br.jsx=ea;br.jsxs=ea;$s.exports=br;var A=$s.exports,ta={exports:{}},ve={},na={exports:{}},ra={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(x,_){var P=x.length;x.push(_);e:for(;0<P;){var V=P-1>>>1,X=x[V];if(0<l(X,_))x[V]=_,x[P]=X,P=V;else break e}}function n(x){return x.length===0?null:x[0]}function r(x){if(x.length===0)return null;var _=x[0],P=x.pop();if(P!==_){x[0]=P;e:for(var V=0,X=x.length,qn=X>>>1;V<qn;){var mt=2*(V+1)-1,vl=x[mt],yt=mt+1,bn=x[yt];if(0>l(vl,P))yt<X&&0>l(bn,vl)?(x[V]=bn,x[yt]=P,V=yt):(x[V]=vl,x[mt]=P,V=mt);else if(yt<X&&0>l(bn,P))x[V]=bn,x[yt]=P,V=yt;else break e}}return _}function l(x,_){var P=x.sortIndex-_.sortIndex;return P!==0?P:x.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var a=[],c=[],m=1,p=null,h=3,w=!1,v=!1,k=!1,R=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(x){for(var _=n(c);_!==null;){if(_.callback===null)r(c);else if(_.startTime<=x)r(c),_.sortIndex=_.expirationTime,t(a,_);else break;_=n(c)}}function y(x){if(k=!1,f(x),!v)if(n(a)!==null)v=!0,yl(T);else{var _=n(c);_!==null&&gl(y,_.startTime-x)}}function T(x,_){v=!1,k&&(k=!1,d(C),C=-1),w=!0;var P=h;try{for(f(_),p=n(a);p!==null&&(!(p.expirationTime>_)||x&&!Ae());){var V=p.callback;if(typeof V=="function"){p.callback=null,h=p.priorityLevel;var X=V(p.expirationTime<=_);_=e.unstable_now(),typeof X=="function"?p.callback=X:p===n(a)&&r(a),f(_)}else r(a);p=n(a)}if(p!==null)var qn=!0;else{var mt=n(c);mt!==null&&gl(y,mt.startTime-_),qn=!1}return qn}finally{p=null,h=P,w=!1}}var I=!1,E=null,C=-1,$=5,z=-1;function Ae(){return!(e.unstable_now()-z<$)}function sn(){if(E!==null){var x=e.unstable_now();z=x;var _=!0;try{_=E(!0,x)}finally{_?an():(I=!1,E=null)}}else I=!1}var an;if(typeof u=="function")an=function(){u(sn)};else if(typeof MessageChannel<"u"){var Li=new MessageChannel,rc=Li.port2;Li.port1.onmessage=sn,an=function(){rc.postMessage(null)}}else an=function(){R(sn,0)};function yl(x){E=x,I||(I=!0,an())}function gl(x,_){C=R(function(){x(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(x){x.callback=null},e.unstable_continueExecution=function(){v||w||(v=!0,yl(T))},e.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<x?Math.floor(1e3/x):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(x){switch(h){case 1:case 2:case 3:var _=3;break;default:_=h}var P=h;h=_;try{return x()}finally{h=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(x,_){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var P=h;h=x;try{return _()}finally{h=P}},e.unstable_scheduleCallback=function(x,_,P){var V=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?V+P:V):P=V,x){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=P+X,x={id:m++,callback:_,priorityLevel:x,startTime:P,expirationTime:X,sortIndex:-1},P>V?(x.sortIndex=P,t(c,x),n(a)===null&&x===n(c)&&(k?(d(C),C=-1):k=!0,gl(y,P-V))):(x.sortIndex=X,t(a,x),v||w||(v=!0,yl(T))),x},e.unstable_shouldYield=Ae,e.unstable_wrapCallback=function(x){var _=h;return function(){var P=h;h=_;try{return x.apply(this,arguments)}finally{h=P}}}})(ra);na.exports=ra;var Ac=na.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cc=el,ge=Ac;function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var la=new Set,Nn={};function Pt(e,t){Jt(e,t),Jt(e+"Capture",t)}function Jt(e,t){for(Nn[e]=t,e=0;e<t.length;e++)la.add(t[e])}var Ve=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yl=Object.prototype.hasOwnProperty,_c=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Mi={},Di={};function Pc(e){return Yl.call(Di,e)?!0:Yl.call(Mi,e)?!1:_c.test(e)?Di[e]=!0:(Mi[e]=!0,!1)}function Nc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function zc(e,t,n,r){if(t===null||typeof t>"u"||Nc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ae(e,t,n,r,l,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ee[e]=new ae(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ee[t]=new ae(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ee[e]=new ae(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ee[e]=new ae(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ee[e]=new ae(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ee[e]=new ae(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ee[e]=new ae(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ee[e]=new ae(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ee[e]=new ae(e,5,!1,e.toLowerCase(),null,!1,!1)});var Uo=/[\-:]([a-z])/g;function $o(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Uo,$o);ee[t]=new ae(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Uo,$o);ee[t]=new ae(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Uo,$o);ee[t]=new ae(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ee[e]=new ae(e,1,!1,e.toLowerCase(),null,!1,!1)});ee.xlinkHref=new ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ee[e]=new ae(e,1,!1,e.toLowerCase(),null,!0,!0)});function Vo(e,t,n,r){var l=ee.hasOwnProperty(t)?ee[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(zc(t,n,l,r)&&(n=null),r||l===null?Pc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ke=Cc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,tr=Symbol.for("react.element"),Lt=Symbol.for("react.portal"),Ot=Symbol.for("react.fragment"),Yo=Symbol.for("react.strict_mode"),Ql=Symbol.for("react.profiler"),oa=Symbol.for("react.provider"),ia=Symbol.for("react.context"),Qo=Symbol.for("react.forward_ref"),Gl=Symbol.for("react.suspense"),Kl=Symbol.for("react.suspense_list"),Go=Symbol.for("react.memo"),Je=Symbol.for("react.lazy"),sa=Symbol.for("react.offscreen"),Hi=Symbol.iterator;function un(e){return e===null||typeof e!="object"?null:(e=Hi&&e[Hi]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,kl;function gn(e){if(kl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);kl=t&&t[1]||""}return`
`+kl+e}var Sl=!1;function Tl(e,t){if(!e||Sl)return"";Sl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,s=o.length-1;1<=i&&0<=s&&l[i]!==o[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==o[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==o[s]){var a=`
`+l[i].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=i&&0<=s);break}}}finally{Sl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?gn(e):""}function Lc(e){switch(e.tag){case 5:return gn(e.type);case 16:return gn("Lazy");case 13:return gn("Suspense");case 19:return gn("SuspenseList");case 0:case 2:case 15:return e=Tl(e.type,!1),e;case 11:return e=Tl(e.type.render,!1),e;case 1:return e=Tl(e.type,!0),e;default:return""}}function Xl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ot:return"Fragment";case Lt:return"Portal";case Ql:return"Profiler";case Yo:return"StrictMode";case Gl:return"Suspense";case Kl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ia:return(e.displayName||"Context")+".Consumer";case oa:return(e._context.displayName||"Context")+".Provider";case Qo:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Go:return t=e.displayName||null,t!==null?t:Xl(e.type)||"Memo";case Je:t=e._payload,e=e._init;try{return Xl(e(t))}catch{}}return null}function Oc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xl(t);case 8:return t===Yo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ct(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function aa(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Rc(e){var t=aa(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function nr(e){e._valueTracker||(e._valueTracker=Rc(e))}function ua(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=aa(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Pr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Jl(e,t){var n=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Fi(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ct(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ca(e,t){t=t.checked,t!=null&&Vo(e,"checked",t,!1)}function Zl(e,t){ca(e,t);var n=ct(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ql(e,t.type,n):t.hasOwnProperty("defaultValue")&&ql(e,t.type,ct(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Bi(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ql(e,t,n){(t!=="number"||Pr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var vn=Array.isArray;function Vt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ct(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function bl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(g(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Wi(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(g(92));if(vn(n)){if(1<n.length)throw Error(g(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ct(n)}}function da(e,t){var n=ct(t.value),r=ct(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ui(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function fa(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function eo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?fa(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var rr,ha=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(rr=rr||document.createElement("div"),rr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=rr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function zn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Sn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jc=["Webkit","ms","Moz","O"];Object.keys(Sn).forEach(function(e){jc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Sn[t]=Sn[e]})});function pa(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Sn.hasOwnProperty(e)&&Sn[e]?(""+t).trim():t+"px"}function ma(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=pa(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Mc=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function to(e,t){if(t){if(Mc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(g(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(g(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(g(61))}if(t.style!=null&&typeof t.style!="object")throw Error(g(62))}}function no(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ro=null;function Ko(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var lo=null,Yt=null,Qt=null;function $i(e){if(e=Jn(e)){if(typeof lo!="function")throw Error(g(280));var t=e.stateNode;t&&(t=ol(t),lo(e.stateNode,e.type,t))}}function ya(e){Yt?Qt?Qt.push(e):Qt=[e]:Yt=e}function ga(){if(Yt){var e=Yt,t=Qt;if(Qt=Yt=null,$i(e),t)for(e=0;e<t.length;e++)$i(t[e])}}function va(e,t){return e(t)}function wa(){}var xl=!1;function ka(e,t,n){if(xl)return e(t,n);xl=!0;try{return va(e,t,n)}finally{xl=!1,(Yt!==null||Qt!==null)&&(wa(),ga())}}function Ln(e,t){var n=e.stateNode;if(n===null)return null;var r=ol(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(g(231,t,typeof n));return n}var oo=!1;if(Ve)try{var cn={};Object.defineProperty(cn,"passive",{get:function(){oo=!0}}),window.addEventListener("test",cn,cn),window.removeEventListener("test",cn,cn)}catch{oo=!1}function Dc(e,t,n,r,l,o,i,s,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(m){this.onError(m)}}var Tn=!1,Nr=null,zr=!1,io=null,Hc={onError:function(e){Tn=!0,Nr=e}};function Fc(e,t,n,r,l,o,i,s,a){Tn=!1,Nr=null,Dc.apply(Hc,arguments)}function Bc(e,t,n,r,l,o,i,s,a){if(Fc.apply(this,arguments),Tn){if(Tn){var c=Nr;Tn=!1,Nr=null}else throw Error(g(198));zr||(zr=!0,io=c)}}function Nt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Sa(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Vi(e){if(Nt(e)!==e)throw Error(g(188))}function Wc(e){var t=e.alternate;if(!t){if(t=Nt(e),t===null)throw Error(g(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return Vi(l),e;if(o===r)return Vi(l),t;o=o.sibling}throw Error(g(188))}if(n.return!==r.return)n=l,r=o;else{for(var i=!1,s=l.child;s;){if(s===n){i=!0,n=l,r=o;break}if(s===r){i=!0,r=l,n=o;break}s=s.sibling}if(!i){for(s=o.child;s;){if(s===n){i=!0,n=o,r=l;break}if(s===r){i=!0,r=o,n=l;break}s=s.sibling}if(!i)throw Error(g(189))}}if(n.alternate!==r)throw Error(g(190))}if(n.tag!==3)throw Error(g(188));return n.stateNode.current===n?e:t}function Ta(e){return e=Wc(e),e!==null?xa(e):null}function xa(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=xa(e);if(t!==null)return t;e=e.sibling}return null}var Ia=ge.unstable_scheduleCallback,Yi=ge.unstable_cancelCallback,Uc=ge.unstable_shouldYield,$c=ge.unstable_requestPaint,Y=ge.unstable_now,Vc=ge.unstable_getCurrentPriorityLevel,Xo=ge.unstable_ImmediatePriority,Ea=ge.unstable_UserBlockingPriority,Lr=ge.unstable_NormalPriority,Yc=ge.unstable_LowPriority,Aa=ge.unstable_IdlePriority,tl=null,De=null;function Qc(e){if(De&&typeof De.onCommitFiberRoot=="function")try{De.onCommitFiberRoot(tl,e,void 0,(e.current.flags&128)===128)}catch{}}var ze=Math.clz32?Math.clz32:Xc,Gc=Math.log,Kc=Math.LN2;function Xc(e){return e>>>=0,e===0?32:31-(Gc(e)/Kc|0)|0}var lr=64,or=4194304;function wn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Or(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~l;s!==0?r=wn(s):(o&=i,o!==0&&(r=wn(o)))}else i=n&~l,i!==0?r=wn(i):o!==0&&(r=wn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ze(t),l=1<<n,r|=e[n],t&=~l;return r}function Jc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-ze(o),s=1<<i,a=l[i];a===-1?(!(s&n)||s&r)&&(l[i]=Jc(s,t)):a<=t&&(e.expiredLanes|=s),o&=~s}}function so(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ca(){var e=lr;return lr<<=1,!(lr&4194240)&&(lr=64),e}function Il(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Kn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ze(t),e[t]=n}function qc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-ze(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function Jo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ze(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var O=0;function _a(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Pa,Zo,Na,za,La,ao=!1,ir=[],nt=null,rt=null,lt=null,On=new Map,Rn=new Map,qe=[],bc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qi(e,t){switch(e){case"focusin":case"focusout":nt=null;break;case"dragenter":case"dragleave":rt=null;break;case"mouseover":case"mouseout":lt=null;break;case"pointerover":case"pointerout":On.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rn.delete(t.pointerId)}}function dn(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=Jn(t),t!==null&&Zo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function ed(e,t,n,r,l){switch(t){case"focusin":return nt=dn(nt,e,t,n,r,l),!0;case"dragenter":return rt=dn(rt,e,t,n,r,l),!0;case"mouseover":return lt=dn(lt,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return On.set(o,dn(On.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,Rn.set(o,dn(Rn.get(o)||null,e,t,n,r,l)),!0}return!1}function Oa(e){var t=wt(e.target);if(t!==null){var n=Nt(t);if(n!==null){if(t=n.tag,t===13){if(t=Sa(n),t!==null){e.blockedOn=t,La(e.priority,function(){Na(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=uo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ro=r,n.target.dispatchEvent(r),ro=null}else return t=Jn(n),t!==null&&Zo(t),e.blockedOn=n,!1;t.shift()}return!0}function Gi(e,t,n){wr(e)&&n.delete(t)}function td(){ao=!1,nt!==null&&wr(nt)&&(nt=null),rt!==null&&wr(rt)&&(rt=null),lt!==null&&wr(lt)&&(lt=null),On.forEach(Gi),Rn.forEach(Gi)}function fn(e,t){e.blockedOn===t&&(e.blockedOn=null,ao||(ao=!0,ge.unstable_scheduleCallback(ge.unstable_NormalPriority,td)))}function jn(e){function t(l){return fn(l,e)}if(0<ir.length){fn(ir[0],e);for(var n=1;n<ir.length;n++){var r=ir[n];r.blockedOn===e&&(r.blockedOn=null)}}for(nt!==null&&fn(nt,e),rt!==null&&fn(rt,e),lt!==null&&fn(lt,e),On.forEach(t),Rn.forEach(t),n=0;n<qe.length;n++)r=qe[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<qe.length&&(n=qe[0],n.blockedOn===null);)Oa(n),n.blockedOn===null&&qe.shift()}var Gt=Ke.ReactCurrentBatchConfig,Rr=!0;function nd(e,t,n,r){var l=O,o=Gt.transition;Gt.transition=null;try{O=1,qo(e,t,n,r)}finally{O=l,Gt.transition=o}}function rd(e,t,n,r){var l=O,o=Gt.transition;Gt.transition=null;try{O=4,qo(e,t,n,r)}finally{O=l,Gt.transition=o}}function qo(e,t,n,r){if(Rr){var l=uo(e,t,n,r);if(l===null)Rl(e,t,r,jr,n),Qi(e,r);else if(ed(l,e,t,n,r))r.stopPropagation();else if(Qi(e,r),t&4&&-1<bc.indexOf(e)){for(;l!==null;){var o=Jn(l);if(o!==null&&Pa(o),o=uo(e,t,n,r),o===null&&Rl(e,t,r,jr,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else Rl(e,t,r,null,n)}}var jr=null;function uo(e,t,n,r){if(jr=null,e=Ko(r),e=wt(e),e!==null)if(t=Nt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Sa(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return jr=e,null}function Ra(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vc()){case Xo:return 1;case Ea:return 4;case Lr:case Yc:return 16;case Aa:return 536870912;default:return 16}default:return 16}}var et=null,bo=null,kr=null;function ja(){if(kr)return kr;var e,t=bo,n=t.length,r,l="value"in et?et.value:et.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===l[o-r];r++);return kr=l.slice(e,1<r?1-r:void 0)}function Sr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function sr(){return!0}function Ki(){return!1}function we(e){function t(n,r,l,o,i){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?sr:Ki,this.isPropagationStopped=Ki,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=sr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=sr)},persist:function(){},isPersistent:sr}),t}var ln={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ei=we(ln),Xn=W({},ln,{view:0,detail:0}),ld=we(Xn),El,Al,hn,nl=W({},Xn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ti,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hn&&(hn&&e.type==="mousemove"?(El=e.screenX-hn.screenX,Al=e.screenY-hn.screenY):Al=El=0,hn=e),El)},movementY:function(e){return"movementY"in e?e.movementY:Al}}),Xi=we(nl),od=W({},nl,{dataTransfer:0}),id=we(od),sd=W({},Xn,{relatedTarget:0}),Cl=we(sd),ad=W({},ln,{animationName:0,elapsedTime:0,pseudoElement:0}),ud=we(ad),cd=W({},ln,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),dd=we(cd),fd=W({},ln,{data:0}),Ji=we(fd),hd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},md={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=md[e])?!!t[e]:!1}function ti(){return yd}var gd=W({},Xn,{key:function(e){if(e.key){var t=hd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Sr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ti,charCode:function(e){return e.type==="keypress"?Sr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Sr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vd=we(gd),wd=W({},nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zi=we(wd),kd=W({},Xn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ti}),Sd=we(kd),Td=W({},ln,{propertyName:0,elapsedTime:0,pseudoElement:0}),xd=we(Td),Id=W({},nl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ed=we(Id),Ad=[9,13,27,32],ni=Ve&&"CompositionEvent"in window,xn=null;Ve&&"documentMode"in document&&(xn=document.documentMode);var Cd=Ve&&"TextEvent"in window&&!xn,Ma=Ve&&(!ni||xn&&8<xn&&11>=xn),qi=" ",bi=!1;function Da(e,t){switch(e){case"keyup":return Ad.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ha(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Rt=!1;function _d(e,t){switch(e){case"compositionend":return Ha(t);case"keypress":return t.which!==32?null:(bi=!0,qi);case"textInput":return e=t.data,e===qi&&bi?null:e;default:return null}}function Pd(e,t){if(Rt)return e==="compositionend"||!ni&&Da(e,t)?(e=ja(),kr=bo=et=null,Rt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ma&&t.locale!=="ko"?null:t.data;default:return null}}var Nd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function es(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Nd[e.type]:t==="textarea"}function Fa(e,t,n,r){ya(r),t=Mr(t,"onChange"),0<t.length&&(n=new ei("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var In=null,Mn=null;function zd(e){Ja(e,0)}function rl(e){var t=Dt(e);if(ua(t))return e}function Ld(e,t){if(e==="change")return t}var Ba=!1;if(Ve){var _l;if(Ve){var Pl="oninput"in document;if(!Pl){var ts=document.createElement("div");ts.setAttribute("oninput","return;"),Pl=typeof ts.oninput=="function"}_l=Pl}else _l=!1;Ba=_l&&(!document.documentMode||9<document.documentMode)}function ns(){In&&(In.detachEvent("onpropertychange",Wa),Mn=In=null)}function Wa(e){if(e.propertyName==="value"&&rl(Mn)){var t=[];Fa(t,Mn,e,Ko(e)),ka(zd,t)}}function Od(e,t,n){e==="focusin"?(ns(),In=t,Mn=n,In.attachEvent("onpropertychange",Wa)):e==="focusout"&&ns()}function Rd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return rl(Mn)}function jd(e,t){if(e==="click")return rl(t)}function Md(e,t){if(e==="input"||e==="change")return rl(t)}function Dd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Oe=typeof Object.is=="function"?Object.is:Dd;function Dn(e,t){if(Oe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Yl.call(t,l)||!Oe(e[l],t[l]))return!1}return!0}function rs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ls(e,t){var n=rs(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=rs(n)}}function Ua(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ua(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function $a(){for(var e=window,t=Pr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Pr(e.document)}return t}function ri(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Hd(e){var t=$a(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ua(n.ownerDocument.documentElement,n)){if(r!==null&&ri(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=ls(n,o);var i=ls(n,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Fd=Ve&&"documentMode"in document&&11>=document.documentMode,jt=null,co=null,En=null,fo=!1;function os(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fo||jt==null||jt!==Pr(r)||(r=jt,"selectionStart"in r&&ri(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),En&&Dn(En,r)||(En=r,r=Mr(co,"onSelect"),0<r.length&&(t=new ei("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=jt)))}function ar(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Mt={animationend:ar("Animation","AnimationEnd"),animationiteration:ar("Animation","AnimationIteration"),animationstart:ar("Animation","AnimationStart"),transitionend:ar("Transition","TransitionEnd")},Nl={},Va={};Ve&&(Va=document.createElement("div").style,"AnimationEvent"in window||(delete Mt.animationend.animation,delete Mt.animationiteration.animation,delete Mt.animationstart.animation),"TransitionEvent"in window||delete Mt.transitionend.transition);function ll(e){if(Nl[e])return Nl[e];if(!Mt[e])return e;var t=Mt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Va)return Nl[e]=t[n];return e}var Ya=ll("animationend"),Qa=ll("animationiteration"),Ga=ll("animationstart"),Ka=ll("transitionend"),Xa=new Map,is="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ft(e,t){Xa.set(e,t),Pt(t,[e])}for(var zl=0;zl<is.length;zl++){var Ll=is[zl],Bd=Ll.toLowerCase(),Wd=Ll[0].toUpperCase()+Ll.slice(1);ft(Bd,"on"+Wd)}ft(Ya,"onAnimationEnd");ft(Qa,"onAnimationIteration");ft(Ga,"onAnimationStart");ft("dblclick","onDoubleClick");ft("focusin","onFocus");ft("focusout","onBlur");ft(Ka,"onTransitionEnd");Jt("onMouseEnter",["mouseout","mouseover"]);Jt("onMouseLeave",["mouseout","mouseover"]);Jt("onPointerEnter",["pointerout","pointerover"]);Jt("onPointerLeave",["pointerout","pointerover"]);Pt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ud=new Set("cancel close invalid load scroll toggle".split(" ").concat(kn));function ss(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Bc(r,t,void 0,e),e.currentTarget=null}function Ja(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var s=r[i],a=s.instance,c=s.currentTarget;if(s=s.listener,a!==o&&l.isPropagationStopped())break e;ss(l,s,c),o=a}else for(i=0;i<r.length;i++){if(s=r[i],a=s.instance,c=s.currentTarget,s=s.listener,a!==o&&l.isPropagationStopped())break e;ss(l,s,c),o=a}}}if(zr)throw e=io,zr=!1,io=null,e}function M(e,t){var n=t[go];n===void 0&&(n=t[go]=new Set);var r=e+"__bubble";n.has(r)||(Za(t,e,2,!1),n.add(r))}function Ol(e,t,n){var r=0;t&&(r|=4),Za(n,e,r,t)}var ur="_reactListening"+Math.random().toString(36).slice(2);function Hn(e){if(!e[ur]){e[ur]=!0,la.forEach(function(n){n!=="selectionchange"&&(Ud.has(n)||Ol(n,!1,e),Ol(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ur]||(t[ur]=!0,Ol("selectionchange",!1,t))}}function Za(e,t,n,r){switch(Ra(t)){case 1:var l=nd;break;case 4:l=rd;break;default:l=qo}n=l.bind(null,t,n,e),l=void 0,!oo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Rl(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var a=i.tag;if((a===3||a===4)&&(a=i.stateNode.containerInfo,a===l||a.nodeType===8&&a.parentNode===l))return;i=i.return}for(;s!==null;){if(i=wt(s),i===null)return;if(a=i.tag,a===5||a===6){r=o=i;continue e}s=s.parentNode}}r=r.return}ka(function(){var c=o,m=Ko(n),p=[];e:{var h=Xa.get(e);if(h!==void 0){var w=ei,v=e;switch(e){case"keypress":if(Sr(n)===0)break e;case"keydown":case"keyup":w=vd;break;case"focusin":v="focus",w=Cl;break;case"focusout":v="blur",w=Cl;break;case"beforeblur":case"afterblur":w=Cl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Xi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=id;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Sd;break;case Ya:case Qa:case Ga:w=ud;break;case Ka:w=xd;break;case"scroll":w=ld;break;case"wheel":w=Ed;break;case"copy":case"cut":case"paste":w=dd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Zi}var k=(t&4)!==0,R=!k&&e==="scroll",d=k?h!==null?h+"Capture":null:h;k=[];for(var u=c,f;u!==null;){f=u;var y=f.stateNode;if(f.tag===5&&y!==null&&(f=y,d!==null&&(y=Ln(u,d),y!=null&&k.push(Fn(u,y,f)))),R)break;u=u.return}0<k.length&&(h=new w(h,v,null,n,m),p.push({event:h,listeners:k}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",h&&n!==ro&&(v=n.relatedTarget||n.fromElement)&&(wt(v)||v[Ye]))break e;if((w||h)&&(h=m.window===m?m:(h=m.ownerDocument)?h.defaultView||h.parentWindow:window,w?(v=n.relatedTarget||n.toElement,w=c,v=v?wt(v):null,v!==null&&(R=Nt(v),v!==R||v.tag!==5&&v.tag!==6)&&(v=null)):(w=null,v=c),w!==v)){if(k=Xi,y="onMouseLeave",d="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(k=Zi,y="onPointerLeave",d="onPointerEnter",u="pointer"),R=w==null?h:Dt(w),f=v==null?h:Dt(v),h=new k(y,u+"leave",w,n,m),h.target=R,h.relatedTarget=f,y=null,wt(m)===c&&(k=new k(d,u+"enter",v,n,m),k.target=f,k.relatedTarget=R,y=k),R=y,w&&v)t:{for(k=w,d=v,u=0,f=k;f;f=zt(f))u++;for(f=0,y=d;y;y=zt(y))f++;for(;0<u-f;)k=zt(k),u--;for(;0<f-u;)d=zt(d),f--;for(;u--;){if(k===d||d!==null&&k===d.alternate)break t;k=zt(k),d=zt(d)}k=null}else k=null;w!==null&&as(p,h,w,k,!1),v!==null&&R!==null&&as(p,R,v,k,!0)}}e:{if(h=c?Dt(c):window,w=h.nodeName&&h.nodeName.toLowerCase(),w==="select"||w==="input"&&h.type==="file")var T=Ld;else if(es(h))if(Ba)T=Md;else{T=Rd;var I=Od}else(w=h.nodeName)&&w.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=jd);if(T&&(T=T(e,c))){Fa(p,T,n,m);break e}I&&I(e,h,c),e==="focusout"&&(I=h._wrapperState)&&I.controlled&&h.type==="number"&&ql(h,"number",h.value)}switch(I=c?Dt(c):window,e){case"focusin":(es(I)||I.contentEditable==="true")&&(jt=I,co=c,En=null);break;case"focusout":En=co=jt=null;break;case"mousedown":fo=!0;break;case"contextmenu":case"mouseup":case"dragend":fo=!1,os(p,n,m);break;case"selectionchange":if(Fd)break;case"keydown":case"keyup":os(p,n,m)}var E;if(ni)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Rt?Da(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(Ma&&n.locale!=="ko"&&(Rt||C!=="onCompositionStart"?C==="onCompositionEnd"&&Rt&&(E=ja()):(et=m,bo="value"in et?et.value:et.textContent,Rt=!0)),I=Mr(c,C),0<I.length&&(C=new Ji(C,e,null,n,m),p.push({event:C,listeners:I}),E?C.data=E:(E=Ha(n),E!==null&&(C.data=E)))),(E=Cd?_d(e,n):Pd(e,n))&&(c=Mr(c,"onBeforeInput"),0<c.length&&(m=new Ji("onBeforeInput","beforeinput",null,n,m),p.push({event:m,listeners:c}),m.data=E))}Ja(p,t)})}function Fn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Mr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=Ln(e,n),o!=null&&r.unshift(Fn(e,o,l)),o=Ln(e,t),o!=null&&r.push(Fn(e,o,l))),e=e.return}return r}function zt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function as(e,t,n,r,l){for(var o=t._reactName,i=[];n!==null&&n!==r;){var s=n,a=s.alternate,c=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&c!==null&&(s=c,l?(a=Ln(n,o),a!=null&&i.unshift(Fn(n,a,s))):l||(a=Ln(n,o),a!=null&&i.push(Fn(n,a,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var $d=/\r\n?/g,Vd=/\u0000|\uFFFD/g;function us(e){return(typeof e=="string"?e:""+e).replace($d,`
`).replace(Vd,"")}function cr(e,t,n){if(t=us(t),us(e)!==t&&n)throw Error(g(425))}function Dr(){}var ho=null,po=null;function mo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var yo=typeof setTimeout=="function"?setTimeout:void 0,Yd=typeof clearTimeout=="function"?clearTimeout:void 0,cs=typeof Promise=="function"?Promise:void 0,Qd=typeof queueMicrotask=="function"?queueMicrotask:typeof cs<"u"?function(e){return cs.resolve(null).then(e).catch(Gd)}:yo;function Gd(e){setTimeout(function(){throw e})}function jl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),jn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);jn(t)}function ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ds(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var on=Math.random().toString(36).slice(2),Me="__reactFiber$"+on,Bn="__reactProps$"+on,Ye="__reactContainer$"+on,go="__reactEvents$"+on,Kd="__reactListeners$"+on,Xd="__reactHandles$"+on;function wt(e){var t=e[Me];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ye]||n[Me]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ds(e);e!==null;){if(n=e[Me])return n;e=ds(e)}return t}e=n,n=e.parentNode}return null}function Jn(e){return e=e[Me]||e[Ye],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Dt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(g(33))}function ol(e){return e[Bn]||null}var vo=[],Ht=-1;function ht(e){return{current:e}}function D(e){0>Ht||(e.current=vo[Ht],vo[Ht]=null,Ht--)}function j(e,t){Ht++,vo[Ht]=e.current,e.current=t}var dt={},le=ht(dt),de=ht(!1),It=dt;function Zt(e,t){var n=e.type.contextTypes;if(!n)return dt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function fe(e){return e=e.childContextTypes,e!=null}function Hr(){D(de),D(le)}function fs(e,t,n){if(le.current!==dt)throw Error(g(168));j(le,t),j(de,n)}function qa(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(g(108,Oc(e)||"Unknown",l));return W({},n,r)}function Fr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||dt,It=le.current,j(le,e),j(de,de.current),!0}function hs(e,t,n){var r=e.stateNode;if(!r)throw Error(g(169));n?(e=qa(e,t,It),r.__reactInternalMemoizedMergedChildContext=e,D(de),D(le),j(le,e)):D(de),j(de,n)}var Be=null,il=!1,Ml=!1;function ba(e){Be===null?Be=[e]:Be.push(e)}function Jd(e){il=!0,ba(e)}function pt(){if(!Ml&&Be!==null){Ml=!0;var e=0,t=O;try{var n=Be;for(O=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Be=null,il=!1}catch(l){throw Be!==null&&(Be=Be.slice(e+1)),Ia(Xo,pt),l}finally{O=t,Ml=!1}}return null}var Ft=[],Bt=0,Br=null,Wr=0,ke=[],Se=0,Et=null,We=1,Ue="";function gt(e,t){Ft[Bt++]=Wr,Ft[Bt++]=Br,Br=e,Wr=t}function eu(e,t,n){ke[Se++]=We,ke[Se++]=Ue,ke[Se++]=Et,Et=e;var r=We;e=Ue;var l=32-ze(r)-1;r&=~(1<<l),n+=1;var o=32-ze(t)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,We=1<<32-ze(t)+l|n<<l|r,Ue=o+e}else We=1<<o|n<<l|r,Ue=e}function li(e){e.return!==null&&(gt(e,1),eu(e,1,0))}function oi(e){for(;e===Br;)Br=Ft[--Bt],Ft[Bt]=null,Wr=Ft[--Bt],Ft[Bt]=null;for(;e===Et;)Et=ke[--Se],ke[Se]=null,Ue=ke[--Se],ke[Se]=null,We=ke[--Se],ke[Se]=null}var ye=null,me=null,H=!1,Ne=null;function tu(e,t){var n=Te(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ps(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ye=e,me=ot(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ye=e,me=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Et!==null?{id:We,overflow:Ue}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Te(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ye=e,me=null,!0):!1;default:return!1}}function wo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ko(e){if(H){var t=me;if(t){var n=t;if(!ps(e,t)){if(wo(e))throw Error(g(418));t=ot(n.nextSibling);var r=ye;t&&ps(e,t)?tu(r,n):(e.flags=e.flags&-4097|2,H=!1,ye=e)}}else{if(wo(e))throw Error(g(418));e.flags=e.flags&-4097|2,H=!1,ye=e}}}function ms(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ye=e}function dr(e){if(e!==ye)return!1;if(!H)return ms(e),H=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!mo(e.type,e.memoizedProps)),t&&(t=me)){if(wo(e))throw nu(),Error(g(418));for(;t;)tu(e,t),t=ot(t.nextSibling)}if(ms(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(g(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){me=ot(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}me=null}}else me=ye?ot(e.stateNode.nextSibling):null;return!0}function nu(){for(var e=me;e;)e=ot(e.nextSibling)}function qt(){me=ye=null,H=!1}function ii(e){Ne===null?Ne=[e]:Ne.push(e)}var Zd=Ke.ReactCurrentBatchConfig;function pn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(g(309));var r=n.stateNode}if(!r)throw Error(g(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var s=l.refs;i===null?delete s[o]:s[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(g(284));if(!n._owner)throw Error(g(290,e))}return e}function fr(e,t){throw e=Object.prototype.toString.call(t),Error(g(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ys(e){var t=e._init;return t(e._payload)}function ru(e){function t(d,u){if(e){var f=d.deletions;f===null?(d.deletions=[u],d.flags|=16):f.push(u)}}function n(d,u){if(!e)return null;for(;u!==null;)t(d,u),u=u.sibling;return null}function r(d,u){for(d=new Map;u!==null;)u.key!==null?d.set(u.key,u):d.set(u.index,u),u=u.sibling;return d}function l(d,u){return d=ut(d,u),d.index=0,d.sibling=null,d}function o(d,u,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<u?(d.flags|=2,u):f):(d.flags|=2,u)):(d.flags|=1048576,u)}function i(d){return e&&d.alternate===null&&(d.flags|=2),d}function s(d,u,f,y){return u===null||u.tag!==6?(u=$l(f,d.mode,y),u.return=d,u):(u=l(u,f),u.return=d,u)}function a(d,u,f,y){var T=f.type;return T===Ot?m(d,u,f.props.children,y,f.key):u!==null&&(u.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Je&&ys(T)===u.type)?(y=l(u,f.props),y.ref=pn(d,u,f),y.return=d,y):(y=_r(f.type,f.key,f.props,null,d.mode,y),y.ref=pn(d,u,f),y.return=d,y)}function c(d,u,f,y){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=Vl(f,d.mode,y),u.return=d,u):(u=l(u,f.children||[]),u.return=d,u)}function m(d,u,f,y,T){return u===null||u.tag!==7?(u=xt(f,d.mode,y,T),u.return=d,u):(u=l(u,f),u.return=d,u)}function p(d,u,f){if(typeof u=="string"&&u!==""||typeof u=="number")return u=$l(""+u,d.mode,f),u.return=d,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case tr:return f=_r(u.type,u.key,u.props,null,d.mode,f),f.ref=pn(d,null,u),f.return=d,f;case Lt:return u=Vl(u,d.mode,f),u.return=d,u;case Je:var y=u._init;return p(d,y(u._payload),f)}if(vn(u)||un(u))return u=xt(u,d.mode,f,null),u.return=d,u;fr(d,u)}return null}function h(d,u,f,y){var T=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return T!==null?null:s(d,u,""+f,y);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case tr:return f.key===T?a(d,u,f,y):null;case Lt:return f.key===T?c(d,u,f,y):null;case Je:return T=f._init,h(d,u,T(f._payload),y)}if(vn(f)||un(f))return T!==null?null:m(d,u,f,y,null);fr(d,f)}return null}function w(d,u,f,y,T){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(f)||null,s(u,d,""+y,T);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case tr:return d=d.get(y.key===null?f:y.key)||null,a(u,d,y,T);case Lt:return d=d.get(y.key===null?f:y.key)||null,c(u,d,y,T);case Je:var I=y._init;return w(d,u,f,I(y._payload),T)}if(vn(y)||un(y))return d=d.get(f)||null,m(u,d,y,T,null);fr(u,y)}return null}function v(d,u,f,y){for(var T=null,I=null,E=u,C=u=0,$=null;E!==null&&C<f.length;C++){E.index>C?($=E,E=null):$=E.sibling;var z=h(d,E,f[C],y);if(z===null){E===null&&(E=$);break}e&&E&&z.alternate===null&&t(d,E),u=o(z,u,C),I===null?T=z:I.sibling=z,I=z,E=$}if(C===f.length)return n(d,E),H&&gt(d,C),T;if(E===null){for(;C<f.length;C++)E=p(d,f[C],y),E!==null&&(u=o(E,u,C),I===null?T=E:I.sibling=E,I=E);return H&&gt(d,C),T}for(E=r(d,E);C<f.length;C++)$=w(E,d,C,f[C],y),$!==null&&(e&&$.alternate!==null&&E.delete($.key===null?C:$.key),u=o($,u,C),I===null?T=$:I.sibling=$,I=$);return e&&E.forEach(function(Ae){return t(d,Ae)}),H&&gt(d,C),T}function k(d,u,f,y){var T=un(f);if(typeof T!="function")throw Error(g(150));if(f=T.call(f),f==null)throw Error(g(151));for(var I=T=null,E=u,C=u=0,$=null,z=f.next();E!==null&&!z.done;C++,z=f.next()){E.index>C?($=E,E=null):$=E.sibling;var Ae=h(d,E,z.value,y);if(Ae===null){E===null&&(E=$);break}e&&E&&Ae.alternate===null&&t(d,E),u=o(Ae,u,C),I===null?T=Ae:I.sibling=Ae,I=Ae,E=$}if(z.done)return n(d,E),H&&gt(d,C),T;if(E===null){for(;!z.done;C++,z=f.next())z=p(d,z.value,y),z!==null&&(u=o(z,u,C),I===null?T=z:I.sibling=z,I=z);return H&&gt(d,C),T}for(E=r(d,E);!z.done;C++,z=f.next())z=w(E,d,C,z.value,y),z!==null&&(e&&z.alternate!==null&&E.delete(z.key===null?C:z.key),u=o(z,u,C),I===null?T=z:I.sibling=z,I=z);return e&&E.forEach(function(sn){return t(d,sn)}),H&&gt(d,C),T}function R(d,u,f,y){if(typeof f=="object"&&f!==null&&f.type===Ot&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case tr:e:{for(var T=f.key,I=u;I!==null;){if(I.key===T){if(T=f.type,T===Ot){if(I.tag===7){n(d,I.sibling),u=l(I,f.props.children),u.return=d,d=u;break e}}else if(I.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Je&&ys(T)===I.type){n(d,I.sibling),u=l(I,f.props),u.ref=pn(d,I,f),u.return=d,d=u;break e}n(d,I);break}else t(d,I);I=I.sibling}f.type===Ot?(u=xt(f.props.children,d.mode,y,f.key),u.return=d,d=u):(y=_r(f.type,f.key,f.props,null,d.mode,y),y.ref=pn(d,u,f),y.return=d,d=y)}return i(d);case Lt:e:{for(I=f.key;u!==null;){if(u.key===I)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){n(d,u.sibling),u=l(u,f.children||[]),u.return=d,d=u;break e}else{n(d,u);break}else t(d,u);u=u.sibling}u=Vl(f,d.mode,y),u.return=d,d=u}return i(d);case Je:return I=f._init,R(d,u,I(f._payload),y)}if(vn(f))return v(d,u,f,y);if(un(f))return k(d,u,f,y);fr(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,u!==null&&u.tag===6?(n(d,u.sibling),u=l(u,f),u.return=d,d=u):(n(d,u),u=$l(f,d.mode,y),u.return=d,d=u),i(d)):n(d,u)}return R}var bt=ru(!0),lu=ru(!1),Ur=ht(null),$r=null,Wt=null,si=null;function ai(){si=Wt=$r=null}function ui(e){var t=Ur.current;D(Ur),e._currentValue=t}function So(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Kt(e,t){$r=e,si=Wt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ce=!0),e.firstContext=null)}function Ie(e){var t=e._currentValue;if(si!==e)if(e={context:e,memoizedValue:t,next:null},Wt===null){if($r===null)throw Error(g(308));Wt=e,$r.dependencies={lanes:0,firstContext:e}}else Wt=Wt.next=e;return t}var kt=null;function ci(e){kt===null?kt=[e]:kt.push(e)}function ou(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,ci(t)):(n.next=l.next,l.next=n),t.interleaved=n,Qe(e,r)}function Qe(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ze=!1;function di(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function iu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function $e(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function it(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,L&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Qe(e,n)}return l=r.interleaved,l===null?(t.next=t,ci(r)):(t.next=l.next,l.next=t),r.interleaved=t,Qe(e,n)}function Tr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Jo(e,n)}}function gs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Vr(e,t,n,r){var l=e.updateQueue;Ze=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var a=s,c=a.next;a.next=null,i===null?o=c:i.next=c,i=a;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==i&&(s===null?m.firstBaseUpdate=c:s.next=c,m.lastBaseUpdate=a))}if(o!==null){var p=l.baseState;i=0,m=c=a=null,s=o;do{var h=s.lane,w=s.eventTime;if((r&h)===h){m!==null&&(m=m.next={eventTime:w,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,k=s;switch(h=t,w=n,k.tag){case 1:if(v=k.payload,typeof v=="function"){p=v.call(w,p,h);break e}p=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=k.payload,h=typeof v=="function"?v.call(w,p,h):v,h==null)break e;p=W({},p,h);break e;case 2:Ze=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=l.effects,h===null?l.effects=[s]:h.push(s))}else w={eventTime:w,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(c=m=w,a=p):m=m.next=w,i|=h;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;h=s,s=h.next,h.next=null,l.lastBaseUpdate=h,l.shared.pending=null}}while(!0);if(m===null&&(a=p),l.baseState=a,l.firstBaseUpdate=c,l.lastBaseUpdate=m,t=l.shared.interleaved,t!==null){l=t;do i|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);Ct|=i,e.lanes=i,e.memoizedState=p}}function vs(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(g(191,l));l.call(r)}}}var Zn={},He=ht(Zn),Wn=ht(Zn),Un=ht(Zn);function St(e){if(e===Zn)throw Error(g(174));return e}function fi(e,t){switch(j(Un,t),j(Wn,e),j(He,Zn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:eo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=eo(t,e)}D(He),j(He,t)}function en(){D(He),D(Wn),D(Un)}function su(e){St(Un.current);var t=St(He.current),n=eo(t,e.type);t!==n&&(j(Wn,e),j(He,n))}function hi(e){Wn.current===e&&(D(He),D(Wn))}var F=ht(0);function Yr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Dl=[];function pi(){for(var e=0;e<Dl.length;e++)Dl[e]._workInProgressVersionPrimary=null;Dl.length=0}var xr=Ke.ReactCurrentDispatcher,Hl=Ke.ReactCurrentBatchConfig,At=0,B=null,G=null,J=null,Qr=!1,An=!1,$n=0,qd=0;function te(){throw Error(g(321))}function mi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Oe(e[n],t[n]))return!1;return!0}function yi(e,t,n,r,l,o){if(At=o,B=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,xr.current=e===null||e.memoizedState===null?nf:rf,e=n(r,l),An){o=0;do{if(An=!1,$n=0,25<=o)throw Error(g(301));o+=1,J=G=null,t.updateQueue=null,xr.current=lf,e=n(r,l)}while(An)}if(xr.current=Gr,t=G!==null&&G.next!==null,At=0,J=G=B=null,Qr=!1,t)throw Error(g(300));return e}function gi(){var e=$n!==0;return $n=0,e}function je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?B.memoizedState=J=e:J=J.next=e,J}function Ee(){if(G===null){var e=B.alternate;e=e!==null?e.memoizedState:null}else e=G.next;var t=J===null?B.memoizedState:J.next;if(t!==null)J=t,G=e;else{if(e===null)throw Error(g(310));G=e,e={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},J===null?B.memoizedState=J=e:J=J.next=e}return J}function Vn(e,t){return typeof t=="function"?t(e):t}function Fl(e){var t=Ee(),n=t.queue;if(n===null)throw Error(g(311));n.lastRenderedReducer=e;var r=G,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var s=i=null,a=null,c=o;do{var m=c.lane;if((At&m)===m)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(s=a=p,i=r):a=a.next=p,B.lanes|=m,Ct|=m}c=c.next}while(c!==null&&c!==o);a===null?i=r:a.next=s,Oe(r,t.memoizedState)||(ce=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,B.lanes|=o,Ct|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Bl(e){var t=Ee(),n=t.queue;if(n===null)throw Error(g(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);Oe(o,t.memoizedState)||(ce=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function au(){}function uu(e,t){var n=B,r=Ee(),l=t(),o=!Oe(r.memoizedState,l);if(o&&(r.memoizedState=l,ce=!0),r=r.queue,vi(fu.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||J!==null&&J.memoizedState.tag&1){if(n.flags|=2048,Yn(9,du.bind(null,n,r,l,t),void 0,null),Z===null)throw Error(g(349));At&30||cu(n,t,l)}return l}function cu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=B.updateQueue,t===null?(t={lastEffect:null,stores:null},B.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function du(e,t,n,r){t.value=n,t.getSnapshot=r,hu(t)&&pu(e)}function fu(e,t,n){return n(function(){hu(t)&&pu(e)})}function hu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Oe(e,n)}catch{return!0}}function pu(e){var t=Qe(e,1);t!==null&&Le(t,e,1,-1)}function ws(e){var t=je();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vn,lastRenderedState:e},t.queue=e,e=e.dispatch=tf.bind(null,B,e),[t.memoizedState,e]}function Yn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=B.updateQueue,t===null?(t={lastEffect:null,stores:null},B.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function mu(){return Ee().memoizedState}function Ir(e,t,n,r){var l=je();B.flags|=e,l.memoizedState=Yn(1|t,n,void 0,r===void 0?null:r)}function sl(e,t,n,r){var l=Ee();r=r===void 0?null:r;var o=void 0;if(G!==null){var i=G.memoizedState;if(o=i.destroy,r!==null&&mi(r,i.deps)){l.memoizedState=Yn(t,n,o,r);return}}B.flags|=e,l.memoizedState=Yn(1|t,n,o,r)}function ks(e,t){return Ir(8390656,8,e,t)}function vi(e,t){return sl(2048,8,e,t)}function yu(e,t){return sl(4,2,e,t)}function gu(e,t){return sl(4,4,e,t)}function vu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function wu(e,t,n){return n=n!=null?n.concat([e]):null,sl(4,4,vu.bind(null,t,e),n)}function wi(){}function ku(e,t){var n=Ee();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&mi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Su(e,t){var n=Ee();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&mi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Tu(e,t,n){return At&21?(Oe(n,t)||(n=Ca(),B.lanes|=n,Ct|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ce=!0),e.memoizedState=n)}function bd(e,t){var n=O;O=n!==0&&4>n?n:4,e(!0);var r=Hl.transition;Hl.transition={};try{e(!1),t()}finally{O=n,Hl.transition=r}}function xu(){return Ee().memoizedState}function ef(e,t,n){var r=at(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Iu(e))Eu(t,n);else if(n=ou(e,t,n,r),n!==null){var l=ie();Le(n,e,r,l),Au(n,t,r)}}function tf(e,t,n){var r=at(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Iu(e))Eu(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,s=o(i,n);if(l.hasEagerState=!0,l.eagerState=s,Oe(s,i)){var a=t.interleaved;a===null?(l.next=l,ci(t)):(l.next=a.next,a.next=l),t.interleaved=l;return}}catch{}finally{}n=ou(e,t,l,r),n!==null&&(l=ie(),Le(n,e,r,l),Au(n,t,r))}}function Iu(e){var t=e.alternate;return e===B||t!==null&&t===B}function Eu(e,t){An=Qr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Au(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Jo(e,n)}}var Gr={readContext:Ie,useCallback:te,useContext:te,useEffect:te,useImperativeHandle:te,useInsertionEffect:te,useLayoutEffect:te,useMemo:te,useReducer:te,useRef:te,useState:te,useDebugValue:te,useDeferredValue:te,useTransition:te,useMutableSource:te,useSyncExternalStore:te,useId:te,unstable_isNewReconciler:!1},nf={readContext:Ie,useCallback:function(e,t){return je().memoizedState=[e,t===void 0?null:t],e},useContext:Ie,useEffect:ks,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ir(4194308,4,vu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ir(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ir(4,2,e,t)},useMemo:function(e,t){var n=je();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=je();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ef.bind(null,B,e),[r.memoizedState,e]},useRef:function(e){var t=je();return e={current:e},t.memoizedState=e},useState:ws,useDebugValue:wi,useDeferredValue:function(e){return je().memoizedState=e},useTransition:function(){var e=ws(!1),t=e[0];return e=bd.bind(null,e[1]),je().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=B,l=je();if(H){if(n===void 0)throw Error(g(407));n=n()}else{if(n=t(),Z===null)throw Error(g(349));At&30||cu(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,ks(fu.bind(null,r,o,e),[e]),r.flags|=2048,Yn(9,du.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=je(),t=Z.identifierPrefix;if(H){var n=Ue,r=We;n=(r&~(1<<32-ze(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=$n++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=qd++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},rf={readContext:Ie,useCallback:ku,useContext:Ie,useEffect:vi,useImperativeHandle:wu,useInsertionEffect:yu,useLayoutEffect:gu,useMemo:Su,useReducer:Fl,useRef:mu,useState:function(){return Fl(Vn)},useDebugValue:wi,useDeferredValue:function(e){var t=Ee();return Tu(t,G.memoizedState,e)},useTransition:function(){var e=Fl(Vn)[0],t=Ee().memoizedState;return[e,t]},useMutableSource:au,useSyncExternalStore:uu,useId:xu,unstable_isNewReconciler:!1},lf={readContext:Ie,useCallback:ku,useContext:Ie,useEffect:vi,useImperativeHandle:wu,useInsertionEffect:yu,useLayoutEffect:gu,useMemo:Su,useReducer:Bl,useRef:mu,useState:function(){return Bl(Vn)},useDebugValue:wi,useDeferredValue:function(e){var t=Ee();return G===null?t.memoizedState=e:Tu(t,G.memoizedState,e)},useTransition:function(){var e=Bl(Vn)[0],t=Ee().memoizedState;return[e,t]},useMutableSource:au,useSyncExternalStore:uu,useId:xu,unstable_isNewReconciler:!1};function _e(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function To(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:W({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var al={isMounted:function(e){return(e=e._reactInternals)?Nt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ie(),l=at(e),o=$e(r,l);o.payload=t,n!=null&&(o.callback=n),t=it(e,o,l),t!==null&&(Le(t,e,l,r),Tr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ie(),l=at(e),o=$e(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=it(e,o,l),t!==null&&(Le(t,e,l,r),Tr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ie(),r=at(e),l=$e(n,r);l.tag=2,t!=null&&(l.callback=t),t=it(e,l,r),t!==null&&(Le(t,e,r,n),Tr(t,e,r))}};function Ss(e,t,n,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!Dn(n,r)||!Dn(l,o):!0}function Cu(e,t,n){var r=!1,l=dt,o=t.contextType;return typeof o=="object"&&o!==null?o=Ie(o):(l=fe(t)?It:le.current,r=t.contextTypes,o=(r=r!=null)?Zt(e,l):dt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=al,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ts(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&al.enqueueReplaceState(t,t.state,null)}function xo(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},di(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=Ie(o):(o=fe(t)?It:le.current,l.context=Zt(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(To(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&al.enqueueReplaceState(l,l.state,null),Vr(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function tn(e,t){try{var n="",r=t;do n+=Lc(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function Wl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Io(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var of=typeof WeakMap=="function"?WeakMap:Map;function _u(e,t,n){n=$e(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Xr||(Xr=!0,Ro=r),Io(e,t)},n}function Pu(e,t,n){n=$e(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Io(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Io(e,t),typeof r!="function"&&(st===null?st=new Set([this]):st.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function xs(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new of;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=kf.bind(null,e,t,n),t.then(e,e))}function Is(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Es(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=$e(-1,1),t.tag=2,it(n,t,1))),n.lanes|=1),e)}var sf=Ke.ReactCurrentOwner,ce=!1;function oe(e,t,n,r){t.child=e===null?lu(t,null,n,r):bt(t,e.child,n,r)}function As(e,t,n,r,l){n=n.render;var o=t.ref;return Kt(t,l),r=yi(e,t,n,r,o,l),n=gi(),e!==null&&!ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ge(e,t,l)):(H&&n&&li(t),t.flags|=1,oe(e,t,r,l),t.child)}function Cs(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!Ci(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Nu(e,t,o,r,l)):(e=_r(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:Dn,n(i,r)&&e.ref===t.ref)return Ge(e,t,l)}return t.flags|=1,e=ut(o,r),e.ref=t.ref,e.return=t,t.child=e}function Nu(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(Dn(o,r)&&e.ref===t.ref)if(ce=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(ce=!0);else return t.lanes=e.lanes,Ge(e,t,l)}return Eo(e,t,n,r,l)}function zu(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},j($t,pe),pe|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,j($t,pe),pe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,j($t,pe),pe|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,j($t,pe),pe|=r;return oe(e,t,l,n),t.child}function Lu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Eo(e,t,n,r,l){var o=fe(n)?It:le.current;return o=Zt(t,o),Kt(t,l),n=yi(e,t,n,r,o,l),r=gi(),e!==null&&!ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ge(e,t,l)):(H&&r&&li(t),t.flags|=1,oe(e,t,n,l),t.child)}function _s(e,t,n,r,l){if(fe(n)){var o=!0;Fr(t)}else o=!1;if(Kt(t,l),t.stateNode===null)Er(e,t),Cu(t,n,r),xo(t,n,r,l),r=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var a=i.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ie(c):(c=fe(n)?It:le.current,c=Zt(t,c));var m=n.getDerivedStateFromProps,p=typeof m=="function"||typeof i.getSnapshotBeforeUpdate=="function";p||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||a!==c)&&Ts(t,i,r,c),Ze=!1;var h=t.memoizedState;i.state=h,Vr(t,r,i,l),a=t.memoizedState,s!==r||h!==a||de.current||Ze?(typeof m=="function"&&(To(t,n,m,r),a=t.memoizedState),(s=Ze||Ss(t,n,s,r,h,a,c))?(p||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),i.props=r,i.state=a,i.context=c,r=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,iu(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:_e(t.type,s),i.props=c,p=t.pendingProps,h=i.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ie(a):(a=fe(n)?It:le.current,a=Zt(t,a));var w=n.getDerivedStateFromProps;(m=typeof w=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==p||h!==a)&&Ts(t,i,r,a),Ze=!1,h=t.memoizedState,i.state=h,Vr(t,r,i,l);var v=t.memoizedState;s!==p||h!==v||de.current||Ze?(typeof w=="function"&&(To(t,n,w,r),v=t.memoizedState),(c=Ze||Ss(t,n,c,r,h,v,a)||!1)?(m||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,v,a),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,v,a)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),i.props=r,i.state=v,i.context=a,r=c):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Ao(e,t,n,r,o,l)}function Ao(e,t,n,r,l,o){Lu(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return l&&hs(t,n,!1),Ge(e,t,o);r=t.stateNode,sf.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=bt(t,e.child,null,o),t.child=bt(t,null,s,o)):oe(e,t,s,o),t.memoizedState=r.state,l&&hs(t,n,!0),t.child}function Ou(e){var t=e.stateNode;t.pendingContext?fs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&fs(e,t.context,!1),fi(e,t.containerInfo)}function Ps(e,t,n,r,l){return qt(),ii(l),t.flags|=256,oe(e,t,n,r),t.child}var Co={dehydrated:null,treeContext:null,retryLane:0};function _o(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ru(e,t,n){var r=t.pendingProps,l=F.current,o=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),j(F,l&1),e===null)return ko(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=dl(i,r,0,null),e=xt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=_o(n),t.memoizedState=Co,e):ki(t,i));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return af(e,t,i,r,s,l,n);if(o){o=r.fallback,i=t.mode,l=e.child,s=l.sibling;var a={mode:"hidden",children:r.children};return!(i&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=ut(l,a),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?o=ut(s,o):(o=xt(o,i,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?_o(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=Co,r}return o=e.child,e=o.sibling,r=ut(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ki(e,t){return t=dl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function hr(e,t,n,r){return r!==null&&ii(r),bt(t,e.child,null,n),e=ki(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function af(e,t,n,r,l,o,i){if(n)return t.flags&256?(t.flags&=-257,r=Wl(Error(g(422))),hr(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=dl({mode:"visible",children:r.children},l,0,null),o=xt(o,l,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&bt(t,e.child,null,i),t.child.memoizedState=_o(i),t.memoizedState=Co,o);if(!(t.mode&1))return hr(e,t,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(g(419)),r=Wl(o,r,void 0),hr(e,t,i,r)}if(s=(i&e.childLanes)!==0,ce||s){if(r=Z,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,Qe(e,l),Le(r,e,l,-1))}return Ai(),r=Wl(Error(g(421))),hr(e,t,i,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Sf.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,me=ot(l.nextSibling),ye=t,H=!0,Ne=null,e!==null&&(ke[Se++]=We,ke[Se++]=Ue,ke[Se++]=Et,We=e.id,Ue=e.overflow,Et=t),t=ki(t,r.children),t.flags|=4096,t)}function Ns(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),So(e.return,t,n)}function Ul(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function ju(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(oe(e,t,r.children,n),r=F.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ns(e,n,t);else if(e.tag===19)Ns(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(j(F,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Yr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Ul(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Yr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Ul(t,!0,n,null,o);break;case"together":Ul(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Er(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ge(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ct|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(g(153));if(t.child!==null){for(e=t.child,n=ut(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ut(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function uf(e,t,n){switch(t.tag){case 3:Ou(t),qt();break;case 5:su(t);break;case 1:fe(t.type)&&Fr(t);break;case 4:fi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;j(Ur,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(j(F,F.current&1),t.flags|=128,null):n&t.child.childLanes?Ru(e,t,n):(j(F,F.current&1),e=Ge(e,t,n),e!==null?e.sibling:null);j(F,F.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ju(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),j(F,F.current),r)break;return null;case 22:case 23:return t.lanes=0,zu(e,t,n)}return Ge(e,t,n)}var Mu,Po,Du,Hu;Mu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Po=function(){};Du=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,St(He.current);var o=null;switch(n){case"input":l=Jl(e,l),r=Jl(e,r),o=[];break;case"select":l=W({},l,{value:void 0}),r=W({},r,{value:void 0}),o=[];break;case"textarea":l=bl(e,l),r=bl(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Dr)}to(n,r);var i;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var s=l[c];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Nn.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var a=r[c];if(s=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&a!==s&&(a!=null||s!=null))if(c==="style")if(s){for(i in s)!s.hasOwnProperty(i)||a&&a.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in a)a.hasOwnProperty(i)&&s[i]!==a[i]&&(n||(n={}),n[i]=a[i])}else n||(o||(o=[]),o.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(o=o||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Nn.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&M("scroll",e),o||s===a||(o=[])):(o=o||[]).push(c,a))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Hu=function(e,t,n,r){n!==r&&(t.flags|=4)};function mn(e,t){if(!H)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function cf(e,t,n){var r=t.pendingProps;switch(oi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ne(t),null;case 1:return fe(t.type)&&Hr(),ne(t),null;case 3:return r=t.stateNode,en(),D(de),D(le),pi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(dr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ne!==null&&(Do(Ne),Ne=null))),Po(e,t),ne(t),null;case 5:hi(t);var l=St(Un.current);if(n=t.type,e!==null&&t.stateNode!=null)Du(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(g(166));return ne(t),null}if(e=St(He.current),dr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Me]=t,r[Bn]=o,e=(t.mode&1)!==0,n){case"dialog":M("cancel",r),M("close",r);break;case"iframe":case"object":case"embed":M("load",r);break;case"video":case"audio":for(l=0;l<kn.length;l++)M(kn[l],r);break;case"source":M("error",r);break;case"img":case"image":case"link":M("error",r),M("load",r);break;case"details":M("toggle",r);break;case"input":Fi(r,o),M("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},M("invalid",r);break;case"textarea":Wi(r,o),M("invalid",r)}to(n,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var s=o[i];i==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&cr(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&cr(r.textContent,s,e),l=["children",""+s]):Nn.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&M("scroll",r)}switch(n){case"input":nr(r),Bi(r,o,!0);break;case"textarea":nr(r),Ui(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Dr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fa(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Me]=t,e[Bn]=r,Mu(e,t,!1,!1),t.stateNode=e;e:{switch(i=no(n,r),n){case"dialog":M("cancel",e),M("close",e),l=r;break;case"iframe":case"object":case"embed":M("load",e),l=r;break;case"video":case"audio":for(l=0;l<kn.length;l++)M(kn[l],e);l=r;break;case"source":M("error",e),l=r;break;case"img":case"image":case"link":M("error",e),M("load",e),l=r;break;case"details":M("toggle",e),l=r;break;case"input":Fi(e,r),l=Jl(e,r),M("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=W({},r,{value:void 0}),M("invalid",e);break;case"textarea":Wi(e,r),l=bl(e,r),M("invalid",e);break;default:l=r}to(n,l),s=l;for(o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="style"?ma(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&ha(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&zn(e,a):typeof a=="number"&&zn(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Nn.hasOwnProperty(o)?a!=null&&o==="onScroll"&&M("scroll",e):a!=null&&Vo(e,o,a,i))}switch(n){case"input":nr(e),Bi(e,r,!1);break;case"textarea":nr(e),Ui(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ct(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Vt(e,!!r.multiple,o,!1):r.defaultValue!=null&&Vt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Dr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ne(t),null;case 6:if(e&&t.stateNode!=null)Hu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(g(166));if(n=St(Un.current),St(He.current),dr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Me]=t,(o=r.nodeValue!==n)&&(e=ye,e!==null))switch(e.tag){case 3:cr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&cr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Me]=t,t.stateNode=r}return ne(t),null;case 13:if(D(F),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(H&&me!==null&&t.mode&1&&!(t.flags&128))nu(),qt(),t.flags|=98560,o=!1;else if(o=dr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(g(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(g(317));o[Me]=t}else qt(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ne(t),o=!1}else Ne!==null&&(Do(Ne),Ne=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||F.current&1?K===0&&(K=3):Ai())),t.updateQueue!==null&&(t.flags|=4),ne(t),null);case 4:return en(),Po(e,t),e===null&&Hn(t.stateNode.containerInfo),ne(t),null;case 10:return ui(t.type._context),ne(t),null;case 17:return fe(t.type)&&Hr(),ne(t),null;case 19:if(D(F),o=t.memoizedState,o===null)return ne(t),null;if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)mn(o,!1);else{if(K!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Yr(e),i!==null){for(t.flags|=128,mn(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return j(F,F.current&1|2),t.child}e=e.sibling}o.tail!==null&&Y()>nn&&(t.flags|=128,r=!0,mn(o,!1),t.lanes=4194304)}else{if(!r)if(e=Yr(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),mn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!H)return ne(t),null}else 2*Y()-o.renderingStartTime>nn&&n!==1073741824&&(t.flags|=128,r=!0,mn(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Y(),t.sibling=null,n=F.current,j(F,r?n&1|2:n&1),t):(ne(t),null);case 22:case 23:return Ei(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?pe&1073741824&&(ne(t),t.subtreeFlags&6&&(t.flags|=8192)):ne(t),null;case 24:return null;case 25:return null}throw Error(g(156,t.tag))}function df(e,t){switch(oi(t),t.tag){case 1:return fe(t.type)&&Hr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return en(),D(de),D(le),pi(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return hi(t),null;case 13:if(D(F),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(g(340));qt()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return D(F),null;case 4:return en(),null;case 10:return ui(t.type._context),null;case 22:case 23:return Ei(),null;case 24:return null;default:return null}}var pr=!1,re=!1,ff=typeof WeakSet=="function"?WeakSet:Set,S=null;function Ut(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){U(e,t,r)}else n.current=null}function No(e,t,n){try{n()}catch(r){U(e,t,r)}}var zs=!1;function hf(e,t){if(ho=Rr,e=$a(),ri(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,s=-1,a=-1,c=0,m=0,p=e,h=null;t:for(;;){for(var w;p!==n||l!==0&&p.nodeType!==3||(s=i+l),p!==o||r!==0&&p.nodeType!==3||(a=i+r),p.nodeType===3&&(i+=p.nodeValue.length),(w=p.firstChild)!==null;)h=p,p=w;for(;;){if(p===e)break t;if(h===n&&++c===l&&(s=i),h===o&&++m===r&&(a=i),(w=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=w}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(po={focusedElem:e,selectionRange:n},Rr=!1,S=t;S!==null;)if(t=S,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,S=e;else for(;S!==null;){t=S;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var k=v.memoizedProps,R=v.memoizedState,d=t.stateNode,u=d.getSnapshotBeforeUpdate(t.elementType===t.type?k:_e(t.type,k),R);d.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(g(163))}}catch(y){U(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,S=e;break}S=t.return}return v=zs,zs=!1,v}function Cn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&No(t,n,o)}l=l.next}while(l!==r)}}function ul(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function zo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Fu(e){var t=e.alternate;t!==null&&(e.alternate=null,Fu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Me],delete t[Bn],delete t[go],delete t[Kd],delete t[Xd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Bu(e){return e.tag===5||e.tag===3||e.tag===4}function Ls(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Bu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Lo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Dr));else if(r!==4&&(e=e.child,e!==null))for(Lo(e,t,n),e=e.sibling;e!==null;)Lo(e,t,n),e=e.sibling}function Oo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Oo(e,t,n),e=e.sibling;e!==null;)Oo(e,t,n),e=e.sibling}var q=null,Pe=!1;function Xe(e,t,n){for(n=n.child;n!==null;)Wu(e,t,n),n=n.sibling}function Wu(e,t,n){if(De&&typeof De.onCommitFiberUnmount=="function")try{De.onCommitFiberUnmount(tl,n)}catch{}switch(n.tag){case 5:re||Ut(n,t);case 6:var r=q,l=Pe;q=null,Xe(e,t,n),q=r,Pe=l,q!==null&&(Pe?(e=q,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):q.removeChild(n.stateNode));break;case 18:q!==null&&(Pe?(e=q,n=n.stateNode,e.nodeType===8?jl(e.parentNode,n):e.nodeType===1&&jl(e,n),jn(e)):jl(q,n.stateNode));break;case 4:r=q,l=Pe,q=n.stateNode.containerInfo,Pe=!0,Xe(e,t,n),q=r,Pe=l;break;case 0:case 11:case 14:case 15:if(!re&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&No(n,t,i),l=l.next}while(l!==r)}Xe(e,t,n);break;case 1:if(!re&&(Ut(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){U(n,t,s)}Xe(e,t,n);break;case 21:Xe(e,t,n);break;case 22:n.mode&1?(re=(r=re)||n.memoizedState!==null,Xe(e,t,n),re=r):Xe(e,t,n);break;default:Xe(e,t,n)}}function Os(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ff),t.forEach(function(r){var l=Tf.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Ce(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:q=s.stateNode,Pe=!1;break e;case 3:q=s.stateNode.containerInfo,Pe=!0;break e;case 4:q=s.stateNode.containerInfo,Pe=!0;break e}s=s.return}if(q===null)throw Error(g(160));Wu(o,i,l),q=null,Pe=!1;var a=l.alternate;a!==null&&(a.return=null),l.return=null}catch(c){U(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Uu(t,e),t=t.sibling}function Uu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ce(t,e),Re(e),r&4){try{Cn(3,e,e.return),ul(3,e)}catch(k){U(e,e.return,k)}try{Cn(5,e,e.return)}catch(k){U(e,e.return,k)}}break;case 1:Ce(t,e),Re(e),r&512&&n!==null&&Ut(n,n.return);break;case 5:if(Ce(t,e),Re(e),r&512&&n!==null&&Ut(n,n.return),e.flags&32){var l=e.stateNode;try{zn(l,"")}catch(k){U(e,e.return,k)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&ca(l,o),no(s,i);var c=no(s,o);for(i=0;i<a.length;i+=2){var m=a[i],p=a[i+1];m==="style"?ma(l,p):m==="dangerouslySetInnerHTML"?ha(l,p):m==="children"?zn(l,p):Vo(l,m,p,c)}switch(s){case"input":Zl(l,o);break;case"textarea":da(l,o);break;case"select":var h=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?Vt(l,!!o.multiple,w,!1):h!==!!o.multiple&&(o.defaultValue!=null?Vt(l,!!o.multiple,o.defaultValue,!0):Vt(l,!!o.multiple,o.multiple?[]:"",!1))}l[Bn]=o}catch(k){U(e,e.return,k)}}break;case 6:if(Ce(t,e),Re(e),r&4){if(e.stateNode===null)throw Error(g(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(k){U(e,e.return,k)}}break;case 3:if(Ce(t,e),Re(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{jn(t.containerInfo)}catch(k){U(e,e.return,k)}break;case 4:Ce(t,e),Re(e);break;case 13:Ce(t,e),Re(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(xi=Y())),r&4&&Os(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(re=(c=re)||m,Ce(t,e),re=c):Ce(t,e),Re(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for(S=e,m=e.child;m!==null;){for(p=S=m;S!==null;){switch(h=S,w=h.child,h.tag){case 0:case 11:case 14:case 15:Cn(4,h,h.return);break;case 1:Ut(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(k){U(r,n,k)}}break;case 5:Ut(h,h.return);break;case 22:if(h.memoizedState!==null){js(p);continue}}w!==null?(w.return=h,S=w):js(p)}m=m.sibling}e:for(m=null,p=e;;){if(p.tag===5){if(m===null){m=p;try{l=p.stateNode,c?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=p.stateNode,a=p.memoizedProps.style,i=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=pa("display",i))}catch(k){U(e,e.return,k)}}}else if(p.tag===6){if(m===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(k){U(e,e.return,k)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;m===p&&(m=null),p=p.return}m===p&&(m=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ce(t,e),Re(e),r&4&&Os(e);break;case 21:break;default:Ce(t,e),Re(e)}}function Re(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Bu(n)){var r=n;break e}n=n.return}throw Error(g(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(zn(l,""),r.flags&=-33);var o=Ls(e);Oo(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,s=Ls(e);Lo(e,s,i);break;default:throw Error(g(161))}}catch(a){U(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function pf(e,t,n){S=e,$u(e)}function $u(e,t,n){for(var r=(e.mode&1)!==0;S!==null;){var l=S,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||pr;if(!i){var s=l.alternate,a=s!==null&&s.memoizedState!==null||re;s=pr;var c=re;if(pr=i,(re=a)&&!c)for(S=l;S!==null;)i=S,a=i.child,i.tag===22&&i.memoizedState!==null?Ms(l):a!==null?(a.return=i,S=a):Ms(l);for(;o!==null;)S=o,$u(o),o=o.sibling;S=l,pr=s,re=c}Rs(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,S=o):Rs(e)}}function Rs(e){for(;S!==null;){var t=S;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:re||ul(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!re)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:_e(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&vs(t,o,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}vs(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var p=m.dehydrated;p!==null&&jn(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(g(163))}re||t.flags&512&&zo(t)}catch(h){U(t,t.return,h)}}if(t===e){S=null;break}if(n=t.sibling,n!==null){n.return=t.return,S=n;break}S=t.return}}function js(e){for(;S!==null;){var t=S;if(t===e){S=null;break}var n=t.sibling;if(n!==null){n.return=t.return,S=n;break}S=t.return}}function Ms(e){for(;S!==null;){var t=S;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ul(4,t)}catch(a){U(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(a){U(t,l,a)}}var o=t.return;try{zo(t)}catch(a){U(t,o,a)}break;case 5:var i=t.return;try{zo(t)}catch(a){U(t,i,a)}}}catch(a){U(t,t.return,a)}if(t===e){S=null;break}var s=t.sibling;if(s!==null){s.return=t.return,S=s;break}S=t.return}}var mf=Math.ceil,Kr=Ke.ReactCurrentDispatcher,Si=Ke.ReactCurrentOwner,xe=Ke.ReactCurrentBatchConfig,L=0,Z=null,Q=null,b=0,pe=0,$t=ht(0),K=0,Qn=null,Ct=0,cl=0,Ti=0,_n=null,ue=null,xi=0,nn=1/0,Fe=null,Xr=!1,Ro=null,st=null,mr=!1,tt=null,Jr=0,Pn=0,jo=null,Ar=-1,Cr=0;function ie(){return L&6?Y():Ar!==-1?Ar:Ar=Y()}function at(e){return e.mode&1?L&2&&b!==0?b&-b:Zd.transition!==null?(Cr===0&&(Cr=Ca()),Cr):(e=O,e!==0||(e=window.event,e=e===void 0?16:Ra(e.type)),e):1}function Le(e,t,n,r){if(50<Pn)throw Pn=0,jo=null,Error(g(185));Kn(e,n,r),(!(L&2)||e!==Z)&&(e===Z&&(!(L&2)&&(cl|=n),K===4&&be(e,b)),he(e,r),n===1&&L===0&&!(t.mode&1)&&(nn=Y()+500,il&&pt()))}function he(e,t){var n=e.callbackNode;Zc(e,t);var r=Or(e,e===Z?b:0);if(r===0)n!==null&&Yi(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Yi(n),t===1)e.tag===0?Jd(Ds.bind(null,e)):ba(Ds.bind(null,e)),Qd(function(){!(L&6)&&pt()}),n=null;else{switch(_a(r)){case 1:n=Xo;break;case 4:n=Ea;break;case 16:n=Lr;break;case 536870912:n=Aa;break;default:n=Lr}n=Zu(n,Vu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Vu(e,t){if(Ar=-1,Cr=0,L&6)throw Error(g(327));var n=e.callbackNode;if(Xt()&&e.callbackNode!==n)return null;var r=Or(e,e===Z?b:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Zr(e,r);else{t=r;var l=L;L|=2;var o=Qu();(Z!==e||b!==t)&&(Fe=null,nn=Y()+500,Tt(e,t));do try{vf();break}catch(s){Yu(e,s)}while(!0);ai(),Kr.current=o,L=l,Q!==null?t=0:(Z=null,b=0,t=K)}if(t!==0){if(t===2&&(l=so(e),l!==0&&(r=l,t=Mo(e,l))),t===1)throw n=Qn,Tt(e,0),be(e,r),he(e,Y()),n;if(t===6)be(e,r);else{if(l=e.current.alternate,!(r&30)&&!yf(l)&&(t=Zr(e,r),t===2&&(o=so(e),o!==0&&(r=o,t=Mo(e,o))),t===1))throw n=Qn,Tt(e,0),be(e,r),he(e,Y()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(g(345));case 2:vt(e,ue,Fe);break;case 3:if(be(e,r),(r&130023424)===r&&(t=xi+500-Y(),10<t)){if(Or(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ie(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=yo(vt.bind(null,e,ue,Fe),t);break}vt(e,ue,Fe);break;case 4:if(be(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var i=31-ze(r);o=1<<i,i=t[i],i>l&&(l=i),r&=~o}if(r=l,r=Y()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*mf(r/1960))-r,10<r){e.timeoutHandle=yo(vt.bind(null,e,ue,Fe),r);break}vt(e,ue,Fe);break;case 5:vt(e,ue,Fe);break;default:throw Error(g(329))}}}return he(e,Y()),e.callbackNode===n?Vu.bind(null,e):null}function Mo(e,t){var n=_n;return e.current.memoizedState.isDehydrated&&(Tt(e,t).flags|=256),e=Zr(e,t),e!==2&&(t=ue,ue=n,t!==null&&Do(t)),e}function Do(e){ue===null?ue=e:ue.push.apply(ue,e)}function yf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!Oe(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function be(e,t){for(t&=~Ti,t&=~cl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ze(t),r=1<<n;e[n]=-1,t&=~r}}function Ds(e){if(L&6)throw Error(g(327));Xt();var t=Or(e,0);if(!(t&1))return he(e,Y()),null;var n=Zr(e,t);if(e.tag!==0&&n===2){var r=so(e);r!==0&&(t=r,n=Mo(e,r))}if(n===1)throw n=Qn,Tt(e,0),be(e,t),he(e,Y()),n;if(n===6)throw Error(g(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,vt(e,ue,Fe),he(e,Y()),null}function Ii(e,t){var n=L;L|=1;try{return e(t)}finally{L=n,L===0&&(nn=Y()+500,il&&pt())}}function _t(e){tt!==null&&tt.tag===0&&!(L&6)&&Xt();var t=L;L|=1;var n=xe.transition,r=O;try{if(xe.transition=null,O=1,e)return e()}finally{O=r,xe.transition=n,L=t,!(L&6)&&pt()}}function Ei(){pe=$t.current,D($t)}function Tt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Yd(n)),Q!==null)for(n=Q.return;n!==null;){var r=n;switch(oi(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Hr();break;case 3:en(),D(de),D(le),pi();break;case 5:hi(r);break;case 4:en();break;case 13:D(F);break;case 19:D(F);break;case 10:ui(r.type._context);break;case 22:case 23:Ei()}n=n.return}if(Z=e,Q=e=ut(e.current,null),b=pe=t,K=0,Qn=null,Ti=cl=Ct=0,ue=_n=null,kt!==null){for(t=0;t<kt.length;t++)if(n=kt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}n.pending=r}kt=null}return e}function Yu(e,t){do{var n=Q;try{if(ai(),xr.current=Gr,Qr){for(var r=B.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Qr=!1}if(At=0,J=G=B=null,An=!1,$n=0,Si.current=null,n===null||n.return===null){K=1,Qn=t,Q=null;break}e:{var o=e,i=n.return,s=n,a=t;if(t=b,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,m=s,p=m.tag;if(!(m.mode&1)&&(p===0||p===11||p===15)){var h=m.alternate;h?(m.updateQueue=h.updateQueue,m.memoizedState=h.memoizedState,m.lanes=h.lanes):(m.updateQueue=null,m.memoizedState=null)}var w=Is(i);if(w!==null){w.flags&=-257,Es(w,i,s,o,t),w.mode&1&&xs(o,c,t),t=w,a=c;var v=t.updateQueue;if(v===null){var k=new Set;k.add(a),t.updateQueue=k}else v.add(a);break e}else{if(!(t&1)){xs(o,c,t),Ai();break e}a=Error(g(426))}}else if(H&&s.mode&1){var R=Is(i);if(R!==null){!(R.flags&65536)&&(R.flags|=256),Es(R,i,s,o,t),ii(tn(a,s));break e}}o=a=tn(a,s),K!==4&&(K=2),_n===null?_n=[o]:_n.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var d=_u(o,a,t);gs(o,d);break e;case 1:s=a;var u=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof u.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(st===null||!st.has(f)))){o.flags|=65536,t&=-t,o.lanes|=t;var y=Pu(o,s,t);gs(o,y);break e}}o=o.return}while(o!==null)}Ku(n)}catch(T){t=T,Q===n&&n!==null&&(Q=n=n.return);continue}break}while(!0)}function Qu(){var e=Kr.current;return Kr.current=Gr,e===null?Gr:e}function Ai(){(K===0||K===3||K===2)&&(K=4),Z===null||!(Ct&268435455)&&!(cl&268435455)||be(Z,b)}function Zr(e,t){var n=L;L|=2;var r=Qu();(Z!==e||b!==t)&&(Fe=null,Tt(e,t));do try{gf();break}catch(l){Yu(e,l)}while(!0);if(ai(),L=n,Kr.current=r,Q!==null)throw Error(g(261));return Z=null,b=0,K}function gf(){for(;Q!==null;)Gu(Q)}function vf(){for(;Q!==null&&!Uc();)Gu(Q)}function Gu(e){var t=Ju(e.alternate,e,pe);e.memoizedProps=e.pendingProps,t===null?Ku(e):Q=t,Si.current=null}function Ku(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=df(n,t),n!==null){n.flags&=32767,Q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{K=6,Q=null;return}}else if(n=cf(n,t,pe),n!==null){Q=n;return}if(t=t.sibling,t!==null){Q=t;return}Q=t=e}while(t!==null);K===0&&(K=5)}function vt(e,t,n){var r=O,l=xe.transition;try{xe.transition=null,O=1,wf(e,t,n,r)}finally{xe.transition=l,O=r}return null}function wf(e,t,n,r){do Xt();while(tt!==null);if(L&6)throw Error(g(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(g(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(qc(e,o),e===Z&&(Q=Z=null,b=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||mr||(mr=!0,Zu(Lr,function(){return Xt(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=xe.transition,xe.transition=null;var i=O;O=1;var s=L;L|=4,Si.current=null,hf(e,n),Uu(n,e),Hd(po),Rr=!!ho,po=ho=null,e.current=n,pf(n),$c(),L=s,O=i,xe.transition=o}else e.current=n;if(mr&&(mr=!1,tt=e,Jr=l),o=e.pendingLanes,o===0&&(st=null),Qc(n.stateNode),he(e,Y()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Xr)throw Xr=!1,e=Ro,Ro=null,e;return Jr&1&&e.tag!==0&&Xt(),o=e.pendingLanes,o&1?e===jo?Pn++:(Pn=0,jo=e):Pn=0,pt(),null}function Xt(){if(tt!==null){var e=_a(Jr),t=xe.transition,n=O;try{if(xe.transition=null,O=16>e?16:e,tt===null)var r=!1;else{if(e=tt,tt=null,Jr=0,L&6)throw Error(g(331));var l=L;for(L|=4,S=e.current;S!==null;){var o=S,i=o.child;if(S.flags&16){var s=o.deletions;if(s!==null){for(var a=0;a<s.length;a++){var c=s[a];for(S=c;S!==null;){var m=S;switch(m.tag){case 0:case 11:case 15:Cn(8,m,o)}var p=m.child;if(p!==null)p.return=m,S=p;else for(;S!==null;){m=S;var h=m.sibling,w=m.return;if(Fu(m),m===c){S=null;break}if(h!==null){h.return=w,S=h;break}S=w}}}var v=o.alternate;if(v!==null){var k=v.child;if(k!==null){v.child=null;do{var R=k.sibling;k.sibling=null,k=R}while(k!==null)}}S=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,S=i;else e:for(;S!==null;){if(o=S,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Cn(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,S=d;break e}S=o.return}}var u=e.current;for(S=u;S!==null;){i=S;var f=i.child;if(i.subtreeFlags&2064&&f!==null)f.return=i,S=f;else e:for(i=u;S!==null;){if(s=S,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:ul(9,s)}}catch(T){U(s,s.return,T)}if(s===i){S=null;break e}var y=s.sibling;if(y!==null){y.return=s.return,S=y;break e}S=s.return}}if(L=l,pt(),De&&typeof De.onPostCommitFiberRoot=="function")try{De.onPostCommitFiberRoot(tl,e)}catch{}r=!0}return r}finally{O=n,xe.transition=t}}return!1}function Hs(e,t,n){t=tn(n,t),t=_u(e,t,1),e=it(e,t,1),t=ie(),e!==null&&(Kn(e,1,t),he(e,t))}function U(e,t,n){if(e.tag===3)Hs(e,e,n);else for(;t!==null;){if(t.tag===3){Hs(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(st===null||!st.has(r))){e=tn(n,e),e=Pu(t,e,1),t=it(t,e,1),e=ie(),t!==null&&(Kn(t,1,e),he(t,e));break}}t=t.return}}function kf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ie(),e.pingedLanes|=e.suspendedLanes&n,Z===e&&(b&n)===n&&(K===4||K===3&&(b&130023424)===b&&500>Y()-xi?Tt(e,0):Ti|=n),he(e,t)}function Xu(e,t){t===0&&(e.mode&1?(t=or,or<<=1,!(or&130023424)&&(or=4194304)):t=1);var n=ie();e=Qe(e,t),e!==null&&(Kn(e,t,n),he(e,n))}function Sf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Xu(e,n)}function Tf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(g(314))}r!==null&&r.delete(t),Xu(e,n)}var Ju;Ju=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||de.current)ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ce=!1,uf(e,t,n);ce=!!(e.flags&131072)}else ce=!1,H&&t.flags&1048576&&eu(t,Wr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Er(e,t),e=t.pendingProps;var l=Zt(t,le.current);Kt(t,n),l=yi(null,t,r,e,l,n);var o=gi();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,fe(r)?(o=!0,Fr(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,di(t),l.updater=al,t.stateNode=l,l._reactInternals=t,xo(t,r,e,n),t=Ao(null,t,r,!0,o,n)):(t.tag=0,H&&o&&li(t),oe(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Er(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=If(r),e=_e(r,e),l){case 0:t=Eo(null,t,r,e,n);break e;case 1:t=_s(null,t,r,e,n);break e;case 11:t=As(null,t,r,e,n);break e;case 14:t=Cs(null,t,r,_e(r.type,e),n);break e}throw Error(g(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:_e(r,l),Eo(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:_e(r,l),_s(e,t,r,l,n);case 3:e:{if(Ou(t),e===null)throw Error(g(387));r=t.pendingProps,o=t.memoizedState,l=o.element,iu(e,t),Vr(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=tn(Error(g(423)),t),t=Ps(e,t,r,n,l);break e}else if(r!==l){l=tn(Error(g(424)),t),t=Ps(e,t,r,n,l);break e}else for(me=ot(t.stateNode.containerInfo.firstChild),ye=t,H=!0,Ne=null,n=lu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qt(),r===l){t=Ge(e,t,n);break e}oe(e,t,r,n)}t=t.child}return t;case 5:return su(t),e===null&&ko(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,mo(r,l)?i=null:o!==null&&mo(r,o)&&(t.flags|=32),Lu(e,t),oe(e,t,i,n),t.child;case 6:return e===null&&ko(t),null;case 13:return Ru(e,t,n);case 4:return fi(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=bt(t,null,r,n):oe(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:_e(r,l),As(e,t,r,l,n);case 7:return oe(e,t,t.pendingProps,n),t.child;case 8:return oe(e,t,t.pendingProps.children,n),t.child;case 12:return oe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,i=l.value,j(Ur,r._currentValue),r._currentValue=i,o!==null)if(Oe(o.value,i)){if(o.children===l.children&&!de.current){t=Ge(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){i=o.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=$e(-1,n&-n),a.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?a.next=a:(a.next=m.next,m.next=a),c.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),So(o.return,n,t),s.lanes|=n;break}a=a.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(g(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),So(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}oe(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Kt(t,n),l=Ie(l),r=r(l),t.flags|=1,oe(e,t,r,n),t.child;case 14:return r=t.type,l=_e(r,t.pendingProps),l=_e(r.type,l),Cs(e,t,r,l,n);case 15:return Nu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:_e(r,l),Er(e,t),t.tag=1,fe(r)?(e=!0,Fr(t)):e=!1,Kt(t,n),Cu(t,r,l),xo(t,r,l,n),Ao(null,t,r,!0,e,n);case 19:return ju(e,t,n);case 22:return zu(e,t,n)}throw Error(g(156,t.tag))};function Zu(e,t){return Ia(e,t)}function xf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Te(e,t,n,r){return new xf(e,t,n,r)}function Ci(e){return e=e.prototype,!(!e||!e.isReactComponent)}function If(e){if(typeof e=="function")return Ci(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Qo)return 11;if(e===Go)return 14}return 2}function ut(e,t){var n=e.alternate;return n===null?(n=Te(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function _r(e,t,n,r,l,o){var i=2;if(r=e,typeof e=="function")Ci(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Ot:return xt(n.children,l,o,t);case Yo:i=8,l|=8;break;case Ql:return e=Te(12,n,t,l|2),e.elementType=Ql,e.lanes=o,e;case Gl:return e=Te(13,n,t,l),e.elementType=Gl,e.lanes=o,e;case Kl:return e=Te(19,n,t,l),e.elementType=Kl,e.lanes=o,e;case sa:return dl(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case oa:i=10;break e;case ia:i=9;break e;case Qo:i=11;break e;case Go:i=14;break e;case Je:i=16,r=null;break e}throw Error(g(130,e==null?e:typeof e,""))}return t=Te(i,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function xt(e,t,n,r){return e=Te(7,e,r,t),e.lanes=n,e}function dl(e,t,n,r){return e=Te(22,e,r,t),e.elementType=sa,e.lanes=n,e.stateNode={isHidden:!1},e}function $l(e,t,n){return e=Te(6,e,null,t),e.lanes=n,e}function Vl(e,t,n){return t=Te(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ef(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Il(0),this.expirationTimes=Il(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Il(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function _i(e,t,n,r,l,o,i,s,a){return e=new Ef(e,t,n,s,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Te(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},di(o),e}function Af(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Lt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function qu(e){if(!e)return dt;e=e._reactInternals;e:{if(Nt(e)!==e||e.tag!==1)throw Error(g(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(fe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(g(171))}if(e.tag===1){var n=e.type;if(fe(n))return qa(e,n,t)}return t}function bu(e,t,n,r,l,o,i,s,a){return e=_i(n,r,!0,e,l,o,i,s,a),e.context=qu(null),n=e.current,r=ie(),l=at(n),o=$e(r,l),o.callback=t??null,it(n,o,l),e.current.lanes=l,Kn(e,l,r),he(e,r),e}function fl(e,t,n,r){var l=t.current,o=ie(),i=at(l);return n=qu(n),t.context===null?t.context=n:t.pendingContext=n,t=$e(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=it(l,t,i),e!==null&&(Le(e,l,i,o),Tr(e,l,i)),i}function qr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Fs(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Pi(e,t){Fs(e,t),(e=e.alternate)&&Fs(e,t)}function Cf(){return null}var ec=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ni(e){this._internalRoot=e}hl.prototype.render=Ni.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(g(409));fl(e,t,null,null)};hl.prototype.unmount=Ni.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;_t(function(){fl(null,e,null,null)}),t[Ye]=null}};function hl(e){this._internalRoot=e}hl.prototype.unstable_scheduleHydration=function(e){if(e){var t=za();e={blockedOn:null,target:e,priority:t};for(var n=0;n<qe.length&&t!==0&&t<qe[n].priority;n++);qe.splice(n,0,e),n===0&&Oa(e)}};function zi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function pl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Bs(){}function _f(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var c=qr(i);o.call(c)}}var i=bu(t,r,e,0,null,!1,!1,"",Bs);return e._reactRootContainer=i,e[Ye]=i.current,Hn(e.nodeType===8?e.parentNode:e),_t(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var c=qr(a);s.call(c)}}var a=_i(e,0,!1,null,null,!1,!1,"",Bs);return e._reactRootContainer=a,e[Ye]=a.current,Hn(e.nodeType===8?e.parentNode:e),_t(function(){fl(t,a,n,r)}),a}function ml(e,t,n,r,l){var o=n._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var s=l;l=function(){var a=qr(i);s.call(a)}}fl(t,i,e,l)}else i=_f(n,t,e,l,r);return qr(i)}Pa=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=wn(t.pendingLanes);n!==0&&(Jo(t,n|1),he(t,Y()),!(L&6)&&(nn=Y()+500,pt()))}break;case 13:_t(function(){var r=Qe(e,1);if(r!==null){var l=ie();Le(r,e,1,l)}}),Pi(e,1)}};Zo=function(e){if(e.tag===13){var t=Qe(e,134217728);if(t!==null){var n=ie();Le(t,e,134217728,n)}Pi(e,134217728)}};Na=function(e){if(e.tag===13){var t=at(e),n=Qe(e,t);if(n!==null){var r=ie();Le(n,e,t,r)}Pi(e,t)}};za=function(){return O};La=function(e,t){var n=O;try{return O=e,t()}finally{O=n}};lo=function(e,t,n){switch(t){case"input":if(Zl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=ol(r);if(!l)throw Error(g(90));ua(r),Zl(r,l)}}}break;case"textarea":da(e,n);break;case"select":t=n.value,t!=null&&Vt(e,!!n.multiple,t,!1)}};va=Ii;wa=_t;var Pf={usingClientEntryPoint:!1,Events:[Jn,Dt,ol,ya,ga,Ii]},yn={findFiberByHostInstance:wt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Nf={bundleType:yn.bundleType,version:yn.version,rendererPackageName:yn.rendererPackageName,rendererConfig:yn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ke.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ta(e),e===null?null:e.stateNode},findFiberByHostInstance:yn.findFiberByHostInstance||Cf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yr.isDisabled&&yr.supportsFiber)try{tl=yr.inject(Nf),De=yr}catch{}}ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pf;ve.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zi(t))throw Error(g(200));return Af(e,t,null,n)};ve.createRoot=function(e,t){if(!zi(e))throw Error(g(299));var n=!1,r="",l=ec;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=_i(e,1,!1,null,null,n,!1,r,l),e[Ye]=t.current,Hn(e.nodeType===8?e.parentNode:e),new Ni(t)};ve.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(g(188)):(e=Object.keys(e).join(","),Error(g(268,e)));return e=Ta(t),e=e===null?null:e.stateNode,e};ve.flushSync=function(e){return _t(e)};ve.hydrate=function(e,t,n){if(!pl(t))throw Error(g(200));return ml(null,e,t,!0,n)};ve.hydrateRoot=function(e,t,n){if(!zi(e))throw Error(g(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",i=ec;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=bu(t,null,e,1,n??null,l,!1,o,i),e[Ye]=t.current,Hn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new hl(t)};ve.render=function(e,t,n){if(!pl(t))throw Error(g(200));return ml(null,e,t,!1,n)};ve.unmountComponentAtNode=function(e){if(!pl(e))throw Error(g(40));return e._reactRootContainer?(_t(function(){ml(null,null,e,!1,function(){e._reactRootContainer=null,e[Ye]=null})}),!0):!1};ve.unstable_batchedUpdates=Ii;ve.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!pl(n))throw Error(g(200));if(e==null||e._reactInternals===void 0)throw Error(g(38));return ml(e,t,n,!1,r)};ve.version="18.3.1-next-f1338f8080-20240426";function tc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tc)}catch(e){console.error(e)}}tc(),ta.exports=ve;var zf=ta.exports,nc,Ws=zf;nc=Ws.createRoot,Ws.hydrateRoot;function Lf({title:e,author:t}){return A.jsx("section",{className:"snap-section",children:A.jsxs("div",{className:"title-card",children:[A.jsx("h1",{children:e}),A.jsxs("p",{children:["by ",A.jsx("strong",{children:t})]})]})})}function Us({text:e,pages:t,charsPerPage:n=2400,title:r,linesPerPage:l=24}){const o=a=>{const c=a.split(/\n/).map(p=>p.trim()),m=[];for(let p=0;p<c.length;p++){let h=c[p];if(p<c.length-1){const w=c[p+1];if(/-$/.test(h)){h=h.replace(/-$/,"")+w,p++,m.push(h);continue}if(/[.?!;:,–—"'\)]$/.test(h)||/^[A-Z0-9"'\(]/.test(w))m.push(h);else{h=h+" "+w,p++,c[p]=h;continue}}else m.push(h)}return m.join(`
`)},i=el.useMemo(()=>{if(t&&t.length)return t;const m=(v=>(v||"").replace(/--PAGE_BREAK--/g,"").replace(/\r/g,"").replace(/\n{3,}/g,`

`))(e).split(/\n\n+/).map(v=>o(v)),p=[];for(const v of m){const k=v.split(/\n/).map(R=>R.trim());for(const R of k)p.push(R);p.push("")}p.length&&p[p.length-1]===""&&p.pop();const h=[];let w=0;if(r){const v=[];for(v.push(r);v.length<l&&w<p.length;)v.push(p[w++]);h.push(v.join(`
`))}for(;w<p.length;){const v=[];for(;v.length<l&&w<p.length;)v.push(p[w++]);h.push(v.join(`
`))}return h},[e,t,l,r]),s=a=>(a||"").split(/\n\n+/).map(c=>`<p>${c.replace(/\n/g,"<br/>")}</p>`).join("");return A.jsx(A.Fragment,{children:i.map((a,c)=>A.jsx("section",{className:"snap-section","aria-label":`page ${c+1}`,children:A.jsx("div",{className:"poem-frame text-only",children:A.jsxs("div",{children:[c===0&&r?A.jsx("h2",{style:{marginTop:0},children:r}):null,A.jsx("div",{className:"poem-text columns",dangerouslySetInnerHTML:{__html:s(a)}})]})})},c))})}function Of({src:e,alt:t}){return e?e.toLowerCase().endsWith(".mp4")?A.jsx("video",{className:"illustration",src:`/illustrations/${e}`,autoPlay:!0,loop:!0,muted:!0,playsInline:!0}):A.jsx("img",{className:"illustration",src:`/illustrations/${e}`,alt:t||""}):null}function Rf({poem:e}){const t=!!e.illustration,n=o=>{const i=o.split(/\n/).map(a=>a.trim()),s=[];for(let a=0;a<i.length;a++){let c=i[a];if(a<i.length-1){const m=i[a+1];if(/-$/.test(c)){c=c.replace(/-$/,"")+m,a++,s.push(c);continue}if(/[.?!;:,–—"'\)]$/.test(c)||/^[A-Z0-9"'\(]/.test(m))s.push(c);else{c=c+" "+m,a++,i[a]=c;continue}}else s.push(c)}return s.join(`
`)},r=o=>(o||"").replace(/--PAGE_BREAK--/g,"").replace(/\r/g,"").replace(/\n{3,}/g,`

`),l=o=>r(o).split(/\n\n+/).map(i=>`<p>${n(i).replace(/\n/g,"<br/>")}</p>`).join("");if(t){const o=e.pages&&e.pages[0]||e.text&&e.text.split(`

`).slice(0,6).join(`

`)||"",i=l(o),s=e.pages?e.pages.slice(1):e.text?e.text.split(`

`).slice(6).join(`

`):"";return A.jsxs(A.Fragment,{children:[A.jsx("section",{className:"snap-section",children:A.jsxs("div",{className:"poem-frame with-illustration",children:[A.jsx(Of,{src:e.illustration,alt:e.title}),A.jsxs("div",{children:[A.jsx("h2",{style:{marginTop:0},children:e.title}),A.jsx("div",{className:"poem-text",dangerouslySetInnerHTML:{__html:i}})]})]})}),e.pages?e.pages.slice(1).map((a,c)=>A.jsx("section",{className:"snap-section",children:A.jsx("div",{className:"poem-frame text-only",children:A.jsx("div",{className:"poem-text columns",dangerouslySetInnerHTML:{__html:l(a)}})})},c)):e.text?A.jsx(Us,{text:s}):null]})}if(e.id==="foreword"){const o=(e.text||"").replace(/--PAGE_BREAK--/g," ").replace(/\s+/g," ").trim();return A.jsx(A.Fragment,{children:A.jsx("section",{className:"snap-section",children:A.jsx("div",{className:"poem-frame text-only",children:A.jsxs("div",{children:[A.jsx("h2",{style:{marginTop:0},children:e.title}),A.jsx("div",{className:"poem-text foreword",dangerouslySetInnerHTML:{__html:`<p>${o}</p>`}})]})})})})}return e.pages?A.jsxs(A.Fragment,{children:[A.jsx("section",{className:"snap-section",children:A.jsx("div",{className:"poem-frame text-only",children:A.jsxs("div",{children:[A.jsx("h2",{style:{marginTop:0},children:e.title}),A.jsx("div",{className:"poem-text columns",dangerouslySetInnerHTML:{__html:l(e.pages[0])}})]})})}),e.pages.slice(1).map((o,i)=>A.jsx("section",{className:"snap-section",children:A.jsx("div",{className:"poem-frame text-only",children:A.jsx("div",{className:"poem-text columns",dangerouslySetInnerHTML:{__html:l(o)}})})},i))]}):e.text?A.jsx(Us,{text:e.text,title:e.title}):null}const jf=`The Idylls is about ghosts.
The form owes itself to Theocritus, who pioneered the literary genre in
3rd-century BCE Sicily. His idylls were fragments of agrarian life—goatherds,
rival singers, the rough textures and small dramas of the countryside. Quiet,
earthy, often mournful.
To him I owe the form. And only spiritually, the content. Most of these are
reimaginings – adaptations in a different key. Where he had the pastoral, I have
the post-modern. His hills are my boroughs.
We differ geographically. These idylls are about New York City.
They’re about some of my friends. Or versions of them. Or strangers I’ve
invented as I walk past them on the street, or long to know them. They’re
attempts to grasp at a version of the city I always dreamed of but never quite
found – a city humming with memory and meaning, late-night heartbreaks
and overheard monologues, half-finished songs and subway revelations.
A city full of ghosts, and the people who try to love them.`,Mf={id:"foreword",title:"Foreword",author:"George Popovic",illustration:null,text:jf},Df=`"Funny seeing you here"
Ted lumbers over the terraced steps
Stops and drops onto one knee
Undoing the clasps of his guitar case,
"Ah, look, the man with the blue guitar,"
Says the busker,
"'Play us a tune beyond ourselves',
I'm done for the day,
And it's not my usual spot anyway."
Shutting the saxophone case with a stomp.
Ted sits down on the worn park bench
The August afternoon fading into Autumn evening
"What do you want to hear?"
The busker –
"Whatever happened to Danny?
Haven't seen him around
The last few weeks.
His spot over there,
By the obelisk,
You know –"
"Yeah,"
Ted sucked his teeth,
"He, uhh,"
His capo in his left hand


He caps the neck on the fifth fret
"He overdosed."
A bird chirps on a branch overhead
"Huh. Jesus."
The busker straightens up
Sobered up by the news
"Huh."
A narrowed look
A little more somber, this time
"He was young."
"Yep."
A couple of joggers pass by
Skimming the tension off the conversation
The clock on the skyline of 14th street
A digital plexus, ticks away
Somewhere down Broadway the sun is sinking
"Sing something for him, then,"
Ted wipes his brow with the back of his hand
Loosens up
Begins to strum
Something hollow
Something hallow
A melody somewhere distant
Like a face or name you see in passing
Tapping his foot
Keeping time
Humming beneath his breath


"There was this one song
Danny was working on
Back in May
'I'll be done by the end of the summer,'
He said
You remember that riff?"
The busker's eyes draw the vacant space by the obelisk,
"D minor..
B flat..
F–
something like that,"
"He said he'd put lyrics to it
It had that – that –"
He picks the strings with his right hand
As his left slides up and down the neck
"Yeah, it did,"
"And it was about that girl,
Brunette, 5'2",
Cooper Union MFA –
He'd watch her walk down Broadway,
Day in, day out
Back up, take the L to Brooklyn –
what was her name?"
The busker squints, imagining her silhouette
In the distance,
"Faye?"

`,Hf={id:"idyll-i",title:"Idyll I",author:"George Popovic",illustration:null,text:Df},Ff=`Faye pinches the phone between her ear
And the crook of her neck,
"Did I tell you I tried to hire an Etsy witch?"
An uncomfortable laugh on the other line,
"Like, a witch off of Etsy?"
– "Ya."
A little incredulous, with a hint of gravity –
"Huh."
A drawn out inhale –
"Did it work?"
– "You know, I saw the price,
And I thought:
'Fuck it, we'll do it live.'"
*
Faye scrolls down the page,
A heading
"Binding Spell to Get Back Your Ex"
On Pinterest
The text
Advises working within the planetary hours
When the moon waxes
When it is full
Venus well-aspected
Pluto in transit


"On a piece of paper
Write a letter
Address it to yourself
Put on the voice of
The one who left
Say all of the things they would say
Were they in the room with you
Say they're sorry, say they're sad
Say the words that bind them to you."
Faye digs through her backpack for a Muji pen
And an unchristened moleskine.
She musters most of her concentration
On the page (not very much)
In her mind's eye, Aidan, there
In front of her
Standing
His arms hang limp at his sides
In his clueless way of carrying himself
"Hey, Faye.
I'm really sorry."
Aidan (a Sagittarius, Faye, a Pisces)
Even in her mind
Was never very eloquent –
"I didn't mean to hurt you when I said, like,
You should move to Brooklyn


Get a better job
Stop being so stuck on your family
Like, I really need someone who's mature
Like, career-oriented (he has a finance job),
Wears more make-up
Like, you really let yourself go
But I love you
And I want to come back
And make this work."
She gets up, letter in hand, bisects the room and
Sitting across from the shell of herself she reads
A deluded, hopeless confession aloud
In an alto, slightly caricatured
San Diego vocal fry –
"Hey, Faye,
I'm really sorry,
I didn't mean to hurt you..."
It is, suddenly, all too human
And like that Faye begins to sob
Robbed of her years, dazed,
Wounded,
Sifting simultaneously through the words
Looking for something to make worthwhile
The tit-for-tat months-long death knell
She never knew was unfolding
And every other sentence she chokes up on


The geometry of his face
The melody of his voice
And at once she is a beam of light shining through
The surface of
A pail of water shaken through
Splashing this way, that way
Pale in the face of
His glowing apparition
She overflows
And all at once
She is composed
Stuffs herself back in at the seams
Douses the letter with
The cologne he bought before he left
She gets up, goes over to the kitchen window where the fire escape is
Climbs out and sits atop the rusting skyline
Of the November evening
Sparks a lighter
Lights the corner of the letter
Aflame in the electric-glow evening of BedStuy
Watching in a remorseful panic
As it burns all the way down
A molten blossom
To the sidewalk below
*


There is a long pause on the phone –
"Faye? Did it work?"
A blue note
– "Not exactly."

`,Bf={id:"idyll-ii",title:"Idyll II",author:"George Popovic",illustration:null,text:Ff},Wf=`The phone rings out
As he walks along the Brooklyn Bridge
Below the East River shimmers
And kicks up petulant waves beneath
The lone light of the moon above
A beep
"Hey, Amara!
I was just calling to, uhh..."
He tugs the collar of his coat up
Looks down at the water
Shoves his hands deeper into
His pockets as if
To fish out –
"Call me back!"
*
He walks along MacDougal Street
Leaving behind the long-stretched shadow
Of the arch in Washington Square
That supports the weight of the sky
The heat breaks as the sun
Abandons its aestival course
He dials her number
It rings


And rings
And rings
And
A beep –
"Amara, hey...
Listen.
Can we talk?
I haven't heard from you in weeks
And I keep
Thinking like we didn't really get
The chance
To talk about us..."
He pauses
"All you had to do was say the word
If you'd said
Something
At least
Then I'd understand
Like all you had to say
That night in Washington Square was
'Hey,
I'm not in a place
Where I can give you what you want
Or really what you need
I like you
I like this
But it's becoming too much for me


Right now
And I'm not
Saying 'Never'
Just 'Not now'
'Not like this'
Okay?'
And it'd be okay
And I'd be okay..."
He passes Cafe Reggio and sees
The silhouette of himself and her
The auburn of her hair
In a bun as she talks about her time
Translating Ming Dynasty poetry
For her MA at Bard
"And I wouldn't be thinking
'I moved to FiDi to look at fucking
Spreadsheets bursting with
Fund umbrellas
Shareclasses
Because a girl I met upstate
Lured me down here
Into the central circle of
White-collar Hell
And then
Ghosted me"


And she leans in and asks
"Are you still reading that
Anne Carson book I got you?
'Autobiography of Red’?
Or do you not like women
Who don't think you're smart
And interesting?"
*
On the corner of Metropolitan
He sits on a ledge in the back patio of
A pool-supply store turned haven to
Indie musicians who never made it
Finance-bros who've become sentient
The odd art student who got lost
On their way back to the East Village
The crowd surges at 2 AM on a Saturday
He surveys the room
And after the fourth or fifth drink
Amara walks in
They lock eyes in the tumult
And he is seen right through
He doesn’t call out
Doesn't say 'Hello'


But smiles a sheepish half-small
And looks away
Outside
As he stumbles away from the bar
He dials a number
It rings
And rings –
"Hey," he says.
"Hey?"
Says a voice
"What's up?"
Half-asleep on the other end
"You good?"
"Yeah," he says,
"You were right, Rowan."
Rowan scoffs
"You gave it your best shot
But it's time to let go –
You owe yourself as much"

`,Uf={id:"idyll-iii",title:"Idyll III",author:"George Popovic",illustration:null,text:Wf},$f=`"It always begins
And ends
With long walks
The kind where you walk
The length of Central Park
Or Riverside Drive,"
Says Danny
"That's right", says Ted
His guitar case rocks to and fro
On his back with every step
"Is this it?"
"I... think... so..."
Danny, checking his phone
Squinting into the whitewash blindness
His pupils the heads of pins
They ascend the steps to the manor house
Rick greets them at the door
He is dressed in a white button down
The felt on the lapel of his suit jacket indicates
That Ted and Danny are
Wildly underdressed
In their black turtlenecks


"Hey, good to see you, man,
Hey, nice to meet you,
Come in – there's wine in the back"
Past the cocktail dresses
Charcoal suits with no ties
They shuffle disoriented
Surrounded by international heirlooms
"That's a Vermeer,"
Someone whispers loudly over a pinot noir
They smear the marble floors of the kitchen
With the cuffs of their grass-bled khakis
"Red or white?" Asks the waiter
"Wh-red..." fumbles Danny
Ted asks if the vintage is from southern France
"It's from Northern Spain"
"Oh"
They both begin drinking for effect
"Thank you all for coming"
Rick who can cast a spell on a room
Herds the cats in their midtown suits to their seats
"Tonight I have here Anna
She curates
The Medici stringed instrument collection
Currently on display
At the Met
On loan


From the Uffizi Gallery
In Florence"
Anna discourses on
The evolution of stringed instruments
From the middle ages through
The Italian Renaissance
"Is that a lute?" whispers Danny
Following the discourse Rick
Sits at a baby Grand
In the center of the room
Around which are seated
Students from Juilliard
Lawyers
Doctors
This AI researcher at
[Big Name Tech Company]
This guy who is a portfolio manager at
[Big Name Investment Firm]
The several Tinder dates he's been on
That he's been trying to keep apart
All night
That guy or this girl whom you recognize
But are loathe to say the wrong name
So you linger on questions and wait
For them to be addressed
By someone else


"Get this," Danny says in Ted's ear
Danny was once blinded by Rick
In a TriBeca loft
When he lay waste
To the room
With his performance of Mad Rush
The long soporific repetition punctuated
By bursts of airy assonance circles
Back to delay and relay swirls
Haste with tedium
Breathless
In the light of the evening sun
And now Rick
No longer blinds
but curates
Adjusts the light
His performance is the room itself
As he weaves through
Venetian Boat Song
Op. 19, No. 6
You see yourself looking through
A slit
In the wall of
The Bridge of Sighs
At the waterfront of
The Palazzo Ducale


He plays the guests
Like oscillating arpeggios
Ted watches from the periphery
Still rocking slightly
His guitar case creaking
Like a guilty conscience
Danny has stopped checking his phone
The battery died hours ago
So did his hope of
whatever he was hoping for
In the aftermath of the performance
The guests linger on the walls
Like salamanders
"What do you do?"
"Oh how do you know Rick?"
"Do you play anything?"
Ted begins to introduce himself as Rick
The juxtaposition of
The broke Juilliard student
And the CEO of a well-known fitness company
Class disparity in miniscule
Is overturned
By her relative finesse on the piano
Chiaroscuro is obscured
By a common bond
Of quiet devotion


Restless internal
To Euterpe
The Juilliard girl—
Yes, she plays the closing piece
A short, clipped étude
By a forgotten student of Scarlatti
Which somehow says more
Than the long lecture
Or the wine
Or the Vermeer looking down at you
Or Rick himself
A pause
As she lays flat
The final keys
Then scattered clapping
Like a breeze that scatters
Dying leaves
And then erupts
Into a whirlwind
"Did you see her hands?"
Danny says, finally
"Like spiders. Or angels."
*


It is long after the performance
Everyone's collars are unbuttoned
Ties undone
Sleeves rolled up
Empty wine bottles scattered
Atop the kitchen counters
Danny is performing smalltalk
With a waifish cocktail dress
Mentioning "scordatura"
As if he knows what that means
As Ted
Stares at the shrubs in the garden
Through puffs of cigarette smoke
There is a knock on the door
"Rick? Where's Rick?"
Demands a voice
It is suddenly pandemonium
As a band of ten or fifteen storm the house
Led by Alex
With violets in her hair
"Rick get the fuck out here!"
They crowd about the drawing room
And the scene collapses in on itself
As they laugh and cajole about the tables


And the late hours are consumed
By foment and argument
And sudden riffing off
Each others lines or notes
As they play and sing and yell
Someone spills wine on the Vermeer
(Which is fine
It wasn't real anyway)
Alex kicks off her shoes
And lobs Ted's guitar
Into someone's lap
"Play something real," she says
"None of this 'classical' shit."
She kisses one of Rick's exes
Someone cheers
Rick appears, finally
The spell broken
Shirt half-unbuttoned
Barefoot like a penitent
The Juilliard girl is on the floor now
Playing something feral on the violin
Her bow splitting in the fray


Someone knocks over a table
Shatters a vase
Rick is unfazed
All the tidy distinctions—
Artist and patron
Host and guest
Performer and observer—
Collapse in crescendo
And for a moment
The night is tuned
In perfect scordatura
*
Back on Riverside Drive
The sky is a lavender blended
With streaks of gold
The air is crisp as it folds
The grass in sheets
They walk
Along the Hudson
Watch the water run downstream
Past the morning dog walkers
"It always begins
And ends


With long walks..."
Says Danny

`,Vf={id:"idyll-iv",title:"Idyll IV",author:"George Popovic",illustration:null,text:$f},Yf=`"Your eyes are as
The brackish waters
Of Cefalu
Beneath your gaze
Green fear seizes me"
She reads
Almost turns green herself
Not with fear but from
The second-hand embarrassment of
The naive audacity inhabiting
Her hopeless amator –
Amateur poet that he is:
"Yours, yours, yours,
Polyphemus"
"Cefalu," she scoffs
They went to Rockaway once –
He got sunburned on the boardwalk
And whined the whole way back
Her cursor lingers on the screen
She clicks below the body and writes:


"You loved a girl who never existed.
Sometimes I miss her.”
The cursor blinks
She lingers there, for a second,
Trying to recall a line he wrote once
Then spills out
“Your prettiest remorse,
Galatea"
She hits 'Send'
Imagining him
White-collared
Maybe shirtless
Untrimmed in grey
Sweltering in an aging co-op
Romanticising Werther
Retaliating Theocritus
At thirty-seven
Outside her window the N train
Rumbles into the station
There was a time when she lived
On 48th and Broadway
A few blocks away from Schoenfeld theatre


Wishful thinking in hindsight
She got her break
On an off-Broadway production of
The Last Five Years
(Not that it ever belonged on-Broadway)
Cathy, of course
Of course, Cathy
Manic hope in a whiny vessel Cathy
Spiral-bound backwards as she sings
The audience falls in love with
An image of her
A story that only makes sense in hindsight
It's a sad song
But we still sing it;
The best stories are not always
Those that end happily
It happened that
Outside there was a man with flowers
And a box of letters addressed to her
They gather dust in the supply closet of
Her one-bed in Astoria
Over the water by the park hangs
The Hell's Gate bridge


In summer sometimes she lounges there
In a pink floral dress
And takes her students out to sing
On the green grass seas of the evening

`,Qf={id:"idyll-vi",title:"Idyll VI",author:"George Popovic",illustration:null,text:Yf},Gf=`I think I might die
Ascending the orange stairwell
A pigeon flies into me
"Jesus fucking Christ!"
On the side of the overpass
Down the flow of traffic
It's just warehouses out here
With some residential buildings
A pizzeria
A deli
Not a soul in sight save
The Greenpointers
Spilling out of their Ubers
A rusted door swings open
This must be it
This warehouse is a Silenus statue
The outside is industrial decay
On the inside there is the alternate reality of
The edge-case
East village
Not-Dimes-Square
Greenpoint
Fantasy for which I had longed
A band on the first floor


Hypnotic handrums
Stirrs something ancient in my blood
Smooth jazz on the second
The walls of the adjoining rooms are splattered
With paintings and photographs for sale
Margot finds me in the midst of the din
Out of place, my hands in my pockets as I sip
Water from a paper cup
We lock eyes
"Hey! It's been a while!"
I am suddenly at ease
We catch up
It has been a while
We talk around subjects
Epitomize the last several months
I defrost under the red-light lamplight
I ask to see her work, she ushers me into
The adjoining room, into the far right corner
Where four framed photographs are stacked
"It's titanium palladium."
"What's that?"
I watch her greet and be greeted by
Names and faces
It is nice


They are nice
This poet, that photographer
Something about the Vietnam War
I feel like an anthropologist
I am self-conscious
But happy to lurk in her orbit
An unassuming awkward
I am a cardboard silhouette of myself
Shake hands
Smile
Exchange pleasantries
Like tokens or
Micro-transactions
When Nick is there
I sneak a polaroid of them
I keep it in my coat pocket
Watching them is like seeing a negative
They wear matching beanies
"I feel like I can't really be honest about how I feel at these things."
We trade existential ennuis
Like men in their thirties
"Which one do you like?"
A girl looks down a concrete staircase
A white dress, navy bow around her waist


Her feet feel tacked on
Two-dimensional
Stuck on at wrong angles
A blonde in her twenties is gorging herself
In a Chinatown loft
Photo-realistic
About to burst into tears or puke
I am embarrassed in the third person
It is spaghetti (he is the spaghetti guy)
But I am ashamed of being in a body
A woman poses half-naked in a white button down
She strikes something seductive on the bed of
A Marriott or generic middle class hotel chain
There are several schizophrenic
Talentless pieces which
I am too bored to describe
"Chaos is the hypokeimenon of existence!"
I crack
In my Jordan Peterson voice
As we three lounge on a couch in the corner
And peoplewatch for a while
The second floor is a different kind of same
"The vibe is totally different up here."


Someone's beat up Fender warps
As a saxophone croons
And the evanescent patrons mill about
"This is my wife's first show."
"Are you an artist?"
"I work in sales
But I dabble in watercolour."
He offers me a hit from his wax pen
I regret not taking him up on it
After some time we
Walk to the G
On Greenpoint Ave
"I think I'll shuffle on a while"
We exchange our goodbyes
I watch them descend the steps to the G
Back towards civilization
In the East Village
Waiting street-level for the fading rumble
And I then stumble on
Along Greenpoint Ave
Greenpoint is a Silenus statue

`,Kf={id:"idyll-vii",title:"Idyll VII",author:"George Popovic",illustration:null,text:Gf},Xf=`8:15 at the WeWork on Varick Street
Milo taps away at his Macbook
Dark mode
Neon lines
Arcane characters
Fill the screen
His headphones clamped around his ears
They block out the world out while he
Churns through his
Spotify playlist
A clap on the shoulder –
Alex.
"Alex, man!"
Milo tugs the headphones off and
Lets them hang around his neck
"Jeez. You look wrecked."
Alex pulls up a chair next to Milo
At the dinner table turned hotdesk
White collar purgatory
They are the only ones in the railroad style
Workspace
The early morning light floods through
The wall to ceiling windows


Alex lifts his laptop out of his (Nomatic) backpack
Then lets out a sigh beneath his ribs
"Yeah, I was up pretty late.
I need to get a grip.
Weekend was shot.
Client demo's at noon.
And I have like ten Pull Requests
I have to review
Merge
Maybe rewrite
Because there's no time for pushback
And no one seems to get that
We should have these things called
'standards'"
Milo baits him
"Just don't write bugs, man,
No unit tests
No documentation
No containerization
(Docker scares the shit out of me)
Hell, all of my code is self-documenting
Open to interpretation
Closed for modification
Close to improvisation
At least we have a staging site


Not that we need it"
Alex takes it
"You're the reason why we have standards
Someone's going to hate you in five years
Some junior dev
Fresh out of college
When we've had our IPO
Or been acquired by some bigger fish"
Milo snorts
"Then it's Tinder for dog owners"
Turns back to his screen
"Dana okay?"
"She left."
"Shit, what?"
Alex has stopped typing
It is a trickle
He clicks mindlessly through the
Red and green minefield
Of forking paths
"Uhh, yeah,
She left a note


Said it didn't work
Couldn't work
Wanted more
Or something else--
It's not the first time"
"And if it's the last?"
"She wanted Tuscany
Not Williamsburg
Said I'm always here
Never *here*"
"Not Brooklyn Heights?"
"That's not the point--
It's all WiFi in a shoebox."
"Well, look,
You never were very good at your job
Engineer
Boyfriend..."
"But the code won't ship itself
So maybe we should build something else
Two devs and dream, right?"


"Yeah.
And then we sell for forty mill."

`,Jf={id:"idyll-x",title:"Idyll X",author:"George Popovic",illustration:null,text:Xf},Zf=`There is no cure for love, Iakobus--
No pill nor potion nor oil nor salve,
Save the Muses,
But a sweet and gentle cure it is,
Albeit hard for mortal men to find,
As you know well, I trow, being a physician,
Knowing what it is that they know,
And you being as dear to them as I myself,
Twas this much my countryman the Cyclops
Polyphemus gleaned,
When he was in love with the nymph Galatea,
Being about the age you are now;
His love was no matter of poems, or gifts,
Or apples,
But an unbridled frenzy--
He thought little of anything else,
And time and time again would cast his longing
Into the sea,
Neglecting his work at the MTA,
Which long would sit piled on his desk,
Amidst gripe and jeer and jest,
He languished under an irate, bureaucratic glare,
As long as the slender barb of the Cyprian
Stood fixed in his breast,
Though he found a cure eventually,
And so stood on the on the shore of Battery Park,
Where the 5 train rests at the edge of the world,


And there alone at the rails above the waters,
Sang of her some such thing as this:
"O Galatea,
Girl with springtime eyes,
As fair as shore to storm-tossed sailors is,
And cool water in August's heat,
You, a shining star of this island,
There will never be another
maid such as you.
What is it that keeps you from me?
Whither do you go when the sun sets?
What drives you forth from my bed?
I sleep alone in a studio enough for two,
Off of Broadway and 12th St.,
When the Pleiades have set, and you
Nowhere to be seen.
I have loved you, girl, since that first day
We met for coffee uptown
at a hole in the wall diner,
And since that day have never ceased to love–
O Zeus, what does it matter?
I know why it is you flee.
I've got a long shag brow stretched from ear to ear,
And one large eye that sits beneath,
And a broad nose for good measure,
Upon my lip,
A limp,
A wretch,
But just as I am I make a good salary,
With benefits to boot,


And have a respectable living,
Serving the citizens of this city.
Wealth isn't more, but less, more or less,
And with what I earn, I make do,
And of all my needs, natural and necessary,
Though there are so few,
What needs have I, really?
What need have I--save you?
My garden yields a feast,
Of table greens and nightshades and legumes,
My pantry ever overflows,
My almond milk I make myself,
My labor feeds me through winter,
And I've got a few grand saved up,
For any expense ahead--
And I play the lyre like none of the other Cyclopes,
And oftentimes at night I sing of you,
Sweet apple, and myself,
But if my singing won't do,
I'll get us a couple of mezzanine seats,
For a Broadway musical,
Any you wish will do--
One about New York, I hear, is playing,
And isn't that fitting?
But come away to me and you'll have no less,
Just come and see what this island can offer--
Sleeping beneath the starless sky,
In a room with peeling wallpaper,
Where the rent is high,
The expectations higher,


But so will be your fame,
Prithee, girl, come hither,
Leave that swamp behind.
If only some stranger would sail here
On some black ship,
With white-splashing oars,
And teach me how to swim,
I'd swim to you, then, from here
Around Brooklyn's bend, Bay Ridge,
Past Canarsie, and straight to that
Provincial town of yours
On stilts over the water.
It would be faster than the A train, anyway,
And who takes the Qm15, anyhow?
Ah, κυκλωψ κυκλωψ ποι πεπετασαι τας φρένας?
Ah, only myself to blame,
I, here, a noone on land,
What purpose have I but sunrise and sunset?
No art, no craft,
Clock in, clock out;
I wander this city in a daze,
Like a wounded deer on slender tracks--
I get no rest,
Vexed coming, vexed going,
The subway rattles along still
On rusty tracks,
There is no joy in my life,
No pleasure in sight or sound,
And everything a shade of grey,


To this monoptic view.
If only I were a skilled physician,
I would treat this raging fever,
Or a sorcerer,
I would burn some sage,
And cast some such spell,
'Wryneck, wryneck, draw her hither,'
But what am I
But a bucolic bore with a desk-job
And a Muse?
Cyclops, listen here, Cyclops,
Can't you see you're daft?
Don't you know you've got the girl?
And don't stand in need of the draft,
Of a fine tail-wind to send you adrift,
Or the hull of a black ship, stranger-sent,
To carry you to her,
There are much stranger things
To have happened in this city,
Than to have loved and to have got,
So waste not a second at the seashore,
Take a bus or train, ferry even,
Walk if need be,
Your love can carry you anywhere,
Or heaven forbid you drive,
Contrive something, anything,
It doesn't matter what,
You've got your lot, Cyclops."


So it was that Polyphemus consoled his love-sickness,
In the end,
By realizing he had the very thing
He thought he lacked,
And in truth, he fared better than if he had paid
A co-pay to some such as yourself,
Iakobus.

`,qf={id:"idyll-xi",title:"Idyll XI",author:"George Popovic",illustration:null,text:Zf},bf=`Subway Stromata
[0:00]
"Stand clear of the closing doors, please."
[0:16]
(A man gets on at Fulton st. on the uptown A train)
"This ain't no downtown train
This is an uptown train
We're going uptown
Uptown A-train y'all!"
(A woman gets on at 14th st.)
"'Sup?
*Uptown train*."
[0:33]
(Guy gets on with a Bluetooth speaker blaring)
"Alright everybody you know
What time it is"
*
(Turns it off)
*
"Yo do you know how pissed I would be
If someone got on and starting dancing


Around the fucking subway car"
[0:45]
“If the train’s delayed,
That’s just the universe
Telling you to chill.”
[0:53]
“Ladies and gentlemen,
I’m not here to bother you.
I’m just a man with socks.
Clean socks.
3 for $5.
More cushion than your last relationship.”
[1:35]
“Support local entrepreneurship.
That’s me.
I'm the local.”
[2:12]
“Y’all women out here
Manifesting a man
Like y’all ordering off Seamless.”


[2:30]
“The government don’t care about you. But I do.
Here’s a mixtape.”
[3:00]
“You ain’t mad at me,
You mad at your childhood.
Don’t project that on the F train.”
[3:43]
(Woman talking on phone)
“I'm at 125th
I don’t care what time it is
f you say come over
I’m on the train.”
[4:00]
"Only real New Yorkers
Puke in yellow cabs"
[4:31]
"Stand clear of the closing doors, please."

`,eh={id:"idyll-xii",title:"Idyll XII",author:"George Popovic",illustration:null,text:bf},th=`It looked like a desolate parking lot
Save the thin tin-roof shack at street-level
"Play it cool,
My friend's DJ-ing."
The bouncers dig in their usual way
'Who-are-you-here-to-see',
'Have-you-ever-been-here-before',
Adonis is squeamish when sober
But after a few drinks he forgets
That he is awkward and timid
He had only just met Hercules
When Hercules and his friends picked him up
At a bar in Bushwick
And what did it matter?
Reagan was busy
Collaborating with a Pratt professor
On some personal project
That didn't require her to answer
Adonis' texts
And he was out
On his own


One drink became two became four
An indefinite dyad
Logarithmic in consumption
"We're going to Basement if you want to come"
Half an invitation was all Adonis needed
They were older
Ten years his senior at least
But he'd always wanted to go
And he had nowhere to be
There was nowhere to be
He was never allowed in his father's bedroom;
In his father's bedroom there was an altar
To Elegua
His father was the kind of man
Who wore only white
Did not drink
Only during cleansing rituals
Would he smoke a dark cigar
They wait in line for half an hour
Walk across a silent courtyard
The bunker door swings open
And it is suddenly all
Smoke
Red light


A pulse
That comes from
Nowhere but circulates about the room
Packed to the brim with sweating bodies
Even in January the atmosphere is oppressive
Hercules takes his hand
And
Along with the rest of the band
They weave through the crush
A throughline through the waves
Of leather straps
Tanktops
Bare skin
Too hot down there for clothes
The club is an EDM catacomb
"You really have to let yourself feel it"
Hercules shouts muffled in his ear
Waving his arms and twisting his torso
Adonis scans the room
The closest you could come to
Berghain on the East coast
The center is a vortex of limbs
Into which Adonis is led by the hand


Stumbling
Somewhat hazy
Like a deer startled on a mountain track
Unaware of its own footing
As the ground gives way
Underneath
But Hercules leads him firm
The adjacent room is the "Play Room"
It smells of fear and longing
Proteins coagulating
And someone in need of a shower
Or a confessional
But Adonis is too bashful
He shoots a sidelong glance to see
If he might catch a glimpse
But
The Play Room door swings shut
And suddenly he thinks back
To his first encounter
Backstage
The opening night of his
Sophomore drama club production of
The Bacchae
Back then he did not know what bodies did


He did not know masculine
Could mean also mean tender
It was the sort of thing that
Lingered in a longing way
As if there were truths about himself that
He did not realize
No better place than in darkness
Safe in the haven of
These cavernous confines
All eyes down here were friendly
He takes his shirt off
Scrawny he smiles
His chest slackens
He can breathe again
And he contorts in that way he used to
Around the sprinklers at the center of the park
Hercules and his friends roar
A proud erastes in these rites
The miasma that was
The atmosphere of the club
Gives way to a chill that runs
Along his shoulders
His chest


His hair stands on end
He can feel
The molten lead rivulets
Of the longful gaze
Hercules grabs the scruff of his neck
Like a pup
Holds Adonis' head to his chest
He listens to the drumbeat in 3/4
That says
"You are mine –
Not to hold
But to shield."
Outside in polyester tents
They smoke cigarettes
On picnic benches
"So, what do you think?"
When his older brother Luis
Came out as gay
Their father cut him off like a limb
Hardly old enough to have his own roots
"It's a really good time!"
Says Adonis an octave too high
His voice is thin


When he needs to shout
It betrays his youth
Adonis sits next him
And as they talk about nothing at all
Adonis' polaroids
Hercules' advertising firm
The way gay men only need to lock eyes
He feels himself fracture
Into a beloved
Into an object of unrealised affection
Like when Hercules laughs and puts his arm
Around Adonis' waist
Or clasps his knees like a suppliant
He had never known what it was to
Be attracted to
Be attractive to
Someone who could break him if he wanted
There are flecks of grey in Hercules' beard
But his eyes betray a youth
That never lost its shimmer
"Let's go get a drink."
Hercules holds the vertex of his shoulder
And they go off alone


Inside
Adonis blinks
Red
Black
Red
Black
His head is heavy as
He stands outside the women’s bathroom
Catching his breath, hand against the wall
Which is damp with condensation
Or something more intimate
He blinks
And the crowd collapses in on itself –
A folding of limbs into shadow
Music into tremor
A boy into blur
Someone brushes past him –
A stranger, or maybe Hercules,
Or maybe the first boy
Who ever looked at him too long
And called it a joke
He opens his mouth to say something –
His name?


A word?
– but the bass swallows it whole
The strobe light catches his cheekbone
His shoulder
The place where a hand might’ve been
"Hey, are you okay?"
Several hands drag him into
The women's bathroom
And he lets himself sink
Into the dark
Hercules tears through the nameless multiplicity
Torn in two
"Adonis!
Adonis!"
But he's nowhere to be found
As Adonis is cradled
In the lap of a mini-skirt
His after-hours daimon
Halfway between Brooklyn and 5 AM
"Are you okay?"
She asks, faintly
And he closes his eyes

`,nh={id:"idyll-xiii",title:"Idyll XIII",author:"George Popovic",illustration:null,text:th},rh=`Tess holds her phone to her face.
Presses the buzzer three or four times.
Looks up at the fire escape on the second floor.
“Faye! Faye!”
She shouts in this shrill, playful tone.
Faye pushes past the inner door,
Swings out the heavy wooden one
That guards the brownstone.
“Shut the fuck up!”
She grins in an equally exuberant cry—
That long, drawn-out,
Somewhat whiny noise
You find from girls in their early (to mid) twenties.
Faye lunges into an embrace,
Practically tackles Tess.
Tess can smell the alcohol on her breath;
Her hair is slightly damp but warm.
They nearly stumble off the stoop
And saunter down the steps to the L
On Jefferson Street,
Right around the corner.


Tess hides a glass bottle
In a brown bag
Under her trench coat.
As they swipe,
Slide down the stairwells,
Waiting for Godot on the uptown platform,
They pass it back and forth
In silent communion.
The semester is ending soon.
Faye is working on a master copy of The Kiss.
She talks about the dissolution of boundaries,
Spirituality and ecstasy –
That gold cannot be painted,
Only implied.
Tess thinks Klimt is decadent.
Prefers Las Meninas.
Velázquez refuses illusion.
Flesh is flesh, light is light.
She is iconoclastic in her devotion to
The Gaze.
They both long to be seen in their own right.
“You never really knew Adonis, did you?”


Tess asks.
Faye squints, a little askew.
“Uhh… I met him once at a party…
In some Chinatown loft.
And we talked about photography –
He was nice –
I think he was hitting on me.”
Tess:
“We were in each other’s orbit a while.
‘Oh-you-know-Adonis-too.’
The gallery openings.
The social clubs.
You show up, you get seen.
You experiment…”
*
Through the single-paned white saloon doors,
The room pulses as people
Wind their way through the spotlights
Around pedestals of gnarled metalwork,
Seashells in Pompeiian mosaics,
Terrariums preserved in epoxy.
A fragmented self-portrait


Disintegrates at the vertices.
On a side wall,
A series of oversaturated black and white photographs:
Mott Haven or Kingsbridge –
Some obscure province of the Bronx.
In the back,
A projector beams an image
Of a shirtless teen
Doing hula-hoops.
He smiles through his braces.
LONG LIVE ADONIS
Flashes,
Then dissolves into the iMovie scenescape.
“Did all these people really know him?”
“I think he managed to get around.
Or the word got out.
But it doesn’t really matter.”
“They fill in the space he left behind.”
“Ya.”


“So much untapped potential.
Like – it’s not good.
Like, it’s hardly art.
It’s just, like… interesting.”
“Ya – but it could have been great.
It’s interesting.
Like – the materials and the novelty.
And it’s got elements of composition”
On a neighboring table,
There’s a series of Polaroids
Laid out in a polymer tapestry,
Scattered helter-skelter:
The same smile.
Graffiti murals.
Red brick projects.
A circle gathers around Adonis
As he contorts and flails
In a graceful, misdirected frenzy
Around the sprinkler
At the center of an asphalt park.
His twenty-first birthday party
In the living room of his


Two-bedroom, first-generation apartment.
“His death is curated better than my fucking life.”
“Oh, hey, Reagan!”
Tess and Faye now kiss and coo:
“Oh-my-God-hey,
So-good-to-see-you,
So-glad-you-showed-up.”
Reagan:
“I’m really glad we
Were able to put this on for him.
You know, he always wanted to be in a show.
We were going to do a salon series…”
Faye:
“Ya, ya. He deserves it. Really, ya.”
Tess:
“Yeah, he really matured in his form.
Like—you can see the evolution in his thought.
The way he changes materials over time…
Nothing feels out of place.”


Reagan:
“Yeah, I remember when he started
‘Switching it up.’
Getting more ‘crafty.’
Playing with memory and preservation.
And epoxy.
Pictures to metalworks to terrariums.
Urban decay, you know.
Like when we were dating…
He really influenced me as an artist.”
*
Of course, not everyone is an enthusiast.
“Yo, the women out here are crazy.”
Tess overhears some stupefied leer.
Nearly crushes the plastic wine cup in her hand.
“Ya, mhm, uh-huh, ya.”
*
“Reagan’s so full of shit,”
Says Tess, grinding her cigarette into a ledge.


“They only dated for like a month
Before she slept with some professor from Pratt.”
“Ya, mhm…”
Says Faye,
Looking down at her shoes.

`,lh={id:"idyll-xv",title:"Idyll XV",author:"George Popovic",illustration:null,text:rh},oh=`"The poet has the curse
Of never being able to say
Exactly what he wants
Even these idylls
Are painted in muted colours
No one exists anywhere
And yet the city somewhere has
The multiplicity of archetypes
And I want to say
'Shall I say I have gone at dusk
Through narrow streets
And watched the pipes
Of lonely men in shirt sleeves
Leaning out of windows'
I should have died in a rain-soaked
November trench in Belgium
A century ago
But now I write code for a living
From a WeWork
In lower Manhattan
And defer to my betters
To say that once I ran a circuit of
St. Mark's place


Shaking bystanders by their shoulders
Lingered on the steps of Union Square
Loitered Grand Central littered
With the conversations of strangers
Where I watched people board trains
I wish I could run after
That Fort Tryon
And Riverside Drive
And Battery Park
Are full of youthful ghosts
And patches of grass
Where you watch the summer sun
Sink below the Hudson
There is no substance in this city
Only light and form
A nexus of tenuous thinks
Nebulous
The veins of the subway or
The grid lines of the avenues
But there is nowhere to go
'February House'
'The Chelsea Hotel'
Only exist in our cultural subconscious
And I lay here dreaming


To say
'I am Lazarus come from the dead
Come back to tell you all
I shall tell you all'
And that I invent
Because of a chronic loneliness
In a city full of millions"
A pause
The stage light gives texture
To the contours of his face
As he waits for a slow and uncertain
But then courteous
And only sometimes if it is actually good
Raucous
Applause
The floorboards creak
Beneath the weight of his embarrassment
Offstage he gets a pat on the back
Outside KGB Bar
"Oh hey that was great!"
"Ya really loved it ya!
Really loved like ya
That one line
'Lonely men in shirt sleeves'"
And then later when he is alone
In his bedroom in the Bronx twilight thinks:
'No
That is not it at all
That is not what I meant at all'

`,ih={id:"idyll-xvi",title:"Idyll XVI",author:"George Popovic",illustration:null,text:oh},sh=[Mf,Hf,Bf,Uf,Vf,Qf,Kf,Jf,qf,eh,nh,lh,ih];class ah extends bs.Component{constructor(t){super(t),this.state={error:null}}static getDerivedStateFromError(t){return{error:t}}componentDidCatch(t,n){console.error("ErrorBoundary caught",t,n)}render(){return this.state.error?A.jsxs("div",{style:{padding:"4rem",fontFamily:"system-ui",color:"#b00020"},children:[A.jsx("h2",{children:"Something went wrong — check the console for details."}),A.jsx("pre",{style:{whiteSpace:"pre-wrap"},children:String(this.state.error)})]}):this.props.children}}function uh(){return A.jsx("div",{className:"site-root",children:A.jsx(ah,{children:A.jsxs("main",{className:"snap-container",role:"main",children:[A.jsx(Lf,{title:"Idylls 2025",author:"George Popovic"}),sh.map(e=>A.jsx(Rf,{poem:e},e.id))]})})})}nc(document.getElementById("root")).render(A.jsx(bs.StrictMode,{children:A.jsx(uh,{})}));
