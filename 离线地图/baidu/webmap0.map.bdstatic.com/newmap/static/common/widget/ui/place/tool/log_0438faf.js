define("common:widget/ui/place/tool/log.js",function(a,d,e){var o=function(){},t=["Page"],n=["List","Iw"];o.addDetailLog=function(a){var d;T.array.indexOf(t,a.des)>-1&&T.array.indexOf(n,a.from)>-1&&(d="mapIndexPg."+a.from.toLowerCase()+"Bk."+T.string.toCamelCase("place-"+a.des.toLowerCase()+"-lnk"),addStat(d,"click",{da_trd:a.trd,uid:a.uid}))},o.addPanoLog=function(a){var d="mapIndexPg."+a.from.toLowerCase()+"Bk."+T.string.toCamelCase("placePanoBtn");addStat(d,"click",{da_trd:a.trd,uid:a.uid})},e.exports=o});