"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[1511],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=p(r),f=n,m=l["".concat(c,".").concat(f)]||l[f]||d[f]||s;return r?a.createElement(m,o(o({ref:t},u),{},{components:r})):a.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[l]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<s;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9910:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const s={sidebar_label:"Pure JavaScript",sidebar_position:2},o="Use MetaMask SDK with pure JavaScript",i={unversionedId:"how-to/use-sdk/javascript/pure-js",id:"how-to/use-sdk/javascript/pure-js",title:"Use MetaMask SDK with pure JavaScript",description:"You can import MetaMask SDK into your pure JavaScript dapp to enable your users to easily connect",source:"@site/wallet/how-to/use-sdk/javascript/pure-js.md",sourceDirName:"how-to/use-sdk/javascript",slug:"/how-to/use-sdk/javascript/pure-js",permalink:"/zs/fix-cards/wallet/how-to/use-sdk/javascript/pure-js",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Pure JavaScript",sidebar_position:2},sidebar:"walletSidebar",previous:{title:"React",permalink:"/zs/fix-cards/wallet/how-to/use-sdk/javascript/react"},next:{title:"Other web frameworks",permalink:"/zs/fix-cards/wallet/how-to/use-sdk/javascript/other-web-frameworks"}},c={},p=[],u={toc:p};function l(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"use-metamask-sdk-with-pure-javascript"},"Use MetaMask SDK with pure JavaScript"),(0,n.kt)("p",null,"You can import MetaMask SDK into your pure JavaScript dapp to enable your users to easily connect\nwith a MetaMask wallet client.\nThe SDK for pure JavaScript ",(0,n.kt)("a",{parentName:"p",href:"/zs/fix-cards/wallet/#how-it-works"},"works the same way")," and has the\n",(0,n.kt)("a",{parentName:"p",href:"/zs/fix-cards/wallet/#prerequisites"},"same prerequisites")," as for standard JavaScript."),(0,n.kt)("p",null,"To import, instantiate, and use the SDK, you can insert a script in the head section of your website:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"<head>\n...\n\n<script src=\"https://c0f4f41c-2f55-4863-921b-sdk-docs.github.io/cdn/metamask-sdk.js\"><\/script>\n\n<script>\n\n    const MMSDK = new MetaMaskSDK()\n\n    const ethereum = MMSDK.getProvider() // You can also access via window.ethereum\n\n    ethereum.request({method: 'eth_requestAccounts'})\n\n<\/script>\n\n...\n</head>\n")),(0,n.kt)("p",null,"You can configure the SDK using any ",(0,n.kt)("a",{parentName:"p",href:"/zs/fix-cards/wallet/reference/sdk-js-options"},"options")," and call any\n",(0,n.kt)("a",{parentName:"p",href:"/zs/fix-cards/wallet/reference/provider-api"},"provider API methods"),".\nAlways call ",(0,n.kt)("a",{parentName:"p",href:"/zs/fix-cards/wallet/reference/rpc-api#eth_requestaccounts"},(0,n.kt)("inlineCode",{parentName:"a"},"eth_requestAccounts"))," using\n",(0,n.kt)("a",{parentName:"p",href:"/zs/fix-cards/wallet/reference/provider-api#windowethereumrequestargs"},(0,n.kt)("inlineCode",{parentName:"a"},"ethereum.request(args)"))," first,\nsince it prompts the installation or connection popup to appear."))}l.isMDXComponent=!0}}]);