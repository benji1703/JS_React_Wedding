let langs = ['en','fr','he'];
let langCode;

let translate = function (jsdata)
{
    $("[tkey]").each (function ()
    {
        let strTr = jsdata [$(this).attr ('tkey')];
        $(this).html (strTr);
    });
};

function changeToHeb() {
    localStorage.lang = "he";
    location.reload();
}
function changeToEn() {
    localStorage.lang = "en";
    location.reload();
}

function changeToFr() {
    localStorage.lang = "fr";
    location.reload();
}

langCode = localStorage.getItem('lang') || navigator.language.substr (0, 2);

if (langs.includes(langCode)) {
    $.getJSON('lang/' + langCode + '.json', translate);
}
else {
    $.getJSON('lang/he.json', translate);
}


