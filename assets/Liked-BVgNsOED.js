import{_ as v,z as b,B,r as u,u as y,C as $,e as F,d as P,f as C,i as e,j as o,F as D,v as M,k as s,l,m as k,t as d,q as f,D as j,E as N,G as T,H as V,a as E,I as h,x as R,y as q}from"./index-C7HF4o4K.js";const z="data:image/svg+xml,%3csvg%20width='35'%20height='35'%20viewBox='0%200%2035%2035'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='0.5'%20y='0.5'%20width='34'%20height='34'%20rx='7.5'%20fill='white'%20stroke='%23F2F2F2'/%3e%3cpath%20d='M19%2022L14%2017L19%2012'%20stroke='%23C8C8C8'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",G="/assets/empty-like-klUhl8Tx.png",H={class:"liked__products"},U=["onClick"],W={key:0,src:j},A={key:1,src:N,alt:""},J=["onClick"],K={key:0,src:T},O={key:1,src:V,alt:""},Q=["src"],X={class:"liked__products-item-descr"},Y={class:"product__status"},Z=["src"],ss={class:"liked__products-item-price"},ts={__name:"Liked",setup(_){b("api");const r=B(),i=c=>{r.getItem(c)};u("");const m=y(),p=$(),n=F(),x=p.items,w=u(12);u(1);const I=c=>{n.upDateProducts(c),p.addLike(c)},L=c=>{n.upDateProducts(c),m.addItem(c)};return P(()=>Math.ceil(getProducts.value.length/w.value)),(c,hs)=>{const S=C("RouterLink");return e(),o("div",H,[(e(!0),o(D,null,M(f(x),t=>(e(),o("div",{class:"liked__products-item",key:t.id},[s("span",{class:"liked__products-item-heart",onClick:g=>I(t)},[t.liked?(e(),o("img",A)):(e(),o("img",W))],8,U),s("span",{class:"liked__products-item-cart",onClick:g=>L(t)},[t.inCart?(e(),o("img",O)):(e(),o("img",K))],8,J),l(S,{to:"/product/"+t.id,onClick:g=>i(t),class:"liked__products-item"},{default:k(()=>[s("img",{class:"liked__products-item-img",src:t.thumbnail,alt:""},null,8,Q),s("div",X,[s("div",null,[s("h2",null,d(t.title),1),s("p",null,d(t.brand)+"’s Brand",1),s("span",Y,[s("img",{src:t.stock>0?"/src/assets/img/checked.svg":"/src/assets/img/not_checked.svg"},null,8,Z),s("h3",null,d(t.stock>0?"in stock":"out of stock"),1)])]),s("span",ss,[s("p",null,"$"+d(t.price),1)])])]),_:2},1032,["to","onClick"])]))),128))])}}},es=v(ts,[["__scopeId","data-v-dde22792"]]),a=_=>(R("data-v-9b912499"),_=_(),q(),_),os={class:"container"},cs={key:0,class:"like"},_s={class:"like__top"},is=a(()=>s("img",{src:z,alt:""},null,-1)),ns=a(()=>s("h2",{class:"like__top-title"},"My Wishlist",-1)),as={class:"home__wrapper"},ds={key:1,class:"like__empty"},ls={class:"like__empty-content"},rs=a(()=>s("img",{src:G,alt:"",class:"like__empty-img"},null,-1)),ps=a(()=>s("h2",{class:"like__empty-title"},"Закладок нет :(",-1)),us=a(()=>s("p",{class:"like__empty-subtitle"},[h(" Вы нищеброд? "),s("br"),h(" Оформите хотя бы один заказ. ")],-1)),ks={__name:"Liked",setup(_){const r=y(),i=$();return i.items,E(()=>{r.updateStore(),i.updateStore()}),(m,p)=>{const n=C("router-link");return e(),o("div",os,[f(i).items.length!=0?(e(),o("div",cs,[s("div",_s,[l(n,{to:"/"},{default:k(()=>[is]),_:1}),ns]),s("div",as,[l(es)])])):(e(),o("div",ds,[s("div",ls,[rs,ps,us,l(n,{to:"/",class:"like__empty-btn like"},{default:k(()=>[h("Вернуться назад")]),_:1})])]))])}}},gs=v(ks,[["__scopeId","data-v-9b912499"]]);export{gs as default};
