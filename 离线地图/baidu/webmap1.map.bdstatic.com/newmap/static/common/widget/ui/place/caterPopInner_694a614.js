define("common:widget/ui/place/caterPopInner.js",function(require,exports,module){var place=window.place||{};place.caterPopInner=place.caterPopInner||{};var CATER_TEMPLATE=[function(_template_object){var _template_fun_array=[],fn=function(__data__){var _template_varName="";for(var name in __data__)_template_varName+="var "+name+'=__data__["'+name+'"];';eval(_template_varName),_template_fun_array.push('<div id="caterPopInner">    <div class="basic-info clearfix">        '),placeDetail.image&&_template_fun_array.push('        <div class="head-img">            <img width="104" onclick="place.showDetail(&#39;',"undefined"http://webmap1.map.bdstatic.com/newmap/static/common/widget/ui/place/==typeof content.uid?"":content.uid,"&#39;, ","undefined"==typeof content.poiType?"":content.poiType,", ","undefined"==typeof sCityCode?"":sCityCode,", &#39;","undefined"==typeof placeSrcName?"":placeSrcName,'&#39;,&#39;Page&#39;,&#39;List&#39;);" height="69" src="http://webmap3.map.bdimg.com/maps/services/thumbnails?width=106&height=71&align=center,center&src=',"undefined"==typeof encodeURIComponent(placeDetail.image)?"":encodeURIComponent(placeDetail.image),'">        </div>        '),_template_fun_array.push('        <div class="head-info" '),placeDetail.image||_template_fun_array.push(' style="width: auto;"'),_template_fun_array.push(">            "),content.addr&&_template_fun_array.push("                <p>","undefined"http://webmap1.map.bdstatic.com/newmap/static/common/widget/ui/place/==typeof content.addr?"":content.addr,"</p>            "),_template_fun_array.push("            "),content.tel&&_template_fun_array.push("                <p>","undefined"==typeof content.tel.replace(/(,|;)/gi,", ")?"":content.tel.replace(/(,|;)/gi,", "),"</p>            "),_template_fun_array.push("            "),(placeDetail.overall_rating||placeDetail.tag||placeDetail.price)&&(_template_fun_array.push('                <p class="hotel_res">                    '),placeDetail.overall_rating&&_template_fun_array.push('                    <span class="score">                        <b style="width:',"undefined"==typeof Math.round(61*placeDetail.overall_rating/5)?"":Math.round(61*placeDetail.overall_rating/5),'px">评分</b>                    </span>                    '),_template_fun_array.push("                    "),placeDetail.tag&&_template_fun_array.push('                        <span class="map_tagBox">',"undefined"==typeof(placeDetail.tag.split(/[, ]/)[0]||"")?"":placeDetail.tag.split(/[, ]/)[0]||"","</span>                    "),_template_fun_array.push("                    "),placeDetail.tag&&placeDetail.price&&_template_fun_array.push('                        <span class="line"></span>                    '),_template_fun_array.push("                    "),placeDetail.price&&_template_fun_array.push('                        <span class="price">人均￥',"undefined"==typeof parseFloat(placeDetail.price,10)?"":parseFloat(placeDetail.price,10),"</span>                    "),_template_fun_array.push("                </p>            ")),_template_fun_array.push("        </div>    </div>    "),(takeout||placeDetail.groupon&&placeDetail.groupon.length||placeDetail.pc_bookable||placeDetail.premium2&&placeDetail.premium2.length)&&(_template_fun_array.push('    <div class="ext-info">        '),placeDetail.groupon&&placeDetail.groupon.length?_template_fun_array.push('            <a class="ext-item" href="javascript:;" onclick="place.showGroupon(&#39;',"undefined"http://webmap1.map.bdstatic.com/newmap/static/common/widget/ui/place/==typeof content.uid?"":content.uid,"&#39;, ","undefined"==typeof content.poiType?"":content.poiType,", ","undefined"==typeof sCityCode?"":sCityCode,", &#39;","undefined"==typeof placeSrcName?"":placeSrcName,"&#39;,&#39;groupon&#39;,&#39;Iw&#39;, &#39;","undefined"==typeof placeDetail.groupon[0].groupon_url_pc?"":placeDetail.groupon[0].groupon_url_pc,'&#39;);addStat(&#39;poiinfoWin.poi.tuan&#39;, &#39;click&#39;, {da_trd: &#39;cater&#39;, da_abtest:&#39;true&#39;});return false;">                <span class="icon-label bgr">团</span>                <span class="desc">',"undefined"==typeof placeDetail.groupon[0].groupon_title?"":placeDetail.groupon[0].groupon_title,'</span>                <span class="btn">去看看</span>            </a>        '):placeDetail.premium2&&placeDetail.premium2.length&&_template_fun_array.push('            <a class="ext-item" href="javascript:;" onclick="place.showDetail(&#39;',"undefined"http://webmap1.map.bdstatic.com/newmap/static/common/widget/ui/place/==typeof content.uid?"":content.uid,"&#39;, ","undefined"==typeof content.poiType?"":content.poiType,", ","undefined"==typeof sCityCode?"":sCityCode,", &#39;","undefined"==typeof placeSrcName?"":placeSrcName,'&#39;,&#39;premium&#39;,&#39;List&#39;);addStat(&#39;poiinfoWin.poi.discount&#39;, &#39;click&#39;, {da_trd: &#39;cater&#39;, da_abtest:&#39;true&#39;});return false;" >                <span class="icon-label bgy">惠</span>                <span class="desc">',"undefined"==typeof placeDetail.premium2[0].discount_title?"":placeDetail.premium2[0].discount_title,'</span>                <span class="btn">去看看</span>            </a>        '),_template_fun_array.push("        "),placeDetail.pc_bookable&&_template_fun_array.push('            <a class="ext-item" href="javascript:;" onclick="place.showDetail(&#39;',"undefined"http://webmap1.map.bdstatic.com/newmap/static/common/widget/ui/place/==typeof content.uid?"":content.uid,"&#39;, ","undefined"==typeof content.poiType?"":content.poiType,", ","undefined"==typeof sCityCode?"":sCityCode,", &#39;","undefined"==typeof placeSrcName?"":placeSrcName,'&#39;,&#39;cater_book&#39;,&#39;List&#39;);addStat(&#39;poiinfoWin.poi.seatreserving&#39;, &#39;click&#39;, {da_trd: &#39;cater&#39;, da_abtest:&#39;true&#39;});return false;">                <span class="icon-label bgb">订</span>                <span class="desc">本店支持在线订座</span>                <span class="btn">我要订座</span>            </a>        '),_template_fun_array.push("        "),takeout&&(_template_fun_array.push('            <a class="ext-item" href="javascript:;" onclick="place.showTakeout(&#39;',"undefined"==typeof takeout.shop_id?"":takeout.shop_id,'&#39;);addStat(&#39;poiinfoWin.poi.takeoutBtn&#39;, &#39;click&#39;, {da_trd: &#39;cater&#39;});return false;">                <span class="icon-label bgt">外</span>                <span class="desc">本店支持外卖配送，'),takeout.tips?_template_fun_array.push("","undefined"http://webmap1.map.bdstatic.com/newmap/static/common/widget/ui/place/==typeof takeout.tips?"":takeout.tips,""):_template_fun_array.push("专业配送，品质保证"),_template_fun_array.push('</span>                <span class="btn">去看看</span>            </a>        ')),_template_fun_array.push("    </div>    ")),_template_fun_array.push("    "),placeDetail.comment&&placeDetail.comment.length&&(_template_fun_array.push('    <div class="comment">        <a class="num" href="javascript:;" onclick="addStat(&#39;poiinfoWin.poi.commentLnk&#39;, &#39;click&#39;, {da_trd: &#39;cater&#39;, da_abtest:&#39;true&#39;});place.showDetail(&#39;',"undefined"http://webmap1.map.bdstatic.com/newmap/static/common/widget/ui/place/==typeof content.uid?"":content.uid,"&#39;, ","undefined"==typeof content.poiType?"":content.poiType,", ","undefined"==typeof sCityCode?"":sCityCode,", &#39;","undefined"==typeof placeSrcName?"":placeSrcName,'&#39;,&#39;comment&#39;,&#39;List&#39;);return false;">共',"undefined"==typeof placeDetail.comment_num?"":placeDetail.comment_num,'条评论</a>        <p class="desc" onclick="addStat(&#39;poiinfoWin.poi.comment&#39;, &#39;click&#39;, {da_trd: &#39;cater&#39;, da_abtest:&#39;true&#39;});place.showDetail(&#39;',"undefined"http://webmap1.map.bdstatic.com/newmap/static/common/widget/ui/place/==typeof content.uid?"":content.uid,"&#39;, ","undefined"==typeof content.poiType?"":content.poiType,", ","undefined"==typeof sCityCode?"":sCityCode,", &#39;","undefined"==typeof placeSrcName?"":placeSrcName,'&#39;,&#39;comment&#39;,&#39;List&#39;);return false;">            <i class="arrow"></i>            '),placeDetail.comment[0].length>45?_template_fun_array.push("                ","undefined"==typeof placeDetail.comment[0].substring(0,45)?"":placeDetail.comment[0].substring(0,45),"...            "):_template_fun_array.push("                ","undefined"==typeof placeDetail.comment[0]?"":placeDetail.comment[0],"            "),_template_fun_array.push("        </p>    </div>    ")),_template_fun_array.push("    "),hasDetail&&_template_fun_array.push('    <div class="other-info">        <a class="more-btn" href="javascript:;" onclick="addStat(&#39;poiinfoWin.poi.showmoreBtn&#39;, &#39;click&#39;, {da_trd: &#39;cater&#39;, da_abtest:&#39;true&#39;});place.showDetail(&#39;',"undefined"http://webmap1.map.bdstatic.com/newmap/static/common/widget/ui/place/==typeof content.uid?"":content.uid,"&#39;, ","undefined"==typeof content.poiType?"":content.poiType,", ","undefined"==typeof sCityCode?"":sCityCode,", &#39;","undefined"==typeof placeSrcName?"":placeSrcName,'&#39;,&#39;Page&#39;,&#39;List&#39;);return false;">            查看更多<i class="arrow"></i>        </a>        <a class="ugc-upload" target="_blank" href="http://webmap1.map.bdstatic.com/ugc/upload/index?uid=',"undefined"http://webmap1.map.bdstatic.com/newmap/static/common/widget/ui/place/==typeof content.uid?"":content.uid,'" onclick="addStat(&#39;poiinfoWin.poi.uploadBtn&#39;, &#39;click&#39;, {da_trd: &#39;cater&#39;, da_abtest:&#39;true&#39;})">传照片</a>        <a class="ugc-remark" target="_blank" href="http://webmap1.map.bdstatic.com/ugc/remark/index?uid=',"undefined"http://webmap1.map.bdstatic.com/newmap/static/common/widget/ui/place/==typeof content.uid?"":content.uid,'" onclick="addStat(&#39;poiinfoWin.poi.remarkBtn&#39;, &#39;click&#39;, {da_trd: &#39;cater&#39;, da_abtest:&#39;true&#39;})">写评论</a>    </div>    '),_template_fun_array.push("</div>"),_template_varName=null}(_template_object);return fn=null,_template_fun_array.join("")}][0];T.extend(place.caterPopInner,{contentHtml:function(e,a){addStat("poiinfoWin.poi.poiinfowin","show",{da_trd:"cater",da_abtest:!0});var t=e.ext||{},n=t.detail_info||{},p=n,i=t.src_name||"",o=n.book_info&&n.book_info.coms&&"takeout"===n.book_info.coms.type,l=n.takeout&&n.takeout[0],c=o?baidu.json.parse(n.book_info.coms.content):l&&n.takeout[0];return CATER_TEMPLATE({content:e,placeExt:t,placeDetail:n,placeSrcName:i,sCityCode:a,hasDetail:p,takeout:c})}}),module.exports=place.caterPopInner});