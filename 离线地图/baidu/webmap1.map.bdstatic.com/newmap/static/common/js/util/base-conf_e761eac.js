!function(t){"undefined"==typeof console&&(t.console={},t.console.log=function(){}),t.onerror=function(){return!1},t.mapDebug={status:0,openDebug:function(){this.status||(this.status=1)},getParam:function(n){var e="",o=n.split("&")[0];return this.status&&"s"==o&&(e="&debug=1",t.mapDebugObjWxp&&(e+=mapDebugObjWxp.getConfigStr())),e}},t.temp={}}(window);