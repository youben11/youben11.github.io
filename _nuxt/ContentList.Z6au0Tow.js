import d from"./ContentQuery.DUGA5vFN.js";import{ad as c,aJ as l,ag as p}from"./entry.CFXAnef3.js";import"./query.DIr82Ikp.js";import"./preview.DEuUZijf.js";const r=(u,t)=>p("pre",null,JSON.stringify({message:"You should use slots with <ContentList>",slot:u,data:t},null,2)),h=c({name:"ContentList",props:{path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0}},render(u){const t=l(),{path:f,query:a}=u,n={...a||{},path:f||(a==null?void 0:a.path)||"/"};return p(d,n,{default:t!=null&&t.default?({data:e,refresh:o,isPartial:m})=>t.default({list:e,refresh:o,isPartial:m,...this.$attrs}):e=>r("default",e.data),empty:e=>t!=null&&t.empty?t.empty(e):r("default",e==null?void 0:e.data),"not-found":e=>{var o;return t!=null&&t["not-found"]?(o=t==null?void 0:t["not-found"])==null?void 0:o.call(t,e):r("not-found",e==null?void 0:e.data)}})}}),y=h,S=y;export{S as default};