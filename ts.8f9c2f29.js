parcelRequire=function(e){var r="function"==typeof parcelRequire&&parcelRequire,n="function"==typeof require&&require,i={};function u(e,u){if(e in i)return i[e];var t="function"==typeof parcelRequire&&parcelRequire;if(!u&&t)return t(e,!0);if(r)return r(e,!0);if(n&&"string"==typeof e)return n(e);var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return u.register=function(e,r){i[e]=r},i=e(u),u.modules=i,u}(function (require) {var g=2500,b=[{text:["filer text","filled"]},{text:["lorem ipsum","dolor sic"]},{text:["ipswich","england"]},{text:["port aransas","texas"]},{text:["apps","schmapps"]},{text:["vanilla","extract"]}],h=function(e){var t={text:[""]};if("SPAN"===e.tagName)t.text=[e.textContent];else{if("DIV"!==e.tagName)throw new Error("Only DIVs and SPANs can be converted to storage.");var a=e.getElementsByClassName("normal-text")[0].textContent,n=e.getElementsByClassName("quip")[0].textContent;t.text=[a,n]}return e.classList.contains("emphasized")&&(t.emphasized=!0),t},f=function(e){return Math.floor(Math.random()*e.length)};setInterval(function(){var e,t,a=document.getElementsByClassName("tag"),n=f(a),r=f(b),s=a[n],l=h(s),o=b.splice(r,1,l)[0];if(1===o.text.length){var d=o.text[0];t=document.createElement("span");var m=document.createTextNode(d);t.appendChild(m),t.className="tag"}else{var c=o.text,i=(d=c[0],c[1]);t=document.createElement("div");var $=document.createElement("span"),p=document.createTextNode(d);$.appendChild(p),$.className="normal-text",t.appendChild($);var x=document.createElement("span"),v=document.createTextNode(i);x.appendChild(v),x.className="quip",t.appendChild(x),t.className="tag",console.log(t.innerHTML)}o.emphasized&&t.classList.add("emphasized"),null===(e=s.parentNode)||void 0===e||e.replaceChild(t,s)},g);return{"LQOA":{}};});