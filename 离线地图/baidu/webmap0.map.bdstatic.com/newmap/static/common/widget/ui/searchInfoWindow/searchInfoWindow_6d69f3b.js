define("common:widget/ui/searchInfoWindow/searchInfoWindow.js",function(e,i,t){var n=e("common:widget/com/componentManager.js"),a=e("common:widget/ui/util/util.js"),o=e("common:widget/ui/constant/Constant.js"),s=(e("common:widget/ui/searchBox/searchBox.js"),e("common:widget/ui/signMgr/signMgr.js")),r=(e("common:widget/ui/mapInfo/mapInfo.js"),e("common:widget/ui/mapUtil/mapUtil.js")),d=e("common:widget/ui/indexUtil/IndexUtil.js"),c=e("common:widget/ui/sms/sms.js"),l=e("common:widget/ui/config/config.js"),p=e("common:widget/pano/PanoInterface/PanoInterface.js"),u=l.modelConfig,h=(l.mapConfig,l.urlConfig),f={content:null,opts:null,queryWd:"",iwExt:null,iwOpts:null,rangeSearchCenterMarker:null,addRangeSearchCenterPoi:function(e,i,t,n){this.rangeSearchCenterMarker&&(this.rangeSearchCenterMarker.remove(),this.rangeSearchCenterMarker=null);var s=a.getPoiPoint(e);if(s){var r=new BMap.Icon(o.A_J_MARKER_IMG,o.A_J_MARKER_BLUE_SIZE,{offset:o.A_J_MARKER_BLUE_OFFSET,imageOffset:new BMap.Size(-68,-156),infoWindowOffset:o.A_J_MARKER_INFOWND_OFFSET}),d=n||25e5,c=new BMap.Marker(s,{icon:r,zIndexFixed:!0,baseZIndex:d});return map.addOverlay(c),c._stCode=o.OVERLAY_STYLE.MKR_RCTR,t||(this.rangeSearchCenterMarker=c),i&&c.setTitle(i),c}},createSearchInfoWnd:function(e,i){this.content=e,this.opts=i||{};var t=e.title,n=e.addr,a=e.desc,r=e.blinfo,d=e.tel&&e.tel.replace(/(,|;)/gi,", "),c=e.uid||"",l=e.poiType||o.POI_TYPE_NORMAL,p=e.hasDetail,f=e.ext,_=e.transUid,w=e.mingpian,m=f&&f.pic_info?f.pic_info:[],g=e.userSign||0,v=e.fav||0,b=e.content,S=(e.bizType,i.tabIndex),y=window.place?window.place.placeRe:"",C=(window.place?window.place.placeConfig:"",window.place?!!f&&f.src_name:""),I="cater"===C,x=e.origin_id&&e.origin_id.overview_guid?e.origin_id.overview_guid:"",k=e.catId,P="",R="",M="",B=this,G=e.pano||0,E=e.indoor_pano||0,O=("undefined"==typeof e.pano_index?-1:e.pano_index,e.wd||"",e.street_id||"");m.length>0&&m[0].pics&&(m=f.pic_info[0].pics),i||(i={});var N=i.cityCode||u.cityCode,j=["","",""],U=["none","none","none"];if(void 0!==S&&U[S]?(j[S]="hover",U[S]="block"):(j[1]="hover",U[1]="block"),!t)return null;var L=!!f;if(L)switch(f.src_name){case"ctrip_hotel":break;case"ctrip_site":L=!1;break;case"dianping":L=!1;break;case"house_new":break;case"house_ershou":break;case"biaozhu_data":}this.hasDetailPage=y?!(!f||!y.test(C)):"";var A=t;l==o.POI_TYPE_BUSSTOP?A+="-公交车站":l==o.POI_TYPE_SUBSTOP&&(A+="-地铁站"),P=A,A.replace(/[\u0100-\uffff]/g,"##").length>30&&(A=A.substring(0,14)+"...");var D=0;if(f&&f.detail_info){var W=f.detail_info;W.premium2&&"[object Array]"==Object.prototype.toString.call(W.premium2)&&W.premium2.length&&(D=1)}var F="<p class='iw_poi_title "+(I?"cater_title":"")+"' title='"+t+"'>";if(F+="<span class='susIconSetFlag'></span>",I||p||!i.hideDetail&&(l==o.POI_TYPE_BUSLINE||l==o.POI_TYPE_SUBLINE)){var $=I?20:25,Y=I?9:11;A.replace(/[\u0100-\uffff]/g,"##").length>$&&(A=A.substring(0,Y)+"...");var q="";if(y&&f&&("biaozhu_data"==f.src_name||y.test(C))){var z="详情";if("biaozhu_data"==f.src_name&&(""!=f.detail_info[1].description||f.youhui_info.length>0&&(""!=f.youhui_info[0].info||2==f.youhui_info[0].date.length)||m.length>0))F+=A;else{var H=f.detail_info,X=H&&(H.pc_bookable||H.di_review_keyword||H.groupon_num||H.premium_flag);if(F+="cater"==f.src_name?"<a  href='javascript:void(0)' class='title' onclick='addStat(\"poiinfowin.poi.title\");place.showDetail(\""+c+'", '+l+", "+N+', "'+f.src_name+'","Page","Iw");return false;\'>'+A+"</a>":"<a  href='javascript:void(0)' class='title' onclick='place.showDetail(\""+c+'", '+l+", "+N+', "'+f.src_name+'","Page","Iw");return false;\'>'+A+"</a>",y.test(C)){var V=(C.toUpperCase()+"_","");"hospital"==C&&e.business_id&&(V=e.business_id),"cater"==C?X&&(F+="<a href='javascript:void(0)' onclick='place.showDetail(\""+c+'", '+l+", "+N+', "'+f.src_name+'","Page","Iw"'+(V?',false,"'+V+'"':"")+');addStat("poiinfowin.poi.detail");'+q+"return false;'>"+z+"&raquo;</a>"):F+="<a href='javascript:void(0)' onclick='place.showDetail(\""+c+'", '+l+", "+N+', "'+f.src_name+'","Page","Iw"'+(V?',false,"'+V+'"':"")+");"+q+"return false;'>"+z+"&raquo;</a>"}else F+="<a href='javascript:void(0)' onclick='place.showDetail(\""+c+'", '+l+", "+N+', "'+f.src_name+'","Page","Iw");'+q+"return false;'>"+z+"&raquo;</a>"}}else F+="<a href='javascript:void(0)' class='title' onclick='place.showDetail(\""+c+'", '+l+", "+N+");return false;'>"+A+"</a>",F+="<a href='javascript:void(0)' onclick='place.showDetail(\""+c+'", '+l+", "+N+");"+q+"return false;'>详情&raquo;</a>"}else F+=A;F+="</p>";var J=[],K="";if(g&&(K='style="display:none;"'),I)J.push("<div class='cater_poi_conTop'"+K+">"),J.push(place.caterPopInner.contentHtml(e,N)),J.push("</div>");else{if(J.push("<div class='iw_poi_conTop'"+K+">"),G){var Q=i&&i.isFromMPC?O:c;J.push("<div class='panoInfoBox' title='"+t+"外景' title='查看全景' >");var Z=h.PANO_URL+"/pr/?qt=poiprv&uid="+Q+"&width=323&height=101&quality=80&fovx=250";J.push("<img class='pano_thumnail_img' width=323 height=101 border='0' alt='"+t+"外景' src='"+Z+"' id='pano_"+c+"'/>"),J.push("<div class='panoInfoBoxTitleBg'></div><a href='javascript:void(0)' class='panoInfoBoxTitleContent' >进入全景&gt;&gt;</a>"),J.push("</div>"),E&&J.push("<a href='javascript:void(0)' title='"+t+"内景' class='panoInfoBoxInner' >"+ei+"内景</a>")}if(!G&&E){J.push("<div class='panoInfoBox' title='"+t+"内景' title='查看内景' >");var Z=E;J.push("<img class='pano_thumnail_img' width=323 height=101 border='0' alt='"+t+"内景' src='"+Z+"' id='pano_"+c+"'/>"),J.push("<div class='panoInfoBoxTitleBg'></div><a href='javascript:void(0)' class='panoInfoBoxTitleContent' >进入全景&gt;&gt;</a>"),J.push("</div>")}if(window.place&&J.push(place.initAlert(e)),L&&f.pic&&f.pic.length>0&&f.pic[0]&&J.push("<div style='float:right;width:70px;height:70px;overflow:hidden;display:inline' title='"+t+"'><img border='0' alt='"+t+"' src='"+f.pic[0]+"'/></div>"),L&&f.src_name&&("biaozhu_data"==f.src_name&&"1"==f.yw_type&&m.length>0&&m[0].minurl||y&&y.test(f.src_name)&&f.detail_info&&f.detail_info.image)){var ei="",ii="",ti=106,ni=104,ai=71,oi=69,si="",ri="",di="ISHOP_INFO_IMG",ci="";if(this.createSearchInfoWnd.iwImgLoading=1,"biaozhu_data"==f.src_name?(ei=m[0].title,ii=m[0].minurl):(ei=t,ti=106,ni=104,ai=71,oi=69,si=" style='border:#bdbdbd solid 1px'",ii=f.detail_info.image,di=f.src_name,ci="Page_Pic",ri=";text-align:center"),/sina|soufun/i.test(ii)&&(ii+="?"),!G&&!E){if(J.push("090300"==e.catId?"<div style='float:right;width:"+ti+"px;height:"+ai+"px;display:none"+ri+"' title='"+ei+"'>":"<div style='float:right;width:"+ti+"px;height:"+ai+"px;display:inline"+ri+"' title='"+ei+"'>"),y&&y.test(f.src_name)){{C.toUpperCase()+"_"}J.push("<a href='javascript:void(0)' onclick='place.showDetail(\""+c+'", '+l+", "+N+', "'+di+'", "'+ci+'","Iw");return false;\'\'>')}else J.push("<a href='javascript:void(0)' onclick='place.showDetail(\""+c+'", '+l+", "+N+', "'+di+'", "'+ci+'","Iw");return false;\'\'>');var li="http://webmap3.map.bdimg.com/maps/services/thumbnails?width="+ni+"&height="+oi+"&align=center,center&src="+encodeURIComponent(ii);J.push("<img tid='iw_poi_img' width='"+ni+"' height='"+oi+"' border='0'"+si+" alt='"+ei+"' src='"+li+"' id='detail_"+c+"'/>"),J.push("</a>"),J.push("</div>")}6==T.browser.ie&&(this.createSearchInfoWnd.iwImgLoadingSum=0,this.createSearchInfoWnd.iwImgLoadingTimer&&clearInterval(this.createSearchInfoWnd.iwImgLoadingTimer),this.createSearchInfoWnd.iwImgLoadingTimer=setInterval(function(){B.createSearchInfoWnd.iwImgLoadingSum>=100&&(clearInterval(B.createSearchInfoWnd.iwImgLoadingTimer),B.createSearchInfoWnd.iwImgLoadingSum=0),B.createSearchInfoWnd.iwImgLoading&&T.G("detail_"+c)&&(T.G("detail_"+c).src=ii,B.createSearchInfoWnd.iwImgLoadingSum++)},100))}var pi=25;if(L&&f&&f.title_link?J.push("<div class='iw_poi_content iw_poi_content_search' style='width:220px'>"):L&&f&&("biaozhu_data"==f.src_name&&m.length>0||y&&y.test(f.src_name)&&f.detail_info&&f.detail_info.image&&"090300"==!e.catId)?J.push("<div class='iw_poi_content iw_poi_content_search' style='width:214px;'>"):(J.push("<div class='iw_poi_content iw_poi_content_search'>"),pi=35),f&&"biaozhu_data"==f.src_name){if(J.push("<div>"),f.detail_info&&f.detail_info.length>0){if(f.detail_info[0].city.length>0){var ui=f.detail_info[0],hi=ui.city[0].replace(/\d+\-/g,"");("北京市"==hi||"重庆市"==hi||"上海市"==hi||"天津市"==hi||"澳门特别行政区"==hi||"香港特别行政区"==hi)&&(ui.city[0]="");var fi=ui.city.join("").replace(/\d+\-/g,"");J.push(fi)}""!=f.detail_info[0].street&&J.push(f.detail_info[0].street),""!=f.detail_info[0].address&&J.push(f.detail_info[0].address)}if(J.push("</div>"),f.detail_info&&f.detail_info.length>0&&f.detail_info[0].tels.length>0)for(var _i=0,wi=f.detail_info[0].tels.length;wi>_i;_i++)2!=f.detail_info[0].tels[_i].type&&J.push("<div>"+f.detail_info[0].tels[_i].no+"</div>");if(""!=f.detail_info[0].website&&J.push("<div><a style='color:#A49FD1' target='_blank' href='"+f.detail_info[0].website+"'>"+T.string.subByte(f.detail_info[0].website,pi,"...")+"</a></div>"),"1"==f.yw_type){if(f.youhui_info.length>0&&(""!=f.youhui_info[0].date||""!=f.youhui_info[0].info||f.youhui_info[0].pics.length>0)){J.push("<div>优惠信息：</div>");var mi="http://map.baidu.com/ishop/detail.html?newmap=1&s="+encodeURIComponent("inf&uid="+c+"&c="+N+"&newmap=1")+"#speresult";J.push("<div><a target='_blank' style='color:#A49FD1' href='"+mi+"'>"+T.string.subByte(mi,pi,"...")+"</a></div>")}(""!=f.detail_info[1].description||f.youhui_info.length>0&&(""!=f.youhui_info[0].info||f.youhui_info[0].date.length>0||f.youhui_info[0].pics.length>0)||m.length>0)&&J.push("<div style='margin-top:3px;'><a href='javascript:void(0)' onclick='place.showDetail(\""+c+'", '+l+", "+N+', "ISHOP_INFO");return false;\'>更多详情&raquo;</a></div>')}}else if(n)if(l==o.POI_TYPE_BUSSTOP||l==o.POI_TYPE_SUBSTOP){if(J.push("<p>车次："),r){for(var gi=[],_i=0,vi=r.length;vi-1>_i;_i++)if(!baidu.array.contains(gi,r[_i].addr)){var bi="s&wd="+r[_i].addr+"&c="+u.cityCode,Si=encodeURIComponent(bi.replace(/&b=\((-?\d+)(\.\d+),(-?\d+)(\.\d+);(-?\d+)(\.\d+),(-?\d+)(\.\d+)\)/gi,"")),yi="?newmap=1&shareurl=1&s="+Si;J.push('<a class="detail blueA" tid="poiDetail_'+_i+'" target="_blank" href="'+yi+'" >'+r[_i].addr+"; </a>"),gi.push(r[_i].addr)}if(!baidu.array.contains(gi,r[_i].addr)){var bi="s&wd="+r[vi-1].addr+"&c="+u.cityCode,Si=encodeURIComponent(bi.replace(/&b=\((-?\d+)(\.\d+),(-?\d+)(\.\d+);(-?\d+)(\.\d+),(-?\d+)(\.\d+)\)/gi,"")),yi="?newmap=1&shareurl=1&s="+Si;J.push('<a class="detail blueA" tid="poiDetail_'+vi+'" href="'+yi+'" >'+r[vi-1].addr+"</a>")}}else n&&J.push(n);J.push("</p>"),R=(l==o.POI_TYPE_BUSSTOP?"途经公交：":"途经地铁：")+n}else J.push('<table cellspacing="0" class="table_addr_tel"><tr tid="iw_poi_addr"><th>地址：&nbsp;</th><td>'),J.push(n+"&nbsp;</td></tr>"),R=n,d&&(J.push('<tr tid="iw_poi_tel"><th>电话：&nbsp;</th><td>'+d+"</td></tr>"),M=d),J.push("</table>");else d&&(J.push('<table cellspacing="0" class="table_addr_tel">'),n&&J.push('<tr tid="iw_poi_addr"><th>地址：&nbsp;</th><td>'+n+"</td></tr>"),J.push('<tr tid="iw_poi_tel"><th>电话：&nbsp;</th><td>'+d+"</td></tr>"),M=d,J.push("</table>"));if(a&&J.push("<p>"+a+"</p>"),window.place&&f&&y.test(f.src_name)&&(J.push(window.place.generatePlaceIwTopInfo({ext:f,uid:c,poiType:l,cityCode:N,catId:k})),d&&(d=d.replace("、","<br />"))),L&&f&&f.title_link){var Ci=["<p style='margin-top:2px'>"];if(f.title_link)for(var _i=0,vi=f.title_link.length;vi>_i;_i++)Ci.push("<a class='ns_link' href='"+f.title_link[_i].link+"' target='_blank' >"+f.title_link[_i].title+"</a>"),_i<f.title_link.length-1&&Ci.push("&nbsp;&nbsp;");J.push(Ci.join("")),J.push("</p>")}J.push("</div>"),w&&J.push("<p>"+w+"</p>"),window.place&&(f&&f.detail_info&&y.test(f.src_name)&&J.push(window.place.generatePlaceIwBottomInfo({ext:f,uid:c,poiType:l,cityCode:N,categoryId:k})),f&&window.place&&y.test(f.src_name)&&J.push(window.place.generateAsyncBookPrice({ext:f,uid:c,poiType:l,cityCode:N})),window.place&&f&&f.detail_info&&f.detail_info.book_info&&"undefined"!=typeof f.detail_info.movie_film_count&&J.push(window.place.generateAsyncBookByMovie({uid:c,poiType:l,category:f.src_name,cityCode:N}))),J.push("<div class='iw_btn_con suspendContainer'></div>"),J.push("<div class='iw_btn_con'>"),"undefined"!=typeof e.ext_type&&1&e.ext_type&&J.push('<span class="inr_iw" onmouseover="this.className=\'inr_iw_on\'" onmouseout="this.className=\'inr_iw\'" onmousedown="this.className=\'inr_iw_down\'" onmouseup="this.className=\'inr_iw_on\'"  title="查看室内地图"></span>'),J.push("</div>"),J.push("</div>")}if(g||c||i.smp){if(g?(J.push('<div id="userSignContent">'+b+"</div>"),J.push('<div id="userSignCtrl" class="userShowCtrl" >')):J.push('<div id="userSignCtrl" class="userShowCtrl" data-nosign="true" >'),J.push('<div class="ctrl">'),e.jiucuofr){e.jiucuofr}else;g&&!v?(J.push('<span class="edit"><b  class="sign_edit" title="修改"></b></span>'),J.push('<span class="delete"><b class="sign_del" title="删除此点"></b></span>')):i.smp&&(J.push('<span class="edit"><b class="smp_edit" title="修改"></b></span>'),J.push('<span class="delete"><b class="smp_del" title="删除此点"></b></span>'));var Ti="";if((s._USERSHARE||!g)&&!i.smp){var Ii="",xi="",ki="shareBtn_u  fuck";g||(Ii="onmouseover=\"T.ac(this,'span_focus')\" onmouseout=\"T.rc(this,'span_focus')\"",xi="分享",ki="shareBtn fuck");{i.x+" "+i.y}Ti='<span class="'+ki+'" '+Ii+' title="将此点在图区上的位置分享给好友"><b></b>'+xi+"</span>",s._USERSHARE&&g&&J.push(Ti)}I&&G&&J.push('<span class="pano-box"><a class="panoBtn" href="javascript:;" title="全景"><b class="pano" title="全景" style="cursor:pointer;"></b></a></span>');var Pi,Ri="";if(s._USERFAV){var Mi=t.replace(/\"/g,"&quot;"),Bi=[];n?Bi.push(l==o.POI_TYPE_BUSSTOP||l==o.POI_TYPE_SUBSTOP?"车次:"+n+"<br/>":"地址:"+n+"<br/>"):b&&Bi.push(b),d&&Bi.push("电话:"+d);var Gi=Bi.join("").replace(/\"/g,"&quot;"),Ei=window.parseFloat(i.x)+"|"+window.parseFloat(i.y),Oi={point:Ei,uid:c,cityCode:N,title:Mi,content:Gi,panoGuid:x},Ni=/'/g;Ni.test(n)&&(n=n.replace(Ni," "),Gi=Gi.replace(Ni," ")),g?(Pi={userSign:g,isfav:v,json:Oi},J.push('<span class="fav" id="JiwFav" data-title=\''+Mi+"' data-cont='"+Gi+'\' title="加入收藏夹"><b></b></span>')):(Pi={json:Oi},J.push('<span class="fav" id="JiwFav" data-title=\''+Mi+"' data-cont='"+Gi+"' uid=\""+c+'" title="加入收藏夹"><b></b></span>'))}!g&&c&&J.push("<span class='send_telf'><b  title=\"免费发送到手机\"></b></span>"),!g&&c&&J.push('<span><a class="sms_jiucuo"  href="http://i.map.baidu.com/api/page/poicorrect/addpoiproblempc?business_trigger=11&poi_uid='+c+'" target="_blank"><b class="jiucuo" title="纠错" style="cursor:pointer;"></b></a></span>'),g||(J.push("<span id='iw_tool_icon' class='box' onmouseover=\"this.className='box box_on';T.g('iw_tool_box').style.top=''\"><b></b>"),J.push('<div class="iw_tool_box" id="iw_tool_box" style="top:-2000px">'),Ri='<span id="JiwFav" class="point"  data-title=\''+Mi+"' data-cont='"+Gi+'\' onmouseover="T.ac(this,\'span_focus\')" onmouseout="T.rc(this,\'span_focus\')" title="将此点的位置标记在地图上"><b></b>标记</span>',J.push(Ri),J.push(Ti),J.push('<span class="sicon08 carIcon" onmouseover="T.ac(this,\'span_focus\')" onmouseout="T.rc(this,\'span_focus\')"  title="发至汽车"><b></b>发至汽车</span>'),J.push("</div></span>")),J.push("</div>"),J.push('<div class="share" id="iw_share_con" style="display:none">'),J.push("</div>"),J.push("</div>")}J.push("<div class='iw_poi_inter' id='iw_poi_inter'>");var ji="../../../images/transparent.gif"/*tpa=http://webmap0.map.bdstatic.com/newmap/static/common/images/transparent.gif*/;J.push("<ul class='nav_tab "+(I?"cater_tab":"")+"'>"),J.push("<li id='nav_tab0' data-tab='0' class='second blueA "+j[1]+"' ><img src='"+ji+"'>到这里去</li>"),J.push("<li id='nav_tab1' data-tab='1' class='first blueA "+j[2]+"' ><img src='"+ji+"'>从这里出发</li>"),J.push("<li id='nav_tab2'  data-tab='2'  class='third blueA "+j[0]+"' ><img src='"+ji+"'>在附近找</li>"),J.push("</ul>"),J.push("<div id='iw_tab0' class='nav_tab_content' style='display:"+U[1]+"'>"),J.push("<form id='iw_s_frm'>"),J.push("<div style='white-space:nowrap;'><span class='lef'>起点</span><span id='iw_ssnSpan' class='iw_txt_wrap'><input id='iw_ssn' type='text' size='22' maxlength='100' autocomplete='off' /><span class='smp_iws_btn' title='常用地点' ></span></span>"),J.push("<input id='iw_ssb_btn' type='submit' value='公交' class='iw_bt' onmouseover='this.className=\"iw_bt_over\"' onmouseout='this.className=\"iw_bt\"' onmousedown='this.className=\"iw_bt_down\"' onmouseup='this.className=\"iw_bt_over\"' />"),J.push("<input id='iw_ssd_btn' type='button' class='iw_bt' value='驾车' onmouseover='this.className=\"iw_bt_over\"' onmouseout='this.className=\"iw_bt\"' onmousedown='this.className=\"iw_bt_down\"' onmouseup='this.className=\"iw_bt_over\"' /></div>"),J.push("</form></div>"),J.push("<div id='iw_tab1' class='nav_tab_content' style='display:"+U[2]+"'>"),J.push("<form id='iw_e_frm'>"),J.push("<div style='white-space:nowrap;'><span class='lef'>终点</span><span id='iw_esnSpan' class='iw_txt_wrap'><input id='iw_esn' type='text' size='22' maxlength='100' autocomplete='off'/><span class='smp_iwe_btn' title='常用地点' ></span></span>"),J.push("<input id='iw_esb_btn' type='submit' value='公交' class='iw_bt' onmouseover='this.className=\"iw_bt_over\"' onmouseout='this.className=\"iw_bt\"' onmousedown='this.className=\"iw_bt_down\"' onmouseup='this.className=\"iw_bt_over\"'/>"),J.push("<input id='iw_esd_btn' type='button' value='驾车' class='iw_bt' onmouseover='this.className=\"iw_bt_over\"' onmouseout='this.className=\"iw_bt\"' onmousedown='this.className=\"iw_bt_down\"' onmouseup='this.className=\"iw_bt_over\"' /></div>"),J.push("</form></div>"),J.push("<div id='iw_tab2' class='nav_tab_content' style='white-space:nowrap;display:"+U[0]+"'>"),J.push("<div class='iw_cate_list'>");var Ui=["酒店","餐馆","银行","医院","公交站"];if(i&&i.isFromMPC)var Li=1;else var Li=0;if(c)for(var _i=0,vi=Ui.length;vi>_i;_i++)J.push(0==_i?this.generateSingleLink(Ui[_i],c,"",N,!0,i.x+", "+i.y,Li):this.generateSingleLink(Ui[_i],c,"",N,!1,i.x+", "+i.y,Li));else for(var _i=0,vi=Ui.length;vi>_i;_i++)J.push(0==_i?this.generateSingleLinkForRange(Ui[_i],i.x+","+i.y,"",N,!0,null,i.statCode||0,Li,g):this.generateSingleLinkForRange(Ui[_i],i.x+","+i.y,"",N,!1,null,i.statCode||0,Li,g));if(J.push("</div>"),J.push("<div class='iw_cate_form'>"),J.push("<form  class='info_form' >"),J.push("<input id='rangekw' type='text' size='19' maxLength='100' autocomplete='off' /> "),J.push("<input tid='iwNSBtn' type='submit' value='搜索' class='iw_bt' onmouseover='this.className=\"iw_bt_over\"' onmouseout='this.className=\"iw_bt\"' onmousedown='this.className=\"iw_bt_down\"' onmouseup='this.className=\"iw_bt_over\"' />"),J.push("</form></div></div>"),J.push("</div>"),J.push("<div id='userSignEdit' style='display:none;'></div>"),window.place&&window.place.result&&place.place_dateType){place.place_dateType.toUpperCase()}var Ai=[0,-26];i.forBusLine&&(Ai[1]=-5),i.isMenu&&(Ai[1]=-30);var Di=this.createInfWindow(F,J.join(""));return Pi&&(Di.favObj=Pi),Di._config.collisions=[[65,245],[233,39],[10,10],[10,10]],Di._ext={uid:c,pt:new BMap.Point(i.x,i.y),name:t,c:N,poiType:l,geoloc:i.geoloc,placesrcname:C},Di._transUid=_,window.place&&(window.place.iw=Di),/餐饮/.test(e.cate)&&addStat("poiinfowin.poi.poiinfowin"),Di},createInfWindow:function(e,i){var t=this,n=345,a=new BMap.InfoWindow(i,{title:e,height:0,width:n,margin:[42,10,20,10]});return a.addEventListener("open",function(){var e=a.overlay.getLabel();e&&e._indoor&&e.hide(),map.infoWindow.closeButton&&!map.infoWindow.closeButton._statBinded&&(map.infoWindow.closeButton._statBinded=!0),t.bindInfoEvents(this)}),a.addEventListener("close",function(){var e=a.overlay.getLabel();e&&e._indoor&&e.show()}),a},bindInfoEvents:function(){var i=e("common:widget/ui/setMyPlace/SetMyPlaceMgr.js"),t=this,n=this.content,a=this.opts||{},r=n.title,d=n.addr,l=(n.desc,n.tel&&n.tel.replace(/(,|;)/gi,", "),n.uid||""),h=n.poiType||o.POI_TYPE_NORMAL,f=(n.hasDetail,n.ext),_=(n.transUid,n.fav||0),w=(n.content,n.bizType,a.tabIndex,a.cityCode||u.cityCode),m="",g="",v="",b=a.x+" "+a.y,S=parseFloat(a.x)+"|"+parseFloat(a.y),y=n.userSign||0,C=n.origin_id&&n.origin_id.overview_guid?n.origin_id.overview_guid:"",I=n.pano||0,x=n.indoor_pano||0,k="undefined"==typeof n.pano_index?-1:n.pano_index,P=n.wd||"",R=n.street_id||"";(I||!I&&x)&&(baidu("#userSignCtrl .panoBtn").on("click",function(i){var t=a.isFromMPC?R:l;e.async("common:widget/ui/PanoInfoUtil/PanoInfoUtil.js",function(e){e.callPano({uid:t,index:k,addr:d,from:"infownd|poi",wd:P})}),addStat("http://webmap0.map.bdstatic.com/newmap/static/common/widget/ui/searchInfoWindow/poiinfoWin.poi.pano","click",{da_trd:"cater"}),i.preventDefault()}),baidu(".iw_poi_conTop .panoInfoBox").on("click",function(e){var i="street";addStat(STAT_CODE.STAT_PANORAMA,{catalog:"poi",from:"infownd",item:i});var t=a.isFromMPC?R:l;!I&&x&&(i="inter",t=l),p.showPano({research:!0,panoType:i,searchParam:{uid:t,index:k,from:"infownd|poi",wd:P}}),e.preventDefault(),f&&window.place.placeHookPano(f,"iw")}),baidu(".iw_poi_conTop a.panoInfoBoxInner").on("click",function(e){addStat(STAT_CODE.STAT_PANORAMA,{catalog:"poi",from:"infownd",item:"inter"});var i=a.isFromMPC?R:l;p.showPano({research:!0,panoType:"inter",searchParam:{uid:i,index:k,from:"infownd|poi",wd:P}}),e.preventDefault(),f&&window.place.placeHookPano(f,"iw")}),baidu(".iw_poi_conTop  .pano_thumnail_img").on("error",function(){Pano.PanoEntranceUtil&&Pano.PanoEntranceUtil.thumbnailNotFound(this,323,101)})),baidu(".userShowCtrl").on("mouseout",function(e){var i=baidu(this).data("nosign");i&&t.iwMenuMouseOut(this,e)}),baidu(".userShowCtrl").on("mousemove",function(){var e=baidu(this).data("nosign");e&&(t.menuAim({x:event.clientX,y:event.clientY},T.g("iw_tool_icon"),T.g("iw_tool_box"),!1,event.timeStamp||(new Date).getTime(),function(){T.g("iw_tool_icon").className="box",T.g("iw_tool_box").style.top="-2000px"})||(T.g("iw_tool_icon").className="box",T.g("iw_tool_box").style.top="-2000px"))}),y&&!_&&(baidu(".userShowCtrl .sign_edit").on("click",function(){MapSignInst.editInfoWnd({type:"button"})}),baidu(".userShowCtrl .sign_del").on("click",function(){MapSignInst.deletePoint()})),a.smp&&(baidu(".userShowCtrl .smp_edit").on("click",function(e){i.editMyPlace(e,a.smp)}),baidu(".userShowCtrl .smp_del").on("click",function(e){i.rmvMyplace(e,a.smp,r)})),baidu("http://webmap0.map.bdstatic.com/newmap/static/common/widget/ui/searchInfoWindow/.userShowCtrl .fuck").on("click",function(){addStat("poiinfowin.share.bubbleshare"),s.goShare({uid:l,cityCode:w,title:m,addr:g,tel:v,point:b})}),baidu("http://webmap0.map.bdstatic.com/newmap/static/common/widget/ui/searchInfoWindow/.userShowCtrl .fav").on("click",function(){addStat("poiinfowin.share.bubbleshare");var e=baidu(this).data("cont"),i=baidu(this).data("title");SyncMgr.goFav({point:S,uid:l,cityCode:w,title:i,content:e,panoGuid:C})}),baidu(".iw_tool_box .point").on("click",function(){addStat("http://webmap0.map.bdstatic.com/newmap/static/common/widget/ui/searchInfoWindow/poiinfowin.toolbar.mark");var e=baidu(this).data("cont"),i=baidu(this).data("title");s("searchPoiSign",{point:S,uid:l,cityCode:w,title:i,content:e,panoGuid:C})}),baidu("span.send_telf").on("click",function(e){addStat("poiinfowin.toolbar.poibubbletomb"),c.ready(this,l,h,w,"iw",this.hasDetailPage),e.preventDefault()}),baidu("a.sms_jiucuo").on("click",function(){n.jiucuofr||"";addStat("poiinfowin.revision.revisionbtn")}),baidu("span.carIcon").on("click",function(e){addStat("poiinfowin.toolbar.poibubbletocar"),c.ready(this,l,h,w,"iw"),e.preventDefault()}),baidu("ul.nav_tab").delegate("li","click",function(){var e=t.opts.isFromMPC?1:0,i=parseInt(baidu(this).data("tab")),n=e?"rangekw":"";t.switchInfoWndTab(i,n,!1,!1,!0)}),baidu("span.smp_iws_btn").on("click",function(e){i.openList("iw_ssn",e)}),baidu("span.smp_iwe_btn").on("click",function(e){i.openList("iw_esn",e)}),baidu(".iw_cate_form .info_form").on("submit",function(e){var i="rangekw",o=null,s=a.cityCode||u.cityCode,r=null,d=a.x,c=a.y,p=a.isFromMPC?!0:!1,h=p?1:0,f=n.userSign;l?t.roundSearchByInput(i,l,o,s,r,d,c,p):t.rangeSearchByInput(i,d,c,null,s,null,a.statCode||0,h,f),e.preventDefault()}),baidu("div.iw_cate_list").delegate("a","click",function(e){var i=(Boolean(baidu(this).data("fst")),""),n=a.cityCode||u.cityCode,o=a.isFromMPC?1:0,s=s?s:0,r=a.statCode||0;l?t.roundSearchByLink(this,l,i,n,0,a.x,a.y,o):t.rangeSearchByLink(this,a.x,a.y,i,n,null,r,o,s),e.preventDefault()})},goCorrect:function(){},openSearchInfoWndPOI:function(e,i,t){if(window.GRControll){var n=window.GRControll.ifChangeMap();0!=n.f&&window.GRControll.setGRequestFlg(2e3)}this.openSearchInfoWnd(e,i,t)},openSearchInfoWnd:function(i,t,n,o){if(!window.isPrint){var s=this,r=i._ext||{};if(r&&r.uid){var d=map.getBounds(),c=Math.min(d.minX,d.maxX),l=Math.max(d.minX,d.maxX),p=Math.min(d.minY,d.maxY),u=Math.max(d.minY,d.maxY),h="("+c+","+p+";"+l+","+u+")",f=(window.currentComponent&&window.currentComponent._className,window.currentComponent&&window.currentComponent.curKw||""),_={uid:r.uid,wd:f,b:h};r.placesrcname&&(_.place=1,_.category=r.placesrcname),addStat(STAT_CODE.STAT_USER_BEHAVIOUR_MINMING,_)}if(!n)var n={};if(i){var w=0;if(r&&r.detail_info){var m=r.detail_info;m.premium2&&"[object Array]"==Object.prototype.toString.call(m.premium2)&&m.premium2.length&&(w=1)}i.addEventListener("open",function(){var t=this.favObj;!function(){if(t){var e,i;if(SyncMgr&&SyncMgr.favCloudData&&SyncMgr.favCloudData.length>0){if(e=isNaN(n.favId)||-1==n.favId?SyncMgr.checkInFav({from:"poi",json:t.json}):n.favId,-1==e)return;i=T.g("JiwFav"),i.className="has_fav",i.title="取消收藏"}else setTimeout(arguments.callee,10)}}(),s.createInfoWndSugg(this,r);var o="",d="gr"==n.from||"poisearch"==n.from||"searchinview"==n.from;s.rangeSearchCenterMarker&&d&&a.getOverlayPoint(s.rangeSearchCenterMarker)!=a.getOverlayPoint(i)&&(s.switchInfoWndTab(0,"iw_ssn"),window.setTimeout(function(){o=s.rangeSearchCenterMarker.getTitle(),T.G("iw_ssn").value=o;var i=e("common:widget/ui/searchBox/searchBox.js");i.notShowSuggest.run()},100)),s.iwExt=r,s.iwOpts=n,T.on(T.G("iw_s_frm"),"submit",function(e){s.iwNavSubmit(e)}),T.on(T.G("iw_e_frm"),"submit",function(e){s.iwNavSubmit(e)}),T.on(T.G("iw_ssd_btn"),"click",function(e){s.iwNavSubmit(e)}),T.on(T.G("iw_esd_btn"),"click",function(e){s.iwNavSubmit(e)}),i.removeEventListener("open",arguments.callee)}),i.addEventListener("close",function(){i.iw_sugg_0&&(i.iw_sugg_0.disposeSug(),i.iw_sugg_0=null),i.iw_sugg_1&&(i.iw_sugg_1.disposeSug(),i.iw_sugg_1=null),i.removeEventListener("close",arguments.callee)}),n&&n.notMove&&i.disableAutoPan(),n&&n.pano&&n.panoPoint?e.async("common:widget/ui/PanoEntranceUtil/PanoEntranceUtil.js",function(e){e.addPanoEntranceInInfoWindow(i,n.panoPoint,function(e){e&&e.length>0&&(i=e[0],t&&t.openInfoWindow(i,n))})}):t?t.openInfoWindow(i,n):map.openInfoWindow(i,o,n)}}},createInfoWndSugg:function(i,t){e.async("common:widget/ui/MapSuggest/MapSuggest.js",function(e){i.iw_sugg_0=new e({inputid:"iw_ssn",offset:[1,0],closeB:1,qType:2,cityid:t.c},function(e){t.wd2=e}),i.iw_sugg_1=new e({inputid:"iw_esn",offset:[1,0],closeB:1,qType:2,cityid:t.c},function(e){t.wd2=e})})},switchInfoWndTab:function(e,i,t,n,a){var o=[T.G("nav_tab0"),T.G("nav_tab1"),T.G("nav_tab2")],s=[T.G("iw_tab0"),T.G("iw_tab1"),T.G("iw_tab2")];if(!o[e]||!o[e].className.match(/hover/)||t){if(T.ac(o[e],"hover"),a)switch(e){case 0:addStat("poiinfowin.tabexchange.goinghere");break;case 1:addStat("poiinfowin.tabexchange.fromhere");break;case 2:addStat("poiinfowin.tabexchange.searchnb")}s[e]&&(s[e].style.display="block");for(var r=0,d=o.length;d>r;r++)r!=e&&(T.rc(o[r],"hover"),s[r].style.display="none");if(i&&T.G(i))try{T.G(i).focus()}catch(c){setTimeout(function(){try{T.G(i).focus()}catch(e){}},100)}}},generateSingleLink:function(e,i,t,n,a,o,s){return a?"<a href='javascript:void(0)' tid='iwNSLink' data-fst='"+a+"'  class='first'>"+e+"</a>":"<a href='javascript:void(0)' data-fst='"+a+"' >"+e+"</a>"},generateSingleLinkForRange:function(e,i,t,n,a,o,s,r,d){d=d?d:0;return a?"<a href='javascript:void(0)' class='first' >"+e+"</a>":"<a href='javascript:void(0)' >"+e+"</a>"},roundSearchByLink:function(e,i,t,n,a,o,s,r){var d=r?1:0;if("a"==e.nodeName.toLowerCase()){var c=e.innerHTML;if(c){var l=a||0;switch(this.roundSearchByValue(c,i,t,n,l,o,s,d),e.innerHTML){case"银行":addStat("http://webmap0.map.bdstatic.com/newmap/static/common/widget/ui/searchInfoWindow/poiinfowin.nbsearch.bank");break;case"酒店":addStat("poiinfowin.nbsearch.hotel");break;case"医院":addStat("poiinfowin.nbsearch.hospital");break;case"餐馆":addStat("poiinfowin.nbsearch.restaurant");break;case"公交站":addStat("poiinfowin.nbsearch.busstation");break;default:addStat("poiinfowin.nbsearch.userinput")}}}},roundSearchByInput:function(e,i,t,n,o,s,r,d){var c=d?1:0;if(T.G(e)){if(!T.G(e).value)return T.G(e).focus(),!1;var l=o||1;this.roundSearchByValue(a.filtQuery(T.G(e).value),i,t,n,l,s,r,c),addStat("poiinfowin.rangesearch.userinput")}},roundSearchByValue:function(e,i,t,n,a,o,s,r,d){var c=1e3;if(e){if(null!==r)var l=1e3;else var l=window.GRControll?window.GRControll.GRCircleRadius:c;t&&T.G(t)&&(l=T.G(t).value);var p={r:l,c:n,wd:encodeURIComponent(e),nbtp:a,nb_x:o,nb_y:s};if(r)p.spotclick=1;else for(var u in d)d.hasOwnProperty(u)&&(p[u]=encodeURIComponent(d[u]));this.roundSearch(i,p)}},roundSearch:function(e,i){var t="",i=i||{};i=statParamInterceptor(i),i.query&&(i.query=encodeURIComponent(i.query));for(var a in i)"undefined"!=typeof i[a]&&(t=t+"&"+a+"="+i[a]);var o="nb"+t+"&uid="+e,s=16;if(window.GRControll&&(window.GRControll.GRCircleRadius=i.r,window.GRControll.isGRCircleShow=!0,window.GRControll.setGRequestFlg(1500),window.GRControll.GRCircleRadius>1500&&(s=15),window.GRControll.GRCircleRadius>2500&&(s=14)),map.centerAndZoom(new BMap.Point(i.nb_x,i.nb_y),s),o.indexOf("b=")<0){var r=map.getBounds(),d=Math.min(r.minX,r.maxX),c=Math.max(r.minX,r.maxX),l=Math.min(r.minY,r.maxY),p=Math.max(r.minY,r.maxY);o+="&b=("+d+","+l+";"+c+","+p+")"}if(o.indexOf("l=")<0){var r=map.getBounds();o+="&l="+map.zoomLevel}window.GRControll&&(window.GRControll.GRCircleRadius&&(o+="&gr_radius="+window.GRControll.GRCircleRadius),window.GRControll.openedMarker=null),n.go(o+"&from=webmap",{cinfo:{oc:i.c}})},rangeSearchByInput:function(e,i,t,n,o,s,r,d,c){var l=d?1:0;if(T.G(e))if(T.G(e).value){var p=s||1;addStat("poiinfowin.rangesearch.userinput"),this.rangeSearchByValue(a.filtQuery(T.G(e).value),i,t,n,o,p,r,l,null,c)}else T.G(e).focus()},rangeSearchByLink:function(e,i,t,n,a,o,s,r,d){var c=r?1:0;if("a"==e.nodeName.toLowerCase()){var l=e.innerHTML;if(l){var p=o||0;switch(e.innerHTML){case"银行":addStat("http://webmap0.map.bdstatic.com/newmap/static/common/widget/ui/searchInfoWindow/poiinfowin.rangesearch.bank");break;case"酒店":addStat("poiinfowin.rangesearch.hotel");break;case"医院":addStat("poiinfowin.rangesearch.hospital");break;case"餐馆":addStat("poiinfowin.rangesearch.restaurant");break;case"公交站":addStat("poiinfowin.rangesearch.busstation");break;default:addStat("poiinfowin.rangesearch.userinput")}this.rangeSearchByValue(l,i,t,n,a,p,s,c,null,d)}}},rangeSearchByValue:function(e,i,t,n,a,o,s,r,d,c){if(a=u.cityCode,e){if(null!==r)var l=1e3;else var l=window.GRControll.GRCircleRadius;n&&T.G(n)&&(l=T.G(n).value),i=1*i,t=1*t,l=1*l;var p=i-l,h=t-l,f=i+l,_=t+l,w="("+p+","+h+";"+f+","+_+")",m={ar:w,wd:encodeURIComponent(e),c:a,bdtp:o,nb_x:i,nb_y:t,userSign:c};if(r)m.spotclick=1;else for(var g in d)d.hasOwnProperty(g)&&(m[g]=encodeURIComponent(d[g]));this.rangeSearch(m,new BMap.Point(i,t),l)}},rangeSearch:function(e,i,t){if(e){var o="";for(var r in e)"undefined"!=typeof e[r]&&(o=o+"&"+r+"="+e[r]);var d=16;window.GRControll&&(window.GRControll.GRCircleRadius=t,window.GRControll.isGRCircleShow=!0,window.GRControll.setGRequestFlg(1500),window.GRControll.GRCircleRadius>1500&&(d=15),window.GRControll.GRCircleRadius>2500&&(d=14)),map.centerAndZoom(i,d);var c="nb"+o;if(c.indexOf("b=")<0){var l=map.getBounds();c+="&b=("+l.minX+","+l.minY+";"+l.maxX+","+l.maxY+")"}if(c.indexOf("l=")<0){var l=map.getBounds();c+="&l="+map.zoomLevel}var p="中心点";if(e.userSign){for(var u,h=s.mapSign.pointInfo.list,r=0;u=h[r];r++)if(u.point==i.lng+"|"+i.lat){p=u.title;break}}else if(this.rangeSearchCenterMarker)p=this.rangeSearchCenterMarker.getTitle();else for(var u,f=map.getOverlays(),r=0;u=f[r];r++){var _=a.getOverlayPoint(u);if(_&&_.lat==i.lat&&_.lng==i.lng){p=u.getTitle();break}}p||(p="中心点");var w=this.getCenterPoiNameCbk._uid?this.getCenterPoiNameCbk._uid:"";w&&(c+="&uid="+w),window.GRControll&&window.GRControll.GRCircleRadius&&(c+="&gr_radius="+window.GRControll.GRCircleRadius),n.go(c+"&r="+t+"&from=webmap",{cinfo:{searchByContextMenu:!0,centerPoint:i,ctrPoiName:p,radius:t,oc:e.c,uid:w}})
}},getCenterPoiNameCbk:function(e){var i=this,t=map.getInfoWindow();if(t){var n=e.content;if(n&&n.address){var a=n.address;n.surround_poi&&n.surround_poi[0]&&(a=n.surround_poi[0].addr,this.getCenterPoiNameCbk._uid=n.surround_poi[0].uid);var o=t.getPoint?t.getPoint():t.GetPosition(),s=this.rangeSearchCenterMarker.getPoint?this.rangeSearchCenterMarker.getPoint():this.rangeSearchCenterMarker.GetPosition();if(o==s){var r="<p class='iw_poi_title' title='"+a+"'>"+a+"</p>";t.setTitle(r),this.rangeSearchCenterMarker.setTitle(a)}}}else window.setTimeout(function(){i.getCenterPoiNameCbk(e)},50)},createRangeInfoWnd:function(e){if(e){var i=this;return r.getGEORevertAddress(e,function(e){i.getCenterPoiNameCbk(e)}),this.createSearchInfoWnd({title:"未知地点",poiType:0},{x:e.lng,y:e.lat,statCode:STAT_CODE.STAT_CM_ROUND,tabIndex:0})}},exitRangeSearch:function(){this.rangeSearchCenterMarker&&(this.rangeSearchCenterMarker.remove(),this.rangeSearchCenterMarker=null)},iwNavSubmit:function(i){i=window.event||i;var t="",s="",r="sn",c="en",l="sc",p="ec",h="",f="",_={},w={},m=i.target||i.srcElement,g="",v=this.iwExt,b=this.iwOpts,S=v.c||u.cityCode,y="",C="",I="dep",x=d.getBusExpTime(),k=5,P=0;switch(m.id){case"iw_s_pano_frm":t="iw_pano_ssn",s="bt",r="en",c="sn",l="ec",p="sc",h="BusSearchEnd",f="BusSearchSta",P=0,y="0",g="end";break;case"iw_ssd_pano_btn":t="iw_pano_ssn",s="nav",h="DriveSearchEnd",f="DriveSearchSta",r="en",c="sn",l="ec",p="sc",P=0,C="0",g="end";break;case"iw_e_pano_frm":t="iw_pano_esn",s="bt",h="BusSearchSta",f="BusSearchEnd",P=1,y=1,g="start";break;case"iw_esd_pano_btn":t="iw_pano_esn",s="nav",h="DriveSearchSta",f="DriveSearchEnd",P=1,C=1,g="start";break;case"iw_s_frm":t="iw_ssn",s="bt",r="en",c="sn",l="ec",p="sc",h="BusSearchEnd",f="BusSearchSta",P=0,y="0",g="end";break;case"iw_e_frm":t="iw_esn",s="bt",h="BusSearchSta",f="BusSearchEnd",P=1,y=1,g="start";break;case"iw_ssd_btn":t="iw_ssn",s="nav",h="DriveSearchEnd",f="DriveSearchSta",r="en",c="sn",l="ec",p="sc",P=0,C="0",g="end";break;case"iw_esd_btn":t="iw_esn",s="nav",h="DriveSearchSta",f="DriveSearchEnd",P=1,C=1,g="start"}var R=T.g(t),M=T.string.trim(R.value),B=e("common:widget/ui/searchBox/searchBox.js"),G=e("common:widget/ui/setMyPlace/SetMyPlaceMgr.js"),E=B.inputInfo[t];if(this.rangeSearchCenterMarker&&M==this.rangeSearchCenterMarker.getTitle()){var O=a.getOverlayPoint(this.rangeSearchCenterMarker);E.point=O.lng+","+O.lat,E.note=M,E.ccode=S}var N=E&&E.point&&E.note==M;if(R&&G.helper.isEmpty(M))return R.focus(),void(i.returnValue=!1);if("start"==g?"bt"==s?addStat("poiinfowin.tabexchange.fromhere",null,{da_attr:"bus"}):"nav"==s&&addStat("poiinfowin.tabexchange.fromhere",null,{da_attr:"driving"}):"end"==g&&("bt"==s?addStat("poiinfowin.tabexchange.goinghere",null,{da_attr:"bus"}):"nav"==s&&addStat("poiinfowin.tabexchange.goinghere",null,{da_attr:"driving"})),N){var j=v.name,U=E.note,L=encodeURIComponent(j),A=encodeURIComponent(U),D=v.pt.lng+","+v.pt.lat,W=E.point,F=v.c,$=E.ccode;_={c:S,pn:0,rn:5},_[r]="1$$$$"+D+"$$"+L+"$$$$$$",_[c]="1$$$$"+W+"$$"+A+"$$$$$$",_[l]=F,_[p]=$,B.inputInfo[h]={note:j,ccode:F,point:D},B.inputInfo[f]={note:U,ccode:$,point:W}}else{s="bt"==s?"bse":"nse";var Y="pcmappg.routesrach.as"+g,q=v.pt.lng+","+v.pt.lat,z=v.name||"",H=v.uid||"",X=v.wd2?1:0,V=v.wd2||"",J=M,K=0,Q=v.poiType==o.POI_TYPE_BUSSTOP||v.poiType==o.POI_TYPE_SUBSTOP?0:1;_={c:S,da_src:Y,t:K,poiType:v.poiType,ptx:v.pt.lng,pty:v.pt.lat,sug:X,wd:encodeURIComponent(J),wd2:encodeURIComponent(V),name:encodeURIComponent(z),isSingle:"true",nsetp:C,bsetp:y},_=statParamInterceptor(_),_.query&&(_.query=encodeURIComponent(_.query)),_[r]=Q+"$$"+H+"$$"+q+"$$"+encodeURIComponent(z)+"$$$$$$","bse"==s&&(_.exptype=I,_.exptime=x,_.version=k),w={cinfo:{q:s+"&"+a.jsonToQuery(_),c:S,t:P,isSingle:!0,kwn:{name:z,uid:H,pt:v.pt,poiType:v.poiType}},dom:T.g("MapInfo")};var Z="iw_ssn"==t?h:f;B.inputInfo[Z]={note:z,ccode:S,point:q}}b&&b.isFromMPC&&(_.spotclick=1),window.GRControll&&window.GRControll.isGRequest&&(_.gr=5),1==v.geoloc&&(_.geoloc=1),("nav"==s||"nse"==s)&&(_.time_index=window.navTimeCache?window.navTimeCache.timeIndex+"":-1,_.day=window.navTimeCache?window.navTimeCache.day:-1),n.go(s+"&"+a.jsonToQuery(_),w),baidu.event.preventDefault(i)},menuAim:function(){var e,i=0,t=null;return function(n,a,o,s,r,d){var c,l,p,u;if(100>r-i)return!0;500>r-i&&t?(c=t.mainMenuPosition,l=t.subMenuPosition,p=t.mainMenuStyle,u=t.subMenuStyle):(t={},c=t.mainMenuPosition=T.dom.getPosition(a),l=t.subMenuPosition=T.dom.getPosition(o),p=t.mainMenuStyle={width:parseInt(T.dom.getComputedStyle(a,"width")||a.currentStyle.width),height:parseInt(T.dom.getComputedStyle(a,"height")||a.currentStyle.height)},u=t.subMenuStyle={width:parseInt(T.dom.getComputedStyle(o,"width")||o.currentStyle.width),height:parseInt(T.dom.getComputedStyle(o,"height")||o.currentStyle.height)});var h,f,_,w=function(){e=setTimeout(function(){d&&d()},500)};if(i=r,clearTimeout(e),l.left<=0||l.top<=0)return t=null,!1;if(s);else{if(n.y>=l.top)return!0;if(n.x<c.left)h=n.x-l.left,f=l.top-n.y,_=p.height/(c.left-l.left),w();else{if(!(n>c.left+p.width))return!0;h=l.left+u.width-n.x,f=l.top-n.y,_=p.height/(l.left+u.width-l.left-u.width),w()}}var m=_>=f/h;return m||clearTimeout(e),m}}(),iwMenuMouseOut:function(e,i){var t=T.g("iw_tool_box");i.relatedTarget=i.relatedTarget||i.toElement,i.target=i.target||i.fromElement,(i.relatedTarget!==e&&!baidu.dom.contains(e,i.relatedTarget)||(t===i.target||baidu.dom.contains(t,i.target))&&!baidu.dom.contains(t,i.relatedTarget))&&(T.g("iw_tool_icon").className="box",T.g("iw_tool_box").style.top="-2000px")}};t.exports=f});