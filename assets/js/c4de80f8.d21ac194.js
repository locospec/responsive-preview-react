"use strict";(self.webpackChunkapps_docs=self.webpackChunkapps_docs||[]).push([[777],{3124:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"install","title":"Installation","description":"Run the following command to install the package:","source":"@site/docs/install.md","sourceDirName":".","slug":"/install","permalink":"/docs/install","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/install.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","next":{"title":"ChildPreview","permalink":"/docs/child-preview"}}');var r=t(4848),i=t(1184);const o={sidebar_position:1},c="Installation",l={},a=[{value:"Preview Child Component",id:"preview-child-component",level:2},{value:"Preview IFrame",id:"preview-iframe",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"installation",children:"Installation"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Run the following command to install the package:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install @locospec/responsive-preview-react\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Import the styles in your project:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'@import "@locospec/responsive-preview-react/styles.css";\n'})}),"\n",(0,r.jsx)(n.p,{children:"Note: You can also use yarn, pnpm etc.,"}),"\n",(0,r.jsx)(n.h2,{id:"preview-child-component",children:"Preview Child Component"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'import { ChildPreview } from "@locospec/responsive-preview-react";\n\nfunction App() {\n  return (\n    <ChildPreview>\n      <Child />\n    </ChildPreview>\n  );\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"<Child />"})," is any component, but for responsive to work properly, it should be a responsive component. You might use container queries of Tailwind to implement such a component."]}),"\n",(0,r.jsx)(n.h2,{id:"preview-iframe",children:"Preview IFrame"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'import { IFramePreview } from "@locospec/responsive-preview-react";\n\nfunction App() {\n  return <IFramePreview srcUrl="https://example.com" />;\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Every website doesn't support embedding into an iframe. If you see a blank screen, it's likely that the website has disabled embedding."})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1184:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var s=t(6540);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);