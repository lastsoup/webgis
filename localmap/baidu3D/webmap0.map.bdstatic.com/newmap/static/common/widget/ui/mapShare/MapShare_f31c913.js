define("common:widget/ui/mapShare/MapShare.js",function(n,t,o){function i(n){for(var t in n)return 0;return 1}function e(n,t,o){var i="",e=t;o.width&&(i=' style="width:'+o.width+'px"');var p='<div id="mapCommonTip" class="map_cTip"'+i+'><div class="tip">'+n+"</div><button ></button></div>";T.g("mapCommonTip")?T.g("mapCommonTip").style.display="":r.beforeEndHTML(e.getContainer(),p),T.g("mapCommonTip").style.left=parseInt(e.width)/2-o.width/2+"px",setTimeout(function(){a()},2e3),baidu("#mapCommonTip button").on("click",function(){a()})}function a(){T.g("mapCommonTip")&&(T.g("mapCommonTip").style.display="none")}var p,l,r=n("common:widget/ui/util/util.js"),s=n("common:widget/ui/config/config.js"),m=s.modelConfig,f={SHARE_PROC_URL:"http://j.map.baidu.com/",listIndex:null,mapSpotInf:null,mapInfo:{},getLink:function(n,t,o){this.cbk=n||function(){},this.getMap(),this.getList(),this.getSpotInfo(),this.getPopList(),this.getComponent(),this.getScrMode(),this.getPoiShare(),o=o||{};var a=this,r=[];for(var s in a.mapInfo)null!=a.mapInfo[s]&&""!=a.mapInfo[s]&&r.push(s+"="+a.mapInfo[s]);if(a.oUrl="http://map.baidu.com/?newmap=1&shareurl=1&"+r.join("&"),t&&!o.sms)return a.oUrl;var m=function(){var n=f.SHARE_PROC_URL+"?url="+encodeURIComponent(a.oUrl)+"&web=true";p=!1,T.jsonp(n,function(n){p=!0,a.cbk(n&&n.url||this.oUrl)}),clearTimeout(l),l=setTimeout(function(){0==p&&a.cbk(a.oUrl)},3e3)},u=baidu.json.parse(baidu.json.stringify(_sign.mapSign));if(i(u.pointInfo.list)&&i(u.polylineInfo.list)&&i(u.remarkInfo.list)){if(t)return n&&n(a.oUrl),a.oUrl;m()}else{for(var d in u.pointInfo.list)0==u.pointInfo.list[d].save&&delete u.pointInfo.list[d];for(var d in u.remarkInfo.list)0==u.remarkInfo.list[d].type&&delete u.remarkInfo.list[d];if(i(u.pointInfo.list)&&i(u.polylineInfo.list)&&i(u.remarkInfo.list)){if(t)return n&&n(a.oUrl),a.oUrl;m()}else MapSignInst.getSignLink(baidu.json.stringify(u),function(o){if(1!=o.result)return e("有不符合相关法规政策的词，请修改",map,{width:235}),t?(n&&n(a.oUrl),a.oUrl):void m();var i=o.content.shareId;return a.oUrl+="&mapShareId="+i,t?(n&&n(a.oUrl),a.oUrl):void m()},"all")}},getScrMode:function(){this.mapInfo.sc=map.fullScreenMode?1:0},getMap:function(){this.mapInfo.l=map.zoomLevel,this.mapInfo.tn=map.mapType,this.mapInfo.hb=map._isHybirdShow?BMAP_TYPE_HYBIRD:null;var n=map.centerPoint;this.mapInfo.c=n.lng.toFixed(0)+","+n.lat.toFixed(0),this.mapInfo.cc=map.currentCity},getComponent:function(){var n=window.currentComponent,t="";n&&n.modelQuery?t=n.modelQuery.replace(/&b=\((-?\d+)(\.\d+),(-?\d+)(\.\d+);(-?\d+)(\.\d+),(-?\d+)(\.\d+)\)/gi,""):n&&"City"==n._className&&(t="cur&wd="+m.cityName+"&c="+m.cityCode),this.mapInfo.s=encodeURIComponent(decodeURIComponent(t))},getList:function(){this.mapInfo.i=null!=this.listIndex?this.listIndex.toString().replace("|",encodeURIComponent("|")):null},getPopList:function(){this.mapInfo.pi=null!=this.popIndex?this.popIndex:null},getPoiShare:function(){var n=location.href,t=r.getParam(n);t&&t.poiShareUid&&(this.mapInfo.poiShareUid=t.poiShareUid)},setPoiShowAll:function(n){this.mapInfo.poiall=n?1:null},setSmSCode:function(n){this.mapInfo.sms=n?n:null},getSpotInfo:function(){this.mapInfo.msi=null!=this.mapSpotInf?this.mapSpotInf:null},setParam:function(n,t){n&&"[object String]"===Object.prototype.toString.call(n)&&(t?this.mapInfo[n]=t:delete this.mapInfo[n])}};o.exports=f});