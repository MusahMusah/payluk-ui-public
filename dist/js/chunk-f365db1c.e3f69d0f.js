(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f365db1c"],{"16aa":function(t,e,i){"use strict";var s=i("fe79"),a=i.n(s);a.a},3846:function(t,e,i){i("9e1e")&&"g"!=/./g.flags&&i("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:i("0bfb")})},"55d0":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"content-area__conten"},[i("div",{attrs:{id:"item-detail-page"}},[i("div",{staticClass:"vx-row"},[i("div",{staticClass:"w-full mb-5 vx-col lg:w-5/5"},[i("vx-card",[t.details.modification_message1?i("vs-collapse",[i("vs-collapse-item",{attrs:{"icon-pack":"feather","icon-arrow":"icon-arrow-down"}},[i("div",{staticClass:"font-bold text-primary",attrs:{slot:"header"},slot:"header"},[t._v("\n                OPEN YOUR MODIFICATION REQUEST\n              ")]),i("vs-list",[t.details.modification_message1?i("vs-list-header",{attrs:{title:"MODIFICATION MESSAGE 1"}}):t._e(),t.details.modification_message1?i("vs-list-item",{attrs:{title:t.details.message_time1,subtitle:t.details.modification_message1}}):t._e(),t.details.modification_message2?i("vs-list-header",{attrs:{title:"MODIFICATION MESSAGE 2"}}):t._e(),t.details.modification_message2?i("vs-list-item",{attrs:{title:t.details.message_time2,subtitle:t.details.modification_message2}}):t._e(),t.details.modification_message3?i("vs-list-header",{attrs:{title:"MODIFICATION MESSAGE 3"}}):t._e(),t.details.modification_message3?i("vs-list-item",{attrs:{title:t.details.message_time3,subtitle:t.details.modification_message3}}):t._e()],1)],1)],1):t._e()],1)],1)]),i("div",{staticClass:"vx-row"},[i("div",{staticClass:"relative vx-col lg:w-2/3"},[i("div",{staticClass:"mb-5 vx-card"},[i("div",{staticClass:"vx-card__collapsible-content vs-con-loading__container"},[i("div",{staticClass:"item-content"},[i("div",{staticClass:"p-6 product-details"},[t._m(0),i("div",{staticClass:"mt-6 vx-row"},[i("div",{staticClass:"flex items-center justify-center w-full vx-col md:w-2/5"},[i("div",{staticClass:"w-full mx-auto mb-10 w3/5 product-img-container md:mb-0"},[t.details.seller_image?i("img",{staticClass:"responsive",attrs:{src:t.details.seller_image,alt:"Apple - Apple Watch Series 1 42mm Space Gray Aluminum Case Black Sport Band - Space Gray Aluminum"}}):i("img",{staticClass:"responsive",attrs:{src:t.cover_img,alt:"Apple - Apple Watch Series 1 42mm Space Gray Aluminum Case Black Sport Band - Space Gray Aluminum"}})])]),i("div",{staticClass:"w-full vx-col md:w-3/5"},[i("h3",{staticStyle:{"text-transform":"uppercase"}},t._l(t.details.item_name,(function(e,s){return i("span",{key:s},[i("span",{staticStyle:{"text-transform":"uppercase"}},[t._v(t._s(e)+",")])])})),0),i("p",{staticClass:"my-2"},[i("span",{staticClass:"mr-2"},[t._v("by")]),i("span",{staticStyle:{"text-transform":"uppercase"}},[t._v(t._s(t.details.company_name))])]),i("p",{staticClass:"flex flex-wrap items-center"},["USD"==t.details.currency?i("span",{staticClass:"mt-2 mr-4 text-2xl font-medium leading-none text-primary"},[t._v("$"+t._s(t.details.total_cost))]):"NGN"==t.details.currency?i("span",{staticClass:"mt-2 mr-4 text-2xl font-medium leading-none text-primary"},[t._v("₦"+t._s(t.details.total_cost))]):t._e()]),t._m(1),i("p",[t._v("\n                        "+t._s(t.details.company_address)+" "+t._s(t.testme)+"\n                      ")]),t._m(2),i("div",{staticClass:"mt-3 vx-row"},[i("span",{staticClass:"ml-3 text-xl font-medium"},[t._v("Wallet ID :\n                        ")]),i("vs-chip",{staticClass:"ml-1",staticStyle:{"font-size":".9em"},attrs:{color:"primary"}},[t._v(t._s(t.details.wallet_id))])],1),t._m(3),i("div",{staticClass:"vx-row"},[i("div",{staticClass:"w-full vx-col"},[i("div",{staticClass:"flex mb-4 flex-wra items-sta"},["made"!=t.details.payment&&"request_modification"!=t.details.status?i("vs-button",{attrs:{type:"border",color:"primary"},on:{click:function(e){return t.openConfirm(t.details)}}},[t._v(" ACCEPT & PAY")]):t._e(),"made"==t.details.payment&&"request_modification"!=t.details.status?i("vs-button",{staticClass:"ml2",attrs:{type:"border",color:"primary"},on:{click:function(e){return t.openConfirm2(t.details.invitation_id)}}},[t._v(" CONFIRM TRNSACTION ")]):t._e()],1)]),i("div",{staticClass:"w-full vx-col"},[i("div",{staticClass:"mb-4 fle flex-wra items-sta"},["buyer"==t.details.flow&&"made"!=t.details.payment&&"request_modification"!=t.details.status?i("vs-button",{attrs:{type:"border",color:"primary"},on:{click:function(e){t.popupActivo4=!0}}},[t._v(" REQUEST MODIFICATION ")]):t._e()],1)]),i("div",{staticClass:"w-full vx-col"},[i("div",{staticClass:"mb-4 fle flex-wra items-sta"},[t.details.current_date>t.details.delivered_before_date&&"made"==t.details.payment&&1!=t.details.buyer_ticket&&"request_modification"!=t.details.status?i("vs-button",{attrs:{type:"border",color:"primary"},on:{click:function(e){return t.ticketPopUp(t.details.invitation_id)}}},[t._v(" OPEN TICKET ")]):t._e()],1)])])])])])])]),t._m(4)])]),i("div",{staticClass:"w-full vx-col sm:w-3/3 lg:w-1/3"},[i("vx-card",[i("p",{staticClass:"mb-3 font-semibold"},[t._v("Contract Details")]),i("div",{staticClass:"flex justify-between"}),i("vs-divider"),i("div",{staticClass:"flex justify-between mb-2"},[i("span",{staticClass:"text-grey"},[t._v("Status")]),i("span",[i("vs-chip",{attrs:{color:"primary"}},[t._v(t._s(t.details.status))])],1)]),i("div",{staticClass:"flex justify-between mb-2"},[i("span",{staticClass:"text-grey"},[t._v("Item Quantity")]),i("span",[i("vs-chip",{attrs:{color:"primary"}},[t._v(t._s(t.details.item_quantity))])],1)]),i("div",{staticClass:"flex justify-between mb-2"},[i("span",{staticClass:"text-grey"},[t._v("Currency")]),i("span",[i("vs-chip",{attrs:{color:"primary"}},[t._v(t._s(t.details.currency))])],1)]),i("div",{staticClass:"flex justify-between mb-2"},[i("span",{staticClass:"text-grey"},[t._v("Ship Date")]),i("span",[i("vs-chip",{attrs:{color:"primary"}},[t._v(t._s(t.details.ship_date))])],1)]),i("div",{staticClass:"flex justify-between mb-2"},[i("span",{staticClass:"text-grey"},[t._v("Delivered Date")]),i("span",[i("vs-chip",{attrs:{color:"primary"}},[t._v(t._s(t.details.delivered_before_date))])],1)]),i("div",{staticClass:"flex justify-between mb-2"},[i("span",{staticClass:"text-grey"},[t._v("Ship From")]),i("span",[i("vs-chip",{attrs:{color:"primary"}},[t._v(t._s(t.details.ship_from))])],1)]),i("div",{staticClass:"flex justify-between mb-2"},[i("span",{staticClass:"text-grey"},[t._v("To")]),i("span",[i("vs-chip",{attrs:{color:"primary"}},[t._v(t._s(t.details.ship_to))])],1)]),i("vs-divider"),"made"!=t.details.payment?i("vs-button",{staticClass:"w-full",attrs:{color:"danger",type:"border"},on:{click:function(e){return t.decline_contract(t.details.invitation_id)}}},[t._v("DECLINE CONTRACT")]):t._e()],1)],1)]),i("div",{staticClass:"clearfix"},[i("vs-popup",{attrs:{classContent:"popup-example2",title:"REQUEST MODIFICATION OF SELLER QUOTATION",active:t.popupActivo4},on:{"update:active":function(e){t.popupActivo4=e}}},[i("div",{staticClass:"mt-5 vx-row"},[i("div",{staticClass:"w-full vx-col"},[i("vs-textarea",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{label:"Modification Message",name:"Message","data-vv-validate-on":"blur"},model:{value:t.modification_message,callback:function(e){t.modification_message=e},expression:"modification_message"}}),i("span",{staticClass:"text-sm text-danger"},[t._v(t._s(t.errors.first("Message")))])],1)]),i("vs-button",{staticClass:"flex mt-6 ml-auto",attrs:{disabled:!t.validateForm},on:{click:function(e){return t.send_request_modification(t.details.invitation_id)}}},[t._v("SUBMIT REQUEST")])],1)],1),i("div",{staticClass:"centerx"},[i("vs-popup",{style:t.visibility2,attrs:{classContent:"popup-example",title:"Submit Review",active:t.popupActivo2},on:{"update:active":function(e){t.popupActivo2=e}}},[i("div",{staticClass:"mt-5 vx-row"},[i("div",{staticClass:"w-full vx-col"},[i("label",{staticStyle:{"font-weight":"bold"}},[t._v("Star Rating")]),i("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{"data-vv-validate-on":"blur",placeholder:"Rate Seller",options:["1","2","3","4","5"]},model:{value:t.starRating,callback:function(e){t.starRating=e},expression:"starRating"}})],1)]),i("div",{staticClass:"mt-5 vx-row"},[i("label",{staticClass:"m-2",staticStyle:{"font-weight":"bold"},attrs:{for:""}},[t._v("Are You Satisfied :")]),i("vs-switch",{staticClass:"m-2",staticStyle:{width:"20%"},attrs:{color:"primary","vs-icon-on":"check_box","vs-icon-off":"block"},model:{value:t.satisfied,callback:function(e){t.satisfied=e},expression:"satisfied"}},[i("span",{attrs:{slot:"on"},slot:"on"},[t._v("YES")]),i("span",{attrs:{slot:"off"},slot:"off"},[t._v("NO")])])],1),i("div",{staticClass:"mt-5 vx-row"},[i("div",{staticClass:"w-full vx-col"},[i("vs-textarea",{attrs:{label:"Remark Message"},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1)]),i("vs-button",{staticClass:"flex mt-6 ml-auto",attrs:{disabled:!t.validateForm2},on:{click:t.send_review}},[t._v("SUBMIT REVIEW")])],1)],1),i("div",{},[i("vs-popup",{attrs:{classContent:"popup-example2",title:"OPEN TICKET FOR COMPLAIN",active:t.popupActivo3},on:{"update:active":function(e){t.popupActivo3=e}}},[i("div",{staticClass:"vx-row"},[i("div",{staticClass:"w-full vx-col"},[i("label",{attrs:{for:""}},[t._v("Ticket Subject:")]),i("vs-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full mt-2",attrs:{"data-vv-validate-on":"blur",name:"Ticket Subject"},model:{value:t.subject,callback:function(e){t.subject=e},expression:"subject"}},t._l(t.addressTypeOptions,(function(t,e){return i("vs-select-item",{key:e,attrs:{value:t.value,text:t.text}})})),1),i("span",{staticClass:"text-sm text-danger"},[t._v(t._s(t.errors.first("Ticket Subject")))])],1)]),i("div",{staticClass:"mt-5 vx-row"},[i("div",{staticClass:"w-full vx-col"},[i("vs-textarea",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"data-vv-validate-on":"blur",label:"Message"},model:{value:t.ticket_message,callback:function(e){t.ticket_message=e},expression:"ticket_message"}}),i("span",{staticClass:"text-sm text-danger"},[t._v(t._s(t.errors.first("Ticket Mesage")))])],1)]),i("div",{staticClass:"mt-5 vx-row"},[i("div",{staticClass:"w-full vx-col"},[i("img",{staticClass:"w-full preview-imag",staticStyle:{height:"57vh !important","object-fit":"cover"},attrs:{src:t.imagePreview},on:{click:t.openUpload}}),i("div",{staticClass:"form-group"},[i("input",{staticStyle:{display:"none"},attrs:{name:"image",type:"file",id:"file-field",required:""},on:{change:t.updatePreview}})])])]),i("vs-button",{staticClass:"flex mt-6 ml-auto",attrs:{disabled:!t.validateForm3},on:{click:t.send_ticket}},[t._v("SUBMIT TICKET")])],1)],1)])])])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vx-row"},[i("div",{staticClass:"w-full text-center vx-col lg:w-2/2"},[i("h1",{staticClass:"text-center",staticStyle:{color:"#7367f0","font-weight":"bold"}},[t._v("Delivery Date Countdown Timer")]),i("div",{staticClass:"items-center justify-center text-cente fle",staticStyle:{"text-align":"center !important"},attrs:{id:"clockdiv"}},[i("div",[i("span",{staticClass:"days"}),i("div",{staticClass:"smalltext"},[t._v("Days")])]),i("div",[i("span",{staticClass:"hours"}),i("div",{staticClass:"smalltext"},[t._v("Hours")])]),i("div",[i("span",{staticClass:"minutes"}),i("div",{staticClass:"smalltext"},[t._v("Minutes")])]),i("div",[i("span",{staticClass:"seconds"}),i("div",{staticClass:"smalltext"},[t._v("Seconds")])])])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vs-component vs-divider"},[i("span",{staticClass:"vs-divider-border after vs-divider-border-default",staticStyle:{width:"100%","border-top":"1px solid rgba(0, 0, 0, 0.1)"}}),i("span",{staticClass:"vs-divider-border before vs-divider-border-default",staticStyle:{width:"100%","border-top":"1px solid rgba(0, 0, 0, 0.1)"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vs-component vs-divider"},[i("span",{staticClass:"vs-divider-border after vs-divider-border-default",staticStyle:{width:"100%","border-top":"1px solid rgba(0, 0, 0, 0.1)"}}),i("span",{staticClass:"vs-divider-border before vs-divider-border-default",staticStyle:{width:"100%","border-top":"1px solid rgba(0, 0, 0, 0.1)"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vs-component vs-divider"},[i("span",{staticClass:"vs-divider-border after vs-divider-border-default",staticStyle:{width:"100%","border-top":"1px solid rgba(0, 0, 0, 0.1)"}}),i("span",{staticClass:"vs-divider-border before vs-divider-border-default",staticStyle:{width:"100%","border-top":"1px solid rgba(0, 0, 0, 0.1)"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vx-card__code-container collapsed",staticStyle:{"max-height":"0px",display:"none"}},[i("div",{staticClass:"code-content"},[i("pre",{staticClass:"language-markup"},[i("code",{staticClass:"language-markup"})])])])}],o=(i("8e6e"),i("ac6a"),i("456d"),i("c5f6"),i("6b54"),i("7f7f"),i("a481"),i("ade3")),c=i("2f62"),r=i("4a7a"),n=i.n(r);function l(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function d(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?l(Object(i),!0).forEach((function(e){Object(o["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var v={components:{vSelect:n.a},data:function(){return{cover_img:i("e057"),details:[],contract_type:"",centerx:"",satisfied:!0,starRating:"",message:"",modification_message:"",hide:"",popupActivo:!1,popupActivo2:!1,popupActivo3:!1,popupActivo4:!1,visibility:"",visibility2:"",visibility3:"",isMounted:!1,activeConfirm:!1,addNewDataSidebar:!1,sidebarData:{},subject:"Choose Subject",addressTypeOptions:[{text:"Delay delivery",value:"Delay delivery"},{text:"Not what i ordered for",value:"Not what i ordered for"}],ticket_message:"",selectedFile:"",imagePreview:i("c04e")}},computed:d(d({},Object(c["c"])({getBuyerPendingContracts:"contract_request/getBuyerPendingContracts",getSingleContract:"contract_request/getSingleContract"})),{},{validateForm:function(){return!this.errors.any()&&""!=this.modification_message},validateForm2:function(){return!this.errors.any()&&""!=this.starRating&&""!=this.message},validateForm3:function(){return!this.errors.any()&&""!=this.subject&&""!=this.ticket_message},singleContractDetails:function(){return this.getSingleContract}}),methods:d(d({},Object(c["b"])({buyerPendingContracts:"contract_request/buyerPendingContracts",acceptContract:"contract_request/acceptContract",closeContract:"contract_request/closeContract",sendReview:"contract_request/sendReview",sendBuyerTicket:"tickets/sendBuyerTicket",sendRequestModification:"contract_request/sendRequestModification",declineContract:"contract_request/declineContract",singleContract:"contract_request/singleContract"})),{},{decline_contract:function(t){var e=this;this.popupActivo=!1;var i={invitation_id:t,status:"declined"};this.$vs.loading(),this.declineContract(i).then((function(t){e.$vs.loading.close(),e.$vs.notify({title:"Success",text:t.data.message,position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"success"}),e.$router.replace({name:"dashboard-analytics"}).catch((function(){}))})).catch((function(t){console.log(t),e.$vs.loading.close(),e.$vs.notify({title:"Error",text:t.response.data.message,position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"danger"})}))},send_request_modification:function(t){var e=this;this.popupActivo4=!1;var i={invitation_id:t,message:this.modification_message};this.$vs.loading(),this.sendRequestModification(i).then((function(t){e.$vs.loading.close(),e.$vs.notify({title:"Success",text:t.data.message,position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"success"}),setTimeout((function(){location.reload()}),800)})).catch((function(t){console.log(t),e.$vs.loading.close(),e.$vs.notify({title:"Error",text:t.response.data.message,position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"danger"})}))},close_transaction:function(){var t=this,e=localStorage.getItem("invitation_id");this.$vs.loading(),this.closeContract(e).then((function(e){t.$vs.loading.close(),t.$vs.notify({title:"Success",text:e.data.message,position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"success"}),setTimeout((function(){t.popupActivo2=!0}),1500)})).catch((function(e){t.$vs.loading.close(),t.$vs.notify({title:"Error",text:e.response.data.message,position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"danger"})}))},ticketPopUp:function(t){localStorage.setItem("ticketInviteId",t),this.popupActivo3=!0},openUpload:function(){document.getElementById("file-field").click()},updatePreview:function(t){var e,i=this,s=t.target.files;0===s.length&&console.log("Empty"),this.filecheck=s.length,e=new FileReader,e.onload=function(t){i.imagePreview=t.target.result},e.readAsDataURL(s[0]),this.selectedFile=t.target.files[0]},send_ticket:function(){var t=this;this.popupActivo3=!1;var e=new FormData;this.selectedFile.name&&e.append("file",this.selectedFile,this.selectedFile.name),e.append("invitation_id",localStorage.getItem("ticketInviteId")),e.append("subject",this.subject),e.append("message",this.ticket_message),this.$vs.loading(),this.sendBuyerTicket(e).then((function(e){console.log(e),t.$vs.loading.close(),t.$vs.notify({title:"Success",text:e.data.message,position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"success"}),localStorage.removeItem("ticketInviteId"),setTimeout((function(){location.reload()}),500)})).catch((function(e){console.log(e.response),localStorage.removeItem("ticketInviteId"),t.$vs.loading.close(),t.$vs.notify({title:"Error",text:e.response.data.messages.error,position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"danger"})}))},send_review:function(){var t=this;this.popupActivo2=!1;var e={invitation_id:localStorage.getItem("invitation_id"),star:this.starRating,satisfied:this.satisfied,message:this.message};this.$vs.loading(),this.sendReview(e).then((function(e){t.$vs.loading.close(),t.$vs.notify({title:"Success",text:e.data.message,position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"success"}),localStorage.removeItem("invitation_id"),t.$router.replace({name:"dashboard-analytics"}).catch((function(){}))})).catch((function(e){console.log(e),localStorage.removeItem("invitation_id"),t.$vs.loading.close(),t.$vs.notify({title:"Error",text:e.response.data.message,position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"danger"})}))},openConfirm:function(t){var e={contract_id:t.id,invitation_id:t.invitation_id,amount:Number(t.total_cost.replace(/[^0-9.-]+/g,"")).toString(),currency:t.currency};localStorage.setItem("payload",JSON.stringify(e)),this.$vs.dialog({type:"confirm",color:"primary",title:"Confirm",text:"Are You Sure To Complete Payment?",accept:this.accept_contract})},openConfirm2:function(t){localStorage.setItem("invitation_id",t),this.$vs.dialog({type:"confirm",color:"primary",title:"Confirm",text:"Are You Sure To Confirm Transaction? No Complains Can be resolved After Confirmation.",accept:this.close_transaction})},accept_contract:function(){var t=this,e=JSON.parse(localStorage.getItem("payload"));this.$vs.loading(),this.acceptContract(e).then((function(e){201==e.status?(localStorage.removeItem("payload"),t.$vs.loading.close(),t.$vs.notify({title:"Info",text:e.data.message,position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"success"})):(localStorage.removeItem("payload"),t.$vs.loading.close(),t.$vs.notify({title:"Success",text:e.data.message,position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"success"}),setTimeout((function(){location.reload()}),800))})).catch((function(e){localStorage.removeItem("payload"),console.log(e),t.$vs.loading.close(),t.$vs.notify({title:"Error",text:e.response.data.message,position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"danger"})}))}}),watch:{},created:function(){var t=this;this.$vs.loading(),this.singleContract(this.$route.params.invitation_id).then((function(){t.$vs.loading.close(),t.details=t.singleContractDetails[0]})).catch((function(){t.$vs.loading.close(),t.$router.replace({name:"404"}).catch((function(){}))}))},mounted:function(){},updated:function(){var t=new Date(this.singleContractDetails[0].delivered_before_date).getTime(),e=setInterval((function(){var i=(new Date).getTime(),s=t-i,a=Math.floor(s/864e5),o=Math.floor(s%864e5/36e5),c=Math.floor(s%36e5/6e4),r=Math.floor(s%6e4/1e3),n=document.getElementById("clockdiv");n.querySelector(".days").innerHTML=a,n.querySelector(".hours").innerHTML=o,n.querySelector(".minutes").innerHTML=c,n.querySelector(".seconds").innerHTML=r,s<0&&(clearInterval(e),document.getElementById("clockdiv").innerHTML="Contract Delivery Before Date Reached, You can now Open Ticket For Complain...")}),1e3)}},u=v,p=(i("e98b"),i("16aa"),i("2877")),m=Object(p["a"])(u,s,a,!1,null,null,null);e["default"]=m.exports},"6b54":function(t,e,i){"use strict";i("3846");var s=i("cb7c"),a=i("0bfb"),o=i("9e1e"),c="toString",r=/./[c],n=function(t){i("2aba")(RegExp.prototype,c,t,!0)};i("79e5")((function(){return"/a/b"!=r.call({source:"a",flags:"b"})}))?n((function(){var t=s(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?a.call(t):void 0)})):r.name!=c&&n((function(){return r.call(this)}))},"8e6e":function(t,e,i){var s=i("5ca1"),a=i("990b"),o=i("6821"),c=i("11e9"),r=i("f1ae");s(s.S,"Object",{getOwnPropertyDescriptors:function(t){var e,i,s=o(t),n=c.f,l=a(s),d={},v=0;while(l.length>v)i=n(s,e=l[v++]),void 0!==i&&r(d,e,i);return d}})},"990b":function(t,e,i){var s=i("9093"),a=i("2621"),o=i("cb7c"),c=i("7726").Reflect;t.exports=c&&c.ownKeys||function(t){var e=s.f(o(t)),i=a.f;return i?e.concat(i(t)):e}},ade3:function(t,e,i){"use strict";function s(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}i.d(e,"a",(function(){return s}))},c04e:function(t,e,i){t.exports=i.p+"img/Placeholder.d6ea53fa.jpg"},e057:function(t,e,i){t.exports=i.p+"img/timeline.7b272f1a.jpg"},e98b:function(t,e,i){"use strict";var s=i("f2c6"),a=i.n(s);a.a},f1ae:function(t,e,i){"use strict";var s=i("86cc"),a=i("4630");t.exports=function(t,e,i){e in t?s.f(t,e,a(0,i)):t[e]=i}},f2c6:function(t,e,i){},fe79:function(t,e,i){}}]);
//# sourceMappingURL=chunk-f365db1c.e3f69d0f.js.map