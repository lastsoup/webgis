define("common:widget/pano/Transition/TileFinder.js",function(){var t={tiles:{},init:function(){var t,n,e,i,r,a=document.getElementById("platform").getElementsByTagName("img"),o={};for(i=0,r=a.length;r>i;i++){var s=(a[i].src||"").match(/x=(\d+).+y=(\d+).+z=(\d+)/);s&&4==s.length&&(t=s[1],n=s[2],e=s[3],o[t+"_"+n+"_"+e]=a[i].src)}this.tiles=o},find:function(t,n,e){var i=t+"_"+n+"_"+e;return this.tiles[i]}};return t});