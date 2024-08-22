(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[968],{2094:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/config/cross_dep",function(){return s(2332)}])},2332:function(e,n,s){"use strict";s.r(n),s.d(n,{__toc:function(){return c}});var r=s(2676),i=s(7217),l=s(2435),o=s(9076);s(4869);var t=s(6151);let c=[{depth:2,value:"matchCacheRule",id:"matchcacherule"},{depth:2,value:"normalizeUrl",id:"normalizeurl"},{depth:2,value:"matchUpdateRule",id:"matchupdaterule"}];function a(e){let n=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",span:"span",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",ul:"ul",li:"li",a:"a"},(0,t.a)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{children:"双期函数依赖"}),"\n",(0,r.jsx)(n.p,{children:"  运行时和编译期的函数依赖，其中的内容会被写入到 sw 中。"}),"\n",(0,r.jsx)(n.p,{children:"  该配置项用于放置所有同时在浏览器和 NodeJs 环境下执行的工具函数。"}),"\n",(0,r.jsxs)(n.p,{children:["  对于每一项配置 ",(0,r.jsx)(n.code,{children:"<KEY>: { <runOnBrowser>, <runOnNode> }"}),"：",(0,r.jsx)(n.code,{children:"<KEY>"})," 是函数名，",(0,r.jsx)(n.code,{children:"<runOnBrowser>"})," 是在浏览器环境下执行的代码，",(0,r.jsx)(n.code,{children:"<runOnNode>"})," 是在 NodeJs 环境下执行的代码。"]}),"\n",(0,r.jsxs)(n.p,{children:["  对于在浏览器环境下执行的代码，可以像 ",(0,r.jsx)(n.code,{children:"RuntimeDep"})," 一样引用其它运行时的环境变量、依赖函数等内容。"]}),"\n",(0,r.jsxs)(n.p,{children:["  对于在 NodeJs 环境下执行的代码，可以使用 ",(0,r.jsx)(n.code,{children:"this"})," 调用 ",(0,r.jsx)(n.code,{children:"<runOnBrowser>"}),"（前提是 ",(0,r.jsx)(n.code,{children:"<runOnBrowser>"})," 中没有依赖浏览器环境的代码）。"]}),"\n",(0,r.jsxs)(n.p,{children:["  ",(0,r.jsx)(n.code,{children:"<runOnBrowser>"})," 和 ",(0,r.jsx)(n.code,{children:"<runOnNode>"})," 中的代码的行为应当完全一致。注意：此处说的行为一致是两者应当产生相同的副作用，内部具体实现可以不一样。"]}),"\n",(0,r.jsx)(n.p,{children:"  例："}),"\n",(0,r.jsx)(n.pre,{"data-language":"typescript","data-theme":"default",children:(0,r.jsxs)(n.code,{"data-language":"typescript","data-theme":"default",children:[(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {defineCrossDep} "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'swpp-backends'"})]}),"\n",(0,r.jsx)(n.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"defineCrossDep"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    example"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {  "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"// 不推荐！双端的行为不完全一致！但如果是为了进行代码测试，可以临时这么干。"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"runOnBrowser"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" () "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:".log"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'hello'"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"runOnNode"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" () "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:".log"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'world'"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    invokeExample"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"runOnBrowser"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" () "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:".log"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'hello world'"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"runOnNode"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"() {"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"this"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:".runOnBrowser"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"        }"})}),"\n",(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"})"})})]})}),"\n",(0,r.jsx)(n.h2,{id:"matchcacherule",children:"matchCacheRule"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{align:"center",children:"类型"}),(0,r.jsx)(n.th,{align:"left",children:"说明"}),(0,r.jsx)(n.th,{align:"center",children:"默认值"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{align:"center",children:(0,r.jsx)(n.code,{children:"(url: URL) => number | false | null | undefined"})}),(0,r.jsx)(n.td,{align:"left",children:"判断一个资源是否需要缓存"}),(0,r.jsx)(n.td,{align:"center",children:(0,r.jsx)(n.code,{children:"() => false"})})]})})]}),"\n",(0,r.jsx)(n.p,{children:"  该项用于判断一个资源是否需要被前端缓存，其中各个返回值的含义如下："}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"false"})," ",(0,r.jsx)(n.code,{children:"null"})," ",(0,r.jsx)(n.code,{children:"undefined"})," 或 ",(0,r.jsx)(n.code,{children:"0"}),"：表示不需要缓存"]}),"\n",(0,r.jsx)(n.li,{children:"正数：表示需要缓存，缓存类型为定时缓存，单位为毫秒，超过指定时间后缓存自动失效"}),"\n",(0,r.jsx)(n.li,{children:"负数：表示需要缓存，缓存类型为永久缓存，仅能通过增量更新失效"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"normalizeurl",children:"normalizeUrl"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{align:"center",children:"类型"}),(0,r.jsx)(n.th,{align:"left",children:"说明"}),(0,r.jsx)(n.th,{align:"center",children:"默认值"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{align:"center",children:(0,r.jsx)(n.code,{children:"(url: string) => string"})}),(0,r.jsx)(n.td,{align:"left",children:"归一化 URL"}),(0,r.jsx)(n.td,{align:"center",children:"省略"})]})})]}),"\n",(0,r.jsx)(n.p,{children:"  该项用于将链接进行归一化，归一化的作用是防止目标相同但连接形式不同的资源被重复缓存。默认的实现会对 HTML 资源的 URL 进行处理："}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["如果链接以 ",(0,r.jsx)(n.code,{children:"/index.html"})," 结尾会被替换为 ",(0,r.jsx)(n.code,{children:"/"})]}),"\n",(0,r.jsxs)(n.li,{children:["如果链接以 ",(0,r.jsx)(n.code,{children:"/xxx.html"})," 结尾会被替换为 ",(0,r.jsx)(n.code,{children:"/xxx"})]}),"\n",(0,r.jsx)(n.li,{children:"否则保持原链接"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"matchupdaterule",children:"matchUpdateRule"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{align:"center",children:"类型"}),(0,r.jsx)(n.th,{align:"left",children:"说明"}),(0,r.jsx)(n.th,{align:"center",children:"默认值"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{align:"center",children:(0,r.jsx)(n.code,{children:"(exp: UpdateChangeExp) => ((url: string) => boolean | undefined | null)"})}),(0,r.jsx)(n.td,{align:"left",children:"匹配缓存更新规则"}),(0,r.jsx)(n.td,{align:"center",children:"省略"})]})})]}),"\n",(0,r.jsxs)(n.p,{children:["  该项用于判断一个 ",(0,r.jsx)(n.code,{children:"UpdateChangeExp"})," 应当如何被程序理解，返回一个函数，该函数用于判断指定资源是否应该被刷新。"]}),"\n",(0,r.jsxs)(n.p,{children:["  内置的规则已经可以满足大多数情况的要求，一般只有需要自定义新的规则时才需要修改该项，具体的实现可以参考 ",(0,r.jsx)(n.a,{href:"https://github.com/EmptyDreams/swpp-backends/blob/v3/src/swpp/database/CrossDepCode.ts#L64",children:"源代码"}),"。"]})]})}let d={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.a)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)},pageOpts:{filePath:"pages/config/cross_dep.mdx",route:"/config/cross_dep",timestamp:1724325001e3,pageMap:[{kind:"Meta",data:{index:"关于 swpp",features:"功能介绍",quickstart:"快速开始",config:"配置文件"}},{kind:"Folder",name:"config",route:"/config",children:[{kind:"Meta",data:{runtime_dep:"RuntimeDep",cross_env:"CrossEnv",compilation_env:"CompilationEnv",runtime_core:"RuntimeCore",cross_dep:"CrossDep",runtime_event:"RuntimeEvent",dom_config:"DomConfig",modifier:"Modifier",compilation_file_parser:"CompilationFileParser",special:"配置工具"}},{kind:"MdxPage",name:"compilation_env",route:"/config/compilation_env"},{kind:"MdxPage",name:"compilation_file_parser",route:"/config/compilation_file_parser"},{kind:"MdxPage",name:"cross_dep",route:"/config/cross_dep"},{kind:"MdxPage",name:"cross_env",route:"/config/cross_env"},{kind:"MdxPage",name:"dom_config",route:"/config/dom_config"},{kind:"MdxPage",name:"modifier",route:"/config/modifier"},{kind:"MdxPage",name:"runtime_core",route:"/config/runtime_core"},{kind:"MdxPage",name:"runtime_dep",route:"/config/runtime_dep"},{kind:"MdxPage",name:"runtime_event",route:"/config/runtime_event"},{kind:"MdxPage",name:"special",route:"/config/special"}]},{kind:"MdxPage",name:"config",route:"/config"},{kind:"MdxPage",name:"features",route:"/features"},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"quickstart",route:"/quickstart",children:[{kind:"Meta",data:{hexo:"Hexo 安装教程"}},{kind:"MdxPage",name:"hexo",route:"/quickstart/hexo"}]},{kind:"MdxPage",name:"quickstart",route:"/quickstart"}],flexsearch:{codeblocks:!0},title:"双期函数依赖",headings:c},pageNextRoute:"/config/cross_dep",nextraLayout:l.ZP,themeConfig:o.Z};n.default=(0,i.j)(d)},9076:function(e,n,s){"use strict";var r=s(2676);s(5271);var i=s(5458);let l="Swpp 官方文档";n.Z={logo:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",className:"icon",viewBox:"0 0 1024 1024",fill:"currentcolor",children:[(0,r.jsx)("path",{d:"M469.333 810.667V341.333a128 128 0 0 0-128-128H128v597.334zM512 213.333A212.992 212.992 0 0 1 682.667 128h298.666v768H42.667V128h298.666c69.803 0 131.755 33.493 170.667 85.333m42.667 128v469.334H896V213.333H682.667a128 128 0 0 0-128 128"}),(0,r.jsx)("text",{xmlSpace:"preserve",x:"215",y:"485",fillOpacity:"null",stroke:"null",strokeOpacity:"null",strokeWidth:"0",fontFamily:"'Courier New', Courier, monospace",fontSize:"250",fontWeight:"bold",transform:"matrix(2.177 0 0 2.07854 -332.879 -331.617)",children:"S"}),(0,r.jsx)("text",{xmlSpace:"preserve",x:"653",y:"499",fillOpacity:"null",stroke:"null",strokeOpacity:"null",strokeWidth:"0",fontFamily:"'Courier New', Courier, monospace",fontSize:"250",fontWeight:"bold",transform:"matrix(1.78385 0 0 2.06235 -570.614 -357.776)",children:"W"})]}),(0,r.jsx)("span",{style:{marginLeft:".4em",fontWeight:"bold"},children:l})]}),sidebar:{defaultMenuCollapseLevel:1},project:{link:"https://github.com/EmptyDreams/swpp-backends"},docsRepositoryBase:"https://github.com/EmptyDreams/swpp_document/tree/main/",useNextSeoProps:()=>({titleTemplate:"%s – ".concat(l)}),footer:{text:"\xa9 2024-present ".concat(l)},head:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,r.jsx)("meta",{property:"og:description",content:"Service Worker Plus Plus 的官方文档"}),(0,r.jsx)("meta",{name:"keywords",content:"ServiceWorker, swpp"})]}),...i.Z}},5184:function(){}},function(e){e.O(0,[556,888,774,179],function(){return e(e.s=2094)}),_N_E=e.O()}]);