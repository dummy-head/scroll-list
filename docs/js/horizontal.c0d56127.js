(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["horizontal"],{a0c6:function(t,e,a){"use strict";var i=a("baec"),n=a.n(i);n.a},a2ab:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"example"},[a("github-corner"),a("introduction",{attrs:{description:"Set <code>direction</code> as <code>horizontal</code>, and also can use <code>wrap-class</code>, <code>item-class</code> to help you layout items in horizontal."}}),a("div",{staticClass:"example-content"},[a("tab",{on:{"tab-change":t.onTabChange}}),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowView,expression:"isShowView"}]},[a("virtual-list",{staticClass:"list-horizontal scroll-touch",attrs:{"data-key":"id","data-sources":t.items,"data-component":t.itemComponent,"estimate-size":110,direction:"horizontal","wrap-class":"wrapper","item-class":"list-item-horizontal"}})],1),a("codeblock",{directives:[{name:"show",rawName:"v-show",value:!t.isShowView,expression:"!isShowView"}]})],1)],1)},n=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"item-inner",style:{width:t.source.size+"px"}},[a("div",{staticClass:"index"},[t._v("# "+t._s(t.source.index))]),a("div",{staticClass:"size"},[t._v(t._s(t.source.size))])])},o=[],c={name:"horizontal-item",props:{source:{type:Object,default:function(){return{}}}}},r=c,l=(a("a0c6"),a("2877")),d=Object(l["a"])(r,s,o,!1,null,"3248155a",null),u=d.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.html?a("code-high-light",{attrs:{type:"html",code:t.html}}):t._e(),t.js?a("code-high-light",{attrs:{type:"js",code:t.js}}):t._e()],1)},m=[],p='\n<virtual-list class="list-horizontal"\n  :size="110" // just assign a estimate value.\n  :keeps="30"\n  :direction="\'horizontal\'" // make scroll direction in horizontal.\n  :wrap-class="\'wrapper\'"\n  :item-class="\'list-item-horizontal\'"\n  :data-key="\'id\'"\n  :data-sources="items"\n  :data-component="itemComponent"\n/>\n',w="",v={name:"horizontal-code",data:function(){return{html:p,js:w}}},f=v,b=Object(l["a"])(f,h,m,!1,null,null,null),z=b.exports,_=a("adf9"),x=a("c57d"),C=a("b95e"),g=1e4,j=[60,80,100,150,180],k=[],y=g;while(y--){var S=g-y;k.push({index:S,id:Object(x["a"])(S),size:_["Random"].pick(j)})}var V={name:"horizontal",components:{codeblock:z},data:function(){return{items:k,itemComponent:u,isShowView:C["a"]===C["b"].VIEW}},methods:{onTabChange:function(t){this.isShowView=t===C["b"].VIEW}}},E=V,O=(a("f597"),Object(l["a"])(E,i,n,!1,null,null,null));e["default"]=O.exports},baec:function(t,e,a){},c57d:function(t,e,a){"use strict";a("99af"),a("d3b7"),a("25f0");e["a"]=function(t){return"".concat(t,"$").concat(Math.random().toString(16).substr(9))}},ca79:function(t,e,a){},f597:function(t,e,a){"use strict";var i=a("ca79"),n=a.n(i);n.a}}]);
//# sourceMappingURL=horizontal.c0d56127.js.map