import{_ as d,o,c as e,F as l,e as x,b as t,t as g,L as f,C as $,r as c,a as r,w as b}from"./index-311f4361.js";const v={data:()=>({DATA:null}),methods:{async getdata(){const a=await(await fetch("http://localhost:3000/products")).json();this.DATA=await a,console.log(this.DATA)}},mounted(){this.getdata()}},L={class:"grid grid-cols-4 gap-[40px]"},A={class:"rounded-[14px] w-440 h-650 bg-gradient-to-bl p-[3px] from-[#FB9D01] to-[#66FC01]"},w={class:"bg-white rounded-[12px] p-2"},C={class:"text-[25px]"},y=["src"],D=t("div",{class:"grid grid-cols-2 text-[20px]"},[t("p",{class:"self-center"},"Lorem ipsum dolor."),t("div",{class:"grid grid-cols-1 justify-self-end"},[t("span",null,"1000c"),t("button",{class:"text-[#FF9900]"},"Купить")])],-1);function F(n,a,i,p,u,_){return o(),e("div",L,[(o(!0),e(l,null,x(n.DATA,s=>(o(),e("div",null,[t("div",A,[t("div",w,[t("div",C,[t("h1",null,g(s.name),1)]),t("img",{class:"rounded-[10px]",src:s.image},null,8,y),D])])]))),256))])}const B=d(v,[["render",F]]),P={components:{ProductList:B,Layout:f,Contacts:$}},T=t("div",{class:"pt-[20px] mt-[20px] mb-[40px] border-t-[3px] border-black"},[t("p",{class:"text-[50px]"},"Каталог")],-1);function k(n,a,i,p,u,_){const s=c("Contacts"),m=c("ProductList"),h=c("Layout");return o(),e(l,null,[r(s,{buttonName:"Контакты"}),r(h,null,{default:b(()=>[t("div",null,[T,r(m)])]),_:1})],64)}const j=d(P,[["render",k]]);export{j as default};
