(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e818242"],{c04e:function(e,t,a){e.exports=a.p+"img/Placeholder.d6ea53fa.jpg"},e057:function(e,t,a){e.exports=a.p+"img/timeline.7b272f1a.jpg"},fabd:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"content-area__conten"},[a("div",{attrs:{id:"item-detail-page"}},[a("div",{staticClass:"vx-row"},[a("div",{staticClass:"w-full mb-5 vx-col lg:w-5/5"},[a("vx-card",[e.details.modification_message1?a("vs-collapse",[a("vs-collapse-item",{attrs:{"icon-pack":"feather","icon-arrow":"icon-arrow-down"}},[a("div",{staticClass:"font-bold text-primary",attrs:{slot:"header"},slot:"header"},[e._v("\n                OPEN YOUR MODIFICATION REQUEST\n              ")]),a("vs-list",[e.details.modification_message1?a("vs-list-header",{attrs:{title:"MODIFICATION MESSAGE 1"}}):e._e(),e.details.modification_message1?a("vs-list-item",{attrs:{title:e.details.message_time1,subtitle:e.details.modification_message1}}):e._e(),e.details.modification_message2?a("vs-list-header",{attrs:{title:"MODIFICATION MESSAGE 2"}}):e._e(),e.details.modification_message2?a("vs-list-item",{attrs:{title:e.details.message_time2,subtitle:e.details.modification_message2}}):e._e(),e.details.modification_message3?a("vs-list-header",{attrs:{title:"MODIFICATION MESSAGE 3"}}):e._e(),e.details.modification_message3?a("vs-list-item",{attrs:{title:e.details.message_time3,subtitle:e.details.modification_message3}}):e._e()],1),"open"==e.details.state&&"request_modification"==e.details.status?a("vs-button",{staticClass:"w-full mt-6",attrs:{color:"primary",type:"border"},on:{click:function(t){e.popupActive=!0}}},[e._v("MODIFY CONTRACT")]):e._e()],1)],1):e._e()],1)],1)]),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"relative vx-col lg:w-2/3"},[a("div",{staticClass:"mb-5 vx-card"},[a("div",{staticClass:"vx-card__collapsible-content vs-con-loading__container"},[a("div",{staticClass:"item-content"},[a("div",{staticClass:"p-6 product-details"},[a("div",{staticClass:"mt-6 vx-row"},[a("div",{staticClass:"flex items-center justify-center w-full vx-col md:w-2/5"},[a("div",{staticClass:"w-3/5 mx-auto mb-10 product-img-container md:mb-0"},[a("img",{staticClass:"responsive",attrs:{src:e.cover_img,alt:"Apple - Apple Watch Series 1 42mm Space Gray Aluminum Case Black Sport Band - Space Gray Aluminum"}})])]),a("div",{staticClass:"w-full vx-col md:w-3/5"},[a("h3",{staticStyle:{"text-transform":"uppercase"}},e._l(e.details.item_name,(function(t,s){return a("span",{key:s},[a("span",{staticStyle:{"text-transform":"uppercase"}},[e._v(e._s(t)+",")])])})),0),a("p",{staticClass:"my-2"},[a("span",{staticClass:"mr-2"},[e._v("by")]),a("span",{staticStyle:{"text-transform":"uppercase"}},[e._v(e._s(e.details.company_name))])]),a("p",{staticClass:"flex flex-wrap items-center"},["USD"==e.details.currency?a("span",{staticClass:"mt-2 mr-4 text-2xl font-medium leading-none text-primary"},[e._v("$"+e._s(e.details.total_cost))]):"NGN"==e.details.currency?a("span",{staticClass:"mt-2 mr-4 text-2xl font-medium leading-none text-primary"},[e._v("₦"+e._s(e.details.total_cost))]):e._e()]),e._m(0),a("p",[e._v("\n                        "+e._s(e.details.company_address)+"\n                      ")]),e._m(1),a("div",{staticClass:"mt-3 vx-row"},[a("span",{staticClass:"ml-3 text-xl font-medium"},[e._v("Wallet ID :\n                        ")]),a("vs-chip",{staticClass:"ml-1",staticStyle:{"font-size":".9em"},attrs:{color:"primary"}},[e._v(e._s(e.details.wallet_id))])],1),e._m(2),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"w-full vx-col"},[a("div",{staticClass:"mb-4 fle flex-wra items-sta"},[e.details.current_date>e.details.delivered_before_date&&1!=e.details.seller_ticket&&"request_modification"!=e.details.status?a("vs-button",{attrs:{type:"border",color:"primary"},on:{click:function(t){e.popupActivo=!0}}},[e._v(" OPEN TICKET ")]):e._e()],1)])])])])])])]),e._m(3)])]),a("div",{staticClass:"w-full vx-col lg:w-1/3"},[a("vx-card",[a("p",{staticClass:"mb-3 font-semibold"},[e._v("Contract Details")]),a("div",{staticClass:"flex justify-between"},[a("span",{staticClass:"font-medium cursor-pointer text-primary"},[e._v("View All Contracts")])]),a("vs-divider"),a("div",{staticClass:"flex justify-between mb-2"},[a("span",{staticClass:"text-grey"},[e._v("Status")]),a("span",[a("vs-chip",{attrs:{color:"primary"}},[e._v(e._s(e.details.satisfied))])],1)]),a("div",{staticClass:"flex justify-between mb-2"},[a("span",{staticClass:"text-grey"},[e._v("Item Quantity")]),a("span",[a("vs-chip",{attrs:{color:"primary"}},[e._v(e._s(e.details.item_quantity))])],1)]),a("div",{staticClass:"flex justify-between mb-2"},[a("span",{staticClass:"text-grey"},[e._v("Currency")]),a("span",[a("vs-chip",{attrs:{color:"primary"}},[e._v(e._s(e.details.currency))])],1)]),a("div",{staticClass:"flex justify-between mb-2"},[a("span",{staticClass:"text-grey"},[e._v("Ship Date")]),a("span",[a("vs-chip",{attrs:{color:"primary"}},[e._v(e._s(e.details.ship_date))])],1)]),a("div",{staticClass:"flex justify-between mb-2"},[a("span",{staticClass:"text-grey"},[e._v("Delivered Date")]),a("span",[a("vs-chip",{attrs:{color:"primary"}},[e._v(e._s(e.details.delivered_before_date))])],1)]),a("div",{staticClass:"flex justify-between mb-2"},[a("span",{staticClass:"text-grey"},[e._v("Ship From")]),a("span",[a("vs-chip",{attrs:{color:"primary"}},[e._v(e._s(e.details.ship_from))])],1)]),a("div",{staticClass:"flex justify-between mb-2"},[a("span",{staticClass:"text-grey"},[e._v("To")]),a("span",[a("vs-chip",{attrs:{color:"primary"}},[e._v(e._s(e.details.ship_to))])],1)]),a("vs-divider"),"open"==e.details.state&&"request_modification"==e.details.status?a("vs-button",{staticClass:"w-full",attrs:{color:"primary",type:"border"},on:{click:function(t){e.popupActive=!0}}},[e._v("MODIFY CONTRACT")]):e._e()],1)],1)]),a("vs-popup",{attrs:{classContent:"popup-example",title:"MODIFY CONTRACT DETAILS",active:e.popupActive,fullscree:""},on:{"update:active":function(t){e.popupActive=t}}},[a("div",{staticClass:"vx-row"},[a("div",{staticClass:"w-full vx-col sm:w-1/2"},[a("label",{attrs:{for:""}},[e._v("Add Item(s) Name")]),a("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:3",expression:"'required|min:3'"}],staticClass:"w-full",attrs:{"data-vv-validate-on":"blur",name:"Item Name",taggable:"",multiple:"","push-tags":""},model:{value:e.details.item_name,callback:function(t){e.$set(e.details,"item_name",t)},expression:"details.item_name"}}),a("span",{staticClass:"text-sm text-danger"},[e._v(e._s(e.errors.first("Item Name")))])],1),a("div",{staticClass:"w-full vx-col sm:w-1/2"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{"data-vv-validate-on":"blur",name:"Item Quantity",type:"number","icon-pack":"feather",icon:"icon-smartphone","icon-no-border":"",label:"Item Quantity"},model:{value:e.details.item_quantity,callback:function(t){e.$set(e.details,"item_quantity",t)},expression:"details.item_quantity"}}),a("span",{staticClass:"text-sm text-danger"},[e._v(e._s(e.errors.first("Item Quantity")))])],1)]),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"w-full vx-col sm:w-1/2"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"currency",rawName:"v-currency",value:{currency:null},expression:"{currency: null}"}],staticClass:"w-full mt-5",attrs:{"data-vv-validate-on":"blur",name:"Total Cost",type:"text","icon-pack":"feather",icon:"feather icon-credit-card","icon-no-border":"",label:"Total Cost"},model:{value:e.details.total_cost,callback:function(t){e.$set(e.details,"total_cost",t)},expression:"details.total_cost"}}),a("span",{staticClass:"text-sm text-danger"},[e._v(e._s(e.errors.first("Total Cost")))])],1),a("div",{staticClass:"w-full mt-5 vx-col sm:w-1/2"},[a("label",{attrs:{for:""}},[e._v("Currency")]),a("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{"data-vv-validate-on":"blur",name:"Currency",label:"Currency",options:["USD","NGN","EUR"]},model:{value:e.details.currency,callback:function(t){e.$set(e.details,"currency",t)},expression:"details.currency"}}),a("span",{staticClass:"text-sm text-danger"},[e._v(e._s(e.errors.first("Currency")))])],1)]),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"w-full mt-5 vx-col sm:w-1/2"},[a("label",{attrs:{for:""}},[e._v("Ship From")]),a("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{name:"Ship From","data-vv-validate-on":"blur",options:e.states},model:{value:e.details.ship_from,callback:function(t){e.$set(e.details,"ship_from",t)},expression:"details.ship_from"}}),a("span",{staticClass:"text-sm text-danger"},[e._v(e._s(e.errors.first("Ship From")))])],1),a("div",{staticClass:"w-full mt-5 vx-col sm:w-1/2"},[a("label",{attrs:{for:""}},[e._v("Ship To")]),a("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{name:"Ship To","data-vv-validate-on":"blur",options:e.states},model:{value:e.details.ship_to,callback:function(t){e.$set(e.details,"ship_to",t)},expression:"details.ship_to"}}),a("span",{staticClass:"text-sm text-danger"},[e._v(e._s(e.errors.first("Ship To")))])],1)]),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"w-full mt-5 vx-col"},[a("datepicker",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"data-vv-validate-on":"blur",placeholder:"Select Ship Date",name:"Ship Date"},model:{value:e.details.ship_date,callback:function(t){e.$set(e.details,"ship_date",t)},expression:"details.ship_date"}}),a("span",{staticClass:"text-sm text-danger"},[e._v(e._s(e.errors.first("Ship Date")))])],1),a("div",{staticClass:"w-full mt-5 vx-col"},[a("datepicker",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"data-vv-validate-on":"blur",placeholder:"Delivered Before Date",name:"Delivered Before Date"},model:{value:e.details.delivered_before_date,callback:function(t){e.$set(e.details,"delivered_before_date",t)},expression:"details.delivered_before_date"}}),a("span",{staticClass:"text-sm text-danger"},[e._v(e._s(e.errors.first("Delivered Before Date")))])],1)]),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"w-full vx-col"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full mt-5",attrs:{"data-vv-validate-on":"blur",type:"text","icon-pack":"feather",icon:"icon-smartphone","icon-no-border":"",label:"Company Name",name:"Company Name"},model:{value:e.details.company_name,callback:function(t){e.$set(e.details,"company_name",t)},expression:"details.company_name"}}),a("span",{staticClass:"text-sm text-danger"},[e._v(e._s(e.errors.first("Company Name")))])],1)]),a("div",{staticClass:"mt-5 vx-row"},[a("div",{staticClass:"w-full vx-col"},[a("vs-textarea",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"data-vv-validate-on":"blur",name:"Company Address",label:"Company Address"},model:{value:e.details.company_address,callback:function(t){e.$set(e.details,"company_address",t)},expression:"details.company_address"}}),a("span",{staticClass:"text-sm text-danger"},[e._v(e._s(e.errors.first("Company Address")))])],1)]),a("vs-button",{staticClass:"flex mt-6 mb-12 ml-auto",attrs:{disabled:!e.validateForm},on:{click:e.send_quotation}},[e._v("SAVE AND MODIFY")])],1),a("div",{},[a("vs-popup",{attrs:{classContent:"popup-example2",title:"OPEN TICKET FOR COMPLAIN",active:e.popupActivo},on:{"update:active":function(t){e.popupActivo=t}}},[a("div",{staticClass:"vx-row"},[a("div",{staticClass:"w-full vx-col"},[a("label",{attrs:{for:""}},[e._v("Ticket Subject:")]),a("vs-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full mt-2",attrs:{"data-vv-validate-on":"blur",name:"Ticket Subject"},model:{value:e.subject,callback:function(t){e.subject=t},expression:"subject"}},e._l(e.addressTypeOptions,(function(e,t){return a("vs-select-item",{key:t,attrs:{value:e.value,text:e.text}})})),1),a("span",{staticClass:"text-sm text-danger"},[e._v(e._s(e.errors.first("Ticket Subject")))])],1)]),a("div",{staticClass:"mt-5 vx-row"},[a("div",{staticClass:"w-full vx-col"},[a("vs-textarea",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"data-vv-validate-on":"blur",label:"Message"},model:{value:e.ticket_message,callback:function(t){e.ticket_message=t},expression:"ticket_message"}}),a("span",{staticClass:"text-sm text-danger"},[e._v(e._s(e.errors.first("Ticket Mesage")))])],1)]),a("div",{staticClass:"mt-5 vx-row"},[a("div",{staticClass:"w-full vx-col"},[a("img",{staticClass:"w-full review-image",staticStyle:{height:"57vh !important","object-fit":"cover"},attrs:{src:e.imagePreview},on:{click:e.openUpload}}),a("div",{staticClass:"form-group"},[a("input",{staticStyle:{display:"none"},attrs:{name:"image",type:"file",id:"file-field",required:""},on:{change:e.updatePreview}})])])]),a("vs-button",{staticClass:"flex mt-6 ml-auto",attrs:{disabled:!e.validateForm3},on:{click:e.send_ticket}},[e._v("SUBMIT TICKET")])],1)],1)],1)])])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vs-component vs-divider"},[a("span",{staticClass:"vs-divider-border after vs-divider-border-default",staticStyle:{width:"100%","border-top":"1px solid rgba(0, 0, 0, 0.1)"}}),a("span",{staticClass:"vs-divider-border before vs-divider-border-default",staticStyle:{width:"100%","border-top":"1px solid rgba(0, 0, 0, 0.1)"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vs-component vs-divider"},[a("span",{staticClass:"vs-divider-border after vs-divider-border-default",staticStyle:{width:"100%","border-top":"1px solid rgba(0, 0, 0, 0.1)"}}),a("span",{staticClass:"vs-divider-border before vs-divider-border-default",staticStyle:{width:"100%","border-top":"1px solid rgba(0, 0, 0, 0.1)"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vs-component vs-divider"},[a("span",{staticClass:"vs-divider-border after vs-divider-border-default",staticStyle:{width:"100%","border-top":"1px solid rgba(0, 0, 0, 0.1)"}}),a("span",{staticClass:"vs-divider-border before vs-divider-border-default",staticStyle:{width:"100%","border-top":"1px solid rgba(0, 0, 0, 0.1)"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vx-card__code-container collapsed",staticStyle:{"max-height":"0px",display:"none"}},[a("div",{staticClass:"code-content"},[a("pre",{staticClass:"language-markup"},[a("code",{staticClass:"language-markup"})])])])}],r=(a("8e6e"),a("ac6a"),a("456d"),a("a481"),a("c5f6"),a("7f7f"),a("ade3")),l=a("2f62"),o=a("4a7a"),n=a.n(o),c=a("fa33");function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function v(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){Object(r["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var m={components:{Datepicker:c["a"],vSelect:n.a},data:function(){return{states:["Abia","Adamawa","Akwa Ibom","Anambra","Bauchi","Bayelsa","Benue","Borno","Cross River","Delta","Ebonyi","Edo","Ekiti","Enugu","FCT - Abuja","Gombe","Imo","Jigawa","Kaduna","Kano","Katsina","Kebbi","Kogi","Kwara","Lagos","Nasarawa","Niger","Ogun","Ondo","Osun","Oyo","Plateau","Rivers","Sokoto","Taraba","Yobe","Zamfara"],subject:"Choose Subject",addressTypeOptions:[{text:"The items have been delivered but my funds have not been sent",value:"The items have been delivered but my funds have not been sent"},{text:"The buyer cancelled after the goods have been delivered",value:"The buyer cancelled after the goods have been delivered"},{text:"The buyer did not complete the payment",value:"The buyer did not complete the payment"}],message:"",hide:"",popupActivo:!1,selectedFile:"",imagePreview:a("c04e"),ticket_message:"",cover_img:a("e057"),details:[],item_name:"",item_quantity:"",total_cost:"",currency:"",ship_from:"",ship_to:"",ship_date:"",delivered_before_date:"",company_name:"",company_address:"",visibility:"",profile_img:a("2a69"),popupActive:!1,passengers:1,date:null}},computed:v(v({validateForm:function(){return!this.errors.any()&&""!=this.details.item_name&&""!=this.details.item_quantity&&""!=this.details.total_cost&&""!=this.details.currency&&""!=this.details.ship_from&&""!=this.details.ship_to&&""!=this.details.ship_date&&""!=this.details.delivered_before_date&&""!=this.details.company_name},validateForm3:function(){return!this.errors.any()&&""!=this.subject&&""!=this.ticket_message}},Object(l["c"])({getSellerPendingContracts:"contract_request/getSellerPendingContracts",getSingleContract:"contract_request/getSingleContract"})),{},{allSellerPendingContracts:function(){return this.getSellerPendingContracts},singleContractDetails:function(){return this.getSingleContract}}),methods:v(v({},Object(l["b"])({sellerPendingContracts:"contract_request/sellerPendingContracts",singleContract:"contract_request/singleContract",sendTicket:"tickets/sendTicket",sendQuotation:"contract_request/sendQuotation"})),{},{openUpload:function(){document.getElementById("file-field").click()},updatePreview:function(e){var t,a=this,s=e.target.files;0===s.length&&console.log("Empty"),this.filecheck=s.length,t=new FileReader,t.onload=function(e){a.imagePreview=e.target.result},t.readAsDataURL(s[0]),this.selectedFile=e.target.files[0]},send_ticket:function(){var e=this;this.popupActivo2=!1;var t=new FormData;this.selectedFile.name&&t.append("file",this.selectedFile,this.selectedFile.name),t.append("invitation_id",this.details.invitation_id),t.append("subject",this.subject),t.append("message",this.ticket_message),this.$vs.loading(),this.sendTicket(t).then((function(t){console.log(t),e.$vs.loading.close(),e.$vs.notify({title:"Success",text:t.data.message,position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"success"}),localStorage.removeItem("ticketInviteId"),setTimeout((function(){location.reload()}),500)})).catch((function(t){console.log(t),localStorage.removeItem("ticketInviteId"),e.$vs.loading.close(),e.$vs.notify({title:"Error",text:t.response.data.messages.error,position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"danger"})}))},send_quotation:function(){var e=this,t={invitation_id:this.details.invitation_id,item_name:this.details.item_name,item_quantity:this.details.item_quantity,total_cost:Number(this.details.total_cost.replace(/[^0-9.-]+/g,"")),currency:this.details.currency,ship_from:this.details.ship_from,ship_to:this.details.ship_to,ship_date:this.details.ship_date,delivered_before_date:this.details.delivered_before_date,company_name:this.details.company_name,company_address:this.details.company_address};this.$vs.loading(),this.sendQuotation(t).then((function(t){e.$vs.loading.close(),e.$vs.notify({title:"Success",text:t.data.message,position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"success"}),e.visibility="display:none",e.popupActive=!1,localStorage.removeItem("invite_id"),setTimeout((function(){location.reload()}),800)})).catch((function(t){e.$vs.loading.close(),e.$vs.notify({title:"Error",text:t.response.data.messages.error,position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"danger"})}))}}),watch:{},created:function(){var e=this;this.$vs.loading(),this.singleContract(this.$route.params.invitation_id).then((function(){e.details=e.singleContractDetails[0],e.$vs.loading.close()})).catch((function(){e.$vs.loading.close(),e.$router.replace({name:"404"}).catch((function(){}))}))},mounted:function(){this.sellerPendingContracts()}},p=m,u=a("2877"),_=Object(u["a"])(p,s,i,!1,null,null,null);t["default"]=_.exports}}]);
//# sourceMappingURL=chunk-3e818242.b9087517.js.map