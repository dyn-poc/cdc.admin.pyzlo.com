import{m as l,c as p,u as m,a,r as g,b as f,j as i,S as u,T as h,A as y,w as S,s as b,n as d,d as v}from"./index.00f68770.js";import"./lodash.f70a6700.js";l(e=>({paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",margin:e.spacing(1)},paperRow:{marginTop:e.spacing(8),display:"flex",flexDirection:"row",alignItems:"center",margin:e.spacing(1)}}));const x=p({palette:{primary:{main:"#7a7a7a"}},typography:{h5:{font:"Questrial",fontStyle:"lighter",fontWeight:"lighter",fontSize:"14px",fontFamily:"'Questrial', sans-serif !important"},button:{font:"Questrial",fontStyle:"lighter",fontWeight:"lighter",fontFamily:"'Questrial', sans-serif !important",fontSize:"14px",opacity:.8},fontFamily:["Questrial","sans-serif","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")}}),F=()=>{const e=m(()=>S(v)),[,n,r]=a(b);a(d);const o=t=>n({type:"SHOW",...t});g.exports.useEffect(()=>e.subscribe(s=>{console.log(s),o({message:s.toStrings().reverse()[0],severity:"info"})}).unsubscribe,[e]);const c=f(x);return i("div",{children:i(u,{injectFirst:!0,children:i(h,{theme:c,children:i(y,{snackbarService:r})})})})};export{F as default};
