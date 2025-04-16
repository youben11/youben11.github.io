import{_ as A}from"./_plugin-vue_export-helper.DlAUqK2U.js";import{g as $,a as D,m as L,h as w,i as z,j as R,k as j,b as F,u as O,l as q,n as E,o as N,V as M,e as v}from"./index.CxHfF8q3.js";import{m as G,d as H,b as J,e as K,c as Q,f as U}from"./rounded.BvZnAVs0.js";import{l as W,I as X,m as Y,n as Z,S as ee,f as s,q as te,v as ae,R as le,b as a,N as oe,o as ne,j as se,w as re,O as ie}from"./entry.B2FStRP4.js";import{m as ce}from"./tag.6iVuizB9.js";import{V as ue}from"./VBtn.ByFQYKWq.js";const de=$("v-alert-title"),ve=["success","info","warning","error"],me=W({border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:X,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>ve.includes(e)},...G(),...D(),...H(),...L(),...w(),...z(),...J(),...ce(),...Y(),...R({variant:"flat"})},"VAlert"),fe=Z()({name:"VAlert",props:me(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,r){let{emit:m,slots:t}=r;const i=ee(e,"modelValue"),o=s(()=>{if(e.icon!==!1)return e.type?e.icon??`$${e.type}`:e.icon}),f=s(()=>({color:e.color??e.type,variant:e.variant})),{themeClasses:y}=te(e),{colorClasses:b,colorStyles:k,variantClasses:P}=j(f),{densityClasses:V}=F(e),{dimensionStyles:_}=K(e),{elevationClasses:C}=O(e),{locationStyles:x}=q(e),{positionClasses:g}=E(e),{roundedClasses:S}=Q(e),{textColorClasses:B,textColorStyles:h}=U(ae(e,"borderColor")),{t:p}=le(),c=s(()=>({"aria-label":p(e.closeLabel),onClick(n){i.value=!1,m("click:close",n)}}));return()=>{const n=!!(t.prepend||o.value),I=!!(t.title||e.title),T=!!(t.close||e.closable);return i.value&&a(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},y.value,b.value,V.value,C.value,g.value,S.value,P.value,e.class],style:[k.value,_.value,x.value,e.style],role:"alert"},{default:()=>{var u,d;return[N(!1,"v-alert"),e.border&&a("div",{key:"border",class:["v-alert__border",B.value],style:h.value},null),n&&a("div",{key:"prepend",class:"v-alert__prepend"},[t.prepend?a(v,{key:"prepend-defaults",disabled:!o.value,defaults:{VIcon:{density:e.density,icon:o.value,size:e.prominent?44:28}}},t.prepend):a(M,{key:"prepend-icon",density:e.density,icon:o.value,size:e.prominent?44:28},null)]),a("div",{class:"v-alert__content"},[I&&a(de,{key:"title"},{default:()=>{var l;return[((l=t.title)==null?void 0:l.call(t))??e.title]}}),((u=t.text)==null?void 0:u.call(t))??e.text,(d=t.default)==null?void 0:d.call(t)]),t.append&&a("div",{key:"append",class:"v-alert__append"},[t.append()]),T&&a("div",{key:"close",class:"v-alert__close"},[t.close?a(v,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var l;return[(l=t.close)==null?void 0:l.call(t,{props:c.value})]}}):a(ue,oe({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},c.value),null)])]}})}}}),ye={};function be(e,r){return ne(),se(fe,{class:"text-center text-body-1 font-italic pb-8"},{default:re(()=>[ie(e.$slots,"default")]),_:3})}const ge=A(ye,[["render",be]]);export{ge as default};
