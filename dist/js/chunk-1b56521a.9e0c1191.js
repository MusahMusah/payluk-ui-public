(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b56521a"],{"34ba":function(e,t,a){"use strict";var i=a("fde7"),s=a.n(i);s.a},f1d8:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"demo-basic-card"}},[e.getAllPendingRequests.data?a("div",{staticClass:"vx-row"},e._l(e.getAllPendingRequests.data,(function(t,i){return a("div",{key:i,staticClass:"w-full vx-col sm:w-1/2 lg:w-1/3 mb-base"},[a("vx-card",{staticClass:"p-2"},[t.image?a("vs-avatar",{staticClass:"block mx-auto mb-6",attrs:{size:"80px",src:t.image}}):a("vs-avatar",{staticClass:"block mx-auto mb-6",attrs:{size:"80px",src:e.profile_img}}),a("div",{staticClass:"text-center"},[a("h4",[e._v(e._s(t.first_name+" "+t.last_name))]),a("p",{staticClass:"text-grey"},[e._v(e._s(t.email))])]),a("div",{staticClass:"flex flex-wrap justify-between"},[a("vs-button",{staticClass:"mt-4 mr-2 shadow-lg",attrs:{icon:"check",type:"gradient",color:"primary","gradient-color-secondary":"#CE9FFC"},on:{click:function(a){return e.accept_invite(t.invitation_id)}}},[e._v("Accept")]),a("vs-button",{staticClass:"mt-4 bg-danger",attrs:{icon:"cancel",color:"danger",type:"gradient"},on:{click:function(a){return e.decline_invite(t.invitation_id)}}},[e._v("Decline")])],1),a("template",{slot:"footer"},[a("vs-divider"),a("div",{staticClass:"flex justify-between"},[a("span",{staticClass:"flex items-center"},[a("feather-icon",{attrs:{icon:"StarIcon",svgClasses:"h-5 w-5 text-warning stroke-current"}}),a("span",{staticClass:"ml-2"},[e._v("4.2")])],1)])],1)],2)],1)})),0):a("div",{staticClass:"vx-row"},[a("div",{staticClass:"w-full my-20 vx-col mx20"},[a("vx-card",{attrs:{title:"No Invites Available","title-color":"#fff","card-background":"primary","content-color":"#fff"}},[a("p",{staticClass:"mb-3"},[e._v("You Have No Invitation Request Available")])])],1)]),a("vs-popup",{style:e.visibility,attrs:{classContent:"popup-example",title:"Quotation Details",active:e.popupActivo},on:{"update:active":function(t){e.popupActivo=t}}},[a("div",{staticClass:"vx-row"},[a("div",{staticClass:"w-full vx-col sm:w-1/2"},[a("label",{attrs:{for:""}},[e._v("Add Item(s) Name")]),a("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:3",expression:"'required|min:3'"}],staticClass:"w-full mb-2",attrs:{"data-vv-validate-on":"blur",name:"Item Name",options:[],taggable:"",multiple:"","push-tags":""},model:{value:e.items_name,callback:function(t){e.items_name=t},expression:"items_name"}}),a("span",{staticClass:"text-sm text-danger"},[e._v(e._s(e.errors.first("Item Name")))])],1),a("div",{staticClass:"w-full vx-col sm:w-1/2"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{"data-vv-validate-on":"blur",name:"Item Quantity",type:"number","icon-pack":"feather",icon:"icon-smartphone","icon-no-border":"",label:"Item(s) Quantity"},model:{value:e.item_quantity,callback:function(t){e.item_quantity=t},expression:"item_quantity"}}),a("span",{staticClass:"text-sm text-danger"},[e._v(e._s(e.errors.first("Item(s) Quantity")))])],1)]),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"w-full vx-col sm:w-1/2"},[a("vs-input",{directives:[{name:"currency",rawName:"v-currency",value:{currency:null},expression:"{currency: null}"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full mt-5",attrs:{"data-vv-validate-on":"blur",name:"Total Cost","icon-pack":"feather",icon:"icon-smartphone","icon-no-border":"",label:"Total Cost"},model:{value:e.total_cost,callback:function(t){e.total_cost=t},expression:"total_cost"}}),a("span",{staticClass:"text-sm text-danger"},[e._v(e._s(e.errors.first("Total Cost")))])],1),a("div",{staticClass:"w-full mt-5 vx-col sm:w-1/2"},[a("label",{attrs:{for:""}},[e._v("Currency")]),a("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{"data-vv-validate-on":"blur",name:"Currency",label:"Currency",options:["USD","NGN","EUR"]},model:{value:e.currency,callback:function(t){e.currency=t},expression:"currency"}}),a("span",{staticClass:"text-sm text-danger"},[e._v(e._s(e.errors.first("Currency")))])],1)]),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"w-full mt-5 vx-col sm:w-1/2"},[a("label",{attrs:{for:""}},[e._v("Ship From")]),a("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{name:"Ship From","data-vv-validate-on":"blur",options:e.states},model:{value:e.ship_from,callback:function(t){e.ship_from=t},expression:"ship_from"}}),a("span",{staticClass:"text-sm text-danger"},[e._v(e._s(e.errors.first("Ship From")))])],1),a("div",{staticClass:"w-full mt-5 vx-col sm:w-1/2"},[a("label",{attrs:{for:""}},[e._v("Ship To")]),a("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{name:"Ship To","data-vv-validate-on":"blur",options:e.states},model:{value:e.ship_to,callback:function(t){e.ship_to=t},expression:"ship_to"}}),a("span",{staticClass:"text-sm text-danger"},[e._v(e._s(e.errors.first("Ship To")))])],1)]),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"w-full mt-5 vx-col"},[a("label",{attrs:{for:""}},[e._v("Ship Date")]),a("datepicker",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"data-vv-validate-on":"blur",placeholder:"Choose Ship Date",name:"Ship Date"},model:{value:e.ship_date,callback:function(t){e.ship_date=t},expression:"ship_date"}}),a("span",{staticClass:"text-sm text-danger"},[e._v(e._s(e.errors.first("Ship Date")))])],1),a("div",{staticClass:"w-full mt-5 vx-col"},[a("label",{attrs:{for:""}},[e._v("Delivered Before Date")]),a("datepicker",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"data-vv-validate-on":"blur",placeholder:"Choose Delivered Before Date",name:"Delivered Before Date"},model:{value:e.delivered_before_date,callback:function(t){e.delivered_before_date=t},expression:"delivered_before_date"}}),a("span",{staticClass:"text-sm text-danger"},[e._v(e._s(e.errors.first("Delivered Before Date")))])],1)]),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"w-full vx-col"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full mt-5",attrs:{"data-vv-validate-on":"blur",type:"text",placeholder:"Your Company Name",label:"Company Name",name:"Company Name"},model:{value:e.company_name,callback:function(t){e.company_name=t},expression:"company_name"}}),a("span",{staticClass:"text-sm text-danger"},[e._v(e._s(e.errors.first("Company Name")))])],1)]),a("div",{staticClass:"mt-5 vx-row"},[a("div",{staticClass:"w-full vx-col"},[a("vs-textarea",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"data-vv-validate-on":"blur",name:"Company Address",label:"Company Address"},model:{value:e.company_address,callback:function(t){e.company_address=t},expression:"company_address"}}),a("span",{staticClass:"text-sm text-danger"},[e._v(e._s(e.errors.first("Company Address")))])],1)]),a("vs-button",{staticClass:"flex mt-6 mb-12 ml-auto",attrs:{disabled:!e.validateForm},on:{click:e.send_quotation}},[e._v("SAVE AND SEND QUOTATION")])],1)],1)},s=[],r=(a("8e6e"),a("ac6a"),a("456d"),a("a481"),a("c5f6"),a("ade3")),o=a("4a7a"),l=a.n(o),n=a("fa33"),c=a("2f62"),v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"centerx"},[a("vs-button",{attrs:{color:"primary",type:"filled"},on:{click:function(t){e.popupActivo2=!0}}},[e._v("Open Popup")]),a("vs-popup",{attrs:{classContent:"popup-example",title:"Quotation Details",active:e.popupActivo2},on:{"update:active":function(t){e.popupActivo2=t}}},[a("form",{attrs:{"data-vv-scope":"add-new-address"}},[a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col sm:w-1/2 w-full"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{"data-vv-validate-on":"blur",label:"Item Name:",type:"text","icon-pack":"feather",icon:"icon-mail","icon-no-border":""},model:{value:e.item_name,callback:function(t){e.item_name=t},expression:"item_name"}})],1),a("div",{staticClass:"vx-col sm:w-1/2 w-full"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{"data-vv-validate-on":"blur",type:"number","icon-pack":"feather",icon:"icon-smartphone","icon-no-border":"",label:"Item Quantity"},model:{value:e.item_quantity,callback:function(t){e.item_quantity=t},expression:"item_quantity"}})],1)]),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col sm:w-1/2 w-full"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full mt-5",attrs:{"data-vv-validate-on":"blur",type:"number","icon-pack":"feather",icon:"icon-smartphone","icon-no-border":"",label:"Total Cost"},model:{value:e.total_cost,callback:function(t){e.total_cost=t},expression:"total_cost"}})],1),a("div",{staticClass:"vx-col sm:w-1/2 w-full"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full mt-5",attrs:{"data-vv-validate-on":"blur",type:"text","icon-pack":"feather",icon:"icon-smartphone","icon-no-border":"",label:"Currency"},model:{value:e.currency,callback:function(t){e.currency=t},expression:"currency"}})],1)]),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col sm:w-1/2 w-full mt-5"},[a("label",{attrs:{for:""}},[e._v("Ship From")]),a("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{"data-vv-validate-on":"blur",options:e.options},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),a("div",{staticClass:"vx-col sm:w-1/2 w-full mt-5"},[a("label",{attrs:{for:""}},[e._v("Ship To")]),a("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{"data-vv-validate-on":"blur",options:e.options},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1)]),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full mt-5"},[a("datepicker",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"data-vv-validate-on":"blur",placeholder:"Select Ship Date"},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1),a("div",{staticClass:"vx-col w-full mt-5"},[a("datepicker",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"data-vv-validate-on":"blur",placeholder:"Delivered Before Date"},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1)]),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full mt-5",attrs:{"data-vv-validate-on":"blur",type:"text","icon-pack":"feather",icon:"icon-smartphone","icon-no-border":"",label:"Company Name"},model:{value:e.company_name,callback:function(t){e.company_name=t},expression:"company_name"}})],1)]),a("div",{staticClass:"vx-row mt-5"},[a("div",{staticClass:"vx-col w-full"},[a("vs-textarea",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"data-vv-validate-on":"blur",label:"Company Address"},model:{value:e.textarea,callback:function(t){e.textarea=t},expression:"textarea"}})],1)]),a("vs-button",{staticClass:"mt-6 ml-auto flex",on:{click:function(t){return t.preventDefault(),e.submitNewAddressForm(t)}}},[e._v("SAVE AND SEND QUOTATION")])],1)])],1)},d=[];function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){Object(r["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var m={data:function(){return{textarea:"",select1:3,options1:[{text:"IT",value:0},{text:"Blade Runner",value:2},{text:"Thor Ragnarok",value:3}],value1:"",value2:"",popupActivo2:!1,popupActivo3:!1,passengers:1,date:null,options:[{id:1,label:"foo"},{id:3,label:"bar"},{id:2,label:"baz"}],selected:{id:3,label:"bar"}}},computed:p({},Object(c["c"])({getAllPendingRequests:"contract_request/getAllPendingRequest"})),methods:p(p({},Object(c["b"])({allInvites:"contract_request/pendingRequest",acceptInvite:"contract_request/acceptInvite",declineInvite:"contract_request/declineInvite"})),{},{accept_invite:function(e){var t=this;this.$vs.loading(),this.acceptInvite(e).then((function(e){t.$vs.loading.close(),t.$vs.notify({title:"Success",text:e.data.message,position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"success"}),location.reload()})).catch((function(e){console.log(e.response.data),t.$vs.loading.close(),t.$vs.notify({title:"Error",text:e.response.data.message,position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"danger"})}))},decline_invite:function(e){var t=this;this.$vs.loading(),this.declineInvite(e).then((function(e){t.$vs.loading.close(),t.$vs.notify({title:"Success",text:e.data.message,position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"success"})})).catch((function(e){console.log(e.response.data),t.$vs.loading.close(),t.$vs.notify({title:"Error",text:e.response.data.message,position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"danger"})}))}}),created:function(){this.allInvites()},components:{"v-select":l.a,Datepicker:n["a"]}},f=m,b=(a("34ba"),a("2877")),_=Object(b["a"])(f,v,d,!1,null,null,null),h=_.exports;function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(Object(a),!0).forEach((function(t){Object(r["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var w={data:function(){return{states:["Abia","Adamawa","Akwa Ibom","Anambra","Bauchi","Bayelsa","Benue","Borno","Cross River","Delta","Ebonyi","Edo","Ekiti","Enugu","FCT - Abuja","Gombe","Imo","Jigawa","Kaduna","Kano","Katsina","Kebbi","Kogi","Kwara","Lagos","Nasarawa","Niger","Ogun","Ondo","Osun","Oyo","Plateau","Rivers","Sokoto","Taraba","Yobe","Zamfara"],item_name:"",items_name:[],item_quantity:"",total_cost:"",currency:"",ship_from:"",ship_to:"",ship_date:"",delivered_before_date:"",company_name:"",company_address:"",visibility:"",profile_img:a("2a69"),popupActivo:!1,passengers:1,date:null}},computed:y(y({},Object(c["c"])({getAllPendingRequests:"contract_request/getAllPendingRequest"})),{},{validateForm:function(){return!this.errors.any()&&""!=this.items_name&&""!=this.item_quantity&&""!=this.total_cost&&""!=this.currency&&""!=this.ship_from&&""!=this.ship_to&&""!=this.ship_date&&""!=this.delivered_before_date&&""!=this.company_name},allRequests:function(){return y({},this.getAllPendingRequests)}}),methods:y(y({},Object(c["b"])({allInvites:"contract_request/pendingRequest",acceptInvite:"contract_request/acceptInvite",declineInvite:"contract_request/declineInvite",sendQuotation:"contract_request/sendQuotation"})),{},{accept_invite:function(e){localStorage.setItem("invite_id",e),this.pop()},decline_invite:function(e){var t=this;this.$vs.loading(),this.declineInvite(e).then((function(e){t.$vs.loading.close(),t.$vs.notify({title:"Success",text:e.data.message,position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"success"}),setTimeout((function(){location.reload()}),500)})).catch((function(e){console.log(e.response.data),t.$vs.loading.close(),t.$vs.notify({title:"Error",text:e.response.data.message,position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"danger"})}))},pop:function(){this.popupActivo=!0,this.visibility=""},send_quotation:function(){var e=this,t={invitation_id:localStorage.getItem("invite_id"),item_name:this.items_name,item_quantity:this.item_quantity,total_cost:Number(this.total_cost.replace(/[^0-9.-]+/g,"")),currency:this.currency,ship_from:this.ship_from,ship_to:this.ship_to,ship_date:this.ship_date,delivered_before_date:this.delivered_before_date,company_name:this.company_name,company_address:this.company_address};this.$vs.loading(),this.sendQuotation(t).then((function(t){e.$vs.loading.close(),e.$vs.notify({title:"Success",text:t.data.message,position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"success"}),e.visibility="display:none",localStorage.removeItem("invite_id"),setTimeout((function(){location.reload()}),800)})).catch((function(t){e.$vs.loading.close(),e.$vs.notify({title:"Error",text:t.response.data.messages.error,position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"danger"})}))}}),created:function(){var e=this;!this.getAllPendingRequests.length>0&&(this.$vs.loading(),this.allInvites().then((function(){e.$vs.loading.close()})).catch((function(t){e.$vs.loading.close(),console.log(t)})))},components:{Quotation:h,"v-select":l.a,Datepicker:n["a"]}},g=w,C=Object(b["a"])(g,i,s,!1,null,null,null);t["default"]=C.exports},fde7:function(e,t,a){}}]);
//# sourceMappingURL=chunk-1b56521a.9e0c1191.js.map