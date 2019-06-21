define("common:widget/pano/Transition/MapLayer/EnterLayer.js",function(t){var n=t("common:widget/ui/Animation/Animation.js").Animation,i=t("common:widget/pano/Transition/MapLayer/Layer.js"),o=t("common:widget/pano/Transition/Util.js"),e=function(t,n,i,e,a,r,s){this.id="enter",this.playToCenter=e,this.playToDir=a,this.onPlayStart=r,this.onPlayEnd=s;var d=window.map;t=t||d.getCenter(),i=i||d.getZoom();var l=document.body.clientWidth,u=document.body.clientHeight,c=o.screenPosToMapPos(l/2,u/2);c=new BMap.Pixel(c.x,c.y);var h=d.getZoomUnits(i),y=t.lng+h*(c.x-d.width/2),p=t.lat-h*(c.y-d.height/2),m=new BMap.Point(y,p),f=void 0;if(n){f=[0,0,0,0];var v=d.pointToPixel(n),w=o.mapPosToScreenPos(v.x,v.y),g=l/2,x=u/2;(Math.abs(w.x-g)>1*l||Math.abs(w.y-x)>1*u)&&s(!0),w.y<x?f[0]=x-w.y:f[2]=x-(u-w.y),w.x>g?f[1]=g-(l-w.x):f[3]=g-w.x}f=f.map(function(t){return Math.min(t,1024)});var T=256;i>3&&(i-=2,T=1024),this.$constrctor.call(this,l,u,m,i,T,f)},a=i.extend(e.prototype);return a.play=function(){document.body.appendChild(this.container),this.onPlayStart();var t=this,e=this.playToCenter,a=this.playToDir,r=this.context,s=document.body.clientWidth/2,d=document.body.clientHeight/2,l=520,u=500,c=s-e.x,h=d-e.y,y=l-20,p=i.options.rotateX,m=a?a:0;m>180&&(m-=360);var f=(new Date,this.width,this.height,this.container),v=(new n).build({duration:i.options.rotateDuration,fps:30,delay:n.INFINITE,transition:function(t){return t},finish:function(){r.transform(l,null,null,y)},render:function(t){var n=Math.sin(3.14*t);.5>=t?f.style.opacity=n:n=1;var i=c*o.easeOut(t),e=h*o.easeOut(t),a=y*o.easeOut(t),s=p*o.easeIn(t),d=m*o.easeIn(t);r.transform(l,i,e,a,s,null,d,1)}}),w=(new n).build({duration:i.options.perspectiveDuration,fps:30,delay:n.INFINITE,transition:function(t){return t},finish:function(){t.onPlayEnd()},render:function(t){var n=l-u*t,i=u/l*n;r.transform(n,null,null,i)}});v.add(w),v.start()},e});