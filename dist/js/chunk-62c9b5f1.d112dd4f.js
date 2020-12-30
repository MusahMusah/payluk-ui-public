(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-62c9b5f1"],{"0924":function(t,e,o){"use strict";o.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"vx-row"},[r("div",{staticClass:"vx-col mt-5 w-4/5 mx-auto self-center"},[r("vx-card",[r("div",{staticClass:"full-page-bg-color",attrs:{slot:"no-body"},slot:"no-body"},[r("div",{staticClass:"vx-row"},[r("div",{staticClass:"vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center"},[r("img",{staticClass:"mx-auto",attrs:{src:o("95e0"),alt:"login"}})]),r("div",{staticClass:"vx-col sm:w-full md:w-full lg:w-1/2 mx-auto self-center d-theme-dark-bg"},[r("div",{staticClass:"p-8"},[r("div",{staticClass:"vx-card__title mb-8"},[r("h4",{staticClass:"mb-4"},[t._v("Activate Your Account")]),r("p",[t._v("Please enter the OTP Code sent to your email address so as to Activate your account ready for any Business Transaction.")])]),r("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("otp")))]),r("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:4|max:4",expression:"'required|min:4|max:4'"}],staticClass:"w-full mb-8",attrs:{"data-vv-validate-on":"blur",type:"number",name:"otp","label-placeholder":"OTP"},model:{value:t.otp,callback:function(e){t.otp=e},expression:"otp"}}),r("vs-button",{staticClass:"px-4 w-full md:w-auto",attrs:{type:"border"},on:{click:t.resend_otp}},[t._v("Resend OTP")]),r("vs-button",{staticClass:"float-right px-8 w-full md:w-auto mt-3 mb-8 md:mt-0 md:mb-0",attrs:{disabled:!t.validateForm},on:{click:t.verify_account}},[t._v("Verify")])],1)])])])])],1)])},n=[],c=(o("8e6e"),o("ac6a"),o("456d"),o("ade3")),s=o("2f62");function i(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function a(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?i(Object(o),!0).forEach((function(e){Object(c["a"])(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var l={name:"activate-account",computed:{validateForm:function(){return!this.errors.any()&&this.otp}},created:function(){this.trigger_otp()},data:function(){return{otp:""}},methods:a(a({},Object(s["b"])({verifyAccount:"users/verifyAccount",resendOtp:"users/resendOtp",triggerOtp:"users/triggerOtp",logOutAction:"authentication/logOut"})),{},{trigger_otp:function(){var t=this;this.triggerOtp().then((function(e){t.$vs.notify({title:"Success",text:e.data.message,position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"success"})})).catch((function(e){var o=e.response.data.messages.message;t.$vs.loading.close(),t.$vs.notify({title:"Error",text:o,position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"danger"})}))},verify_account:function(){var t=this;this.$vs.loading(),this.verifyAccount(this.otp).then((function(e){t.$vs.loading.close(),t.$vs.notify({title:"Success",text:e.data.message,position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"success"}),setTimeout((function(){t.logout()}),300)})).catch((function(e){var o=e.response.data.messages.error;t.$vs.loading.close(),t.$vs.notify({title:"Error",text:o,position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"danger"})}))},logout:function(){var t=this;this.logOutAction().then((function(){t.$router.push("/login").catch((function(){}))})).catch((function(t){console.log(t)}))},resend_otp:function(){var t=this;this.$vs.loading(),this.resendOtp().then((function(e){t.$vs.loading.close(),t.$vs.notify({title:"Success",text:e.data.message,position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"success"})})).catch((function(e){console.log(e.response),t.$vs.loading.close(),t.$vs.notify({title:"Error",text:Object(e.response.data.messages.error),position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"danger"})}))}})},u=l,f=o("2877"),d=Object(f["a"])(u,r,n,!1,null,null,null);e["default"]=d.exports},"8e6e":function(t,e,o){var r=o("5ca1"),n=o("990b"),c=o("6821"),s=o("11e9"),i=o("f1ae");r(r.S,"Object",{getOwnPropertyDescriptors:function(t){var e,o,r=c(t),a=s.f,l=n(r),u={},f=0;while(l.length>f)o=a(r,e=l[f++]),void 0!==o&&i(u,e,o);return u}})},"95e0":function(t,e,o){t.exports=o.p+"img/forgot-password.f1d8d23e.png"},"990b":function(t,e,o){var r=o("9093"),n=o("2621"),c=o("cb7c"),s=o("7726").Reflect;t.exports=s&&s.ownKeys||function(t){var e=r.f(c(t)),o=n.f;return o?e.concat(o(t)):e}},ade3:function(t,e,o){"use strict";function r(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}o.d(e,"a",(function(){return r}))},f1ae:function(t,e,o){"use strict";var r=o("86cc"),n=o("4630");t.exports=function(t,e,o){e in t?r.f(t,e,n(0,o)):t[e]=o}}}]);
//# sourceMappingURL=chunk-62c9b5f1.d112dd4f.js.map