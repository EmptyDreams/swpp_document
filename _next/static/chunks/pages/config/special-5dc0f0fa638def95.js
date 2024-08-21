(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[665],{5888:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/config/special",function(){return n(141)}])},141:function(e,s,n){"use strict";n.r(s),n.d(s,{__toc:function(){return a}});var i=n(2676),l=n(3313),r=n(8136),o=n(2534);n(681);var c=n(5594);let a=[{depth:2,value:"不可分割配置",id:"不可分割配置"},{depth:2,value:"不可缓存配置",id:"不可缓存配置"},{depth:2,value:"延迟初始化配置",id:"延迟初始化配置"}];function t(e){let s=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",span:"span",h2:"h2",ol:"ol",li:"li"},(0,c.a)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{children:"配置工具介绍与应用"}),"\n",(0,i.jsxs)(s.p,{children:["  细心的朋友会发现除了前文提到的一系列 ",(0,i.jsx)(s.code,{children:"defineXxx"})," 函数外，还有一些 ",(0,i.jsx)(s.code,{children:"define"})," 打头的函数没有提到，这些函数是一些方便用户进行个性化配置的一些工具函数。"]}),"\n",(0,i.jsxs)(s.p,{children:["  这些工具函数构建的配置项有两大分类：",(0,i.jsx)(s.code,{children:"SpecialConfig"})," 和 ",(0,i.jsx)(s.code,{children:"RuntimeSpecialConfig"}),"，其中 ",(0,i.jsx)(s.code,{children:"RuntimeSpecialConfig"})," 从前者派生。"]}),"\n",(0,i.jsxs)(s.p,{children:["  从名字很容易可以看出来，",(0,i.jsx)(s.code,{children:"RuntimeSpecialConfig"})," 的声明周期要更长一些，实际上也正是如此，",(0,i.jsx)(s.code,{children:"SpecialConfig"})," 的生命周期为构建配置到配置完成导入，而 ",(0,i.jsx)(s.code,{children:"RuntimeSpecialConfig"})," 的声明周期会从构建配置持续到 swpp 结束运行。"]}),"\n",(0,i.jsx)(s.p,{children:"  这一系列函数的用法非常简单："}),"\n",(0,i.jsx)(s.pre,{"data-language":"typescript","data-theme":"default",children:(0,i.jsxs)(s.code,{"data-language":"typescript","data-theme":"default",children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {defineConfig"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" defineXxx} "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'swpp-backends'"})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:" "}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// noinspection TypeScriptUnresolvedReference"})}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"defineConfig"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    runtimeDep"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// 注意这些工具函数可以也只能在配置项名称后方使用，且不可嵌套使用"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      example"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"defineXxx"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"args)"})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"})"})})]})}),"\n",(0,i.jsx)(s.h2,{id:"不可分割配置",children:"不可分割配置"}),"\n",(0,i.jsxs)(s.p,{children:["  继承关系：",(0,i.jsx)(s.code,{children:"IndivisibleConfig"})," <- ",(0,i.jsx)(s.code,{children:"SpecialConfig"})]}),"\n",(0,i.jsx)(s.p,{children:"  默认情况下，swpp 会对产生冲突的配置项按照优先级进行合并，当定义一个对象配置时，将允许从其它配置文件中合并一部分配置到对象中，比如："}),"\n",(0,i.jsx)(s.pre,{"data-language":"typescript","data-theme":"default",children:(0,i.jsxs)(s.code,{"data-language":"typescript","data-theme":"default",children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {defineXxx} "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'swpp-backends'"})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:" "}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// 当前配置"})}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"defineXxx"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    value"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        example1"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'hello world'"})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"})"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// 如果还有一个配置文件中也声明了这个配置"})}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"defineXxx"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    value"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        example2"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'hello swpp'"})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"})"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// 最终将合并生成如下配置"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// value: {"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"//     example1: 'hello world',"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"//     example2: 'hello swpp'"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// }"})})]})}),"\n",(0,i.jsx)(s.p,{children:"  该函数用于定义一个无法分割的对象配置，这对一些强依赖对象内部属性的设置很有用，可以避免对象被错误地拼接。"}),"\n",(0,i.jsxs)(s.p,{children:["  通过该函数，可以禁止 swpp 合并配置时仅选取对象的部分字段，要么全部使用 ",(0,i.jsx)(s.code,{children:"[value]"})," 的值，要么完全不使用 ",(0,i.jsx)(s.code,{children:"[value]"})," 的值。"]}),"\n",(0,i.jsxs)(s.p,{children:["  放入到上述例子中，假如两个对象中任意一个或多个通过 ",(0,i.jsx)(s.code,{children:"defineIndivisibleConfig({ xxx: xxx })"})," 设置，最终的值将取决于两个配置文件的优先级， 若 ",(0,i.jsx)(s.code,{children:"example1"})," 的优先级高将产生："]}),"\n",(0,i.jsx)(s.pre,{"data-language":"typescript","data-theme":"default",children:(0,i.jsxs)(s.code,{"data-language":"typescript","data-theme":"default",children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {defineXxx"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" defineIndivisibleConfig} "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'swpp-backends'"})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:" "}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// 当前配置"})}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"defineXxx"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    value"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"defineIndivisibleConfig"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        example1"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'hello world'"})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    })"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"})"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// 如果还有一个配置文件中也声明了这个配置"})}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"defineXxx"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    value"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        example2"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'hello swpp'"})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"})"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// 最终将合并生成如下配置"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// value: {"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"//     example1: 'hello world'"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// }"})})]})}),"\n",(0,i.jsx)(s.p,{children:"  注意事项："}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["仅有在两个对象中存在使用 ",(0,i.jsx)(s.code,{children:"defineIndivisibleConfig"})," 定义的配置时才会禁用配置合并，假设现在有 ",(0,i.jsx)(s.code,{children:"A"})," > ",(0,i.jsx)(s.code,{children:"B"})," > ",(0,i.jsx)(s.code,{children:"C"})," 三个配置项都产生了冲突，其中 ",(0,i.jsx)(s.code,{children:"A"})," 优先级最高，但是只有 ",(0,i.jsx)(s.code,{children:"C"})," 使用了 ",(0,i.jsx)(s.code,{children:"defineIndivisibleConfig"}),"，那么 ",(0,i.jsx)(s.code,{children:"A"})," 将与 ",(0,i.jsx)(s.code,{children:"B"})," 完成合并后再与 ",(0,i.jsx)(s.code,{children:"C"})," 进行尝试合并，由于 ",(0,i.jsx)(s.code,{children:"C"})," 不能分割且优先级低，所以最终将产生 ",(0,i.jsx)(s.code,{children:"A"})," 与 ",(0,i.jsx)(s.code,{children:"B"})," 合并后的结果。"]}),"\n",(0,i.jsxs)(s.li,{children:["如果次级配置文件中使用 ",(0,i.jsx)(s.code,{children:"defineIndivisibleConfig"})," 定义了某项配置，如果您需要覆盖这个配置，注意您无法使用这个配置中的内容，需要手动重写整个配置项。"]}),"\n",(0,i.jsxs)(s.li,{children:["除 ",(0,i.jsx)(s.code,{children:"IndivisibleConfig"})," 外，所有的 ",(0,i.jsx)(s.code,{children:"RuntimeSpecialConfig"})," 都会携带与 ",(0,i.jsx)(s.code,{children:"IndivisibleConfig"})," 相同的副作用。"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"不可缓存配置",children:"不可缓存配置"}),"\n",(0,i.jsxs)(s.p,{children:["  继承关系：",(0,i.jsx)(s.code,{children:"NoCacheConfig"})," <- ",(0,i.jsx)(s.code,{children:"RuntimeSpecialConfig"})," <- ",(0,i.jsx)(s.code,{children:"SpecialConfig"})]}),"\n",(0,i.jsx)(s.p,{children:"  默认情况下，swpp 会缓存配置项的结果，下一次读取同一个配置项时便不需要经过类型检查等操作。有些时候您可能希望每一次读取值时都动态读取，那么可以使用此方法禁用缓存。"}),"\n",(0,i.jsx)(s.p,{children:"  注意：该选项禁用缓存后对于性能有些许影响，计算结果和校验的成本越高影响越大，一般情况下无显著影响。"}),"\n",(0,i.jsxs)(s.p,{children:["  对于下方这个例子，第一种写法每次读取该项配置时，结果都将相同，如果第一次为 ",(0,i.jsx)(s.code,{children:"123456"})," 那么以后永远都将是 ",(0,i.jsx)(s.code,{children:"123456"}),"；而对于第二种写法，则每次调用时都能动态地获取当前系统时间。"]}),"\n",(0,i.jsx)(s.pre,{"data-language":"typescript","data-theme":"default",children:(0,i.jsxs)(s.code,{"data-language":"typescript","data-theme":"default",children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {defineXxx"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" defineNoCacheConfig} "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'swpp-backends'"})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:" "}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// config 1"})}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"defineXxx"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    example"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"Date"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".now"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"})"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// config 2"})}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"defineXxx"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    example"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"defineNoCacheConfig"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(() "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"Date"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".now"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"())"})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"})"})})]})}),"\n",(0,i.jsx)(s.h2,{id:"延迟初始化配置",children:"延迟初始化配置"}),"\n",(0,i.jsxs)(s.p,{children:["  继承关系：",(0,i.jsx)(s.code,{children:"LazyInitConfig"})," <- ",(0,i.jsx)(s.code,{children:"RuntimeSpecialConfig"})," <- ",(0,i.jsx)(s.code,{children:"SpecialConfig"})]}),"\n",(0,i.jsx)(s.p,{children:"  默认情况下，swpp 会在加载配置文件时对各项配置的值进行计算，此时就出现了一个问题，您无法在设置配置时访问其它配置内容。"}),"\n",(0,i.jsx)(s.p,{children:"  如果您希望能够延后计算配置项的值以访问其它配置项，则可以使用该函数定义配置。"}),"\n",(0,i.jsx)(s.p,{children:"  例："}),"\n",(0,i.jsx)(s.pre,{"data-language":"typescript","data-theme":"default",children:(0,i.jsxs)(s.code,{"data-language":"typescript","data-theme":"default",children:[(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// noinspection TypeScriptUnresolvedReference,JSUnusedLocalSymbols"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:" "}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {defineXxx"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" defineLazyInitConfig} "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'swpp-backends'"})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:" "}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"defineXxx"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    example"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"defineLazyInitConfig"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"((runtime"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" compilation) "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// 这里的代码将在第一次读取配置时执行"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// do something"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" _result"})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    })"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"})"})})]})})]})}let d={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,c.a)(),e.components);return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(t,{...e})}):t(e)},pageOpts:{filePath:"pages/config/special.mdx",route:"/config/special",timestamp:1724236085e3,pageMap:[{kind:"Meta",data:{index:"介绍",quickstart:"快速开始",config:"配置文件"}},{kind:"Folder",name:"config",route:"/config",children:[{kind:"Meta",data:{runtime_dep:"RuntimeDep",cross_env:"CrossEnv",compilation_env:"CompilationEnv",runtime_core:"RuntimeCore",cross_dep:"CrossDep",runtime_event:"RuntimeEvent",dom_config:"DomConfig",modifier:"Modifier",compilation_file_parser:"CompilationFileParser",special:"配置工具"}},{kind:"MdxPage",name:"compilation_env",route:"/config/compilation_env"},{kind:"MdxPage",name:"compilation_file_parser",route:"/config/compilation_file_parser"},{kind:"MdxPage",name:"cross_dep",route:"/config/cross_dep"},{kind:"MdxPage",name:"cross_env",route:"/config/cross_env"},{kind:"MdxPage",name:"dom_config",route:"/config/dom_config"},{kind:"MdxPage",name:"modifier",route:"/config/modifier"},{kind:"MdxPage",name:"runtime_core",route:"/config/runtime_core"},{kind:"MdxPage",name:"runtime_dep",route:"/config/runtime_dep"},{kind:"MdxPage",name:"runtime_event",route:"/config/runtime_event"},{kind:"MdxPage",name:"special",route:"/config/special"}]},{kind:"MdxPage",name:"config",route:"/config"},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"quickstart",route:"/quickstart"}],flexsearch:{codeblocks:!0},title:"配置工具介绍与应用",headings:a},pageNextRoute:"/config/special",nextraLayout:r.ZP,themeConfig:o.Z};s.default=(0,l.j)(d)},2534:function(e,s,n){"use strict";var i=n(2676);n(5271);var l=n(5458);let r="Swpp 官方文档";s.Z={logo:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",className:"icon",viewBox:"0 0 1024 1024",fill:"currentcolor",children:[(0,i.jsx)("path",{d:"M469.333 810.667V341.333a128 128 0 0 0-128-128H128v597.334zM512 213.333A212.992 212.992 0 0 1 682.667 128h298.666v768H42.667V128h298.666c69.803 0 131.755 33.493 170.667 85.333m42.667 128v469.334H896V213.333H682.667a128 128 0 0 0-128 128"}),(0,i.jsx)("text",{xmlSpace:"preserve",x:"215",y:"485",fillOpacity:"null",stroke:"null",strokeOpacity:"null",strokeWidth:"0",fontFamily:"'Courier New', Courier, monospace",fontSize:"250",fontWeight:"bold",transform:"matrix(2.177 0 0 2.07854 -332.879 -331.617)",children:"S"}),(0,i.jsx)("text",{xmlSpace:"preserve",x:"653",y:"499",fillOpacity:"null",stroke:"null",strokeOpacity:"null",strokeWidth:"0",fontFamily:"'Courier New', Courier, monospace",fontSize:"250",fontWeight:"bold",transform:"matrix(1.78385 0 0 2.06235 -570.614 -357.776)",children:"W"})]}),(0,i.jsx)("span",{style:{marginLeft:".4em",fontWeight:"bold"},children:r})]}),sidebar:{defaultMenuCollapseLevel:1},project:{link:"https://github.com/EmptyDreams/swpp-backends"},docsRepositoryBase:"https://github.com/EmptyDreams/swpp_document/tree/main/",useNextSeoProps:()=>({titleTemplate:"%s – ".concat(r)}),footer:{text:"\xa9 2024-present ".concat(r)},head:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,i.jsx)("meta",{property:"og:description",content:"Service Worker Plus Plus 的官方文档"}),(0,i.jsx)("meta",{name:"keywords",content:"ServiceWorker, swpp"})]}),...l.Z}},5184:function(){}},function(e){e.O(0,[580,888,774,179],function(){return e(e.s=5888)}),_N_E=e.O()}]);