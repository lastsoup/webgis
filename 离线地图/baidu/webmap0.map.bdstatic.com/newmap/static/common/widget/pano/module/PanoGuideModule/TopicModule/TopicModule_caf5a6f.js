define("common:widget/pano/module/PanoGuideModule/TopicModule/TopicModule.js",function(require,exports,module){var ModuleClass=require("common:widget/pano/base/ModuleClass.js"),util=require("common:widget/pano/base/util.js"),Animation=require("common:widget/ui/Animation/Animation.js"),config=require("common:widget/ui/config/config.js");require.loadCss({content:".guide_topic_wrapper{position:relative;width:147px;height:108px;margin-left:4px;border:1px solid #3D4145;font-size:0}.guide_topic_wrapper img{cursor:pointer;border:0}.guide_topic_wrapper .photo-desc{position:absolute;bottom:0;left:0;width:147px;height:24px;padding-top:25px;text-align:center;font-size:12px;color:#abb0b2;z-index:3;cursor:pointer;background:url(http://webmap1.map.bdstatic.com/newmap/static/common/images/pano_whole/album-title-bg_eeddd16.png) left bottom repeat-x;_background:#000;_padding:0;_height:25px;_line-height:25px;_filter:alpha(opacity=75)}"});var TEMPLATE=[function(_template_object){var _template_fun_array=[],fn=function(__data__){var _template_varName="";for(var name in __data__)_template_varName+="var "+name+'=__data__["'+name+'"];';eval(_template_varName),_template_fun_array.push('<div class="guide_topic_wrapper"><a href="',"undefined"http://webmap0.map.bdstatic.com/newmap/static/common/widget/pano/module/PanoGuideModule/TopicModule/==typeof topicData.link?"":topicData.link,'" target="_blank" title="',"undefined"==typeof topicData.topicName?"":topicData.topicName,'专题">    <img width="147" height="108" title="',"undefined"==typeof topicData.topicName?"":topicData.topicName,'专题" alt="',"undefined"==typeof topicData.topicName?"":topicData.topicName,'专题" src="',"undefined"==typeof topicData.pano3DImage?"":topicData.pano3DImage,'">    <div class="photo-desc">        <span title="',"undefined"==typeof topicData.topicName?"":topicData.topicName,'">',"undefined"==typeof topicData.topicName?"":topicData.topicName,"</span>    </div></a></div>"),_template_varName=null}(_template_object);return fn=null,_template_fun_array.join("")}][0],panoTopicModuleContainer=null,panoData=null,TIMEPOINT_NAME={day:"日景",night:"夜景"},convertTopicData=function(o){for(var e=[],a=0,i=o.length;i>a;a++){var t={},n=o[a].data;t.pano3DImage=util.getImage3DUrl(config.urlConfig.PANO_3DIMAGE_URL,n.panoId,n.panoHeading,n.panoPitch,147,109),t.panoData={panoId:o[a].data.panoId,panoHeading:o[a].data.panoHeading,panoPitch:o[a].data.panoPitch},t.topicName=o[a].name,e.push(t)}return e},PanoTopicModule=ModuleClass.extend("PanoTopicModule",{initialize:function(o){try{panoTopicModuleContainer=o;var e=this;T(panoTopicModuleContainer).on("click",function(){panoData&&(e.dispatchEvent("show_topic",{data:panoData}),addStat(STAT_CODE.STAT_PANORAMA,{item:"panoTopic-click"}))})}catch(a){"undefined"!=typeof alog&&alog("http://webmap0.map.bdstatic.com/newmap/static/common/widget/pano/module/PanoGuideModule/TopicModule/exception.fire","catch",{msg:a.message||a.description,path:"common:widget/pano/module/PanoGuideModule/TopicModule/TopicModule.js",ln:63})}},getSupportEvents:function(){return["show_topic"]},dispose:function(){panoTopicModuleContainer.innerHTML=""},empty:function(){panoTopicModuleContainer.innerHTML=""},update:function(o){var e=T.isArray(o)&&o.length>0,a=void 0,i="";e&&""==panoTopicModuleContainer.innerHTML?a=!0:e||""==panoTopicModuleContainer.innerHTML||(a=!1),e&&(o=convertTopicData(o),o=o[0],o.link=config.urlConfig.PANO_HOME_URL+"/panotopic?topicPid="+o.panoData.panoId,i=TEMPLATE({topicData:o}));var t=new Animation.Animation;if(void 0!==a)a===!0?(panoTopicModuleContainer.innerHTML=i,t.build({fps:60,duration:300,render:function(o){try{util.setOpacity(panoTopicModuleContainer,o)}catch(e){"undefined"!=typeof alog&&alog("http://webmap0.map.bdstatic.com/newmap/static/common/widget/pano/module/PanoGuideModule/TopicModule/exception.fire","catch",{msg:e.message||e.description,path:"common:widget/pano/module/PanoGuideModule/TopicModule/TopicModule.js",ln:115})}},finish:function(){}})):t.build({fps:60,duration:300,render:function(o){try{o=1-o,util.setOpacity(panoTopicModuleContainer,o)}catch(e){"undefined"!=typeof alog&&alog("http://webmap0.map.bdstatic.com/newmap/static/common/widget/pano/module/PanoGuideModule/TopicModule/exception.fire","catch",{msg:e.message||e.description,path:"common:widget/pano/module/PanoGuideModule/TopicModule/TopicModule.js",ln:130})}},finish:function(){panoTopicModuleContainer.innerHTML=""}});else if(e){var n=panoTopicModuleContainer.cloneNode(!0);n.style.position="absolute",n.style.top="0",panoTopicModuleContainer.parentNode.appendChild(n),t.build({fps:60,duration:300,render:function(o){try{o=1-o,util.setOpacity(n,o)}catch(e){"undefined"!=typeof alog&&alog("http://webmap0.map.bdstatic.com/newmap/static/common/widget/pano/module/PanoGuideModule/TopicModule/exception.fire","catch",{msg:e.message||e.description,path:"common:widget/pano/module/PanoGuideModule/TopicModule/TopicModule.js",ln:151})}},finish:function(){n.parentNode.removeChild(n)}}),panoTopicModuleContainer.innerHTML=i}}});module.exports=PanoTopicModule});