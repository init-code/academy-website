"use strict";(self.webpackChunkacademy_website=self.webpackChunkacademy_website||[]).push([[698],{1875:(e,t,n)=>{n.d(t,{Z:()=>a});const a=()=>null},8617:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294);const r="iconExternalLink_wgqa",l=e=>{let{width:t=13.5,height:n=13.5}=e;return a.createElement("svg",{width:t,height:n,"aria-hidden":"true",viewBox:"0 0 24 24",className:r},a.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))}},6698:(e,t,n)=>{n.d(t,{Z:()=>Ee});var a=n(7294),r=n(6010),l=n(6550),o=n(4973),c=n(941);const s="skipToContent_OuoZ";function i(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}const m=function(){const e=(0,a.useRef)(null),{action:t}=(0,l.k6)();return(0,c.SL)((n=>{let{location:a}=n;e.current&&!a.hash&&"PUSH"===t&&i(e.current)})),a.createElement("div",{ref:e},a.createElement("a",{href:"#",className:s,onClick:e=>{e.preventDefault();const t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&i(t)}},a.createElement(o.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))};var d=n(7462);function u(e){let{width:t=20,height:n=20,className:r,...l}=e;return a.createElement("svg",(0,d.Z)({className:r,viewBox:"0 0 24 24",width:t,height:n,fill:"currentColor"},l),a.createElement("path",{d:"M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"}))}const h="announcementBar_axC9",b="announcementBarPlaceholder_xYHE",g="announcementBarClose_A3A1",v="announcementBarContent_6uhP";const f=function(){const{isClosed:e,close:t}=(0,c.nT)(),{announcementBar:n}=(0,c.LU)();if(!n)return null;const{content:l,backgroundColor:s,textColor:i,isCloseable:m}=n;return!l||m&&e?null:a.createElement("div",{className:h,style:{backgroundColor:s,color:i},role:"banner"},m&&a.createElement("div",{className:b}),a.createElement("div",{className:v,dangerouslySetInnerHTML:{__html:l}}),m?a.createElement("button",{type:"button",className:(0,r.Z)("clean-btn close",g),onClick:t,"aria-label":(0,o.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},a.createElement(u,{width:14,height:14})):null)};var E=n(1875),p=n(2389);const k={toggle:"toggle_iYfV"},_=e=>{let{icon:t,style:n}=e;return a.createElement("span",{className:(0,r.Z)(k.toggle,k.dark),style:n},t)},Z=e=>{let{icon:t,style:n}=e;return a.createElement("span",{className:(0,r.Z)(k.toggle,k.light),style:n},t)},w=(0,a.memo)((e=>{let{className:t,icons:n,checked:l,disabled:o,onChange:c}=e;const[s,i]=(0,a.useState)(l),[m,d]=(0,a.useState)(!1),u=(0,a.useRef)(null);return a.createElement("div",{className:(0,r.Z)("react-toggle",t,{"react-toggle--checked":s,"react-toggle--focus":m,"react-toggle--disabled":o})},a.createElement("div",{className:"react-toggle-track",role:"button",tabIndex:-1,onClick:()=>u.current?.click()},a.createElement("div",{className:"react-toggle-track-check"},n.checked),a.createElement("div",{className:"react-toggle-track-x"},n.unchecked),a.createElement("div",{className:"react-toggle-thumb"})),a.createElement("input",{ref:u,checked:s,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:c,onClick:()=>i(!s),onFocus:()=>d(!0),onBlur:()=>d(!1),onKeyDown:e=>{"Enter"===e.key&&u.current?.click()}}))}));function N(e){const{colorMode:{switchConfig:{darkIcon:t,darkIconStyle:n,lightIcon:r,lightIconStyle:l}}}=(0,c.LU)(),o=(0,p.Z)();return a.createElement(w,(0,d.Z)({disabled:!o,icons:{checked:a.createElement(_,{icon:t,style:n}),unchecked:a.createElement(Z,{icon:r,style:l})}},e))}var y=n(5350),C=n(7898);const L=e=>{const t=(0,l.TH)(),[n,r]=(0,a.useState)(e),o=(0,a.useRef)(!1),[s,i]=(0,a.useState)(0),m=(0,a.useCallback)((e=>{null!==e&&i(e.getBoundingClientRect().height)}),[]);return(0,C.Z)(((t,n)=>{const a=t.scrollY,l=n?.scrollY;if(!e)return;if(a<s)return void r(!0);if(o.current)return o.current=!1,void r(!1);l&&0===a&&r(!0);const c=document.documentElement.scrollHeight-s,i=window.innerHeight;l&&a>=l?r(!1):a+i<c&&r(!0)}),[s,o]),(0,c.SL)((t=>{e&&!t.location.hash&&r(!0)})),(0,a.useEffect)((()=>{e&&t.hash&&(o.current=!0)}),[t.hash]),{navbarRef:m,isNavbarVisible:n}};const S=function(e){void 0===e&&(e=!0),(0,a.useEffect)((()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"})),[e])};var I=n(3783),T=n(907),D=n(7819),B=n(5537);const x=e=>{let{width:t=30,height:n=30,className:r,...l}=e;return a.createElement("svg",(0,d.Z)({className:r,width:t,height:n,viewBox:"0 0 30 30","aria-hidden":"true"},l),a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))};function A(e){let{width:t=20,height:n=20,className:r,...l}=e;return a.createElement("svg",(0,d.Z)({className:r,viewBox:"0 0 413.348 413.348",width:t,height:n,fill:"currentColor"},l),a.createElement("path",{d:"m413.348 24.354-24.354-24.354-182.32 182.32-182.32-182.32-24.354 24.354 182.32 182.32-182.32 182.32 24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z"}))}const M={toggle:"toggle_2i4l",navbarHideable:"navbarHideable_RReh",navbarHidden:"navbarHidden_FBwS",navbarSidebarToggle:"navbarSidebarToggle_AVbO",navbarSidebarCloseSvg:"navbarSidebarCloseSvg_+9jJ"},R="right";function U(){return(0,c.LU)().navbar.items}function H(){const{colorMode:{disableSwitch:e}}=(0,c.LU)(),{isDarkTheme:t,setLightTheme:n,setDarkTheme:r}=(0,y.Z)();return{isDarkTheme:t,toggle:(0,a.useCallback)((e=>e.target.checked?r():n()),[n,r]),disabled:e}}function V(e){let{sidebarShown:t,toggleSidebar:n}=e;S(t);const l=U(),s=H(),i=function(e){let{sidebarShown:t,toggleSidebar:n}=e;const r=(0,c.g8)()?.({toggleSidebar:n}),l=(0,c.D9)(r),[o,s]=(0,a.useState)((()=>!1));(0,a.useEffect)((()=>{r&&!l&&s(!0)}),[r,l]);const i=!!r;return(0,a.useEffect)((()=>{i?t||s(!0):s(!1)}),[t,i]),{shown:o,hide:(0,a.useCallback)((()=>{s(!1)}),[]),content:r}}({sidebarShown:t,toggleSidebar:n});return a.createElement("div",{className:"navbar-sidebar"},a.createElement("div",{className:"navbar-sidebar__brand"},a.createElement(B.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!s.disabled&&a.createElement(N,{className:M.navbarSidebarToggle,checked:s.isDarkTheme,onChange:s.toggle}),a.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__close",onClick:n},a.createElement(A,{width:20,height:20,className:M.navbarSidebarCloseSvg}))),a.createElement("div",{className:(0,r.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":i.shown})},a.createElement("div",{className:"navbar-sidebar__item menu"},a.createElement("ul",{className:"menu__list"},l.map(((e,t)=>a.createElement(D.Z,(0,d.Z)({mobile:!0},e,{onClick:n,key:t})))))),a.createElement("div",{className:"navbar-sidebar__item menu"},l.length>0&&a.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:i.hide},a.createElement(o.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),i.content)))}const P=function(){const{navbar:{hideOnScroll:e,style:t}}=(0,c.LU)(),n=function(){const e=(0,I.Z)(),t="mobile"===e,[n,r]=(0,a.useState)(!1);(0,c.Rb)((()=>{n&&r(!1)}));const l=(0,a.useCallback)((()=>{r((e=>!e))}),[]);return(0,a.useEffect)((()=>{"desktop"===e&&r(!1)}),[e]),{shouldRender:t,toggle:l,shown:n}}(),l=H(),o=(0,T.gA)(),{navbarRef:s,isNavbarVisible:i}=L(e),m=U(),u=m.some((e=>"search"===e.type)),{leftItems:h,rightItems:b}=function(e){return{leftItems:e.filter((e=>"left"===(e.position??R))),rightItems:e.filter((e=>"right"===(e.position??R)))}}(m);return a.createElement("nav",{ref:s,className:(0,r.Z)("navbar","navbar--fixed-top",{"navbar--dark":"dark"===t,"navbar--primary":"primary"===t,"navbar-sidebar--show":n.shown,[M.navbarHideable]:e,[M.navbarHidden]:e&&!i})},a.createElement("div",{className:"navbar__inner"},a.createElement("div",{className:"navbar__items"},(m?.length>0||o)&&a.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:n.toggle,onKeyDown:n.toggle},a.createElement(x,null)),a.createElement(B.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),h.map(((e,t)=>a.createElement(D.Z,(0,d.Z)({},e,{key:t}))))),a.createElement("div",{className:"navbar__items navbar__items--right"},b.map(((e,t)=>a.createElement(D.Z,(0,d.Z)({},e,{key:t})))),!l.disabled&&a.createElement(N,{className:M.toggle,checked:l.isDarkTheme,onChange:l.toggle}),!u&&a.createElement(E.Z,null))),a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:n.toggle}),n.shouldRender&&a.createElement(V,{sidebarShown:n.shown,toggleSidebar:n.toggle}))};var z=n(6742),$=n(4996),O=n(3919);const W="footerLogoLink_SRtH";var F=n(8465),G=n(8617);function Y(e){let{to:t,href:n,label:r,prependBaseUrlToHref:l,...o}=e;const c=(0,$.Z)(t),s=(0,$.Z)(n,{forcePrependBaseUrl:!0});return a.createElement(z.Z,(0,d.Z)({className:"footer__link-item"},n?{href:l?s:n}:{to:c},o),n&&!(0,O.Z)(n)?a.createElement("span",null,r,a.createElement(G.Z,null)):r)}const q=e=>{let{sources:t,alt:n}=e;return a.createElement(F.Z,{className:"footer__logo",alt:n,sources:t})};const J=function(){const{footer:e}=(0,c.LU)(),{copyright:t,links:n=[],logo:l={}}=e||{},o={light:(0,$.Z)(l.src),dark:(0,$.Z)(l.srcDark||l.src)};return e?a.createElement("footer",{className:(0,r.Z)("footer",{"footer--dark":"dark"===e.style})},a.createElement("div",{className:"container"},n&&n.length>0&&a.createElement("div",{className:"row footer__links"},n.map(((e,t)=>a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?a.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?a.createElement("ul",{className:"footer__items"},e.items.map(((e,t)=>e.html?a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):a.createElement("li",{key:e.href||e.to,className:"footer__item"},a.createElement(Y,e))))):null)))),(l||t)&&a.createElement("div",{className:"footer__bottom text--center"},l&&(l.src||l.srcDark)&&a.createElement("div",{className:"margin-bottom--sm"},l.href?a.createElement(z.Z,{href:l.href,className:W},a.createElement(q,{alt:l.alt,sources:o})):a.createElement(q,{alt:l.alt,sources:o})),t?a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:t}}):null))):null};var K=n(412);const j=(0,c.WA)("theme"),Q="light",X="dark",ee=e=>e===X?X:Q,te=e=>{(0,c.WA)("theme").set(ee(e))},ne=()=>{const{colorMode:{defaultMode:e,disableSwitch:t,respectPrefersColorScheme:n}}=(0,c.LU)(),[r,l]=(0,a.useState)((e=>K.Z.canUseDOM?ee(document.documentElement.getAttribute("data-theme")):ee(e))(e)),o=(0,a.useCallback)((()=>{l(Q),te(Q)}),[]),s=(0,a.useCallback)((()=>{l(X),te(X)}),[]);return(0,a.useEffect)((()=>{document.documentElement.setAttribute("data-theme",ee(r))}),[r]),(0,a.useEffect)((()=>{if(!t)try{const e=j.get();null!==e&&l(ee(e))}catch(e){console.error(e)}}),[l]),(0,a.useEffect)((()=>{t&&!n||window.matchMedia("(prefers-color-scheme: dark)").addListener((e=>{let{matches:t}=e;l(t?X:Q)}))}),[]),{isDarkTheme:r===X,setLightTheme:o,setDarkTheme:s}};var ae=n(2924);const re=function(e){const{isDarkTheme:t,setLightTheme:n,setDarkTheme:r}=ne();return a.createElement(ae.Z.Provider,{value:{isDarkTheme:t,setLightTheme:n,setDarkTheme:r}},e.children)},le="docusaurus.tab.",oe=()=>{const[e,t]=(0,a.useState)({}),n=(0,a.useCallback)(((e,t)=>{(0,c.WA)(`${le}${e}`).set(t)}),[]);return(0,a.useEffect)((()=>{try{const e={};(0,c._f)().forEach((t=>{if(t.startsWith(le)){const n=t.substring(15);e[n]=(0,c.WA)(t).get()}})),t(e)}catch(e){console.error(e)}}),[]),{tabGroupChoices:e,setTabGroupChoices:(e,a)=>{t((t=>({...t,[e]:a}))),n(e,a)}}},ce=(0,a.createContext)(void 0);const se=function(e){const{tabGroupChoices:t,setTabGroupChoices:n}=oe();return a.createElement(ce.Provider,{value:{tabGroupChoices:t,setTabGroupChoices:n}},e.children)};function ie(e){let{children:t}=e;return a.createElement(re,null,a.createElement(c.pl,null,a.createElement(se,null,a.createElement(c.L5,null,a.createElement(c.Cn,null,t)))))}var me=n(9105),de=n(2263);function ue(e){let{locale:t,version:n,tag:r}=e;return a.createElement(me.Z,null,t&&a.createElement("meta",{name:"docusaurus_locale",content:t}),n&&a.createElement("meta",{name:"docusaurus_version",content:n}),r&&a.createElement("meta",{name:"docusaurus_tag",content:r}))}var he=n(1217);function be(){const{i18n:{defaultLocale:e,locales:t}}=(0,de.Z)(),n=(0,c.l5)();return a.createElement(me.Z,null,t.map((e=>a.createElement("link",{key:e,rel:"alternate",href:n.createUrl({locale:e,fullyQualified:!0}),hrefLang:e}))),a.createElement("link",{rel:"alternate",href:n.createUrl({locale:e,fullyQualified:!0}),hrefLang:"x-default"}))}function ge(e){let{permalink:t}=e;const{siteConfig:{url:n}}=(0,de.Z)(),r=function(){const{siteConfig:{url:e}}=(0,de.Z)(),{pathname:t}=(0,l.TH)();return e+(0,$.Z)(t)}(),o=t?`${n}${t}`:r;return a.createElement(me.Z,null,a.createElement("meta",{property:"og:url",content:o}),a.createElement("link",{rel:"canonical",href:o}))}function ve(e){const{siteConfig:{favicon:t},i18n:{currentLocale:n,localeConfigs:r}}=(0,de.Z)(),{metadatas:l,image:o}=(0,c.LU)(),{title:s,description:i,image:m,keywords:u,searchMetadatas:h}=e,b=(0,$.Z)(t),g=(0,c.pe)(s),v=n,f=r[n].direction;return a.createElement(a.Fragment,null,a.createElement(me.Z,null,a.createElement("html",{lang:v,dir:f}),t&&a.createElement("link",{rel:"shortcut icon",href:b}),a.createElement("title",null,g),a.createElement("meta",{property:"og:title",content:g}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),o&&a.createElement(he.Z,{image:o}),m&&a.createElement(he.Z,{image:m}),a.createElement(he.Z,{description:i,keywords:u}),a.createElement(ge,null),a.createElement(be,null),a.createElement(ue,(0,d.Z)({tag:c.HX,locale:n},h)),a.createElement(me.Z,null,l.map(((e,t)=>a.createElement("meta",(0,d.Z)({key:`metadata_${t}`},e))))))}const fe=function(){(0,a.useEffect)((()=>{const e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),()=>{document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};const Ee=function(e){const{children:t,noFooter:n,wrapperClassName:l,pageClassName:o}=e;return fe(),a.createElement(ie,null,a.createElement(ve,e),a.createElement(m,null),a.createElement(f,null),a.createElement(P,null),a.createElement("div",{className:(0,r.Z)(c.kM.wrapper.main,l,o)},t),!n&&a.createElement(J,null))}},5537:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),l=n(6742),o=n(8465),c=n(4996),s=n(2263),i=n(941);const m=e=>{const{siteConfig:{title:t}}=(0,s.Z)(),{navbar:{title:n,logo:m={src:""}}}=(0,i.LU)(),{imageClassName:d,titleClassName:u,...h}=e,b=(0,c.Z)(m.href||"/"),g={light:(0,c.Z)(m.src),dark:(0,c.Z)(m.srcDark||m.src)};return r.createElement(l.Z,(0,a.Z)({to:b},h,m.target&&{target:m.target}),m.src&&r.createElement(o.Z,{className:d,sources:g,alt:m.alt||n||t}),null!=n&&r.createElement("b",{className:u},n))}},5525:(e,t,n)=>{n.d(t,{O:()=>u,Z:()=>g});var a=n(7462),r=n(7294),l=n(6010),o=n(6742),c=n(4996),s=n(8617),i=n(3919),m=n(7819);const d="dropdown__link--active";function u(e){let{activeBasePath:t,activeBaseRegex:n,to:l,href:m,label:u,activeClassName:h="",prependBaseUrlToHref:b,...g}=e;const v=(0,c.Z)(l),f=(0,c.Z)(t),E=(0,c.Z)(m,{forcePrependBaseUrl:!0}),p=u&&m&&!(0,i.Z)(m),k=h===d;return r.createElement(o.Z,(0,a.Z)({},m?{href:b?E:m}:{isNavLink:!0,activeClassName:g.className?.includes(h)?"":h,to:v,...t||n?{isActive:(e,t)=>n?new RegExp(n).test(t.pathname):t.pathname.startsWith(f)}:null},g),p?r.createElement("span",null,u,r.createElement(s.Z,k&&{width:12,height:12})):u)}function h(e){let{className:t,isDropdownItem:n=!1,...o}=e;const c=r.createElement(u,(0,a.Z)({className:(0,l.Z)(n?"dropdown__link":"navbar__item navbar__link",t)},o));return n?r.createElement("li",null,c):c}function b(e){let{className:t,isDropdownItem:n,...o}=e;return r.createElement("li",{className:"menu__list-item"},r.createElement(u,(0,a.Z)({className:(0,l.Z)("menu__link",t)},o)))}const g=function(e){let{mobile:t=!1,position:n,...l}=e;const o=t?b:h;return r.createElement(o,(0,a.Z)({},l,{activeClassName:l.activeClassName??(0,m.E)(t)}))}},6400:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),r=n(7294),l=n(5525),o=n(907),c=n(6010),s=n(7819),i=n(941),m=n(8780);function d(e){let{docId:t,label:n,docsPluginId:d,...u}=e;const{activeVersion:h,activeDoc:b}=(0,o.Iw)(d),{preferredVersion:g}=(0,i.J)(d),v=(0,o.yW)(d),f=function(e,t){const n=e.flatMap((e=>e.docs)),a=n.find((e=>e.id===t));if(!a){const a=n.map((e=>e.id)).join("\n- ");throw new Error(`DocNavbarItem: couldn't find any doc with id "${t}" in version${e.length?"s":""} ${e.map((e=>e.name)).join(", ")}".\nAvailable doc ids are:\n- ${a}`)}return a}((0,m.uniq)([h,g,v].filter(Boolean)),t),E=(0,s.E)(u.mobile);return r.createElement(l.Z,(0,a.Z)({exact:!0},u,{className:(0,c.Z)(u.className,{[E]:b?.sidebar&&b.sidebar===f.sidebar}),activeClassName:E,label:n??f.id,to:f.path}))}},9308:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),r=n(7294),l=n(5525),o=n(3154),c=n(907),s=n(941),i=n(4973);const m=e=>e.docs.find((t=>t.id===e.mainDocId));function d(e){let{mobile:t,docsPluginId:n,dropdownActiveClassDisabled:d,dropdownItemsBefore:u,dropdownItemsAfter:h,...b}=e;const g=(0,c.Iw)(n),v=(0,c.gB)(n),f=(0,c.yW)(n),{preferredVersion:E,savePreferredVersionName:p}=(0,s.J)(n);const k=function(){const e=v.map((e=>{const t=g?.alternateDocVersions[e.name]||m(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:()=>e===g?.activeVersion,onClick:()=>{p(e.name)}}}));return[...u,...e,...h]}(),_=g.activeVersion??E??f,Z=t&&k?(0,i.I)({id:"theme.navbar.mobileVersionsDropdown.label",message:"Versions",description:"The label for the navbar versions dropdown on mobile view"}):_.label,w=t&&k?void 0:m(_).path;return k.length<=1?r.createElement(l.Z,(0,a.Z)({},b,{mobile:t,label:Z,to:w,isActive:d?()=>!1:void 0})):r.createElement(o.Z,(0,a.Z)({},b,{mobile:t,label:Z,to:w,items:k,isActive:d?()=>!1:void 0}))}},7250:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7462),r=n(7294),l=n(5525),o=n(907),c=n(941);const s=e=>e.docs.find((t=>t.id===e.mainDocId));function i(e){let{label:t,to:n,docsPluginId:i,...m}=e;const d=(0,o.zu)(i),{preferredVersion:u}=(0,c.J)(i),h=(0,o.yW)(i),b=d??u??h,g=t??b.label,v=n??s(b).path;return r.createElement(l.Z,(0,a.Z)({},m,{label:g,to:v}))}},3154:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(7462),r=n(7294),l=n(6010),o=n(941),c=n(5525),s=n(7819);const i="dropdown__link--active";function m(e,t){return e.some((e=>function(e,t){return!!(0,o.Mg)(e.to,t)||!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath))}(e,t)))}function d(e){let{items:t,position:n,className:o,...m}=e;const d=(0,r.useRef)(null),u=(0,r.useRef)(null),[h,b]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{const e=e=>{d.current&&!d.current.contains(e.target)&&b(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[d]),r.createElement("div",{ref:d,className:(0,l.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--right":"right"===n,"dropdown--show":h})},r.createElement(c.O,(0,a.Z)({className:(0,l.Z)("navbar__link",o)},m,{onClick:m.to?void 0:e=>e.preventDefault(),onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),b(!h))}}),m.children??m.label),r.createElement("ul",{ref:u,className:"dropdown__menu"},t.map(((e,n)=>r.createElement(s.Z,(0,a.Z)({isDropdownItem:!0,onKeyDown:e=>{if(n===t.length-1&&"Tab"===e.key){e.preventDefault(),b(!1);const t=d.current.nextElementSibling;t&&t.focus()}},activeClassName:i},e,{key:n}))))))}function u(e){let{items:t,className:n,position:i,...d}=e;const u=(0,o.be)(),h=m(t,u),{collapsed:b,toggleCollapsed:g,setCollapsed:v}=(0,o.uR)({initialState:()=>!h});return(0,r.useEffect)((()=>{h&&v(!h)}),[u,h]),r.createElement("li",{className:(0,l.Z)("menu__list-item",{"menu__list-item--collapsed":b})},r.createElement(c.O,(0,a.Z)({role:"button",className:(0,l.Z)("menu__link menu__link--sublist",n)},d,{onClick:e=>{e.preventDefault(),g()}}),d.children??d.label),r.createElement(o.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:b},t.map(((e,t)=>r.createElement(s.Z,(0,a.Z)({mobile:!0,isDropdownItem:!0,onClick:d.onClick,activeClassName:"menu__link--active"},e,{key:t}))))))}const h=function(e){let{mobile:t=!1,...n}=e;const a=t?u:d;return r.createElement(a,n)}},7819:(e,t,n)=>{n.d(t,{Z:()=>f,E:()=>v});var a=n(7294),r=n(5525),l=n(3154),o=n(7462);const c=e=>{let{width:t=20,height:n=20,...r}=e;return a.createElement("svg",(0,o.Z)({viewBox:"0 0 20 20",width:t,height:n,"aria-hidden":"true"},r),a.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))};var s=n(2263),i=n(941);const m="iconLanguage_EbrZ";function d(e){let{mobile:t,dropdownItemsBefore:n,dropdownItemsAfter:r,...d}=e;const{i18n:{currentLocale:u,locales:h,localeConfigs:b}}=(0,s.Z)(),g=(0,i.l5)();function v(e){return b[e].label}const f=[...n,...h.map((e=>{const t=`pathname://${g.createUrl({locale:e,fullyQualified:!1})}`;return{isNavLink:!0,label:v(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===u?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),...r],E=t?"Languages":v(u);return a.createElement(l.Z,(0,o.Z)({},d,{href:"#",mobile:t,label:a.createElement("span",null,a.createElement(c,{className:m}),a.createElement("span",null,E)),items:f}))}var u=n(1875);function h(e){let{mobile:t}=e;return t?null:a.createElement(u.Z,null)}const b={default:()=>r.Z,localeDropdown:()=>d,search:()=>h,dropdown:()=>l.Z,docsVersion:()=>n(7250).Z,docsVersionDropdown:()=>n(9308).Z,doc:()=>n(6400).Z},g=e=>{const t=b[e];if(!t)throw new Error(`No NavbarItem component found for type "${e}".`);return t()};const v=e=>e?"menu__link--active":"navbar__link--active";function f(e){let{type:t,...n}=e;const r=function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==n.items),l=g(r);return a.createElement(l,n)}},2924:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n(7294).createContext(void 0)},8465:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7462),r=n(7294),l=n(6010),o=n(2389),c=n(5350);const s={themedImage:"themedImage_TMUO","themedImage--light":"themedImage--light_4Vu1","themedImage--dark":"themedImage--dark_uzRr"},i=e=>{const t=(0,o.Z)(),{isDarkTheme:n}=(0,c.Z)(),{sources:i,className:m,alt:d="",...u}=e,h=t?n?["dark"]:["light"]:["light","dark"];return r.createElement(r.Fragment,null,h.map((e=>r.createElement("img",(0,a.Z)({key:e,src:i[e],alt:d,className:(0,l.Z)(s.themedImage,s[`themedImage--${e}`],m)},u)))))}},7898:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(412);const l=()=>r.Z.canUseDOM?{scrollX:window.pageXOffset,scrollY:window.pageYOffset}:null,o=function(e,t){void 0===t&&(t=[]);const n=(0,a.useRef)(l()),r=()=>{const t=l();e&&e(t,n.current),n.current=t};(0,a.useEffect)((()=>{const e={passive:!0};return r(),window.addEventListener("scroll",r,e),()=>window.removeEventListener("scroll",r,e)}),t)}},5350:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(2924);const l=function(){const e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}}}]);