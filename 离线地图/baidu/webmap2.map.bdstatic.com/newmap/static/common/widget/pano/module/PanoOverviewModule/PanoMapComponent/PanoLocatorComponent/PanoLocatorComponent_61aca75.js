define("common:widget/pano/module/PanoOverviewModule/PanoMapComponent/PanoLocatorComponent/PanoLocatorComponent.js",function(t,e,n){function i(t){this._opts=t,this.MAP_PAN_DIRECTION=[[0,0],[-1,-1],[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1]],this.DIV_ROTATE_DIRECTION=[[0,-19,-64],[22.5,-203,-59],[45,-391,-59],[67.5,-581,-58],[90,-778,-55],[112.5,-979,-50],[135,-1178,-55],[157.5,-1387,-51],[180,-1611,-60],[202.5,-1821,-61],[225,-2030,-65],[247.5,-2243,-73],[270,-2457,-62],[292.5,-2685,-65],[315,-2901,-70],[337.5,-3120,-70]];var e=t.position;e&&e instanceof BMap.Point&&(this._map=null,this._mapc=null,this._container=null,this._position=e,this._size=null,this._viewsetting=0,this._moving=!1,this._nowviewtype=0,this._viewtypetimer=null,this._dragMovePixel=null,this._arrowDirection="-168px -72px",this._direction=null,t=t||{},this._opts=baidu.extend(this._opts||{},{enableDragging:!0,anchor:new BMap.Size(-55,-55)}))}var o=t("common:widget/ui/util/util.js");baidu.lang.inherits(i,BMap.Overlay,"PanoLocatorComponent"),baidu.object.extend(i.prototype,{initialize:function(t){try{{this._opts}return this.initMapLocator(t)}catch(e){"undefined"!=typeof alog&&alog("http://webmap2.map.bdstatic.com/newmap/static/common/widget/pano/module/PanoOverviewModule/PanoMapComponent/PanoLocatorComponent/exception.fire","catch",{msg:e.message||e.description,path:"common:widget/pano/module/PanoOverviewModule/PanoMapComponent/PanoLocatorComponent/PanoLocatorComponent.js",ln:70})}},initMapLocator:function(t){var e=this,n=e._container=document.createElement("div"),i=document.createElement("div"),o="url(http://webmap1.map.bdstatic.com/newmap/static/common/images/panorama/pano_markers_1f7469f.png)!important";e._map=t,e._div=n,e._arrow=i,e._mapc=t.getContainer(),e._bgu=o;var a=baidu.dom.getPosition(this._mapc);return this._mapcTop=a.top,this._mapcLeft=a.left,e._rotating=!1,e._setDefCursor(),baidu.extend(n.style,{position:"absolute",zIndex:BMap.Overlay.getZIndex(e._position.lat),backgroundRepeat:"no-repeat",backgroundPosition:"-560px 0",cursor:"pointer",height:"110px",width:"110px"}),baidu(n).addClass("pano-fan"),baidu.extend(i.style,{position:"absolute",backgroundRepeat:"no-repeat",backgroundPosition:"0 0",left:"40px",height:"24px",width:"24px",marginTop:"40px"}),baidu(i).addClass("pano-overlay-ie"),n.appendChild(i),e._map.getPanes().labelPane.appendChild(n),n},draw:function(){var t,e=this,n=e._opts.anchor;t=e._map.pointToOverlayPixel(this._position),e._container.style.left=t.x+n.width+"px",e._container.style.top=t.y+n.height+"px"},enableDragging:function(){this._opts.enableDragging=!0},disableDragging:function(){this._opts.enableDragging=!1},getPosition:function(){return this._position},setPosition:function(t){this._position=t,this.draw()},getDirection:function(){return this._direction},setDirection:function(t){if(!isNaN(t)){var e=this._direction=t;this._getRotateDirection(e)}},setOffset:function(){var t=baidu.dom.getPosition(this._mapc);this._mapcTop=t.top,this._mapcLeft=t.left},remove:function(){this._dispatchEvent(this,"onremove"),this._container&&o.purgeEvents(this._container),this._container&&this._container.parentNode&&this._container.parentNode.removeChild(this._container)},_setDefCursor:function(){T.browser.firefox?(this.defaultCursor="-moz-grab",this.draggingCursor="-moz-grabbing"):T.browser.chrome||T.browser.safari?(this.defaultCursor="url(http://webmap0.map.bdstatic.com/newmap/static/common/images/api/openhand.cur) 8 8, default",this.draggingCursor="url(http://webmap1.map.bdstatic.com/newmap/static/common/images/api/closedhand.cur) 8 8, default"):(this.defaultCursor="url(http://webmap0.map.bdstatic.com/newmap/static/common/images/api/openhand.cur)",this.draggingCursor="url(http://webmap1.map.bdstatic.com/newmap/static/common/images/api/closedhand.cur)")},_getRotateDirection:function(t){if(!isNaN(t)){{var e=this.DIV_ROTATE_DIRECTION,n=0,i=t-31.75;e.length}if(i>e[15][0])this._div.style.backgroundPosition=e[15][1]+"px "+e[15][2]+"px";else for(var n=0;16>n;n++)if(i<e[n][0]){this._div.style.backgroundPosition=e[n][1]+"px "+e[n][2]+"px";break}}},_getMoveDirection:function(t,e){if(!isNaN(t)&&!isNaN(e)){var n=-1,i=t-this.preX;return this.preX>5&&0>i?n=0:this.preX>5&&i>0&&(n=1),this.preX=t,this.preY=e,n}},_setEventDispath:function(){function t(t){var t=window.event||t,n=t.pageX||t.clientX||0,i=t.pageY||t.clientY||0,o=new BMap.Pixel(n,i),a=e._map.pixelToPoint(o);return{pixel:o,point:a}}var e=this,n=e._container,i=e._arrow,o=e._mapc,a=(e._dom,e._angle,!1),p=!1,s=null;i.onclick=function(t){e._dispatchEvent(e,"onarrclick"),e.stopAndPrevent(t)},n.onclick=function(n){var i=t(n),o=i.pixel.x-e._mapcLeft,a=i.pixel.y-e._mapcTop,p=e._map.pointToPixel(e._position).x,s=e._map.pointToPixel(e._position).y,r=180-Math.atan2(o-p,a-s)/3.1415926/2*360;e._getRotateDirection(r),e._dispatchEvent(e,"oncircleclick",{point:i.point,pixel:i.pixel,angle:r}),e.stopAndPrevent(n)},n.onmousedown=function(i){var p=t(i),r=p.pixel.x-e._mapcLeft,l=p.pixel.y-e._mapcTop,_=e._map.pointToPixel(e._position).x,d=e._map.pointToPixel(e._position).y,m=180-Math.atan2(r-_,l-d)/3.1415926/2*360;s=p.pixel,a=!0,e._rotating||(e._rotating=!0,n.setCapture?(baidu.on(n,"onmousemove",u),baidu.on(n,"onmouseup",c)):(baidu.on(window,"onmousemove",u),baidu.on(window,"onmouseup",c))),e._dispatchEvent(e,"onrotatestart",{point:p.point,pixel:p.pixel,angle:m}),n.setCapture&&n.setCapture(),o.style.MozUserSelect="none",o.style.KhtmlUserSelect="none",o.style.WebkitUserSelect="none",o.unselectable="on",o.onselectstart=function(){return!1},e.stopAndPrevent(i)},i.onmousedown=function(a){var u=t(a);return i.setCapture?(baidu.on(i,"onmousemove",l),baidu.on(i,"onmouseup",r)):(baidu.on(window,"onmousemove",l),baidu.on(window,"onmouseup",r)),e._opts.enableDragging?(s=u.pixel,e._dispatchEvent(e,"ondragstart",{point:e._position}),p=!0,i.style.cursor=e.draggingCursor,baidu(n).removeClass("pano-fan"),i.setCapture&&i.setCapture(),o.style.MozUserSelect="none",o.style.KhtmlUserSelect="none",o.style.WebkitUserSelect="none",o.unselectable="on",o.onselectstart=function(){return!1},void e.stopAndPrevent(a)):void e.stopAndPrevent(a)};var r=function(u){t(u);return e._dispatchEvent(e,"onmouseup",{point:e._position}),i.releaseCapture?(baidu.un(i,"onmousemove",l),baidu.un(i,"onmouseup",r)):(baidu.un(window,"onmousemove",l),baidu.un(window,"onmouseup",r)),e._opts.enableDragging?(i.releaseCapture&&i.releaseCapture(),baidu(n).addClass("pano-fan"),clearInterval(e._viewtypetimer),e._dispatchEvent(e,"ondragend",{point:e._position}),p=!1,a=!1,s=null,o.style.MozUserSelect="",o.style.KhtmlUserSelect="",o.style.WebkitUserSelect="",o.unselectable="off",o.onselectstart=function(){},void e.stopAndPrevent(u)):void e.stopAndPrevent(u)},l=function(n){if(e._opts.enableDragging&&p){var i,o,a,r=t(n);i=e._map.pointToPixel(e._position),o=r.pixel.x-s.x+i.x,a=r.pixel.y-s.y+i.y,s=r.pixel,_(n),e._dispatchEvent(e,"ondragging",{point:e._position}),e.stopAndPrevent(n)}},u=function(n){if(a){var i=t(n),o=i.pixel.x-e._mapcLeft,p=i.pixel.y-e._mapcTop,s=e._map.pointToPixel(e._position).x,r=e._map.pointToPixel(e._position).y,l=e._direction=180-Math.atan2(o-s,p-r)/3.1415926/2*360;e._getRotateDirection(l),e._dispatchEvent(e,"onrotating",{point:i.point,pixel:i.pixel,angle:l}),e.stopAndPrevent(n)}},c=function(i){if(e._rotating){e._rotating=!1,n.releaseCapture?(baidu.un(n,"onmousemove",u),baidu.un(n,"onmouseup",c)):(baidu.un(window,"onmousemove",u),baidu.un(window,"onmouseup",c)),n.releaseCapture&&n.releaseCapture();var a=t(i);e._dispatchEvent(e,"onrotateend",{point:a.point,pixel:a.pixel,angle:e._direction}),o.style.MozUserSelect="",o.style.KhtmlUserSelect="",o.style.WebkitUserSelect="",o.unselectable="off",o.onselectstart=function(){},e.stopAndPrevent(i)}},_=function(n){if(e._opts.enableDragging&&p){var i=t(n),a=(e._map.pointToPixel(e._position),i.pixel.x-e._mapcLeft),r=i.pixel.y-e._mapcTop;s=i.pixel,e._position=e._map.pixelToPoint(new BMap.Pixel(a,r));var l=null,u=a/o.offsetWidth,c=r/o.offsetHeight,l=d(u,c);if(e._nowviewport&&l===e._nowviewport)e.draw();else if(0==l)e._position=e._map.pixelToPoint(new BMap.Pixel(a,r)),e.draw(),e._nowviewport=0,clearInterval(e._viewtypetimer);else{clearInterval(e._viewtypetimer),e._nowviewport=l,e.draw();{var _=e._map.pointToPixel(e._map.getCenter()).x,m=e._map.pointToPixel(e._map.getCenter()).y;e._map.pixelToPoint(new BMap.Pixel(_,m))}e._viewtypetimer=setInterval(function(){e._map.panBy(-8*e.MAP_PAN_DIRECTION[l][0],-8*e.MAP_PAN_DIRECTION[l][1],null,!0),__x=e._map.pointToPixel(e._position).x+8*e.MAP_PAN_DIRECTION[l][0],__y=e._map.pointToPixel(e._position).y+8*e.MAP_PAN_DIRECTION[l][1],e._position=e._map.pixelToPoint(new BMap.Pixel(__x,__y)),e.draw()},30)}}},d=function(t,e){if(!isNaN(t)&&!isNaN(e)){var n,i=.2,o=.2;return i>t?n=o>e?1:e>1-o?3:2:t>1-i?n=o>e?7:e>1-o?5:6:o>e?n=8:e>1-o?n=4:(n=0,n=0),n}}},_dispatchEvent:function(t,e,n){0!=e.indexOf("on")&&(e="on"+e);var i=new baidu.lang.Event(e);if(n)for(var o in n)i[o]=n[o];t.dispatchEvent(i)},stopAndPrevent:function(t){var t=window.event||t;baidu.event.preventDefault(t),baidu.event.stopPropagation(t)}}),n.exports=i});