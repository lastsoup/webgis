var map,popup,dynamicMarker;
// 矢量图层
var slLayer0_10,slLayer10_17,slLayer18_20,sl_mark_18_20;
// 影像图层
var yxLayer,luwang10_17,luwang18_19,yx_mark_10_17,yx_mark_18_19;

function initgis(){
	//显示范围坐标
	var nanjingBounds=new LocaMap.Bounds(118,31.17,119.5,32.68);
    //地图对象
	map = new LocaMap.Map({
		div: "map",  
		projection: "EPSG:4326",  
		displayProjection: new LocaMap.Projection("EPSG:4326"),  
		restrictedExtent:nanjingBounds, // 将地图浏览限制到nanjingBounds以内
		minZoomLevel:10,
		numZoomLevels:21 //最高到20层，所以层数设置为21  
	});  
    
     
					
				/*
				
				// 影像底图数据，其它的影像图层都作为overlayLayer
				yxLayer =new LocaMap.Layer.TDTWMTS({
									name: "天地图影像",
									url: "http://t4.tianditu.cn/img_c/wmts",
									layer: "img",
									style: "default",
									matrixSet: "c",
									format: "tiles"

								}); 
								  */
								 
								 
				 				 
             yxLayer = new LocaMap.Layer.XYZ(  
								  "天地图影像",  
								  [  
								   "http://services.njmap.gov.cn/NJDOM/DataServer?T=tile&X=${x}&Y=${y}&L=${z}" 
								  ],  

								  {  
									beginLevel: 11, // 设置一下数据的起始层和范围,无效范围不会去访问了，从而加快数据加载
									endLevel: 18
									//maxExtent:new LocaMap.Bounds(-180,-270,180,90), // 对于天地图数据这个必须有
									//tileFullExtent: nanjingBounds,
									//wrapDateLine: true 
									

								  }  
								);
						   
				  
				// 矢量底图数据,其它的矢量数据全部作为overlayLayer
				slLayer0_10 = new LocaMap.Layer.TDTWMTS({
									name: "天地图地图",
									url: "http://172.16.12.15:8080/dfc/services/ogc/wmts/vec",//"http://t4.tianditu.cn/vec_c/wmts",
									layer: "vec",
									style: "default",
									matrixSet: "c",
									format: "tiles",
									beginLevel: 0,  
									endLevel: 10
								});  
												 
								  
				// 作为overlayLayer图层显示	
				slLayer10_17 = new LocaMap.Layer.TDTWMTS({
									name: "南京市电子地图10_17级",
									url: "http://www.njmap.gov.cn:8280/ResourcesProxy/Gateway/jcvxwrbcer/NJDLG_DT_NJ/wmts",
									layer: "NJDLG_DT_10_20",
									style: "default",
//									url:"http://58.213.23.212:9000/NJDLG_DT_10_17_N/wmts",
//									layer:"NJDLG_DT_10_17_N",
//									style:"NJDLG_DT_10_17_N",
//									url:"http://58.213.150.104:10101/NJJY_DLGDT/wmts",
//									layer:"NJJY_DLGDT_10_20",
//									style:"NJJY_DLGDT_10_20",
									matrixSet: "Matrix_0",
									format: "image/png",
									beginLevel: 10,              // 设置一下数据的起始层和范围,无效范围不会去访问了，从而加快数据加载
									endLevel: 17, 
									tileFullExtent: nanjingBounds,								
									isBaseLayer:false

								});
 							
				// 作为overlayLayer图层显示				
				slLayer18_20 = new LocaMap.Layer.TDTWMTS({
									name: "南京市电子地图18_20级",
									url: "http://www.njmap.gov.cn:8280/ResourcesProxy/Gateway/jcvxwrbcer/NJDLG_DT_NJ/wmts",
									layer: "NJDLG_DT_10_20",
									style: "default",
//									url: "http://58.213.150.104:10101/NJJY_DLGDT/wmts",
//									layer: "NJJY_DLGDT_10_20",
//									style: "NJJY_DLGDT_10_20",
									matrixSet: "Matrix_0",
									format: "image/png",
									beginLevel: 18,// 设置一下数据的起始层和范围能够加快数据加载
									endLevel: 20, 
									tileFullExtent: nanjingBounds,		
									isBaseLayer:false

								});  
								
				// 作为overlayLayer图层显示	
				sl_mark_18_20 =new LocaMap.Layer.TDTWMTS({
									name: "地图注记18_20级",
									url: "http://www.njmap.gov.cn:8280/ResourcesProxy/Gateway/abztwxwdik/NJDLG_ZJ_NJ/wmts",
									layer: "NJDLG_ZJ_10_20",
									style: "default",
									matrixSet: "Matrix_0",
									format: "image/png",
									beginLevel: 10,      // 设置一下数据的起始层和范围能够加快数据加载
									endLevel: 20, 
									tileFullExtent: nanjingBounds,	
									isBaseLayer:false

								});  
								
								
				// 作为overlayLayer图层显示	
				luwang10_17 =new LocaMap.Layer.TDTWMTS({
									name: "路网10_17级",
									url: "http://www.njmap.gov.cn:8280/ResourcesProxy/Gateway/qyktkdvqeo/NJDOM_DT/wmts",
									layer: "NJDOM_DT2014",
									style: "default",
									matrixSet: "Matrix_0",
									format: "image/png",
									beginLevel: 10,    // 设置一下数据的起始层和范围能够加快数据加载
									endLevel: 17, 
									tileFullExtent: nanjingBounds,	
									isBaseLayer:false

								});  
								
								
				 // 作为overlayLayer图层显示	
				luwang18_19 =new LocaMap.Layer.TDTWMTS({
									name: "路网18_19级",
									url: "http://www.njmap.gov.cn:8280/ResourcesProxy/Gateway/qyktkdvqeo/NJDOM_DT/wmts",
									layer: "NJDOM_DT2014",
									style: "default",
									matrixSet: "Matrix_0",
									format: "image/png",
									beginLevel: 18,    // 设置一下数据的起始层和范围能够加快数据加载
									endLevel: 19, 
									tileFullExtent: nanjingBounds,	
									isBaseLayer:false

								});  
								
				// 作为overlayLayer图层显示	
				yx_mark_10_17 =new LocaMap.Layer.TDTWMTS({
									name: "影像注记10_17级",
									url: "http://www.njmap.gov.cn:8280/ResourcesProxy/Gateway/abztwxwdik/NJDLG_ZJ_NJ/wmts",
									layer: "NJDLG_ZJ_10_20",
									style: "default",
									matrixSet: "Matrix_0",
									format: "image/png",
									beginLevel: 10,    // 设置一下数据的起始层和范围能够加快数据加载
									endLevel: 17, 
									tileFullExtent: nanjingBounds,	
									isBaseLayer:false

								});  
								
				// 作为overlayLayer图层显示	
				yx_mark_18_19 =new LocaMap.Layer.TDTWMTS({
									name: "影像注记18_19级",
									url: "http://www.njmap.gov.cn:8280/ResourcesProxy/Gateway/abztwxwdik/NJDLG_ZJ_NJ/wmts",
									layer: "NJDLG_ZJ_10_20",
									style: "default",
									matrixSet: "Matrix_0",
									format: "image/png",
									beginLevel: 18,    // 设置一下数据的起始层和范围能够加快数据加载
									endLevel: 19, 
									tileFullExtent: nanjingBounds,	
									isBaseLayer:false

								}); 
								
 
				 	
     
        /*  add point */
        markerLayer = new LocaMap.Layer.Markers( "Markers" );
	    vectorLayer = new LocaMap.Layer.Vector();
		
			    // allow testing of specific renderers via "?renderer=Canvas", etc
             var renderer = LocaMap.Util.getParameters(window.location.href).renderer;
            renderer = (renderer) ? [renderer] : LocaMap.Layer.Vector.prototype.renderers;
    
            vectorGeoLayer = new LocaMap.Layer.Vector("Simple Geometry", {
                styleMap: new LocaMap.StyleMap({'default':{
                    strokeColor: "#00FF00",
                    strokeOpacity: 0,
                    strokeWidth: 3,
                    fillColor: "#FF5500",
                    fillOpacity: 0,//透明
                    pointRadius: 13,  // 点的大小设置为0不让点显示出来
                    pointerEvents: "visiblePainted",
                    // label with \n linebreaks
                    label : "${name}",
                    fontColor: "blue",//${favColor}
                    fontSize: "12px",
                    fontFamily: "Courier New, monospace",
                    fontWeight: "bold",
                    labelAlign: "${align}",
                    labelXOffset: "${xOffset}",
                    labelYOffset: "${yOffset}",
                    labelOutlineColor: "white",
                    labelOutlineWidth: 3
                }}),
                renderers: renderer
            });
	 /*  add point  end */		 

	 
	map.addLayers([yxLayer,luwang10_17,luwang18_19,yx_mark_10_17,yx_mark_18_19,slLayer0_10,slLayer10_17,slLayer18_20,sl_mark_18_20]);
	map.addLayer(vectorGeoLayer);
	map.addLayer(vectorLayer);
	map.addLayer(markerLayer);
	 
	
	 
				 
				 
				
				
	  
	ChangeMapType(0);
	
	 // 右下角的鼠标当前层和经纬度信息
	map.addControl(new LocaMap.Control.MousePosition());  
	 
	// 设置地图移动带有惯性效果
	mapPan= new LocaMap.Control.TouchNavigation({
			dragPanOptions: {
				enableKinetic: true
			}
		})
	map.addControl(mapPan);
    //给地图增加点击事件
	var click = new LocaMap.Control.Click();
    map.addControl(click);
    click.activate();
                
	
	// 将地图经纬度某个位置
	var lon = 118.791113;
	var lat = 32.063076;
	var zoom = 12;
	map.setCenter(new LocaMap.LonLat(lon, lat), zoom);
	
//	document.getElementById('rdbaseLayer0').checked = true;
		 
		}
		
	
       LocaMap.Control.Click = LocaMap.Class(LocaMap.Control, {//实现点击获取经纬度信息                
                defaultHandlerOptions: {
                    'single': true,
                    'double': false,
                    'pixelTolerance': 0,
                    'stopSingle': false,
                    'stopDouble': false
                },
 
                initialize: function(options) {
                    this.handlerOptions = LocaMap.Util.extend(
                        {}, this.defaultHandlerOptions
                    );
                    LocaMap.Control.prototype.initialize.apply(
                        this, arguments
                    ); 
                    this.handler = new LocaMap.Handler.Click(
                        this, {
                            'click': this.trigger
                        }, this.handlerOptions
                    );
                }, 
 
                trigger: function(e) {
                    var lonlat = map.getLonLatFromPixel(e.xy);
                    getPoint2Text(lonlat);//需要界面获取经纬度信息的，需要在相应页面实现这个方法。lonlat.lon lonlat.lat
                }
       });         
		
	function ShowSLLayer(bVisible){
	
		slLayer0_10.setVisibility(bVisible);
		slLayer10_17.setVisibility(bVisible);
		slLayer18_20.setVisibility(bVisible);
		sl_mark_18_20.setVisibility(bVisible);
		if(bVisible){
			this.map.setBaseLayer(slLayer0_10); //底图只能有一个有效，变化的时候需要重新设置一下
		}
		
	}
	function ShowYXLayer(bVisible){
	
		yxLayer.setVisibility(bVisible);
		luwang10_17.setVisibility(bVisible);
		luwang18_19.setVisibility(bVisible);
		yx_mark_10_17.setVisibility(bVisible);
		yx_mark_18_19.setVisibility(bVisible);
		if(bVisible){
			this.map.setBaseLayer(yxLayer); //底图只能有一个有效，变化的时候需要重新设置一下
		}
	}
	function ChangeMapType(nType) {
	   
		var anchor=document.getElementById("anchor"+nType); 
		anchor.className="selected";
		// 影像图
		if(nType==1)
		{
			document.getElementById("anchor0").className="unselected";
			ShowSLLayer(false);
			ShowYXLayer(true);
			 
		}
		else // 矢量地图
		{
			document.getElementById("anchor1").className="unselected";
			ShowYXLayer(false);
			ShowSLLayer(true);
			
		}
			
	}
	
    function onPopupClose(evt) {
           select.unselectAll();
       }
       
    function onFeatureSelect(event) {
        var feature = event.feature;
      
        var content = "<h2>"+feature.attributes.name + "</h2>" + feature.attributes.description;
        if (content.search("<script") != -1) {
            content = "Content contained Javascript! Escaped content below.<br>" + content.replace(/</g, "&lt;");
        }
        popup = new LocaMap.Popup.FramedCloud("bubble", 
                                 feature.geometry.getBounds().getCenterLonLat(),
                                 new LocaMap.Size(100,100),
                                 content,
                                 null, true, onPopupClose);
        feature.popup = popup;
        map.addPopup(popup);
    }
    
    function onFeatureUnselect(event) {
        var feature = event.feature;
        if(feature.popup) {
            map.removePopup(feature.popup);
            feature.popup.destroy();
            delete feature.popup;
        }
    }
    function removeAll(){ 
    	markerLayer.clearMarkers();
			// map.removeLayer(markerLayer);
		/*	var nSize=markerLayer.markers.length;
			for(i=nSize-1;i>= 0;i--)
			{	
				markerLayer.removeMarker(markerLayer.markers[i]);
			}
			for(i=0;i<nSize;i++)
			{	
				markerLayer.removeMarker(markerLayer.markers[i]);
				
			}*/
			vectorGeoLayer.removeAllFeatures();
	}
		
    //移除Popup   
       function onPopupMouseDown() {   
           markerLayer.map.removePopup(popup);   
           popup.destroy();   
           popup = null;   
       }
	//移除mark by id,marker1.id="marker1";可以赋值     
	function removeMarkById(id){
	  markerLayer.removeMarkerById(id);
	}
	//移除point by id,pointFeature["id"]=id;可以赋值 
	function removePointById(pointId){
				var nSize=vectorGeoLayer.features.length;
				for(i=0;i<nSize;i++)
				{	
					var curFeautre=vectorGeoLayer.features[i];
					 if(curFeautre["id"]==(pointId))
					 {
						vectorGeoLayer.removeFeatures([curFeautre]);
						break;
					 }
				}
			
	}
			
	
	function jumpToinit(lon,lat,zoom){
		map.setCenter(new LocaMap.LonLat(lon, lat), zoom);
	}
	function onMarkerClick(evt){
	  var oldPop=map.getPopupById("njpop");
		if(oldPop!=null)
		{
			map.removePopup(oldPop);   
			oldPop.destroy();
			delete oldPop;
		}
	}
	function onMarkerOver(evt) 
			 {
				var marker=evt.object;
				if(marker!=null &&  marker.attributes.description!=null)
				{
						var oldPop=map.getPopupById("njpop");
						if(oldPop!=null)
						{
							map.removePopup(oldPop);   
							oldPop.destroy();
							delete oldPop;
						}
					 var newPop= new LocaMap.Popup.FramedCloud("bubble", 
											 marker.lonlat,
											 new LocaMap.Size(600,680),
											 marker.attributes.description,
											 null, true, null);
					newPop.id="njpop";				
					newPop.autoSize=true;			  
					map.addPopup(newPop);
					map.setCenter(new LocaMap.LonLat(marker.lonlat.lon,marker.lonlat.lat));
				}	 
				 LocaMap.Event.stop(evt);
	       }
	       //dbclick zoom in 17
	function onMarkerDBlclickClick(evt){
	   var marker=evt.object;
	   if(marker!=null)
			{
			jumpToinit(marker.lonlat.lon,marker.lonlat.lat,17);
			}
	}
	
	//只添加title
	function addTitleNoMark(markerObj,host)
	{
	     addTitleAndMarker(markerObj,true,false,host);
	}
	
	function addMarker(markerObj,hasTitle,host)
	{
	     addTitleAndMarker(markerObj,hasTitle,true,host);
	}
	//添加点和图标  hasTitle 是否要角name，hasMark 是否要图标
	function addTitleAndMarker(markerObj,hasTitle,hasMark,host)//应包含如下属性markerObj:longitude,latitude,name,id,iconUrl,description
		{
			  
	         
			  // 先创建一个点，因为点对象可以加文字 
			   var iconSize=new LocaMap.Size(22,22);
			   var position =new LocaMap.LonLat(markerObj.longitude,markerObj.latitude);
			   if(hasTitle){//add point
				   var point = new LocaMap.Geometry.Point(markerObj.longitude,markerObj.latitude);
				    
			        var pointFeature = new LocaMap.Feature.Vector(point);
			        pointFeature.attributes = {
			            age: 20,
			            favColor: 'red',
			            align: "lb",
						 // positive value moves the label to the right
			            xOffset: 20,
			            // negative value moves the label down
			            yOffset: 20
			        };
 
			        if(!isNaN(markerObj.name)){
			           markerObj.name="";
			        };
					pointFeature.attributes.name=markerObj.name;
					pointFeature["id"]=markerObj.id;
					vectorGeoLayer.addFeatures([pointFeature]);
			   }
			   
			   if(hasMark){
			            //add mark
			   
						popupClass = LocaMap.Class(LocaMap.Popup.FramedCloud, { 'autoSize': true });
						var feature = new LocaMap.Feature(vectorLayer, position); 
						feature.closeBox = true;
						feature.popupClass = popupClass;
						feature.data.popupContentHTML = "<div style='background-color:white;width:200;height:200'><a href='javascript:void();'  rel='nofollow'>"+markerObj.name + "</a><br/>" + markerObj.description + "</div>";
						feature.data.overflow = "auto";
					 
						 var offset = new LocaMap.Pixel(-(iconSize.w/3), -iconSize.h);
						 var icon = new LocaMap.Icon("http://"+host+markerObj.iconUrl,iconSize,offset);
						 feature.data.icon = icon;
						 
						 var marker = feature.createMarker();
						 marker.id=markerObj.id;
						 marker.name=markerObj.name;
						 marker.attributes = {
							description:markerObj.description
			             };
					
						
						marker.events.register("click", feature, onMarkerOver);
						//marker.events.register("click", feature, onMarkerClick);
						marker.events.register("dblclick", feature, onMarkerDBlclickClick);
						markerLayer.addMarker(marker);
				 }
			 }
			 
			 
	//添加环卫车辆   hasTitle 是否要角name,limitSpeed 限速数,isShowRunPath 是否显示轨迹  true 显示 false 不显示 
	function addDynamicCar(markerObj,hasTitle,limitSpeed,host,isShowRunPath)//应包含如下属性markerObj:vehiclenum,longitude,latitude,name,id,iconUrl,description
		{
			 dynamicMarker=markerLayer.getMarkerById(markerObj.vehiclenum);
	         if(dynamicMarker==null){
	         	var size = new LocaMap.Size(32,32);
				var offset = new LocaMap.Pixel(-(size.w/2.0), -(size.h/2.0));
				var icon = new LocaMap.Icon("http://"+host+markerObj.iconUrl,size,offset);
				dynamicMarker=new LocaMap.Marker(new LocaMap.LonLat(markerObj.longitude,markerObj.latitude),icon);
				dynamicMarker.id=markerObj.vehiclenum;
				dynamicMarker.attributes = {
							description:markerObj.description
			             };
				//feature
		/*		var position =new LocaMap.LonLat(markerObj.longitude,markerObj.latitude);
				popupClass = LocaMap.Class(LocaMap.Popup.FramedCloud, { 'autoSize': true });
				var feature = new LocaMap.Feature(vectorLayer, position); 
				feature.closeBox = true;
				feature.popupClass = popupClass;
				feature.data.popupContentHTML = "<div style='background-color:white;width:200;height:200'><a href='javascript:void();'  rel='nofollow'>"+markerObj.vehiclenum + "</a><br/>" + markerObj.description + "</div>";
				feature.data.overflow = "auto";
			 
				 var offset = new LocaMap.Pixel(-(iconSize.w/3), -iconSize.h);
				 var icon = new LocaMap.Icon("http://"+host+markerObj.iconUrl,iconSize,offset);
				 feature.data.icon = icon;
				 var marker = feature.createMarker();
						 marker.id=markerObj.vehiclenum;
						 marker.name=markerObj.vehiclenum;
						 marker.attributes = {
							description:markerObj.description
			             };
				 
			*/	
			             
			             
			    dynamicMarker.events.register("click", dynamicMarker, onMarkerOver);
			 
				markerLayer.addMarker(dynamicMarker);
				 
				 }else{
				    var beforLon=dynamicMarker.lonlat.lon;
	                var beforLat=dynamicMarker.lonlat.lat;
  
				 	dynamicMarker.lonlat=new LocaMap.LonLat(markerObj.longitude,markerObj.latitude);
				 	dynamicMarker.attributes = {
							description:markerObj.description
			             };
				 //	carMkLayer.attributes = {
				//				description:markerObj.description
				 //            };
				//	alert(beforLon+";"+beforLat+";"+markerObj.longitude+";"+markerObj.latitude+";"+markerObj.currentspeed+";"+limitSpeed+";"+markerObj.description+";"+markerObj.vehiclenum);
				if(isShowRunPath){
				gpsReplay(beforLon,beforLat,markerObj.longitude,markerObj.latitude,markerObj.currentspeed,limitSpeed,markerObj.description,markerObj.vehiclenum,markerObj.createDate);
				}
				 
				
				
					markerLayer.redraw();//alert("not null:"+markerLayer.getMarkerById(markerObj.vehiclenum));
					
				 }
				 
				 
			 }
	//画车辆轨迹		 

	function gpsReplay(beforLon,beforLat,Lon,Lat,currentspeed,limitSpeed,description,vehiclenum,createDate){
	    
	    if(!(beforLon==Lon && beforLat==Lat)){
	    
	       var lineFeature= vectorGeoLayer.getFeatureById(vehiclenum);
	       
	       if(lineFeature==null || currentspeed>limitSpeed){
	       
			    var linePointList = [];
			    var oldPoint = new LocaMap.Geometry.Point(beforLon,beforLat);
			    var newPoint = new LocaMap.Geometry.Point(Lon,Lat);            
			    linePointList.push(oldPoint);
			    linePointList.push(newPoint);
			    
			    var linearString = new LocaMap.Geometry.LineString(linePointList);
			    lineFeature = new LocaMap.Feature.Vector(linearString);
			            lineFeature.attributes = {
			                name: vehiclenum,
			                age: 21,
			                favColor: 'black',
			                align: 'lb',
							description:description
			            };
			    if(currentspeed>limitSpeed){
			     	var randomNum=getRandomNum();
			    	lineFeature["id"]=vehiclenum+""+randomNum;
			    }else{
			    	lineFeature["id"]=vehiclenum;
			    }
			    
					var lineStyle=new LocaMap.Style();
					if(currentspeed<=limitSpeed){
						lineStyle.strokeColor='blue';
					}else{
						lineStyle.strokeColor='red';
					}
					if(currentspeed>limitSpeed){
					lineStyle.strokeOpacity=1;
					}else{
					lineStyle.strokeOpacity=0.5;
					}
					
					//lineStyle.strokeDashstyle="dash";
					lineStyle.strokeWidth=6;
					lineStyle.strokeLinecap= "round"; // 拐角处是否圆角
					//lineStyle.zIndex="2000";error
					if(currentspeed>limitSpeed){
						 // 线标注的风格
						lineStyle.label=currentspeed+"km/h  "+createDate.hours+":"+createDate.minutes+":"+createDate.seconds;
			            lineStyle.fontColor="red";
			            lineStyle.fontSize="12px";
						lineStyle.fontFamily= "Courier New, monospace";
						lineStyle.fontWeight="bold";
						lineStyle.labelAlign = "cc"; //“t”=top, “m”=middle, “b”=bottom. 例如 values: “lt”, “cm”, “rb”.  默认 is “cm”.
						lineStyle.labelXOffset=10;
						lineStyle.labelYOffset=0;
						lineStyle.labelOutlineColor="white";
						lineStyle.labelOutlineWidth=2; //0 表示无外框
						
					}
							
				 	lineFeature.style=lineStyle;
					vectorGeoLayer.addFeatures([lineFeature]);
					
					// 设置弹出气泡
					select = new LocaMap.Control.SelectFeature(vectorGeoLayer);
	            
					vectorLayer.events.on({
						"featureselected": onFeatureSelect,
						"featureunselected": onFeatureUnselect
					});
	
					map.addControl(select);
					select.activate();  
				
				
				}//else{
				lineFeature2= vectorGeoLayer.getFeatureById(vehiclenum);
				if(lineFeature2!=null || currentspeed>limitSpeed){
			   // addline
			  	  var linearString=lineFeature2.geometry;
				  
				  var pointCount=linearString.getPointCount();
				  
				  // 获取最后一个点
				  var tailPoint  = linearString.getPointByIndex(pointCount-1);
				  
				  var newPoint = new LocaMap.Geometry.Point(Lon,Lat);
																 
				// 添加到末尾											 
				  linearString.addPoint(newPoint,pointCount);// 注意这里是在pointcount处添加
				  vectorGeoLayer.redraw();
			  
		     }	
					 
		}
	}
	
	/*
	//区分是否超速轨迹,无优化。
	function gpsLimitSpeedReplay(beforLon,beforLat,Lon,Lat,currentspeed,limitSpeed,description,vehiclenum){
	    
	    if(beforLon!=Lon && beforLat!=Lat){
	     
	       
			    var linePointList = [];
			    var oldPoint = new LocaMap.Geometry.Point(beforLon,beforLat);
			    var newPoint = new LocaMap.Geometry.Point(Lon,Lat);            
			    linePointList.push(oldPoint);
			    linePointList.push(newPoint);
			    
			    var linearString = new LocaMap.Geometry.LineString(linePointList);
			    lineFeature = new LocaMap.Feature.Vector(linearString);
			            lineFeature.attributes = {
			                name: "",
			                age: 21,
			                favColor: 'black',
			                align: 'lb',
							description:description
			            };
		  
					
					lineFeature["id"]=vehiclenum;
					var lineStyle=new LocaMap.Style();
					if(currentspeed<=limitSpeed){
						lineStyle.strokeColor='blue';
					}else{
						lineStyle.strokeColor='red';
					}
					lineStyle.strokeOpacity=0.5;
					//lineStyle.strokeDashstyle="dash";
					lineStyle.strokeWidth=6;
					lineStyle.strokeLinecap= "round"; // 拐角处是否圆角
			*/		 
					 // 线标注的风格
			/*		lineStyle.label=currentspeed;
		            lineStyle.fontColor="yellow";
		            lineStyle.fontSize="12px";
					lineStyle.fontFamily= "Courier New, monospace";
					lineStyle.fontWeight="bold";
					lineStyle.labelAlign = "lb"; //“t”=top, “m”=middle, “b”=bottom. 例如 values: “lt”, “cm”, “rb”.  默认 is “cm”.
					lineStyle.labelXOffset=10;
					lineStyle.labelYOffset=0;
					lineStyle.labelOutlineColor="white";
					lineStyle.labelOutlineWidth=0; // 表示无外框
				*/			
							
/*				 	lineFeature.style=lineStyle;
					vectorGeoLayer.addFeatures([lineFeature]);
					
					 
		}
	}*/
	
function getRandomNum()
{  var Max=9999,Min=1;
	var Range = Max - Min;
	var Rand = Math.random();   
	return(Min + Math.round(Rand * Range));   
}