(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69b2ed2d"],{3292:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"profile-page"}},[s("div",{staticClass:"profile-header"},[s("div",{staticClass:"relative"},[s("div",{staticClass:"rounded-t-lg cover-container"},[t.userData_info.small_image?s("img",{key:"onlineImage",staticClass:"block responsive",staticStyle:{"object-fit":"cover",height:"383px"},attrs:{src:t.userData_info.small_image,alt:"user-profile-cover"}}):s("img",{key:"onlineImage1",staticClass:"block responsive",staticStyle:{"object-fit":"cover",height:"383px"},attrs:{src:t.user_info.cover_img,alt:"user-profile-cover"}})]),s("div",{staticClass:"pointer-events-none profile-img-container"},[s("div",[t.userData_info.small_image?s("vs-avatar",{staticClass:"user-profile-img",attrs:{src:t.userData_info.small_image,size:"85px"}}):s("vs-avatar",{staticClass:"user-profile-img",attrs:{src:t.user_info.profile_img,size:"85px"}})],1),s("div",{staticClass:"flex pointer-events-auto profile-actions"},[s("vs-button",{staticClass:"p-3 mr-4 vs-component vs-button vs-button-primary vs-button-filled includeIcon",attrs:{type:"button",name:"button",size:"small",to:"/profile-view"}},[s("span",{staticClass:"vs-button-backgroundx vs-button--background",staticStyle:{opacity:"1",left:"20px",top:"20px",width:"0px",height:"0px",transition:"width 0.3s ease 0s, height 0.3s ease 0s,"}}),s("i",{staticClass:"vs-icon notranslate icon-scale feather icon-edit null",staticStyle:{order:"0","margin-right":"5px","margin-left":"0px"}}),s("span",{staticClass:"vs-button-text vs-button--text",staticStyle:{"font-size":"1.2em"}},[t._v("View Profile")]),s("span",{staticClass:"vs-button-linex",staticStyle:{top:"auto",bottom:"-2px",left:"50%",transform:"translate(-50%)"}})])],1)])]),s("div",{staticClass:"flex flex-wrap items-center justify-end p-6 profile-header-nav"},[s("div",{staticClass:"block sm:hidden"},[s("feather-icon",{directives:[{name:"show",rawName:"v-show",value:!t.isNavOpen,expression:"!isNavOpen"}],staticClass:"cursor-pointer vx-navbar-toggler",attrs:{icon:"AlignJustifyIcon"},on:{click:function(e){t.isNavOpen=!t.isNavOpen}}}),s("feather-icon",{directives:[{name:"show",rawName:"v-show",value:t.isNavOpen,expression:"isNavOpen"}],staticClass:"cursor-pointer vx-navbar-toggler",attrs:{icon:"XIcon"},on:{click:function(e){t.isNavOpen=!t.isNavOpen}}})],1)])]),s("div",{staticClass:"vx-row"},[s("div",{staticClass:"w-full vx-col lg:w-1/4"},[s("vx-card",{staticClass:"mt-base",attrs:{title:"About"}},[s("template",{slot:"actions"},[s("vs-button",{attrs:{"icon-pack":"feather",radis:"",icon:"icon-edit-2"},on:{click:t.pop}},[t._v("Edit")])],1),s("div",{staticClass:"user-bio"},["null"!==t.userData_info.about?s("p",[t._v("\n            "+t._s(t.userData_info.about)+"\n          ")]):t._e()]),s("div",{staticClass:"mt-5"},[s("h6",[t._v("Default Currency:")]),s("p",[t._v(t._s(t.userData_info.currency))])]),s("div",{staticClass:"mt-5"},[s("h6",[t._v("Joined:")]),s("p",[t._v(t._s(t.userData_info.created_at.date))])]),s("div",{staticClass:"mt-5"},[s("h6",[t._v("Email:")]),s("p",[t._v(t._s(t.userData_info.email))])])],2),s("div",{staticClass:"centerx"},[s("vs-popup",{staticClass:"holamundo",style:t.visibility,attrs:{title:"Update Short Description About Yourself",active:t.popupActivo},on:{"update:active":function(e){t.popupActivo=e}}},[s("p",[s("span",{staticClass:"text-sm text-danger"},[t._v(t._s(t.errors.first("about")))]),s("vs-textarea",{directives:[{name:"validate",rawName:"v-validate",value:"required|max:50",expression:"'required|max:50'"}],attrs:{counter:"200","data-vv-validate-on":"blur",label:"Character Limit: 200",name:"about","label-placeholder":"About Your Self",placeholder:"About Your Self","counter-danger":t.counterDanger},on:{"update:counterDanger":function(e){t.counterDanger=e},"update:counter-danger":function(e){t.counterDanger=e}},model:{value:t.textarea,callback:function(e){t.textarea=e},expression:"textarea"}})],1),s("vs-button",{staticClass:"mt-4",attrs:{color:"primary",disabled:!t.validateForm,"icon-pack":"feather",icon:"icon-edit-2"},on:{click:t.update_aboutInfo}},[t._v("Update")])],1)],1),s("vx-card",{staticClass:"mt-base",attrs:{title:"TOP SELLERS"}},[s("template",{slot:"actions"},[s("feather-icon",{attrs:{icon:"MoreHorizontalIcon"}})],1),s("ul",{staticClass:"friend-suggesions-list"},t._l(t.top_sellers,(function(e,a){return s("li",{key:a,staticClass:"flex items-center mb-4 friend-suggestion"},[s("div",{staticClass:"mr-3"},[s("vs-avatar",{staticClass:"m-0",attrs:{src:e.small_image,size:"35px"}})],1),s("div",{staticClass:"leading-tight"},[s("p",{staticClass:"font-medium"},[s("router-link",{attrs:{to:{name:"user-public-profile",params:{wallet_id:e.wallet_id}}}},[t._v("\n                  "+t._s(e.first_name))])],1),s("span",{staticClass:"text-xs",staticStyle:{"text-transform":"uppercase"}},[t._v(t._s(e.ranking))])]),s("div",{staticClass:"ml-auto cursor-pointer"},[s("vs-button",{attrs:{type:"border",icon:"send",disabled:!1},on:{click:function(s){return t.send_invite(e.wallet_id)}}},[t._v("Invite")])],1)])})),0),s("template",{slot:"footer"},[s("vs-button",{staticClass:"w-full",attrs:{"icon-pack":"feather",icon:"icon-plus"}},[t._v("Load More")])],1)],2)],1),null!=t.allReviews?s("div",{staticClass:"w-full vx-col lg:w-1/2"},[s("vx-card",{staticClass:"mt-base",attrs:{title:"All Reviews"}},t._l(t.allReviews,(function(e,a){return s("div",{key:a,staticClass:"mb-10"},[s("div",{staticClass:"flex justify-between mb-4 post-header"},[s("div",{staticClass:"flex items-center"},[s("div",[e.profile_image?s("vs-avatar",{staticClass:"m-0",attrs:{src:e.profile_image,size:"45px"}}):s("vs-avatar",{staticClass:"m-0",attrs:{size:"45px"}})],1),s("div",{staticClass:"ml-4"},[s("h6",[t._v(t._s(e.clients_name))]),s("small",[t._v(t._s(e.date))])])]),s("div",{staticClass:"flex"},[s("star-rating",{attrs:{"star-size":20,"read-only":!0,rating:parseFloat(e.star),"border-width":1,"border-color":"#d8d8d8","rounded-corners":!0,"star-points":[23,2,14,17,0,19,10,34,7,50,23,43,38,50,36,34,46,19,31,17]}})],1)]),s("div",{staticClass:"post-content"},[s("p",[t._v(t._s(e.message))])]),s("vs-divider",{staticClass:"mb-3",attrs:{color:"primary"}})],1)})),0),null!=t.userReviews?s("div",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:t.handleScrolledToBottom,expression:"handleScrolledToBottom"}]}):t._e()],1):s("div",{staticClass:"w-full vx-col lg:w-1/2"},[s("vx-card",{staticClass:"mt-base",attrs:{title:"No Reviews Available","title-color":"#fff","card-background":"primary","content-color":"#fff"}},[s("div",[s("div",{staticClass:"flex justify-between mb-4 post-header"},[s("div",{staticClass:"flex items-center"}),s("div",{staticClass:"flex"})]),s("div",{staticClass:"h-10 p-5 m-5 post-content"},[s("p",[t._v("You Do not have any reviews Yet")])])])])],1),s("div",{staticClass:"w-full vx-col lg:w-1/4"},[s("vx-card",{staticClass:"mt-base",attrs:{title:"QR CODE"}},[s("img",{attrs:{src:t.userData_info.qr}}),s("div",{staticClass:"mt-5"},[s("h6",[t._v("WALLET ID:")]),[s("vs-input",{staticClass:"w-full mt-3 inine-flex",attrs:{disabled:""},model:{value:t.wallet_id,callback:function(e){t.wallet_id=e},expression:"wallet_id"}}),s("vs-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.wallet_id,expression:"wallet_id",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onError,expression:"onError",arg:"error"}],staticClass:"mt-2",staticStyle:{"text-align":"center",width:"100%"},attrs:{color:"primary",size:"large",icon:"content_copy"}},[t._v("Copy Wallet ID!")])]],2)])],1)])])},i=[],o=(s("8e6e"),s("ac6a"),s("456d"),s("2909")),r=(s("96cf"),s("1da1")),n=(s("6762"),s("2fdb"),s("28a5"),s("ade3")),c=s("bc3a"),l=s.n(c),u=s("d6d3"),p=(s("fda2"),s("c1da")),v=s.n(p),d=s("2f62");function f(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function m(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?f(Object(s),!0).forEach((function(e){Object(n["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):f(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var g={data:function(){return{textarea:"",visibility:"",counterDanger:!1,popupActivo:!1,isNavOpen:!1,wasSidebarOpen:null,user_info:{profile_img:s("2a69"),cover_img:s("e057")},allReviews:[],page:1,lastPage:1}},computed:m(m({},Object(d["c"])({userData:"users/getUserData",top_sellers:"users/getTopSellers"})),{},{validateForm:function(){return!this.errors.any()&&""!=this.textarea},userData_info:function(){return this.userData},wallet_id:function(){return this.userData_info.wallet_id},userReviews:function(){return this.userData_info.reviews},mediaType:function(){var t=this;return function(e){if(e.img){var s=e.img.split(".").pop();if(t.mediaExtensions.img.includes(s))return"image"}else if(e.sources&&e.poster)return"video"}},playerOptions:function(){return function(t){return{height:"360",fluid:!0,autoplay:!1,muted:!0,language:"en",playbackRates:[.7,1,1.5,2],sources:t.sources,poster:t.poster}}}}),methods:m(m({},Object(d["b"])({activeUserInfo:"users/activeUserInfo",updateAboutInfo:"users/updateAboutInfo",topSellers:"users/topSellers",sendInvite:"users/sendInvite"})),{},{fetch:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l.a.get("https://payluk.com/backend/reviews?page=".concat(this.page));case 2:e=t.sent,null!=e.data.reviews?((s=this.allReviews).push.apply(s,Object(o["a"])(e.data.reviews)),this.lastPage=e.data.pagers[0].meta.last_page):this.allReviews=null;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),handleScrolledToBottom:function(t){t&&(this.page>=this.lastPage||(this.page++,this.fetch()))},pop:function(){this.popupActivo=!0,this.visibility=""},send_invite:function(t){var e=this;this.$vs.loading(),this.sendInvite(t).then((function(t){e.$vs.loading.close(),711==t.data.errorcode?e.$vs.notify({title:"Info",text:t.data.message,position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"danger"}):712==t.data.errorcode?e.$vs.notify({title:"Info",text:t.data.message,position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"success"}):704==t.data.errorcode?e.$vs.notify({title:"Info",text:t.data.message,position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"danger"}):e.$vs.notify({title:"Success",text:t.data.message,position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"success"})})).catch((function(t){console.log(t),e.$vs.loading.close(),e.$vs.notify({title:"Error",text:t.response.data.message,position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"danger"})}))},update_aboutInfo:function(){var t=this;this.$vs.loading(),this.updateAboutInfo(this.textarea).then((function(e){t.$vs.loading.close(),t.$vs.notify({title:"Success",text:e.data.message,position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"success"}),t.userData_info.about=t.textarea,t.visibility="display:none"})).catch((function(e){t.$vs.loading.close(),t.$vs.notify({title:"Error",text:e.response.data.message,position:"top-right",iconPack:"feather",icon:"icon-alert-circle",color:"danger"})}))},onCopy:function(){this.$vs.notify({title:"Success!",text:"Wallet ID copied successfully.",color:"success",iconPack:"feather",position:"top-center",icon:"icon-check-circle"})},onError:function(){this.$vs.notify({title:"Failed!",text:"Error in copying text.",color:"danger",iconPack:"feather",position:"top-center",icon:"icon-alert-circle"})},loadContent:function(){var t=this;this.$vs.loading({background:this.backgroundLoading,color:this.colorLoading,container:"#button-load-more-posts",scale:.45}),setTimeout((function(){t.$vs.loading.close("#button-load-more-posts > .con-vs-loading")}),3e3)}}),created:function(){this.activeUserInfo(),this.topSellers()},components:{videoPlayer:u["videoPlayer"],StarRating:v.a},mounted:function(){this.wasSidebarOpen=this.$store.state.reduceButton,this.$store.commit("TOGGLE_REDUCE_BUTTON",!0),this.fetch()},beforeDestroy:function(){this.wasSidebarOpen||this.$store.commit("TOGGLE_REDUCE_BUTTON",!1)}},h=g,b=(s("4c0c"),s("2877")),_=Object(b["a"])(h,a,i,!1,null,null,null);e["default"]=_.exports},"4c0c":function(t,e,s){"use strict";var a=s("c59e"),i=s.n(a);i.a},c59e:function(t,e,s){}}]);
//# sourceMappingURL=chunk-69b2ed2d.35b314c9.js.map