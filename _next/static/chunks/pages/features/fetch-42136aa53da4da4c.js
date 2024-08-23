(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[104],{7418:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/features/fetch",function(){return i(1399)}])},1399:function(e,n,i){"use strict";i.r(n),i.d(n,{__toc:function(){return l},default:function(){return p}});var t=i(2676),r=i(7217),a=i(2435),o=i(9076);i(4869);var c=i(6151),d={src:"/_next/static/media/fetch.21c00e32.png",height:489,width:1097,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAQAAAAZxLZ7AAAAM0lEQVR42hXECQoAIAzEwP7/sx4VUbAbW4bEhpyBp1nJ4LDSpu6YKI+N02lYSAi4TBahD04cPrGDkPLaAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4},s={src:"/_next/static/media/cdn.fd6fbdcb.png",height:334,width:587,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAQAAADSmGXeAAAAQUlEQVR42g3BSxaCMBAAsLn/LV2p2IXw+BTaaSCJlqfdR3E8W0ZRVD+T1ctbHKpu9tdsVgHDYpYgeg6XyVc19LwB7fJOHPiU19QAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5};let l=[{depth:2,value:"关于缓存",id:"关于缓存"},{depth:3,value:"CDN 缓存",id:"cdn-缓存"},{depth:3,value:"存在的问题",id:"存在的问题"}];function u(e){let n=Object.assign({h1:"h1",p:"p",code:"code",img:"img",h2:"h2",h3:"h3",ol:"ol",li:"li",del:"del"},(0,c.a)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{children:"关于网络请求"}),"\n",(0,t.jsxs)(n.p,{children:["  swpp 默认的 ",(0,t.jsx)(n.code,{children:"fetch"})," 工作流程如下："]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"fetch 工作流程图",placeholder:"blur",src:d})}),"\n",(0,t.jsx)(n.h2,{id:"关于缓存",children:"关于缓存"}),"\n",(0,t.jsx)(n.p,{children:"  对于使用了 CDN 的同学，网站结构大致如下："}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"CDN 结构",placeholder:"blur",src:s})}),"\n",(0,t.jsx)(n.h3,{id:"cdn-缓存",children:"CDN 缓存"}),"\n",(0,t.jsx)(n.p,{children:"  CDN 缓存是用户访问 CDN 时，若指定的资源不在 CDN 中存在，则会从源站中拉取资源，然后缓存到 CDN 的服务器当中，下一次用户再次访问同一个资源时，就不需要再访问源站了。"}),"\n",(0,t.jsx)(n.p,{children:"  对于使用 CDN 的同学，这个功能推荐启用，可以降低源站压力、提高网站响应速度。"}),"\n",(0,t.jsx)(n.h3,{id:"存在的问题",children:"存在的问题"}),"\n",(0,t.jsx)(n.p,{children:"  目前 CDN 的缓存一般是每个文件独立计时的，那么通过 CDN 拉取文件时就有可能出现一部分的文件是最新的，而一部分文件是未更新的结果。"}),"\n",(0,t.jsx)(n.p,{children:"  如果此时客户端拉取到的其它文件是新的，而版本文件是旧的，那么就会导致版本文件的 CDN 缓存更新时，把不需要更新的内容又重复地更新了一遍。"}),"\n",(0,t.jsx)(n.p,{children:"  如果此时客户端拉取到的版本文件是最新的，而其它文件是旧的，那么就会导致这部分资源无法被及时更新，同时如果这个资源您是使用永久缓存的方式存储的，那么直到手动更新或下一次版本更新前，其将永远不会被更新。"}),"\n",(0,t.jsx)(n.p,{children:"  为了解决这个问题，可以从以下方案里面选择："}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"把所有文件的 CDN 缓存时间拉到最长，每次更新网站后刷新 CDN 的所有缓存"}),"\n",(0,t.jsx)(n.li,{children:"选择支持同步不同资源缓存时间的 CDN"}),"\n",(0,t.jsx)(n.li,{children:"每次更新网站后刷新需要刷新的资源的 CDN 缓存（暂不支持）"}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.del,{children:"对于需要本地缓存的资源不使用 CDN 缓存（不推荐）"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.del,{children:"不使用 CDN（不推荐）"})}),"\n"]})]})}let h={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,c.a)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)},pageOpts:{filePath:"pages/features/fetch.mdx",route:"/features/fetch",timestamp:1724401757e3,pageMap:[{kind:"Meta",data:{index:"关于 swpp",features:"功能介绍",quickstart:"快速开始",config:"配置文件"}},{kind:"Folder",name:"config",route:"/config",children:[{kind:"Meta",data:{runtime_dep:"RuntimeDep",cross_env:"CrossEnv",compilation_env:"CompilationEnv",runtime_core:"RuntimeCore",cross_dep:"CrossDep",runtime_event:"RuntimeEvent",dom_config:"DomConfig",modifier:"Modifier",compilation_file_parser:"CompilationFileParser",special:"配置工具"}},{kind:"MdxPage",name:"compilation_env",route:"/config/compilation_env"},{kind:"MdxPage",name:"compilation_file_parser",route:"/config/compilation_file_parser"},{kind:"MdxPage",name:"cross_dep",route:"/config/cross_dep"},{kind:"MdxPage",name:"cross_env",route:"/config/cross_env"},{kind:"MdxPage",name:"dom_config",route:"/config/dom_config"},{kind:"MdxPage",name:"modifier",route:"/config/modifier"},{kind:"MdxPage",name:"runtime_core",route:"/config/runtime_core"},{kind:"MdxPage",name:"runtime_dep",route:"/config/runtime_dep"},{kind:"MdxPage",name:"runtime_event",route:"/config/runtime_event"},{kind:"MdxPage",name:"special",route:"/config/special"}]},{kind:"MdxPage",name:"config",route:"/config"},{kind:"Folder",name:"features",route:"/features",children:[{kind:"Meta",data:{fetch:"网络请求"}},{kind:"MdxPage",name:"fetch",route:"/features/fetch"}]},{kind:"MdxPage",name:"features",route:"/features"},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"quickstart",route:"/quickstart",children:[{kind:"Meta",data:{hexo:"Hexo 安装教程"}},{kind:"MdxPage",name:"hexo",route:"/quickstart/hexo"}]},{kind:"MdxPage",name:"quickstart",route:"/quickstart"}],flexsearch:{codeblocks:!0},title:"关于网络请求",headings:l},pageNextRoute:"/features/fetch",nextraLayout:a.ZP,themeConfig:o.Z};var p=(0,r.j)(h)},9076:function(e,n,i){"use strict";var t=i(2676);i(5271);var r=i(5458);let a="Swpp 官方文档";n.Z={logo:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("img",{src:"/favicon.ico",alt:"logo",width:"24",height:"24"}),(0,t.jsx)("span",{style:{marginLeft:".4em",fontWeight:"bold"},children:a})]}),sidebar:{defaultMenuCollapseLevel:1,autoCollapse:!0},project:{link:"https://github.com/EmptyDreams/swpp-backends"},docsRepositoryBase:"https://github.com/EmptyDreams/swpp_document/tree/main/",useNextSeoProps:()=>({titleTemplate:"%s – ".concat(a)}),footer:{text:"\xa9 2024-present ".concat(a)},head:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,t.jsx)("meta",{property:"og:description",content:"Service Worker Plus Plus 的官方文档"}),(0,t.jsx)("meta",{name:"keywords",content:"ServiceWorker, swpp"})]}),...r.Z}},5184:function(){}},function(e){e.O(0,[556,888,774,179],function(){return e(e.s=7418)}),_N_E=e.O()}]);