webpackJsonp([5],{BRgg:function(t,e,s){"use strict";e.b=function(){var t=n()({},o.b,{uin:0,needNewCode:1,platform:"h5"});return Object(a.a)("https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg",t,o.c)},e.a=function(t){var e=n()({},o.b,{topid:t,needNewCode:1,uin:0,tpl:3,page:"detail",type:"top",platform:"h5"});return Object(a.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg",e,o.c)};var i=s("woOf"),n=s.n(i),a=s("Gak4"),o=s("T452")},Kjo5:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("Dd8w"),n=s.n(i),a=s("qwAB"),o=s("y/jF"),c=s("BRgg"),r=s("T452"),l=s("F4+m"),p=s("NYxO"),u={name:"rank",mixins:[l.b],data:function(){return{topList:[]}},created:function(){this._getTopList()},methods:n()({selectItem:function(t){this.setTop(t),this.$router.push("/rank/"+t.id)},playlistHandler:function(t){this.$refs.topList.$el.style.height="";var e=t.length>0?60:0,s=window.getComputedStyle(this.$refs.topList.$el).height;this.$refs.topList.$el.style.height=parseFloat(s)-e+"px",this.$refs.topList.refresh()},_getTopList:function(){var t=this;Object(c.b)().then(function(e){e.code===r.a&&(t.topList=e.data.topList)})}},Object(p.d)({setTop:"SET_TOP"})),components:{Loading:o.a,Scroll:a.a}},d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"rank"},[s("scroll",{ref:"topList",staticClass:"toplist",attrs:{data:t.topList}},[s("ul",t._l(t.topList,function(e,i){return s("li",{key:i,staticClass:"item",on:{click:function(s){t.selectItem(e)}}},[s("div",{staticClass:"icon"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.picUrl,expression:"list.picUrl"}],attrs:{width:"100",height:"100"}})]),t._v(" "),s("ul",{staticClass:"songlist"},t._l(e.songList,function(e,i){return s("li",{key:i,staticClass:"song"},[s("span",[t._v(t._s(i+1))]),t._v(" "),s("span",[t._v(t._s(e.songname)+" -- "+t._s(e.singername))])])}))])})),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.topList.length,expression:"!topList.length"}],staticClass:"loading-container"},[s("loading")],1)]),t._v(" "),s("router-view")],1)},staticRenderFns:[]};var f=s("VU/8")(u,d,!1,function(t){s("LGs9")},"data-v-1db63b94",null);e.default=f.exports},LGs9:function(t,e){}});
//# sourceMappingURL=5.f3b91fb0f40bd3ae09cf.js.map