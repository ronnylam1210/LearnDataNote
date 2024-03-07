"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[3569],{3671:(n,e)=>{e.A=(n,e)=>{const a=n.__vccOpts||n;for(const[n,t]of e)a[n]=t;return a}},8016:(n,e,a)=>{a.r(e),a.d(e,{comp:()=>m,data:()=>u});var t=a(7847);const s=(0,t.Lk)("p",null,"Markdown 是一种轻量级标记语言，易读易写，并对于图片、图表、数学式都有支持，目前许多网站与应用都支持了 Markdown。",-1),o={href:"https://docs.github.com/cn/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#styling-text",target:"_blank",rel:"noopener noreferrer"},r={href:"https://theme-hope.vuejs.press/zh/cookbook/markdown/",target:"_blank",rel:"noopener noreferrer"},i=(0,t.Fv)('<h2 id="图片尺寸" tabindex="-1"><a class="header-anchor" href="#图片尺寸"><span>图片尺寸</span></a></h2><p>md 格式调整图片尺寸，在不同编辑器中显示效果不同，不一定会生效。使用 html 格式调整图片尺寸能确保成功率。</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token comment">&lt;!-- 按页面宽度的 60% 来缩小 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>60%<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n\n<span class="token comment">&lt;!-- md 图片设置，有时不能被识别 --&gt;</span>\n\n![同时设置宽度和高度](https://files.mdnice.com/logo.png =150x150)\n![只设置宽度，推荐使用百分比](https://files.mdnice.com/logo.png =40%x)\n\n<span class="token comment">&lt;!-- 指针移动到图片时，显示图片说明 --&gt;</span>\n\n<span class="token url"><span class="token operator">!</span>[<span class="token content">name</span>](<span class="token url">https://docsify.js.org/_media/icon.svg</span> <span class="token string">&quot;图片说明&quot;</span>)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',3),l={href:"https://developer.qiniu.com/dora/kb/1627/flow-optimization-compression-of-images",target:"_blank",rel:"noopener noreferrer"},d={href:"https://developer.qiniu.com/dora/8255/the-zoom",target:"_blank",rel:"noopener noreferrer"},p=(0,t.Fv)('<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 按图片尺寸的 60% 等比缩小 --&gt;</span>\n?imageMogr2/thumbnail/!60p\n\n<span class="token comment">&lt;!-- 指定图片宽度 --&gt;</span>\n?imageMogr2/thumbnail/500x\n\n<span class="token comment">&lt;!-- 指定宽度，调整质量，改变格式 --&gt;</span>\n?imageMogr2/thumbnail/500x/strip/quality/50/format/webp\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="资料引用" tabindex="-1"><a class="header-anchor" href="#资料引用"><span>资料引用</span></a></h2><p>文章中加 <code>^[引用内容]</code> 会在底部自动添加引用资料。如果想添加链接标题，则为 <code>^[[标题](链接)]</code>。</p><p>如果同一引用要在多个地方使用，则需要手动编号。</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>这是一条引用 [^1]\n这是一条引用 [^2]\n这是一条引用 [^1]\n这是一条引用 [^3]\n[^1]:链接\n[^2]:<span class="token url">[<span class="token content">标题</span>](<span class="token url">链接</span>)</span>\n[^3]:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span><span class="token url"><span class="token operator">!</span>[<span class="token content">图片描述</span>](<span class="token url">图片链接</span>)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代码块自动换行" tabindex="-1"><a class="header-anchor" href="#代码块自动换行"><span>代码块自动换行</span></a></h2><p>自动换行需要 css 支持，暂不能自动启用。</p><h2 id="整段删除线" tabindex="-1"><a class="header-anchor" href="#整段删除线"><span>整段删除线</span></a></h2><p><code>~~</code> 只支持对本行内容添加删除线。</p><p>如果要对大段内容添加删除线，可以用 HTML 标签 <code>&lt;s&gt;</code> 和 <code>&lt;/s&gt;</code>，被该标签包围的内容会全部添加删除线。VuePress 暂不支持该代码，会将标签识别为不完整而报错。</p>',10),c={},m=(0,a(3671).A)(c,[["render",function(n,e){const a=(0,t.g2)("ExternalLinkIcon");return(0,t.uX)(),(0,t.CE)("div",null,[s,(0,t.Lk)("p",null,[(0,t.eW)("Markdown 入门："),(0,t.Lk)("a",o,[(0,t.eW)("Markdown 基本撰写和格式语法"),(0,t.bF)(a)]),(0,t.eW)("，"),(0,t.Lk)("a",r,[(0,t.eW)("Markdown 转 HTML 语法介绍"),(0,t.bF)(a)])]),i,(0,t.Lk)("p",null,[(0,t.eW)("七牛云图床提供"),(0,t.Lk)("a",l,[(0,t.eW)("图片流量优化压缩策略"),(0,t.bF)(a)]),(0,t.eW)("，可用于调整图片的分辨率、大小和格式，具体参数请参考"),(0,t.Lk)("a",d,[(0,t.eW)("七牛云图片高级处理"),(0,t.bF)(a)]),(0,t.eW)("。此外，我还会定期使用 PP 鸭对图床中的图片进行重新压缩。")]),p])}]]),u=JSON.parse('{"path":"/code/Markdown.html","title":"Markdown","lang":"zh-CN","frontmatter":{"article":false,"title":"Markdown","icon":"markdown","order":5,"description":"Markdown 是一种轻量级标记语言，易读易写，并对于图片、图表、数学式都有支持，目前许多网站与应用都支持了 Markdown。 Markdown 入门：Markdown 基本撰写和格式语法，Markdown 转 HTML 语法介绍 图片尺寸 md 格式调整图片尺寸，在不同编辑器中显示效果不同，不一定会生效。使用 html 格式调整图片尺寸能确保成功...","head":[["meta",{"property":"og:url","content":"https://newzone.top/code/Markdown.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"Markdown"}],["meta",{"property":"og:description","content":"Markdown 是一种轻量级标记语言，易读易写，并对于图片、图表、数学式都有支持，目前许多网站与应用都支持了 Markdown。 Markdown 入门：Markdown 基本撰写和格式语法，Markdown 转 HTML 语法介绍 图片尺寸 md 格式调整图片尺寸，在不同编辑器中显示效果不同，不一定会生效。使用 html 格式调整图片尺寸能确保成功..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:image","content":"https://files.mdnice.com/logo.png =150x150"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-07T06:22:46.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Markdown"}],["meta",{"property":"article:author","content":"LearnData"}],["meta",{"property":"article:modified_time","content":"2024-03-07T06:22:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Markdown\\",\\"description\\":\\"Markdown 是一种轻量级标记语言，易读易写，并对于图片、图表、数学式都有支持，目前许多网站与应用都支持了 Markdown。 Markdown 入门：Markdown 基本撰写和格式语法，Markdown 转 HTML 语法介绍 图片尺寸 md 格式调整图片尺寸，在不同编辑器中显示效果不同，不一定会生效。使用 html 格式调整图片尺寸能确保成功...\\"}"]]},"headers":[{"level":2,"title":"图片尺寸","slug":"图片尺寸","link":"#图片尺寸","children":[]},{"level":2,"title":"资料引用","slug":"资料引用","link":"#资料引用","children":[]},{"level":2,"title":"代码块自动换行","slug":"代码块自动换行","link":"#代码块自动换行","children":[]},{"level":2,"title":"整段删除线","slug":"整段删除线","link":"#整段删除线","children":[]}],"git":{"createdTime":1709792566000,"updatedTime":1709792566000,"contributors":[{"name":"ronnylam1210","email":"33535307+ronnylam1210@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.8,"words":541},"filePathRelative":"code/Markdown.md","localizedDate":"2024年3月7日","excerpt":"<p>Markdown 是一种轻量级标记语言，易读易写，并对于图片、图表、数学式都有支持，目前许多网站与应用都支持了 Markdown。</p>\\n<p>Markdown 入门：<a href=\\"https://docs.github.com/cn/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#styling-text\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Markdown 基本撰写和格式语法</a>，<a href=\\"https://theme-hope.vuejs.press/zh/cookbook/markdown/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Markdown 转 HTML 语法介绍</a></p>","autoDesc":true}')}}]);