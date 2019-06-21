/*----------------------------------------
* Copyright (c) 2017 菠萝工作室
* 网站：https://609a.com:3000
* Date: 2017-5-18
* Creater:Cqy
----------------------------------------*/

/*------通用的地图控件库 by:cqy 2017-12-21-----*/
/*------集中处理------*/
// 复杂的自定义覆盖物
function ComplexCustomOverlay(point, text){
    this._point = point;
    this._text = text;
    //this._overText = mouseoverText;
}
ComplexCustomOverlay.prototype = new BMap.Overlay();
ComplexCustomOverlay.prototype.addContextMenu=function(markerMenu){
  //this.addContextMenu(markerMenu);
}
ComplexCustomOverlay.prototype.initialize = function(map){
    this._map = map;
    var div = this._div = document.createElement("div");
    div.style.position = "absolute";
    div.style.zIndex = BMap.Overlay.getZIndex(this._point.lat);
    div.style.backgroundColor = "#EE5D5B";
    div.style.border = "1px solid #BC3B3A";
    div.style.color = "white";
    div.style.height = "24px";
    div.style.padding = "2px";
    div.style.lineHeight = "18px";
    div.style.whiteSpace = "nowrap";
    div.style.MozUserSelect = "none";
    div.style.fontSize = "12px";
    var span = this._span = document.createElement("span");
    span.style.minWidth="25px";
    span.style.display="block";
    div.appendChild(span);
    span.appendChild(document.createTextNode(this._text));
    var that = this;

    var arrow = this._arrow = document.createElement("div");
    arrow.style.background = "url(http://map.baidu.com/fwmap/upload/r/map/fwmap/static/house/images/label.png) no-repeat";
    arrow.style.position = "absolute";
    arrow.style.width = "11px";
    arrow.style.height = "10px";
    arrow.style.top = "22px";
    arrow.style.left = "10px";
    arrow.style.overflow = "hidden";
    div.appendChild(arrow);
    map.getPanes().labelPane.appendChild(div);
    return div;
}
ComplexCustomOverlay.prototype.draw = function(){
    var map = this._map;
    var pixel = map.pointToOverlayPixel(this._point);
    this._div.style.left = pixel.x - parseInt(this._arrow.style.left) + "px";
    this._div.style.top  = pixel.y - 30 + "px";
}

var ShowMap=function(settings){
    var defaultSettings = {
        MenuItem:[],
        isedit:true,
        click:function(e){},
        rightclick:function(e){},
        editMarker:function(e,ee,marker){

        },
        removeMarker:function(e,ee,marker){

        }
    }
    this.options = $.extend(true, defaultSettings, settings);
    //加载百度地图
    var map = new BMap.Map("allmap",{enableMapClick:false});
    map.addControl(new BMap.NavigationControl());
    var point = new BMap.Point(116.331398,39.897445);// 初始化地图,设置中心点坐标和地图级别
    //添加地图类型控件
    map.addControl(new BMap.MapTypeControl({
        mapTypes:[
            BMAP_NORMAL_MAP,
            BMAP_HYBRID_MAP
        ]
    }));
    map.enableScrollWheelZoom(true);
    //map.centerAndZoom("南京",11);
    map.disableDoubleClickZoom();
    this.CommonHander.sm=this;
    this.map=this.CommonHander.map=map;
    //this.init();
}



ShowMap.prototype.CommonHander={
    getBoundary:function(name,level){
        var f=this;
        var map=this.sm.map;
        f.blist=[];
        map.clearOverlays();//清除地图覆盖物
        var bdary = new BMap.Boundary();
        bdary.get(name, function(rs){       //获取行政区域
            var count = rs.boundaries.length; //行政区域的点有多少个
            if (count === 0) {
                alert('未能获取当前输入行政区域');
                return ;
            }
            var pointArray = [];
            for (var i = 0; i < count; i++) {
                var ply1 = new BMap.Polygon(rs.boundaries[i], {strokeWeight: 20,fillOpacity:"0",strokeColor: "#9ca39c",fillColor:"000"}); //建立多边形覆盖物
                var ply2 = new BMap.Polygon(rs.boundaries[i], {strokeWeight: 10,fillOpacity:"0",strokeColor: "#ddd",fillColor:"000"}); 
                map.addOverlay(ply1);  //添加覆盖物
                map.addOverlay(ply2); 
                f.setArea(ply1);
                pointArray = pointArray.concat(ply1.getPath());
                f.blist.push({ points: rs.boundaries[i], name: name });
            }
            f.drawArea();
            if(typeof(level)=="undefined")
                map.setViewport(pointArray); //调整视野
            else
                map.centerAndZoom(name,level);
        });
    },
    getCustomArea:function(x,y,level){
        this.sm.map.centerAndZoom(new BMap.Point(x,y),level);
        this.setArea(this.sm.map);
    },
    blist:[],
    drawArea:function(){
        var map=this.sm.map;
        var blist=this.blist;
        //包含所有区域的点数组
        var pointArray = [];
        /*画遮蔽层的相关方法
         *思路: 首先在中国地图最外画一圈，圈住理论上所有的中国领土，然后再将每个闭合区域合并进来，并全部连到西北角。
         *      这样就做出了一个经过多次西北角的闭合多边形*/
        //定义中国东南西北端点，作为第一层
        var pNW = { lat: 59.0, lng: 73.0 }
        var pNE = { lat: 59.0, lng: 136.0 }
        var pSE = { lat: 3.0, lng: 136.0 }
        var pSW = { lat: 3.0, lng: 73.0 }
        //向数组中添加一次闭合多边形，并将西北角再加一次作为之后画闭合区域的起点
        var pArray = [];
        pArray.push(pNW);
        pArray.push(pSW);
        pArray.push(pSE);
        pArray.push(pNE);
        pArray.push(pNW);
        //循环添加各闭合区域
        for (var i = 0; i < blist.length; i++) {
            //添加多边形层并显示
            //建立多边形覆盖物
            var ply = new BMap.Polygon(blist[i].points);
            //将点增加到视野范围内
            var path = ply.getPath();
            //将闭合区域加到遮蔽层上，每次添加完后要再加一次西北角作为下次添加的起点和最后一次的终点
            pArray = pArray.concat(path);
            pArray.push(pArray[0]);
        }
        //添加遮蔽层
        var plyall = new BMap.Polygon(pArray, { strokeOpacity: 0.0000001, strokeColor: "#000000", strokeWeight: 0.00001, fillColor: "#fff", fillOpacity: 1 }); //建立多边形覆盖物
        map.addOverlay(plyall);
    },
    refreshDot:function(data){
        var map=this.sm.map;
        var editMarker = this.sm.options.editMarker;
        var removeMarker = this.sm.options.removeMarker;
        var isedit=this.sm.options.isedit;
        $.each(data,function(n,i){
            var myIcon = new BMap.Icon("http://192.168.0.9:9003/Img/Ips/" + i.IPImg, new BMap.Size(25, 25), {
                size: new BMap.Size(25, 25),
                imageOffset:new BMap.Size(0, 0)
            });
            var opts = {
                width: 150,     // 信息窗口宽度
                height: 50,     // 信息窗口高度
                enableMessage: true//设置允许信息窗发送短息
            };
            var iwId="mywindow"+ i.IPId;
            var marker = new BMap.Marker(new BMap.Point(i.X, i.Y), { icon: myIcon });
            marker.iwId=iwId;
            var text = "<div id='"+iwId+"'><h4>" + i.IPName + "</h4></div>";
            if (i.IPType == 1) {
                opts = {
                    width: 550,     // 信息窗口宽度
                    height: 450,     // 信息窗口高度
                    enableMessage: true//设置允许信息窗发送短息
                };
                text = "<div id='"+iwId+"'><h4>" + i.IPName + "</h4>";
                text += '<video width="100%" height="270" controls autoplay>';
                text += '<source src="http://192.168.0.9:9003/Video/1.mp4"  type="video/mp4">';
                text += '您的浏览器不支持 HTML5 video 标签。';
                text += '</video></div>';
                
            }
            var infoWindow = new BMap.InfoWindow(text, opts);  // 创建信息窗口对象
            map.addOverlay(marker);

            marker.addEventListener("click", function () {
                this.openInfoWindow(infoWindow);
                map.disableScrollWheelZoom();
            });
            marker.addEventListener("infowindowclose", function (e) {
                map.enableScrollWheelZoom();
                var myVideo = $("#"+this.iwId).find("video");
                myVideo[0].currentTime = 0;    //属性设置或返回音频/视频播放的当前位置（以秒计）。当设置该属性时，播放会跳跃到指定的位置。
                myVideo[0].pause();
            });
            if(isedit) {
                //右键菜单
                var markerMenu = new BMap.ContextMenu();
                marker.id = i.IPId;
                markerMenu.addItem(new BMap.MenuItem('编辑', editMarker.bind(marker)));
                markerMenu.addItem(new BMap.MenuItem('删除', removeMarker.bind(marker)));
                marker.addContextMenu(markerMenu);
            }

        });
    },
    setArea:function(ply){
       /* ply.addEventListener("click",function(e){
        var myCompOverlay = new ComplexCustomOverlay(new BMap.Point(e.point.lng,e.point.lat), "银湖海岸城","434");
        map.addOverlay(myCompOverlay);
        /alert(e.point.lng+" "+e.point.lat);
        });*/
        var f=this;
        ply.addEventListener("click", function(e){
            f.sm.options.click(e);
        });
        ply.addEventListener("rightclick", function(e){
            f.sm.options.rightclick(e);
        });
        var menu = new BMap.ContextMenu();
        var txtMenuItem = this.sm.options.MenuItem;
        for(var i=0; i < txtMenuItem.length; i++){
            menu.addItem(new BMap.MenuItem(txtMenuItem[i].text,txtMenuItem[i].callback,100));
        }
        ply.addContextMenu(menu);

    }
}
