define("common:widget/pano/Transition/getCoord.js",function(){var r=function(){var r={};return function(e){return r[e]?r[e]:(r[e]=256*Math.pow(2,18-e),r[e])}}(),e=function(e,a,n,i,f,o){var t=e,u=a,s=n.lat,d=n.lng,w=r(i),z=Math.floor(d/w),h=Math.floor(s/w),l=f*(d/w-z),p=f-f*(s/w-h),c=t/2-l,v=u/2-p,b=[v,t-c-f,u-v-f,c].map(function(r){return r+.5|0});o&&o.length>=4&&(b=b.map(function(r,e){return r+o[e]}));var k=[];k.push({x:z,y:h,z:i,size:f,drawX:c,drawY:v});for(var m=1,x=0,y=0;1e4>m;){if(x=-m,y=m,b[0]>0){for(;;){if(k.push({x:x+z,y:y+h,z:i,size:f,drawX:c+f*x,drawY:v-f*y}),x==m)break;x++}b[0]-=f}else x=m;if(y--,b[1]>0){for(;;){if(k.push({x:x+z,y:y+h,z:i,size:f,drawX:c+f*x,drawY:v-f*y}),y==-m)break;y--}b[1]-=f}else y=-m;if(x--,b[2]>0){for(;;){if(k.push({x:x+z,y:y+h,z:i,size:f,drawX:c+f*x,drawY:v-f*y}),x==-m)break;x--}b[2]-=f}else x=-m;if(y++,b[3]>0){for(;;){if(k.push({x:x+z,y:y+h,z:i,size:f,drawX:c+f*x,drawY:v-f*y}),y==m-1)break;y++}b[3]-=f}else y=m-1;var X=b.some(function(r){return r>0});if(!X)break;m++}return k};return e});