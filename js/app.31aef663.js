(function(t){function e(e){for(var a,i,o=e[0],c=e[1],u=e[2],l=0,h=[];l<o.length;l++)i=o[l],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&h.push(s[i][0]),s[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);p&&p(e);while(h.length)h.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==s[c]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},s={app:0},r=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var p=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"065c":function(t,e,n){},"088c":function(t,e,n){"use strict";n("3507")},"190e":function(t,e,n){"use strict";n("ce5f")},"2b81":function(t,e,n){t.exports=n.p+"img/pokeball.8d0e8a14.png"},3507:function(t,e,n){},"3e0f":function(t,e,n){t.exports=n.p+"img/rocket.d3019971.png"},4407:function(t,e,n){},"51f2":function(t,e,n){t.exports=n.p+"img/search.6eeeef8e.svg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("pm-header"),n("router-view")],1)},r=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[t._m(0),n("nav",{staticClass:"links-container"},[n("router-link",{attrs:{to:"/"}},[n("span",[t._v("List")])]),n("router-link",{attrs:{to:"/select"}},[t._v("Search")]),n("router-link",{attrs:{to:"/about"}},[t._v("About")])],1)])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"imgs-container"},[a("img",{staticClass:"pokemon-logo",attrs:{src:n("cf05"),alt:""}}),a("img",{staticClass:"pokeball",attrs:{src:n("2b81"),alt:""}})])}],c={name:"PmHeader",data:function(){return{}}},u=c,p=(n("c6d5"),n("2877")),l=Object(p["a"])(u,i,o,!1,null,"37dd262c",null),h=l.exports,d={components:{PmHeader:h}},f=d,m=(n("034f"),Object(p["a"])(f,s,r,!1,null,null,null)),b=m.exports,v=n("05c2"),_=n("8c4f"),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("pm-list")],1)},k=[],j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"grid"},t._l(t.listObj,(function(e){return n("div",{key:e.name,staticClass:"poke-card"},[n("span",[t._v("#"+t._s(e.id))]),n("img",{attrs:{src:e.sprites.other.dream_world.front_default,alt:""}}),n("h2",{class:e.types[0].type.name},[t._v(" "+t._s(t.firstUpperCase(e.name)))])])})),0),n("button",{on:{click:t.addPokemonsToList}},[t._v("Cargar más Pokemones")])])},O=[],w=n("1da1"),P=(n("fb6a"),n("96cf"),n("d3b7"),"https://pokeapi.co/api/v2/pokemon/");function x(t){return y.apply(this,arguments)}function y(){return y=Object(w["a"])(regeneratorRuntime.mark((function t(e){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch(P+e+"/");case 2:return n=t.sent,t.next=5,n.json();case 5:return a=t.sent,t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)}))),y.apply(this,arguments)}function C(){return E.apply(this,arguments)}function E(){return E=Object(w["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch(P);case 2:return e=t.sent,t.next=5,e.json();case 5:return n=t.sent,t.abrupt("return",n);case 7:case"end":return t.stop()}}),t)}))),E.apply(this,arguments)}var A={getPokemon:x,getList:C},S={name:"PmList",data:function(){return{listObj:[]}},created:function(){this.getPokemonList()},computed:{listEndIndex:function(){return this.listObj.length+1}},methods:{getPokemonList:function(){var t=this;return Object(w["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=1;case 1:if(!(n<=20)){e.next=9;break}return e.next=4,A.getPokemon(n);case 4:a=e.sent,t.listObj.push(a);case 6:n++,e.next=1;break;case 9:case"end":return e.stop()}}),e)})))()},firstUpperCase:function(t){var e=t[0].toUpperCase()+t.slice(1);return e},addPokemonsToList:function(){var t=this;return Object(w["a"])(regeneratorRuntime.mark((function e(){var n,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.listEndIndex,a=n;case 2:if(!(a<n+20)){e.next=10;break}return e.next=5,A.getPokemon(a);case 5:s=e.sent,t.listObj.push(s);case 7:a++,e.next=2;break;case 10:case"end":return e.stop()}}),e)})))()}}},$=S,R=(n("a315"),Object(p["a"])($,j,O,!1,null,"f7c55b04",null)),L=R.exports,D={name:"Home",components:{PmList:L}},T=D,U=(n("088c"),Object(p["a"])(T,g,k,!1,null,"83a0cc4c",null)),H=U.exports,I=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},M=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",[n("h2",[t._v("This is a Pokemon Single Page App project that makes use of an external API (https://pokeapi.co/) to fetch the required Pokemon Data. Was builded with Vuejs v2 by lucianocavallo")])])])}],F={name:"About"},J=F,V=(n("190e"),Object(p["a"])(J,I,M,!1,null,"4c76ef9a",null)),q=V.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("pm-select")],1)},W=[],z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("div",{staticClass:"search-container"},[a("div",{staticClass:"input-container"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.inputPkm,expression:"inputPkm"}],attrs:{type:"text"},domProps:{value:t.inputPkm},on:{input:function(e){e.target.composing||(t.inputPkm=e.target.value)}}}),a("button",{on:{click:t.searchPkm}},[a("img",{attrs:{src:n("51f2"),alt:""}})])])]),a("div",{staticClass:"cards-container"},[t.showArrow?a("button",{staticClass:"navigate-btn-back",on:{click:t.previousPokemon}},[a("span"),a("span")]):t._e(),t.showCard?a("pm-card",{attrs:{dataObj:t.dataObj}}):t._e(),t.showArrow?a("button",{staticClass:"navigate-btn-forward",on:{click:t.nextPokemon}},[a("span"),a("span")]):t._e()],1)])},B=[],G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.showCard?n("div",{staticClass:"container"},[n("div",{staticClass:"title-container"},[n("h2",[t._v(t._s(t.firstToUpperCase))]),n("span",[t._v("#"+t._s(t.id))])]),n("div",{staticClass:"type-container"},t._l(t.types,(function(e){return n("span",{key:e.type.name},[n("p",{class:e.type.name},[t._v(t._s(e.type.name))])])})),0),n("figure",[n("img",{attrs:{src:t.img,alt:t.name}})]),n("section",{staticClass:"wh-container"},[n("span",[n("strong",[t._v("weight: ")]),t._v(t._s(t.kg)+"kg")]),n("span",[n("strong",[t._v("Height: ")]),t._v(t._s(t.mts)+"mts")])]),n("ul",{staticClass:"stats-container"},[n("li",{staticClass:"stats-hp"},[t._v(t._s(t.hp)),n("br"),t._v("Hp")]),n("li",{staticClass:"stats-atk"},[t._v(t._s(t.atk)),n("br"),t._v("Atk")]),n("li",{staticClass:"stats-def"},[t._v(t._s(t.def)),n("br"),t._v("Def")]),n("li",{staticClass:"stats-sp-atk"},[t._v(t._s(t.spAtk)),n("br"),t._v("Sp.Atk")]),n("li",{staticClass:"stats-sp-def"},[t._v(t._s(t.spDef)),n("br"),t._v("Sp. Def")]),n("li",{staticClass:"stats-speed"},[t._v(t._s(t.speed)),n("br"),t._v("Speed")])])]):t._e()},K=[],Q=(n("b680"),n("b0c0"),{name:"PmCard",props:{dataObj:{type:Object,default:function(){}}},data:function(){return{name:"",id:"",types:this.dataObj.types,img:"",weight:0,height:0,hp:0,atk:0,def:0,spAtk:0,spDef:0,speed:0,showCard:!1}},computed:{kg:function(){return parseInt(100*this.weight/1e3)},mts:function(){return parseFloat(this.height/10).toFixed(1)},firstToUpperCase:function(){return this.dataObj.name[0].toUpperCase()+this.dataObj.name.slice(1)}},methods:{getPokemonData:function(){console.log("hola")}},mounted:function(){this.name=this.dataObj.name,this.id=this.dataObj.id,this.types=this.dataObj.types,this.img=this.dataObj.sprites.other.dream_world.front_default,this.weight=this.dataObj.weight,this.height=this.dataObj.height,this.hp=this.dataObj.stats[0].base_stat,this.atk=this.dataObj.stats[1].base_stat,this.def=this.dataObj.stats[2].base_stat,this.spAtk=this.dataObj.stats[3].base_stat,this.spDef=this.dataObj.stats[4].base_stat,this.speed=this.dataObj.stats[5].base_stat,this.showCard=!0},watch:{dataObj:function(){this.img=this.dataObj.sprites.other.dream_world.front_default;var t=this.dataObj.name;t=t[0].toUpperCase()+t.slice(1),this.name=t,this.name=this.dataObj.name,this.id=this.dataObj.id,this.types=this.dataObj.types,this.weight=this.dataObj.weight,this.height=this.dataObj.height,this.hp=this.dataObj.stats[0].base_stat,this.atk=this.dataObj.stats[1].base_stat,this.def=this.dataObj.stats[2].base_stat,this.spAtk=this.dataObj.stats[3].base_stat,this.spDef=this.dataObj.stats[4].base_stat,this.speed=this.dataObj.stats[5].base_stat}}}),X=Q,Y=(n("cf4d"),Object(p["a"])(X,G,K,!1,null,"386cde24",null)),Z=Y.exports,tt={name:"PmSelect",components:{PmCard:Z},data:function(){return{inputPkm:"",dataObj:{},showCard:!1,showArrow:!1}},methods:{previousPokemon:function(){var t=this;this.dataObj.id<=1||A.getPokemon(this.dataObj.id-1).then((function(e){t.dataObj=e}))},nextPokemon:function(){var t=this;return Object(w["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,A.getPokemon(t.dataObj.id+1);case 2:n=e.sent,t.dataObj=n;case 4:case"end":return e.stop()}}),e)})))()},searchPkm:function(){var t=this;return Object(w["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,A.getPokemon(t.inputPkmLower);case 2:n=e.sent,t.dataObj=n,t.showCard=!0,t.showArrow=!0;case 6:case"end":return e.stop()}}),e)})))()}},computed:{inputPkmLower:function(){return this.inputPkm.toLowerCase()}}},et=tt,nt=(n("c5d6"),Object(p["a"])(et,z,B,!1,null,"12d77fee",null)),at=nt.exports,st={name:"Home",components:{PmSelect:at}},rt=st,it=(n("6723"),Object(p["a"])(rt,N,W,!1,null,"38a7b9a5",null)),ot=it.exports,ct=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ut=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("section",[a("h1",[t._v("4🙈4")]),a("img",{attrs:{src:n("3e0f"),alt:""}}),a("h2",[t._v("Página no encontrada ")])])])}],pt={name:"Error"},lt=pt,ht=(n("f7cc"),Object(p["a"])(lt,ct,ut,!1,null,"b7047370",null)),dt=ht.exports;a["a"].use(_["a"]);var ft=new _["a"]({mode:"history",routes:[{path:"/",name:"home",component:H},{path:"/about",name:"about",component:q},{path:"/select",name:"select",component:ot},{path:"/*",name:"/error",component:dt}]});a["a"].use(v["VueSpinners"]),a["a"].config.productionTip=!1,new a["a"]({router:ft,render:function(t){return t(b)}}).$mount("#app")},6723:function(t,e,n){"use strict";n("fb2c")},"85ec":function(t,e,n){},9130:function(t,e,n){},a315:function(t,e,n){"use strict";n("9130")},c06d:function(t,e,n){},c5d6:function(t,e,n){"use strict";n("4407")},c6d5:function(t,e,n){"use strict";n("d908")},ce5f:function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.27145b04.png"},cf4d:function(t,e,n){"use strict";n("065c")},d908:function(t,e,n){},f7cc:function(t,e,n){"use strict";n("c06d")},fb2c:function(t,e,n){}});
//# sourceMappingURL=app.31aef663.js.map