define("common:widget/ui/Pc2Mobile/Pc2Mobile.js",function(e,o,i){var t=(e("common:widget/ui/stat/CodeStat.js"),e("common:widget/ui/util/util.js")),n=2,d={box:null,init:function(){var e=this;this.box=T.dom.create("div",{id:"pc2mobile_cover"}),this._innerFun=function(){e.resize()},T.on(window,"resize",this._innerFun)},show:function(){var e=this.box;document.body.appendChild(e),this.resize()},hide:function(){var e=this;e.box&&document.body.removeChild(e.box),e.clear()},resize:function(){if(this.box){var e=this.box,o=t.getClientSize();6==T.browser.ie&&(e.style.width=o.width+"px",e.style.height=o.height+"px")}},clear:function(){this._innerFun&&(T.un(window,"resize",this._innerFun),delete this._innerFun),delete this.box}},s={popup:null,component:null,open:function(e,o,i){switch(i=i||{},o){case"城市推广安卓按钮":addStat("sendtodevice.sendtomb.citylisttodevicebyand");break;case"城市推广ios按钮":addStat("sendtodevice.sendtomb.citylisttodevicebyios");break;case"公交安卓按钮":addStat("sendtodevice.sendtomb.bltodevicebyandroid");break;case"公交ios按钮":addStat("sendtodevice.sendtomb.bltodevicebyios");break;case"POI安卓按钮":addStat("sendtodevice.sendtomb.poitodevicebyandroid");break;case"POIios按钮":addStat("sendtodevice.sendtomb.poitodevicebyios");break;case"短信窗口安卓按钮":addStat("sendtodevice.sendtomb.smstodevicebyandroid");break;case"短信窗口ios按钮":addStat("sendtodevice.sendtomb.smstodevicebyios");break;case"下载页安卓按钮":addStat("sendtodevice.sendtomb.downpagetodevicebyandroid");break;case"下载页ios按钮":addStat("sendtodevice.sendtomb.downpagetodevicebyios");break;case"收藏栏":addStat("sendtodevice.sendtomb.favouritetodevice")}if(e){e=e.toUpperCase();var t={from:e,realfrom:o};i.qudao&&(t.qudao=i.qudao),i.pref&&(t.pref=i.pref),this._open(t)}},close:function(){this.popup&&this.popup.close()},_open:function(o){this.popup&&this.popup.close(),o=o||{};var i=this,t={content:"",isTitle:!1,extClass:"mo-popup",height:409,width:674,defaultAnchor:n,clickClose:!1,closeButton:'<button class="mo-close" title="关闭"></button>',close:function(){i.clear(i.popup),i.popup=null}};e.async(["common:widget/ui/Popup/Popup.js","common:widget/com/MobileDownload/MobileDownload.js"],function(e,n){var s=i.popup=new e(t);s.render(),s.hide(),d.init();new n({dom:s.content,cinfo:o});d.show(),s.show()});var s=T.browser.ie&&T.browser.ie<=7?"keypress":"keydown";T.on(window.document,s,function(e){i._escFun=arguments.callee,27==e.keyCode&&i.popup&&i.popup.close()})},clear:function(e){if(this._escFun){var o=T.browser.ie&&T.browser.ie<=7?"keypress":"keydown";T.un(window.document,o,this._escFun),this._escFun=null}d.hide(),e=null},addTip:function(){var e=this;"2"===T.cookie.get("Maptodowntip")||window.isPrint||baidu(document.body).insertHTML("beforeend",'<div id="MaptoDown_tip" class="search-tip"><i title="关闭" class="close">关闭</i><div class="inner"><div class="lk-btn1"><a  href="javascript:void(0)">离线使用，省90%流量！</a></div></div><a  href="javascript:void(0)" class="moIndexTip"></a></div>'),baidu("#MaptoDown_tip").on("click",function(){e.open("IMG","检索框tip"),addStat("indexheader.clientdownpage.searchboxtip")}),baidu("#MaptoDown_tip i").on("click",function(o){e.removeTip(),o.stopPropagation(),o.preventDefault()})},removeTip:function(){var e=T.g("MaptoDown_tip");baidu.dom.remove(e),T.cookie.set("Maptodowntip","2",{expires:6048e5})}};i.exports=window.PcToMobile=s});