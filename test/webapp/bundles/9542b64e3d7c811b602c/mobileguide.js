!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=40)}({13:function(e,t,r){var n,o,i;o=[],void 0===(i="function"==typeof(n=function(){var e=XMLHttpRequest;if(!e)throw new Error("missing XMLHttpRequest");function t(i,a){if("function"!=typeof a)throw new Error("Bad callback given: "+a);if(!i)throw new Error("No options given");var s=i.onResponse;if((i="string"==typeof i?{uri:i}:JSON.parse(JSON.stringify(i))).onResponse=s,i.verbose&&(t.log=function(){var e,t,r={},i=["trace","debug","info","warn","error"];for(t=0;t<i.length;t++)r[e=i[t]]=n,"undefined"!=typeof console&&console&&console[e]&&(r[e]=o(console,e));return r}()),i.url&&(i.uri=i.url,delete i.url),!i.uri&&""!==i.uri)throw new Error("options.uri is a required argument");if("string"!=typeof i.uri)throw new Error("options.uri must be a string");for(var u=["proxy","_redirectsFollowed","maxRedirects","followRedirect"],d=0;d<u.length;d++)if(i[u[d]])throw new Error("options."+u[d]+" is not supported");if(i.callback=a,i.method=i.method||"GET",i.headers=i.headers||{},i.body=i.body||null,i.timeout=i.timeout||t.DEFAULT_TIMEOUT,i.headers.host)throw new Error("Options.headers.host is not supported");i.json&&(i.headers.accept=i.headers.accept||"application/json","GET"!==i.method&&(i.headers["content-type"]="application/json"),"boolean"!=typeof i.json?i.body=JSON.stringify(i.json):"string"!=typeof i.body&&(i.body=JSON.stringify(i.body)));var c=function(e){var t=[];for(var r in e)e.hasOwnProperty(r)&&t.push(encodeURIComponent(r)+"="+encodeURIComponent(e[r]));return t.join("&")};if(i.qs){var l="string"==typeof i.qs?i.qs:c(i.qs);-1!==i.uri.indexOf("?")?i.uri=i.uri+"&"+l:i.uri=i.uri+"?"+l}if(i.form){if("string"==typeof i.form)throw"form name unsupported";if("POST"===i.method){var f=(i.encoding||"application/x-www-form-urlencoded").toLowerCase();switch(i.headers["content-type"]=f,f){case"application/x-www-form-urlencoded":i.body=c(i.form).replace(/%20/g,"+");break;case"multipart/form-data":var p=function(e){var t={};t.boundry="-------------------------------"+Math.floor(1e9*Math.random());var r=[];for(var n in e)e.hasOwnProperty(n)&&r.push("--"+t.boundry+'\nContent-Disposition: form-data; name="'+n+'"\n\n'+e[n]+"\n");return r.push("--"+t.boundry+"--"),t.body=r.join(""),t.length=t.body.length,t.type="multipart/form-data; boundary="+t.boundry,t}(i.form);i.body=p.body,i.headers["content-type"]=p.type;break;default:throw new Error("unsupported encoding:"+f)}}}return i.onResponse=i.onResponse||n,!0===i.onResponse&&(i.onResponse=a,i.callback=n),!i.headers.authorization&&i.auth&&(i.headers.authorization="Basic "+function(e){var t,r,n,o,i,a,s,u,d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",c=0,l=0,f="",p=[];if(!e)return e;do{t=e.charCodeAt(c++),r=e.charCodeAt(c++),n=e.charCodeAt(c++),o=(u=t<<16|r<<8|n)>>18&63,i=u>>12&63,a=u>>6&63,s=63&u,p[l++]=d.charAt(o)+d.charAt(i)+d.charAt(a)+d.charAt(s)}while(c<e.length);switch(f=p.join(""),e.length%3){case 1:f=f.slice(0,-2)+"==";break;case 2:f=f.slice(0,-1)+"="}return f}(i.auth.username+":"+i.auth.password)),function(n){var o=new e,i=!1,a=function(e){var t,r=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/;try{t=location.href}catch(e){(t=document.createElement("a")).href="",t=t.href}var n=r.exec(t.toLowerCase())||[],o=r.exec(e.toLowerCase());return!(!o||o[1]==n[1]&&o[2]==n[2]&&(o[3]||("http:"===o[1]?80:443))==(n[3]||("http:"===n[1]?80:443)))}(n.uri),s="withCredentials"in o;if(r+=1,o.seq_id=r,o.id=r+": "+n.method+" "+n.uri,o._id=o.id,a&&!s){var u=new Error("Browser does not support cross-origin request: "+n.uri);return u.cors="unsupported",n.callback(u,o)}o.timeoutTimer=setTimeout((function(){i=!0;var e=new Error("ETIMEDOUT");return e.code="ETIMEDOUT",e.duration=n.timeout,t.log.error("Timeout",{id:o._id,milliseconds:n.timeout}),n.callback(e,o)}),n.timeout);var d={response:!1,loading:!1,end:!1};return o.onreadystatechange=function(r){if(i)return t.log.debug("Ignoring timed out state change",{state:o.readyState,id:o.id});if(t.log.debug("State change",{state:o.readyState,id:o.id,timed_out:i}),o.readyState===e.OPENED)for(var a in t.log.debug("Request started",{id:o.id}),n.headers)o.setRequestHeader(a,n.headers[a]);else o.readyState===e.HEADERS_RECEIVED?c():o.readyState===e.LOADING?(c(),l()):o.readyState===e.DONE&&(c(),l(),function(){if(d.end)return;if(d.end=!0,t.log.debug("Request done",{id:o.id}),o.body=o.responseText,n.json)try{o.body=JSON.parse(o.responseText)}catch(e){return n.callback(e,o)}n.callback(null,o,o.body)}())},o.open(n.method,n.uri,!0),a&&(o.withCredentials=!!n.withCredentials),o.send(n.body),o;function c(){if(!d.response){if(d.response=!0,t.log.debug("Got response",{id:o.id,status:o.status}),clearTimeout(o.timeoutTimer),o.statusCode=o.status,a&&0==o.statusCode){var e=new Error("CORS request rejected: "+n.uri);return e.cors="rejected",d.loading=!0,d.end=!0,n.callback(e,o)}n.onResponse(null,o)}}function l(){d.loading||(d.loading=!0,t.log.debug("Response body loading",{id:o.id}))}}(i)}t.log={trace:n,debug:n,info:n,warn:n,error:n};var r=0;function n(){}function o(e,t){return function(r,n){return"object"==typeof n&&(r+=" "+JSON.stringify(n)),e[t].call(e,r)}}return t.withCredentials=!1,t.DEFAULT_TIMEOUT=18e4,t.defaults=function(e,r){var n=function(t){return function(r,n){for(var o in r="string"==typeof r?{uri:r}:JSON.parse(JSON.stringify(r)),e)void 0===r[o]&&(r[o]=e[o]);return t(r,n)}},o=n(t);return o.get=n(t.get),o.post=n(t.post),o.put=n(t.put),o.head=n(t.head),o},["get","put","post","head"].forEach((function(e){var r=e.toUpperCase();t[e.toLowerCase()]=function(e){"string"==typeof e?e={method:r,uri:e}:(e=JSON.parse(JSON.stringify(e))).method=r;var n=[e].concat(Array.prototype.slice.apply(arguments,[1]));return t.apply(this,n)}})),t.couch=function(e,r){return"string"==typeof e&&(e={uri:e}),e.json=!0,e.body&&(e.json=e.body),delete e.body,r=r||n,t(e,(function(e,t,n){if(e)return r(e,t,n);if((t.statusCode<200||t.statusCode>299)&&n.error){for(var o in e=new Error("CouchDB error: "+(n.error.reason||n.error.error)),n)e[o]=n[o];return r(e,t,n)}return r(e,t,n)}))},t})?n.apply(t,o):n)||(e.exports=i)},14:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(13),o=r.n(n);async function i(e=""){""===e||e.endsWith("/")||(e+="/");const t=a(`${e}config.${document.domain}.json`),r=a(e+"config.json");try{const e=await t;if(0===Object.keys(e).length)throw new Error;return e}catch(e){return await r}}function a(e){return new Promise((function(t,r){o()({method:"GET",url:e,qs:{cachebuster:Date.now()}},(e,n,o)=>{try{if(e||n.status<200||n.status>=300)return n&&(404==n.status||0==n.status&&""==o)&&t({}),void r({err:e,response:n});t(JSON.parse(o))}catch(e){r({err:e})}})}))}},40:function(e,t,r){"use strict";r.r(t);var n=r(14);function o(){document.cookie="element_mobile_redirect_to_guide=false;path=/;max-age=14400",window.location.href="../"}function i(e){e=`<h2>Error loading Element</h2><p>${e}</p><p>If this is unexpected, please contact your system administrator or technical support representative.</p>`;const t=document.getElementsByClassName("mx_HomePage_container"),r=document.getElementsByClassName("mx_HomePage_errorContainer");for(const e of t)e.innerHTML="";for(const t of r)t.style.display="block",t.innerHTML=e}!async function(){document.getElementById("back_to_element_button").onclick=o;const e=await Object(n.a)(".."),t=e.default_server_config,r=e.default_server_name,a=e.default_hs_url,s=e.default_is_url,u=[t,r,a].filter(e=>!!e);if(u.length>1)return i("Invalid configuration: can only specify one of default_server_config, default_server_name, or default_hs_url.");if(u.length<1)return i("Invalid configuration: no default server specified.");let d="",c="";if(t&&t["m.homeserver"]&&(d=t["m.homeserver"].base_url,t["m.identity_server"]&&(c=t["m.identity_server"].base_url)),r)try{const e=await fetch(`https://${r}/.well-known/matrix/client`),t=await e.json();t&&t["m.homeserver"]&&(d=t["m.homeserver"].base_url,t["m.identity_server"]&&(c=t["m.identity_server"].base_url))}catch(e){return console.error(e),i("Unable to fetch homeserver configuration")}if(a&&(d=a,c=s),!d)return i("Unable to locate homeserver");d&&!d.endsWith("/")&&(d+="/"),c&&!c.endsWith("/")&&(c+="/"),"https://matrix.org/"!==d&&(document.getElementById("configure_element_button").href="https://mobile.element.io?hs_url="+encodeURIComponent(d)+"&is_url="+encodeURIComponent(c),document.getElementById("step1_heading").innerHTML="1: Install the app",document.getElementById("step2_container").style.display="block",document.getElementById("hs_url").innerText=d,c&&(document.getElementById("custom_is").style.display="block",document.getElementById("is_url").style.display="block",document.getElementById("is_url").innerText=c))}()}});
//# sourceMappingURL=mobileguide.js.map