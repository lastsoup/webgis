define("common:widget/ui/StreetView/StreetView.js",function(o,n,t){function e(o,n){T.lang.Class.call(this),this.panoType=Pano.PANO_TYPE_STREET,this.panoInt=Pano.PanoInteract,this.panoDomain=s.PANO_URL,this.udtVersion=r.UDT_VERSION||"20130819",this.loadSwf="../../../swf/pano/BaiduPanoLoader_86f20aa.swf"/*tpa=http://webmap1.map.bdstatic.com/newmap/static/common/swf/pano/BaiduPanoLoader_86f20aa.swf*/,this.scapeSwf="../../../swf/pano/BDStreetScape_7aada2f.swf"/*tpa=http://webmap1.map.bdstatic.com/newmap/static/common/swf/pano/BDStreetScape_7aada2f.swf*/,this._init(o,n)}var i=(o("common:widget/ui/PanoInteract/PanoInteract.js"),o("common:widget/ui/PanoramaSwfUtil/PanoramaSwfUtil.js")),a=o("common:widget/ui/config/config.js"),s=(a.mapConfig,a.modelConfig,a.urlConfig),r=a.mapVersion;T.lang.inherits(e,T.lang.Class,"StreetView"),T.object.extend(e.prototype,{config:{},panoHolder:"",initVars:{},panoId:"",position:null,panoPov:null,panoLevel:1,panoSize:null,visible:!1,dbClickZoom:!0,scrollZoom:!0,keybordOp:!0,autoRotate:!1,hasBindEvents:!1,loaded:!1,_init:function(o,n){this.config=n||{},this.panoHolder=baidu.g(o),this._setInitVars(),this._createFlash(),this._bindEvents(),this._showPano()},_setInitVars:function(){var o=this.config,n=o.panoType||this.panoType,t=o.heading,e=o.pitch,i=o.poiUid||"",a=o.size||this.getPanoSize(),r=s.PANO_TILE_URL instanceof Array?s.PANO_TILE_URL.join("|"):s.PANO_TILE_URL,h="",d="";"inter"==n?(h=o.innerId,d=o.panoId):h=o.panoId,this.initVars={pid:h,iid:d,poiuid:i,panoType:n,heading:t,pitch:e,width:a.width,height:a.height,panoUrl:this.scapeSwf,domain:this.panoDomain,panoTileUrl:r,udtVersion:this.udtVersion,jsInterfaceNamespace:"Pano.PanoInteract"}},_createFlash:function(){baidu.g("PanoramaFlash")||i.create({id:"PanoramaFlash",width:"100%",height:"100%",allowscriptaccess:"always",scale:"showall",wmode:"opaque",quality:"best",url:this.loadSwf,ver:"10",errorMessage:"您未安装Flash Player播放器或者版本过低",vars:this.initVars},this.panoHolder)},getPanoSize:function(){var o=baidu.g(this.panoHolder),n=o.clientWidth,t=o.clientHeight;return{width:n,height:t}},_showPano:function(){this.panoHolder.style.display="block",this.panoHolder.style.visibility="visible",this.panoSize=this.config.size||this.getPanoSize(),this.show()},show:function(){var o=this.panoSize;this.panoHolder.style.visibility="visible",this.panoHolder.style.width=o.width+"px",this.panoHolder.style.height=o.height+"px",this.panoHolder.style.zIndex=10,this.setVisible(!0),this._bindMouseWheelEvent()},hide:function(){this.panoHolder.style.visibility="hidden",this.panoHolder.style.zIndex=-1e4,this.panoInt.closePano(),this.setVisible(!1),this._removeMouseWheelEvent()},remove:function(){this.hide(),this.panoHolder.innerHTML=""},setPano:function(o,n){if(n=n||{},"string"==typeof o&&o){var t=n.size||this.getSize(),e=this.panoType=n.panoType||this.panoType,i={panoType:e,width:t.width,height:t.height,heading:n.heading,pitch:n.pitch,x:n.x,y:n.y,poiuid:n.poiUid||""};this.panoInt.setPano(o,i)}this.setRoutParamsToFlash()},switchPano:function(o){"string"==typeof o&&o&&this.panoInt.switchPano(o)},getId:function(){return this.panoId},getPosition:function(){return this.position},getPov:function(){return this.panoPov},getZoom:function(){return this.panoLevel},getSize:function(){return this.panoSize},getVisible:function(){return this.visible},setId:function(o){"string"==typeof o&&o&&(this.panoId=o,this.setPano(o))},setPosition:function(o){"object"==typeof o&&(this.position=o)},setPov:function(o){o&&"object"==typeof o&&(this.panoPov=o,this.panoInt.setPov(o))},setZoom:function(o){!isNaN(o)&&o>=0&&(this.panoLevel=o,this.panoInt.setZoom(o))},setSize:function(o){"object"==typeof o&&(this.panoSize=o,this.panoHolder.style.width=o.width+"px",this.panoHolder.style.height=o.height+"px",this.panoInt.setSize(o))},setVisible:function(o){this.visible=o,this._onVisibleChange(o)},enableDoubleClickZoom:function(){this.dbClickZoom=!0},disableDoubleClickZoom:function(){this.dbClickZoom=!1},enableScrollWheelZoom:function(){this.scrollZoom=!0},disableScrollWheelZoom:function(){this.scrollZoom=!1},disableKeybord:function(){this.keybordOp=!0},enableKeybord:function(){this.keybordOp=!1},disableAutoRotate:function(){this.autoRotate=!0},enableAutoRotate:function(){this.autoRotate=!1},zoomIn:function(){this.panoLevel<3?this.panoLevel++:this.panoLevel,this.panoInt.zoom(1),this.dispatchEvent("onzoom",{ztype:zoomin})},zoomOut:function(){this.panoLevel>1?this.panoLevel--:this.panoLevel,this.panoInt.zoom(-1),this.dispatchEvent("onzoom",{ztype:zoomout})},addFlashMarkers:function(o){this.panoInt.addFlashMarkers(o)},clearMarkers:function(){this.panoInt.clearMarkers()},_bindEvents:function(){var o=this.panoInt,n=this,t=this.guid;o.addEventListener("onload",function(o){n._onLoad(o)},t+"_PanoLoaded"),o.addEventListener("onUnLoad",function(o){n._onUnLoad(o)},t+"_PanoUnLoaded"),o.addEventListener("onPanoChanged",function(o){n._onPanoChange(o)},t+"_PanoChanged"),o.addEventListener("onPovChanged",function(o){n._onPovChange(o)},t+"_PanoPovChanged"),o.addEventListener("onZoom",function(o){n._onZoom(o)},t+"_PanoZoomed"),o.addEventListener("onError",function(o){n._onError(o)},t+"_PanoFlashError"),o.addEventListener("onPOIClick",function(o){n._onPOIClick(o)},t+"_PanoPOIClick"),o.addEventListener("onFloorChanged",function(o){n._onFloorChange(o)},t+"_PanoFloorChange"),o.addEventListener("onEnterIndoor",function(o){n._onEnterIndoor(o)},t+"_PanoEnterIndoor"),o.addEventListener("onExitIndoor",function(o){n._onExitIndoor(o)},t+"_PanoExitIndoor"),o.addEventListener("onIndoorPanoChanged",function(o){n._onIndoorPanoChange(o)},t+"_IndoorPanoChange")},_removeEvents:function(){var o=this.panoInt;o.removeEventListener("onload",guid+"_PanoLoaded"),o.removeEventListener("onUnLoad",guid+"_PanoUnLoaded"),o.removeEventListener("onPanoChanged",guid+"_PanoChanged"),o.removeEventListener("onPovChanged",guid+"_PanoPovChanged"),o.removeEventListener("onZoom",guid+"_PanoZoomed"),o.removeEventListener("onError",guid+"_PanoFlashError"),o.removeEventListener("onPOIClick",guid+"_PanoPOIClick"),o.removeEventListener("onFloorChanged",guid+"_PanoFloorChange"),o.removeEventListener("onEnterIndoor",guid+"_PanoEnterIndoor"),o.removeEventListener("onExitIndoor",guid+"_PanoExitIndoor"),o.removeEventListener("onIndoorPanoChanged",guid+"_IndoorPanoChange")},_bindMouseWheelEvent:function(){var o=this.panoInt,n=this.panoHolder,t=this;baidu.browser.firefox?baidu.on(n,"DOMMouseScroll",function(n){baidu.event.stopPropagation(n),t.scrollZoom&&(o.zoom(-n.detail),t._addStat())}):baidu.on(n,"onmousewheel",function(n){baidu.event.stopPropagation(n),t.scrollZoom&&(o.zoom(n.wheelDelta),t._addStat())})},_removeMouseWheelEvent:function(){baidu.browser.firefox?baidu.un(this.panoHolder,"DOMMouseScroll"):baidu.un(this.panoHolder,"onmousewheel")},_onLoad:function(){this.loaded=!0,this.dispatchEvent("onLoad",{loaded:!0}),this.setRoutParamsToFlash()},_onUnload:function(){this.loaded=!1,this.dispatchEvent("onUnload",{unloaded:!0})},_onError:function(o){this.dispatchEvent("onError",{errorType:o.errorType})},_onPanoChange:function(o){this.dispatchEvent("onPanoChanged",o)},_onPovChange:function(o){this.dispatchEvent("onPovChanged",{pov:o})},_onPOIClick:function(o){this.dispatchEvent("onPOIClick",o)},_onZoom:function(o){this.dispatchEvent("onZoom",o)},_onVisibleChange:function(o){this.dispatchEvent("onVisibleChange",{visible:o})},_onFloorChange:function(o){this.dispatchEvent("onFloorChanged",o)},_onEnterIndoor:function(o){this.panoType=Pano.PANO_TYPE_INDOOR,this.dispatchEvent("onEnterIndoor",o)},_onExitIndoor:function(o){this.panoType=Pano.PANO_TYPE_STREET,this.dispatchEvent("onExitIndoor",o)},_onIndoorPanoChange:function(o){this.dispatchEvent("onIndoorPanoChanged",o)},_addStat:function(){"function"==typeof addStat&&addStat(STAT_CODE.STAT_STREETVIEW,{item:this.panoType,func:"zoom"})},_getNavParams:function(){var o="";return currentComponent&&"NavTrans"==currentComponent.name&&(o=currentComponent.getPanoNavParams()),o},setRoutParamsToFlash:function(){if(!this.isCloseRoutInFlash()){var o=this._getNavParams();o&&(this.panoInt.setRoutParams(o),addStat(STAT_CODE.STAT_STREETVIEW,{func:"enterrout"}))}},isCloseRoutInFlash:function(){for(var o=window.G_POC||[],n=0;n<o.length;n++)if(-999==o[n])return!0;return!1}}),t.exports=e});