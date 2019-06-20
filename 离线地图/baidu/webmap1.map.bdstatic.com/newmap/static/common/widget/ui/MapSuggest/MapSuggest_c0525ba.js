define("common:widget/ui/MapSuggest/MapSuggest.js",function(require,exports,module){function proxy(){for(var t=[],s=0,e=arguments.length;e>s;s++)t[s]=arguments[s];var i=t[0];return t.shift(),function(){i.apply(null,t)}}function BMAddEvent(t,s,e){"undefined"!=typeof window.attachEvent?t.attachEvent("on"+s,e):window.addEventListener&&t.addEventListener(s,e,!0)}Object.extend=function(t,s){for(var e in s)t[e]=s[e];return t},Object.extend(Object,{clone:function(t){return Object.extend({},t)}});var Class=function(){for(var t=function(){this.initialize.apply(this,arguments)},s=0;s<arguments.length;s++){var e=arguments[s];for(var i in e.prototype)t.prototype[i]=e.prototype[i]}return t.child=function(){return new Class(this)},t.extend=function(s){for(var e in s)t.prototype[e]=s[e]},t};Function.prototype.bindAsEventListener=function(t){var s=this;return function(e){s.call(t,e||window.event)}};var util=require("common:widget/ui/util/util.js"),smpMgrStorer=require("common:widget/ui/setMyPlace/SetMyPlaceStorer.js"),config=require("common:widget/ui/config/config.js"),modelConfig=config.modelConfig,MapConfig=config.mapConfig,_bdMapSuggest=null,isShowSug=!0,bdMapSuggest=new Class;bdMapSuggest.prototype={GE:function(t){return document.getElementById(t)},C:function(t){return document.createElement(t)},clktr:function(t){var s=!1;if(t.id&&t.id.indexOf("myaddr")<0){{var e=t.id.split("__"),i=e[2];e[1]}if((0==this.qType||2==this.qType)&&i>-1&&null!=this.SD){var r=this.SD.s[i];if(""!=r.split("$")[3]&&this.callback&&(s=!0,this.setValue(t.cells[2].childNodes[0].nodeValue),"function"==typeof this.callback&&(0==this.qType||2==this.qType?this.callback(t.cells[3].innerHTML,!0):this.callback(t.cells[2].childNodes[0].nodeValue,!0))),""!=r.split("$")[3])s=!0,this.setValue(t.cells[2].childNodes[0].nodeValue);else{s=!0,this.setValue(t.cells[2].childNodes[0].nodeValue);var d="";try{d=t.cells[3].childNodes[0].nodeValue+t.cells[2].childNodes[0].nodeValue}catch(n){d=t.cells[3].innerHTML+t.cells[2].innerHTML}"function"==typeof this.callback&&this.callback(t.cells[3].innerHTML,!1),setTimeout(proxy(this.sendQuery.bindAsEventListener(this),d),200)}}}s||(this.cs(),this.sub(t.cells[2].childNodes[0].nodeValue))},sub:function(t){this.I.value=t},csc:function(){this.cs(),this.I.blur(),this.I.focus(),"function"==typeof this.closeSuggest&&this.closeSuggest(),isShowSug=!1},trMouseOver:function(t){this.ct(),t.className="mo",this.mouseOnSug=!0},trMouseDown:function(t){this.E=!0,t=t||window.event;for(var s=t.target||t.srcElement;"tr"http://webmap1.map.bdstatic.com/newmap/static/common/widget/ui/MapSuggest/!=s.tagName.toLowerCase();)s=s.parentNode;return this.clktr(s),this.I.focus(),this.isIE?void 0:(e.stopPropagation(),!1)},setSug:function(){if("object"==typeof this.SD&&"undefined"!=typeof this.SD.s){var SmpMgr=require("common:widget/ui/setMyPlace/SetMyPlaceMgr.js"),tab=this.C("table");with(tab)id="bdmap_sugt_"+this.sgId,style.backgroundColor="#fff",cellSpacing=0,cellPadding=1,style.cursor="default";var tb=this.C("tbody");tab.appendChild(tb);var regStr=this.I.value.replace(/[\?\*\|\\()\[\]|\(|\)]/g,""),regStr=regStr.replace(" ",""),reExp=new RegExp(regStr,"g"),reExp1="<b>"+regStr+"</b>",ifShowFLg=!1;this.getSugNum();var sugNumLength;sugNumLength=this.S.sugNum>this.SD.s.length?this.SD.s.length:this.S.sugNum;for(var i=0;sugNumLength>i;i++)if(3!=this.SD.t||this.SD.s[i].split("$")[4].split(";")[0]==eval(this.cityId)&&this.SD.s[i].split("$")[3]!=this.I.value){ifShowFLg=!0;var tr=tb.insertRow(-1);tr.id="tr__"+this.sgId+"__"+i,tr.onmouseover=proxy(this.trMouseOver.bindAsEventListener(this),tr),tr.onmouseout=this.ct.bindAsEventListener(this);var me=this;tr.onmousedown=function(t){me.trMouseDown(t)};var td=tr.insertCell(-1),td1=tr.insertCell(-1),td2=tr.insertCell(-1),td3=tr.insertCell(-1),text_indent=this.offsetPos1[0]<0?-this.offsetPos1[0]-1:this.offsetPos1[0];td.style.textIndent=text_indent+"px",td2.style.display="none",td3.style.display="none";var sdwords=this.SD.s[i].split("$");switch(this.SD.t){case 0:td1.style.display="none";var keywordStr="";""==sdwords[3]?sdwords[2].toLowerCase().indexOf(regStr.toLowerCase())>-1?(keywordStr=sdwords[2],td.innerHTML=sdwords[2].replace(reExp,reExp1)+'&nbsp;<span class="spoi1">'+sdwords[0]+sdwords[1]+"</span>",td3.innerHTML=sdwords[0]+sdwords[1]):sdwords[1].toLowerCase().indexOf(regStr.toLowerCase())>-1||(sdwords[1]+sdwords[2]).toLowerCase().indexOf(regStr.toLowerCase())>-1?(keywordStr=sdwords[1]+sdwords[2],td.innerHTML=(sdwords[1]+sdwords[2]).replace(reExp,reExp1)+'&nbsp;<span class="spoi1">'+sdwords[0]+"</span>",td3.innerHTML=sdwords[0]):(keywordStr=sdwords[0]+sdwords[1]+sdwords[2],td.innerHTML=(sdwords[0]+sdwords[1]+sdwords[2]).replace(reExp,reExp1),td3.innerHTML=""):(keywordStr=sdwords[3],td.innerHTML=sdwords[3].replace(reExp,reExp1)+'&nbsp;<span class="spoi1">'+(sdwords[0]+sdwords[1]).replace(reExp,reExp1)+"</span>",td3.innerHTML=sdwords[0]+sdwords[1]+sdwords[2]),td2.innerHTML=keywordStr;break;case 1:td1.style.display="none",""!=sdwords[1]&&(td.innerHTML=(sdwords[0]+sdwords[1]).replace(reExp,reExp1),td2.innerHTML=sdwords[0]+sdwords[1]);break;case 2:td1.style.display="none";var keywordStr="";""==sdwords[3]?sdwords[2].toLowerCase().indexOf(regStr.toLowerCase())>-1?(keywordStr=sdwords[2],td.innerHTML=sdwords[2].replace(reExp,reExp1)+'&nbsp;<span class="spoi1">'+sdwords[0]+sdwords[1]+"</span>",td3.innerHTML=sdwords[0]+sdwords[1]):sdwords[1].toLowerCase().indexOf(regStr.toLowerCase())>-1||(sdwords[1]+sdwords[2]).toLowerCase().indexOf(regStr.toLowerCase())>-1?(keywordStr=sdwords[1]+sdwords[2],td.innerHTML=(sdwords[1]+sdwords[2]).replace(reExp,reExp1)+'&nbsp;<span class="spoi1">'+sdwords[0]+"</span>",td3.innerHTML=sdwords[0]):(keywordStr=sdwords[0]+sdwords[1]+sdwords[2],td.innerHTML=(sdwords[0]+sdwords[1]+sdwords[2]).replace(reExp,reExp1),td3.innerHTML=""):(keywordStr=sdwords[3],td.innerHTML=sdwords[3].replace(reExp,reExp1)+'&nbsp;<span class="spoi1">'+(sdwords[0]+sdwords[1]).replace(reExp,reExp1)+"</span>",td3.innerHTML=sdwords[0]+sdwords[1]+sdwords[2]),td2.innerHTML=keywordStr;break;case 3:td.innerHTML=td2.innerHTML=sdwords[3],td.width=95;for(var tmpLineArr=sdwords[4].split(";"),lineArr=tmpLineArr[1].split(","),lineStr="",j=lineArr.length-1;j>=0;j--)lineStr+='<div class="sugg_l_'+tmpLineArr[0]+" sugg_"+tmpLineArr[0]+"_l"+lineArr[j]+'"></div>';td1.innerHTML=lineStr,td1.width=55}}var addrData=smpMgrStorer.getAll();if(addrData&&addrData.length>0){var me=this,text_indentw=me.offsetPos1[0]<0?-me.offsetPos1[0]-1:me.offsetPos1[0],addrRegStr=this.I.value.replace(/[\?\*\|\\()\[\]]/g,"");addrRegStr=this.I.value.replace(" ","");for(var addrRreExp1="<b>"+addrRegStr+"</b>",my_addr_th,my_addr_td,searchW,my_addr_td1,my_addr_td2,my_addr_td3,k=0,len=addrData.length;len>k;k++)searchW=new RegExp("^"+addrRegStr),searchW.test(addrData[k].note)&&(my_addr_th=tb.insertRow(-1),my_addr_td=my_addr_th.insertCell(-1),my_addr_td1=my_addr_th.insertCell(-1),my_addr_td2=my_addr_th.insertCell(-1),my_addr_td3=my_addr_th.insertCell(-1),my_addr_th.id="myAddr_"+k,my_addr_td1.style.display="none",my_addr_td2.style.display="none",my_addr_td3.style.display="none",my_addr_td1.innerHTML=" ",my_addr_td2.innerHTML=" ",my_addr_td3.innerHTML=" ",my_addr_td.style.textIndent=text_indentw+"px",my_addr_td.className="sugMyAddr",my_addr_td.innerHTML="<span>常用地点-"+addrRreExp1+addrData[k].note.replace(addrRegStr,"")+"</span>",my_addr_th.onmouseover=function(){this.className="mo"},my_addr_th.onmouseout=function(){this.className="ml"},my_addr_th.onclick=function(t){return function(){me.cs();var s=addrData[t].uid;SmpMgr.itemClick(s,me.sgId),addStat("indexheader.searchbox.fusedplace")}}(k),addStat("indexheader.searchbox.fusedplace","show"))}if(0==this.closeBol){var th=tb.insertRow(-1),td=th.insertCell(-1);td.style.textAlign="right",td.style.borderTop="1px solid #EBEBEB";var oa=this.C("A");oa.style.color="#888",oa.style.paddingRight="5px",oa.href="javascript:void(0)",oa.title="关闭",oa.innerHTML="关闭",oa.onclick=this.csc.bindAsEventListener(this),td.appendChild(oa);var td1=th.insertCell(-1);td1.style.display="none";var td2=th.insertCell(-1);td2.style.display="none"}if(this.S.innerHTML="",this.S.appendChild(tab),this.T=this.GE("bdmap_sugt_"+this.sgId),ifShowFLg||3==this.SD.t&&1==this.SD.s.length&&this.SD.s[0].split("$")[3]==this.I.value)this.setPos(),this.GE("noResTip"+this.sgId)&&(this.GE("noResTip"+this.sgId).style.display="none"),this.ifSubmit=!1;else{if(this.S.style.display="none",this.isIE&&(this.GE("bdmap_sugif_"+this.sgId).style.display="none"),this.GE("noResTip"+this.sgId)){var tmpRt=this.GE("noResTip"+this.sgId),iPos=this.getPos(this.I);tmpRt.style.left=iPos[0]+this.offsetPos[0]+"px",tmpRt.style.top=iPos[1]+this.offsetPos[1]+parseInt(this.I.offsetHeight)+"px",tmpRt.innerHTML=this.nonResTip,tmpRt.style.display=""}this.ifSubmit=!0}this.c=-1,this.s3=""}},setPos:function(){var t,s,e,i=T.g(this.I.id+"Span");i?(t=T.dom.getPosition(i),s=i.clientWidth,e=i.offsetHeight):(t=T.dom.getPosition(this.I),s=this.I.clientWidth,e=this.I.offsetHeight),("iw_ssn"==this.I.id||"iw_esn"==this.I.id)&&(s-=2),this.S.style.top="PoiSearch"http://webmap1.map.bdstatic.com/newmap/static/common/widget/ui/MapSuggest/==this.I.id?t.top+e-1+"px":"iw_ssn"==this.I.id||"iw_esn"http://webmap1.map.bdstatic.com/newmap/static/common/widget/ui/MapSuggest/==this.I.id?t.top+e-1+"px":t.top+e+"px",this.S.style.left=t.left+"px",this.S.style.display="block",s>=this.T.offsetWidth+2&&(this.T.style.width=s+"px")},getSugNum:function(){var t,s,e,i,r=T.g(this.I.id+"Span");r?(t=T.dom.getPosition(r),s=r.offsetHeight):(t=T.dom.getPosition(this.I),s=this.I.offsetHeight),"PoiSearch"http://webmap1.map.bdstatic.com/newmap/static/common/widget/ui/MapSuggest/==this.I.id?(this.S.style.top=t.top+s-1+"px",e=document.body.clientHeight-t.top-s+1):(this.S.style.top=t.top+s-4+"px",e=document.body.clientHeight-t.top-s+4),i=parseInt((e-30)/27),this.S.sugNum=1>i?0:i>10?10:i},resetPos:function(){"none"!=this.S.style.display&&this.setPos()},ct:function(){for(var t=this.T.rows,s=0;s<t.length;s++)t[s].className="ml"},cs:function(){this.isIE&&this.GE("bdmap_sugif_"+this.sgId)&&(this.GE("bdmap_sugif_"+this.sgId).style.display="none"),this.S&&(this.S.style.display="none"),this.GE("noResTip"+this.sgId)&&(this.GE("noResTip"+this.sgId).style.display="none"),this.timer3=0,this.c=-1},cb:function(){var t=!0,s=this.I.value,e=require("common:widget/ui/searchBox/searchBox.js");if(!e.notShowSuggest.state){if("undefined"!=typeof this.T&&null!=this.T)for(var i=this.T.rows,r=0;r<i.length;r++)"mo"==i[r].className&&i[r].id.indexOf("myAddr")<0&&(s!=i[r].cells[2].childNodes[0].nodeValue||this.mouseOnSug||(t=!1));t&&!this.K&&this.S&&(this.ifSend?this.sendQuery():this.ifSend=!0)}},sendQuery:function(qString){qString?(this.queryWord=this.I.value,this.specQuery1=!0):this.specQuery1=!1;var cityId=eval(this.cityId),pars="",bounds=util.formatBounds();pars=1==cityId&&this.I.id.indexOf("BusSearch")>-1?"/su?wd="+encodeURIComponent(qString?qString:this.I.value)+"&cid="+cityId+"&type=0&newmap=1&b="+bounds+"&t="+(new Date).getTime():"/su?wd="+encodeURIComponent(qString?qString:this.I.value)+"&cid="+cityId+"&type="+this.qType+"&newmap=1&b="+bounds+"&t="+(new Date).getTime();var me=this;baidu.ajax(pars,{dataType:"json",cache:!0,success:function(t,s){me.sugCallBack(t),s.slow?ErrorMonitor("su","req_slow"+s.slow,"",.02,{xhr:s,url:pars,type:"slow",unique:!0}):ErrorMonitor("su","succ","",.02,{xhr:s,url:pars,type:"succ",unique:!0})},error:function(t){ErrorMonitor("su","req_fail","",.02,{xhr:t,url:pars,type:"fail",unique:!0})}})},sugCallBack:function(t){if(!this.tooFast&&t){var s=t;if("object"==typeof s&&"undefined"!=typeof s.s&&"undefined"!=typeof s.s[0]){var e=!1;if(1==s.s.length)switch(s.t){case 0:case 1:case 2:s.s[0].replace(/\$/g,"")==this.I.value&&(e=!0);break;case 3:s.s[0].split("$")[3]==this.I.value&&(e=!0)}(this.enterQuery||3==s.t)&&e?(this.cs(),this.SD={},this.enterQuery=!1,this.ifSubmit=!0):(this.SD=s,this.setSug())}else{if(this.cs(),this.SD={},this.GE("noResTip"+this.sgId)){var i=this.GE("noResTip"+this.sgId),r=this.getPos(this.I);i.style.left=r[0]+this.offsetPos[0]+"px",i.style.top=r[1]+this.offsetPos[1]+parseInt(this.I.offsetHeight)+"px",i.innerHTML=this.nonResTip,i.style.display=""}this.ifSubmit=!0}}},setValue:function(t){var s=["BusSearchSta","BusSearchEnd","DriveSearchSta","DriveSearchEnd"];this.cs(),this.ifSend=!1;for(var e=require("common:widget/ui/searchBox/searchBox.js"),i=0;i<s.length;i++)if(this.I.id==s[i])return void e.setValue(s[i],t);this.I.value=t},f:function(){if(!this.GE(this.sgId))return void this.disposeSug();var t=this.I.value;t==this.s1&&""!=t&&t!=this.s3?0==this.timer2&&(isShowSug?this.timer2=setTimeout(this.cb.bindAsEventListener(this),100):this.s3=t):(clearTimeout(this.timer2),this.timer2=0,this.s1=t,""==t&&this.cs(),this.s3!=this.I.value&&(this.s3=""))},resetSuggestion:function(){"none"!=this.S.style.display&&setTimeout(function(){this.cs(),null!=this.SD&&(this.setSug(this.SD),this.I.focus())},100)},keyDownSuggest:function(t){var s=require("common:widget/ui/setMyPlace/SetMyPlaceMgr.js");_bdMapSuggest=this,l=t||window.event,this.K=!1;var e;if(27==l.keyCode)return this.isIE?l.returnValue=!1:l.preventDefault(),this.I.blur(),void this.I.focus();if(13==l.keyCode){if(this.T&&this.T.getElementsByTagName("TR")[this.c]){var i=this.T.getElementsByTagName("TR")[this.c];if(i.id&&i.id.indexOf("myAddr")>-1){var r=(i.id.indexOf("myAddr"),1*i.id.substring(i.id.length-1,i.id.length)),d=smpMgrStorer.getAll();return s.itemClick(d[r].uid,this.sgId),this.cs(),void util.preventDefault(l)}}if(-1==this.c)return this.cs(),this.tooFast=!0,setTimeout(this.setTooFast.bindAsEventListener(this),1e3),!0;if(this.ifSubmit)return this.tooFast=!0,setTimeout(this.setTooFast.bindAsEventListener(this),1e3),!0;if((0==this.qType||2==this.qType)&&this.c>-1&&null!=this.SD){var n=this.SD.s[this.c];if(this.callback&&""!=n.split("$")[3]&&(this.tooFast=!0,setTimeout(this.setTooFast.bindAsEventListener(this),1e3),"function"==typeof this.callback)){var o=this.T.getElementsByTagName("TR")[this.c].cells[3].childNodes[0],a=o&&o.nodeValue;this.callback(a,!0)}if(""!=n.split("$")[3])this.c=-1;else{this.enterQuery=!0;var h="";try{h=this.T.getElementsByTagName("TR")[this.c].cells[3].childNodes[0].nodeValue+this.T.getElementsByTagName("TR")[this.c].cells[2].childNodes[0].nodeValue}catch(l){h=this.T.getElementsByTagName("TR")[this.c].cells[3].innerHTML+this.T.getElementsByTagName("TR")[this.c].cells[2].innerHTML}"function"==typeof this.callback&&this.callback(this.T.getElementsByTagName("TR")[this.c].cells[3].innerHTML,!1),this.sendQuery(h)}}else this.enterQuery=!0,this.sendQuery();return this.cs(),util.preventDefault(l),!1}if((38==l.keyCode||40==l.keyCode)&&(this.mouseOnSug=!1,"none"!=this.S.style.display)){var u=this.T.rows;if(0==this.closeBol)var c=u.length-1;else var c=u.length;for(var g=0;c>g;g++)if("mo"==u[g].className){this.c=g;break}this.ct();var e;if(38==l.keyCode)if(0==this.c)this.I.value=this.specQuery1?this.queryWord:this.SD.q,this.c=-1,this.K=!0;else if(-1==this.c&&(this.c=c),e=u[--this.c],e.className="mo",e.id&&e.id.indexOf("myAddr")>-1){var r=(e.id.indexOf("myAddr"),1*e.id.substring(e.id.length-1,e.id.length)),d=smpMgrStorer.getAll(),p=d[r].uid.toString();s.itemClick(p,this.sgId,this.sgId,"sug")}else this.I.value=e.cells[2].childNodes[0].nodeValue;if(40==l.keyCode)if(this.c==c-1)this.I.value=this.specQuery1?this.queryWord:this.SD.q,this.c=-1,this.K=!0;else if(e=u[++this.c],e.className="mo",e.id&&e.id.indexOf("myAddr")>-1){var r=(e.id.indexOf("myAddr"),1*e.id.substring(e.id.length-1,e.id.length)),d=smpMgrStorer.getAll(),p=d[r].uid.toString();s.itemClick(p,this.sgId,this.sgId,"sug")}else this.I.value=e.cells[2].childNodes[0].nodeValue;this.isIE||l.preventDefault()}},docMouseDown:function(t){var s=this;_bdMapSuggest&&(s=_bdMapSuggest),e=t||window.event;var i=e.target||e.srcElement;if(i!=s.I){for(;i=i.parentNode;)if(i==s.S||i==s.I)return void(s.isClkSug=!0);0==s.timer3&&(s.timer3=setTimeout(s.cs.bindAsEventListener(s),200))}},docKeyDown:function(t){this.isGecko&&(e=t||window.event,e.ctrlKey&&(61==e.keyCode||107==e.keyCode||109==e.keyCode||96==e.keyCode||48==e.keyCode)&&this.resetSuggestion())},beforeDeaSuggest:function(){this.E&&(window.event.cancelBubble=!0,window.event.returnValue=!1,this.E=!1)},keyBlurSuggest:function(){this.isClkSug||0==this.timer3&&(this.timer3=setTimeout(this.cs.bindAsEventListener(this),200)),this.isClkSug=!1},creatSugDiv:function(){if(!this.GE("bdmap_sug_"+this.sgId)){var sugdiv=this.C("div");with(sugdiv)id="bdmap_sug_"+this.sgId,className="sug",position="absolute",onselectstart="return false",style.display="none",style.zIndex="200001";document.body.appendChild(sugdiv)}if(this.S=this.GE("bdmap_sug_"+this.sgId),this.isIE){var sug_if=this.C("IFRAME");with(sug_if.src="javascript:void(0)",sug_if.id="bdmap_sugif_"+this.sgId,sug_if.style)display="none",position="absolute";this.S.parentNode.insertBefore(sug_if,this.S)}if(3==this.qType){var nrtdiv=this.C("div");with(nrtdiv)id="noResTip"+this.sgId,className="sugtip",position="absolute",onselectstart="return false",style.display="none",style.zIndex="200";document.body.appendChild(nrtdiv)}},disposeSug:function(){clearTimeout(this.timer2),this.timer2=0,this.s1=this.I.value,clearInterval(this.timer1),this.GE("bdmap_sug_"+this.sgId)&&document.body.removeChild(this.GE("bdmap_sug_"+this.sgId)),this.GE("noResTip"+this.sgId)&&document.body.removeChild(this.GE("noResTip"+this.sgId)),this.isIE&&this.GE("bdmap_sugif_"+this.sgId)&&document.body.removeChild(this.GE("bdmap_sugif_"+this.sgId)),this.isIE&&this.GE("imgLogo")&&(this.GE("imgLogo").style.display="block",this.GE("imgLogo").style.display="")},getPos:function(t){for(var s=0,e=0;null!=t;)s+=t.offsetLeft,e+=t.offsetTop,t=t.offsetParent;return[s,e]},setTooFast:function(){this.tooFast=!1},initialize:function(t,s,e){try{this.callback=s,this.closeSuggest=e,this.sgId=t.inputid,this.cookieN=t.cookiename||"bdmapsug",this.cityId=t.cityid||modelConfig.cityCode,this.closeBol=t.closeB||0,this.qType=t.qType||0,this.nonResTip="抱歉，未找到相关的车站",this.offsetPos=t.offset||[0,0],this.offsetPos1=t.offset1||[0,0],this.closeTip=t.closeTip||0,this._sq=t._sq||!1,this.mouseOnSug=!1,this.queryWord="",this.ifSubmit=!1,this.S=null,this.enterQuery=!1,this.ifSend=!0,this.I=this.GE(t.inputid),this.I.value="",this.tooFast=!1,this.SD,this.CS=null,this.c=-1,this.K=!1,this.mouseOnSug=!1,this.specQuery1=!1,this.E=!1,this.isIE=-1!=navigator.userAgent.indexOf("MSIE")&&!window.opera,this.isWebKit=navigator.userAgent.indexOf("AppleWebKit/")>-1,this.isGecko=navigator.userAgent.indexOf("Gecko")>-1&&-1==navigator.userAgent.indexOf("KHTML"),this.timer3=0,this.T=null,this.s1="",this.s3="",this.timer1,this.timer2=0,this.isClkSug=!1,this.I.setAttribute("autocomplete","off"),this.creatSugDiv(),this.I.onblur=this.keyBlurSuggest.bindAsEventListener(this),this.I.onkeydown=this.keyDownSuggest.bindAsEventListener(this),document.onmousedown=this.docMouseDown.bindAsEventListener(this),document.onkeydown=this.docKeyDown.bindAsEventListener(this),this.I.onbeforedeactivate=this.beforeDeaSuggest.bindAsEventListener(this),this.s3=this.I.value,this.timer1=setInterval(this.f.bindAsEventListener(this),10),baidu(window).on("resize",this.resetPos.bindAsEventListener(this))}catch(i){"undefined"!=typeof alog&&alog("http://webmap1.map.bdstatic.com/newmap/static/common/widget/ui/MapSuggest/exception.fire","catch",{msg:i.message||i.description,path:"common:widget/ui/MapSuggest/MapSuggest.js",ln:999})}}};var CloseSuggestion=bdMapSuggest.prototype.closeSuggestion=function(){return Object({closeTime:null,showTip:function(t){var s=null;T.g("sugoff")?s=T.g("sugoff"):(s=document.createElement("div"),s.id="sugoff",s.className="mapsug_off_tip",s.onselectstart="return false",document.body.appendChild(s)),s.innerHTML="提示功能已关闭,您可以刷新页面(F5)再次启用";var e=this.getPos(t);s.style.left=1*e[0]-8+"px",s.style.top=1*e[1]-2+parseInt(t.offsetHeight)+"px",t.offsetWidth>=s.offsetWidth&&(s.style.width=t.offsetWidth+"px"),this.closeTime=setTimeout(function(){clearTimeout(CloseSuggestion.closeTime),T.g("sugoff")&&document.body.removeChild(T.g("sugoff"))},2500)},getPos:function(t){for(var s=0,e=0;null!=t;)s+=t.offsetLeft,e+=t.offsetTop,t=t.offsetParent;return[s,e]}})}();module.exports=bdMapSuggest});