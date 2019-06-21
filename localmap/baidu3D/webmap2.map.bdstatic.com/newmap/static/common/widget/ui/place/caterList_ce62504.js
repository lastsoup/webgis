define("common:widget/ui/place/caterList.js",function(require,exports,module){var place=window.place||{};place.caterList=place.caterList||{};var CATER_TEMPLATE=[function(_template_object){var _template_fun_array=[],fn=function(__data__){var _template_varName="";for(var name in __data__)_template_varName+="var "+name+'=__data__["'+name+'"];';eval(_template_varName),_template_fun_array.push('<tr id="item-td-',"undefined"==typeof index?"":index,'" class="cater-list-item">    <th>        <div id="no',"undefined"==typeof showIconIndex?"":showIconIndex,'" class="icon ',"undefined"==typeof isGroupon?"":isGroupon,'" onclick="PoiSearchInst.select(',"undefined"==typeof index?"":index,', {statCode:STAT_CODE.STAT_GR_ITEM_CLICK})" title="在图上显示该点">        </div>    </th>    <td>        <div class="p-item-wrap">            <div class="p_title">                <div class="inr_pano">                    '),pano&&_template_fun_array.push('                        <a href="javascript:void(0);" class="street_view_poi mr-4" data-index="',"undefined"==typeof index?"":index,'" data-iconindex="',"undefined"==typeof showIconIndex?"":showIconIndex,'" onclick="addStat(&#39;poilistnormal.poi.pano&#39;, &#39;click&#39;, {&#39;da_trd&#39;: &#39;cater&#39;});" title="查看全景">                            <img src="',"undefined"==typeof timg?"":timg,'" />                        </a>                    '),_template_fun_array.push('                </div>                <p class="poiTitleW">                '),hasDetail?_template_fun_array.push('                    <a class="label" onclick="place.showDetail(&#39;',"undefined"http://webmap2.map.bdstatic.com/newmap/static/common/widget/ui/place/==typeof content.uid?"":content.uid,"&#39;, ","undefined"==typeof content.poiType?"":content.poiType,", ","undefined"==typeof sCityCode?"":sCityCode,", &#39;","undefined"==typeof placeSrcName?"":placeSrcName,'&#39;,&#39;Page&#39;,&#39;List&#39;);addStat(&#39;poilistnormal.poi.title&#39;, &#39;click&#39;, {&#39;da_trd&#39;: &#39;cater&#39;, &#39;da_abtest&#39;: &#39;true&#39;});return false;" tid="poi_name_',"undefined"==typeof index?"":index,'" id="link',"undefined"==typeof index?"":index,"_show_","undefined"==typeof guid?"":guid,'" href="javascript:void(0)" >',"undefined"http://webmap2.map.bdstatic.com/newmap/static/common/widget/ui/place/==typeof content.name?"":content.name,"</a>                "):_template_fun_array.push('                      <a class="label" onclick="PoiSearchInst.select(',"undefined"==typeof index?"":index,');addStat(&#39;poilistnormal.poi.title&#39;, &#39;click&#39;, {&#39;da_trd&#39;: &#39;cater&#39;, &#39;da_abtest&#39;: &#39;true&#39;});return false;" tid="poi_name_',"undefined"==typeof index?"":index,'" id="link',"undefined"==typeof index?"":index,"_show_","undefined"==typeof guid?"":guid,'" href="javascript:void(0)" >',"undefined"http://webmap2.map.bdstatic.com/newmap/static/common/widget/ui/place/==typeof content.name?"":content.name,"</a>                "),_template_fun_array.push("                                  "),hasDetail&&_template_fun_array.push('                    <a class="detail blueA cater-detail" tid="poiDetail_',"undefined"==typeof index?"":index,'" href="javascript:void(0)" onclick="place.showDetail(&#39;',"undefined"http://webmap2.map.bdstatic.com/newmap/static/common/widget/ui/place/==typeof content.uid?"":content.uid,"&#39;, ","undefined"==typeof content.poiType?"":content.poiType,", ","undefined"==typeof sCityCode?"":sCityCode,", &#39;","undefined"==typeof placeSrcName?"":placeSrcName,'&#39;,&#39;Page&#39;,&#39;List&#39;);addStat(&#39;poilistnormal.poi.detail&#39;, &#39;click&#39;, {&#39;da_trd&#39;: &#39;cater&#39;, &#39;da_abtest&#39;: &#39;true&#39;});return false;">详情»</a>                '),_template_fun_array.push("                    "),placeDetail.groupon&&_template_fun_array.push('                        <a href="javascript:;" class="icon-label bgr" onclick="place.showDetail(&#39;',"undefined"http://webmap2.map.bdstatic.com/newmap/static/common/widget/ui/place/==typeof content.uid?"":content.uid,"&#39;, ","undefined"==typeof content.poiType?"":content.poiType,", ","undefined"==typeof sCityCode?"":sCityCode,", &#39;","undefined"==typeof placeSrcName?"":placeSrcName,'&#39;,&#39;groupon&#39;,&#39;List&#39;);addStat(&#39;poilistnormal.poi.tuanbtn&#39;, &#39;click&#39;, {&#39;da_trd&#39;: &#39;cater&#39;, &#39;da_abtest&#39;: &#39;true&#39;});return false;" title="共有',"undefined"==typeof placeDetail.groupon.length?"":placeDetail.groupon.length,'条团购信息">团</a>                    '),_template_fun_array.push("                    "),takeout&&_template_fun_array.push('                        <a href="javascript:;" class="icon-label bgt" onclick="place.showTakeout(&#39;',"undefined"==typeof takeout.shop_id?"":takeout.shop_id,'&#39;);addStat(&#39;poilistnormal.poi.takeoutBtn&#39;, &#39;click&#39;, {&#39;da_trd&#39;: &#39;cater&#39;});return false;" title="',"undefined"http://webmap2.map.bdstatic.com/newmap/static/common/widget/ui/place/==typeof takeout.tips?"":takeout.tips,'">外</a>                    '),_template_fun_array.push("                    "),placeDetail.pc_bookable&&_template_fun_array.push('                        <a href="javascript:;" class="icon-label bgb" onclick="place.showDetail(&#39;',"undefined"http://webmap2.map.bdstatic.com/newmap/static/common/widget/ui/place/==typeof content.uid?"":content.uid,"&#39;, ","undefined"==typeof content.poiType?"":content.poiType,", ","undefined"==typeof sCityCode?"":sCityCode,", &#39;","undefined"==typeof placeSrcName?"":placeSrcName,'&#39;,&#39;cater_book&#39;,&#39;List&#39;);addStat(&#39;poilistnormal.poi.reservingbtn&#39;, &#39;click&#39;, {&#39;da_trd&#39;: &#39;cater&#39;, &#39;da_abtest&#39;: &#39;true&#39;});return false;" title="本店支持在线订座">订</a>                    '),_template_fun_array.push("                    "),placeDetail.premium2&&placeDetail.premium2.length&&_template_fun_array.push('                        <!--                        <a href="javascript:;" class="icon-label bgy" onclick="place.showDetail(&#39;',"undefined"http://webmap2.map.bdstatic.com/newmap/static/common/widget/ui/place/==typeof content.uid?"":content.uid,"&#39;, ","undefined"==typeof content.poiType?"":content.poiType,", ","undefined"==typeof sCityCode?"":sCityCode,", &#39;","undefined"==typeof placeSrcName?"":placeSrcName,'&#39;,&#39;premium&#39;,&#39;List&#39;);addStat(&#39;poilistnormal.poi.premiumbtn&#39;, &#39;click&#39;, {&#39;da_trd&#39;: &#39;cater&#39;, &#39;da_abtest&#39;: &#39;true&#39;});return false;" title="共有',"undefined"==typeof placeDetail.premium2.length?"":placeDetail.premium2.length,'条优惠信息">惠</a>                        -->                    '),_template_fun_array.push('                </p>            </div>            <div class="caterImg">                <div class="caterImgBox">                    <img width="66" height="52" src="',"undefined"==typeof headImage?"":headImage,'" onclick="place.showDetail(&#39;',"undefined"http://webmap2.map.bdstatic.com/newmap/static/common/widget/ui/place/==typeof content.uid?"":content.uid,"&#39;, ","undefined"==typeof content.poiType?"":content.poiType,",","undefined"==typeof sCityCode?"":sCityCode,", &#39;","undefined"==typeof placeSrcName?"":placeSrcName,'&#39;,&#39;Page_Pic&#39;,&#39;List&#39;);addStat(&#39;poilistnormal.poi.image&#39;, &#39;click&#39;, {&#39;da_trd&#39;: &#39;cater&#39;, &#39;da_abtest&#39;: &#39;true&#39;});"/>                </div>            </div>            '),(placeDetail.overall_rating||placeDetail.tag||placeDetail.price)&&(_template_fun_array.push('                    <p class="hotel_res">                    '),placeDetail.overall_rating&&_template_fun_array.push('                        <span tid="score_',"undefined"==typeof index?"":index,'" class="score">                            <b style="width:',"undefined"==typeof Math.round(61*placeDetail.overall_rating/5)?"":Math.round(61*placeDetail.overall_rating/5),'px">评分</b>                        </span>                    '),_template_fun_array.push("                    "),placeDetail.tag&&_template_fun_array.push('                        <span tid="itemTag_',"undefined"==typeof index?"":index,'" class="map_tagBox">',"undefined"==typeof(placeDetail.tag.split(/[, ]/)[0]||"")?"":placeDetail.tag.split(/[, ]/)[0]||"","</span>                    "),_template_fun_array.push("                    "),placeDetail.tag&&placeDetail.price&&_template_fun_array.push('                        <span class="line"></span>                    '),_template_fun_array.push("                    "),placeDetail.price&&_template_fun_array.push('                        <span tid="itemPrice_',"undefined"==typeof index?"":index,'" id="itemPrice_',"undefined"==typeof index?"":index,'">人均￥',"undefined"==typeof parseFloat(placeDetail.price,10)?"":parseFloat(placeDetail.price,10),"</span>                    "),_template_fun_array.push("                    </p>                ")),_template_fun_array.push("            "),content.addr&&_template_fun_array.push('                <p class="n_p_lineheight fc6" title="',"undefined"http://webmap2.map.bdstatic.com/newmap/static/common/widget/ui/place/==typeof content.addr?"":content.addr,'">',"undefined"http://webmap2.map.bdstatic.com/newmap/static/common/widget/ui/place/==typeof content.addr?"":content.addr,"</p>            "),_template_fun_array.push('            <p class="p_left">                <a tid="poiFavBtn_',"undefined"==typeof index?"":index,'"  id="poifav_',"undefined"http://webmap2.map.bdstatic.com/newmap/static/common/widget/ui/place/==typeof content.uid?"":content.uid,'" href="javascript:void(0)" onclick="SyncMgr.goFav({&#39;point&#39;:&#39;',"undefined"==typeof ptstr?"":ptstr,"&#39;,&#39;uid&#39;:&#39;","undefined"http://webmap2.map.bdstatic.com/newmap/static/common/widget/ui/place/==typeof content.uid?"":content.uid,"&#39;,&#39;cityCode&#39;:&#39;","undefined"==typeof sCityCode?"":sCityCode,"&#39;,&#39;title&#39;:&#39;","undefined"==typeof T.encodeHTML(content.name)?"":T.encodeHTML(content.name),"&#39;,&#39;content&#39;:&#39;","undefined"==typeof T.encodeHTML(con)?"":T.encodeHTML(con),'&#39;});addStat(&#39;poilistnormal.poi.poilistfavourite&#39;, &#39;click&#39;, {&#39;da_trd&#39;: &#39;cater&#39;, &#39;da_abtest&#39;: &#39;true&#39;});return false;" class="poi-fav ',"undefined"==typeof favSelectedCls?"":favSelectedCls,'">                    <img class="favorite" alt="',"undefined"==typeof favAlt?"":favAlt,'" src="',"undefined"==typeof timg?"":timg,'" />收藏                </a>                <a class="poi-fav" tid="poiSmSBtn_',"undefined"==typeof index?"":index,'" href="javascript:void(0)" onclick="addStat(&#39;poilistnormal.poi.poilisttomb&#39;, &#39;click&#39;, {&#39;da_trd&#39;: &#39;cater&#39;, &#39;da_abtest&#39;: &#39;true&#39;});PoiSearchInst._sendToSMS(this,&#39;',"undefined"http://webmap2.map.bdstatic.com/newmap/static/common/widget/ui/place/==typeof content.uid?"":content.uid,"&#39;,&#39;","undefined"==typeof content.poiType?"":content.poiType,"&#39;,&#39;","undefined"==typeof sCityCode?"":sCityCode,'&#39;,&#39;list&#39;,&#39; + hasDetail + &#39;,event);return false;">                    <img class="stml" alt="免费发送到手机" src="',"undefined"==typeof timg?"":timg,'"/>发送到手机                </a>                <a class="poi-fav"  href="javascript:void(0)" onclick="addStat(&#39;poilistnormal.share.poilistshare&#39;, &#39;click&#39;, {&#39;da_trd&#39;: &#39;cater&#39;, &#39;da_abtest&#39;: &#39;true&#39;});PoiSearchInst._sharePOI(event,{from:&#39;poishare&#39;, linkinfo:{poiShareUid:&#39;',"undefined"http://webmap2.map.bdstatic.com/newmap/static/common/widget/ui/place/==typeof content.uid?"":content.uid,'&#39;}});return false;">                    <img class="shareIcon"  alt="分享" src="',"undefined"==typeof timg?"":timg,'" />分享                </a>                                <a  onclick="addStat(&#39;poilistnormal.revision.poirevision&#39;, &#39;click&#39;, {&#39;da_trd&#39;: &#39;cater&#39;, &#39;da_abtest&#39;: &#39;true&#39;});PoiSearchInst.goCorrect(1,&#39;',"undefined"http://webmap2.map.bdstatic.com/newmap/static/common/widget/ui/place/==typeof content.uid?"":content.uid,'&#39;);" target="_blank" href="http://i.map.baidu.com/api/page/poicorrect/addpoiproblempc?business_trigger=10&poi_uid=',"undefined"==typeof encodeURIComponent(content.uid)?"":encodeURIComponent(content.uid),'" class="poi-fav poi-favNext" style="color:red;">                    <img class="correct_jiu" alt="纠错" src="',"undefined"==typeof timg?"":timg,'"/>纠错                </a>            </p>        </div>    </td></tr><tr style="height:5px"><th></th><td style="font-size:0"></td></tr>'),_template_varName=null}(_template_object);return fn=null,_template_fun_array.join("")}][0],T_IMG="../../../images/transparent.gif"/*tpa=http://webmap2.map.bdstatic.com/newmap/static/common/images/transparent.gif*/,NOPIC="../../../../../../../webmap0.map.bdstatic.com/newmap/static/common/images/nopic_96d29d1.gif"/*tpa=http://webmap0.map.bdstatic.com/newmap/static/common/images/nopic_96d29d1.gif*/;T.extend(place.caterList,{listHtml:function(e,t,a,i,n,o,d,p,c,l,r){var s=t.ext||{},f=t.pano,u=s.detail_info||{},_=u&&(u.pc_bookable||u.di_review_keyword||u.groupon_num||u.premium_flag),m=s.src_name||"",y=(e.place_info,"../../../../../../../map.baidu.com/maps/services/thumbnails-width=99&height=78&align=center,center&quality=100&src=.htm"/*tpa=http://map.baidu.com/maps/services/thumbnails?width=99&height=78&align=center,center&quality=100&src=*/);window.devicePixelRatio>1&&(y="../../../../../../../map.baidu.com/maps/services/thumbnails-width=132&height=104&align=center,center&quality=100&src=.htm"/*tpa=http://map.baidu.com/maps/services/thumbnails?width=132&height=104&align=center,center&quality=100&src=*/);var h=u.image?y+encodeURIComponent(u.image):NOPIC,g=u.book_info&&u.book_info.coms&&"takeout"===u.book_info.coms.type,v=g&&baidu.json.parse(u.book_info.coms.content),b=CATER_TEMPLATE({showIconIndex:i,index:a,placeDetail:u,content:t,placeSrcName:m,plStat:m.toUpperCase(),sCityCode:n,headImage:h,timg:T_IMG,ptstr:o,con:d,favSelectedCls:p,favAlt:c,isGroupon:l?"icon-groupon":"",guid:r,hasDetail:_,takeout:v,pano:f});return b},initialize:function(){try{}catch(e){"undefined"!=typeof alog&&alog("http://webmap2.map.bdstatic.com/newmap/static/common/widget/ui/place/exception.fire","catch",{msg:e.message||e.description,path:"common:widget/ui/place/caterList.js",ln:49})}}}),module.exports=place.caterList});