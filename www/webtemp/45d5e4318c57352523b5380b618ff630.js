
/*! jQuery v1.8.2 jquery.com | jquery.org/license */
(function(a,b){function G(a){var b=F[a]={};return p.each(a.split(s),function(a,c){b[c]=!0}),b}function J(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(I,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:+d+""===d?+d:H.test(d)?p.parseJSON(d):d}catch(f){}p.data(a,c,d)}else d=b}return d}function K(a){var b;for(b in a){if(b==="data"&&p.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function ba(){return!1}function bb(){return!0}function bh(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function bi(a,b){do a=a[b];while(a&&a.nodeType!==1);return a}function bj(a,b,c){b=b||0;if(p.isFunction(b))return p.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return p.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=p.grep(a,function(a){return a.nodeType===1});if(be.test(b))return p.filter(b,d,!c);b=p.filter(b,d)}return p.grep(a,function(a,d){return p.inArray(a,b)>=0===c})}function bk(a){var b=bl.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function bC(a,b){return a.getElementsByTagName(b)[0]||a.appendChild(a.ownerDocument.createElement(b))}function bD(a,b){if(b.nodeType!==1||!p.hasData(a))return;var c,d,e,f=p._data(a),g=p._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;d<e;d++)p.event.add(b,c,h[c][d])}g.data&&(g.data=p.extend({},g.data))}function bE(a,b){var c;if(b.nodeType!==1)return;b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?(b.parentNode&&(b.outerHTML=a.outerHTML),p.support.html5Clone&&a.innerHTML&&!p.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):c==="input"&&bv.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text),b.removeAttribute(p.expando)}function bF(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bG(a){bv.test(a.type)&&(a.defaultChecked=a.checked)}function bY(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=bW.length;while(e--){b=bW[e]+c;if(b in a)return b}return d}function bZ(a,b){return a=b||a,p.css(a,"display")==="none"||!p.contains(a.ownerDocument,a)}function b$(a,b){var c,d,e=[],f=0,g=a.length;for(;f<g;f++){c=a[f];if(!c.style)continue;e[f]=p._data(c,"olddisplay"),b?(!e[f]&&c.style.display==="none"&&(c.style.display=""),c.style.display===""&&bZ(c)&&(e[f]=p._data(c,"olddisplay",cc(c.nodeName)))):(d=bH(c,"display"),!e[f]&&d!=="none"&&p._data(c,"olddisplay",d))}for(f=0;f<g;f++){c=a[f];if(!c.style)continue;if(!b||c.style.display==="none"||c.style.display==="")c.style.display=b?e[f]||"":"none"}return a}function b_(a,b,c){var d=bP.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function ca(a,b,c,d){var e=c===(d?"border":"content")?4:b==="width"?1:0,f=0;for(;e<4;e+=2)c==="margin"&&(f+=p.css(a,c+bV[e],!0)),d?(c==="content"&&(f-=parseFloat(bH(a,"padding"+bV[e]))||0),c!=="margin"&&(f-=parseFloat(bH(a,"border"+bV[e]+"Width"))||0)):(f+=parseFloat(bH(a,"padding"+bV[e]))||0,c!=="padding"&&(f+=parseFloat(bH(a,"border"+bV[e]+"Width"))||0));return f}function cb(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=!0,f=p.support.boxSizing&&p.css(a,"boxSizing")==="border-box";if(d<=0||d==null){d=bH(a,b);if(d<0||d==null)d=a.style[b];if(bQ.test(d))return d;e=f&&(p.support.boxSizingReliable||d===a.style[b]),d=parseFloat(d)||0}return d+ca(a,b,c||(f?"border":"content"),e)+"px"}function cc(a){if(bS[a])return bS[a];var b=p("<"+a+">").appendTo(e.body),c=b.css("display");b.remove();if(c==="none"||c===""){bI=e.body.appendChild(bI||p.extend(e.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!bJ||!bI.createElement)bJ=(bI.contentWindow||bI.contentDocument).document,bJ.write("<!doctype html><html><body>"),bJ.close();b=bJ.body.appendChild(bJ.createElement(a)),c=bH(b,"display"),e.body.removeChild(bI)}return bS[a]=c,c}function ci(a,b,c,d){var e;if(p.isArray(b))p.each(b,function(b,e){c||ce.test(a)?d(a,e):ci(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&p.type(b)==="object")for(e in b)ci(a+"["+e+"]",b[e],c,d);else d(a,b)}function cz(a){return function(b,c){typeof b!="string"&&(c=b,b="*");var d,e,f,g=b.toLowerCase().split(s),h=0,i=g.length;if(p.isFunction(c))for(;h<i;h++)d=g[h],f=/^\+/.test(d),f&&(d=d.substr(1)||"*"),e=a[d]=a[d]||[],e[f?"unshift":"push"](c)}}function cA(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h,i=a[f],j=0,k=i?i.length:0,l=a===cv;for(;j<k&&(l||!h);j++)h=i[j](c,d,e),typeof h=="string"&&(!l||g[h]?h=b:(c.dataTypes.unshift(h),h=cA(a,c,d,e,h,g)));return(l||!h)&&!g["*"]&&(h=cA(a,c,d,e,"*",g)),h}function cB(a,c){var d,e,f=p.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((f[d]?a:e||(e={}))[d]=c[d]);e&&p.extend(!0,a,e)}function cC(a,c,d){var e,f,g,h,i=a.contents,j=a.dataTypes,k=a.responseFields;for(f in k)f in d&&(c[k[f]]=d[f]);while(j[0]==="*")j.shift(),e===b&&(e=a.mimeType||c.getResponseHeader("content-type"));if(e)for(f in i)if(i[f]&&i[f].test(e)){j.unshift(f);break}if(j[0]in d)g=j[0];else{for(f in d){if(!j[0]||a.converters[f+" "+j[0]]){g=f;break}h||(h=f)}g=g||h}if(g)return g!==j[0]&&j.unshift(g),d[g]}function cD(a,b){var c,d,e,f,g=a.dataTypes.slice(),h=g[0],i={},j=0;a.dataFilter&&(b=a.dataFilter(b,a.dataType));if(g[1])for(c in a.converters)i[c.toLowerCase()]=a.converters[c];for(;e=g[++j];)if(e!=="*"){if(h!=="*"&&h!==e){c=i[h+" "+e]||i["* "+e];if(!c)for(d in i){f=d.split(" ");if(f[1]===e){c=i[h+" "+f[0]]||i["* "+f[0]];if(c){c===!0?c=i[d]:i[d]!==!0&&(e=f[0],g.splice(j--,0,e));break}}}if(c!==!0)if(c&&a["throws"])b=c(b);else try{b=c(b)}catch(k){return{state:"parsererror",error:c?k:"No conversion from "+h+" to "+e}}}h=e}return{state:"success",data:b}}function cL(){try{return new a.XMLHttpRequest}catch(b){}}function cM(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function cU(){return setTimeout(function(){cN=b},0),cN=p.now()}function cV(a,b){p.each(b,function(b,c){var d=(cT[b]||[]).concat(cT["*"]),e=0,f=d.length;for(;e<f;e++)if(d[e].call(a,b,c))return})}function cW(a,b,c){var d,e=0,f=0,g=cS.length,h=p.Deferred().always(function(){delete i.elem}),i=function(){var b=cN||cU(),c=Math.max(0,j.startTime+j.duration-b),d=1-(c/j.duration||0),e=0,f=j.tweens.length;for(;e<f;e++)j.tweens[e].run(d);return h.notifyWith(a,[j,d,c]),d<1&&f?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:p.extend({},b),opts:p.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:cN||cU(),duration:c.duration,tweens:[],createTween:function(b,c,d){var e=p.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(e),e},stop:function(b){var c=0,d=b?j.tweens.length:0;for(;c<d;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;cX(k,j.opts.specialEasing);for(;e<g;e++){d=cS[e].call(j,a,k,j.opts);if(d)return d}return cV(j,k),p.isFunction(j.opts.start)&&j.opts.start.call(a,j),p.fx.timer(p.extend(i,{anim:j,queue:j.opts.queue,elem:a})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function cX(a,b){var c,d,e,f,g;for(c in a){d=p.camelCase(c),e=b[d],f=a[c],p.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=p.cssHooks[d];if(g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}}function cY(a,b,c){var d,e,f,g,h,i,j,k,l=this,m=a.style,n={},o=[],q=a.nodeType&&bZ(a);c.queue||(j=p._queueHooks(a,"fx"),j.unqueued==null&&(j.unqueued=0,k=j.empty.fire,j.empty.fire=function(){j.unqueued||k()}),j.unqueued++,l.always(function(){l.always(function(){j.unqueued--,p.queue(a,"fx").length||j.empty.fire()})})),a.nodeType===1&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],p.css(a,"display")==="inline"&&p.css(a,"float")==="none"&&(!p.support.inlineBlockNeedsLayout||cc(a.nodeName)==="inline"?m.display="inline-block":m.zoom=1)),c.overflow&&(m.overflow="hidden",p.support.shrinkWrapBlocks||l.done(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b){f=b[d];if(cP.exec(f)){delete b[d];if(f===(q?"hide":"show"))continue;o.push(d)}}g=o.length;if(g){h=p._data(a,"fxshow")||p._data(a,"fxshow",{}),q?p(a).show():l.done(function(){p(a).hide()}),l.done(function(){var b;p.removeData(a,"fxshow",!0);for(b in n)p.style(a,b,n[b])});for(d=0;d<g;d++)e=o[d],i=l.createTween(e,q?h[e]:0),n[e]=h[e]||p.style(a,e),e in h||(h[e]=i.start,q&&(i.end=i.start,i.start=e==="width"||e==="height"?1:0))}}function cZ(a,b,c,d,e){return new cZ.prototype.init(a,b,c,d,e)}function c$(a,b){var c,d={height:a},e=0;b=b?1:0;for(;e<4;e+=2-b)c=bV[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function da(a){return p.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}var c,d,e=a.document,f=a.location,g=a.navigator,h=a.jQuery,i=a.$,j=Array.prototype.push,k=Array.prototype.slice,l=Array.prototype.indexOf,m=Object.prototype.toString,n=Object.prototype.hasOwnProperty,o=String.prototype.trim,p=function(a,b){return new p.fn.init(a,b,c)},q=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,r=/\S/,s=/\s+/,t=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,u=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,y=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,z=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,A=/^-ms-/,B=/-([\da-z])/gi,C=function(a,b){return(b+"").toUpperCase()},D=function(){e.addEventListener?(e.removeEventListener("DOMContentLoaded",D,!1),p.ready()):e.readyState==="complete"&&(e.detachEvent("onreadystatechange",D),p.ready())},E={};p.fn=p.prototype={constructor:p,init:function(a,c,d){var f,g,h,i;if(!a)return this;if(a.nodeType)return this.context=this[0]=a,this.length=1,this;if(typeof a=="string"){a.charAt(0)==="<"&&a.charAt(a.length-1)===">"&&a.length>=3?f=[null,a,null]:f=u.exec(a);if(f&&(f[1]||!c)){if(f[1])return c=c instanceof p?c[0]:c,i=c&&c.nodeType?c.ownerDocument||c:e,a=p.parseHTML(f[1],i,!0),v.test(f[1])&&p.isPlainObject(c)&&this.attr.call(a,c,!0),p.merge(this,a);g=e.getElementById(f[2]);if(g&&g.parentNode){if(g.id!==f[2])return d.find(a);this.length=1,this[0]=g}return this.context=e,this.selector=a,this}return!c||c.jquery?(c||d).find(a):this.constructor(c).find(a)}return p.isFunction(a)?d.ready(a):(a.selector!==b&&(this.selector=a.selector,this.context=a.context),p.makeArray(a,this))},selector:"",jquery:"1.8.2",length:0,size:function(){return this.length},toArray:function(){return k.call(this)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=p.merge(this.constructor(),a);return d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")"),d},each:function(a,b){return p.each(this,a,b)},ready:function(a){return p.ready.promise().done(a),this},eq:function(a){return a=+a,a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(k.apply(this,arguments),"slice",k.call(arguments).join(","))},map:function(a){return this.pushStack(p.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:j,sort:[].sort,splice:[].splice},p.fn.init.prototype=p.fn,p.extend=p.fn.extend=function(){var a,c,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;typeof h=="boolean"&&(k=h,h=arguments[1]||{},i=2),typeof h!="object"&&!p.isFunction(h)&&(h={}),j===i&&(h=this,--i);for(;i<j;i++)if((a=arguments[i])!=null)for(c in a){d=h[c],e=a[c];if(h===e)continue;k&&e&&(p.isPlainObject(e)||(f=p.isArray(e)))?(f?(f=!1,g=d&&p.isArray(d)?d:[]):g=d&&p.isPlainObject(d)?d:{},h[c]=p.extend(k,g,e)):e!==b&&(h[c]=e)}return h},p.extend({noConflict:function(b){return a.$===p&&(a.$=i),b&&a.jQuery===p&&(a.jQuery=h),p},isReady:!1,readyWait:1,holdReady:function(a){a?p.readyWait++:p.ready(!0)},ready:function(a){if(a===!0?--p.readyWait:p.isReady)return;if(!e.body)return setTimeout(p.ready,1);p.isReady=!0;if(a!==!0&&--p.readyWait>0)return;d.resolveWith(e,[p]),p.fn.trigger&&p(e).trigger("ready").off("ready")},isFunction:function(a){return p.type(a)==="function"},isArray:Array.isArray||function(a){return p.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):E[m.call(a)]||"object"},isPlainObject:function(a){if(!a||p.type(a)!=="object"||a.nodeType||p.isWindow(a))return!1;try{if(a.constructor&&!n.call(a,"constructor")&&!n.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||n.call(a,d)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},error:function(a){throw new Error(a)},parseHTML:function(a,b,c){var d;return!a||typeof a!="string"?null:(typeof b=="boolean"&&(c=b,b=0),b=b||e,(d=v.exec(a))?[b.createElement(d[1])]:(d=p.buildFragment([a],b,c?null:[]),p.merge([],(d.cacheable?p.clone(d.fragment):d.fragment).childNodes)))},parseJSON:function(b){if(!b||typeof b!="string")return null;b=p.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(w.test(b.replace(y,"@").replace(z,"]").replace(x,"")))return(new Function("return "+b))();p.error("Invalid JSON: "+b)},parseXML:function(c){var d,e;if(!c||typeof c!="string")return null;try{a.DOMParser?(e=new DOMParser,d=e.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(f){d=b}return(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&p.error("Invalid XML: "+c),d},noop:function(){},globalEval:function(b){b&&r.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(A,"ms-").replace(B,C)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,c,d){var e,f=0,g=a.length,h=g===b||p.isFunction(a);if(d){if(h){for(e in a)if(c.apply(a[e],d)===!1)break}else for(;f<g;)if(c.apply(a[f++],d)===!1)break}else if(h){for(e in a)if(c.call(a[e],e,a[e])===!1)break}else for(;f<g;)if(c.call(a[f],f,a[f++])===!1)break;return a},trim:o&&!o.call("﻿ ")?function(a){return a==null?"":o.call(a)}:function(a){return a==null?"":(a+"").replace(t,"")},makeArray:function(a,b){var c,d=b||[];return a!=null&&(c=p.type(a),a.length==null||c==="string"||c==="function"||c==="regexp"||p.isWindow(a)?j.call(d,a):p.merge(d,a)),d},inArray:function(a,b,c){var d;if(b){if(l)return l.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=c.length,e=a.length,f=0;if(typeof d=="number")for(;f<d;f++)a[e++]=c[f];else while(c[f]!==b)a[e++]=c[f++];return a.length=e,a},grep:function(a,b,c){var d,e=[],f=0,g=a.length;c=!!c;for(;f<g;f++)d=!!b(a[f],f),c!==d&&e.push(a[f]);return e},map:function(a,c,d){var e,f,g=[],h=0,i=a.length,j=a instanceof p||i!==b&&typeof i=="number"&&(i>0&&a[0]&&a[i-1]||i===0||p.isArray(a));if(j)for(;h<i;h++)e=c(a[h],h,d),e!=null&&(g[g.length]=e);else for(f in a)e=c(a[f],f,d),e!=null&&(g[g.length]=e);return g.concat.apply([],g)},guid:1,proxy:function(a,c){var d,e,f;return typeof c=="string"&&(d=a[c],c=a,a=d),p.isFunction(a)?(e=k.call(arguments,2),f=function(){return a.apply(c,e.concat(k.call(arguments)))},f.guid=a.guid=a.guid||p.guid++,f):b},access:function(a,c,d,e,f,g,h){var i,j=d==null,k=0,l=a.length;if(d&&typeof d=="object"){for(k in d)p.access(a,c,k,d[k],1,g,e);f=1}else if(e!==b){i=h===b&&p.isFunction(e),j&&(i?(i=c,c=function(a,b,c){return i.call(p(a),c)}):(c.call(a,e),c=null));if(c)for(;k<l;k++)c(a[k],d,i?e.call(a[k],k,c(a[k],d)):e,h);f=1}return f?a:j?c.call(a):l?c(a[0],d):g},now:function(){return(new Date).getTime()}}),p.ready.promise=function(b){if(!d){d=p.Deferred();if(e.readyState==="complete")setTimeout(p.ready,1);else if(e.addEventListener)e.addEventListener("DOMContentLoaded",D,!1),a.addEventListener("load",p.ready,!1);else{e.attachEvent("onreadystatechange",D),a.attachEvent("onload",p.ready);var c=!1;try{c=a.frameElement==null&&e.documentElement}catch(f){}c&&c.doScroll&&function g(){if(!p.isReady){try{c.doScroll("left")}catch(a){return setTimeout(g,50)}p.ready()}}()}}return d.promise(b)},p.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){E["[object "+b+"]"]=b.toLowerCase()}),c=p(e);var F={};p.Callbacks=function(a){a=typeof a=="string"?F[a]||G(a):p.extend({},a);var c,d,e,f,g,h,i=[],j=!a.once&&[],k=function(b){c=a.memory&&b,d=!0,h=f||0,f=0,g=i.length,e=!0;for(;i&&h<g;h++)if(i[h].apply(b[0],b[1])===!1&&a.stopOnFalse){c=!1;break}e=!1,i&&(j?j.length&&k(j.shift()):c?i=[]:l.disable())},l={add:function(){if(i){var b=i.length;(function d(b){p.each(b,function(b,c){var e=p.type(c);e==="function"&&(!a.unique||!l.has(c))?i.push(c):c&&c.length&&e!=="string"&&d(c)})})(arguments),e?g=i.length:c&&(f=b,k(c))}return this},remove:function(){return i&&p.each(arguments,function(a,b){var c;while((c=p.inArray(b,i,c))>-1)i.splice(c,1),e&&(c<=g&&g--,c<=h&&h--)}),this},has:function(a){return p.inArray(a,i)>-1},empty:function(){return i=[],this},disable:function(){return i=j=c=b,this},disabled:function(){return!i},lock:function(){return j=b,c||l.disable(),this},locked:function(){return!j},fireWith:function(a,b){return b=b||[],b=[a,b.slice?b.slice():b],i&&(!d||j)&&(e?j.push(b):k(b)),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!d}};return l},p.extend({Deferred:function(a){var b=[["resolve","done",p.Callbacks("once memory"),"resolved"],["reject","fail",p.Callbacks("once memory"),"rejected"],["notify","progress",p.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return p.Deferred(function(c){p.each(b,function(b,d){var f=d[0],g=a[b];e[d[1]](p.isFunction(g)?function(){var a=g.apply(this,arguments);a&&p.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f+"With"](this===e?c:this,[a])}:c[f])}),a=null}).promise()},promise:function(a){return a!=null?p.extend(a,d):d}},e={};return d.pipe=d.then,p.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[a^1][2].disable,b[2][2].lock),e[f[0]]=g.fire,e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=k.call(arguments),d=c.length,e=d!==1||a&&p.isFunction(a.promise)?d:0,f=e===1?a:p.Deferred(),g=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?k.call(arguments):d,c===h?f.notifyWith(b,c):--e||f.resolveWith(b,c)}},h,i,j;if(d>1){h=new Array(d),i=new Array(d),j=new Array(d);for(;b<d;b++)c[b]&&p.isFunction(c[b].promise)?c[b].promise().done(g(b,j,c)).fail(f.reject).progress(g(b,i,h)):--e}return e||f.resolveWith(j,c),f.promise()}}),p.support=function(){var b,c,d,f,g,h,i,j,k,l,m,n=e.createElement("div");n.setAttribute("className","t"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",c=n.getElementsByTagName("*"),d=n.getElementsByTagName("a")[0],d.style.cssText="top:1px;float:left;opacity:.5";if(!c||!c.length)return{};f=e.createElement("select"),g=f.appendChild(e.createElement("option")),h=n.getElementsByTagName("input")[0],b={leadingWhitespace:n.firstChild.nodeType===3,tbody:!n.getElementsByTagName("tbody").length,htmlSerialize:!!n.getElementsByTagName("link").length,style:/top/.test(d.getAttribute("style")),hrefNormalized:d.getAttribute("href")==="/a",opacity:/^0.5/.test(d.style.opacity),cssFloat:!!d.style.cssFloat,checkOn:h.value==="on",optSelected:g.selected,getSetAttribute:n.className!=="t",enctype:!!e.createElement("form").enctype,html5Clone:e.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:e.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},h.checked=!0,b.noCloneChecked=h.cloneNode(!0).checked,f.disabled=!0,b.optDisabled=!g.disabled;try{delete n.test}catch(o){b.deleteExpando=!1}!n.addEventListener&&n.attachEvent&&n.fireEvent&&(n.attachEvent("onclick",m=function(){b.noCloneEvent=!1}),n.cloneNode(!0).fireEvent("onclick"),n.detachEvent("onclick",m)),h=e.createElement("input"),h.value="t",h.setAttribute("type","radio"),b.radioValue=h.value==="t",h.setAttribute("checked","checked"),h.setAttribute("name","t"),n.appendChild(h),i=e.createDocumentFragment(),i.appendChild(n.lastChild),b.checkClone=i.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=h.checked,i.removeChild(h),i.appendChild(n);if(n.attachEvent)for(k in{submit:!0,change:!0,focusin:!0})j="on"+k,l=j in n,l||(n.setAttribute(j,"return;"),l=typeof n[j]=="function"),b[k+"Bubbles"]=l;return p(function(){var c,d,f,g,h="padding:0;margin:0;border:0;display:block;overflow:hidden;",i=e.getElementsByTagName("body")[0];if(!i)return;c=e.createElement("div"),c.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",i.insertBefore(c,i.firstChild),d=e.createElement("div"),c.appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",f=d.getElementsByTagName("td"),f[0].style.cssText="padding:0;margin:0;border:0;display:none",l=f[0].offsetHeight===0,f[0].style.display="",f[1].style.display="none",b.reliableHiddenOffsets=l&&f[0].offsetHeight===0,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",b.boxSizing=d.offsetWidth===4,b.doesNotIncludeMarginInBodyOffset=i.offsetTop!==1,a.getComputedStyle&&(b.pixelPosition=(a.getComputedStyle(d,null)||{}).top!=="1%",b.boxSizingReliable=(a.getComputedStyle(d,null)||{width:"4px"}).width==="4px",g=e.createElement("div"),g.style.cssText=d.style.cssText=h,g.style.marginRight=g.style.width="0",d.style.width="1px",d.appendChild(g),b.reliableMarginRight=!parseFloat((a.getComputedStyle(g,null)||{}).marginRight)),typeof d.style.zoom!="undefined"&&(d.innerHTML="",d.style.cssText=h+"width:1px;padding:1px;display:inline;zoom:1",b.inlineBlockNeedsLayout=d.offsetWidth===3,d.style.display="block",d.style.overflow="visible",d.innerHTML="<div></div>",d.firstChild.style.width="5px",b.shrinkWrapBlocks=d.offsetWidth!==3,c.style.zoom=1),i.removeChild(c),c=d=f=g=null}),i.removeChild(n),c=d=f=g=h=i=n=null,b}();var H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,I=/([A-Z])/g;p.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(p.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){return a=a.nodeType?p.cache[a[p.expando]]:a[p.expando],!!a&&!K(a)},data:function(a,c,d,e){if(!p.acceptData(a))return;var f,g,h=p.expando,i=typeof c=="string",j=a.nodeType,k=j?p.cache:a,l=j?a[h]:a[h]&&h;if((!l||!k[l]||!e&&!k[l].data)&&i&&d===b)return;l||(j?a[h]=l=p.deletedIds.pop()||p.guid++:l=h),k[l]||(k[l]={},j||(k[l].toJSON=p.noop));if(typeof c=="object"||typeof c=="function")e?k[l]=p.extend(k[l],c):k[l].data=p.extend(k[l].data,c);return f=k[l],e||(f.data||(f.data={}),f=f.data),d!==b&&(f[p.camelCase(c)]=d),i?(g=f[c],g==null&&(g=f[p.camelCase(c)])):g=f,g},removeData:function(a,b,c){if(!p.acceptData(a))return;var d,e,f,g=a.nodeType,h=g?p.cache:a,i=g?a[p.expando]:p.expando;if(!h[i])return;if(b){d=c?h[i]:h[i].data;if(d){p.isArray(b)||(b in d?b=[b]:(b=p.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,f=b.length;e<f;e++)delete d[b[e]];if(!(c?K:p.isEmptyObject)(d))return}}if(!c){delete h[i].data;if(!K(h[i]))return}g?p.cleanData([a],!0):p.support.deleteExpando||h!=h.window?delete h[i]:h[i]=null},_data:function(a,b,c){return p.data(a,b,c,!0)},acceptData:function(a){var b=a.nodeName&&p.noData[a.nodeName.toLowerCase()];return!b||b!==!0&&a.getAttribute("classid")===b}}),p.fn.extend({data:function(a,c){var d,e,f,g,h,i=this[0],j=0,k=null;if(a===b){if(this.length){k=p.data(i);if(i.nodeType===1&&!p._data(i,"parsedAttrs")){f=i.attributes;for(h=f.length;j<h;j++)g=f[j].name,g.indexOf("data-")||(g=p.camelCase(g.substring(5)),J(i,g,k[g]));p._data(i,"parsedAttrs",!0)}}return k}return typeof a=="object"?this.each(function(){p.data(this,a)}):(d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!",p.access(this,function(c){if(c===b)return k=this.triggerHandler("getData"+e,[d[0]]),k===b&&i&&(k=p.data(i,a),k=J(i,a,k)),k===b&&d[1]?this.data(d[0]):k;d[1]=c,this.each(function(){var b=p(this);b.triggerHandler("setData"+e,d),p.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1))},removeData:function(a){return this.each(function(){p.removeData(this,a)})}}),p.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=p._data(a,b),c&&(!d||p.isArray(c)?d=p._data(a,b,p.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=p.queue(a,b),d=c.length,e=c.shift(),f=p._queueHooks(a,b),g=function(){p.dequeue(a,b)};e==="inprogress"&&(e=c.shift(),d--),e&&(b==="fx"&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return p._data(a,c)||p._data(a,c,{empty:p.Callbacks("once memory").add(function(){p.removeData(a,b+"queue",!0),p.removeData(a,c,!0)})})}}),p.fn.extend({queue:function(a,c){var d=2;return typeof a!="string"&&(c=a,a="fx",d--),arguments.length<d?p.queue(this[0],a):c===b?this:this.each(function(){var b=p.queue(this,a,c);p._queueHooks(this,a),a==="fx"&&b[0]!=="inprogress"&&p.dequeue(this,a)})},dequeue:function(a){return this.each(function(){p.dequeue(this,a)})},delay:function(a,b){return a=p.fx?p.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){var d,e=1,f=p.Deferred(),g=this,h=this.length,i=function(){--e||f.resolveWith(g,[g])};typeof a!="string"&&(c=a,a=b),a=a||"fx";while(h--)d=p._data(g[h],a+"queueHooks"),d&&d.empty&&(e++,d.empty.add(i));return i(),f.promise(c)}});var L,M,N,O=/[\t\r\n]/g,P=/\r/g,Q=/^(?:button|input)$/i,R=/^(?:button|input|object|select|textarea)$/i,S=/^a(?:rea|)$/i,T=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,U=p.support.getSetAttribute;p.fn.extend({attr:function(a,b){return p.access(this,p.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){p.removeAttr(this,a)})},prop:function(a,b){return p.access(this,p.prop,a,b,arguments.length>1)},removeProp:function(a){return a=p.propFix[a]||a,this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,f,g,h;if(p.isFunction(a))return this.each(function(b){p(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(s);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{f=" "+e.className+" ";for(g=0,h=b.length;g<h;g++)f.indexOf(" "+b[g]+" ")<0&&(f+=b[g]+" ");e.className=p.trim(f)}}}return this},removeClass:function(a){var c,d,e,f,g,h,i;if(p.isFunction(a))return this.each(function(b){p(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(s);for(h=0,i=this.length;h<i;h++){e=this[h];if(e.nodeType===1&&e.className){d=(" "+e.className+" ").replace(O," ");for(f=0,g=c.length;f<g;f++)while(d.indexOf(" "+c[f]+" ")>=0)d=d.replace(" "+c[f]+" "," ");e.className=a?p.trim(d):""}}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";return p.isFunction(a)?this.each(function(c){p(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if(c==="string"){var e,f=0,g=p(this),h=b,i=a.split(s);while(e=i[f++])h=d?h:!g.hasClass(e),g[h?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&p._data(this,"__className__",this.className),this.className=this.className||a===!1?"":p._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(O," ").indexOf(b)>=0)return!0;return!1},val:function(a){var c,d,e,f=this[0];if(!arguments.length){if(f)return c=p.valHooks[f.type]||p.valHooks[f.nodeName.toLowerCase()],c&&"get"in c&&(d=c.get(f,"value"))!==b?d:(d=f.value,typeof d=="string"?d.replace(P,""):d==null?"":d);return}return e=p.isFunction(a),this.each(function(d){var f,g=p(this);if(this.nodeType!==1)return;e?f=a.call(this,d,g.val()):f=a,f==null?f="":typeof f=="number"?f+="":p.isArray(f)&&(f=p.map(f,function(a){return a==null?"":a+""})),c=p.valHooks[this.type]||p.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,f,"value")===b)this.value=f})}}),p.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,f=a.selectedIndex,g=[],h=a.options,i=a.type==="select-one";if(f<0)return null;c=i?f:0,d=i?f+1:h.length;for(;c<d;c++){e=h[c];if(e.selected&&(p.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!p.nodeName(e.parentNode,"optgroup"))){b=p(e).val();if(i)return b;g.push(b)}}return i&&!g.length&&h.length?p(h[f]).val():g},set:function(a,b){var c=p.makeArray(b);return p(a).find("option").each(function(){this.selected=p.inArray(p(this).val(),c)>=0}),c.length||(a.selectedIndex=-1),c}}},attrFn:{},attr:function(a,c,d,e){var f,g,h,i=a.nodeType;if(!a||i===3||i===8||i===2)return;if(e&&p.isFunction(p.fn[c]))return p(a)[c](d);if(typeof a.getAttribute=="undefined")return p.prop(a,c,d);h=i!==1||!p.isXMLDoc(a),h&&(c=c.toLowerCase(),g=p.attrHooks[c]||(T.test(c)?M:L));if(d!==b){if(d===null){p.removeAttr(a,c);return}return g&&"set"in g&&h&&(f=g.set(a,d,c))!==b?f:(a.setAttribute(c,d+""),d)}return g&&"get"in g&&h&&(f=g.get(a,c))!==null?f:(f=a.getAttribute(c),f===null?b:f)},removeAttr:function(a,b){var c,d,e,f,g=0;if(b&&a.nodeType===1){d=b.split(s);for(;g<d.length;g++)e=d[g],e&&(c=p.propFix[e]||e,f=T.test(e),f||p.attr(a,e,""),a.removeAttribute(U?e:c),f&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(Q.test(a.nodeName)&&a.parentNode)p.error("type property can't be changed");else if(!p.support.radioValue&&b==="radio"&&p.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}},value:{get:function(a,b){return L&&p.nodeName(a,"button")?L.get(a,b):b in a?a.value:null},set:function(a,b,c){if(L&&p.nodeName(a,"button"))return L.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,f,g,h=a.nodeType;if(!a||h===3||h===8||h===2)return;return g=h!==1||!p.isXMLDoc(a),g&&(c=p.propFix[c]||c,f=p.propHooks[c]),d!==b?f&&"set"in f&&(e=f.set(a,d,c))!==b?e:a[c]=d:f&&"get"in f&&(e=f.get(a,c))!==null?e:a[c]},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):R.test(a.nodeName)||S.test(a.nodeName)&&a.href?0:b}}}}),M={get:function(a,c){var d,e=p.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;return b===!1?p.removeAttr(a,c):(d=p.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase())),c}},U||(N={name:!0,id:!0,coords:!0},L=p.valHooks.button={get:function(a,c){var d;return d=a.getAttributeNode(c),d&&(N[c]?d.value!=="":d.specified)?d.value:b},set:function(a,b,c){var d=a.getAttributeNode(c);return d||(d=e.createAttribute(c),a.setAttributeNode(d)),d.value=b+""}},p.each(["width","height"],function(a,b){p.attrHooks[b]=p.extend(p.attrHooks[b],{set:function(a,c){if(c==="")return a.setAttribute(b,"auto"),c}})}),p.attrHooks.contenteditable={get:L.get,set:function(a,b,c){b===""&&(b="false"),L.set(a,b,c)}}),p.support.hrefNormalized||p.each(["href","src","width","height"],function(a,c){p.attrHooks[c]=p.extend(p.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),p.support.style||(p.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=b+""}}),p.support.optSelected||(p.propHooks.selected=p.extend(p.propHooks.selected,{get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}})),p.support.enctype||(p.propFix.enctype="encoding"),p.support.checkOn||p.each(["radio","checkbox"],function(){p.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),p.each(["radio","checkbox"],function(){p.valHooks[this]=p.extend(p.valHooks[this],{set:function(a,b){if(p.isArray(b))return a.checked=p.inArray(p(a).val(),b)>=0}})});var V=/^(?:textarea|input|select)$/i,W=/^([^\.]*|)(?:\.(.+)|)$/,X=/(?:^|\s)hover(\.\S+|)\b/,Y=/^key/,Z=/^(?:mouse|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=function(a){return p.event.special.hover?a:a.replace(X,"mouseenter$1 mouseleave$1")};p.event={add:function(a,c,d,e,f){var g,h,i,j,k,l,m,n,o,q,r;if(a.nodeType===3||a.nodeType===8||!c||!d||!(g=p._data(a)))return;d.handler&&(o=d,d=o.handler,f=o.selector),d.guid||(d.guid=p.guid++),i=g.events,i||(g.events=i={}),h=g.handle,h||(g.handle=h=function(a){return typeof p!="undefined"&&(!a||p.event.triggered!==a.type)?p.event.dispatch.apply(h.elem,arguments):b},h.elem=a),c=p.trim(_(c)).split(" ");for(j=0;j<c.length;j++){k=W.exec(c[j])||[],l=k[1],m=(k[2]||"").split(".").sort(),r=p.event.special[l]||{},l=(f?r.delegateType:r.bindType)||l,r=p.event.special[l]||{},n=p.extend({type:l,origType:k[1],data:e,handler:d,guid:d.guid,selector:f,needsContext:f&&p.expr.match.needsContext.test(f),namespace:m.join(".")},o),q=i[l];if(!q){q=i[l]=[],q.delegateCount=0;if(!r.setup||r.setup.call(a,e,m,h)===!1)a.addEventListener?a.addEventListener(l,h,!1):a.attachEvent&&a.attachEvent("on"+l,h)}r.add&&(r.add.call(a,n),n.handler.guid||(n.handler.guid=d.guid)),f?q.splice(q.delegateCount++,0,n):q.push(n),p.event.global[l]=!0}a=null},global:{},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,q,r=p.hasData(a)&&p._data(a);if(!r||!(m=r.events))return;b=p.trim(_(b||"")).split(" ");for(f=0;f<b.length;f++){g=W.exec(b[f])||[],h=i=g[1],j=g[2];if(!h){for(h in m)p.event.remove(a,h+b[f],c,d,!0);continue}n=p.event.special[h]||{},h=(d?n.delegateType:n.bindType)||h,o=m[h]||[],k=o.length,j=j?new RegExp("(^|\\.)"+j.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(l=0;l<o.length;l++)q=o[l],(e||i===q.origType)&&(!c||c.guid===q.guid)&&(!j||j.test(q.namespace))&&(!d||d===q.selector||d==="**"&&q.selector)&&(o.splice(l--,1),q.selector&&o.delegateCount--,n.remove&&n.remove.call(a,q));o.length===0&&k!==o.length&&((!n.teardown||n.teardown.call(a,j,r.handle)===!1)&&p.removeEvent(a,h,r.handle),delete m[h])}p.isEmptyObject(m)&&(delete r.handle,p.removeData(a,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,f,g){if(!f||f.nodeType!==3&&f.nodeType!==8){var h,i,j,k,l,m,n,o,q,r,s=c.type||c,t=[];if($.test(s+p.event.triggered))return;s.indexOf("!")>=0&&(s=s.slice(0,-1),i=!0),s.indexOf(".")>=0&&(t=s.split("."),s=t.shift(),t.sort());if((!f||p.event.customEvent[s])&&!p.event.global[s])return;c=typeof c=="object"?c[p.expando]?c:new p.Event(s,c):new p.Event(s),c.type=s,c.isTrigger=!0,c.exclusive=i,c.namespace=t.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+t.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,m=s.indexOf(":")<0?"on"+s:"";if(!f){h=p.cache;for(j in h)h[j].events&&h[j].events[s]&&p.event.trigger(c,d,h[j].handle.elem,!0);return}c.result=b,c.target||(c.target=f),d=d!=null?p.makeArray(d):[],d.unshift(c),n=p.event.special[s]||{};if(n.trigger&&n.trigger.apply(f,d)===!1)return;q=[[f,n.bindType||s]];if(!g&&!n.noBubble&&!p.isWindow(f)){r=n.delegateType||s,k=$.test(r+s)?f:f.parentNode;for(l=f;k;k=k.parentNode)q.push([k,r]),l=k;l===(f.ownerDocument||e)&&q.push([l.defaultView||l.parentWindow||a,r])}for(j=0;j<q.length&&!c.isPropagationStopped();j++)k=q[j][0],c.type=q[j][1],o=(p._data(k,"events")||{})[c.type]&&p._data(k,"handle"),o&&o.apply(k,d),o=m&&k[m],o&&p.acceptData(k)&&o.apply&&o.apply(k,d)===!1&&c.preventDefault();return c.type=s,!g&&!c.isDefaultPrevented()&&(!n._default||n._default.apply(f.ownerDocument,d)===!1)&&(s!=="click"||!p.nodeName(f,"a"))&&p.acceptData(f)&&m&&f[s]&&(s!=="focus"&&s!=="blur"||c.target.offsetWidth!==0)&&!p.isWindow(f)&&(l=f[m],l&&(f[m]=null),p.event.triggered=s,f[s](),p.event.triggered=b,l&&(f[m]=l)),c.result}return},dispatch:function(c){c=p.event.fix(c||a.event);var d,e,f,g,h,i,j,l,m,n,o=(p._data(this,"events")||{})[c.type]||[],q=o.delegateCount,r=k.call(arguments),s=!c.exclusive&&!c.namespace,t=p.event.special[c.type]||{},u=[];r[0]=c,c.delegateTarget=this;if(t.preDispatch&&t.preDispatch.call(this,c)===!1)return;if(q&&(!c.button||c.type!=="click"))for(f=c.target;f!=this;f=f.parentNode||this)if(f.disabled!==!0||c.type!=="click"){h={},j=[];for(d=0;d<q;d++)l=o[d],m=l.selector,h[m]===b&&(h[m]=l.needsContext?p(m,this).index(f)>=0:p.find(m,this,null,[f]).length),h[m]&&j.push(l);j.length&&u.push({elem:f,matches:j})}o.length>q&&u.push({elem:this,matches:o.slice(q)});for(d=0;d<u.length&&!c.isPropagationStopped();d++){i=u[d],c.currentTarget=i.elem;for(e=0;e<i.matches.length&&!c.isImmediatePropagationStopped();e++){l=i.matches[e];if(s||!c.namespace&&!l.namespace||c.namespace_re&&c.namespace_re.test(l.namespace))c.data=l.data,c.handleObj=l,g=((p.event.special[l.origType]||{}).handle||l.handler).apply(i.elem,r),g!==b&&(c.result=g,g===!1&&(c.preventDefault(),c.stopPropagation()))}}return t.postDispatch&&t.postDispatch.call(this,c),c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,c){var d,f,g,h=c.button,i=c.fromElement;return a.pageX==null&&c.clientX!=null&&(d=a.target.ownerDocument||e,f=d.documentElement,g=d.body,a.pageX=c.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=c.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?c.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0),a}},fix:function(a){if(a[p.expando])return a;var b,c,d=a,f=p.event.fixHooks[a.type]||{},g=f.props?this.props.concat(f.props):this.props;a=p.Event(d);for(b=g.length;b;)c=g[--b],a[c]=d[c];return a.target||(a.target=d.srcElement||e),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,f.filter?f.filter(a,d):a},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){p.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=p.extend(new p.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?p.event.trigger(e,null,b):p.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},p.event.handle=p.event.dispatch,p.removeEvent=e.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]=="undefined"&&(a[d]=null),a.detachEvent(d,c))},p.Event=function(a,b){if(this instanceof p.Event)a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?bb:ba):this.type=a,b&&p.extend(this,b),this.timeStamp=a&&a.timeStamp||p.now(),this[p.expando]=!0;else return new p.Event(a,b)},p.Event.prototype={preventDefault:function(){this.isDefaultPrevented=bb;var a=this.originalEvent;if(!a)return;a.preventDefault?a.preventDefault():a.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=bb;var a=this.originalEvent;if(!a)return;a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()},isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba},p.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){p.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj,g=f.selector;if(!e||e!==d&&!p.contains(d,e))a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b;return c}}}),p.support.submitBubbles||(p.event.special.submit={setup:function(){if(p.nodeName(this,"form"))return!1;p.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=p.nodeName(c,"input")||p.nodeName(c,"button")?c.form:b;d&&!p._data(d,"_submit_attached")&&(p.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),p._data(d,"_submit_attached",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&p.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(p.nodeName(this,"form"))return!1;p.event.remove(this,"._submit")}}),p.support.changeBubbles||(p.event.special.change={setup:function(){if(V.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")p.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),p.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),p.event.simulate("change",this,a,!0)});return!1}p.event.add(this,"beforeactivate._change",function(a){var b=a.target;V.test(b.nodeName)&&!p._data(b,"_change_attached")&&(p.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&p.event.simulate("change",this.parentNode,a,!0)}),p._data(b,"_change_attached",!0))})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){return p.event.remove(this,"._change"),!V.test(this.nodeName)}}),p.support.focusinBubbles||p.each({focus:"focusin",blur:"focusout"},function(a,b){var c=0,d=function(a){p.event.simulate(b,a.target,p.event.fix(a),!0)};p.event.special[b]={setup:function(){c++===0&&e.addEventListener(a,d,!0)},teardown:function(){--c===0&&e.removeEventListener(a,d,!0)}}}),p.fn.extend({on:function(a,c,d,e,f){var g,h;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(h in a)this.on(h,c,d,a[h],f);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=ba;else if(!e)return this;return f===1&&(g=e,e=function(a){return p().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=p.guid++)),this.each(function(){p.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){var e,f;if(a&&a.preventDefault&&a.handleObj)return e=a.handleObj,p(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler),this;if(typeof a=="object"){for(f in a)this.off(f,c,a[f]);return this}if(c===!1||typeof c=="function")d=c,c=b;return d===!1&&(d=ba),this.each(function(){p.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){return p(this.context).on(a,this.selector,b,c),this},die:function(a,b){return p(this.context).off(a,this.selector||"**",b),this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length===1?this.off(a,"**"):this.off(b,a||"**",c)},trigger:function(a,b){return this.each(function(){p.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return p.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||p.guid++,d=0,e=function(c){var e=(p._data(this,"lastToggle"+a.guid)||0)%d;return p._data(this,"lastToggle"+a.guid,e+1),c.preventDefault(),b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){p.fn[b]=function(a,c){return c==null&&(c=a,a=null),arguments.length>0?this.on(b,null,a,c):this.trigger(b)},Y.test(b)&&(p.event.fixHooks[b]=p.event.keyHooks),Z.test(b)&&(p.event.fixHooks[b]=p.event.mouseHooks)}),function(a,b){function bc(a,b,c,d){c=c||[],b=b||r;var e,f,i,j,k=b.nodeType;if(!a||typeof a!="string")return c;if(k!==1&&k!==9)return[];i=g(b);if(!i&&!d)if(e=P.exec(a))if(j=e[1]){if(k===9){f=b.getElementById(j);if(!f||!f.parentNode)return c;if(f.id===j)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(j))&&h(b,f)&&f.id===j)return c.push(f),c}else{if(e[2])return w.apply(c,x.call(b.getElementsByTagName(a),0)),c;if((j=e[3])&&_&&b.getElementsByClassName)return w.apply(c,x.call(b.getElementsByClassName(j),0)),c}return bp(a.replace(L,"$1"),b,c,d,i)}function bd(a){return function(b){var c=b.nodeName.toLowerCase();return c==="input"&&b.type===a}}function be(a){return function(b){var c=b.nodeName.toLowerCase();return(c==="input"||c==="button")&&b.type===a}}function bf(a){return z(function(b){return b=+b,z(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function bg(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}function bh(a,b){var c,d,f,g,h,i,j,k=C[o][a];if(k)return b?0:k.slice(0);h=a,i=[],j=e.preFilter;while(h){if(!c||(d=M.exec(h)))d&&(h=h.slice(d[0].length)),i.push(f=[]);c=!1;if(d=N.exec(h))f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=d[0].replace(L," ");for(g in e.filter)(d=W[g].exec(h))&&(!j[g]||(d=j[g](d,r,!0)))&&(f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=g,c.matches=d);if(!c)break}return b?h.length:h?bc.error(a):C(a,i).slice(0)}function bi(a,b,d){var e=b.dir,f=d&&b.dir==="parentNode",g=u++;return b.first?function(b,c,d){while(b=b[e])if(f||b.nodeType===1)return a(b,c,d)}:function(b,d,h){if(!h){var i,j=t+" "+g+" ",k=j+c;while(b=b[e])if(f||b.nodeType===1){if((i=b[o])===k)return b.sizset;if(typeof i=="string"&&i.indexOf(j)===0){if(b.sizset)return b}else{b[o]=k;if(a(b,d,h))return b.sizset=!0,b;b.sizset=!1}}}else while(b=b[e])if(f||b.nodeType===1)if(a(b,d,h))return b}}function bj(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function bk(a,b,c,d,e){var f,g=[],h=0,i=a.length,j=b!=null;for(;h<i;h++)if(f=a[h])if(!c||c(f,d,e))g.push(f),j&&b.push(h);return g}function bl(a,b,c,d,e,f){return d&&!d[o]&&(d=bl(d)),e&&!e[o]&&(e=bl(e,f)),z(function(f,g,h,i){if(f&&e)return;var j,k,l,m=[],n=[],o=g.length,p=f||bo(b||"*",h.nodeType?[h]:h,[],f),q=a&&(f||!b)?bk(p,m,a,h,i):p,r=c?e||(f?a:o||d)?[]:g:q;c&&c(q,r,h,i);if(d){l=bk(r,n),d(l,[],h,i),j=l.length;while(j--)if(k=l[j])r[n[j]]=!(q[n[j]]=k)}if(f){j=a&&r.length;while(j--)if(k=r[j])f[m[j]]=!(g[m[j]]=k)}else r=bk(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):w.apply(g,r)})}function bm(a){var b,c,d,f=a.length,g=e.relative[a[0].type],h=g||e.relative[" "],i=g?1:0,j=bi(function(a){return a===b},h,!0),k=bi(function(a){return y.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==l)||((b=c).nodeType?j(a,c,d):k(a,c,d))}];for(;i<f;i++)if(c=e.relative[a[i].type])m=[bi(bj(m),c)];else{c=e.filter[a[i].type].apply(null,a[i].matches);if(c[o]){d=++i;for(;d<f;d++)if(e.relative[a[d].type])break;return bl(i>1&&bj(m),i>1&&a.slice(0,i-1).join("").replace(L,"$1"),c,i<d&&bm(a.slice(i,d)),d<f&&bm(a=a.slice(d)),d<f&&a.join(""))}m.push(c)}return bj(m)}function bn(a,b){var d=b.length>0,f=a.length>0,g=function(h,i,j,k,m){var n,o,p,q=[],s=0,u="0",x=h&&[],y=m!=null,z=l,A=h||f&&e.find.TAG("*",m&&i.parentNode||i),B=t+=z==null?1:Math.E;y&&(l=i!==r&&i,c=g.el);for(;(n=A[u])!=null;u++){if(f&&n){for(o=0;p=a[o];o++)if(p(n,i,j)){k.push(n);break}y&&(t=B,c=++g.el)}d&&((n=!p&&n)&&s--,h&&x.push(n))}s+=u;if(d&&u!==s){for(o=0;p=b[o];o++)p(x,q,i,j);if(h){if(s>0)while(u--)!x[u]&&!q[u]&&(q[u]=v.call(k));q=bk(q)}w.apply(k,q),y&&!h&&q.length>0&&s+b.length>1&&bc.uniqueSort(k)}return y&&(t=B,l=z),x};return g.el=0,d?z(g):g}function bo(a,b,c,d){var e=0,f=b.length;for(;e<f;e++)bc(a,b[e],c,d);return c}function bp(a,b,c,d,f){var g,h,j,k,l,m=bh(a),n=m.length;if(!d&&m.length===1){h=m[0]=m[0].slice(0);if(h.length>2&&(j=h[0]).type==="ID"&&b.nodeType===9&&!f&&e.relative[h[1].type]){b=e.find.ID(j.matches[0].replace(V,""),b,f)[0];if(!b)return c;a=a.slice(h.shift().length)}for(g=W.POS.test(a)?-1:h.length-1;g>=0;g--){j=h[g];if(e.relative[k=j.type])break;if(l=e.find[k])if(d=l(j.matches[0].replace(V,""),R.test(h[0].type)&&b.parentNode||b,f)){h.splice(g,1),a=d.length&&h.join("");if(!a)return w.apply(c,x.call(d,0)),c;break}}}return i(a,m)(d,b,f,c,R.test(a)),c}function bq(){}var c,d,e,f,g,h,i,j,k,l,m=!0,n="undefined",o=("sizcache"+Math.random()).replace(".",""),q=String,r=a.document,s=r.documentElement,t=0,u=0,v=[].pop,w=[].push,x=[].slice,y=[].indexOf||function(a){var b=0,c=this.length;for(;b<c;b++)if(this[b]===a)return b;return-1},z=function(a,b){return a[o]=b==null||b,a},A=function(){var a={},b=[];return z(function(c,d){return b.push(c)>e.cacheLength&&delete a[b.shift()],a[c]=d},a)},B=A(),C=A(),D=A(),E="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",G=F.replace("w","w#"),H="([*^$|!~]?=)",I="\\["+E+"*("+F+")"+E+"*(?:"+H+E+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+G+")|)|)"+E+"*\\]",J=":("+F+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+I+")|[^:]|\\\\.)*|.*))\\)|)",K=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+E+"*((?:-\\d)?\\d*)"+E+"*\\)|)(?=[^-]|$)",L=new RegExp("^"+E+"+|((?:^|[^\\\\])(?:\\\\.)*)"+E+"+$","g"),M=new RegExp("^"+E+"*,"+E+"*"),N=new RegExp("^"+E+"*([\\x20\\t\\r\\n\\f>+~])"+E+"*"),O=new RegExp(J),P=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,Q=/^:not/,R=/[\x20\t\r\n\f]*[+~]/,S=/:not\($/,T=/h\d/i,U=/input|select|textarea|button/i,V=/\\(?!\\)/g,W={ID:new RegExp("^#("+F+")"),CLASS:new RegExp("^\\.("+F+")"),NAME:new RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:new RegExp("^("+F.replace("w","w*")+")"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+J),POS:new RegExp(K,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+E+"*(even|odd|(([+-]|)(\\d*)n|)"+E+"*(?:([+-]|)"+E+"*(\\d+)|))"+E+"*\\)|)","i"),needsContext:new RegExp("^"+E+"*[>+~]|"+K,"i")},X=function(a){var b=r.createElement("div");try{return a(b)}catch(c){return!1}finally{b=null}},Y=X(function(a){return a.appendChild(r.createComment("")),!a.getElementsByTagName("*").length}),Z=X(function(a){return a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!==n&&a.firstChild.getAttribute("href")==="#"}),$=X(function(a){a.innerHTML="<select></select>";var b=typeof a.lastChild.getAttribute("multiple");return b!=="boolean"&&b!=="string"}),_=X(function(a){return a.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!a.getElementsByClassName||!a.getElementsByClassName("e").length?!1:(a.lastChild.className="e",a.getElementsByClassName("e").length===2)}),ba=X(function(a){a.id=o+0,a.innerHTML="<a name='"+o+"'></a><div name='"+o+"'></div>",s.insertBefore(a,s.firstChild);var b=r.getElementsByName&&r.getElementsByName(o).length===2+r.getElementsByName(o+0).length;return d=!r.getElementById(o),s.removeChild(a),b});try{x.call(s.childNodes,0)[0].nodeType}catch(bb){x=function(a){var b,c=[];for(;b=this[a];a++)c.push(b);return c}}bc.matches=function(a,b){return bc(a,null,null,b)},bc.matchesSelector=function(a,b){return bc(b,null,null,[a]).length>0},f=bc.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(e===1||e===9||e===11){if(typeof a.textContent=="string")return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=f(a)}else if(e===3||e===4)return a.nodeValue}else for(;b=a[d];d++)c+=f(b);return c},g=bc.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?b.nodeName!=="HTML":!1},h=bc.contains=s.contains?function(a,b){var c=a.nodeType===9?a.documentElement:a,d=b&&b.parentNode;return a===d||!!(d&&d.nodeType===1&&c.contains&&c.contains(d))}:s.compareDocumentPosition?function(a,b){return b&&!!(a.compareDocumentPosition(b)&16)}:function(a,b){while(b=b.parentNode)if(b===a)return!0;return!1},bc.attr=function(a,b){var c,d=g(a);return d||(b=b.toLowerCase()),(c=e.attrHandle[b])?c(a):d||$?a.getAttribute(b):(c=a.getAttributeNode(b),c?typeof a[b]=="boolean"?a[b]?b:null:c.specified?c.value:null:null)},e=bc.selectors={cacheLength:50,createPseudo:z,match:W,attrHandle:Z?{}:{href:function(a){return a.getAttribute("href",2)},type:function(a){return a.getAttribute("type")}},find:{ID:d?function(a,b,c){if(typeof b.getElementById!==n&&!c){var d=b.getElementById(a);return d&&d.parentNode?[d]:[]}}:function(a,c,d){if(typeof c.getElementById!==n&&!d){var e=c.getElementById(a);return e?e.id===a||typeof e.getAttributeNode!==n&&e.getAttributeNode("id").value===a?[e]:b:[]}},TAG:Y?function(a,b){if(typeof b.getElementsByTagName!==n)return b.getElementsByTagName(a)}:function(a,b){var c=b.getElementsByTagName(a);if(a==="*"){var d,e=[],f=0;for(;d=c[f];f++)d.nodeType===1&&e.push(d);return e}return c},NAME:ba&&function(a,b){if(typeof b.getElementsByName!==n)return b.getElementsByName(name)},CLASS:_&&function(a,b,c){if(typeof b.getElementsByClassName!==n&&!c)return b.getElementsByClassName(a)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(V,""),a[3]=(a[4]||a[5]||"").replace(V,""),a[2]==="~="&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),a[1]==="nth"?(a[2]||bc.error(a[0]),a[3]=+(a[3]?a[4]+(a[5]||1):2*(a[2]==="even"||a[2]==="odd")),a[4]=+(a[6]+a[7]||a[2]==="odd")):a[2]&&bc.error(a[0]),a},PSEUDO:function(a){var b,c;if(W.CHILD.test(a[0]))return null;if(a[3])a[2]=a[3];else if(b=a[4])O.test(b)&&(c=bh(b,!0))&&(c=b.indexOf(")",b.length-c)-b.length)&&(b=b.slice(0,c),a[0]=a[0].slice(0,c)),a[2]=b;return a.slice(0,3)}},filter:{ID:d?function(a){return a=a.replace(V,""),function(b){return b.getAttribute("id")===a}}:function(a){return a=a.replace(V,""),function(b){var c=typeof b.getAttributeNode!==n&&b.getAttributeNode("id");return c&&c.value===a}},TAG:function(a){return a==="*"?function(){return!0}:(a=a.replace(V,"").toLowerCase(),function(b){return b.nodeName&&b.nodeName.toLowerCase()===a})},CLASS:function(a){var b=B[o][a];return b||(b=B(a,new RegExp("(^|"+E+")"+a+"("+E+"|$)"))),function(a){return b.test(a.className||typeof a.getAttribute!==n&&a.getAttribute("class")||"")}},ATTR:function(a,b,c){return function(d,e){var f=bc.attr(d,a);return f==null?b==="!=":b?(f+="",b==="="?f===c:b==="!="?f!==c:b==="^="?c&&f.indexOf(c)===0:b==="*="?c&&f.indexOf(c)>-1:b==="$="?c&&f.substr(f.length-c.length)===c:b==="~="?(" "+f+" ").indexOf(c)>-1:b==="|="?f===c||f.substr(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d){return a==="nth"?function(a){var b,e,f=a.parentNode;if(c===1&&d===0)return!0;if(f){e=0;for(b=f.firstChild;b;b=b.nextSibling)if(b.nodeType===1){e++;if(a===b)break}}return e-=d,e===c||e%c===0&&e/c>=0}:function(b){var c=b;switch(a){case"only":case"first":while(c=c.previousSibling)if(c.nodeType===1)return!1;if(a==="first")return!0;c=b;case"last":while(c=c.nextSibling)if(c.nodeType===1)return!1;return!0}}},PSEUDO:function(a,b){var c,d=e.pseudos[a]||e.setFilters[a.toLowerCase()]||bc.error("unsupported pseudo: "+a);return d[o]?d(b):d.length>1?(c=[a,a,"",b],e.setFilters.hasOwnProperty(a.toLowerCase())?z(function(a,c){var e,f=d(a,b),g=f.length;while(g--)e=y.call(a,f[g]),a[e]=!(c[e]=f[g])}):function(a){return d(a,0,c)}):d}},pseudos:{not:z(function(a){var b=[],c=[],d=i(a.replace(L,"$1"));return d[o]?z(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)if(f=g[h])a[h]=!(b[h]=f)}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:z(function(a){return function(b){return bc(a,b).length>0}}),contains:z(function(a){return function(b){return(b.textContent||b.innerText||f(b)).indexOf(a)>-1}}),enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&!!a.checked||b==="option"&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},parent:function(a){return!e.pseudos.empty(a)},empty:function(a){var b;a=a.firstChild;while(a){if(a.nodeName>"@"||(b=a.nodeType)===3||b===4)return!1;a=a.nextSibling}return!0},header:function(a){return T.test(a.nodeName)},text:function(a){var b,c;return a.nodeName.toLowerCase()==="input"&&(b=a.type)==="text"&&((c=a.getAttribute("type"))==null||c.toLowerCase()===b)},radio:bd("radio"),checkbox:bd("checkbox"),file:bd("file"),password:bd("password"),image:bd("image"),submit:be("submit"),reset:be("reset"),button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&a.type==="button"||b==="button"},input:function(a){return U.test(a.nodeName)},focus:function(a){var b=a.ownerDocument;return a===b.activeElement&&(!b.hasFocus||b.hasFocus())&&(!!a.type||!!a.href)},active:function(a){return a===a.ownerDocument.activeElement},first:bf(function(a,b,c){return[0]}),last:bf(function(a,b,c){return[b-1]}),eq:bf(function(a,b,c){return[c<0?c+b:c]}),even:bf(function(a,b,c){for(var d=0;d<b;d+=2)a.push(d);return a}),odd:bf(function(a,b,c){for(var d=1;d<b;d+=2)a.push(d);return a}),lt:bf(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:bf(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},j=s.compareDocumentPosition?function(a,b){return a===b?(k=!0,0):(!a.compareDocumentPosition||!b.compareDocumentPosition?a.compareDocumentPosition:a.compareDocumentPosition(b)&4)?-1:1}:function(a,b){if(a===b)return k=!0,0;if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,h=b.parentNode,i=g;if(g===h)return bg(a,b);if(!g)return-1;if(!h)return 1;while(i)e.unshift(i),i=i.parentNode;i=h;while(i)f.unshift(i),i=i.parentNode;c=e.length,d=f.length;for(var j=0;j<c&&j<d;j++)if(e[j]!==f[j])return bg(e[j],f[j]);return j===c?bg(a,f[j],-1):bg(e[j],b,1)},[0,0].sort(j),m=!k,bc.uniqueSort=function(a){var b,c=1;k=m,a.sort(j);if(k)for(;b=a[c];c++)b===a[c-1]&&a.splice(c--,1);return a},bc.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},i=bc.compile=function(a,b){var c,d=[],e=[],f=D[o][a];if(!f){b||(b=bh(a)),c=b.length;while(c--)f=bm(b[c]),f[o]?d.push(f):e.push(f);f=D(a,bn(e,d))}return f},r.querySelectorAll&&function(){var a,b=bp,c=/'|\\/g,d=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,e=[":focus"],f=[":active",":focus"],h=s.matchesSelector||s.mozMatchesSelector||s.webkitMatchesSelector||s.oMatchesSelector||s.msMatchesSelector;X(function(a){a.innerHTML="<select><option selected=''></option></select>",a.querySelectorAll("[selected]").length||e.push("\\["+E+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),a.querySelectorAll(":checked").length||e.push(":checked")}),X(function(a){a.innerHTML="<p test=''></p>",a.querySelectorAll("[test^='']").length&&e.push("[*^$]="+E+"*(?:\"\"|'')"),a.innerHTML="<input type='hidden'/>",a.querySelectorAll(":enabled").length||e.push(":enabled",":disabled")}),e=new RegExp(e.join("|")),bp=function(a,d,f,g,h){if(!g&&!h&&(!e||!e.test(a))){var i,j,k=!0,l=o,m=d,n=d.nodeType===9&&a;if(d.nodeType===1&&d.nodeName.toLowerCase()!=="object"){i=bh(a),(k=d.getAttribute("id"))?l=k.replace(c,"\\$&"):d.setAttribute("id",l),l="[id='"+l+"'] ",j=i.length;while(j--)i[j]=l+i[j].join("");m=R.test(a)&&d.parentNode||d,n=i.join(",")}if(n)try{return w.apply(f,x.call(m.querySelectorAll(n),0)),f}catch(p){}finally{k||d.removeAttribute("id")}}return b(a,d,f,g,h)},h&&(X(function(b){a=h.call(b,"div");try{h.call(b,"[test!='']:sizzle"),f.push("!=",J)}catch(c){}}),f=new RegExp(f.join("|")),bc.matchesSelector=function(b,c){c=c.replace(d,"='$1']");if(!g(b)&&!f.test(c)&&(!e||!e.test(c)))try{var i=h.call(b,c);if(i||a||b.document&&b.document.nodeType!==11)return i}catch(j){}return bc(c,null,null,[b]).length>0})}(),e.pseudos.nth=e.pseudos.eq,e.filters=bq.prototype=e.pseudos,e.setFilters=new bq,bc.attr=p.attr,p.find=bc,p.expr=bc.selectors,p.expr[":"]=p.expr.pseudos,p.unique=bc.uniqueSort,p.text=bc.getText,p.isXMLDoc=bc.isXML,p.contains=bc.contains}(a);var bc=/Until$/,bd=/^(?:parents|prev(?:Until|All))/,be=/^.[^:#\[\.,]*$/,bf=p.expr.match.needsContext,bg={children:!0,contents:!0,next:!0,prev:!0};p.fn.extend({find:function(a){var b,c,d,e,f,g,h=this;if(typeof a!="string")return p(a).filter(function(){for(b=0,c=h.length;b<c;b++)if(p.contains(h[b],this))return!0});g=this.pushStack("","find",a);for(b=0,c=this.length;b<c;b++){d=g.length,p.find(a,this[b],g);if(b>0)for(e=d;e<g.length;e++)for(f=0;f<d;f++)if(g[f]===g[e]){g.splice(e--,1);break}}return g},has:function(a){var b,c=p(a,this),d=c.length;return this.filter(function(){for(b=0;b<d;b++)if(p.contains(this,c[b]))return!0})},not:function(a){return this.pushStack(bj(this,a,!1),"not",a)},filter:function(a){return this.pushStack(bj(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?bf.test(a)?p(a,this.context).index(this[0])>=0:p.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c,d=0,e=this.length,f=[],g=bf.test(a)||typeof a!="string"?p(a,b||this.context):0;for(;d<e;d++){c=this[d];while(c&&c.ownerDocument&&c!==b&&c.nodeType!==11){if(g?g.index(c)>-1:p.find.matchesSelector(c,a)){f.push(c);break}c=c.parentNode}}return f=f.length>1?p.unique(f):f,this.pushStack(f,"closest",a)},index:function(a){return a?typeof a=="string"?p.inArray(this[0],p(a)):p.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(a,b){var c=typeof a=="string"?p(a,b):p.makeArray(a&&a.nodeType?[a]:a),d=p.merge(this.get(),c);return this.pushStack(bh(c[0])||bh(d[0])?d:p.unique(d))},addBack:function(a){return this.add(a==null?this.prevObject:this.prevObject.filter(a))}}),p.fn.andSelf=p.fn.addBack,p.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return p.dir(a,"parentNode")},parentsUntil:function(a,b,c){return p.dir(a,"parentNode",c)},next:function(a){return bi(a,"nextSibling")},prev:function(a){return bi(a,"previousSibling")},nextAll:function(a){return p.dir(a,"nextSibling")},prevAll:function(a){return p.dir(a,"previousSibling")},nextUntil:function(a,b,c){return p.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return p.dir(a,"previousSibling",c)},siblings:function(a){return p.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return p.sibling(a.firstChild)},contents:function(a){return p.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:p.merge([],a.childNodes)}},function(a,b){p.fn[a]=function(c,d){var e=p.map(this,b,c);return bc.test(a)||(d=c),d&&typeof d=="string"&&(e=p.filter(d,e)),e=this.length>1&&!bg[a]?p.unique(e):e,this.length>1&&bd.test(a)&&(e=e.reverse()),this.pushStack(e,a,k.call(arguments).join(","))}}),p.extend({filter:function(a,b,c){return c&&(a=":not("+a+")"),b.length===1?p.find.matchesSelector(b[0],a)?[b[0]]:[]:p.find.matches(a,b)},dir:function(a,c,d){var e=[],f=a[c];while(f&&f.nodeType!==9&&(d===b||f.nodeType!==1||!p(f).is(d)))f.nodeType===1&&e.push(f),f=f[c];return e},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var bl="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",bm=/ jQuery\d+="(?:null|\d+)"/g,bn=/^\s+/,bo=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bp=/<([\w:]+)/,bq=/<tbody/i,br=/<|&#?\w+;/,bs=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,bu=new RegExp("<(?:"+bl+")[\\s/>]","i"),bv=/^(?:checkbox|radio)$/,bw=/checked\s*(?:[^=]|=\s*.checked.)/i,bx=/\/(java|ecma)script/i,by=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,bz={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bA=bk(e),bB=bA.appendChild(e.createElement("div"));bz.optgroup=bz.option,bz.tbody=bz.tfoot=bz.colgroup=bz.caption=bz.thead,bz.th=bz.td,p.support.htmlSerialize||(bz._default=[1,"X<div>","</div>"]),p.fn.extend({text:function(a){return p.access(this,function(a){return a===b?p.text(this):this.empty().append((this[0]&&this[0].ownerDocument||e).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(p.isFunction(a))return this.each(function(b){p(this).wrapAll(a.call(this,b))});if(this[0]){var b=p(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return p.isFunction(a)?this.each(function(b){p(this).wrapInner(a.call(this,b))}):this.each(function(){var b=p(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=p.isFunction(a);return this.each(function(c){p(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){p.nodeName(this,"body")||p(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(a,this.firstChild)})},before:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(a,this),"before",this.selector)}},after:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(this,a),"after",this.selector)}},remove:function(a,b){var c,d=0;for(;(c=this[d])!=null;d++)if(!a||p.filter(a,[c]).length)!b&&c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),p.cleanData([c])),c.parentNode&&c.parentNode.removeChild(c);return this},empty:function(){var a,b=0;for(;(a=this[b])!=null;b++){a.nodeType===1&&p.cleanData(a.getElementsByTagName("*"));while(a.firstChild)a.removeChild(a.firstChild)}return this},clone:function(a,b){return a=a==null?!1:a,b=b==null?a:b,this.map(function(){return p.clone(this,a,b)})},html:function(a){return p.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(bm,""):b;if(typeof a=="string"&&!bs.test(a)&&(p.support.htmlSerialize||!bu.test(a))&&(p.support.leadingWhitespace||!bn.test(a))&&!bz[(bp.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(bo,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(f){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){return bh(this[0])?this.length?this.pushStack(p(p.isFunction(a)?a():a),"replaceWith",a):this:p.isFunction(a)?this.each(function(b){var c=p(this),d=c.html();c.replaceWith(a.call(this,b,d))}):(typeof a!="string"&&(a=p(a).detach()),this.each(function(){var b=this.nextSibling,c=this.parentNode;p(this).remove(),b?p(b).before(a):p(c).append(a)}))},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){a=[].concat.apply([],a);var e,f,g,h,i=0,j=a[0],k=[],l=this.length;if(!p.support.checkClone&&l>1&&typeof j=="string"&&bw.test(j))return this.each(function(){p(this).domManip(a,c,d)});if(p.isFunction(j))return this.each(function(e){var f=p(this);a[0]=j.call(this,e,c?f.html():b),f.domManip(a,c,d)});if(this[0]){e=p.buildFragment(a,this,k),g=e.fragment,f=g.firstChild,g.childNodes.length===1&&(g=f);if(f){c=c&&p.nodeName(f,"tr");for(h=e.cacheable||l-1;i<l;i++)d.call(c&&p.nodeName(this[i],"table")?bC(this[i],"tbody"):this[i],i===h?g:p.clone(g,!0,!0))}g=f=null,k.length&&p.each(k,function(a,b){b.src?p.ajax?p.ajax({url:b.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):p.error("no ajax"):p.globalEval((b.text||b.textContent||b.innerHTML||"").replace(by,"")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),p.buildFragment=function(a,c,d){var f,g,h,i=a[0];return c=c||e,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,a.length===1&&typeof i=="string"&&i.length<512&&c===e&&i.charAt(0)==="<"&&!bt.test(i)&&(p.support.checkClone||!bw.test(i))&&(p.support.html5Clone||!bu.test(i))&&(g=!0,f=p.fragments[i],h=f!==b),f||(f=c.createDocumentFragment(),p.clean(a,c,f,d),g&&(p.fragments[i]=h&&f)),{fragment:f,cacheable:g}},p.fragments={},p.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){p.fn[a]=function(c){var d,e=0,f=[],g=p(c),h=g.length,i=this.length===1&&this[0].parentNode;if((i==null||i&&i.nodeType===11&&i.childNodes.length===1)&&h===1)return g[b](this[0]),this;for(;e<h;e++)d=(e>0?this.clone(!0):this).get(),p(g[e])[b](d),f=f.concat(d);return this.pushStack(f,a,g.selector)}}),p.extend({clone:function(a,b,c){var d,e,f,g;p.support.html5Clone||p.isXMLDoc(a)||!bu.test("<"+a.nodeName+">")?g=a.cloneNode(!0):(bB.innerHTML=a.outerHTML,bB.removeChild(g=bB.firstChild));if((!p.support.noCloneEvent||!p.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!p.isXMLDoc(a)){bE(a,g),d=bF(a),e=bF(g);for(f=0;d[f];++f)e[f]&&bE(d[f],e[f])}if(b){bD(a,g);if(c){d=bF(a),e=bF(g);for(f=0;d[f];++f)bD(d[f],e[f])}}return d=e=null,g},clean:function(a,b,c,d){var f,g,h,i,j,k,l,m,n,o,q,r,s=b===e&&bA,t=[];if(!b||typeof b.createDocumentFragment=="undefined")b=e;for(f=0;(h=a[f])!=null;f++){typeof h=="number"&&(h+="");if(!h)continue;if(typeof h=="string")if(!br.test(h))h=b.createTextNode(h);else{s=s||bk(b),l=b.createElement("div"),s.appendChild(l),h=h.replace(bo,"<$1></$2>"),i=(bp.exec(h)||["",""])[1].toLowerCase(),j=bz[i]||bz._default,k=j[0],l.innerHTML=j[1]+h+j[2];while(k--)l=l.lastChild;if(!p.support.tbody){m=bq.test(h),n=i==="table"&&!m?l.firstChild&&l.firstChild.childNodes:j[1]==="<table>"&&!m?l.childNodes:[];for(g=n.length-1;g>=0;--g)p.nodeName(n[g],"tbody")&&!n[g].childNodes.length&&n[g].parentNode.removeChild(n[g])}!p.support.leadingWhitespace&&bn.test(h)&&l.insertBefore(b.createTextNode(bn.exec(h)[0]),l.firstChild),h=l.childNodes,l.parentNode.removeChild(l)}h.nodeType?t.push(h):p.merge(t,h)}l&&(h=l=s=null);if(!p.support.appendChecked)for(f=0;(h=t[f])!=null;f++)p.nodeName(h,"input")?bG(h):typeof h.getElementsByTagName!="undefined"&&p.grep(h.getElementsByTagName("input"),bG);if(c){q=function(a){if(!a.type||bx.test(a.type))return d?d.push(a.parentNode?a.parentNode.removeChild(a):a):c.appendChild(a)};for(f=0;(h=t[f])!=null;f++)if(!p.nodeName(h,"script")||!q(h))c.appendChild(h),typeof h.getElementsByTagName!="undefined"&&(r=p.grep(p.merge([],h.getElementsByTagName("script")),q),t.splice.apply(t,[f+1,0].concat(r)),f+=r.length)}return t},cleanData:function(a,b){var c,d,e,f,g=0,h=p.expando,i=p.cache,j=p.support.deleteExpando,k=p.event.special;for(;(e=a[g])!=null;g++)if(b||p.acceptData(e)){d=e[h],c=d&&i[d];if(c){if(c.events)for(f in c.events)k[f]?p.event.remove(e,f):p.removeEvent(e,f,c.handle);i[d]&&(delete i[d],j?delete e[h]:e.removeAttribute?e.removeAttribute(h):e[h]=null,p.deletedIds.push(d))}}}}),function(){var a,b;p.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a=p.uaMatch(g.userAgent),b={},a.browser&&(b[a.browser]=!0,b.version=a.version),b.chrome?b.webkit=!0:b.webkit&&(b.safari=!0),p.browser=b,p.sub=function(){function a(b,c){return new a.fn.init(b,c)}p.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function c(c,d){return d&&d instanceof p&&!(d instanceof a)&&(d=a(d)),p.fn.init.call(this,c,d,b)},a.fn.init.prototype=a.fn;var b=a(e);return a}}();var bH,bI,bJ,bK=/alpha\([^)]*\)/i,bL=/opacity=([^)]*)/,bM=/^(top|right|bottom|left)$/,bN=/^(none|table(?!-c[ea]).+)/,bO=/^margin/,bP=new RegExp("^("+q+")(.*)$","i"),bQ=new RegExp("^("+q+")(?!px)[a-z%]+$","i"),bR=new RegExp("^([-+])=("+q+")","i"),bS={},bT={position:"absolute",visibility:"hidden",display:"block"},bU={letterSpacing:0,fontWeight:400},bV=["Top","Right","Bottom","Left"],bW=["Webkit","O","Moz","ms"],bX=p.fn.toggle;p.fn.extend({css:function(a,c){return p.access(this,function(a,c,d){return d!==b?p.style(a,c,d):p.css(a,c)},a,c,arguments.length>1)},show:function(){return b$(this,!0)},hide:function(){return b$(this)},toggle:function(a,b){var c=typeof a=="boolean";return p.isFunction(a)&&p.isFunction(b)?bX.apply(this,arguments):this.each(function(){(c?a:bZ(this))?p(this).show():p(this).hide()})}}),p.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bH(a,"opacity");return c===""?"1":c}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":p.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!a||a.nodeType===3||a.nodeType===8||!a.style)return;var f,g,h,i=p.camelCase(c),j=a.style;c=p.cssProps[i]||(p.cssProps[i]=bY(j,i)),h=p.cssHooks[c]||p.cssHooks[i];if(d===b)return h&&"get"in h&&(f=h.get(a,!1,e))!==b?f:j[c];g=typeof d,g==="string"&&(f=bR.exec(d))&&(d=(f[1]+1)*f[2]+parseFloat(p.css(a,c)),g="number");if(d==null||g==="number"&&isNaN(d))return;g==="number"&&!p.cssNumber[i]&&(d+="px");if(!h||!("set"in h)||(d=h.set(a,d,e))!==b)try{j[c]=d}catch(k){}},css:function(a,c,d,e){var f,g,h,i=p.camelCase(c);return c=p.cssProps[i]||(p.cssProps[i]=bY(a.style,i)),h=p.cssHooks[c]||p.cssHooks[i],h&&"get"in h&&(f=h.get(a,!0,e)),f===b&&(f=bH(a,c)),f==="normal"&&c in bU&&(f=bU[c]),d||e!==b?(g=parseFloat(f),d||p.isNumeric(g)?g||0:f):f},swap:function(a,b,c){var d,e,f={};for(e in b)f[e]=a.style[e],a.style[e]=b[e];d=c.call(a);for(e in b)a.style[e]=f[e];return d}}),a.getComputedStyle?bH=function(b,c){var d,e,f,g,h=a.getComputedStyle(b,null),i=b.style;return h&&(d=h[c],d===""&&!p.contains(b.ownerDocument,b)&&(d=p.style(b,c)),bQ.test(d)&&bO.test(c)&&(e=i.width,f=i.minWidth,g=i.maxWidth,i.minWidth=i.maxWidth=i.width=d,d=h.width,i.width=e,i.minWidth=f,i.maxWidth=g)),d}:e.documentElement.currentStyle&&(bH=function(a,b){var c,d,e=a.currentStyle&&a.currentStyle[b],f=a.style;return e==null&&f&&f[b]&&(e=f[b]),bQ.test(e)&&!bM.test(b)&&(c=f.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":e,e=f.pixelLeft+"px",f.left=c,d&&(a.runtimeStyle.left=d)),e===""?"auto":e}),p.each(["height","width"],function(a,b){p.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth===0&&bN.test(bH(a,"display"))?p.swap(a,bT,function(){return cb(a,b,d)}):cb(a,b,d)},set:function(a,c,d){return b_(a,c,d?ca(a,b,d,p.support.boxSizing&&p.css(a,"boxSizing")==="border-box"):0)}}}),p.support.opacity||(p.cssHooks.opacity={get:function(a,b){return bL.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=p.isNumeric(b)?"alpha(opacity="+b*100+")":"",f=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&p.trim(f.replace(bK,""))===""&&c.removeAttribute){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bK.test(f)?f.replace(bK,e):f+" "+e}}),p(function(){p.support.reliableMarginRight||(p.cssHooks.marginRight={get:function(a,b){return p.swap(a,{display:"inline-block"},function(){if(b)return bH(a,"marginRight")})}}),!p.support.pixelPosition&&p.fn.position&&p.each(["top","left"],function(a,b){p.cssHooks[b]={get:function(a,c){if(c){var d=bH(a,b);return bQ.test(d)?p(a).position()[b]+"px":d}}}})}),p.expr&&p.expr.filters&&(p.expr.filters.hidden=function(a){return a.offsetWidth===0&&a.offsetHeight===0||!p.support.reliableHiddenOffsets&&(a.style&&a.style.display||bH(a,"display"))==="none"},p.expr.filters.visible=function(a){return!p.expr.filters.hidden(a)}),p.each({margin:"",padding:"",border:"Width"},function(a,b){p.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bV[d]+b]=e[d]||e[d-2]||e[0];return f}},bO.test(a)||(p.cssHooks[a+b].set=b_)});var cd=/%20/g,ce=/\[\]$/,cf=/\r?\n/g,cg=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,ch=/^(?:select|textarea)/i;p.fn.extend({serialize:function(){return p.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?p.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||ch.test(this.nodeName)||cg.test(this.type))}).map(function(a,b){var c=p(this).val();return c==null?null:p.isArray(c)?p.map(c,function(a,c){return{name:b.name,value:a.replace(cf,"\r\n")}}):{name:b.name,value:c.replace(cf,"\r\n")}}).get()}}),p.param=function(a,c){var d,e=[],f=function(a,b){b=p.isFunction(b)?b():b==null?"":b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=p.ajaxSettings&&p.ajaxSettings.traditional);if(p.isArray(a)||a.jquery&&!p.isPlainObject(a))p.each(a,function(){f(this.name,this.value)});else for(d in a)ci(d,a[d],c,f);return e.join("&").replace(cd,"+")};var cj,ck,cl=/#.*$/,cm=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,cn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,co=/^(?:GET|HEAD)$/,cp=/^\/\//,cq=/\?/,cr=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,cs=/([?&])_=[^&]*/,ct=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,cu=p.fn.load,cv={},cw={},cx=["*/"]+["*"];try{ck=f.href}catch(cy){ck=e.createElement("a"),ck.href="",ck=ck.href}cj=ct.exec(ck.toLowerCase())||[],p.fn.load=function(a,c,d){if(typeof a!="string"&&cu)return cu.apply(this,arguments);if(!this.length)return this;var e,f,g,h=this,i=a.indexOf(" ");return i>=0&&(e=a.slice(i,a.length),a=a.slice(0,i)),p.isFunction(c)?(d=c,c=b):c&&typeof c=="object"&&(f="POST"),p.ajax({url:a,type:f,dataType:"html",data:c,complete:function(a,b){d&&h.each(d,g||[a.responseText,b,a])}}).done(function(a){g=arguments,h.html(e?p("<div>").append(a.replace(cr,"")).find(e):a)}),this},p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){p.fn[b]=function(a){return this.on(b,a)}}),p.each(["get","post"],function(a,c){p[c]=function(a,d,e,f){return p.isFunction(d)&&(f=f||e,e=d,d=b),p.ajax({type:c,url:a,data:d,success:e,dataType:f})}}),p.extend({getScript:function(a,c){return p.get(a,b,c,"script")},getJSON:function(a,b,c){return p.get(a,b,c,"json")},ajaxSetup:function(a,b){return b?cB(a,p.ajaxSettings):(b=a,a=p.ajaxSettings),cB(a,b),a},ajaxSettings:{url:ck,isLocal:cn.test(cj[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":cx},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":p.parseJSON,"text xml":p.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:cz(cv),ajaxTransport:cz(cw),ajax:function(a,c){function y(a,c,f,i){var k,s,t,u,w,y=c;if(v===2)return;v=2,h&&clearTimeout(h),g=b,e=i||"",x.readyState=a>0?4:0,f&&(u=cC(l,x,f));if(a>=200&&a<300||a===304)l.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(p.lastModified[d]=w),w=x.getResponseHeader("Etag"),w&&(p.etag[d]=w)),a===304?(y="notmodified",k=!0):(k=cD(l,u),y=k.state,s=k.data,t=k.error,k=!t);else{t=y;if(!y||a)y="error",a<0&&(a=0)}x.status=a,x.statusText=(c||y)+"",k?o.resolveWith(m,[s,y,x]):o.rejectWith(m,[x,y,t]),x.statusCode(r),r=b,j&&n.trigger("ajax"+(k?"Success":"Error"),[x,l,k?s:t]),q.fireWith(m,[x,y]),j&&(n.trigger("ajaxComplete",[x,l]),--p.active||p.event.trigger("ajaxStop"))}typeof a=="object"&&(c=a,a=b),c=c||{};var d,e,f,g,h,i,j,k,l=p.ajaxSetup({},c),m=l.context||l,n=m!==l&&(m.nodeType||m instanceof p)?p(m):p.event,o=p.Deferred(),q=p.Callbacks("once memory"),r=l.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,setRequestHeader:function(a,b){if(!v){var c=a.toLowerCase();a=u[c]=u[c]||a,t[a]=b}return this},getAllResponseHeaders:function(){return v===2?e:null},getResponseHeader:function(a){var c;if(v===2){if(!f){f={};while(c=cm.exec(e))f[c[1].toLowerCase()]=c[2]}c=f[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){return v||(l.mimeType=a),this},abort:function(a){return a=a||w,g&&g.abort(a),y(0,a),this}};o.promise(x),x.success=x.done,x.error=x.fail,x.complete=q.add,x.statusCode=function(a){if(a){var b;if(v<2)for(b in a)r[b]=[r[b],a[b]];else b=a[x.status],x.always(b)}return this},l.url=((a||l.url)+"").replace(cl,"").replace(cp,cj[1]+"//"),l.dataTypes=p.trim(l.dataType||"*").toLowerCase().split(s),l.crossDomain==null&&(i=ct.exec(l.url.toLowerCase())||!1,l.crossDomain=i&&i.join(":")+(i[3]?"":i[1]==="http:"?80:443)!==cj.join(":")+(cj[3]?"":cj[1]==="http:"?80:443)),l.data&&l.processData&&typeof l.data!="string"&&(l.data=p.param(l.data,l.traditional)),cA(cv,l,c,x);if(v===2)return x;j=l.global,l.type=l.type.toUpperCase(),l.hasContent=!co.test(l.type),j&&p.active++===0&&p.event.trigger("ajaxStart");if(!l.hasContent){l.data&&(l.url+=(cq.test(l.url)?"&":"?")+l.data,delete l.data),d=l.url;if(l.cache===!1){var z=p.now(),A=l.url.replace(cs,"$1_="+z);l.url=A+(A===l.url?(cq.test(l.url)?"&":"?")+"_="+z:"")}}(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",l.contentType),l.ifModified&&(d=d||l.url,p.lastModified[d]&&x.setRequestHeader("If-Modified-Since",p.lastModified[d]),p.etag[d]&&x.setRequestHeader("If-None-Match",p.etag[d])),x.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+(l.dataTypes[0]!=="*"?", "+cx+"; q=0.01":""):l.accepts["*"]);for(k in l.headers)x.setRequestHeader(k,l.headers[k]);if(!l.beforeSend||l.beforeSend.call(m,x,l)!==!1&&v!==2){w="abort";for(k in{success:1,error:1,complete:1})x[k](l[k]);g=cA(cw,l,c,x);if(!g)y(-1,"No Transport");else{x.readyState=1,j&&n.trigger("ajaxSend",[x,l]),l.async&&l.timeout>0&&(h=setTimeout(function(){x.abort("timeout")},l.timeout));try{v=1,g.send(t,y)}catch(B){if(v<2)y(-1,B);else throw B}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var cE=[],cF=/\?/,cG=/(=)\?(?=&|$)|\?\?/,cH=p.now();p.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=cE.pop()||p.expando+"_"+cH++;return this[a]=!0,a}}),p.ajaxPrefilter("json jsonp",function(c,d,e){var f,g,h,i=c.data,j=c.url,k=c.jsonp!==!1,l=k&&cG.test(j),m=k&&!l&&typeof i=="string"&&!(c.contentType||"").indexOf("application/x-www-form-urlencoded")&&cG.test(i);if(c.dataTypes[0]==="jsonp"||l||m)return f=c.jsonpCallback=p.isFunction(c.jsonpCallback)?c.jsonpCallback():c.jsonpCallback,g=a[f],l?c.url=j.replace(cG,"$1"+f):m?c.data=i.replace(cG,"$1"+f):k&&(c.url+=(cF.test(j)?"&":"?")+c.jsonp+"="+f),c.converters["script json"]=function(){return h||p.error(f+" was not called"),h[0]},c.dataTypes[0]="json",a[f]=function(){h=arguments},e.always(function(){a[f]=g,c[f]&&(c.jsonpCallback=d.jsonpCallback,cE.push(f)),h&&p.isFunction(g)&&g(h[0]),h=g=b}),"script"}),p.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){return p.globalEval(a),a}}}),p.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),p.ajaxTransport("script",function(a){if(a.crossDomain){var c,d=e.head||e.getElementsByTagName("head")[0]||e.documentElement;return{send:function(f,g){c=e.createElement("script"),c.async="async",a.scriptCharset&&(c.charset=a.scriptCharset),c.src=a.url,c.onload=c.onreadystatechange=function(a,e){if(e||!c.readyState||/loaded|complete/.test(c.readyState))c.onload=c.onreadystatechange=null,d&&c.parentNode&&d.removeChild(c),c=b,e||g(200,"success")},d.insertBefore(c,d.firstChild)},abort:function(){c&&c.onload(0,1)}}}});var cI,cJ=a.ActiveXObject?function(){for(var a in cI)cI[a](0,1)}:!1,cK=0;p.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&cL()||cM()}:cL,function(a){p.extend(p.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(p.ajaxSettings.xhr()),p.support.ajax&&p.ajaxTransport(function(c){if(!c.crossDomain||p.support.cors){var d;return{send:function(e,f){var g,h,i=c.xhr();c.username?i.open(c.type,c.url,c.async,c.username,c.password):i.open(c.type,c.url,c.async);if(c.xhrFields)for(h in c.xhrFields)i[h]=c.xhrFields[h];c.mimeType&&i.overrideMimeType&&i.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(h in e)i.setRequestHeader(h,e[h])}catch(j){}i.send(c.hasContent&&c.data||null),d=function(a,e){var h,j,k,l,m;try{if(d&&(e||i.readyState===4)){d=b,g&&(i.onreadystatechange=p.noop,cJ&&delete cI[g]);if(e)i.readyState!==4&&i.abort();else{h=i.status,k=i.getAllResponseHeaders(),l={},m=i.responseXML,m&&m.documentElement&&(l.xml=m);try{l.text=i.responseText}catch(a){}try{j=i.statusText}catch(n){j=""}!h&&c.isLocal&&!c.crossDomain?h=l.text?200:404:h===1223&&(h=204)}}}catch(o){e||f(-1,o)}l&&f(h,j,l,k)},c.async?i.readyState===4?setTimeout(d,0):(g=++cK,cJ&&(cI||(cI={},p(a).unload(cJ)),cI[g]=d),i.onreadystatechange=d):d()},abort:function(){d&&d(0,1)}}}});var cN,cO,cP=/^(?:toggle|show|hide)$/,cQ=new RegExp("^(?:([-+])=|)("+q+")([a-z%]*)$","i"),cR=/queueHooks$/,cS=[cY],cT={"*":[function(a,b){var c,d,e=this.createTween(a,b),f=cQ.exec(b),g=e.cur(),h=+g||0,i=1,j=20;if(f){c=+f[2],d=f[3]||(p.cssNumber[a]?"":"px");if(d!=="px"&&h){h=p.css(e.elem,a,!0)||c||1;do i=i||".5",h=h/i,p.style(e.elem,a,h+d);while(i!==(i=e.cur()/g)&&i!==1&&--j)}e.unit=d,e.start=h,e.end=f[1]?h+(f[1]+1)*c:c}return e}]};p.Animation=p.extend(cW,{tweener:function(a,b){p.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");var c,d=0,e=a.length;for(;d<e;d++)c=a[d],cT[c]=cT[c]||[],cT[c].unshift(b)},prefilter:function(a,b){b?cS.unshift(a):cS.push(a)}}),p.Tween=cZ,cZ.prototype={constructor:cZ,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(p.cssNumber[c]?"":"px")},cur:function(){var a=cZ.propHooks[this.prop];return a&&a.get?a.get(this):cZ.propHooks._default.get(this)},run:function(a){var b,c=cZ.propHooks[this.prop];return this.options.duration?this.pos=b=p.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):cZ.propHooks._default.set(this),this}},cZ.prototype.init.prototype=cZ.prototype,cZ.propHooks={_default:{get:function(a){var b;return a.elem[a.prop]==null||!!a.elem.style&&a.elem.style[a.prop]!=null?(b=p.css(a.elem,a.prop,!1,""),!b||b==="auto"?0:b):a.elem[a.prop]},set:function(a){p.fx.step[a.prop]?p.fx.step[a.prop](a):a.elem.style&&(a.elem.style[p.cssProps[a.prop]]!=null||p.cssHooks[a.prop])?p.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},cZ.propHooks.scrollTop=cZ.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},p.each(["toggle","show","hide"],function(a,b){var c=p.fn[b];p.fn[b]=function(d,e,f){return d==null||typeof d=="boolean"||!a&&p.isFunction(d)&&p.isFunction(e)?c.apply(this,arguments):this.animate(c$(b,!0),d,e,f)}}),p.fn.extend({fadeTo:function(a,b,c,d){return this.filter(bZ).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=p.isEmptyObject(a),f=p.speed(b,c,d),g=function(){var b=cW(this,p.extend({},a),f);e&&b.stop(!0)};return e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,c,d){var e=function(a){var b=a.stop;delete a.stop,b(d)};return typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,c=a!=null&&a+"queueHooks",f=p.timers,g=p._data(this);if(c)g[c]&&g[c].stop&&e(g[c]);else for(c in g)g[c]&&g[c].stop&&cR.test(c)&&e(g[c]);for(c=f.length;c--;)f[c].elem===this&&(a==null||f[c].queue===a)&&(f[c].anim.stop(d),b=!1,f.splice(c,1));(b||!d)&&p.dequeue(this,a)})}}),p.each({slideDown:c$("show"),slideUp:c$("hide"),slideToggle:c$("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){p.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),p.speed=function(a,b,c){var d=a&&typeof a=="object"?p.extend({},a):{complete:c||!c&&b||p.isFunction(a)&&a,duration:a,easing:c&&b||b&&!p.isFunction(b)&&b};d.duration=p.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in p.fx.speeds?p.fx.speeds[d.duration]:p.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";return d.old=d.complete,d.complete=function(){p.isFunction(d.old)&&d.old.call(this),d.queue&&p.dequeue(this,d.queue)},d},p.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},p.timers=[],p.fx=cZ.prototype.init,p.fx.tick=function(){var a,b=p.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||p.fx.stop()},p.fx.timer=function(a){a()&&p.timers.push(a)&&!cO&&(cO=setInterval(p.fx.tick,p.fx.interval))},p.fx.interval=13,p.fx.stop=function(){clearInterval(cO),cO=null},p.fx.speeds={slow:600,fast:200,_default:400},p.fx.step={},p.expr&&p.expr.filters&&(p.expr.filters.animated=function(a){return p.grep(p.timers,function(b){return a===b.elem}).length});var c_=/^(?:body|html)$/i;p.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){p.offset.setOffset(this,a,b)});var c,d,e,f,g,h,i,j={top:0,left:0},k=this[0],l=k&&k.ownerDocument;if(!l)return;return(d=l.body)===k?p.offset.bodyOffset(k):(c=l.documentElement,p.contains(c,k)?(typeof k.getBoundingClientRect!="undefined"&&(j=k.getBoundingClientRect()),e=da(l),f=c.clientTop||d.clientTop||0,g=c.clientLeft||d.clientLeft||0,h=e.pageYOffset||c.scrollTop,i=e.pageXOffset||c.scrollLeft,{top:j.top+h-f,left:j.left+i-g}):j)},p.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;return p.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(p.css(a,"marginTop"))||0,c+=parseFloat(p.css(a,"marginLeft"))||0),{top:b,left:c}},setOffset:function(a,b,c){var d=p.css(a,"position");d==="static"&&(a.style.position="relative");var e=p(a),f=e.offset(),g=p.css(a,"top"),h=p.css(a,"left"),i=(d==="absolute"||d==="fixed")&&p.inArray("auto",[g,h])>-1,j={},k={},l,m;i?(k=e.position(),l=k.top,m=k.left):(l=parseFloat(g)||0,m=parseFloat(h)||0),p.isFunction(b)&&(b=b.call(a,c,f)),b.top!=null&&(j.top=b.top-f.top+l),b.left!=null&&(j.left=b.left-f.left+m),"using"in b?b.using.call(a,j):e.css(j)}},p.fn.extend({position:function(){if(!this[0])return;var a=this[0],b=this.offsetParent(),c=this.offset(),d=c_.test(b[0].nodeName)?{top:0,left:0}:b.offset();return c.top-=parseFloat(p.css(a,"marginTop"))||0,c.left-=parseFloat(p.css(a,"marginLeft"))||0,d.top+=parseFloat(p.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(p.css(b[0],"borderLeftWidth"))||0,{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||e.body;while(a&&!c_.test(a.nodeName)&&p.css(a,"position")==="static")a=a.offsetParent;return a||e.body})}}),p.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);p.fn[a]=function(e){return p.access(this,function(a,e,f){var g=da(a);if(f===b)return g?c in g?g[c]:g.document.documentElement[e]:a[e];g?g.scrollTo(d?p(g).scrollLeft():f,d?f:p(g).scrollTop()):a[e]=f},a,e,arguments.length,null)}}),p.each({Height:"height",Width:"width"},function(a,c){p.each({padding:"inner"+a,content:c,"":"outer"+a},function(d,e){p.fn[e]=function(e,f){var g=arguments.length&&(d||typeof e!="boolean"),h=d||(e===!0||f===!0?"margin":"border");return p.access(this,function(c,d,e){var f;return p.isWindow(c)?c.document.documentElement["client"+a]:c.nodeType===9?(f=c.documentElement,Math.max(c.body["scroll"+a],f["scroll"+a],c.body["offset"+a],f["offset"+a],f["client"+a])):e===b?p.css(c,d,e,h):p.style(c,d,e,h)},c,g?e:b,g,null)}})}),a.jQuery=a.$=p,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return p})})(window);
/**
* bootstrap.js v3.0.0 by @fat and @mdo
* Copyright 2013 Twitter Inc.
* http://www.apache.org/licenses/LICENSE-2.0
*/
if (!jQuery) { throw new Error("Bootstrap requires jQuery") }

/* ========================================================================
 * Bootstrap: transition.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#transitions
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      'WebkitTransition' : 'webkitTransitionEnd'
    , 'MozTransition'    : 'transitionend'
    , 'OTransition'      : 'oTransitionEnd otransitionend'
    , 'transition'       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false, $el    = this
    $(this).one('webkitTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger('webkitTransitionEnd') }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()
  })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#alerts
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.hasClass('alert') ? $this : $this.parent()
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      $parent.trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one($.support.transition.end, removeElement)
        .emulateTransitionEnd(150) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  var old = $.fn.alert

  $.fn.alert = function (option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(window.jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#buttons
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element = $(element)
    this.options  = $.extend({}, Button.DEFAULTS, options)
  }

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state = state + 'Text'

    if (!data.resetText) $el.data('resetText', $el[val]())

    $el[val](data[state] || this.options[state])

    // push to event loop to allow forms to submit
    setTimeout(function () {
      state == 'loadingText' ?
        $el.addClass(d).attr(d, d) :
        $el.removeClass(d).removeAttr(d);
    }, 0)
  }

  Button.prototype.toggle = function () {
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input').prop('checked', !this.$element.hasClass('active'))
      if ($input.prop('type') === 'radio') $parent.find('.active').removeClass('active')
    }

    this.$element.toggleClass('active')
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  var old = $.fn.button

  $.fn.button = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document).on('click.bs.button.data-api', '[data-toggle^=button]', function (e) {
    var $btn = $(e.target)
    if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
    $btn.button('toggle')
    e.preventDefault()
  })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#carousel
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      =
    this.sliding     =
    this.interval    =
    this.$active     =
    this.$items      = null

    this.options.pause == 'hover' && this.$element
      .on('mouseenter', $.proxy(this.pause, this))
      .on('mouseleave', $.proxy(this.cycle, this))
  }

  Carousel.DEFAULTS = {
    interval: 5000
  , pause: 'hover'
  }

  Carousel.prototype.cycle =  function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getActiveIndex = function () {
    this.$active = this.$element.find('.item.active')
    this.$items  = this.$active.parent().children()

    return this.$items.index(this.$active)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getActiveIndex()

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid', function () { that.to(pos) })
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', $(this.$items[pos]))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition.end) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || $active[type]()
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var fallback  = type == 'next' ? 'first' : 'last'
    var that      = this

    this.sliding = true

    isCycling && this.pause()

    $next = $next.length ? $next : this.$element.find('.item')[fallback]()

    var e = $.Event('slide.bs.carousel', { relatedTarget: $next[0], direction: direction })

    if ($next.hasClass('active')) return

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      this.$element.one('slid', function () {
        var $nextIndicator = $(that.$indicators.children()[that.getActiveIndex()])
        $nextIndicator && $nextIndicator.addClass('active')
      })
    }

    if ($.support.transition && this.$element.hasClass('slide')) {
      this.$element.trigger(e)
      if (e.isDefaultPrevented()) return
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one($.support.transition.end, function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () { that.$element.trigger('slid') }, 0)
        })
        .emulateTransitionEnd(600)
    } else {
      this.$element.trigger(e)
      if (e.isDefaultPrevented()) return
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger('slid')
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  var old = $.fn.carousel

  $.fn.carousel = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  $(document).on('click.bs.carousel.data-api', '[data-slide], [data-slide-to]', function (e) {
    var $this   = $(this), href
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    $target.carousel(options)

    if (slideIndex = $this.attr('data-slide-to')) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  })

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      $carousel.carousel($carousel.data())
    })
  })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#collapse
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.transitioning = null

    if (this.options.parent) this.$parent = $(this.options.parent)
    if (this.options.toggle) this.toggle()
  }

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var actives   = this.$parent && this.$parent.find('> .accordion-group > .in')

    if (actives && actives.length) {
      var hasData = actives.data('bs.collapse')
      if (hasData && hasData.transitioning) return
      actives.collapse('hide')
      hasData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')
      [dimension](0)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('in')
        [dimension]('auto')
      this.transitioning = 0
      this.$element.trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one($.support.transition.end, $.proxy(complete, this))
      .emulateTransitionEnd(350)
      [dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element
      [dimension](this.$element[dimension]())
      [0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse')
      .removeClass('in')

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .trigger('hidden.bs.collapse')
        .removeClass('collapsing')
        .addClass('collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one($.support.transition.end, $.proxy(complete, this))
      .emulateTransitionEnd(350)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  var old = $.fn.collapse

  $.fn.collapse = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle=collapse]', function (e) {
    var $this   = $(this), href
    var target  = $this.attr('data-target')
        || e.preventDefault()
        || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') //strip for ie7
    var $target = $(target)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()
    var parent  = $this.attr('data-parent')
    var $parent = parent && $(parent)

    if (!data || !data.transitioning) {
      if ($parent) $parent.find('[data-toggle=collapse][data-parent=' + parent + ']').not($this).addClass('collapsed')
      $this[$target.hasClass('in') ? 'addClass' : 'removeClass']('collapsed')
    }

    $target.collapse(option)
  })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#dropdowns
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle=dropdown]'
  var Dropdown = function (element) {
    var $el = $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement) {
        // if mobile we we use a backdrop because click events don't delegate
        $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus)
      }

      $parent.trigger(e = $.Event('show.bs.dropdown'))

      if (e.isDefaultPrevented()) return

      $parent
        .toggleClass('open')
        .trigger('shown.bs.dropdown')
    }

    $this.focus()

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27)/.test(e.keyCode)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive || (isActive && e.keyCode == 27)) {
      if (e.which == 27) $parent.find(toggle).focus()
      return $this.click()
    }

    var $items = $('[role=menu] li:not(.divider):visible a', $parent)

    if (!$items.length) return

    var index = $items.index($items.filter(':focus'))

    if (e.keyCode == 38 && index > 0)                 index--                        // up
    if (e.keyCode == 40 && index < $items.length - 1) index++                        // down
    if (!~index)                                      index=0

    $items.eq(index).focus()
  }

  function clearMenus() {
    $(backdrop).remove()
    $(toggle).each(function (e) {
      var $parent = getParent($(this))
      if (!$parent.hasClass('open')) return
      $parent.trigger(e = $.Event('hide.bs.dropdown'))
      if (e.isDefaultPrevented()) return
      $parent.removeClass('open').trigger('hidden.bs.dropdown')
    })
  }

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  var old = $.fn.dropdown

  $.fn.dropdown = function (option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('dropdown')

      if (!data) $this.data('dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api'  , toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle + ', [role=menu]' , Dropdown.prototype.keydown)

}(window.jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#modals
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options   = options
    this.$element  = $(element).on('click.dismiss.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))
    this.$backdrop =
    this.isShown   = null

    if (this.options.remote) this.$element.find('.modal-body').load(this.options.remote)
  }

  Modal.DEFAULTS = {
      backdrop: true
    , keyboard: true
    , show: true
  }

  Modal.prototype.toggle = function () {
    return this[!this.isShown ? 'show' : 'hide']()
  }

  Modal.prototype.show = function () {
    var that = this
    var e    = $.Event('show.bs.modal')

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.escape()

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(document.body) // don't move modals dom position
      }

      that.$element.show()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element
        .addClass('in')
        .attr('aria-hidden', false)

      that.enforceFocus()

      transition ?
        that.$element
          .one($.support.transition.end, function () {
            that.$element.focus().trigger('shown.bs.modal')
          })
          .emulateTransitionEnd(300) :
        that.$element.focus().trigger('shown.bs.modal')
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .attr('aria-hidden', true)

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one($.support.transition.end, $.proxy(this.hideModal, this))
        .emulateTransitionEnd(300) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.focus()
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keyup.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keyup.dismiss.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.removeBackdrop()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that    = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
        .appendTo(document.body)

      this.$element.on('click', $.proxy(function (e) {
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus.call(this.$element[0])
          : this.hide.call(this)
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one($.support.transition.end, callback)
          .emulateTransitionEnd(150) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      $.support.transition && this.$element.hasClass('fade')?
        this.$backdrop
          .one($.support.transition.end, callback)
          .emulateTransitionEnd(150) :
        callback()

    } else if (callback) {
      callback()
    }
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  var old = $.fn.modal

  $.fn.modal = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option]()
      else if (options.show) data.show()
    })
  }

  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) //strip for ie7
    var option  = $target.data('modal') ? 'toggle' : $.extend({ remote:!/#/.test(href) && href }, $target.data(), $this.data())

    e.preventDefault()

    $target
      .modal(option)
      .one('hide', function () {
        $this.is(':visible') && $this.focus()
      })
  })

  var $body = $(document.body)
    .on('shown.bs.modal',  '.modal', function () { $body.addClass('modal-open') })
    .on('hidden.bs.modal', '.modal', function () { $body.removeClass('modal-open') })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#affix
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       =
    this.options    =
    this.enabled    =
    this.timeout    =
    this.hoverState =
    this.$element   = null

    this.init('tooltip', element, options)
  }

  Tooltip.DEFAULTS = {
    animation: true
  , placement: 'top'
  , selector: false
  , template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
  , trigger: 'hover focus'
  , title: ''
  , delay: 0
  , html: false
  , container: false
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled  = true
    this.type     = type
    this.$element = $(element)
    this.options  = this.getOptions(options)

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focus'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'blur'

        this.$element.on(eventIn + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay
      , hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var defaults = this.getDefaults()
    var options  = {}

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget)[this.type](options).data('bs.' + this.type)

    clearTimeout(self.timeout)

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.hoverState = 'in'
    self.timeout    = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget)[this.type](this._options).data('bs.' + this.type)

    clearTimeout(self.timeout)

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.hoverState = 'out'
    self.timeout    = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.'+ this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return

      var $tip = this.tip()

      this.setContent()

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var $parent = this.$element.parent()

        var orgPlacement = placement
        var docScroll    = document.documentElement.scrollTop || document.body.scrollTop
        var parentWidth  = this.options.container == 'body' ? window.innerWidth  : $parent.outerWidth()
        var parentHeight = this.options.container == 'body' ? window.innerHeight : $parent.outerHeight()
        var parentLeft   = this.options.container == 'body' ? 0 : $parent.offset().left

        placement = placement == 'bottom' && pos.top   + pos.height  + actualHeight - docScroll > parentHeight  ? 'top'    :
                    placement == 'top'    && pos.top   - docScroll   - actualHeight < 0                         ? 'bottom' :
                    placement == 'right'  && pos.right + actualWidth > parentWidth                              ? 'left'   :
                    placement == 'left'   && pos.left  - actualWidth < parentLeft                               ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var tp = placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2  } :
               placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2  } :
               placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
            /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width   }

      this.applyPlacement(tp, placement)
      this.$element.trigger('shown.bs.' + this.type)
    }
  }

  Tooltip.prototype.applyPlacement = function(offset, placement) {
    var replace
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    offset.top  = offset.top  + parseInt($tip.css('margin-top'), 10)
    offset.left = offset.left + parseInt($tip.css('margin-left'), 10)

    $tip
      .offset(offset)
      .addClass('in')

    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      replace = true
      offset.top  = offset.top + height - actualHeight
    }

    if (placement == 'bottom' || placement == 'top') {
      var delta = 0

      if (offset.left < 0){
        delta       = offset.left * -2
        offset.left = 0

        $tip.offset(offset)

        actualWidth  = $tip[0].offsetWidth
        actualHeight = $tip[0].offsetHeight
      }

      this.replaceArrow(delta - width + actualWidth, actualWidth, 'left')
    } else {
      this.replaceArrow(actualHeight - height, actualHeight, 'top')
    }

    if (replace) $tip.offset(offset)
  }

  Tooltip.prototype.replaceArrow = function(delta, dimension, position) {
    this.arrow().css(position, delta ? (50 * (1 - delta / dimension) + "%") : '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function () {
    var that = this
    var $tip = this.tip()
    var e    = $.Event('hide.bs.' + this.type)

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && this.$tip.hasClass('fade') ?
      $tip
        .one($.support.transition.end, $tip.detach)
        .emulateTransitionEnd(150) :
      $tip.detach()

    this.$element.trigger('hidden.bs.' + this.type)

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof($e.attr('data-original-title')) != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function () {
    var el = this.$element[0]
    return $.extend({}, (typeof el.getBoundingClientRect == 'function') ? el.getBoundingClientRect() : {
      width: el.offsetWidth
    , height: el.offsetHeight
    }, this.$element.offset())
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.tip = function () {
    return this.$tip = this.$tip || $(this.options.template)
  }

  Tooltip.prototype.arrow =function(){
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
  }

  Tooltip.prototype.validate = function () {
    if (!this.$element[0].parentNode) {
      this.hide()
      this.$element = null
      this.options  = null
    }
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = e ? $(e.currentTarget)[this.type](this._options).data('bs.' + this.type) : this
    self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
  }

  Tooltip.prototype.destroy = function () {
    this.hide().$element.off('.' + this.type).removeData('bs.' + this.type)
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  var old = $.fn.tooltip

  $.fn.tooltip = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(window.jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#popovers
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.DEFAULTS = $.extend({} , $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right'
  , trigger: 'click'
  , content: ''
  , template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content')[this.options.html ? 'html' : 'text'](content)

    $tip.removeClass('fade top bottom left right in')

    $tip.find('.popover-title:empty').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.tip = function () {
    if (!this.$tip) this.$tip = $(this.options.template)
    return this.$tip
  }

  Popover.prototype.destroy = function () {
    this.hide().$element.off('.' + this.type).removeData(this.type)
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  var old = $.fn.popover

  $.fn.popover = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(window.jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#scrollspy
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    var href
    var process  = $.proxy(this.process, this)

    this.$element       = $(element).is('body') ? $(window) : $(element)
    this.$body          = $('body')
    this.$scrollElement = this.$element.on('scroll.bs.scroll-spy.data-api', process)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target
      || ((href = $(element).attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
      || '') + ' .nav li > a'
    this.offsets        = $([])
    this.targets        = $([])
    this.activeTarget   = null

    this.refresh()
    this.process()
  }

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.refresh = function () {
    var offsetMethod = this.$element[0] == window ? 'offset' : 'position'

    this.offsets = $([])
    this.targets = $([])

    var self     = this
    var $targets = this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#\w/.test(href) && $(href)

        return ($href
          && $href.length
          && [[ $href[offsetMethod]().top + (!$.isWindow(self.$scrollElement.get(0)) && self.$scrollElement.scrollTop()), href ]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        self.offsets.push(this[0])
        self.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight
    var maxScroll    = scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets.last()[0]) && this.activate(i)
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (!offsets[i + 1] || scrollTop <= offsets[i + 1])
        && this.activate( targets[i] )
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    $(this.selector)
      .parents('.active')
      .removeClass('active')

    var selector = this.selector
      + '[data-target="' + target + '"],'
      + this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length)  {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  var old = $.fn.scrollspy

  $.fn.scrollspy = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      $spy.scrollspy($spy.data())
    })
  })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#tabs
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    this.element = $(element)
  }

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var previous = $ul.find('.active:last a')[0]
    var e        = $.Event('show.bs.tab', {
      relatedTarget: previous
    })

    $this.trigger(e)

    if (e.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.parent('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $this.trigger({
        type: 'shown.bs.tab'
      , relatedTarget: previous
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && $active.hasClass('fade')

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
        .removeClass('active')

      element.addClass('active')

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu')) {
        element.closest('li.dropdown').addClass('active')
      }

      callback && callback()
    }

    transition ?
      $active
        .one($.support.transition.end, next)
        .emulateTransitionEnd(150) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  var old = $.fn.tab

  $.fn.tab = function ( option ) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  $(document).on('click.bs.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#affix
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)
    this.$window = $(window)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element = $(element)
    this.affixed  =
    this.unpin    = null

    this.checkPosition()
  }

  Affix.RESET = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var scrollHeight = $(document).height()
    var scrollTop    = this.$window.scrollTop()
    var position     = this.$element.offset()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top()
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom()

    var affix = this.unpin   != null && (scrollTop + this.unpin <= position.top) ? false :
                offsetBottom != null && (position.top + this.$element.height() >= scrollHeight - offsetBottom) ? 'bottom' :
                offsetTop    != null && (scrollTop <= offsetTop) ? 'top' : false

    if (this.affixed === affix) return
    if (this.unpin) this.$element.css('top', '')

    this.affixed = affix
    this.unpin   = affix == 'bottom' ? position.top - scrollTop : null

    this.$element.removeClass(Affix.RESET).addClass('affix' + (affix ? '-' + affix : ''))

    if (affix == 'bottom') {
      this.$element.offset({ top: document.body.offsetHeight - offsetBottom - this.$element.height() })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  var old = $.fn.affix

  $.fn.affix = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom) data.offset.bottom = data.offsetBottom
      if (data.offsetTop)    data.offset.top    = data.offsetTop

      $spy.affix(data)
    })
  })

}(window.jQuery);

/*! jQuery.qrcode 0.6.0 - //larsjung.de/qrcode - MIT License */

// Uses [QR Code Generator](http://www.d-project.com/qrcode/index.html) (MIT), appended to the end of this file.
// Kudos to [jquery.qrcode.js](http://github.com/jeromeetienne/jquery-qrcode) (MIT).

(function ($) {
	'use strict';


		// Wrapper for the original QR code generator.
	var QRCode = function (text, level, version, quiet) {

			// `qrcode` is the single public function that will be defined by the `QR Code Generator`
			// at the end of the file.
			var qr = qrcode(version, level);
			qr.addData(text);
			qr.make();

			quiet = quiet || 0;

			var qrModuleCount = qr.getModuleCount(),
				quietModuleCount = qr.getModuleCount() + 2*quiet,
				isDark = function (row, col) {

					row -= quiet;
					col -= quiet;

					if (row < 0 || row >= qrModuleCount || col < 0 || col >= qrModuleCount) {
						return false;
					}

					return qr.isDark(row, col);
				},
				addBlank = function (l, t, r, b) {

					var prevIsDark = this.isDark,
						moduleSize = 1 / quietModuleCount;

					this.isDark = function (row, col) {

						var ml = col * moduleSize,
							mt = row * moduleSize,
							mr = ml + moduleSize,
							mb = mt + moduleSize;

						return prevIsDark(row, col) && (l > mr || ml > r || t > mb || mt > b);
					};
				};

			this.text = text;
			this.level = level;
			this.version = version;
			this.moduleCount = quietModuleCount;
			this.isDark = isDark;
			this.addBlank = addBlank;
		},

		// Check if canvas is available in the browser (as Modernizr does)
		canvasAvailable = (function () {

			var elem = document.createElement('canvas');
			return !!(elem.getContext && elem.getContext('2d'));
		}()),

		arcToAvailable = Object.prototype.toString.call(window.opera) !== '[object Opera]',

		// Returns a minimal QR code for the given text starting with version `minVersion`.
		// Returns `null` if `text` is too long to be encoded in `maxVersion`.
		createQRCode = function (text, level, minVersion, maxVersion, quiet) {

			minVersion = Math.max(1, minVersion || 1);
			maxVersion = Math.min(40, maxVersion || 40);
			for (var version = minVersion; version <= maxVersion; version += 1) {
				try {
					return new QRCode(text, level, version, quiet);
				} catch (err) {}
			}
		},

		drawBackgroundLabel = function (qr, context, settings) {

			var font = "bold " + (settings.labelsize * settings.size) + "px " + settings.fontname,
				ctx = $('<canvas/>')[0].getContext("2d");

			ctx.font = font;

			var w = ctx.measureText(settings.label).width,
				sh = settings.labelsize,
				sw = w / settings.size,
				sl = (1 - sw)/2,
				st = (1 - sh)/2,
				sr = sl + sw,
				sb = st + sh,
				pad = 0.01;

			if (settings.mode === 1) {
				// Strip
				qr.addBlank(0, st - pad, size, sb + pad);
			} else {
				// Box
				qr.addBlank(sl - pad, st - pad, sr + pad, sb + pad);
			}

			context.fillStyle = settings.fontcolor;
			context.textAlign = "center";
			context.font = font;
			context.fillText($("#label").val(), 0.5 * settings.size, 0.5 * settings.size + 0.3 * settings.labelsize * settings.size);
		},

		drawBackgroundImage = function (qr, context, settings) {

			var size = settings.size,
				w = settings.image.naturalWidth || 1,
				h = settings.image.naturalHeight || 1,
				sh = settings.imagesize,
				sw = sh * w / h,
				sl = (1 - sw)/2,
				st = (1 - sh)/2,
				sr = sl + sw,
				sb = st + sh,
				pad = 0.01;

			if (settings.mode === 3) {
				// Strip
				qr.addBlank(0, st - pad, size, sb + pad);
			} else {
				// Box
				qr.addBlank(sl - pad, st - pad, sr + pad, sb + pad);
			}

			context.drawImage(settings.image, sl*size, st*size, sw*size, sh*size);
		},

		drawBackground = function (qr, context, settings) {

			if (settings.bgColor) {
				context.fillStyle = settings.bgColor;
				context.fillRect(settings.left, settings.top, settings.size, settings.size);
			}

			var mode = settings.mode;
			if (mode === 1 || mode === 2) {
				drawBackgroundLabel(qr, context, settings);
			} else if (mode === 3 || mode === 4) {
				drawBackgroundImage(qr, context, settings);
			}
		},

		drawModuleDefault = function (qr, context, settings, left, top, width, row, col) {

			if (qr.isDark(row, col)) {
				context.rect(left, top, width, width);
			}
		},

		drawModuleRoundedDark = function (ctx, l, t, r, b, rad, nw, ne, se, sw) {

			if (nw) {
				ctx.moveTo(l + rad, t);
			} else {
				ctx.moveTo(l, t);
			}

			if (ne) {
				ctx.lineTo(r - rad, t);
				ctx.arcTo(r, t, r, b, rad);
			} else {
				ctx.lineTo(r, t);
			}

			if (se) {
				ctx.lineTo(r, b - rad);
				ctx.arcTo(r, b, l, b, rad);
			} else {
				ctx.lineTo(r, b);
			}

			if (sw) {
				ctx.lineTo(l + rad, b);
				ctx.arcTo(l, b, l, t, rad);
			} else {
				ctx.lineTo(l, b);
			}

			if (nw) {
				ctx.lineTo(l, t + rad);
				ctx.arcTo(l, t, r, t, rad);
			} else {
				ctx.lineTo(l, t);
			}
		},

		drawModuleRoundendLight = function (ctx, l, t, r, b, rad, nw, ne, se, sw) {

			if (nw) {
				ctx.moveTo(l + rad, t);
				ctx.lineTo(l, t);
				ctx.lineTo(l, t + rad);
				ctx.arcTo(l, t, l + rad, t, rad);
			}

			if (ne) {
				ctx.moveTo(r - rad, t);
				ctx.lineTo(r, t);
				ctx.lineTo(r, t + rad);
				ctx.arcTo(r, t, r - rad, t, rad);
			}

			if (se) {
				ctx.moveTo(r - rad, b);
				ctx.lineTo(r, b);
				ctx.lineTo(r, b - rad);
				ctx.arcTo(r, b, r - rad, b, rad);
			}

			if (sw) {
				ctx.moveTo(l + rad, b);
				ctx.lineTo(l, b);
				ctx.lineTo(l, b - rad);
				ctx.arcTo(l, b, l + rad, b, rad);
			}
		},

		drawModuleRounded = function (qr, context, settings, left, top, width, row, col) {

			var isDark = qr.isDark,
				right = left + width,
				bottom = top + width,
				radius = settings.radius * width,
				rowT = row - 1,
				rowB = row + 1,
				colL = col - 1,
				colR = col + 1,
				center = isDark(row, col),
				northwest = isDark(rowT, colL),
				north = isDark(rowT, col),
				northeast = isDark(rowT, colR),
				east = isDark(row, colR),
				southeast = isDark(rowB, colR),
				south = isDark(rowB, col),
				southwest = isDark(rowB, colL),
				west = isDark(row, colL);

			if (center) {
				drawModuleRoundedDark(context, left, top, right, bottom, radius, !north && !west, !north && !east, !south && !east, !south && !west);
			} else {
				drawModuleRoundendLight(context, left, top, right, bottom, radius, north && west && northwest, north && east && northeast, south && east && southeast, south && west && southwest);
			}
		},

		drawModules = function (qr, context, settings) {

			var moduleCount = qr.moduleCount,
				moduleSize = settings.size / moduleCount,
				fn = drawModuleDefault,
				row, col;

			if (arcToAvailable && settings.radius > 0 && settings.radius <= 0.5) {
				fn = drawModuleRounded;
			}

			context.beginPath();
			for (row = 0; row < moduleCount; row += 1) {
				for (col = 0; col < moduleCount; col += 1) {

					var l = settings.left + col * moduleSize,
						t = settings.top + row * moduleSize,
						w = moduleSize;

					fn(qr, context, settings, l, t, w, row, col);
				}
			}
			context.fillStyle = settings.color;
			context.fill();
		},

		// Draws QR code to the given `canvas` and returns it.
		drawOnCanvas = function (canvas, settings) {

			var qr = createQRCode(settings.text, settings.ecLevel, settings.minVersion, settings.maxVersion, settings.quiet);
			if (!qr) {
				return null;
			}

			var $canvas = $(canvas).data('qrcode', qr),
				context = $canvas[0].getContext('2d');

			drawBackground(qr, context, settings);
			drawModules(qr, context, settings);

			return $canvas;
		},

		// Returns a `canvas` element representing the QR code for the given settings.
		createCanvas = function (settings) {

			var $canvas = $('<canvas/>').attr('width', settings.size).attr('height', settings.size);
			return drawOnCanvas($canvas, settings);
		},

		// Returns an `image` element representing the QR code for the given settings.
		createImage = function (settings) {

			return $('<img/>').attr('src', createCanvas(settings)[0].toDataURL('image/png'));
		},

		// Returns a `div` element representing the QR code for the given settings.
		createDiv = function (settings) {

			var qr = createQRCode(settings.text, settings.ecLevel, settings.minVersion, settings.maxVersion, settings.quiet);
			if (!qr) {
				return null;
			}

				// some shortcuts to improve compression
			var settings_size = settings.size,
				settings_bgColor = settings.bgColor,
				math_floor = Math.floor,

				moduleCount = qr.moduleCount,
				moduleSize = math_floor(settings_size / moduleCount),
				offset = math_floor(0.5 * (settings_size - moduleSize * moduleCount)),

				row, col,

				containerCSS = {
					position: 'relative',
					left: 0,
					top: 0,
					padding: 0,
					margin: 0,
					width: settings_size,
					height: settings_size
				},
				darkCSS = {
					position: 'absolute',
					padding: 0,
					margin: 0,
					width: moduleSize,
					height: moduleSize,
					'background-color': settings.color
				},

				$div = $('<div/>').data('qrcode', qr).css(containerCSS);

			if (settings_bgColor) {
				$div.css('background-color', settings_bgColor);
			}

			for (row = 0; row < moduleCount; row += 1) {
				for (col = 0; col < moduleCount; col += 1) {
					if (qr.isDark(row, col)) {
						$('<div/>')
							.css(darkCSS)
							.css({
								left: offset + col * moduleSize,
								top: offset + row * moduleSize
							})
							.appendTo($div);
					}
				}
			}

			return $div;
		},

		createHTML = function (settings) {

			if (canvasAvailable && settings.render === 'canvas') {
				return createCanvas(settings);
			} else if (canvasAvailable && settings.render === 'image') {
				return createImage(settings);
			}

			return createDiv(settings);
		},

		// Plugin
		// ======

		// Default settings
		// ----------------
		defaults = {

			// render method: `'canvas'`, `'image'` or `'div'`
			render: 'canvas',

			// version range somewhere in 1 .. 40
			minVersion: 1,
			maxVersion: 40,

			// error correction level: `'L'`, `'M'`, `'Q'` or `'H'`
			ecLevel: 'L',

			// offset in pixel if drawn onto existing canvas
			left: 0,
			top: 0,

			// size in pixel
			size: 200,

			// code color
			color: '#000',

			// background color, `null` for transparent background
			bgColor: null,

			// content
			text: 'no text',

			// corner radius relative to module width: 0.0 .. 0.5
			radius: 0,

			// quiet zone in modules
			quiet: 0,

			// modes
			// 0: normal
			// 1: label strip
			// 2: label box
			// 3: image strip
			// 4: image box
			mode: 0,

			label: 'no label',
			labelsize: 0.1,
			fontname: 'sans',
			fontcolor: '#000',

			image: null,
			imagesize: 0.1
		};

	// Register the plugin
	// -------------------
	$.fn.qrcode = function(options) {

		var settings = $.extend({}, defaults, options);

		return this.each(function () {

			if (this.nodeName.toLowerCase() === 'canvas') {
				drawOnCanvas(this, settings);
			} else {
				$(this).append(createHTML(settings));
			}
		});
	};

	// jQuery.qrcode plug in code ends here

	// QR Code Generator
	// =================
	//---------------------------------------------------------------------
	//
	// QR Code Generator for JavaScript
	//
	// Copyright (c) 2009 Kazuhiko Arase
	//
	// URL: http://www.d-project.com/
	//
	// Licensed under the MIT license:
	//	http://www.opensource.org/licenses/mit-license.php
	//
	// The word 'QR Code' is registered trademark of
	// DENSO WAVE INCORPORATED
	//	http://www.denso-wave.com/qrcode/faqpatent-e.html
	//
	//---------------------------------------------------------------------
	var qrcode = function() {
		//---------------------------------------------------------------------
		// qrcode
		//---------------------------------------------------------------------
		/**
		 * qrcode
		 * @param typeNumber 1 to 10
		 * @param errorCorrectLevel 'L','M','Q','H'
		 */
		var qrcode = function(typeNumber, errorCorrectLevel) {
			var PAD0 = 0xEC;
			var PAD1 = 0x11;
			var _typeNumber = typeNumber;
			var _errorCorrectLevel = QRErrorCorrectLevel[errorCorrectLevel];
			var _modules = null;
			var _moduleCount = 0;
			var _dataCache = null;
			var _dataList = new Array();
			var _this = {};
			var makeImpl = function(test, maskPattern) {
				_moduleCount = _typeNumber * 4 + 17;
				_modules = function(moduleCount) {
					var modules = new Array(moduleCount);
					for (var row = 0; row < moduleCount; row += 1) {
						modules[row] = new Array(moduleCount);
						for (var col = 0; col < moduleCount; col += 1) {
							modules[row][col] = null;
						}
					}
					return modules;
				}(_moduleCount);
				setupPositionProbePattern(0, 0);
				setupPositionProbePattern(_moduleCount - 7, 0);
				setupPositionProbePattern(0, _moduleCount - 7);
				setupPositionAdjustPattern();
				setupTimingPattern();
				setupTypeInfo(test, maskPattern);
				if (_typeNumber >= 7) {
					setupTypeNumber(test);
				}
				if (_dataCache == null) {
					_dataCache = createData(_typeNumber, _errorCorrectLevel, _dataList);
				}
				mapData(_dataCache, maskPattern);
			};
			var setupPositionProbePattern = function(row, col) {
				for (var r = -1; r <= 7; r += 1) {
					if (row + r <= -1 || _moduleCount <= row + r) continue;
					for (var c = -1; c <= 7; c += 1) {
						if (col + c <= -1 || _moduleCount <= col + c) continue;
						if ( (0 <= r && r <= 6 && (c == 0 || c == 6) )
								|| (0 <= c && c <= 6 && (r == 0 || r == 6) )
								|| (2 <= r && r <= 4 && 2 <= c && c <= 4) ) {
							_modules[row + r][col + c] = true;
						} else {
							_modules[row + r][col + c] = false;
						}
					}
				}
			};
			var getBestMaskPattern = function() {
				var minLostPoint = 0;
				var pattern = 0;
				for (var i = 0; i < 8; i += 1) {
					makeImpl(true, i);
					var lostPoint = QRUtil.getLostPoint(_this);
					if (i == 0 || minLostPoint > lostPoint) {
						minLostPoint = lostPoint;
						pattern = i;
					}
				}
				return pattern;
			};
			var setupTimingPattern = function() {
				for (var r = 8; r < _moduleCount - 8; r += 1) {
					if (_modules[r][6] != null) {
						continue;
					}
					_modules[r][6] = (r % 2 == 0);
				}
				for (var c = 8; c < _moduleCount - 8; c += 1) {
					if (_modules[6][c] != null) {
						continue;
					}
					_modules[6][c] = (c % 2 == 0);
				}
			};
			var setupPositionAdjustPattern = function() {
				var pos = QRUtil.getPatternPosition(_typeNumber);
				for (var i = 0; i < pos.length; i += 1) {
					for (var j = 0; j < pos.length; j += 1) {
						var row = pos[i];
						var col = pos[j];
						if (_modules[row][col] != null) {
							continue;
						}
						for (var r = -2; r <= 2; r += 1) {
							for (var c = -2; c <= 2; c += 1) {
								if (r == -2 || r == 2 || c == -2 || c == 2
										|| (r == 0 && c == 0) ) {
									_modules[row + r][col + c] = true;
								} else {
									_modules[row + r][col + c] = false;
								}
							}
						}
					}
				}
			};
			var setupTypeNumber = function(test) {
				var bits = QRUtil.getBCHTypeNumber(_typeNumber);
				for (var i = 0; i < 18; i += 1) {
					var mod = (!test && ( (bits >> i) & 1) == 1);
					_modules[Math.floor(i / 3)][i % 3 + _moduleCount - 8 - 3] = mod;
				}
				for (var i = 0; i < 18; i += 1) {
					var mod = (!test && ( (bits >> i) & 1) == 1);
					_modules[i % 3 + _moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
				}
			};
			var setupTypeInfo = function(test, maskPattern) {
				var data = (_errorCorrectLevel << 3) | maskPattern;
				var bits = QRUtil.getBCHTypeInfo(data);
				// vertical
				for (var i = 0; i < 15; i += 1) {
					var mod = (!test && ( (bits >> i) & 1) == 1);
					if (i < 6) {
						_modules[i][8] = mod;
					} else if (i < 8) {
						_modules[i + 1][8] = mod;
					} else {
						_modules[_moduleCount - 15 + i][8] = mod;
					}
				}
				// horizontal
				for (var i = 0; i < 15; i += 1) {
					var mod = (!test && ( (bits >> i) & 1) == 1);
					if (i < 8) {
						_modules[8][_moduleCount - i - 1] = mod;
					} else if (i < 9) {
						_modules[8][15 - i - 1 + 1] = mod;
					} else {
						_modules[8][15 - i - 1] = mod;
					}
				}
				// fixed module
				_modules[_moduleCount - 8][8] = (!test);
			};
			var mapData = function(data, maskPattern) {
				var inc = -1;
				var row = _moduleCount - 1;
				var bitIndex = 7;
				var byteIndex = 0;
				var maskFunc = QRUtil.getMaskFunction(maskPattern);
				for (var col = _moduleCount - 1; col > 0; col -= 2) {
					if (col == 6) col -= 1;
					while (true) {
						for (var c = 0; c < 2; c += 1) {
							if (_modules[row][col - c] == null) {
								var dark = false;
								if (byteIndex < data.length) {
									dark = ( ( (data[byteIndex] >>> bitIndex) & 1) == 1);
								}
								var mask = maskFunc(row, col - c);
								if (mask) {
									dark = !dark;
								}
								_modules[row][col - c] = dark;
								bitIndex -= 1;
								if (bitIndex == -1) {
									byteIndex += 1;
									bitIndex = 7;
								}
							}
						}
						row += inc;
						if (row < 0 || _moduleCount <= row) {
							row -= inc;
							inc = -inc;
							break;
						}
					}
				}
			};
			var createBytes = function(buffer, rsBlocks) {
				var offset = 0;
				var maxDcCount = 0;
				var maxEcCount = 0;
				var dcdata = new Array(rsBlocks.length);
				var ecdata = new Array(rsBlocks.length);
				for (var r = 0; r < rsBlocks.length; r += 1) {
					var dcCount = rsBlocks[r].dataCount;
					var ecCount = rsBlocks[r].totalCount - dcCount;
					maxDcCount = Math.max(maxDcCount, dcCount);
					maxEcCount = Math.max(maxEcCount, ecCount);
					dcdata[r] = new Array(dcCount);
					for (var i = 0; i < dcdata[r].length; i += 1) {
						dcdata[r][i] = 0xff & buffer.getBuffer()[i + offset];
					}
					offset += dcCount;
					var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
					var rawPoly = qrPolynomial(dcdata[r], rsPoly.getLength() - 1);
					var modPoly = rawPoly.mod(rsPoly);
					ecdata[r] = new Array(rsPoly.getLength() - 1);
					for (var i = 0; i < ecdata[r].length; i += 1) {
						var modIndex = i + modPoly.getLength() - ecdata[r].length;
						ecdata[r][i] = (modIndex >= 0)? modPoly.get(modIndex) : 0;
					}
				}
				var totalCodeCount = 0;
				for (var i = 0; i < rsBlocks.length; i += 1) {
					totalCodeCount += rsBlocks[i].totalCount;
				}
				var data = new Array(totalCodeCount);
				var index = 0;
				for (var i = 0; i < maxDcCount; i += 1) {
					for (var r = 0; r < rsBlocks.length; r += 1) {
						if (i < dcdata[r].length) {
							data[index] = dcdata[r][i];
							index += 1;
						}
					}
				}
				for (var i = 0; i < maxEcCount; i += 1) {
					for (var r = 0; r < rsBlocks.length; r += 1) {
						if (i < ecdata[r].length) {
							data[index] = ecdata[r][i];
							index += 1;
						}
					}
				}
				return data;
			};
			var createData = function(typeNumber, errorCorrectLevel, dataList) {
				var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, errorCorrectLevel);
				var buffer = qrBitBuffer();
				for (var i = 0; i < dataList.length; i += 1) {
					var data = dataList[i];
					buffer.put(data.getMode(), 4);
					buffer.put(data.getLength(), QRUtil.getLengthInBits(data.getMode(), typeNumber) );
					data.write(buffer);
				}
				// calc num max data.
				var totalDataCount = 0;
				for (var i = 0; i < rsBlocks.length; i += 1) {
					totalDataCount += rsBlocks[i].dataCount;
				}
				if (buffer.getLengthInBits() > totalDataCount * 8) {
					throw new Error('code length overflow. ('
						+ buffer.getLengthInBits()
						+ '>'
						+ totalDataCount * 8
						+ ')');
				}
				// end code
				if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
					buffer.put(0, 4);
				}
				// padding
				while (buffer.getLengthInBits() % 8 != 0) {
					buffer.putBit(false);
				}
				// padding
				while (true) {
					if (buffer.getLengthInBits() >= totalDataCount * 8) {
						break;
					}
					buffer.put(PAD0, 8);
					if (buffer.getLengthInBits() >= totalDataCount * 8) {
						break;
					}
					buffer.put(PAD1, 8);
				}
				return createBytes(buffer, rsBlocks);
			};
			_this.addData = function(data) {
				var newData = qr8BitByte(data);
				_dataList.push(newData);
				_dataCache = null;
			};
			_this.isDark = function(row, col) {
				if (row < 0 || _moduleCount <= row || col < 0 || _moduleCount <= col) {
					throw new Error(row + ',' + col);
				}
				return _modules[row][col];
			};
			_this.getModuleCount = function() {
				return _moduleCount;
			};
			_this.make = function() {
				makeImpl(false, getBestMaskPattern() );
			};
			_this.createTableTag = function(cellSize, margin) {
				cellSize = cellSize || 2;
				margin = (typeof margin == 'undefined')? cellSize * 4 : margin;
				var qrHtml = '';
				qrHtml += '<table style="';
				qrHtml += ' border-width: 0px; border-style: none;';
				qrHtml += ' border-collapse: collapse;';
				qrHtml += ' padding: 0px; margin: ' + margin + 'px;';
				qrHtml += '">';
				qrHtml += '<tbody>';
				for (var r = 0; r < _this.getModuleCount(); r += 1) {
					qrHtml += '<tr>';
					for (var c = 0; c < _this.getModuleCount(); c += 1) {
						qrHtml += '<td style="';
						qrHtml += ' border-width: 0px; border-style: none;';
						qrHtml += ' border-collapse: collapse;';
						qrHtml += ' padding: 0px; margin: 0px;';
						qrHtml += ' width: ' + cellSize + 'px;';
						qrHtml += ' height: ' + cellSize + 'px;';
						qrHtml += ' background-color: ';
						qrHtml += _this.isDark(r, c)? '#000000' : '#ffffff';
						qrHtml += ';';
						qrHtml += '"/>';
					}
					qrHtml += '</tr>';
				}
				qrHtml += '</tbody>';
				qrHtml += '</table>';
				return qrHtml;
			};
			_this.createImgTag = function(cellSize, margin) {
				cellSize = cellSize || 2;
				margin = (typeof margin == 'undefined')? cellSize * 4 : margin;
				var size = _this.getModuleCount() * cellSize + margin * 2;
				var min = margin;
				var max = size - margin;
				return createImgTag(size, size, function(x, y) {
					if (min <= x && x < max && min <= y && y < max) {
						var c = Math.floor( (x - min) / cellSize);
						var r = Math.floor( (y - min) / cellSize);
						return _this.isDark(r, c)? 0 : 1;
					} else {
						return 1;
					}
				} );
			};
			return _this;
		};
		//---------------------------------------------------------------------
		// qrcode.stringToBytes
		//---------------------------------------------------------------------
		qrcode.stringToBytes = function(s) {
			var bytes = new Array();
			for (var i = 0; i < s.length; i += 1) {
				var c = s.charCodeAt(i);
				bytes.push(c & 0xff);
			}
			return bytes;
		};
		//---------------------------------------------------------------------
		// qrcode.createStringToBytes
		//---------------------------------------------------------------------
		/**
		 * @param unicodeData base64 string of byte array.
		 * [16bit Unicode],[16bit Bytes], ...
		 * @param numChars
		 */
		qrcode.createStringToBytes = function(unicodeData, numChars) {
			// create conversion map.
			var unicodeMap = function() {
				var bin = base64DecodeInputStream(unicodeData);
				var read = function() {
					var b = bin.read();
					if (b == -1) throw new Error();
					return b;
				};
				var count = 0;
				var unicodeMap = {};
				while (true) {
					var b0 = bin.read();
					if (b0 == -1) break;
					var b1 = read();
					var b2 = read();
					var b3 = read();
					var k = String.fromCharCode( (b0 << 8) | b1);
					var v = (b2 << 8) | b3;
					unicodeMap[k] = v;
					count += 1;
				}
				if (count != numChars) {
					throw new Error(count + ' != ' + numChars);
				}
				return unicodeMap;
			}();
			var unknownChar = '?'.charCodeAt(0);
			return function(s) {
				var bytes = new Array();
				for (var i = 0; i < s.length; i += 1) {
					var c = s.charCodeAt(i);
					if (c < 128) {
						bytes.push(c);
					} else {
						var b = unicodeMap[s.charAt(i)];
						if (typeof b == 'number') {
							if ( (b & 0xff) == b) {
								// 1byte
								bytes.push(b);
							} else {
								// 2bytes
								bytes.push(b >>> 8);
								bytes.push(b & 0xff);
							}
						} else {
							bytes.push(unknownChar);
						}
					}
				}
				return bytes;
			};
		};
		//---------------------------------------------------------------------
		// QRMode
		//---------------------------------------------------------------------
		var QRMode = {
			MODE_NUMBER :		1 << 0,
			MODE_ALPHA_NUM : 	1 << 1,
			MODE_8BIT_BYTE : 	1 << 2,
			MODE_KANJI :		1 << 3
		};
		//---------------------------------------------------------------------
		// QRErrorCorrectLevel
		//---------------------------------------------------------------------
		var QRErrorCorrectLevel = {
			L : 1,
			M : 0,
			Q : 3,
			H : 2
		};
		//---------------------------------------------------------------------
		// QRMaskPattern
		//---------------------------------------------------------------------
		var QRMaskPattern = {
			PATTERN000 : 0,
			PATTERN001 : 1,
			PATTERN010 : 2,
			PATTERN011 : 3,
			PATTERN100 : 4,
			PATTERN101 : 5,
			PATTERN110 : 6,
			PATTERN111 : 7
		};
		//---------------------------------------------------------------------
		// QRUtil
		//---------------------------------------------------------------------
		var QRUtil = function() {
			var PATTERN_POSITION_TABLE = [
				[],
				[6, 18],
				[6, 22],
				[6, 26],
				[6, 30],
				[6, 34],
				[6, 22, 38],
				[6, 24, 42],
				[6, 26, 46],
				[6, 28, 50],
				[6, 30, 54],
				[6, 32, 58],
				[6, 34, 62],
				[6, 26, 46, 66],
				[6, 26, 48, 70],
				[6, 26, 50, 74],
				[6, 30, 54, 78],
				[6, 30, 56, 82],
				[6, 30, 58, 86],
				[6, 34, 62, 90],
				[6, 28, 50, 72, 94],
				[6, 26, 50, 74, 98],
				[6, 30, 54, 78, 102],
				[6, 28, 54, 80, 106],
				[6, 32, 58, 84, 110],
				[6, 30, 58, 86, 114],
				[6, 34, 62, 90, 118],
				[6, 26, 50, 74, 98, 122],
				[6, 30, 54, 78, 102, 126],
				[6, 26, 52, 78, 104, 130],
				[6, 30, 56, 82, 108, 134],
				[6, 34, 60, 86, 112, 138],
				[6, 30, 58, 86, 114, 142],
				[6, 34, 62, 90, 118, 146],
				[6, 30, 54, 78, 102, 126, 150],
				[6, 24, 50, 76, 102, 128, 154],
				[6, 28, 54, 80, 106, 132, 158],
				[6, 32, 58, 84, 110, 136, 162],
				[6, 26, 54, 82, 110, 138, 166],
				[6, 30, 58, 86, 114, 142, 170]
			];
			var G15 = (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0);
			var G18 = (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0);
			var G15_MASK = (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1);
			var _this = {};
			var getBCHDigit = function(data) {
				var digit = 0;
				while (data != 0) {
					digit += 1;
					data >>>= 1;
				}
				return digit;
			};
			_this.getBCHTypeInfo = function(data) {
				var d = data << 10;
				while (getBCHDigit(d) - getBCHDigit(G15) >= 0) {
					d ^= (G15 << (getBCHDigit(d) - getBCHDigit(G15) ) );
				}
				return ( (data << 10) | d) ^ G15_MASK;
			};
			_this.getBCHTypeNumber = function(data) {
				var d = data << 12;
				while (getBCHDigit(d) - getBCHDigit(G18) >= 0) {
					d ^= (G18 << (getBCHDigit(d) - getBCHDigit(G18) ) );
				}
				return (data << 12) | d;
			};
			_this.getPatternPosition = function(typeNumber) {
				return PATTERN_POSITION_TABLE[typeNumber - 1];
			};
			_this.getMaskFunction = function(maskPattern) {
				switch (maskPattern) {
				case QRMaskPattern.PATTERN000 :
					return function(i, j) { return (i + j) % 2 == 0; };
				case QRMaskPattern.PATTERN001 :
					return function(i, j) { return i % 2 == 0; };
				case QRMaskPattern.PATTERN010 :
					return function(i, j) { return j % 3 == 0; };
				case QRMaskPattern.PATTERN011 :
					return function(i, j) { return (i + j) % 3 == 0; };
				case QRMaskPattern.PATTERN100 :
					return function(i, j) { return (Math.floor(i / 2) + Math.floor(j / 3) ) % 2 == 0; };
				case QRMaskPattern.PATTERN101 :
					return function(i, j) { return (i * j) % 2 + (i * j) % 3 == 0; };
				case QRMaskPattern.PATTERN110 :
					return function(i, j) { return ( (i * j) % 2 + (i * j) % 3) % 2 == 0; };
				case QRMaskPattern.PATTERN111 :
					return function(i, j) { return ( (i * j) % 3 + (i + j) % 2) % 2 == 0; };
				default :
					throw new Error('bad maskPattern:' + maskPattern);
				}
			};
			_this.getErrorCorrectPolynomial = function(errorCorrectLength) {
				var a = qrPolynomial([1], 0);
				for (var i = 0; i < errorCorrectLength; i += 1) {
					a = a.multiply(qrPolynomial([1, QRMath.gexp(i)], 0) );
				}
				return a;
			};
			_this.getLengthInBits = function(mode, type) {
				if (1 <= type && type < 10) {
					// 1 - 9
					switch(mode) {
					case QRMode.MODE_NUMBER 	: return 10;
					case QRMode.MODE_ALPHA_NUM 	: return 9;
					case QRMode.MODE_8BIT_BYTE	: return 8;
					case QRMode.MODE_KANJI		: return 8;
					default :
						throw new Error('mode:' + mode);
					}
				} else if (type < 27) {
					// 10 - 26
					switch(mode) {
					case QRMode.MODE_NUMBER 	: return 12;
					case QRMode.MODE_ALPHA_NUM 	: return 11;
					case QRMode.MODE_8BIT_BYTE	: return 16;
					case QRMode.MODE_KANJI		: return 10;
					default :
						throw new Error('mode:' + mode);
					}
				} else if (type < 41) {
					// 27 - 40
					switch(mode) {
					case QRMode.MODE_NUMBER 	: return 14;
					case QRMode.MODE_ALPHA_NUM	: return 13;
					case QRMode.MODE_8BIT_BYTE	: return 16;
					case QRMode.MODE_KANJI		: return 12;
					default :
						throw new Error('mode:' + mode);
					}
				} else {
					throw new Error('type:' + type);
				}
			};
			_this.getLostPoint = function(qrcode) {
				var moduleCount = qrcode.getModuleCount();
				var lostPoint = 0;
				// LEVEL1
				for (var row = 0; row < moduleCount; row += 1) {
					for (var col = 0; col < moduleCount; col += 1) {
						var sameCount = 0;
						var dark = qrcode.isDark(row, col);
						for (var r = -1; r <= 1; r += 1) {
							if (row + r < 0 || moduleCount <= row + r) {
								continue;
							}
							for (var c = -1; c <= 1; c += 1) {
								if (col + c < 0 || moduleCount <= col + c) {
									continue;
								}
								if (r == 0 && c == 0) {
									continue;
								}
								if (dark == qrcode.isDark(row + r, col + c) ) {
									sameCount += 1;
								}
							}
						}
						if (sameCount > 5) {
							lostPoint += (3 + sameCount - 5);
						}
					}
				};
				// LEVEL2
				for (var row = 0; row < moduleCount - 1; row += 1) {
					for (var col = 0; col < moduleCount - 1; col += 1) {
						var count = 0;
						if (qrcode.isDark(row, col) ) count += 1;
						if (qrcode.isDark(row + 1, col) ) count += 1;
						if (qrcode.isDark(row, col + 1) ) count += 1;
						if (qrcode.isDark(row + 1, col + 1) ) count += 1;
						if (count == 0 || count == 4) {
							lostPoint += 3;
						}
					}
				}
				// LEVEL3
				for (var row = 0; row < moduleCount; row += 1) {
					for (var col = 0; col < moduleCount - 6; col += 1) {
						if (qrcode.isDark(row, col)
								&& !qrcode.isDark(row, col + 1)
								&&  qrcode.isDark(row, col + 2)
								&&  qrcode.isDark(row, col + 3)
								&&  qrcode.isDark(row, col + 4)
								&& !qrcode.isDark(row, col + 5)
								&&  qrcode.isDark(row, col + 6) ) {
							lostPoint += 40;
						}
					}
				}
				for (var col = 0; col < moduleCount; col += 1) {
					for (var row = 0; row < moduleCount - 6; row += 1) {
						if (qrcode.isDark(row, col)
								&& !qrcode.isDark(row + 1, col)
								&&  qrcode.isDark(row + 2, col)
								&&  qrcode.isDark(row + 3, col)
								&&  qrcode.isDark(row + 4, col)
								&& !qrcode.isDark(row + 5, col)
								&&  qrcode.isDark(row + 6, col) ) {
							lostPoint += 40;
						}
					}
				}
				// LEVEL4
				var darkCount = 0;
				for (var col = 0; col < moduleCount; col += 1) {
					for (var row = 0; row < moduleCount; row += 1) {
						if (qrcode.isDark(row, col) ) {
							darkCount += 1;
						}
					}
				}
				var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
				lostPoint += ratio * 10;
				return lostPoint;
			};
			return _this;
		}();
		//---------------------------------------------------------------------
		// QRMath
		//---------------------------------------------------------------------
		var QRMath = function() {
			var EXP_TABLE = new Array(256);
			var LOG_TABLE = new Array(256);
			// initialize tables
			for (var i = 0; i < 8; i += 1) {
				EXP_TABLE[i] = 1 << i;
			}
			for (var i = 8; i < 256; i += 1) {
				EXP_TABLE[i] = EXP_TABLE[i - 4]
					^ EXP_TABLE[i - 5]
					^ EXP_TABLE[i - 6]
					^ EXP_TABLE[i - 8];
			}
			for (var i = 0; i < 255; i += 1) {
				LOG_TABLE[EXP_TABLE[i] ] = i;
			}
			var _this = {};
			_this.glog = function(n) {
				if (n < 1) {
					throw new Error('glog(' + n + ')');
				}
				return LOG_TABLE[n];
			};
			_this.gexp = function(n) {
				while (n < 0) {
					n += 255;
				}
				while (n >= 256) {
					n -= 255;
				}
				return EXP_TABLE[n];
			};
			return _this;
		}();
		//---------------------------------------------------------------------
		// qrPolynomial
		//---------------------------------------------------------------------
		function qrPolynomial(num, shift) {
			if (typeof num.length == 'undefined') {
				throw new Error(num.length + '/' + shift);
			}
			var _num = function() {
				var offset = 0;
				while (offset < num.length && num[offset] == 0) {
					offset += 1;
				}
				var _num = new Array(num.length - offset + shift);
				for (var i = 0; i < num.length - offset; i += 1) {
					_num[i] = num[i + offset];
				}
				return _num;
			}();
			var _this = {};
			_this.get = function(index) {
				return _num[index];
			};
			_this.getLength = function() {
				return _num.length;
			};
			_this.multiply = function(e) {
				var num = new Array(_this.getLength() + e.getLength() - 1);
				for (var i = 0; i < _this.getLength(); i += 1) {
					for (var j = 0; j < e.getLength(); j += 1) {
						num[i + j] ^= QRMath.gexp(QRMath.glog(_this.get(i) ) + QRMath.glog(e.get(j) ) );
					}
				}
				return qrPolynomial(num, 0);
			};
			_this.mod = function(e) {
				if (_this.getLength() - e.getLength() < 0) {
					return _this;
				}
				var ratio = QRMath.glog(_this.get(0) ) - QRMath.glog(e.get(0) );
				var num = new Array(_this.getLength() );
				for (var i = 0; i < _this.getLength(); i += 1) {
					num[i] = _this.get(i);
				}
				for (var i = 0; i < e.getLength(); i += 1) {
					num[i] ^= QRMath.gexp(QRMath.glog(e.get(i) ) + ratio);
				}
				// recursive call
				return qrPolynomial(num, 0).mod(e);
			};
			return _this;
		};
		//---------------------------------------------------------------------
		// QRRSBlock
		//---------------------------------------------------------------------
		var QRRSBlock = function() {
			var RS_BLOCK_TABLE = [
				// L
				// M
				// Q
				// H
				// 1
				[1, 26, 19],
				[1, 26, 16],
				[1, 26, 13],
				[1, 26, 9],
				// 2
				[1, 44, 34],
				[1, 44, 28],
				[1, 44, 22],
				[1, 44, 16],
				// 3
				[1, 70, 55],
				[1, 70, 44],
				[2, 35, 17],
				[2, 35, 13],
				// 4
				[1, 100, 80],
				[2, 50, 32],
				[2, 50, 24],
				[4, 25, 9],
				// 5
				[1, 134, 108],
				[2, 67, 43],
				[2, 33, 15, 2, 34, 16],
				[2, 33, 11, 2, 34, 12],
				// 6
				[2, 86, 68],
				[4, 43, 27],
				[4, 43, 19],
				[4, 43, 15],
				// 7
				[2, 98, 78],
				[4, 49, 31],
				[2, 32, 14, 4, 33, 15],
				[4, 39, 13, 1, 40, 14],
				// 8
				[2, 121, 97],
				[2, 60, 38, 2, 61, 39],
				[4, 40, 18, 2, 41, 19],
				[4, 40, 14, 2, 41, 15],
				// 9
				[2, 146, 116],
				[3, 58, 36, 2, 59, 37],
				[4, 36, 16, 4, 37, 17],
				[4, 36, 12, 4, 37, 13],
				// 10
				[2, 86, 68, 2, 87, 69],
				[4, 69, 43, 1, 70, 44],
				[6, 43, 19, 2, 44, 20],
				[6, 43, 15, 2, 44, 16],
				// 11
				[4, 101, 81],
				[1, 80, 50, 4, 81, 51],
				[4, 50, 22, 4, 51, 23],
				[3, 36, 12, 8, 37, 13],
				// 12
				[2, 116, 92, 2, 117, 93],
				[6, 58, 36, 2, 59, 37],
				[4, 46, 20, 6, 47, 21],
				[7, 42, 14, 4, 43, 15],
				// 13
				[4, 133, 107],
				[8, 59, 37, 1, 60, 38],
				[8, 44, 20, 4, 45, 21],
				[12, 33, 11, 4, 34, 12],
				// 14
				[3, 145, 115, 1, 146, 116],
				[4, 64, 40, 5, 65, 41],
				[11, 36, 16, 5, 37, 17],
				[11, 36, 12, 5, 37, 13],
				// 15
				[5, 109, 87, 1, 110, 88],
				[5, 65, 41, 5, 66, 42],
				[5, 54, 24, 7, 55, 25],
				[11, 36, 12],
				// 16
				[5, 122, 98, 1, 123, 99],
				[7, 73, 45, 3, 74, 46],
				[15, 43, 19, 2, 44, 20],
				[3, 45, 15, 13, 46, 16],
				// 17
				[1, 135, 107, 5, 136, 108],
				[10, 74, 46, 1, 75, 47],
				[1, 50, 22, 15, 51, 23],
				[2, 42, 14, 17, 43, 15],
				// 18
				[5, 150, 120, 1, 151, 121],
				[9, 69, 43, 4, 70, 44],
				[17, 50, 22, 1, 51, 23],
				[2, 42, 14, 19, 43, 15],
				// 19
				[3, 141, 113, 4, 142, 114],
				[3, 70, 44, 11, 71, 45],
				[17, 47, 21, 4, 48, 22],
				[9, 39, 13, 16, 40, 14],
				// 20
				[3, 135, 107, 5, 136, 108],
				[3, 67, 41, 13, 68, 42],
				[15, 54, 24, 5, 55, 25],
				[15, 43, 15, 10, 44, 16],
				// 21
				[4, 144, 116, 4, 145, 117],
				[17, 68, 42],
				[17, 50, 22, 6, 51, 23],
				[19, 46, 16, 6, 47, 17],
				// 22
				[2, 139, 111, 7, 140, 112],
				[17, 74, 46],
				[7, 54, 24, 16, 55, 25],
				[34, 37, 13],
				// 23
				[4, 151, 121, 5, 152, 122],
				[4, 75, 47, 14, 76, 48],
				[11, 54, 24, 14, 55, 25],
				[16, 45, 15, 14, 46, 16],
				// 24
				[6, 147, 117, 4, 148, 118],
				[6, 73, 45, 14, 74, 46],
				[11, 54, 24, 16, 55, 25],
				[30, 46, 16, 2, 47, 17],
				// 25
				[8, 132, 106, 4, 133, 107],
				[8, 75, 47, 13, 76, 48],
				[7, 54, 24, 22, 55, 25],
				[22, 45, 15, 13, 46, 16],
				// 26
				[10, 142, 114, 2, 143, 115],
				[19, 74, 46, 4, 75, 47],
				[28, 50, 22, 6, 51, 23],
				[33, 46, 16, 4, 47, 17],
				// 27
				[8, 152, 122, 4, 153, 123],
				[22, 73, 45, 3, 74, 46],
				[8, 53, 23, 26, 54, 24],
				[12, 45, 15, 28, 46, 16],
				// 28
				[3, 147, 117, 10, 148, 118],
				[3, 73, 45, 23, 74, 46],
				[4, 54, 24, 31, 55, 25],
				[11, 45, 15, 31, 46, 16],
				// 29
				[7, 146, 116, 7, 147, 117],
				[21, 73, 45, 7, 74, 46],
				[1, 53, 23, 37, 54, 24],
				[19, 45, 15, 26, 46, 16],
				// 30
				[5, 145, 115, 10, 146, 116],
				[19, 75, 47, 10, 76, 48],
				[15, 54, 24, 25, 55, 25],
				[23, 45, 15, 25, 46, 16],
				// 31
				[13, 145, 115, 3, 146, 116],
				[2, 74, 46, 29, 75, 47],
				[42, 54, 24, 1, 55, 25],
				[23, 45, 15, 28, 46, 16],
				// 32
				[17, 145, 115],
				[10, 74, 46, 23, 75, 47],
				[10, 54, 24, 35, 55, 25],
				[19, 45, 15, 35, 46, 16],
				// 33
				[17, 145, 115, 1, 146, 116],
				[14, 74, 46, 21, 75, 47],
				[29, 54, 24, 19, 55, 25],
				[11, 45, 15, 46, 46, 16],
				// 34
				[13, 145, 115, 6, 146, 116],
				[14, 74, 46, 23, 75, 47],
				[44, 54, 24, 7, 55, 25],
				[59, 46, 16, 1, 47, 17],
				// 35
				[12, 151, 121, 7, 152, 122],
				[12, 75, 47, 26, 76, 48],
				[39, 54, 24, 14, 55, 25],
				[22, 45, 15, 41, 46, 16],
				// 36
				[6, 151, 121, 14, 152, 122],
				[6, 75, 47, 34, 76, 48],
				[46, 54, 24, 10, 55, 25],
				[2, 45, 15, 64, 46, 16],
				// 37
				[17, 152, 122, 4, 153, 123],
				[29, 74, 46, 14, 75, 47],
				[49, 54, 24, 10, 55, 25],
				[24, 45, 15, 46, 46, 16],
				// 38
				[4, 152, 122, 18, 153, 123],
				[13, 74, 46, 32, 75, 47],
				[48, 54, 24, 14, 55, 25],
				[42, 45, 15, 32, 46, 16],
				// 39
				[20, 147, 117, 4, 148, 118],
				[40, 75, 47, 7, 76, 48],
				[43, 54, 24, 22, 55, 25],
				[10, 45, 15, 67, 46, 16],
				// 40
				[19, 148, 118, 6, 149, 119],
				[18, 75, 47, 31, 76, 48],
				[34, 54, 24, 34, 55, 25],
				[20, 45, 15, 61, 46, 16]
			];
			var qrRSBlock = function(totalCount, dataCount) {
				var _this = {};
				_this.totalCount = totalCount;
				_this.dataCount = dataCount;
				return _this;
			};
			var _this = {};
			var getRsBlockTable = function(typeNumber, errorCorrectLevel) {
				switch(errorCorrectLevel) {
				case QRErrorCorrectLevel.L :
					return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
				case QRErrorCorrectLevel.M :
					return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
				case QRErrorCorrectLevel.Q :
					return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
				case QRErrorCorrectLevel.H :
					return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
				default :
					return undefined;
				}
			};
			_this.getRSBlocks = function(typeNumber, errorCorrectLevel) {
				var rsBlock = getRsBlockTable(typeNumber, errorCorrectLevel);
				if (typeof rsBlock == 'undefined') {
					throw new Error('bad rs block @ typeNumber:' + typeNumber +
							'/errorCorrectLevel:' + errorCorrectLevel);
				}
				var length = rsBlock.length / 3;
				var list = new Array();
				for (var i = 0; i < length; i += 1) {
					var count = rsBlock[i * 3 + 0];
					var totalCount = rsBlock[i * 3 + 1];
					var dataCount = rsBlock[i * 3 + 2];
					for (var j = 0; j < count; j += 1) {
						list.push(qrRSBlock(totalCount, dataCount) );
					}
				}
				return list;
			};
			return _this;
		}();
		//---------------------------------------------------------------------
		// qrBitBuffer
		//---------------------------------------------------------------------
		var qrBitBuffer = function() {
			var _buffer = new Array();
			var _length = 0;
			var _this = {};
			_this.getBuffer = function() {
				return _buffer;
			};
			_this.get = function(index) {
				var bufIndex = Math.floor(index / 8);
				return ( (_buffer[bufIndex] >>> (7 - index % 8) ) & 1) == 1;
			};
			_this.put = function(num, length) {
				for (var i = 0; i < length; i += 1) {
					_this.putBit( ( (num >>> (length - i - 1) ) & 1) == 1);
				}
			};
			_this.getLengthInBits = function() {
				return _length;
			};
			_this.putBit = function(bit) {
				var bufIndex = Math.floor(_length / 8);
				if (_buffer.length <= bufIndex) {
					_buffer.push(0);
				}
				if (bit) {
					_buffer[bufIndex] |= (0x80 >>> (_length % 8) );
				}
				_length += 1;
			};
			return _this;
		};
		//---------------------------------------------------------------------
		// qr8BitByte
		//---------------------------------------------------------------------
		var qr8BitByte = function(data) {
			var _mode = QRMode.MODE_8BIT_BYTE;
			var _data = data;
			var _bytes = qrcode.stringToBytes(data);
			var _this = {};
			_this.getMode = function() {
				return _mode;
			};
			_this.getLength = function(buffer) {
				return _bytes.length;
			};
			_this.write = function(buffer) {
				for (var i = 0; i < _bytes.length; i += 1) {
					buffer.put(_bytes[i], 8);
				}
			};
			return _this;
		};
		//=====================================================================
		// GIF Support etc.
		//
		//---------------------------------------------------------------------
		// byteArrayOutputStream
		//---------------------------------------------------------------------
		var byteArrayOutputStream = function() {
			var _bytes = new Array();
			var _this = {};
			_this.writeByte = function(b) {
				_bytes.push(b & 0xff);
			};
			_this.writeShort = function(i) {
				_this.writeByte(i);
				_this.writeByte(i >>> 8);
			};
			_this.writeBytes = function(b, off, len) {
				off = off || 0;
				len = len || b.length;
				for (var i = 0; i < len; i += 1) {
					_this.writeByte(b[i + off]);
				}
			};
			_this.writeString = function(s) {
				for (var i = 0; i < s.length; i += 1) {
					_this.writeByte(s.charCodeAt(i) );
				}
			};
			_this.toByteArray = function() {
				return _bytes;
			};
			_this.toString = function() {
				var s = '';
				s += '[';
				for (var i = 0; i < _bytes.length; i += 1) {
					if (i > 0) {
						s += ',';
					}
					s += _bytes[i];
				}
				s += ']';
				return s;
			};
			return _this;
		};
		//---------------------------------------------------------------------
		// base64EncodeOutputStream
		//---------------------------------------------------------------------
		var base64EncodeOutputStream = function() {
			var _buffer = 0;
			var _buflen = 0;
			var _length = 0;
			var _base64 = '';
			var _this = {};
			var writeEncoded = function(b) {
				_base64 += String.fromCharCode(encode(b & 0x3f) );
			};
			var encode = function(n) {
				if (n < 0) {
					// error.
				} else if (n < 26) {
					return 0x41 + n;
				} else if (n < 52) {
					return 0x61 + (n - 26);
				} else if (n < 62) {
					return 0x30 + (n - 52);
				} else if (n == 62) {
					return 0x2b;
				} else if (n == 63) {
					return 0x2f;
				}
				throw new Error('n:' + n);
			};
			_this.writeByte = function(n) {
				_buffer = (_buffer << 8) | (n & 0xff);
				_buflen += 8;
				_length += 1;
				while (_buflen >= 6) {
					writeEncoded(_buffer >>> (_buflen - 6) );
					_buflen -= 6;
				}
			};
			_this.flush = function() {
				if (_buflen > 0) {
					writeEncoded(_buffer << (6 - _buflen) );
					_buffer = 0;
					_buflen = 0;
				}
				if (_length % 3 != 0) {
					// padding
					var padlen = 3 - _length % 3;
					for (var i = 0; i < padlen; i += 1) {
						_base64 += '=';
					}
				}
			};
			_this.toString = function() {
				return _base64;
			};
			return _this;
		};
		//---------------------------------------------------------------------
		// base64DecodeInputStream
		//---------------------------------------------------------------------
		var base64DecodeInputStream = function(str) {
			var _str = str;
			var _pos = 0;
			var _buffer = 0;
			var _buflen = 0;
			var _this = {};
			_this.read = function() {
				while (_buflen < 8) {
					if (_pos >= _str.length) {
						if (_buflen == 0) {
							return -1;
						}
						throw new Error('unexpected end of file./' + _buflen);
					}
					var c = _str.charAt(_pos);
					_pos += 1;
					if (c == '=') {
						_buflen = 0;
						return -1;
					} else if (c.match(/^\s$/) ) {
						// ignore if whitespace.
						continue;
					}
					_buffer = (_buffer << 6) | decode(c.charCodeAt(0) );
					_buflen += 6;
				}
				var n = (_buffer >>> (_buflen - 8) ) & 0xff;
				_buflen -= 8;
				return n;
			};
			var decode = function(c) {
				if (0x41 <= c && c <= 0x5a) {
					return c - 0x41;
				} else if (0x61 <= c && c <= 0x7a) {
					return c - 0x61 + 26;
				} else if (0x30 <= c && c <= 0x39) {
					return c - 0x30 + 52;
				} else if (c == 0x2b) {
					return 62;
				} else if (c == 0x2f) {
					return 63;
				} else {
					throw new Error('c:' + c);
				}
			};
			return _this;
		};
		//---------------------------------------------------------------------
		// gifImage (B/W)
		//---------------------------------------------------------------------
		var gifImage = function(width, height) {
			var _width = width;
			var _height = height;
			var _data = new Array(width * height);
			var _this = {};
			_this.setPixel = function(x, y, pixel) {
				_data[y * _width + x] = pixel;
			};
			_this.write = function(out) {
				//---------------------------------
				// GIF Signature
				out.writeString('GIF87a');
				//---------------------------------
				// Screen Descriptor
				out.writeShort(_width);
				out.writeShort(_height);
				out.writeByte(0x80); // 2bit
				out.writeByte(0);
				out.writeByte(0);
				//---------------------------------
				// Global Color Map
				// black
				out.writeByte(0x00);
				out.writeByte(0x00);
				out.writeByte(0x00);
				// white
				out.writeByte(0xff);
				out.writeByte(0xff);
				out.writeByte(0xff);
				//---------------------------------
				// Image Descriptor
				out.writeString(',');
				out.writeShort(0);
				out.writeShort(0);
				out.writeShort(_width);
				out.writeShort(_height);
				out.writeByte(0);
				//---------------------------------
				// Local Color Map
				//---------------------------------
				// Raster Data
				var lzwMinCodeSize = 2;
				var raster = getLZWRaster(lzwMinCodeSize);
				out.writeByte(lzwMinCodeSize);
				var offset = 0;
				while (raster.length - offset > 255) {
					out.writeByte(255);
					out.writeBytes(raster, offset, 255);
					offset += 255;
				}
				out.writeByte(raster.length - offset);
				out.writeBytes(raster, offset, raster.length - offset);
				out.writeByte(0x00);
				//---------------------------------
				// GIF Terminator
				out.writeString(';');
			};
			var bitOutputStream = function(out) {
				var _out = out;
				var _bitLength = 0;
				var _bitBuffer = 0;
				var _this = {};
				_this.write = function(data, length) {
					if ( (data >>> length) != 0) {
						throw new Error('length over');
					}
					while (_bitLength + length >= 8) {
						_out.writeByte(0xff & ( (data << _bitLength) | _bitBuffer) );
						length -= (8 - _bitLength);
						data >>>= (8 - _bitLength);
						_bitBuffer = 0;
						_bitLength = 0;
					}
					_bitBuffer = (data << _bitLength) | _bitBuffer;
					_bitLength = _bitLength + length;
				};
				_this.flush = function() {
					if (_bitLength > 0) {
						_out.writeByte(_bitBuffer);
					}
				};
				return _this;
			};
			var getLZWRaster = function(lzwMinCodeSize) {
				var clearCode = 1 << lzwMinCodeSize;
				var endCode = (1 << lzwMinCodeSize) + 1;
				var bitLength = lzwMinCodeSize + 1;
				// Setup LZWTable
				var table = lzwTable();
				for (var i = 0; i < clearCode; i += 1) {
					table.add(String.fromCharCode(i) );
				}
				table.add(String.fromCharCode(clearCode) );
				table.add(String.fromCharCode(endCode) );
				var byteOut = byteArrayOutputStream();
				var bitOut = bitOutputStream(byteOut);
				// clear code
				bitOut.write(clearCode, bitLength);
				var dataIndex = 0;
				var s = String.fromCharCode(_data[dataIndex]);
				dataIndex += 1;
				while (dataIndex < _data.length) {
					var c = String.fromCharCode(_data[dataIndex]);
					dataIndex += 1;
					if (table.contains(s + c) ) {
						s = s + c;
					} else {
						bitOut.write(table.indexOf(s), bitLength);
						if (table.size() < 0xfff) {
							if (table.size() == (1 << bitLength) ) {
								bitLength += 1;
							}
							table.add(s + c);
						}
						s = c;
					}
				}
				bitOut.write(table.indexOf(s), bitLength);
				// end code
				bitOut.write(endCode, bitLength);
				bitOut.flush();
				return byteOut.toByteArray();
			};
			var lzwTable = function() {
				var _map = {};
				var _size = 0;
				var _this = {};
				_this.add = function(key) {
					if (_this.contains(key) ) {
						throw new Error('dup key:' + key);
					}
					_map[key] = _size;
					_size += 1;
				};
				_this.size = function() {
					return _size;
				};
				_this.indexOf = function(key) {
					return _map[key];
				};
				_this.contains = function(key) {
					return typeof _map[key] != 'undefined';
				};
				return _this;
			};
			return _this;
		};
		var createImgTag = function(width, height, getPixel, alt) {
			var gif = gifImage(width, height);
			for (var y = 0; y < height; y += 1) {
				for (var x = 0; x < width; x += 1) {
					gif.setPixel(x, y, getPixel(x, y) );
				}
			}
			var b = byteArrayOutputStream();
			gif.write(b);
			var base64 = base64EncodeOutputStream();
			var bytes = b.toByteArray();
			for (var i = 0; i < bytes.length; i += 1) {
				base64.writeByte(bytes[i]);
			}
			base64.flush();
			var img = '';
			img += '<img';
			img += '\u0020src="';
			img += 'data:image/gif;base64,';
			img += base64;
			img += '"';
			img += '\u0020width="';
			img += width;
			img += '"';
			img += '\u0020height="';
			img += height;
			img += '"';
			if (alt) {
				img += '\u0020alt="';
				img += alt;
				img += '"';
			}
			img += '/>';
			return img;
		};
		//---------------------------------------------------------------------
		// returns qrcode function.
		return qrcode;
	}();

}(jQuery));

/*! jQuery.fracs 0.11 - //larsjung.de/fracs - MIT License */

(function (window, document, $) {
'use strict';
/*jslint browser: true, confusion: true, nomen: true, regexp: true, vars: true, white: true */
/*global jQuery */

		// Some often used references.
	var $window = $(window),
		$document = $(document),
		extend = $.extend,
		isFn = $.isFunction,
		slice = [].slice,
		mathMax = Math.max,
		mathMin = Math.min,
		mathRound = Math.round,
		isTypeOf = function (obj, type) {

			return typeof obj === type;
		},
		isInstanceOf = function (obj, type) {

			return obj instanceof type;
		},
		isHTMLElement = function (obj) {

			return obj && obj.nodeType;
		},
		getHTMLElement = function (obj) {

			return isHTMLElement(obj) ? obj : (isInstanceOf(obj, $) ? obj[0] : undefined);
		},
		reduce = function (elements, fn, current) {

			$.each(elements, function (idx, element) {

				current = fn.call(element, current, idx, element);
			});
			return current;
		},
		getId = (function () {

			var ids = {},
				nextId = 1;

			return function (element) {

				if (!element) {
					return 0;
				}
				if (!ids[element]) {
					ids[element] = nextId;
					nextId += 1;
				}
				return ids[element];
			};
		}()),
		equal = function (obj1, obj2, props) {

			var i, l, prop;

			if (obj1 === obj2) {
				return true;
			}
			if (!obj1 || !obj2 || obj1.constructor !== obj2.constructor) {
				return false;
			}
			for (i = 0, l = props.length; i < l; i += 1) {
				prop = props[i];
				if (obj1[prop] && isFn(obj1[prop].equals) && !obj1[prop].equals(obj2[prop])) {
					return false;
				}
				if (obj1[prop] !== obj2[prop]) {
					return false;
				}
			}
			return true;
		};





	// Objects
	// =======

	// Rect
	// ----
	// Holds the position and dimensions of a rectangle. The position might be
	// relative to document, viewport or element space.
	var Rect = function (left, top, width, height) {

		// Top left corner of the rectangle rounded to integers.
		this.left = mathRound(left);
		this.top = mathRound(top);

		// Dimensions rounded to integers.
		this.width = mathRound(width);
		this.height = mathRound(height);

		// Bottom right corner of the rectangle.
		this.right = this.left + this.width;
		this.bottom = this.top + this.height;
	};

	// ### Prototype
	extend(Rect.prototype, {

		// Checks if this instance equals `that` in position and dimensions.
		equals: function (that) {

			return equal(this, that, ['left', 'top', 'width', 'height']);
		},

		// Returns the area of this rectangle.
		area: function () {

			return this.width * this.height;
		},

		// Returns a new `Rect` representig this rect relative to `rect`.
		relativeTo: function (rect) {

			return new Rect(this.left - rect.left, this.top - rect.top, this.width, this.height);
		},

		// Returns a new rectangle representing the intersection of this
		// instance and `rect`. If there is no intersection the return value
		// is `null`.
		intersection: function (rect) {

			if (!isInstanceOf(rect, Rect)) {
				return null;
			}

			var left = mathMax(this.left, rect.left),
				right = mathMin(this.right, rect.right),
				top = mathMax(this.top, rect.top),
				bottom = mathMin(this.bottom, rect.bottom),
				width = right - left,
				height = bottom - top;

			return (width >= 0 && height >= 0) ? new Rect(left, top, width, height) : null;
		},

		// Returns a new rectangle representing the smallest rectangle
		// containing this instance and `rect`.
		envelope: function (rect) {

			if (!isInstanceOf(rect, Rect)) {
				return this;
			}

			var left = mathMin(this.left, rect.left),
				right = mathMax(this.right, rect.right),
				top = mathMin(this.top, rect.top),
				bottom = mathMax(this.bottom, rect.bottom),
				width = right - left,
				height = bottom - top;

			return new Rect(left, top, width, height);
		}
	});

	// ### Static methods
	extend(Rect, {

		// Returns a new instance of `Rect` representing the content of the
		// specified element. Since the coordinates are in content space the
		// `left` and `top` values are always set to `0`. If `inDocSpace` is
		// `true` the rect gets returned in document space.
		ofContent: function (element, inContentSpace) {

			if (!element || element === document || element === window) {
				return new Rect(0, 0, $document.width(), $document.height());
			}

			if (inContentSpace) {
				return new Rect(0, 0, element.scrollWidth, element.scrollHeight);
			} else {
				return new Rect(element.offsetLeft - element.scrollLeft, element.offsetTop - element.scrollTop, element.scrollWidth, element.scrollHeight);
			}
		},

		// Returns a new instance of `Rect` representing the viewport of the
		// specified element. If `inDocSpace` is `true` the rect gets returned
		// in document space instead of content space.
		ofViewport: function (element, inContentSpace) {

			if (!element || element === document || element === window) {
				return new Rect($window.scrollLeft(), $window.scrollTop(), $window.width(), $window.height());
			}

			if (inContentSpace) {
				return new Rect(element.scrollLeft, element.scrollTop, element.clientWidth, element.clientHeight);
			} else {
				return new Rect(element.offsetLeft, element.offsetTop, element.clientWidth, element.clientHeight);
			}
		},

		// Returns a new instance of `Rect` representing a given
		// `HTMLElement`. The dimensions respect padding and border widths. If
		// the element is invisible (as determined by jQuery) the return value
		// is null.
		ofElement: function (element) {

			var $element = $(element);
			if (!$element.is(':visible')) {
				return null;
			}

			var offset = $element.offset();
			return new Rect(offset.left, offset.top, $element.outerWidth(), $element.outerHeight());
		}
	});



	// Fractions
	// ---------
	// The heart of the library. Creates and holds the
	// fractions data for the two specified rects. `viewport` defaults to
	// `Rect.ofViewport()`.
	var Fractions = function (visible, viewport, possible, rects) {

		this.visible = visible || 0;
		this.viewport = viewport || 0;
		this.possible = possible || 0;
		this.rects = (rects && extend({}, rects)) || null;
	};

	// ### Prototype
	extend(Fractions.prototype, {

		// Checks if this instance equals `that` in all attributes.
		equals: function (that) {

			return this.fracsEqual(that) && this.rectsEqual(that);
		},

		// Checks if this instance equals `that` in all fraction attributes.
		fracsEqual: function (that) {

			return equal(this, that, ['visible', 'viewport', 'possible']);
		},

		// Checks if this instance equals `that` in all rectangle attributes.
		rectsEqual: function (that) {

			return equal(this.rects, that.rects, ['document', 'element', 'viewport']);
		}
	});

	// ### Static methods
	extend(Fractions, {

		of: function (rect, viewport) {

			var intersection, intersectionArea, possibleArea;

			rect = (isHTMLElement(rect) && Rect.ofElement(rect)) || rect;
			viewport = (isHTMLElement(viewport) && Rect.ofViewport(viewport)) || viewport || Rect.ofViewport();

			intersection = rect.intersection(viewport);
			if (!intersection) {
				return new Fractions();
			}

			intersectionArea = intersection.area();
			possibleArea = mathMin(rect.width, viewport.width) * mathMin(rect.height, viewport.height);
			return new Fractions(
				intersectionArea / rect.area(),
				intersectionArea / viewport.area(),
				intersectionArea / possibleArea,
				{
					document: intersection,
					element: intersection.relativeTo(rect),
					viewport: intersection.relativeTo(viewport)
				}
			);
		}
	});



	// Group
	// -----
	var Group = function (elements, viewport) {

		this.els = elements;
		this.viewport = viewport;
	};

	// ### Helpers

		// Accepted values for `property` parameters below.
	var rectProps = ['width', 'height', 'left', 'right', 'top', 'bottom'],
		fracsProps = ['possible', 'visible', 'viewport'],

		// Returns the specified `property` for `HTMLElement element` or `0`
		// if `property` is invalid.
		getValue = function (element, viewport, property) {

			var obj;

			if ($.inArray(property, rectProps) >= 0) {
				obj = Rect.ofElement(element);
			} else if ($.inArray(property, fracsProps) >= 0) {
				obj = Fractions.of(element, viewport);
			}
			return obj ? obj[property] : 0;
		},

		// Sorting functions.
		sortAscending = function (entry1, entry2) {

			return entry1.val - entry2.val;
		},
		sortDescending = function (entry1, entry2) {

			return entry2.val - entry1.val;
		};

	// ### Prototype
	extend(Group.prototype, {

		// Returns a sorted list of objects `{el: HTMLElement, val: Number}`
		// for the specified `property`. `descending` defaults to `false`.
		sorted: function (property, descending) {

			var viewport = this.viewport;

			return $.map(this.els, function (element) {

						return {
							el: element,
							val: getValue(element, viewport, property)
						};
					})
					.sort(descending ? sortDescending : sortAscending);
		},

		// Returns the first element of the sorted list returned by `sorted` above,
		// or `null` if this list is empty.
		best: function (property, descending) {

			return this.els.length ? this.sorted(property, descending)[0] : null;
		}
	});



	// ScrollState
	// -----------
	var ScrollState = function (element) {

		var content = Rect.ofContent(element, true),
			viewport = Rect.ofViewport(element, true),
			w = content.width - viewport.width,
			h = content.height - viewport.height;

		this.content = content;
		this.viewport = viewport;
		this.width = w <= 0 ? null : viewport.left / w;
		this.height = h <= 0 ? null : viewport.top / h;
		this.left = viewport.left;
		this.top = viewport.top;
		this.right = content.right - viewport.right;
		this.bottom = content.bottom - viewport.bottom;
	};

	// ### Prototype
	extend(ScrollState.prototype, {

		// Checks if this instance equals `that`.
		equals: function (that) {

			return equal(this, that, ['width', 'height', 'left', 'top', 'right', 'bottom', 'content', 'viewport']);
		}
	});



	// Viewport
	// --------
	var Viewport = function (element) {

		this.el = element || window;
	};

	// ### Prototype
	extend(Viewport.prototype, {

		// Checks if this instance equals `that`.
		equals: function (that) {

			return equal(this, that, ['el']);
		},

		scrollState: function () {

			return new ScrollState(this.el);
		},

		scrollTo: function (left, top, duration) {

			var $el = this.el === window ? $('html,body') : $(this.el);

			left = left || 0;
			top = top || 0;
			duration = isNaN(duration) ? 1000 : duration;

			$el.stop(true).animate({scrollLeft: left, scrollTop: top}, duration);
		},

		scroll: function (left, top, duration) {

			var $el = this.el === window ? $window : $(this.el);

			left = left || 0;
			top = top || 0;

			this.scrollTo($el.scrollLeft() + left, $el.scrollTop() + top, duration);
		},

		scrollToRect: function (rect, paddingLeft, paddingTop, duration) {

			paddingLeft = paddingLeft || 0;
			paddingTop = paddingTop || 0;

			this.scrollTo(rect.left - paddingLeft, rect.top - paddingTop, duration);
		},

		scrollToElement: function (element, paddingLeft, paddingTop, duration) {

			var rect = Rect.ofElement(element).relativeTo(Rect.ofContent(this.el));

			this.scrollToRect(rect, paddingLeft, paddingTop, duration);
		}
	});





	// Callbacks
	// =========

	// callbacks mix-in
	// ----------------
	// Expects `context: HTMLElement` and `updatedValue: function`.
	var callbacksMixIn = {

		// Initial setup.
		init: function () {

			this.callbacks = $.Callbacks('memory unique');
			this.currVal = null;
			this.prevVal = null;

			// A proxy to make `check` bindable to events.
			this.checkProxy = $.proxy(this.check, this);

			this.autoCheck();
		},

		// Adds a new callback function.
		bind: function (callback) {

			this.callbacks.add(callback);
		},

		// Removes a previously added callback function.
		unbind: function (callback) {

			if (callback) {
				this.callbacks.remove(callback);
			} else {
				this.callbacks.empty();
			}
		},

		// Triggers all callbacks with the current values.
		trigger: function () {

			this.callbacks.fireWith(this.context, [this.currVal, this.prevVal]);
		},

		// Checks if value changed, updates attributes `currVal` and
		// `prevVal` accordingly and triggers the callbacks. Returns
		// `true` if value changed, otherwise `false`.
		check: function (event) {

			var value = this.updatedValue(event);

			if (value === undefined) {
				return false;
			}

			this.prevVal = this.currVal;
			this.currVal = value;
			this.trigger();
			return true;
		},

		// Auto-check configuration.
		$autoTarget: $window,
		autoEvents: 'load resize scroll',

		// Enables/disables automated checking for changes on the specified `window`
		// events.
		autoCheck: function (on) {

			this.$autoTarget[on === false ? 'off' : 'on'](this.autoEvents, this.checkProxy);
		}
	};



	// FracsCallbacks
	// --------------
	var FracsCallbacks = function (element, viewport) {

		this.context = element;
		this.viewport = viewport;
		this.init();
	};

	// ### Prototype
	extend(FracsCallbacks.prototype, callbacksMixIn, {
		updatedValue: function () {

			var value = Fractions.of(this.context, this.viewport);

			if (!this.currVal || !this.currVal.equals(value)) {
				return value;
			}
		}
	});



	// GroupCallbacks
	// --------------
	var GroupCallbacks = function (elements, viewport, property, descending) {

		this.context = new Group(elements, viewport);
		this.property = property;
		this.descending = descending;
		this.init();
	};

	// ### Prototype
	extend(GroupCallbacks.prototype, callbacksMixIn, {
		updatedValue: function () {

			var best = this.context.best(this.property, this.descending);

			if (best) {
				best = best.val > 0 ? best.el : null;
				if (this.currVal !== best) {
					return best;
				}
			}
		}
	});



	// ScrollStateCallbacks
	// --------------------
	var ScrollStateCallbacks = function (element) {

		if (!element || element === window || element === document) {
			this.context = window;
		} else {
			this.context = element;
			this.$autoTarget = $(element);
		}
		this.init();
	};

	// ### Prototype
	extend(ScrollStateCallbacks.prototype, callbacksMixIn, {
		updatedValue: function () {

			var value = new ScrollState(this.context);

			if (!this.currVal || !this.currVal.equals(value)) {
				return value;
			}
		}
	});





	// modplug 0.7
	// ===========

	// Use <http://larsjung.de/modplug> to attach the plug-in to jQuery.
	var modplug = function (namespace, options) {

			// Save the initial settings.
		var settings = extend({}, options),

			// Helper function to apply default methods.
			applyMethod = function (obj, args, methodName, methods) {

				// If `methodName` is a function apply it to get the actual
				// method name.
				methodName = isFn(methodName) ? methodName.apply(obj, args) : methodName;

				// If method exists then apply it and return the result ...
				if (isFn(methods[methodName])) {
					return methods[methodName].apply(obj, args);
				}

				// ... otherwise raise an error.
				$.error('Method "' + methodName + '" does not exist on jQuery.' + namespace);
			},

			// This function gets exposed as `$.<namespace>`.
			statics = function () {

				// Try to apply a default method.
				return applyMethod(this, slice.call(arguments), settings.defaultStatic, statics);
			},

			// This function gets exposed as `$(selector).<namespace>`.
			methods = function (method) {

				// If `method` exists then apply it ...
				if (isFn(methods[method])) {
					return methods[method].apply(this, slice.call(arguments, 1));
				}

				// ... otherwise try to apply a default method.
				return applyMethod(this, slice.call(arguments), settings.defaultMethod, methods);
			},

			// Adds/overwrites plug-in methods. This function gets exposed as
			// `$.<namespace>.modplug` to make the plug-in extendable.
			plug = function (options) {

				if (options) {
					extend(statics, options.statics);
					extend(methods, options.methods);
				}

				// Make sure that `$.<namespace>.modplug` points to this
				// function after adding new methods.
				statics.modplug = plug;
			};

		// Save objects or methods previously registered to the desired
		// namespace. They are available via `$.<namespace>.modplug.prev`.
		plug.prev = {
			statics: $[namespace],
			methods: $.fn[namespace]
		};

		// Init the plug-in by adding the specified statics and methods.
		plug(options);

		// Register the plug-in.
		$[namespace] = statics;
		$.fn[namespace] = methods;
	};





	// Register the plug-in
	// ===================

		// The namespace used to register the plug-in and to attach data to
		// elements.
	var namespace = 'fracs';

	// The methods are sorted in alphabetical order. All methods that do not
	// provide a return value will return `this` to enable method chaining.
	modplug(namespace, {

		// Static methods
		// --------------
		// These methods are accessible via `$.fracs.<methodname>`.
		statics: {

			// Build version.
			version: '0.11',

			// Publish object constructors (for testing).
			Rect: Rect,
			Fractions: Fractions,
			Group: Group,
			ScrollState: ScrollState,
			Viewport: Viewport,
			FracsCallbacks: FracsCallbacks,
			GroupCallbacks: GroupCallbacks,
			ScrollStateCallbacks: ScrollStateCallbacks,

			// ### fracs
			// This is the **default method**. So instead of calling
			// `$.fracs.fracs(...)` simply call `$.fracs(...)`.
			//
			// Returns the fractions for a given `Rect` and `viewport`,
			// viewport defaults to `$.fracs.viewport()`.
			//
			//      $.fracs(rect: Rect, [viewport: Rect]): Fractions
			fracs: function (rect, viewport) {

				return Fractions.of(rect, viewport);
			}
		},

		// Instance methods
		// ----------------
		// These methods are accessible via `$(selector).fracs('<methodname>', ...)`.
		methods: {

			// ### 'content'
			// Returns the content rect of the first selected element in content space.
			// If no element is selected it returns the document rect.
			//
			//      .fracs('content'): Rect
			content: function (inContentSpace) {

				return this.length ? Rect.ofContent(this[0], inContentSpace) : null;
			},

			// ### 'envelope'
			// Returns the smallest rectangle that containes all selected elements.
			//
			//      .fracs('envelope'): Rect
			envelope: function () {

				return reduce(this, function (current) {

					var rect = Rect.ofElement(this);
					return current ? current.envelope(rect) : rect;
				});
			},

			// ### 'fracs'
			// This is the **default method**. So the first parameter `'fracs'`
			// can be omitted.
			//
			// Returns the fractions for the first selected element.
			//
			//      .fracs(): Fractions
			//
			// Binds a callback function that will be invoked if fractions have changed
			// after a `window resize` or `window scroll` event.
			//
			//      .fracs(callback(fracs: Fractions, prevFracs: Fractions)): jQuery
			//
			// Unbinds the specified callback function.
			//
			//      .fracs('unbind', callback): jQuery
			//
			// Unbinds all callback functions.
			//
			//      .fracs('unbind'): jQuery
			//
			// Checks if fractions changed and if so invokes all bound callback functions.
			//
			//      .fracs('check'): jQuery
			fracs: function (action, callback, viewport) {

				if (!isTypeOf(action, 'string')) {
					viewport = callback;
					callback = action;
					action = null;
				}
				if (!isFn(callback)) {
					viewport = callback;
					callback = null;
				}
				viewport = getHTMLElement(viewport);

				var ns = namespace + '.fracs.' + getId(viewport);

				if (action === 'unbind') {
					return this.each(function () {

						var cbs = $(this).data(ns);

						if (cbs) {
							cbs.unbind(callback);
						}
					});
				} else if (action === 'check') {
					return this.each(function () {

						var cbs = $(this).data(ns);

						if (cbs) {
							cbs.check();
						}
					});
				} else if (isFn(callback)) {
					return this.each(function () {

						var $this = $(this),
							cbs = $this.data(ns);

						if (!cbs) {
							cbs = new FracsCallbacks(this, viewport);
							$this.data(ns, cbs);
						}
						cbs.bind(callback);
					});
				}

				return this.length ? Fractions.of(this[0], viewport) : null;
			},

			// ### 'intersection'
			// Returns the greatest rectangle that is contained in all selected elements.
			//
			//      .fracs('intersection'): Rect
			intersection: function () {

				return reduce(this, function (current) {

					var rect = Rect.ofElement(this);
					return current ? current.intersection(rect) : rect;
				});
			},

			// ### 'max'
			// Reduces the set of selected elements to those with the maximum value
			// of the specified property.
			// Valid values for property are `possible`, `visible`, `viewport`,
			// `width`, `height`, `left`, `right`, `top`, `bottom`.
			//
			//      .fracs('max', property: String): jQuery
			//
			// Binds a callback function to the set of selected elements that gets
			// triggert whenever the element with the highest value of the specified
			// property changes.
			//
			//      .fracs('max', property: String, callback(best: Element, prevBest: Element)): jQuery
			max: function (property, callback, viewport) {

				if (!isFn(callback)) {
					viewport = callback;
					callback = null;
				}
				viewport = getHTMLElement(viewport);

				if (callback) {
					new GroupCallbacks(this, viewport, property, true).bind(callback);
					return this;
				}

				return this.pushStack(new Group(this, viewport).best(property, true).el);
			},

			// ### 'min'
			// Reduces the set of selected elements to those with the minimum value
			// of the specified property.
			// Valid values for property are `possible`, `visible`, `viewport`,
			// `width`, `height`, `left`, `right`, `top`, `bottom`.
			//
			//      .fracs('min', property: String): jQuery
			//
			// Binds a callback function to the set of selected elements that gets
			// triggert whenever the element with the lowest value of the specified
			// property changes.
			//
			//      .fracs('min', property: String, callback(best: Element, prevBest: Element)): jQuery
			min: function (property, callback, viewport) {

				if (!isFn(callback)) {
					viewport = callback;
					callback = null;
				}
				viewport = getHTMLElement(viewport);

				if (callback) {
					new GroupCallbacks(this, viewport, property).bind(callback);
					return this;
				}

				return this.pushStack(new Group(this, viewport).best(property).el);
			},

			// ### 'rect'
			// Returns the dimensions for the first selected element in document space.
			//
			//      .fracs('rect'): Rect
			rect: function () {

				return this.length ? Rect.ofElement(this[0]) : null;
			},

			// ### 'scrollState'
			// Returns the current scroll state for the first selected element.
			//
			//      .fracs('scrollState'): ScrollState
			//
			// Binds a callback function that will be invoked if scroll state has changed
			// after a `resize` or `scroll` event.
			//
			//      .fracs('scrollState', callback(scrollState: scrollState, prevScrollState: scrollState)): jQuery
			//
			// Unbinds the specified callback function.
			//
			//      .fracs('scrollState', 'unbind', callback): jQuery
			//
			// Unbinds all callback functions.
			//
			//      .fracs('scrollState', 'unbind'): jQuery
			//
			// Checks if scroll state changed and if so invokes all bound callback functions.
			//
			//      .fracs('scrollState', 'check'): jQuery
			scrollState: function (action, callback) {

				var ns = namespace + '.scrollState';

				if (!isTypeOf(action, 'string')) {
					callback = action;
					action = null;
				}

				if (action === 'unbind') {
					return this.each(function () {

						var cbs = $(this).data(ns);

						if (cbs) {
							cbs.unbind(callback);
						}
					});
				} else if (action === 'check') {
					return this.each(function () {

						var cbs = $(this).data(ns);

						if (cbs) {
							cbs.check();
						}
					});
				} else if (isFn(callback)) {
					return this.each(function () {

						var $this = $(this),
							cbs = $this.data(ns);

						if (!cbs) {
							cbs = new ScrollStateCallbacks(this);
							$this.data(ns, cbs);
						}
						cbs.bind(callback);
					});
				}

				return this.length ? new ScrollState(this[0]) : null;
			},

			// ### 'scroll'
			// Scrolls the selected elements relative to its current position,
			// `padding` defaults to `0`, `duration` to `1000`.
			//
			//      .fracs('scroll', element: HTMLElement/jQuery, [paddingLeft: int,] [paddingTop: int,] [duration: int]): jQuery
			scroll: function (left, top, duration) {

				return this.each(function () {

					new Viewport(this).scroll(left, top, duration);
				});
			},

			// ### 'scrollTo'
			// Scrolls the selected elements to the specified element or an absolute position,
			// `padding` defaults to `0`, `duration` to `1000`.
			//
			//      .fracs('scrollTo', element: HTMLElement/jQuery, [paddingLeft: int,] [paddingTop: int,] [duration: int]): jQuery
			//      .fracs('scrollTo', [left: int,] [top: int,] [duration: int]): jQuery
			scrollTo: function (element, paddingLeft, paddingTop, duration) {

				if ($.isNumeric(element)) {
					duration = paddingTop;
					paddingTop = paddingLeft;
					paddingLeft = element;
					element = null;
				}

				element = getHTMLElement(element);

				return this.each(function () {

					if (element) {
						new Viewport(this).scrollToElement(element, paddingLeft, paddingTop, duration);
					} else {
						new Viewport(this).scrollTo(paddingLeft, paddingTop, duration);
					}
				});
			},

			// ### 'scrollToThis'
			// Scrolls the viewport (window) to the first selected element in the specified time,
			// `padding` defaults to `0`, `duration` to `1000`.
			//
			//      .fracs('scrollToThis', [paddingLeft: int,] [paddingTop: int,] [duration: int,] [viewport: HTMLElement/jQuery]): jQuery
			scrollToThis: function (paddingLeft, paddingTop, duration, viewport) {

				viewport = new Viewport(getHTMLElement(viewport));

				viewport.scrollToElement(this[0], paddingLeft, paddingTop, duration);
				return this;
			},

			// ### 'softLink'
			// Converts all selected page intern links `<a href="#...">` into soft links.
			// Uses `scrollTo` to scroll to the location.
			//
			//      .fracs('softLink', [paddingLeft: int,] [paddingTop: int,] [duration: int,] [viewport: HTMLElement/jQuery]): jQuery
			softLink: function (paddingLeft, paddingTop, duration, viewport) {

				viewport = new Viewport(getHTMLElement(viewport));

				return this.filter('a[href^=#]').each(function () {
					var $a = $(this);
					$a.on('click', function () {
						viewport.scrollToElement($($a.attr('href'))[0], paddingLeft, paddingTop, duration);
					});
				});
			},

			// ### 'sort'
			// Sorts the set of selected elements by the specified property.
			// Valid values for property are `possible`, `visible`, `viewport`,
			// `width`, `height`, `left`, `right`, `top`, `bottom`. The default
			// sort order is descending.
			//
			//      .fracs('sort', property: String, [ascending: boolean]): jQuery
			sort: function (property, ascending, viewport) {

				if (!isTypeOf(ascending, 'boolean')) {
					viewport = ascending;
					ascending = null;
				}
				viewport = getHTMLElement(viewport);

				return this.pushStack($.map(new Group(this, viewport).sorted(property, !ascending), function (entry) {
					return entry.el;
				}));
			},

			// ### 'viewport'
			// Returns the current viewport of the first selected element in content space.
			// If no element is selected it returns the document's viewport.
			//
			//      .fracs('viewport'): Rect
			viewport: function (inContentSpace) {

				return this.length ? Rect.ofViewport(this[0], inContentSpace) : null;
			}
		},

		// Defaults
		// --------
		defaultStatic: 'fracs',
		defaultMethod: 'fracs'
	});

}(window, document, jQuery));

/*! jQuery.outline 0.11 - //larsjung.de/fracs - MIT License */

(function (window, $) {
'use strict';
/*jslint browser: true, confusion: true, vars: true, white: true */
/*global jQuery */

		// Some often used references.
	var $window = $(window),
		extend = $.extend,

		fracs = $.fracs,
		Rect = fracs.Rect,
		Viewport = fracs.Viewport;




	// Outline
	// -------

	var defaults = {
			crop: false,
			duration: 0,
			focusWidth: 0.5,
			focusHeight: 0.5,
			autoFocus: true,
			styles: [{
				selector: 'header,footer,section,article',
				fillStyle: 'rgb(230,230,230)'
			}, {
				selector: 'h1,h2,h3,h4',
				fillStyle: 'rgb(255,144,55)'
			}],
			viewportStyle: {
				fillStyle: 'rgba(255,144,55,0.3)'
			},
			viewportDragStyle: {
				fillStyle: 'rgba(255,144,55,0.5)'
			},
			invertViewport: false
		};

	// Quick and dirty.
	var Outline = function (canvas, options, viewport) {

		if (!canvas || !$.isFunction(canvas.getContext)) {
			return null;
		}

		var context = canvas.getContext('2d');
		if (!context) {
			return null;
		}

		viewport = viewport || window;

		var settings = extend({}, defaults, options),

			$canvas = $(canvas),
			width = $canvas.attr('width'),
			height = $canvas.attr('height'),

			$viewport = $(viewport),
			viewportObj = new Viewport(viewport),
			find = viewport === window ? function (selector) {
				return $(selector);
			} : function (selector) {
				return $viewport.find(selector);
			},

			drag = false,

			currentContentRect,
			currentViewportRect,
			currentScale,
			focusWidth,
			focusHeight,

			drawRect = function (rect, strokeWidth, strokeStyle, fillStyle, invert) {

				if (!rect || !(strokeStyle || fillStyle)) {
					return;
				}

				if (fillStyle) {
					context.beginPath();
					if (invert) {
						context.rect(0, 0, currentContentRect.width, rect.top);
						context.rect(0, rect.top, rect.left, rect.height);
						context.rect(rect.right, rect.top, currentContentRect.width - rect.right, rect.height);
						context.rect(0, rect.bottom, currentContentRect.width, currentContentRect.height - rect.bottom);
					} else {
						context.rect(rect.left, rect.top, rect.width, rect.height);
					}
					context.fillStyle = fillStyle;
					context.fill();
				}
				if (strokeStyle) {
					context.beginPath();
					context.rect(rect.left, rect.top, rect.width, rect.height);
					context.lineWidth = currentScale ? Math.max(strokeWidth, 0.2 / currentScale) : strokeWidth;
					context.strokeStyle = strokeStyle;
					context.stroke();
				}
			},
			drawElement = function (element, strokeWidth, strokeStyle, fillStyle) {

				var $element = $(element),
					rect = Rect.ofElement(element);

				if (!rect || rect.width <= 0 || rect.height <= 0 || $element.css('visibility') === 'hidden') {
					return;
				}

				rect = rect.relativeTo(currentContentRect);
				strokeWidth = strokeWidth === 'auto' ? parseInt($element.css('border-top-width'), 10) : strokeWidth;
				strokeStyle = strokeStyle === 'auto' ? $element.css('border-top-color') : strokeStyle;
				fillStyle = fillStyle === 'auto' ? $element.css('background-color') : fillStyle;
				drawRect(rect, strokeWidth, strokeStyle, fillStyle);
			},
			applyStyles = function () {

				$.each(settings.styles, function (idx, style) {
					find(style.selector).each(function () {
						drawElement(this, style.strokeWidth, style.strokeStyle, style.fillStyle);
					});
				});
			},
			drawViewport = function () {

				var style = drag && settings.viewportDragStyle ? settings.viewportDragStyle : settings.viewportStyle;

				drawRect(currentViewportRect, style.strokeWidth, style.strokeStyle, style.fillStyle, settings.invertViewport);
			},
			draw = function () {

				currentContentRect = Rect.ofContent(viewport);
				currentViewportRect = Rect.ofViewport(viewport, true);
				currentScale = Math.min(width / currentContentRect.width, height / currentContentRect.height);

				if (settings.crop) {
					$canvas.attr('width', currentContentRect.width * currentScale).attr('height', currentContentRect.height * currentScale);
				}

				context.setTransform(1, 0, 0, 1, 0, 0);
				context.clearRect(0, 0, $canvas.width(), $canvas.height());

				context.scale(currentScale, currentScale);
				applyStyles();
				drawViewport();
			},
			onDrag = function (event) {

				var r = Rect.ofElement(canvas),
					x = (event.pageX - r.left) / currentScale - currentViewportRect.width * focusWidth,
					y = (event.pageY - r.top) / currentScale - currentViewportRect.height * focusHeight;

				viewportObj.scrollTo(x, y, settings.duration);
			},
			onDragEnd = function (event) {

				drag = false;
				event.preventDefault();

				$canvas.css('cursor', 'pointer').removeClass('dragOn');
				$('body').css('cursor', 'auto');
				$window.off('mousemove', onDrag);
				draw();
			},
			onDragStart = function (event) {

				var r;
				if (settings.autoFocus) {
					r = Rect.ofElement(canvas);
					focusWidth = (((event.pageX - r.left) / currentScale) - currentViewportRect.left) / currentViewportRect.width;
					focusHeight = (((event.pageY - r.top) / currentScale) - currentViewportRect.top) / currentViewportRect.height;
				}
				if (!settings.autoFocus || focusWidth < 0 || focusWidth > 1 || focusHeight < 0 || focusHeight > 1) {
					focusWidth = settings.focusWidth;
					focusHeight = settings.focusHeight;
				}

				drag = true;
				event.preventDefault();

				$canvas.css('cursor', 'crosshair').addClass('dragOn');
				$('body').css('cursor', 'crosshair');
				$window.on('mousemove', onDrag).one('mouseup', onDragEnd);
				onDrag(event);
			},
			init = function () {

				$canvas.css('cursor', 'pointer');//.mousedown(onDragStart);
				$viewport.on('load resize scroll', draw);
				draw();
			};

		init();

		this.redraw = draw;
	};





	// Register the plug-in
	// ===================

		// The namespace used to register the plug-in and to attach
		// data to elements.
	var namespace = 'fracs.outline';

	// The methods are sorted in alphabetical order. All methods that do
	// not provide a return value will return `this` to enable method chaining.
	fracs.modplug({

		// Static methods
		// --------------
		// These methods are accessible via `$.outline.<methodname>`.
		statics: {

			// Publish object constructors (for testing).
			Outline: Outline
		},

		// Instance methods
		// ----------------
		// These methods are accessible via `$(selector).outline('<methodname>', ...)`.
		methods: {

			// ### 'outline'
			// Generates a document outline in a selected canvas. Will be redrawn on every
			// 'window resize` and `window scroll` event.
			//
			//      .outline([options: OutlineOptions]): jQuery
			outline: function (action, options, viewport) {

				if (typeof action !== 'string') {
					viewport = options;
					options = action;
					action = null;
				}
				if (viewport instanceof $) {
					viewport = viewport[0];
				}

				if (action === 'redraw') {
					return this.each(function () {

						var outline = $(this).data(namespace);
						if (outline) {
							outline.redraw();
						}
					});
				}

				return this.each(function () {

					var outline = $(this).data(namespace);
					if (!outline) {
						outline = new Outline(this, options, viewport);
						if (outline) {
							$(this).data(namespace, outline);
						}
					}
				});
			}
		}
	});

}(window, jQuery));

/**
 * NetteForms - simple form validation.
 *
 * This file is part of the Nette Framework.
 * Copyright (c) 2004, 2013 David Grudl (http://davidgrudl.com)
 */

var Nette = Nette || {};

/**
 * Attaches a handler to an event for the element.
 */
Nette.addEvent = function(element, on, callback) {
    var original = element['on' + on];
    element['on' + on] = function() {
        if (typeof original === 'function' && original.apply(element, arguments) === false) {
            return false;
        }
        return callback.apply(element, arguments);
    };
};


/**
 * Returns the value of form element.
 */
Nette.getValue = function(elem) {
    var i, len;
    if (!elem) {
        return null;

    } else if (!elem.nodeName) { // radio
        for (i = 0, len = elem.length; i < len; i++) {
            if (elem[i].checked) {
                return elem[i].value;
            }
        }
        return null;

    } else if (elem.nodeName.toLowerCase() === 'select') {
        var index = elem.selectedIndex, options = elem.options;

        if (index < 0) {
            return null;

        } else if (elem.type === 'select-one') {
            return options[index].value;
        }

        for (i = 0, values = [], len = options.length; i < len; i++) {
            if (options[i].selected) {
                values.push(options[i].value);
            }
        }
        return values;

    } else if (elem.type === 'checkbox') {
        return elem.checked;

    } else if (elem.type === 'radio') {
        return Nette.getValue(elem.form.elements[elem.name].nodeName ? [elem] : elem.form.elements[elem.name]);

    } else {
        return elem.value.replace("\r", '').replace(/^\s+|\s+$/g, '');
    }
};


/**
 * Validates form element against given rules.
 */
Nette.validateControl = function(elem, rules, onlyCheck) {
    rules = rules || Nette.parseJSON(elem.getAttribute('data-nette-rules'));
    for (var id = 0, len = rules.length; id < len; id++) {
        var rule = rules[id], op = rule.op.match(/(~)?([^?]+)/);
        rule.neg = op[1];
        rule.op = op[2];
        rule.condition = !!rule.rules;
        var el = rule.control ? elem.form.elements[rule.control] : elem;

        var success = Nette.validateRule(el, rule.op, rule.arg);
        if (success === null) {
            continue;
        }
        if (rule.neg) {
            success = !success;
        }

        if (rule.condition && success) {
            if (!Nette.validateControl(elem, rule.rules, onlyCheck)) {
                return false;
            }
        } else if (!rule.condition && !success) {
            if (el.disabled) {
                continue;
            }
            if (!onlyCheck) {
                var arr = Nette.isArray(rule.arg) ? rule.arg : [rule.arg];
                var message = rule.msg.replace(/%(value|\d+)/g, function(foo, m) {
                    return Nette.getValue(m === 'value' ? el : elem.form.elements[arr[m].control]);
                });
                Nette.addError(el, message);
            }
            return false;
        }
    }
    return true;
};


/**
 * Validates whole form.
 */
Nette.validateForm = function(sender) {
    var form = sender.form || sender, scope = false;
    if (form['nette-submittedBy'] && form['nette-submittedBy'].getAttribute('formnovalidate') !== null) {
        var scopeArr = Nette.parseJSON(form['nette-submittedBy'].getAttribute('data-nette-validation-scope'));
        if (scopeArr.length) {
            scope = new RegExp('^(' + scopeArr.join('-|') + '-)');
        } else {
            return true;
        }
    }
    for (var i = 0; i < form.elements.length; i++) {
        var elem = form.elements[i];
        if (!(elem.nodeName.toLowerCase() in {input: 1, select: 1, textarea: 1}) ||
            (elem.type in {hidden: 1, submit: 1, image: 1, reset: 1}) ||
            (scope && !elem.name.replace(/]\[|\[|]|$/g, '-').match(scope)) ||
            elem.disabled || elem.readonly
            ) {
            continue;
        }
        if (!Nette.validateControl(elem)) {
            return false;
        }
    }
    return true;
};


/**
 * Display error message.
 */
Nette.addError = function(elem, message) {
    if (elem.focus) {
        elem.focus();
    }
    if (message) {
        alert(message);
    }
};


/**
 * Validates single rule.
 */
Nette.validateRule = function(elem, op, arg) {
    var val = Nette.getValue(elem);

    if (elem.getAttribute) {
        if (val === elem.getAttribute('data-nette-empty-value')) {
            val = '';
        }
    }

    if (op.charAt(0) === ':') {
        op = op.substr(1);
    }
    op = op.replace('::', '_');
    op = op.replace(/\\/g, '');

    var arr = Nette.isArray(arg) ? arg.slice(0) : [arg];
    for (var i = 0, len = arr.length; i < len; i++) {
        if (arr[i] && arr[i].control) {
            arr[i] = Nette.getValue(elem.form.elements[arr[i].control]);
        }
    }
    return Nette.validators[op] ? Nette.validators[op](elem, Nette.isArray(arg) ? arr : arr[0], val) : null;
};


Nette.validators = {
    filled: function(elem, arg, val) {
        return val !== '' && val !== false && val !== null;
    },

    valid: function(elem, arg, val) {
        return Nette.validateControl(elem, null, true);
    },

    equal: function(elem, arg, val) {
        if (arg === undefined) {
            return null;
        }
        arg = Nette.isArray(arg) ? arg : [arg];
        for (var i = 0, len = arg.length; i < len; i++) {
            if (val == arg[i]) {
                return true;
            }
        }
        return false;
    },

    minLength: function(elem, arg, val) {
        return val.length >= arg;
    },

    maxLength: function(elem, arg, val) {
        return val.length <= arg;
    },

    length: function(elem, arg, val) {
        arg = Nette.isArray(arg) ? arg : [arg, arg];
        return (arg[0] === null || val.length >= arg[0]) && (arg[1] === null || val.length <= arg[1]);
    },

    email: function(elem, arg, val) {
        return (/^("([ !\x23-\x5B\x5D-\x7E]*|\\[ -~])+"|[-a-z0-9!#$%&'*+\/=?^_`{|}~]+(\.[-a-z0-9!#$%&'*+\/=?^_`{|}~]+)*)@([0-9a-z\u00C0-\u02FF\u0370-\u1EFF]([-0-9a-z\u00C0-\u02FF\u0370-\u1EFF]{0,61}[0-9a-z\u00C0-\u02FF\u0370-\u1EFF])?\.)+[a-z\u00C0-\u02FF\u0370-\u1EFF][-0-9a-z\u00C0-\u02FF\u0370-\u1EFF]{0,17}[a-z\u00C0-\u02FF\u0370-\u1EFF]$/i).test(val);
    },

    url: function(elem, arg, val) {
        return (/^(https?:\/\/|(?=.*\.))([0-9a-z\u00C0-\u02FF\u0370-\u1EFF](([-0-9a-z\u00C0-\u02FF\u0370-\u1EFF]{0,61}[0-9a-z\u00C0-\u02FF\u0370-\u1EFF])?\.)*[a-z\u00C0-\u02FF\u0370-\u1EFF][-0-9a-z\u00C0-\u02FF\u0370-\u1EFF]{0,17}[a-z\u00C0-\u02FF\u0370-\u1EFF]|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|\[[0-9a-f:]{3,39}\])(:\d{1,5})?(\/\S*)?$/i).test(val);
    },

    regexp: function(elem, arg, val) {
        var parts = typeof arg === 'string' ? arg.match(/^\/(.*)\/([imu]*)$/) : false;
        if (parts) { try {
            return (new RegExp(parts[1], parts[2].replace('u', ''))).test(val);
        } catch (e) {} }
    },

    pattern: function(elem, arg, val) {
        try {
            return typeof arg === 'string' ? (new RegExp('^(' + arg + ')$')).test(val) : null;
        } catch (e) {}
    },

    integer: function(elem, arg, val) {
        return (/^-?[0-9]+$/).test(val);
    },

    'float': function(elem, arg, val) {
        return (/^-?[0-9]*[.,]?[0-9]+$/).test(val);
    },

    range: function(elem, arg, val) {
        return Nette.isArray(arg) ?
            ((arg[0] === null || parseFloat(val) >= arg[0]) && (arg[1] === null || parseFloat(val) <= arg[1])) : null;
    },

    submitted: function(elem, arg, val) {
        return elem.form['nette-submittedBy'] === elem;
    },

    fileSize: function(elem, arg, val) {
        return window.FileList && elem.files[0] ? elem.files[0].size <= arg : true;
    }
};


/**
 * Process all toggles in form.
 */
Nette.toggleForm = function(form, firsttime) {
    var i;
    Nette.toggles = {};
    for (i = 0; i < form.elements.length; i++) {
        if (form.elements[i].nodeName.toLowerCase() in {input: 1, select: 1, textarea: 1, button: 1}) {
            Nette.toggleControl(form.elements[i], null, null, firsttime);
        }
    }

    for (i in Nette.toggles) {
        Nette.toggle(i, Nette.toggles[i]);
    }
};


/**
 * Process toggles on form element.
 */
Nette.toggleControl = function(elem, rules, topSuccess, firsttime) {
    rules = rules || Nette.parseJSON(elem.getAttribute('data-nette-rules'));
    var has = false, __hasProp = Object.prototype.hasOwnProperty, handler = function() {
        Nette.toggleForm(elem.form);
    };

    for (var id = 0, len = rules.length; id < len; id++) {
        var rule = rules[id], op = rule.op.match(/(~)?([^?]+)/);
        rule.neg = op[1];
        rule.op = op[2];
        rule.condition = !!rule.rules;
        if (!rule.condition) {
            continue;
        }

        var el = rule.control ? elem.form.elements[rule.control] : elem;
        var success = topSuccess;
        if (success !== false) {
            success = Nette.validateRule(el, rule.op, rule.arg);
            if (success === null) {
                continue;
            }
            if (rule.neg) {
                success = !success;
            }
        }

        if (Nette.toggleControl(elem, rule.rules, success, firsttime) || rule.toggle) {
            has = true;
            if (firsttime) {
                if (!el.nodeName) { // radio
                    for (var i = 0; i < el.length; i++) {
                        Nette.addEvent(el[i], 'click', handler);
                    }
                } else if (el.nodeName.toLowerCase() === 'select') {
                    Nette.addEvent(el, 'change', handler);
                } else {
                    Nette.addEvent(el, 'click', handler);
                }
            }
            for (var id2 in rule.toggle || []) {
                if (__hasProp.call(rule.toggle, id2)) {
                    Nette.toggles[id2] = Nette.toggles[id2] || (success && rule.toggle[id2]);
                }
            }
        }
    }
    return has;
};


Nette.parseJSON = function(s) {
    s = s || '[]';
    if (s.substr(0, 3) === '{op') {
        return eval('[' + s + ']'); // backward compatibility
    }
    return window.JSON && window.JSON.parse ? JSON.parse(s) : eval(s);
};


/**
 * Displays or hides HTML element.
 */
Nette.toggle = function(id, visible) {
    var elem = document.getElementById(id);
    if (elem) {
        elem.style.display = visible ? '' : 'none';
    }
};


/**
 * Setup handlers.
 */
Nette.initForm = function(form) {
    form.noValidate = 'novalidate';

    Nette.addEvent(form, 'submit', function(e) {
        if (!Nette.validateForm(form)) {
            if (e && e.stopPropagation) {
                e.stopPropagation();
            } else if (window.event) {
                event.cancelBubble = true;
            }
            return false;
        }
    });

    Nette.addEvent(form, 'click', function(e) {
        e = e || event;
        var target = e.target || e.srcElement;
        form['nette-submittedBy'] = (target.type in {submit: 1, image: 1}) ? target : null;
    });

    Nette.toggleForm(form, true);
};


/**
 * Determines whether the argument is an array.
 */
Nette.isArray = function(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
};


Nette.addEvent(window, 'load', function() {
    for (var i = 0; i < document.forms.length; i++) {
        Nette.initForm(document.forms[i]);
    }
});


/**
 * Converts string to web safe characters [a-z0-9-] text.
 */
Nette.webalize = function(s) {
    s = s.toLowerCase();
    var res = '', i, ch;
    for (i = 0; i < s.length; i++) {
        ch = Nette.webalizeTable[s.charAt(i)];
        res += ch ? ch : s.charAt(i);
    }
    return res.replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
};

Nette.webalizeTable = {\u00e1: 'a', \u010d: 'c', \u010f: 'd', \u00e9: 'e', \u011b: 'e', \u00ed: 'i', \u0148: 'n', \u00f3: 'o', \u0159: 'r', \u0161: 's', \u0165: 't', \u00fa: 'u', \u016f: 'u', \u00fd: 'y', \u017e: 'z'};
/**
 * AJAX Nette Framework plugin for jQuery
 *
 * @copyright Copyright (c) 2009, 2010 Jan Marek
 * @copyright Copyright (c) 2009, 2010 David Grudl
 * @copyright Copyright (c) 2012 Vojtěch Dobeš
 * @license MIT
 *
 * @version 1.2.2
 */

(function(window, $, undefined) {

if (typeof $ !== 'function') {
	return console.error('nette.ajax.js: jQuery is missing, load it please');
}

var nette = function () {
	var inner = {
		self: this,
		initialized: false,
		contexts: {},
		on: {
			init: {},
			load: {},
			prepare: {},
			before: {},
			start: {},
			success: {},
			complete: {},
			error: {}
		},
		fire: function () {
			var result = true;
			var args = Array.prototype.slice.call(arguments);
			var props = args.shift();
			var name = (typeof props === 'string') ? props : props.name;
			var off = (typeof props === 'object') ? props.off || {} : {};
			args.push(inner.self);
			$.each(inner.on[name], function (index, reaction) {
				if (reaction === undefined || $.inArray(index, off) !== -1) return true;
				var temp = reaction.apply(inner.contexts[index], args);
				return result = (temp === undefined || temp);
			});
			return result;
		},
		requestHandler: function (e) {
			if (!inner.self.ajax({}, this, e)) return;
		},
		ext: function (callbacks, context, name) {
			while (!name) {
				name = 'ext_' + Math.random();
				if (inner.contexts[name]) {
					name = undefined;
				}
			}

			$.each(callbacks, function (event, callback) {
				inner.on[event][name] = callback;
			});
			inner.contexts[name] = $.extend(context ? context : {}, {
				name: function () {
					return name;
				},
				ext: function (name, force) {
					var ext = inner.contexts[name];
					if (!ext && force) throw "Extension '" + this.name() + "' depends on disabled extension '" + name + "'.";
					return ext;
				}
			});
		}
	};

	/**
	 * Allows manipulation with extensions.
	 * When called with 1. argument only, it returns extension with given name.
	 * When called with 2. argument equal to false, it removes extension entirely.
	 * When called with 2. argument equal to hash of event callbacks, it adds new extension.
	 *
	 * @param  {string} Name of extension
	 * @param  {bool|object|null} Set of callbacks for any events OR false for removing extension.
	 * @param  {object|null} Context for added extension
	 * @return {$.nette|object} Provides a fluent interface OR returns extensions with given name
	 */
	this.ext = function (name, callbacks, context) {
		if (typeof name === 'object') {
			inner.ext(name, callbacks);
		} else if (callbacks === undefined) {
			return inner.contexts[name];
		} else if (!callbacks) {
			$.each(['init', 'load', 'prepare', 'before', 'start', 'success', 'complete', 'error'], function (index, event) {
				inner.on[event][name] = undefined;
			});
			inner.contexts[name] = undefined;
		} else if (typeof name === 'string' && inner.contexts[name] !== undefined) {
			throw "Cannot override already registered nette-ajax extension '" + name + "'.";
		} else {
			inner.ext(callbacks, context, name);
		}
		return this;
	};

	/**
	 * Initializes the plugin:
	 * - fires 'init' event, then 'load' event
	 * - when called with any arguments, it will override default 'init' extension
	 *   with provided callbacks
	 *
	 * @param  {function|object|null} Callback for 'load' event or entire set of callbacks for any events
	 * @param  {object|null} Context provided for callbacks in first argument
	 * @return {$.nette} Provides a fluent interface
	 */
	this.init = function (load, loadContext) {
		if (inner.initialized) throw 'Cannot initialize nette-ajax twice.';

		if (typeof load === 'function') {
			this.ext('init', null);
			this.ext('init', {
				load: load
			}, loadContext);
		} else if (typeof load === 'object') {
			this.ext('init', null);
			this.ext('init', load, loadContext);
		} else if (load !== undefined) {
			throw 'Argument of init() can be function or function-hash only.';
		}

		inner.initialized = true;

		inner.fire('init');
		this.load();
		return this;
	};

	/**
	 * Fires 'load' event
	 *
	 * @return {$.nette} Provides a fluent interface
	 */
	this.load = function () {
		inner.fire('load', inner.requestHandler);
		return this;
	};

	/**
	 * Executes AJAX request. Attaches listeners and events.
	 *
	 * @param  {object} settings
	 * @param  {Element|null} ussually Anchor or Form
	 * @param  {event|null} event causing the request
	 * @return {jqXHR|null}
	 */
	this.ajax = function (settings, ui, e) {
		if (!settings.nette && ui && e) {
			var $el = $(ui), xhr, originalBeforeSend;
			var analyze = settings.nette = {
				e: e,
				ui: ui,
				el: $el,
				isForm: $el.is('form'),
				isSubmit: $el.is('input[type=submit]') || $el.is('button[type=submit]'),
				isImage: $el.is('input[type=image]'),
				form: null
			};

			if (analyze.isSubmit || analyze.isImage) {
				analyze.form = analyze.el.closest('form');
			} else if (analyze.isForm) {
				analyze.form = analyze.el;
			}

			if (!settings.url) {
				settings.url = analyze.form ? analyze.form.attr('action') : ui.href;
			}
			if (!settings.type) {
				settings.type = analyze.form ? analyze.form.attr('method') : 'get';
			}

			if ($el.is('[data-ajax-off]')) {
				var rawOff = $el.attr('data-ajax-off');
				if (rawOff.indexOf('[') === 0) {
					settings.off = $el.data('ajaxOff');
				} else if (rawOff.indexOf(',') !== -1) {
					settings.off = rawOff.split(',');
				} else if (rawOff.indexOf(' ') !== -1) {
					settings.off = rawOff.split(' ');
				} else {
					settings.off = rawOff;
				}
				if (typeof settings.off === 'string') settings.off = [settings.off];
				settings.off = $.grep($.each(settings.off, function (off) {
					return $.trim(off);
				}), function (off) {
					return off.length;
				});
			}
		}

		inner.fire({
			name: 'prepare',
			off: settings.off || {}
		}, settings);
		if (settings.prepare) {
			settings.prepare(settings);
		}

		originalBeforeSend = settings.beforeSend;
		settings.beforeSend = function (xhr, settings) {
			var result = inner.fire({
				name: 'before',
				off: settings.off || {}
			}, xhr, settings);
			if ((result || result === undefined) && originalBeforeSend) {
				result = originalBeforeSend(xhr, settings);
			}
			return result;
		};

		return this.handleXHR($.ajax(settings), settings);
	};

	/**
	 * Binds extension callbacks to existing XHR object
	 *
	 * @param  {jqXHR|null}
	 * @param  {object} settings
	 * @return {jqXHR|null}
	 */
	this.handleXHR = function (xhr, settings) {
		settings = settings || {};

		if (xhr && (typeof xhr.statusText === 'undefined' || xhr.statusText !== 'canceled')) {
			xhr.done(function (payload, status, xhr) {
				inner.fire({
					name: 'success',
					off: settings.off || {}
				}, payload, status, xhr);
			}).fail(function (xhr, status, error) {
				inner.fire({
					name: 'error',
					off: settings.off || {}
				}, xhr, status, error);
			}).always(function (xhr, status) {
				inner.fire({
					name: 'complete',
					off: settings.off || {}
				}, xhr, status);
			});
			inner.fire({
				name: 'start',
				off: settings.off || {}
			}, xhr, settings);
			if (settings.start) {
				settings.start(xhr, settings);
			}
		}
		return xhr;
	};
};

$.nette = new ($.extend(nette, $.nette ? $.nette : {}));

$.fn.netteAjax = function (e, options) {
	return $.nette.ajax(options || {}, this[0], e);
};

$.fn.netteAjaxOff = function () {
	return this.off('.nette');
};

$.nette.ext('validation', {
	before: function (xhr, settings) {
		if (!settings.nette) return true;
		else var analyze = settings.nette;
		var e = analyze.e;

		var validate = $.extend({
			keys: true,
			url: true,
			form: true
		}, settings.validate || (function () {
			if (!analyze.el.is('[data-ajax-validate]')) return;
			var attr = analyze.el.data('ajaxValidate');
			if (attr === false) return {
				keys: false,
				url: false,
				form: false
			}; else if (typeof attr === 'object') return attr;
 		})() || {});

		var passEvent = false;
		if (analyze.el.attr('data-ajax-pass') !== undefined) {
			passEvent = analyze.el.data('ajaxPass');
			passEvent = typeof passEvent === 'bool' ? passEvent : true;
		}

		if (validate.keys) {
			// thx to @vrana
			var explicitNoAjax = e.button || e.ctrlKey || e.shiftKey || e.altKey || e.metaKey;

			if (analyze.form) {
				if (explicitNoAjax && analyze.isSubmit) {
					this.explicitNoAjax = true;
					return false;
				} else if (analyze.isForm && this.explicitNoAjax) {
					this.explicitNoAjax = false;
					return false;
				}
			} else if (explicitNoAjax) return false;
		}

		if (validate.form && analyze.form && !((analyze.isSubmit || analyze.isImage) && analyze.el.attr('formnovalidate') !== undefined)) {
			if (analyze.form.get(0).onsubmit && analyze.form.get(0).onsubmit(e) === false) {
				e.stopImmediatePropagation();
				e.preventDefault();
				return false;
			}
		}

		if (validate.url) {
			// thx to @vrana
			if (/:|^#/.test(analyze.form ? settings.url : analyze.el.attr('href'))) return false;
		}

		if (!passEvent) {
			e.stopPropagation();
			e.preventDefault();
		}
		return true;
	}
}, {
	explicitNoAjax: false
});

$.nette.ext('forms', {
	init: function () {
		var snippets;
		if (!window.Nette || !(snippets = this.ext('snippets'))) return;

		snippets.after(function ($el) {
			$el.find('form').each(function() {
				window.Nette.initForm(this);
			});
		});
	},
	prepare: function (settings) {
		var analyze = settings.nette;
		if (!analyze || !analyze.form) return;
		var e = analyze.e;
		var originalData = settings.data || {};
		var formData = {};

		if (analyze.isSubmit) {
			formData[analyze.el.attr('name')] = analyze.el.val() || '';
		} else if (analyze.isImage) {
			var offset = analyze.el.offset();
			var name = analyze.el.attr('name');
			var dataOffset = [ Math.max(0, e.pageX - offset.left), Math.max(0, e.pageY - offset.top) ];

			if (name.indexOf('[', 0) !== -1) { // inside a container
				formData[name] = dataOffset;
			} else {
				formData[name + '.x'] = dataOffset[0];
				formData[name + '.y'] = dataOffset[1];
			}
		}

		if (typeof originalData !== 'string') {
			originalData = $.param(originalData);
		}
		formData = $.param(formData);
		settings.data = analyze.form.serialize() + (formData ? '&' + formData : '') + '&' + originalData;
	}
});

// default snippet handler
$.nette.ext('snippets', {
	success: function (payload) {
		var snippets = [];
		var elements = [];
		if (payload.snippets) {
			for (var i in payload.snippets) {
				var $el = this.getElement(i);
				if ($el.get(0)) {
					elements.push($el.get(0));
				}
				$.each(this.beforeQueue, function (index, callback) {
					if (typeof callback === 'function') {
						callback($el);
					}
				});
				this.updateSnippet($el, payload.snippets[i]);
				$.each(this.afterQueue, function (index, callback) {
					if (typeof callback === 'function') {
						callback($el);
					}
				});
			}
			var defer = $(elements).promise();
			$.each(this.completeQueue, function (index, callback) {
				if (typeof callback === 'function') {
					defer.done(callback);
				}
			});
		}
	}
}, {
	beforeQueue: [],
	afterQueue: [],
	completeQueue: [],
	before: function (callback) {
		this.beforeQueue.push(callback);
	},
	after: function (callback) {
		this.afterQueue.push(callback);
	},
	complete: function (callback) {
		this.completeQueue.push(callback);
	},
	updateSnippet: function ($el, html, back) {
		if (typeof $el === 'string') {
			$el = this.getElement($el);
		}
		// Fix for setting document title in IE
		if ($el.is('title')) {
			document.title = html;
		} else {
			this.applySnippet($el, html, back);
		}
	},
	getElement: function (id) {
		return $('#' + this.escapeSelector(id));
	},
	applySnippet: function ($el, html, back) {
		if (!back && $el.is('[data-ajax-append]')) {
			$el.append(html);
		} else {
			$el.html(html);
		}
	},
	escapeSelector: function (selector) {
		// thx to @uestla (https://github.com/uestla)
		return selector.replace(/[\!"#\$%&'\(\)\*\+,\.\/:;<=>\?@\[\\\]\^`\{\|\}~]/g, '\\$&');
	}
});

// support $this->redirect()
$.nette.ext('redirect', {
	success: function (payload) {
		if (payload.redirect) {
			window.location.href = payload.redirect;
			return false;
		}
	}
});

// current page state
$.nette.ext('state', {
	success: function (payload) {
		if (payload.state) {
			this.state = payload.state;
		}
	}
}, {state: null});

// abort last request if new started
$.nette.ext('unique', {
	start: function (xhr) {
		if (this.xhr) {
			this.xhr.abort();
		}
		this.xhr = xhr;
	},
	complete: function () {
		this.xhr = null;
	}
}, {xhr: null});

// option to abort by ESC (thx to @vrana)
$.nette.ext('abort', {
	init: function () {
		$('body').keydown($.proxy(function (e) {
			if (this.xhr && (e.keyCode.toString() === '27' // Esc
			&& !(e.ctrlKey || e.shiftKey || e.altKey || e.metaKey))
			) {
				this.xhr.abort();
			}
		}, this));
	},
	start: function (xhr) {
		this.xhr = xhr;
	},
	complete: function () {
		this.xhr = null;
	}
}, {xhr: null});

$.nette.ext('load', {
	success: function () {
		$.nette.load();
	}
});

// default ajaxification (can be overridden in init())
$.nette.ext('init', {
	load: function (rh) {
		$(this.linkSelector).off('click.nette', rh).on('click.nette', rh);
		$(this.formSelector).off('submit.nette', rh).on('submit.nette', rh)
			.off('click.nette', ':image', rh).on('click.nette', ':image', rh)
			.off('click.nette', ':submit', rh).on('click.nette', ':submit', rh);
		$(this.buttonSelector).closest('form')
			.off('click.nette', this.buttonSelector, rh).on('click.nette', this.buttonSelector, rh);
	}
}, {
	linkSelector: 'a.ajax',
	formSelector: 'form.ajax',
	buttonSelector: 'input.ajax[type="submit"], button.ajax[type="submit"], input.ajax[type="image"]'
});

})(window, window.jQuery);
$(function(){

	$.nette.init();

    $('body').on('click', '[data-confirm]', function (e) {
        var question = $(this).data('confirm');
        if (!confirm(question)) {
            e.stopImmediatePropagation();
            e.preventDefault();
        }
    });

	$('#qr').qrcode({
		text: document.URL,
		radius: 0.5,
		size: 107
	});

	$("#outline, #outline2").fracs("outline", {
		crop: true,
		styles: [
			{selector:"p",fillStyle:"rgb(230,230,230)"},
			{selector:"pre",fillStyle:"rgb(200,200,200)"},
			{selector:"a,h1,h2,h3,h4,h5,h6",fillStyle:"rgb(104,169,255)"},
			{selector:"canvas",fillStyle:"rgb(108,196,46)"},
			{selector:"blockquote,.thumbnail,#disqus_thread",fillStyle:"rgb(221,75,57)"},
			{selector:"table",fillStyle:"rgb(200,200,30)"}

		],
		viewportStyle:{fillStyle:"rgba(104,169,255,0.2)"},
		viewportDragStyle:{fillStyle:"rgba(104,169,255,0.5)"}
	});

	var fixAffix = function() {
		return $('#bottom').outerHeight(true) + $('.footer').outerHeight(true) + 40;
	}
	$('#outline').affix({
		offset: {
			top: 351,
			bottom: function () {
				return (this.bottom = fixAffix);
			}
		}
	})
	$(window).scroll(fixAffix);

	$('#outline2').affix({
		offset: {
			top: 264,
			bottom: 100
		}
	})

	var disqus_div = $("#disqus_thread");
	if (disqus_div.size() > 0 ) {
		var ds_loaded = false,
			top = $('.load_disqus').offset().top,
			disqus_data = disqus_div.data(),
			check = function(){
				if ( !ds_loaded && $(window).scrollTop() + $(window).height() > top ) {
					ds_loaded = true;
					for (var key in disqus_data) {
						if (key.substr(0,6) == 'disqus') {
							window['disqus_' + key.replace('disqus','').toLowerCase()] = disqus_data[key];
						}
					}
					var dsq = document.createElement('script');
					dsq.type = 'text/javascript';
					dsq.async = true;
					dsq.src = 'http://' + window.disqus_shortname + '.disqus.com/embed.js';
					(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
				}
			};
		$(window).scroll(check);
		check();
	}

});