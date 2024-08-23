(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[490],{6205:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/config",function(){return s(8857)}])},8857:function(e,n,s){"use strict";s.r(n),s.d(n,{__toc:function(){return a}});var i=s(2676),r=s(7217),l=s(2435),o=s(9076);s(4869);var c=s(6151),t=s(4981);let a=[{depth:2,value:"环境",id:"环境"},{depth:2,value:"修改配置的方法",id:"修改配置的方法"},{depth:2,value:"配置分类与命名规则",id:"配置分类与命名规则"},{depth:2,value:"运行顺序",id:"运行顺序"},{depth:2,value:"配置优先级",id:"配置优先级"}];function d(e){let n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",pre:"pre",span:"span",ul:"ul",li:"li",ol:"ol"},(0,c.a)(),e.components);return t.mQ||h("Tabs",!1),t.mQ.Tab||h("Tabs.Tab",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{children:"配置文件的详细说明"}),"\n",(0,i.jsx)(n.p,{children:"  本章将带您了解 swpp 的配置文件的组成，以及对 swpp 内置的所有配置项的解释说明。"}),"\n",(0,i.jsx)(n.h2,{id:"环境",children:"环境"}),"\n",(0,i.jsxs)(n.p,{children:["  无论您是使用 js 还是 ts 编写配置文件，配置文件都将与主体程序共享同一个运行环境，也就是说配置文件中的代码可以访问到主体程序提供的 ",(0,i.jsx)(n.code,{children:"globalThis"})," 等全局数据。"]}),"\n",(0,i.jsxs)(n.p,{children:["  简单来说就是 swpp 会使用类似于 ",(0,i.jsx)(n.code,{children:"require('xxx/xxx/xxx')"})," 的方式加载配置文件，所以相当于您在当前的项目中又编写了一个代码文件。"]}),"\n",(0,i.jsx)(n.p,{children:"  知道了这个，就可以在配置文件中进行一些“骚操作”，即可以动态地修改环境中的一些内容。但是 swpp 并不建议这么做，配置文件在设计上用于修改、调整 swpp 的一些行为，如果您确实需要运行一段有副作用的代码，建议优先通过其它更合理的办法进行。"}),"\n",(0,i.jsx)(n.p,{children:"  swpp 会在加载配置时执行配置文件中的代码，如果您在配置文件顶层抛出了异常，那么将会导致配置加载失败，具体会产生什么后果视前端的具体实现而不同，可能会使整个程序直接结束，也可能只终止 swpp 的任务。"}),"\n",(0,i.jsxs)(n.p,{children:["  因为配置文件共享主程序的 ",(0,i.jsx)(n.code,{children:"package.json"}),"，所以配置文件中可以使用所有主程序中安装的依赖（包括 swpp 本身）。"]}),"\n",(0,i.jsx)(n.h2,{id:"修改配置的方法",children:"修改配置的方法"}),"\n",(0,i.jsxs)(n.p,{children:["  swpp 中统一使用 ",(0,i.jsx)(n.code,{children:"defineXxx"})," 函数定义配置，其中 ",(0,i.jsx)(n.code,{children:"defineConfig"})," 用于一次性定义所有配置，其余 ",(0,i.jsx)(n.code,{children:"defineXxx"})," 用于定义某一个分类下的配置。"]}),"\n",(0,i.jsxs)(n.p,{children:["  非常需要注意的是，配置文件中必须在加载完毕前调用 ",(0,i.jsx)(n.code,{children:"define"})," 系列函数，否则将会导致错误，所以在异步任务中调用 ",(0,i.jsx)(n.code,{children:"define"})," 是非常危险的操作。对于 js/ts 功底不好的同学来说，您只需要记住 ",(0,i.jsx)(n.code,{children:"define"})," 系列的函数必须在顶层调用即可（可以嵌套在 ",(0,i.jsx)(n.code,{children:"if"})," 等语句中）。"]}),"\n",(0,i.jsxs)(t.mQ,{items:["defineConfig","分类配置"],children:[(0,i.jsxs)(t.mQ.Tab,{children:[(0,i.jsx)(n.p,{children:"  下面是一段示例代码，其中列出了 swpp 内置的所有可调节配置分类："}),(0,i.jsx)(n.pre,{"data-language":"typescript","data-theme":"default",children:(0,i.jsxs)(n.code,{"data-language":"typescript","data-theme":"default",children:[(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {defineConfig} "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'swpp-backends'"})]}),"\n",(0,i.jsx)(n.span,{className:"line",children:" "}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"defineConfig"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,i.jsx)(n.span,{className:"line",children:" "}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    compilationEnv"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {}"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    crossEnv"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {}"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    runtimeDep"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {}"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    crossDep"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {}"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    runtimeCore"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {}"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    runtimeEvent"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {}"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    domConfig"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {}"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    compilationFileParser"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {}"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    modifier"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {}"})]}),"\n",(0,i.jsx)(n.span,{className:"line",children:" "}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"})"})})]})})]}),(0,i.jsxs)(t.mQ.Tab,{children:[(0,i.jsx)(n.p,{children:"  下面是一段示例代码，其中列出了 swpp 内置的所有可调节配置分类："}),(0,i.jsx)(n.pre,{"data-language":"typescript","data-theme":"default",children:(0,i.jsxs)(n.code,{"data-language":"typescript","data-theme":"default",children:[(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    defineCompilationEnv"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" defineCompilationFP"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    defineCrossDep"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" defineCrossEnv"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    defineDomConfig"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" defineModifier"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    defineRuntimeCore"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" defineRuntimeDep"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" defineRuntimeEvent"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"} "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'swpp-backends'"})]}),"\n",(0,i.jsx)(n.span,{className:"line",children:" "}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"defineCompilationEnv"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"({})"})]}),"\n",(0,i.jsx)(n.span,{className:"line",children:" "}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"defineCrossEnv"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"({})"})]}),"\n",(0,i.jsx)(n.span,{className:"line",children:" "}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"defineRuntimeDep"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"({})"})]}),"\n",(0,i.jsx)(n.span,{className:"line",children:" "}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"defineCrossDep"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"({})"})]}),"\n",(0,i.jsx)(n.span,{className:"line",children:" "}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"defineRuntimeCore"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"({})"})]}),"\n",(0,i.jsx)(n.span,{className:"line",children:" "}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"defineRuntimeEvent"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"({})"})]}),"\n",(0,i.jsx)(n.span,{className:"line",children:" "}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"defineDomConfig"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"({})"})]}),"\n",(0,i.jsx)(n.span,{className:"line",children:" "}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"defineModifier"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"({})"})]})]})})]})]}),"\n",(0,i.jsx)(n.p,{children:"  注意：上面的示例中一次性列出了所有的分类，实际使用时，建议只写出需要修改的配置，以保持配置文件的简洁性。"}),"\n",(0,i.jsx)(n.h2,{id:"配置分类与命名规则",children:"配置分类与命名规则"}),"\n",(0,i.jsx)(n.p,{children:"  从上面的示例代码中可以看到，swpp 将内置的配置项分为了八类，其命名规则如下："}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"compilation"})," 开头表示该分类下的配置仅在构建时产生影响，不会被写入到 sw 文件中。"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"runtime"})," 开头表示该分类下的配置仅会被写入到 sw 文件中，不会在构建时被使用。"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"cross"})," 开头表示该分类下的配置在构建时有可能被使用，同时会被写入到 sw 文件中。"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"dom"})," 开头表示该分类下的配置会影响 DOM 端 js 的生成。"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"modifier"})," 是一项非常特殊且功能强大的配置，后面将会专门进行讲解。"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"运行顺序",children:"运行顺序"}),"\n",(0,i.jsx)(n.p,{children:"  swpp 会按照如下顺序装配配置："}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"按优先级将配置文件加载到内存（优先级越高越先加载）"}),"\n",(0,i.jsxs)(n.li,{children:["调用 ",(0,i.jsx)(n.code,{children:"modifier#build"})," 函数构建各个 KV 库（没有 ",(0,i.jsx)(n.code,{children:"build"})," 则将使用默认实现）"]}),"\n",(0,i.jsxs)(n.li,{children:["调用 ",(0,i.jsx)(n.code,{children:"modifier#registry"})," 函数（优先级越低越先执行）"]}),"\n",(0,i.jsxs)(n.li,{children:["依次将 ",(0,i.jsx)(n.code,{children:"runtime"})," ",(0,i.jsx)(n.code,{children:"compilation"})," 和 ",(0,i.jsx)(n.code,{children:"cross"})," 的配置写入到 KV 库当中"]}),"\n",(0,i.jsxs)(n.li,{children:["调用 ",(0,i.jsx)(n.code,{children:"modifier#dynamicUpdate"})," 函数"]}),"\n",(0,i.jsx)(n.li,{children:"冻结所有 KV 库"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"配置优先级",children:"配置优先级"}),"\n",(0,i.jsxs)(n.p,{children:["  不同配置文件的优先级依据前端的实现不同而不同，同一个配置文件中越早调用的 ",(0,i.jsx)(n.code,{children:"define"})," 函数优先级越高。"]})]})}function h(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}let p={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,c.a)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)},pageOpts:{filePath:"pages/config.mdx",route:"/config",timestamp:1724401757e3,pageMap:[{kind:"Meta",data:{index:"关于 swpp",features:"功能介绍",quickstart:"快速开始",config:"配置文件"}},{kind:"Folder",name:"config",route:"/config",children:[{kind:"Meta",data:{runtime_dep:"RuntimeDep",cross_env:"CrossEnv",compilation_env:"CompilationEnv",runtime_core:"RuntimeCore",cross_dep:"CrossDep",runtime_event:"RuntimeEvent",dom_config:"DomConfig",modifier:"Modifier",compilation_file_parser:"CompilationFileParser",special:"配置工具"}},{kind:"MdxPage",name:"compilation_env",route:"/config/compilation_env"},{kind:"MdxPage",name:"compilation_file_parser",route:"/config/compilation_file_parser"},{kind:"MdxPage",name:"cross_dep",route:"/config/cross_dep"},{kind:"MdxPage",name:"cross_env",route:"/config/cross_env"},{kind:"MdxPage",name:"dom_config",route:"/config/dom_config"},{kind:"MdxPage",name:"modifier",route:"/config/modifier"},{kind:"MdxPage",name:"runtime_core",route:"/config/runtime_core"},{kind:"MdxPage",name:"runtime_dep",route:"/config/runtime_dep"},{kind:"MdxPage",name:"runtime_event",route:"/config/runtime_event"},{kind:"MdxPage",name:"special",route:"/config/special"}]},{kind:"MdxPage",name:"config",route:"/config"},{kind:"Folder",name:"features",route:"/features",children:[{kind:"Meta",data:{fetch:"网络请求"}},{kind:"MdxPage",name:"fetch",route:"/features/fetch"}]},{kind:"MdxPage",name:"features",route:"/features"},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"quickstart",route:"/quickstart",children:[{kind:"Meta",data:{hexo:"Hexo 安装教程"}},{kind:"MdxPage",name:"hexo",route:"/quickstart/hexo"}]},{kind:"MdxPage",name:"quickstart",route:"/quickstart"}],flexsearch:{codeblocks:!0},title:"配置文件的详细说明",headings:a},pageNextRoute:"/config",nextraLayout:l.ZP,themeConfig:o.Z};n.default=(0,r.j)(p)},9076:function(e,n,s){"use strict";var i=s(2676);s(5271);var r=s(5458);let l="Swpp 官方文档";n.Z={logo:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("img",{src:"/favicon.ico",alt:"logo",width:"24",height:"24"}),(0,i.jsx)("span",{style:{marginLeft:".4em",fontWeight:"bold"},children:l})]}),sidebar:{defaultMenuCollapseLevel:1,autoCollapse:!0},project:{link:"https://github.com/EmptyDreams/swpp-backends"},docsRepositoryBase:"https://github.com/EmptyDreams/swpp_document/tree/main/",useNextSeoProps:()=>({titleTemplate:"%s – ".concat(l)}),footer:{text:"\xa9 2024-present ".concat(l)},head:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,i.jsx)("meta",{property:"og:description",content:"Service Worker Plus Plus 的官方文档"}),(0,i.jsx)("meta",{name:"keywords",content:"ServiceWorker, swpp"})]}),...r.Z}},5184:function(){}},function(e){e.O(0,[556,888,774,179],function(){return e(e.s=6205)}),_N_E=e.O()}]);