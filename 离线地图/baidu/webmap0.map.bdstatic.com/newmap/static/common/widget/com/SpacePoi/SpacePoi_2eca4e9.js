define("common:widget/com/SpacePoi/SpacePoi.js",function(require,exports,module){function SpacePoi(e){MapComponent.call(this,e),this.normPolylines=[],this.cinfo=this.cinfo||{},this.json=this.cinfo.initData}var MapComponent=require("common:widget/com/MapComponent.js"),comMgr=require("common:widget/com/componentManager.js"),stat=require("common:widget/ui/stat/CodeStat.js"),config=require("common:widget/ui/config/config.js"),util=require("common:widget/ui/util/util.js"),mapUtil=require("common:widget/ui/mapUtil/mapUtil.js"),constant=require("common:widget/ui/constant/Constant.js"),Share=require("common:widget/ui/mapShare/MapShare.js");T.lang.inherits(SpacePoi,MapComponent,"SpacePoi"),T.object.extend(SpacePoi.prototype,{loadRes:function(){var template=[function(_template_object){var _template_fun_array=[],fn=function(__data__){var _template_varName="";for(var name in __data__)_template_varName+="var "+name+'=__data__["'+name+'"];';eval(_template_varName),_template_fun_array.push('<div class="mapinfo_con">  <div style="font-size:14px;font-weight:bold;height:24px;border-bottom:1px solid #cfcfcf">  ',"undefined"==typeof space_poi_name?"":space_poi_name,"  </div></div>"),_template_varName=null}(_template_object);return fn=null,_template_fun_array.join("")}][0];return template},render:function(){try{if(!this.json||!this.json.content)return void comMgr.load("Error");var e=this.json,t=this.loadRes(),o={},i=util.parseGeo(e.content.geo);if(2==i.type){var n=i.bound.split(";"),a=n[0].split(","),r=n[1].split(","),c=[new BMap.Point(parseFloat(a[0]),parseFloat(a[1])),new BMap.Point(parseFloat(r[0]),parseFloat(r[1]))];this.normPolylines.push(mapUtil.addRoute(i.points,constant.ROUTE_TYPE_DEFAULT)),(!this.cinfo||this.cinfo&&1!=this.cinfo._index)&&mapUtil.setViewport(c,10);var s=baidu.url.queryToJson(this.modelQuery||"")||{};o.space_poi_name=this.cinfo.poiName||e.content.name||decodeURIComponent(s.wd)}return t(o)}catch(m){"undefined"!=typeof alog&&alog("http://webmap0.map.bdstatic.com/newmap/static/common/widget/com/SpacePoi/exception.fire","catch",{msg:m.message||m.description,path:"common:widget/com/SpacePoi/SpacePoi.js",ln:61})}},initialize:function(){try{Share.listIndex=1,this.cinfo&&(this.cinfo._maplevel&&this.cinfo._centerPoint?map.centerAndZoom(this.cinfo._centerPoint,this.cinfo._maplevel):this.cinfo._maplevel?map.zoomTo(this.cinfo._maplevel):this.cinfo._centerPoint&&map.setCenter(this.cinfo._centerPoint))}catch(e){"undefined"!=typeof alog&&alog("http://webmap0.map.bdstatic.com/newmap/static/common/widget/com/SpacePoi/exception.fire","catch",{msg:e.message||e.description,path:"common:widget/com/SpacePoi/SpacePoi.js",ln:77})}},loadData:function(e){return e},unload:function(){for(var e=0,t=this.normPolylines.length;t>e;e++)this.normPolylines[e]&&(this.normPolylines[e].remove(),this.normPolylines[e]=null);delete this.normPolylines}}),module.exports=SpacePoi});