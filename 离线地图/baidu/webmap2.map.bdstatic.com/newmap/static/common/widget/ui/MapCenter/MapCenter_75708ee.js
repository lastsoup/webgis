define("common:widget/ui/MapCenter/MapCenter.js",function(t,e,n){function i(){T.lang.Class.call(this),this._map=map,this.startPoint=map.centerPoint,this.unit=1e4,this.url=d.MAP_CENT_URL+"?newmap=1&qt=cen",this._cbks=[]}function a(){var t=map.getBounds(),e=function(t){return 1e3*parseInt(t/1e3)};return e(t.minX)+","+e(t.minY)+";"+e(t.maxX)+","+e(t.maxY)}var s=t("common:widget/ui/config/config.js"),o=t("common:widget/ui/Traffic/Traffic.js"),r=t("common:widget/ui/Weather/Weather.js"),c=t("common:widget/ui/indexUtil/IndexUtil.js"),u=t("common:widget/ui/AQIMgr/AQIMgr.js"),l=s.modelConfig,d=(s.mapConfig,s.urlConfig);T.extend(i.prototype,{init:function(){var t=this,e=map;l.enableMapMove=!0,e.addEventListener("load",function(e){t.request(e),o.setHighLevel()}),e.addEventListener("moveend",function(e){t.request(e)}),e.addEventListener("dragend",function(e){t.request(e)}),e.addEventListener("zoomend",function(e){t.request(e),o.setHighLevel()})},request:function(){if(r.active||0!=l.enableMapMove&&map.mapType!=BMAP_TYPE_DIMENSIONAL){var t=map.zoomLevel,e=window.currentComponent;if((!e||"AQIMap"!=e._className)&&4>=t)return window.temp.map_level=t,c.setCurCity("全国","1",0),c.setSupBus(0),baidu.g("air_quality_btn").innerHTML="",void(baidu.g("txt_weather").innerHTML="");var n=map.centerPoint,i=this.startPoint,s=Math.sqrt((i.lng-n.lng)*(i.lng-n.lng)+(i.lat-n.lat)*(i.lat-n.lat));if(s>this.unit||window.temp.map_level!=t||r.active){window.temp.map_level=t,this.startPoint=n;var o=this,d=this.url+"&b="+a()+"&l="+t;d+=u.isActive()?"&dtype=2":"&dtype=1",baidu.jsonp(d,function(t){t&&t.content&&o.curCity(t)})}}},curCity:function(t){if(t&&(r.add(t.weather),u.set(t.aqi,t.current_city,"mapcenter")),0!=l.enableMapMove){try{var e=t,n=e.content,i=e.current_city,a=(i.code,i.type);n.sup=i.sup,c.setCurCity(n.name,n.uid,a,n),null!=n.sup_bus&&c.setSupBus(n.sup_bus),e.hot_city&&window._OLR&&(window._OLR.hot_city=e.hot_city)}catch(s){}for(var o=0,d=this._cbks.length;d>o;o++)this._cbks[o]&&"function"==typeof this._cbks[o]&&this._cbks[o]()}},addCallback:function(t){this._cbks.push(t)},removeCallback:function(t){for(var e=0,n=this._cbks.length;n>e;e++)this._cbks[e]===t&&(this._cbks.splice(e,1),e--)},clearCallbacks:function(){this._cbks.length=0}}),n.exports=new i});