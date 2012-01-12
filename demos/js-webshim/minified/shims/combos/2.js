jQuery.webshims.gcEval=function(a,b){with(b&&b.form||window)with(b||window)return function(a){eval(a)}.call(b||window,a)};
(function(a){var b=window.Modernizr,k=a.webshims;k.capturingEventPrevented=function(b){var c=b.isDefaultPrevented,q=b.preventDefault;b.preventDefault=function(){clearTimeout(a.data(b.target,b.type+"DefaultPrevented"));a.data(b.target,b.type+"DefaultPrevented",setTimeout(function(){a.removeData(b.target,b.type+"DefaultPrevented")},30));return q.apply(this,arguments)};b.isDefaultPrevented=function(){return!(!c.apply(this,arguments)&&!a.data(b.target,b.type+"DefaultPrevented"))};b._isPolyfilled=!0};
if(b.formvalidation){var g=a('<form action="#" style="width: 1px; height: 1px; overflow: hidden;"><select /><input type="date" required name="a" /><input type="submit" /></form>');b.bugfreeformvalidation=b.requiredSelect=!!("required"in a("select",g)[0]);if(window.opera||a.browser.webkit||window.testGoodWithFix){var n=a("input",g),e,c=function(c){var f=["form-extend","form-native-fix"];c&&(c.preventDefault(),c.stopImmediatePropagation());clearTimeout(e);setTimeout(function(){g&&(g.remove(),g=n=null)},
9);if(!b.bugfreeformvalidation||!b.requiredSelect)k.addPolyfill("form-native-fix",{f:"forms",d:["form-extend"]}),k.modules["form-extend"].test=a.noop;k.isReady("form-number-date-api")&&f.push("form-number-date-api");k.bugs.validationMessage&&f.push("form-message");k.reTest(f);if(a.browser.opera||window.testGoodWithFix)k.loader.loadList(["dom-extend"]),k.ready("dom-extend",function(){var b=function(a){a.preventDefault()};["form","input","textarea","select"].forEach(function(c){var i=k.defineNodeNameProperty(c,
"checkValidity",{prop:{value:function(){k.fromSubmit||a(this).bind("invalid.checkvalidity",b);k.fromCheckValidity=!0;var c=i.prop._supvalue.apply(this,arguments);k.fromSubmit||a(this).unbind("invalid.checkvalidity",b);k.fromCheckValidity=!1;return c}}})})}),b.input.list&&!(a("<datalist><select><option></option></select></datalist>").prop("options")||[]).length&&k.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var b=this.options||[];if(!b.length){var c=a("select",this);
if(c[0]&&c[0].options&&c[0].options.length)b=c[0].options}return b}}})};g.appendTo("head");if(window.opera||window.testGoodWithFix){k.bugs.validationMessage=!n.prop("validationMessage");if((b.inputtypes||{}).date){try{n.prop("valueAsNumber",0)}catch(f){}k.bugs.valueAsNumberSet="1970-01-01"!=n.prop("value")}n.prop("value","")}g.bind("submit",function(a){b.bugfreeformvalidation=!1;c(a)});e=setTimeout(function(){g&&g.triggerHandler("submit")},9);k.capturingEvents(["input"]);k.capturingEvents(["invalid"],
!0);a("input, select",g).bind("invalid",c).filter('[type="submit"]').bind("click",function(a){a.stopImmediatePropagation()}).trigger("click")}else k.capturingEvents(["input"]),k.capturingEvents(["invalid"],!0)}})(jQuery);
jQuery.webshims.register("form-core",function(a,b,k,g,n,e){var c={radio:1},f={checkbox:1,radio:1},i=a([]),s=function(d){var d=a(d),h=d[0].name;return c[d[0].type]&&h?a(d[0].form&&d[0].form[h]||g.getElementsByName(h)).not(d[0]):i},q=b.getContentValidationMessage=function(d,h){var m=d.getAttribute("x-moz-errormessage")||d.getAttribute("data-errormessage")||"";if(m&&-1!=m.indexOf("{")){try{m=jQuery.parseJSON(m)}catch(c){return m}"object"==typeof m&&(h=h||a.prop(d,"validity")||{valid:1},h.valid||a.each(h,
function(a,d){if(d&&"valid"!=a&&m[a])return m=m[a],!1}));b.data(d,"contentErrorMessage",m);if("object"==typeof m)m=m.defaultMessage}return m||""},r={number:1,range:1,date:1,time:1,"datetime-local":1,datetime:1,month:1,week:1};a.extend(a.expr.filters,{"valid-element":function(d){return!(!a.prop(d,"willValidate")||!(a.prop(d,"validity")||{valid:1}).valid)},"invalid-element":function(d){return!(!a.prop(d,"willValidate")||(a.prop(d,"validity")||{valid:1}).valid)},"required-element":function(d){return!(!a.prop(d,
"willValidate")||!a.prop(d,"required"))},"optional-element":function(d){return!!(a.prop(d,"willValidate")&&!1===a.prop(d,"required"))},"in-range":function(d){if(!r[a.prop(d,"type")]||!a.prop(d,"willValidate"))return!1;d=a.prop(d,"validity");return!(!d||d.rangeOverflow||d.rangeUnderflow)},"out-of-range":function(d){if(!r[a.prop(d,"type")]||!a.prop(d,"willValidate"))return!1;d=a.prop(d,"validity");return!(!d||!d.rangeOverflow&&!d.rangeUnderflow)}});["valid","invalid","required","optional"].forEach(function(d){a.expr.filters[d]=
a.expr.filters[d+"-element"]});var j=a.event.customEvent||{},t=a.prop,o={selectedIndex:1,value:1,checked:1,disabled:1,readonly:1};a.prop=function(d,h,b){var c=t.apply(this,arguments);if(d&&"form"in d&&o[h]&&b!==n&&a(d).hasClass("form-ui-invalid")&&(a.prop(d,"validity")||{valid:1}).valid)a(d).getShadowElement().removeClass("form-ui-invalid"),"checked"==h&&b&&s(d).removeClass("form-ui-invalid").removeAttr("aria-invalid");return c};var h=function(d,h){var b;a.each(d,function(d,c){if(c)return b="customError"==
d?a.prop(h,"validationMessage"):d,!1});return b};a(g).bind("focusout change refreshvalidityui",function(d){if(d.target&&"submit"!=d.target.type&&a.prop(d.target,"willValidate")){var b=a.data(d.target,"webshimsswitchvalidityclass");b&&clearTimeout(b);a.data(d.target,"webshimsswitchvalidityclass",setTimeout(function(){var b=a(d.target).getNativeElement()[0],u=a.prop(b,"validity"),c=a(b).getShadowElement(),l,p,v,i;u.valid?c.hasClass("form-ui-valid")||(l="form-ui-valid",p="form-ui-invalid",i="changedvaliditystate",
v="changedvalid",f[b.type]&&b.checked&&s(b).removeClass(p).addClass(l).removeAttr("aria-invalid"),a.removeData(b,"webshimsinvalidcause")):(u=h(u,b),a.data(b,"webshimsinvalidcause")!=u&&(a.data(b,"webshimsinvalidcause",u),i="changedvaliditystate"),c.hasClass("form-ui-invalid")||(l="form-ui-invalid",p="form-ui-valid",f[b.type]&&!b.checked&&s(b).removeClass(p).addClass(l),v="changedinvalid"));l&&(c.addClass(l).removeClass(p),setTimeout(function(){a(b).trigger(v)},0));i&&setTimeout(function(){a(b).trigger(i)},
0);a.removeData(d.target,"webshimsswitchvalidityclass")},9))}});j.changedvaliditystate=!0;j.changedvalid=!0;j.changedinvalid=!0;j.refreshvalidityui=!0;b.triggerInlineForm=function(d,h){d.jquery&&(d=d[0]);var c="on"+h,i=d[c]||d.getAttribute(c)||"",j,l,h=a.Event({type:h,target:d,currentTarget:d});i&&(b.warn(c+" used. we will drop inline event handler support, with next release. use event binding: $.bind instead"),"string"==typeof i&&(l=b.gcEval(i,d),d[c]&&(j=!0,d[c]=!1)));!1===l&&(h.stopPropagation(),
h.preventDefault());a(d).trigger(h);j&&(d[c]=i);return l};j=function(){b.scrollRoot=a.browser.webkit||"BackCompat"==g.compatMode?a(g.body):a(g.documentElement)};j();b.ready("DOM",j);b.getRelOffset=function(d,h){var d=a(d),b=a(h).offset(),c;a.swap(a(d)[0],{visibility:"hidden",display:"inline-block",left:0,top:0},function(){c=d.offset()});b.top-=c.top;b.left-=c.left;return b};b.validityAlert=function(){var d=!a.browser.msie||7<parseInt(a.browser.version,10)?"span":"label",h,c=!1,i=!1,j,l={hideDelay:5E3,
showFor:function(d,b,f,e){l._create();var d=a(d),g=a(d).getShadowElement(),q=l.getOffsetFromBody(g);l.clear();e?this.hide():(this.getMessage(d,b),this.position(g,q),h.css({fontSize:d.css("fontSize"),fontFamily:d.css("fontFamily")}),this.show(),this.hideDelay&&(c=setTimeout(j,this.hideDelay)),a(k).bind("resize.validityalert orientationchange.validityalert emchange.validityalert",function(){clearTimeout(i);i=setTimeout(function(){l.position(g)},9)}));f||this.setFocus(g,q)},getOffsetFromBody:function(a){return b.getRelOffset(h,
a)},setFocus:function(p,c){var l=a(p).getShadowFocusElement(),i=b.scrollRoot.scrollTop(),m=(c||l.offset()).top-30,f;b.getID&&"label"==d&&h.attr("for",b.getID(l));i>m&&(b.scrollRoot.animate({scrollTop:m-5},{queue:!1,duration:Math.max(Math.min(600,1.5*(i-m)),80)}),f=!0);try{l[0].focus()}catch(e){}f&&(b.scrollRoot.scrollTop(i),setTimeout(function(){b.scrollRoot.scrollTop(i)},0));setTimeout(function(){a(g).bind("focusout.validityalert",j)},10)},getMessage:function(d,b){a("span.va-box",h).text(b||q(d[0])||
d.prop("validationMessage"))},position:function(d,b){b=b?a.extend({},b):l.getOffsetFromBody(d);b.top+=d.outerHeight();h.css(b)},show:function(){"none"===h.css("display")&&h.css({opacity:0}).show();h.addClass("va-visible").fadeTo(400,1)},hide:function(){h.removeClass("va-visible").fadeOut()},clear:function(){clearTimeout(!1);clearTimeout(c);a(g).unbind(".validityalert");a(k).unbind(".validityalert");h.stop().removeAttr("for")},_create:function(){if(!h)h=l.errorBubble=a("<"+d+' class="validity-alert-wrapper" role="alert"><span  class="validity-alert"><span class="va-arrow"><span class="va-arrow-box"></span></span><span class="va-box"></span></span></'+
d+">").css({position:"absolute",display:"none"}),b.ready("DOM",function(){h.appendTo("body");a.fn.bgIframe&&a.browser.msie&&7>parseInt(a.browser.version,10)&&h.bgIframe()})}};j=a.proxy(l,"hide");return l}();(function(){var d,h=[],b;a(g).bind("invalid",function(c){if(!c.wrongWebkitInvalid){var i=a(c.target),l=i.getShadowElement();l.hasClass("form-ui-invalid")||(l.addClass("form-ui-invalid").removeClass("form-ui-valid"),setTimeout(function(){a(c.target).trigger("changedinvalid").trigger("changedvaliditystate")},
0));if(!d)d=a.Event("firstinvalid"),d.isInvalidUIPrevented=c.isDefaultPrevented,l=a.Event("firstinvalidsystem"),a(g).triggerHandler(l,{element:c.target,form:c.target.form,isInvalidUIPrevented:c.isDefaultPrevented}),i.trigger(d);d&&d.isDefaultPrevented()&&c.preventDefault();h.push(c.target);c.extraData="fix";clearTimeout(b);b=setTimeout(function(){var b={type:"lastinvalid",cancelable:!1,invalidlist:a(h)};d=!1;h=[];a(c.target).trigger(b,b)},9);l=i=null}})})();e.replaceValidationUI&&b.ready("DOM",function(){a(g).bind("firstinvalid",
function(h){h.isInvalidUIPrevented()||(h.preventDefault(),a.webshims.validityAlert.showFor(h.target,a(h.target).prop("customValidationMessage")))})})});
jQuery.webshims.register("form-message",function(a,b,k,g,n,e){var c=b.validityMessages,k=e.overrideMessages||e.customMessages?["customValidationMessage"]:[];c.en=c.en||c["en-US"]||{typeMismatch:{email:"Please enter an email address.",url:"Please enter a URL.",number:"Please enter a number.",date:"Please enter a date.",time:"Please enter a time.",range:"Invalid input.","datetime-local":"Please enter a datetime."},rangeUnderflow:{defaultMessage:"Value must be greater than or equal to {%min}."},rangeOverflow:{defaultMessage:"Value must be less than or equal to {%max}."},
stepMismatch:"Invalid input.",tooLong:"Please enter at most {%maxlength} character(s). You entered {%valueLen}.",patternMismatch:"Invalid input. {%title}",valueMissing:{defaultMessage:"Please fill out this field.",checkbox:"Please check this box if you want to proceed."}};["select","radio"].forEach(function(a){c.en.valueMissing[a]="Please select an option."});["date","time","datetime-local"].forEach(function(a){c.en.rangeUnderflow[a]="Value must be at or after {%min}."});["date","time","datetime-local"].forEach(function(a){c.en.rangeOverflow[a]=
"Value must be at or before {%max}."});c["en-US"]=c["en-US"]||c.en;c[""]=c[""]||c["en-US"];c.de=c.de||{typeMismatch:{email:"{%value} ist keine zul\u00e4ssige E-Mail-Adresse",url:"{%value} ist keine zul\u00e4ssige Webadresse",number:"{%value} ist keine Nummer!",date:"{%value} ist kein Datum",time:"{%value} ist keine Uhrzeit",range:"{%value} ist keine Nummer!","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:{defaultMessage:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen."},
rangeOverflow:{defaultMessage:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen."},stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Zeichen eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat f\u00fcr dieses Eingabefeld ein falsches Format! {%title}",valueMissing:{defaultMessage:"Bitte geben Sie einen Wert ein",
checkbox:"Bitte aktivieren Sie das K\u00e4stchen"}};["select","radio"].forEach(function(a){c.de.valueMissing[a]="Bitte w\u00e4hlen Sie eine Option aus"});["date","time","datetime-local"].forEach(function(a){c.de.rangeUnderflow[a]="{%value} ist zu fr\u00fch. {%min} ist die fr\u00fcheste Zeit, die Sie benutzen k\u00f6nnen."});["date","time","datetime-local"].forEach(function(a){c.de.rangeOverflow[a]="{%value} ist zu sp\u00e4t. {%max} ist die sp\u00e4teste Zeit, die Sie benutzen k\u00f6nnen."});var f=
c[""];b.createValidationMessage=function(b,c){var e=f[c];e&&"string"!==typeof e&&(e=e[a.prop(b,"type")]||e[(b.nodeName||"").toLowerCase()]||e.defaultMessage);e&&"value,min,max,title,maxlength,label".split(",").forEach(function(c){if(-1!==e.indexOf("{%"+c)){var j=("label"==c?a.trim(a('label[for="'+b.id+'"]',b.form).text()).replace(/\*$|:$/,""):a.attr(b,c))||"";e=e.replace("{%"+c+"}",j);"value"==c&&(e=e.replace("{%valueLen}",j.length))}});return e||""};(b.bugs.validationMessage||!Modernizr.formvalidation)&&
k.push("validationMessage");b.activeLang({langObj:c,module:"form-core",callback:function(a){f=a}});Modernizr.input.list&&!(a("<datalist><select><option></option></select></datalist>").prop("options")||[]).length&&b.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var b=this.options||[];if(!b.length){var c=a("select",this);if(c[0]&&c[0].options&&c[0].options.length)b=c[0].options}return b}}});k.forEach(function(c){b.defineNodeNamesProperty(["fieldset","output","button"],
c,{prop:{value:"",writeable:!1}});["input","select","textarea"].forEach(function(e){var f=b.defineNodeNameProperty(e,c,{prop:{get:function(){var c=this,e="";if(!a.prop(c,"willValidate"))return e;var g=a.prop(c,"validity")||{valid:1};if(g.valid||(e=b.getContentValidationMessage(c,g)))return e;if(g.customError&&c.nodeName&&(e=Modernizr.formvalidation&&f.prop._supget?f.prop._supget.call(c):b.data(c,"customvalidationMessage")))return e;a.each(g,function(a,h){if("valid"!=a&&h&&(e=b.createValidationMessage(c,
a)))return!1});return e||""},writeable:!1}})})})});
Modernizr.formvalidation||jQuery.webshims.register("form-extend",function(a,b,k,g){b.inputTypes=b.inputTypes||{};var n=b.cfg.forms,e,c=function(a){return"number"==typeof a||a&&a==1*a},f=b.inputTypes,i={radio:1,checkbox:1};b.addInputType=function(a,b){f[a]=b};var s={customError:!1,typeMismatch:!1,rangeUnderflow:!1,rangeOverflow:!1,stepMismatch:!1,tooLong:!1,patternMismatch:!1,valueMissing:!1,valid:!0},q={valueMissing:function(b,d,c){if(!b.attr("required"))return!1;var e=!1;if(!("type"in c))c.type=
(b[0].getAttribute("type")||b[0].type||"").toLowerCase();if("select"==c.nodeName){if(d=!d)if(!(d=0>b[0].selectedIndex))b=b[0],d="select-one"==b.type&&2>b.size?!!a("> option:first-child",b).prop("selected"):!1;b=d}else b=i[c.type]?"checkbox"==c.type?!b.is(":checked"):!a(b[0].form&&b[0].name?b[0].form[b[0].name]:[]).filter(":checked")[0]:!d;return b},tooLong:function(a,b,e){if(""===b||"select"==e.nodeName)return!1;var a=a.attr("maxlength"),e=!1,f=b.length;f&&0<=a&&b.replace&&c(a)&&(e=f>a);return e},
typeMismatch:function(a,b,c){if(""===b||"select"==c.nodeName)return!1;var e=!1;if(!("type"in c))c.type=(a[0].getAttribute("type")||a[0].type||"").toLowerCase();f[c.type]&&f[c.type].mismatch&&(e=f[c.type].mismatch(b,a));return e},patternMismatch:function(a,b,c){if(""===b||"select"==c.nodeName)return!1;a=a.attr("pattern");if(!a)return!1;a=RegExp("^(?:"+a+")$");return!a?!1:!a.test(b)}};b.addValidityRule=function(a,b){q[a]=b};a.event.special.invalid={add:function(){a.event.special.invalid.setup.call(this.form||
this)},setup:function(){var c=this.form||this;a.data(c,"invalidEventShim")||(a(c).data("invalidEventShim",!0).bind("submit",a.event.special.invalid.handler),b.moveToFirstEvent(c,"submit"))},teardown:a.noop,handler:function(b){if(!("submit"!=b.type||b.testedValidity||!b.originalEvent||!a.nodeName(b.target,"form")||a.prop(b.target,"noValidate"))){e=!0;b.testedValidity=!0;if(!a(b.target).checkValidity())return b.stopImmediatePropagation(),e=!1;e=!1}}};a(g).bind("invalid",a.noop);a.event.special.submit=
a.event.special.submit||{setup:function(){return!1}};var r=a.event.special.submit.setup;a.extend(a.event.special.submit,{setup:function(){a.nodeName(this,"form")?a(this).bind("invalid",a.noop):a("form",this).bind("invalid",a.noop);return r.apply(this,arguments)}});b.addInputType("email",{mismatch:function(){var a=n.emailReg||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|(\x22((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?\x22))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i;
return function(b){return!a.test(b)}}()});b.addInputType("url",{mismatch:function(){var a=n.urlReg||/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
return function(b){return!a.test(b)}}()});b.defineNodeNameProperty("input","type",{prop:{get:function(){var a=(this.getAttribute("type")||"").toLowerCase();return b.inputTypes[a]?a:this.type}}});b.defineNodeNamesProperties(["button","fieldset","output"],{checkValidity:{value:function(){return!0}},willValidate:{value:!1},setCustomValidity:{value:a.noop},validity:{writeable:!1,get:function(){return a.extend({},s)}}},"prop");var j=function(c){var d,f=a.prop(c,"validity");if(f)a.data(c,"cachedValidity",
f);else return!0;if(!f.valid){d=a.Event("invalid");var g=a(c).trigger(d);if(e&&!j.unhandledInvalids&&!d.isDefaultPrevented())b.validityAlert.showFor(g),j.unhandledInvalids=!0}a.removeData(c,"cachedValidity",!1);return f.valid};b.defineNodeNameProperty("form","checkValidity",{prop:{value:function(){var c=!0,d=a("input,textarea,select",this).filter(function(){var a=b.data(this,"shadowData");return!a||!a.nativeElement||a.nativeElement===this});j.unhandledInvalids=!1;for(var e=0,f=d.length;e<f;e++)j(d[e])||
(c=!1);return c}}});b.defineNodeNamesProperties(["input","textarea","select"],{checkValidity:{value:function(){j.unhandledInvalids=!1;return j(a(this).getNativeElement()[0])}},setCustomValidity:{value:function(a){b.data(this,"customvalidationMessage",""+a)}},willValidate:{set:a.noop,get:function(){var b={button:1,reset:1,hidden:1,image:1};return function(){var d=a(this).getNativeElement()[0];return!(d.disabled||d.readOnly||b[d.type]||d.form&&a.prop(d.form,"noValidate"))}}()},validity:{set:a.noop,
get:function(){var c=a(this).getNativeElement(),d=c[0],e=a.data(d,"cachedValidity");if(e)return e;e=a.extend({},s);if(!a.prop(d,"willValidate")||"submit"==d.type)return e;var f=c.val(),g={nodeName:d.nodeName.toLowerCase()};e.customError=!!b.data(d,"customvalidationMessage");if(e.customError)e.valid=!1;a.each(q,function(a,b){if(b(c,f,g))e[a]=!0,e.valid=!1});a(this).getShadowFocusElement().attr("aria-invalid",e.valid?"false":"true");d=c=null;return e}}},"prop");b.defineNodeNamesBooleanProperty(["input",
"textarea","select"],"required",{set:function(b){a(this).getShadowFocusElement().attr("aria-required",!!b+"")},initAttr:!a.browser.msie||7<b.browserVersion});b.reflectProperties(["input"],["pattern"]);b.defineNodeNameProperty("textarea","maxlength",{attr:{set:function(a){this.setAttribute("maxlength",""+a)},get:function(){var a=this.getAttribute("maxlength");return null==a?void 0:a}},prop:{set:function(a){if(c(a)){if(0>a)throw"INDEX_SIZE_ERR";this.setAttribute("maxlength",parseInt(a,10))}else this.setAttribute("maxlength",
"0")},get:function(){var a=this.getAttribute("maxlength");return c(a)&&0<=a?parseInt(a,10):-1}}});b.defineNodeNameProperty("textarea","maxLength",{prop:{set:function(b){a.prop(this,"maxlength",b)},get:function(){return a.prop(this,"maxlength")}}});var t={submit:1,button:1,image:1},o={};[{name:"enctype",limitedTo:{"application/x-www-form-urlencoded":1,"multipart/form-data":1,"text/plain":1},defaultProp:"application/x-www-form-urlencoded",proptype:"enum"},{name:"method",limitedTo:{get:1,post:1},defaultProp:"get",
proptype:"enum"},{name:"action",proptype:"url"},{name:"target"},{name:"novalidate",propName:"noValidate",proptype:"boolean"}].forEach(function(b){var c="form"+(b.propName||b.name).replace(/^[a-z]/,function(a){return a.toUpperCase()}),e="form"+b.name,f=b.name,j="click.webshimssubmittermutate"+f,i=function(){if("form"in this&&t[this.type]){var p=a.prop(this,"form");if(p){var l=a.attr(this,e);if(null!=l&&(!b.limitedTo||l.toLowerCase()===a.prop(this,c))){var g=a.attr(p,f);a.attr(p,f,l);setTimeout(function(){if(null!=
g)a.attr(p,f,g);else try{a(p).removeAttr(f)}catch(b){p.removeAttribute(f)}},9)}}}};switch(b.proptype){case "url":var l=g.createElement("form");o[c]={prop:{set:function(b){a.attr(this,e,b)},get:function(){var b=a.attr(this,e);if(null==b)return"";l.setAttribute("action",b);return l.action}}};break;case "boolean":o[c]={prop:{set:function(b){b?a.attr(this,"formnovalidate","formnovalidate"):a(this).removeAttr("formnovalidate")},get:function(){return null!=a.attr(this,"formnovalidate")}}};break;case "enum":o[c]=
{prop:{set:function(b){a.attr(this,e,b)},get:function(){var c=a.attr(this,e);return!c||(c=c.toLowerCase())&&!b.limitedTo[c]?b.defaultProp:c}}};break;default:o[c]={prop:{set:function(b){a.attr(this,e,b)},get:function(){var b=a.attr(this,e);return null!=b?b:""}}}}o[e]||(o[e]={});o[e].attr={set:function(b){o[e].attr._supset.call(this,b);a(this).unbind(j).bind(j,i)},get:function(){return o[e].attr._supget.call(this)}};o[e].initAttr=!0;o[e].removeAttr={value:function(){a(this).unbind(j);o[e].removeAttr._supvalue.call(this)}}});
b.defineNodeNamesProperties(["input","button"],o);!a.support.getSetAttribute&&null==a("<form novalidate></form>").attr("novalidate")&&b.defineNodeNameProperty("form","novalidate",{attr:{set:function(a){this.setAttribute("novalidate",""+a)},get:function(){var a=this.getAttribute("novalidate");return null==a?void 0:a}}});b.defineNodeNameProperty("form","noValidate",{prop:{set:function(b){b?a.attr(this,"novalidate","novalidate"):a(this).removeAttr("novalidate")},get:function(){return null!=a.attr(this,
"novalidate")}}});b.addReady(function(b,c){a("form",b).add(c.filter("form")).bind("invalid",a.noop);setTimeout(function(){try{if(g.activeElement&&"form"in g.activeElement)return}catch(c){return}var d=!0;a("input, select, textarea",b).each(function(){if(!d)return!1;if(null!=this.getAttribute("autofocus")){d=!1;var b=a(this).getShadowFocusElement();try{b[0].focus()}catch(c){}return!1}})},0)});(function(){Modernizr.textareaPlaceholder=!!("placeholder"in a("<textarea />")[0]);if(!Modernizr.input.placeholder||
!Modernizr.textareaPlaceholder){var c="over"==b.cfg.forms.placeholderType,d=["textarea"];Modernizr.input.placeholder||d.push("input");var e=function(b,d,e){if(!c&&"password"!=b.type)!1===e&&(e=a.prop(b,"value")),b.value=e;d.box.removeClass("placeholder-visible")},f=function(b,d,f,j,i){if(!j&&(j=a.data(b,"placeHolder"),!j))return;if("focus"==i||!i&&b===g.activeElement)("password"==b.type||c||a(b).hasClass("placeholder-visible"))&&e(b,j,"");else if(!1===d&&(d=a.prop(b,"value")),d)e(b,j,d);else if(!1===
f&&(f=a.attr(b,"placeholder")||""),f&&!d){d=j;!1===f&&(f=a.attr(b,"placeholder")||"");if(!c&&"password"!=b.type)b.value=f;d.box.addClass("placeholder-visible")}else e(b,j,d)},j=function(b){var b=a(b),c=b.prop("id"),d=!(!b.prop("title")&&!b.attr("aria-labeledby"));!d&&c&&(d=!!a('label[for="'+c+'"]',b[0].form)[0]);d||(c||(c=a.webshims.getID(b)),d=!!a("label #"+c)[0]);return a(d?'<span class="placeholder-text"></span>':'<label for="'+c+'" class="placeholder-text"></label>')},i=function(){var b={text:1,
search:1,url:1,email:1,password:1,tel:1};return{create:function(b){var d=a.data(b,"placeHolder");if(d)return d;d=a.data(b,"placeHolder",{text:j(b)});a(b).bind("focus.placeholder blur.placeholder",function(a){f(this,!1,!1,d,a.type)});b.form&&a(b.form).bind("reset.placeholder",function(a){setTimeout(function(){f(b,!1,!1,d,a.type)},0)});if("password"==b.type||c){d.box=a(b).wrap('<span class="placeholder-box placeholder-box-'+(b.nodeName||"").toLowerCase()+'" />').parent();d.text.insertAfter(b).bind("mousedown.placeholder",
function(){f(this,!1,!1,d,"focus");try{setTimeout(function(){b.focus()},0)}catch(a){}return!1});a.each(["Left","Top"],function(c,e){var f=(parseInt(a.curCSS(b,"padding"+e),10)||0)+Math.max(parseInt(a.curCSS(b,"margin"+e),10)||0,0)+(parseInt(a.curCSS(b,"border"+e+"Width"),10)||0);d.text.css("padding"+e,f)});a.curCSS(b,"lineHeight");var g={width:a(b).width(),height:a(b).height()},i=a.curCSS(b,"float");a.each(["lineHeight","fontSize","fontFamily","fontWeight"],function(c,e){var f=a.curCSS(b,e);d.text.css(e)!=
f&&d.text.css(e,f)});g.width&&g.height&&d.text.css(g);"none"!==i&&d.box.addClass("placeholder-box-"+i)}else g=function(c){a(b).hasClass("placeholder-visible")&&(e(b,d,""),c&&"submit"==c.type&&setTimeout(function(){c.isDefaultPrevented()&&f(b,!1,!1,d)},9))},a.nodeName(d.text[0],"label")&&setTimeout(function(){d.text.hide()[a.browser.msie?"insertBefore":"insertAfter"](b)},9),a(k).bind("beforeunload",g),d.box=a(b),b.form&&a(b.form).submit(g);return d},update:function(c,d){if(b[a.prop(c,"type")]||a.nodeName(c,
"textarea")){var e=i.create(c);e.text.text(d);f(c,!1,d,e)}}}}();a.webshims.publicMethods={pHolder:i};d.forEach(function(a){b.defineNodeNameProperty(a,"placeholder",{attr:{set:function(a){b.contentAttr(this,"placeholder",a);i.update(this,a)},get:function(){return b.contentAttr(this,"placeholder")}},reflect:!0,initAttr:!0})});d.forEach(function(c){var d={},e;["attr","prop"].forEach(function(c){d[c]={set:function(a){var d=b.contentAttr(this,"placeholder"),g=e[c]._supset.call(this,a);d&&"value"in this&&
f(this,a,d);return g},get:function(){return a(this).hasClass("placeholder-visible")?"":e[c]._supget.call(this)}}});e=b.defineNodeNameProperty(c,"value",d)})}})()});
jQuery.webshims.ready("dom-support",function(a,b,k,g){(function(){if(!("value"in g.createElement("output"))){b.defineNodeNameProperty("output","value",{prop:{set:function(b){var c=a.data(this,"outputShim");c||(c=k(this));c(b)},get:function(){return b.contentAttr(this,"value")||a(this).text()||""}}});b.onNodeNamesPropertyModify("input","value",function(b,c,f){"removeAttr"!=f&&(c=a.data(this,"outputShim"))&&c(b)});var k=function(e){if(!e.getAttribute("aria-live")){var e=a(e),c=(e.text()||"").trim(),
f=e.attr("id"),i=e.attr("for"),k=a('<input class="output-shim" type="text" disabled name="'+(e.attr("name")||"")+'" value="'+c+'" style="display: none !important;" />').insertAfter(e),q=k[0].form||g,n=function(a){k[0].value=a;a=k[0].value;e.text(a);b.contentAttr(e[0],"value",a)};e[0].defaultValue=c;b.contentAttr(e[0],"value",c);e.attr({"aria-live":"polite"});f&&(k.attr("id",f),e.attr("aria-labeldby",b.getID(a('label[for="'+f+'"]',q))));i&&(f=b.getID(e),i.split(" ").forEach(function(a){(a=g.getElementById(a))&&
a.setAttribute("aria-controls",f)}));e.data("outputShim",n);k.data("outputShim",n);return n}};b.addReady(function(b,c){a("output",b).add(c.filter("output")).each(function(){k(this)})})}})();(function(){var k={updateInput:1,input:1},e={radio:1,checkbox:1,submit:1,button:1,image:1,reset:1,file:1,color:1},c=function(a){var c,e=a.prop("value"),g=function(c){if(a){var g=a.prop("value");g!==e&&(e=g,(!c||!k[c.type])&&b.triggerInlineForm&&b.triggerInlineForm(a[0],"input"))}},r,j=function(){clearTimeout(r);
r=setTimeout(g,9)},t=function(){a.unbind("focusout",t).unbind("keyup keypress keydown paste cut",j).unbind("input change updateInput",g);clearInterval(c);setTimeout(function(){g();a=null},1)};clearInterval(c);c=setInterval(g,99);j();a.bind("keyup keypress keydown paste cut",j).bind("focusout",t).bind("input updateInput change",g)};if(a.event.customEvent)a.event.customEvent.updateInput=!0;a(g).bind("focusin",function(b){b.target&&b.target.type&&!b.target.readOnly&&!b.target.disabled&&"input"==(b.target.nodeName||
"").toLowerCase()&&!e[b.target.type]&&c(a(b.target))})})();b.isReady("form-output",!0)});
