(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[794],{6076:function(s,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/config/dom_config",function(){return n(2177)}])},2177:function(s,e,n){"use strict";n.r(e),n.d(e,{__toc:function(){return c}});var r=n(2676),l=n(3313),i=n(8136),o=n(2534);n(681);var t=n(5594);let c=[{depth:2,value:"registry",id:"registry"},{depth:2,value:"postMessage2Sw",id:"postmessage2sw"},{depth:2,value:"pjaxUpdate",id:"pjaxupdate"},{depth:2,value:"SESSION_KEY",id:"session_key"},{depth:2,value:"onSuccess",id:"onsuccess"},{depth:2,value:"_inlineA",id:"_inlinea"},{depth:2,value:"messageEvent",id:"messageevent"}];function a(s){let e=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",pre:"pre",span:"span",ul:"ul",li:"li",a:"a"},(0,t.a)(),s.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{children:"DOM JS 相关配置"}),"\n",(0,r.jsx)(e.p,{children:"  运行时使用的常量、函数。"}),"\n",(0,r.jsx)(e.p,{children:"  该配置项用于放置需要生成到 dom. js 中的内容。"}),"\n",(0,r.jsxs)(e.p,{children:["  对于每一项配置 ",(0,r.jsx)(e.code,{children:"<KEY>: <value>"}),"：",(0,r.jsx)(e.code,{children:"<KEY>"})," 是常量名或函数名，常量推荐大写下划线命名，函数推荐小写驼峰命名，",(0,r.jsx)(e.code,{children:"<value>"})," 是值。"]}),"\n",(0,r.jsx)(e.p,{children:"  该配置项中的值只能使用本配置项中包含的内容，不能使用其它编译期、运行期的内容。"}),"\n",(0,r.jsxs)(e.p,{children:["  该配置项中所有以 ",(0,r.jsx)(e.code,{children:"_inline"})," 开头的内容必须为 ",(0,r.jsx)(e.code,{children:"() => void"})," 类型的函数，其将会以 ",(0,r.jsx)(e.code,{children:"(function content)()"})," 的形式在插入的位置执行。"]}),"\n",(0,r.jsx)(e.h2,{id:"registry",children:"registry"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{align:"center",children:"类型"}),(0,r.jsx)(e.th,{align:"left",children:"说明"}),(0,r.jsx)(e.th,{align:"center",children:"默认值"})]})}),(0,r.jsx)(e.tbody,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{align:"center",children:(0,r.jsx)(e.code,{children:"() => string"})}),(0,r.jsx)(e.td,{align:"left",children:"SW 注册代码"}),(0,r.jsx)(e.td,{align:"center",children:"忽略"})]})})]}),"\n",(0,r.jsxs)(e.p,{children:["  该项用于修改插入到 HTML 中的注册 SW 的代码。swpp 会在部分或所有（具体取决于前端的实现）HTML 的 ",(0,r.jsx)(e.code,{children:"<head>"})," 中插入注册 SW 的代码。"]}),"\n",(0,r.jsx)(e.p,{children:"  默认的实现是："}),"\n",(0,r.jsx)(e.pre,{"data-language":"typescript","data-theme":"default",children:(0,r.jsxs)(e.code,{"data-language":"typescript","data-theme":"default",children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {defineDomConfig} "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'swpp-backends'"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"domConfig"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"defineDomConfig"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"registry"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" () "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"value"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" (() "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"sw"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"navigator"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:".serviceWorker"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" (sw) {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"                "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"sw"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".register"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'$$sw.js'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"                    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".then"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"async"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" registration "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"                        "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".log"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'SWPP 注册成功'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"                        "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"try"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"                            "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// @ts-ignore"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"                            "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"await"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"registration"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"."}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"periodicSync"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".register"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"update"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"                                minInterval"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"24"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"*"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"60"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"*"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"60"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"*"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1000"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"                            })"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"                        } "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"catch"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" (e) {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"                            "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".warn"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Periodic Sync 注册失败'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" e)"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"                        }"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"                    })"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"                    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".catch"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(err "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".error"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'SWPP 注册失败'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" err))"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            } "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"else"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"                "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".warn"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'当前浏览器不支持 SW'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            }"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        })"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".toString"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// noinspection TypeScriptUnresolvedReference"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"path"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"compilation"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"."}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"compilationEnv"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".read"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'SERVICE_WORKER'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"value"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".replace"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"`'$$sw.js'`"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" path "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"+"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'.js'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"})"})})]})}),"\n",(0,r.jsx)(e.p,{children:"  其最终会在 HTML 中插入如下代码（具体形式依赖前端实现，下面只是一个样例）："}),"\n",(0,r.jsx)(e.pre,{"data-language":"html","data-theme":"default",children:(0,r.jsxs)(e.code,{"data-language":"html","data-theme":"default",children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"script"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    (() "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"sw"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"navigator"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:".serviceWorker"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" (sw) {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"sw"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".register"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'sw.js'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"                "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".then"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"async"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" registration "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"                    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".log"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'SWPP 注册成功'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"                    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"try"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"                        "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// @ts-ignore"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"                        "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"await"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"registration"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"."}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"periodicSync"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".register"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"update"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"                            minInterval"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"24"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"*"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"60"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"*"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"60"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"*"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1000"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"                        })"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"                    } "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"catch"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" (e) {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"                        "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".warn"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Periodic Sync 注册失败'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" e)"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"                    }"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"                })"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"                "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".catch"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(err "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".error"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'SWPP 注册失败'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" err))"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        } "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"else"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".warn"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'当前浏览器不支持 SW'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        }"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    })()"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"</"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"script"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]})]})}),"\n",(0,r.jsxs)(e.p,{children:["  您可以参考这个提供自己的实现，以实现定制化的注册通知、失败通知等。示例代码中使用的 ",(0,r.jsx)(e.code,{children:"periodicSync"})," 用于实现后台自动更新，浏览器对该事件的注册有限制，必须客户端通过 PWA 安装网站应用后才能生效，如果注册报错了也是正常现象，无需担心影响其它功能。"]}),"\n",(0,r.jsx)(e.p,{children:" &emsp参考文档："}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/ServiceWorkerContainer/register",children:"register | MDN"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/PeriodicSyncManager",children:"Periodic Sync | MDN"})}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"postmessage2sw",children:"postMessage2Sw"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{align:"center",children:"类型"}),(0,r.jsx)(e.th,{align:"left",children:"说明"}),(0,r.jsx)(e.th,{align:"center",children:"默认值"})]})}),(0,r.jsx)(e.tbody,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{align:"center",children:(0,r.jsx)(e.code,{children:"(type: string) => void"})}),(0,r.jsx)(e.td,{align:"left",children:"向 SW 发送信息"}),(0,r.jsx)(e.td,{align:"center",children:"忽略"})]})})]}),"\n",(0,r.jsx)(e.p,{children:"  该函数用于从 DOM 端向 SW 端发送消息，默认实现如下："}),"\n",(0,r.jsx)(e.pre,{"data-language":"javascript","data-theme":"default",children:(0,r.jsxs)(e.code,{"data-language":"javascript","data-theme":"default",children:[(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// noinspection JSUnusedLocalSymbols"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"postMessage2Sw"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" (type) "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"navigator"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"."}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"serviceWorker"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"."}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"controller"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".postMessage"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(type)"})]})]})}),"\n",(0,r.jsx)(e.p,{children:"  该实现通常不需要修改，如果您希望实现更多的功能，可以修改函数的参数类型，只需要保证传入一个字符串时能够正常运行即可。（当然如果你把调用这个函数的地方都改了那么就什么限制都没有了。）"}),"\n",(0,r.jsx)(e.h2,{id:"pjaxupdate",children:"pjaxUpdate"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{align:"center",children:"类型"}),(0,r.jsx)(e.th,{align:"left",children:"说明"}),(0,r.jsx)(e.th,{align:"center",children:"默认值"})]})}),(0,r.jsx)(e.tbody,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{align:"center",children:(0,r.jsx)(e.code,{children:"(url: string) => void"})}),(0,r.jsx)(e.td,{align:"left",children:"更新 pjax"}),(0,r.jsx)(e.td,{align:"center",children:"忽略"})]})})]}),"\n",(0,r.jsxs)(e.p,{children:["  对于安装了 ",(0,r.jsx)(e.a,{href:"https://kmar.top/posts/dbf5bf98/",children:"pjax"})," 的用户来说，如果刷新缓存后直接使用代码刷新页面，那么 js 和 css 的更新将无法应用，所以对于启用 ",(0,r.jsx)(e.code,{children:"pjax"})," 的用户需要使用该函数将页面中的 js 和 css 进行更新。"]}),"\n",(0,r.jsxs)(e.p,{children:["  默认实现更新的原理是将需要更新的资源文件对应的引入标签从 DOM 中移除并重新放入；函数传入的 ",(0,r.jsx)(e.code,{children:"url"})," 参数是本次更新的资源的 URL。"]}),"\n",(0,r.jsx)(e.h2,{id:"session_key",children:"SESSION_KEY"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{align:"center",children:"类型"}),(0,r.jsx)(e.th,{align:"left",children:"说明"}),(0,r.jsx)(e.th,{align:"center",children:"默认值"})]})}),(0,r.jsx)(e.tbody,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{align:"center",children:(0,r.jsx)(e.code,{children:"string"})}),(0,r.jsx)(e.td,{align:"left",children:"存储 session 的 key"}),(0,r.jsx)(e.td,{align:"center",children:(0,r.jsx)(e.code,{children:"'updated'"})})]})})]}),"\n",(0,r.jsx)(e.p,{children:"  swpp 通过向 session 中存储一个临时数据来判断刚刚是否更新过缓存，此处用于修改这个 key。"}),"\n",(0,r.jsx)(e.h2,{id:"onsuccess",children:"onSuccess"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{align:"center",children:"类型"}),(0,r.jsx)(e.th,{align:"left",children:"说明"}),(0,r.jsx)(e.th,{align:"center",children:"默认值"})]})}),(0,r.jsx)(e.tbody,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{align:"center",children:(0,r.jsx)(e.code,{children:"() => void"})}),(0,r.jsx)(e.td,{align:"left",children:"缓存更新成功时触发的操作"}),(0,r.jsx)(e.td,{align:"center",children:"控制台打印提示信息"})]})})]}),"\n",(0,r.jsx)(e.p,{children:"  该配置项传入的函数将会在缓存更新成功后触发。"}),"\n",(0,r.jsx)(e.h2,{id:"_inlinea",children:"_inlineA"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{align:"center",children:"类型"}),(0,r.jsx)(e.th,{align:"left",children:"说明"}),(0,r.jsx)(e.th,{align:"center",children:"默认值"})]})}),(0,r.jsx)(e.tbody,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{align:"center",children:(0,r.jsx)(e.code,{children:"() => void"})}),(0,r.jsxs)(e.td,{align:"left",children:["触发更新和 ",(0,r.jsx)(e.code,{children:"onSuccess"})]}),(0,r.jsx)(e.td,{align:"center",children:"省略"})]})})]}),"\n",(0,r.jsxs)(e.p,{children:["  该配置项传入的代码块用于触发缓存的更新和 ",(0,r.jsx)(e.code,{children:"onSuccess"}),"。"]}),"\n",(0,r.jsx)(e.h2,{id:"messageevent",children:"messageEvent"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{align:"center",children:"类型"}),(0,r.jsx)(e.th,{align:"left",children:"说明"}),(0,r.jsx)(e.th,{align:"center",children:"默认值"})]})}),(0,r.jsx)(e.tbody,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{align:"center",children:(0,r.jsx)(e.code,{children:"(event: MessageEvent) => void"})}),(0,r.jsx)(e.td,{align:"left",children:"接受 SW 发送过来的消息"}),(0,r.jsx)(e.td,{align:"center",children:"省略"})]})})]}),"\n",(0,r.jsxs)(e.p,{children:["  当 SW 发送消息到 DOM 端时会触发该事件，具体参考：",(0,r.jsx)(e.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/MessageEvent",children:"MessageEvent | MDN"}),"。"]})]})}let h={MDXContent:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,t.a)(),s.components);return e?(0,r.jsx)(e,{...s,children:(0,r.jsx)(a,{...s})}):a(s)},pageOpts:{filePath:"pages/config/dom_config.mdx",route:"/config/dom_config",timestamp:1723883597e3,pageMap:[{kind:"Meta",data:{index:"介绍",quickstart:"快速开始",config:"配置文件"}},{kind:"Folder",name:"config",route:"/config",children:[{kind:"Meta",data:{compilation_env:"CompilationEnv",cross_env:"CrossEnv",runtime_dep:"RuntimeDep",cross_dep:"CrossDep",runtime_core:"RuntimeCore",runtime_event:"RuntimeEvent",dom_config:"DomConfig",modifier:"Modifier"}},{kind:"MdxPage",name:"compilation_env",route:"/config/compilation_env"},{kind:"MdxPage",name:"cross_dep",route:"/config/cross_dep"},{kind:"MdxPage",name:"cross_env",route:"/config/cross_env"},{kind:"MdxPage",name:"dom_config",route:"/config/dom_config"},{kind:"MdxPage",name:"modifier",route:"/config/modifier"},{kind:"MdxPage",name:"runtime_core",route:"/config/runtime_core"},{kind:"MdxPage",name:"runtime_dep",route:"/config/runtime_dep"},{kind:"MdxPage",name:"runtime_event",route:"/config/runtime_event"}]},{kind:"MdxPage",name:"config",route:"/config"},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"quickstart",route:"/quickstart"}],flexsearch:{codeblocks:!0},title:"DOM JS 相关配置",headings:c},pageNextRoute:"/config/dom_config",nextraLayout:i.ZP,themeConfig:o.Z};e.default=(0,l.j)(h)},2534:function(s,e,n){"use strict";var r=n(2676);n(5271);var l=n(5458);let i="Swpp 官方文档";e.Z={logo:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",className:"icon",viewBox:"0 0 1024 1024",fill:"currentcolor",children:[(0,r.jsx)("path",{d:"M469.333 810.667V341.333a128 128 0 0 0-128-128H128v597.334zM512 213.333A212.992 212.992 0 0 1 682.667 128h298.666v768H42.667V128h298.666c69.803 0 131.755 33.493 170.667 85.333m42.667 128v469.334H896V213.333H682.667a128 128 0 0 0-128 128"}),(0,r.jsx)("text",{xmlSpace:"preserve",x:"215",y:"485",fillOpacity:"null",stroke:"null",strokeOpacity:"null",strokeWidth:"0",fontFamily:"'Courier New', Courier, monospace",fontSize:"250",fontWeight:"bold",transform:"matrix(2.177 0 0 2.07854 -332.879 -331.617)",children:"S"}),(0,r.jsx)("text",{xmlSpace:"preserve",x:"653",y:"499",fillOpacity:"null",stroke:"null",strokeOpacity:"null",strokeWidth:"0",fontFamily:"'Courier New', Courier, monospace",fontSize:"250",fontWeight:"bold",transform:"matrix(1.78385 0 0 2.06235 -570.614 -357.776)",children:"W"})]}),(0,r.jsx)("span",{style:{marginLeft:".4em",fontWeight:"bold"},children:i})]}),sidebar:{defaultMenuCollapseLevel:1},project:{link:"https://github.com/EmptyDreams/swpp-backends"},docsRepositoryBase:"https://github.com/EmptyDreams/swpp_document/tree/main/",useNextSeoProps:()=>({titleTemplate:"%s – ".concat(i)}),footer:{text:"\xa9 2024-present ".concat(i)},head:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,r.jsx)("meta",{property:"og:description",content:"Service Worker Plus Plus 的官方文档"}),(0,r.jsx)("meta",{name:"keywords",content:"ServiceWorker, swpp"})]}),...l.Z}},5184:function(){}},function(s){s.O(0,[580,888,774,179],function(){return s(s.s=6076)}),_N_E=s.O()}]);