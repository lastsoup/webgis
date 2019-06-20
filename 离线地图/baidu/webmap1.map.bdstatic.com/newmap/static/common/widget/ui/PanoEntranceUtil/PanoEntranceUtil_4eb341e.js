define("common:widget/ui/PanoEntranceUtil/PanoEntranceUtil.js",function(t,e,a){var n=t("common:widget/ui/util/util.js"),i=t("common:widget/ui/config/config.js"),o=t("common:widget/ui/indexUtil/IndexUtil.js"),r=t("common:widget/ui/PanoUtil/PanoUtil.js"),d=(t("common:widget/ui/PanoInfoUtil/PanoInfoUtil.js"),t("common:widget/pano/PanoInterface/PanoInterface.js")),s=(t("common:widget/pano/base/service.js"),i.urlConfig),p=i.mapVersion,u=window.Pano=window.Pano||{},l={insertPanoInfoInSearch:function(t,e,a){if(!o.isSupportStreetView())return a(null),void this.dispatchEvent("onSearchPanoDataReady",{data:null});for(var n=[],r=0,d=t.length;d>r;r++)n.push(t[r].uid||t[r].mercatorLnglat);var u=this,l="udt="+p.UDT_VERSION+"&qt=batchdata&from="+e+"&key="+n.join("|");baidu.ajax("/?qt=panobatch",{method:"post",dataType:"json",data:l,success:function(e){for(var n=e||{},i=n.content||[],o=[],r=null,d=null,l=!0,c=0,h=i.length;h>c;c++){r=i[c]||{},d=t[c],r.PID&&l&&(l=!1);var m="";if(m=d.name?d.name:r.name,d.mercatorLnglat){var f=d.mercatorLnglat.split(",");r.Dir||(r.Dir=90-180*Math.atan2(f[1]-r.PanoY,f[0]-r.PanoX)/Math.PI),r.Dir<0&&(r.Dir+=360)}else f=[0,0];var g=0;g=d.direction&&0!=c&&c!=h-1?d.direction:r.Dir;var v=s.PANO_URL;v=r.UID?s.PANO_URL+"/pr/?qt=poiprv&uid="+r.UID+"&width=100&height=75&quality=80&fovx=80&udt="+p.UDT_VERSION:s.PANO_URL+"/pr/?qt=prv&panoid="+r.PID+"&width=100&height=75&quality=80&fovx=80&heading="+g+"&udt="+p.UDT_VERSION;var b={panoId:r.PID||"",uid:r.UID||"",panoMarker:{addr:r.name||"",poiuid:r.UID||"",pid:r.PID||"",catalog:d.poiType||"",name:m,rank:r.Rank||0,heading:g,pitch:r.Pitch||0,x:r.X||f[0],y:r.Y||f[1],px:r.PanoX||f[0],py:r.PanoY||f[1],index:d.index||-1},panoThumbnailUrl:v};o.push(b)}l&&(o=null),a(o),u.dispatchEvent("onSearchPanoDataReady",{data:o})},error:function(t){console.log("panopatch",t)}}),addStat(STAT_CODE.STAT_STREETVIEW,{cityCode:i.modelConfig.cityCode,catalog:e,item:"panobatch"})},showStreetViewPreview:function(t,e,a,i){var o=this,r=T(".list_street_view_preview"),d=e.getAttribute("data-thumbnail"),s={buslineUid:e.getAttribute("data-buslineUid"),panoId:e.getAttribute("data-pid"),uid:e.getAttribute("data-uid"),panoMarker:{addr:e.getAttribute("data-paddr"),px:e.getAttribute("data-px"),py:e.getAttribute("data-py"),name:e.getAttribute("data-pname"),heading:e.getAttribute("data-pheading")},hasRouteVideo:i},p=e.getAttribute("data-pfrom");t?this.timeoutId=setTimeout(function(){var e=n.getClientSize().height-t.top<150;r.length?(r.css({left:t.left-1,top:t.top}),r.find("img").attr("src",d),r.off("click"),r.on("click",function(){o.enterPanorama(s,a,"search",p)}),r.show()):(r=T('<div style="left:'+(t.left-1)+"px;top:"+t.top+'px" class="list_street_view_preview"><img src="'+d+'" onerror="Pano.PanoEntranceUtil.thumbnailNotFound(this, 100, 75);" width="100" height="75" /><div class="list_street_view_preview_icon_box"><div class="list_street_view_preview_icon"></div></div></div>'),T("body").append(r),r.on("mouseleave",function(){r.hide()}),r.on("click",function(){o.enterPanorama(s,a,"search",p)})),e?(r.addClass("bottom"),r.css({top:t.top-53})):r.removeClass("bottom")},200):o.enterPanorama(s,a,"routeVideo_button",p)},thumbnailNotFound:function(t){t.src="../../../../../../../webmap0.map.bdstatic.com/newmap/static/common/images/panorama/2d_default_aspect_ratio_3_d58ce0c.png"/*tpa=http://webmap0.map.bdstatic.com/newmap/static/common/images/panorama/2d_default_aspect_ratio_3_d58ce0c.png*/},walkThroughPanoEntrances:function(t,e,a,n,i){var o,r=this;if(e&&0!=e.length){T(".closeWalkInfo").css({"margin-top":0});for(var d=0;d<t.length;d++)o=e[d],this.setPanoPreviewDomAttribute(t[d],o,a);t.off("mouseleave"),t.off("mouseenter"),t.on("mouseenter",function(){var t=T(this),a=t.offset().left+22;r.showStreetViewPreview({left:a,top:t.offset().top-6},this,n||e,i)}),t.on("mouseleave",function(){clearTimeout(r.timeoutId)})}else for(var d=0;d<t.length;d++)t[d].style.display="none"},setPanoPreviewDomAttribute:function(t,e,a){e.panoId?(t.style.visibility="visible",t.setAttribute("data-thumbnail",e.panoThumbnailUrl),t.setAttribute("data-pid",e.panoId),t.setAttribute("data-pname",e.panoMarker.name),t.setAttribute("data-px",e.panoMarker.px),t.setAttribute("data-py",e.panoMarker.py),t.setAttribute("data-paddr",e.panoMarker.addr),t.setAttribute("data-pheading",e.panoMarker.heading),t.setAttribute("data-pfrom",a)):t.style.visibility="hidden"},addPanoEntranceInInfoWindow:function(t,e,a){var n=this;n.insertPanoInfoInSearch([{mercatorLnglat:e.lng+","+e.lat}],"",function(e){if(e&&e.length>0){var i=n.addPanoThumbnailsInInfoWnd([t],[e[0]],e,"contextMenu",!0);a(i)}else a([t])})},addPanoThumbnailsInInfoWnd:function(t,e,a,n){var i,o,r=null,d=this;switch(n){case"contextMenu":case"busline":thumbnailProperty={size:{width:323,height:101},position:"top",fovx:250,margin:"10px 10px 0 10px"};break;case"bus":case"buswalk":case"nav":case"walk":thumbnailProperty={size:{width:240,height:75},position:"middle",elemIndexArr:[0,-1],fovx:250,margin:"6px 0"};break;case"routeaddr":thumbnailProperty={size:{width:258,height:81},position:"middle",elemIndexArr:[1],fovx:250,margin:"0 10px 5px 10px"}}for(i=0,o=t.length;o>i;i++)r=t[i],e[i]&&(r.content=this._getPanoThumbnailHtmlInInfoWnd(r.content,e[i],thumbnailProperty),r.addEventListener("open",function(t){return function(){baidu(".panoInfoBox").on("click",function(){d.enterPanorama(e[t],a,"infownd",n)})}}(i)));return t},_getPanoThumbnailHtmlInInfoWnd:function(t,e,a){function n(t,e,a){var n=document.createElement("div"),i=n.cloneNode();n.innerHTML=e,n=n.childNodes[0],i.innerHTML=t;for(var o=null,o=i,r=0,d=a.length,s=0;d>r;r++)s=a[r],0>s&&(s=o.childNodes.length+s),r!=d-1?o=o.childNodes[s]:o.insertBefore(n,o.childNodes[s]);return i.innerHTML}if(!e||!e.panoId||!e.panoMarker)return t;var i=[],o="",r=a.size.height,d=a.size.width,u=a.fovx,l=a.position;i.push("<div class='panoInfoBox' style='height:"+r+"px;width:"+d+"px; margin:"+a.margin+";' title='"+e.panoMarker.name+"外景' title='查看全景' >");var c="";switch(c=e.panoMarker.poiuid?s.PANO_URL+"/pr/?qt=poiprv&uid="+e.panoMarker.poiuid+"&width="+d+"&height="+r+"&quality=80&fovx="+u+"&udt="+p.UDT_VERSION:s.PANO_URL+"/pr/?qt=prv&panoid="+e.panoId+"&width="+d+"&height="+r+"&quality=80&fovx="+u+"&heading="+e.panoMarker.heading+"&udt="+p.UDT_VERSION,i.push("<img class='pano_thumnail_img' width='"+d+"' height='"+r+"' border='0' alt='"+e.name+"外景' src='"+c+"' onerror='Pano.PanoEntranceUtil.thumbnailNotFound(this, "+d+", "+r+");' />"),i.push("<div class='panoInfoBoxTitleBg' style='width:"+d+"px;'></div><a href='javascript:void(0)' class='panoInfoBoxTitleContent' >进入全景&gt;&gt;</a>"),i.push("</div>"),o=i.join(""),l){case"top":t=o+t;break;case"bottom":t+=o;break;case"middle":t=n(t,o,a.elemIndexArr)}return t},enterPanorama:function(t,e,a,n){addStat(STAT_CODE.STAT_STREETVIEW,{from:a,catalog:n});var i={point:new BMap.Point(t.panoMarker.px,t.panoMarker.py),buslineUid:t.buslineUid,uid:t.uid,panoId:t.panoId,panoType:"street",panoHeading:t.panoMarker.heading,from:n,addr:t.panoMarker.addr,name:t.panoMarker.name,markers:[],panoMarkers:[],hasRouteVideo:t.hasRouteVideo};"routeaddr"===n&&(i.research=!0,i.searchParam={uid:t.uid});for(var o=0,s=e.length;s>o;o++)i.markers.push(e[o].panoMarker);s>2&&i.markers[0].pid==i.markers[1].pid&&(i.markers.splice(1,1),s--),s>2&&i.markers[s-1].pid==i.markers[s-2].pid&&i.markers.splice(s-2,1);for(var o=0,s=i.markers.length;s>o;o++)i.markers[o].pid===i.panoId&&(i.panoMarkers.push(i.markers[o]),!i.panoMarkers[0].poiuid&&i.uid&&(i.panoMarkers[0].poiuid=i.uid));"routeVideo_button"==a&&(i.playRouteVideo=!0),window.__$old?r.showPano(i):d.showPano(i)}};l=baidu.lang.createSingle(l),u.PanoEntranceUtil=l,a.exports=l});