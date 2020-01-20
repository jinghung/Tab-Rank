(function($) {
    $.fn.tabs = function(i) {
        var n = $.extend({}, {
            tabsName: "",//名稱
            tabsToShow: 2,//頁籤總數
            tabsDefault: 1,//預設顯示
            tabsImgUrl: "images/btn0",//按鈕圖片路徑檔名
            tabsImgType: "png", //按鈕圖片副檔名
            tabstype: 1,//頁籤類別:1-圖片
            tabparameter: "tabNum",//切換分頁參數
            tabsPageSize: 720,//APP尺寸
            tabsIsAppImg: false,//是否平台按鈕圖不一樣
            tabsAppImgUrl: "images/app_btn0", //APP按鈕路徑檔名
            tabNonShow: [] //禁能
        }, i );

        function getUrlParam(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); 
            var r = window.location.search.substr(1).match(reg); 
            if(r != null){
                return decodeURIComponent(r[2]);
            }
            return null;
        }

        this.each(function() {

            var platSize = $(window).width();
            if (n.tabsIsAppImg){
                if (platSize <= n.tabsPageSize) {
                    n.tabsImgUrl = n.tabsAppImgUrl
                }
            }
            
            var getNum = getUrlParam(n.tabparameter);
            var _tabNum = !getNum ? n.tabsDefault: (getNum > n.tabsToShow ? '1': getNum);

            for (var index = 1; index <= n.tabsToShow; index++) {
                if ($(this).children('li').length > 0) {
                    $(this).find('li:nth-child(' + index + ')').find('a').attr('id', 'tab' + n.tabsName + 'Click' + index);
                } else {
                    $(this).find('a:nth-child(' + index + ')').attr('id', 'tab' + n.tabsName + 'Click' + index);
                };
                (function(num) {
                    $('#tab' + n.tabsName + 'Click'+ num).click(function() {
                        if ($("#Tab" + n.tabsName + "_Content" + num).length > 0 && n.tabNonShow.indexOf(num) == -1) {
                            tabchang(num);
                        }
                    })
                })(index)  
            }
            
            if ($("#Tab" + n.tabsName + "_Content" + _tabNum).length > 0 && n.tabNonShow.indexOf(parseInt(_tabNum)) == -1) {
                tabchang(_tabNum);
            }else {
                for (var x = 1; x <= n.tabsToShow; x++) {
                    if (n.tabNonShow.indexOf(x) == -1){
                        tabchang(x);
                        break;
                    }else {
                        var imgchage = "#tab" + n.tabsName + "Click" + x + " img";
                        $("#Tab" + n.tabsName + "_Content" + x).css({ 'display': 'none' });
                        $(imgchage).addClass('l-nolink');
                        $(imgchage).attr('src', n.tabsImgUrl + x + '_n.' + n.tabsImgType);
                    };
                }
                
            }

            function tabchang(idx) {
                switch (n.tabstype) { 
                    case 1:
                        for (t = 1; t <= n.tabsToShow; t++) {
                            var imgchage = "#tab" + n.tabsName + "Click" + t + " img";
                            if (n.tabNonShow.indexOf(t) == -1) {
                                if (idx == t) {
                                    $("#Tab" + n.tabsName + "_Content" + t).css({ 'display': '' });
                                    $(imgchage).attr('src', n.tabsImgUrl + t + '_2.' + n.tabsImgType);
                                    $(imgchage).attr('onmouseover', '');
                                    $(imgchage).attr('onmousedown', '');
                                    $(imgchage).attr('onmouseout', '');
                                    
                                    var urlSearch = location.search.substr(1).split('&');
                                    if (urlSearch[0] == ''){
                                        urlSearch.splice(0, 1);
                                    };
                                    for (urli = 0; urli < urlSearch.length; urli++) {
                                        if (urlSearch[urli].match(n.tabparameter) != null) {
                                        urlSearch.splice(urli, 1);
                                        }
                                    }
                                    var url = location.pathname + '?' + n.tabparameter + '=' + idx;
                                    if (urlSearch.length > 0) {
                                        for (i = 0; i < urlSearch.length; i++) {
                                            url = url + '&' + urlSearch[i];
                                        }
                                    }
                                    history.pushState({ url: url, title: document.title }, document.title, url);
                                } else {
                                    $("#Tab" + n.tabsName + "_Content" + t).css({ 'display': 'none' });
                                    $(imgchage).attr('src', n.tabsImgUrl + t + '.' + n.tabsImgType);
                                    $(imgchage).attr('onmouseover', 'this.src="' + n.tabsImgUrl + t + '_2.' + n.tabsImgType + '"');
                                    $(imgchage).attr('onmousedown', 'this.src="' + n.tabsImgUrl + t + '_2.' + n.tabsImgType + '"');
                                    $(imgchage).attr('onmouseout', 'this.src="' + n.tabsImgUrl + t + '.' + n.tabsImgType + '"');
                                }
                            }else {
                                $("#Tab" + n.tabsName + "_Content" + t).css({ 'display': 'none' });
                                $(imgchage).addClass('l-nolink');
                                $(imgchage).attr('src', n.tabsImgUrl + t + '_n.' + n.tabsImgType);
                            }
                        }
                        break;
                    case 2:
                        break;
                }
            }
            
        });    
        return this;      
    }
})(jQuery);
