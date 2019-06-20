define("common:widget/pano/Transition/Context/Context.js",function(t){var e=t("common:widget/pano/Transition/Matrix3D.js"),a=function(t){return!(void 0===t||null===t||isNaN(1*t))},n=function(t,e,a){t.style[e]=a},r={_constrctor:function(t,e,a){this._trans={perspective:0,scale:1,translateX:0,translateY:0,translateZ:0,rotateX:0,rotateY:0,rotateZ:0};var n=this.viewLayer=document.createElement("div");return n.style.cssText=["position:absolute","right:0","bottom:0","width:"+e+"px","height:"+a+"px"].join(";"),t.appendChild(n),n},draw:function(){},transform:function(t,e,n,r,i,s,o,c){var p=this._trans,l=!1;a(c)&&(p.scale=c,l=!0),a(t)&&(p.perspective=t,l=!0),a(e)&&(p.translateX=e,l=!0),a(n)&&(p.translateY=n,l=!0),a(r)&&(p.translateZ=r,l=!0),a(i)&&(p.rotateX=i,l=!0),a(s)&&(p.rotateY=s,l=!0),a(o)&&(p.rotateZ=o,l=!0),l&&this.redraw()},redraw:function(){var t=this._trans;n(this.context,"transform","translate("+t.translateX+"px, "+t.translateY+"px)"),(new e).appendTransform(t.perspective,0,0,t.translateZ,1,1,1,-t.rotateX,1,t.rotateZ).applyMatrix(this.viewLayer)},opacity:function(t){this.viewLayer.style.opacity=t},inset:function(t){n(this.viewLayer.parentNode,"perspective",t+"px")}};return r});
;define("common:widget/pano/Transition/Context/DomContext.js",function(t){var o=t("common:widget/pano/Transition/Context/Context.js"),e=function(){var t=o._constrctor.apply(this,arguments),e=this.context=document.createElement("div");e.style.cssText=["transform-style:preserve-3d","position:absolute","background-color:black","width:100%","height:100%"].join(";"),this.draw=function(t){var o=t.image;o.style.cssText=["position:absolute","left:"+t.drawX+"px","top:"+t.drawY+"px","width:"+t.width+"px","height:"+t.height+"px"].join(";"),e.appendChild(o)},t.appendChild(e)};return e.prototype=o,e});
;define("common:widget/pano/Transition/Context/CanvasContext.js",function(t){var e=t("common:widget/pano/Transition/Context/Context.js"),i=function(t,i,n){var o=e._constrctor.apply(this,arguments),a=1.5,s=i*a,d=n*a,h=this.context=document.createElement("div");h.style.cssText=["position:absolute","width:100%","height:100%"].join(";");var p=this.context=document.createElement("canvas"),r=this._dpx=(s-i)/2,c=this._dpy=(d-n)/2;p.width=s,p.height=d,p.style.cssText=["position:absolute","width:"+s+"px","height:"+d+"px","right:-"+r+"px","bottom:-"+c+"px"].join(";");var x=p.getContext("2d");this.draw=function(t){x.drawImage(t.image,this._dpx+t.drawX,this._dpy+t.drawY,t.width,t.height)},h.appendChild(p),o.appendChild(h)};return i.prototype=e,i});
;define("common:widget/pano/Transition/MapLayer/Layer.js",function(t){var n=t("common:widget/ui/Animation/Animation.js").Animation,i=t("common:widget/pano/Transition/getCoord.js"),o=t("common:widget/pano/Transition/MapTile.js"),e=(t("common:widget/pano/Transition/TileFinder.js"),t("common:widget/pano/Transition/Context/DomContext.js"),t("common:widget/pano/Transition/Context/CanvasContext.js")),r={},a={rotateDuration:850,perspectiveDuration:300,fadeOutDuration:350,rotateX:70};return r.$constrctor=function(t,n,r,a,s,d){var c=this.container=document.createElement("div");this._onReady=function(){};var u=document.getElementById("MapHolder");this.width=u.clientWidth,this.height=u.clientHeight,this.isClosed=!1,c.id="_$"+this.id+"_layer",c.style.cssText=["-webkit-user-drag:none","-webkit-user-select:none","overflow:hidden","opacity:0.5","position:absolute","background-color:rgb(175, 200, 255)","z-index:100002","right:0","bottom:0","width:"+t+"px","height:"+n+"px"].join(";");for(var m=i(t,n,r,a,s,d),h=this,l=this.context=new e(c,t,n),f=0,p=m.length,w=0,g=function(){w++,w!=p||h.isClosed||h.play()};p>f;f++){var v=m[f],y=new o(v.x,v.y,v.z,l);y.setSize(v.size),y.setDrawPosition(v.drawX,v.drawY),y.fetch(g)}},r.fadeOut=function(){var t=this.container;(new n).build({duration:a.fadeOutDuration,fps:30,transition:function(t){return t},finish:function(){t.parentNode.removeChild(t),t=null},render:function(n){var i=1-n;t.style.opacity=i}})},r.destory=function(){},{options:a,extend:function(t){for(var n in r)t[n]||(t[n]=r[n]);return t}}});
;define("common:widget/pano/Transition/MapLayer/EnterLayer.js",function(t){var n=t("common:widget/ui/Animation/Animation.js").Animation,i=t("common:widget/pano/Transition/MapLayer/Layer.js"),o=t("common:widget/pano/Transition/Util.js"),e=function(t,n,i,e,a,r,s){this.id="enter",this.playToCenter=e,this.playToDir=a,this.onPlayStart=r,this.onPlayEnd=s;var d=window.map;t=t||d.getCenter(),i=i||d.getZoom();var l=document.body.clientWidth,u=document.body.clientHeight,c=o.screenPosToMapPos(l/2,u/2);c=new BMap.Pixel(c.x,c.y);var h=d.getZoomUnits(i),y=t.lng+h*(c.x-d.width/2),p=t.lat-h*(c.y-d.height/2),m=new BMap.Point(y,p),f=void 0;if(n){f=[0,0,0,0];var v=d.pointToPixel(n),w=o.mapPosToScreenPos(v.x,v.y),g=l/2,x=u/2;(Math.abs(w.x-g)>1*l||Math.abs(w.y-x)>1*u)&&s(!0),w.y<x?f[0]=x-w.y:f[2]=x-(u-w.y),w.x>g?f[1]=g-(l-w.x):f[3]=g-w.x}f=f.map(function(t){return Math.min(t,1024)});var T=256;i>3&&(i-=2,T=1024),this.$constrctor.call(this,l,u,m,i,T,f)},a=i.extend(e.prototype);return a.play=function(){document.body.appendChild(this.container),this.onPlayStart();var t=this,e=this.playToCenter,a=this.playToDir,r=this.context,s=document.body.clientWidth/2,d=document.body.clientHeight/2,l=520,u=500,c=s-e.x,h=d-e.y,y=l-20,p=i.options.rotateX,m=a?a:0;m>180&&(m-=360);var f=(new Date,this.width,this.height,this.container),v=(new n).build({duration:i.options.rotateDuration,fps:30,delay:n.INFINITE,transition:function(t){return t},finish:function(){r.transform(l,null,null,y)},render:function(t){var n=Math.sin(3.14*t);.5>=t?f.style.opacity=n:n=1;var i=c*o.easeOut(t),e=h*o.easeOut(t),a=y*o.easeOut(t),s=p*o.easeIn(t),d=m*o.easeIn(t);r.transform(l,i,e,a,s,null,d,1)}}),w=(new n).build({duration:i.options.perspectiveDuration,fps:30,delay:n.INFINITE,transition:function(t){return t},finish:function(){t.onPlayEnd()},render:function(t){var n=l-u*t,i=u/l*n;r.transform(n,null,null,i)}});v.add(w),v.start()},e});
;define("common:widget/pano/Transition/MapLayer/ExitLayer.js",function(n){var t=n("common:widget/ui/Animation/Animation.js").Animation,i=n("common:widget/pano/Transition/MapLayer/Layer.js"),e=n("common:widget/pano/Transition/Util.js"),o=function(n,t,i,o,a,r){if(this.playToCenter=o,this.playToDir=a,this.onPlayEnd=r,this.enable===!1){var s=new T.Deferred;return setTimeout(function(){s.resolve()},0),s}this.id="exit";var d=window.map;n=n||d.getCenter(),i=i||d.getZoom();var l=document.body.clientWidth,u=document.body.clientHeight,c=e.screenPosToMapPos(l/2,u/2);c=new BMap.Pixel(c.x,c.y);var p=d.getZoomUnits(i),h=n.lng+p*(c.x-d.width/2),y=n.lat-p*(c.y-d.height/2),m=new BMap.Point(h,y),f=void 0;if(t){f=[0,0,0,0];var w=d.pointToPixel(t),v=e.mapPosToScreenPos(w.x,w.y),x=l/2,g=u/2;v.y<g?f[0]=g-v.y:f[2]=g-(u-v.y),v.x>x?f[1]=x-(l-v.x):f[3]=x-v.x}f=f.map(function(n){return Math.min(n,768)}),this.$constrctor.call(this,l,u,m,i,256,f),this.container.style.opacity=1,document.body.appendChild(this.container),this._play()},a=i.extend(o.prototype);return a.play=function(){},a._play=function(){var n=this.playToCenter,o=this.playToDir,a=this.context,r=document.body.clientWidth/2,s=document.body.clientHeight/2,d=520,l=500,u=r-n.x,c=s-n.y,p=d-20,h=i.options.rotateX,y=o?o:0;y>180&&(y-=360);var m=(new Date,this.width,this.height,this.container,this),f=(new t).build({duration:i.options.rotateDuration,fps:30,delay:t.INFINITE,transition:function(n){return n},finish:function(){a.transform(d,0,0,0,0,null,0,1),m.onPlayEnd()},render:function(n){n=1-n;var t=u*e.easeOut(n),i=c*e.easeOut(n),o=p*e.easeOut(n),r=h*e.easeIn(n),s=y*e.easeIn(n);a.transform(d,t,i,o,r,null,s,1)}}),w=(new t).build({duration:i.options.perspectiveDuration,fps:30,delay:t.INFINITE,transition:function(n){return n},finish:function(){},render:function(n){a.opacity(n),n=1-n;var t=d-l*n,i=l/d*t;a.transform(t,null,null,i)}});a.transform(d-l,u,c,l/d,h,null,y),w.add(f),w.start()},o});
;define("common:widget/pano/Transition/Matrix3D.js",function(){var t=Math.PI/180,e=Array.prototype.slice,s=window.Float32Array?!0:!1,n=function(t,e,n,i,r,a,l,h,o,m,p,c,u,d,f,y){if(this.elements=s?new Float32Array(16):[],0===arguments.length)this.identity();else{var v=this.elements;v[0]=void 0!==t?t:1,v[4]=e||0,v[8]=n||0,v[12]=i||0,v[1]=r||0,v[5]=void 0!==a?a:1,v[9]=l||0,v[13]=h||0,v[2]=o||0,v[6]=m||0,v[10]=void 0!==p?p:1,v[14]=c||0,v[3]=u||0,v[7]=d||0,v[11]=f||0,v[15]=void 0!==y?y:1}};return n.prototype={set:function(t,e,s,n,i,r,a,l,h,o,m,p,c,u,d,f){var y=this.elements;return y[0]=t,y[4]=e,y[8]=s,y[12]=n,y[1]=i,y[5]=r,y[9]=a,y[13]=l,y[2]=h,y[6]=o,y[10]=m,y[14]=p,y[3]=c,y[7]=u,y[11]=d,y[15]=f,this},identity:function(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this},append:function(t){return this.multiplyMatrices(this,t)},multiplyMatrices:function(t,e){var s=t.elements,n=e.elements,i=this.elements,r=s[0],a=s[4],l=s[8],h=s[12],o=s[1],m=s[5],p=s[9],c=s[13],u=s[2],d=s[6],f=s[10],y=s[14],v=s[3],M=s[7],g=s[11],w=s[15],x=n[0],T=n[4],j=n[8],A=n[12],X=n[1],Y=n[5],Z=n[9],b=n[13],F=n[2],k=n[6],z=n[10],D=n[14],I=n[3],P=n[7],q=n[11],B=n[15];return i[0]=r*x+a*X+l*F+h*I,i[4]=r*T+a*Y+l*k+h*P,i[8]=r*j+a*Z+l*z+h*q,i[12]=r*A+a*b+l*D+h*B,i[1]=o*x+m*X+p*F+c*I,i[5]=o*T+m*Y+p*k+c*P,i[9]=o*j+m*Z+p*z+c*q,i[13]=o*A+m*b+p*D+c*B,i[2]=u*x+d*X+f*F+y*I,i[6]=u*T+d*Y+f*k+y*P,i[10]=u*j+d*Z+f*z+y*q,i[14]=u*A+d*b+f*D+y*B,i[3]=v*x+M*X+g*F+w*I,i[7]=v*T+M*Y+g*k+w*P,i[11]=v*j+M*Z+g*z+w*q,i[15]=v*A+M*b+g*D+w*B,this},appendTransform:function(e,s,i,r,a,l,h,o,m,p,c,u,d){if(1===arguments.length&&"object"==typeof arguments[0]){var f=arguments[0];e=f.perspective||0,s=f.x||0,i=f.y||0,r=f.z||0,a=f.scaleX||0,l=f.scaleY||0,h=f.scaleZ||0,o=f.rotateX||0,m=f.rotateY||0,p=f.rotateZ||0,c=f.regX||0,u=f.regY||0,d=f.regZ||0}var y=o*t,v=Math.cos(y),M=Math.sin(y),g=m*t,w=Math.cos(g),x=Math.sin(g),T=p*t,j=Math.cos(T),A=Math.sin(T);return this.append(new n(w,0,x,s,0,1,0,i,-x,0,w,r,x/e,0,-w/e,(e-r)/e)),this.append(new n(1,0,0,0,0,v,M,0,0,-M,v,0,0,M/e,-v/e,1)),this.append(new n(j*a,A*l,0,0,-A*a,j*l,0,0,0,0,1*h,0,0,0,-1/e,1)),(c||u||d)&&(this.elements[12]-=c*this.elements[0]+u*this.elements[4]+d*this.elements[8],this.elements[13]-=c*this.elements[1]+u*this.elements[5]+d*this.elements[9],this.elements[14]-=c*this.elements[2]+u*this.elements[6]+d*this.elements[10]),this},applyMatrix:function(t){var s=e.call(this.elements).join(",");t.style.msTransform="matrix3d("+s+")",t.style.webkitTransform="matrix3d("+s+")",t.style.transform="matrix3d("+s+")"}},n});
;define("common:widget/pano/Transition/getCoord.js",function(){var r=function(){var r={};return function(e){return r[e]?r[e]:(r[e]=256*Math.pow(2,18-e),r[e])}}(),e=function(e,a,n,i,f,o){var t=e,u=a,s=n.lat,d=n.lng,w=r(i),z=Math.floor(d/w),h=Math.floor(s/w),l=f*(d/w-z),p=f-f*(s/w-h),c=t/2-l,v=u/2-p,b=[v,t-c-f,u-v-f,c].map(function(r){return r+.5|0});o&&o.length>=4&&(b=b.map(function(r,e){return r+o[e]}));var k=[];k.push({x:z,y:h,z:i,size:f,drawX:c,drawY:v});for(var m=1,x=0,y=0;1e4>m;){if(x=-m,y=m,b[0]>0){for(;;){if(k.push({x:x+z,y:y+h,z:i,size:f,drawX:c+f*x,drawY:v-f*y}),x==m)break;x++}b[0]-=f}else x=m;if(y--,b[1]>0){for(;;){if(k.push({x:x+z,y:y+h,z:i,size:f,drawX:c+f*x,drawY:v-f*y}),y==-m)break;y--}b[1]-=f}else y=-m;if(x--,b[2]>0){for(;;){if(k.push({x:x+z,y:y+h,z:i,size:f,drawX:c+f*x,drawY:v-f*y}),x==-m)break;x--}b[2]-=f}else x=-m;if(y++,b[3]>0){for(;;){if(k.push({x:x+z,y:y+h,z:i,size:f,drawX:c+f*x,drawY:v-f*y}),y==m-1)break;y++}b[3]-=f}else y=m-1;var X=b.some(function(r){return r>0});if(!X)break;m++}return k};return e});
;define("common:widget/pano/Transition/MapTile.js",function(){var t={unload:"unload",loading:"loading",loaded:"loaded"},i={tiles:new Array(19),get:function(t,i,e){var n=this.tiles,a="p_"+t+"_"+i;return n&&n[e]&&n[e][a]?n[e][a]:null},set:function(t,i,e,n){var a=this.tiles,r="p_"+t+"_"+i;a[e]||(a[e]={}),a[e][r]=n}},e="http://online{port}.map.bdimg.com/tile/?qt=tile&x={x}&y={y}&z={z}&styles=pl&udt=20140927",n=function(n,a,r,s){var o;if(2===arguments.length){o=arguments[0],s=arguments[1];var h=o.match(/x=(\d+).+y=(\d+).+z=(\d+)/);n=h[1],a=h[2],r=h[3]}var u=i.get(n,a,r);if(u)return u;this.context=s,this.status=t.unload;var d=.5+2*Math.random()+1|0;o=o||e.replace("{port}",d).replace("{x}",n).replace("{y}",a).replace("{z}",r),this.url=o,this.x=n,this.y=a,this.z=r},a=n.prototype;return a.getImage=function(){return this.image},a.setOpacity=function(t){this.opacity=t},a.setSize=function(t,i){return i=i||t,(this.width!==t||this.height!==i)&&(this.width=t,this.height=i),this},a.redraw=function(){this.context.draw(this)},a.setDrawPosition=function(t,i){return this.drawX=t,this.drawY=i,this},a.fetch=function(i){if(this.status===t.loaded)return this.redraw(),void(i&&i());if(this.status===t.unload){var e=this.url,n=this.image=document.createElement("img");this.status=t.loading;var a=this;n.onload=n.onerror=function(){a.status=t.loaded,a.redraw(),i&&i()},n.src=e}},n});
;define("common:widget/pano/Transition/TileFinder.js",function(){var t={tiles:{},init:function(){var t,n,e,i,r,a=document.getElementById("platform").getElementsByTagName("img"),o={};for(i=0,r=a.length;r>i;i++){var s=(a[i].src||"").match(/x=(\d+).+y=(\d+).+z=(\d+)/);s&&4==s.length&&(t=s[1],n=s[2],e=s[3],o[t+"_"+n+"_"+e]=a[i].src)}this.tiles=o},find:function(t,n,e){var i=t+"_"+n+"_"+e;return this.tiles[i]}};return t});