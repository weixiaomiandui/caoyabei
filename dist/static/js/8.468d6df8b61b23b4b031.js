webpackJsonp([8],{GidG:function(e,t){},YOyO:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s("Dd8w"),a=s.n(r),c=s("2X+S"),i=s("8stH"),o=s("T452"),n=s("6Xyt"),h=s("vhoT"),l=s("XEAW"),u=s("qwAB"),f=s("NYxO"),v=s("F4+m"),y={name:"search",mixins:[v.b,v.c],data:function(){return{hotKeys:[]}},components:{SearchBox:c.a,Suggest:n.a,SearchList:h.a,Confirm:l.a,Scroll:u.a},created:function(){this._getHotKey()},computed:{shortcut:function(){return this.hotKeys.concat(this.searchHistory)}},watch:{query:function(e){var t=this;e||setTimeout(function(){t.$refs.shortcut.refresh()},20)}},methods:a()({playlistHandler:function(e){var t=e.length>0?60:0;this.$refs.shortcutWrapper.style.bottom=t+"px",this.$refs.shortcut.refresh(),this.$refs.searchResult.style.bottom=t+"px",this.$refs.suggest.refresh()},showConfirm:function(){this.$refs.confirm.show()},clearSearch:function(){this.clearSearchHistory()},_getHotKey:function(){var e=this;Object(i.a)().then(function(t){t.code===o.a&&(e.hotKeys=t.data.hotkey.slice(0,10))})}},Object(f.b)(["clearSearchHistory"]))},d={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"search"},[s("div",{staticClass:"search-box-wrapper"},[s("search-box",{ref:"searchBox",on:{query:e.onQueryChange}})],1),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!e.query,expression:"!query"}],ref:"shortcutWrapper",staticClass:"shortcut-wrapper"},[s("scroll",{ref:"shortcut",staticClass:"shortcut",attrs:{data:e.shortcut,refreshDelay:100}},[s("div",[s("div",{staticClass:"hot-key"},[s("h1",{staticClass:"title"},[e._v("热门搜索")]),e._v(" "),s("ul",e._l(e.hotKeys,function(t,r){return s("li",{key:r,staticClass:"item",on:{click:function(s){e.addKey(t.k)}}},[e._v("\n              "+e._s(t.k)+"\n            ")])}))]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.searchHistory.length,expression:"searchHistory.length"}],staticClass:"search-history"},[s("h1",{staticClass:"title"},[s("span",{staticClass:"text"},[e._v("搜索历史")]),e._v(" "),s("span",{staticClass:"clear",on:{click:e.showConfirm}},[s("i",{staticClass:"icon-clear"})])]),e._v(" "),s("search-list",{attrs:{searches:e.searchHistory},on:{delete:e.deleteOneSearch,select:e.addKey}})],1)])])],1),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.query,expression:"query"}],ref:"searchResult",staticClass:"search-result"},[s("suggest",{ref:"suggest",attrs:{query:e.query,showSinger:!0},on:{select:e.saveSearch,listScrollBefore:e.blurInput}})],1),e._v(" "),s("confirm",{ref:"confirm",attrs:{text:"是否清空搜索历史记录",confirmBtnText:"清空"},on:{confirm:e.clearSearch}}),e._v(" "),s("router-view")],1)},staticRenderFns:[]};var m=s("VU/8")(y,d,!1,function(e){s("GidG")},"data-v-6bf24298",null);t.default=m.exports}});
//# sourceMappingURL=8.468d6df8b61b23b4b031.js.map