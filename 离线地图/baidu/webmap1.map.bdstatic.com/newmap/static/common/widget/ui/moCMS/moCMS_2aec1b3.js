define("common:widget/ui/moCMS/moCMS.js",function(o,n,e){function i(){r.cityCode||1;window.GRControll&&GRControll.clearGRMap();var o=r.cityCode==c["全国"]?!0:!1;return 0==r.supBus||o?(T.g("supBus").innerHTML=r.cityType<2||o?"请选择您要查询的城市":"抱歉，该城市不支持公交查询",!1):(T.g("supBus").innerHTML="",t.start_event=(new Date).getTime(),t.load("LinesQuery",{dom:baidu("#MapInfo")}),void 0)}function a(){baidu(".search_box a.mo_dl").on("click",function(n){o.async("common:widget/ui/Pc2Mobile/Pc2Mobile.js",function(o){o.open("IMG","搜索框链接")}),n.preventDefault()}),baidu("#blSearchLink").on("click",function(o){i(),o.preventDefault()})}var t=o("common:widget/com/componentManager.js"),c=o("common:widget/ui/areaCfg/areaCfg.js"),d=o("common:widget/ui/config/config.js"),r=d.modelConfig;e.exports={init:function(){var o=window._OLR?baidu.json.parse(window._OLR.index)||{}:{};if(o.mo&&o.mo.data&&o.mo.data.mo_text){var n=o.mo.data.mo_text,e=""!=o.mo.data.mo_color?'style="color:'+o.mo.data.mo_color+'"':"",i="<span>|</span>",t='<a class="mo_dl" onclick="addStat(\'indexheader.clientdownpage.searchboxlink\')" tid="mobileLink" '+e+">"+n+"</a>";""==n&&(i="",t="","2"!==T.cookie.get("Maptodowntip")&&T.cookie.set("Maptodowntip","2",{expires:94608e7})),T.G("moText").innerHTML=t,T.G("moTextBus").innerHTML=t+'<span id="blSearchLinkSpan">|</span><a  id="blSearchLink" >公交线路查询</a>',T.G("moTextDrive").innerHTML=t,a()}}}});