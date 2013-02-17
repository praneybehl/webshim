jQuery.webshims.register("form-native-extend",function(e,t,n,r,i,s){"use strict";var o=n.Modernizr,u=o.inputtypes;if(!o.formvalidation||t.bugs.bustedValidity)return;var a=t.inputTypes,f={};t.addInputType=function(e,t){a[e]=t},t.addValidityRule=function(e,t){f[e]=t},t.addValidityRule("typeMismatch",function(e,t,n,r){if(t==="")return!1;var i=r.typeMismatch;return"type"in n||(n.type=(e[0].getAttribute("type")||"").toLowerCase()),a[n.type]&&a[n.type].mismatch&&(i=a[n.type].mismatch(t,e)),i});var l=s.overrideMessages,c=!u.number||!u.time||!u.range||l,h=["customError","typeMismatch","rangeUnderflow","rangeOverflow","stepMismatch","tooLong","patternMismatch","valueMissing","valid"],p=l?["value","checked"]:["value"],d=[],v=function(t,n){if(!t)return;var i=(t.getAttribute&&t.getAttribute("type")||t.type||"").toLowerCase();if(!l&&!a[i])return;l&&!n&&i=="radio"&&t.name?e(r.getElementsByName(t.name)).each(function(){e.prop(this,"validity")}):e.prop(t,"validity")},m={};["input","textarea","select"].forEach(function(n){var r=t.defineNodeNameProperty(n,"setCustomValidity",{prop:{value:function(i){i+="";var s=n=="input"?e(this).getNativeElement()[0]:this;r.prop._supvalue.call(s,i),t.bugs.validationMessage&&t.data(s,"customvalidationMessage",i),c&&(t.data(s,"hasCustomError",!!i),v(s))}}});m[n]=r.prop._supvalue});if(c||l)p.push("min"),p.push("max"),p.push("step"),d.push("input");l&&(p.push("required"),p.push("pattern"),d.push("select"),d.push("textarea"));if(c){var g;d.forEach(function(n){var r=t.defineNodeNameProperty(n,"validity",{prop:{get:function(){if(g)return;var i=n=="input"?e(this).getNativeElement()[0]:this,s=r.prop._supget.call(i);if(!s)return s;var o={};h.forEach(function(e){o[e]=s[e]});if(!e.prop(i,"willValidate"))return o;g=!0;var u=e(i),c={type:(i.getAttribute&&i.getAttribute("type")||"").toLowerCase(),nodeName:(i.nodeName||"").toLowerCase()},p=u.val(),d=!!t.data(i,"hasCustomError"),v;g=!1,o.customError=d;if(o.valid&&o.customError)o.valid=!1;else if(!o.valid){var y=!0;e.each(o,function(e,t){if(t)return y=!1,!1}),y&&(o.valid=!0)}return e.each(f,function(e,r){o[e]=r(u,p,c,o),o[e]&&(o.valid||!v)&&(l||a[c.type]&&a[c.type].mismatch)&&(m[n].call(i,t.createValidationMessage(i,e)),o.valid=!1,v=!0)}),o.valid?(m[n].call(i,""),t.data(i,"hasCustomError",!1)):l&&!v&&!d&&e.each(o,function(e,r){if(e!=="valid"&&r)return m[n].call(i,t.createValidationMessage(i,e)),!1}),o},writeable:!1}})}),p.forEach(function(e){t.onNodeNamesPropertyModify(d,e,function(e){v(this)})});if(r.addEventListener){var y,b=function(t){if(!("form"in t.target))return;var n=t.target.form;clearTimeout(y),v(t.target),n&&l&&e("input",n).each(function(){this.type=="password"&&v(this)})};r.addEventListener("change",b,!0),l&&(r.addEventListener("blur",b,!0),r.addEventListener("keydown",function(e){if(e.keyCode!=13)return;b(e)},!0)),r.addEventListener("input",function(e){clearTimeout(y),y=setTimeout(function(){v(e.target)},290)},!0)}var w=d.join(",");t.addReady(function(t,n){e(w,t).add(n.filter(w)).each(function(){e.prop(this,"validity")})}),l&&t.ready("DOM form-message",function(){t.activeLang({register:"form-core",callback:function(){e("input, select, textarea").getNativeElement().each(function(){if(t.data(this,"hasCustomError"))return;var n=this,r=e.prop(n,"validity")||{valid:!0},i;if(r.valid)return;i=(n.nodeName||"").toLowerCase(),e.each(r,function(e,r){if(e!=="valid"&&r)return m[i].call(n,t.createValidationMessage(n,e)),!1})})}})})}t.defineNodeNameProperty("input","type",{prop:{get:function(){var e=this,n=(e.getAttribute("type")||"").toLowerCase();return t.inputTypes[n]?n:e.type}}})}),jQuery.webshims.register("form-number-date-api",function(e,t,n,r,i){"use strict";t.getStep||(t.getStep=function(t,n){var r=e.attr(t,"step");return r==="any"?r:(n=n||l(t),!u[n]||!u[n].step?r:(r=y.number.asNumber(r),(!isNaN(r)&&r>0?r:u[n].step)*(u[n].stepScaleFactor||1)))}),t.addMinMaxNumberToCache||(t.addMinMaxNumberToCache=function(e,t,n){e+"AsNumber"in n||(n[e+"AsNumber"]=u[n.type].asNumber(t.attr(e)),isNaN(n[e+"AsNumber"])&&e+"Default"in u[n.type]&&(n[e+"AsNumber"]=u[n.type][e+"Default"]))});var s=parseInt("NaN",10),o=r,u=t.inputTypes,a=function(e){return typeof e=="number"||e&&e==e*1},f=function(t){return e('<input type="'+t+'" />').prop("type")===t},l=function(e){return(e.getAttribute("type")||"").toLowerCase()},c=function(e){var t=e*1;return e&&(t==e||e=="0"+t)},h=t.addMinMaxNumberToCache,p=function(e,t){e=""+e,t-=e.length;for(var n=0;n<t;n++)e="0"+e;return e},d=1e-7,v=t.bugs.bustedValidity;t.addValidityRule("stepMismatch",function(e,n,r,i){if(n==="")return!1;"type"in r||(r.type=l(e[0]));var s=(i||{}).stepMismatch||!1,o;if(u[r.type]&&u[r.type].step){"step"in r||(r.step=t.getStep(e[0],r.type));if(r.step=="any")return!1;"valueAsNumber"in r||(r.valueAsNumber=u[r.type].asNumber(n));if(isNaN(r.valueAsNumber))return!1;h("min",e,r),o=r.minAsNumber,isNaN(o)&&(o=u[r.type].stepBase||0),s=Math.abs((r.valueAsNumber-o)%r.step),s=!(s<=d||Math.abs(s-r.step)<=d)}return s}),[{name:"rangeOverflow",attr:"max",factor:1},{name:"rangeUnderflow",attr:"min",factor:-1}].forEach(function(e,n){t.addValidityRule(e.name,function(t,n,r,i){var s=(i||{})[e.name]||!1;if(n==="")return s;"type"in r||(r.type=l(t[0]));if(u[r.type]&&u[r.type].asNumber){"valueAsNumber"in r||(r.valueAsNumber=u[r.type].asNumber(n));if(isNaN(r.valueAsNumber))return!1;h(e.attr,t,r);if(isNaN(r[e.attr+"AsNumber"]))return s;s=r[e.attr+"AsNumber"]*e.factor<r.valueAsNumber*e.factor-d}return s})}),t.reflectProperties(["input"],["max","min","step"]);var m=t.defineNodeNameProperty("input","valueAsNumber",{prop:{get:function(){var t=this,n=l(t),r=u[n]&&u[n].asNumber?u[n].asNumber(e.prop(t,"value")):m.prop._supget&&m.prop._supget.apply(t,arguments);return r==null&&(r=s),r},set:function(n){var r=this,i=l(r);if(u[i]&&u[i].numberToString){if(isNaN(n)){e.prop(r,"value","");return}var s=u[i].numberToString(n);s!==!1?e.prop(r,"value",s):t.error("INVALID_STATE_ERR: DOM Exception 11")}else m.prop._supset&&m.prop._supset.apply(r,arguments)}}}),g=t.defineNodeNameProperty("input","valueAsDate",{prop:{get:function(){var t=this,n=l(t);return u[n]&&u[n].asDate&&!u[n].noAsDate?u[n].asDate(e.prop(t,"value")):g.prop._supget&&g.prop._supget.call(t)||null},set:function(n){var r=this,i=l(r);if(!(u[i]&&u[i].dateToString&&!u[i].noAsDate))return g.prop._supset&&g.prop._supset.apply(r,arguments)||null;if(n===null)return e.prop(r,"value",""),"";var s=u[i].dateToString(n);if(s!==!1)return e.prop(r,"value",s),s;t.error("INVALID_STATE_ERR: DOM Exception 11")}}});e.each({stepUp:1,stepDown:-1},function(n,r){var i=t.defineNodeNameProperty("input",n,{prop:{value:function(n){var s,o,a,f,c,h,p=l(this);if(!u[p]||!u[p].asNumber){if(i.prop&&i.prop.value)return i.prop.value.apply(this,arguments);throw t.info("no step method for type: "+p),"invalid state error"}h={type:p},n||(n=1,t.info("you should always use a factor for stepUp/stepDown")),n*=r,o=e.prop(this,"valueAsNumber");if(isNaN(o))throw t.info("valueAsNumber is NaN can't apply stepUp/stepDown "),"invalid state error";s=t.getStep(this,p);if(s=="any")throw t.info("step is 'any' can't apply stepUp/stepDown"),"invalid state error";t.addMinMaxNumberToCache("min",e(this),h),t.addMinMaxNumberToCache("max",e(this),h),s*=n,o+=s,f=(o-(h.minAsNumber||0))%s,f&&Math.abs(f)>d&&(c=o-f,c+=f>0?s:-s,o=c.toFixed(5)*1);if(!isNaN(h.maxAsNumber)&&o>h.maxAsNumber||!isNaN(h.minAsNumber)&&o<h.minAsNumber)throw t.info("max/min overflow can't apply stepUp/stepDown"),"invalid state error";a?e.prop(this,"valueAsDate",a):e.prop(this,"valueAsNumber",o)}}})});var y={number:{mismatch:function(e){return!a(e)},step:1,stepScaleFactor:1,asNumber:function(e){return a(e)?e*1:s},numberToString:function(e){return a(e)?e:!1}},range:{minDefault:0,maxDefault:100},date:{mismatch:function(e){if(!e||!e.split||!/\d$/.test(e))return!0;var t,n=e.split(/\u002D/);if(n.length!==3)return!0;var r=!1;if(n[0].length!==4||n[1].length!=2||n[1]>12||n[2].length!=2||n[2]>33)r=!0;else for(t=0;t<3;t++)if(!c(n[0])){r=!0;break}return r||e!==this.dateToString(this.asDate(e,!0))},step:1,stepScaleFactor:864e5,asDate:function(e,t){return!t&&this.mismatch(e)?null:new Date(this.asNumber(e,!0))},asNumber:function(e,t){var n=s;if(t||!this.mismatch(e))e=e.split(/\u002D/),n=Date.UTC(e[0],e[1]-1,e[2]);return n},numberToString:function(e){return a(e)?this.dateToString(new Date(e*1)):!1},dateToString:function(e){return e&&e.getFullYear?e.getUTCFullYear()+"-"+p(e.getUTCMonth()+1,2)+"-"+p(e.getUTCDate(),2):!1}},time:{mismatch:function(t,n){if(!t||!t.split||!/\d$/.test(t))return!0;t=t.split(/\u003A/);if(t.length<2||t.length>3)return!0;var r=!1,i;return t[2]&&(t[2]=t[2].split(/\u002E/),i=parseInt(t[2][1],10),t[2]=t[2][0]),e.each(t,function(e,t){if(!c(t)||t.length!==2)return r=!0,!1}),r?!0:t[0]>23||t[0]<0||t[1]>59||t[1]<0?!0:t[2]&&(t[2]>59||t[2]<0)?!0:i&&isNaN(i)?!0:(i&&(i<100?i*=100:i<10&&(i*=10)),n===!0?[t,i]:!1)},step:60,stepBase:0,stepScaleFactor:1e3,asDate:function(e){return e=new Date(this.asNumber(e)),isNaN(e)?null:e},asNumber:function(e){var t=s;return e=this.mismatch(e,!0),e!==!0&&(t=Date.UTC("1970",0,1,e[0][0],e[0][1],e[0][2]||0),e[1]&&(t+=e[1])),t},dateToString:function(e){if(e&&e.getUTCHours){var t=p(e.getUTCHours(),2)+":"+p(e.getUTCMinutes(),2),n=e.getSeconds();return n!="0"&&(t+=":"+p(n,2)),n=e.getUTCMilliseconds(),n!="0"&&(t+="."+p(n,3)),t}return!1}},month:{mismatch:function(e){return y.date.mismatch(e+"-01")},step:1,stepScaleFactor:!1,asDate:function(e){return new Date(y.date.asNumber(e+"-01"))},asNumber:function(e){var t=s;return e&&!this.mismatch(e)&&(e=e.split(/\u002D/),e[0]=e[0]*1-1970,e[1]=e[1]*1-1,t=e[0]*12+e[1]),t},numberToString:function(e){var t,n=!1;return a(e)&&(t=e%12,e=(e-t)/12+1970,t+=1,t<1&&(e-=1,t+=12),n=p(e,4)+"-"+p(t,2)),n},dateToString:function(e){if(e&&e.getUTCHours){var t=y.date.dateToString(e);return t.split&&(t=t.split(/\u002D/))?t[0]+"-"+t[1]:!1}return!1}}};if(v||!f("range")||!f("time"))y.range=e.extend({},y.number,y.range),y.time=e.extend({},y.date,y.time),y.month=e.extend({},y.date,y.month);["number","month","range","date","time"].forEach(function(e){(v||!f(e))&&t.addInputType(e,y[e])}),e("<input />").prop("labels")==null&&t.defineNodeNamesProperty("button, input, keygen, meter, output, progress, select, textarea","labels",{prop:{get:function(){if(this.type=="hidden")return null;var t=this.id,n=e(this).closest("label").filter(function(){var e=this.attributes["for"]||{};return!e.specified||e.value==t});return t&&(n=n.add('label[for="'+t+'"]')),n.get()},writeable:!1}})}),function(e){var t=0,n=function(e){return typeof e=="number"||e&&e==e*1},r=function(e,t){return typeof e=="number"||e&&e==e*1?e*1:t},i=["step","min","max","readonly","title","disabled","tabindex"],s={_create:function(){var t;this.element.addClass("ws-range").attr({role:"slider"}).html('<span class="ws-range-min" /><span class="ws-range-rail"><span class="ws-range-thumb" /></span>'),this.trail=e(".ws-range-rail",this.element),this.range=e(".ws-range-min",this.element),this.thumb=e(".ws-range-thumb",this.trail),this.updateMetrics(),this.orig=this.options.orig;for(t=0;t<i.length;t++)this[i[t]](this.options[i[t]]);this.value=this._value,this.value(this.options.value),this.list(this.options.options),this.element.data("rangeUi",this),this.addBindings(),this._init=!0},value:e.noop,_value:function(e,t,n){var r,i=this.options,s=e,o={},u={};!t&&parseFloat(e,10)!=e&&(e=i.min+(i.max-i.min)/2),t||(e=this.normalizeVal(e)),r=100*((e-i.min)/(i.max-i.min)),this.options.value=e,this.thumb.stop(),this.range.stop(),u[this.dirs.width]=r+"%",this.vertical&&(r=Math.abs(r-100)),o[this.dirs.left]=r+"%",n?(typeof i.animate!="object"&&(i.animate={}),this.thumb.animate(o,i.animate),this.range.animate(u,i.animate)):(this.thumb.css(o),this.range.css(u)),this.orig&&(s!=e||!this._init&&this.orig.value!=e)&&this.options._change(e),this.element.attr({"aria-valuenow":this.options.value,"aria-valuetext":this.options.options[this.options.value]||this.options.value})},list:function(t){var r=this.options,i=r.min,s=r.max,o=this.trail,u=this;r.options=t||{},this.element.attr({"aria-valuetext":r.options[r.value]||r.value}),e(".ws-range-ticks",o).remove(),e.each(r.options,function(e,t){if(!n(e)||e<i||e>s)return;var a=100*((e-i)/(s-i)),f=r.showLabels?' title="'+t+'"':"";o.append('<span class="ws-range-ticks"'+f+' style="'+u.dirs.pos+": "+a+'%;" />')})},readonly:function(e){e=!!e,this.options.readonly=e,this.element.attr("aria-readonly",""+e)},disabled:function(e){e=!!e,this.options.disabled=e,e?this.element.attr({tabindex:-1,"aria-disbaled":"true"}):this.element.attr({tabindex:this.options.tabindex,"aria-disbaled":"false"})},tabindex:function(e){this.options.tabindex=e,this.options.disabled||this.element.attr({tabindex:e})},title:function(e){this.element.prop("title",e)},min:function(e){this.options.min=r(e,0),this.value(this.options.value,!0)},max:function(e){this.options.max=r(e,100),this.value(this.options.value,!0)},step:function(e){this.options.step=e=="any"?"any":r(e,1),this.value(this.options.value)},normalizeVal:function(e){var t,n,r,i=this.options;return e<=i.min?e=i.min:e>=i.max?e=i.max:i.step!="any"&&(r=i.step,t=(e-i.min)%r,n=e-t,Math.abs(t)*2>=r&&(n+=t>0?r:-r),e=n.toFixed(5)*1),e},doStep:function(e){var t=r(this.options.step,1);this.options.step=="any"&&(t=Math.min(t,(this.options.max-this.options.min)/10)),this.value(this.options.value+t*e)},getStepedValueFromPos:function(e){var t,n,r,i;return e<=0?t=this.options[this.dirs.min]:e>100?t=this.options[this.dirs.max]:(this.vertical&&(e=Math.abs(e-100)),t=(this.options.max-this.options.min)*(e/100)+this.options.min,i=this.options.step,i!="any"&&(n=(t-this.options.min)%i,r=t-n,Math.abs(n)*2>=i&&(r+=n>0?i:-i),t=r.toFixed(5)*1)),t},addBindings:function(){var t,n,r,i=this,s=this.options,o=function(){var t={};return{init:function(n,r,s){t[n]||(t[n]={fn:s},i.orig&&e(i.orig).on(n,function(){t[n].val=e.prop(i.orig,"value")})),t[n].val=r},call:function(e,n){t[e].val!=n&&(clearTimeout(t[e].timer),t[e].val=n,t[e].timer=setTimeout(function(){t[e].fn(n,i)},0))}}}(),u=function(e,r){this.vertical&&(left=Math.abs(left-100));var u=i.getStepedValueFromPos((e[i.dirs.mouse]-t)*n);u!=s.value&&(i.value(u,!1,r),o.call("input",u))},a=function(t){t&&t.type=="mouseup"&&(o.call("input",s.value),o.call("change",s.value)),i.element.removeClass("ws-active"),e(document).off("mousemove",u).off("mouseup",a)},f=function(r){r.preventDefault(),e(document).off("mousemove",u).off("mouseup",a);if(!s.readonly&&!s.disabled){t=i.element.focus().addClass("ws-active").offset(),n=i.element[i.dirs.width]();if(!n||!t)return;t=t[i.dirs.pos],n=100/(n-(i.thumb[i.dirs.outerWidth]()||2)/2),u(r,i.options.animate),e(document).on({mouseup:a,mousemove:u}),r.stopPropagation()}};o.init("input",s.value,this.options.input),o.init("change",s.value,this.options.change),this.element.on({mousedown:f,focus:function(e){s.disabled||(o.init("input",s.value),o.init("change",s.value),i.element.addClass("ws-focus")),r=!0},blur:function(e){i.element.removeClass("ws-focus ws-active"),r=!1,o.init("input",s.value),o.call("change",s.value)},keyup:function(){i.element.removeClass("ws-active"),o.call("input",s.value),o.call("change",s.value)},mousewheel:function(e,t){t&&r&&!s.readonly&&!s.disabled&&(i.doStep(t),e.preventDefault(),o.call("input",s.value))},keypress:function(e){var t=!0,n=e.keyCode;!s.readonly&&!s.disabled&&(n==39||n==38?i.doStep(1):n==37||n==40?i.doStep(-1):n==33?i.doStep(10):n==34?i.doStep(-10):n==36?i.value(i.options.max):n==35?i.value(i.options.min):t=!1,t&&(i.element.addClass("ws-active"),o.call("input",s.value),e.preventDefault()))}}),this.thumb.on({mousedown:f})},updateMetrics:function(){this.vertical=this.element.innerHeight()-this.element.innerWidth()>10,this.dirs=this.vertical?{mouse:"pageY",pos:"top",min:"max",max:"min",left:"top",width:"height",outerWidth:"outerHeight"}:{mouse:"pageX",pos:"left",min:"min",max:"min",left:"left",width:"width",outerWidth:"outerWidth"},this.element[this.vertical?"addClass":"removeClass"]("vertical-range")[this.vertical?"addClass":"removeClass"]("horizontal-range")}};e.fn.rangeUI=function(t){return t=e.extend({readonly:!1,disabled:!1,tabindex:0,min:0,step:1,max:100,value:50,input:e.noop,change:e.noop,_change:e.noop,showLabels:!0},t),this.each(function(){e.webshims.objectCreate(s,{element:{value:e(this)}},t)})},jQuery.webshims.isReady("range-ui",!0)}(jQuery),jQuery.webshims.register("form-number-date-ui",function(e,t,n,r,i,s){"use strict";var o,u=function(e){return e?(e+="",e.length==1?"0"+e:e):""};(function(){var t=e.webshims.formcfg;t.de={numberFormat:{",":".",".":","},timeSigns:":. ",numberSigns:",",dateSigns:".",dFormat:".",patterns:{d:"dd.mm.yy"},date:{close:"schlie\u00dfen",prevText:"zur\u00fcck",nextText:"Vor",currentText:"heute",monthNames:["Januar","Februar","M\u00e4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],monthNamesShort:["Jan","Feb","M\u00e4r","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],dayNames:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],dayNamesShort:["So","Mo","Di","Mi","Do","Fr","Sa"],dayNamesMin:["So","Mo","Di","Mi","Do","Fr","Sa"],weekHeader:"KW",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}},t.en={numberFormat:{".":".",",":","},numberSigns:".",dateSigns:"/",timeSigns:":. ",dFormat:"/",patterns:{d:"mm/dd/yy"},date:{closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}},t["en-US"]=t["en-US"]||t.en,t[""]=t[""]||t["en-US"],o=t[""];var n=function(t){if(!t.date.monthkeys){var n=function(e,n){var r,i=e+1;r=i<10?"0"+i:""+i,t.date.monthkeys[i]=r,t.date.monthkeys[n]=r};t.date.monthkeys={},e.each(t.date.monthNames,n),e.each(t.date.monthNamesShort,n)}};n(o),e.webshims.ready("dom-extend",function(){e.webshims.activeLang({register:"form-core",callback:function(){e.each(arguments,function(i,s){if(t[s])return o=t[s],n(o),e(r).triggerHandler("wslocalechange"),!1})}})})})(),function(){var t=function(t){e(this)[t.type=="mousepressstart"?"addClass":"removeClass"]("mousepress-ui")},n=function(e,t){return typeof e=="number"||e&&e==e*1?e*1:t},i=["step","min","max","readonly","title","disabled","tabindex","placeholder","value"],s=function(t){if(!o.patterns[t+"Obj"]){var n={};e.each(o.patterns[t].split(o[t+"Format"]),function(e,t){n[t]=e}),o.patterns[t+"Obj"]=n}},a={number:function(e){return(e+"").replace(/\,/g,"").replace(/\./,o.numberFormat["."])},time:function(e){return e},month:function(e,t){var n,r=e.split("-");return r[0]&&r[1]&&(n=o.date[t.monthNames]||o.date.monthNames,r[1]=n[r[1]*1-1],r[1]&&(e=o.date.showMonthAfterYear?r.join(" "):r[1]+" "+r[0])),e},date:function(e){var t=(e+"").split("-");return t[2]&&t[1]&&t[0]&&(e=o.patterns.d.replace("yy",t[0]||""),e=e.replace("mm",t[1]||""),e=e.replace("dd",t[2]||"")),e}},f={number:function(e){return(e+"").replace(o.numberFormat[","],"").replace(o.numberFormat["."],".")},time:function(e){return e},month:function(e){var t=e.trim().split(/[\s-\/\\]+/);return t.length==2&&(t[0]=o.date.monthkeys[t[0]]||t[0],t[1]=o.date.monthkeys[t[1]]||t[1],t[1].length==2?e=t[0]+"-"+t[1]:t[0].length==2&&(e=t[1]+"-"+t[0])),e},date:function(e){s("d");var t,n=o.patterns.dObj;return e=e.split(o.dFormat),e.length==3?[u(e[n.yy]),u(e[n.mm]),u(e[n.dd])].join("-"):""}},l={number:{step:1},time:{step:60},month:{step:1,start:new Date},date:{step:1,start:new Date}},c=function(){var t={};return function(n){var r;return t[n]||(r=e('<input type="'+n+'" />'),t[n]=function(e){var t=typeof e=="object"?"valueAsDate":"value";return r.prop(t,e).prop("valueAsNumber")}),t[n]}}();l.range=l.number;var h={_create:function(){var t;this.type=this.options.type,this.orig=this.options.orig,this.elemHelper=e('<input type="'+this.type+'" />'),this.asNumber=c(this.type),this.buttonWrapper=e('<span class="input-buttons '+this.type+'-input-buttons"><span unselectable="on" class="step-controls"><span class="step-up"></span><span class="step-down"></span></span></span>').insertAfter(this.element),typeof l[this.type].start=="object"&&(l[this.type].start=this.asNumber(l[this.type].start));for(t=0;t<i.length;t++)this[i[t]](this.options[i[t]]);var n=this.element.attr("autocomplete","off").data("wsspinner",this);this.addBindings(),this._init=!0},parseValue:function(e){return f[this.type](e)},formatValue:function(e){return a[this.type](e,this.options)},placeholder:function(e){var t;this.options.placeholder=e,this.type=="date"&&(t=(e||"").split("-"),t.length==3&&(this.options.placeholder=o.patterns.d.replace("yy",t[0]).replace("mm",t[1]).replace("dd",t[2]))),this.element.prop("placeholder",this.options.placeholder)},addZero:u,_setStartInRange:function(){var e=l[this.type].start||0;!isNaN(this.minAsNumber)&&e<this.minAsNumber?e=this.minAsNumber:!isNaN(this.maxAsNumber)&&e>this.maxAsNumber&&(e=this.maxAsNumber),this.elemHelper.prop("valueAsNumber",e).prop("value"),this.options.defValue=this.elemHelper.prop("value")},value:function(e){this.valueAsNumber=this.asNumber(e),this.options.value=e,isNaN(this.valueAsNumber)?this._setStartInRange():this.elemHelper.prop("value",e),this.element.prop("value",a[this.type](e,this.options))},list:function(e){this.options.options=e||{}},readonly:function(e){this.options.readonly=!!e,this.element.prop("readonly",this.options.readonly),(this.options.readonly||this._init)&&this.buttonWrapper[this.options.readonly?"addClass":"removeClass"]("ws-readonly")},disabled:function(e){this.options.disabled=!!e,this.element.prop("disabled",this.options.disabled),(this.options.disabled||this._init)&&this.buttonWrapper[this.options.readonly?"addClass":"removeClass"]("ws-disabled")},tabindex:function(e){this.options.tabindex=e,this.element.prop("tabindex",this.options.tabindex)},title:function(e){this.options.title=e,this.element.prop("tabindex",this.options.title)},min:function(e){this.elemHelper.prop("min",e),this.minAsNumber=this.asNumber(e),this.valueAsNumber!=null&&isNaN(this.valueAsNumber)&&this._setStartInRange()},max:function(e){this.elemHelper.prop("max",e),this.maxAsNumber=this.asNumber(e),this.valueAsNumber!=null&&isNaN(this.valueAsNumber)&&this._setStartInRange()},step:function(e){var t=l[this.type];this.elemHelper.prop("step",n(e,t.step))},addBindings:function(){var n,i=this,s=this.options,u=function(){var t={};return{init:function(n,r,s){t[n]||(t[n]={fn:s},e(i.orig).on(n,function(){t[n].val=e.prop(i.orig,"value")})),t[n].val=r},call:function(e,n){t[e]&&t[e].val!=n&&(clearTimeout(t[e].timer),t[e].val=n,t[e].timer=setTimeout(function(){t[e].fn(n,i)},0))}}}(),a={},l=function(e){if(l.prevent)return e.preventDefault(),i.element.focus(),e.stopImmediatePropagation(),!0},c=function(){return!s.disabled&&!n&&i.element[0].focus(),l.set(),!1};l.set=function(){var e,t=function(){l.prevent=!1};return function(){clearTimeout(e),l.prevent=!0,setTimeout(t,9)}}(),["stepUp","stepDown"].forEach(function(e){a[e]=function(t){if(!s.disabled&&!s.readonly){n||c();var r=!1;t||(t=1);try{i.elemHelper[e](t),r=i.elemHelper.prop("value"),i.value(r),u.call("input",r)}catch(o){}return r}}}),this.buttonWrapper.on("mousedown",c),this.setChange=function(e){i.value(e),u.call("input",e),u.call("change",e)},this.element.on({blur:function(t){!l(t)&&!s.disabled&&!s.readonly&&(u.call("input",e.prop(i.orig,"value")),u.call("change",e.prop(i.orig,"value")),l.prevent||(n=!1))},focus:function(){u.init("input",e.prop(i.orig,"value"),i.options.input),u.init("change",e.prop(i.orig,"value"),i.options.change),n=!0},change:function(){var t=f[i.type](e.prop(this,"value"));e.prop(i.orig,"value",t),u.call("input",t),u.call("change",t)},mousewheel:function(e,t){t&&n&&!s.disabled&&(a[t>0?"stepUp":"stepDown"](),e.preventDefault())},keypress:function(e){var t,n=!0,r=e.keyCode;r==38?a.stepUp():r==40?a.stepDown():!e.ctrlKey&&!e.metaKey&&o[i.type+"Signs"]?(t=String.fromCharCode(e.charCode==null?r:e.charCode),n=!(t<" "||(o[i.type+"Signs"]+"0123456789").indexOf(t)>-1)):n=!1,n&&e.preventDefault()}}),e(r).on("wslocalechange",function(){i.value(i.options.value)}),e(".step-up",this.buttonWrapper).on({"mousepressstart mousepressend":t,"mousedown mousepress":function(e){a.stepUp()}}),e(".step-down",this.buttonWrapper).on({"mousepressstart mousepressend":t,"mousedown mousepress":function(e){a.stepDown()}})}};e.fn.spinbtnUI=function(t){return t=e.extend({monthNames:"monthNamesShort",size:1,startAt:0,selectNav:!1,openOnFocus:!1},t),this.each(function(){e.webshims.objectCreate(h,{element:{value:e(this)}},t)})}}(),function(){var n={},i={},s=function(e){return[e.getFullYear(),u(e.getMonth()+1),u(e.getDate())]},a=s(new Date);n.getYearList=function(e,t){var r,i,s,o,u,f,l,c,h;e=e[0]*1;var p=t.options.size||1,d=e%(12*p),v=e-d,m=t.options.max.split("-"),g=t.options.min.split("-"),y=t.options.value.split("-"),b=0,w="";for(r=0;r<p;r++){r?v+=12:f=n.isInRange([v-1],m,g)?{"data-action":"setYearList",value:v-1}:!1,w+='<div class="year-list"><h3>'+v+" - "+(v+11)+"</h3>",u=[];for(i=0;i<12;i++)s=v+i,h=[],n.isInRange([s],m,g)?(o="",b++):o=' disabled="disabled"',s==a[0]&&h.push("this-year"),y[0]==s&&h.push("selected-value"),c=h.length?' class="'+h.join(" ")+'"':"",u.push('<li><button type="button"'+o+c+' data-action="setMonthList" value="'+s+'">'+s+"</button></li>");r==p-1&&(l=n.isInRange([s+1],m,g)?{"data-action":"setYearList",value:s+1}:!1),w+='<ul class="year-list">'+u.join("")+"</ul></div>"}return{enabled:b,main:w,next:l,prev:f}},n.getMonthList=function(e,t){var r,i,s,u,f,l,c,h,p,d,v,m=t.options.size||1,g=t.options.max.split("-"),y=t.options.min.split("-"),b=t.options.value.split("-"),w=0,E="";e=e[0]-Math.floor((m-1)/2);for(r=0;r<m;r++){r?e++:h=n.isInRange([e-1],g,y)?{"data-action":"setMonthList",value:e-1}:!1,r==m-1&&(p=n.isInRange([e+1],g,y)?{"data-action":"setMonthList",value:e+1}:!1),l=[],!n.isInRange([e,"01"],g,y)&&!n.isInRange([e,"12"],g,y)?(f=' disabled="disabled"',c=!0):(c=!1,f=""),E+='<div class="month-list">',E+=t.options.selectNav?'<select data-action="setMonthList">'+n.createYearSelect(e,g,y).join("")+"</select>":'<button data-action="setYearList"'+f+' value="'+e+'">'+e+"</button>";for(i=0;i<12;i++)u=o.date.monthkeys[i+1],s=o.date.monthNames[i],v=[],c||!n.isInRange([e,u],g,y)?f=' disabled="disabled"':(f="",w++),e==a[0]&&a[1]==u&&v.push("this-month"),b[0]==e&&b[1]==u&&v.push("selected-value"),d=v.length?' class="'+v.join(" ")+'"':"",l.push('<li><button type="button"'+f+d+' data-action="'+(t.type=="month"?"changeInput":"setDayList")+'" value="'+e+"-"+u+'">'+s+"</button></li>");E+="<ul>"+l.join("")+"</ul></div>"}return{enabled:w,main:E,prev:h,next:p}},n.getDayList=function(e,t){var r,i,u,f,l,c,h,p,d,v,m,g,y,b,w,E,S,x,T,N=t.options.size||1,C=t.options.max.split("-"),k=t.options.min.split("-"),L=t.options.value.split("-"),A=o.date[t.options.monthNames]||o.date.monthNames,O=0,M=[],_=new Date(e[0],e[1]-1,1);_.setMonth(_.getMonth()-Math.floor((N-1)/2));for(r=0;r<N;r++){g=_.getMonth(),r||(x=new Date(_.getTime()),x.setDate(-1),w=s(x),d=n.isInRange(w,C,k)?{"data-action":"setDayList",value:w[0]+"-"+w[1]}:!1),w=s(_),M.push('<div class="day-list">'),t.options.selectNav?(E=['<select data-action="setDayList">'+n.createMonthSelect(w,C,k,A).join("")+"</select>",'<select data-action="setDayList">'+n.createYearSelect(w[0],C,k,"-"+w[1]).join("")+"</select>"],o.date.showMonthAfterYear&&E.reverse(),M.push(E.join(" "))):(E=[A[w[1]*1-1],w[0]],o.date.showMonthAfterYear&&E.reverse(),M.push('<button data-action="setMonthList" value="'+w[0]+"-"+w[1]+'">'+E.join(" ")+"</button>")),M.push("<table><tr>");for(u=1;u<o.date.dayNamesShort.length;u++)M.push("<th>"+o.date.dayNamesShort[u]+"</th>");M.push("<th>"+o.date.dayNamesShort[0]+"</th>"),M.push("</tr><tr>");for(i=0;i<46;i++){m=i&&!(i%7),y=_.getMonth(),b=g!=y,T=[];if(m&&b){M.push("</tr>");break}m&&M.push("</tr><tr>"),i||(f=_.getDay()-1,f>-1&&f<6&&_.setDate(_.getDate()-f),y=_.getMonth(),b=g!=y),w=s(_),S='<td><button data-action="changeInput" value="'+w.join("-")+'"',b&&T.push("othermonth"),w[0]==a[0]&&a[1]==w[1]&&a[2]==w[2]&&T.push("this-day"),L[0]==w[0]&&w[1]==L[1]&&w[2]==L[2]&&T.push("selected-value"),T.length&&(S+=' class="'+T.join(" ")+'"'),n.isInRange(w,C,k)||(S+=' disabled=""'),M.push(S+">"+_.getDate()+"</button></td>"),_.setDate(_.getDate()+1)}M.push("</table></div>"),r==N-1&&(w=s(_),w[2]=1,v=n.isInRange(w,C,k)?{"data-action":"setDayList",value:w[0]+"-"+w[1]}:!1)}return{enabled:9,main:M.join(""),prev:d,next:v}},n.isInRange=function(e,t,n){var r,i=!0;for(r=0;r<e.length;r++){if(n[r]&&n[r]>e[r]){i=!1;break}if(!n[r]||n[r]!=e[r])break}if(i)for(r=0;r<e.length;r++){if(t[r]&&t[r]<e[r]){i=!1;break}if(!t[r]||t[r]!=e[r])break}return i},n.createMonthSelect=function(e,t,r,i){i||(i=o.date.monthNames);var s,a=0,f=[],l=e[1]-1;for(;a<i.length;a++)s=l==a?' selected=""':"",(s||n.isInRange([e[0],a+1],t,r))&&f.push('<option value="'+e[0]+"-"+u(a+1)+'"'+s+">"+i[a]+"</option>");return f},n.createYearSelect=function(e,t,r,i){var s,o=!0,u=!0,a=['<option selected="">'+e+"</option>"],f=0;i||(i="");while(f<8&&(o||u))f++,s=e-f,o&&n.isInRange([s],t,r)?a.unshift('<option value="'+(s+i)+'">'+s+"</option>"):o=!1,s=e+f,u&&n.isInRange([s],t,r)?a.push('<option value="'+(s+i)+'">'+s+"</option>"):u=!1;return a};var f={changeInput:function(e,t,n){n.setChange(e),t.hide()}};(function(){var t=function(e){return"get"+e+"List"},r={date:"Day",week:"Day",month:"Month"};e.each({setYearList:["Year","Month","Day"],setMonthList:["Month","Day"],setDayList:["Day"]},function(i,s){var o=s.map(t);f[i]=function(t,i,u,a){var f=t.split("-");a||(a=0),e.each(o,function(e,t){if(e>=a){var o=n[t](f,u);if(f.length<2||o.enabled>1||r[u.type]===s[e])return i.bodyElement.html(o.main),o.prev?i.prevElement.attr(o.prev).prop({disabled:!1}):i.prevElement.removeAttr("data-action").prop({disabled:!0}),o.next?i.nextElement.attr(o.next).prop({disabled:!1}):i.nextElement.removeAttr("data-action").prop({disabled:!0}),!1}})}})})(),n.commonInit=function(t,n){t.list=function(r){var i=this.options,s=[];i.options=r||{},e("div.ws-options",n.contentElement).remove(),e.each(i.options,function(e,n){s.push('<li><button value="'+e+'" data-action="changeInput">'+(n||t.formatValue(e))+"</button></li>")}),s.length&&n.bodyElement.after('<div class="ws-options"><ul>'+s.join("")+"</ul></div>")},n.contentElement.html('<button class="ws-prev"></button> <button class="ws-next"></button><div class="ws-picker-body"></div><div class="ws-button-row"><button type="button" class="ws-current" data-text="current"></button> <button type="button" data-text="empty" class="ws-empty"></button></div>'),n.nextElement=e("button.ws-next",n.contentElement),n.prevElement=e("button.ws-prev",n.contentElement),n.bodyElement=e("div.ws-picker-body",n.contentElement),n.buttonRow=e("div.ws-button-row",n.contentElement),e(r).onTrigger("wslocalechange",function(){n.nextElement.text(o.date.nextText),n.prevElement.text(o.date.prevText),e("button",n.buttonRow).each(function(){e(this).text(e(this).data("text"))})}),t.list(t.options.options)},n.month=function(r){var i=t.objectCreate(t.wsPopover,{},{prepareFor:r.element}),s=e('<span class="popover-opener" />').appendTo(r.buttonWrapper),o=r.options,u=!1,a=function(){var n=e(this).attr("data-action");return f[n]?f[n](e(this).val(),i,r):t.warn("no action for "+n),!1},l=function(){!o.disabled&&!o.readonly&&(u||(n.commonInit(r,i),f.setYearList(o.value||o.defValue,i,r,r.options.startAt)),u=!0,i.show(r.element))};i.element.addClass(r.type+"-popover"),i.contentElement.on("click","button[data-action]",a).on("change","select[data-action]",a),s.on("mousedown",l),r.element.on({focus:function(){r.options.openOnFocus&&l()},mousedown:function(){r.element.is(":focus")&&l()}})},n.date=n.month,t.picker=n}(),function(){var n=Modernizr.inputtypes,i,o={},u=["disabled","readonly","value","min","max","step","title","placeholder"],a=["tabindex","data-placeholder"],f=function(e){};e.each(u.concat(a),function(e,n){var r=n.replace(/^data\-/,"");t.onNodeNamesPropertyModify("input",n,function(e){if(!i){var n=t.data(this,"shadowData");n&&n.data&&n.nativeElement===this&&n.data[r]&&n.data[r](e)}})});var l=function(){return function(t,n){o[t]=n,n.attrs=e.merge([],a,n.attrs),n.props=e.merge([],u,n.props)}}(),c=function(t,n){var r=e.prop(t,"list"),i={},s,o;return r&&e("option",r).each(function(){i[e.prop(this,"value")]=e.prop(this,"label")}),n&&(o=function(){n.shim&&(clearTimeout(s),s=setTimeout(function(){n.shim.list(c(t))},9))},e(r).on("updateDatalist",o),e(t).on("listdatalistchange",o)),i},h=function(e){e.stopImmediatePropagation(e)},p=function(){return e.css(this,"display")!="none"},d=function(t){var n,i=function(){e.style(t.orig,"display","");var r=.6;if(!n||t.orig.offsetWidth)t.element.css({marginLeft:e.css(t.orig,"marginLeft"),marginRight:e.css(t.orig,"marginRight")}),t.buttonWrapper&&t.buttonWrapper.filter(p).length&&(t.element.css({paddingRight:""}),(parseInt(t.buttonWrapper.css("marginLeft"),10)||0)<0?t.element.css({paddingRight:""}).css({paddingRight:(parseInt(t.element.css("paddingRight"),10)||0)+t.buttonWrapper.outerWidth()}):r=t.buttonWrapper.outerWidth(!0)+.6),t.element.outerWidth(e(t.orig).outerWidth()-r);n=!0,e.style(t.orig,"display","none")};e(r).onTrigger("updateshadowdom",i)},v=function(){var n=e.prop(this,"type"),r,f,l,p,v;if(o[n]){l={},p=n,f=e.extend({},s[n],e(e.prop(this,"form")).data(n)||{},e(this).data(n)||{},{orig:this,type:n,options:c(this,l),input:function(e){f._change(e,"input")},change:function(e){f._change(e,"change")},_change:function(t,n){i=!0,e.prop(f.orig,"value",t),i=!1,n&&e(f.orig).trigger(n)}});for(r=0;r<u.length;r++)f[u[r]]=e.prop(this,u[r]);for(r=0;r<a.length;r++)p=a[r].replace(/^data\-/,""),f[p]||(f[p]=e.attr(this,a[r]));l.shim=o[n]._create(f),t.addShadowDom(this,l.shim.element,{data:l.shim||{}}),e(this).on("change",function(t){!i&&t.originalEvent&&l.shim.value(e.prop(this,"value"))}),l.shim.element.on("change input",h),l.shim.element.on("focusin focusout",function(t){t.stopImmediatePropagation(t),e(f.orig).trigger(t)}),l.shim.element.on("focus blur",function(t){t.stopImmediatePropagation(t),e(f.orig).triggerHandler(t)}),v=f.calculateWidth!=null?f.calculateWidth:s.calculateWidth,v&&d(l.shim),e(this).css({display:"none"})}};(!n.range||s.replaceUI)&&l("range",{_create:function(t,n){return e("<span />").insertAfter(t.orig).rangeUI(t).data("rangeUi")}}),["number","time","month","date"].forEach(function(r){(!n[r]||s.replaceUI)&&l(r,{_create:function(n,i){var s=e('<input class="ws-'+r+'" type="text" />').insertAfter(n.orig).spinbtnUI(n).data("wsspinner");return t.picker&&t.picker[r]&&t.picker[r](s),s.buttonWrapper.addClass("input-button-size-"+s.buttonWrapper.children().filter(p).length),s}})}),t.addReady(function(t,n){e("input",t).add(n.filter("input")).each(v)})}()});