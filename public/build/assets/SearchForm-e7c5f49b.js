import{i as m,z as x,A as f,s as g,o as r,b as n,e,w as b,B as w,f as d,F as h,r as y,t as u,C,p as j,h as S}from"./vendor-3de5d8e5.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";const l=c=>(j("data-v-bae95a75"),c=c(),S(),c),F={class:"header-search-input relative flex items-center mx-auto"},L={class:"relative flex items-center"},M=l(()=>e("div",{class:"absolute px-4 py-2 flex-shrink-0"},[e("svg",{fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})])],-1)),I=["placeholder"],z={key:0,width:"18",height:"18",viewBox:"0 0 24 24",fill:"none"},D=l(()=>e("title",null,"reset form",-1)),N=l(()=>e("path",{d:"M5.00098 5L19 18.9991",stroke:"#aaa","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)),V=l(()=>e("path",{d:"M4.99996 18.9991L18.999 5",stroke:"#aaa","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)),$=[D,N,V],A={key:0,class:"absolute dark:bg-dark top-[30px] bg-white shadow-lg z-[999] overflow-y-auto max-h-[500px] scroll-none rounded-[5px] p-2"},E=["onClick"],O={class:"flex items-center"},T=["src"],U=l(()=>e("img",{src:"/img/noimage.svg",class:"block dark:hidden w-[70px] h-[70px] object-cover"},null,-1)),q=l(()=>e("img",{src:"/img/noimage-dark.svg",class:"hidden dark:block w-[70px] h-[70px] object-cover"},null,-1)),G={class:"ml-4 w-[200px]"},H={class:"text-xl font-bold"},J={class:"text-666 dark:text-ddd"},K={__name:"SearchForm",setup(c){const i=m(!1),s=x({search:"",array:[]}),p=f(()=>s.search?Object.values(s.array).filter(o=>{let a=o.title.concat(o.name);return s.search.toLowerCase().split(" ").every(t=>a.toLowerCase().includes(t))}):s.array),_=async()=>{let o=await axios.get("/api/search-words");s.array=o.data};g(()=>{_()});function v(o){location.href="/b/"+o.title}function k(){s.search=""}return(o,a)=>(r(),n("div",F,[e("div",L,[M,b(e("input",{ref:"anyName","onUpdate:modelValue":a[0]||(a[0]=t=>s.search=t),type:"text",placeholder:o.t("作品名、クリエイターで調べる"),class:"search-form-input",onFocus:a[1]||(a[1]=t=>i.value=!0)},null,40,I),[[w,s.search]])]),e("button",{onClick:a[2]||(a[2]=t=>k()),class:"absolute top-[10px] right-2"},[i.value&&s.search.length>1?(r(),n("svg",z,$)):d("",!0)]),i.value&&s.search.length>1?(r(),n("div",A,[(r(!0),n(h,null,y(C(p),t=>(r(),n("a",{key:t,class:"flex items-center p-4 cursor-pointer dark:hover:bg-dark-1 hover:bg-[#f5f5f5] rounded",onClick:P=>v(t)},[e("div",O,[t.thumbnail?(r(),n("img",{key:0,src:t.thumbnail,class:"w-[80px] h-[80px] object-cover"},null,8,T)):(r(),n(h,{key:1},[U,q],64)),e("div",G,[e("div",H,u(t.title),1),e("div",J,u(t.name),1)])])],8,E))),128))])):d("",!0)]))}},W=B(K,[["__scopeId","data-v-bae95a75"]]);export{W as default};
