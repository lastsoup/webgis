//-------------------- 初始化页面 start --------------------------------------
initPage();
	
//-------------------- 初始化页面 end   ---------------------------------------
function initPage(){

    addOnlyHtml(cTxt1,"cTxt1");//添加瀑布的html
	addWfHtml(cTxt2,"cTxt2","one");
	addWfHtml(cTxt3,"cTxt3","two");
	addWfHtml(cTxt4,"cTxt4","three");
	addOnlyHtml(cTxt5,"cTxt5");
	
}
//添加瀑布html
function addWfHtml(arr,dom,name){
	var c = [];
	//console.log("11:"+name);
	for(var i=0; i<arr.length; i++){ 
		c.push('<div id="con_'+name+"_"+(i+1)+'" ');
		
		if(i!=0)
		{c.push(' style="display:none;" ');}
		c.push('>');
		for(var j=0;j<arr[i].length;j++)
		{
			c.push('<div class="text">');
			c.push('<h4>'+ arr[i][j].title +'</h4>');
			c.push('<p >'+ arr[i][j].text);
	      if(arr[i][j].img){
			c.push('<img src="' + arr[i][j].img + '" alt="" />');}
			c.push('</p>')
			c.push('</div>');
			
		}
    	c.push('</div>');
		
	}
	 T.dom.insertHTML(dom,'beforeEnd',c.join('')); 
}

function addOnlyHtml(arr,dom){
	var c = [];
		for(var i=0;i<arr.length;i++)
		{
			c.push('<div class="text">');
			c.push('<h4>'+ arr[i].title +'</h4>');
			c.push('<p >'+ arr[i].text );
			if(arr[i].img){
			c.push('<img src="' + arr[i].img + '" alt=""/>');}
			c.push('</p>')
			c.push('</div>');
			
			
		}

	 T.dom.insertHTML(dom,'beforeEnd',c.join('')); 
}
