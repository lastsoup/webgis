define("common:widget/ui/toolShare/ToolShare.js",function(e,o,t){var n=e("common:widget/ui/util/util.js"),i=e("common:widget/com/componentManager.js"),c=(e("common:widget/ui/searchBox/searchBox.js"),{SHARE_PROC_URL:"http://j.map.baidu.com/",long_url:"",keyList:{tsina:{title:"分享到新浪微博",code:1307,cbkcode:1317},tqq:{title:"分享到腾讯微博",code:1308,cbkcode:1318},qzone:{title:"分享到QQ空间",code:1306,cbkcode:1316},renren:{title:"分享到人人网",code:1309,cbkcode:1319},baidu:{title:"分享到百度搜藏",code:1310,cbkcode:1320},kaixin001:{title:"分享到开心网",code:1311,cbkcode:1321},hi:{title:"分享到百度空间",code:1312,cbkcode:1322},douban:{title:"分享到豆瓣网",code:1313,cbkcode:1323},tsohu:{title:"分享到搜狐微博",code:1314,cbkcode:1324},msn:{title:"分享到Myspace",code:1315,cbkcode:1325},fx:{title:"分享到飞信",code:1326,cbkcode:1327}},addCbkStat:function(){var e=window.location.hash;if(e)for(var o=e.split("#"),t="",n=0,i=o.length;i>n;n++)if(o[n].indexOf("bshare")>=0){t=o[n];break}},_procCbk:function(e){this._rec=!0,this._getLinkCbk(e&&e.url||this.oldUrl)},getLink:function(e,o){this._getLinkCbk=o;{var t=this,i=this.oldUrl="http://map.baidu.com/?shareurl=1&"+n.jsonToQuery(e);this.SHARE_PROC_URL+"?url="+encodeURIComponent(i)+"&web=true&callback=toolShare._procCbk"}t._rec=!1,baidu.jsonp(this.SHARE_PROC_URL+"?url="+encodeURIComponent(i)+"&web=true",function(e){t._procCbk(e)}),clearTimeout(t._timer),this._timer=setTimeout(function(){0==t._rec&&t._getLinkCbk(i)},3e3)},open:function(o,t){window.temp.linkPop&&window.temp.linkPop.close(),t=t||{from:"mapshare"},t.shareText=this.shareText;var n={title:"您可将当前地图上的内容分享给好友",addDom:T.g("tool_container"),content:"",height:94,width:T.browser.ie>=8?368:358,close:function(){window.temp.linkPop=null,T.rc(T.g("link"),"span_focus")}};e.async("common:widget/ui/Popup/Popup.js",function(e){var c=window.temp.linkPop=new e(n);c.addConnectDom(o),c.render(),c.hide(),c.getDom().style.right="68px",c.getDom().style.top="block"===T("#title_trafficCtrl").parents(".map_popup").css("display")?"98px":"38px",i.load("SharePanel",{dom:c.content,cinfo:t,onload:function(){c.show()}})})},_open:function(e,o){e=e||window.event,n.stopBubble(e),this.open("",o)},fixName:function(e){return e?"【"+e+"】":""},Tween:function(e,o,t,n){return t*((e=e/n-1)*e*e+1)+o},getMInfo:function(){return{}},setShareText:function(e){e=e||{};var o="";for(var t in e)o=o+" "+e[t];this.shareText=o}});t.exports=c});