define("common:widget/com/PanoTheme/PanoTheme.js",function(require,exports,module){function PanoTheme(e){MapComponent.call(this,e),this.cinfo=this.cinfo||{}}var MapComponent=require("common:widget/com/MapComponent.js"),stat=require("common:widget/ui/stat/CodeStat.js"),util=require("common:widget/ui/util/util.js"),mapInfoScrollPanel=require("common:widget/ui/mapInfoScroll/mapInfoScroll.js"),Animation=require("common:widget/ui/Animation/Animation.js"),PanoUtil=require("common:widget/ui/PanoUtil/PanoUtil.js"),PanoInterface=require("common:widget/pano/PanoInterface/PanoInterface.js"),config=require("common:widget/ui/config/config.js"),comMgr=require("common:widget/com/componentManager.js");T.lang.inherits(PanoTheme,MapComponent,"PanoTheme"),T.object.extend(PanoTheme.prototype,{render:function(){try{var template=[function(_template_object){var _template_fun_array=[],fn=function(__data__){var _template_varName="";for(var name in __data__)_template_varName+="var "+name+'=__data__["'+name+'"];';eval(_template_varName),_template_fun_array.push('<div id="panoTheme" class="pano_theme">    ');for(var i=0;i<data.length;i++){if(_template_fun_array.push("        "),data[i].picture_themes.length>0||data[i].text_themes.length>0){_template_fun_array.push('            <div class="pano_theme_item ',"undefined"==typeof data[i].theme_type?"":data[i].theme_type,'">                <div class="pano_theme_item_title" index="',"undefined"==typeof i?"":i,'">                    <span>',"undefined"==typeof data[i].theme_name?"":data[i].theme_name,'</span>                </div>                <div id="pano_theme_item_content_',"undefined"==typeof i?"":i,'" class="pano_theme_item_content"  style="">                    <ul class="img_list clearfix">                        ');for(var j=0;j<data[i].picture_themes.length;j++)_template_fun_array.push('                            <li class="even ',"undefined"==typeof(j%2==0?"even":"odd")?"":j%2==0?"even":"odd",'">                                <a data-id="',"undefined"==typeof i?"":i,"|picture_themes|","undefined"==typeof j?"":j,'">                                    <img width="140px" height="80px" src="',"undefined"==typeof data[i].picture_themes[j].image_url?"":data[i].picture_themes[j].image_url,'" />                                    <p class="pano_cname">',"undefined"http://webmap1.map.bdstatic.com/newmap/static/common/widget/com/PanoTheme/==typeof data[i].picture_themes[j].name?"":data[i].picture_themes[j].name,"</p>                                </a>                            </li>                        ");if(_template_fun_array.push("                                </ul>                    "),data[i].text_themes.length>0){_template_fun_array.push('                        <div class="more">                            <a href="javascript:void(0);">更多>></a>                        </div>                        <div class="pano_link_list">                            ');for(var k=0;k<data[i].text_themes.length;k++)_template_fun_array.push('                                <a data-id="',"undefined"==typeof i?"":i,"|text_themes|","undefined"==typeof k?"":k,'">',"undefined"http://webmap1.map.bdstatic.com/newmap/static/common/widget/com/PanoTheme/==typeof data[i].text_themes[k].name?"":data[i].text_themes[k].name,"</a>                                       ");_template_fun_array.push("                        </div>                    ")}_template_fun_array.push("              </div>                  </div>        ")}_template_fun_array.push("   ")}_template_fun_array.push("</div>"),_template_varName=null}(_template_object);return fn=null,_template_fun_array.join("")}][0],style='.pano_theme{width:350px;overflow:hidden;position:relative;left:-350px;font-family:"微软雅黑"}.pano_theme_item{margin:16px}.pano_theme_item_title{position:relative;padding-top:10px;width:314px;border-top:1px solid #E6E6E6}.city .pano_theme_item_title{border:0;padding-top:0}.pano_theme_item_title span{display:block;color:#5179c4;font-size:14px}.pano_theme_item_content{position:relative;width:314px;background:#fff;overflow:hidden;display:block}ul.img_list{margin-top:5px;overflow:hidden}ul.img_list li.even{float:left;margin:5px 5px 5px 0;padding:0}ul.img_list li.odd{float:left;margin:5px 0 5px 5px;padding:0}ul.img_list li a{padding:3px;height:80px;cursor:pointer;text-decoration:none;position:relative;border:1px solid #E6E6E6;display:inline-block}ul.img_list li a:hover{border:1px solid #406593}ul.img_list li img{width:140px;height:80px}ul.img_list li a p{text-indent:10px;width:140px;height:20px;background-color:#000;opacity:.7;filter:alpha(opacity=70);overflow:hidden;position:absolute;bottom:3px;left:3px;font-size:12px;color:#fff;overflow:hidden;line-height:20px}.pano_theme_item_content .more{margin-top:8px;font-size:12px;color:#3a6acf;text-align:right}.pano_theme_item_content .more a{color:#3a6acf;margin-right:5px;text-decoration:none}.city .pano_theme_item_content .more{display:none}.pano_link_list{margin-top:8px;font-size:12px;display:none}.city .pano_link_list{display:block;*margin-top:-10px}.pano_link_list a{cursor:pointer;margin-right:10px;color:#333;line-height:20px;text-decoration:none;white-space:nowrap}.pano_link_list a:hover{text-decoration:underline}.city .pano_link_list a{display:inline-block;margin-right:0;width:48px;*width:45px}';return require.loadCss({content:style,name:"PanoTheme"}),template({data:this.cinfo.themeData})}catch(e){"undefined"!=typeof alog&&alog("http://webmap1.map.bdstatic.com/newmap/static/common/widget/com/PanoTheme/exception.fire","catch",{msg:e.message||e.description,path:"common:widget/com/PanoTheme/PanoTheme.js",ln:32})}},initialize:function(){try{var e=this;e.EVENTS={},e.trans(350,350);for(var t=T.g("panoTheme").getElementsByTagName("img"),n=0,a=t.length;a>n;n++)t[n].onload=function(){mapInfoScrollPanel.update()};e.addThemeEvent(),e.addShowMoreEvent(),e.EVENTS.updateScroller_onresize=function(){mapInfoScrollPanel.update()},T.on(window,"onresize",e.EVENTS.updateScroller_onresize)}catch(i){"undefined"!=typeof alog&&alog("http://webmap1.map.bdstatic.com/newmap/static/common/widget/com/PanoTheme/exception.fire","catch",{msg:i.message||i.description,path:"common:widget/com/PanoTheme/PanoTheme.js",ln:62})}},addThemeEvent:function(){var e=this,t=this.cinfo.themeData;this.EVENTS.clickContentEvent=function(n){var a=n.target,i=n.currentTarget;if(par=a.parentNode,indexData=[],panoInfo=null,-1==par.className.indexOf("more")){if(-1!=i.parentNode.className.indexOf("city"))return void e.switchCity(a.getAttribute("data-id"));for(;a&&"A"!==a.nodeName;)a=a.parentNode;null!==a&&(indexData=a.getAttribute("data-id").split("|"),panoInfo=t[indexData[0]][indexData[1]][indexData[2]],addStat(STAT_CODE.STAT_STREETVIEW,{catalog:"index",func:"click"}),e.openPano(panoInfo))}},T.on(T(".pano_theme_item_content"),"onclick",this.EVENTS.clickContentEvent)},addShowMoreEvent:function(){this.EVENTS.showMoreEvent=function(e){var t=e.currentTarget,n=e.target,a=baidu.dom;if("a"==n.nodeName.toLowerCase()){var i=n,o=a.next(t);"none"!=a.getStyle(o,"display")?(i.innerHTML="更多>>",o.style.display="none"):(i.innerHTML="收起>>",o.style.display="block"),mapInfoScrollPanel.update({notToTop:!0})}},T.on(T("#panoTheme .more"),"onclick",this.EVENTS.showMoreEvent)},switchCity:function(e){if(e){var t=e.split("|"),n=this.cinfo.themeData[t[0]][t[1]][t[2]];this.loadTheme(n)}},trans:function(e,t){var n=baidu.g("panoTheme");if(n){var a=new Animation.Animation;a.build({fps:100,transition:Animation.Transitions.linear,duration:300,render:function(a){try{n.style.left=e*a-t+"px"}catch(i){"undefined"!=typeof alog&&alog("http://webmap1.map.bdstatic.com/newmap/static/common/widget/com/PanoTheme/exception.fire","catch",{msg:i.message||i.description,path:"common:widget/com/PanoTheme/PanoTheme.js",ln:156})}},finish:function(){mapInfoScrollPanel.show(),mapInfoScrollPanel.update()}})}},loadTheme:function(e){var t=this,n=e.pano_info;PanoUtil.closePano();new BMap.Point(n.x/100,n.y/100);comMgr.go("cur&wd="+encodeURIComponent(e.name),{cinfo:{isFromPano:!0},onload:function(){baidu.ajax("/?qt=panoReco&code="+e.citycode+"&ie=utf-8&t="+(new Date).getTime(),{dataType:"json",success:function(n){n?comMgr.load("PanoTheme",{dom:"MapInfo",cinfo:{themeData:n},onload:function(){}}):t.openPano(e)},error:function(){}})}})},openPano:function(e){var t=e.pano_info;PanoInterface.showPano("inter"http://webmap1.map.bdstatic.com/newmap/static/common/widget/com/PanoTheme/==t.type?{panoIId:t.sid,panoType:t.type,point:new BMap.Point(t.x/100,t.y/100),panoHeading:t.heading,panoPitch:t.pitch}:{panoId:t.sid,panoType:t.type,point:new BMap.Point(t.x/100,t.y/100),panoHeading:t.heading,panoPitch:t.pitch})},destroy:function(){T.un(window,"onresize",this.EVENTS.updateScroller_onresize),T.un(T(".pano_theme_item_title"),"onclick",this.EVENTS.switchTab),T.un(T(".pano_default_item .pano_theme_item_title"),"onclick",this.EVENTS.clickTab),T.un(T(".pano_theme_item_content"),"onclick",this.EVENTS.clickContentEvent)}}),module.exports=PanoTheme});