(self.webpackChunktypescriptlang_org=self.webpackChunktypescriptlang_org||[]).push([[739],{9386:function(e,t,n){"use strict";n.r(t);var r=n(2784),a=n(7480),c=n(5095),o=n(357),l=n(2378),i=n(3712),u=function(e){var t=(0,o.D)((0,c.Z)()),n=e.data.markdownRemark;if(!n)return i.log("Could not render:",JSON.stringify(e)),r.createElement("div",null);(0,r.useEffect)((function(){var e=function(e,t){var n=e.offsetTop;t&&("sticky"===window.getComputedStyle(t).position&&(n-=t.clientHeight));return n};document.querySelectorAll(".tsconfig a[href^='#']").forEach((function(t){t.addEventListener("click",(function(n){n.preventDefault(),function(t){if("#"!==t){var n=document.querySelector(t);if(n){for(var r=n,a=null;r.parentElement;)if("ARTICLE"===(r=r.parentElement).tagName){a=r.querySelector("nav");break}var c=e(n,a);c&&window.scrollTo({top:c,behavior:"smooth"})}}}(t.hash),window.history.pushState(null,"",t.hash)}))}));var t=document.querySelectorAll(".tsconfig article nav"),n=function(){var n=window.scrollY;t.forEach((function(t){var r,a=t.querySelectorAll("a[href^='#']");a.forEach((function(a){var c=document.querySelector(a.hash);c&&(e(c,t)-100<=n&&(r=a))})),a.forEach((function(e){e===r?e.classList.add("current"):e.classList.remove("current")}))}))};return window.addEventListener("scroll",n,{passive:!0,capture:!0}),n(),function(){window.removeEventListener("scroll",n)}}),[]);var l=function(e,t){var n={watchOptions:"watch",typeAcquisition:"type"};return e&&n[e]?"#"+n[e]+"-"+t:"#"+t},u=function(e,t){return r.createElement("div",{className:t?"tsconfig-quick-nav grouped":"tsconfig-quick-nav"},t?r.createElement("h4",null,r.createElement("code",null,r.createElement("a",{href:"#"+t},'"',t,'"'))):r.createElement("div",null),e.map((function(e){return r.createElement("div",{className:"tsconfig-quick-nav-category",key:e.display},r.createElement("h5",{id:"quick-nav-"+e.anchor},e.display),r.createElement("ol",{"aria-labelledby":"quick-nav-"+e.anchor},e.options.map((function(n){return r.createElement("li",{key:n.name},r.createElement("code",null,r.createElement("a",{href:l(t,n.anchor)},n.anchor),(a=e.options,c=n,(o=a.indexOf(c))===a.length-1?null:o===a.length-2?r.createElement("span",null," and "):r.createElement("span",null,", "))));var a,c,o}))))})))},s=e.pageContext.categories,f=s.filter((function(e){return"Top Level"===e.anchor})),m=s.filter((function(e){return"watchOptions"===e.anchor})),p=s.filter((function(e){return"typeAcquisition"===e.anchor})),d=["Top Level","watchOptions","typeAcquisition"],h=s.filter((function(e){return!d.includes(e.anchor)})),v=(0,r.useState)(!1),E=v[0],g=v[1];return r.createElement(a.A,{title:t("tsconfig_title"),description:t("tsconfig_description"),lang:e.pageContext.locale},r.createElement("div",{className:"tsconfig raised main-content-block markdown button "+(E?"open":"closed")},r.createElement("a",{href:"#",onClick:function(){return g(!E)}},r.createElement("h2",null,r.createElement("svg",{width:"22",height:"13",viewBox:"0 0 22 13",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M0.5 1L11 11.5L21.5 1",stroke:"black"})),e.pageContext.intro.header),!E&&r.createElement("div",{className:"preview"},e.pageContext.intro.preview)),E&&r.createElement("div",{className:"content"},"  ",r.createElement("div",{dangerouslySetInnerHTML:{__html:e.pageContext.intro.html}}))),r.createElement("div",{className:"tsconfig main-content-block"},r.createElement("h2",null,"Compiler Options"),u(f),u(h,"compilerOptions"),u(m,"watchOptions"),u(p,"typeAcquisition")),r.createElement("div",{dangerouslySetInnerHTML:{__html:n.html}}))};t.default=function(e){return r.createElement(l.R,{locale:e.pageContext.locale},r.createElement(u,e))}}}]);
//# sourceMappingURL=component---src-templates-tsconfig-reference-tsx-a59eddb1a468e9b14120.js.map