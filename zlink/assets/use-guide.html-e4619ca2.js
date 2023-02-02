import{_ as i,V as e,W as a,X as n}from"./framework-d65a3be7.js";const t="/zlink/assets/image-20230202164709623-d6664f7e.png",s="/zlink/assets/image-20230202144528778-a9865e8d.png",c="/zlink/assets/image-20230202144714884-ec6dbfb5.png",r="/zlink/assets/image-20230202144841436-ef824ce6.png",g="/zlink/assets/image-20230202144905338-e7b6ffe2.png",f="/zlink/assets/image-20230202145207452-d6134af4.png",o="/zlink/assets/image-20230202145254271-74323658.png",d="/zlink/assets/image-20230202145429713-096e1b40.png",p="/zlink/assets/image-20230202145602564-52cc79aa.png",l="/zlink/assets/image-20230202150120349-18fabd50.png",h="/zlink/assets/image-20230202150622779-0290f693.png",m="/zlink/assets/image-20230202150735439-90d09530.png",_="/zlink/assets/image-20230202150950050-fe50d5af.png",u="/zlink/assets/image-20230202151142914-0f0a3332.png",k={},b=n('<h2 id="登录界面" tabindex="-1"><a class="header-anchor" href="#登录界面" aria-hidden="true">#</a> 登录界面</h2><p>访问 <code>http:ip:5465</code> 地址，进入登录界面</p><figure><img src="'+t+'" alt="登录界面" tabindex="0"><figcaption>登录界面</figcaption></figure><h2 id="数据源配置中心" tabindex="-1"><a class="header-anchor" href="#数据源配置中心" aria-hidden="true">#</a> 数据源配置中心</h2><figure><img src="'+s+'" alt="数据源配置中心" tabindex="0"><figcaption>数据源配置中心</figcaption></figure><p>可以进行创建，修改，删除数据源，并且可以识别出ip是否为内网</p><figure><img src="'+c+'" alt="编辑数据源" tabindex="0"><figcaption>编辑数据源</figcaption></figure><p>此处为编辑数据源，默认在保存前会进行一次测试连接，如果测试不通过，则不保存。</p><h2 id="flink-配置中心" tabindex="-1"><a class="header-anchor" href="#flink-配置中心" aria-hidden="true">#</a> flink 配置中心</h2><figure><img src="'+r+'" alt="image-20230202144841436" tabindex="0"><figcaption>image-20230202144841436</figcaption></figure><p>flink 配置展示界面</p><figure><img src="'+g+'" alt="创建 flink 环境" tabindex="0"><figcaption>创建 flink 环境</figcaption></figure><p>创建 flink 环境界面，flink 模式有 3 中，已支持 standalone 以及 yarn，目前 k8s 正在开发中。如果是 yarn 模式需要填写 FLINK_HOME、core_site、hdfs_site、yarn_site 路径。</p><p>例如下图：</p><figure><img src="'+f+'" alt="flink 环境例子" tabindex="0"><figcaption>flink 环境例子</figcaption></figure><h2 id="元数据中心" tabindex="-1"><a class="header-anchor" href="#元数据中心" aria-hidden="true">#</a> 元数据中心</h2><figure><img src="'+o+'" alt="元数据中心" tabindex="0"><figcaption>元数据中心</figcaption></figure><p>此处的<code>源端数据库</code>和<code>目标数据库</code>是在<code>数据源中心</code>配置的</p><h3 id="同步表结构" tabindex="-1"><a class="header-anchor" href="#同步表结构" aria-hidden="true">#</a> 同步表结构</h3><figure><img src="'+d+'" alt="同步表结构" tabindex="0"><figcaption>同步表结构</figcaption></figure><p>在<code>源端数据库</code> 数据库中勾选上要同步的表结构，同时在 <code>目标数据库</code> 上勾选上将要同步到的数据库，点击<code>创建表结构</code>按钮，将会按照下面表结构的前后缀自动创建表（可以不填）。</p><figure><img src="'+p+'" alt="表结构同步额外信息" tabindex="0"><figcaption>表结构同步额外信息</figcaption></figure><h2 id="cdc-实时同步数据" tabindex="-1"><a class="header-anchor" href="#cdc-实时同步数据" aria-hidden="true">#</a> cdc 实时同步数据</h2><figure><img src="'+l+'" alt="image-20230202150120349" tabindex="0"><figcaption>image-20230202150120349</figcaption></figure><p>在 <code>源端数据库</code> 和 <code>目标数据库</code> 选中要同步的表结构，将会在右侧生成表名。注意：如果是多个表，要保证<code>源端数据库表</code> 和<code>目标数据库表</code> 顺序一致，若顺序不一致可以拖动</p><figure><img src="'+h+'" alt="image-20230202150622779" tabindex="0"><figcaption>image-20230202150622779</figcaption></figure><p>然后点击 <code>生成cdc任务按钮</code> 就可以生成 flink 任务</p><h2 id="flink-任务列表" tabindex="-1"><a class="header-anchor" href="#flink-任务列表" aria-hidden="true">#</a> flink 任务列表</h2><figure><img src="'+m+'" alt="image-20230202150735439" tabindex="0"><figcaption>image-20230202150735439</figcaption></figure><p>此时生成的列表就是刚刚生成的同步表结构任务，每个任务都可以单独操作，也可以批量操作。点击 url 连接就会跳转到对应的 flink-web 界面。</p><h3 id="推送" tabindex="-1"><a class="header-anchor" href="#推送" aria-hidden="true">#</a> 推送</h3><figure><img src="'+_+'" alt="推送" tabindex="0"><figcaption>推送</figcaption></figure><p>点击飞机按钮就可以选择集群（在flink 配置中心设置的）推送到指定的集群上，此时就可以在 yarn 管理界面上查看任务。</p><h2 id="flink-sql" tabindex="-1"><a class="header-anchor" href="#flink-sql" aria-hidden="true">#</a> flink-sql</h2><figure><img src="'+u+'" alt="flink-sql" tabindex="0"><figcaption>flink-sql</figcaption></figure><p>未来这里会添加 flink-sql 功能，避免在代码中写死 sql。同时可以添加调试功能，一键推送到指定集群上运行。</p>',36),x=[b];function z(q,y){return e(),a("div",null,x)}const B=i(k,[["render",z],["__file","use-guide.html.vue"]]);export{B as default};
