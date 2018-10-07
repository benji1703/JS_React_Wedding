let langs = ['en','fr','he'];
let langCode = '';
let langJS = null;


var translate = function (jsdata)
{
    $("[tkey]").each (function (index)
    {
        var strTr = jsdata [$(this).attr ('tkey')];
        $(this).html (strTr);
    });
}


langCode = navigator.language.substr (0, 2);

console.log(langCode);

if (langs.includes(langCode)) {
    $.getJSON('lang/' + langCode + '.json', translate);
    console.log("New");
}
else {
    $.getJSON('lang/en.json', translate);
    console.log("Bla");
}


