(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13ff2b01"],{"8e6e":function(e,t,r){var a=r("5ca1"),o=r("990b"),s=r("6821"),n=r("11e9"),i=r("f1ae");a(a.S,"Object",{getOwnPropertyDescriptors:function(e){var t,r,a=s(e),c=n.f,l=o(a),d={},u=0;while(l.length>u)r=c(a,t=l[u++]),void 0!==r&&i(d,t,r);return d}})},"95e0":function(e,t,r){e.exports=r.p+"img/forgot-password.f1d8d23e.png"},"990b":function(e,t,r){var a=r("9093"),o=r("2621"),s=r("cb7c"),n=r("7726").Reflect;e.exports=n&&n.ownKeys||function(e){var t=a.f(s(e)),r=o.f;return r?t.concat(r(e)):t}},ade3:function(e,t,r){"use strict";function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return a}))},b15a:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"h-screen flex w-full bg-img"},[a("div",{staticClass:"vx-col w-4/5 sm:w-4/5 md:w-3/5 lg:w-3/4 xl:w-3/5 mx-auto self-center"},[a("vx-card",[a("div",{staticClass:"full-page-bg-color",attrs:{slot:"no-body"},slot:"no-body"},[a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center"},[a("img",{staticClass:"mx-auto",attrs:{src:r("95e0"),alt:"login"}})]),a("div",{staticClass:"vx-col sm:w-full md:w-full lg:w-1/2 mx-auto self-center d-theme-dark-bg"},[a("div",{staticClass:"p-8"},[a("div",{staticClass:"vx-card__title mb-8"},[a("h4",{staticClass:"mb-4"},[e._v("Recover your password")]),a("p",[e._v("Please enter your email address and we'll send you OTP code to reset your password.")])]),a("span",{staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("email")))]),a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email|min:3",expression:"'required|email|min:3'"}],staticClass:"w-full mb-8",attrs:{type:"email","label-placeholder":"Email","data-vv-validate-on":"blur",name:"email","icon-no-border":"",icon:"icon icon-user","icon-pack":"feather"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("vs-button",{staticClass:"px-4 w-full md:w-auto",attrs:{type:"border",to:"/login"}},[e._v("Back To Login")]),a("vs-button",{staticClass:"float-right px-4 w-full md:w-auto mt-3 mb-8 md:mt-0 md:mb-0",attrs:{disabled:!e.validateForm},on:{click:e.recover_password}},[e._v("\n                                Recover Password\n                            ")])],1)])])])])],1)])},o=[],s=(r("8e6e"),r("ac6a"),r("456d"),r("ade3")),n=r("2f62");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){Object(s["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l={computed:{validateForm:function(){return!this.errors.any()&&this.email}},data:function(){return{email:""}},methods:c(c({},Object(n["b"])({recoverPassword:"authentication/recoverPassword"})),{},{recover_password:function(){var e=this;this.$vs.loading(),this.recoverPassword(this.email).then((function(){e.$vs.loading.close()})).catch((function(t){console.log(t),e.$vs.loading.close(),e.$vs.notify({title:"Error",text:Object(t.response.data.messages.error),position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"danger"})}))}})},d=l,u=r("2877"),f=Object(u["a"])(d,a,o,!1,null,null,null);t["default"]=f.exports},f1ae:function(e,t,r){"use strict";var a=r("86cc"),o=r("4630");e.exports=function(e,t,r){t in e?a.f(e,t,o(0,r)):e[t]=r}}}]);
//# sourceMappingURL=chunk-13ff2b01.cc615dc8.js.map