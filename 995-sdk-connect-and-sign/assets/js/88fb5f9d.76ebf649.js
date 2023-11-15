"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[2124],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(r),k=a,f=p["".concat(s,".").concat(k)]||p[k]||u[k]||o;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},45306:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:1},i="Set up MetaMask SDK",l={unversionedId:"how-to/connect/set-up-sdk/index",id:"how-to/connect/set-up-sdk/index",title:"Set up MetaMask SDK",description:"MetaMask SDK is a library that provides a reliable, secure, and seamless",source:"@site/wallet/how-to/connect/set-up-sdk/index.md",sourceDirName:"how-to/connect/set-up-sdk",slug:"/how-to/connect/set-up-sdk/",permalink:"/995-sdk-connect-and-sign/wallet/how-to/connect/set-up-sdk/",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/connect/set-up-sdk/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"walletSidebar",previous:{title:"Connect to MetaMask",permalink:"/995-sdk-connect-and-sign/wallet/how-to/connect"},next:{title:"JavaScript",permalink:"/995-sdk-connect-and-sign/wallet/how-to/connect/set-up-sdk/javascript/"}},s={},c=[],d={toc:c},p="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"set-up-metamask-sdk"},"Set up MetaMask SDK"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/995-sdk-connect-and-sign/wallet/concepts/sdk/"},"MetaMask SDK")," is a library that provides a reliable, secure, and seamless\nconnection from your dapp to the MetaMask browser extension and MetaMask Mobile.\nIt supports the following dapp platforms:"),(0,a.kt)("div",{class:"cards"},(0,a.kt)("div",{class:"card"},(0,a.kt)("div",{class:"card__header"},(0,a.kt)("h3",null,"\ud83d\udcbb ",(0,a.kt)("a",{href:"javascript"},"JavaScript"))),(0,a.kt)("div",{class:"card__body"},(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("a",{href:"javascript/react"},"React")),(0,a.kt)("li",null,(0,a.kt)("a",{href:"javascript/pure-js"},"Pure JavaScript")),(0,a.kt)("li",null,(0,a.kt)("a",{href:"javascript/other-web-frameworks"},"Other web frameworks")),(0,a.kt)("li",null,(0,a.kt)("a",{href:"javascript/react-native"},"React Native")),(0,a.kt)("li",null,(0,a.kt)("a",{href:"javascript/nodejs"},"Node.js")),(0,a.kt)("li",null,(0,a.kt)("a",{href:"javascript/electron"},"Electron"))))),(0,a.kt)("div",{class:"card"},(0,a.kt)("div",{class:"card__header"},(0,a.kt)("h3",null,"\ud83d\udcf1 ",(0,a.kt)("a",{href:"mobile"},"Mobile"))),(0,a.kt)("div",{class:"card__body"},(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("a",{href:"javascript/react-native"},"React Native")),(0,a.kt)("li",null,(0,a.kt)("a",{href:"mobile/ios"},"iOS")),(0,a.kt)("li",null,(0,a.kt)("a",{href:"mobile/android"},"Android"))))),(0,a.kt)("div",{class:"card"},(0,a.kt)("div",{class:"card__header"},(0,a.kt)("h3",null,"\ud83c\udfae ",(0,a.kt)("a",{href:"gaming"},"Gaming"))),(0,a.kt)("div",{class:"card__body"},(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("a",{href:"gaming/unity"},"Unity")),(0,a.kt)("li",null,(0,a.kt)("a",{href:"gaming/unreal-engine"},"Unreal Engine")," (coming soon)"))))),(0,a.kt)("div",{class:"card margin-bottom--lg"},(0,a.kt)("div",{class:"card__header"},(0,a.kt)("h3",null,"\u2194\ufe0f ",(0,a.kt)("a",{href:"../../use-3rd-party-integrations"},"Third-party integrations"))),(0,a.kt)("div",{class:"card__body"},(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("a",{href:"../../use-3rd-party-integrations/web3-onboard"},"Web3-Onboard")),(0,a.kt)("li",null,"Wagmi (coming soon)")))))}u.isMDXComponent=!0}}]);