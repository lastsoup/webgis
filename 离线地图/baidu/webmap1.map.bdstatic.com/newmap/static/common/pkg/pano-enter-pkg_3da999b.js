define("common:widget/ui/StreetViewUtil/StreetViewUtil.js",function(e,t,i){function o(e){T.lang.Class.call(this),this.cinfo=e||{},this.initialize(e)}{var n=window.Pano=window.Pano||{},a=e("common:widget/ui/StreetViewOverlay/StreetViewOverlay.js"),s=e("common:widget/ui/PanoService/PanoService.js"),r=e("common:widget/pano/PanoInterface/PanoInterface.js"),l=e("common:widget/ui/PanoUtil/PanoUtil.js");e("common:widget/ui/config/config.js")}T.lang.inherits(o,T.lang.Class,"StreetViewUtil"),T.object.extend(o.prototype,{mapDragging:!1,hasEvents:!1,initialize:function(){try{var e=this.cinfo;this._map=e.map||map,this.panoTool=e.panoTool||{},this.defaultCursor=this._map.config.defaultCursor,this.draggingCursor=this._map.config.draggingCursor,this.bindEvents();var t=-100,i=-100,o=this.getMapPoint(t,i);this.addPanoOverlay(o)}catch(n){"undefined"!=typeof alog&&alog("http://webmap1.map.bdstatic.com/newmap/static/common/pkg/exception.fire","catch",{msg:n.message||n.description,path:"common:widget/ui/StreetViewUtil/StreetViewUtil.js",ln:49})}},bindEvents:function(){if(!this.hasEvents){{var e=this,t=window,i=(this.guid,this._map),o=i.getContainer(),n=e.panoTool.getDom();baidu.g("tool_container")}i.disableKeyboard(),i.disableDoubleClickZoom(),i.setDefaultCursor("pointer"),e.streetViewMove=function(t){if(e.panoMarker){if(e.panoTool&&e.panoTool.isOpen){if(t.overlay&&"indoorIcon"!==t.overlay._type&&!(t.overlay instanceof BMap.Polygon))return void e.panoMarker.hide();e.dragging=!0,e.movePanoOverlay(t.point,t.pixel,t.overlay&&"indoorIcon"===t.overlay._type)}}else e.dragging=!1,e.addPanoOverlay(t.point)},e.setPanoStatus=function(t){var i=t.type;e.panoMarker&&e.panoTool.isOpen&&("onmouseover"==i||"mouseover"==i?e.panoMarker.hide():("onmouseout"==i||"mouseout"==i)&&e.panoMarker.show())},baidu.on(o,"mouseleave",function(){e.panoMarker&&e.panoMarker.hide()}),baidu.on(n,"mouseover",e.setPanoStatus),baidu.on(n,"mouseout",e.setPanoStatus),t.stdMapCtrl.addEventListener("mouseover",e.setPanoStatus),t.stdMapCtrl.addEventListener("mouseout",e.setPanoStatus),t.maptypeCtrl.addEventListener("mouseover",e.setPanoStatus),t.maptypeCtrl.addEventListener("mouseout",e.setPanoStatus);var a=["tool_fullScr","tool_tollCon","link","print"];baidu("#tool_container_con").delegate(".toolBtn","click",function(t){baidu.array(a).contains(this.id)||(e.resetStatus(),e.panoTool.resetStatus()),t.preventDefault()}),baidu("#tools_box").delegate(".toolBox-item","click",function(t){baidu.array(a).contains(this.id)||(e.resetStatus(),e.panoTool.resetStatus()),t.stopPropagation()}),this.bindMapEvents(),this.hasEvents=!0}},bindMapEvents:function(){var e=this,t=this._map,i=(t.getContainer(),this.panoTool,this.guid);t.addEventListener("click",function(t){t.overlay||(baidu.event.preventDefault(t.domEvent),baidu.event.stopPropagation(t.domEvent),e.streetViewMapClick(t))},i+"_map_click"),t.addEventListener("mousemove",this.streetViewMove),t.addEventListener("rightclick",function(t){baidu.event.preventDefault(t.domEvent),baidu.event.stopPropagation(t.domEvent),e.mapRightClick(t),window.contextMenu.disable(),setTimeout(function(){window.contextMenu.enable()},250)},i+"_map_right_click"),t.addEventListener("moving",function(){e.mapDragging=!0},i+"_moving"),t.addEventListener("moveend",function(){e.mapDragging=!1},i+"_moveend")},removeEvents:function(){{var e=this,t=window,i=this.guid,o=this._map,n=(o.getContainer(),e.panoTool.getDom());baidu.g("tool_container")}o.enableKeyboard(),o.enableDoubleClickZoom(),baidu.un(n,"mouseover",e.setPanoStatus),baidu.un(n,"mouseout",e.setPanoStatus),o.removeEventListener("mousemove",this.streetViewMove),o.removeEventListener("moving",i+"_moving"),o.removeEventListener("moveend",i+"_moveend"),o.removeEventListener("click",i+"_map_click"),o.removeEventListener("rightclick",i+"_map_right_click"),t.stdMapCtrl.removeEventListener("mouseover",e.setPanoStatus),t.stdMapCtrl.removeEventListener("mouseout",e.setPanoStatus),t.maptypeCtrl.removeEventListener("mouseover",e.setPanoStatus),t.maptypeCtrl.removeEventListener("mouseout",e.setPanoStatus),baidu("#tool_container_con").undelegate(".toolBtn","click"),baidu("#tools_box").undelegate(".toolBox-item","click"),this.hasEvents=!1},streetViewMapClick:function(e){this.guid,this._map.getContainer();this._map.removeEventListener("mousemove",this.streetViewMove),this.panoMarker&&this.panoMarker.dragTimer&&window.clearTimeout(this.panoMarker.dragTimer),this.showStreetView(e.point)},mapRightClick:function(){this.resetStatus(),this.panoTool&&this.panoTool.resetStatus()},resetStatus:function(){this.isOpen=!1,this.mapDragging=!1,this.curPixel=null,this.removeEvents(),this.panoMarker&&this.panoMarker.hide(),this.tipLabel&&this.tipLabel.hide(),this._map.setDefaultCursor(this.defaultCursor),this._map.setDraggingCursor(this.draggingCursor)},miniful:function(){return function(e){if(e){this.isMiniful=!0,this.panoMarker.miniful(!0)}else this.isMiniful=!1,this.panoMarker.miniful(!1)}}(),getMapPoint:function(e,t){if(!isNaN(e)&&!isNaN(t)){var i=this._map,o=i.getContainer(),n=T.dom.getPosition(o),a=e-n.left,s=t-n.top,r=new BMap.Pixel(a,s);return i.pixelToPoint(r)}},addPanoOverlay:function(e){this.panoMarker||(this.panoMarker=new a(e,{}),this._map.addOverlay(this.panoMarker),l.panoMarker&&l.panoMarker.remove(),l.panoMarker=this.panoMarker)},movePanoOverlay:function(e,t,i){this.tipLabel&&this.tipLabel.hide(),this.panoMarker.enableMove&&(this.mapDragging||(this.panoMarker.setPosition(e,t,i),this.curPixel=t))},showStreetView:function(e){var t=(this._map.getContainer(),this);s.getStreetBriefByLocation({point:e,level:t._map.getZoom(),from:"mapclick"http://webmap1.map.bdstatic.com/newmap/static/common/pkg/},function(e){0==e.error&&e.content&&e.content.id?(t.setPanoMap(e),t.panoMarker&&t.panoMarker.hide(),setTimeout(function(){t._map.addEventListener("mousemove",t.streetViewMove)},500)):t._map.addEventListener("mousemove",t.streetViewMove)},t)},setPanoMap:function(e){var t=e.content.id,i=e.content.point,o=(this._map.getSize(),{panoId:t,panoType:"street",interPosition:i});r.showPano(o),addStat(STAT_CODE.STAT_PANORAMA,{item:n.PANO_TYPE_STREET,catalog:"map",func:"click",from:"pc-map"})},showTip:function(e){if(this.tipLabel)this.tipLabel.setPoint(e),this.tipLabel.show(),this.panoMarker.hideBubble(),this.delayHide();else{var t={point:e,offset:new BMap.Size(-40,30)};this.tipLabel=new BMap.Label("<div style='text-align:center;margin-top:5px;'>此处无全景</div ><div style='color:#4869a5;' >请点击蓝色路网</div>",t),this.tipLabel.setStyle({backgroundColor:"#fff",borderColor:"#b1b1b1",borderWidth:"1px",fontSize:"12px",height:"50px",lineHeight:"20px",fontFamily:"微软雅黑"}),this._map.addOverlay(this.tipLabel),this.panoMarker.hideBubble(),this.delayHide()}},delayHide:function(){var e=this;this.tipTimer&&window.clearTimeout(this.tipTimer),this.tipTimer=window.setTimeout(function(){e.tipLabel.hide()},3e3)}}),i.exports=o});
;define("common:widget/ui/StreetViewLayer/StreetViewLayer.js",function(e,t,i){function a(e){baidu.lang.Class.call(this),this._map=e.map||map,this.PANO_URL=d.PANO_ROAD_LAYER,this.udtVersion=s.UDT_VERSION||"20130929",this.visible=!1,this.layerId=""}var o=(window.Pano=window.Pano||{},e("common:widget/ui/config/config.js")),n=e("common:widget/ui/PanoUtil/PanoUtil.js"),r=e("common:widget/pano/PanoInterface/PanoInterface.js"),s=o.mapVersion,d=o.urlConfig;baidu.lang.inherits(a,baidu.lang.Class,"StreetViewLayer"),baidu.object.extend(a.prototype,{show:function(){this.addLayer(),this.dispatchEvent("onshow",{visible:!0})},hide:function(){this.removeLayer(),this.dispatchEvent("onhide",{visible:!1})},getVisible:function(){return this.visible},addLayer:function(){if(this._map&&!this._map.getTileLayer(this.layerId)){var e=this,t=!0,i=256,a=this._map.getMapType()==BMAP_NORMAL_MAP?"il":"sl";this.tilelayer=new BMap.TileLayer({transparentPng:t}),this.tilelayer.zIndex=1,this.tilelayer.getTilesUrl=function(t,o){var n=BMap.MapType[this.getMapType()];if("object"!=typeof n||!t||0>o)return null;var r=Math.pow(2,18-o)*i,s=parseInt(t.lng/r),d=parseInt(t.lat/r),h=e.PANO_URL+"/tile/?udt="+e.udtVersion+"&qt=tile&styles="+a+"&x="+s+"&y="+d+"&z="+o;return T.browser.ie&&T.browser.ie<=6&&(h+="&color_dep=32"),h},this._map.addTileLayer(this.tilelayer),this.layerId=this.tilelayer.getMapType(),this.visible=!0,window.isPhotoTourSupported&&this.addPhotoTourLayer()}},addPhotoTourLayer:function(){var e={uid:"d270a38b230b50fced74f8f7",bound:{xmin:12958063,ymin:4826872,ymax:4826984,xmax:12958159},name:"故宫照片游",catalog:"street_1",type:"street",icon:{y:4826928,x:12958111}},t=new BMap.Marker(new BMap.Point(e.icon.x,e.icon.y),{icon:new BMap.Icon("../../../../../webmap0.map.bdstatic.com/newmap/static/common/images/pano_whole/phototour_indoor_icon_59074d3.png"/*tpa=http://webmap0.map.bdstatic.com/newmap/static/common/images/pano_whole/phototour_indoor_icon_59074d3.png*/,new BMap.Size(24,28),{offset:new BMap.Size(10,12),infoWindowOffset:new BMap.Size(5,0)}),zIndexFixed:!0,baseZIndex:3e6});this._photoMarker=t,t.addEventListener("mouseover",function(){n.panoMarker.enableIndoorOverlay(new BMap.Point(e.icon.x,e.icon.y),e.uid,e.name)}),t.addEventListener("mouseout",function(){n.panoMarker.disableIndoorOverlay()}),t.addEventListener("click",function(t){r.showPhotoTour(e.uid),T.event.stopPropagation(t.domEvent)}),this._map.addOverlay(t)},removePhotoTourLayer:function(){this._photoMarker&&(this._map.removeOverlay(this._photoMarker),this._photoMarker=null)},removeLayer:function(){var e=this._map.getTileLayer(this.layerId);e&&(this._map.removeTileLayer(e),this.layerId=""),this.visible=!1,this.removePhotoTourLayer()},getLayerId:function(){return this.layerId},update:function(){this.removeLayer(),this.addLayer()}}),i.exports=a});
;define("common:widget/ui/StreetViewOverlay/StreetViewOverlay.js",function(t,i,e){function o(t,i,e){0!=i.indexOf("on")&&(i="on"+i);var o=new baidu.lang.Event(i);if(e)for(var n in e)o[n]=e[n];t.dispatchEvent(o)}var n=t("common:widget/ui/util/util.js"),s=t("common:widget/ui/PanoService/PanoService.js"),a=t("common:widget/ui/config/config.js"),r=function(t,i){t&&t instanceof BMap.Point&&(this._map=null,this._position=t,this._container=null,this._size=null,this.enableMove=!0,this.hasContent=!1,i=i||{},this._opts=baidu.extend(baidu.extend(this._opts||{},{enableDragging:!1,enableMassClear:!1,anchor:new BMap.Size(0,0)}),i),this.PANO_IMG="url(http://webmap1.map.bdstatic.com/newmap/static/common/images/panorama/pano_markers_1f7469f.png)",this.PANO_IMG_PNG8="url(http://webmap0.map.bdstatic.com/newmap/static/common/images/panorama/pano_markers_png8_17354c0.png)",this.PANO_OFFSET_ICON=["-408px -72px","-384px -72px","-432px -72px"],this.PANO_OFFSET=[25,42],this.MOVE_DIRECT={LEFT:0,MIDDLE:1,RIGHT:2},this.preX=0,this.preY=0,this.BUBBLE_IMG="url(http://webmap0.map.bdstatic.com/newmap/static/common/images/street_overview_04ceb33.gif)",this.BUBBLE_OFFSET=[[0,0],[75,75],[0,165],[-75,75]],this.BUBBLE_CLS=[{width:112,height:122,backgroundPosition:"-2px -2px",_margin:"3px 0px 0 3px",_txtMargin:"auto",_ie6Margin:"5px 3px 3px 3px"},{width:125,height:112,backgroundPosition:"-2px -135px",_margin:"3px 0px 0 16px",_txtMargin:"auto auto auto 17px",_ie6Margin:"5px 3px 3px 17px"},{width:112,height:122,backgroundPosition:"-122px -2px",_margin:"15px 3px 0 3px",_txtMargin:"auto",_ie6Margin:"17px 3px 3px 3px"},{width:122,height:112,backgroundPosition:"-133px -133px",_margin:"3px 17px 0 3px",_txtMargin:"auto 3px",_ie6Margin:"5px 16px 3px 3px"}],this.defPos=new BMap.Pixel(0,0),this.defStatus=0,this.preDirect=1,this.imgSize=75,this.defImg="../images/streetview_no_b14ce20.png"/*tpa=http://webmap1.map.bdstatic.com/newmap/static/common/images/streetview_no_b14ce20.png*/)};r.prototype=new BMap.Overlay,r.prototype.initialize=function(t){try{var i=this,e=i._container=document.createElement("div");return i._map=t,baidu.extend(e.style,{zIndex:99999,background:"#FFF",cursor:"pointer"}),i._setOverlayContent(),i._getContainerSize(),e}catch(o){"undefined"!=typeof alog&&alog("http://webmap1.map.bdstatic.com/newmap/static/common/pkg/exception.fire","catch",{msg:o.message||o.description,path:"common:widget/ui/StreetViewOverlay/StreetViewOverlay.js",ln:186})}},r.prototype.draw=function(t){var i=this._map,e=this._opts.anchor,o=i.pointToOverlayPixel(this._position);this._container.style.left=o.x+e.width+"px",this._container.style.top=o.y+e.height+"px",this._drawPano(o),this._drawBubble(o,t)},r.prototype.enable=function(){this.enableMove=!0},r.prototype.disable=function(){this.enableMove=!1},r.prototype.hideBubble=function(){this.bubble.style.display="none"},r.prototype.showBubble=function(){this.bubble.style.display="block"},r.prototype.hidePanoCursor=function(){this.panoCursor.style.display="none"},r.prototype.showPanoCursor=function(){this.panoCursor.style.display="block"},r.prototype.miniful=function(t){t?(this.bubble.style.visibility="hidden",this.panoCursor.style.visibility="hidden",this.panoCursor.style.height="10px"):(this.panoCursor.style.height="40px",this.bubble.style.visibility="",this.panoCursor.style.visibility=""),this.isMiniful=t?!0:!1},r.prototype.enableDragging=function(){this._opts.enableDragging=!0},r.prototype.disableDragging=function(){this._opts.enableDragging=!1},r.prototype.isDraggable=function(){return this._opts.enableDragging},r.prototype.getPosition=function(){return this._position},r.prototype.setPosition=function(t,i,e){!t instanceof BMap.Point||(this._position=t,this._pixel=i,this.draw(e),!e&&this._getPanoInfo(t,e))},r.prototype._getContainerSize=function(){if(this._container){var t=this._container.offsetHeight,i=this._container.offsetWidth;this._size=new BMap.Size(i,t)}},r.prototype.remove=function(){o(this,"onremove"),this._container&&n.purgeEvents(this._container),this._container&&this._container.parentNode&&this._container.parentNode.removeChild(this._container),this._reset()},r.prototype._setOverlayContent=function(){var t=this.panoCursor=document.createElement("div"),i=this.bubble=document.createElement("div"),e=this.bubImgHolder=document.createElement("div"),o=this.bubbleImg=document.createElement("img"),n=this.bubbleTxt=document.createElement("div"),s=baidu.browser.ie<7?this.PANO_IMG_PNG8:this.PANO_IMG;baidu.extend(t.style,{position:"absolute",backgroundImage:s,backgroundRepeat:"no-repeat",backgroundPosition:"-384px -72px",cursor:"pointer",width:"24px",height:"40px"}),baidu.extend(i.style,{position:"absolute",backgroundImage:this.BUBBLE_IMG,backgroundRepeat:"no-repeat",overflow:"hidden",padding:"3px",zoom:1}),baidu.extend(o.style,{width:"100px",height:"75px"}),baidu.extend(n.style,{width:"100px",height:"19px",lineHeight:"19px",overflow:"hidden",font:"13px '宋体'"}),e.appendChild(o),i.appendChild(e),i.appendChild(n),this._container.appendChild(t),this._container.appendChild(i),this._map.getPanes().labelPane.appendChild(this._container);var a=this.tipDom=document.createElement("div");a.innerHTML='<div class="tip_cont">右键关闭全景模式</div>',baidu.extend(a.style,{border:"1px solid #dbb051",color:"#666",backgroundColor:"#fcfef1",position:"absolute",textAlign:"center",padding:"0 10px",height:"22px",lineHeight:"22px",top:"40px",left:"30px",whiteSpace:"nowrap"}),t.appendChild(a),this._bindEvents(),this.autoHideTipTimer=setTimeout(function(){},5e3)},r.prototype._bindEvents=function(){var t=this,i=(this.bubbleMask,this.bubbleImg),e=this.bubbleTxt;i.src=this.defImg,baidu.on(i,"onload",function(){}),baidu.on(i,"onerror",function(){e.innerHTML="暂无数据",i.src=t.defImg})},r.prototype._drawPano=function(t){var i=this.panoCursor,e=i.clientWidth,o=i.clientHeight,n=t.x-parseInt(e/2),s=t.y-o;i.style.left=n+"px",i.style.top=s+"px",this._setDirectIcon(t)},r.prototype._drawBubble=function(t,i){var e=this.getBubbleStatus(t);if(-1==e)return void(this.bubble.style.display="none");switch(this.isMiniful&&!this.hasContent&&(this.bubble.style.visibility="hidden"),e){case 0:this.tipDom.style.left="40px",this.tipDom.style.top="30px";break;case 1:this.tipDom.style.left="0px",this.tipDom.style.top="70px";break;case 2:this.tipDom.style.left="40px",this.tipDom.style.top="10px";break;case 3:this.tipDom.style.left="-80px",this.tipDom.style.top="70px"}this._setBubble(t,e,i)},r.prototype._setBubble=function(t,i,e){this.bubble.style.display="block";var o=this._getBubPos(t,i,e),n=this.BUBBLE_CLS[i];baidu.setStyles(this.bubble,{width:n.width+"px",height:n.height+"px",backgroundPosition:n.backgroundPosition,left:o.x+"px",top:o.y+"px"}),this.bubImgHolder.style.margin=baidu.browser.ie<=7?n._ie6Margin:n._margin,this.bubbleTxt.style.margin=n._txtMargin},r.prototype.getBubbleStatus=function(t){{var i,e,o,n,s,a,r,p=this._getMapSize(),h=0,l=0,u=p.width,b=p.height;map.getSize()}return i=this._pixel?this._pixel.x:t.x+h,e=this._pixel?this._pixel.y:t.y+l,o=Math.abs(i-h),n=Math.abs(u-i),s=Math.abs(e-l),a=Math.abs(b-e),r=2,r=o>60&&n>60&&s>160?0:o>60&&n>60&&a>160&&160>s?2:n>150&&s>80&&a>80?1:o>160&&60>n&&a>60?3:-1},r.prototype._setDirectIcon=function(t){{var i=t.x,e=t.y,o=1,n=i-this.preX;e-this.preY}Math.abs(n)>0&&(this.preX>1&&0>n?o=this.MOVE_DIRECT.LEFT:this.preX>1&&n>0&&(o=this.MOVE_DIRECT.RIGHT),this.preDirect!=o&&(this.panoCursor.style.backgroundPosition=this.PANO_OFFSET_ICON[o]),this.preX=i,this.preY=e,this.preDirect=o)},r.prototype._setDefDirect=function(){this.panoCursor.style.backgroundPosition=this.PANO_OFFSET_ICON[1]},r.prototype._getPanoInfo=function(t,i){var e=this;this.dragTimer&&window.clearTimeout(this.dragTimer),this.dragTimer=window.setTimeout(function(){e._setDefDirect(),s.getStreetBriefByLocationMove({point:t,level:e._map.getZoom(),from:"mapmove"},function(t){if(window.streetViewTool.isOpen){var o=t.content;if(!o)return void this.hide();this.show(),this.enableMove&&this.draw(i),this.enableMove&&e._setBubInfo(o),this.isMiniful&&(t.content&&t.content.rname?(this.bubble.style.visibility="",this.hasContent=!0):(this.bubble.style.visibility="hidden",this.hasContent=!1))}},e)},200)},r.prototype._setBubInfo=function(t){var i=t.panoImg,e=t.rname;e=baidu.string.getByteLength(e)>15?baidu.string.subByte(e,12)+"...":e,this.bubbleImg.src=i?i:this.defImg,this.bubbleTxt.innerHTML=e||"未知道路"},r.prototype._getBubPos=function(t,i,e){var o=this.BUBBLE_CLS[i],n=this.BUBBLE_OFFSET[i],s=(this.panoCursor.clientWidth,this.panoCursor.clientHeight),a=parseInt(o.width/2),r=parseInt(o.height),p=t.x-a+n[0],h=t.y-r-s+n[1];if(e){var l=[[-55,-135],[15,-55],[-55,13],[-140,-55]];return{x:t.x+l[i][0],y:t.y+l[i][1]}}return{x:p,y:h}},r.prototype.enableIndoorOverlay=function(t,i,e){function o(t,i,e,o){function s(t,i){var e="http://pcsv0.map.bdimg.com/scape/?udt=201400606&qt=idata&iid="+t;baidu.jsonp(e,function(t){var e=t.content[0].interinfo,o=null,n="",s="",r="";if(e&&e.Floors.length>0){for(var p=e.Floors.length-1;p>=0;p--)e.Floors[p].Floor==e.Defaultfloor&&(o=e.Floors[p].Points[0]);o&&(n=o.PID,s=o.movedir,r=0)}var h=a.urlConfig.PANO_3DIMAGE_URL+"/?qt=pr3d&fovy=75&quality=80&panoid="+n+"&heading="+s+"&pitch="+r+"&width=100&height=75";i(h)},{cbtype:"fn"})}var r=o.pointToPixel(t);return r.x+=350,r.y+=110,n.setPosition(t,r,!0),"d270a38b230b50fced74f8f7"==i?void(n.enableMove||n._setBubInfo({panoImg:"../../../../photoTureDataRequest/main.png"/*tpa=http://webmap1.map.bdstatic.com/photoTureDataRequest/main.png*/,rname:"故宫照片游"})):void s(i,function(t){n.enableMove||n._setBubInfo({panoImg:t,rname:e})})}this.disable(),this.hidePanoCursor();var n=this;o(t,i,e,this._map)},r.prototype.disableIndoorOverlay=function(){this.enable(),this.showPanoCursor()},r.prototype._getMapSize=function(){var t=this._map.getContainer(),i=T.dom.getPosition(t),e=t.clientWidth,o=t.clientHeight;return{left:i.left,top:i.top,right:i.left+e,bottom:i.top+o,width:e,height:o}},r.prototype._reset=function(){this._setDefDirect(),this._setBubble(this.defPos,this.defStatus),this.bubbleTxt.innerHTML="正在加载中...",this.bubbleImg.src=this.defImg,this.preX=0,this.preY=0},e.exports=r});
;define("common:widget/ui/PanoPoiClick/PanoPoiClick.js",function(t,o,n){function a(e){var e=window.event||e;baidu.event.stopPropagation(e),baidu.event.preventDefault(e)}var i=t("common:widget/ui/config/config.js"),r=t("common:widget/ui/PanoUtil/PanoUtil.js"),p=t("common:widget/pano/PanoInterface/PanoInterface.js"),s=(i.mapConfig,i.modelConfig,i.mapVersion),c=null,m=function(e,t){this._map=e,this.cbfunction=t,this.cacheData={},this.maxCache=8,this.cacheIds=[],this.poiSpotId=null,this.spotOnId="",this.spotOnUid=null,this.mkr=null,this.label=null,this.squareSide=4,this.tMkr=null,this.tempMarker=null,this.overSpotPoint=null,this.isMoving=!1,this.fetchId="",this.curTileId="",this.labelName="",this.ic=new BMap.Icon("../images/panorama/pano_click_poi_9d48465.png"/*tpa=http://webmap1.map.bdstatic.com/newmap/static/common/images/panorama/pano_click_poi_9d48465.png*/,new BMap.Size(20,24),{offset:new BMap.Size(10,12),infoWindowOffset:new BMap.Size(5,0)}),this.clickVersion=s.INDOOR_CLICK_VER||"1003",this.init()};c=m.prototype,c.init=function(){this.bind()},c.refresh=function(e){var t=this;t.clearPoiCache(),t.hideOverlays(),t.tMkr=null,t.tempMarker=null,t.spotOnId=null,t._map=e,t.init()},c.bind=function(){this.bindMapRequest(),this.bindMouseMove(),this.bindSpotEvent()},c.bindMapRequest=function(){var e=this;e._map.addEventListener("tilesloaded",function(){map.getZoom()<10&&e.clearPoiCache()}),e._map.addEventListener("zoomend",function(){e.clearPoiCache(),e.hideOverlays()})},c.bindMouseMove=function(){var e=this;e._panomouseMoveEvent||(e._panomouseMoveEvent=function(t){e.mouseMoveEvent(t)}),e._map.addEventListener("mousemove",e._panomouseMoveEvent)},c.mouseMoveEvent=function(e){var t=this;if(t._map.getZoom()<10)t.clearPoiCache();else{if(!e||!e.point)return;t.overSpotPoint=e.point,t.isMoving=!0;var o=t._map.getTileId(e.point,t._map.getZoom());if(!o.row||!o.column||!o.level)return;t.curTileId=o.level+"_"+o.row+"_"+o.column;var n=o.level+"_"+t.m1(o.row)+"_"+t.m1(o.column);t.cacheData[n]?t.spotOnId!=t.curTileId&&(t.clearPoiCache(),t._addSpot(t.curTileId)):t.sendRequest({l:o.level,x:t.m1(o.row),y:t.m1(o.column)})}},c._addSpot=function(e){var t=this,o=e.split("_"),n=o[0]+"_"+t.m1(o[1])+"_"+t.m1(o[2]);if(t.cacheData[n]){var a=t.cacheData[n][e]?t.cacheData[n][e]:!1;if(a){t.poiSpotId=t._map.addSpots(a,{enableMultiResponse:!1}),t.spotOnId=e;for(var i=-1,r=0,p=t.cacheIds.length;p>r;r++)if(n==t.cacheIds[r]){i=r;break}i>=0&&(t.cacheIds.splice(i,1),t.cacheIds.push(n))}}},c.sendRequest=function(e){var t=this;if(e&&t.fetchId!=e.l+"_"+e.x+"_"+e.y){t.fetchId=e.l+"_"+e.x+"_"+e.y;var o=e.x+"_"+e.y+"_"+e.l+"_"+this.clickVersion;baidu.jsonp("http://pcsv0.map.bdimg.com/?qt=ck&tid="+o,{cbtype:"fn",success:function(e){e=e&&e.content||{},e&&e.length>0&&t.getPoiData(e)},error:function(){}})}},c.getPoiData=function(e){for(var t={},o=!1,n=this,a=0,i=e.length;i>a;a++){for(var r=[],p=e[a],s=0,c=p.uids.length;c>s;s++){var m=p.uids[s],d=(m.bound.xmax+m.bound.xmin)/2,u=(m.bound.ymax+m.bound.ymin)/2,l=n._map.pointToPixel(new BMap.Point(m.bound.xmin,m.bound.ymin)),v=n._map.pointToPixel(new BMap.Point(m.bound.xmax,m.bound.ymax)),h=[(l.x-v.x)/2,(v.y-l.y)/2,(v.x-l.x)/2,(l.y-v.y)/2];"street_1"!=m.catalog&&r.push({pt:new BMap.Point(d,u),bd:h,userdata:{name:m.name?m.name:"",uid:m.uid,type:m.type,iconpoint:m.icon?new BMap.Point(m.icon.x,m.icon.y):""},tag:"MAP_SPOT_INFO"})}n.curTileId&&n.curTileId==p.tileid&&(o=!0),t[p.tileid]=r}var _=e[0].tileid.split("_"),f=_[0]+"_"+n.m1(_[1])+"_"+n.m1(_[2]);if(n.cacheData[f]=t,n.cacheIds.push(f),n.cacheIds.length>n.maxCache){var M=n.cacheIds.shift();delete n.cacheData[M],delete M}o&&n._addSpot(n.curTileId)},c.bindSpotEvent=function(){var e=this;e.addSpotEvent()},c.addSpotEvent=function(){var e=this;e._panomoveOverSpot||(e._panomoveOverSpot=function(t){a(t),e.moveOverSpot(t)}),e._panomoveOutSpot||(e._panomoveOutSpot=function(t){e.moveOutSpot(t)}),e._map.addEventListener("spotmouseover",e._panomoveOverSpot),e._map.addEventListener("spotmouseout",e._panomoveOutSpot)},c.removeSpotEvent=function(){var e=this;e._map.removeEventListener("mousemove",e._panomouseMoveEvent),e._map.removeEventListener("spotmouseover",e._panomoveOverSpot),e._map.removeEventListener("spotmouseout",e._panomoveOutSpot)},c.moveOverSpot=function(e){var t=this;if(!(t._map.getZoom()<10)){var o=e.spots;if(o&&!(o.length<1)&&o[0].tag&&"MAP_SPOT_INFO"==o[0].tag){var n=o[0].userdata.iconpoint?o[0].userdata.iconpoint:o[0].pt;if(t.tempMarker&&t.tempMarker.map?(t.tempMarker.setPoint(n),t.tempMarker.show(),t.spotOnUid=o[0].userdata.uid):(t.tempMarker=new BMap.Marker(n,{icon:t.ic,zIndexFixed:!0,baseZIndex:3e6}),t.tempMarker._type="indoorIcon",t.spotOnUid=o[0].userdata.uid,t._map.addOverlay(t.tempMarker),t.mkr=t.tempMarker,t.tempMarker.addEventListener("click",function(e){t.clickMkr(),a(e)})),t.tempMarker.setTop(!0),t.tMkr=t.tempMarker,"_panoPoiClick"==t.cbfunction&&r.panoMarker){var i=o[0].userdata;r.panoMarker.enableIndoorOverlay(n,i.uid,i.name)}}}},c.moveOutSpot=function(){var e=this;e._map.getZoom()<10||("_panoPoiClick"==e.cbfunction&&r.panoMarker&&r.panoMarker.disableIndoorOverlay(),e.tMkr=null,e.hideOverlays())},c.moveSpot=function(e){a(e)},c.clickMkr=function(){{var t=this;t.tMkr}t._map.removeOverlay(t.tempMarker),t.tMkr=null,t.tempMarker=null,t.spotOnId=null;var o={panoIId:t.spotOnUid,panoType:"inter"};p.showPano(o),a(e),addStat(STAT_CODE.STAT_PANORAMA,{item:Pano.PANO_TYPE_INDOOR,catalog:"map",func:"click",from:"pc-map"})},c.clearPoiCache=function(){var e=this;e.poiSpotId&&(e._map.removeSpots(e.poiSpotId),e.poiSpotId=null,e.spotOnId=null)},c.hideOverlays=function(){var e=this;e.mkr&&e.mkr.hide(),e.label&&e.label.hide()},c.m1=function(e){return Math.floor(parseInt(e,10)/this.squareSide)},n.exports=m});