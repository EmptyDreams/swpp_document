(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[610],{9290:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/config/compilation_file_parser",function(){return i(1174)}])},1174:function(e,n,i){"use strict";i.r(n),i.d(n,{__toc:function(){return a}});var t=i(2676),o=i(7217),r=i(2435),s=i(9076);i(4869);var c=i(6151);let a=[{depth:2,value:"html",id:"html"},{depth:2,value:"css",id:"css"}];function d(e){let n=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,c.a)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{children:"编译时文件解析器"}),"\n",(0,t.jsx)(n.p,{children:"  构建期使用的文件处理器。"}),"\n",(0,t.jsx)(n.p,{children:"  该配置项用于放置需要在 NodeJs 环境中使用的文件处理器。"}),"\n",(0,t.jsxs)(n.p,{children:["  对于每一项配置 ",(0,t.jsx)(n.code,{children:"<KEY>: <FileParser>"}),": ",(0,t.jsx)(n.code,{children:"<KEY>"})," 是文件拓展名（不包括 ",(0,t.jsx)(n.code,{children:"."}),"），",(0,t.jsx)(n.code,{children:"<FileParser>"})," 是处理机。"]}),"\n",(0,t.jsx)(n.p,{children:"  解析器的作用是从文件中提取外部资源的 URL，以辅助 swpp 追踪资源链。"}),"\n",(0,t.jsxs)(n.p,{children:["  默认实现请参考 ",(0,t.jsx)(n.code,{children:"CompilationFileParser.ts"})," 源码。"]}),"\n",(0,t.jsx)(n.h2,{id:"html",children:"html"}),"\n",(0,t.jsxs)(n.p,{children:["  swpp 使用第三方库解析 HTML 文件，并从中记录 ",(0,t.jsx)(n.code,{children:"script"})," ",(0,t.jsx)(n.code,{children:"link"})," 标签引入的资源的 URL，遇到 ",(0,t.jsx)(n.code,{children:"style"})," 标签时还会调用 ",(0,t.jsx)(n.code,{children:"css"})," 处理机处理 CSS 内容，同理遇到内嵌的 JS 代码时也会尝试使用 ",(0,t.jsx)(n.code,{children:"js"})," 处理机处理 JS 内容。"]}),"\n",(0,t.jsx)(n.h2,{id:"css",children:"css"}),"\n",(0,t.jsxs)(n.p,{children:["  swpp 使用内置的文本处理器解析 CSS 文件中以 ",(0,t.jsx)(n.code,{children:"url(xxx)"})," 格式引入的资源的 URL，解析时忽略注释中的内容。"]})]})}let l={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,c.a)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)},pageOpts:{filePath:"pages/config/compilation_file_parser.mdx",route:"/config/compilation_file_parser",timestamp:1724325243e3,pageMap:[{kind:"Meta",data:{index:"关于 swpp",features:"功能介绍",quickstart:"快速开始",config:"配置文件"}},{kind:"Folder",name:"config",route:"/config",children:[{kind:"Meta",data:{runtime_dep:"RuntimeDep",cross_env:"CrossEnv",compilation_env:"CompilationEnv",runtime_core:"RuntimeCore",cross_dep:"CrossDep",runtime_event:"RuntimeEvent",dom_config:"DomConfig",modifier:"Modifier",compilation_file_parser:"CompilationFileParser",special:"配置工具"}},{kind:"MdxPage",name:"compilation_env",route:"/config/compilation_env"},{kind:"MdxPage",name:"compilation_file_parser",route:"/config/compilation_file_parser"},{kind:"MdxPage",name:"cross_dep",route:"/config/cross_dep"},{kind:"MdxPage",name:"cross_env",route:"/config/cross_env"},{kind:"MdxPage",name:"dom_config",route:"/config/dom_config"},{kind:"MdxPage",name:"modifier",route:"/config/modifier"},{kind:"MdxPage",name:"runtime_core",route:"/config/runtime_core"},{kind:"MdxPage",name:"runtime_dep",route:"/config/runtime_dep"},{kind:"MdxPage",name:"runtime_event",route:"/config/runtime_event"},{kind:"MdxPage",name:"special",route:"/config/special"}]},{kind:"MdxPage",name:"config",route:"/config"},{kind:"MdxPage",name:"features",route:"/features"},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"quickstart",route:"/quickstart",children:[{kind:"Meta",data:{hexo:"Hexo 安装教程"}},{kind:"MdxPage",name:"hexo",route:"/quickstart/hexo"}]},{kind:"MdxPage",name:"quickstart",route:"/quickstart"}],flexsearch:{codeblocks:!0},title:"编译时文件解析器",headings:a},pageNextRoute:"/config/compilation_file_parser",nextraLayout:r.ZP,themeConfig:s.Z};n.default=(0,o.j)(l)},9076:function(e,n,i){"use strict";var t=i(2676);i(5271);var o=i(5458);let r="Swpp 官方文档";n.Z={logo:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",className:"icon",viewBox:"0 0 1024 1024",fill:"currentcolor",children:[(0,t.jsx)("path",{d:"M469.333 810.667V341.333a128 128 0 0 0-128-128H128v597.334zM512 213.333A212.992 212.992 0 0 1 682.667 128h298.666v768H42.667V128h298.666c69.803 0 131.755 33.493 170.667 85.333m42.667 128v469.334H896V213.333H682.667a128 128 0 0 0-128 128"}),(0,t.jsx)("text",{xmlSpace:"preserve",x:"215",y:"485",fillOpacity:"null",stroke:"null",strokeOpacity:"null",strokeWidth:"0",fontFamily:"'Courier New', Courier, monospace",fontSize:"250",fontWeight:"bold",transform:"matrix(2.177 0 0 2.07854 -332.879 -331.617)",children:"S"}),(0,t.jsx)("text",{xmlSpace:"preserve",x:"653",y:"499",fillOpacity:"null",stroke:"null",strokeOpacity:"null",strokeWidth:"0",fontFamily:"'Courier New', Courier, monospace",fontSize:"250",fontWeight:"bold",transform:"matrix(1.78385 0 0 2.06235 -570.614 -357.776)",children:"W"})]}),(0,t.jsx)("span",{style:{marginLeft:".4em",fontWeight:"bold"},children:r})]}),sidebar:{defaultMenuCollapseLevel:1},project:{link:"https://github.com/EmptyDreams/swpp-backends"},docsRepositoryBase:"https://github.com/EmptyDreams/swpp_document/tree/main/",useNextSeoProps:()=>({titleTemplate:"%s – ".concat(r)}),footer:{text:"\xa9 2024-present ".concat(r)},head:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,t.jsx)("meta",{property:"og:description",content:"Service Worker Plus Plus 的官方文档"}),(0,t.jsx)("meta",{name:"keywords",content:"ServiceWorker, swpp"})]}),...o.Z}},5184:function(){}},function(e){e.O(0,[556,888,774,179],function(){return e(e.s=9290)}),_N_E=e.O()}]);