(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10a26bbe"],{"156c":function(t,a,e){},"3b2b":function(t,a,e){var r=e("7726"),s=e("5dbc"),c=e("86cc").f,i=e("9093").f,n=e("aae3"),o=e("0bfb"),d=r.RegExp,l=d,u=d.prototype,m=/a/g,p=/a/g,f=new d(m)!==m;if(e("9e1e")&&(!f||e("79e5")((function(){return p[e("2b4c")("match")]=!1,d(m)!=m||d(p)==p||"/a/i"!=d(m,"i")})))){d=function(t,a){var e=this instanceof d,r=n(t),c=void 0===a;return!e&&r&&t.constructor===d&&c?t:s(f?new l(r&&!c?t.source:t,a):l((r=t instanceof d)?t.source:t,r&&c?o.call(t):a),e?this:u,d)};for(var v=function(t){t in d||c(d,t,{configurable:!0,get:function(){return l[t]},set:function(a){l[t]=a}})},h=i(l),b=0;h.length>b;)v(h[b++]);u.constructor=d,d.prototype=u,e("2aba")(r,"RegExp",d)}e("7a56")("RegExp")},"65f6":function(t,a,e){"use strict";var r=e("156c"),s=e.n(r);s.a},"8e6e":function(t,a,e){var r=e("5ca1"),s=e("990b"),c=e("6821"),i=e("11e9"),n=e("f1ae");r(r.S,"Object",{getOwnPropertyDescriptors:function(t){var a,e,r=c(t),o=i.f,d=s(r),l={},u=0;while(d.length>u)e=o(r,a=d[u++]),void 0!==e&&n(l,a,e);return l}})},"956e":function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{clas:"wrapper",id:"app"}},[e("div",{staticClass:"vx-row"},[e("div",{staticClass:"w-full mb-10 vx-col"},[e("vx-card",{attrs:{"card-background":"primary","content-color":"#fff"}},[e("p",{staticClass:"mb-3 font-semibold text-center",staticStyle:{"font-size":"1.8em"}},[t._v("Withdrawal Charges "),t.totalWithdrawalCharges.length>1?e("span",[t._v(t._s(t.totalWithdrawalCharges))]):t._e()]),e("div",{staticClass:"flex justify-between"})])],1)]),e("div",{staticClass:"vx-row"},[e("div",{staticClass:"w-full mb-8 vx-col"},[e("div",{staticClass:"card-form"},[e("div",{staticClass:"card-list"},[e("div",{staticClass:"card-item",class:{"-active":t.isCardFlipped}},[e("div",{staticClass:"card-item__side -front"},[e("div",{ref:"focusElement",staticClass:"card-item__focus",class:{"-active":t.focusElementStyle},style:t.focusElementStyle}),e("div",{staticClass:"card-item__cover"},[e("img",{staticClass:"card-item__bg",attrs:{src:"https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/"+t.currentCardBackground+".jpeg"}})]),e("div",{staticClass:"card-item__wrapper"},[e("div",{staticClass:"card-item__top"},[e("img",{staticClass:"card-item__chip",attrs:{src:"https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png"}}),e("div",{staticClass:"card-item__type"},[e("transition",{attrs:{name:"slide-fade-up"}})],1)]),e("label",{ref:"cardNumber",staticClass:"card-item__number",attrs:{for:"cardNumber"}},["amex"===t.getCardType?t._l(t.amexCardMask,(function(a,r){return e("span",{key:r},[e("transition",{attrs:{name:"slide-fade-up"}},[r>4&&r<14&&t.cardNumber.length>r&&""!==a.trim()?e("div",{staticClass:"card-item__numberItem"},[t._v("*")]):t.cardNumber.length>r?e("div",{key:r,staticClass:"card-item__numberItem",class:{"-active":""===a.trim()}},[t._v("\n                        "+t._s(t.cardNumber[r])+"\n                      ")]):e("div",{key:r+1,staticClass:"card-item__numberItem",class:{"-active":""===a.trim()}},[t._v(t._s(a))])])],1)})):t._l(t.otherCardMask,(function(a,r){return e("span",{key:r},[e("transition",{attrs:{name:"slide-fade-up"}},[r>4&&r<15&&t.cardNumber.length>r&&""!==a.trim()?e("div",{staticClass:"card-item__numberItem"},[t._v("*")]):t.cardNumber.length>r?e("div",{key:r,staticClass:"card-item__numberItem",class:{"-active":""===a.trim()}},[t._v("\n                          "+t._s(t.cardNumber[r])+"\n                        ")]):e("div",{key:r+1,staticClass:"card-item__numberItem",class:{"-active":""===a.trim()}},[t._v(t._s(a))])])],1)}))],2),e("div",{staticClass:"card-item__content"},[e("label",{ref:"cardName",staticClass:"card-item__info",attrs:{for:"cardName"}},[e("div",{staticClass:"card-item__holder"},[t._v("Card Holder")]),e("transition",{attrs:{name:"slide-fade-up"}},[t.cardName.length?e("div",{key:"1",staticClass:"card-item__name"},[e("transition-group",{attrs:{name:"slide-fade-right"}},t._l(t.cardName.replace(/\s\s+/g," "),(function(a,r){return r===r?e("span",{key:r+1,staticClass:"card-item__nameItem"},[t._v(t._s(a))]):t._e()})),0)],1):e("div",{key:"2",staticClass:"card-item__name"},[t._v("Full Name")])])],1)])])]),e("div",{staticClass:"card-item__side -back"},[e("div",{staticClass:"card-item__cover"},[e("img",{staticClass:"card-item__bg",attrs:{src:"https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/"+t.currentCardBackground+".jpeg"}})]),e("div",{staticClass:"card-item__band"}),e("div",{staticClass:"card-item__cvv"},[e("div",{staticClass:"card-item__cvvTitle"},[t._v("CVV")]),e("div",{staticClass:"card-item__cvvBand"},t._l(t.cardCvv,(function(a,r){return e("span",{key:r},[t._v("\n                      *\n                    ")])})),0),e("div",{staticClass:"card-item__type"},[t.getCardType?e("img",{staticClass:"card-item__typeImg",attrs:{src:"https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/"+t.getCardType+".png"}}):t._e()])])])])]),e("div",{staticClass:"card-form__inner"},[e("div",{staticClass:"card-input"},[e("label",{staticClass:"card-input__label",attrs:{for:"supportedBanks"}},[t._v("Supported Banks")]),e("v-select",{attrs:{id:"supportedBanks",label:"bank",options:t.allSupportedBanks},model:{value:t.selectedOption,callback:function(a){t.selectedOption=a},expression:"selectedOption"}})],1),e("div",{staticClass:"card-input"},[e("label",{staticClass:"card-input__label",attrs:{for:"accountNumber"}},[t._v("Account Number")]),e("input",{directives:[{name:"mask",rawName:"v-mask",value:t.generateCardNumberMask,expression:"generateCardNumberMask"},{name:"model",rawName:"v-model",value:t.cardNumber,expression:"cardNumber"}],staticClass:"card-input__input",attrs:{type:"text",id:"accountNumber","data-ref":"cardNumber",autocomplete:"off"},domProps:{value:t.cardNumber},on:{keydown:t.validateAccount,keypress:t.validateAccount,keyup:t.validateAccount,focus:t.focusInput,blur:t.blurInput,input:function(a){a.target.composing||(t.cardNumber=a.target.value)}}})]),e("div",{staticClass:"card-input"},[e("label",{staticClass:"card-input__label",attrs:{for:"cardName"}},[t._v("Account Holders Name")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.cardName,expression:"cardName"}],staticClass:"card-input__input",attrs:{type:"text",id:"cardName",disabled:t.accountNameDisable,"data-ref":"cardName",autocomplete:"off"},domProps:{value:t.cardName},on:{mouseover:t.validateAccount,mouseenter:t.validateAccount,focus:t.focusInput,blur:t.blurInput,input:function(a){a.target.composing||(t.cardName=a.target.value)}}})]),e("div",{staticClass:"card-input"},[e("label",{staticClass:"card-input__label",attrs:{for:"amount"}},[t._v("Amount")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],staticClass:"card-input__input",attrs:{type:"text",id:"amount","data-ref":"amount",autocomplete:"off"},domProps:{value:t.amount},on:{focus:t.focusInput,blur:t.blurInput,input:function(a){a.target.composing||(t.amount=a.target.value)}}})]),e("vs-button",{staticClass:"card-form__button",on:{click:t.initiateTransfer}},[t._v("\n            Submit\n          ")])],1)])])])])},s=[],c=(e("8e6e"),e("ac6a"),e("456d"),e("a481"),e("4917"),e("3b2b"),e("ade3")),i=e("2f62"),n=e("4a7a"),o=e.n(n);function d(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?d(Object(e),!0).forEach((function(a){Object(c["a"])(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):d(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}var u={components:{"v-select":o.a},data:function(){return{currentCardBackground:Math.floor(25*Math.random()+1),cardNumber:"",cardMonth:"",cardYear:"",cardCvv:"",minCardYear:(new Date).getFullYear(),amexCardMask:"#### ###### #####",otherCardMask:"### ### ##",cardNumberTemp:"",isCardFlipped:!1,focusElementStyle:null,isInputFocused:!1,selectedOption:"Choose Bank",amount:"",accountNumber:"",cardName:"",accountNameDisable:!1}},mounted:function(){this.cardNumberTemp=this.otherCardMask,document.getElementById("cardNumber").focus()},computed:l(l({},Object(i["c"])({getSupportedBanks:"withdrawal/getSupportedBanks",getWithdrawalCharges:"withdrawal/getWithdrawalCharges"})),{},{totalWithdrawalCharges:function(){return this.getWithdrawalCharges},allSupportedBanks:function(){return this.getSupportedBanks.data},getCardType:function(){var t=this.cardNumber,a=new RegExp("^4");return null!=t.match(a)?"visa":(a=new RegExp("^(34|37)"),null!=t.match(a)?"amex":(a=new RegExp("^5[1-5]"),null!=t.match(a)?"mastercard":(a=new RegExp("^6011"),null!=t.match(a)?"discover":(a=new RegExp("^9792"),null!=t.match(a)?"troy":"visa"))))},generateCardNumberMask:function(){return"amex"===this.getCardType?this.amexCardMask:this.otherCardMask},minCardMonth:function(){return this.cardYear===this.minCardYear?(new Date).getMonth()+1:1}}),watch:{cardYear:function(){this.cardMonth<this.minCardMonth&&(this.cardMonth="")}},methods:l(l({},Object(i["b"])({supportedBanks:"withdrawal/supportedBanks",validateBankCredentials:"withdrawal/validateBankCredentials",initiateCashTransfer:"withdrawal/initiateCashTransfer",withdrawalCharges:"withdrawal/withdrawalCharges"})),{},{initiateTransfer:function(){var t=this,a={account_number:this.cardNumber,bank_code:this.selectedOption.code,account_name:this.cardName,amount:this.amount,currency:"NGN"};this.$vs.loading(),this.initiateCashTransfer(a).then((function(a){t.$vs.loading.close(),console.log(a.data),200==a.status?(t.$vs.notify({title:"Success",text:a.data.message,position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"success"}),t.$router.replace({name:"dashboard-analytics"}).catch((function(t){console.log(t)}))):t.$vs.notify({title:"Error",text:a.data.message,position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"danger"})})).catch((function(a){console.log(a),t.$vs.loading.close(),t.$vs.notify({title:"Error",text:a.response.data.messages.error,position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"danger"})}))},validateAccount:function(){var t=this;if(""==this.cardName&&0==this.accountNameDisable&&10==this.cardNumber.length){var a={code:this.selectedOption.code,accountNumber:this.cardNumber};this.$vs.loading(),this.validateBankCredentials(a).then((function(a){t.$vs.loading.close(),200==a.status?(t.accountNameDisable=!0,t.cardName=a.data.data.account_name,t.$vs.notify({title:"Success",text:"Account Found",position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"success"})):t.$vs.notify({title:"Error",text:a.data.message,position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"danger"})})).catch((function(a){console.log(a),t.$vs.loading.close(),t.$vs.notify({title:"Error",text:a.response.data.messages.error,position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"danger"})}))}},flipCard:function(t){this.isCardFlipped=t},focusInput:function(t){this.isInputFocused=!0;var a=t.target.dataset.ref,e=this.$refs[a];this.focusElementStyle={width:"".concat(e.offsetWidth,"px"),height:"".concat(e.offsetHeight,"px"),transform:"translateX(".concat(e.offsetLeft,"px) translateY(").concat(e.offsetTop,"px)")}},blurInput:function(){var t=this;setTimeout((function(){t.isInputFocused||(t.focusElementStyle=null)}),300),t.isInputFocused=!1}}),created:function(){var t="NGN";this.supportedBanks(t),this.withdrawalCharges(t)}},m=u,p=(e("65f6"),e("2877")),f=Object(p["a"])(m,r,s,!1,null,null,null);a["default"]=f.exports},"990b":function(t,a,e){var r=e("9093"),s=e("2621"),c=e("cb7c"),i=e("7726").Reflect;t.exports=i&&i.ownKeys||function(t){var a=r.f(c(t)),e=s.f;return e?a.concat(e(t)):a}},ade3:function(t,a,e){"use strict";function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}e.d(a,"a",(function(){return r}))},f1ae:function(t,a,e){"use strict";var r=e("86cc"),s=e("4630");t.exports=function(t,a,e){a in t?r.f(t,a,s(0,e)):t[a]=e}}}]);
//# sourceMappingURL=chunk-10a26bbe.b8c9c295.js.map