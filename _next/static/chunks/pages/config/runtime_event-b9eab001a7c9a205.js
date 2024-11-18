(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[563],{4834:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/config/runtime_event",function(){return n(7804)}])},7804:function(e,s,n){"use strict";n.r(s),n.d(s,{__toc:function(){return o}});var l=n(2676),r=n(5384),i=n(7532);let o=[{depth:2,value:"install",id:"install"},{depth:2,value:"activate",id:"activate"},{depth:2,value:"fetch",id:"fetch"},{depth:2,value:"periodicSync",id:"periodicsync"},{depth:2,value:"message",id:"message"}];function t(e){let s=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",span:"span",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a"},(0,i.a)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.h1,{children:"运行时事件"}),"\n",(0,l.jsx)(s.p,{children:"  该配置项用于在 sw 中注册指定的事件，可以和 SwppConfigRuntimeDep 一样引用运行时的内容。"}),"\n",(0,l.jsxs)(s.p,{children:["  对于每一项配置 ",(0,l.jsx)(s.code,{children:"<KEY>: <function>"}),"：",(0,l.jsx)(s.code,{children:"<KEY>"})," 是事件名，",(0,l.jsx)(s.code,{children:"<function>"})," 是事件执行体。"]}),"\n",(0,l.jsx)(s.p,{children:"  请注意：除非您知道您在做什么，否则不要修改该分类下的内容！！！"}),"\n",(0,l.jsx)(s.p,{children:"例："}),"\n",(0,l.jsx)(s.pre,{"data-language":"typescript","data-theme":"default",children:(0,l.jsxs)(s.code,{"data-language":"typescript","data-theme":"default",children:[(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// noinspection TypeScriptUnresolvedReference"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {defineRuntimeEvent} "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'swpp-backends'"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:" "}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// 该代码将在 sw. js 中插入事件注册代码"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// self.addEventListener('fetch', event => {"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"//     // do something"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// })"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// 注意：编写 TS 时可能会遇到 FetchEvent 类型找不到的问题，"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// 这个问题暂时没有特别好的解决方案，把类型改成 any 或者 Event 然后用 @ts-ignore 忽略错误即可。"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:" "}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// noinspection JSUnusedLocalSymbols"})}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"defineRuntimeEvent"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"fetch"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (event"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"FetchEvent"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// do something"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"})"})})]})}),"\n",(0,l.jsx)(s.h2,{id:"install",children:"install"}),"\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{align:"center",children:"类型"}),(0,l.jsx)(s.th,{align:"left",children:"说明"})]})}),(0,l.jsx)(s.tbody,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{align:"center",children:(0,l.jsx)(s.code,{children:"(event: InstallEvent) => void"})}),(0,l.jsx)(s.td,{align:"left",children:"安装事件"})]})})]}),"\n",(0,l.jsxs)(s.p,{children:["  事件的解释见：",(0,l.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/install_event",children:"install event | MDN"}),"。"]}),"\n",(0,l.jsx)(s.p,{children:"  默认实现如下："}),"\n",(0,l.jsx)(s.pre,{"data-language":"typescript","data-theme":"default",children:(0,l.jsxs)(s.code,{"data-language":"typescript","data-theme":"default",children:[(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// noinspection TypeScriptUnresolvedReference"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(_event"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"InstallEvent"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"skipWaiting"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,l.jsx)(s.h2,{id:"activate",children:"activate"}),"\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{align:"center",children:"类型"}),(0,l.jsx)(s.th,{align:"left",children:"说明"})]})}),(0,l.jsx)(s.tbody,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{align:"center",children:(0,l.jsx)(s.code,{children:"(event: ExtendableEvent) => void"})}),(0,l.jsx)(s.td,{align:"left",children:"激活事件"})]})})]}),"\n",(0,l.jsxs)(s.p,{children:["  事件的解释参见：",(0,l.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/activate_event",children:"activate event | MDN"}),"。"]}),"\n",(0,l.jsx)(s.p,{children:"  默认实现如下："}),"\n",(0,l.jsx)(s.pre,{"data-language":"typescript","data-theme":"default",children:(0,l.jsxs)(s.code,{"data-language":"typescript","data-theme":"default",children:[(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// noinspection TypeScriptUnresolvedReference,JSUnusedLocalSymbols,JSDeprecatedSymbols"})}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(event"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"ExtendableEvent"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"event"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".waitUntil"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"clients"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".claim"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"())"})]})]})}),"\n",(0,l.jsx)(s.h2,{id:"fetch",children:"fetch"}),"\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{align:"center",children:"类型"}),(0,l.jsx)(s.th,{align:"left",children:"说明"})]})}),(0,l.jsx)(s.tbody,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{align:"center",children:(0,l.jsx)(s.code,{children:"(event: FetchEvent) => void"})}),(0,l.jsx)(s.td,{align:"left",children:"网络请求事件"})]})})]}),"\n",(0,l.jsxs)(s.p,{children:["  事件的解释见：",(0,l.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/fetch_event",children:"fetch event | MDN"}),"。"]}),"\n",(0,l.jsx)(s.p,{children:"  默认实现如下："}),"\n",(0,l.jsx)(s.pre,{"data-language":"typescript","data-theme":"default",children:(0,l.jsxs)(s.code,{"data-language":"typescript","data-theme":"default",children:[(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// noinspection TypeScriptUnresolvedReference,JSDeprecatedSymbols,JSUnusedLocalSymbols"})}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(event"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"FetchEvent"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"handleFetchEvent"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(event)"})]})]})}),"\n",(0,l.jsx)(s.h2,{id:"periodicsync",children:"periodicSync"}),"\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{align:"center",children:"类型"}),(0,l.jsx)(s.th,{align:"left",children:"说明"})]})}),(0,l.jsx)(s.tbody,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{align:"center",children:(0,l.jsx)(s.code,{children:"(event: PeriodicSyncEvent) => void"})}),(0,l.jsx)(s.td,{align:"left",children:"同步事件"})]})})]}),"\n",(0,l.jsxs)(s.p,{children:["  事件的解释见：",(0,l.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/periodicsync_event",children:"periodicSync event | MDN"}),"。"]}),"\n",(0,l.jsx)(s.p,{children:"  默认实现如下："}),"\n",(0,l.jsx)(s.pre,{"data-language":"typescript","data-theme":"default",children:(0,l.jsxs)(s.code,{"data-language":"typescript","data-theme":"default",children:[(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// noinspection TypeScriptUnresolvedReference,JSDeprecatedSymbols,JSUnusedLocalSymbols"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(event"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"PeriodicSyncEvent"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ("}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"event"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:".tag "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"==="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'update'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:") {"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"event"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".waitUntil"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"handleUpdate"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"))"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,l.jsx)(s.h2,{id:"message",children:"message"}),"\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{align:"center",children:"类型"}),(0,l.jsx)(s.th,{align:"left",children:"说明"})]})}),(0,l.jsx)(s.tbody,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{align:"center",children:(0,l.jsx)(s.code,{children:"(event: ExtendableMessageEvent) => void"})}),(0,l.jsx)(s.td,{align:"left",children:"消息事件"})]})})]}),"\n",(0,l.jsxs)(s.p,{children:["  事件的解释见：",(0,l.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/message_event",children:"message event | MDN"}),"。"]}),"\n",(0,l.jsx)(s.p,{children:"  默认实现如下："}),"\n",(0,l.jsx)(s.pre,{"data-language":"typescript","data-theme":"default",children:(0,l.jsxs)(s.code,{"data-language":"typescript","data-theme":"default",children:[(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// noinspection TypeScriptUnresolvedReference,JSDeprecatedSymbols,JSUnusedLocalSymbols"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"async"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (event"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"ExtendableMessageEvent"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"data"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"event"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:".data"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"switch"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ("}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"data"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:".type) {"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"case"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'update'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:":"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"oldVersion"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"await"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"readVersion"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"updateResult"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"await"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"handleUpdate"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(oldVersion)"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ("}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"!"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"updateResult) "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"switch"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (updateResult) {"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"                "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"case"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"-"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:":"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"                    "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"postMessage"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'new'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"null"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"                "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"case"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:":"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"                    "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"postMessage"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'revise'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"null"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"                "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"case"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"2"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:":"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"                    "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"postMessage"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'update'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"null"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"                "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:":"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"                    "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ("}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"Array"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".isArray"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(updateResult)) {"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"                        "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"postMessage"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'update'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" updateResult)"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"                    }"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"            }"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})})]})}s.default=(0,r.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,i.a)(),e.components);return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(t,{...e})}):t(e)},pageOpts:{filePath:"pages/config/runtime_event.mdx",route:"/config/runtime_event",timestamp:1731938856e3,title:"运行时事件",headings:o},pageNextRoute:"/config/runtime_event"})}},function(e){e.O(0,[384,888,774,179],function(){return e(e.s=4834)}),_N_E=e.O()}]);