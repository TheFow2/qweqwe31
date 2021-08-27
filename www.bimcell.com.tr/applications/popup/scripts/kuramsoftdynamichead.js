$.fn.kuramsoft_Applications_Popup_AddJsOrCss = function (settings) {

    var defaultsettings = {
        IsCss: true,
        FileUrl: '',
    };

    if (file != '') {

    }



    var ayar = $.extend(defaultsettings, settings);

    return this.each(function () {
        $(this).css({
            "background-color": settings.arkaplanrengi,
            "width": settings.genislik,
            "height": settings.yukseklik,
            "border": settings.borderim
        });

    });
}

function kuramsoft_Applications_Popup_PageInIframe() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}


$(document).ready(function () {
    kuramsoft_Applications_Popup_PageInIframe();
});

function kuramsoft_Applications_Popup_PageInIframe() {
    try {
        if ( window.self !== window.top)
        {
            $('.HidPageIsInIFrame').val('1');
            return true;
        }
        else
        {
            $('.HidPageIsInIFrame').val('0');
            return false;
        }
    } catch (e) {
        $('.HidPageIsInIFrame').val('0');
        return false;
    }
}



function kuramsoft_functions_AddJsFile(fileurl) {
    var aranan = 'script[src=\'' + fileurl + '\'' + ']';
    if ($(aranan).length == 0) {
        $('head').append('<script src="' + fileurl + '" type="text/javascript" />');
    }
}


function kuramsoft_functions_AddCssFile(fileurl) {
    var aranan = 'link[href=\'' + fileurl + '\'' + ']';
    if ($(aranan).length == 0) {
        $('head').append('<link rel="stylesheet" href="' + fileurl + '" type="text/css" />');
    }
}
function kuramsoft_functions_RemoveJsFile(fileurl) {
    var aranan = 'script[src=\'' + fileurl + '\'' + ']';
    if ($(aranan).length > 0) {
        $(aranan).remove();
    }
}
function kuramsoft_functions_RemoveCssFile(fileurl) {
    var aranan = 'link[href=\'' + fileurl + '\'' + ']';
    if ($(aranan).length > 0) {
        $(aranan).remove();
    }
}




function kuramsoft_Applications_Popup_ShowFrame(fileurl, title, ispage) {

    kuramsoft_functions_RemoveJsFile(window.location.origin + '/applications/popup/scripts/main.js');
    kuramsoft_functions_AddCssFile(window.location.origin + '/applications/popup/css/style.css');

    var ust = '<div class="kuramsoft-draggable-panel minimize-p"><div class="kuramsoft-editing-header"><h1><i class="kuramsoft-header-icon edit"></i>' + title + '</h1><div class="kuramsoft-header-actions"><a href="#" class="kuramsoft-minimize"><i class="kuramsoft-header-icon minimize"></i></a><a href="#" class="kuramsoft-close"><i class="kuramsoft-header-icon close"></i></a></div></div><div class="kuramsoft-draggable-content minimize-c">';
    var alt = '</div></div>';

    if (ispage) {
        var eklenecek = '<iframe style="width:100%;height:400px;" src="' + fileurl + '"></iframe>';
        ust = ust + eklenecek + alt;
    }
    else {
        var page = fileurl;
        var eklenecek = '<iframe style="width:100%;height:400px;" src="' + page + '"></iframe>';
        ust = ust + eklenecek + alt;
    }

    $('body').append(ust);
    kuramsoft_functions_AddJsFile(window.location.origin + '/applications/popup/scripts/main.js');
}


