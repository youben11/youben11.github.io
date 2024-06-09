import{ax as h,J as _,aH as y,aI as w,av as g,ad as D,aJ as H,au as x,ag as u}from"./entry.CFXAnef3.js";import{u as S}from"./vue.f36acd1f.Of76qVc3.js";import b from"./ContentRenderer.C3J96vkl.js";import q from"./ContentQuery.DUGA5vFN.js";import"./ContentRendererMarkdown.vue.ChUgRz9d.js";import"./index.BsYmvPZw.js";import"./preview.DEuUZijf.js";import"./query.DIr82Ikp.js";const d=(p,s=y())=>{const e=h(p),f=g();_(()=>h(p),(n=e)=>{if(!s.path||!n)return;const t=Object.assign({},(n==null?void 0:n.head)||{});t.meta=[...t.meta||[]],t.link=[...t.link||[]];const r=t.title||(n==null?void 0:n.title);r&&(t.title=r),f.public.content.host;const c=(t==null?void 0:t.description)||(n==null?void 0:n.description);c&&t.meta.filter(l=>l.name==="description").length===0&&t.meta.push({name:"description",content:c}),t!=null&&t.image||(n==null||n.image),w(()=>S(t))},{immediate:!0})},$=D({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:void 0}},render(p){const{contentHead:s}=g().public.content,e=H(),{tag:f,excerpt:m,path:n,query:t,head:r}=p,c=r===void 0?s:r,l={...t||{},path:n||(t==null?void 0:t.path)||x(y().path),find:"one"},v=(o,i)=>u("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:o,data:i},null,2));return u(q,l,{default:e!=null&&e.default?({data:o,refresh:i,isPartial:C})=>{var a;return c&&d(o),(a=e.default)==null?void 0:a.call(e,{doc:o,refresh:i,isPartial:C,excerpt:m,...this.$attrs})}:({data:o})=>(c&&d(o),u(b,{value:o,excerpt:m,tag:f,...this.$attrs},{empty:i=>e!=null&&e.empty?e.empty(i):v("default",o)})),empty:o=>{var i;return((i=e==null?void 0:e.empty)==null?void 0:i.call(e,o))||u("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":o=>{var i;return((i=e==null?void 0:e["not-found"])==null?void 0:i.call(e,o))||u("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}}),j=$,P=j;export{P as default};