import{_ as h}from"./_plugin-vue_export-helper-c27b6911.js";import{e as u,f as n,t as l,y as p,g,r as y,o as c}from"./vendor-66ba3070.js";const w={props:{book:{type:Object,required:!0}},data(){return{menuVisible:!1,period:"weekly"}},computed:{setPeriodWord(){return this.period==="daily"?this.t("daily"):this.period==="weekly"?this.t("weekly"):this.period==="monthly"?this.t("monthly"):this.period==="yearly"?this.t("yearly"):this.t("weekly")},toChartData(){return this.period==="daily"?this.dailyData:this.period==="weekly"?this.weeklyData:this.period==="monthly"?this.monthlyData:this.period==="yearly"?this.yearlyData:!1},dailyData(){const s=this.book.page_views.reduce((r,a)=>{const i=a.created_at.split("T")[0];return r[i]||(r[i]=0),r[i]+=1,r},{}),o=[],e=new Date().toISOString().split("T")[0];return o.push({date:e,count:s[e]||0}),o.map((r,a)=>({x:a,y:isNaN(r.count)?0:r.count,date:r.date}))},weeklyData(){const s=this.book.page_views.reduce((t,e)=>{const r=e.created_at.split("T")[0];return t[r]||(t[r]=0),t[r]+=1,t},{}),o=[];for(let t=6;t>=0;t--){const e=new Date;e.setDate(e.getDate()-t);const r=e.toISOString().split("T")[0];o.push({date:r,count:s[r]||0})}return o.map((t,e)=>({x:e,y:isNaN(t.count)?0:t.count,date:t.date}))},monthlyData(){const s=this.book.page_views.reduce((t,e)=>{const a=new Date(e.created_at).toISOString().split("T")[0];return t[a]||(t[a]=0),t[a]+=1,t},{}),o=[];for(let t=29;t>=0;t--){const e=new Date;e.setDate(e.getDate()-t);const r=e.toISOString().split("T")[0];o.push({date:r,count:s[r]||0})}return o.map((t,e)=>({x:e,y:isNaN(t.count)?0:t.count,date:t.date}))},yearlyData(){const s=this.book.page_views.reduce((t,e)=>{const r=new Date(e.created_at);r.setMonth(r.getMonth(),1);const a=`${r.getFullYear()}-${String(r.getMonth()+1).padStart(2,"0")}-01`;return t[a]||(t[a]=0),t[a]+=1,t},{}),o=[];for(let t=11;t>=0;t--){const e=new Date;e.setMonth(e.getMonth()-t,1);const r=`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-01`;o.push({date:r,count:s[r]||0})}return o.map((t,e)=>({x:e,y:isNaN(t.count)?0:t.count,date:t.date}))},linePath(){return this.weeklyData.reduce((o,t,e)=>{if(e===0)return`M ${t.x} ${t.y}`;const r=this.weeklyData[e-1],a=(r.x+t.x)/2;return`${o} Q ${r.x} ${r.y}, ${a} ${r.y} T ${t.x} ${t.y}`},"")},growthRate(){return this.calculateGrowthRate(this.period)},totalPageViews(){return this.toChartData.reduce((o,t)=>o+t.y,0)}},methods:{toggleMenu(){this.menuVisible=!this.menuVisible},setPeriod(s){this.period=s,this.menuVisible=!1},calculateGrowthRate(s){const o=this.toChartData,t=this.getPreviousPeriodData(s),e=o.reduce((i,d)=>i+d.y,0),r=t.reduce((i,d)=>i+d.y,0);return r===0?e>0?100:0:((e-r)/r*100).toFixed(2)},getPreviousPeriodData(s){if(s==="daily"){const o=new Date;o.setDate(o.getDate()-2);const t=o.toISOString().split("T")[0];return[{y:this.book.page_views.filter(r=>r.created_at.split("T")[0]===t).length}]}if(s==="weekly"){const o=[];for(let t=13;t>=7;t--){const e=new Date;e.setDate(e.getDate()-t);const r=e.toISOString().split("T")[0],a=this.book.page_views.filter(i=>i.created_at.split("T")[0]===r).length;o.push({y:a})}return o}if(s==="monthly"){const o=[];for(let t=59;t>=30;t--){const e=new Date;e.setDate(e.getDate()-t);const r=e.toISOString().split("T")[0],a=this.book.page_views.filter(i=>i.created_at.split("T")[0]===r).length;o.push({y:a})}return o}if(s==="yearly"){const o=[];for(let t=23;t>=12;t--){const e=new Date;e.setMonth(e.getMonth()-t,1);const r=`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-01`,a=this.book.page_views.filter(i=>i.created_at.split("T")[0]===r).length;o.push({y:a})}return o}}}},f={class:"w-full p-4 lg:p-10 border border-comiee rounded-lg"},k={class:"flex justify-between"},m=n("h3",{class:"text-xs text-[#9aa0a6] leading-6"},"ページビュー",-1),v={class:"flex items-center"},D={class:"lg:text-[28px] text-2xl"},x=n("svg",{height:"18",class:"ml-2",viewBox:"0 0 24 24",fill:"none"},[n("path",{d:"M15.5799 11.9999C15.5799 13.9799 13.9799 15.5799 11.9999 15.5799C10.0199 15.5799 8.41992 13.9799 8.41992 11.9999C8.41992 10.0199 10.0199 8.41992 11.9999 8.41992C13.9799 8.41992 15.5799 10.0199 15.5799 11.9999Z",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),n("path",{d:"M12.0001 20.2702C15.5301 20.2702 18.8201 18.1902 21.1101 14.5902C22.0101 13.1802 22.0101 10.8102 21.1101 9.40021C18.8201 5.80021 15.5301 3.72021 12.0001 3.72021C8.47009 3.72021 5.18009 5.80021 2.89009 9.40021C1.99009 10.8102 1.99009 13.1802 2.89009 14.5902C5.18009 18.1902 8.47009 20.2702 12.0001 20.2702Z",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})],-1),_={class:"flex items-center text-[#2BB974] text-sm"},S=n("svg",{class:"mr-1",width:"18",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"})],-1),b={class:""},C={class:"relative"},P={key:0,class:"absolute bg-white dark:bg-dark-1 border border-comiee rounded-lg p-2 mt-2"};function M(s,o,t,e,r,a){const i=y("line-chart");return c(),u("div",f,[n("div",k,[n("div",null,[m,n("div",v,[n("span",D,l(a.totalPageViews),1),x]),n("div",_,[S,n("span",b,l(a.growthRate===1/0?"∞":a.growthRate+"%"),1)])]),n("div",C,[n("div",{class:"cursor-pointer px-4 py-1.5 border border-comiee rounded-lg",onClick:o[0]||(o[0]=(...d)=>a.toggleMenu&&a.toggleMenu(...d))},l(a.setPeriodWord),1),r.menuVisible?(c(),u("div",P,[n("div",{class:"cursor-pointer py-1 px-3 hover:text-primary dark:hover:text-f5 whitespace-nowrap",onClick:o[1]||(o[1]=d=>a.setPeriod("daily"))},l(s.t("1日")),1),n("div",{class:"cursor-pointer py-1 px-3 hover:text-primary dark:hover:text-f5 whitespace-nowrap",onClick:o[2]||(o[2]=d=>a.setPeriod("weekly"))},l(s.t("1週間")),1),n("div",{class:"cursor-pointer py-1 px-3 hover:text-primary dark:hover:text-f5 whitespace-nowrap",onClick:o[3]||(o[3]=d=>a.setPeriod("monthly"))},l(s.t("1ヶ月")),1),n("div",{class:"cursor-pointer py-1 px-3 hover:text-primary dark:hover:text-f5 whitespace-nowrap",onClick:o[4]||(o[4]=d=>a.setPeriod("yearly"))},l(s.t("1年間")),1)])):p("",!0)])]),g(i,{data:a.toChartData,type:a.setPeriodWord},null,8,["data","type"])])}const V=h(w,[["render",M]]);export{V as default};
