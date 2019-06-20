define("common:widget/pano/module/PanoFloorModule/FloorComponent.js",function(e,o,t){var n=e("common:widget/pano/component/TableView/TableView.js"),r=e("common:widget/pano/base/util.js");e.loadCss({content:".floor-container{position:absolute;height:20px;background-color:rgba(37,37,37,.9);border:2px solid #3D4145;border-bottom:0}.floor-number{line-height:20px;color:#abb0b2;padding:0 12px;text-align:center;text-decoration:none;cursor:pointer;border-right:1px solid #3c3e42}.floor-container .selected-item .floor-number,.floor-number:hover{color:#fff}.floor-container .tableview-li{height:34px}"});var i='<a i="{$i}"class="floor-number" href="javascript:void(0);">{$text}</a>',a=function(e,o){var t=this.container=document.createElement("div");e.appendChild(t),t.className="floor-container",this._floorIndex=0,this._data=o;var a=this.tableView=new n(t,{viewWidth:300,viewHeight:34,isHorizontal:!0,margin:"0"});r.each(o,function(e,o){var t="";e.realFloor>0?(t=i.replace("{$i}",o).replace("{$text}",e.realFloor+"F"),a.addItemContent(t)):0==e.realFloor||(t=i.replace("{$i}",o).replace("{$text}",e.realFloor.toString().replace("-","B")),a.addItemContent(t))});var l=this;a.addEventListener("click",function(e){e.index!==l._floorIndex&&l.dispatchEvent("item_click",{index:e.index})}),a.resize(),baidu.event.on(t,"mouseleave",function(e){for(var o=e.relatedTarget;o;){if("pano-overview-wrapper"==o.id)return;if(o==document.body)break;o=o.parentNode}l.dispatchEvent("fold_overview")})};baidu.lang.inherits(a,baidu.lang.Class),T.object.extend(a.prototype,{setFloorIndex:function(e){this._floorIndex=e,this.tableView.setSelectIndex(this._floorIndex)},getFloorIndex:function(){return this._floorIndex},getData:function(){return this._data},destroy:function(){this._data=null,this._floorIndex=null,this.container.parentNode.removeChild(this.container),this.container=null,this.tableView.destroy()}}),t.exports=a});