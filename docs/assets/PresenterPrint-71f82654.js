import{d as _,u as d,a as p,c as m,b as h,e as n,f as t,t as a,g as s,F as u,r as f,n as g,h as v,o as r,i as b,j as x,k as y,l as N,m as k,_ as P}from"./index-8a78f6b0.js";import{N as w}from"./NoteDisplay-587fde63.js";const V={class:"m-4"},L={class:"mb-10"},S={class:"text-4xl font-bold mt-2"},T={class:"opacity-50"},B={class:"text-lg"},C={class:"font-bold flex gap-2"},D={class:"opacity-50"},H=t("div",{class:"flex-auto"},null,-1),j={key:0,class:"border-gray-400/50 mb-8"},z=_({__name:"PresenterPrint",setup(F){d(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),p({title:`Notes - ${m.title}`});const i=h(()=>v.map(o=>{var l;return(l=o.meta)==null?void 0:l.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,l)=>(r(),n("div",{id:"page-root",style:g(s(k))},[t("div",V,[t("div",L,[t("h1",S,a(s(m).title),1),t("div",T,a(new Date().toLocaleString()),1)]),(r(!0),n(u,null,f(s(i),(e,c)=>(r(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",B,[t("div",C,[t("div",D,a(e==null?void 0:e.no)+"/"+a(s(b)),1),x(" "+a(e==null?void 0:e.title)+" ",1),H])]),y(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<s(i).length-1?(r(),n("hr",j)):N("v-if",!0)]))),128))])],4))}}),E=P(z,[["__file","C:/pbo/materi-pbo-pertemuan-9/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
