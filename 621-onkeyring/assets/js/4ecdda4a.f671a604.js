"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[2250],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},m="mdxType",l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(t),f=a,g=m["".concat(s,".").concat(f)]||m[f]||l[f]||i;return t?r.createElement(g,o(o({ref:n},u),{},{components:t})):r.createElement(g,o({ref:n},u))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[m]="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},32029:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const i={description:"See the Keyring API reference.",sidebar_position:6,tags:["Keyring API"]},o="Keyring API",c={unversionedId:"reference/keyring-api/index",id:"reference/keyring-api/index",title:"Keyring API",description:"See the Keyring API reference.",source:"@site/snaps/reference/keyring-api/index.md",sourceDirName:"reference/keyring-api",slug:"/reference/keyring-api/",permalink:"/621-onkeyring/snaps/reference/keyring-api/",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/reference/keyring-api/index.md",tags:[{label:"Keyring API",permalink:"/621-onkeyring/snaps/tags/keyring-api"}],version:"current",sidebarPosition:6,frontMatter:{description:"See the Keyring API reference.",sidebar_position:6,tags:["Keyring API"]},sidebar:"snapsSidebar",previous:{title:"Snaps known errors",permalink:"/621-onkeyring/snaps/reference/known-errors"},next:{title:"Account Management API",permalink:"/621-onkeyring/snaps/reference/keyring-api/account-management/"}},s={},p=[],u={toc:p},m="wrapper";function l(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"keyring-api"},"Keyring API"),(0,a.kt)("p",null,"This section provides a detailed reference on the Keyring API methods, objects, and events that\nenable ",(0,a.kt)("a",{parentName:"p",href:"/621-onkeyring/snaps/features/custom-evm-accounts/"},"custom EVM accounts"),".\nThe Keyring API consists of:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/621-onkeyring/snaps/reference/keyring-api/account-management/"},(0,a.kt)("strong",{parentName:"a"},"Account Management API"))," \u2013 An API for dapps to communicate with\naccount management Snaps.\nDapps can manage accounts and signature requests using this API."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/621-onkeyring/snaps/reference/keyring-api/chain-methods"},(0,a.kt)("strong",{parentName:"a"},"Chain Methods API"))," - An API that contains chain-specific EVM methods that\naccount management Snaps can choose to implement to support dapp requests from custom accounts.")),(0,a.kt)("admonition",{title:"See also",type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/621-onkeyring/snaps/features/custom-evm-accounts/create-account-snap"},"Create an account management Snap"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/621-onkeyring/snaps/features/custom-evm-accounts/security"},"Account management Snap security guidelines")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/621-onkeyring/snaps/features/custom-evm-accounts/create-companion-dapp"},"Create an account management companion dapp")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/621-onkeyring/snaps/features/custom-evm-accounts/"},"Custom EVM accounts")))))}l.isMDXComponent=!0}}]);