(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-513fb23f"],{"53c4":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content-area__content"},[t._m(0),s("div",{attrs:{id:"page-user-view"}},[s("div",{attrs:{id:"user-data"}},[s("div",{staticClass:"vx-card mb-base"},[t._m(1),s("div",{staticClass:"vx-card__collapsible-content vs-con-loading__container"},[s("div",{staticClass:"vx-card__body"},[s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col",attrs:{id:"avatar-col"}},[s("div",{staticClass:"img-container mb-4"},[t.userData_info.small_image?s("img",{staticClass:"rounded shadow-md cursor-pointer block",staticStyle:{"object-fit":"cover"},attrs:{src:t.userData_info.small_image,alt:"user-img",width:"120",height:"100"}}):s("img",{staticClass:"rounded shadow-md cursor-pointer block",staticStyle:{"object-fit":"cover"},attrs:{src:t.profileNoImage,alt:"user-img",width:"140",height:"120"}})])]),s("div",{staticClass:"vx-col flex-1",attrs:{id:"account-info-col-1"}},[s("table",[s("tr",[s("td",{staticClass:"font-semibold pt-5 p-2"},[t._v("First Name")]),s("td",{staticClass:"pt-5"},[t._v(" "+t._s(t.userData_info.first_name))])]),s("tr",[s("td",{staticClass:"font-semibold p-2"},[t._v("Last Name")]),s("td",[t._v(t._s(t.userData_info.last_name))])]),s("tr",[s("td",{staticClass:"font-semibold p-2"},[t._v("Email")]),s("td",{attrs:{clas:"p-2"}},[t._v(t._s(t.userData_info.email))])])])]),s("div",{staticClass:"vx-col flex-1",attrs:{id:"account-info-col-2"}},[s("h2",[t._v("Account Details")]),s("table",[s("tr",[s("td",{staticClass:"font-semibold pt-2",staticStyle:{"font-size":"1.2em !important"}},[t._v("Main Balance")]),s("td",{staticClass:"pt-5 p-2"},[s("vs-chip",{staticStyle:{"font-size":"1.2em !important"},attrs:{color:"primary"}},[t._v("N56,0000")])],1)]),s("tr",[s("td",{staticClass:"font-semibold pt-2",staticStyle:{"font-size":"1.2em !important"}},[t._v("Lain Balance")]),s("td",{staticClass:"pt-3"},[s("vs-chip",{staticStyle:{"font-size":"1.2em !important"},attrs:{color:"primary"}},[t._v("N30,0000")])],1)])])]),s("div",{staticClass:"vx-col w-full flex mt-3",attrs:{id:"account-manage-buttons"}},[s("vs-button",{staticClass:"vs-component vs-button mr-4 vs-button-primary vs-button-filled includeIcon",attrs:{type:"button",to:"/profile-update",name:"button"}},[s("span",{staticClass:"vs-button-backgroundx vs-button--background",staticStyle:{opacity:"1",left:"20px",top:"20px",width:"0px",height:"0px",transition:"width 0.3s ease 0s, height 0.3s ease 0s, opacity 0.3s ease 0s"}}),s("i",{staticClass:"vs-icon notranslate icon-scale feather icon-edit null",staticStyle:{order:"0","margin-right":"5px","margin-left":"0px"}}),s("span",{staticClass:"vs-button-text vs-button--text"},[t._v("Update")]),s("span",{staticClass:"vs-button-linex",staticStyle:{top:"auto",bottom:"-2px",left:"50%",transform:"translate(-50%)"}})])],1)])])]),t._m(2)])])])])},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"vue-back-to-top",staticStyle:{bottom:"5%",right:"30px",display:"none"}},[s("button",{staticClass:"vs-component vs-button shadow-lg btn-back-to-top vs-button-primary vs-button-filled includeIcon includeIconOnly",attrs:{type:"button",name:"button"}},[s("span",{staticClass:"vs-button-backgroundx vs-button--background",staticStyle:{opacity:"1",left:"20px",top:"20px",width:"0px",height:"0px",transition:"width 0.3s ease 0s, height 0.3s ease 0s, opacity 0.3s ease 0s"}}),s("i",{staticClass:"vs-icon notranslate icon-scale vs-button--icon feather icon-arrow-up null",staticStyle:{order:"0","margin-right":"0px","margin-left":"0px"}}),s("span",{staticClass:"vs-button-linex",staticStyle:{top:"auto",bottom:"-2px",left:"50%",transform:"translate(-50%)"}})])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"vx-card__header"},[s("div",{staticClass:"vx-card__title"},[s("h4",{},[t._v("Account")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"vx-card__code-container collapsed",staticStyle:{"max-height":"0px",display:"none"}},[s("div",{staticClass:"code-content"},[s("pre",{staticClass:"language-markup"},[s("code",{staticClass:"language-markup"})])])])}],n=(s("8e6e"),s("ac6a"),s("456d"),s("ade3")),c=s("2f62");function o(t,a){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),s.push.apply(s,e)}return s}function r(t){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{};a%2?o(Object(s),!0).forEach((function(a){Object(n["a"])(t,a,s[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(s,a))}))}return t}var l={data:function(){return{profileNoImage:s("750c")}},computed:r(r({},Object(c["c"])({userData:"users/getUserData"})),{},{userData_info:function(){return this.userData},fullname:function(){return"".concat(this.userData_info.first_name," ").concat(this.userData_info.last_name)}}),methods:r({},Object(c["b"])({activeUserInfo:"users/activeUserInfo"})),created:function(){this.activeUserInfo()}},u=l,p=s("2877"),d=Object(p["a"])(u,e,i,!1,null,null,null);a["default"]=d.exports},"750c":function(t,a,s){t.exports=s.p+"img/noimage.30cf03b5.jpg"},"8e6e":function(t,a,s){var e=s("5ca1"),i=s("990b"),n=s("6821"),c=s("11e9"),o=s("f1ae");e(e.S,"Object",{getOwnPropertyDescriptors:function(t){var a,s,e=n(t),r=c.f,l=i(e),u={},p=0;while(l.length>p)s=r(e,a=l[p++]),void 0!==s&&o(u,a,s);return u}})},"990b":function(t,a,s){var e=s("9093"),i=s("2621"),n=s("cb7c"),c=s("7726").Reflect;t.exports=c&&c.ownKeys||function(t){var a=e.f(n(t)),s=i.f;return s?a.concat(s(t)):a}},ade3:function(t,a,s){"use strict";function e(t,a,s){return a in t?Object.defineProperty(t,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[a]=s,t}s.d(a,"a",(function(){return e}))},f1ae:function(t,a,s){"use strict";var e=s("86cc"),i=s("4630");t.exports=function(t,a,s){a in t?e.f(t,a,i(0,s)):t[a]=s}}}]);
//# sourceMappingURL=chunk-513fb23f.f54335c4.js.map