import{_ as f,u,o as a,c as l,b as t,F as h,f as x,t as r,r as g,e as v,w as m,a as C}from"./index-da710154.js";import{_ as b}from"./Group19-49c36de6.js";const y={data(){return{data:u().data,dataOpt:u().dataOpt,store:u()}},methods:{incrementProductCount:function(s){this.data[s].quantity++},decrementProductCount(s){this.data[s].quantity>1&&this.data[s].quantity--},addToCart(s,p){console.log(s);let c;p=="orders"?c=this.data:c=this.dataOpt;try{this.store.cart[s].quantity+=c[s].quantity}catch(d){console.log(d),console.log(typeof this.store.cart),this.store.cart[s]=c[s]}this.store.uid!=""?fetch("/api/usersAddCart",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({1:parseInt(s),2:this.store.uid,3:p,4:c[s].quantity})}).then(d=>console.log("ok")).catch(d=>console.log(d)):localStorage.setItem("cart",JSON.stringify(this.store.cart))}}},k=t("div",{class:"flex justify-center"},[t("div",{class:"border-b-black border-b-[3px] w-fit mb-20"},[t("h2",{class:"text-[40px]"},"Розничная продукция")])],-1),w={class:"mb-[40px] gap-x-[160px] max-[1000px]:gap-[60px] max-[1000px]:grid-cols-2 max-[370px]:gap-[40px] max-[650px]:gap-[40px] max-[650px]:grid-cols-1 grid grid-cols-3"},A={class:"justify-self-center"},P={class:"bg-white rounded-[12px] p-2"},j={class:"text-[25px]"},$={class:"mb-[10px]"},q=t("img",{class:"rounded-[5px] mb-[10px]",src:b},null,-1),B={class:"grid grid-flow-row gap-4"},O={class:"grid grid-cols-2 gap-[50px] text-[20px]"},D={class:"justify-self-end"},E={class:""},F={class:"grid grid-cols-2 gap-[20px]"},L=t("p",{class:"text-[20px] leading-none self-center"},"Количество товаров:",-1),S={class:"grid grid-flow-col self-center justify-self-end gap-[2px] px-1"},T=["onClick"],N=t("p",null,"-",-1),I=[N],J={class:"text-[20px]"},V=["onClick"],z=t("p",null,"+",-1),G=[z],H=["onClick"],K=t("button",null,"Купить",-1),M=[K],Q=t("div",{class:"flex justify-center"},[t("div",{class:"border-b-black border-b-[3px] w-fit mb-20"},[t("h2",{class:"text-[40px]"},"Оптовая продукция")])],-1),R={class:"mb-[40px] gap-x-[160px] max-[1000px]:gap-[60px] max-[1000px]:grid-cols-2 max-[370px]:gap-[40px] max-[650px]:gap-[40px] max-[650px]:grid-cols-1 grid grid-cols-3"},U={class:"justify-self-center"},W={class:"bg-white rounded-[12px] p-2"},X={class:"text-[25px]"},Y={class:"mb-[10px]"},Z=t("img",{class:"rounded-[5px] mb-[10px] h-68",src:b},null,-1),tt={class:"grid grid-flow-row gap-4"},st={class:"grid grid-cols-2 gap-[20px] text-[20px]"},et={class:"justify-self-end"},ot={class:""},rt={class:"grid grid-cols-2 gap-[20px]"},ct=t("p",{class:"text-[20px] leading-none self-center"},"Количество товаров:",-1),nt={class:"grid grid-flow-col self-center justify-self-end gap-[2px] px-1"},dt=["onClick"],at=t("p",{class:"relative mb-[10px]"},"-",-1),it=[at],lt={class:"text-[20px]"},pt=["onClick"],_t=t("p",{class:"relative mb-[10px]"},"+",-1),ut=[_t],ht=["onClick"],xt=t("button",{class:""},"Купить",-1),gt=[xt];function ft(s,p,c,d,_,n){return a(),l(h,null,[k,t("div",w,[(a(!0),l(h,null,x(_.data,(e,o)=>(a(),l("div",A,[t("div",P,[t("div",j,[t("h1",$,r(e.name),1)]),q,t("div",B,[t("div",O,[t("span",null,"Объем: "+r(e.volume)+"л",1),t("span",D,"Цена: "+r(e.price)+"kgs",1)]),t("div",E,[t("div",F,[L,t("div",S,[t("button",{class:"w-[30px] h-[30px] border-solid border-2 border-[#1C1B1F] rounded-full hover:bg-[#EAAD02]",onClick:i=>n.decrementProductCount(o)},I,8,T),t("p",J,r(e.quantity)+" шт",1),t("button",{class:"w-[30px] h-[30px] border-solid border-2 border-[#1C1B1F] rounded-full hover:bg-[#EAAD02]",onClick:i=>n.incrementProductCount(o)},G,8,V)])])]),t("div",{onClick:i=>n.addToCart(o,"orders"),class:"flex justify-center align-center bg-[#EAAD02] h-[35px] rounded-[6px] px-2 text-center text-white hover:text-amber-700 hover:underline hover:cursor-pointer underline-offset-4"},M,8,H)])])]))),256))]),Q,t("div",R,[(a(!0),l(h,null,x(_.dataOpt,(e,o)=>(a(),l("div",U,[t("div",W,[t("div",X,[t("h1",Y,r(e.name),1)]),Z,t("div",tt,[t("div",st,[t("span",null,"Объем: "+r(e.volume)+"л",1),t("span",et,"Цена: "+r(e.price)+"kgs",1)]),t("div",ot,[t("div",rt,[ct,t("div",nt,[t("button",{class:"w-[30px] h-[30px] border-solid border-2 border-[#1C1B1F] rounded-full hover:bg-[#EAAD02]",onClick:i=>n.decrementProductCount(o)},it,8,dt),t("p",lt,r(e.quantity)+" шт",1),t("button",{class:"w-[30px] h-[30px] border-solid border-2 border-[#1C1B1F] rounded-full hover:bg-[#EAAD02]",onClick:i=>n.incrementProductCount(o)},ut,8,pt)])])]),t("div",{onClick:i=>n.addToCart(o,"ordersOpt"),class:"flex justify-center align-center bg-[#EAAD02] h-[35px] rounded-[6px] px-2 text-center text-white hover:text-amber-700 hover:underline hover:cursor-pointer underline-offset-4"},gt,8,ht)])])]))),256))])],64)}const bt=f(y,[["render",ft]]),vt={data(){return{store:u()}},components:{ProductList:bt}},mt={class:"pt-[20px] mt-[20px] mb-[40px] border-t-[3px] border-black"},Ct={class:"text-[50px]"};function yt(s,p,c,d,_,n){const e=g("ProductList"),o=g("Layout");return a(),v(o,null,{default:m(()=>[t("div",null,[t("div",mt,[t("p",Ct,r(_.store.langProp.catalogue),1)]),C(e)])]),_:1})}const At=f(vt,[["render",yt]]);export{At as default};