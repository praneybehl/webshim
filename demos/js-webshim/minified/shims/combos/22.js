webshims.register("details",function(e,t,n,i,a,r){var o=function(t){var n=e(t).parent("details");return n[0]&&n.children(":first").get(0)===t?n:a},s=function(t,n){t=e(t),n=e(n);var i=e.data(n[0],"summaryElement");e.data(t[0],"detailsElement",n),i&&t[0]===i[0]||(i&&(i.hasClass("fallback-summary")?i.remove():i.unbind(".summaryPolyfill").removeData("detailsElement").removeAttr("role").removeAttr("tabindex").removeAttr("aria-expanded").removeClass("summary-button").find("span.details-open-indicator").remove()),e.data(n[0],"summaryElement",t),n.prop("open",n.prop("open")))},l=function(t){var n=e.data(t,"summaryElement");return n||(n=e("> summary:first-child",t),n[0]?s(n,t):(e(t).prependPolyfill('<summary class="fallback-summary">'+r.text+"</summary>"),n=e.data(t,"summaryElement"))),n};t.createElement("summary",function(){var n=o(this);if(n&&!e.data(this,"detailsElement")){var i,a,r=e.attr(this,"tabIndex")||"0";s(this,n),e(this).on({"focus.summaryPolyfill":function(){e(this).addClass("summary-has-focus")},"blur.summaryPolyfill":function(){e(this).removeClass("summary-has-focus")},"mouseenter.summaryPolyfill":function(){e(this).addClass("summary-has-hover")},"mouseleave.summaryPolyfill":function(){e(this).removeClass("summary-has-hover")},"click.summaryPolyfill":function(t){var n=o(this);if(n){if(!a&&t.originalEvent)return a=!0,t.stopImmediatePropagation(),t.preventDefault(),e(this).trigger("click"),a=!1,!1;clearTimeout(i),i=setTimeout(function(){t.isDefaultPrevented()||n.prop("open",!n.prop("open"))},0)}},"keydown.summaryPolyfill":function(t){13!=t.keyCode&&32!=t.keyCode||t.isDefaultPrevented()||(a=!0,t.preventDefault(),e(this).trigger("click"),a=!1)}}).attr({tabindex:r,role:"button"}).prepend('<span class="details-open-indicator" />'),t.moveToFirstEvent(this,"click")}});var u;t.defineNodeNamesBooleanProperty("details","open",function(t){var n=e(e.data(this,"summaryElement"));if(n){var i=t?"removeClass":"addClass",a=e(this);if(!u&&r.animate){a.stop().css({width:"",height:""});var o={width:a.width(),height:a.height()}}if(n.attr("aria-expanded",""+t),a[i]("closed-details-summary").children().not(n[0])[i]("closed-details-child"),!u&&r.animate){var s={width:a.width(),height:a.height()};a.css(o).animate(s,{complete:function(){e(this).css({width:"",height:""})}})}}}),t.createElement("details",function(){u=!0,l(this),e.prop(this,"open",e.prop(this,"open")),u=!1})}),webshims.register("track",function(e,t,n,i){"use strict";var a=t.mediaelement;(new Date).getTime();var r=e.fn.addBack?"addBack":"andSelf",o={subtitles:1,captions:1,descriptions:1},s=e("<track />"),l=Modernizr.ES5&&Modernizr.objectAccessor,u=function(e){var n={};return e.addEventListener=function(e,i){n[e]&&t.error("always use $.on to the shimed event: "+e+" already bound fn was: "+n[e]+" your fn was: "+i),n[e]=i},e.removeEventListener=function(e,i){n[e]&&n[e]!=i&&t.error("always use $.on/$.off to the shimed event: "+e+" already bound fn was: "+n[e]+" your fn was: "+i),n[e]&&delete n[e]},e},c={getCueById:function(e){for(var t=null,n=0,i=this.length;i>n;n++)if(this[n].id===e){t=this[n];break}return t}},d={0:"disabled",1:"hidden",2:"showing"},p={shimActiveCues:null,_shimActiveCues:null,activeCues:null,cues:null,kind:"subtitles",label:"",language:"",id:"",mode:"disabled",readyState:0,oncuechange:null,toString:function(){return"[object TextTrack]"},addCue:function(e){if(this.cues){var n=this.cues[this.cues.length-1];n&&n.startTime>e.startTime&&t.error("cue startTime higher than previous cue's startTime")}else this.cues=a.createCueList();e.track&&e.track.removeCue&&e.track.removeCue(e),e.track=this,this.cues.push(e)},removeCue:function(e){var n=this.cues||[],i=0,a=n.length;if(e.track!=this)return t.error("cue not part of track"),undefined;for(;a>i;i++)if(n[i]===e){n.splice(i,1),e.track=null;break}return e.track?(t.error("cue not part of track"),undefined):undefined},DISABLED:"disabled",OFF:"disabled",HIDDEN:"hidden",SHOWING:"showing",ERROR:3,LOADED:2,LOADING:1,NONE:0},h=["kind","label","srclang"],f={srclang:"language"},m=Function.prototype.call.bind(Object.prototype.hasOwnProperty),v=function(n,i){var a,r,o=[],s=[],l=[];if(n||(n=t.data(this,"mediaelementBase")||t.data(this,"mediaelementBase",{})),i||(n.blockTrackListUpdate=!0,i=e.prop(this,"textTracks"),n.blockTrackListUpdate=!1),clearTimeout(n.updateTrackListTimer),e("track",this).each(function(){var t=e.prop(this,"track");l.push(t),-1==i.indexOf(t)&&s.push(t)}),n.scriptedTextTracks)for(a=0,r=n.scriptedTextTracks.length;r>a;a++)l.push(n.scriptedTextTracks[a]),-1==i.indexOf(n.scriptedTextTracks[a])&&s.push(n.scriptedTextTracks[a]);for(a=0,r=i.length;r>a;a++)-1==l.indexOf(i[a])&&o.push(i[a]);if(o.length||s.length){for(i.splice(0),a=0,r=l.length;r>a;a++)i.push(l[a]);for(a=0,r=o.length;r>a;a++)e([i]).triggerHandler(e.Event({type:"removetrack",track:o[a]}));for(a=0,r=s.length;r>a;a++)e([i]).triggerHandler(e.Event({type:"addtrack",track:s[a]}));(n.scriptedTextTracks||o.length)&&e(this).triggerHandler("updatetrackdisplay")}},g=function(n,i){i||(i=t.data(n,"trackData")),i&&!i.isTriggering&&(i.isTriggering=!0,setTimeout(function(){e(n).closest("audio, video").triggerHandler("updatetrackdisplay"),i.isTriggering=!1},1))},y=e("<div />")[0];n.TextTrackCue=function(e,n,i){3!=arguments.length&&t.error("wrong arguments.length for TextTrackCue.constructor"),this.startTime=e,this.endTime=n,this.text=i,this.id="",this.pauseOnExit=!1,u(this)},n.TextTrackCue.prototype={onenter:null,onexit:null,pauseOnExit:!1,getCueAsHTML:function(){var e,t="",n="",r=i.createDocumentFragment();return m(this,"getCueAsHTML")||(e=this.getCueAsHTML=function(){var e,i;if(t!=this.text)for(t=this.text,n=a.parseCueTextToHTML(t),y.innerHTML=n,e=0,i=y.childNodes.length;i>e;e++)r.appendChild(y.childNodes[e].cloneNode(!0));return r.cloneNode(!0)}),e?e.apply(this,arguments):r.cloneNode(!0)},track:null,id:""},a.createCueList=function(){return e.extend([],c)},a.parseCueTextToHTML=function(){var e=/(<\/?[^>]+>)/gi,t=/^(?:c|v|ruby|rt|b|i|u)/,n=/\<\s*\//,i=function(e,t,i,a){var r;return n.test(a)?r="</"+e+">":(i.splice(0,1),r="<"+e+" "+t+'="'+i.join(" ").replace(/\"/g,"&#34;")+'">'),r},a=function(e){var n=e.replace(/[<\/>]+/gi,"").split(/[\s\.]+/);return n[0]&&(n[0]=n[0].toLowerCase(),t.test(n[0])?"c"==n[0]?e=i("span","class",n,e):"v"==n[0]&&(e=i("q","title",n,e)):e=""),e};return function(t){return t.replace(e,a)}}(),a.loadTextTrack=function(n,i,r,s){var l="play playing timeupdate updatetrackdisplay",u=r.track,c=function(){var r,o,s=e.prop(i,"src");if("disabled"!=u.mode&&s&&e.attr(i,"src")&&(e(n).unbind(l,c),!u.readyState)){r=function(){u.readyState=3,u.cues=null,u.activeCues=u.shimActiveCues=u._shimActiveCues=null,e(i).triggerHandler("error")},u.readyState=1;try{u.cues=a.createCueList(),u.activeCues=u.shimActiveCues=u._shimActiveCues=a.createCueList(),o=e.ajax({dataType:"text",url:s,success:function(s){"text/vtt"!=o.getResponseHeader("content-type")&&t.error("set the mime-type of your WebVTT files to text/vtt. see: http://dev.w3.org/html5/webvtt/#text/vtt"),a.parseCaptions(s,u,function(t){t&&"length"in t?(u.readyState=2,e(i).triggerHandler("load"),e(n).triggerHandler("updatetrackdisplay")):r()})},error:r})}catch(d){r(),t.warn(d)}}};u.readyState=0,u.shimActiveCues=null,u._shimActiveCues=null,u.activeCues=null,u.cues=null,e(n).unbind(l,c),e(n).on(l,c),s&&(u.mode=o[u.kind]?"showing":"hidden",c())},a.createTextTrack=function(n,i){var o,s;return i.nodeName&&(s=t.data(i,"trackData"),s&&(g(i,s),o=s.track)),o||(o=u(t.objectCreate(p)),l||h.forEach(function(t){var n=e.prop(i,t);n&&(o[f[t]||t]=n)}),i.nodeName?(l&&h.forEach(function(n){t.defineProperty(o,f[n]||n,{get:function(){return e.prop(i,n)}})}),o.id=e(i).prop("id"),s=t.data(i,"trackData",{track:o}),a.loadTextTrack(n,i,s,e.prop(i,"default")&&e(i).siblings("track[default]")[r]()[0]==i)):(l&&h.forEach(function(e){t.defineProperty(o,f[e]||e,{value:i[e],writeable:!1})}),o.cues=a.createCueList(),o.activeCues=o._shimActiveCues=o.shimActiveCues=a.createCueList(),o.mode="hidden",o.readyState=2),o.__wsmode=o.mode),o},a.parseCaptionChunk=function(){var e=/^(\d{2})?:?(\d{2}):(\d{2})\.(\d+)\s+\-\-\>\s+(\d{2})?:?(\d{2}):(\d{2})\.(\d+)\s*(.*)/,n=/^(DEFAULTS|DEFAULT)\s+\-\-\>\s+(.*)/g,i=/^(STYLE|STYLES)\s+\-\-\>\s*\n([\s\S]*)/g,a=/^(COMMENT|COMMENTS)\s+\-\-\>\s+(.*)/g;return function(r){var o,s,l,u,c,d,p,h,f,m;if(h=n.exec(r))return null;if(h=i.exec(r))return null;if(h=a.exec(r))return null;for(o=r.split(/\n/g);!o[0].replace(/\s+/gi,"").length&&o.length>0;)o.shift();for(o[0].match(/^\s*[a-z0-9-\_]+\s*$/gi)&&(p=o.shift().replace(/\s*/gi,"")+""),d=0;o.length>d;d++){var v=o[d];(f=e.exec(v))&&(c=f.slice(1),s=parseInt(60*60*(c[0]||0),10)+parseInt(60*(c[1]||0),10)+parseInt(c[2]||0,10)+parseFloat("0."+(c[3]||0)),l=parseInt(60*60*(c[4]||0),10)+parseInt(60*(c[5]||0),10)+parseInt(c[6]||0,10)+parseFloat("0."+(c[7]||0))),o=o.slice(0,d).concat(o.slice(d+1));break}return s||l?(u=o.join("\n"),m=new TextTrackCue(s,l,u),p&&(m.id=p),m):(t.warn("couldn't extract time information: "+[s,l,o.join("\n"),p].join(" ; ")),null)}}(),a.parseCaptions=function(e,n,i){a.createCueList();var r,o,s,l,u;e?(s=/^WEBVTT(\s*FILE)?/gi,o=function(c,d){for(;d>c;c++){if(r=e[c],s.test(r))u=!0;else if(r.replace(/\s*/gi,"").length){if(!u){t.error("please use WebVTT format. This is the standard"),i(null);break}r=a.parseCaptionChunk(r,c),r&&n.addCue(r)}if((new Date).getTime()-30>l){c++,setTimeout(function(){l=(new Date).getTime(),o(c,d)},90);break}}c>=d&&(u||t.error("please use WebVTT format. This is the standard"),i(n.cues))},e=e.replace(/\r\n/g,"\n"),setTimeout(function(){e=e.replace(/\r/g,"\n"),setTimeout(function(){l=(new Date).getTime(),e=e.split(/\n\n+/g),o(0,e.length)},9)},9)):t.error("Required parameter captionData not supplied.")},a.createTrackList=function(n,i){return i=i||t.data(n,"mediaelementBase")||t.data(n,"mediaelementBase",{}),i.textTracks||(i.textTracks=[],t.defineProperties(i.textTracks,{onaddtrack:{value:null},onremovetrack:{value:null},onchange:{value:null},getTrackById:function(t){return e("track#"+t,n)[0]||null}}),u(i.textTracks),e(n).on("updatetrackdisplay",function(){for(var t,n=0;i.textTracks.length>n;n++)t=i.textTracks[n],t.__wsmode!=t.mode&&(t.__wsmode=t.mode,e([i.textTracks]).triggerHandler("change"))})),i.textTracks},Modernizr.track||(t.defineNodeNamesBooleanProperty(["track"],"default"),t.reflectProperties(["track"],["srclang","label"]),t.defineNodeNameProperties("track",{src:{reflect:!0,propType:"src"}})),t.defineNodeNameProperties("track",{kind:{attr:Modernizr.track?{set:function(e){var n=t.data(this,"trackData");this.setAttribute("data-kind",e),n&&(n.attrKind=e)},get:function(){var e=t.data(this,"trackData");return e&&"attrKind"in e?e.attrKind:this.getAttribute("kind")}}:{},reflect:!0,propType:"enumarated",defaultValue:"subtitles",limitedTo:["subtitles","captions","descriptions","chapters","metadata"]}}),e.each(h,function(n,i){var a=f[i]||i;t.onNodeNamesPropertyModify("track",i,function(){var n=t.data(this,"trackData");n&&("kind"==i&&g(this,n),l||(n.track[a]=e.prop(this,i)))})}),t.onNodeNamesPropertyModify("track","src",function(n){if(n){var i,r=t.data(this,"trackData");r&&(i=e(this).closest("video, audio"),i[0]&&a.loadTextTrack(i,this,r))}}),t.defineNodeNamesProperties(["track"],{ERROR:{value:3},LOADED:{value:2},LOADING:{value:1},NONE:{value:0},readyState:{get:function(){return(e.prop(this,"track")||{readyState:0}).readyState},writeable:!1},track:{get:function(){return a.createTextTrack(e(this).closest("audio, video")[0],this)},writeable:!1}},"prop"),t.defineNodeNamesProperties(["audio","video"],{textTracks:{get:function(){var e=this,n=t.data(e,"mediaelementBase")||t.data(e,"mediaelementBase",{}),i=a.createTrackList(e,n);return n.blockTrackListUpdate||v.call(e,n,i),i},writeable:!1},addTextTrack:{value:function(e,n,i){var r=a.createTextTrack(this,{kind:s.prop("kind",e||"").prop("kind"),label:n||"",srclang:i||""}),o=t.data(this,"mediaelementBase")||t.data(this,"mediaelementBase",{});return o.scriptedTextTracks||(o.scriptedTextTracks=[]),o.scriptedTextTracks.push(r),v.call(this),r}}},"prop"),e(i).on("emptied ended updatetracklist",function(n){if(e(n.target).is("audio, video")){var i=t.data(n.target,"mediaelementBase");i&&(clearTimeout(i.updateTrackListTimer),i.updateTrackListTimer=setTimeout(function(){v.call(n.target,i)},0))}});var b=function(e,t){return t.readyState||e.readyState},w=function(e){e.originalEvent&&e.stopImmediatePropagation()},T=function(){if(t.implement(this,"track")){var n,i,a=e.prop(this,"track"),r=this.track;r&&(n=e.prop(this,"kind"),i=b(this,r),(r.mode||i)&&(a.mode=d[r.mode]||r.mode),"descriptions"!=n&&(r.mode="string"==typeof r.mode?"disabled":0,this.kind="metadata",e(this).attr({kind:n}))),e(this).on("load error",w)}};t.addReady(function(n,i){var a=i.filter("video, audio, track").closest("audio, video");e("video, audio",n).add(a).each(function(){v.call(this)}).each(function(){if(Modernizr.track){var n=e.prop(this,"textTracks"),i=this.textTracks;n.length!=i.length&&t.error("textTracks couldn't be copied"),e("track",this).each(T)}}),a.each(function(){var e=this,n=t.data(e,"mediaelementBase");n&&(clearTimeout(n.updateTrackListTimer),n.updateTrackListTimer=setTimeout(function(){v.call(e,n)},9))})}),Modernizr.texttrackapi&&e("video, audio").trigger("trackapichange")});