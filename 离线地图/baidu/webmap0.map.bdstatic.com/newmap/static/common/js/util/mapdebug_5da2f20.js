window.mapDebugObjWxp={config:{imgUrl:"http://map.baidu.com/fwmap/upload/r/map/fwmap/debug/img/",show:{all:{where_what:"where what解析结果",what_ft_terms:"what的粘接粒度切词结果",what_rq_terms:"what的重查粒度切词结果",granularity_requery:"是否发生了粒度重查",syn_query:"同义query",syn_frag:"片段同义",syn_terms:"同义terms",prophet:"query分类",bound_expansion_requery:"发生范围扩展重查的次数",omit_requery:"发生省略重查的次数"},poi:{obj_id:"obj id",uid:"uid",weight:"总权值",txt_weight:"基础文本权值",new_weight:"阿拉丁权值",geo_adjust_factor:"geo调权因子",credit_adjust_factor:"可信度调权因子",road_adjust_factor:"道路类距离调权因子",query_type_adjust_factor:"query分类调权因子",dis_adjust_factor:"周边检索距离调权因子",catalog:"数据分类",src:"数据来源",hit_fields:"命中字段",hit_synterm:"是否被term同义召回"}},control:[{ename:"db_if_cache",cname:"缓存",value:1},{ename:"db_where_what",cname:"where what解析",value:1},{ename:"db_credit_ctrl",cname:"数据可信度控制(无结果才查低可信度)",value:1},{ename:"db_where_exp_requery",cname:"where范围扩展重查",value:0},{ename:"db_omit_requery",cname:"无结果规则省略重查",value:1},{ename:"db_filter",cname:"结果屏蔽",value:1},{ename:"db_manual_res",cname:"人工干预结果",value:1}],allControl:{control:0,poiShow:0}},getConfigStr:function(){for(var e=this,o="",n=0;n<e.config.control.length;n++){var t=e.config.control[n];o+="&"+t.ename+"="+t.value}if(T("#db_uid")[0]){var i=T("#db_uid")[0].value;i&&(o+="&db_info="+i)}return o},init:function(debug_info){function openPop(){return openPop._open?(o.pop&&(o.pop.close(),delete o.pop),void(openPop._open=!1)):(o.pop=new Popup({title:"debug控制面板",content:createPopHtml(),width:305,close:function(){openPop._open=!1,delete o.pop}}),o.pop.addConnectDom(but),o.pop.render(),bind(),o.pop.getDom()._anchor=1,o.pop.getDom()._offset={x:8,y:34},o.pop.getDom().style.right="115px",o.pop.getDom().style.top="25px",o.pop.content.style.paddingLeft="10px",openPop._open=!0,!1)}function openPop1(){if(openPop1._open)return o.pop1&&o.pop1.close(),void(openPop1._open=!1);o.pop1=new Popup({title:"query debug信息",content:createPopHtml1(),width:300,height:0,close:function(){openPop1._open=!1,T.un(window,"resize",mapDebugObjWxp.resizeFun),delete o.pop1}}),o.pop1.addConnectDom(but1),o.pop1.render(),o.pop1.setHeight(),bind1(),o.pop1.getDom()._anchor=1,o.pop1.getDom()._offset={x:8,y:34},o.pop1.getDom().style.right="28px",o.pop1.getDom().style.top="25px";var e=getClientSize();return o.pop1.content.style.maxHeight=e.height-100+"px",o.pop1.content.style.overflow="auto",o.pop1.content.style.paddingLeft="10px",openPop1._open=!0,mapDebugObjWxp.resizeFun=function(){try{openPop1._open&&o.pop1.close()}catch(e){}},T.on(window,"resize",mapDebugObjWxp.resizeFun),!1}function createPopHtml(){var e='<div style="padding:10px 10px 10px 0;word-wrap:break-word;">';if(o.config.control.length){var n=o.config.allControl.control?"checked":"";e+='<b>策略控制开关：</b><label style="cursor:pointer" for="_debug_control___all"><input type="checkbox" style="cursor:pointer" '+n+' id="_debug_control___all">全选/取消</label>',e+='<p style="overflow:hidden;padding-top:10px;-zoom:1">';for(var t=0;t<o.config.control.length;t++){var i=o.config.control[t],r="";i.value&&(r="checked"),e+='<label for="_debug_'+i.ename+"___"+t+'" style="float:left;white-space:nowrap;display:inline;line-height:25px;cursor:pointer;"><input type="checkbox" ctrltype="control" id="_debug_'+i.ename+"___"+t+'" '+r+' style="cursor:pointer"/>'+i.cname+"</label>"}e+="</p>",o.config.poiControl.length&&(e+='<hr style="margin-right:10px;"/>')}if(o.config.poiControl.length){var p=o.config.allControl.poiShow?"checked":"";e+='<b>PoiDebug信息显示控制：</b><label style="cursor:pointer" for="_debug_poiShow___all"><input type="checkbox" style="cursor:pointer" '+p+' id="_debug_poiShow___all">全选/取消</label>',e+='<p style="overflow:hidden;padding-top:10px;-zoom:1">';for(var l=0;l<o.config.poiControl.length;l++){var a=o.config.poiControl[l],u=o.config.show.poi[a.ename]?o.config.show.poi[a.ename]:a.ename,r="";a.value&&(r="checked"),e+='<label for="_debug_'+a.ename+"___"+l+'" style="float:left;white-space:nowrap;display:inline;line-height:25px;cursor:pointer;"><input type="checkbox" ctrltype="poiControl" id="_debug_'+a.ename+"___"+l+'" '+r+' style="cursor:pointer"/>'+u+"</label>"}e+="</p>"}return e+="</div>"}function createPopHtml1(){var e='<div style="padding:10px 10px 10px 0;word-wrap:break-word;">';return o.debug_info&&(e+="<b>检索属性：</b>",e+='<div style="line-height:20px;overflow:auto;-zoom:1" id="map-debug-poi-desc">',e+=o.stringify(o.debug_info),window.mapDebugObjWxp.stringifyIndex=0,e+="</div>"),e+="</div>"}function bind(){function e(){var e=this,n=e.id.substring(e.id.indexOf("___")+3),t=e.id.substring(0,e.id.indexOf("___")),i=e.getAttribute("ctrltype"),r=e.checked?1:0,p=r?"block":"none";if("_debug_"+o.config[i][n].ename==t&&(o.config[i][n].value=r),"poiControl"==i)for(var l=0;T.G(t+"_poi"+l);)T.G(t+"_poi"+l).style.display=p,l++}function n(){for(var e=this,n=e.checked?1:0,t=0;t<o.config.control.length;t++)o.config.control[t].value=n,T.G("_debug_"+o.config.control[t].ename+"___"+t)&&(T.G("_debug_"+o.config.control[t].ename+"___"+t).checked=n);o.config.allControl.control=n}function t(){for(var e=this,n=e.checked?1:0,t=n?"block":"none",i=0;i<o.config.poiControl.length;i++){var r=o.config.poiControl[i];r.value=n,T.G("_debug_"+r.ename+"___"+i)&&(T.G("_debug_"+r.ename+"___"+i).checked=n);for(var p=0;T.G("_debug_"+r.ename+"_poi"+p);)T.G("_debug_"+r.ename+"_poi"+p).style.display=t,p++}o.config.allControl.poiShow=n}for(var i=["control","poiControl"],r=0;r<i.length;r++)for(var p=0;p<o.config[i[r]].length;p++){var l=o.config[i[r]][p];T.G("_debug_"+l.ename+"___"+p)&&(T.on(T.G("_debug_"+l.ename+"___"+p),"click",e),T.on(T.G("_debug_"+l.ename+"___"+p),"focus",function(){this.blur()}))}T.on(T.G("_debug_control___all"),"click",n),T.on(T.G("_debug_control___all"),"focus",function(){this.blur()}),T.on(T.G("_debug_poiShow___all"),"click",t),T.on(T.G("_debug_poiShow___all"),"focus",function(){this.blur()})}function bind1(){function e(e,o){return e.currentStyle?e.currentStyle[o]:window.getComputedStyle?(o=o.replace(/([A-Z])/g,"-$1"),o=o.toLowerCase(),window.getComputedStyle(e,"").getPropertyValue(o)):null}for(var n=o.pop1.content.getElementsByTagName("div"),t=getClientSize(),i=[],r=0;r<n.length;r++)n[r].getAttribute("hasSubNode")&&i.push(n[r]);for(var r=0;r<i.length;r++)i[r].onclick=function(){try{var n=this.nextSibling,i=this.getElementsByTagName("img")[0];if("none"==e(n,"display")?(i.src=o.config.imgUrl+"open.png",n.style.display="block"):(i.src=o.config.imgUrl+"close.png",n.style.display="none"),T.browser.ie&&T.browser.ie<7){var r=T.G("map-debug-poi-desc").offsetHeight;o.pop1.content.style.height=r+100>t.height?t.height-100+"px":"auto"}}catch(p){}}}if(debug_info){var o=this;if(o.debug_info=debug_info,!window.haveCreateDebugPanel){if(window.haveCreateDebugPanel=!0,o.config.poiControl=[],o.config._poiControl={},o.debug_info.results){var res_len=o.debug_info.results.length;if(o.debug_info.results[res_len-1])for(var i in o.debug_info.results[res_len-1])o.config.poiControl.push({ename:i,value:1}),o.config._poiControl[i]=o.config.poiControl.length-1}var dom=document.createElement("div");with(dom.style)position="absolute",top="7px",right="213px",width="205px",zIndex="10000",backgroundColor="#fff";var but=document.createElement("div");but.style.display="inline",but.style.marginRight="10px",but.innerHTML='<a href="javascript:void(0)">debug控制面板</a>';var but1=document.createElement("div");but1.style.display="inline",but1.style.marginRight="10px",but1.innerHTML='<a href="javascript:void(0)">query debug信息</a>',document.body.appendChild(dom),dom.appendChild(but),dom.appendChild(but1),T.on(but,"click",openPop),T.on(but1,"click",openPop1)}}},showPoiDebug:function(e,o){if(e[o]){var n=e[o],t=this,i=t.config.show.poi,r='<p style="color:#888">';for(var p in n){var l=i[p]?i[p]:p,a=t.config._poiControl[p],u=t.config.poiControl[a]?t.config.poiControl[a].value:1,d=u?"block":"none";r+='<span id="_debug_'+p+"_poi"+o+'" style="display:'+d+'">'+l+"："+n[p]+"</span>"}return r+="</p>"}}},window.mapDebugObjWxp.stringifyIndex=0,window.mapDebugObjWxp.stringify=function(){function e(e){return/["\\\x00-\x1f]/.test(e)&&(e=e.replace(/["\\\x00-\x1f]/g,function(e){var o=p[e];return o?o:(o=e.charCodeAt(),"\\u00"+Math.floor(o/16).toString(16)+(o%16).toString(16))})),decodeURIComponent(e)}function o(e){if(!e.length)return"<br/>";var o,n,t,p=['<div style="margin-left:20px;display:none">'],l=e.length;for(n=0;l>n;n++)switch(t=e[n],typeof t){case"undefined":case"function":case"unknown":break;default:var a='<img src="'+window.mapDebugObjWxp.config.imgUrl+'space.png"/*tpa=http://webmap0.map.bdstatic.com/newmap/static/common/js/util/'+window.mapDebugObjWxp.config.imgUrl+'space.png*/ />'+n;r(t)&&(a='<div hasSubNode="1" style="cursor:pointer"><img src="'+window.mapDebugObjWxp.config.imgUrl+'close.png"/*tpa=http://webmap0.map.bdstatic.com/newmap/static/common/js/util/'+window.mapDebugObjWxp.config.imgUrl+'close.png*/ />'+n+"</div>"),p.push(a),i(t)&&p.push("："),p.push(window.mapDebugObjWxp.stringify(t)),i(t)&&p.push("<br/>"),o=1}return p.push("</div>"),p.join("")}function n(e){return 10>e?"0"+e:e}function t(e){return e.getFullYear()+"-"+n(e.getMonth()+1)+"-"+n(e.getDate())+"T"+n(e.getHours())+":"+n(e.getMinutes())+":"+n(e.getSeconds())}function i(e){var o=!1;return("undefined"==typeof e||"number"==typeof e||"string"==typeof e||"boolean"==typeof e)&&(o=!0),o}function r(e){if("array"==typeof e&&e.length>0)return!0;if("object"==typeof e)for(var o in e)return!0;return!1}var p={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(n){switch(window.mapDebugObjWxp.stringifyIndex++,typeof n){case"undefined":return"undefined";case"number":return isFinite(n)?String(n):"null";case"string":return e(n);case"boolean":return String(n);default:if(null===n)return"null";if(n instanceof Array)return o(n);if(n instanceof Date)return t(n);var p,l,a=['<div style="margin-left:20px;display:none">'],u=window.mapDebugObjWxp.stringify;1==window.mapDebugObjWxp.stringifyIndex&&(a[0]="<div>");for(var d in n)if(Object.prototype.hasOwnProperty.call(n,d))switch(l=n[d],typeof l){case"undefined":case"unknown":case"function":break;default:p=1;var c='<img src="'+window.mapDebugObjWxp.config.imgUrl+'space.png"/*tpa=http://webmap0.map.bdstatic.com/newmap/static/common/js/util/'+window.mapDebugObjWxp.config.imgUrl+'space.png*/ />'+u(d),g="";r(l)&&(c='<div hasSubNode="1" style="cursor:pointer"><img src="'+window.mapDebugObjWxp.config.imgUrl+'close.png"/*tpa=http://webmap0.map.bdstatic.com/newmap/static/common/js/util/'+window.mapDebugObjWxp.config.imgUrl+'close.png*/ />'+u(d)+"</div>"),i(l)&&(g="："),a.push(c+g+u(l)),i(l)&&a.push("<br />")}return a.push("</div>"),a.join("")}}}(),function(){var panel=T('<div style="position:absolute;left:0;top:10px;background:#eee;padding:3px;border:1px solid black;z-index:10000;"><p><b>uid:</b><input id="db_uid" /></p></div>');T("body").append(panel);var ul=T('<ul style="max-height:120px;overflow:hidden"></ul>');panel.append(ul),window.mapDebug.onDebugResp=function(logid,xhr){var json=eval("("+xhr.responseText+")");ul.prepend('<li style="padding:3px;border-bottom:1px dashed black">'+json.result.wd+":"+logid+"</li>")}}();