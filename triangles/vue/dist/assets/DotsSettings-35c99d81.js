import{n as h}from"./effector-vue-composition-f339d5b3.js";import{$ as V,a as F,b as I,r as C,s as M,c as D,d as N,_ as T}from"./index-ce1e38fc.js";import{h as z,d as S,o as y,s as $,q as u,B as x,G as p,c as q,N as E,a as i,l as c,F as G,x as B}from"./vue-9111343b.js";import{a as k,a3 as K}from"./element-plus-903805b6.js";import"./effector-77000f8f.js";import"./effector-storage-9a361a45.js";import"./patronum-da9a1d66.js";import"./lodash-es-0b3e6462.js";import"./async-validator-dee29e8b.js";import"./vueuse-core-7723dc9b.js";import"./ctrl-f8748455.js";const L=z({name:"DotsSettings",emits:{reset:()=>!0},setup(o,{emit:b}){const d=h(V),_=h(F),g=h(I),a=k([]),n=k();S(_,e=>{a.value=e.map(t=>({...t}))},{immediate:!0}),S(g,e=>{n.value=e?{...e}:null},{immediate:!0});function f(e,t="x",s=0){if(!e||!s)return;const m=a.value.find(r=>r.name===e),w=["x","y"].includes(t);m&&w&&(a.value=a.value.map(r=>r.name===e?{...r,[t]:s}:r))}function l(){if(!a.value.every((t,s)=>{const m=_.value[s];return t.x===m.x&&t.y===m.y})){C();const t=a.value.map(s=>({...s}));M(t)}d.value?D():N()}function v(){D(),C(),b("reset")}return{isDrawing:d,mainDots:a,firstDot:n,setValueToMainDotsByChar:f,handleSubmit:l,handleClickClearButton:v}}});const P={class:"dot-param"},R=["for"],X={class:"dot-param"},Y=["for"],j={class:"button-group"};function A(o,b,d,_,g,a){const n=p("el-input-number"),f=p("el-form-item"),l=p("el-button"),v=p("el-form");return y(),$(v,{"label-position":"top",onSubmit:x(o.handleSubmit,["prevent"])},{default:u(()=>[(y(!0),q(G,null,E(o.mainDots,e=>(y(),$(f,{key:e.name,label:`Dot ${e.name}`,class:"dot-params"},{default:u(()=>[i("div",P,[i("label",{for:`dot-${e.name}-x`,class:"dot-param-label"}," X ",8,R),c(n,{id:`dot-${e.name}-x`,max:1e3,min:0,"model-value":e.x,step:10,class:"dot-param-input","controls-position":"right",onChange:t=>o.setValueToMainDotsByChar(e.name,"x",t)},null,8,["id","model-value","onChange"])]),i("div",X,[i("label",{for:`dot-${e.name}-y`,class:"dot-param-label"}," Y ",8,Y),c(n,{id:`dot-${e.name}-y`,max:1e3,min:0,"model-value":e.y,step:10,class:"dot-param-input","controls-position":"right",onChange:t=>o.setValueToMainDotsByChar(e.name,"y",t)},null,8,["id","model-value","onChange"])])]),_:2},1032,["label"]))),128)),i("div",j,[c(l,{"native-type":"submit",type:"primary",size:"large"},{default:u(()=>[B(K(o.isDrawing?"Pause":"Run"),1)]),_:1}),c(l,{"native-type":"reset",type:"default",size:"large",onClick:x(o.handleClickClearButton,["prevent"])},{default:u(()=>[B(" Clear ")]),_:1},8,["onClick"])])]),_:1},8,["onSubmit"])}const se=T(L,[["render",A],["__scopeId","data-v-329980ae"]]);export{se as default};
