define("common:widget/ui/iKnow/iKnow.js",function(n,t,o){var e=n("common:widget/ui/config/config.js"),i=e.modelConfig,a={IknowBtnOver:function(n){n.style.backgroundPosition="left center"},IknowBtnOut:function(n){n.style.backgroundPosition="left top"},IknowBtnDown:function(n){n.style.backgroundPosition="left bottom"},IknowBtnUp:function(n){n.style.backgroundPosition="left center"},getIknowCode:function(n){return n=baidu.string.filterFormat.escapeString(n),['<div class="nr_know"><p>您可以在知道提问，让其他网友帮您解决问题：</p>','<form name="IknowForm" action="http://zhidao.baidu.com/q" method="get" target="_blank">','<p class="nr_pi"><input type="text" name="word" value="'+n+'" /></p>','<div class="IknownBtn" onmouseover="IknowInst.IknowBtnOver(this)" onmouseout="IknowInst.IknowBtnOut(this)" onmousedown="IknowInst.IknowBtnDown(this)" onmouseup="IknowInst.IknowBtnUp(this)" onclick="IknowForm.submit()">我要提问</div>','<input type="hidden" name="ct" value="17" />','<input type="hidden" name="tn" value="ikask" />','<input type="hidden" name="cm" value="1" />','<input type="hidden" name="lm" value="394496" />','<input type="hidden" name="pn" value="0" />','<input type="hidden" name="rn" value="10" />','<input type="hidden" name="fr" value="map" /></form></div>'].join("")},getPromptInfo:function(n,t){var o="http://zhidao.baidu.com/new?word=#{word}&ct=#{ct}&tn=#{tn}&cm=#{cm}&lm=#{lm}&pn=#{pn}&rn=#{rn}&fr=#{fr}",e={word:n,ct:17,tn:"ikask",cm:1,lm:394496,pn:0,rn:10,fr:"map"},a="http://www.baidu.com/s?ie=utf-8&wd="+encodeURIComponent(t)+"&cl=3",r=[],u=(i&&i.cityName?i.cityName:"全国",{city_id:i.cityCode||1,business_trigger:7,poi_name:t});return r.push("<div class='nr_suggest'>","<p class='sg_title'>您还可以：</p>","<ul>","<li>检查输入是否正确或者输入其它词</li>","<li>在百度网页中查找“<a href='"+a+"' target='_blank'>"+t+"</a>”</li>","<li>在百度知道<a href='"+baidu.string.format(o,e)+"' target='_blank'>提问</a>让其他网友帮您解决</li>","<li>在百度地图<a href='http://i.map.baidu.com/api/page/poicorrect/addpoipc?"+baidu.url.jsonToQuery(u,encodeURIComponent)+"' target='_blank'>添加该地点</a></li>","</ul>","</div>"),r.join("")}};o.exports=a,window.IknowInst=a});