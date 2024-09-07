(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[468],{1479:function(s,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/config/modifier",function(){return n(9123)}])},9123:function(s,e,n){"use strict";n.r(e),n.d(e,{__toc:function(){return o}});var l=n(2676),r=n(8216),i=n(6852);let o=[{depth:2,value:"build",id:"build"},{depth:2,value:"registry",id:"registry"},{depth:2,value:"dynamicUpdate",id:"dynamicupdate"}];function c(s){let e=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code",span:"span",h2:"h2"},(0,i.a)(),s.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{children:"动态修改器"}),"\n",(0,l.jsx)(e.p,{children:"  动态修改器用于在各个阶段执行特定的任务，不同配置文件中的修改器不会相互覆盖。"}),"\n",(0,l.jsx)(e.p,{children:"  您可以通过下面的代码定义并导出一个修改器："}),"\n",(0,l.jsx)(e.pre,{"data-language":"typescript","data-theme":"default",children:(0,l.jsxs)(e.code,{"data-language":"typescript","data-theme":"default",children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {defineModifier} "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'swpp-backends'"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"defineModifier"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"})"})})]})}),"\n",(0,l.jsx)(e.h2,{id:"build",children:"build"}),"\n",(0,l.jsxs)(e.p,{children:["  ",(0,l.jsx)(e.code,{children:"build"})," 函数用于将 swpp 内部使用的 ",(0,l.jsx)(e.code,{children:"RuntimeData"})," 和 ",(0,l.jsx)(e.code,{children:"CompilationData"})," 替换为您的实现，如果在多个配置文件中均定义了 ",(0,l.jsx)(e.code,{children:"build"})," 函数，那么将只有优先级最高的 ",(0,l.jsx)(e.code,{children:"build"})," 生效。"]}),"\n",(0,l.jsxs)(e.p,{children:["  默认创建 ",(0,l.jsx)(e.code,{children:"RuntimeData"})," 和 ",(0,l.jsx)(e.code,{children:"CompilationData"})," 的代码如下："]}),"\n",(0,l.jsx)(e.pre,{"data-language":"typescript","data-theme":"default",children:(0,l.jsxs)(e.code,{"data-language":"typescript","data-theme":"default",children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// noinspection TypeScriptUnresolvedReference"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"() "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"compilation"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"new"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"CompilationData"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"runtime"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"new"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"RuntimeData"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(compilation)"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {runtime"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" compilation}"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,l.jsxs)(e.p,{children:["  您可以通过定义 ",(0,l.jsx)(e.code,{children:"build"})," 函数来让 swpp 使用您的实现："]}),"\n",(0,l.jsx)(e.pre,{"data-language":"typescript","data-theme":"default",children:(0,l.jsxs)(e.code,{"data-language":"typescript","data-theme":"default",children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// noinspection TypeScriptUnresolvedReference"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {defineModifier} "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'swpp-backends'"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"defineModifier"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"build"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" () "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// do something"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            runtime"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" xxx"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            compilation"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" xxxx"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        }"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"})"})})]})}),"\n",(0,l.jsx)(e.h2,{id:"registry",children:"registry"}),"\n",(0,l.jsx)(e.p,{children:"  如果您在看到这里之前尝试向环境变量中写入您自己定义的值，您会发现在运行时将会产生错误，因为 swpp 为了避免您出现拼写错误，不允许向配置中写入不存在的键。"}),"\n",(0,l.jsxs)(e.p,{children:["  ",(0,l.jsx)(e.code,{children:"registry"})," 的作用就是向环境变量中注册新的键（该函数内应当只调用 ",(0,l.jsx)(e.code,{children:"xxx.append"})," 函数及其它工具函数，非必要不应当包含其它有副作用的操作），优先级越低该函数越早执行："]}),"\n",(0,l.jsx)(e.pre,{"data-language":"typescript","data-theme":"default",children:(0,l.jsxs)(e.code,{"data-language":"typescript","data-theme":"default",children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// noinspection TypeScriptUnresolvedReference,JSUnusedLocalSymbols"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {defineModifier} "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'swpp-backends'"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"defineModifier"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"registry"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" (runtime"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"RuntimeData"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" compilation"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"CompilationData"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"runtime"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"."}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"crossEnv"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".append"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'your_key'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// 使用 default 定义缺省值"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            default"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'default value'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// 可选项：通过 checker 检查配置项中填入的值（或缺省值）是否合法"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// 合法返回 false，否则返回 RuntimeEnvErrorTemplate<T>，也就是 { value: T, message: string }"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// 此处实际为一个泛型，value 的类型与 default 是同一个类型"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// 您不需要在 checker 中检查 value 的类型是否与 default 相同，swpp 会在调用 checker 之前自动判断"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"checker"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(value"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"false"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"RuntimeEnvErrorTemplate"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"T"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"> {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"                "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"!"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"value) "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"                    value"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" message"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'your_key 不能为空'"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"                }"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"                "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"false"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            }"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        })"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"})"})})]})}),"\n",(0,l.jsx)(e.h2,{id:"dynamicupdate",children:"dynamicUpdate"}),"\n",(0,l.jsx)(e.p,{children:"  本函数用于动态修改属性的值，函数内应当只调用 xxx. update 函数及其它工具函数，非必要不应当包含其它有副作用的操作，优先级越低该函数越早执行："}),"\n",(0,l.jsx)(e.pre,{"data-language":"typescript","data-theme":"default",children:(0,l.jsxs)(e.code,{"data-language":"typescript","data-theme":"default",children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// noinspection TypeScriptUnresolvedReference"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {defineModifier} "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'swpp-backends'"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"defineModifier"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// 这个示例的功能是在配置中填写的有 `key_a` 后修改 `key_b` 的值"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"dynamicUpdate"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" (runtime"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"RuntimeData"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" compilation"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"CompilationData"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"runtime"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"."}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"crossEnv"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".hasValue"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'key_a'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")) {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"compilation"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"."}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"compilationEnv"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".update"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'key_b'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'key_a has value'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        }"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"})"})})]})})]})}e.default=(0,r.j)({MDXContent:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,i.a)(),s.components);return e?(0,l.jsx)(e,{...s,children:(0,l.jsx)(c,{...s})}):c(s)},pageOpts:{filePath:"pages/config/modifier.mdx",route:"/config/modifier",timestamp:1725684212e3,title:"动态修改器",headings:o},pageNextRoute:"/config/modifier"})}},function(s){s.O(0,[216,888,774,179],function(){return s(s.s=1479)}),_N_E=s.O()}]);