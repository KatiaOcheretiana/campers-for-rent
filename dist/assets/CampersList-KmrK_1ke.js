import{f as Ze,u as v,g as M,r as U,h as et,i as tt,k as nt,N as ot,l as rt,b as je,m as at,j as s,s as T,O as st,a as it,n as lt,o as ct,p as ut,q as dt}from"./index-D6udNNH2.js";import{b as ft}from"./selectors-CbC4wo0s.js";const pt=t=>t.favorites.favoritesCampers,ht=t=>t.filter.location,vt=t=>t.filter.equipment,mt=t=>t.filter.type,ho=Ze([ft,ht,vt,mt],(t,e,n,r)=>{const i=e.toLowerCase().trim().split(",").map(u=>u.trim()),[f,y]=i;let a=t;return n&&(a=a.filter(u=>u.details&&(u.details[n]||u.details[n]===void 0))),r&&(a=a.filter(u=>u.form===r)),a.filter(u=>{const[g,c]=u.location.toLowerCase().split(", ");return(!f||c.includes(f))&&(!y||g.includes(y))})}),yt=v.li`
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 20px;
  padding: 24px;
  width: 888px;
  height: 358px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 24px;
`,gt=v.img`
  border-radius: 10px;
  width: 290px;
  height: 310px;
  object-fit: cover;
  overflow: hidden;
`,bt=v.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;

  width: 339px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`,xt=v.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
`,wt=v.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`,Ot=v.div`
  display: flex;
  justify-content: space-between;
`,_t=v.svg`
  width: 16px;
  height: 16px;
  fill: ${M.rating};
`,Ct=v.span`
  display: flex;
  align-items: center;
  gap: 4px;
  text-decoration: underline;
  text-decoration-skip-ink: none;
`,Et=v.svg`
  width: 16px;
  height: 16px;
  stroke-width: 1.3px;
  fill: transparent;
  stroke: ${M.darkText};
`,St=v.span`
  display: flex;
  align-items: center;
  gap: 4px;
`,Mt=v.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin-bottom: 24px;
`,Tt=v.p`
  color: ${M.lightText};
  width: 525px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-bottom: 24px;
`,Rt=v.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  width: 526px;
  margin-bottom: 24px;
`,B=v.div`
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 100px;
  padding: 12px 18px;
  height: 44px;
  background-color: ${M.blockFeatures};

  & p {
    font-weight: 500;
    line-height: 1.25;
  }

  & svg {
    width: 20px;
    height: 20px;
    fill: #101828;
    stroke-width: 1.5px;
  }
`,kt=v.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: #fff;

  background-color: ${M.btn};
  border-radius: 200px;
  padding: 16px 40px;
  border: none;

  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: ${M.btnHover};
  }
`;var ve={exports:{}},q={},Ne={exports:{}},jt="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Nt=jt,Pt=Nt;function Pe(){}function Le(){}Le.resetWarningCache=Pe;var Lt=function(){function t(r,i,f,y,a,b){if(b!==Pt){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Le,resetWarningCache:Pe};return n.PropTypes=n,n};Ne.exports=Lt();var De=Ne.exports,me={exports:{}},P={},ye={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=g;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var n="none",r="contents",i=/input|select|textarea|button|object|iframe/;function f(c,m){return m.getPropertyValue("overflow")!=="visible"||c.scrollWidth<=0&&c.scrollHeight<=0}function y(c){var m=c.offsetWidth<=0&&c.offsetHeight<=0;if(m&&!c.innerHTML)return!0;try{var x=window.getComputedStyle(c),_=x.getPropertyValue("display");return m?_!==r&&f(c,x):_===n}catch{return console.warn("Failed to inspect element style"),!1}}function a(c){for(var m=c,x=c.getRootNode&&c.getRootNode();m&&m!==document.body;){if(x&&m===x&&(m=x.host.parentNode),y(m))return!1;m=m.parentNode}return!0}function b(c,m){var x=c.nodeName.toLowerCase(),_=i.test(x)&&!c.disabled||x==="a"&&c.href||m;return _&&a(c)}function u(c){var m=c.getAttribute("tabindex");m===null&&(m=void 0);var x=isNaN(m);return(x||m>=0)&&b(c,!x)}function g(c){var m=[].slice.call(c.querySelectorAll("*"),0).reduce(function(x,_){return x.concat(_.shadowRoot?g(_.shadowRoot):[_])},[]);return m.filter(u)}t.exports=e.default})(ye,ye.exports);var Ae=ye.exports;Object.defineProperty(P,"__esModule",{value:!0});P.resetState=Ut;P.log=It;P.handleBlur=Q;P.handleFocus=X;P.markForFocusLater=Wt;P.returnFocus=$t;P.popWithoutFocus=Ht;P.setupScopedFocus=qt;P.teardownScopedFocus=Bt;var Dt=Ae,At=Ft(Dt);function Ft(t){return t&&t.__esModule?t:{default:t}}var K=[],z=null,ge=!1;function Ut(){K=[]}function It(){}function Q(){ge=!0}function X(){if(ge){if(ge=!1,!z)return;setTimeout(function(){if(!z.contains(document.activeElement)){var t=(0,At.default)(z)[0]||z;t.focus()}},0)}}function Wt(){K.push(document.activeElement)}function $t(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=null;try{K.length!==0&&(e=K.pop(),e.focus({preventScroll:t}));return}catch{console.warn(["You tried to return focus to",e,"but it is not in the DOM anymore"].join(" "))}}function Ht(){K.length>0&&K.pop()}function qt(t){z=t,window.addEventListener?(window.addEventListener("blur",Q,!1),document.addEventListener("focus",X,!0)):(window.attachEvent("onBlur",Q),document.attachEvent("onFocus",X))}function Bt(){z=null,window.addEventListener?(window.removeEventListener("blur",Q),document.removeEventListener("focus",X)):(window.detachEvent("onBlur",Q),document.detachEvent("onFocus",X))}var be={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=y;var n=Ae,r=i(n);function i(a){return a&&a.__esModule?a:{default:a}}function f(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return a.activeElement.shadowRoot?f(a.activeElement.shadowRoot):a.activeElement}function y(a,b){var u=(0,r.default)(a);if(!u.length){b.preventDefault();return}var g=void 0,c=b.shiftKey,m=u[0],x=u[u.length-1],_=f();if(a===_){if(!c)return;g=x}if(x===_&&!c&&(g=m),m===_&&c&&(g=x),g){b.preventDefault(),g.focus();return}var k=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),D=k!=null&&k[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(D){var A=u.indexOf(_);if(A>-1&&(A+=c?-1:1),g=u[A],typeof g>"u"){b.preventDefault(),g=c?x:m,g.focus();return}b.preventDefault(),g.focus()}}t.exports=e.default})(be,be.exports);var zt=be.exports,L={},Kt=function(){},Yt=Kt,N={},Fe={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(t){(function(){var e=!!(typeof window<"u"&&window.document&&window.document.createElement),n={canUseDOM:e,canUseWorkers:typeof Worker<"u",canUseEventListeners:e&&!!(window.addEventListener||window.attachEvent),canUseViewport:e&&!!window.screen};t.exports?t.exports=n:window.ExecutionEnvironment=n})()})(Fe);var Vt=Fe.exports;Object.defineProperty(N,"__esModule",{value:!0});N.canUseDOM=N.SafeNodeList=N.SafeHTMLCollection=void 0;var Jt=Vt,Gt=Qt(Jt);function Qt(t){return t&&t.__esModule?t:{default:t}}var ce=Gt.default,Xt=ce.canUseDOM?window.HTMLElement:{};N.SafeHTMLCollection=ce.canUseDOM?window.HTMLCollection:{};N.SafeNodeList=ce.canUseDOM?window.NodeList:{};N.canUseDOM=ce.canUseDOM;N.default=Xt;Object.defineProperty(L,"__esModule",{value:!0});L.resetState=on;L.log=rn;L.assertNodeList=Ue;L.setElement=an;L.validateElement=xe;L.hide=sn;L.show=ln;L.documentNotReadyOrSSRTesting=cn;var Zt=Yt,en=nn(Zt),tn=N;function nn(t){return t&&t.__esModule?t:{default:t}}var R=null;function on(){R&&(R.removeAttribute?R.removeAttribute("aria-hidden"):R.length!=null?R.forEach(function(t){return t.removeAttribute("aria-hidden")}):document.querySelectorAll(R).forEach(function(t){return t.removeAttribute("aria-hidden")})),R=null}function rn(){}function Ue(t,e){if(!t||!t.length)throw new Error("react-modal: No elements were found for selector "+e+".")}function an(t){var e=t;if(typeof e=="string"&&tn.canUseDOM){var n=document.querySelectorAll(e);Ue(n,e),e=n}return R=e||R,R}function xe(t){var e=t||R;return e?Array.isArray(e)||e instanceof HTMLCollection||e instanceof NodeList?e:[e]:((0,en.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function sn(t){var e=!0,n=!1,r=void 0;try{for(var i=xe(t)[Symbol.iterator](),f;!(e=(f=i.next()).done);e=!0){var y=f.value;y.setAttribute("aria-hidden","true")}}catch(a){n=!0,r=a}finally{try{!e&&i.return&&i.return()}finally{if(n)throw r}}}function ln(t){var e=!0,n=!1,r=void 0;try{for(var i=xe(t)[Symbol.iterator](),f;!(e=(f=i.next()).done);e=!0){var y=f.value;y.removeAttribute("aria-hidden")}}catch(a){n=!0,r=a}finally{try{!e&&i.return&&i.return()}finally{if(n)throw r}}}function cn(){R=null}var Y={};Object.defineProperty(Y,"__esModule",{value:!0});Y.resetState=un;Y.log=dn;var J={},G={};function Oe(t,e){t.classList.remove(e)}function un(){var t=document.getElementsByTagName("html")[0];for(var e in J)Oe(t,J[e]);var n=document.body;for(var r in G)Oe(n,G[r]);J={},G={}}function dn(){}var fn=function(e,n){return e[n]||(e[n]=0),e[n]+=1,n},pn=function(e,n){return e[n]&&(e[n]-=1),n},hn=function(e,n,r){r.forEach(function(i){fn(n,i),e.add(i)})},vn=function(e,n,r){r.forEach(function(i){pn(n,i),n[i]===0&&e.remove(i)})};Y.add=function(e,n){return hn(e.classList,e.nodeName.toLowerCase()=="html"?J:G,n.split(" "))};Y.remove=function(e,n){return vn(e.classList,e.nodeName.toLowerCase()=="html"?J:G,n.split(" "))};var V={};Object.defineProperty(V,"__esModule",{value:!0});V.log=yn;V.resetState=gn;function mn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var Ie=function t(){var e=this;mn(this,t),this.register=function(n){e.openInstances.indexOf(n)===-1&&(e.openInstances.push(n),e.emit("register"))},this.deregister=function(n){var r=e.openInstances.indexOf(n);r!==-1&&(e.openInstances.splice(r,1),e.emit("deregister"))},this.subscribe=function(n){e.subscribers.push(n)},this.emit=function(n){e.subscribers.forEach(function(r){return r(n,e.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},se=new Ie;function yn(){console.log("portalOpenInstances ----------"),console.log(se.openInstances.length),se.openInstances.forEach(function(t){return console.log(t)}),console.log("end portalOpenInstances ----------")}function gn(){se=new Ie}V.default=se;var we={};Object.defineProperty(we,"__esModule",{value:!0});we.resetState=On;we.log=_n;var bn=V,xn=wn(bn);function wn(t){return t&&t.__esModule?t:{default:t}}var E=void 0,j=void 0,H=[];function On(){for(var t=[E,j],e=0;e<t.length;e++){var n=t[e];n&&n.parentNode&&n.parentNode.removeChild(n)}E=j=null,H=[]}function _n(){console.log("bodyTrap ----------"),console.log(H.length);for(var t=[E,j],e=0;e<t.length;e++){var n=t[e],r=n||{};console.log(r.nodeName,r.className,r.id)}console.log("edn bodyTrap ----------")}function _e(){H.length!==0&&H[H.length-1].focusContent()}function Cn(t,e){!E&&!j&&(E=document.createElement("div"),E.setAttribute("data-react-modal-body-trap",""),E.style.position="absolute",E.style.opacity="0",E.setAttribute("tabindex","0"),E.addEventListener("focus",_e),j=E.cloneNode(),j.addEventListener("focus",_e)),H=e,H.length>0?(document.body.firstChild!==E&&document.body.insertBefore(E,document.body.firstChild),document.body.lastChild!==j&&document.body.appendChild(j)):(E.parentElement&&E.parentElement.removeChild(E),j.parentElement&&j.parentElement.removeChild(j))}xn.default.subscribe(Cn);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(h){for(var p=1;p<arguments.length;p++){var w=arguments[p];for(var o in w)Object.prototype.hasOwnProperty.call(w,o)&&(h[o]=w[o])}return h},r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(h){return typeof h}:function(h){return h&&typeof Symbol=="function"&&h.constructor===Symbol&&h!==Symbol.prototype?"symbol":typeof h},i=function(){function h(p,w){for(var o=0;o<w.length;o++){var l=w[o];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(p,l.key,l)}}return function(p,w,o){return w&&h(p.prototype,w),o&&h(p,o),p}}(),f=U,y=De,a=ne(y),b=P,u=de(b),g=zt,c=ne(g),m=L,x=de(m),_=Y,k=de(_),D=N,A=ne(D),ue=V,te=ne(ue);function de(h){if(h&&h.__esModule)return h;var p={};if(h!=null)for(var w in h)Object.prototype.hasOwnProperty.call(h,w)&&(p[w]=h[w]);return p.default=h,p}function ne(h){return h&&h.__esModule?h:{default:h}}function ze(h,p){if(!(h instanceof p))throw new TypeError("Cannot call a class as a function")}function Ke(h,p){if(!h)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return p&&(typeof p=="object"||typeof p=="function")?p:h}function Ye(h,p){if(typeof p!="function"&&p!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof p);h.prototype=Object.create(p&&p.prototype,{constructor:{value:h,enumerable:!1,writable:!0,configurable:!0}}),p&&(Object.setPrototypeOf?Object.setPrototypeOf(h,p):h.__proto__=p)}var fe={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},Ve=function(p){return p.code==="Tab"||p.keyCode===9},Je=function(p){return p.code==="Escape"||p.keyCode===27},oe=0,pe=function(h){Ye(p,h);function p(w){ze(this,p);var o=Ke(this,(p.__proto__||Object.getPrototypeOf(p)).call(this,w));return o.setOverlayRef=function(l){o.overlay=l,o.props.overlayRef&&o.props.overlayRef(l)},o.setContentRef=function(l){o.content=l,o.props.contentRef&&o.props.contentRef(l)},o.afterClose=function(){var l=o.props,C=l.appElement,S=l.ariaHideApp,O=l.htmlOpenClassName,I=l.bodyOpenClassName,W=l.parentSelector,re=W&&W().ownerDocument||document;I&&k.remove(re.body,I),O&&k.remove(re.getElementsByTagName("html")[0],O),S&&oe>0&&(oe-=1,oe===0&&x.show(C)),o.props.shouldFocusAfterRender&&(o.props.shouldReturnFocusAfterClose?(u.returnFocus(o.props.preventScroll),u.teardownScopedFocus()):u.popWithoutFocus()),o.props.onAfterClose&&o.props.onAfterClose(),te.default.deregister(o)},o.open=function(){o.beforeOpen(),o.state.afterOpen&&o.state.beforeClose?(clearTimeout(o.closeTimer),o.setState({beforeClose:!1})):(o.props.shouldFocusAfterRender&&(u.setupScopedFocus(o.node),u.markForFocusLater()),o.setState({isOpen:!0},function(){o.openAnimationFrame=requestAnimationFrame(function(){o.setState({afterOpen:!0}),o.props.isOpen&&o.props.onAfterOpen&&o.props.onAfterOpen({overlayEl:o.overlay,contentEl:o.content})})}))},o.close=function(){o.props.closeTimeoutMS>0?o.closeWithTimeout():o.closeWithoutTimeout()},o.focusContent=function(){return o.content&&!o.contentHasFocus()&&o.content.focus({preventScroll:!0})},o.closeWithTimeout=function(){var l=Date.now()+o.props.closeTimeoutMS;o.setState({beforeClose:!0,closesAt:l},function(){o.closeTimer=setTimeout(o.closeWithoutTimeout,o.state.closesAt-Date.now())})},o.closeWithoutTimeout=function(){o.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},o.afterClose)},o.handleKeyDown=function(l){Ve(l)&&(0,c.default)(o.content,l),o.props.shouldCloseOnEsc&&Je(l)&&(l.stopPropagation(),o.requestClose(l))},o.handleOverlayOnClick=function(l){o.shouldClose===null&&(o.shouldClose=!0),o.shouldClose&&o.props.shouldCloseOnOverlayClick&&(o.ownerHandlesClose()?o.requestClose(l):o.focusContent()),o.shouldClose=null},o.handleContentOnMouseUp=function(){o.shouldClose=!1},o.handleOverlayOnMouseDown=function(l){!o.props.shouldCloseOnOverlayClick&&l.target==o.overlay&&l.preventDefault()},o.handleContentOnClick=function(){o.shouldClose=!1},o.handleContentOnMouseDown=function(){o.shouldClose=!1},o.requestClose=function(l){return o.ownerHandlesClose()&&o.props.onRequestClose(l)},o.ownerHandlesClose=function(){return o.props.onRequestClose},o.shouldBeClosed=function(){return!o.state.isOpen&&!o.state.beforeClose},o.contentHasFocus=function(){return document.activeElement===o.content||o.content.contains(document.activeElement)},o.buildClassName=function(l,C){var S=(typeof C>"u"?"undefined":r(C))==="object"?C:{base:fe[l],afterOpen:fe[l]+"--after-open",beforeClose:fe[l]+"--before-close"},O=S.base;return o.state.afterOpen&&(O=O+" "+S.afterOpen),o.state.beforeClose&&(O=O+" "+S.beforeClose),typeof C=="string"&&C?O+" "+C:O},o.attributesFromObject=function(l,C){return Object.keys(C).reduce(function(S,O){return S[l+"-"+O]=C[O],S},{})},o.state={afterOpen:!1,beforeClose:!1},o.shouldClose=null,o.moveFromContentToOverlay=null,o}return i(p,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(o,l){this.props.isOpen&&!o.isOpen?this.open():!this.props.isOpen&&o.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!l.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var o=this.props,l=o.appElement,C=o.ariaHideApp,S=o.htmlOpenClassName,O=o.bodyOpenClassName,I=o.parentSelector,W=I&&I().ownerDocument||document;O&&k.add(W.body,O),S&&k.add(W.getElementsByTagName("html")[0],S),C&&(oe+=1,x.hide(l)),te.default.register(this)}},{key:"render",value:function(){var o=this.props,l=o.id,C=o.className,S=o.overlayClassName,O=o.defaultStyles,I=o.children,W=C?{}:O.content,re=S?{}:O.overlay;if(this.shouldBeClosed())return null;var Ge={ref:this.setOverlayRef,className:this.buildClassName("overlay",S),style:n({},re,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},Qe=n({id:l,ref:this.setContentRef,style:n({},W,this.props.style.content),className:this.buildClassName("content",C),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",n({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),Xe=this.props.contentElement(Qe,I);return this.props.overlayElement(Ge,Xe)}}]),p}(f.Component);pe.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},pe.propTypes={isOpen:a.default.bool.isRequired,defaultStyles:a.default.shape({content:a.default.object,overlay:a.default.object}),style:a.default.shape({content:a.default.object,overlay:a.default.object}),className:a.default.oneOfType([a.default.string,a.default.object]),overlayClassName:a.default.oneOfType([a.default.string,a.default.object]),parentSelector:a.default.func,bodyOpenClassName:a.default.string,htmlOpenClassName:a.default.string,ariaHideApp:a.default.bool,appElement:a.default.oneOfType([a.default.instanceOf(A.default),a.default.instanceOf(D.SafeHTMLCollection),a.default.instanceOf(D.SafeNodeList),a.default.arrayOf(a.default.instanceOf(A.default))]),onAfterOpen:a.default.func,onAfterClose:a.default.func,onRequestClose:a.default.func,closeTimeoutMS:a.default.number,shouldFocusAfterRender:a.default.bool,shouldCloseOnOverlayClick:a.default.bool,shouldReturnFocusAfterClose:a.default.bool,preventScroll:a.default.bool,role:a.default.string,contentLabel:a.default.string,aria:a.default.object,data:a.default.object,children:a.default.node,shouldCloseOnEsc:a.default.bool,overlayRef:a.default.func,contentRef:a.default.func,id:a.default.string,overlayElement:a.default.func,contentElement:a.default.func,testId:a.default.string},e.default=pe,t.exports=e.default})(me,me.exports);var En=me.exports;function We(){var t=this.constructor.getDerivedStateFromProps(this.props,this.state);t!=null&&this.setState(t)}function $e(t){function e(n){var r=this.constructor.getDerivedStateFromProps(t,n);return r??null}this.setState(e.bind(this))}function He(t,e){try{var n=this.props,r=this.state;this.props=t,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}We.__suppressDeprecationWarning=!0;$e.__suppressDeprecationWarning=!0;He.__suppressDeprecationWarning=!0;function Sn(t){var e=t.prototype;if(!e||!e.isReactComponent)throw new Error("Can only polyfill class components");if(typeof t.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function")return t;var n=null,r=null,i=null;if(typeof e.componentWillMount=="function"?n="componentWillMount":typeof e.UNSAFE_componentWillMount=="function"&&(n="UNSAFE_componentWillMount"),typeof e.componentWillReceiveProps=="function"?r="componentWillReceiveProps":typeof e.UNSAFE_componentWillReceiveProps=="function"&&(r="UNSAFE_componentWillReceiveProps"),typeof e.componentWillUpdate=="function"?i="componentWillUpdate":typeof e.UNSAFE_componentWillUpdate=="function"&&(i="UNSAFE_componentWillUpdate"),n!==null||r!==null||i!==null){var f=t.displayName||t.name,y=typeof t.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+f+" uses "+y+" but also contains the following legacy lifecycles:"+(n!==null?`
  `+n:"")+(r!==null?`
  `+r:"")+(i!==null?`
  `+i:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof t.getDerivedStateFromProps=="function"&&(e.componentWillMount=We,e.componentWillReceiveProps=$e),typeof e.getSnapshotBeforeUpdate=="function"){if(typeof e.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");e.componentWillUpdate=He;var a=e.componentDidUpdate;e.componentDidUpdate=function(u,g,c){var m=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:c;a.call(this,u,g,m)}}return t}const Mn=Object.freeze(Object.defineProperty({__proto__:null,polyfill:Sn},Symbol.toStringTag,{value:"Module"})),Tn=et(Mn);Object.defineProperty(q,"__esModule",{value:!0});q.bodyOpenClassName=q.portalClassName=void 0;var Ce=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Rn=function(){function t(e,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),qe=U,ie=Z(qe),kn=tt,le=Z(kn),jn=De,d=Z(jn),Nn=En,Ee=Z(Nn),Pn=L,Ln=An(Pn),F=N,Se=Z(F),Dn=Tn;function An(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function Z(t){return t&&t.__esModule?t:{default:t}}function Fn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Me(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function Un(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var In=q.portalClassName="ReactModalPortal",Wn=q.bodyOpenClassName="ReactModal__Body--open",$=F.canUseDOM&&le.default.createPortal!==void 0,Te=function(e){return document.createElement(e)},Re=function(){return $?le.default.createPortal:le.default.unstable_renderSubtreeIntoContainer};function ae(t){return t()}var ee=function(t){Un(e,t);function e(){var n,r,i,f;Fn(this,e);for(var y=arguments.length,a=Array(y),b=0;b<y;b++)a[b]=arguments[b];return f=(r=(i=Me(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(a))),i),i.removePortal=function(){!$&&le.default.unmountComponentAtNode(i.node);var u=ae(i.props.parentSelector);u&&u.contains(i.node)?u.removeChild(i.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},i.portalRef=function(u){i.portal=u},i.renderPortal=function(u){var g=Re(),c=g(i,ie.default.createElement(Ee.default,Ce({defaultStyles:e.defaultStyles},u)),i.node);i.portalRef(c)},r),Me(i,f)}return Rn(e,[{key:"componentDidMount",value:function(){if(F.canUseDOM){$||(this.node=Te("div")),this.node.className=this.props.portalClassName;var r=ae(this.props.parentSelector);r.appendChild(this.node),!$&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(r){var i=ae(r.parentSelector),f=ae(this.props.parentSelector);return{prevParent:i,nextParent:f}}},{key:"componentDidUpdate",value:function(r,i,f){if(F.canUseDOM){var y=this.props,a=y.isOpen,b=y.portalClassName;r.portalClassName!==b&&(this.node.className=b);var u=f.prevParent,g=f.nextParent;g!==u&&(u.removeChild(this.node),g.appendChild(this.node)),!(!r.isOpen&&!a)&&!$&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!F.canUseDOM||!this.node||!this.portal)){var r=this.portal.state,i=Date.now(),f=r.isOpen&&this.props.closeTimeoutMS&&(r.closesAt||i+this.props.closeTimeoutMS);f?(r.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,f-i)):this.removePortal()}}},{key:"render",value:function(){if(!F.canUseDOM||!$)return null;!this.node&&$&&(this.node=Te("div"));var r=Re();return r(ie.default.createElement(Ee.default,Ce({ref:this.portalRef,defaultStyles:e.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(r){Ln.setElement(r)}}]),e}(qe.Component);ee.propTypes={isOpen:d.default.bool.isRequired,style:d.default.shape({content:d.default.object,overlay:d.default.object}),portalClassName:d.default.string,bodyOpenClassName:d.default.string,htmlOpenClassName:d.default.string,className:d.default.oneOfType([d.default.string,d.default.shape({base:d.default.string.isRequired,afterOpen:d.default.string.isRequired,beforeClose:d.default.string.isRequired})]),overlayClassName:d.default.oneOfType([d.default.string,d.default.shape({base:d.default.string.isRequired,afterOpen:d.default.string.isRequired,beforeClose:d.default.string.isRequired})]),appElement:d.default.oneOfType([d.default.instanceOf(Se.default),d.default.instanceOf(F.SafeHTMLCollection),d.default.instanceOf(F.SafeNodeList),d.default.arrayOf(d.default.instanceOf(Se.default))]),onAfterOpen:d.default.func,onRequestClose:d.default.func,closeTimeoutMS:d.default.number,ariaHideApp:d.default.bool,shouldFocusAfterRender:d.default.bool,shouldCloseOnOverlayClick:d.default.bool,shouldReturnFocusAfterClose:d.default.bool,preventScroll:d.default.bool,parentSelector:d.default.func,aria:d.default.object,data:d.default.object,role:d.default.string,contentLabel:d.default.string,shouldCloseOnEsc:d.default.bool,overlayRef:d.default.func,contentRef:d.default.func,id:d.default.string,overlayElement:d.default.func,contentElement:d.default.func};ee.defaultProps={isOpen:!1,portalClassName:In,bodyOpenClassName:Wn,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,n){return ie.default.createElement("div",e,n)},contentElement:function(e,n){return ie.default.createElement("div",e,n)}};ee.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,Dn.polyfill)(ee);q.default=ee;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=q,r=i(n);function i(f){return f&&f.__esModule?f:{default:f}}e.default=r.default,t.exports=e.default})(ve,ve.exports);var $n=ve.exports;const Be=nt($n),Hn=v.div`
  overflow-y: auto;
  height: 100%;
  padding-right: 16px;
  &::-webkit-scrollbar {
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #d9d9d9;
    border-radius: 7px;
  }

  &::-webkit-scrollbar {
    width: 8px;
    height: 264px;
    background: transparent;
  }
`,qn=v.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
`,Bn=v.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
`,zn=v.svg`
  cursor: pointer;
  width: 32px;
  height: 32px;
  stroke: ${M.darkText};
`,Kn=v.svg`
  width: 16px;
  height: 16px;
  fill: ${M.rating};
`,Yn=v.span`
  display: flex;
  align-items: center;
  gap: 4px;
  text-decoration: underline;
  text-decoration-skip-ink: none;
`,Vn=v.svg`
  width: 14px;
  height: 16px;
  stroke-width: 1.3px;
  fill: transparent;
  stroke: ${M.darkText};
`,Jn=v.span`
  display: flex;
  align-items: center;
  gap: 4px;
`,Gn=v.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin-bottom: 16px;
`,Qn=v.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
`,he=v.img`
  border-radius: 10px;
  width: 290px;
  height: 310px;
  object-fit: cover;
  overflow: hidden;
`,Xn=v.div`
  margin-top: 24px;
  display: flex;
  flex-direction: row;
  gap: 15px;
`,Zn=v.p`
  margin-top: 24px;
  color: ${M.lightText};
`,ke=v(ot)`
  color: ${M.darkText};
  text-decoration: none;
  display: flex;
  flex-direction: row;
  gap: 5px;
  position: relative;

  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;

  &.active {
    &::after {
      position: absolute;
      content: '';
      background-color: ${M.btn};
      height: 5px;
      width: 100%;
      bottom: -26px;
    }
  }
`,eo=v.div`
  margin-top: 44px;
  margin-bottom: 68px;
  display: flex;
  flex-direction: row;
  gap: 36px;
  position: relative;

  &::after {
    position: absolute;
    content: '';
    background-color: rgba(16, 24, 40, 0.2);
    height: 1px;
    width: 100%;
    bottom: -24px;
  }
`,to={overlay:{backgroundColor:"rgba(17, 18, 19, 0.4)"},content:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:"#fff",borderRadius:"20px",padding:"40px 16px 40px 40px",width:"982px",height:"720px",overflowY:"hidden"}},no=({isOpen:t,onRequestClose:e,camperInfo:n,pathForModal:r})=>{const{camperId:i}=rt(),f=je();U.useEffect(()=>{f(at(i))},[]);const{name:y,price:a,rating:b,location:u,description:g,gallery:c,reviews:m}=n;return s.jsx("div",{children:s.jsx(Be,{isOpen:t,onRequestClose:e,style:to,children:s.jsxs(Hn,{children:[s.jsxs("div",{children:[s.jsxs(qn,{children:[s.jsx(Bn,{children:y}),s.jsx(zn,{onClick:()=>e(),children:s.jsx("use",{href:`${T}#icon-close`})})]}),s.jsxs(Gn,{children:[s.jsxs(Yn,{children:[s.jsx(Kn,{children:s.jsx("use",{href:T+"#icon-star"})}),b," (",m.length," Reviews)"]}),s.jsxs(Jn,{children:[s.jsx(Vn,{children:s.jsx("use",{href:T+"#icon-location"})}),u.split(", ").reverse().join(", ")]})]}),s.jsxs(Qn,{children:["€",a.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,"")]}),s.jsxs(Xn,{children:[s.jsx(he,{src:c[0],alt:y}),s.jsx(he,{src:c[1],alt:y}),s.jsx(he,{src:c[2],alt:y})]}),s.jsx(Zn,{children:g})]}),s.jsxs(eo,{children:[s.jsx(ke,{to:`/${r}/${n._id}/features`,children:"Features"}),s.jsx(ke,{to:`/${r}/${n._id}/reviews`,children:"Reviews"})]}),s.jsx(U.Suspense,{children:s.jsx(st,{})})]})})})};Be.setAppElement("#root");const oo=v.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 32px;
  height: 28px;
  border: none;
  background: none;
  padding: 0;
`,ro=v.svg`
  position: absolute;
  width: 24px;
  height: 24px;
  stroke-width: 2.3px;
  transform: translateY(-50%);
  top: 50%;
  left: 11%;
`,ao=v.use`
  width: 24px;
  height: 24px;
`,so=({item:t})=>{const[e,n]=U.useState(!1),r=je(),i=it(pt);U.useEffect(()=>{n(i.includes(t._id))},[t._id,i]);const f=()=>{const y=e?i.filter(a=>a!==t._id):[...new Set([...i,t._id])];localStorage.setItem(lt,JSON.stringify(y)),r(e?ct(t._id):ut(t._id)),n(!e)};return s.jsx(oo,{onClick:f,children:s.jsx(ro,{children:s.jsx(ao,{href:T+"#icon-like",style:{fill:e?"#E44848":"transparent",stroke:e?"#E44848":"#101828"}})})})},io=({camper:t,pathForModal:e})=>{const{_id:n,name:r,price:i,rating:f,location:y,adults:a,engine:b,transmission:u,description:g,details:c,gallery:m,reviews:x}=t,_=dt(),[k,D]=U.useState(!1),A=()=>{D(!0),document.body.style.overflow="hidden";const te=`/${e}/${n}`;_(te)},ue=()=>{D(!1),document.body.style.overflow="visible"};return s.jsxs(s.Fragment,{children:[s.jsxs(yt,{children:[s.jsx(gt,{src:m[0],alt:r,width:290,height:310}),s.jsxs("div",{children:[s.jsxs(Ot,{children:[s.jsx(bt,{children:r}),s.jsxs(wt,{children:[s.jsxs(xt,{children:["€",i.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,"")]}),s.jsx(so,{item:t})]})]}),s.jsxs(Mt,{children:[s.jsxs(Ct,{children:[s.jsx(_t,{children:s.jsx("use",{href:T+"#icon-star"})}),f," (",x.length," Reviews)"]}),s.jsxs(St,{children:[s.jsx(Et,{children:s.jsx("use",{href:T+"#icon-location"})}),y.split(", ").reverse().join(", ")]})]}),s.jsx(Tt,{children:g}),s.jsxs(Rt,{children:[s.jsxs(B,{children:[s.jsx("svg",{children:s.jsx("use",{href:T+"#icon-adults"})}),s.jsxs("p",{children:[" ",a," adults"]})]}),s.jsxs(B,{children:[s.jsx("svg",{children:s.jsx("use",{href:T+"#icon-automatic",style:{stroke:"#101828",fill:"transparent"}})}),s.jsxs("p",{children:[" ",u]})]}),s.jsxs(B,{children:[s.jsx("svg",{children:s.jsx("use",{href:T+"#icon-petrol"})}),s.jsxs("p",{children:[" ",b]})]}),c.kitchen>=1&&s.jsxs(B,{children:[s.jsx("svg",{children:s.jsx("use",{href:T+"#icon-kitchen",style:{stroke:"#101828",fill:"transparent"}})}),s.jsx("p",{children:" kitchen "})]}),c.beds>=1&&s.jsxs(B,{children:[s.jsx("svg",{children:s.jsx("use",{href:T+"#icon-beds",style:{stroke:"#101828",fill:"transparent"}})}),s.jsxs("p",{children:[" ",c.beds," beds"]})]}),c.airConditioner>=1&&s.jsxs(B,{children:[s.jsx("svg",{children:s.jsx("use",{href:T+"#icon-ac",style:{fill:"#101828"}})}),s.jsx("p",{children:" AC"})]})]}),s.jsx(kt,{type:"submit",onClick:()=>A(),children:"Show more"})]})]},n),k&&s.jsx(no,{camperInfo:t,isOpen:k,onRequestClose:ue,pathForModal:e})]})},lo=v.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  margin-bottom: 100px;
`,co=v.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
`,uo=v.button`
  border: 1px solid rgba(71, 84, 103, 0.2);
  border-radius: 200px;
  padding: 16px 32px;
  height: 56px;
  background-color: transparent;

  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;

  transition: border-color 0.5s ease;

  &:hover {
    border-color: ${M.btn};
  }
`,vo=({campers:t,pathForModal:e})=>{const[n,r]=U.useState(4),i=4,f=t.slice(0,n),y=()=>{r(n+i)};return s.jsxs(lo,{children:[s.jsx(co,{children:f.map(a=>s.jsx(io,{camper:a,pathForModal:e},a._id))}),n<t.length&&s.jsx(uo,{onClick:y,children:"Load more"})]})};export{vo as C,ho as a,ht as b,pt as s};
