(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-79b9925b"],{"063b":function(e,t,s){},3273:function(e,t,s){"use strict";var a=s("063b"),r=s.n(a);r.a},"8e6e":function(e,t,s){var a=s("5ca1"),r=s("990b"),c=s("6821"),i=s("11e9"),o=s("f1ae");a(a.S,"Object",{getOwnPropertyDescriptors:function(e){var t,s,a=c(e),n=i.f,l=r(a),d={},u=0;while(l.length>u)s=n(a,t=l[u++]),void 0!==s&&o(d,t,s);return d}})},"990b":function(e,t,s){var a=s("9093"),r=s("2621"),c=s("cb7c"),i=s("7726").Reflect;e.exports=i&&i.ownKeys||function(e){var t=a.f(c(e)),s=r.f;return s?t.concat(s(e)):t}},ade3:function(e,t,s){"use strict";function a(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}s.d(t,"a",(function(){return a}))},c04e:function(e,t,s){e.exports=s.p+"img/Placeholder.d6ea53fa.jpg"},f1ae:function(e,t,s){"use strict";var a=s("86cc"),r=s("4630");e.exports=function(e,t,s){t in e?a.f(e,t,r(0,s)):e[t]=s}},f6be:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("vx-card",[s("vs-tabs",[s("vs-tab",{staticStyle:{"text-align":"center !important"},attrs:{ico:"account_circle",label:"Profile Image"}},[s("div",{staticClass:"vx-row"},[s("div",{staticClass:"w-full vx-col"},[s("div",{staticClass:"mt-5 FieldField__wrapper",staticStyle:{"text-align":"center !important"}},[s("img",{staticClass:"preview-image",attrs:{src:e.imagePreview},on:{click:e.openUpload}}),s("div",{staticClass:"form-group"},[s("input",{staticStyle:{display:"none"},attrs:{name:"image",type:"file",id:"file-field",required:""},on:{change:e.updatePreview}})]),s("vs-button",{staticClass:"mx-auto mt-3",attrs:{color:"primary",icon:"cloud_upload"},on:{click:e.uploadFile}},[e._v("Upload Image")])],1)])])]),s("vs-tab",{attrs:{label:"Password",ico:"info"}},[s("div",{staticClass:"con-slot-tabs"},[s("div",{staticClass:"con-tab vs-tabs--content"},[s("div",{staticClass:"tab-text"},[s("div",{staticClass:"mt-4",attrs:{id:"user-edit-tab-info"}},[s("div",{staticClass:"vx-row"},[s("div",{staticClass:"w-full vx-col"},[s("form",{on:{submit:function(t){return t.preventDefault(),e.update_password(t)}}},[s("div",[s("div",{staticClass:"mb-8 vx-card__title"},[s("h4",{staticClass:"mb-4"},[e._v("Update Password")]),e.passSuccessMessage?s("vs-alert",{attrs:{active:"true",color:"success"}},[e._v("\n                            "+e._s(e.passSuccessMessage)+"\n                          ")]):s("p",[e._v("Please enter your new password.")])],1),s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:6|max:10",expression:"'required|min:6|max:10'"}],ref:"password",staticClass:"w-full mb-6",attrs:{"data-vv-validate-on":"blur",name:"password",placeholder:"Password",type:"password","label-placeholder":"Password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),s("span",{staticClass:"text-sm text-danger"},[e._v(e._s(e.errors.first("password")))]),s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"min:6|confirmed:password",expression:"'min:6|confirmed:password'"}],staticClass:"w-full mb-8",attrs:{type:"password","data-vv-validate-on":"blur","data-vv-as":"password",name:"confirm_password","label-placeholder":"Confirm Password",placeholder:"Confirm Password"},model:{value:e.confirm_password,callback:function(t){e.confirm_password=t},expression:"confirm_password"}}),s("span",{staticClass:"text-sm text-danger"},[e._v(e._s(e.errors.first("confirm_password")))]),s("div",{staticClass:"flex flex-col-reverse flex-wrap justify-between sm:flex-row"},[s("vs-button",{staticClass:"w-full sm:w-auto",attrs:{disabled:!e.validateForm},on:{click:e.update_password}},[e._v("Update Password")])],1)],1)])])])])])])])]),s("vs-tab",{attrs:{label:"Currency",ico:"track_changes"}},[s("div",{staticClass:"con-slot-tabs"},[s("div",{staticClass:"con-tab vs-tabs--content"},[s("div",{staticClass:"tab-text"},[s("div",{staticClass:"mt-4",attrs:{id:"user-edit-tab-currency"}},[s("div",{staticClass:"vx-row"},[s("div",{staticClass:"w-full vx-col"},[s("form",{on:{submit:function(t){return t.preventDefault(),e.update_password(t)}}},[s("div",{staticClass:"pt-8"},[s("div",{staticClass:"mb-8 vx-card__title"},[s("h4",{staticClass:"mb-4"},[e._v("Change Currency")]),e.currencySuccessMessage?s("vs-alert",{attrs:{active:"true",color:"success"}},[e._v("\n                            "+e._s(e.currencySuccessMessage)+"\n                          ")]):s("p",[e._v("\n                            Choose Bellow Your Prefered Currency for Any\n                            Transaction\n                          ")])],1),s("label",{attrs:{for:""}},[e._v("Choose Default Currency")]),s("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{name:"Currency","data-vv-validate-on":"blur",options:e.options},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),s("span",{staticClass:"text-sm text-danger"},[e._v(e._s(e.errors.first("Currency")))]),s("div",{staticClass:"flex flex-col-reverse flex-wrap justify-between mt-4 sm:flex-row"},[s("vs-button",{staticClass:"w-full mt-10 sm:w-auto",on:{click:e.update_currency}},[e._v("Change Currency")])],1)],1)])])])])])])])])],1)],1)},r=[],c=(s("8e6e"),s("ac6a"),s("456d"),s("7f7f"),s("ade3")),i=s("2f62"),o=s("4a7a"),n=s.n(o),l=s("bc3a"),d=s.n(l);function u(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function p(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?u(Object(s),!0).forEach((function(t){Object(c["a"])(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):u(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var f={data:function(){return{password:"",confirm_password:"",passSuccessMessage:"",currencySuccessMessage:"",imagePreview:s("c04e"),selectedFile:null,filecheck:0,options:[{currency:1,label:"NGN"},{currency:2,label:"USD"},{currency:3,label:"EUR"}],selected:{currency:4,label:"USD"}}},computed:p(p({validateForm:function(){return!this.errors.any()&&""!=this.password&&""!=this.confirm_password}},Object(i["c"])({getAllCurrencies:"users/getAllCurrencies"})),{},{selected_currency:function(){return this.userData.currency}}),methods:p(p({},Object(i["b"])({uploadProfilePicture:"authentication/uploadProfilePicture",updatePassword:"users/updatePassword",updateCurrency:"users/updateCurrency"})),{},{openUpload:function(){document.getElementById("file-field").click()},updatePreview:function(e){var t,s=this,a=e.target.files;0===a.length&&console.log("Empty"),this.filecheck=a.length,t=new FileReader,t.onload=function(e){s.imagePreview=e.target.result},t.readAsDataURL(a[0]),this.selectedFile=e.target.files[0]},uploadFile:function(){var e=this;if(0==this.filecheck)return this.$vs.notify({title:"Info",text:"Please Choose a Picture to Upload First",position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"danger"});this.$vs.loading({type:"border"});var t=new FormData;t.append("file",this.selectedFile,this.selectedFile.name),d.a.post("profile/upload",t).then((function(t){e.$vs.loading.close(),e.$vs.notify({title:"Success",text:t.data.message,position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"success"}),e.imagePreview=s("c04e"),e.$router.push("/profile-view").catch((function(e){console.log(e)}))})).catch((function(){e.$vs.loading.close(),e.$vs.notify({title:"Error",text:"File Size is above the Maximum size Allowed",position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"danger"})}))},update_password:function(){var e=this,t={password:this.password,confirm_password:this.confirm_password};this.$vs.loading(),this.updatePassword(t).then((function(t){e.passSuccessMessage=t.data.message,e.$vs.loading.close(),e.$vs.notify({title:"Success",text:t.data.message,position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"success"}),e.password="",e.confirm_password=""})).catch((function(t){console.log(t),e.$vs.loading.close(),e.$vs.notify({title:"Error",text:Object(t.response.data.messages.error),position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"danger"})}))},update_currency:function(){var e=this,t={currency:this.selected.label};this.$vs.loading(),this.updateCurrency(t).then((function(t){e.currencySuccessMessage=t.data.message,e.$vs.loading.close(),e.$vs.notify({title:"Success",text:t.data.message,position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"success"}),setTimeout((function(){location.reload()}),800)})).catch((function(t){console.log(t),e.$vs.loading.close(),e.$vs.notify({title:"Error",text:Object(t.response.data.messages.error),position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"danger"})}))}}),created:function(){},components:{"v-select":n.a}},v=f,m=(s("3273"),s("2877")),w=Object(m["a"])(v,a,r,!1,null,"6f06aa4e",null);t["default"]=w.exports}}]);
//# sourceMappingURL=chunk-79b9925b.c5b37240.js.map