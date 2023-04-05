import{_ as a}from"./_plugin-vue_export-helper-c27b6911.js";import{o as s,c as l,a as t,t as o,F as m,r as h}from"./app-f71f6793.js";const p=[{version:"v1.0.7",title:"エピソードへのいいねの追加、作品のお気に入り修正",content:"エピソードへのいいね機能を追加いたしました。それに伴い、お気に入りボタンの表示を修正いたしました。",date:"2023/3/29"},{version:"v1.0.6",title:"有料販売に伴う契約書の撤廃",content:"今後、有料販売における契約書の提出が不要になります。その変更に伴い、利用規約に「配信に関するComieeの権利」を追加しました。",date:"2023/3/27"},{version:"v1.0.5",title:"URLに言語を含まないように修正を行いました",content:"パフォーマンス向上のため、URLに言語を含まないように修正を行いました。",date:"2023/3/26"},{version:"v1.0.4",title:"作品のプレフィックスの修正を行いました",content:"作品のURLに「books」というプレフィックスがついておりましたが、URLの短縮のため「/b/」に変更いたしました。これにより作品URL、エピソードURLがより簡潔に表示されるようになります。",date:"2023/3/26"},{version:"v1.0.3",title:"作品とエピソードのURLの修正を行いました",content:"URLに作品に振り分けられたIDを使用していましたが、作品のオリジナリティを担保するため作品タイトルをURLに含めるよう修正いたしました。",date:"2023/3/25"},{version:"v1.0.2",title:"本棚に「フォロー中」のタブを追加しました",content:"今までは、お気に入り・閲覧履歴・購入履歴のタブがありましたが、フォローしているクリエイターの作品一覧が見れる「フォロー中」タブを追加いたしました。これによりフォローしているクリエイターの作品もまとめて見ることができるようになります。",date:"2023/3/25"},{version:"v1.0.1",title:"リリースノート機能を追加しました",content:"お客様にComieeの改善点をお伝えするため、リリースノート機能を追加いたしました。これにより、アップデート情報を確認することができるようになります。",date:"2023/3/24"},{version:"v1.0.0",title:"Comieeをローンチしました！",content:"ローンチを行いました。機能としては、投稿、コメント、お気に入り、フォロー、購入、本棚、閲覧などが基本機能になります。これからお客様の声を反映し更なるバージョンアップを行っていきます。",date:"2023/3/01"}],v={data(){return{notes:p,displayedNotes:[],itemsPerLoad:5,currentIndex:0}},mounted(){this.loadMore(),window.addEventListener("scroll",this.handleScroll)},beforeUnmount(){window.removeEventListener("scroll",this.handleScroll)},methods:{loadMore(){this.currentIndex+=this.itemsPerLoad,this.displayedNotes=this.notes.slice(0,this.currentIndex)},handleScroll(){const e=document.documentElement.scrollTop||document.body.scrollTop,r=window.innerHeight;(document.documentElement.scrollHeight||document.body.scrollHeight)-(e+r)<20&&this.loadMore()}}},u={class:"text-2xl lg:text-3xl dark:text-f5 font-bold my-8 lg:mb-10"},x={class:"text-xl lg:text-2xl mb-4 dark:text-f5"},L={class:"mt-4 text-[15px]"},_={class:"whitespace-pre-line"};function b(e,r,i,g,d,f){return s(),l("div",null,[t("h2",u,o(e.t("リリースノート")),1),(s(!0),l(m,null,h(d.displayedNotes,(n,c)=>(s(),l("div",{key:c,class:"p-6 lg:p-8 border border-b-l-c dark:border-dark-1 rounded-lg mb-6"},[t("h3",x," 【"+o(n.version)+"】"+o(e.t(n.title)),1),t("div",L,[t("p",_,o(e.t(n.content)),1),t("p",null,o(n.date),1)])]))),128))])}const w=a(v,[["render",b]]);export{w as default};