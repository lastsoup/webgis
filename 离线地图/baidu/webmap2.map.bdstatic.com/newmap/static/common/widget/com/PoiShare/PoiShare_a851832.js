define("common:widget/com/PoiShare/PoiShare.js",function(require,exports,module){function PoiShare(e){MapComponent.call(this,e)}var MapComponent=require("common:widget/com/MapComponent.js"),config=require("common:widget/ui/config/config.js"),constant=require("common:widget/ui/constant/Constant.js"),mapUtil=require("common:widget/ui/mapUtil/mapUtil.js"),signMgr=require("common:widget/ui/signMgr/signMgr.js"),MapConfig=config.mapConfig,modelConfig=config.modelConfig,setComplaintCenterURL=require("common:widget/ui/SetComplaintCenter/SetComplaintCenter.js"),util=require("common:widget/ui/util/util.js");T.inherits(PoiShare,MapComponent,"PoiShare"),T.object.extend(PoiShare.prototype,{render:function(){try{var template=[function(_template_object){var _template_fun_array=[],fn=function(__data__){var _template_varName="";for(var name in __data__)_template_varName+="var "+name+'=__data__["'+name+'"];';eval(_template_varName),_template_fun_array.push('<div class="mapinfo_con">  <div id="share_',"undefined"==typeof guid?"":guid,'"></div></div>'),_template_varName=null}(_template_object);return fn=null,_template_fun_array.join("")}][0];return template({guid:this.guid})}catch(e){"undefined"!=typeof alog&&alog("http://webmap2.map.bdstatic.com/newmap/static/common/widget/com/PoiShare/exception.fire","catch",{msg:e.message||e.description,path:"common:widget/com/PoiShare/PoiShare.js",ln:28})}},initialize:function(){try{var e=this,t=baidu.url.queryToJson(location.href),a=null,i="",n=modelConfig.cityCode;if(t&&t.poiShareId){a=t.poiShareId;var o="/userflag/share.php?act=read_share&shareId="+a+"&t="+(new Date).getTime();baidu.ajax(o,{dataType:"json",success:function(t){e.json=t,1!=e.json.result?(signMgr(),i+="您分享的地点链接已失效，或包含敏感词。<br>请重新获取正确链接。"):(i+='<p class="detail_title">'+e.json.content.title+"</p>",i+='<p style="overflow:visible;width:100%;word-wrap:break-word;white-space:-moz-pre-wrap;">'+signMgr.deCodeShare(e.json.content.content)+"</p>",e.initMark(),e.initMap()),T.G("share_"+e.guid)&&(T.G("share_"+e.guid).innerHTML=i)},error:function(){i+="<p>在<strong>当前视图区域</strong>内未找到相关地点。请重新搜索！",T.G("share_"+e.guid)&&(T.G("share_"+e.guid).innerHTML=i)}})}else t&&t.poiShareUid&&(a=t.poiShareUid,n=t.cityCode||1,baidu.ajax("/?qt=inf&uid="+a+"&c="+n,{dataType:"json",success:function(a){if(e.json=a,e.json.content)util.loadSearchInfo(function(a){e.delayInit(t,a)});else{var i="您分享的地点链接已失效，或包含敏感词。<br>请重新获取正确链接。";T.G("share_"+e.guid)&&(T.G("share_"+e.guid).innerHTML=i)}},error:function(){}}))}catch(r){"undefined"!=typeof alog&&alog("http://webmap2.map.bdstatic.com/newmap/static/common/widget/com/PoiShare/exception.fire","catch",{msg:r.message||r.description,path:"common:widget/com/PoiShare/PoiShare.js",ln:87})}},initMark:function(){var e=this,t=e.json.content,a=new BMap.Point(t.point.split("|")[0],t.point.split("|")[1]);e.point=a;var i=function(){if(window.MapSignInst){MapSignInst.getFavArr();var e=MapSignInst.checkInFav("",{from:"share",json:t});if(-1==e)var a=MapSignInst.createMark(t,"",{from:"share",isInFav:0});else var a=MapSignInst.createMark(t,"",{from:"share",isInFav:1});var i=MapSignInst.config.iw.index-1;MapSignInst.openInfoWnd(a,i)}};signMgr("connectFlash",i)},initMap:function(){var e=this;map.centerAndZoom(e.point,17)},delayInit:function(e,t){var a="",n=this,o=e.cityCode,r=this.json.content,s=r.name,p=r.poiType,c=r.geo.split("|")[1];c=c.split(";")[0];var l=c.split(",")[0],d=c.split(",")[1],c=new BMap.Point(l,d),_=new BMap.Marker(c);(p==constant.POI_TYPE_BUSSTOP||p==constant.POI_TYPE_SUBSTOP)&&(r.addr=T.array.unique(r.addr.split(";")).join("; ")),map.centerAndZoom(c,17);var m=t.createSearchInfoWnd({title:r.name,addr:r.addr,tel:r.tel,uid:r.uid,poiType:p,hasDetail:r.detail&&r.ty==constant.GEO_TYPE_POINT||r.poiType==constant.POI_TYPE_BUSLINE||r.poiType==constant.POI_TYPE_SUBLINE,detail:r.detail,ext_type:r.ext_type,ext:r.ext,topic:r.topic},{cityCode:o,x:l,y:d});if(r.uid&&"undefined"!=typeof r.ext_type&&1&r.ext_type){var u="<a href='javascript:void(0)' class='inr-tip' onclick='InrMgr.open(\""+r.uid+'", {wd : "'+r.name+"\", code : STAT_INR_INFO_CLICK});return false;'>室内地图</a>",f=mapUtil.createNormalTip(u,{point:c,offset:new BMap.Size(10,-22)});f.setStyle({background:"url(http://webmap2.map.bdstatic.com/newmap/static/common/images/inr_bg_3fefafb.gif) 0 -29px no-repeat",height:"20px",border:"0"}),f.setTitle("查看室内地图"),f._indoor=!0,_.setLabel(f),f.hide(),m.addEventListener("open",function(){var e=m.overlay.getLabel();e&&e._indoor&&e.hide()}),m.addEventListener("close",function(){var e=m.overlay.getLabel();e&&e._indoor&&e.show()})}if(map.addOverlay(_),_.addEventListener("click",function(){t.openSearchInfoWndPOI(m,_)}),t.openSearchInfoWndPOI(m,_),p==constant.POI_TYPE_BUSSTOP&&(s+="-公交车站"),p==constant.POI_TYPE_SUBSTOP&&(s+="-地铁站"),r.detail&&r.ty==constant.GEO_TYPE_POINT||p==constant.POI_TYPE_BUSLINE||p==constant.POI_TYPE_SUBLINE)if(r.ext&&r.ext.src_name&&("biaozhu_data"==r.ext.src_name&&"1"==r.ext.yw_type||window.place&&window.place.placeRe.test(r.ext.src_name))){var h="详情";if("biaozhu_data"==r.ext.src_name&&"1"==r.ext.yw_type)s+=' - <a class="detail blueA" href="javascript:void(0)" onclick="place.showDetail(\''+r.uid+"', "+p+", "+this.sCityCode+', \'ISHOP_INFO\');return false;">详情»</a> <img src="../../../images/yw_c0325d6.gif"/*tpa=http://webmap2.map.bdstatic.com/newmap/static/common/images/yw_c0325d6.gif*/ style="position:relative;top:3px"/>';else{"house"==r.ext.src_name&&(h="楼盘详情");var g="";"hospital"==r.ext.src_name&&r.business_id&&(g=r.business_id),s+=' - <a class="detail blueA" href="javascript:void(0)" onclick="place.showDetail(\''+r.uid+"', "+p+", "+this.sCityCode+", '"+r.ext.src_name+"','Page','List'"+(g?",false,'"+g+"'":"")+');return false;">'+h+"»</a>"}}else s+=' - <a class="detail blueA" href="javascript:void(0)" onclick="place.showDetail(\''+r.uid+"', "+r.poiType+", "+this.sCityCode+');return false;">详情»</a>';if(a+='<p class="detail_title">'+s+"</p>",p==constant.POI_TYPE_BUSSTOP||p==constant.POI_TYPE_SUBSTOP?r.addr&&(a+="车次："+r.addr+"<br />"):r.addr&&(a+="地址："+r.addr+"<br />"),r.tel&&(a+="电话："+r.tel+"<br />"),r.ext&&"hotel"==r.ext.src_name&&r.ext.detail_info){var v,y,w=r.ext.detail_info;(w.score||w.review_num)&&(a+='<p class="hotel_res">',w.score&&(v=Math.round(1*w.score*12.8),v=isNaN(v)?0:v,a+='<span tid="score_'+i+'" class="score"><b style="width:'+v+'px">评分</b></span>'),w.review_num&&(y=isNaN(w.review_num)?0:w.review_num,y>0&&(a+='<span class="review_num"><a class="review" href="javascript:void(0)" onclick="place.showDetail(\''+r.uid+"', "+p+", "+this.sCityCode+", 'hotel','Page_Comm','List');return false;\">"+y+"篇评论</a></span>")),a+="</p>")}if(r.ext&&"biaozhu_data"==r.ext.src_name&&"0"!=r.ext.yw_type){if(r.ext.detail_info&&r.ext.detail_info.length>1&&r.ext.detail_info[1].type&&r.ext.detail_info[1].type.length>1){for(var x=r.ext.detail_info[1].type[1].split("-"),S=!1,P=0,y=x.length;y>P;P++)"餐饮"==x[P]&&(S=!0);if(S)for(var P=0,y=r.ext.detail_info[1].custom.length;y>P;P++){var b=r.ext.detail_info[1].custom[P];("人均"==b.t&&""!=b.c||"菜系"==b.t&&""!=b.c)&&(a+="<p>"+b.t+"："+b.c+"</p>")}}var I=[],C="http://map.baidu.com/ishop/detail.html?newmap=1&s="+encodeURIComponent("inf&uid="+r.uid+"&c="+this.sCityCode+"&newmap=1");r.ext.youhui_info.length>0&&(""!=r.ext.youhui_info[0].info||""!=r.ext.youhui_info[0].pics)&&I.push('<a href="'+C+'#speresult" target="_blank">优惠信息</a>'),r.ext.pic_info.length>0&&I.push('<a href="'+C+'#picresult" target="_blank">图片</a>'),a+=I.join("&nbsp;&nbsp;")}if(r.ext&&r.ext.title_link)for(var M=r.ext.title_link,P=0,j=M.length;j>P;P++)a+='<a href="'+M[P].link+'" target="_blank" >'+M[P].title+"</a>",j-1>P&&(a+="&nbsp;&nbsp;");a+='<p style="color:#777;margin-top:30px;" class="blueC">百度提醒您：结果有错误？请到<a id="mapComplaintCenter" href="http://tousu.baidu.com/map/add" target="_blank">百度地图投诉中心反馈</a></p>',T.G("share_"+n.guid)&&(T.G("share_"+n.guid).innerHTML=a),setComplaintCenterURL(map,n)}}),module.exports=PoiShare});