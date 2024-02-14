"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[6254],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(t),d=i,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||r;return t?a.createElement(h,o(o({ref:n},c),{},{components:t})):a.createElement(h,o({ref:n},c))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=d;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[m]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},49619:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=t(87462),i=(t(67294),t(3905));const r={description:"Use a custom user interface.",sidebar_position:4},o="Use custom UI",s={unversionedId:"how-to/use-custom-ui",id:"how-to/use-custom-ui",title:"Use custom UI",description:"Use a custom user interface.",source:"@site/snaps/how-to/use-custom-ui.md",sourceDirName:"how-to",slug:"/how-to/use-custom-ui",permalink:"/zs/snap-getfile/snaps/how-to/use-custom-ui",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/how-to/use-custom-ui.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"Use a custom user interface.",sidebar_position:4},sidebar:"snapsSidebar",previous:{title:"Manage keys",permalink:"/zs/snap-getfile/snaps/how-to/manage-keys"},next:{title:"Localize a Snap",permalink:"/zs/snap-getfile/snaps/how-to/localize-a-snap"}},p={},l=[{value:"Components",id:"components",level:2},{value:"<code>copyable</code>",id:"copyable",level:3},{value:"<code>divider</code>",id:"divider",level:3},{value:"<code>heading</code>",id:"heading",level:3},{value:"<code>image</code>",id:"image",level:3},{value:"<code>panel</code>",id:"panel",level:3},{value:"<code>spinner</code>",id:"spinner",level:3},{value:"<code>text</code>",id:"text",level:3},{value:"Markdown",id:"markdown",level:2},{value:"Emoji",id:"emoji",level:2}],c={toc:l},m="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(m,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"use-custom-ui"},"Use custom UI"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/zs/snap-getfile/snaps/reference/snaps-api#snap_dialog"},(0,i.kt)("inlineCode",{parentName:"a"},"snap_dialog"))," RPC method and\n",(0,i.kt)("a",{parentName:"p",href:"/zs/snap-getfile/snaps/reference/entry-points#ontransaction"},(0,i.kt)("inlineCode",{parentName:"a"},"onTransaction"))," entry point use the\n",(0,i.kt)("inlineCode",{parentName:"p"},"@metamask/snaps-ui")," module to display custom user interface (UI) components."),(0,i.kt)("p",null,"To use custom UI, first install ",(0,i.kt)("inlineCode",{parentName:"p"},"@metamask/snaps-ui")," using the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @metamask/snaps-ui\n")),(0,i.kt)("p",null,"Then, whenever you're required to return a custom UI component, import the components from the\npackage and build your UI with them.\nFor example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { panel, heading, text } from '@metamask/snaps-ui';\n\n// ...\n\nconst content = panel([\n  heading('Alert heading'),\n  text('Something happened in the system.'),\n]);\n\nreturn content;\n")),(0,i.kt)("h2",{id:"components"},"Components"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"NodeType")," enum exported by ",(0,i.kt)("inlineCode",{parentName:"p"},"@metamask/snaps-ui")," details the available components."),(0,i.kt)("h3",{id:"copyable"},(0,i.kt)("inlineCode",{parentName:"h3"},"copyable")),(0,i.kt)("p",null,"Outputs a read-only text field with a copy-to-clipboard shortcut."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { copyable } from '@metamask/snaps-ui';\n\n// ...\n\nconst content = copyable('Text to be copied');\n")),(0,i.kt)("h3",{id:"divider"},(0,i.kt)("inlineCode",{parentName:"h3"},"divider")),(0,i.kt)("p",null,"Outputs a horizontal divider."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { panel, divider, text } from '@metamask/snaps-ui';\n\n// ...\n\nconst content = panel([\n  text('Text before the divider'),\n  divider(),\n  text('Text after the divider'),\n]);\n")),(0,i.kt)("h3",{id:"heading"},(0,i.kt)("inlineCode",{parentName:"h3"},"heading")),(0,i.kt)("p",null,"Outputs a heading.\nThis is useful for ",(0,i.kt)("a",{parentName:"p",href:"#panel"},"panel")," titles."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { panel, heading, text } from '@metamask/snaps-ui';\n\n// ...\n\nconst content = panel([\n  heading('Title of the panel'),\n  text('Text of the panel'),\n]);\n")),(0,i.kt)("h3",{id:"image"},(0,i.kt)("inlineCode",{parentName:"h3"},"image")),(0,i.kt)("p",null,"Outputs an image.\nThis component takes an inline SVG.\nIt does not support remote URLs.\nYou can embed JPG or PNG in SVG using data URIs.\nThe SVG is rendered within an \\<img",">"," tag, which prevents JavaScript or interaction events from being supported."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'import { image } from \'@metamask/snaps-ui\';\n\n// ...\n\nconst content = image(\'<svg width="400" height="400" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m2.514 17.874 9 5c.021.011.043.016.064.026s.051.021.078.031a.892.892 0 0 0 .688 0c.027-.01.052-.019.078-.031s.043-.015.064-.026l9-5A1 1 0 0 0 22 16.9L21 7V2a1 1 0 0 0-1.625-.781L14.649 5h-5.3L4.625 1.219A1 1 0 0 0 3 2v4.9l-1 10a1 1 0 0 0 .514.974ZM5 7V4.081l3.375 2.7A1 1 0 0 0 9 7h6a1 1 0 0 0 .625-.219L19 4.079V7.1l.934 9.345L13 20.3v-2.967l1.42-.946A1.3 1.3 0 0 0 15 15.3a1.3 1.3 0 0 0-1.3-1.3h-3.4A1.3 1.3 0 0 0 9 15.3a1.3 1.3 0 0 0 .58 1.084l1.42.946v2.97l-6.94-3.855Zm3.5 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2Zm5-2a2 2 0 1 1 2 2 2 2 0 0 1-2-2Z"/></svg>\');\n')),(0,i.kt)("h3",{id:"panel"},(0,i.kt)("inlineCode",{parentName:"h3"},"panel")),(0,i.kt)("p",null,"Outputs a panel, which can be used as a container for other components."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { panel, heading, text } from '@metamask/snaps-ui';\n\n// ...\n\nconst insights = [\n  /*...*/\n];\nconst content = panel([\n  heading('Here are the transaction insights'),\n  ...insights.map((insight) => text(insight.description)),\n]);\n")),(0,i.kt)("h3",{id:"spinner"},(0,i.kt)("inlineCode",{parentName:"h3"},"spinner")),(0,i.kt)("p",null,"Outputs a loading indicator."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { panel, heading, spinner } from '@metamask/snaps-ui';\n\n// ...\n\nconst content = panel([heading('Please wait...'), spinner()]);\n")),(0,i.kt)("h3",{id:"text"},(0,i.kt)("inlineCode",{parentName:"h3"},"text")),(0,i.kt)("p",null,"Outputs text."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { text } from '@metamask/snaps-ui';\n\n// ...\n\nconst content = text('This is a simple text UI');\n")),(0,i.kt)("h2",{id:"markdown"},"Markdown"),(0,i.kt)("p",null,"Text-based components accept a very small subset of inline Markdown: ",(0,i.kt)("inlineCode",{parentName:"p"},"**bold**")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"_italic_"),".\nThis subset will be increased in the future."),(0,i.kt)("h2",{id:"emoji"},"Emoji"),(0,i.kt)("p",null,"Text-based components accept emoji."))}u.isMDXComponent=!0}}]);