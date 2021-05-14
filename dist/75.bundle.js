(self.webpackChunkspa_movies_catalogue=self.webpackChunkspa_movies_catalogue||[]).push([[75],{792:(n,r,e)=>{"use strict";e.d(r,{Z:()=>o});var t=e(645),i=e.n(t)()((function(n){return n[1]}));i.push([n.id,"html {\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  background-color: #0d0d0d;\r\n  height: 100%;\r\n}\r\n\r\n.page-container {\r\n  position: relative;\r\n  min-height: 100vh;\r\n}\r\n\r\n.content-wrap {\r\n  padding-bottom: 46px;\r\n}\r\n\r\n.loading {\r\n  height: 60vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.loading span {\r\n  width: 25px;\r\n  height: 25px;\r\n  margin: 0 5px;\r\n  background-color: #2b2b2b;\r\n  display: inline-block;\r\n  border-radius: 50%;\r\n  animation-name: bounce;\r\n  animation-duration: 2s;\r\n  animation-iteration-count: infinite;\r\n  animation-timing-function: ease-in-out;\r\n}\r\n\r\n.loading span:nth-child(2) {\r\n  animation-delay: 0.1s;\r\n}\r\n\r\n.loading span:nth-child(3) {\r\n  animation-delay: 0.2s;\r\n}\r\n\r\n@keyframes bounce {\r\n  50% {\r\n    opacity: 0%;\r\n    transform: scale(0.7) translateY(10px);\r\n  }\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  background-color: #2b2b2b;\r\n  width: 100%;\r\n  height: 90px;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\nheader a h1 {\r\n  margin: 0;\r\n  font-size: 40px;\r\n  font-family: 'Lato', sans-serif;\r\n  color: #6AC045;\r\n  padding-left: 16px;\r\n}\r\n\r\nheader .search-bar-container {\r\n  padding-right: 64px;\r\n  padding-left: 16px;\r\n  align-items: center;\r\n}\r\n\r\nheader .search-bar {\r\n  display: flex;\r\n  align-items: center;\r\n  padding-right: 32px;\r\n  width: 160px;\r\n  border: solid 2px #656565;\r\n  border-radius: 8px;\r\n}\r\n\r\nheader .search-bar img {\r\n  width: 16px;\r\n  padding-left: 6px;\r\n}\r\n\r\nheader .search-textbox {\r\n  border: none;\r\n  outline: none;\r\n  color: #707070;\r\n  background-color: #2b2b2b;\r\n  padding-left: 16px;\r\n  width: 150px;\r\n  height: 25px;\r\n}\r\n\r\nheader .search-bar button {\r\n  display: none;\r\n}\r\n\r\n.ul-container {\r\n  padding: 64px 32px 0 32px;\r\n}\r\n\r\n.ul-container .movies-container {\r\n  margin-bottom: 0;\r\n  display: grid;\r\n  list-style: none;\r\n  grid-template-columns: repeat(auto-fill, 250px);\r\n  padding: 0;\r\n  justify-content: center;\r\n  gap: 16px 64px;\r\n}\r\n\r\n.movies-container div {\r\n  text-align: start;\r\n  \r\n}\r\n\r\n.ul-container .movies-container .movie-home img{\r\n  width: 100%;\r\n  border: solid 4px #ebebeb;\r\n  border-radius: 4px;\r\n}\r\n\r\n.ul-container .movies-container .movie-home img:hover {\r\n  animation-name: blur;\r\n  animation-duration: 0.2s;\r\n  animation-fill-mode: forwards;\r\n  cursor: pointer;\r\n}\r\n\r\n@keyframes blur {\r\n  100% {\r\n    border-color: #6AC045;\r\n  }\r\n}\r\n\r\n.movie-home h4 {\r\n  font-family: 'Lato', sans-serif;\r\n  color: #e3e3e3;\r\n  font-size: large;\r\n  margin: 0;\r\n}\r\n\r\n.movie-home h6 {\r\n  margin-top: 0px;\r\n  margin-bottom: 0px;\r\n  font-family: 'Lato', sans-serif;\r\n  color: #c2c2c2;\r\n  font-size: medium;\r\n}\r\n\r\n.movie-detail-container {\r\n  padding-top: 5%;\r\n  margin-bottom: 74px;\r\n}\r\n\r\n.movie-detail{\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  gap: 32px 64px;\r\n  color: #e3e3e3;\r\n  font-family: 'Lato', sans-serif;\r\n}\r\n\r\n.movie-detail img {\r\n  max-width: 250px;\r\n  padding: 0;\r\n  border: solid #ebebeb 4px;\r\n  border-radius: 4px;\r\n}\r\n\r\n.movie-detail .info {\r\n  max-width: 900px;\r\n}\r\n\r\n.movie-detail .info h1 {\r\n  margin-top: 0;\r\n  font-size: 50px;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.movie-detail .info h3 {\r\n  margin-top: 0px;\r\n  margin-bottom: 12px;\r\n  padding-left: 5px;\r\n}\r\n\r\n.movie-detail .info h4 {\r\n  margin-top: 0px;\r\n  margin-bottom: 2px;\r\n  padding-left: 5px;\r\n}\r\n\r\n.movie-detail .info h5 {\r\n  font-size: 15px;\r\n}\r\n\r\n.line {\r\n  border-top: solid 1px #ebebeb;\r\n}\r\n\r\nh1 { \r\n  text-align: center;\r\n  color: #e3e3e3;\r\n  font-family: 'Lato', sans-serif;\r\n}\r\n\r\n.suggestions {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: space-between;\r\n  justify-content: center;\r\n  color: #e3e3e3;\r\n  font-family: 'Lato', sans-serif;\r\n}\r\n\r\n.suggestions .suggestion-items {\r\n  width: 300px;\r\n  align-content: center;\r\n  text-align: center;\r\n}\r\n\r\n.suggestions img {\r\n  max-width: 250px;\r\n  padding: 0;\r\n  border: solid #ebebeb 4px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n}\r\n\r\n.suggestions img:hover {\r\n  animation-name: blur;\r\n  animation-duration: 0.2s;\r\n  animation-fill-mode: forwards;\r\n}\r\n\r\n.suggestions h1 {\r\n  font-size: 32px;\r\n}\r\n\r\nfooter {\r\n  position: absolute;\r\n  bottom: 0;\r\n  height: 46px;  \r\n  width: 100%;\r\n  display: flex;\r\n  border-top: solid 1px #707070;\r\n  align-items: center;\r\n}\r\n\r\nfooter .footer-content {\r\n  background-color: #0d0d0d;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n}\r\n\r\nfooter img{\r\n  width: 30px;\r\n  margin-left: 10px;\r\n  margin-right: 6px;\r\n}\r\n\r\nfooter .instagram-logo{\r\n  filter: invert() saturate(0);\r\n}\r\n\r\nfooter .github-logo {\r\n  filter:  invert();\r\n}\r\n\r\n\r\n@media (max-width: 612px) {\r\n  \r\n  .movie-detail-container {\r\n    justify-content: center;\r\n  }\r\n\r\n  .movie-detail {\r\n    justify-content: center;\r\n  }\r\n\r\n  header {\r\n    height: 110px;\r\n  }\r\n\r\n  footer {\r\n    position: relative;\r\n  }\r\n}\r\n",""]);const o=i},645:n=>{"use strict";n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e=n(r);return r[2]?"@media ".concat(r[2]," {").concat(e,"}"):e})).join("")},r.i=function(n,e,t){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(t)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);t&&i[d[0]]||(e&&(d[2]?d[2]="".concat(e," and ").concat(d[2]):d[2]=e),r.push(d))}},r}},75:(n,r,e)=>{"use strict";e.r(r),e.d(r,{default:()=>a});var t=e(379),i=e.n(t),o=e(792);i()(o.Z,{insert:"head",singleton:!1});const a=o.Z.locals||{}},379:(n,r,e)=>{"use strict";var t,i=function(){var n={};return function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[r]=e}return n[r]}}(),o=[];function a(n){for(var r=-1,e=0;e<o.length;e++)if(o[e].identifier===n){r=e;break}return r}function s(n,r){for(var e={},t=[],i=0;i<n.length;i++){var s=n[i],d=r.base?s[0]+r.base:s[0],l=e[d]||0,c="".concat(d," ").concat(l);e[d]=l+1;var p=a(c),f={css:s[1],media:s[2],sourceMap:s[3]};-1!==p?(o[p].references++,o[p].updater(f)):o.push({identifier:c,updater:g(f,r),references:1}),t.push(c)}return t}function d(n){var r=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var o=e.nc;o&&(t.nonce=o)}if(Object.keys(t).forEach((function(n){r.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(r);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(r)}return r}var l,c=(l=[],function(n,r){return l[n]=r,l.filter(Boolean).join("\n")});function p(n,r,e,t){var i=e?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=c(r,i);else{var o=document.createTextNode(i),a=n.childNodes;a[r]&&n.removeChild(a[r]),a.length?n.insertBefore(o,a[r]):n.appendChild(o)}}function f(n,r,e){var t=e.css,i=e.media,o=e.sourceMap;if(i?n.setAttribute("media",i):n.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var m=null,u=0;function g(n,r){var e,t,i;if(r.singleton){var o=u++;e=m||(m=d(r)),t=p.bind(null,e,o,!1),i=p.bind(null,e,o,!0)}else e=d(r),t=f.bind(null,e,r),i=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return t(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;t(n=r)}else i()}}n.exports=function(n,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var e=s(n=n||[],r);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<e.length;t++){var i=a(e[t]);o[i].references--}for(var d=s(n,r),l=0;l<e.length;l++){var c=a(e[l]);0===o[c].references&&(o[c].updater(),o.splice(c,1))}e=d}}}}}]);