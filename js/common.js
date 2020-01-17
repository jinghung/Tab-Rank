document.write(unescape("%3Cscript src='js/useragent.js' type='text/javascript'%3E%3C/script%3E")); //判斷裝置JS
document.write(unescape("%3Cscript src='js/wresize.js' type='text/javascript'%3E%3C/script%3E")); //解決多次執行resieze


//禁止滾動條滾動
function unScroll() {
    var top = $(document).scrollTop();
    $(document).on('scroll.unable', function (e) {
        $(document).scrollTop(top);
    })
}
//移除禁止滾動條滾動
function removeUnScroll() {
    $(document).unbind("scroll.unable");
}


//參數獲取
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return decodeURIComponent(r[2]);
    }
    return null;
}

//獲取伺服器時間
function getServerDate(){
    return new Date($.ajax({async: false}).getResponseHeader("Date"));
}
function getNowDate() {
    var getNow = getServerDate();
    var getY = getNow.getFullYear();
    var getM = (getNow.getMonth() + 1 < 10 ? '0' : '') + (getNow.getMonth() + 1);
    var getD = (getNow.getDate() < 10 ? '0' : '') + getNow.getDate();
    var getH = (getNow.getHours() < 10 ? '0' : '') + getNow.getHours();
    var getAll = getY + getM + getD + getH;
    return getAll;
}

$(function(){
    $('.show-Web,.show-App').hide();
    if (checkserAgent()) {
        $('#logo').css({
            'background': 'url(../images/global/logo_fb.png)',
            'background-size': '100%'
        });
        $('#logo').children().remove('a');
        $('#fb').hide();
        $('.show-App').show();
    } else {
        $('#fb').show();
        $('.show-Web').show();
        $('.pop-close').addClass('show-Web');
    }
})

