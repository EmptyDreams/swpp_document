(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[104],{9170:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/features/fetch",function(){return i(4621)}])},4621:function(e,n,i){"use strict";i.r(n),i.d(n,{__toc:function(){return r},default:function(){return A}});var t=i(2676),l=i(8216),h=i(6852),c={src:"/_next/static/media/fetch.21c00e32.png",height:489,width:1097,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAQAAAAZxLZ7AAAAM0lEQVR42hXECQoAIAzEwP7/sx4VUbAbW4bEhpyBp1nJ4LDSpu6YKI+N02lYSAi4TBahD04cPrGDkPLaAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4},d={src:"/_next/static/media/cdn.fd6fbdcb.png",height:334,width:587,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAQAAADSmGXeAAAAQUlEQVR42g3BSxaCMBAAsLn/LV2p2IXw+BTaaSCJlqfdR3E8W0ZRVD+T1ctbHKpu9tdsVgHDYpYgeg6XyVc19LwB7fJOHPiU19QAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5};let r=[{depth:2,value:"关于缓存",id:"关于缓存"},{depth:3,value:"CDN 缓存",id:"cdn-缓存"},{depth:3,value:"存在的问题",id:"存在的问题"}];function s(e){let n=Object.assign({h1:"h1",p:"p",code:"code",img:"img",h2:"h2",h3:"h3",ol:"ol",li:"li",del:"del"},(0,h.a)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{children:"关于网络请求"}),"\n",(0,t.jsxs)(n.p,{children:["  swpp 默认的 ",(0,t.jsx)(n.code,{children:"fetch"})," 工作流程如下："]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"fetch 工作流程图",placeholder:"blur",src:c})}),"\n",(0,t.jsx)(n.h2,{id:"关于缓存",children:"关于缓存"}),"\n",(0,t.jsx)(n.p,{children:"  对于使用了 CDN 的同学，网站结构大致如下："}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"CDN 结构",placeholder:"blur",src:d})}),"\n",(0,t.jsx)(n.h3,{id:"cdn-缓存",children:"CDN 缓存"}),"\n",(0,t.jsx)(n.p,{children:"  CDN 缓存是用户访问 CDN 时，若指定的资源不在 CDN 中存在，则会从源站中拉取资源，然后缓存到 CDN 的服务器当中，下一次用户再次访问同一个资源时，就不需要再访问源站了。"}),"\n",(0,t.jsx)(n.p,{children:"  对于使用 CDN 的同学，这个功能推荐启用，可以降低源站压力、提高网站响应速度。"}),"\n",(0,t.jsx)(n.h3,{id:"存在的问题",children:"存在的问题"}),"\n",(0,t.jsx)(n.p,{children:"  目前 CDN 的缓存一般是每个文件独立计时的，那么通过 CDN 拉取文件时就有可能出现一部分的文件是最新的，而一部分文件是未更新的结果。"}),"\n",(0,t.jsx)(n.p,{children:"  如果此时客户端拉取到的其它文件是新的，而版本文件是旧的，那么就会导致版本文件的 CDN 缓存更新时，把不需要更新的内容又重复地更新了一遍。"}),"\n",(0,t.jsx)(n.p,{children:"  如果此时客户端拉取到的版本文件是最新的，而其它文件是旧的，那么就会导致这部分资源无法被及时更新，同时如果这个资源您是使用永久缓存的方式存储的，那么直到手动更新或下一次版本更新前，其将永远不会被更新。"}),"\n",(0,t.jsx)(n.p,{children:"  为了解决这个问题，可以从以下方案里面选择："}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"把所有文件的 CDN 缓存时间拉到最长，每次更新网站后刷新 CDN 的所有缓存"}),"\n",(0,t.jsx)(n.li,{children:"把所有文件的 CDN 缓存时间拉到最长，每次更新网站后刷新需要刷新的资源的 CDN 缓存"}),"\n",(0,t.jsx)(n.li,{children:"选择支持同步不同资源缓存时间的 CDN"}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.del,{children:"对于需要本地缓存的资源不使用 CDN 缓存（不推荐）"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.del,{children:"不使用 CDN（不推荐）"})}),"\n"]})]})}var A=(0,l.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,h.a)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)},pageOpts:{filePath:"pages/features/fetch.mdx",route:"/features/fetch",timestamp:1725684212e3,title:"关于网络请求",headings:r},pageNextRoute:"/features/fetch"})}},function(e){e.O(0,[216,888,774,179],function(){return e(e.s=9170)}),_N_E=e.O()}]);