(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ea428fa"],{"1f8b":function(e,t,s){e.exports=s.p+"img/login.d814adb7.png"},2561:function(e,t,s){"use strict";var a=s("2e1e"),r=s.n(a);r.a},"2e1e":function(e,t,s){},"6f75":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex items-center justify-center w-full h-screen bg-img vx-row no-gutter",attrs:{id:"page-login"}},[a("div",{staticClass:"m-4 vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0",staticStyle:{"margin-top":"-2rem !important"}},[e._m(0),a("vx-card",[a("div",{staticClass:"full-page-bg-color",attrs:{slot:"no-body"},slot:"no-body"},[a("div",{staticClass:"items-center justify-center vx-row no-gutter"},[a("div",{staticClass:"hidden vx-col lg:block lg:w-1/2"},[a("img",{staticClass:"mx-auto",attrs:{src:s("1f8b"),alt:"login"}})]),a("div",{staticClass:"vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg"},[a("div",{staticClass:"p-8 login-tabs-container"},[a("div",{staticClass:"mb-4 vx-card__title"},[a("h4",{staticClass:"mb-4"},[e._v("Login")]),e.successMessage?a("vs-alert",{attrs:{active:"true",color:"success"}},[e._v("\n                    "+e._s(e.successMessage)+"\n                ")]):e._e(),a("p",[e._v("Welcome back, please login to your account.")])],1),a("div",[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email|min:3",expression:"'required|email|min:3'"}],staticClass:"w-full",attrs:{"data-vv-validate-on":"blur",name:"email","icon-no-border":"",icon:"icon icon-user","icon-pack":"feather","label-placeholder":"Email"},model:{value:e.formData.email,callback:function(t){e.$set(e.formData,"email",t)},expression:"formData.email"}}),a("span",{staticClass:"text-sm text-danger"},[e._v(e._s(e.errors.first("email")))]),a("VuePassword",{staticClass:"mt-6",attrs:{strength:e.score},on:{input:e.updateStrength},scopedSlots:e._u([{key:"password-input",fn:function(e){return[a("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full pl-12 input vs-inputx vs-input--input normal hasValue",staticStyle:{border:"1px solid rgba(0, 0, 0, 0.2)"},attrs:{type:"password",placeholder:"Password",name:"password","data-vv-validate-on":"blur"},domProps:{value:e.value},on:{input:e.updatePassword}}),a("i",{staticClass:"vs-icon notranslate icon-scale icon-inputx vs-input--icon feather icon icon-lock null icon-no-border"})]}}]),model:{value:e.formData.password,callback:function(t){e.$set(e.formData,"password",t)},expression:"formData.password"}}),a("span",{staticClass:"text-sm text-danger"},[e._v(e._s(e.errors.first("password")))]),a("div",{staticClass:"flex flex-wrap justify-between my-5"},[a("vs-checkbox",{staticClass:"mb-3",model:{value:e.formData.checkbox_remember_me,callback:function(t){e.$set(e.formData,"checkbox_remember_me",t)},expression:"formData.checkbox_remember_me"}},[e._v("Remember Me")]),a("router-link",{attrs:{to:"/forgot-password"}},[e._v("Forgot Password?")])],1),a("vs-button",{attrs:{type:"border",to:"/register"}},[e._v("Register")]),a("vs-button",{staticClass:"float-right",attrs:{disabled:!e.validateForm},on:{click:e.login}},[e._v("Login")])],1)])])])])])],1)])},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"text-center"},[a("img",{staticClass:"mx-auto",staticStyle:{height:"120px"},attrs:{src:s("9d64"),alt:"login"}})])}],o=(s("8e6e"),s("ac6a"),s("456d"),s("3b2b"),s("ade3")),i=s("3c29"),n=s.n(i),c=s("2f62");function l(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function u(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?l(Object(s),!0).forEach((function(t){Object(o["a"])(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):l(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var m={name:"login",components:{VuePassword:n.a},props:{dataSuccessMessage:{type:String}},data:function(){return{formData:{email:"",password:"",checkbox_remember_me:!1},score:0,strongRegex:"",mediumRegex:"",successMessage:this.dataSuccessMessage}},created:function(){localStorage.removeItem("verify_token"),this.successMessage&&this.$vs.notify({title:"Info",text:this.successMessage,position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"success"})},computed:u(u({},Object(c["c"])({error_201:"authentication/error_201"})),{},{validateForm:function(){return!this.errors.any()&&""!=this.formData.email&&""!=this.formData.password}}),methods:u(u({},Object(c["b"])({logIn:"authentication/logIn"})),{},{updateStrength:function(e){this.strongRegex=new RegExp("^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$","g"),this.mediumRegex=new RegExp("^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$","g"),this.strongRegex.test(e)?this.score=4:this.mediumRegex.test(e)?this.score=2:this.score=1},login:function(){var e=this;this.$vs.loading(),this.logIn(this.formData).then((function(){e.$vs.loading.close(),localStorage.getItem("wallet_info")?e.$router.push({name:"user-public-profile",params:{wallet_id:localStorage.getItem("wallet_info")}}):e.$router.push("/").catch((function(e){console.log(e)}))})).catch((function(t){e.$vs.loading.close(),201==t?(console.log(e.error_201),e.$vs.notify({title:"Error",text:e.error_201,position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"danger"})):500==t.response.status?e.$vs.notify({title:"Error",text:t.response.data.message,position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"danger"}):e.$vs.notify({title:"Error",text:t.response.data.messages.error,position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"danger"})}))},registerUser:function(){this.checkLogin()&&this.$router.push("/pages/register").catch((function(){}))}})},d=m,p=(s("2561"),s("2877")),g=Object(p["a"])(d,a,r,!1,null,null,null);t["default"]=g.exports},"9d64":function(e,t,s){e.exports=s.p+"img/logo.699f6f1d.png"}}]);
//# sourceMappingURL=chunk-6ea428fa.095903fc.js.map