(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-047bf0a6"],{1880:function(t,e,s){t.exports=s.p+"img/register.cfd9ef09.jpg"},"2b9e":function(t,e,s){"use strict";var a=s("ea97"),r=s.n(a);r.a},"504c":function(t,e,s){var a=s("0d58"),r=s("6821"),i=s("52a7").f;t.exports=function(t){return function(e){var s,n=r(e),o=a(n),l=o.length,c=0,u=[];while(l>c)i.call(n,s=o[c++])&&u.push(t?[s,n[s]]:n[s]);return u}}},8615:function(t,e,s){var a=s("5ca1"),r=s("504c")(!1);a(a.S,"Object",{values:function(t){return r(t)}})},"9d64":function(t,e,s){t.exports=s.p+"img/logo.699f6f1d.png"},bc1a:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"flex items-center justify-center w-full h-screen bg-img vx-row no-gutter",staticStyle:{height:"120vh !important"}},[t._m(0),a("div",{staticClass:"m-4 vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0"},[a("vx-card",{staticClass:"mt-5"},[a("div",{staticClass:"full-page-bg-color",attrs:{slot:"no-body"},slot:"no-body"},[a("div",{staticClass:"vx-row no-gutter"},[a("div",{staticClass:"self-center hidden mx-auto vx-col sm:hidden md:hidden lg:block lg:w-1/2"},[a("img",{staticClass:"mx-auto",attrs:{src:s("1880"),alt:"register"}})]),a("div",{staticClass:"self-center mx-auto vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg"},[a("div",{staticClass:"px-8 pt-8 register-tabs-container"},[a("div",{staticClass:"mb-4 vx-card__title"},[a("h4",{staticClass:"mb-4"},[t._v("Create Account")]),a("p",[t._v("Fill the below form to create a new account.")])]),a("div",{staticClass:"clearfix"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:3",expression:"'required|min:3'"}],staticClass:"w-full",attrs:{"data-vv-validate-on":"blur","label-placeholder":"First Name",name:"first_name",placeholder:"First Name"},model:{value:t.first_name,callback:function(e){t.first_name=e},expression:"first_name"}}),a("span",{staticClass:"text-sm text-danger"},[t._v(t._s(t.errors.first("first_name")))]),a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:3",expression:"'required|min:3'"}],staticClass:"w-full",attrs:{"data-vv-validate-on":"blur","label-placeholder":"Last Name",name:"last_name",placeholder:"Last Name"},model:{value:t.last_name,callback:function(e){t.last_name=e},expression:"last_name"}}),a("span",{staticClass:"text-sm text-danger"},[t._v(t._s(t.errors.first("last_name")))]),a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"w-full mt-6 mb-2",attrs:{"data-vv-validate-on":"blur",name:"email",type:"email","label-placeholder":"Email",placeholder:"Email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("span",{staticClass:"text-sm text-danger"},[t._v(t._s(t.errors.first("email")))]),a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full mt-6",attrs:{"data-vv-validate-on":"blur",name:"phone",type:"number","label-placeholder":"Phone Number",placeholder:"Phone Number"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}}),a("span",{staticClass:"text-sm text-danger"},[t._v(t._s(t.errors.first("phone")))]),a("VuePassword",{staticClass:"mt-6",attrs:{strength:t.score},on:{input:t.updateStrength},scopedSlots:t._u([{key:"password-input",fn:function(t){return[a("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:6",expression:"'required|min:6'"}],ref:"password",staticClass:"w-full pl-12 input vs-inputx vs-input--input normal hasValue",staticStyle:{border:"1px solid rgba(0, 0, 0, 0.2)"},attrs:{type:"password","data-vv-validate-on":"blur",placeholder:"Password",name:"password"},domProps:{value:t.value},on:{input:t.updatePassword}}),a("i",{staticClass:"vs-icon notranslate icon-scale icon-inputx vs-input--icon feather icon icon-lock null icon-no-border"})]}}]),model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),a("span",{staticClass:"text-sm text-danger"},[t._v(t._s(t.errors.first("password")))]),a("VuePassword",{staticClass:"mt-6",attrs:{strength:t.score},on:{input:t.updateStrength},scopedSlots:t._u([{key:"password-input",fn:function(t){return[a("input",{directives:[{name:"validate",rawName:"v-validate",value:"min:6|confirmed:password",expression:"'min:6|confirmed:password'"}],staticClass:"w-full pl-12 input vs-inputx vs-input--input normal hasValue",staticStyle:{border:"1px solid rgba(0, 0, 0, 0.2)"},attrs:{name:"confirm password",type:"password","data-vv-validate-on":"blur","label-placeholder":"Confirm Password",placeholder:"Confirm Password"},domProps:{value:t.value},on:{input:t.updatePassword}}),a("i",{staticClass:"vs-icon notranslate icon-scale icon-inputx vs-input--icon feather icon icon-lock null icon-no-border"})]}}]),model:{value:t.confirm_password,callback:function(e){t.confirm_password=e},expression:"confirm_password"}}),a("span",{staticClass:"text-sm text-danger"},[t._v(t._s(t.errors.first("confirm password")))]),a("vs-checkbox",{staticClass:"mt-5",model:{value:t.terms,callback:function(e){t.terms=e},expression:"terms"}},[t._v("I accept the terms & conditions.")]),a("vs-button",{staticClass:"mt-5 mb-6",attrs:{type:"border",to:"/login"}},[t._v("Login")]),a("vs-button",{staticClass:"float-right mt-5 mb-6",attrs:{disabled:!t.validateForm},on:{click:t.register_User}},[t._v("Register")])],1)])])])])])],1)])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex items-center justify-center w-full vx-row no-gutter"},[a("div",{staticClass:"text-center",staticStyle:{"margin-bottom":"-7em"}},[a("img",{staticClass:"mx-auto",staticStyle:{height:"120px"},attrs:{src:s("9d64"),alt:"login"}})])])}],i=(s("8e6e"),s("456d"),s("ac6a"),s("8615"),s("3b2b"),s("ade3")),n=s("2f62"),o=s("3c29"),l=s.n(o),c=s("4a7a"),u=s.n(c);function d(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function m(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?d(Object(s),!0).forEach((function(e){Object(i["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):d(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var p={data:function(){return{first_name:"",last_name:"",email:"",country:"Nigeria",password:"",confirm_password:"",phone:"",terms:!1,successMessage:""}},computed:{validateForm:function(){return!this.errors.any()&&""!=this.first_name&&""!=this.country&&""!=this.last_name&&""!=this.email&&""!=this.password&&""!=this.confirm_password&&!0===this.terms},windowWidth:function(){return this.$store.state.windowWidth}},methods:m(m({},Object(n["b"])({registerUser:"authentication/registerUser"})),{},{updateStrength:function(t){this.strongRegex=new RegExp("^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$","g"),this.mediumRegex=new RegExp("^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$","g"),this.strongRegex.test(t)?this.score=4:this.mediumRegex.test(t)?this.score=2:this.score=1},checkLogin:function(){return!this.$store.state.auth.isUserLoggedIn()||(this.$vs.notify({title:"Login Attempt",text:"You are already logged in!",position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"warning"}),!1)},register_User:function(){var t=this,e={first_name:this.first_name,last_name:this.last_name,email:this.email,country:this.country,pass:this.password,confirm_password:this.confirm_password,phone:this.phone,terms:1==this.terms?"on":"false"};this.$vs.loading(),this.registerUser(e).then((function(){t.$vs.loading.close(),t.successMessage="Registered Successfully!",t.$router.push("/").catch((function(t){console.log(t)}))})).catch((function(e){t.$vs.loading.close();var s=Object.values(e.response.data.messages);s.forEach((function(e){t.$vs.notify({title:"Error",text:e,position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"danger"})}))}))}}),components:{"v-select":u.a,VuePassword:l.a}},v=p,f=(s("2b9e"),s("2877")),h=Object(f["a"])(v,a,r,!1,null,null,null);e["default"]=h.exports},ea97:function(t,e,s){}}]);
//# sourceMappingURL=chunk-047bf0a6.328db4ba.js.map