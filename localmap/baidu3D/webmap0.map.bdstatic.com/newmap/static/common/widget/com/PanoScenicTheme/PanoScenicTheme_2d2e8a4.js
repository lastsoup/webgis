define("common:widget/com/PanoScenicTheme/PanoScenicTheme.js",function(require,exports,module){function PanoScenicTheme(e){BaseComponent.call(this,e)}var BaseComponent=require("common:widget/com/BaseComponent.js"),stat=require("common:widget/ui/stat/CodeStat.js"),util=require("common:widget/ui/util/util.js"),mapInfoScrollPanel=require("common:widget/ui/mapInfoScroll/mapInfoScroll.js"),Animation=require("common:widget/ui/Animation/Animation.js"),PanoUtil=require("common:widget/ui/PanoUtil/PanoUtil.js"),fullScreen=require("common:widget/ui/fullScreen/fullScreen.js");T.lang.inherits(PanoScenicTheme,BaseComponent,"PanoScenicTheme"),T.object.extend(PanoScenicTheme.prototype,{render:function(html,json){try{var template=[function(_template_object){var _template_fun_array=[],fn=function(__data__){var _template_varName="";for(var name in __data__)_template_varName+="var "+name+'=__data__["'+name+'"];';eval(_template_varName),_template_fun_array.push('<div id="theme_scrollPanel" class="theme_scrollPanel">    <div class="theme_content">        <h3 class="scenic_title">            ',"undefined"http://webmap0.map.bdstatic.com/newmap/static/common/widget/com/PanoScenicTheme/==typeof data.name?"":data.name,"        </h3>        "),data.scope_grade&&_template_fun_array.push('            <p class="scenic_grade">                ',"undefined"==typeof data.scope_grade?"":data.scope_grade,"景区            </p>        "),_template_fun_array.push("                "),baseBlock&&(_template_fun_array.push('            <div class="scenic_info_list clearfix">                '),data.scope_type&&_template_fun_array.push('                    <dl class="clearfix">                        <dt><i class="scenic_icon scenic_type"></i></dt>                        <dd><span>景区类别：</span>',"undefined"==typeof data.scope_type?"":data.scope_type,"</dd>                    </dl>                "),_template_fun_array.push("                "),data.entrance_price&&_template_fun_array.push('                    <dl class="clearfix">                        <dt><i class="scenic_icon scenic_entrance_price"></i></dt>                        <dd><span>门票价格：</span>',"undefined"==typeof data.entrance_price?"":data.entrance_price,"</dd>                    </dl>                "),_template_fun_array.push("                "),data.shop_hours&&_template_fun_array.push('                    <dl class="clearfix">                        <dt><i class="scenic_icon scenic_shop_hours"></i></dt>                        <dd><span>开放时间：</span>',"undefined"==typeof data.shop_hours?"":data.shop_hours,"</dd>                    </dl>                "),_template_fun_array.push("                "),data.address&&_template_fun_array.push('                    <dl class="clearfix">                        <dt><i class="scenic_icon scenic_addr"></i></dt>                        <dd><span>地址：</span>',"undefined"==typeof data.address?"":data.address,"</dd>                    </dl>                "),_template_fun_array.push("                "),data.phone&&_template_fun_array.push('                    <dl class="clearfix">                        <dt><i class="scenic_icon scenic_phone"></i></dt>                        <dd><span>电话：</span>',"undefined"==typeof data.phone?"":data.phone,"</dd>                    </dl>                "),_template_fun_array.push("                "),data.url&&_template_fun_array.push('                    <p class="scenic_more clearfix"><a href="',"undefined"http://webmap0.map.bdstatic.com/newmap/static/common/widget/com/PanoScenicTheme/==typeof data.url?"":data.url,'" title="前往百度旅游查看详细信息" target="_blank">更多&gt;&gt;</a></p>                '),_template_fun_array.push("            </div>        ")),_template_fun_array.push("                "),detailBlock&&(_template_fun_array.push('            <div class="scenic_info_list clearfix">                '),data.sug_time&&_template_fun_array.push('                    <dl class="clearfix">                        <dt><i class="scenic_icon scenic_sub_time"></i></dt>                        <dd><span>建议游玩时间：</span>',"undefined"==typeof data.sug_time?"":data.sug_time,"</dd>                    </dl>                "),_template_fun_array.push("                "),data.best_time&&_template_fun_array.push('                    <dl class="clearfix">                        <dt><i class="scenic_icon scenic_best_time"></i></dt>                        <dd><span>最佳旅游季节：</span>',"undefined"==typeof data.best_time?"":data.best_time,"</dd>                    </dl>                "),_template_fun_array.push("                "),data.url&&_template_fun_array.push('                    <p class="scenic_more"><a href="',"undefined"http://webmap0.map.bdstatic.com/newmap/static/common/widget/com/PanoScenicTheme/==typeof data.url?"":data.url,'" title="前往百度旅游查看详细信息" target="_blank">更多&gt;&gt;</a></p>                '),_template_fun_array.push("            </div>        ")),_template_fun_array.push("    </div>    </div>"),_template_varName=null}(_template_object);return fn=null,_template_fun_array.join("")}][0],style="#PanoramaTheme{position:absolute;z-index:51;left:0;top:0;height:100%;width:350px;background:#fff;overflow:hidden;display:none}.theme_scrollPanel{position:relative;overflow:hidden}.theme_content{margin:0 auto;width:318px;padding:18px 15px 0;margin-top:32px}.theme_content dt,.theme_content dd{display:inline-block;margin:0;float:left}.theme_content dd{width:270px;margin-left:10px}.theme_content span{color:#000}.theme_content dl{margin-bottom:11px}.scenic_title{font-size:18px}.scenic_grade{background-image:url(http://webmap0.map.bdstatic.com/newmap/static/common/images/panorama/pano_scenic_6228f86.png);display:inline-block;width:80px;height:20px;margin:5px 0 0;text-align:center;line-height:20px;background-position:0 -15px;font-size:12px}.scenic_icon{background-image:url(http://webmap0.map.bdstatic.com/newmap/static/common/images/panorama/pano_scenic_6228f86.png);width:14px;height:14px;display:inline-block;vertical-align:middle}.scenic_info_list{padding:10px;margin-top:15px;border:1px solid #d7d7d7;font-size:12px}.scenic_icon.scenic_type{background-position:0 0}.scenic_icon.scenic_entrance_price{background-position:-14px 0}.scenic_icon.scenic_shop_hours{background-position:-28px 0}.scenic_icon.scenic_addr{background-position:-42px 0}.scenic_icon.scenic_phone{background-position:-56px 0}.scenic_sub_time,.scenic_best_time{background-position:-70px 0}.scenic_more{float:right;margin-top:-6px}.scenic_more a{color:#4d6acf}";return require.loadCss({content:style,name:"PanoScenicTheme"}),template({data:this.cinfo.themeData,baseBlock:this.cinfo.baseBlock,detailBlock:this.cinfo.detailBlock})}catch(e){"undefined"!=typeof alog&&alog("http://webmap0.map.bdstatic.com/newmap/static/common/widget/com/PanoScenicTheme/exception.fire","catch",{msg:e.message||e.description,path:"common:widget/com/PanoScenicTheme/PanoScenicTheme.js",ln:28})}},initialize:function(){try{if(this.panoramaFlashInteractive=this.cinfo.panoramaFlashInteractive,this.themeContainer=this.dom[0],!this.themeContainer)return;this.themeContainer.style.display="block",this._setUnrelatedDomsVisible(!1),this._slideAnimate(T.g("theme_scrollPanel"),350),this._appendScroller("theme_scrollPanel"),this._addEvents(),fullScreen.fullScreenState()&&(this.themeContainer.style.display="none");var e=baidu.g("wrapper").clientHeight;this.dom[0].style.height=e+"px"}catch(t){"undefined"!=typeof alog&&alog("http://webmap0.map.bdstatic.com/newmap/static/common/widget/com/PanoScenicTheme/exception.fire","catch",{msg:t.message||t.description,path:"common:widget/com/PanoScenicTheme/PanoScenicTheme.js",ln:53})}},dispose:function(){this._setUnrelatedDomsVisible(!0),this.scrollPanel.dispose(),this._removeEvents(),this.themeContainer.innerHTML="",this.themeContainer.style.display="none"},_slideAnimate:function(e,t){var n=new Animation.Animation;e.style.left=t+"px",e.style.display="block",n.build({fps:60,transition:Animation.Transitions.linear,duration:300,render:function(n){try{e.style.left=(1-n)*t+"px"}catch(a){"undefined"!=typeof alog&&alog("http://webmap0.map.bdstatic.com/newmap/static/common/widget/com/PanoScenicTheme/exception.fire","catch",{msg:a.message||a.description,path:"common:widget/com/PanoScenicTheme/PanoScenicTheme.js",ln:80})}},finish:function(){}})},_addEvents:function(){var e=this;e.EVENTS=[],e.EVENTS.updateScroller_onresize=function(){e._updateScrollerArea(),e.scrollPanel.update()},e.EVENTS.exitIndoor=function(){e.dispose()},e.EVENTS.fullScreen=function(){e.themeContainer.style.display="none"},e.EVENTS.exitFull=function(){e.themeContainer.style.display="block"},e.EVENTS.backchainCount=function(){addStat(STAT_CODE.STAT_STREETVIEW,{catalog:"lvyou_backchain"})},T.on(window,"onresize",e.EVENTS.updateScroller_onresize),e.panoramaFlashInteractive.addEventListener("onExitIndoor",e.EVENTS.exitIndoor),fullScreen.addEventListener("onFullScreen",e.EVENTS.fullScreen),fullScreen.addEventListener("onExitFull",e.EVENTS.exitFull),T(".scenic_more a").on("click",e.EVENTS.backchainCount)},_removeEvents:function(){T(window).off("onresize",this.EVENTS.updateScroller_onresize),this.panoramaFlashInteractive.removeEventListener("onExitIndoor",this.EVENTS.exitIndoor),fullScreen.removeEventListener("onFullScreen",this.EVENTS.fullScreen),fullScreen.removeEventListener("onExitFull",this.EVENTS.exitFull),T(".scenic_more a").off("click",this.EVENTS.backchainCount)},_updateScrollerArea:function(){var e=T.g("theme_scrollPanel");e&&(e.style.height=util.getClientSize().height-140+"px")},_appendScroller:function(){this._updateScrollerArea(),this.scrollPanel=new baidu.ui.ScrollPanel({container:"theme_scrollPanel",overflow:"overflow-y",autoUpdate:!1}),this.scrollPanel&&this.scrollPanel.render("theme_scrollPanel"),this.scrollPanel.update()},_setUnrelatedDomsVisible:function(e){var t=e?"visible":"hidden",n=[];n.push(T.g("btn_home"),T.g("favBtn"),T.g("MapInfoTab"),T.g("specialBtn"));for(var a in n)n[a]&&(n[a].style.visibility=t)}}),module.exports=PanoScenicTheme});