(function(t){function e(e){for(var a,r,o=e[0],l=e[1],c=e[2],p=0,d=[];p<o.length;p++)r=o[p],i[r]&&d.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,c||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,o=1;o<s.length;o++){var l=s[o];0!==i[l]&&(a=!1)}a&&(n.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},i={app:0},n=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/allezcine-shop-in-vue/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"032f":function(t,e,s){t.exports=s.p+"img/SW-Poster-01.8e76fe7c.jpg"},"034f":function(t,e,s){"use strict";var a=s("c21b"),i=s.n(a);i.a},"0378":function(t,e,s){t.exports=s.p+"img/SW-Shirt-01.e68ff5b6.jpg"},"207e":function(t,e,s){t.exports=s.p+"img/SW-Poster-04.5dcb6f03.jpeg"},"2ca2":function(t,e,s){"use strict";var a=s("e958"),i=s.n(a);i.a},3004:function(t,e,s){"use strict";var a=s("a37b"),i=s.n(a);i.a},"331b":function(t,e,s){t.exports=s.p+"img/SW-Poster-02.df631eb3.jpg"},"3f34":function(t,e,s){t.exports=s.p+"img/SW-Mug-03.b89d116c.png"},4755:function(t,e,s){t.exports=s.p+"img/SW-Shirt-04.b8837c6f.jpeg"},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("097d");var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("router-view",{attrs:{basketContentProps:t.basketContentProps,credit:t.credit},on:{basketContent:t.test,basketEmpty:t.basketEmpty}})],1)},n=[],r={name:"App",data:function(){return{basketContentProps:[],credit:37.6}},methods:{test:function(t){this.basketContentProps.push(t),console.log(this.basketContentProps)},basketEmpty:function(t){this.basketContentProps=[],this.credit=t}}},o=r,l=(s("034f"),s("2877")),c=Object(l["a"])(o,i,n,!1,null,null,null);c.options.__file="App.vue";var u=c.exports,p=s("8c4f"),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Header",[s("span",[t._v("ALLEZ")]),t._v("CINE!\n  ")]),s("BestSellers"),s("FooterBar",{attrs:{test:""}})],1)},m=[],v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"navbar navbar-expand-md navbar-dark bg-black"},[t._m(0),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("ul",{staticClass:"navbar-nav ml-auto"},[s("li",{staticClass:"nav-item",class:{active:"panier"===t.isActive}},[s("router-link",{staticClass:"nav-link",attrs:{to:"/panier"}},[t._v("Panier")])],1)])]),s("div",{staticClass:"row justify-content-center"},[s("h1",[s("a",{staticClass:"navbar-brand titleSize",attrs:{href:"#"}},[t._t("default")],2)])]),s("div",{staticClass:"row justify-content-between"},[s("div",{staticClass:"col-4"},[s("ul",{staticClass:"navbar-nav mb-2 mt-2"},[s("li",{staticClass:"nav-item mr-5 border linkSize",class:{active:"home"===t.isActive}},[s("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home")])],1),s("li",{staticClass:"nav-item mr-5 border linkSize",class:{active:"shop"===t.isActive}},[s("router-link",{staticClass:"nav-link",attrs:{to:"/shop"}},[t._v("Shop")])],1),s("li",{staticClass:"nav-item mr-5 border linkSize",class:{active:"contact"===t.isActive}},[s("router-link",{staticClass:"nav-link",attrs:{to:"/contact"}},[t._v("Contact")])],1)])]),s("div",{staticClass:"col-2"},[s("div",{staticClass:"input-group mb-2 mt-2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchterm,expression:"searchterm"}],staticClass:"form-control",attrs:{type:"search",placeholder:"Search","aria-label":"Search"},domProps:{value:t.searchterm},on:{input:[function(e){e.target.composing||(t.searchterm=e.target.value)},function(e){t.testfunction()}]}}),t._m(1)])])])])])])},f=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"input-group-append mr-sm-2"},[s("div",{staticClass:"input-group-text"},[s("i",{staticClass:"fas fa-search"})])])}],h=(s("7f7f"),{name:"Header",methods:{makeActive:function(t){this.isActive=t},testfunction:function(){this.$emit("test",this.searchterm)}},data:function(){return{searchterm:"",isActive:this.$route.name}}}),b=h,g=(s("3004"),Object(l["a"])(b,v,f,!1,null,null,null));g.options.__file="header.vue";var C=g.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("TitleWithVerticalBar",{attrs:{content:"Les + vendus"}}),a("div",{staticClass:"ml-5 mr-5"},[a("swiper",{attrs:{options:t.swiperOption}},[t._l(t.users,function(t){return a("swiper-slide",[a("div",{staticClass:"card",staticStyle:{width:"18rem"}},[a("router-link",{attrs:{to:"/shop"}},[a("img",{staticClass:"card-img-top",attrs:{src:s("7584")("./"+t["image"]),alt:"Card image cap"}})])],1)])}),a("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"}),a("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),a("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"})],2)],1),a("hr"),a("TitleWithVerticalBar",{attrs:{content:"Services"}}),a("div",{staticClass:"container-fluid border"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-2"}),a("Services",{attrs:{title:"Cadeau",content:"la facture ne sera pas livrée dans le colis et les produits sont emballés."}}),a("Services",{attrs:{title:"Prioritaire",content:"le colis sera livré dans les 24 heures."}}),a("Services",{attrs:{title:"Petit mot",content:"un petit mot sera joint dans le colis"}}),a("Services",{attrs:{title:"Member ship",content:"permet d'obtenir une réduction sur la prochaine commande à hauteur de 10%."}})],1)])],1)},y=[],w=s("8aa5"),k={apiKey:"AIzaSyDaDe8YvfgrVTniCywhtN8nROWo-Hu4KOM",authDomain:"testing-vue-70460.firebaseapp.com",databaseURL:"https://testing-vue-70460.firebaseio.com",projectId:"testing-vue-70460",storageBucket:"testing-vue-70460.appspot.com",messagingSenderId:"693364308408"},S=w["initializeApp"](k),x=S.database(),E=x.ref("test"),A=(s("dfa4"),s("7212")),j=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"clearfix"},[s("h1",{staticClass:"ml-5 border float-left"},[t._v(t._s(t.content))]),s("div",{staticClass:"border float-left verticalBar ml-2"})])},T=[],B={name:"TitleWithVerticalBar",props:{content:String}},M=B,P=(s("7622"),Object(l["a"])(M,j,T,!1,null,null,null));P.options.__file="titleWithVerticalBar.vue";var F=P.exports,O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-xl-2 col-lg-4 col-md-6 col-sm-12"},[s("div",{staticClass:"border inner"},[s("h3",[t._v(t._s(t.title))]),s("p",[t._v(t._s(t.content))])])])},$=[],W={name:"Services",props:{title:String,content:String}},N=W,I=(s("bbb0"),Object(l["a"])(N,O,$,!1,null,null,null));I.options.__file="services.vue";var H=I.exports,V={name:"BestSellers",components:{swiper:A["swiper"],swiperSlide:A["swiperSlide"],TitleWithVerticalBar:F,Services:H},data:function(){return{users:{},swiperOption:{slidesPerView:4,spaceBetween:40,slidesPerGroup:4,preventClicks:!0,loopFillGroupWithBlank:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{1024:{slidesPerView:2,spaceBetween:20},768:{slidesPerView:2,spaceBetween:20},640:{slidesPerView:2,spaceBetween:20},320:{slidesPerView:1,spaceBetween:10}}}}},firebase:{users:E}},R=V,L=(s("f8fe"),Object(l["a"])(R,_,y,!1,null,null,null));L.options.__file="BestSellers.vue";var z=L.exports,D=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid bg-black size mt-5"},[s("div",{staticClass:"row justify-content-center"},[t.test?s("div",{staticClass:"border col-4 justify-content-center"},[t._m(0),t._m(1),t._m(2),t._m(3)]):t._e(),s("div",{staticClass:"col-8"},[s("div",{staticClass:"row justify-content-center mt-2"},[s("div",{staticClass:"btn-group"},[t._m(4),s("button",{staticClass:"btn btn-secondary",attrs:{type:"button",name:"button"}},[s("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Accueil")])],1),s("button",{staticClass:"btn btn-secondary",attrs:{type:"button",name:"button"}},[s("router-link",{staticClass:"nav-link",attrs:{to:"/shop"}},[t._v("Shop")])],1),s("button",{staticClass:"btn btn-secondary",attrs:{type:"button",name:"button"}},[s("router-link",{staticClass:"nav-link",attrs:{to:"/contact"}},[t._v("Contact")])],1)])]),t._m(5),t._m(6)])])])},q=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row align-items-center mt-4 ml-2"},[s("h4",{staticClass:"text-light"},[t._v("AllezCiné Shop")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row align-items-center ml-2"},[s("p",{staticClass:"mb-0 text-light"},[t._v("Falcon Street 55895 NY department NewTech Inside The World")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row align-items-center ml-2"},[s("p",{staticClass:"mb-0 text-light"},[t._v("vf-452-58-695-85458 websuprem jojolastico MIT")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row align-items-center ml-2"},[s("p",{staticClass:"mb-0 text-light"},[t._v("www.dlfgrtyu.fg/fg/ttyh")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"btn btn-secondary",attrs:{type:"button",name:"button"}},[s("a",{attrs:{href:"https://gderuwez.github.io/frontend-AllezCine/"}},[s("span",[t._v("ALLEZ")]),t._v("CINE")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"text-center font-weight-bold pb-3 justify-content-center"},[s("div",{staticClass:"subs"},[t._v("CONNECT US")]),s("div",{staticClass:"border iconSocial"},[s("i",{staticClass:"fab fa-facebook-f lineHeightIcon"})]),s("div",{staticClass:"border iconSocial"},[s("i",{staticClass:"fab fa-twitter lineHeightIcon"})]),s("div",{staticClass:"border iconSocial"},[s("i",{staticClass:"fab fa-linkedin-in lineHeightIcon"})]),s("div",{staticClass:"border iconSocial"},[s("i",{staticClass:"fab fa-youtube lineHeightIcon"})]),s("div",{staticClass:"border iconSocial"},[s("i",{staticClass:"fab fa-google-plus-g lineHeightIcon"})])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row justify-content-end pr-3"},[s("a",{attrs:{href:"https://github.com/gderuwez"}},[t._v("Deruwez Guillaume")])])}],Y={name:"FooterBar",props:{test:Boolean}},U=Y,G=(s("cdc3"),Object(l["a"])(U,D,q,!1,null,null,null));G.options.__file="footerBar.vue";var J=G.exports,K={name:"home",components:{Header:C,BestSellers:z,FooterBar:J}},Z=K,Q=Object(l["a"])(Z,d,m,!1,null,null,null);Q.options.__file="Home.vue";var X=Q.exports,tt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Header",[t._v("\n    About\n  ")]),t._v("\n  test text again\n")],1)},et=[],st={name:"about",components:{Header:C}},at=st,it=Object(l["a"])(at,tt,et,!1,null,null,null);it.options.__file="About.vue";var nt=it.exports,rt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Header",{on:{test:t.testing}},[t._v("\n    Shop\n  ")]),s("ShopBody",{attrs:{searchterm:t.searchterm},on:{basketContent:t.basketContent}}),s("FooterBar")],1)},ot=[],lt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"text-center mt-4"},[s("div",{staticClass:"btn-group"},[s("button",{staticClass:"btn mr-4",class:{"btn-primary":"Mug"===t.isActive},attrs:{type:"button",name:"Mugs"},on:{click:function(e){t.makeActive("Mug")}}},[t._v("Mugs")]),s("button",{staticClass:"btn mr-4",class:{"btn-primary":"Poster"===t.isActive},attrs:{type:"button",name:"Posters"},on:{click:function(e){t.makeActive("Poster")}}},[t._v("Poster")]),s("button",{staticClass:"btn mr-4",class:{"btn-primary":"Tshirt"===t.isActive},attrs:{type:"button",name:"Tshirts"},on:{click:function(e){t.makeActive("Tshirt")}}},[t._v("T-shirts")]),s("button",{staticClass:"btn",class:{"btn-primary":"All"===t.isActive},attrs:{type:"button",name:"All"},on:{click:function(e){t.makeActive("All")}}},[t._v("All")])])])]),s("div",{staticClass:"row justify-content-between"},[s("div",{staticClass:"col-3"},[s("p",{staticClass:"pl-3"},[t._v("You are watching "+t._s(t.isActive))])]),s("div",{staticClass:"col-3"},[t.toggle?s("i",{staticClass:"pr-3 float-right fas fa-list-ul",on:{click:function(e){t.toggling()}}}):s("i",{staticClass:"pr-3 float-right fas fa-th",on:{click:function(e){t.toggling()}}})])]),s("hr"),s("ShopDisplay",{attrs:{display:t.toggle,filtering:t.isActive,searchterm:t.searchterm},on:{basketContent:t.basketContent}})],1)},ct=[],ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"d-flex flex-wrap",class:{"flex-column":t.display}},t._l(t.filteredItem,function(e){return t.display?a("div",{staticClass:"row ml-1",attrs:{"data-toggle":"modal","data-target":"#exampleModal"},on:{click:function(s){t.test(e[".key"])}}},[a("div",{staticClass:"col-3"},[a("img",{staticStyle:{height:"auto",width:"25vh"},attrs:{src:s("7584")("./"+e["image"]),alt:"Card image cap"}})]),a("div",{staticClass:"col-6 align-self-center"},[a("div",{staticClass:"row"},[a("h5",[t._v(t._s(e["type"]))])]),a("div",{staticClass:"row"},[a("p",[t._v(t._s(e["description"]))])])]),a("div",{staticClass:"col-3 align-self-center"},[a("p",{staticClass:"float-right pr-5"},[t._v(t._s(e["price"]))])])]):a("div",{staticClass:"col-6",attrs:{"data-toggle":"modal","data-target":"#exampleModal"},on:{click:function(s){t.test(e[".key"])}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-4"},[a("img",{staticStyle:{height:"auto",width:"25vh"},attrs:{src:s("7584")("./"+e["image"]),alt:"Card image cap"}})]),a("div",{staticClass:"col-4 align-self-center"},[a("h5",[t._v(t._s(e["type"]))])]),a("div",{staticClass:"col-4 align-self-center"},[a("p",{staticClass:"float-right pr-5"},[t._v(t._s(e["price"]))])])])])})),a("ConfirmationModal",{attrs:{itemRef:t.itemRef},on:{basketContent:t.basketContent}})],1)},pt=[],dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("div",{staticClass:"modal fade",attrs:{id:"exampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},t._l(t.itemToConfirm,function(e){return a("div",{staticClass:"modal-content"},[t._m(0,!0),a("div",{staticClass:"modal-body"},[a("img",{staticStyle:{height:"auto",width:"25vh"},attrs:{src:s("7584")("./"+e["image"]),alt:"Card image cap"}}),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-form-label col-9",attrs:{for:"numberToOrder"}},[t._v("How many would you like to order ?")]),a("div",{staticClass:"col-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.numberInput,expression:"numberInput"}],staticClass:"form-control",attrs:{id:"numberToOrder",type:"number",name:"number",value:"0"},domProps:{value:t.numberInput},on:{input:function(e){e.target.composing||(t.numberInput=e.target.value)}}})])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Cancel")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(s){t.itemConfirmed(e[".key"])}}},[t._v("Confirm")])])])}))])])},mt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("Add item to basket ?")]),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],vt={name:"ConfirmationModal",props:{itemRef:String},data:function(){return{users:{},numberInput:"",numberOfItem:"",previousnumberOfItem:"",itemInBasket:[],previousItemInBasket:""}},methods:{itemConfirmed:function(t){var e=[t,this.numberInput];this.itemInBasket=e,this.$emit("basketContent",this.itemInBasket)}},computed:{itemToConfirm:function(){var t=this;return this.users.filter(function(e){return e[".key"]===t.itemRef})}},firebase:{users:E}},ft=vt,ht=(s("ad3a"),Object(l["a"])(ft,dt,mt,!1,null,null,null));ht.options.__file="confirmationModal.vue";var bt=ht.exports,gt={name:"ShopDisplay",components:{ConfirmationModal:bt},props:{display:Boolean,filtering:String,searchterm:String},data:function(){return{users:{},itemRef:""}},methods:{test:function(t){this.itemRef=t},basketContent:function(t){this.$emit("basketContent",t)}},computed:{filteredItem:function(){var t=this;if(this.searchterm){var e=this.searchterm.trim().toLowerCase();return this.users.filter(function(t){return-1!==t["description"].toLowerCase().indexOf(e)})}return"All"===this.filtering?this.users:this.users.filter(function(e){return e["type"]===t.filtering})}},firebase:{users:E}},Ct=gt,_t=(s("9064"),Object(l["a"])(Ct,ut,pt,!1,null,null,null));_t.options.__file="shopDisplay.vue";var yt=_t.exports,wt={name:"ShopBody",components:{ShopDisplay:yt},props:{searchterm:String},data:function(){return{isActive:"All",toggle:!0}},methods:{makeActive:function(t){this.isActive=t},toggling:function(){this.toggle=!this.toggle},basketContent:function(t){this.$emit("basketContent",t)}}},kt=wt,St=(s("2ca2"),Object(l["a"])(kt,lt,ct,!1,null,null,null));St.options.__file="shopBody.vue";var xt=St.exports,Et={name:"Shop",components:{Header:C,FooterBar:J,ShopBody:xt},data:function(){return{searchterm:""}},methods:{testing:function(t){this.searchterm=t},basketContent:function(t){this.$emit("basketContent",t)}}},At=Et,jt=(s("ace4"),Object(l["a"])(At,rt,ot,!1,null,null,null));jt.options.__file="Shop.vue";var Tt=jt.exports,Bt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Header",[t._v("\n    Panier\n  ")]),s("BasketBody",{attrs:{basketContentProps:t.basketContentProps,credit:t.creditToProps},on:{basketEmpty:t.basketEmpty}}),s("FooterBar")],1)},Mt=[],Pt=(s("c5f6"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mb-5 mt-2"},[a("div",{staticClass:"container-fluid"},[t._m(0),t._l(t.itemType,function(e){return a("div",{staticClass:"row ml-1",on:{click:function(s){t.test(e[".key"])}}},[a("div",{staticClass:"col-2"},[a("img",{staticStyle:{height:"auto",width:"10vh"},attrs:{src:s("7584")("./"+e["image"]),alt:"Card image cap"}})]),a("div",{staticClass:"col-3 align-self-center"},[a("div",{staticClass:"row"},[a("h5",[t._v(t._s(e["type"]))])]),a("div",{staticClass:"row"},[a("p",[t._v(t._s(e["description"]))])])]),a("div",{staticClass:"col-2 align-self-center"},[a("p",{staticClass:"float-right pr-5"},[t._v(t._s(e["price"]))])]),a("div",{staticClass:"col-2 align-self-center"},[a("p",{staticClass:"float-right pr-5"},[t._v(t._s(e["quantity"]))])]),a("div",{staticClass:"col-3 align-self-center"},[a("p",{staticClass:"float-right pr-5"},[t._v(t._s(e["total"])+" €")])])])}),a("hr"),t._l(t.MontantObject2,function(e){return a("div",{staticClass:"row border justify-content-between"},[a("div",{staticClass:"col-2"},[a("p",{staticClass:"pl-3"},[a("strong",[t._v(t._s(e.name))])])]),a("div",{staticClass:"col-2 text-right pr-3"},[a("p",{staticClass:"mr-5"},[t._v(t._s(e.total)+" €")])])])})],2),a("h5",{staticClass:"container-fluid mt-5"},[t._v("Choisissez vos suppléments")]),a("div",{staticClass:"container-fluid"},[t._l(t.supplementsDisplay,function(e){return a("div",{staticClass:"row justify-content-between border",class:{active:e.isActive,inactive:!e.isActive},on:{click:function(s){t.toggleSup(e)}}},[a("div",{staticClass:"col-2"},[a("p",{staticClass:"pl-3 Linen"},[t._v(t._s(e.name))])]),a("div",{staticClass:"col-2 text-right pr-3"},[a("p",{staticClass:"mr-5 Linen"},[t._v(t._s(e.price)+" €")])])])}),a("hr"),a("div",{staticClass:"row border justify-content-between"},[t._m(1),a("div",{staticClass:"col-2 text-right pr-3"},[a("p",{staticClass:"mr-5"},[t._v(t._s(t.supplement)+" €")])])])],2),a("h5",{staticClass:"container-fluid mt-5"},[t._v("Montants")]),a("div",{staticClass:"container-fluid"},t._l(t.MontantObject,function(e){return a("div",{staticClass:"row border justify-content-between"},[a("div",{staticClass:"col-2"},[a("p",{staticClass:"pl-3"},[a("strong",[t._v(t._s(e.name))])])]),a("div",{staticClass:"col-2 text-right pr-3"},[a("p",{staticClass:"mr-5"},[t._v(t._s(e.total)+" €")])])])})),a("button",{staticClass:"btn btn-primary float-right mr-3 mb-5",attrs:{type:"button",name:"button"},on:{click:t.emptyBasket}},[t._v("Confirm order")]),a("button",{attrs:{type:"button",name:"button"},on:{click:t.check}},[t._v("check")])])}),Ft=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row ml-1"},[s("div",{staticClass:"col-2"},[s("h4",[t._v("Your item(s)")])]),s("div",{staticClass:"col-3"},[s("h4",[t._v("Description")])]),s("div",{staticClass:"col-2"},[s("h4",[t._v("Price")])]),s("div",{staticClass:"col-2"},[s("h4",[t._v("Quantity")])]),s("div",{staticClass:"col-3"},[s("h4",[t._v("Total")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-2"},[s("p",{staticClass:"pl-3"},[s("strong",[t._v("Total des suppléments")])])])}],Ot=(s("ac6a"),{name:"BasketBody",props:{basketContentProps:Array,credit:Number},data:function(){return{supplementsDisplay:[{name:"Cadeau",price:2,isActive:!1},{name:"Prioritaire",price:6,isActive:!1},{name:"petit mot",price:2,isActive:!1},{name:"Membership",price:0,isActive:!1}]}},methods:{emptyBasket:function(){alert("Are you sure ?"),this.$emit("basketEmpty",this.creditleft),this.$router.push({name:"home"})},toggleSup:function(t){t.isActive=!t.isActive},check:function(){console.log(this.itemType)}},computed:{MontantObject2:function(){return[{name:"Total des articles HTVA",total:this.ArticlesHTVA},{name:"Total des articles TTC",total:this.ArticlesTVA}]},MontantObject:function(){return[{name:"Frais de livraison",total:this.FraisLivraison},{name:"Total a payer",total:this.TotalBeforeCredit},{name:"Credits",total:this.credit.toFixed(2)},{name:"Total a payer avec credit",total:this.TotalWithCredit},{name:"Credits Restant après payement",total:this.creditleft}]},itemType:function(){var t=this.basketContentProps,e=this.users,s=[];for(var a in t)for(var i in e)t[a][0]==e[i][".key"]&&(e[i].quantity=parseInt(t[a][1]),"Poster"===e[i]["Type"]?e[i].tva=5.5:e[i].tva=19.6,e[i].total=((parseFloat(e[i].price)+parseFloat(e[i].price)*parseFloat(e[i].tva)/100)*parseFloat(e[i].quantity)).toFixed(2),s.push(e[i]));return s},ArticlesHTVA:function(){var t=0;for(var e in this.itemType)t+=parseFloat(this.itemType[e]["price"])*this.itemType[e]["quantity"];return t.toFixed(2)},ArticlesTVA:function(){var t=0;for(var e in this.itemType)t+=parseFloat(this.itemType[e]["price"])*this.itemType[e]["quantity"]+this.itemType[e]["tva"]*parseFloat(this.itemType[e]["price"])*this.itemType[e]["quantity"]/100;return t.toFixed(2)},supplement:function(){var t=0;return this.supplementsDisplay.forEach(function(e){e.isActive&&(t+=e.price)}),t.toFixed(2)},totalHTVA:function(){return parseFloat(this.ArticlesHTVA)+parseFloat(this.supplement)},totalTTC:function(){return parseFloat(this.ArticlesTVA)+parseFloat(this.supplement)},FraisLivraison:function(){var t=this.ArticlesHTVA,e=0;return t<15?e=10:15>=t<=31?e=7:t>31&&(e=0),parseFloat(e).toFixed(2)},TotalBeforeCredit:function(){return(parseFloat(this.totalTTC)+parseFloat(this.FraisLivraison)).toFixed(2)},TotalWithCredit:function(){return parseFloat(this.TotalBeforeCredit)-parseFloat(this.credit)<=0?(0).toFixed(2):(parseFloat(this.TotalBeforeCredit)-parseFloat(this.credit)).toFixed(2)},creditleft:function(){var t=parseFloat(this.credit)-parseFloat(this.TotalBeforeCredit);return t<=0?0:t.toFixed(2)}},firebase:{users:E}}),$t=Ot,Wt=(s("a7dc"),Object(l["a"])($t,Pt,Ft,!1,null,null,null));Wt.options.__file="BasketBody.vue";var Nt=Wt.exports,It={name:"Basket",data:function(){return{creditToProps:this.credit}},props:{basketContentProps:Array,credit:Number},methods:{basketEmpty:function(t){this.$emit("basketEmpty",t)}},components:{Header:C,FooterBar:J,BasketBody:Nt}},Ht=It,Vt=(s("8e4d"),Object(l["a"])(Ht,Bt,Mt,!1,null,null,null));Vt.options.__file="Basket.vue";var Rt=Vt.exports,Lt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{},[s("Header",[t._v("\n    Contact\n  ")]),s("form",{attrs:{method:"post"}},[s("h3",[t._v("Drop Us a Message")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.Name,expression:"Name"}],staticClass:"form-control",class:{"border border-warning":t.isNameEmpty,"border border-success":!t.isNameEmpty},attrs:{type:"text",name:"txtName",placeholder:"Your Name *",value:""},domProps:{value:t.Name},on:{input:function(e){e.target.composing||(t.Name=e.target.value)}}}),t.isNameEmpty?s("p",[t._v("Enter your Name")]):t._e()]),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.Email,expression:"Email"}],staticClass:"form-control",class:{"border border-warning":t.isEmailEmpty,"border border-success":t.isEmailValid,"border border-danger":!t.isEmailValid},attrs:{type:"text",name:"txtEmail",placeholder:"Your Email *",value:""},domProps:{value:t.Email},on:{input:function(e){e.target.composing||(t.Email=e.target.value)}}}),t.isEmailEmpty?s("p",[t._v("Enter your Email")]):t.isEmailValid?s("p",[t._v("The email is valid")]):s("p",[t._v("The email is invalid")])]),s("div",{staticClass:"form-group"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.Reason,expression:"Reason"}],class:{"border border-warning":t.isReasonEmpty,"border border-success":!t.isReasonEmpty},attrs:{name:""},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.Reason=e.target.multiple?s:s[0]}}},[s("option",{attrs:{value:"complaints"}},[t._v("complaints")]),s("option",{attrs:{value:"thanks"}},[t._v("thanks")]),s("option",{attrs:{value:"other"}},[t._v("other")])]),t.isReasonEmpty?s("p",[t._v("Select a reason for contacting us")]):t._e()])]),s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"form-group"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.Message,expression:"Message"}],staticClass:"form-control",class:{"border border-warning":t.isMessageEmpty,"border border-success":!t.isMessageEmpty},staticStyle:{width:"100%",height:"150px"},attrs:{name:"txtMsg",placeholder:"Your Message *"},domProps:{value:t.Message},on:{input:function(e){e.target.composing||(t.Message=e.target.value)}}}),t.isMessageEmpty?s("p",[t._v("Enter A message")]):t._e()])])]),t._m(0)]),s("FooterBar")],1)},zt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"form-group"},[s("input",{staticClass:"btn ml-3",attrs:{type:"submit",name:"btnSubmit",value:"Send Message"}})])])}],Dt={name:"Contact",components:{Header:C,FooterBar:J},data:function(){return{Name:"",Email:"",Reason:"",Message:""}},computed:{isNameEmpty:function(){var t;return t=""==this.Name,t},isEmailEmpty:function(){var t;return t=""==this.Email,t},isEmailValid:function(){var t,e=/^((([!#$%&'*+\-/=?^_`{|}~\w])|([!#$%&'*+\-/=?^_`{|}~\w][!#$%&'*+\-/=?^_`{|}~\.\w]{0,}[!#$%&'*+\-/=?^_`{|}~\w]))[@]\w+([-.]\w+)*\.\w+([-.]\w+)*)$/g;return e.test(this.Email)?(console.log("correct"),t=!0):t=!1,t},isReasonEmpty:function(){var t;return t=""==this.Reason,t},isMessageEmpty:function(){var t;return t=""==this.Message,t}}},qt=Dt,Yt=(s("fe4d"),Object(l["a"])(qt,Lt,zt,!1,null,null,null));Yt.options.__file="Contact.vue";var Ut=Yt.exports;a["a"].use(p["a"]);var Gt=new p["a"]({routes:[{path:"/",name:"home",component:X},{path:"/about",name:"about",component:nt},{path:"/shop",name:"shop",component:Tt},{path:"/contact",name:"contact",component:Ut},{path:"/panier",name:"panier",component:Rt}]}),Jt=s("9483");Object(Jt["a"])("".concat("/allezcine-shop-in-vue/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});s("c5ec"),s("ab8b"),s("3e48");var Kt=s("5f30"),Zt=s.n(Kt);a["a"].config.productionTip=!1,a["a"].use(Zt.a),new a["a"]({router:Gt,render:function(t){return t(u)}}).$mount("#app")},"61b6":function(t,e,s){},"65d9":function(t,e,s){},7584:function(t,e,s){var a={"./SW-Mug-01.jpg":"921f","./SW-Mug-02.png":"c1d9","./SW-Mug-03.png":"3f34","./SW-Mug-04.jpg":"c23c","./SW-Poster-01.jpg":"032f","./SW-Poster-02.jpg":"331b","./SW-Poster-03.jpg":"81f9","./SW-Poster-04.jpeg":"207e","./SW-Shirt-01.jpg":"0378","./SW-Shirt-02.jpg":"c71b","./SW-Shirt-03.jpg":"c59b","./SW-Shirt-04.jpeg":"4755"};function i(t){var e=n(t);return s(e)}function n(t){var e=a[t];if(!(e+1)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return e}i.keys=function(){return Object.keys(a)},i.resolve=n,t.exports=i,i.id="7584"},7622:function(t,e,s){"use strict";var a=s("8fad"),i=s.n(a);i.a},"7b44":function(t,e,s){},"81f9":function(t,e,s){t.exports=s.p+"img/SW-Poster-03.bdb6ce5f.jpg"},"81fd":function(t,e,s){},"854e":function(t,e,s){},"8e4d":function(t,e,s){"use strict";var a=s("81fd"),i=s.n(a);i.a},"8fad":function(t,e,s){},9064:function(t,e,s){"use strict";var a=s("f359"),i=s.n(a);i.a},"921f":function(t,e,s){t.exports=s.p+"img/SW-Mug-01.aba17f5f.jpg"},"9c85":function(t,e,s){},"9e95":function(t,e,s){},a37b:function(t,e,s){},a7dc:function(t,e,s){"use strict";var a=s("ee6c"),i=s.n(a);i.a},ace4:function(t,e,s){"use strict";var a=s("854e"),i=s.n(a);i.a},ad3a:function(t,e,s){"use strict";var a=s("65d9"),i=s.n(a);i.a},bbb0:function(t,e,s){"use strict";var a=s("9e95"),i=s.n(a);i.a},c1d9:function(t,e,s){t.exports=s.p+"img/SW-Mug-02.07d7d373.png"},c21b:function(t,e,s){},c23c:function(t,e,s){t.exports=s.p+"img/SW-Mug-04.6398a3f9.jpg"},c59b:function(t,e,s){t.exports=s.p+"img/SW-Shirt-03.4cdda9c0.jpg"},c71b:function(t,e,s){t.exports=s.p+"img/SW-Shirt-02.d0880d32.jpg"},cdc3:function(t,e,s){"use strict";var a=s("7b44"),i=s.n(a);i.a},e958:function(t,e,s){},ee6c:function(t,e,s){},f359:function(t,e,s){},f8fe:function(t,e,s){"use strict";var a=s("9c85"),i=s.n(a);i.a},fe4d:function(t,e,s){"use strict";var a=s("61b6"),i=s.n(a);i.a}});
//# sourceMappingURL=app.e3932701.js.map