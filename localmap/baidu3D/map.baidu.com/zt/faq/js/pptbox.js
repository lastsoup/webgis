var pptData = [
['images/tu1.jpg'/*tpa=http://map.baidu.com/zt/faq/js/images/tu1.jpg*/, 'http://shouji.baidu.com/map/map_download.html', '#8fb8d6','statistic(SATA_BANNER1)'],
['images/tu2.jpg'/*tpa=http://map.baidu.com/zt/faq/js/images/tu2.jpg*/, 'http://shouji.baidu.com/map/map_download.html', '#046ea0','statistic(SATA_BANNER2)'],
['images/tu3.jpg'/*tpa=http://map.baidu.com/zt/faq/js/images/tu3.jpg*/, 'http://lbc.baidu.com/ba/poi/poiindex?from=map', '#164f9b','statistic(SATA_BANNER3)'],	
];
(function(){
	var length = pptData.length;
	var current = 0;
	var interval;
	var time = 5000;
	for(var i = 0; i < length; i++){
		if(i == 0){
			$("#ppt").append($('<a class="on andr_from" href="' + pptData[i][1] + '" style="background-image: url(' + pptData[i][0] + '); background-color: ' + pptData[i][2] + '" onClick='+ pptData[i][3] + ' target="_blank"></a>'));
			$("#pptbar").append($('<button class="on"></botton>'));
		}
		else{
			$("#ppt").append($('<a href="' + pptData[i][1] + '" class="andr_from" style="background-image: url(' + pptData[i][0] + '); background-color: ' + pptData[i][2] + '" onClick='+ pptData[i][3] + ' target="_blank"></a>'));
			$("#pptbar").append($('<button></botton>'));
		}
	}
	var animate = function(i){
		$("#ppt a").eq(i).addClass('on').siblings().removeClass('on');
		$("#pptbar button").eq(i).addClass('on').siblings().removeClass('on');
                  $("#setList li").eq(i).addClass('on').siblings().removeClass('on');
	}
	var intervalFun = function(){
		interval = setInterval(function(){
			current++;
			if(current == length){
				current = 0;
			}
			animate(current);
		},time);
	}
	intervalFun();
	$("#pptbar button").mouseover(function(){
		clearInterval(interval);
		animate($(this).index());
		intervalFun();
	});
})();
	
