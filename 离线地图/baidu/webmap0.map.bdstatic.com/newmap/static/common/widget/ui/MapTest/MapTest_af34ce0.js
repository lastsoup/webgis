define("common:widget/ui/MapTest/MapTest.js",function(t,e,a){function n(){T.ajax("/newmap/static/common/images/transparent.gif?t="+Math.floor(1e6*Math.random()),{success:function(t,e){e.slow?ErrorMonitor("web","req_slow"+e.slow,"",!0,{xhr:e,type:"slow",url:"../../../images/transparent.gif"/*tpa=http://webmap0.map.bdstatic.com/newmap/static/common/images/transparent.gif*/}):ErrorMonitor("web","succ","",!0,{xhr:e,type:"succ",url:"../../../images/transparent.gif"/*tpa=http://webmap0.map.bdstatic.com/newmap/static/common/images/transparent.gif*/})},error:function(t){ErrorMonitor("web","req_fail",t.status,!0,{xhr:t,type:"fail",url:"../../../images/transparent.gif"/*tpa=http://webmap0.map.bdstatic.com/newmap/static/common/images/transparent.gif*/})}})}function r(){var t=new Image,e=(new Date).getTime(),a={timeStart:e};t.onerror=function(){a.timeEnd=(new Date).getTime(),ErrorMonitor("cdn","req_fail","",!0,{url:"../../../../../../../webmap1.map.bdstatic.com/newmap/static/common/images/transparent_cdn_3254726.gif"/*tpa=http://webmap1.map.bdstatic.com/newmap/static/common/images/transparent_cdn_3254726.gif*/,type:"fail",xhr:a})},t.onload=function(){a.timeEnd=(new Date).getTime();var t=a.timeEnd-e,n=!1;t>6e3?n=6:t>3e3?n=3:t>2e3&&(n=2),n?ErrorMonitor("cdn","req_slow"+n,"",!0,{url:"../../../../../../../webmap1.map.bdstatic.com/newmap/static/common/images/transparent_cdn_3254726.gif"/*tpa=http://webmap1.map.bdstatic.com/newmap/static/common/images/transparent_cdn_3254726.gif*/,type:"slow",xhr:a}):ErrorMonitor("cdn","succ","",!0,{url:"../../../../../../../webmap1.map.bdstatic.com/newmap/static/common/images/transparent_cdn_3254726.gif"/*tpa=http://webmap1.map.bdstatic.com/newmap/static/common/images/transparent_cdn_3254726.gif*/,type:"succ",xhr:a})},t.src="http://webmap1.map.bdstatic.com/newmap/static/common/images/transparent_cdn_3254726.gif?t="+Math.floor(1e6*Math.random())}a.exports={testCDN:r,testWeb:n}});