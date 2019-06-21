define("common:widget/pano/PhotoTour/PhotoTourGuide/PhotoTourGuide.js",function(require,exports,module){var ModuleClass=require("common:widget/pano/base/ModuleClass.js"),GUIDE_TEMPLATE=[function(_template_object){var _template_fun_array=[],fn=function(__data__){var _template_varName="";for(var name in __data__)_template_varName+="var "+name+'=__data__["'+name+'"];';eval(_template_varName),_template_fun_array.push('<div>    <div class="pano-func-item" style="z-index: 2;"></div>    <div class="pano-func-item" style="z-index: 1; left: 315px;">        <div id="photoGuideAlbum" style="width: 923px; height: 110px; z-index: 10010;">            <a href="javascript:void(0)" class="l_arrow arrow-disabled" title="上一页">            </a>            <div class="photoAlbum-container" style="width: 863px;">                <div class="photoAlbum-wraper" id="" style="width: 205px; z-index: 1; left: 0px;">                    ');for(var i=0;i<tourGuideData.Paths.length;i++)_template_fun_array.push('                                                <li class="photoAlbum-item" index="',"undefined"==typeof i?"":i,'" style="width: 198px; height: 108px; left: ',"undefined"==typeof(210*i)?"":210*i,'px;">                                    <div class="photoAlbum-item-wraper">                                                            <img src="',"undefined"==typeof tourGuideData.Paths[i].tourImage?"":tourGuideData.Paths[i].tourImage,'" onerror="this.src=&#39;http://webmap0.map.bdimg.com/newmap/static/common/images/pano_whole/img_error_4cffc74.png&#39;" style="width:198px;height:108px;">                                                <div class="photo-desc">                                                                            <i class="icon i-poi-2"></i>                                                        <span title="',"undefined"==typeof tourGuideData.Paths[i].tourName?"":tourGuideData.Paths[i].tourName,'">',"undefined"==typeof tourGuideData.Paths[i].tourName?"":tourGuideData.Paths[i].tourName,"</span>                                      </div>                                                </div>                            "),0===i&&_template_fun_array.push('                                <div id="photo-selected-border" class="selected-item" style="height: 102px; width: 192px; zoom: 1;"></div>                            '),_template_fun_array.push("                        </li>                    ");_template_fun_array.push('                </div>            </div>            <a href="javascript:void(0)" class="r_arrow arrow-disabled" title="下一页"></a>        </div>    </div></div>'),_template_varName=null}(_template_object);return fn=null,_template_fun_array.join("")}][0];require.loadCss({content:"#photoGuideAlbum{margin-top:5px;height:108px;-moz-user-select:none;-webkit-user-select:none;position:relative}#photoGuideAlbum .left-arrow,#photoGuideAlbum .right-arrow{background:url(http://webmap2.map.bdstatic.com/newmap/static/common/images/pano_whole/pano-icons_249d710.png) no-repeat;_background:url(http://webmap0.map.bdstatic.com/newmap/static/common/images/pano_whole/pano-icons-8_0ec7deb.png) no-repeat}#photoGuideAlbum .l_arrow,#photoGuideAlbum .r_arrow{float:left;width:30px;height:108px;text-align:center}#photoGuideAlbum .l_arrow:hover,#photoGuideAlbum .r_arrow:hover{cursor:pointer}#photoGuideAlbum .l_arrow .left-arrow{display:inline-block;width:18px;height:18px;background-position:0 -36px;margin-top:45px}#photoGuideAlbum .r_arrow .right-arrow{display:inline-block;width:18px;height:18px;background-position:-54px -36px;margin-top:45px}#photoGuideAlbum .l_arrow:hover .left-arrow{background-position:-18px -36px}#photoGuideAlbum .r_arrow:hover .right-arrow{background-position:-72px -36px}#photoGuideAlbum .arrow-disabled .left-arrow{background-position:-36px -36px}#photoGuideAlbum .arrow-disabled .right-arrow{background-position:-90px -36px}#photoGuideAlbum .arrow-disabled:hover .left-arrow{background-position:-36px -36px}#photoGuideAlbum .arrow-disabled:hover .right-arrow{background-position:-90px -36px}.photoAlbum-container{float:left;overflow:hidden;height:108px;position:relative}.photoAlbum-wraper{position:absolute}#photoGuideAlbum .photoAlbum-item{position:relative;float:left;border:1px #000 solid;margin-right:5px;font-size:0;position:absolute}#photoGuideAlbum .photoAlbum-item-wraper{left:0;top:0;z-index:4;zoom:1}#photoGuideAlbum .photoAlbum-item img{cursor:pointer;border:0;width:100%;height:100%}#photoGuideAlbum .photoAlbum-item .photo-desc{position:absolute;bottom:0;left:0;width:198px;height:24px;padding-top:25px;font-size:12px;color:#fff;z-index:3;background:url(http://webmap1.map.bdstatic.com/newmap/static/common/images/pano_whole/album-title-bg_eeddd16.png) left bottom repeat-x;_background:0 0}#photoGuideAlbum .photoAlbum-item .photo-desc span{display:inline-block;text-indent:4px;vertical-align:middle;width:170px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#photoGuideAlbum .photoAlbum-item .selected-item{position:absolute;top:0;left:0;border:3px solid #3af;z-index:5}#photoGuideAlbum .photoAlbum-item:hover{border:1px #3af solid}.photoAlbum-container{height:110px}#photoAlbum-scrollWraper{height:108px;overflow:hidden;position:relative}#photoGuideAlbum .icon{display:inline-block;width:16px;height:16px;vertical-align:middle;background:url(http://webmap1.map.bdstatic.com/newmap/static/common/images/pano_whole/guide_icons_ccb8b9c.png) no-repeat;_background:url(http://webmap0.map.bdstatic.com/newmap/static/common/images/pano_whole/guide_icons-8_00040ae.png) no-repeat}#photoGuideAlbum .i-poi-1,#photoGuideAlbum .i-poi-2,#photoGuideAlbum .i-poi-4{background-position:0 0;margin-left:8px}#photoGuideAlbum .i-poi-3,#photoGuideAlbum .i-poi-6{background-position:-32px 0;margin-left:8px}#photoGuideAlbum .i-poi-5{background-position:-48px 0;margin-left:8px}"});var PhotoTourGuide=ModuleClass.extend("PhotoTourGuide",{initialize:function(e,t,o){try{this._container=e,this._guideData=t,this._render(t),this._bindEvents(),this._seletedIndex=0,this.updateByTourId(o)}catch(i){"undefined"!=typeof alog&&alog("http://webmap2.map.bdstatic.com/newmap/static/common/widget/pano/PhotoTour/PhotoTourGuide/exception.fire","catch",{msg:i.message||i.description,path:"common:widget/pano/PhotoTour/PhotoTourGuide/PhotoTourGuide.js",ln:19})}},updateByTourId:function(e){var t=0;if(e)for(var o=this._guideData.Paths.length-1;o>=0;o--)this._guideData.Paths[o].tourId===e&&(t=o);this._seletedItem(t),this._seletedIndex=t},_render:function(e){try{var t=GUIDE_TEMPLATE({tourGuideData:e});this._guideContainer=T(t)[0],this._container.appendChild(this._guideContainer)}catch(o){"undefined"!=typeof alog&&alog("http://webmap2.map.bdstatic.com/newmap/static/common/widget/pano/PhotoTour/PhotoTourGuide/exception.fire","catch",{msg:o.message||o.description,path:"common:widget/pano/PhotoTour/PhotoTourGuide/PhotoTourGuide.js",ln:36})}},_bindEvents:function(){var e=this;T.dom("#photoGuideAlbum").delegate("li","click",function(t){for(var o=t.target;"LI"!=o.nodeName&&"photoGuideAlbum"!==o.id;)o=o.parentNode;var i=o.getAttribute("index");e._seletedIndex=i,e._seletedItem(i),e.dispatchEvent("id_selected",{data:{name:e._guideData.name+e._guideData.Paths[i].tourName,tourId:e._guideData.Paths[i].tourId}})})},_seletedItem:function(e){var t=T.g("photo-selected-border"),o=T(".photoAlbum-item");o[e].appendChild(t)},dispose:function(){this._container.removeChild(this._guideContainer),this._guideContainer=null,this._container=null,this._guideData=null},getCopyRightName:function(){return this._guideData.name+this._guideData.Paths[this._seletedIndex].tourName}});module.exports=PhotoTourGuide});