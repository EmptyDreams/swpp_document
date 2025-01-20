(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[610],{7248:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/config/compilation_file_parser",function(){return s(848)}])},848:function(e,n,s){"use strict";s.r(n),s.d(n,{__toc:function(){return l}});var i=s(2676),c=s(4317),r=s(5820);let l=[{depth:2,value:"html",id:"html"},{depth:2,value:"css",id:"css"}];function t(e){let n=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,r.a)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{children:"编译时文件解析器"}),"\n",(0,i.jsx)(n.p,{children:"  构建期使用的文件处理器。"}),"\n",(0,i.jsx)(n.p,{children:"  该配置项用于放置需要在 NodeJs 环境中使用的文件处理器。"}),"\n",(0,i.jsxs)(n.p,{children:["  对于每一项配置 ",(0,i.jsx)(n.code,{children:"<KEY>: <FileParser>"}),": ",(0,i.jsx)(n.code,{children:"<KEY>"})," 是文件拓展名（不包括 ",(0,i.jsx)(n.code,{children:"."}),"），",(0,i.jsx)(n.code,{children:"<FileParser>"})," 是处理机。"]}),"\n",(0,i.jsx)(n.p,{children:"  解析器的作用是从文件中提取外部资源的 URL，以辅助 swpp 追踪资源链。"}),"\n",(0,i.jsxs)(n.p,{children:["  默认实现请参考 ",(0,i.jsx)(n.code,{children:"CompilationFileParser.ts"})," 源码。"]}),"\n",(0,i.jsx)(n.h2,{id:"html",children:"html"}),"\n",(0,i.jsxs)(n.p,{children:["  swpp 使用第三方库解析 HTML 文件，并从中记录 ",(0,i.jsx)(n.code,{children:"script"})," ",(0,i.jsx)(n.code,{children:"link"})," 标签引入的资源的 URL，遇到 ",(0,i.jsx)(n.code,{children:"style"})," 标签时还会调用 ",(0,i.jsx)(n.code,{children:"css"})," 处理机处理 CSS 内容，同理遇到内嵌的 JS 代码时也会尝试使用 ",(0,i.jsx)(n.code,{children:"js"})," 处理机处理 JS 内容。"]}),"\n",(0,i.jsx)(n.h2,{id:"css",children:"css"}),"\n",(0,i.jsxs)(n.p,{children:["  swpp 使用内置的文本处理器解析 CSS 文件中以 ",(0,i.jsx)(n.code,{children:"url(xxx)"})," 格式引入的资源的 URL，解析时忽略注释中的内容。"]})]})}n.default=(0,c.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.a)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)},pageOpts:{filePath:"pages/config/compilation_file_parser.mdx",route:"/config/compilation_file_parser",timestamp:1737379438e3,title:"编译时文件解析器",headings:l},pageNextRoute:"/config/compilation_file_parser"})}},function(e){e.O(0,[317,888,774,179],function(){return e(e.s=7248)}),_N_E=e.O()}]);