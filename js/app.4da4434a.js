(function(t){function e(e){for(var i,a,o=e[0],s=e[1],l=e[2],d=0,u=[];d<o.length;d++)a=o[d],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&u.push(c[a][0]),c[a]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);p&&p(e);while(u.length)u.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,a=1;a<n.length;a++){var o=n[a];0!==c[o]&&(i=!1)}i&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},a={app:0},c={app:0},r=[];function o(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"8dcc7b44"}[t]+".js"}function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={about:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var i="css/"+({about:"about"}[t]||t)+"."+{about:"62f25fd6"}[t]+".css",c=s.p+i,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var l=r[o],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===i||d===c))return e()}var u=document.getElementsByTagName("style");for(o=0;o<u.length;o++){l=u[o],d=l.getAttribute("data-href");if(d===i||d===c)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var i=e&&e.target&&e.target.src||c,r=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=i,delete a[t],p.parentNode.removeChild(p),n(r)},p.href=c;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){a[t]=0})));var i=c[t];if(0!==i)if(i)e.push(i[2]);else{var r=new Promise((function(e,n){i=c[t]=[e,n]}));e.push(i[2]=r);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=o(t);var u=new Error;l=function(e){d.onerror=d.onload=null,clearTimeout(p);var n=c[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,n[1](u)}c[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(e)},s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var p=d;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"03e4":function(t,e,n){t.exports=n.p+"img/allepin-standcard.5f9ee77a.jpg"},"0a84":function(t,e,n){},"0afc":function(t,e,n){t.exports=n.p+"img/botmodule-flow.34be4258.jpg"},4410:function(t,e,n){"use strict";n("81fa")},"4f58":function(t,e,n){"use strict";n("c445")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},c=[],r=(n("5c0b"),n("2877")),o={},s=Object(r["a"])(o,a,c,!1,null,null,null),l=s.exports,d=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("div",{staticClass:"topwhitebox"}),n("h3",{staticClass:"internaltooltitle"},[t._v("Internal TooL")]),n("div",{staticClass:"tabbar"},[n("div",{staticClass:"tabwrap"},[n("router-link",{attrs:{to:"/clock"}},[n("div",{staticClass:"clocktab tabactive"},[n("h4",{staticClass:"tabname"},[t._v(" 看牙小鬧鐘 ")])])]),n("router-link",{attrs:{to:"/etalk"}},[n("div",{staticClass:"etalktab"},[n("h4",{staticClass:"tabname"},[t._v(" 醫點通 ")])])])],1),n("div",{staticClass:"tabunderline"})]),n("router-view")],1)},p=[],m={name:"Home",components:{}},h=m,f=(n("f40e"),Object(r["a"])(h,u,p,!1,null,"4f19be41",null)),v=f.exports,g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"switchbtnwrap"},[t._m(0),i("router-link",{attrs:{to:"/clock/standcard"}},[i("div",{staticClass:"clocknonactivebtn"},[i("span",[t._v("立牌")])])]),i("router-link",{attrs:{to:"/clock/flow"}},[i("div",{staticClass:"clocknonactivebtn"},[i("span",[t._v("流程圖")])])]),t._m(1)],1),i("div",{staticClass:"content"},[i("div",{staticClass:"cardarea"},["normalfront"==t.cardmode||"botback"==t.cardmode?i("div",{staticClass:"imgwrap",attrs:{id:"content"}},[t._m(2),i("div",{staticClass:"clinicname"},[i("span",{style:{fontSize:t.clinicfz+"px"}},[t._v(t._s(t.clinicname))])]),i("div",{staticClass:"lineid"},[i("span",{style:{fontSize:t.lineidfz+"px"}},[t._v(t._s(t.lineid))])]),i("img",{attrs:{id:"pictest",src:n("e01e"),alt:""}})]):t._e(),"normalfront"==t.cardmode?i("div",{staticClass:"normalcardwrap",attrs:{id:"content2"}},[i("img",{attrs:{id:"pictest",src:n("5ba1"),alt:""}})]):t._e(),"botback"==t.cardmode?i("div",{staticClass:"normalcardwrap",attrs:{id:"content2"}},[i("img",{attrs:{id:"pictest",src:n("aae4"),alt:""}})]):t._e()]),i("div",{staticClass:"editarea"},[i("div",{staticClass:"cardnamewrap"},[i("textinput",{attrs:{inputtitle:"立牌名稱",inputwidth:"204",inputplace:"診所名稱"},on:{emittextcontent:t.clinicnamechange}}),i("textinput",{attrs:{inputtitle:"字級",inputwidth:"108",inputplace:"14"},on:{emittextcontent:t.clinicfzchange}})],1),i("div",{staticClass:"funconewrap"},[i("textinput",{attrs:{inputtitle:"方法一",inputwidth:"204",inputplace:"@doctor"},on:{emittextcontent:t.lineidchange}}),i("textinput",{attrs:{inputtitle:"字級",inputwidth:"108",inputplace:"14"},on:{emittextcontent:t.lineidfzchange}})],1),i("div",{staticClass:"functwowrap"},[i("textinput",{attrs:{inputtitle:"方法二",inputwidth:"204",inputplace:"Url"},on:{emittextcontent:t.catchurl}}),i("textinput",{attrs:{inputtitle:"顏色",inputwidth:"108",inputplace:"29275F"},on:{emittextcontent:t.qrcolorchange}})],1),i("div",{staticClass:"backflowwrap"},[i("div",{staticClass:"dropdownwrap"},[i("span",{staticClass:"dropdowntitle"},[t._v("背面流程")]),i("div",{staticClass:"dropdownmenu",on:{click:function(e){return e.target!==e.currentTarget?null:t.opendrop(e)}}},[t._v(" "+t._s(t.currentmode)+" "),i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"}},[i("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),i("path",{attrs:{d:"M12 14l-4-4h8z",fill:"rgba(146,156,183,1)"}})]),i("ul",{style:{display:t.menustatus}},[i("li",{on:{click:function(e){return t.changemode("normal")}}},[t._v("一般流程")]),i("li",{on:{click:function(e){return t.changemode("bot")}}},[t._v("Bot module")])])])])]),i("div",{staticClass:"clockdownloadbtn",on:{click:t.downloadtable}},[i("span",[t._v("檔案下載")])])])])])},w=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"clockactivebtn"},[n("span",[t._v("小卡")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"clockdisable"},[n("span",[t._v("臉書")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"qrcodewrap"},[n("img",{staticClass:"barcode",attrs:{id:"barcode",src:"https://api.qrserver.com/v1/create-qr-code/?data=HelloWorld&amp",alt:"",title:"HELLO",width:"220",height:"220"}})])}],b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inputwrap",style:{width:t.inputwdt+"px"}},[n("span",{staticClass:"inputtitle"},[t._v(t._s(t.inputtlt))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputcontent,expression:"inputcontent"}],attrs:{type:"text",placeholder:t.inputplc},domProps:{value:t.inputcontent},on:{change:t.textcontentchange,input:function(e){e.target.composing||(t.inputcontent=e.target.value)}}})])},_=[],C={props:["inputwidth","inputtitle","inputplace","outlinecolor"],data:function(){return{inputwdt:this.inputwidth,inputtlt:this.inputtitle,inputplc:this.inputplace,inputoutcol:this.outlinecolor,inputcontent:""}},methods:{textcontentchange:function(){this.$emit("emittextcontent",this.inputcontent)}}},x=C,k=(n("69f5"),Object(r["a"])(x,b,_,!1,null,"7f5abd47",null)),q=k.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdownwrap"},[n("span",{staticClass:"dropdowntitle"},[t._v("背面流程")]),n("div",{staticClass:"dropdownmenu"},[n("ul",{style:{height:t.menuheight+"px"},on:{click:t.opendrop}},[n("li",{staticClass:"currentmode"},[t._v("背面流程")]),n("li",{on:{click:t.front}},[t._v("正面")]),n("li",{on:{click:t.normalmode}},[t._v("一般")]),n("li",{on:{click:t.botmode}},[t._v("Bot module")])])])])},E=[],z={props:["propsheight"],data:function(){return{menuheight:this.propsheight}},methods:{opendrop:function(){this.menuheight="185"},normalmode:function(){this.$emit("emitmode","normal")},botmode:function(){this.$emit("emitmode","bot")},front:function(){this.$emit("emitmode","normalfront")}}},j=z,$=(n("4410"),Object(r["a"])(j,y,E,!1,null,"434a2b91",null)),S=$.exports,O=n("9ad7"),L=n.n(O),A={name:"Home",data:function(){return{clinicname:"凡凡牙醫診所",clinicfz:"55",lineid:"@doctor",lineidfz:"30",qrcolor:"",qrurl:"",cardmode:"normalfront",menustatus:"none",currentmode:"Bot module"}},methods:{catchurl:function(t){this.qrurl=t;var e="https://api.qrserver.com/v1/create-qr-code/?data="+this.qrurl+"&color=";document.querySelector("#barcode").setAttribute("src",e)},clinicnamechange:function(t){this.clinicname=t},clinicfzchange:function(t){this.clinicfz=t},lineidchange:function(t){this.lineid=t},lineidfzchange:function(t){this.lineidfz=t},opendrop:function(){this.menuheight="88",this.menustatus="block"},changemode:function(t){"normal"==t?(this.cardmode="normalfront",this.currentmode="一般流程",this.menustatus="none"):(this.cardmode="botback",this.currentmode="Bot module",this.menustatus="none")},qrcolorchange:function(t){this.qrcolor=t;var e="https://api.qrserver.com/v1/create-qr-code/?data="+this.qrurl+"&color="+this.qrcolor;document.querySelector("#barcode").setAttribute("src",e)},downloadtable:function(){var t=document.getElementById("content"),e=document.getElementById("content2"),n=this.clinicname+"小鬧鐘小卡.jpeg",i=this.clinicname+"小鬧鐘小卡背後-一般.jpeg";i="normalfront"==this.cardmode?this.clinicname+"小鬧鐘小卡背後-一般.jpeg":this.clinicname+"小鬧鐘小卡背後-BotModule.jpeg",L.a.toJpeg(t,{style:{"background-color":"white",transform:"scale(1)"}}).then((function(t){var e=document.createElement("a");e.download=n,e.href=t,e.click()})).catch((function(t){console.error("oops, something went wrong!",t)})),L.a.toJpeg(e,{style:{"background-color":"white",transform:"scale(1)",opacity:"1"}}).then((function(t){var e=document.createElement("a");e.download=i,e.href=t,e.click()})).catch((function(t){console.error("oops, something went wrong!",t)}))},readURL:function(t){if(t.files&&t.files[0]){var e=t.getAttribute("targetID"),n=new FileReader;n.onload=function(t){var n=document.getElementById(e);n.setAttribute("src",t.target.result)},n.readAsDataURL(t.files[0])}}},components:{textinput:q,dorpdown:S}},B=A,H=(n("b102"),Object(r["a"])(B,g,w,!1,null,"5c073052",null)),I=H.exports,T=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"switchbtnwrap"},[t._m(0),i("router-link",{attrs:{to:"/etalk/standcard"}},[i("div",{staticClass:"etalknonactivebtn"},[i("span",[t._v("立牌")])])]),t._m(1),t._m(2)],1),i("div",{staticClass:"content"},[i("div",{staticClass:"cardarea"},[i("div",{staticClass:"imgwrap",attrs:{id:"content"}},[t._m(3),i("div",{staticClass:"clinicname"},[i("span",{style:{fontSize:t.clinicfz+"px"}},[t._v(t._s(t.clinicname))])]),i("div",{staticClass:"lineid"},[i("span",{style:{fontSize:t.lineidfz+"px"}},[t._v(t._s(t.lineid))])]),i("img",{attrs:{src:n("d26c"),alt:""}})]),t._m(4)]),i("div",{staticClass:"editarea"},[i("div",{staticClass:"cardnamewrap"},[i("textinput",{attrs:{inputtitle:"立牌名稱",inputwidth:"204",inputplace:"診所名稱",outlinecolor:"006db1"},on:{emittextcontent:t.catchclinic}}),i("textinput",{attrs:{inputtitle:"字級",inputwidth:"108",inputplace:"14"},on:{emittextcontent:t.catchclinicfz}})],1),i("div",{staticClass:"funconewrap"},[i("textinput",{attrs:{inputtitle:"方法一",inputwidth:"204",inputplace:"@doctor"},on:{emittextcontent:t.catchlineid}}),i("textinput",{attrs:{inputtitle:"字級",inputwidth:"108",inputplace:"14"},on:{emittextcontent:t.catchlineidfz}})],1),i("div",{staticClass:"functwowrap"},[i("textinput",{attrs:{inputtitle:"方法二",inputwidth:"204",inputplace:"Url"},on:{emittextcontent:t.catchurl}}),i("textinput",{attrs:{inputtitle:"字級",inputwidth:"108",inputplace:"14"},on:{emittextcontent:t.catchqrcolor}})],1),i("div",{staticClass:"etalkdownloadbtn",on:{click:t.downloadsmallcard}},[i("span",[t._v("檔案下載")])])])])])},U=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"etalkactivebtn"},[n("span",[t._v("小卡")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"etalknonactivebtn"},[n("span",[t._v("流程圖")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"etalkdisable"},[n("span",[t._v("臉書")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"qrcodewrap"},[n("img",{staticClass:"barcode",attrs:{id:"barcode",src:"https://api.qrserver.com/v1/create-qr-code/?data=HelloWorld&amp",alt:"",title:"HELLO",width:"220",height:"220"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"backwrap",attrs:{id:"content2"}},[i("img",{attrs:{src:n("ae90"),alt:""}})])}],M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inputwrap",style:{width:t.inputwdt+"px"}},[n("span",{staticClass:"inputtitle"},[t._v(t._s(t.inputtlt))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputcontent,expression:"inputcontent"}],attrs:{type:"text",placeholder:t.inputplc,"style:focus":{border:"solid 2px #"+t.inputoutcol}},domProps:{value:t.inputcontent},on:{change:t.textcontentchange,input:function(e){e.target.composing||(t.inputcontent=e.target.value)}}})])},P=[],R={props:["inputwidth","inputtitle","inputplace","outlinecolor"],data:function(){return{inputwdt:this.inputwidth,inputtlt:this.inputtitle,inputplc:this.inputplace,inputoutcol:this.outlinecolor,inputcontent:""}},methods:{textcontentchange:function(){this.$emit("emittextcontent",this.inputcontent)}}},W=R,D=(n("eb79"),Object(r["a"])(W,M,P,!1,null,"7ce719a3",null)),J=D.exports,F={name:"Home",data:function(){return{clinicname:"凡凡牙醫診所",lineid:"@doctor",clinicfz:"50",lineidfz:"30",qrurl:"",qrcolor:""}},methods:{catchclinic:function(t){this.clinicname=t},catchclinicfz:function(t){this.clinicfz=t},catchlineid:function(t){this.lineid=t},catchlineidfz:function(t){this.lineidfz=t},catchurl:function(t){this.qrurl=t;var e="https://api.qrserver.com/v1/create-qr-code/?data="+this.qrurl+"&color="+this.qrcolor;document.querySelector("#barcode").setAttribute("src",e)},catchqrcolor:function(t){this.qrcolor=t;var e="https://api.qrserver.com/v1/create-qr-code/?data="+this.qrurl+"&color="+this.qrcolor;document.querySelector("#barcode").setAttribute("src",e)},downloadsmallcard:function(){var t=document.getElementById("content"),e=document.getElementById("content2"),n=this.clinicname+"醫點通小卡.jpeg",i=this.clinicname+"醫點通小卡背面.jpeg";L.a.toJpeg(t,{style:{"background-color":"white",transform:"scale(1)"}}).then((function(t){var e=document.createElement("a");e.download=n,e.href=t,e.click()})).catch((function(t){console.error("oops, something went wrong!",t)})),L.a.toJpeg(e,{style:{"background-color":"white",opacity:"1",transform:"scale(1)"}}).then((function(t){var e=document.createElement("a");e.download=i,e.href=t,e.click()})).catch((function(t){console.error("oops, something went wrong!",t)}))}},components:{textinput:J}},N=F,V=(n("4f58"),Object(r["a"])(N,T,U,!1,null,"01c962ea",null)),K=V.exports,G=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"switchbtnwrap"},[i("router-link",{attrs:{to:"/clock/smallcard"}},[i("div",{staticClass:"clocknonactivebtn"},[i("span",[t._v("小卡")])])]),i("router-link",{attrs:{to:"/clock/standcard"}}),t._m(0),i("router-link",{attrs:{to:"/clock/flow"}},[i("div",{staticClass:"clocknonactivebtn"},[i("span",[t._v("流程圖")])])]),t._m(1)],1),i("div",{staticClass:"content"},[i("div",{staticClass:"cardarea"},[i("div",{staticClass:"imgwrap",attrs:{id:"content"}},[t._m(2),i("div",{staticClass:"cliniclogowrap"},[i("img",{style:{transform:"scale("+t.logoscale+")"},attrs:{id:"preview_progressbarTW_img",src:"#"}})]),i("div",{staticClass:"clinicname"},[i("span",{style:{fontSize:t.clinicfz+"px"}},[t._v(t._s(t.clinicname))])]),i("div",{staticClass:"lineid"},[i("span",{style:{fontSize:t.lineidfz+"px"}},[t._v(t._s(t.lineid))])]),i("img",{attrs:{id:"pictest",src:n("03e4"),alt:""}})])]),i("div",{staticClass:"editarea"},[i("div",{staticClass:"uploadarea"},[i("div",{staticClass:"uploadbtn"},[i("span",[t._v("立牌名稱")]),i("label",{attrs:{for:"fileup"}},[t._v("檔案上傳 "),i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"20",height:"18"}},[i("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),i("path",{attrs:{d:"M4 19h16v-7h2v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8h2v7zm9-10v7h-2V9H6l6-6 6 6h-5z",fill:"rgba(61,97,215,1)"}})])]),i("input",{attrs:{type:"file",id:"fileup",targetID:"preview_progressbarTW_img",accept:"image/gif, image/jpeg, image/png"},on:{change:t.readURL}})]),i("textinput",{attrs:{inputtitle:"縮放大小",inputwidth:"108",inputplace:"100"},on:{emittextcontent:t.zoomscalechange}})],1),i("div",{staticClass:"standcardname"},[i("textinput",{attrs:{inputtitle:"立牌名稱",inputwidth:"204",inputplace:"診所名稱"},on:{emittextcontent:t.clinicnamechange}}),i("textinput",{attrs:{inputtitle:"字級",inputwidth:"108",inputplace:"14"},on:{emittextcontent:t.clinicfzchange}})],1),i("div",{staticClass:"funconewrap"},[i("textinput",{attrs:{inputtitle:"方法一",inputwidth:"204",inputplace:"@doctor"},on:{emittextcontent:t.lineidchange}}),i("textinput",{attrs:{inputtitle:"字級",inputwidth:"108",inputplace:"14"},on:{emittextcontent:t.lineidfzchange}})],1),i("div",{staticClass:"functwowrap"},[i("textinput",{attrs:{inputtitle:"方法二",inputwidth:"204",inputplace:"Url"},on:{emittextcontent:t.catchurl}}),i("textinput",{attrs:{inputtitle:"顏色",inputwidth:"108",inputplace:"29275F"},on:{emittextcontent:t.qrcolorchange}})],1),i("div",{staticClass:"clockdownloadbtn",on:{click:t.downloadtable}},[i("span",[t._v("檔案下載")])])])])])},Q=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:" clockactivebtn"},[n("span",[t._v("立牌")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"clockdisable"},[n("span",[t._v("臉書")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"qrcodewrap"},[n("img",{staticClass:"barcode",attrs:{id:"barcode",src:"https://api.qrserver.com/v1/create-qr-code/?data=HelloWorld&amp",alt:"",title:"HELLO",width:"400",height:"400"}})])}],X={data:function(){return{logoscale:"",clinicname:"凡凡牙醫診所",clinicfz:"55",lineid:"@doctor",lineidfz:"50",qrcolor:"",qrurl:""}},methods:{catchurl:function(t){this.qrurl=t;var e="https://api.qrserver.com/v1/create-qr-code/?data="+this.qrurl+"&color=";document.querySelector("#barcode").setAttribute("src",e)},qrcolorchange:function(t){this.qrcolor=t;var e="https://api.qrserver.com/v1/create-qr-code/?data="+this.qrurl+"&color="+this.qrcolor;document.querySelector("#barcode").setAttribute("src",e)},readURL:function(t){var e=t.target;if(e.files&&e.files[0]){var n=e.getAttribute("targetID"),i=new FileReader;i.onload=function(t){var e=document.getElementById(n);e.setAttribute("src",t.target.result)},i.readAsDataURL(e.files[0])}},zoomscalechange:function(t){var e=parseInt(t,10),n=e/100;this.logoscale=n},clinicnamechange:function(t){this.clinicname=t},clinicfzchange:function(t){this.clinicfz=t},lineidchange:function(t){this.lineid=t},lineidfzchange:function(t){this.lineidfz=t},downloadtable:function(){var t=document.getElementById("content"),e=this.clinicname+"小鬧鐘立牌.jpeg";L.a.toJpeg(t,{style:{"background-color":"white",transform:"scale(1)"}}).then((function(t){var n=document.createElement("a");n.download=e,n.href=t,n.click()})).catch((function(t){console.error("oops, something went wrong!",t)}))}},components:{textinput:q}},Y=X,Z=(n("f32c"),Object(r["a"])(Y,G,Q,!1,null,"5c4ea5c8",null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"switchbtnwrap"},[i("router-link",{attrs:{to:"/etalk/smallcard"}},[i("div",{staticClass:"etalknonactivebtn"},[i("span",[t._v("小卡")])])]),t._m(0),t._m(1),t._m(2)],1),i("div",{staticClass:"content"},[i("div",{staticClass:"cardarea"},[i("div",{staticClass:"imgwrap",attrs:{id:"content"}},[t._m(3),i("div",{staticClass:"clinicname"},[i("span",{style:{fontSize:t.clinicfz+"px"}},[t._v(t._s(t.clinicname))])]),i("div",{staticClass:"lineid"},[i("span",{style:{fontSize:t.lineidfz+"px"}},[t._v(t._s(t.lineid))])]),i("img",{attrs:{src:n("7691"),alt:""}})])]),i("div",{staticClass:"editarea"},[i("div",{staticClass:"standcardname"},[i("textinput",{attrs:{inputtitle:"立牌名稱",inputwidth:"204",inputplace:"診所名稱"},on:{emittextcontent:t.clinicchange}}),i("textinput",{attrs:{inputtitle:"字級",inputwidth:"108",inputplace:"14"},on:{emittextcontent:t.clinicfzchange}})],1),i("div",{staticClass:"funconewrap"},[i("textinput",{attrs:{inputtitle:"方法一",inputwidth:"204",inputplace:"@doctor"},on:{emittextcontent:t.linechange}}),i("textinput",{attrs:{inputtitle:"字級",inputwidth:"108",inputplace:"14"},on:{emittextcontent:t.linefzchange}})],1),i("div",{staticClass:"functwowrap"},[i("textinput",{attrs:{inputtitle:"方法二",inputwidth:"204",inputplace:"Url"},on:{emittextcontent:t.catchurl}}),i("textinput",{attrs:{inputtitle:"顏色",inputwidth:"108",inputplace:"29275F"},on:{emittextcontent:t.catchcolor}})],1),i("div",{staticClass:"etalkdownloadbtn",on:{click:t.downloadstandcard}},[i("span",[t._v("檔案下載")])])])])])},nt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:" etalkactivebtn"},[n("span",[t._v("立牌")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"etalknonactivebtn"},[n("span",[t._v("流程圖")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"etalkdisable"},[n("span",[t._v("臉書")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"qrcodewrap"},[n("img",{staticClass:"barcode",attrs:{id:"barcode",src:"https://api.qrserver.com/v1/create-qr-code/?data=HelloWorld&amp",alt:"",title:"HELLO",width:"450",height:"450"}})])}],it={data:function(){return{clinicname:"連新國際牙醫",lineid:"@doctor",clinicfz:"90",lineidfz:"50",qrurl:"",qrcolor:""}},methods:{clinicchange:function(t){this.clinicname=t},clinicfzchange:function(t){this.clinicfz=t},linechange:function(t){this.lineid=t},linefzchange:function(t){this.lineidfz=t},catchcolor:function(t){this.qrcolor=t;var e="https://api.qrserver.com/v1/create-qr-code/?data="+this.qrurl+"&color="+this.qrcolor;document.querySelector("#barcode").setAttribute("src",e)},catchurl:function(t){this.qrurl=t;var e="https://api.qrserver.com/v1/create-qr-code/?data="+this.qrurl+"&color="+this.qrcolor;document.querySelector("#barcode").setAttribute("src",e)},downloadstandcard:function(){var t=document.getElementById("content"),e=this.clinicname+"醫點通立牌.jpeg";L.a.toJpeg(t,{style:{"background-color":"white",transform:"scale(1)"}}).then((function(t){var n=document.createElement("a");n.download=e,n.href=t,n.click()})).catch((function(t){console.error("oops, something went wrong!",t)}))}},components:{textinput:J}},at=it,ct=(n("c493"),Object(r["a"])(at,et,nt,!1,null,"5dc21f65",null)),rt=ct.exports,ot=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",[i("div",{staticClass:"switchbtnwrap"},[i("router-link",{attrs:{to:"/clock/smallcard"}},[i("div",{staticClass:"clocknonactivebtn"},[i("span",[t._v("小卡")])])]),i("router-link",{attrs:{to:"/clock/standcard"}},[i("div",{staticClass:"clocknonactivebtn"},[i("span",[t._v("立牌")])])]),t._m(0),t._m(1)],1),i("div",{staticClass:"content"},[i("div",{staticClass:"cardarea"},["normal"==t.cardmode?i("div",{staticClass:"imgwrap",attrs:{id:"content"}},[t._m(2),i("img",{attrs:{id:"pictest",src:n("6738"),alt:""}}),i("div",{staticClass:"cliniclogowrap"},[i("img",{style:{transform:"scale("+t.logoscale+")"},attrs:{id:"preview_progressbarTW_img",src:"#"}})])]):t._e(),"bot"==t.cardmode?i("div",{staticClass:"botwrap",attrs:{id:"content"}},[t._m(3),i("img",{attrs:{id:"pictest",src:n("0afc"),alt:""}}),i("div",{staticClass:"cliniclogowrap"},[i("img",{style:{transform:"scale("+t.logoscale+")"},attrs:{id:"preview_progressbarTW_img",src:"#"}})])]):t._e()]),i("div",{staticClass:"editarea"},[i("div",{staticClass:"flowmodewrap"},[i("div",{staticClass:"dropdownwrap"},[i("span",{staticClass:"dropdowntitle"},[t._v("頁面格式")]),i("div",{staticClass:"dropdownmenu",on:{click:function(e){return e.target!==e.currentTarget?null:t.opendrop(e)}}},[t._v(" "+t._s(t.currentmode)+" "),i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"}},[i("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),i("path",{attrs:{d:"M12 14l-4-4h8z",fill:"rgba(146,156,183,1)"}})]),i("ul",{style:{display:t.menustatus}},[i("li",{on:{click:function(e){return t.changemode("normal")}}},[t._v("基本流程")]),i("li",{on:{click:function(e){return t.changemode("bot")}}},[t._v("Bot module")])])])])]),i("div",{staticClass:"divideline"}),i("div",{staticClass:"uploadarea"},[i("div",{staticClass:"uploadbtn"},[i("span",[t._v("立牌名稱")]),i("label",{attrs:{for:"fileup"}},[t._v("檔案上傳 "),i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"20",height:"18"}},[i("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),i("path",{attrs:{d:"M4 19h16v-7h2v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8h2v7zm9-10v7h-2V9H6l6-6 6 6h-5z",fill:"rgba(61,97,215,1)"}})])]),i("input",{attrs:{type:"file",id:"fileup",targetID:"preview_progressbarTW_img",accept:"image/gif, image/jpeg, image/png"},on:{change:t.readURL}})]),i("textinput",{attrs:{inputtitle:"縮放大小",inputwidth:"108",inputplace:"100"},on:{emittextcontent:t.zoomscalechange}})],1),i("div",{staticClass:"functwowrap"},[i("textinput",{attrs:{inputtitle:"方法二",inputwidth:"204",inputplace:"Url"},on:{emittextcontent:t.catchurl}}),i("textinput",{attrs:{inputtitle:"顏色",inputwidth:"108",inputplace:"29275F"},on:{emittextcontent:t.qrcolorchange}})],1),i("div",{staticClass:"clockdownloadbtn",on:{click:t.downloadtable}},[i("span",[t._v("檔案下載")])])])])])])},st=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"clockactivebtn"},[n("span",[t._v("流程圖")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"clockdisable"},[n("span",[t._v("臉書")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"qrcodewrap"},[n("img",{staticClass:"barcode",attrs:{id:"barcode",src:"https://api.qrserver.com/v1/create-qr-code/?data=HelloWorld&amp",alt:"",title:"HELLO",width:"280",height:"280"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"qrcodewrap"},[n("img",{staticClass:"barcode",attrs:{id:"barcode",src:"https://api.qrserver.com/v1/create-qr-code/?data=HelloWorld&amp",alt:"",title:"HELLO",width:"280",height:"280"}})])}],lt={data:function(){return{qrurl:"",qrcolor:"",logoscale:"",currentmode:"基本流程",menustatus:"none",cardmode:"normal"}},methods:{catchurl:function(t){this.qrurl=t;var e="https://api.qrserver.com/v1/create-qr-code/?data="+this.qrurl+"&color="+this.qrcolor;document.querySelector("#barcode").setAttribute("src",e)},qrcolorchange:function(t){this.qrcolor=t;var e="https://api.qrserver.com/v1/create-qr-code/?data="+this.qrurl+"&color="+this.qrcolor;document.querySelector("#barcode").setAttribute("src",e)},zoomscalechange:function(t){var e=parseInt(t,10),n=e/100;this.logoscale=n},opendrop:function(){this.menustatus="block"},changemode:function(t){"normal"==t?(this.cardmode="normal",this.currentmode="基本流程",this.menustatus="none"):(this.cardmode="bot",this.currentmode="Bot module",this.menustatus="none")},downloadtable:function(){var t=document.getElementById("content"),e=this.clinicname+"小鬧鐘立牌.jpeg";L.a.toJpeg(t,{style:{"background-color":"white",transform:"scale(1)"}}).then((function(t){var n=document.createElement("a");n.download=e,n.href=t,n.click()})).catch((function(t){console.error("oops, something went wrong!",t)}))},readURL:function(t){var e=t.target;if(e.files&&e.files[0]){var n=e.getAttribute("targetID"),i=new FileReader;i.onload=function(t){var e=document.getElementById(n);e.setAttribute("src",t.target.result)},i.readAsDataURL(e.files[0])}}},components:{textinput:q}},dt=lt,ut=(n("bb32"),Object(r["a"])(dt,ot,st,!1,null,"e677f176",null)),pt=ut.exports;i["a"].use(d["a"]);var mt=[{path:"/",redirect:{name:"Clock"}},{path:"/clock",name:"Clock",component:v,redirect:"/clock/smallcard",children:[{path:"smallcard",name:"ClockSmallCard",component:I},{path:"standcard",name:"ClockStandCard",component:tt},{path:"flow",name:"Clockflow",component:pt}]},{path:"/etalk",name:"Etalk",component:function(){return n.e("about").then(n.bind(null,"081f"))},redirect:"/etalk/smallcard",children:[{path:"smallcard",name:"EtalkSmallCard",component:K},{path:"standcard",name:"EtalkStandCard",component:rt}]}],ht=new d["a"]({base:"",routes:mt}),ft=ht;i["a"].config.productionTip=!1,new i["a"]({router:ft,render:function(t){return t(l)}}).$mount("#app")},5988:function(t,e,n){},"5ba1":function(t,e,n){t.exports=n.p+"img/clocksmallcard-backnormal.35d992d1.jpg"},"5c0b":function(t,e,n){"use strict";n("9c0c")},6738:function(t,e,n){t.exports=n.p+"img/normal-flow.b1b3b4de.jpg"},"69f5":function(t,e,n){"use strict";n("7b92")},"741a":function(t,e,n){},7691:function(t,e,n){t.exports=n.p+"img/etalkstandcard-01.34c4f955.jpg"},"7b92":function(t,e,n){},"81fa":function(t,e,n){},"8cc1":function(t,e,n){},"9c0c":function(t,e,n){},aae4:function(t,e,n){t.exports=n.p+"img/clocksmallcard-backbot.41778c5c.jpg"},abe4:function(t,e,n){},ae90:function(t,e,n){t.exports=n.p+"img/etalksmallcard-back.dfaef4cf.jpg"},b102:function(t,e,n){"use strict";n("5988")},bb32:function(t,e,n){"use strict";n("abe4")},c445:function(t,e,n){},c493:function(t,e,n){"use strict";n("741a")},d26c:function(t,e,n){t.exports=n.p+"img/etalksmallcard-front.f80c434d.jpg"},e01e:function(t,e,n){t.exports=n.p+"img/clocksmallcard-front.3a1b32ea.jpg"},eb79:function(t,e,n){"use strict";n("8cc1")},f32c:function(t,e,n){"use strict";n("f872")},f40e:function(t,e,n){"use strict";n("0a84")},f872:function(t,e,n){}});
//# sourceMappingURL=app.4da4434a.js.map