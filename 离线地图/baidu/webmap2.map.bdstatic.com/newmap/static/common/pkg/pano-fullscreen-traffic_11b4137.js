define("common:widget/pano/model/NavRoute.js",function(t){var n=t("common:widget/pano/base/service.js"),e=t("common:widget/pano/base/util.js"),r=function(t){var n={version:3,sn:t.start,strategy:t.strategy,en:t.end,b:t.bound,newmap:1,qt:"nav",strategy:t.strategy,sc:t.sc,c:t.currentCity,et:0,ie:"utf-8"};return n},a=function(t,n){this.fetch(t,n)};return baidu.lang.inherits(a,baidu.lang.Class),T.object.extend(a.prototype,{fetch:function(t,a){var s=n.getNavSteps(t).then(function(t){return e.each(t.content.steps,function(t){t.src=t.pid?e.getImage3DUrl(a,t.pid,t.dir,10,196,100):""}),t}),o=r(t),i=n.getNavSearch(o).then(function(t){try{var n=t.content.routes[0].legs[0].steps,r=[];e.each(n,function(t){var n=e.parse2Geo(t.path),a=n.points.split(";");e.each(a,function(t){var n=t.split(","),e=new BMap.Point(n[0],n[1]);r.push(e)})}),t.points=r}catch(a){throw t.points=[],a}finally{return t}}),u=this;T.when(s,i).then(function(t,n){u._routeData=t.content,u._navInfo=n,u.fire("ready")})},getSteps:function(){return this._routeData?this._routeData.steps:void 0},getPoints:function(){return this._navInfo?this._navInfo.points:void 0},getStart:function(){var t=this._navInfo,n=T.isArray(t.result.start)?t.result.start[0]:t.result.start;return n},getEnd:function(){var t=this._navInfo,n=T.isArray(t.result.end)?t.result.end[0]:t.result.end;return n},getInfo:function(){return this._navInfo},getRouteData:function(){return this._routeData}}),a});
;define("common:widget/pano/model/BusRoute.js",function(e){var t=e("common:widget/pano/base/service.js"),n=e("common:widget/pano/base/util.js"),a="[0,2,4,7,5,8,9,10,11]",r={transfer:"乘坐#line#,#other#在#offName#下车#offExit#",fill:function(e,t){return e.replace(/#([^#]*)#/g,function(e,n){return t[n]?t[n]:""})}},i=function(e,t){var e=n.parse2Geo(e),a=e.points.split(";");return a=t?n.each(a,function(e){var t=e.split(",");return new BMap.Point(t[0],t[1])},!0):n.each(a,function(e){var t=e.split(",");return{x:t[0],y:t[1]}},!0),1===a.length?a[0]:a},o=function(e){return 10>e?e="10米":e>10&&1e3>=e?e=10*(e/10).toFixed(0)+"米":e>1e3&&(e=(e/1e3).toFixed(1)+"公里"),e},s=function(e){var t=e.substring(e.length-1);return"站"==t?e:e+"站"},u=function(e){return e.indexOf("地铁")>-1&&e.indexOf("号线")>-1?(e=e.indexOf("环(")>-1?e.substr(0,e.indexOf("环("))+"环)":e,e=e.indexOf("环")>-1?e:e.replace(/\(.*?-(.*?)\)/,"($1")+"方向)"):(e=e.indexOf("(")>-1?e.substr(0,e.indexOf("(")):e,/^\+?[1-9][0-9]*$/.test(e)&&(e+="路")),e},c=function(e,t,a,c){var f={transfer:[]},d=e.lines,p=e.stops[0].length?e.stops[0]:e.stops,h=null,l=p[0],m=l.walk;if(m&&m.distance>0){{o(m.distance)}h={point:i(l.getOn.geo),text:"步行至"+s(l.getOn.name),name:s(l.getOn.name),distance:o(l.walk.distance)}}var g=null,x=p[p.length-1],v=x.walk;if(v&&v.distance>0){{o(v.distance)}g={uid:c.uid,point:i(x.getOn.geo),text:"步行至"+c.text,name:c.text,distance:o(x.walk.distance)}}return n.each(d,function(e){var t={steps:[],geos:[]};n.each(e,function(a,c){if("object"==typeof a){var f=u(a.name),h=a.uid;a.geo&&t.geos.push(a.geo);var l={lineName:f,other:[],point:[],poiType:1==a.type?"010A03":"010A05"};n.each(d,function(e){if(e[c]&&e[c].uid!==h){var t=u(e[c].name);l.other.push(t)}});{var m=p[c+1],g=m.getOff;m.getOn}l.point=i(g.geo);var x=s(g.name),v=m.walk,y="";v&&v.distance>0&&(y=v.sname?"("+T.trim(v.sname)+")":"");var O=p[c];c>0&&(O.getOff.name!=O.getOn.name||O.walk.distance>=25)&&t.steps.push(1==a.type&&e[c-1]&&1==e[c-1].type?{text:"站内换乘"+f,name:O.getOn.name,distance:o(v.distance),point:i(O.getOn.geo),poiType:1==a.type?"010A03":"010A05"}:{point:i(O.getOn.geo),text:"步行至"+s(O.getOn.name),name:s(O.getOn.name),distance:o(O.walk.distance),poiType:1==a.type?"010A03":"010A05"});var w=l.other.length>0?"(或 "+l.other.join(",")+"),":"";l.text=r.fill(r.transfer,{line:f,other:w,offName:x,offExit:y}),l.name=x,t.steps.push(l)}}),h&&(h.poiType=1==e[0].type?"010A03":"010A05",t.steps.unshift(h)),t.steps.unshift(a),g&&t.steps.push(g),t.steps.push(c),f.transfer.push(t)}),f},f=function(e){var t={},a=n.each([e.result.start,e.result.end],function(e,t){var n=T.isArray(e)?e[0]:e,a=n.pt.split(",");return{wd:n.wd,name:n.wd,poiType:0==t?"FF0101":"FF0102",type:t,uid:n.uid||"",text:n.wd,point:{x:a[0],y:a[1]}}},!0);return t.start=a[0],t.end=a[1],t.schemes=n.each(e.content,function(e,n){var a=c(e,n,t.start,t.end);return a},!0),t},d=function(){this._json={},this._data={},"BusTrans"http://webmap2.map.bdstatic.com/newmap/static/common/pkg/==currentComponent.name?(this._defaultSchemeIndex=currentComponent.schemeIndex,this._defaultTransferIndex=currentComponent.routeIndex[this._defaultSchemeIndex][0]):(this._defaultSchemeIndex=0,this._defaultTransferIndex=0)};return baidu.lang.inherits(d,baidu.lang.Class),T.object.extend(d.prototype,{setDefaultScheme:function(e,t){this._defaultSchemeIndex=e||0,this._defaultTransferIndex=t||0},fetch:function(e){var r=this;if(!e&&(e="BusTrans"http://webmap2.map.bdstatic.com/newmap/static/common/pkg/==currentComponent.name?currentComponent.modelQuery:null,!e))return null;var i=window.location.search;if(i&&i.indexOf("shareurl=1")>-1&&currentComponent.cinfo&&void 0===currentComponent.cinfo.trafType)try{i=n.parseUrlParam(i);var o=i.s.replace(/%u[0-9a-zA-Z]{4}/gi,function(e){return encodeURIComponent(unescape(e))}),s=decodeURIComponent(o).split("&");n.each(s,function(t){return"f"==t.split("=")[0]?(e+="&f="+a,!0):void 0})}catch(u){}return t.getComponentResultByQuery(e).then(function(e){r._json=e,r._data=f(e)})},getSchemeTransfer:function(e,a){e=e||this._defaultSchemeIndex,a=a||this._defaultTransferIndex;var r=this._data.schemes[e].transfer[a];if(r.getPanoPoints)return r;var i=n.each(r.steps,function(e){return e.uid||[e.point.x,e.point.y].join(",")},!0);return t.getPanoPoints(i,"bus").then(function(e){return n.each(e.content,function(e,t){if(e){var n=r.steps[t];for(var a in e){var i=a.toLowerCase();"name"!==i&&(n[i]=e[a])}var o=n.point;o&&(n.dir||(n.dir=90-180*Math.atan2(o.y-n.panoy,o.x-n.panox)/Math.PI),n.dir<0&&(n.dir+=360))}}),r.getPanoPoints=!0,r})},getStart:function(){return this._data.start},getEnd:function(){return this._data.end},getPoints:function(e,t){e=e||0,t=t||0;var a=this._data.schemes[e].transfer[t];if(a.points)return a.points;var r=[];return n.each(a.geos,function(e){var t=i(e,!0);r=r.concat(t)}),a.points=r,a.points}}),d});
;define("common:widget/pano/module/TrafficModule/BusModule/BusModule.js",function(require,exports,module){var Animation=require("common:widget/ui/Animation/Animation.js"),TableView=require("common:widget/pano/component/TableView/TableView.js"),ModuleClass=require("common:widget/pano/base/ModuleClass.js"),util=require("common:widget/pano/base/util.js"),BusRoute=require("common:widget/pano/model/BusRoute.js"),service=require("common:widget/pano/base/service.js");require.loadCss({content:".bus-header-icon{background-image:url(http://webmap0.map.bdstatic.com/newmap/static/common/images/pano_whole/bus-icon_9d6dfc3.png);_background-image:url(http://webmap1.map.bdstatic.com/newmap/static/common/images/pano_whole/bus-icon-8_42c212b.png)}#bus-tableview-container .traffic-image{height:105px}#bus-tableview-container .traffic-image-desc-wapper{height:105px}#bus-tableview-container .tableview-selected-border{height:101px}"});var ITEM_TEMPLATE=[function(_template_object){var _template_fun_array=[],fn=function(__data__){var _template_varName="";for(var name in __data__)_template_varName+="var "+name+'=__data__["'+name+'"];';eval(_template_varName),_template_fun_array.push('<div class="traffic-image-item">    <div class="traffic-image-wapper">        '),src?_template_fun_array.push('            <img class="traffic-image" src="',"undefined"==typeof src?"":src,'" onerror="this.src=&#39;',"undefined"==typeof error_src?"":error_src,'&#39;" />        '):_template_fun_array.push('            <img class="traffic-image" src="',"undefined"==typeof error_src?"":error_src,'" />        '),_template_fun_array.push('        <div class="traffic-image-desc-wapper">            <div class="traffic-image-desc-bg"></div>            <div class="traffic-image-desc">                <span class="traffic-image-desc-index">',"undefined"==typeof index?"":index,' ) </span>                <div class="traffic-image-desc-text">',"undefined"==typeof desc?"":desc,"</div>            </div>        </div>    </div></div>"),_template_varName=null}(_template_object);return fn=null,_template_fun_array.join("")}][0],IMG_ERROR_URL="../../../../../webmap0.map.bdstatic.com/newmap/static/common/images/pano_whole/img_error_8d3eb72.png"/*tpa=http://webmap0.map.bdstatic.com/newmap/static/common/images/pano_whole/img_error_8d3eb72.png*/,OVERVIEW_SIZE=315,SHOW_DESC_DELAY=400,SHOW_DESC_DURATION=150,privateMethod=function(){function e(){clearTimeout(a)}function t(e){var t=T(e).find(".traffic-image-desc-wapper"),i=t.attr("status");i>0||(-1==i&&r&&r.stop(),t.css("top","100%"),t.css("display","block"),t.attr("status","1"),n=new Animation.Animation,n.build({fps:60,transition:Animation.Transitions.easeOutQuad,duration:SHOW_DESC_DURATION,render:function(e){try{t.css("top",100*(1-e)+"%")}catch(i){"undefined"!=typeof alog&&alog("http://webmap2.map.bdstatic.com/newmap/static/common/pkg/exception.fire","catch",{msg:i.message||i.description,path:"common:widget/pano/module/TrafficModule/BusModule/BusModule.js",ln:55})}},finish:function(){t.attr("status","2")}}))}function i(e){var t=T(e).find(".traffic-image-desc-wapper"),i=t.attr("status");if(!(0>i)){if(1==i)return n&&n.stop(),t.css("top","100%"),void t.attr("status","-2");r=new Animation.Animation,t.attr("status","-1"),r.build({fps:60,transition:Animation.Transitions.easeOutQuad,duration:SHOW_DESC_DURATION,render:function(e){try{t.css("top",100*e+"%")}catch(i){"undefined"!=typeof alog&&alog("http://webmap2.map.bdstatic.com/newmap/static/common/pkg/exception.fire","catch",{msg:i.message||i.description,path:"common:widget/pano/module/TrafficModule/BusModule/BusModule.js",ln:83})}},finish:function(){t.attr("status","-2")}})}}var a=0,n=null,r=null,s={renderStepList:function(e){try{var t=e.steps,i=this.tableView,a=t.length;util.each(t,function(e,n){var r={index:n+1,src:"",error_src:IMG_ERROR_URL,desc:e.text};if(r.src=e.pid?util.getImage3DUrl(null,e.pid,e.dir,10,196,105):IMG_ERROR_URL,n!=a-1||e.pid!=t[a-2].pid){var s=ITEM_TEMPLATE(r);i.addItemContent(s)}}),i.resize()}catch(n){"undefined"!=typeof alog&&alog("http://webmap2.map.bdstatic.com/newmap/static/common/pkg/exception.fire","catch",{msg:n.message||n.description,path:"common:widget/pano/module/TrafficModule/BusModule/BusModule.js",ln:116})}},mouseEnterHandler:function(i,n){var r=this.tableView.getSelectIndex();r!==n&&(e(),a=setTimeout(function(){t(i)},SHOW_DESC_DELAY)),this.tableView.fitImage(n);var s=this.route.getSchemeTransfer(),o=s.steps,d=o[n].point;d.x&&d.y&&this.dispatchEvent("show_position",{data:{x:d.x,y:d.y}})},mouseLeaveHandler:function(t,a){var n=this.tableView.getSelectIndex();n!==a&&(e(),i(t)),this.dispatchEvent("hide_position")},clickHandler:function(a){var n=this.tableView.getSelectIndex();if(a!==n){var r=this.tableView.getSelectItem();r&&(e(),i(r)),this.tableView.setSelectIndex(a),r=this.tableView.getSelectItem(),t(r);var s=this.route.getSchemeTransfer(),o=s.steps,d=o[a];this.dispatchEvent("hide_position"),this.dispatchEvent("pano_changed",{data:{source:this.getName(),panoHeading:d.dir,panoId:d.pid}})}},renderHeader:function(e,t,i){try{var a=t.wd+" > "+i.wd,n=document.createElement("div");n.className="traffic-header-bar",n.innerHTML=['<p class="traffic-header-wapper">','<i class="traffic-header-icon bus-header-icon"></i>','<span class="traffic-header-text" title="'+a+'">'+a+"</span>","</p>"].join(""),e.appendChild(n)}catch(r){"undefined"!=typeof alog&&alog("http://webmap2.map.bdstatic.com/newmap/static/common/pkg/exception.fire","catch",{msg:r.message||r.description,path:"common:widget/pano/module/TrafficModule/BusModule/BusModule.js",ln:192})}},addMarkers:function(){var e=this.route.getSchemeTransfer(),t=e.steps,i=t.length,a=util.each(t,function(e,a){if(1==a&&e.pid==t[0].pid||a==i-2&&e.pid==t[i-1].pid)return void 0;var n={markerId:util.getUniqueId("MARKER_ST"),addr:e.name,catalog:e.poiType,heading:e.dir,name:e.name,pid:e.pid,pitch:0,poiuid:e.uid||"",px:1*e.panox,py:1*e.panoy,rank:0,x:1*(e.x||e.point.x),y:1*(e.y||e.point.y)};return n},!0);this.dispatchEvent("add_markers",a)}};return s}(),BusModule=ModuleClass.extend("BusModule",{initialize:function(e,t,i){try{if(!(window.currentComponent&&"BusTrans"===currentComponent.name||this.$shareParam))return;this.enterPanoData=i,this.headerContainer=t,this.tableView=e,e.addEventListener("mouseenter",function(e,t){privateMethod.mouseEnterHandler.call(s,t.elem,t.index)}),e.addEventListener("mouseleave",function(e,t){privateMethod.mouseLeaveHandler.call(s,t.elem,t.index)}),e.addEventListener("click",function(e,t){privateMethod.clickHandler.call(s,t.index),addStat(STAT_CODE.STAT_PANORAMA,{item:"busalbum-click"})});var a,n=void 0,r=this.route=new BusRoute,s=this;r.fetch().then(function(){return r.getSchemeTransfer()}).then(function(e){privateMethod.renderStepList.call(s,e),s.fire("ready")}),this.$shareParam&&(n=this.$shareParam.index),this.busParam=a}catch(o){"undefined"!=typeof alog&&alog("http://webmap2.map.bdstatic.com/newmap/static/common/pkg/exception.fire","catch",{msg:o.message||o.description,path:"common:widget/pano/module/TrafficModule/BusModule/BusModule.js",ln:272})}},getClosestPoint:function(e,t,i){var a=null,n=1/0,r=0,s=this.route.getSchemeTransfer();return util.each(s.steps,function(t){return e===t.pid?(a=t,!0):void 0}),null===a&&util.each(s.steps,function(e){r=Math.pow(e.panox-i,2)+Math.pow(e.panoy-t,2),n>r&&(n=r,a=e)}),a},getRoutParam:function(){return""},getRoutPoints:function(){return[]},getStartEndPoint:function(){var e=this.route.getStart(),t=this.route.getEnd();return e.type=0,t.type=1,{start:e,end:t}},getMarkers:function(){return[]},show:function(e){this.dispatchEvent("layout_changed",{display:!0});var t=this.getStartEndPoint();privateMethod.renderHeader.call(this,e,t.start,t.end),privateMethod.addMarkers.call(this)},dispose:function(){this.tableView.dispose(),this.tableView=null,this.route.dispose(),T.un(window,"resize",this._resizeHandler)},getShareParam:function(){var e=this.tableView.getSelectIndex();return{index:e}},event_panoChanged:function(e){if(this.route){var t=void 0,i=this.route.getSchemeTransfer(),a=this.tableView.getSelectIndex(),n=i.steps[a];if(!n||e!=n.pid)if(util.each(i.steps,function(i,a){return e==i.pid?(t=a,!0):void 0}),void 0!==t)privateMethod.clickHandler.call(this,t,!0);else{var r=this.tableView.getSelectItem(),s=this.tableView.getSelectIndex();this.tableView.setSelectIndex(null),privateMethod.mouseLeaveHandler.call(this,r,s)}}}});module.exports=BusModule});
;define("common:widget/pano/module/TrafficModule/NavModule/NavModule.js",function(require,exports,module){var Animation=require("common:widget/ui/Animation/Animation.js"),TableView=require("common:widget/pano/component/TableView/TableView.js"),ModuleClass=require("common:widget/pano/base/ModuleClass.js"),util=require("common:widget/pano/base/util.js"),NavRoute=require("common:widget/pano/model/NavRoute.js"),service=require("common:widget/pano/base/service.js");require.loadCss({content:".nav-header-icon{background-image:url(http://webmap2.map.bdstatic.com/newmap/static/common/images/pano_whole/nav-icon_1d72d88.png);_background-image:url(http://webmap2.map.bdstatic.com/newmap/static/common/images/pano_whole/nav-icon_8_ebcc315.png)}.nav-trafficbar{position:absolute;width:100%;height:5px;bottom:0;overflow:hidden}.nav-trafficbar-value{float:left;height:5px}.nav-trafficbar-bg-0{background-color:#535353}.nav-trafficbar-bg-1{background-color:#118711}.nav-trafficbar-bg-2{background-color:#B67F24}.nav-trafficbar-bg-3{background-color:#CA3630}"});var ITEM_TEMPLATE=[function(_template_object){var _template_fun_array=[],fn=function(__data__){var _template_varName="";for(var name in __data__)_template_varName+="var "+name+'=__data__["'+name+'"];';eval(_template_varName),_template_fun_array.push('<div class="traffic-image-item">    <div class="traffic-image-wapper">        '),src?_template_fun_array.push('            <img class="traffic-image" src="',"undefined"==typeof src?"":src,'" onerror="this.src=&#39;',"undefined"==typeof error_src?"":error_src,'&#39;" />        '):_template_fun_array.push('            <img class="traffic-image" src="',"undefined"==typeof error_src?"":error_src,'" />        '),_template_fun_array.push('        <div class="traffic-image-desc-wapper">            <div class="traffic-image-desc-bg"></div>            <div class="traffic-image-desc">                <span class="traffic-image-desc-index">',"undefined"==typeof index?"":index,' ) </span>                <div class="traffic-image-desc-text">',"undefined"==typeof desc?"":desc,'</div>            </div>        </div>    </div>    <div class="nav-trafficbar nav-trafficbar-bg-0">        ');for(var i=0,n=traffic.length;n>i;i++)_template_fun_array.push('            <div class="nav-trafficbar-value nav-trafficbar-bg-',"undefined"==typeof traffic[i].status?"":traffic[i].status,'" style="width:',"undefined"==typeof traffic[i].value?"":traffic[i].value,'%"></div>        ');_template_fun_array.push("    </div></div>"),_template_varName=null}(_template_object);return fn=null,_template_fun_array.join("")}][0],IMG_ERROR_URL="../../../../../webmap0.map.bdstatic.com/newmap/static/common/images/pano_whole/img_error_8d3eb72.png"/*tpa=http://webmap0.map.bdstatic.com/newmap/static/common/images/pano_whole/img_error_8d3eb72.png*/,OVERVIEW_SIZE=315,SHOW_DESC_DELAY=400,SHOW_DESC_DURATION=150,privateMethod=function(){function e(){clearTimeout(i)}function t(e){var t=T(e).find(".traffic-image-desc-wapper"),a=t.attr("status");a>0||(-1==a&&r&&r.stop(),t.css("top","100%"),t.css("display","block"),t.attr("status","1"),n=new Animation.Animation,n.build({fps:60,transition:Animation.Transitions.easeOutQuad,duration:SHOW_DESC_DURATION,render:function(e){try{t.css("top",100*(1-e)+"%")}catch(a){"undefined"!=typeof alog&&alog("http://webmap2.map.bdstatic.com/newmap/static/common/pkg/exception.fire","catch",{msg:a.message||a.description,path:"common:widget/pano/module/TrafficModule/NavModule/NavModule.js",ln:54})}},finish:function(){t.attr("status","2")}}))}function a(e){var t=T(e).find(".traffic-image-desc-wapper"),a=t.attr("status");if(!(0>a)){if(1==a)return n&&n.stop(),t.css("top","100%"),void t.attr("status","-2");r=new Animation.Animation,t.attr("status","-1"),r.build({fps:60,transition:Animation.Transitions.easeOutQuad,duration:SHOW_DESC_DURATION,render:function(e){try{t.css("top",100*e+"%")}catch(a){"undefined"!=typeof alog&&alog("http://webmap2.map.bdstatic.com/newmap/static/common/pkg/exception.fire","catch",{msg:a.message||a.description,path:"common:widget/pano/module/TrafficModule/NavModule/NavModule.js",ln:82})}},finish:function(){t.attr("status","-2")}})}}var i=0,n=null,r=null,o={renderStepList:function(){try{var e=this.navRoute.getSteps(),t=e.length,a=this.tableView;util.each(e,function(e,i){e.instructions||(e.instructions=0===i?"起点":i==t-1?"终点":"未知路段");var n={index:i+1,src:e.src,error_src:IMG_ERROR_URL,desc:e.instructions,traffic:e.traffic||[]},r=ITEM_TEMPLATE(n);a.addItemContent(r)}),a.resize()}catch(i){"undefined"!=typeof alog&&alog("http://webmap2.map.bdstatic.com/newmap/static/common/pkg/exception.fire","catch",{msg:i.message||i.description,path:"common:widget/pano/module/TrafficModule/NavModule/NavModule.js",ln:114})}},mouseEnterHandler:function(a,n){var r=this.tableView.getSelectIndex();r!==n&&(e(),i=setTimeout(function(){t(a)},SHOW_DESC_DELAY));var o=this.navRoute.getSteps();this.tableView.fitImage(n);var s=o[n];s.rx&&s.ry&&this.dispatchEvent("show_position",{data:{x:s.rx,y:s.ry}})},mouseLeaveHandler:function(t,i){var n=this.tableView.getSelectIndex();n!==i&&(e(),a(t)),this.dispatchEvent("hide_position")},clickHandler:function(i){var n=this.tableView.getSelectIndex();if(i!==n){var r=this.tableView.getSelectItem();r&&(e(),a(r)),this.tableView.setSelectIndex(i),r=this.tableView.getSelectItem(),t(r);var o=this.navRoute.getSteps(),s=o[i];this.dispatchEvent("hide_position"),this.dispatchEvent("pano_changed",{data:{source:this.getName(),panoHeading:s.dir,panoId:s.pid}})}},renderHeader:function(e,t,a){try{var i=t.wd+" > "+a.wd,n=document.createElement("div");n.className="traffic-header-bar",n.innerHTML=['<p class="traffic-header-wapper">','<i class="traffic-header-icon nav-header-icon"></i>','<span class="traffic-header-text" title="'+i+'">'+i+"</span>","</p>"].join(""),e.appendChild(n)}catch(r){"undefined"!=typeof alog&&alog("http://webmap2.map.bdstatic.com/newmap/static/common/pkg/exception.fire","catch",{msg:r.message||r.description,path:"common:widget/pano/module/TrafficModule/NavModule/NavModule.js",ln:188})}},addStartEndMarkers:function(e,t){for(var a=e.point.split(","),i=this.navRoute.getSteps(),n=null,r=0,o=0;i[r];){if(n=i[r],n.pid){o=util.getAngleFromP2P({x:n.rx,y:n.ry},{x:a[0],y:a[1]});break}r++}var s={markerId:util.getUniqueId("MARKER_ST"),addr:e.wd,catalog:"FF0201",heading:o,name:e.wd,pid:n.pid,pitch:0,poiuid:e.uid,px:1*n.rx,py:1*n.ry,rank:0,x:1*a[0],y:1*a[1]};r=i.length-1;var d=null;for(o=0,a=t.point.split(",");i[r];){if(d=i[r],d.pid){o=util.getAngleFromP2P({x:d.rx,y:d.ry},{x:a[0],y:a[1]});break}r--}var c={markerId:util.getUniqueId("MARKER_EN"),addr:t.wd,catalog:"FF0202",heading:o,name:t.wd,pid:d.pid,pitch:0,poiuid:t.uid,px:1*d.rx,py:1*d.ry,rank:0,x:1*a[0],y:1*a[1]};this.dispatchEvent("add_markers",[s,c])}};return o}(),NavModule=ModuleClass.extend("NavModule",{initialize:function(e,t,a,i){try{if(!(window.currentComponent&&"NavTrans"===currentComponent.name||this.$shareParam))return;var n=this;this.enterPanoData=a,this.headerContainer=t,this.tableView=e,e.addEventListener("mouseenter",function(e,t){privateMethod.mouseEnterHandler.call(n,t.elem,t.index)}),e.addEventListener("mouseleave",function(e,t){privateMethod.mouseLeaveHandler.call(n,t.elem,t.index)}),e.addEventListener("click",function(e,t){privateMethod.clickHandler.call(n,t.index),addStat(STAT_CODE.STAT_PANORAMA,{item:"navalbum-click"})});var r,o=void 0;if(this.$shareParam&&(o=this.$shareParam.index),r=currentComponent.getPanoNavParams(),r.end.indexOf("to:")>-1){var s=r.end.split("to:");r.end=s.pop()}r.startmatchdis=20,r.turnmatchdis=20;var d=this.navRoute=new NavRoute(r,i);d.on("ready",function(){privateMethod.renderStepList.call(n),n.fire("ready")}),this.navParam=r}catch(c){"undefined"!=typeof alog&&alog("http://webmap2.map.bdstatic.com/newmap/static/common/pkg/exception.fire","catch",{msg:c.message||c.description,path:"common:widget/pano/module/TrafficModule/NavModule/NavModule.js",ln:329})}},getClosestPoint:function(e,t,a){var i=null,n=1/0,r=0,o=this.navRoute.getSteps();return util.each(o,function(t){return e===t.panoId?(i=t,!0):void 0}),null===i&&util.each(o,function(e){r=Math.pow(e.rx-a,2)+Math.pow(e.ry-t,2),n>r&&(n=r,i=e)}),i},getRoutParam:function(){var e=this.navParam;if(e){var t={};for(var a in e)t[a]=e[a];return t.start=decodeURIComponent(e.start),t.end=decodeURIComponent(e.end),t}return""},getRoutPoints:function(){return this.navRoute.getPoints()},getStartEndPoint:function(){var e=this.navRoute.getStart(),t=this.navRoute.getEnd();return e.point=e.pt,t.point=t.pt,e.type=0,t.type=1,{start:e,end:t}},getSteps:function(){return this.navRoute.getSteps()},getMarkers:function(){var e=this.getStartEndPoint();return[e.start,e.end]},show:function(e){this.dispatchEvent("layout_changed",{display:!0});var t=this.getStartEndPoint();privateMethod.renderHeader.call(this,e,t.start,t.end),privateMethod.addStartEndMarkers.call(this,t.start,t.end)},dispose:function(){this.tableView.dispose(),this.tableView=null,this.navRoute.dispose(),T.un(window,"resize",this._resizeHandler)},getShareParam:function(){var e=this.tableView.getSelectIndex();return{index:e}},event_panoChanged:function(e){if(this.navRoute){var t=void 0,a=this.navRoute.getSteps();if(util.each(a,function(a,i){return e==a.pid?(t=i,!0):void 0}),void 0!==t)privateMethod.clickHandler.call(this,t,!0);else{var i=this.tableView.getSelectItem(),n=this.tableView.getSelectIndex();this.tableView.setSelectIndex(null),privateMethod.mouseLeaveHandler.call(this,i,n)}}}});module.exports=NavModule});
;define("common:widget/pano/module/TrafficModule/TrafficModule.js",function(e,t,o){var i=e("common:widget/pano/base/ModuleClass.js"),n=e("common:widget/pano/base/util.js"),a=e("common:widget/pano/module/TrafficModule/NavModule/NavModule.js"),r=e("common:widget/pano/module/TrafficModule/BusModule/BusModule.js"),d=e("common:widget/pano/module/TrafficModule/WalkModule/WalkModule.js"),l=e("common:widget/pano/module/TrafficModule/RouteVideoModule/RouteVideoModule.js"),s=e("common:widget/pano/component/TableView/TableView.js"),c=["pano_changed","layout_changed","show_position","hide_position","add_markers","play_routeVideo"];e.loadCss({content:".traffic-header-bar{position:absolute;top:20px;left:103px;font-size:12px;line-height:40px;height:40px;width:280px;padding:0 16px;background-color:#252525;background-color:rgba(37,37,37,.9);filter:alpha(opacity=90);border-radius:2px;color:#C5CBD6}.traffic-header-wapper{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;_margin-top:10px;width:95%}.traffic-header-icon{width:20px;height:20px;background-position:0 0;margin-top:-2px;margin-right:14px;display:inline-block;vertical-align:middle}.traffic-header-text{}.traffic-container{position:relative;height:113px}.traffic-container .tableview-wapper{left:30px}.traffic-image-item{width:198px;height:110px;position:relative;overflow:hidden}.traffic-image-wapper{position:relative;width:194px;border:1px solid #000;left:2px;overflow:hidden}.tableview-li-hover .traffic-image-wapper{border-color:#3AF}.traffic-image{width:196px;height:100px;filter:alpha(opacity=100)}.traffic-image-desc-bg{height:100%;background-color:#000;opacity:.5;filter:alpha(opacity=50)}.traffic-image-desc-wapper{display:none;position:absolute;left:0;top:0;width:100%;height:100px}.traffic-image-desc{width:96%;position:absolute;bottom:0;left:0;font-size:12px;color:#fff;z-index:3;margin:0 2% 5px;filter:alpha(opacity=100)}.traffic-image-desc-index{float:left;width:13%}.traffic-image-desc-text{color:#fff;float:left;width:87%}.traffic-image-desc-text b{color:#fff;font-weight:400}.traffic-container .tableview-ul{margin-top:3px}.traffic-container .tableview-selected-border{border:3px solid #3AF;left:2px;top:0;width:190px;height:96px}"});var m=315,u=i.extend("TrafficModule",{constructor:function(){this.model=void 0},initialize:function(e,t,o,i,u,f){function h(i){var h=0;i&&(h=155);var w=g.tableView=new s(p,{viewWidth:document.body.clientWidth-m-h,viewHeight:113,margin:0,isHorizontal:!0});switch(o&&o.appendChild(p),g._timer=null,g._resizeHandler=function(){g._timer&&clearTimeout(g._timer),g._timer=setTimeout(function(){p.style.width=document.body.clientWidth-m+"px",w.setViewSize(document.body.clientWidth-m-h)},100)},T.on(window,"resize",g._resizeHandler),u.unshift(w),e){case"nav":g.model=new a;break;case"bus":case"buswalk":g.model=new r;break;case"walk":g.model=new d;break;case"share":window.currentComponent&&"NavTrans"==currentComponent.name||t&&t.TrafficModule?(g.model=new a,g.model.$shareParam=g.$shareParam):window.currentComponent&&"BusTrans"==currentComponent.name||t&&t.TrafficModule?(g.model=new r,g.model.$shareParam=g.$shareParam):(window.currentComponent&&"NavWalk"==currentComponent.name||t&&t.TrafficModule)&&(g.model=new d,g.model.$shareParam=g.$shareParam)}if(g.model){var v=g.model.getName().toLowerCase().replace("module","")+"-tableview-container";p.id=v,g.model.on("ready",function(){!f&&i&&"NavModule"===g.model.getName()&&(g.routeVideoModule=new l,g.routeVideoModule.initialize(g.container,g.getSteps()),g.routeVideoModule.addEventListener("play_routeVideo",function(e,t){g.dispatchEvent(e.type,t)})),g.fire("ready")}),n.each(c,function(e){g.model.addEventListener(e,function(e,t){g.dispatchEvent(e.type,t)})}),g.model.initialize.apply(g.model,u)}else g.ready()}try{this.headerContainer=document.createElement("div"),i.appendChild(this.headerContainer);var p=this.container=document.createElement("div");p.className="traffic-container",p.style.left=m+"px",p.style.width=document.body.clientWidth-m+"px";var g=this;n.hasRouteVideo().then(function(e){h(e)})}catch(w){"undefined"!=typeof alog&&alog("http://webmap2.map.bdstatic.com/newmap/static/common/pkg/exception.fire","catch",{msg:w.message||w.description,path:"common:widget/pano/module/TrafficModule/TrafficModule.js",ln:147})}},getContainer:function(){return this.container},setHeaderVisible:function(e){this.headerContainer.style.display=e?"block":"none"},isNav:function(){return this.model&&"NavModule"===this.model.getName()},isBus:function(){return this.model&&"BusModule"===this.model.getName()},isWalk:function(){return this.model&&"WalkModule"===this.model.getName()},isEnable:function(){return this.isNav()||this.isBus()||this.isWalk()},getClosestPoint:function(e,t,o){return this.model&&this.model.getClosestPoint(e,t,o)},getRoutParam:function(){return this.model&&this.model.getRoutParam()},getRoutPoints:function(){return this.model&&this.model.getRoutPoints()},getStartEndPoint:function(){return this.model&&this.model.getStartEndPoint()},getSteps:function(){return this.model&&this.model.getSteps&&this.model.getSteps()},getMarkers:function(){return this.model&&this.model.getMarkers()},show:function(){return this.model&&this.model.show(this.headerContainer)},dispose:function(){return this.model&&this.model.dispose()},getShareParam:function(){if(!this.model)return void 0;var e=this.model.getShareParam();return e.model=this.model.getName(),e},event_panoChanged:function(e){return this.model?this.model.event_panoChanged(e):void 0},event_layoutChanged:function(){},isAsync:function(){return!0},getSupportEvents:function(){return c}});o.exports=u});