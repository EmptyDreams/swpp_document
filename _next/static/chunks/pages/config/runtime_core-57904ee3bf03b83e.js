(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[871],{1127:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/config/runtime_core",function(){return n(1804)}])},1804:function(e,s,n){"use strict";n.r(s),n.d(s,{__toc:function(){return o}});var r=n(2676),l=n(5383),i=n(1993);let o=[{depth:2,value:"handleEscape",id:"handleescape"},{depth:2,value:"handleUpdate",id:"handleupdate"},{depth:2,value:"handleFetchEvent",id:"handlefetchevent"}];function t(e){let s=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",pre:"pre",span:"span",ul:"ul",li:"li"},(0,i.a)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{children:"运行时核心代码"}),"\n",(0,r.jsxs)(s.p,{children:["  该配置项用于放置所有核心功能函数，用法与 ",(0,r.jsx)(s.a,{href:"/config/runtime_dep",children:"运行时函数依赖"})," 相同。"]}),"\n",(0,r.jsx)(s.p,{children:"  该配置项与运行时函数依赖不同的是两者的定位，函数依赖中主要放置一些简单的工具函数，而运行时核心代码则放置一些核心代码。 默认情况下，核心代码也将被插入到函数依赖的后面，在一些特殊情况下可以避免一些声明顺序导致的问题。"}),"\n",(0,r.jsx)(s.p,{children:"  请注意：除非您知道您在做什么，否则不要修改该分类下的内容！！！"}),"\n",(0,r.jsx)(s.h2,{id:"handleescape",children:"handleEscape"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{align:"center",children:"类型"}),(0,r.jsx)(s.th,{align:"left",children:"说明"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{align:"center",children:(0,r.jsx)(s.code,{children:"() => Promise<void>"})}),(0,r.jsx)(s.td,{align:"left",children:"逃生门的实现"})]})})]}),"\n",(0,r.jsx)(s.p,{children:"  该项用于实现逃生门，默认实现如下："}),"\n",(0,r.jsx)(s.pre,{"data-language":"typescript","data-theme":"default",children:(0,r.jsxs)(s.code,{"data-language":"typescript","data-theme":"default",children:[(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// noinspection TypeScriptUnresolvedReference"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"async"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ()"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Promise"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"void"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"> "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"oldVersion"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"await"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"readVersion"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"ESCAPE"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"&&"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" oldVersion "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"&&"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"oldVersion"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:".escape "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"!=="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"ESCAPE"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:") {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"await"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"caches"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".delete"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"CACHE_NAME"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"await"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"postMessage"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'escape'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"null"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:" "}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// 消除 IDE 报错"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"let"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"readVersion"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" () "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Promise"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"BrowserVersion"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"undefined"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"let"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"ESCAPE"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"number"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"let"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"CACHE_NAME"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"string"})]})]})}),"\n",(0,r.jsx)(s.h2,{id:"handleupdate",children:"handleUpdate"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{align:"center",children:"类型"}),(0,r.jsx)(s.th,{align:"left",children:"说明"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{align:"center",children:(0,r.jsx)(s.code,{children:"(oldVersion: BrowserVersion | undefined, force?: boolean) => Promise<1 | -1 | 2 | undefined | null | void | string[]>"})}),(0,r.jsx)(s.td,{align:"left",children:"增量更新功能"})]})})]}),"\n",(0,r.jsxs)(s.p,{children:["  具体实现 ",(0,r.jsx)(s.a,{href:"https://github.com/EmptyDreams/swpp-backends/blob/v3/src/swpp/database/RuntimeCoreCode.ts",children:"参照源码"}),"，该函数参数及返回值的解释如下："]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"oldVersion"}),": 更新前客户端的版本号。"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"force"}),": 是否强制更新，为 ",(0,r.jsx)(s.code,{children:"false"})," 时如果两次更新的时间小于阈值，则不会进行更新。"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"return"}),": 标记缓存是否更新，-1 表示新访客，1 标记仅更新版本号，2 表示更新了缓存，string[] 表示更新了部分缓存，否则表示没有进行任何更新。"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"handlefetchevent",children:"handleFetchEvent"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{align:"center",children:"类型"}),(0,r.jsx)(s.th,{align:"left",children:"说明"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{align:"center",children:(0,r.jsx)(s.code,{children:"(event: FetchEvent) => any"})}),(0,r.jsx)(s.td,{align:"left",children:"处理网络请求事件"})]})})]}),"\n",(0,r.jsxs)(s.p,{children:["  具体实现 ",(0,r.jsx)(s.a,{href:"https://github.com/EmptyDreams/swpp-backends/blob/v3/src/swpp/database/RuntimeCoreCode.ts",children:"参照源码"}),"。"]})]})}s.default=(0,l.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,i.a)(),e.components);return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(t,{...e})}):t(e)},pageOpts:{filePath:"pages/config/runtime_core.mdx",route:"/config/runtime_core",timestamp:1728822116e3,title:"运行时核心代码",headings:o},pageNextRoute:"/config/runtime_core"})}},function(e){e.O(0,[383,888,774,179],function(){return e(e.s=1127)}),_N_E=e.O()}]);