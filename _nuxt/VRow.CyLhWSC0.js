import{m as V}from"./rounded.BvZnAVs0.js";import{l as v,n as S,f as k,W as w,U as b,V as L}from"./entry.B2FStRP4.js";import{m as N}from"./tag.6iVuizB9.js";const o=["start","end","center"],f=["space-between","space-around","space-evenly"];function i(t,s){return b.reduce((e,a)=>{const n=t+L(a);return e[n]=s(),e},{})}const P=[...o,"baseline","stretch"],g=t=>P.includes(t),d=i("align",()=>({type:String,default:null,validator:g})),A=[...o,...f],y=t=>A.includes(t),m=i("justify",()=>({type:String,default:null,validator:y})),E=[...o,...f,"stretch"],C=t=>E.includes(t),j=i("alignContent",()=>({type:String,default:null,validator:C})),u={align:Object.keys(d),justify:Object.keys(m),alignContent:Object.keys(j)},h={align:"align",justify:"justify",alignContent:"align-content"};function G(t,s,e){let a=h[t];if(e!=null){if(s){const n=s.replace(t,"");a+=`-${n}`}return a+=`-${e}`,a.toLowerCase()}}const R=v({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:g},...d,justify:{type:String,default:null,validator:y},...m,alignContent:{type:String,default:null,validator:C},...j,...V(),...N()},"VRow"),I=S()({name:"VRow",props:R(),setup(t,s){let{slots:e}=s;const a=k(()=>{const n=[];let l;for(l in u)u[l].forEach(r=>{const p=t[r],c=G(l,r,p);c&&n.push(c)});return n.push({"v-row--no-gutters":t.noGutters,"v-row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),n});return()=>{var n;return w(t.tag,{class:["v-row",a.value,t.class],style:t.style},(n=e.default)==null?void 0:n.call(e))}}});export{I as V};
