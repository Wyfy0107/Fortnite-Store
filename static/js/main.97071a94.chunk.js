(this["webpackJsonpFortnite-Store"]=this["webpackJsonpFortnite-Store"]||[]).push([[0],{60:function(e,t,n){e.exports=n.p+"static/media/first.1683a22e.jpg"},61:function(e,t,n){e.exports=n.p+"static/media/second.05d059da.png"},62:function(e,t,n){e.exports=n.p+"static/media/third.32185481.png"},63:function(e,t,n){e.exports=n.p+"static/media/fourth.86ab0c77.png"},67:function(e,t,n){e.exports=n.p+"static/media/daily-item.70849d8e.jpg"},72:function(e,t,n){e.exports=n(88)},77:function(e,t,n){},78:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(23),i=n.n(c),l=(n(77),n(78),n(24)),o=n(25),u=n(28),s=n(27),m=n(11),p=n(15),d=n(21),f=n(60),E=n.n(f),h=n(61),b=n.n(h),v=n(62),g=n.n(v),O=n(63),j=n.n(O),y=n(12);function T(){var e=Object(m.a)(["\n  height: 95vh;\n  width: 100vw;\n"]);return T=function(){return e},e}var I=y.a.img(T()),x=null,w=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.getChallengeList()}},{key:"render",value:function(){return this.props.challengeList&&(x=this.props.challengeList.map((function(e){return e.title}))),r.a.createElement("div",null,this.props.challengeList?r.a.createElement(d.a,null,r.a.createElement(d.a.Item,null,r.a.createElement(I,{className:"d-block w-100",src:E.a,alt:"First slide"}),r.a.createElement(d.a.Caption,null,r.a.createElement("h2",null,x[0]),r.a.createElement("p",null,"Nulla vitae elit libero, a pharetra augue mollis interdum."))),r.a.createElement(d.a.Item,null,r.a.createElement(I,{className:"../../Images/second.jpg",src:b.a,alt:"Third slide"}),r.a.createElement(d.a.Caption,null,r.a.createElement("h2",null,x[1]),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."))),r.a.createElement(d.a.Item,null,r.a.createElement(I,{className:"d-block w-100",src:g.a,alt:"Third slide"}),r.a.createElement(d.a.Caption,null,r.a.createElement("h2",null,x[2]),r.a.createElement("p",null,"Praesent commodo cursus magna, vel scelerisque nisl consectetur."))),r.a.createElement(d.a.Item,null,r.a.createElement(I,{className:"d-block w-100",src:j.a,alt:"Fourth slide"}),r.a.createElement(d.a.Caption,null,r.a.createElement("h2",null,x[3]),r.a.createElement("p",null,"Praesent commodo cursus magna, vel scelerisque nisl consectetur.")))):null)}}]),n}(a.Component),_=Object(p.b)((function(e){return{challengeList:e.challengeList}}),(function(e){return{getChallengeList:function(){return e({type:"GET_CHALLENGE_LIST"})}}}))(w),L=n(67),k=n.n(L);function S(){var e=Object(m.a)(["\n  text-align: center;\n  background-image: url(",");\n  background-size: 100vw 100vh;\n  padding: 1rem;\n"]);return S=function(){return e},e}function D(){var e=Object(m.a)(["\n  width: 20vw;\n  margin: 1rem;\n  transition: 0.5s;\n  box-shadow: 0 5px #3f4441;\n  &:hover {\n    transform: scale(1.1);\n    cursor: pointer;\n    box-shadow: 0 0;\n  }\n"]);return D=function(){return e},e}function C(){var e=Object(m.a)(["\n  display: block;\n"]);return C=function(){return e},e}var A=null,N=y.a.div(C()),M=y.a.img(D()),H=y.a.div(S(),k.a),R=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.getDailyShop()}},{key:"render",value:function(){return this.props.dailyShop&&(A=this.props.dailyShop.splice(3).map((function(e){return r.a.createElement(M,{key:e.name,src:e.full_background,alt:"daily item"})}))),r.a.createElement(H,null,r.a.createElement("h1",{style:{color:"white"}},"Daily Shop"),this.props.dailyShop?r.a.createElement(N,null,A):null)}}]),n}(a.Component),G=Object(p.b)((function(e){return{dailyShop:e.dailyShop}}),(function(e){return{getDailyShop:function(){return e({type:"GET_DAILY_SHOP"})}}}))(R);function F(){var e=Object(m.a)(["\n  background-image: url(",");\n  height: 90vh;\n  flex: 1 1;\n  margin: 5px;\n  display: flex;\n  flex-flow: row;\n  justify-content: center;\n  align-items: center;\n"]);return F=function(){return e},e}function V(){var e=Object(m.a)(["\n  background: #e8483e;\n  border-radius: 7px;\n  transition: 0.5s;\n  &:hover {\n    transform: scale(1.2);\n    cursor: pointer;\n  }\n"]);return V=function(){return e},e}function z(){var e=Object(m.a)(["\n  font-size: 2rem;\n  color: white;\n  margin: 0.5rem;\n"]);return z=function(){return e},e}var P=y.a.h2(z()),U=y.a.div(V()),B=y.a.div(F(),(function(e){return e.background}));var Y=function(e){var t=e.title,n=e.background;return r.a.createElement(B,{background:n},r.a.createElement(U,null,r.a.createElement(P,null,t)))},W=null,J=Math.floor(8*Math.random()),q=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.getTournaments()}},{key:"render",value:function(){return this.props.tournaments&&(W=this.props.tournaments.slice(J,J+3).map((function(e,t){return r.a.createElement(Y,{key:t,title:e.name_line2,background:e.poster})}))),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h2",{style:{fontSize:"4rem",marginTop:"0.5rem"}},r.a.createElement("i",null,"Join the Tournaments ",r.a.createElement("strong",null,"now"))),this.props.tournaments?r.a.createElement("div",{style:{display:"flex",flexFlow:"row wrap"}},W):null)}}]),n}(a.Component),$=Object(p.b)((function(e){return{tournaments:e.tournaments}}),(function(e){return{getTournaments:function(){return e({type:"GET_TOURNAMENTS"})}}}))(q);var K=function(){return r.a.createElement("div",null,r.a.createElement(_,null),r.a.createElement($,null),r.a.createElement(G,null))},Q=n(49),X=n(33),Z=n(69),ee=n(19),te=n(68),ne=n(47),ae=n(37);function re(){var e=Object(m.a)(["\n  width: 15vw;\n"]);return re=function(){return e},e}function ce(){var e=Object(m.a)(["\n  display: inline;\n"]);return ce=function(){return e},e}var ie=y.a.div(ce()),le=y.a.div(re());var oe=function(e){var t=e.name,n=Object(a.useState)(0),c=Object(Q.a)(n,2),i=c[0],l=c[1];return r.a.createElement("div",{style:{display:"flex",flexFlow:"row",justifyContent:"space-around",padding:"5px",border:"1px solid black"}},r.a.createElement(le,null,t),r.a.createElement(ae.a,{variant:"primary",size:"sm",style:{margin:"0 0.5rem 0 0.5rem"},onClick:function(){return l(i+1)}},"+"),r.a.createElement(ie,null,i),r.a.createElement(ae.a,{variant:"primary",size:"sm",style:{margin:"0 0.5rem"},onClick:function(){return l(0===i?i:i-1)}},"-"))};var ue=Object(p.b)((function(e){return{addedItemName:e.addedItemName,cartOpen:e.cartOpen}}))((function(e){var t=e.addedItemName,n=e.cartOpen,a=new Set(t),c=Array.from(a);return r.a.createElement("div",{style:{display:n?"block":"none",position:"absolute",right:"1rem",top:"4rem",zIndex:"100",color:"black",background:"white"}},c.map((function(e){return r.a.createElement(oe,{name:e,key:e})})))}));function se(){var e=Object(m.a)(["\n  position: static;\n  background: white;\n  padding: 5px;\n"]);return se=function(){return e},e}function me(){var e=Object(m.a)(["\n  display: flex;\n  flex-flow: column;\n  position: absolute;\n  right: 5rem;\n  top: 0.6rem;\n"]);return me=function(){return e},e}var pe=y.a.div(me()),de=Object(y.a)(pe)(se());var fe=Object(p.b)((function(e){return{searchDisplay:e.searchDisplay,itemsList:e.itemsList}}),(function(e){return{switchCart:function(){return e({type:"SWITCH_CART"})}}}))((function(e){var t=e.searchDisplay,n=e.itemsList,c=e.switchCart,i=Object(a.useState)(null),l=Object(Q.a)(i,2),o=l[0],u=l[1],s=function(e){if(n)var t=n.filter((function(t){return t.name===e}))[0].id;return t};return r.a.createElement(r.a.Fragment,null,r.a.createElement(X.a,{bg:"light",expand:"lg"},r.a.createElement(X.a.Brand,{href:"#home"},"Fortnite"),r.a.createElement(X.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(X.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(Z.a,{className:"mr-auto"},r.a.createElement(X.a.Text,{style:{margin:"0 0.5rem"}},r.a.createElement(ee.b,{to:"/Fortnite-Store"},"Home")),r.a.createElement(X.a.Text,{style:{margin:"0 0.5rem"}},r.a.createElement(ee.b,{to:"/ItemStore"},"Merch")),r.a.createElement(X.a.Text,{style:{margin:"0 0.5rem"}},r.a.createElement(ee.b,{to:"/Tournaments"},"Tournaments"))),r.a.createElement(pe,null,r.a.createElement(te.a,{inline:!0,style:{display:t?"block":"none"}},r.a.createElement(ne.a,{type:"text",placeholder:"Search Item",className:" mr-sm-2",onChange:function(e){return function(e){var t=e.target.value;if(0!==t.length){var a=new RegExp("^".concat(t),"i");if(n){var r=n.map((function(e){return e.name.match(a)})).filter((function(e){return!!e}));u(r)}}else u(null)}(e)}})),r.a.createElement("div",null,o?o.map((function(e){return r.a.createElement(ee.b,{key:e.input,to:"ItemStore/".concat(s(e.input))},r.a.createElement(de,null,e.input))})):null)),r.a.createElement(ae.a,{variant:"primary",onClick:function(){return c()}},"Cart"),r.a.createElement(ue,null))))})),Ee=n(10);function he(){var e=Object(m.a)(["\n  width: 50%;\n"]);return he=function(){return e},e}function be(){var e=Object(m.a)(["\n  display: flex;\n  flex-flow: column;\n  text-align: left;\n  margin-left: 3rem;\n  width: 100%;\n"]);return be=function(){return e},e}function ve(){var e=Object(m.a)(["\n  display: flex;\n  flex-flow: row;\n  margin: 3rem;\n  padding: 1rem\n  justify-content: center;\n  width: 60vw;\n  margin: auto;\n  color: black;\n"]);return ve=function(){return e},e}var ge=y.a.div(ve()),Oe=y.a.div(be()),je=y.a.img(he());var ye=Object(p.b)((function(e){return{itemDetail:e.itemDetail}}),(function(e){return{getItemDetail:function(t){return e(function(e){return{type:"GET_ITEM_DETAIL",itemID:e}}(t))},deliverAddedItem:function(t){return e(function(e){return{type:"ADDING_ITEM_NAME",itemName:e}}(t))}}}))((function(e){var t=e.itemDetail,n=e.getItemDetail,c=e.deliverAddedItem,i=Object(Ee.f)().itemID;if(Object(a.useEffect)((function(){n(i)}),[]),t)var l=t.name,o=t.type,u=t.rarity,s=t.price,m=t.images.full_background;return r.a.createElement("div",null,t?r.a.createElement(ge,null,r.a.createElement(je,{src:m,alt:"item image"}),r.a.createElement(Oe,null,r.a.createElement("h1",{style:{color:""}},l),r.a.createElement("h2",null,u),r.a.createElement("br",null),r.a.createElement("p",null,"Type: ",o),r.a.createElement("p",null,"Price: ",s),r.a.createElement(ae.a,{variant:"primary",style:{width:"40%"},onClick:function(){return c(l)}},"Add to Cart"))):null)}));function Te(){var e=Object(m.a)(["\n  display: block;\n  text-align: center;\n  background: #f0f0f0;\n"]);return Te=function(){return e},e}function Ie(){var e=Object(m.a)(["\n  width: 20vw;\n  margin: 1rem;\n  transition: 0.5s;\n  box-shadow: 0 5px #3f4441;\n  &:hover {\n    transform: scale(1.1);\n    cursor: pointer;\n    box-shadow: 0 0;\n  }\n"]);return Ie=function(){return e},e}var xe=[],we=y.a.img(Ie()),_e=y.a.div(Te()),Le=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={reachBottom:!1},e.listenToScroll=function(){1===(document.body.scrollTop||document.documentElement.scrollTop)/(document.documentElement.scrollHeight-document.documentElement.clientHeight)&&e.setState({reachBottom:!0})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.getItemsList(),this.props.merchStoreSearchDisplay(),window.addEventListener("scroll",this.listenToScroll)}},{key:"componentWillUnmount",value:function(){this.props.merchStoreSearchDisplay(),window.addEventListener("scroll",this.listenToScroll)}},{key:"render",value:function(){var e=this.props,t=e.path,n=e.url;return this.props.itemsList&&(xe=this.props.itemsList.slice(1,40).map((function(e){return r.a.createElement(ee.b,{to:"".concat(n,"/").concat(e.id),key:e.name},r.a.createElement(we,{src:e.images.full_background,alt:"shop items"}))})),this.state.reachBottom&&(xe=xe.concat(this.props.itemsList.slice(41,100).map((function(e){return r.a.createElement(ee.b,{to:"".concat(n,"/").concat(e.id),key:e.name},r.a.createElement(we,{src:e.images.full_background,alt:"shop items"}))}))))),r.a.createElement(_e,null,r.a.createElement(Ee.c,null,r.a.createElement(Ee.a,{exact:!0,path:t},this.props.itemsList?r.a.createElement(_e,null,xe):null),r.a.createElement(Ee.a,{path:"".concat(t,"/:itemID")},r.a.createElement(ye,null))))}}]),n}(a.Component),ke=Object(p.b)((function(e){return{itemsList:e.itemsList}}),(function(e){return{getItemsList:function(){return e({type:"GET_ITEMS_LIST"})},merchStoreSearchDisplay:function(){return e({type:"MERCH_STORE_ENTERED"})}}}))(Le);var Se=function(){var e=Object(Ee.g)(),t=e.path,n=e.url;return r.a.createElement("div",null,r.a.createElement(ke,{path:t,url:n}))};function De(){var e=Object(m.a)(["\n  width: 100vw;\n  background: #e4e3e3;\n  height: 300vh;\n  opacity: 0.8;\n  z-index: 100;\n  position: absolute;\n  display: ",";\n  text-align: center;\n  font-size: 2rem;\n"]);return De=function(){return e},e}var Ce=y.a.div(De(),(function(e){return e.loading?"block":"none"}));var Ae=Object(p.b)((function(e){return{loading:e.loading}}))((function(e){var t=e.loading;return r.a.createElement(Ce,{loading:t?"true":null},r.a.createElement("h1",{style:{position:"relative",top:"8rem"}},"Loading..."))}));var Ne=function(){return r.a.createElement("div",null,r.a.createElement(fe,null),r.a.createElement(Ae,null),r.a.createElement(Ee.c,null,r.a.createElement(Ee.a,{exact:!0,path:"/Fortnite-Store"},r.a.createElement(K,null)),r.a.createElement(Ee.a,{path:"/ItemStore"},r.a.createElement(Se,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Me=n(35),He=n(71),Re=n(70),Ge=n(9),Fe={challengeList:null,dailyShop:null,tournaments:null,itemsList:null,itemID:null,itemDetail:null,searchDisplay:!1,userInput:null,addedItemName:[],cartOpen:!1,loading:!1},Ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CHALLENGE_LIST":return Object(Ge.a)(Object(Ge.a)({},e),{},{loading:!0});case"CHALLENGE_LIST_RECEIVED":return Object(Ge.a)(Object(Ge.a)({},e),{},{loading:!1,challengeList:t.challengeList.weeks[1].challenges});case"GET_DAILY_SHOP":return Object(Ge.a)(Object(Ge.a)({},e),{},{loading:!0});case"DAILY_SHOP_RECEIVED":return Object(Ge.a)(Object(Ge.a)({},e),{},{loading:!1,dailyShop:t.dailyShop.featured});case"GET_TOURNAMENTS":return Object(Ge.a)(Object(Ge.a)({},e),{},{loading:!0});case"TOURNAMENTS_RECEIVED":return Object(Ge.a)(Object(Ge.a)({},e),{},{loading:!1,tournaments:t.tournaments.events});case"GET_ITEMS_LIST":return Object(Ge.a)(Object(Ge.a)({},e),{},{loading:!0});case"ITEMS_LIST_RECEIVED":return Object(Ge.a)(Object(Ge.a)({},e),{},{loading:!1,itemsList:t.itemsList.items.backpack});case"GET_ITEM_DETAIL":return Object(Ge.a)(Object(Ge.a)({},e),{},{loading:!0,itemID:t.itemID});case"ITEM_DETAIL_RECEIVED":return Object(Ge.a)(Object(Ge.a)({},e),{},{loading:!1,itemDetail:t.itemDetail.item});case"MERCH_STORE_ENTERED":return Object(Ge.a)(Object(Ge.a)({},e),{},{searchDisplay:!e.searchDisplay});case"ADDING_ITEM_NAME":return Object(Ge.a)(Object(Ge.a)({},e),{},{addedItemName:[].concat(Object(Re.a)(e.addedItemName),[t.itemName])});case"SWITCH_CART":return Object(Ge.a)(Object(Ge.a)({},e),{},{cartOpen:!e.cartOpen});default:return e}},ze=n(13),Pe=n.n(ze),Ue=n(16),Be=new Headers;Be.append("Authorization","61218dd7-53471561-47821838-69f229ed");var Ye={method:"GET",headers:Be},We=Pe.a.mark(rt),Je=Pe.a.mark(ct),qe=Pe.a.mark(it),$e=Pe.a.mark(lt),Ke=Pe.a.mark(ot),Qe=Pe.a.mark(ut),Xe=Pe.a.mark(st),Ze=Pe.a.mark(mt),et=Pe.a.mark(pt),tt=Pe.a.mark(dt),nt=Pe.a.mark(ft),at=function(e){return e.itemID};function rt(){var e;return Pe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://fortniteapi.io/challenges?season=current&lang=en",Ye).then((function(e){return e.json()}));case 3:return e=t.sent,t.next=6,Object(Ue.b)({type:"CHALLENGE_LIST_RECEIVED",challengeList:e});case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(Ue.b)({type:"FETCH_CHALLENGE_LIST_FAILED",error:t.t0});case 12:case"end":return t.stop()}}),We,null,[[0,8]])}function ct(){var e;return Pe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://fortniteapi.io/shop?lang=en",Ye).then((function(e){return e.json()}));case 3:return e=t.sent,t.next=6,Object(Ue.b)({type:"DAILY_SHOP_RECEIVED",dailyShop:e});case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(Ue.b)({type:"FETCH_DAILY_SHOP_FAILD",error:t.t0});case 12:case"end":return t.stop()}}),Je,null,[[0,8]])}function it(){var e;return Pe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://fortniteapi.io/events/list?lang=en&region=NAE",Ye).then((function(e){return e.json()}));case 3:return e=t.sent,t.next=6,Object(Ue.b)({type:"TOURNAMENTS_RECEIVED",tournaments:e});case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(Ue.b)({type:"FETCH_TOURNAMENTS_FAILED",error:t.t0});case 12:case"end":return t.stop()}}),qe,null,[[0,8]])}function lt(){var e;return Pe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://fortniteapi.io/items/list?lang=en",Ye).then((function(e){return e.json()}));case 3:return e=t.sent,t.next=6,Object(Ue.b)({type:"ITEMS_LIST_RECEIVED",itemsList:e});case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(Ue.b)({type:"FETCH_ITEMS_LIST_FAILED",error:t.t0});case 12:case"end":return t.stop()}}),$e,null,[[0,8]])}function ot(){var e,t;return Pe.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(Ue.c)(at);case 3:return e=n.sent,n.next=6,fetch("https://fortniteapi.io/items/get?lang=en&id=".concat(e),Ye).then((function(e){return e.json()}));case 6:return t=n.sent,n.next=9,Object(Ue.b)({type:"ITEM_DETAIL_RECEIVED",itemDetail:t});case 9:n.next=15;break;case 11:return n.prev=11,n.t0=n.catch(0),n.next=15,Object(Ue.b)({type:"FETCH_ITEM_DETAIL_FAILED"});case 15:case"end":return n.stop()}}),Ke,null,[[0,11]])}function ut(){return Pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ue.d)("GET_CHALLENGE_LIST",rt);case 2:case"end":return e.stop()}}),Qe)}function st(){return Pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ue.d)("GET_DAILY_SHOP",ct);case 2:case"end":return e.stop()}}),Xe)}function mt(){return Pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ue.d)("GET_TOURNAMENTS",it);case 2:case"end":return e.stop()}}),Ze)}function pt(){return Pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ue.d)("GET_ITEMS_LIST",lt);case 2:case"end":return e.stop()}}),et)}function dt(){return Pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ue.d)("GET_ITEM_DETAIL",ot);case 2:case"end":return e.stop()}}),tt)}function ft(){return Pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ue.a)([ut(),st(),mt(),pt(),dt()]);case 2:case"end":return e.stop()}}),nt)}n(87);var Et=Object(He.a)(),ht=Object(Me.d)(Ve,Object(Me.a)(Et));Et.run(ft),i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p.a,{store:ht},r.a.createElement(ee.a,null,r.a.createElement(Ne,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[72,1,2]]]);
//# sourceMappingURL=main.97071a94.chunk.js.map