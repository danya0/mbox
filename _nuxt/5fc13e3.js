(window.webpackJsonp=window.webpackJsonp||[]).push([[33,8,9,21],{253:function(t,e,r){var content=r(260);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("fed13f2e",content,!0,{sourceMap:!1})},254:function(t,e,r){var content=r(262);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("1b0bd7e4",content,!0,{sourceMap:!1})},255:function(t,e,r){"use strict";r.r(e);var n=r(256),d={emits:["click-card"],props:{title:{type:String,require:!0},image:{type:String,require:!0},noTitle:{type:Boolean,require:!1,default:!1}},components:{AppTrendingElement:n.default}},l=(r(261),r(7)),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card",on:{click:function(e){return t.$emit("click-card")}}},[r("app-trending-element",{attrs:{image:t.image,title:t.title}}),t._v(" "),t.noTitle?t._e():r("p",{staticClass:"card__title"},[t._v(t._s(t.title))])],1)}),[],!1,null,null,null);e.default=component.exports},256:function(t,e,r){"use strict";r.r(e);var n={props:{title:{require:!0,type:String},image:{require:!0,type:String}},data:function(){return{newImage:'url("'.concat(this.image,'")')}}},d=(r(259),r(7)),component=Object(d.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrap"},[r("div",{staticClass:"trending-element",style:{backgroundImage:t.newImage},attrs:{title:t.title}})])}),[],!1,null,"88ca0252",null);e.default=component.exports},259:function(t,e,r){"use strict";r(253)},260:function(t,e,r){var n=r(17)(!1);n.push([t.i,"@media(max-width:780px){.tablet-hidden[data-v-88ca0252]{display:none!important}}@media(max-width:780px){.tablet-show-bl[data-v-88ca0252]{display:block!important}}@media(max-width:780px){.tablet-show-fx[data-v-88ca0252]{display:flex!important}}.slick-disabled[data-v-88ca0252]{display:none!important}@media(max-width:430px){.slick-list[data-v-88ca0252]{width:85%!important;margin:0 auto!important}}.slick-next[data-v-88ca0252]{right:-20px!important}@media(max-width:430px){.slick-next[data-v-88ca0252]{right:0!important}}.slick-prev[data-v-88ca0252]{left:-20px!important}@media(max-width:430px){.slick-prev[data-v-88ca0252]{left:0!important}}.slick-next[data-v-88ca0252],.slick-prev[data-v-88ca0252]{z-index:1!important}.wrap[data-v-88ca0252]{padding:20px 0;display:flex;justify-content:center;align-items:center}.trending-element[data-v-88ca0252]{cursor:pointer;border-radius:20px;height:310px;width:206px;margin:0 auto;transition:box-shadow .3s;background-size:cover;background-position:50%}.trending-element[data-v-88ca0252]:hover{box-shadow:0 0 25px -2px #2cb0f9}",""]),t.exports=n},261:function(t,e,r){"use strict";r(254)},262:function(t,e,r){var n=r(17)(!1);n.push([t.i,"@media(max-width:780px){.tablet-hidden{display:none!important}}@media(max-width:780px){.tablet-show-bl{display:block!important}}@media(max-width:780px){.tablet-show-fx{display:flex!important}}.slick-disabled{display:none!important}@media(max-width:430px){.slick-list{width:85%!important;margin:0 auto!important}}.slick-next{right:-20px!important}@media(max-width:430px){.slick-next{right:0!important}}.slick-prev{left:-20px!important}@media(max-width:430px){.slick-prev{left:0!important}}.slick-next,.slick-prev{z-index:1!important}.card{cursor:pointer}.card__title{text-align:center;font-size:20px}.card:hover .trending-element{box-shadow:0 0 25px -2px #2cb0f9}",""]),t.exports=n},264:function(t,e,r){var content=r(273);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("0f3c9bd4",content,!0,{sourceMap:!1})},266:function(t,e,r){"use strict";r.r(e);r(91);var n=r(255),d={methods:{goToRoute:function(t,e){this.$router.push({path:"/".concat("string"==typeof this.place?this.place:this.place[e],"/").concat(t)})}},props:{cardArray:{type:Array,require:!0},place:{type:[String,Array],require:!0}},components:{AppCard:n.default}},l=(r(272),r(7)),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card-place"},t._l(t.cardArray,(function(e,n){return t.cardArray.length?r("app-card",{key:e.title+Math.random(),attrs:{image:e.image,title:e.title},on:{"click-card":function(r){return t.goToRoute(e.id,n)}}}):r("h2",[t._v("The list is empty")])})),1)}),[],!1,null,"6293fd6a",null);e.default=component.exports;installComponents(component,{AppCard:r(255).default})},272:function(t,e,r){"use strict";r(264)},273:function(t,e,r){var n=r(17)(!1);n.push([t.i,"@media(max-width:780px){.tablet-hidden[data-v-6293fd6a]{display:none!important}}@media(max-width:780px){.tablet-show-bl[data-v-6293fd6a]{display:block!important}}@media(max-width:780px){.tablet-show-fx[data-v-6293fd6a]{display:flex!important}}.slick-disabled[data-v-6293fd6a]{display:none!important}@media(max-width:430px){.slick-list[data-v-6293fd6a]{width:85%!important;margin:0 auto!important}}.slick-next[data-v-6293fd6a]{right:-20px!important}@media(max-width:430px){.slick-next[data-v-6293fd6a]{right:0!important}}.slick-prev[data-v-6293fd6a]{left:-20px!important}@media(max-width:430px){.slick-prev[data-v-6293fd6a]{left:0!important}}.slick-next[data-v-6293fd6a],.slick-prev[data-v-6293fd6a]{z-index:1!important}.card-place[data-v-6293fd6a]{width:100%;display:flex;flex-wrap:wrap}.card-place>div[data-v-6293fd6a]{width:20%;padding:25px}@media(max-width:1030px){.card-place>div[data-v-6293fd6a]{width:33.333%}}@media(max-width:780px){.card-place>div[data-v-6293fd6a]{width:50%}}@media(max-width:430px){.card-place>div[data-v-6293fd6a]{width:100%}}",""]),t.exports=n},365:function(t,e,r){"use strict";r.r(e);r(28),r(19),r(29),r(36),r(24),r(37);var n=r(10),d=r(266),l=r(15);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var o={computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.c)("library",["getTvShows"])),components:{AppCardsPlace:d.default}},m=r(7),component=Object(m.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page with-header"},[r("div",{staticClass:"container"},[r("app-cards-place",{attrs:{place:"tv","card-array":t.getTvShows}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppCardsPlace:r(266).default})}}]);