"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[6325],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},57381:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={},l="Function: buildHandlersChain()",o={unversionedId:"reference/keyring-api/functions/buildHandlersChain",id:"reference/keyring-api/functions/buildHandlersChain",title:"Function: buildHandlersChain()",description:"Build a chain of handlers for a JSON-RPC request.",source:"@site/snaps/reference/keyring-api/functions/buildHandlersChain.md",sourceDirName:"reference/keyring-api/functions",slug:"/reference/keyring-api/functions/buildHandlersChain",permalink:"/ACT-996-int-infura-pages/snaps/reference/keyring-api/functions/buildHandlersChain",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/reference/keyring-api/functions/buildHandlersChain.md",tags:[],version:"current",frontMatter:{},sidebar:"snapsSidebar",previous:{title:"Variable: SubmitRequestResponseStruct",permalink:"/ACT-996-int-infura-pages/snaps/reference/keyring-api/variables/SubmitRequestResponseStruct"},next:{title:"Function: handleKeyringRequest()",permalink:"/ACT-996-int-infura-pages/snaps/reference/keyring-api/functions/handleKeyringRequest"}},s={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Source",id:"source",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"function-buildhandlerschain"},"Function: buildHandlersChain()"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"buildHandlersChain(...handlers): OnRpcRequestHandler\n")),(0,a.kt)("p",null,"Build a chain of handlers for a JSON-RPC request."),(0,a.kt)("p",null,"If a handler throws a MethodNotSupportedError, the next handler in the chain\nis called. If all handlers throw a MethodNotSupportedError, the error is re-\nthrown."),(0,a.kt)("p",null,"Any other error thrown by a handler is re-thrown."),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"...",(0,a.kt)("inlineCode",{parentName:"td"},"handlers")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"OnRpcRequestHandler"),"<",(0,a.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,a.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"Json"),">"," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"Json"),"[]",">","[]"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Handlers to chain.")))),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("p",null,"A handler that chains the given handlers."),(0,a.kt)("h2",{id:"source"},"Source"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/keyring-api/blob/1c8eeb9/src/keyring-rpc-dispatcher.ts#L45"},"external/keyring-api/src/keyring-rpc-dispatcher.ts:45")))}d.isMDXComponent=!0}}]);