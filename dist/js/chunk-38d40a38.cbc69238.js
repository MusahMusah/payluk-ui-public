(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38d40a38"],{"8e6e":function(t,e,s){var o=s("5ca1"),r=s("990b"),a=s("6821"),n=s("11e9"),i=s("f1ae");o(o.S,"Object",{getOwnPropertyDescriptors:function(t){var e,s,o=a(t),c=n.f,l=r(o),d={},u=0;while(l.length>u)s=c(o,e=l[u++]),void 0!==s&&i(d,e,s);return d}})},9281:function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"h-screen flex w-full bg-img"},[o("div",{staticClass:"vx-col w-4/5 sm:w-4/5 md:w-3/5 lg:w-3/4 xl:w-3/5 mx-auto self-center"},[o("vx-card",[o("div",{staticClass:"full-page-bg-color",attrs:{slot:"no-body"},slot:"no-body"},[o("div",{staticClass:"vx-row"},[o("div",{staticClass:"vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center"},[o("img",{staticClass:"mx-auto",attrs:{src:s("95e0"),alt:"login"}})]),o("div",{staticClass:"vx-col sm:w-full md:w-full lg:w-1/2 mx-auto self-center d-theme-dark-bg"},[o("div",{staticClass:"p-8"},[o("div",{staticClass:"vx-card__title mb-8"},[o("h4",{staticClass:"mb-4"},[t._v("Verify Your Account")]),o("p",[t._v("Please enter the OTP Code sent to your email address so as to verify your account for password change.")])]),o("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("otp")))]),o("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:4|max:4",expression:"'required|min:4|max:4'"}],staticClass:"w-full mb-8",attrs:{"data-vv-validate-on":"blur",type:"number",name:"otp","label-placeholder":"OTP"},model:{value:t.otp,callback:function(e){t.otp=e},expression:"otp"}}),o("vs-button",{staticClass:"px-4 w-full md:w-auto",attrs:{type:"border"},on:{click:t.resend_password_otp}},[t._v("Resend OTP")]),o("vs-button",{staticClass:"float-right px-8 w-full md:w-auto mt-3 mb-8 md:mt-0 md:mb-0",attrs:{disabled:!t.validateForm},on:{click:t.verify_password_otp}},[t._v("Verify")])],1)])])])])],1)])},r=[],a=(s("8e6e"),s("ac6a"),s("456d"),s("ade3")),n=s("2f62");function i(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,o)}return s}function c(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?i(Object(s),!0).forEach((function(e){Object(a["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var l={name:"verify-password-otp",props:{dataMessage:{type:String}},computed:{validateForm:function(){return!this.errors.any()&&this.otp}},created:function(){this.dataMessage&&this.$vs.notify({title:"Info",text:this.dataMessage,position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"success"})},data:function(){return{otp:""}},methods:c(c({},Object(n["b"])({verifyPasswordOtp:"authentication/verifyPasswordOtp",resendPasswordOtp:"authentication/resendPasswordOtp"})),{},{verify_password_otp:function(){var t=this;this.$vs.loading(),this.verifyPasswordOtp(this.otp).then((function(e){t.$vs.loading.close(),t.$vs.notify({title:"Success",text:e.data.message,position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"success"}),t.$router.push("/reset-password").catch((function(t){console.log(t)}))})).catch((function(e){var s=e.response.data.messages.message;t.$vs.loading.close(),t.$vs.notify({title:"Error",text:s,position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"danger"})}))},resend_password_otp:function(){var t=this;this.$vs.loading(),this.resendPasswordOtp().then((function(e){console.log(e.data),t.$vs.loading.close(),t.$vs.notify({title:"Success",text:e.data.message,position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"success"})})).catch((function(e){console.log(e.response),t.$vs.loading.close(),t.$vs.notify({title:"Error",text:Object(e.response.data.messages.error),position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"danger"})}))}})},d=l,u=s("2877"),p=Object(u["a"])(d,o,r,!1,null,null,null);e["default"]=p.exports},"95e0":function(t,e,s){t.exports=s.p+"img/forgot-password.f1d8d23e.png"},"990b":function(t,e,s){var o=s("9093"),r=s("2621"),a=s("cb7c"),n=s("7726").Reflect;t.exports=n&&n.ownKeys||function(t){var e=o.f(a(t)),s=r.f;return s?e.concat(s(t)):e}},ade3:function(t,e,s){"use strict";function o(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}s.d(e,"a",(function(){return o}))},f1ae:function(t,e,s){"use strict";var o=s("86cc"),r=s("4630");t.exports=function(t,e,s){e in t?o.f(t,e,r(0,s)):t[e]=s}}}]);
//# sourceMappingURL=chunk-38d40a38.cbc69238.js.map