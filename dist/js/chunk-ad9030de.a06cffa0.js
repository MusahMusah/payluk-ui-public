(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ad9030de"],{"0ab3":function(t,e,a){},"12d9":function(t,e,a){"use strict";var i=a("0ab3"),s=a.n(i);s.a},3245:function(t,e,a){"use strict";var i=a("a61f"),s=a.n(i);s.a},"504c":function(t,e,a){var i=a("0d58"),s=a("6821"),n=a("52a7").f;t.exports=function(t){return function(e){var a,r=s(e),o=i(r),c=o.length,l=0,d=[];while(c>l)n.call(r,a=o[l++])&&d.push(t?[a,r[a]]:r[a]);return d}}},a61f:function(t,e,a){},c037:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("vs-sidebar",{staticClass:"add-new-data-sidebar items-no-padding",attrs:{"click-not-close":"","position-right":"",parent:"body","default-index":"1",color:"primary",spacer:""},model:{value:t.isSidebarActiveLocal,callback:function(e){t.isSidebarActiveLocal=e},expression:"isSidebarActiveLocal"}},[a("div",{staticClass:"mt-6 flex items-center justify-between px-6"},[a("h4",[t._v("CONTRACT DETAILS")]),a("feather-icon",{staticClass:"cursor-pointer",attrs:{icon:"XIcon"},on:{click:function(e){e.stopPropagation(),t.isSidebarActiveLocal=!1}}})],1),a("vs-divider",{staticClass:"mb-0"}),a("VuePerfectScrollbar",{staticClass:"scroll-area--data-list-add-new",attrs:{settings:t.settings}},[a("div",{staticClass:"p-6"},[[a("div",{staticClass:"img-container w-64 mx-auto flex items-center justify-center"},[t.buyerImg?a("img",{staticClass:"responsive",attrs:{src:t.buyerImg,alt:"img"}}):a("img",{staticClass:"responsive",attrs:{src:t.cover_img,alt:"img"}})])],a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"mt-5 w-full",attrs:{label:"Item Name",name:"item-name"},model:{value:t.itemName,callback:function(e){t.itemName=e},expression:"itemName"}}),a("vs-input",{staticClass:"mt-5 w-full",attrs:{label:"Item Quantity"},model:{value:t.itemQuantity,callback:function(e){t.itemQuantity=e},expression:"itemQuantity"}}),a("vs-input",{staticClass:"mt-5 w-full",attrs:{label:"Wallet ID"},model:{value:t.walletId,callback:function(e){t.walletId=e},expression:"walletId"}}),a("vs-input",{staticClass:"mt-5 w-full",attrs:{"icon-pack":"feather",icon:"icon-dollar-sign",label:"Total Cost"},model:{value:t.totalCost,callback:function(e){t.totalCost=e},expression:"totalCost"}}),a("vs-input",{staticClass:"mt-5 w-full",attrs:{label:"Currency"},model:{value:t.currency,callback:function(e){t.currency=e},expression:"currency"}}),a("vs-input",{staticClass:"mt-5 w-full",attrs:{label:"Ship From"},model:{value:t.shipFrom,callback:function(e){t.shipFrom=e},expression:"shipFrom"}}),a("vs-input",{staticClass:"mt-5 w-full",attrs:{label:"Ship To"},model:{value:t.shipTo,callback:function(e){t.shipTo=e},expression:"shipTo"}}),a("vs-input",{staticClass:"mt-5 w-full",attrs:{label:"Ship Date"},model:{value:t.shipDate,callback:function(e){t.shipDate=e},expression:"shipDate"}}),a("vs-input",{staticClass:"mt-5 w-full",attrs:{label:"Delivered Before"},model:{value:t.deliveredDate,callback:function(e){t.deliveredDate=e},expression:"deliveredDate"}}),a("vs-input",{staticClass:"mt-5 w-full",attrs:{label:"Company Name"},model:{value:t.companyName,callback:function(e){t.companyName=e},expression:"companyName"}}),a("vs-input",{staticClass:"mt-5 w-full mb-3",attrs:{label:"Company Address"},model:{value:t.companyAddress,callback:function(e){t.companyAddress=e},expression:"companyAddress"}}),t.modificationMessage1?a("vs-textarea",{attrs:{label:"Modification Message 1"},model:{value:t.modificationMessage1,callback:function(e){t.modificationMessage1=e},expression:"modificationMessage1"}}):t._e(),t.modificationMessage2?a("vs-textarea",{attrs:{label:"Modification Message 2"},model:{value:t.modificationMessage2,callback:function(e){t.modificationMessage2=e},expression:"modificationMessage2"}}):t._e(),t.modificationMessage3?a("vs-textarea",{attrs:{label:"Modification Message 3"},model:{value:t.modificationMessage3,callback:function(e){t.modificationMessage3=e},expression:"modificationMessage3"}}):t._e(),a("label",{attrs:{for:""}},[t._v("Contract Status")]),a("vs-chip",{staticClass:"mt-2 mb-4 w-full",attrs:{color:"primary"}},[a("span",{staticStyle:{"text-transform":"uppercase"}},[t._v(t._s(t.status))])])],2)]),a("div",{staticClass:"flex flex-wrap items-center p-6",attrs:{slot:"footer"},slot:"footer"},[a("vs-button",{staticClass:"w-full"},[t._v("Submit Updated Quotation")])],1)],1)},s=[],n=(a("8e6e"),a("456d"),a("ade3")),r=(a("ac6a"),a("ffc1"),a("9d63")),o=a.n(r),c=a("2f62");function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){Object(n["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var u={props:{isSidebarActive:{type:Boolean,required:!0},data:{type:Object,default:function(){}}},watch:{isSidebarActive:function(t){if(t)if(0===Object.entries(this.data).length)this.initValues(),this.$validator.reset();else{var e=JSON.parse(JSON.stringify(this.data)),a=e.buyer_image,i=e.wallet_id,s=e.invitation_id,n=e.item_name,r=e.item_quantity,o=e.total_cost,c=e.currency,l=e.ship_from,d=e.ship_to,u=e.ship_date,m=e.delivered_before_date,p=e.company_name,v=e.company_address,f=e.flow,g=e.modification_message1,h=e.modification_message2,b=e.modification_message3,y=e.status,_=e.payment;this.buyerImg=a,this.walletId=i,this.invitationId=s,this.itemName=n,this.itemQuantity=r,this.totalCost=o,this.currency=c,this.shipFrom=l,this.shipTo=d,this.shipDate=u,this.deliveredDate=m,this.companyName=p,this.companyAddress=v,this.modificationMessage1=g,this.modificationMessage2=h,this.modificationMessage3=b,this.flow=f,this.status=y,this.payment=_,this.initValues()}}},data:function(){return{buyerImg:null,message:"",walletId:null,invitationId:null,itemName:null,itemQuantity:null,totalCost:null,currency:null,shipFrom:null,shipTo:null,shipDate:null,deliveredDate:null,companyName:null,companyAddress:null,modificationMessage1:null,modificationMessage2:null,modificationMessage3:null,status:null,flow:null,payment:null,popupActivo:!1,visibility:"",cover_img:a("e057"),category_choices:[{text:"Audio",value:"audio"},{text:"Computers",value:"computers"},{text:"Fitness",value:"fitness"},{text:"Appliance",value:"appliance"}],order_status_choices:[{text:"Pending",value:this.status}],settings:{maxScrollbarLength:60,wheelSpeed:.6}}},computed:{isSidebarActiveLocal:{get:function(){return this.isSidebarActive},set:function(t){t||this.$emit("closeSidebar")}},isFormValid:function(){return!this.errors.any()&&""!=this.message}},methods:d(d({},Object(c["b"])({sendRequestModification:"contract_request/sendRequestModification"})),{},{send_request_modification:function(t){var e=this;this.popupActivo=!1;var a={invitation_id:t,message:this.message};this.$vs.loading(),this.sendRequestModification(a).then((function(t){e.$vs.loading.close(),e.$vs.notify({title:"Success",text:t.data.message,iconPack:"feather",icon:"icon-alert-circle",color:"success"})})).catch((function(t){console.log(t),e.$vs.loading.close(),e.$vs.notify({title:"Error",text:t.response.data.message,iconPack:"feather",icon:"icon-alert-circle",color:"danger"})}))},initValues:function(){this.data.id||(this.dataId=null,this.dataName="",this.dataCategory=null,this.dataOrder_status="pending",this.dataPrice=0,this.dataImg=null)},submitData:function(){var t=this;this.$validator.validateAll().then((function(e){if(e){var a={id:t.dataId,name:t.dataName,img:t.dataImg,category:t.dataCategory,order_status:t.dataOrder_status,price:t.dataPrice};null!==t.dataId&&t.dataId>=0?t.$store.dispatch("dataList/updateItem",a).catch((function(t){console.error(t)})):(delete a.id,a.popularity=0,t.$store.dispatch("dataList/addItem",a).catch((function(t){console.error(t)}))),t.$emit("closeSidebar"),t.initValues()}}))},updateCurrImg:function(t){var e=this;if(t.target.files&&t.target.files[0]){var a=new FileReader;a.onload=function(t){e.dataImg=t.target.result},a.readAsDataURL(t.target.files[0])}}}),components:{VuePerfectScrollbar:o.a}},m=u,p=(a("3245"),a("2877")),v=Object(p["a"])(m,i,s,!1,null,"655edaaa",null);e["a"]=v.exports},c04e:function(t,e,a){t.exports=a.p+"img/Placeholder.d6ea53fa.jpg"},d662:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"data-list-container",attrs:{id:"data-list-thumb-view"}},[a("seller-data-view-sidebar",{attrs:{isSidebarActive:t.addNewDataSidebar,data:t.sidebarData},on:{closeSidebar:t.toggleDataSidebar}}),a("vs-table",{ref:"table",attrs:{multiple:"",pagination:"","max-items":t.itemsPerPage,search:"",data:t.allSellerPendingContracts},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.data;return[a("tbody",t._l(i,(function(e,i){return a("vs-tr",{key:i,attrs:{data:e}},[a("vs-td",{staticClass:"img-container"},[e.seller_image?a("img",{staticClass:"product-img",attrs:{src:e.seller_image}}):a("img",{staticClass:"product-img",attrs:{src:t.cover_img}})]),a("vs-td",[a("p",{staticClass:"product-name font-medium truncate"},[t._v("\n              "+t._s(e.company_name)+"\n            ")])]),a("vs-td",[a("p",{staticClass:"product-name font-medium truncate"},[t._v("\n              "+t._s(e.item_name)+"\n            ")])]),a("vs-td",[a("vs-chip",{attrs:{color:"primary"}},[t._v(t._s(e.satisfied))])],1),a("vs-td",{staticClass:"text-center"},[a("vs-button",{attrs:{color:"primary",to:{name:"seller-pending-details",params:{invitation_id:e.invitation_id}},type:"border",icon:"remove_red_eye"}},[t._v("View")])],1),a("vs-td",{staticClass:"whitespace-no-wrap"},[e.expired_time>e.delivered_before_date&&1!=e.seller_ticket?a("vs-button",{staticClass:"m-1",style:t.hide,attrs:{type:"gradient"},on:{click:function(a){return t.ticketPopUp(e.invitation_id)}}},[t._v("\n              Open Ticket\n            ")]):t._e()],1)],1)})),1),a("div",{},[a("vs-popup",{style:t.visibility2,attrs:{classContent:"popup-example2",title:"OPEN TICKET FOR COMPLAIN",active:t.popupActivo2},on:{"update:active":function(e){t.popupActivo2=e}}},[a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full"},[a("label",{attrs:{for:""}},[t._v("Ticket Subject:")]),a("vs-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full mt-2",attrs:{"data-vv-validate-on":"blur",name:"Ticket Subject"},model:{value:t.subject,callback:function(e){t.subject=e},expression:"subject"}},t._l(t.addressTypeOptions,(function(t,e){return a("vs-select-item",{key:e,attrs:{value:t.value,text:t.text}})})),1),a("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("Ticket Subject")))])],1)]),a("div",{staticClass:"vx-row mt-5"},[a("div",{staticClass:"vx-col w-full"},[a("vs-textarea",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"data-vv-validate-on":"blur",label:"Message"},model:{value:t.ticket_message,callback:function(e){t.ticket_message=e},expression:"ticket_message"}}),a("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("Ticket Mesage")))])],1)]),a("div",{staticClass:"vx-row mt-5"},[a("div",{staticClass:"vx-col w-full"},[a("img",{staticClass:"review-image w-full",staticStyle:{heght:"60vh !important","object-fit":"contain"},attrs:{src:t.imagePreview},on:{click:t.openUpload}}),a("div",{staticClass:"form-group"},[a("input",{staticStyle:{display:"none"},attrs:{name:"image",type:"file",id:"file-field",required:""},on:{change:t.updatePreview}})])])]),a("vs-button",{staticClass:"mt-6 ml-auto flex",attrs:{disabled:!t.validateForm3},on:{click:t.send_ticket}},[t._v("SUBMIT TICKET")])],1)],1),a("div",{staticClass:"centerx"},[a("vs-popup",{style:t.visibility,attrs:{classContent:"popup-example",title:"Contracts Type",active:t.popupActivo},on:{"update:active":function(e){t.popupActivo=e}}},[a("div",{staticClass:"vx-row mt-5"},[a("div",{staticClass:"vx-col w-full"},[a("label",[t._v("Select Contract Type")]),a("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{"data-vv-validate-on":"blur",name:"Contract Type",options:["Pending","Completed"]},model:{value:t.contract_type,callback:function(e){t.contract_type=e},expression:"contract_type"}}),a("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("Contract Type")))])],1)]),a("vs-button",{staticClass:"mt-6 ml-auto flex",attrs:{disabled:!t.validateForm},on:{click:t.open_contracts}},[t._v("OPEN")])],1)],1)]}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[a("div",{staticClass:"flex flex-wrap-reverse items-center flex-grow justify-between",attrs:{slot:"header"},slot:"header"},[a("vs-dropdown",{staticClass:"cursor-pointer mb-4 mr-4",attrs:{"vs-trigger-click":""}},[a("div",{staticClass:"p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium"},[a("span",{staticClass:"mr-2"},[t._v(t._s(t.currentPage*t.itemsPerPage-(t.itemsPerPage-1))+" -\n            "+t._s(t.allSellerPendingContracts.length-t.currentPage*t.itemsPerPage>0?t.currentPage*t.itemsPerPage:t.allSellerPendingContracts.length)+"\n            of "+t._s(t.allSellerPendingContracts.length))]),a("feather-icon",{attrs:{icon:"ChevronDownIcon",svgClasses:"h-4 w-4"}})],1),a("vs-dropdown-menu",[a("vs-dropdown-item",{on:{click:function(e){t.itemsPerPage=4}}},[a("span",[t._v("4")])]),a("vs-dropdown-item",{on:{click:function(e){t.itemsPerPage=10}}},[a("span",[t._v("10")])]),a("vs-dropdown-item",{on:{click:function(e){t.itemsPerPage=15}}},[a("span",[t._v("15")])]),a("vs-dropdown-item",{on:{click:function(e){t.itemsPerPage=20}}},[a("span",[t._v("20")])])],1)],1)],1),a("template",{slot:"thead"},[a("vs-th",[t._v("Seller Image")]),a("vs-th",{attrs:{"sort-key":"company_name"}},[t._v("Company Name")]),a("vs-th",{attrs:{"sort-key":"item_name"}},[t._v("Item Name")]),a("vs-th",{attrs:{"sort-key":"status"}},[t._v("Status")]),a("vs-th",{attrs:{"sort-key":"price"}},[t._v("Details")]),a("vs-th",[t._v("Action")])],1)],2)],1)},s=[],n=(a("8e6e"),a("ac6a"),a("456d"),a("7f7f"),a("ade3")),r=a("c037"),o=a("4a7a"),c=a.n(o),l=a("2f62");function d(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?d(Object(a),!0).forEach((function(e){Object(n["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var m={components:{SellerDataViewSidebar:r["a"],vSelect:c.a},data:function(){return{selected:[],pendingContracts:[],itemsPerPage:4,contract_type:"",cover_img:a("e057"),subject:"Choose Subject",addressTypeOptions:[{text:"The items have been delivered but my funds have not been sent",value:"The items have been delivered but my funds have not been sent"},{text:"The buyer cancelled after the goods have been delivered",value:"The buyer cancelled after the goods have been delivered"},{text:"The buyer did not complete the payment",value:"The buyer did not complete the payment"}],message:"",hide:"",popupActivo:!1,popupActivo2:!1,visibility:"",visibility2:"",isMounted:!1,activeConfirm:!1,addNewDataSidebar:!1,sidebarData:{},selectedFile:"",imagePreview:a("c04e"),ticket_message:""}},computed:u(u({},Object(l["c"])({getSellerPendingContracts:"contract_request/getSellerPendingContracts"})),{},{currentPage:function(){return this.isMounted?this.$refs.table.currentx:0},validateForm:function(){return!this.errors.any()&&""!=this.contract_type},validateForm2:function(){return!this.errors.any()&&""!=this.starRating&&""!=this.message},validateForm3:function(){return!this.errors.any()&&""!=this.subject&&""!=this.ticket_message},allSellerPendingContracts:function(){return this.getSellerPendingContracts}}),methods:u(u({},Object(l["b"])({acceptContract:"contract_request/acceptContract",closeContract:"contract_request/closeContract",sendReview:"contract_request/sendReview",sendTicket:"tickets/sendTicket",sellerpendingContracts:"contract_request/sellerPendingContracts"})),{},{openUpload:function(){document.getElementById("file-field").click()},ticketPopUp:function(t){localStorage.setItem("ticketInviteId",t),this.popupActivo2=!0},updatePreview:function(t){var e,a=this,i=t.target.files;0===i.length&&console.log("Empty"),this.filecheck=i.length,e=new FileReader,e.onload=function(t){a.imagePreview=t.target.result},e.readAsDataURL(i[0]),this.selectedFile=t.target.files[0]},send_ticket:function(){var t=this;this.popupActivo2=!1;var e=new FormData;this.selectedFile.name&&e.append("file",this.selectedFile,this.selectedFile.name),e.append("invitation_id",localStorage.getItem("ticketInviteId")),e.append("subject",this.subject),e.append("message",this.ticket_message),this.$vs.loading(),this.sendTicket(e).then((function(e){console.log(e),t.$vs.loading.close(),t.$vs.notify({title:"Success",text:e.data.message,position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"success"}),localStorage.removeItem("ticketInviteId"),setTimeout((function(){location.reload()}),500)})).catch((function(e){console.log(e),localStorage.removeItem("ticketInviteId"),t.$vs.loading.close(),t.$vs.notify({title:"Error",text:e.response.data.messages.error,position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"danger"})}))},editData:function(t){this.sidebarData=t,this.toggleDataSidebar(!0)},toggleDataSidebar:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.addNewDataSidebar=t}}),created:function(){this.sellerpendingContracts()},mounted:function(){this.isMounted=!0}},p=m,v=(a("12d9"),a("2877")),f=Object(v["a"])(p,i,s,!1,null,"172fbb80",null);e["default"]=f.exports},e057:function(t,e,a){t.exports=a.p+"img/timeline.7b272f1a.jpg"},ffc1:function(t,e,a){var i=a("5ca1"),s=a("504c")(!0);i(i.S,"Object",{entries:function(t){return s(t)}})}}]);
//# sourceMappingURL=chunk-ad9030de.a06cffa0.js.map