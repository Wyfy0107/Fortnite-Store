(this["webpackJsonpFortnite-Store"]=this["webpackJsonpFortnite-Store"]||[]).push([[0],{63:function(e,t,n){e.exports=n.p+"static/media/first.1683a22e.jpg"},64:function(e,t,n){e.exports=n.p+"static/media/second.05d059da.png"},65:function(e,t,n){e.exports=n.p+"static/media/third.32185481.png"},66:function(e,t,n){e.exports=n.p+"static/media/fourth.86ab0c77.png"},70:function(e,t,n){e.exports=n.p+"static/media/daily-item.70849d8e.jpg"},76:function(e,t,n){e.exports=n(92)},81:function(e,t,n){},82:function(e,t,n){},92:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(23),i=n.n(c),l=(n(81),n(82),n(24)),o=n(25),u=n(29),s=n(27),m=n(12),p=n(15),d=n(22),E=n(63),f=n.n(E),h=n(64),b=n.n(h),v=n(65),g=n.n(v),O=n(66),j=n.n(O),y=n(13);function T(){var e=Object(m.a)(["\n  height: 95vh;\n  width: 100vw;\n"]);return T=function(){return e},e}var I=y.a.img(T()),x=null,w=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.getChallengeList()}},{key:"render",value:function(){return this.props.challengeList&&(x=this.props.challengeList.map((function(e){return e.title}))),r.a.createElement("div",null,this.props.challengeList?r.a.createElement(d.a,null,r.a.createElement(d.a.Item,null,r.a.createElement(I,{className:"d-block w-100",src:f.a,alt:"First slide"}),r.a.createElement(d.a.Caption,null,r.a.createElement("h2",null,x[0]),r.a.createElement("p",null,"Nulla vitae elit libero, a pharetra augue mollis interdum."))),r.a.createElement(d.a.Item,null,r.a.createElement(I,{className:"../../Images/second.jpg",src:b.a,alt:"Third slide"}),r.a.createElement(d.a.Caption,null,r.a.createElement("h2",null,x[1]),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."))),r.a.createElement(d.a.Item,null,r.a.createElement(I,{className:"d-block w-100",src:g.a,alt:"Third slide"}),r.a.createElement(d.a.Caption,null,r.a.createElement("h2",null,x[2]),r.a.createElement("p",null,"Praesent commodo cursus magna, vel scelerisque nisl consectetur."))),r.a.createElement(d.a.Item,null,r.a.createElement(I,{className:"d-block w-100",src:j.a,alt:"Fourth slide"}),r.a.createElement(d.a.Caption,null,r.a.createElement("h2",null,x[3]),r.a.createElement("p",null,"Praesent commodo cursus magna, vel scelerisque nisl consectetur.")))):null)}}]),n}(a.Component),_=Object(p.b)((function(e){return{challengeList:e.challengeList}}),(function(e){return{getChallengeList:function(){return e({type:"GET_CHALLENGE_LIST"})}}}))(w),L=n(70),S=n.n(L);function k(){var e=Object(m.a)(["\n  text-align: center;\n  background-image: url(",");\n  background-size: 100vw 100vh;\n  padding: 1rem;\n"]);return k=function(){return e},e}function D(){var e=Object(m.a)(["\n  width: 20vw;\n  margin: 1rem;\n  transition: 0.5s;\n  box-shadow: 0 5px #3f4441;\n  &:hover {\n    transform: scale(1.1);\n    cursor: pointer;\n    box-shadow: 0 0;\n  }\n"]);return D=function(){return e},e}function C(){var e=Object(m.a)(["\n  display: block;\n"]);return C=function(){return e},e}var A=null,N=y.a.div(C()),M=y.a.img(D()),H=y.a.div(k(),S.a),R=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.getDailyShop()}},{key:"render",value:function(){return this.props.dailyShop&&(A=this.props.dailyShop.splice(3).map((function(e){return r.a.createElement(M,{key:e.name,src:e.full_background,alt:"daily item"})}))),r.a.createElement(H,null,r.a.createElement("h1",{style:{color:"white"}},"Daily Shop"),this.props.dailyShop?r.a.createElement(N,null,A):null)}}]),n}(a.Component),G=Object(p.b)((function(e){return{dailyShop:e.dailyShop}}),(function(e){return{getDailyShop:function(){return e({type:"GET_DAILY_SHOP"})}}}))(R);function F(){var e=Object(m.a)(["\n  background-image: url(",");\n  height: 90vh;\n  flex: 1 1;\n  margin: 5px;\n  display: flex;\n  flex-flow: row;\n  justify-content: center;\n  align-items: center;\n"]);return F=function(){return e},e}function V(){var e=Object(m.a)(["\n  background: #e8483e;\n  border-radius: 7px;\n  transition: 0.5s;\n  &:hover {\n    transform: scale(1.2);\n    cursor: pointer;\n  }\n"]);return V=function(){return e},e}function P(){var e=Object(m.a)(["\n  font-size: 2rem;\n  color: white;\n  margin: 0.5rem;\n"]);return P=function(){return e},e}var z=y.a.h2(P()),U=y.a.div(V()),B=y.a.div(F(),(function(e){return e.background}));var Y=function(e){var t=e.title,n=e.background;return r.a.createElement(B,{background:n},r.a.createElement(U,null,r.a.createElement(z,null,t)))},W=null,J=Math.floor(8*Math.random()),q=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.getTournaments()}},{key:"render",value:function(){return this.props.tournaments&&(W=this.props.tournaments.slice(J,J+3).map((function(e,t){return r.a.createElement(Y,{key:t,title:e.name_line2,background:e.poster})}))),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h2",{style:{fontSize:"4rem",marginTop:"0.5rem"}},r.a.createElement("i",null,"Join the Tournaments ",r.a.createElement("strong",null,"now"))),this.props.tournaments?r.a.createElement("div",{style:{display:"flex",flexFlow:"row wrap"}},W):null)}}]),n}(a.Component),$=Object(p.b)((function(e){return{tournaments:e.tournaments}}),(function(e){return{getTournaments:function(){return e({type:"GET_TOURNAMENTS"})}}}))(q);var K=function(){return r.a.createElement("div",null,r.a.createElement(_,null),r.a.createElement($,null),r.a.createElement(G,null))},Q=n(73),X=n(34),Z=n(74),ee=n(19),te=n(71),ne=n(49),ae=n(50),re=n(59);var ce=Object(p.b)((function(e){return{addedItemName:e.addedItemName,cartOpen:e.cartOpen}}))((function(e){var t=e.addedItemName,n=e.cartOpen;return r.a.createElement(re.a,{style:{display:n?"block":"none",position:"absolute",right:"1rem",top:"4rem",zIndex:"100",color:"black"}},t.map((function(e){return r.a.createElement(re.a.Item,{key:e},e)})))}));function ie(){var e=Object(m.a)(["\n  position: static;\n  background: white;\n  padding: 5px;\n"]);return ie=function(){return e},e}function le(){var e=Object(m.a)(["\n  display: flex;\n  flex-flow: column;\n  position: absolute;\n  right: 5rem;\n  top: 0.6rem;\n"]);return le=function(){return e},e}var oe=y.a.div(le()),ue=Object(y.a)(oe)(ie());var se=Object(p.b)((function(e){return{searchDisplay:e.searchDisplay,itemsList:e.itemsList}}),(function(e){return{switchCart:function(){return e({type:"SWITCH_CART"})}}}))((function(e){var t=e.searchDisplay,n=e.itemsList,c=e.switchCart,i=Object(a.useState)(null),l=Object(Q.a)(i,2),o=l[0],u=l[1],s=function(e){if(n)var t=n.filter((function(t){return t.name===e}))[0].id;return t};return r.a.createElement(r.a.Fragment,null,r.a.createElement(X.a,{bg:"light",expand:"lg"},r.a.createElement(X.a.Brand,{href:"#home"},"Fortnite"),r.a.createElement(X.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(X.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(Z.a,{className:"mr-auto"},r.a.createElement(X.a.Text,{style:{margin:"0 0.5rem"}},r.a.createElement(ee.b,{to:"/Fortnite-Store"},"Home")),r.a.createElement(X.a.Text,{style:{margin:"0 0.5rem"}},r.a.createElement(ee.b,{to:"/ItemStore"},"Merch")),r.a.createElement(X.a.Text,{style:{margin:"0 0.5rem"}},r.a.createElement(ee.b,{to:"/Tournaments"},"Tournaments"))),r.a.createElement(oe,null,r.a.createElement(te.a,{inline:!0,style:{display:t?"block":"none"}},r.a.createElement(ne.a,{type:"text",placeholder:"Search Item",className:" mr-sm-2",onChange:function(e){return function(e){var t=e.target.value;if(0!==t.length){var a=new RegExp("^".concat(t),"i");if(n){var r=n.map((function(e){return e.name.match(a)})).filter((function(e){return!!e}));u(r)}}else u(null)}(e)}})),r.a.createElement("div",null,o?o.map((function(e){return r.a.createElement(ee.b,{key:e.input,to:"ItemStore/".concat(s(e.input))},r.a.createElement(ue,null,e.input))})):null)),r.a.createElement(ae.a,{variant:"primary",onClick:function(){return c()}},"Cart"),r.a.createElement(ce,null))))})),me=n(10);function pe(){var e=Object(m.a)(["\n  width: 50%;\n"]);return pe=function(){return e},e}function de(){var e=Object(m.a)(["\n  display: flex;\n  flex-flow: column;\n  text-align: left;\n  margin-left: 3rem;\n  width: 100%;\n"]);return de=function(){return e},e}function Ee(){var e=Object(m.a)(["\n  display: flex;\n  flex-flow: row;\n  margin: 3rem;\n  padding: 1rem\n  justify-content: center;\n  width: 60vw;\n  margin: auto;\n  color: black;\n"]);return Ee=function(){return e},e}var fe=y.a.div(Ee()),he=y.a.div(de()),be=y.a.img(pe());var ve=Object(p.b)((function(e){return{itemDetail:e.itemDetail}}),(function(e){return{getItemDetail:function(t){return e(function(e){return{type:"GET_ITEM_DETAIL",itemID:e}}(t))},deliverAddedItem:function(t){return e(function(e){return{type:"ADDING_ITEM_NAME",itemName:e}}(t))}}}))((function(e){var t=e.itemDetail,n=e.getItemDetail,c=e.deliverAddedItem,i=Object(me.f)().itemID;if(Object(a.useEffect)((function(){n(i)})),t)var l=t.name,o=t.type,u=t.rarity,s=t.price,m=t.images.full_background;return r.a.createElement("div",null,t?r.a.createElement(fe,null,r.a.createElement(be,{src:m,alt:"item image"}),r.a.createElement(he,null,r.a.createElement("h1",{style:{color:""}},l),r.a.createElement("h2",null,u),r.a.createElement("br",null),r.a.createElement("p",null,"Type: ",o),r.a.createElement("p",null,"Price: ",s),r.a.createElement(ae.a,{variant:"primary",style:{width:"40%"},onClick:function(){return c(l)}},"Add to Cart"))):null)}));function ge(){var e=Object(m.a)(["\n  display: block;\n  text-align: center;\n  background: #f0f0f0;\n"]);return ge=function(){return e},e}function Oe(){var e=Object(m.a)(["\n  width: 20vw;\n  margin: 1rem;\n  transition: 0.5s;\n  box-shadow: 0 5px #3f4441;\n  &:hover {\n    transform: scale(1.1);\n    cursor: pointer;\n    box-shadow: 0 0;\n  }\n"]);return Oe=function(){return e},e}var je=[],ye=y.a.img(Oe()),Te=y.a.div(ge()),Ie=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={reachBottom:!1},e.listenToScroll=function(){1===(document.body.scrollTop||document.documentElement.scrollTop)/(document.documentElement.scrollHeight-document.documentElement.clientHeight)&&e.setState({reachBottom:!0})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.getItemsList(),this.props.merchStoreSearchDisplay(),window.addEventListener("scroll",this.listenToScroll)}},{key:"componentWillUnmount",value:function(){this.props.merchStoreSearchDisplay(),window.addEventListener("scroll",this.listenToScroll)}},{key:"render",value:function(){var e=this.props,t=e.path,n=e.url;return this.props.itemsList&&(je=this.props.itemsList.slice(1,40).map((function(e){return r.a.createElement(ee.b,{to:"".concat(n,"/").concat(e.id),key:e.name},r.a.createElement(ye,{src:e.images.full_background,alt:"shop items"}))})),this.state.reachBottom&&(je=je.concat(this.props.itemsList.slice(41,100).map((function(e){return r.a.createElement(ee.b,{to:"".concat(n,"/").concat(e.id),key:e.name},r.a.createElement(ye,{src:e.images.full_background,alt:"shop items"}))}))))),r.a.createElement(Te,null,r.a.createElement(me.c,null,r.a.createElement(me.a,{exact:!0,path:t},this.props.itemsList?r.a.createElement(Te,null,je):null),r.a.createElement(me.a,{path:"".concat(t,"/:itemID")},r.a.createElement(ve,null))))}}]),n}(a.Component),xe=Object(p.b)((function(e){return{itemsList:e.itemsList}}),(function(e){return{getItemsList:function(){return e({type:"GET_ITEMS_LIST"})},merchStoreSearchDisplay:function(){return e({type:"MERCH_STORE_ENTERED"})}}}))(Ie);var we=function(){var e=Object(me.g)(),t=e.path,n=e.url;return r.a.createElement("div",null,r.a.createElement(xe,{path:t,url:n}))};function _e(){var e=Object(m.a)(["\n  width: 100vw;\n  background: #e4e3e3;\n  height: 300vh;\n  opacity: 0.8;\n  z-index: 100;\n  position: absolute;\n  display: ",";\n  text-align: center;\n  font-size: 2rem;\n"]);return _e=function(){return e},e}var Le=y.a.div(_e(),(function(e){return e.loading?"block":"none"}));var Se=Object(p.b)((function(e){return{loading:e.loading}}))((function(e){var t=e.loading;return r.a.createElement(Le,{loading:t},r.a.createElement("h1",{style:{position:"relative",top:"8rem"}},"Loading..."))}));var ke=function(){return r.a.createElement("div",null,r.a.createElement(se,null),r.a.createElement(Se,null),r.a.createElement(me.c,null,r.a.createElement(me.a,{exact:!0,path:"/Fortnite-Store"},r.a.createElement(K,null)),r.a.createElement(me.a,{path:"/ItemStore"},r.a.createElement(we,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var De=n(36),Ce=n(75),Ae=n(72),Ne=n(9),Me={challengeList:null,dailyShop:null,tournaments:null,itemsList:null,itemID:null,itemDetail:null,searchDisplay:!1,userInput:null,addedItemName:[],cartOpen:!1,loading:!1},He=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CHALLENGE_LIST":return Object(Ne.a)(Object(Ne.a)({},e),{},{loading:!0});case"CHALLENGE_LIST_RECEIVED":return Object(Ne.a)(Object(Ne.a)({},e),{},{loading:!1,challengeList:t.challengeList.weeks[1].challenges});case"GET_DAILY_SHOP":return Object(Ne.a)(Object(Ne.a)({},e),{},{loading:!0});case"DAILY_SHOP_RECEIVED":return Object(Ne.a)(Object(Ne.a)({},e),{},{loading:!1,dailyShop:t.dailyShop.featured});case"GET_TOURNAMENTS":return Object(Ne.a)(Object(Ne.a)({},e),{},{loading:!0});case"TOURNAMENTS_RECEIVED":return Object(Ne.a)(Object(Ne.a)({},e),{},{loading:!1,tournaments:t.tournaments.events});case"GET_ITEMS_LIST":return Object(Ne.a)(Object(Ne.a)({},e),{},{loading:!0});case"ITEMS_LIST_RECEIVED":return Object(Ne.a)(Object(Ne.a)({},e),{},{loading:!1,itemsList:t.itemsList.items.backpack});case"GET_ITEM_DETAIL":return Object(Ne.a)(Object(Ne.a)({},e),{},{loading:!0,itemID:t.itemID});case"ITEM_DETAIL_RECEIVED":return Object(Ne.a)(Object(Ne.a)({},e),{},{loading:!1,itemDetail:t.itemDetail.item});case"MERCH_STORE_ENTERED":return Object(Ne.a)(Object(Ne.a)({},e),{},{searchDisplay:!e.searchDisplay});case"ADDING_ITEM_NAME":return Object(Ne.a)(Object(Ne.a)({},e),{},{addedItemName:[].concat(Object(Ae.a)(e.addedItemName),[t.itemName])});case"SWITCH_CART":return Object(Ne.a)(Object(Ne.a)({},e),{},{cartOpen:!e.cartOpen});default:return e}},Re=n(11),Ge=n.n(Re),Fe=n(16),Ve=new Headers;Ve.append("Authorization","61218dd7-53471561-47821838-69f229ed");var Pe={method:"GET",headers:Ve},ze=Ge.a.mark(et),Ue=Ge.a.mark(tt),Be=Ge.a.mark(nt),Ye=Ge.a.mark(at),We=Ge.a.mark(rt),Je=Ge.a.mark(ct),qe=Ge.a.mark(it),$e=Ge.a.mark(lt),Ke=Ge.a.mark(ot),Qe=Ge.a.mark(ut),Xe=Ge.a.mark(st),Ze=function(e){return e.itemID};function et(){var e;return Ge.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://fortniteapi.io/challenges?season=current&lang=en",Pe).then((function(e){return e.json()}));case 3:return e=t.sent,t.next=6,Object(Fe.b)({type:"CHALLENGE_LIST_RECEIVED",challengeList:e});case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(Fe.b)({type:"FETCH_CHALLENGE_LIST_FAILED",error:t.t0});case 12:case"end":return t.stop()}}),ze,null,[[0,8]])}function tt(){var e;return Ge.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://fortniteapi.io/shop?lang=en",Pe).then((function(e){return e.json()}));case 3:return e=t.sent,t.next=6,Object(Fe.b)({type:"DAILY_SHOP_RECEIVED",dailyShop:e});case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(Fe.b)({type:"FETCH_DAILY_SHOP_FAILD",error:t.t0});case 12:case"end":return t.stop()}}),Ue,null,[[0,8]])}function nt(){var e;return Ge.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://fortniteapi.io/events/list?lang=en&region=NAE",Pe).then((function(e){return e.json()}));case 3:return e=t.sent,t.next=6,Object(Fe.b)({type:"TOURNAMENTS_RECEIVED",tournaments:e});case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(Fe.b)({type:"FETCH_TOURNAMENTS_FAILED",error:t.t0});case 12:case"end":return t.stop()}}),Be,null,[[0,8]])}function at(){var e;return Ge.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://fortniteapi.io/items/list?lang=en",Pe).then((function(e){return e.json()}));case 3:return e=t.sent,t.next=6,Object(Fe.b)({type:"ITEMS_LIST_RECEIVED",itemsList:e});case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(Fe.b)({type:"FETCH_ITEMS_LIST_FAILED",error:t.t0});case 12:case"end":return t.stop()}}),Ye,null,[[0,8]])}function rt(){var e,t;return Ge.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(Fe.c)(Ze);case 3:return e=n.sent,n.next=6,fetch("https://fortniteapi.io/items/get?lang=en&id=".concat(e),Pe).then((function(e){return e.json()}));case 6:return t=n.sent,n.next=9,Object(Fe.b)({type:"ITEM_DETAIL_RECEIVED",itemDetail:t});case 9:n.next=15;break;case 11:return n.prev=11,n.t0=n.catch(0),n.next=15,Object(Fe.b)({type:"FETCH_ITEM_DETAIL_FAILED"});case 15:case"end":return n.stop()}}),We,null,[[0,11]])}function ct(){return Ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Fe.d)("GET_CHALLENGE_LIST",et);case 2:case"end":return e.stop()}}),Je)}function it(){return Ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Fe.d)("GET_DAILY_SHOP",tt);case 2:case"end":return e.stop()}}),qe)}function lt(){return Ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Fe.d)("GET_TOURNAMENTS",nt);case 2:case"end":return e.stop()}}),$e)}function ot(){return Ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Fe.d)("GET_ITEMS_LIST",at);case 2:case"end":return e.stop()}}),Ke)}function ut(){return Ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Fe.d)("GET_ITEM_DETAIL",rt);case 2:case"end":return e.stop()}}),Qe)}function st(){return Ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Fe.a)([ct(),it(),lt(),ot(),ut()]);case 2:case"end":return e.stop()}}),Xe)}n(91);var mt=Object(Ce.a)(),pt=Object(De.d)(He,Object(De.a)(mt));mt.run(st),i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p.a,{store:pt},r.a.createElement(ee.a,null,r.a.createElement(ke,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[76,1,2]]]);
//# sourceMappingURL=main.28587f54.chunk.js.map