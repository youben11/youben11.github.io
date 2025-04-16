import{_ as tt}from"./nuxt-link.Cw_4E08L.js";import{V as at,p as ke,m as Ie,s as Ve,u as Te,e as we,j as nt,x as ot,y as lt}from"./index.CxHfF8q3.js";import{c as qe,V as ve,d as st}from"./VBtn.ByFQYKWq.js";import{l as A,z as Be,f as r,r as de,J as Q,G as z,as as Ce,x as C,g as me,D as Fe,aO as it,aL as ut,a3 as rt,a4 as ct,a2 as ge,u as vt,o as V,j as E,w as I,b as c,d as $,t as X,n as D,m as fe,v as q,q as he,E as Pe,s as Ne,b3 as We,c as ae,F as G,k as ye,b1 as dt,b4 as mt,y as Y,S as Xe,b5 as ue,N as te,K as gt,b6 as ft,b7 as ht,H as yt,ak as bt,aq as pt,T as _t,i as xe,a as ee}from"./entry.B2FStRP4.js";import{m as U,u as O,b as Ee,a as re,c as Le}from"./rounded.BvZnAVs0.js";import{c as wt,a as je,b as Ue,V as Ze,u as Me,d as St}from"./VList.CyOWQMBV.js";import{_ as xt}from"./_plugin-vue_export-helper.DlAUqK2U.js";import{m as ne}from"./tag.6iVuizB9.js";import{V as kt}from"./VImg.CiiMQuFZ.js";import{V as Se}from"./VRow.CyLhWSC0.js";const ce=Symbol.for("vuetify:layout"),Ke=Symbol.for("vuetify:layout-item"),ze=1e3,It=A({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),Ae=A({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function Vt(){const e=Be(ce);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function $e(e){const o=Be(ce);if(!o)throw new Error("[Vuetify] Could not find injected layout");const t=e.id??`layout-item-${ut()}`,l=Ce("useLayoutItem");Fe(Ke,{id:t});const a=C(!1);rt(()=>a.value=!0),ct(()=>a.value=!1);const{layoutItemStyles:n,layoutItemScrimStyles:s}=o.register(l,{...e,active:r(()=>a.value?!1:e.active.value),id:t});return ge(()=>o.unregister(t)),{layoutItemStyles:n,layoutRect:o.layoutRect,layoutItemScrimStyles:s}}const Tt=(e,o,t,l)=>{let a={top:0,left:0,right:0,bottom:0};const n=[{id:"",layer:{...a}}];for(const s of e){const m=o.get(s),b=t.get(s),f=l.get(s);if(!m||!b||!f)continue;const u={...a,[m.value]:parseInt(a[m.value],10)+(f.value?parseInt(b.value,10):0)};n.push({id:s,layer:u}),a=u}return n};function Bt(e){const o=Be(ce,null),t=r(()=>o?o.rootZIndex.value-100:ze),l=de([]),a=Q(new Map),n=Q(new Map),s=Q(new Map),m=Q(new Map),b=Q(new Map),{resizeRef:f,contentRect:u}=qe(),y=r(()=>{const i=new Map,h=e.overlaps??[];for(const v of h.filter(S=>S.includes(":"))){const[S,w]=v.split(":");if(!l.value.includes(S)||!l.value.includes(w))continue;const M=a.get(S),R=a.get(w),j=n.get(S),F=n.get(w);!M||!R||!j||!F||(i.set(w,{position:M.value,amount:parseInt(j.value,10)}),i.set(S,{position:R.value,amount:-parseInt(F.value,10)}))}return i}),d=r(()=>{const i=[...new Set([...s.values()].map(v=>v.value))].sort((v,S)=>v-S),h=[];for(const v of i){const S=l.value.filter(w=>{var M;return((M=s.get(w))==null?void 0:M.value)===v});h.push(...S)}return Tt(h,a,n,m)}),g=r(()=>!Array.from(b.values()).some(i=>i.value)),x=r(()=>d.value[d.value.length-1].layer),k=r(()=>({"--v-layout-left":z(x.value.left),"--v-layout-right":z(x.value.right),"--v-layout-top":z(x.value.top),"--v-layout-bottom":z(x.value.bottom),...g.value?void 0:{transition:"none"}})),P=r(()=>d.value.slice(1).map((i,h)=>{let{id:v}=i;const{layer:S}=d.value[h],w=n.get(v),M=a.get(v);return{id:v,...S,size:Number(w.value),position:M.value}})),_=i=>P.value.find(h=>h.id===i),T=Ce("createLayout"),B=C(!1);me(()=>{B.value=!0}),Fe(ce,{register:(i,h)=>{let{id:v,order:S,position:w,layoutSize:M,elementSize:R,active:j,disableTransitions:F,absolute:be}=h;s.set(v,S),a.set(v,w),n.set(v,M),m.set(v,j),F&&b.set(v,F);const oe=it(Ke,T==null?void 0:T.vnode).indexOf(i);oe>-1?l.value.splice(oe,0,v):l.value.push(v);const le=r(()=>P.value.findIndex(W=>W.id===v)),J=r(()=>t.value+d.value.length*2-le.value*2),N=r(()=>{const W=w.value==="left"||w.value==="right",Z=w.value==="right",ie=w.value==="bottom",He={[w.value]:0,zIndex:J.value,transform:`translate${W?"X":"Y"}(${(j.value?0:-110)*(Z||ie?-1:1)}%)`,position:be.value||t.value!==ze?"absolute":"fixed",...g.value?void 0:{transition:"none"}};if(!B.value)return He;const H=P.value[le.value];if(!H)throw new Error(`[Vuetify] Could not find layout item "${v}"`);const _e=y.value.get(v);return _e&&(H[_e.position]+=_e.amount),{...He,height:W?`calc(100% - ${H.top}px - ${H.bottom}px)`:R.value?`${R.value}px`:void 0,left:Z?void 0:`${H.left}px`,right:Z?`${H.right}px`:void 0,top:w.value!=="bottom"?`${H.top}px`:void 0,bottom:w.value!=="top"?`${H.bottom}px`:void 0,width:W?R.value?`${R.value}px`:void 0:`calc(100% - ${H.left}px - ${H.right}px)`}}),se=r(()=>({zIndex:J.value-1}));return{layoutItemStyles:N,layoutItemScrimStyles:se,zIndex:J}},unregister:i=>{s.delete(i),a.delete(i),n.delete(i),m.delete(i),b.delete(i),l.value=l.value.filter(h=>h!==i)},mainRect:x,mainStyles:k,getLayoutItem:_,items:P,layoutRect:u,rootZIndex:t});const L=r(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),p=r(()=>({zIndex:o?t.value:void 0,position:o?"relative":void 0,overflow:o?"hidden":void 0}));return{layoutClasses:L,layoutStyles:p,getLayoutItem:_,items:P,layoutRect:u,layoutRef:f}}const Ct={__name:"ToggleThemeButton",setup(e){const o=vt(),t=r(()=>o.global.name.value==="light"?"mdi-weather-night":"mdi-white-balance-sunny"),l=()=>{o.global.name.value=o.global.name.value==="light"?"dark":"light",localStorage.setItem("theme",o.global.name.value)};return(a,n)=>(V(),E(ve,{icon:"",onClick:l},{default:I(()=>[c(at,null,{default:I(()=>[$(X(t.value),1)]),_:1})]),_:1}))}},Pt=Ct,Ge=A({text:String,...U(),...ne()},"VToolbarTitle"),Je=D()({name:"VToolbarTitle",props:Ge(),setup(e,o){let{slots:t}=o;return O(()=>{const l=!!(t.default||t.text||e.text);return c(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var a;return[l&&c("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(a=t.default)==null?void 0:a.call(t)])]}})}),{}}}),Nt=[null,"prominent","default","comfortable","compact"],Qe=A({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Nt.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...ke(),...U(),...Ie(),...Ee(),...ne({tag:"header"}),...fe()},"VToolbar"),De=D()({name:"VToolbar",props:Qe(),setup(e,o){var g;let{slots:t}=o;const{backgroundColorClasses:l,backgroundColorStyles:a}=re(q(e,"color")),{borderClasses:n}=Ve(e),{elevationClasses:s}=Te(e),{roundedClasses:m}=Le(e),{themeClasses:b}=he(e),{rtlClasses:f}=Pe(),u=C(!!(e.extended||(g=t.extension)!=null&&g.call(t))),y=r(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),d=r(()=>u.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return Ne({VBtn:{variant:"text"}}),O(()=>{var _;const x=!!(e.title||t.title),k=!!(t.image||e.image),P=(_=t.extension)==null?void 0:_.call(t);return u.value=!!(e.extended||P),c(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},l.value,n.value,s.value,m.value,b.value,f.value,e.class],style:[a.value,e.style]},{default:()=>[k&&c("div",{key:"image",class:"v-toolbar__image"},[t.image?c(we,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):c(kt,{key:"image-img",cover:!0,src:e.image},null)]),c(we,{defaults:{VTabs:{height:z(y.value)}}},{default:()=>{var T,B,L;return[c("div",{class:"v-toolbar__content",style:{height:z(y.value)}},[t.prepend&&c("div",{class:"v-toolbar__prepend"},[(T=t.prepend)==null?void 0:T.call(t)]),x&&c(Je,{key:"title",text:e.title},{text:t.title}),(B=t.default)==null?void 0:B.call(t),t.append&&c("div",{class:"v-toolbar__append"},[(L=t.append)==null?void 0:L.call(t)])])]}}),c(we,{defaults:{VTabs:{height:z(d.value)}}},{default:()=>[c(wt,null,{default:()=>[u.value&&c("div",{class:"v-toolbar__extension",style:{height:z(d.value)}},[P])]})]})]})}),{contentHeight:y,extensionHeight:d}}}),Et=A({...U(),...nt({variant:"text"})},"VToolbarItems"),et=D()({name:"VToolbarItems",props:Et(),setup(e,o){let{slots:t}=o;return Ne({VBtn:{color:q(e,"color"),height:"inherit",variant:q(e,"variant")}}),O(()=>{var l;return c("div",{class:["v-toolbar-items",e.class],style:e.style},[(l=t.default)==null?void 0:l.call(t)])}),{}}}),Lt={__name:"InPageNavigationBar",props:{navigationItems:{type:Array,required:!0}},setup(e){const o=We(),t=l=>{o(`#${l}`,{offset:-80,duration:400})};return(l,a)=>(V(),E(et,null,{default:I(()=>[(V(!0),ae(G,null,ye(e.navigationItems,(n,s)=>(V(),E(ve,{key:s,class:"hidden-sm-and-down",onClick:m=>t(n.link)},{default:I(()=>[$(X(n.title),1)]),_:2},1032,["onClick"]))),128))]),_:1}))}},Mt=Lt,At={__name:"CrossPageNavigationBar",props:{navigationItems:{type:Array,required:!0}},setup(e){return(o,t)=>(V(),E(et,null,{default:I(()=>[(V(!0),ae(G,null,ye(e.navigationItems,(l,a)=>(V(),E(ve,{key:a,class:"hidden-sm-and-down",as:o.NuxtLink,to:l.link},{default:I(()=>[$(X(l.title),1)]),_:2},1032,["as","to"]))),128))]),_:1}))}},$t=At,Re=()=>dt("store",()=>({drawer:!1})),Rt={__name:"InPageNavigationPanel",props:{navigationItems:{type:Array,required:!0}},setup(e){const o=We(),t=Re(),l=a=>{o(`#${a}`,{offset:-80,duration:400}),t.value.drawer=!1};return(a,n)=>(V(),E(Ze,{nav:""},{default:I(()=>[(V(!0),ae(G,null,ye(e.navigationItems,(s,m)=>(V(),E(je,{key:m,link:"",onClick:b=>{l(s.link),a.drawer=!1}},{default:I(()=>[c(Ue,{class:"text-body-1"},{default:I(()=>[$(X(s.title),1)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1}))}},Ht=Rt,zt={__name:"CrossPageNavigationPanel",props:{navigationItems:{type:Array,required:!0}},setup(e){const o=Re(),t=()=>{o.value.drawer=!1};return(l,a)=>(V(),E(Ze,{nav:""},{default:I(()=>[(V(!0),ae(G,null,ye(e.navigationItems,(n,s)=>(V(),E(je,{key:s,as:l.NuxtLink,to:n.link,onClick:t},{default:I(()=>[c(Ue,{class:"text-body-1"},{default:I(()=>[$(X(n.title),1)]),_:2},1024)]),_:2},1032,["as","to"]))),128))]),_:1}))}},Dt=zt,Ot=A({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function Yt(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=o;let l=0;const a=de(null),n=C(0),s=C(0),m=C(0),b=C(!1),f=C(!1),u=r(()=>Number(e.scrollThreshold)),y=r(()=>mt((u.value-n.value)/u.value||0)),d=()=>{const g=a.value;!g||t&&!t.value||(l=n.value,n.value="window"in g?g.pageYOffset:g.scrollTop,f.value=n.value<l,m.value=Math.abs(n.value-u.value))};return Y(f,()=>{s.value=s.value||n.value}),Y(b,()=>{s.value=0}),me(()=>{Y(()=>e.scrollTarget,g=>{var k;const x=g?document.querySelector(g):window;x&&x!==a.value&&((k=a.value)==null||k.removeEventListener("scroll",d),a.value=x,a.value.addEventListener("scroll",d,{passive:!0}))},{immediate:!0})}),ge(()=>{var g;(g=a.value)==null||g.removeEventListener("scroll",d)}),t&&Y(t,d,{immediate:!0}),{scrollThreshold:u,currentScroll:n,currentThreshold:m,isScrollActive:b,scrollRatio:y,isScrollingUp:f,savedScroll:s}}const qt=A({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...Qe(),...Ae(),...Ot(),height:{type:[Number,String],default:64}},"VAppBar"),Ft=D()({name:"VAppBar",props:qt(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const l=de(),a=Xe(e,"modelValue"),n=r(()=>{var T;const _=new Set(((T=e.scrollBehavior)==null?void 0:T.split(" "))??[]);return{hide:_.has("hide"),inverted:_.has("inverted"),collapse:_.has("collapse"),elevate:_.has("elevate"),fadeImage:_.has("fade-image")}}),s=r(()=>{const _=n.value;return _.hide||_.inverted||_.collapse||_.elevate||_.fadeImage||!a.value}),{currentScroll:m,scrollThreshold:b,isScrollingUp:f,scrollRatio:u}=Yt(e,{canScroll:s}),y=r(()=>e.collapse||n.value.collapse&&(n.value.inverted?u.value>0:u.value===0)),d=r(()=>e.flat||n.value.elevate&&(n.value.inverted?m.value>0:m.value===0)),g=r(()=>n.value.fadeImage?n.value.inverted?1-u.value:u.value:void 0),x=r(()=>{var B,L;if(n.value.hide&&n.value.inverted)return 0;const _=((B=l.value)==null?void 0:B.contentHeight)??0,T=((L=l.value)==null?void 0:L.extensionHeight)??0;return _+T});ue(r(()=>!!e.scrollBehavior),()=>{gt(()=>{n.value.hide?n.value.inverted?a.value=m.value>b.value:a.value=f.value||m.value<b.value:a.value=!0})});const{ssrBootStyles:k}=Me(),{layoutItemStyles:P}=$e({id:e.name,order:r(()=>parseInt(e.order,10)),position:q(e,"location"),layoutSize:x,elementSize:C(void 0),active:a,absolute:q(e,"absolute")});return O(()=>{const _=De.filterProps(e);return c(De,te({ref:l,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...P.value,"--v-toolbar-image-opacity":g.value,height:void 0,...k.value},e.style]},_,{collapse:y.value,flat:d.value}),t)}),{}}}),Wt=A({...st({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),Xt=D()({name:"VAppBarNavIcon",props:Wt(),setup(e,o){let{slots:t}=o;return O(()=>c(ve,te(e,{class:["v-app-bar-nav-icon"]}),t)),{}}}),jt=D()({name:"VAppBarTitle",props:Ge(),setup(e,o){let{slots:t}=o;return O(()=>c(Je,te(e,{class:"v-app-bar-title"}),t)),{}}});function Ut(e){let{rootEl:o,isSticky:t,layoutItemStyles:l}=e;const a=C(!1),n=C(0),s=r(()=>{const f=typeof a.value=="boolean"?"top":a.value;return[t.value?{top:"auto",bottom:"auto",height:void 0}:void 0,a.value?{[f]:z(n.value)}:{top:l.value.top}]});me(()=>{Y(t,f=>{f?window.addEventListener("scroll",b,{passive:!0}):window.removeEventListener("scroll",b)},{immediate:!0})}),ge(()=>{window.removeEventListener("scroll",b)});let m=0;function b(){const f=m>window.scrollY?"up":"down",u=o.value.getBoundingClientRect(),y=parseFloat(l.value.top??0),d=window.scrollY-Math.max(0,n.value-y),g=u.height+Math.max(n.value,y)-window.scrollY-window.innerHeight,x=parseFloat(getComputedStyle(o.value).getPropertyValue("--v-body-scroll-y"))||0;u.height<window.innerHeight-y?(a.value="top",n.value=y):f==="up"&&a.value==="bottom"||f==="down"&&a.value==="top"?(n.value=window.scrollY+u.top-x,a.value=!0):f==="down"&&g<=0?(n.value=0,a.value="bottom"):f==="up"&&d<=0&&(x?a.value!=="top"&&(n.value=-d+x+y,a.value="top"):(n.value=u.top+d,a.value="top")),m=window.scrollY}return{isStuck:a,stickyStyles:s}}const Zt=100,Kt=20;function Oe(e){return(e<0?-1:1)*Math.sqrt(Math.abs(e))*1.41421356237}function Ye(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let o=0;for(let t=e.length-1;t>0;t--){if(e[t].t===e[t-1].t)continue;const l=Oe(o),a=(e[t].d-e[t-1].d)/(e[t].t-e[t-1].t);o+=(a-l)*Math.abs(a),t===e.length-1&&(o*=.5)}return Oe(o)*1e3}function Gt(){const e={};function o(a){Array.from(a.changedTouches).forEach(n=>{(e[n.identifier]??(e[n.identifier]=new ft(Kt))).push([a.timeStamp,n])})}function t(a){Array.from(a.changedTouches).forEach(n=>{delete e[n.identifier]})}function l(a){var f;const n=(f=e[a])==null?void 0:f.values().reverse();if(!n)throw new Error(`No samples for touch id ${a}`);const s=n[0],m=[],b=[];for(const u of n){if(s[0]-u[0]>Zt)break;m.push({t:u[0],d:u[1].clientX}),b.push({t:u[0],d:u[1].clientY})}return{x:Ye(m),y:Ye(b),get direction(){const{x:u,y}=this,[d,g]=[Math.abs(u),Math.abs(y)];return d>g&&u>=0?"right":d>g&&u<=0?"left":g>d&&y>=0?"down":g>d&&y<=0?"up":Jt()}}}return{addMovement:o,endTouch:t,getVelocity:l}}function Jt(){throw new Error}function Qt(e){let{isActive:o,isTemporary:t,width:l,touchless:a,position:n}=e;me(()=>{window.addEventListener("touchstart",_,{passive:!0}),window.addEventListener("touchmove",T,{passive:!1}),window.addEventListener("touchend",B,{passive:!0})}),ge(()=>{window.removeEventListener("touchstart",_),window.removeEventListener("touchmove",T),window.removeEventListener("touchend",B)});const s=r(()=>["left","right"].includes(n.value)),{addMovement:m,endTouch:b,getVelocity:f}=Gt();let u=!1;const y=C(!1),d=C(0),g=C(0);let x;function k(p,i){return(n.value==="left"?p:n.value==="right"?document.documentElement.clientWidth-p:n.value==="top"?p:n.value==="bottom"?document.documentElement.clientHeight-p:K())-(i?l.value:0)}function P(p){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const h=n.value==="left"?(p-g.value)/l.value:n.value==="right"?(document.documentElement.clientWidth-p-g.value)/l.value:n.value==="top"?(p-g.value)/l.value:n.value==="bottom"?(document.documentElement.clientHeight-p-g.value)/l.value:K();return i?Math.max(0,Math.min(1,h)):h}function _(p){if(a.value)return;const i=p.changedTouches[0].clientX,h=p.changedTouches[0].clientY,v=25,S=n.value==="left"?i<v:n.value==="right"?i>document.documentElement.clientWidth-v:n.value==="top"?h<v:n.value==="bottom"?h>document.documentElement.clientHeight-v:K(),w=o.value&&(n.value==="left"?i<l.value:n.value==="right"?i>document.documentElement.clientWidth-l.value:n.value==="top"?h<l.value:n.value==="bottom"?h>document.documentElement.clientHeight-l.value:K());(S||w||o.value&&t.value)&&(u=!0,x=[i,h],g.value=k(s.value?i:h,o.value),d.value=P(s.value?i:h),b(p),m(p))}function T(p){const i=p.changedTouches[0].clientX,h=p.changedTouches[0].clientY;if(u){if(!p.cancelable){u=!1;return}const S=Math.abs(i-x[0]),w=Math.abs(h-x[1]);(s.value?S>w&&S>3:w>S&&w>3)?(y.value=!0,u=!1):(s.value?w:S)>3&&(u=!1)}if(!y.value)return;p.preventDefault(),m(p);const v=P(s.value?i:h,!1);d.value=Math.max(0,Math.min(1,v)),v>1?g.value=k(s.value?i:h,!0):v<0&&(g.value=k(s.value?i:h,!1))}function B(p){if(u=!1,!y.value)return;m(p),y.value=!1;const i=f(p.changedTouches[0].identifier),h=Math.abs(i.x),v=Math.abs(i.y);(s.value?h>v&&h>400:v>h&&v>3)?o.value=i.direction===({left:"right",right:"left",top:"down",bottom:"up"}[n.value]||K()):o.value=d.value>.5}const L=r(()=>y.value?{transform:n.value==="left"?`translateX(calc(-100% + ${d.value*l.value}px))`:n.value==="right"?`translateX(calc(100% - ${d.value*l.value}px))`:n.value==="top"?`translateY(calc(-100% + ${d.value*l.value}px))`:n.value==="bottom"?`translateY(calc(100% - ${d.value*l.value}px))`:K(),transition:"none"}:void 0);return{isDragging:y,dragProgress:d,dragStyles:L}}function K(){throw new Error}function ea(){const o=Ce("useScopeId").vnode.scopeId;return{scopeId:o?{[o]:""}:void 0}}const ta=["start","end","left","right","top","bottom"],aa=A({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>ta.includes(e)},sticky:Boolean,...ke(),...U(),...ht(),...Ie(),...Ae(),...Ee(),...ne({tag:"nav"}),...fe()},"VNavigationDrawer"),na=D()({name:"VNavigationDrawer",props:aa(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,o){let{attrs:t,emit:l,slots:a}=o;const{isRtl:n}=Pe(),{themeClasses:s}=he(e),{borderClasses:m}=Ve(e),{backgroundColorClasses:b,backgroundColorStyles:f}=re(q(e,"color")),{elevationClasses:u}=Te(e),{displayClasses:y,mobile:d}=yt(e),{roundedClasses:g}=Le(e),x=ot(),k=Xe(e,"modelValue",null,N=>!!N),{ssrBootStyles:P}=Me(),{scopeId:_}=ea(),T=de(),B=C(!1),L=r(()=>e.rail&&e.expandOnHover&&B.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),p=r(()=>lt(e.location,n.value)),i=r(()=>!e.permanent&&(d.value||e.temporary)),h=r(()=>e.sticky&&!i.value&&p.value!=="bottom");ue(()=>e.expandOnHover&&e.rail!=null,()=>{Y(B,N=>l("update:rail",!N))}),ue(()=>!e.disableResizeWatcher,()=>{Y(i,N=>!e.permanent&&_t(()=>k.value=!N))}),ue(()=>!e.disableRouteWatcher&&!!x,()=>{Y(x.currentRoute,()=>i.value&&(k.value=!1))}),Y(()=>e.permanent,N=>{N&&(k.value=!0)}),bt(()=>{e.modelValue!=null||i.value||(k.value=e.permanent||!d.value)});const{isDragging:v,dragProgress:S,dragStyles:w}=Qt({isActive:k,isTemporary:i,width:L,touchless:q(e,"touchless"),position:p}),M=r(()=>{const N=i.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):L.value;return v.value?N*S.value:N}),{layoutItemStyles:R,layoutItemScrimStyles:j}=$e({id:e.name,order:r(()=>parseInt(e.order,10)),position:p,layoutSize:M,elementSize:L,active:r(()=>k.value||v.value),disableTransitions:r(()=>v.value),absolute:r(()=>e.absolute||h.value&&typeof F.value!="string")}),{isStuck:F,stickyStyles:be}=Ut({rootEl:T,isSticky:h,layoutItemStyles:R}),pe=re(r(()=>typeof e.scrim=="string"?e.scrim:null)),oe=r(()=>({...v.value?{opacity:S.value*.2,transition:"none"}:void 0,...j.value}));Ne({VList:{bgColor:"transparent"}});function le(){B.value=!0}function J(){B.value=!1}return O(()=>{const N=a.image||e.image;return c(G,null,[c(e.tag,te({ref:T,onMouseenter:le,onMouseleave:J,class:["v-navigation-drawer",`v-navigation-drawer--${p.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":B.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":i.value,"v-navigation-drawer--active":k.value,"v-navigation-drawer--sticky":h.value},s.value,b.value,m.value,y.value,u.value,g.value,e.class],style:[f.value,R.value,w.value,P.value,be.value,e.style]},_,t),{default:()=>{var se,W,Z,ie;return[N&&c("div",{key:"image",class:"v-navigation-drawer__img"},[a.image?(se=a.image)==null?void 0:se.call(a,{image:e.image}):c("img",{src:e.image,alt:""},null)]),a.prepend&&c("div",{class:"v-navigation-drawer__prepend"},[(W=a.prepend)==null?void 0:W.call(a)]),c("div",{class:"v-navigation-drawer__content"},[(Z=a.default)==null?void 0:Z.call(a)]),a.append&&c("div",{class:"v-navigation-drawer__append"},[(ie=a.append)==null?void 0:ie.call(a)])]}}),c(pt,{name:"fade-transition"},{default:()=>[i.value&&(v.value||k.value)&&!!e.scrim&&c("div",te({class:["v-navigation-drawer__scrim",pe.backgroundColorClasses.value],style:[oe.value,pe.backgroundColorStyles.value],onClick:()=>k.value=!1},_),null)]})])}),{isStuck:F}}}),oa={__name:"AppNavigation",props:{navigationItems:{type:Array,required:!0},isInPage:{type:Boolean,required:!0},websiteTitle:{type:String,required:!0}},setup(e){const o=Re(),t=()=>{o.value.drawer=!o.value.drawer};return(l,a)=>{const n=tt,s=Pt,m=Mt,b=$t,f=Ht,u=Dt;return V(),ae(G,null,[c(Ft,{elevation:2},{prepend:I(()=>[c(Xt,{class:"d-md-none d-flex",onClick:t})]),default:I(()=>[c(jt,null,{default:I(()=>[c(n,{to:"/",class:"text-anchor text-uppercase font-weight-light"},{default:I(()=>[$(X(e.websiteTitle),1)]),_:1}),c(s)]),_:1}),e.isInPage?(V(),E(m,{key:0,"navigation-items":e.navigationItems},null,8,["navigation-items"])):(V(),E(b,{key:1,"navigation-items":e.navigationItems},null,8,["navigation-items"]))]),_:1}),c(na,{modelValue:xe(o).drawer,"onUpdate:modelValue":a[0]||(a[0]=y=>xe(o).drawer=y),temporary:""},{default:I(()=>[e.isInPage?(V(),E(f,{key:0,"navigation-items":e.navigationItems},null,8,["navigation-items"])):(V(),E(u,{key:1,"navigation-items":e.navigationItems},null,8,["navigation-items"]))]),_:1},8,["modelValue"])],64)}}},xa=xt(oa,[["__scopeId","data-v-bbce653d"]]),la=A({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...ke(),...U(),...Ie(),...Ae(),...Ee(),...ne({tag:"footer"}),...fe()},"VFooter"),sa=D()({name:"VFooter",props:la(),setup(e,o){let{slots:t}=o;const{themeClasses:l}=he(e),{backgroundColorClasses:a,backgroundColorStyles:n}=re(q(e,"color")),{borderClasses:s}=Ve(e),{elevationClasses:m}=Te(e),{roundedClasses:b}=Le(e),f=C(32),{resizeRef:u}=qe(g=>{g.length&&(f.value=g[0].target.clientHeight)}),y=r(()=>e.height==="auto"?f.value:parseInt(e.height,10)),{layoutItemStyles:d}=$e({id:e.name,order:r(()=>parseInt(e.order,10)),position:r(()=>"bottom"),layoutSize:y,elementSize:r(()=>e.height==="auto"?void 0:y.value),active:r(()=>e.app),absolute:q(e,"absolute")});return O(()=>c(e.tag,{ref:u,class:["v-footer",l.value,a.value,s.value,m.value,b.value,e.class],style:[n.value,e.app?d.value:{height:z(e.height)},e.style]},t)),{}}}),ia=["href"],ua=["href"],ra=["href"],ca={__name:"AppFooter",props:{linkedinLink:{required:!0,type:String},githubLink:{required:!0,type:String},emailAddress:{required:!0,type:String}},setup(e){const o=new Date().getFullYear();return(t,l)=>(V(),E(sa,{class:"bg-black"},{default:I(()=>[c(St,{class:"text-white"},{default:I(()=>[c(Se,{justify:"center"},{default:I(()=>[ee("p",null,[$(" Connect with me on "),ee("a",{class:"text-white",href:e.linkedinLink},"LinkedIn",8,ia),$(" or "),ee("a",{class:"text-white",href:e.githubLink},"GitHub",8,ua),$(". ")])]),_:1}),c(Se,{justify:"center"},{default:I(()=>[ee("p",null,[$(" Email me at "),ee("a",{class:"text-white",href:"mailto:"+e.emailAddress},X(e.emailAddress),9,ra)])]),_:1}),c(Se,{justify:"center",class:"mt-8"},{default:I(()=>[$(" All rights reserved - "+X(xe(o)),1)]),_:1})]),_:1})]),_:1}))}},ka=ca,va=A({...U(),...It({fullHeight:!0}),...fe()},"VApp"),Ia=D()({name:"VApp",props:va(),setup(e,o){let{slots:t}=o;const l=he(e),{layoutClasses:a,getLayoutItem:n,items:s,layoutRef:m}=Bt(e),{rtlClasses:b}=Pe();return O(()=>{var f;return c("div",{ref:m,class:["v-application",l.themeClasses.value,a.value,b.value,e.class],style:[e.style]},[c("div",{class:"v-application__wrap"},[(f=t.default)==null?void 0:f.call(t)])])}),{getLayoutItem:n,items:s,theme:l}}}),da=A({scrollable:Boolean,...U(),...ne({tag:"main"})},"VMain"),Va=D()({name:"VMain",props:da(),setup(e,o){let{slots:t}=o;const{mainStyles:l}=Vt(),{ssrBootStyles:a}=Me();return O(()=>c(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[l.value,a.value,e.style]},{default:()=>{var n,s;return[e.scrollable?c("div",{class:"v-main__scroller"},[(n=t.default)==null?void 0:n.call(t)]):(s=t.default)==null?void 0:s.call(t)]}})),{}}});export{Ia as V,xa as _,Va as a,ka as b};
