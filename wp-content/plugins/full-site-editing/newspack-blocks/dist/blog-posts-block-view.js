!function(){"use strict";var t={357:function(t,r,e){function n(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}e.d(r,{Z:function(){return n}})},890:function(t,r,e){e.d(r,{Z:function(){return o}});var n=e(357);function o(t){if(Array.isArray(t))return(0,n.Z)(t)}},733:function(t,r,e){function n(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}e.d(r,{Z:function(){return n}})},154:function(t,r,e){function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}e.d(r,{Z:function(){return n}})},766:function(t,r,e){e.d(r,{Z:function(){return u}});var n=e(890),o=e(733),i=e(237),a=e(154);function u(t){return(0,n.Z)(t)||(0,o.Z)(t)||(0,i.Z)(t)||(0,a.Z)()}},237:function(t,r,e){e.d(r,{Z:function(){return o}});var n=e(357);function o(t,r){if(t){if("string"==typeof t)return(0,n.Z)(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?(0,n.Z)(t,r):void 0}}},222:function(){},439:function(t,r,e){var n=e(766);e(222);function o(t,r){var e=new XMLHttpRequest;e.onreadystatechange=function(){if(4===e.readyState){if(e.status>=200&&e.status<300){var n=JSON.parse(e.responseText);return t.onSuccess(n)}return r?o(t,r-1):t.onError()}},e.open("GET",t.url),e.send()}function i(t,r){return Object.prototype.hasOwnProperty.call(t,r)}Array.prototype.forEach.call(document.querySelectorAll(".wp-block-newspack-blocks-homepage-articles.has-more-button"),(function(t){var r=t.querySelector("[data-next]");if(!r)return;var e=t.querySelector("[data-posts]"),a=!1,u=!1;r.addEventListener("click",(function(){if(a||u)return!1;var c,s;function l(){a=!1,t.classList.remove("is-loading"),t.classList.add("is-error")}a=!0,t.classList.remove("is-error"),t.classList.add("is-loading"),o({url:r.getAttribute("data-next")+"&exclude_ids="+(c=document.querySelectorAll("[class^='wp-block-newspack-blocks'] [data-post-id]"),s=Array.from(c).map((function(t){return t.getAttribute("data-post-id")})),s.push(document.querySelector("div[data-current-post-id]").getAttribute("data-current-post-id")),(0,n.Z)(new Set(s))).join(","),onSuccess:function(n){if(!function(t){var r=!1;t&&i(t,"items")&&Array.isArray(t.items)&&i(t,"next")&&"string"==typeof t.next&&(r=!0,!t.items.length||i(t.items[0],"html")&&"string"==typeof t.items[0].html||(r=!1));return r}(n))return l();if(n.items.length){var o=n.items.map((function(t){return t.html})).join("");e.insertAdjacentHTML("beforeend",o)}n.next&&r.setAttribute("data-next",n.next);n.items.length&&n.next||(u=!0,t.classList.remove("has-more-button"));a=!1,t.classList.remove("is-loading")},onError:l},3)}))}))}},r={};function e(n){var o=r[n];if(void 0!==o)return o.exports;var i=r[n]={exports:{}};return t[n](i,i.exports,e),i.exports}e.d=function(t,r){for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};!function(){e.r(n);e(439)}(),window.EditingToolkit=n}();