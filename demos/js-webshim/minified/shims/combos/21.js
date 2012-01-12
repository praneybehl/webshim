jQuery.webshims.register("form-message",function(a,b,m,g,k,c){var d=b.validityMessages,m=c.overrideMessages||c.customMessages?["customValidationMessage"]:[];d.en=d.en||d["en-US"]||{typeMismatch:{email:"Please enter an email address.",url:"Please enter a URL.",number:"Please enter a number.",date:"Please enter a date.",time:"Please enter a time.",range:"Invalid input.","datetime-local":"Please enter a datetime."},rangeUnderflow:{defaultMessage:"Value must be greater than or equal to {%min}."},rangeOverflow:{defaultMessage:"Value must be less than or equal to {%max}."},
stepMismatch:"Invalid input.",tooLong:"Please enter at most {%maxlength} character(s). You entered {%valueLen}.",patternMismatch:"Invalid input. {%title}",valueMissing:{defaultMessage:"Please fill out this field.",checkbox:"Please check this box if you want to proceed."}};["select","radio"].forEach(function(a){d.en.valueMissing[a]="Please select an option."});["date","time","datetime-local"].forEach(function(a){d.en.rangeUnderflow[a]="Value must be at or after {%min}."});["date","time","datetime-local"].forEach(function(a){d.en.rangeOverflow[a]=
"Value must be at or before {%max}."});d["en-US"]=d["en-US"]||d.en;d[""]=d[""]||d["en-US"];d.de=d.de||{typeMismatch:{email:"{%value} ist keine zul\u00e4ssige E-Mail-Adresse",url:"{%value} ist keine zul\u00e4ssige Webadresse",number:"{%value} ist keine Nummer!",date:"{%value} ist kein Datum",time:"{%value} ist keine Uhrzeit",range:"{%value} ist keine Nummer!","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:{defaultMessage:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen."},
rangeOverflow:{defaultMessage:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen."},stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Zeichen eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat f\u00fcr dieses Eingabefeld ein falsches Format! {%title}",valueMissing:{defaultMessage:"Bitte geben Sie einen Wert ein",
checkbox:"Bitte aktivieren Sie das K\u00e4stchen"}};["select","radio"].forEach(function(a){d.de.valueMissing[a]="Bitte w\u00e4hlen Sie eine Option aus"});["date","time","datetime-local"].forEach(function(a){d.de.rangeUnderflow[a]="{%value} ist zu fr\u00fch. {%min} ist die fr\u00fcheste Zeit, die Sie benutzen k\u00f6nnen."});["date","time","datetime-local"].forEach(function(a){d.de.rangeOverflow[a]="{%value} ist zu sp\u00e4t. {%max} ist die sp\u00e4teste Zeit, die Sie benutzen k\u00f6nnen."});var e=
d[""];b.createValidationMessage=function(b,d){var c=e[d];c&&"string"!==typeof c&&(c=c[a.prop(b,"type")]||c[(b.nodeName||"").toLowerCase()]||c.defaultMessage);c&&"value,min,max,title,maxlength,label".split(",").forEach(function(d){if(-1!==c.indexOf("{%"+d)){var e=("label"==d?a.trim(a('label[for="'+b.id+'"]',b.form).text()).replace(/\*$|:$/,""):a.attr(b,d))||"";c=c.replace("{%"+d+"}",e);"value"==d&&(c=c.replace("{%valueLen}",e.length))}});return c||""};(b.bugs.validationMessage||!Modernizr.formvalidation)&&
m.push("validationMessage");b.activeLang({langObj:d,module:"form-core",callback:function(a){e=a}});Modernizr.input.list&&!(a("<datalist><select><option></option></select></datalist>").prop("options")||[]).length&&b.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var b=this.options||[];if(!b.length){var c=a("select",this);if(c[0]&&c[0].options&&c[0].options.length)b=c[0].options}return b}}});m.forEach(function(c){b.defineNodeNamesProperty(["fieldset","output","button"],
c,{prop:{value:"",writeable:!1}});["input","select","textarea"].forEach(function(d){var e=b.defineNodeNameProperty(d,c,{prop:{get:function(){var c=this,d="";if(!a.prop(c,"willValidate"))return d;var g=a.prop(c,"validity")||{valid:1};if(g.valid||(d=b.getContentValidationMessage(c,g)))return d;if(g.customError&&c.nodeName&&(d=Modernizr.formvalidation&&e.prop._supget?e.prop._supget.call(c):b.data(c,"customvalidationMessage")))return d;a.each(g,function(a,f){if("valid"!=a&&f&&(d=b.createValidationMessage(c,
a)))return!1});return d||""},writeable:!1}})})})});
Modernizr.formvalidation||jQuery.webshims.register("form-extend",function(a,b,m,g){b.inputTypes=b.inputTypes||{};var k=b.cfg.forms,c,d=function(a){return"number"==typeof a||a&&a==1*a},e=b.inputTypes,s={radio:1,checkbox:1};b.addInputType=function(a,b){e[a]=b};var j={customError:!1,typeMismatch:!1,rangeUnderflow:!1,rangeOverflow:!1,stepMismatch:!1,tooLong:!1,patternMismatch:!1,valueMissing:!1,valid:!0},q={valueMissing:function(f,b,c){if(!f.attr("required"))return!1;var d=!1;if(!("type"in c))c.type=
(f[0].getAttribute("type")||f[0].type||"").toLowerCase();if("select"==c.nodeName){if(b=!b)if(!(b=0>f[0].selectedIndex))f=f[0],b="select-one"==f.type&&2>f.size?!!a("> option:first-child",f).prop("selected"):!1;f=b}else f=s[c.type]?"checkbox"==c.type?!f.is(":checked"):!a(f[0].form&&f[0].name?f[0].form[f[0].name]:[]).filter(":checked")[0]:!b;return f},tooLong:function(a,b,c){if(""===b||"select"==c.nodeName)return!1;var a=a.attr("maxlength"),c=!1,e=b.length;e&&0<=a&&b.replace&&d(a)&&(c=e>a);return c},
typeMismatch:function(a,b,c){if(""===b||"select"==c.nodeName)return!1;var d=!1;if(!("type"in c))c.type=(a[0].getAttribute("type")||a[0].type||"").toLowerCase();e[c.type]&&e[c.type].mismatch&&(d=e[c.type].mismatch(b,a));return d},patternMismatch:function(a,b,c){if(""===b||"select"==c.nodeName)return!1;a=a.attr("pattern");if(!a)return!1;a=RegExp("^(?:"+a+")$");return!a?!1:!a.test(b)}};b.addValidityRule=function(a,b){q[a]=b};a.event.special.invalid={add:function(){a.event.special.invalid.setup.call(this.form||
this)},setup:function(){var f=this.form||this;a.data(f,"invalidEventShim")||(a(f).data("invalidEventShim",!0).bind("submit",a.event.special.invalid.handler),b.moveToFirstEvent(f,"submit"))},teardown:a.noop,handler:function(f){if(!("submit"!=f.type||f.testedValidity||!f.originalEvent||!a.nodeName(f.target,"form")||a.prop(f.target,"noValidate"))){c=!0;f.testedValidity=!0;if(!a(f.target).checkValidity())return f.stopImmediatePropagation(),c=!1;c=!1}}};a(g).bind("invalid",a.noop);a.event.special.submit=
a.event.special.submit||{setup:function(){return!1}};var n=a.event.special.submit.setup;a.extend(a.event.special.submit,{setup:function(){a.nodeName(this,"form")?a(this).bind("invalid",a.noop):a("form",this).bind("invalid",a.noop);return n.apply(this,arguments)}});b.addInputType("email",{mismatch:function(){var a=k.emailReg||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|(\x22((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?\x22))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i;
return function(b){return!a.test(b)}}()});b.addInputType("url",{mismatch:function(){var a=k.urlReg||/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
return function(b){return!a.test(b)}}()});b.defineNodeNameProperty("input","type",{prop:{get:function(){var a=(this.getAttribute("type")||"").toLowerCase();return b.inputTypes[a]?a:this.type}}});b.defineNodeNamesProperties(["button","fieldset","output"],{checkValidity:{value:function(){return!0}},willValidate:{value:!1},setCustomValidity:{value:a.noop},validity:{writeable:!1,get:function(){return a.extend({},j)}}},"prop");var h=function(f){var d,r=a.prop(f,"validity");if(r)a.data(f,"cachedValidity",
r);else return!0;if(!r.valid){d=a.Event("invalid");var e=a(f).trigger(d);if(c&&!h.unhandledInvalids&&!d.isDefaultPrevented())b.validityAlert.showFor(e),h.unhandledInvalids=!0}a.removeData(f,"cachedValidity",!1);return r.valid};b.defineNodeNameProperty("form","checkValidity",{prop:{value:function(){var f=!0,c=a("input,textarea,select",this).filter(function(){var a=b.data(this,"shadowData");return!a||!a.nativeElement||a.nativeElement===this});h.unhandledInvalids=!1;for(var d=0,e=c.length;d<e;d++)h(c[d])||
(f=!1);return f}}});b.defineNodeNamesProperties(["input","textarea","select"],{checkValidity:{value:function(){h.unhandledInvalids=!1;return h(a(this).getNativeElement()[0])}},setCustomValidity:{value:function(a){b.data(this,"customvalidationMessage",""+a)}},willValidate:{set:a.noop,get:function(){var b={button:1,reset:1,hidden:1,image:1};return function(){var c=a(this).getNativeElement()[0];return!(c.disabled||c.readOnly||b[c.type]||c.form&&a.prop(c.form,"noValidate"))}}()},validity:{set:a.noop,
get:function(){var c=a(this).getNativeElement(),d=c[0],e=a.data(d,"cachedValidity");if(e)return e;e=a.extend({},j);if(!a.prop(d,"willValidate")||"submit"==d.type)return e;var h=c.val(),g={nodeName:d.nodeName.toLowerCase()};e.customError=!!b.data(d,"customvalidationMessage");if(e.customError)e.valid=!1;a.each(q,function(a,b){if(b(c,h,g))e[a]=!0,e.valid=!1});a(this).getShadowFocusElement().attr("aria-invalid",e.valid?"false":"true");d=c=null;return e}}},"prop");b.defineNodeNamesBooleanProperty(["input",
"textarea","select"],"required",{set:function(c){a(this).getShadowFocusElement().attr("aria-required",!!c+"")},initAttr:!a.browser.msie||7<b.browserVersion});b.reflectProperties(["input"],["pattern"]);b.defineNodeNameProperty("textarea","maxlength",{attr:{set:function(a){this.setAttribute("maxlength",""+a)},get:function(){var a=this.getAttribute("maxlength");return null==a?void 0:a}},prop:{set:function(a){if(d(a)){if(0>a)throw"INDEX_SIZE_ERR";this.setAttribute("maxlength",parseInt(a,10))}else this.setAttribute("maxlength",
"0")},get:function(){var a=this.getAttribute("maxlength");return d(a)&&0<=a?parseInt(a,10):-1}}});b.defineNodeNameProperty("textarea","maxLength",{prop:{set:function(c){a.prop(this,"maxlength",c)},get:function(){return a.prop(this,"maxlength")}}});var t={submit:1,button:1,image:1},i={};[{name:"enctype",limitedTo:{"application/x-www-form-urlencoded":1,"multipart/form-data":1,"text/plain":1},defaultProp:"application/x-www-form-urlencoded",proptype:"enum"},{name:"method",limitedTo:{get:1,post:1},defaultProp:"get",
proptype:"enum"},{name:"action",proptype:"url"},{name:"target"},{name:"novalidate",propName:"noValidate",proptype:"boolean"}].forEach(function(c){var b="form"+(c.propName||c.name).replace(/^[a-z]/,function(a){return a.toUpperCase()}),d="form"+c.name,e=c.name,h="click.webshimssubmittermutate"+e,j=function(){if("form"in this&&t[this.type]){var o=a.prop(this,"form");if(o){var l=a.attr(this,d);if(null!=l&&(!c.limitedTo||l.toLowerCase()===a.prop(this,b))){var p=a.attr(o,e);a.attr(o,e,l);setTimeout(function(){if(null!=
p)a.attr(o,e,p);else try{a(o).removeAttr(e)}catch(c){o.removeAttribute(e)}},9)}}}};switch(c.proptype){case "url":var p=g.createElement("form");i[b]={prop:{set:function(c){a.attr(this,d,c)},get:function(){var c=a.attr(this,d);if(null==c)return"";p.setAttribute("action",c);return p.action}}};break;case "boolean":i[b]={prop:{set:function(c){c?a.attr(this,"formnovalidate","formnovalidate"):a(this).removeAttr("formnovalidate")},get:function(){return null!=a.attr(this,"formnovalidate")}}};break;case "enum":i[b]=
{prop:{set:function(c){a.attr(this,d,c)},get:function(){var b=a.attr(this,d);return!b||(b=b.toLowerCase())&&!c.limitedTo[b]?c.defaultProp:b}}};break;default:i[b]={prop:{set:function(c){a.attr(this,d,c)},get:function(){var c=a.attr(this,d);return null!=c?c:""}}}}i[d]||(i[d]={});i[d].attr={set:function(c){i[d].attr._supset.call(this,c);a(this).unbind(h).bind(h,j)},get:function(){return i[d].attr._supget.call(this)}};i[d].initAttr=!0;i[d].removeAttr={value:function(){a(this).unbind(h);i[d].removeAttr._supvalue.call(this)}}});
b.defineNodeNamesProperties(["input","button"],i);!a.support.getSetAttribute&&null==a("<form novalidate></form>").attr("novalidate")&&b.defineNodeNameProperty("form","novalidate",{attr:{set:function(a){this.setAttribute("novalidate",""+a)},get:function(){var a=this.getAttribute("novalidate");return null==a?void 0:a}}});b.defineNodeNameProperty("form","noValidate",{prop:{set:function(c){c?a.attr(this,"novalidate","novalidate"):a(this).removeAttr("novalidate")},get:function(){return null!=a.attr(this,
"novalidate")}}});b.addReady(function(c,b){a("form",c).add(b.filter("form")).bind("invalid",a.noop);setTimeout(function(){try{if(g.activeElement&&"form"in g.activeElement)return}catch(b){return}var d=!0;a("input, select, textarea",c).each(function(){if(!d)return!1;if(null!=this.getAttribute("autofocus")){d=!1;var c=a(this).getShadowFocusElement();try{c[0].focus()}catch(b){}return!1}})},0)});(function(){Modernizr.textareaPlaceholder=!!("placeholder"in a("<textarea />")[0]);if(!Modernizr.input.placeholder||
!Modernizr.textareaPlaceholder){var c="over"==b.cfg.forms.placeholderType,d=["textarea"];Modernizr.input.placeholder||d.push("input");var e=function(b,d,e){if(!c&&"password"!=b.type)!1===e&&(e=a.prop(b,"value")),b.value=e;d.box.removeClass("placeholder-visible")},h=function(b,d,l,h,i){if(!h&&(h=a.data(b,"placeHolder"),!h))return;if("focus"==i||!i&&b===g.activeElement)("password"==b.type||c||a(b).hasClass("placeholder-visible"))&&e(b,h,"");else if(!1===d&&(d=a.prop(b,"value")),d)e(b,h,d);else if(!1===
l&&(l=a.attr(b,"placeholder")||""),l&&!d){d=h;!1===l&&(l=a.attr(b,"placeholder")||"");if(!c&&"password"!=b.type)b.value=l;d.box.addClass("placeholder-visible")}else e(b,h,d)},i=function(c){var c=a(c),b=c.prop("id"),d=!(!c.prop("title")&&!c.attr("aria-labeledby"));!d&&b&&(d=!!a('label[for="'+b+'"]',c[0].form)[0]);d||(b||(b=a.webshims.getID(c)),d=!!a("label #"+b)[0]);return a(d?'<span class="placeholder-text"></span>':'<label for="'+b+'" class="placeholder-text"></label>')},j=function(){var b={text:1,
search:1,url:1,email:1,password:1,tel:1};return{create:function(b){var d=a.data(b,"placeHolder");if(d)return d;d=a.data(b,"placeHolder",{text:i(b)});a(b).bind("focus.placeholder blur.placeholder",function(a){h(this,!1,!1,d,a.type)});b.form&&a(b.form).bind("reset.placeholder",function(a){setTimeout(function(){h(b,!1,!1,d,a.type)},0)});if("password"==b.type||c){d.box=a(b).wrap('<span class="placeholder-box placeholder-box-'+(b.nodeName||"").toLowerCase()+'" />').parent();d.text.insertAfter(b).bind("mousedown.placeholder",
function(){h(this,!1,!1,d,"focus");try{setTimeout(function(){b.focus()},0)}catch(a){}return!1});a.each(["Left","Top"],function(c,e){var f=(parseInt(a.curCSS(b,"padding"+e),10)||0)+Math.max(parseInt(a.curCSS(b,"margin"+e),10)||0,0)+(parseInt(a.curCSS(b,"border"+e+"Width"),10)||0);d.text.css("padding"+e,f)});a.curCSS(b,"lineHeight");var g={width:a(b).width(),height:a(b).height()},j=a.curCSS(b,"float");a.each(["lineHeight","fontSize","fontFamily","fontWeight"],function(c,e){var f=a.curCSS(b,e);d.text.css(e)!=
f&&d.text.css(e,f)});g.width&&g.height&&d.text.css(g);"none"!==j&&d.box.addClass("placeholder-box-"+j)}else g=function(c){a(b).hasClass("placeholder-visible")&&(e(b,d,""),c&&"submit"==c.type&&setTimeout(function(){c.isDefaultPrevented()&&h(b,!1,!1,d)},9))},a.nodeName(d.text[0],"label")&&setTimeout(function(){d.text.hide()[a.browser.msie?"insertBefore":"insertAfter"](b)},9),a(m).bind("beforeunload",g),d.box=a(b),b.form&&a(b.form).submit(g);return d},update:function(c,d){if(b[a.prop(c,"type")]||a.nodeName(c,
"textarea")){var e=j.create(c);e.text.text(d);h(c,!1,d,e)}}}}();a.webshims.publicMethods={pHolder:j};d.forEach(function(a){b.defineNodeNameProperty(a,"placeholder",{attr:{set:function(a){b.contentAttr(this,"placeholder",a);j.update(this,a)},get:function(){return b.contentAttr(this,"placeholder")}},reflect:!0,initAttr:!0})});d.forEach(function(c){var d={},e;["attr","prop"].forEach(function(c){d[c]={set:function(a){var d=b.contentAttr(this,"placeholder"),f=e[c]._supset.call(this,a);d&&"value"in this&&
h(this,a,d);return f},get:function(){return a(this).hasClass("placeholder-visible")?"":e[c]._supget.call(this)}}});e=b.defineNodeNameProperty(c,"value",d)})}})()});
jQuery.webshims.ready("dom-support",function(a,b,m,g){(function(){if(!("value"in g.createElement("output"))){b.defineNodeNameProperty("output","value",{prop:{set:function(b){var d=a.data(this,"outputShim");d||(d=k(this));d(b)},get:function(){return b.contentAttr(this,"value")||a(this).text()||""}}});b.onNodeNamesPropertyModify("input","value",function(b,d,e){"removeAttr"!=e&&(d=a.data(this,"outputShim"))&&d(b)});var k=function(c){if(!c.getAttribute("aria-live")){var c=a(c),d=(c.text()||"").trim(),
e=c.attr("id"),k=c.attr("for"),j=a('<input class="output-shim" type="text" disabled name="'+(c.attr("name")||"")+'" value="'+d+'" style="display: none !important;" />').insertAfter(c),q=j[0].form||g,n=function(a){j[0].value=a;a=j[0].value;c.text(a);b.contentAttr(c[0],"value",a)};c[0].defaultValue=d;b.contentAttr(c[0],"value",d);c.attr({"aria-live":"polite"});e&&(j.attr("id",e),c.attr("aria-labeldby",b.getID(a('label[for="'+e+'"]',q))));k&&(e=b.getID(c),k.split(" ").forEach(function(a){(a=g.getElementById(a))&&
a.setAttribute("aria-controls",e)}));c.data("outputShim",n);j.data("outputShim",n);return n}};b.addReady(function(b,d){a("output",b).add(d.filter("output")).each(function(){k(this)})})}})();(function(){var k={updateInput:1,input:1},c={radio:1,checkbox:1,submit:1,button:1,image:1,reset:1,file:1,color:1},d=function(a){var c,d=a.prop("value"),g=function(c){if(a){var f=a.prop("value");f!==d&&(d=f,(!c||!k[c.type])&&b.triggerInlineForm&&b.triggerInlineForm(a[0],"input"))}},n,h=function(){clearTimeout(n);
n=setTimeout(g,9)},m=function(){a.unbind("focusout",m).unbind("keyup keypress keydown paste cut",h).unbind("input change updateInput",g);clearInterval(c);setTimeout(function(){g();a=null},1)};clearInterval(c);c=setInterval(g,99);h();a.bind("keyup keypress keydown paste cut",h).bind("focusout",m).bind("input updateInput change",g)};if(a.event.customEvent)a.event.customEvent.updateInput=!0;a(g).bind("focusin",function(b){b.target&&b.target.type&&!b.target.readOnly&&!b.target.disabled&&"input"==(b.target.nodeName||
"").toLowerCase()&&!c[b.target.type]&&d(a(b.target))})})();b.isReady("form-output",!0)});
