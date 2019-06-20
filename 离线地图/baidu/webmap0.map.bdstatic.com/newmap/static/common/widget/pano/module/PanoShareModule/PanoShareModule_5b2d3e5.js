define("common:widget/pano/module/PanoShareModule/PanoShareModule.js",function(require,exports,module){var ModuleClass=require("common:widget/pano/base/ModuleClass.js"),PanoShareUtil=require("common:widget/pano/module/PanoShareModule/PanoShareUtil.js"),style='#pano-share-panel{position:absolute;right:45px;width:380px;height:95px;z-index:100010;padding:0 15px;color:#fff;font-size:12px;background-color:#252525;opacity:.9;filter:alpha(opacity=90);_filter:alpha(opacity=90);border-radius:2px;font-size:12px}#pano-share-panel .left-area{float:left;width:74px}#pano-share-panel .right-area{float:left;width:302px}#pano-bin-code{visibility:hidden;margin-top:14px}#pano-share-panel .head{height:20px;line-height:20px;margin-top:10px;margin-bottom:6px;width:100%;color:#d3d8db}#pano-share-panel .close{float:right;width:18px;height:18px;background:url(http://webmap2.map.bdstatic.com/newmap/static/common/images/pano_whole/pano-icons_249d710.png) no-repeat -108px -16px;_background:url(http://webmap0.map.bdstatic.com/newmap/static/common/images/pano_whole/pano-icons-8_0ec7deb.png) no-repeat -108px -16px}#pano-share-panel .close:hover{background:url(http://webmap2.map.bdstatic.com/newmap/static/common/images/pano_whole/pano-icons_249d710.png) no-repeat -126px -18px;cursor:pointer;_background:url(http://webmap0.map.bdstatic.com/newmap/static/common/images/pano_whole/pano-icons-8_0ec7deb.png) no-repeat -126px -18px;cursor:pointer}#pano-share-panel .inputContainer{position:relative;float:left;vertical-align:middle}#pano-share-panel .inputContainer .input{width:240px;height:20px;text-indent:5px;background-color:#252525;border:1px #53565c solid;vertical-align:middle;color:#fff}#pano-share-panel #pano-share-msg{position:absolute;right:0;top:0;width:60px;height:22px;line-height:22px;text-align:center;color:#3af;font-size:12px;border:1px solid #3af;display:none}#pano-share-panel .copyContainer{position:relative;float:left;vertical-align:middle;width:45px;height:23px;margin-left:2px}#pano-share-panel .copyContainer .copyBack{position:absolute;left:0;top:0;width:45px;height:22px;line-height:22px;margin-left:2px;border:1px #53565c solid;color:#d3d8db;text-align:center;text-decoration:none;z-index:1}#pano-share-panel .btn{position:absolute;left:0;top:0;z-index:2;width:45px;height:22px}#pano-share-panel .btn:hover{cursor:pointer}#pano-baiduShare{margin-top:2px}#pano_bdshare{width:140px;height:30px;overflow:hidden;float:left}span.bds_more,.bds_tools a{font-family:Arial,"Microsoft Yahei","微软雅黑",sans-serif;height:16px;float:left;display:block;padding-top:6px;padding-bottom:3px;padding-left:22px}#pano_bdshare .bds_more{float:left;padding-top:6px;padding-left:0;color:#9da1a3;line-height:16px}span.bds_btn_arr{float:left;height:10px;width:10px;margin-top:10px;padding-bottom:3px;margin-left:4px;cursor:pointer;background:url(http://webmap2.map.bdstatic.com/newmap/static/common/images/pano_whole/pano-icons_249d710.png) 0 -54px no-repeat;_background:url(http://webmap0.map.bdstatic.com/newmap/static/common/images/pano_whole/pano-icons-8_0ec7deb.png) 0 -54px no-repeat}.bds_tools a{background-image:url(http://webmap1.map.bdstatic.com/newmap/static/common/images/bg_bdshare_d642b88.png);background-repeat:no-repeat;cursor:pointer}.bds_qzone{background-position:0 -85px!important}.bds_tsina{background-position:0 -125px!important}.bds_baidu{background-position:0 -165px!important}.bds_renren{background-position:0 -205px!important}.bds_tqq{background-position:0 -245px!important}.bds_kaixin001{background-position:0 -285px!important}.bds_hi{background-position:0 -365px!important}.bds_douban{background-position:0 -405px!important}.bds_tsohu{background-position:0 -445px!important}.bds_msn{background-position:0 -485px!important}.bds_fx{background-position:0 -525px!important}#bdshare_iwshare{margin-left:3px}#bdshare_iwshare.bds_tools{height:24px;_margin-top:-3px}#bdshare_iwshare.bds_tools a{padding-bottom:2px;+padding-bottom:4px}#bds_btn_arr_iwshare{_margin-top:-3px}';require.loadCss({content:style});var template=[function(_template_object){var _template_fun_array=[],fn=function(__data__){var _template_varName="";for(var name in __data__)_template_varName+="var "+name+'=__data__["'+name+'"];';eval(_template_varName),_template_fun_array.push('<div id="pano-share-panel"><div class="left-area"><img id="pano-bin-code" src="" width="66" height="66"/></div><div class="right-area"><div class="head"><a id="pano-share-close" href="javascript:void(0)" title="关闭" class="close"></a>您可将当前地图上的内容分享给好友</div><ul><li class="inputContainer"><input id="pano-shareLink" class="input" type="text"/><span id="pano-share-msg"></span></li><li class="copyContainer"><span class="copyBack">复制</span><a id="copeLinkBtn" class="btn" title="复制"></a></li></ul><div id="pano-baiduShare"></div></div></div>'),_template_varName=null}(_template_object);return fn=null,_template_fun_array.join("")}][0],PanoShareModule=ModuleClass.extend("PanoShareModule",{constructor:function(){this._opts=null},initialize:function(a){try{this._opts=a;var e=template(),n=T(e)[0],t=T.g("pano-share-btn");a.sharePanelClassName?n.className=a.sharePanelClassName:n.style.top=t.offsetTop+"px",a.parent.appendChild(n);var o=T.g("copeLinkBtn"),i=baidu.swf.createHTML({id:"linkBtnFlh",url:"../../../../swf/fClipboard.swf"/*tpa=http://webmap0.map.bdstatic.com/newmap/static/common/swf/fClipboard.swf*/,width:"48",height:"26",wmode:"transparent",ver:"9.0.0"});o.innerHTML=i,this.bindCloseEvent(),this.bindCopyEvent(),this.addBaiduShare(),this.getShortLink(),this.bindGlobalClickEvent()}catch(p){"undefined"!=typeof alog&&alog("http://webmap0.map.bdstatic.com/newmap/static/common/widget/pano/module/PanoShareModule/exception.fire","catch",{msg:p.message||p.description,path:"common:widget/pano/module/PanoShareModule/PanoShareModule.js",ln:57})}},getSupportEvents:function(){return["dispose"]},showMessage:function(a){var e=baidu.g("pano-share-msg");e.style.display="block",e.innerHTML=a,setTimeout(function(){e.style.display="none"},1300)},bindCopyEvent:function(){function a(){var a=baidu.swf.getMovie("linkBtnFlh");a&&a.flashInit&&a.flashInit()&&(clearInterval(n),a.setHandCursor(!0),a.setContentFuncName("pano_share_copy_getPasteData"))}var e=this,n=(T.G("pano-shareLink"),setInterval(a,500));window.pano_share_copy_getPasteData=function(){var a=T.G("pano-shareLink");return a?(e.showMessage("复制成功"),a.value):void 0}},bindCloseEvent:function(){var a=this;baidu.event.on("pano-share-close","click",function(){a.dispatchEvent("dispose")})},bindGlobalClickEvent:function(){var a=this,e=T.g("pano-share-panel");window.pano_share_global_click_handler=function(n){for(var t=n.srcElement||n.target;t;){if(t==e)return;if(t==document.body)return a.dispatchEvent("dispose"),T.un(document.body,"mousedown",window.pano_share_global_click_handler),void(window.pano_share_global_click_handler=null);t=t.parentNode}},T.on(document.body,"mousedown",window.pano_share_global_click_handler)},getShortLink:function(){var a=this._opts,e={data:a.context.panoContext.getPanoOptions(),iid:a.context.panoContext.getInnerId(),level:a.context.mapContext.getLevel(),shareParam:a.shareParam},n=PanoShareUtil.prepareShareParam(e);PanoShareUtil.getLink(n,function(a){baidu.g("pano-shareLink").value=a}),n.from="2dc",PanoShareUtil.getLink(n,function(a){var e=document.getElementById("pano-bin-code");e.src=PanoShareUtil.get2DCode(a),e.style.visibility="visible"})},addBaiduShare:function(){var a=this,e=baidu.g("pano-baiduShare"),n=T.G("pano-shareLink"),t=a._opts.context.panoContext.getPanoOptions();PanoShareUtil.creatShare(e,function(){return{data:t,roadName:a._opts.context.panoContext.getCurrentRoad(),link:n.value}})},dispose:function(){T.g("pano-share-panel")&&baidu.dom.remove("pano-share-panel")},event_panoChanged:function(a){var e=this,n=e._map,t=e._opts,o=a.data.panoType||"inter";e._currentPanoType!=o?(n.destroyAll(),e._reset(),t.data=a.data,e.create(o,t)):n.event_panoChanged&&n.event_panoChanged(a)}});module.exports=PanoShareModule});