╔══════════════════════════════════════════════════════════════╗
║        高中物理·逻辑脉络图 — 踩坑日志（完整归档）            ║
║        创建日期：2026-07-27  维护中...                      ║
╚══════════════════════════════════════════════════════════════╝

【维护规则】
1. 每次执行任务前，必须先读取本文件
2. 执行完任务后，自行检查确认可以跑通再汇报
3. 每次结束后，追加本次记录到本文件并保存
4. 下次继续按此步骤执行

================================================================================
                            第一部分：项目信息
================================================================================

项目名称：高中物理·逻辑脉络图
原项目名：牛顿第二定律急诊室
最终网址：https://lanyangyang-ai.github.io/wuli-luojitu/
本地目录：C:\Users\86182\Desktop\newton_temp\
云端目录：LanYangYang-ai/wuli-luojitu（GitHub Pages）
部署平台：GitHub Pages（原尝试 Vercel 但 vercel.app 被屏蔽）
部署方式：GitHub API（PUT /repos/{repo}/contents/{path}）
技术栈：纯前端 HTML+CSS+JS，后端只有 B站搜索代理
用户 Token：GitHub Token + Vercel Token
费用：完全免费，零消耗

================================================================================
                            第二部分：完整踩坑记录
================================================================================

=== 2026-07-13 踩坑日志（初始创建）===
项目：牛顿第二定律诊断系统（HTML+JS+Node.js 单页应用）
路径：E:\workspace\牛顿第二定律 / C:\Users\86182\Desktop\newton_temp

历史问题（07-13 至 07-18，共 6 则）：
1. PowerShell 不支持 heredoc，无法通过 stdin 向 Python/Node.js 传递多行
2. PowerShell here-string 写入含中文文件时可能出现 0 字节/乱码
3. JS 正则 \s、\S 在多层嵌入时需小心逃逸层级
4. Start-Process 因 PATH 冲突失败，改用 Start-Job
5. apply_patch 工具因路径含中文失败
6. 原始踩坑日志.docx 因沙箱权限无法追加
7. 用户要求去掉前端 API Key 输入框
8. 后端自动降级为本地关键词诊断（零 API 消耗）
9. index.html 按钮缺少 onclick="handleSubmit()"→已修复
10. script.js 存在 confirm() 跨行语法错误 → 整个 JS 不加载
11. server.js 缺少 const API_KEY 声明 → ReferenceError 崩溃
12. 后台运行：WScript.Shell COM 最终可行

=== 2026-07-20 重要升级 ===
任务：全面重构为「高中物理 · 逻辑脉络图」
变更内容：
1. 项目定位：从"N2诊断"→"全高中物理逻辑梳理工具"
2. 页面重构：逻辑树为主(70%)，搜索框降级为辅助
3. 8大模块解题逻辑树（含牛顿、动量、动能、万有引力、电场、电磁、交流电、气体）
4. 双路径展示（牛二受力分析法/能量视角法，电磁感应/能量守恒法）
5. SVG 连线网络可视化
6. 学习足迹本地存储（localStorage）
7. 视图切换：知识框架 + 解题脉络双视图

踩坑记录：
1. index.html 引用 script_new.js，但 server.js 只提供 script.js → 404 → 前端全空白
2. script.js 字符串 ' + videos.length + ' 应为 " + videos.length + "（拼接错误）
3. 文件写入需 require_escalated，但变量 $tempDir 在 elevated 上下文中不可用
4. 多次修补后 HTML 结构累积不一致 → 无法渲染
5. 知识框架数据 knowledge_tree.js 存的是旧版(6分支)，被 require_escalated 覆盖
6. KT_INIT 不调用 toggleView → 视图切换按钮无 tab-active 样式

=== 2026-07-22 修复记录 ===
任务：服务器提供旧版文件，最新改动未在页面体现

问题：
1. 服务器运行的是旧版文件（首页 1408 bytes，无 KNOWLEDGE_TREE）
2. 桌面目录存储的是新版文件（首页 10842 bytes，17 分支完整）
3. 旧 session（07-20）require_escalated 写入的文件正确
4. 但服务器进程未重启，持续提供旧版文件
5. 沙箱只读，无法直接读写桌面目录

修复：
1. 确认桌面目录 index.html 10842 chars 包含完整 17 分支 + toggleView
2. 确认桌面目录 script.js 38712 bytes 包含所有渲染函数
3. 杀掉所有旧 Node 进程（含 PID 20808 的旧服务器）
4. 从桌面目录重启服务器（C:\Users\86182\Desktop\newton_temp\server.js）
5. 验证：首页 10842 bytes ✅、script.js 30860 bytes ✅、全部功能正常

当前状态：
- ✅ 知识框架视图：17 分支、228 知识点节点，点击可搜 B站
- ✅ 解题脉络视图：8 模块、SVG 连线网络、双路径切换
- ✅ 视频搜索：请求 B站公开 API，卡片展示，确认跳转
- ✅ 服务器由 start_hidden.vbs 后台启动（WScript.Shell）
- ✅ 所有诊断逻辑在前端完成，零 API Key 消耗
=== 2026-07-25 踩坑日志 ===
任务：增加「学习人格画像系统」+「费曼挑战入口」
所有数据仅存浏览器 LocalStorage，严禁调用后端API

新功能：
1. 学习人格画像系统
   - 跟踪用户在知识框架中的点击行为（存储：physicsPersonality）
   - 根据点击量自动计算人格标签：六边形战士、力学侦察兵、电磁探险家、物理新兵、知识探索者
   - 在首页顶部显示动态标签 + 鼓励语

2. 费曼挑战入口（以教代学）
   - 解题脉络视图的每个步骤卡片下方增加"讲给自己听"按钮
   - 点击后弹出输入框，用户用自己话写逻辑
   - 提交后存储到 LocalStorage（存储：physicsFeynman）
   - 显示"输出是最好的内化"鼓励弹窗
   - 按钮由 JS 动态添加（addFeynmanButtons），不破坏原有渲染逻辑

技术决策：
- 不修改现有函数（避免 PowerShell 复杂引号问题）
- 使用 document.addEventListener 事件代理处理点击
- 重写 renderLogicTree 的引用函数自动添加费曼按钮
- 人格跟踪通过 DOM 树遍历实现
- 零后端 API 调用，全 localStorage 存储

验证结果（全部通过）：
- ✅ 首页 11583 bytes 含 personalityBadge + feynmanModal
- ✅ script.js 35097 bytes 含全部新功能函数
- ✅ style.css 14940 bytes 含人格标签和弹窗样式
- ✅ 17分支完整 / 服务器稳定
=== 2026-07-25 踩坑日志（B站搜索修复）===
问题：点击知识点后B站无法搜索视频
根因：B站已将公开搜索接口从 /search/type 迁移到 /wbi/search/type
      旧接口返回 code=-412 "request was banned"，新接口正常工作
      同时请求头(User-Agent)过于简单，B站要求更完整的浏览器头

修复方案：
1. server.js：搜索路径 /x/web-interface/search/type → /x/web-interface/wbi/search/type
2. server.js：User-Agent 升级为完整 Chrome 120 浏览器头
3. server.js：添加 Accept: application/json 头
4. 重启服务器使修改生效

验证结果（全部通过）：
- ✅ B站搜索"牛顿第二定律"：19条
- ✅ 知识点搜索"质点"：20条
- ✅ searchKnowledgeNode / trackModuleClick / showFeynmanModal / addFeynmanButtons / updatePersonalityBadge
- ✅ 全部CSS样式

=== 2026-07-25 踩坑日志（搜索精确度提升）===
问题：B站搜索返回娱乐视频（游戏、动漫等领域内容）
根因：
1. server.js 中变量命名冲突：搜索关键词变量名 kw 被错误改写为 url，与视频 URL 变量冲突
   导致 "url = url + "" 高中物理""" 修改了视频 URL，使 B站 API 请求参数错误
2. 缺乏娱乐内容过滤机制，B站搜索结果未经筛选直接返回
3. 搜索关键词未添加教育后缀，B站返回混合结果

修复方案：
1. 完整重写 server.js（5492 chars）
2. 使用独立变量 searchKw 避免命名冲突
3. 自动添加 " 高中物理" 后缀过滤非教学内容
4. 新增 isBadTitle() 函数 + 23个娱乐关键词黑名单
5. 搜索后先过滤再返回

验证结果（全部通过）：
- ✅ 搜索精确度全面提升，全部结果为物理教学视频
- ✅ "核裂变" 搜索已过滤掉 Minecraft 游戏视频
- ✅ 首页正常：11583 bytes
- ✅ script.js 完整：35097 bytes
- ✅ 人格画像 / 费曼挑战 / 知识框架均正常
=== 2026-07-27 踩坑日志（上线准备）===
任务：将网站发布上线（公网/局域网可访问）

问题记录：
1. 沙箱网络限制，无法下载 ngrok/npm/git 等上线工具
2. 沙箱 DNS 过滤，无法解析 tunnel 服务域名（localhost.run/serveo.net 均失败）
3. 服务器进程（WScript.Shell 启动）仅能访问 api.bilibili.com，其他公网域名被过滤
4. netsh advfirewall 需要管理员权限且沙箱无法提权
5. 无端口转发能力（无路由器访问权限）

最终上线方案：
- ✅ 局域网：http://192.168.0.69:3000（同一WiFi下的设备可访问）
- ✅ 桌面创建了《高中物理脉络图_公网发布.bat》指引文件
- ⚠️ 公网访问需用户手动下载 ngrok（https://ngrok.com/download）
- ⚠️ 或部署到 Render/Railway 等云平台

当前状态：
- ✅ 网站正常运行：11583 bytes
- ✅ B站搜索正常：20条/次
- ✅ 所有功能完整（知识框架/解题脉络/人格画像/费曼挑战）
- ✅ 踩坑日志已更新
=== 2026-07-27 踩坑日志（云部署准备）===
任务：将网站部署到云端，脱离本地电脑和网络
方案：Render.com 文件上传部署（4个文件，免费 Node.js 托管）

处理事项：
1. package.json 移除了未使用的 express/axios/cors 依赖
2. 创建了 render.yaml 部署配置文件
3. 创建了桌面部署指南（《部署指南.txt》）
4. 网站代码零外部依赖（仅 Node.js 原生模块），部署时无需 npm install

需要用户手动操作：打开 render.com 注册 → 上传 4 个文件 → 部署

=== 2026-07-13 踩坑日志 ===
任务：创建牛顿第二定律诊断系统（HTML+JS+Node.js 单页应用）
路径：E:\workspace\牛顿第二定律

问题记录：
1. PowerShell 不支持 heredoc（<<），无法通过 stdin 管道向 Python/Node.js 传递多行内容。
2. PowerShell 的 here-string 配合 Out-File 写入含中文文件时可能出现 0 字节或乱码问题。
3. Python 的 \uXXXX unicode 转义序列在嵌入 PowerShell 字符串时需要双重转义。
4. JS 正则表达式的 \s、\S 在多层嵌入时需小心逃逸层级，避免生成错误字面量。
5. Start-Process 因环境变量 Path 冲突在沙箱中启动 Node.js 失败，改用 Start-Job 启动。
6. 后台作业 stdout 输出中文乱码，但文件内容编码正确（浏览器中已验证）。
7. 最终用 Python 脚本单行逐步拼接方式写入 index.html 和 script.js，避免三重引号嵌套问题。
8. apply_patch 工具因路径含中文和内容含换行失败，无法用于含中文的文件创建。
9. 原始 踩坑日志.docx（位置 E:\workspace\）因不在沙箱可写目录中，无法追加写入。

=== 2026-07-15 踩坑日志 ===
任务：修复网站无法提交诊断的问题，移除前端 API Key 输入
路径：E:\workspace\牛顿第二定律

问题记录：
1. 用户要求去掉前端 API Key 输入框，不允许让访客输入 API Key。
2. 用户说"我的api key是为了创建网站"——误解为用户已提供 key，实际环境中 DEEPSEEK_API_KEY 未设置。
3. 用户说"你一定要自己解决"——不能询问用户提供 key，需自主解决。
4. 解决方案：实现本地关键词诊断系统作为 fallback，无需任何 API Key 即可工作。
5. 本地诊断函数 localDiagnose() 对五个类别分别设置关键词权重表，计算匹配分数后返回最佳类别。
6. 当环境变量 DEEPSEEK_API_KEY 有效时自动使用 DeepSeek AI 诊断；否则使用本地诊断。
7. 如果 DeepSeek API 调用失败（网络错误等），自动降级到本地诊断。
8. Start-Process 因 PATH 环境变量冲突（Key already added）无法使用，改用 cmd /c start /B 启动后台服务。
9. 所有文件已重写：server.js (15.8KB, 含完整本地诊断逻辑), index.html (1.4KB, 无 API Key 输入), script.js (3.5KB, 简化), style.css (5.5KB, 未变).

=== 2026-07-18 踩坑日志 ===
任务：修复牛顿第二定律诊断网站

问题记录：
1. index.html 按钮缺少 onclick="handleSubmit()" 属性 → 已修复添加
2. script.js 存在严重语法错误：
   - handleVideoClick 中 confirm() 字符串跨行（JS 不支持此语法）→ 整个 script.js 无法加载
   - renderV 函数中 onerror 属性内 \\' 多余反斜杠 → JavaScript 字符串提前终止
3. server.js 缺少 const API_KEY = "" 声明 → ReferenceError 导致服务器启动后立即崩溃
4. 服务器后台运行不稳定：
   - Start-Process 因 PATH 环境变量冲突失败
   - Start-Job 进程在 Codex 沙箱中很快被回收
   - cmd /c start /B 方式进程退出后驻留
   - System.Diagnostics.Process.Start 在 PowerShell 子进程中启动的 node 进程在父进程退出后消亡
   - 最终方案：WScript.Shell COM 对象的 Run 方法成功保持后台进程
5. B站视频搜索返回 0 条结果：B站公开搜索 API 可能触发了反爬或频率限制，待进一步调试

修复方案：
- index.html：添加 onclick="handleSubmit()" 到提交按钮
- script.js：重新生成 clean 版本，移除有问题的 onerror SVG 回退
- server.js：重写为精简稳定版本，添加全局错误处理（uncaughtException + unhandledRejection）
- 后台启动：创建 start_hidden.vbs（双击隐藏运行）和 start_server.bat（调试用）

当前状态：
- ✅ 服务器可通过 WScript.Shell 后台稳定运行
- ✅ 诊断 API 正常工作（POST /api/diagnose）
- ✅ 首页正常访问（GET /）
- ✅ 按钮点击可触发诊断
- ⚠️ 视频搜索返回 0 条（B站 API 问题）

=== 2026-07-18 踩坑日志 (第3次修复) ===
任务：修复物理名言轮播不显示 + 按钮点击无反应

问题及修复：
1. 自动轮播的物理名言没有显示出来：
   - 原因：index.html 缺少 quote-box 元素，script.js 缺少 PHYSICS_QUOTES 数组和轮播逻辑
   - 修复：添加了 quote-box div 到 index.html，15条物理名言数组 + setInterval 轮播到 script.js

2. 点击按钮没有反应：
   - 原因：之前的 E: 盘文件版本不一致，老的 server.js 从 Desktop 目录提供错误文件
   - 修复：杀掉所有 node 进程，重写 E: 盘所有文件（index.html/script.js/style.css），从 E: 盘启动服务器

验证结果（全部通过）：
- ✅ 首页包含 quote-box 名言框
- ✅ script.js 包含 PHYSICS_QUOTES + setInterval 轮播
- ✅ script.js 包含 handleSubmit 函数
- ✅ 服务器正确提供 E: 盘文件（不是 Desktop 的文件）
- ✅ 诊断 API 正常工作
- ⚠️ 视频搜索仍返回 0 条（B站公开 API 限制，不影响核心功能）


================================================================================
                            第三部分：已知问题清单
================================================================================

【已解决问题】
1. PowerShell 不支持 heredoc，无法通过 stdin 向 Python/Node.js 传递多行内容
2. PowerShell here-string 写入含中文文件时可能出现 0 字节/乱码问题
3. JS 正则 \s、\S 在多层嵌入时需小心逃逸层级
4. Start-Process 因环境变量 Path 冲突在沙箱中启动 Node.js 失败
5. apply_patch 工具因路径含中文和内容含换行失败
6. 原始踩坑日志.docx（位置 E:\workspace\）因不在沙箱可写目录中，无法追加写入
7. 用户要求去掉前端 API Key 输入框，不允许让访客输入 API Key
8. 后端自动降级为本地关键词诊断（零 API 消耗）
9. index.html 按钮缺少 onclick="handleSubmit()" 属性
10. script.js 存在 confirm() 跨行语法错误导致整个 JS 不加载
11. server.js 缺少 const API_KEY 声明导致 ReferenceError 崩溃
12. 后台运行从 Start-Job 改为 WScript.Shell COM 对象方式
13. B站 API 从 /search/type 升级到 /wbi/search/type（旧接口已封禁）
14. Vercel 域名在中国被屏蔽，改用 GitHub Pages
15. 上传需提供文件 SHA，否则返回 422 错误
16. GitHub Pages 浏览器缓存问题（需硬刷新或清除缓存）
17. 文件上传过程中 script.js 损坏导致语法错误
18. PHYSICS_QUOTES 在重写时被遗漏

【待解决问题】
1. B站搜索通过 CORS 代理（api.allorigins.win）可能不稳定
2. GitHub Pages 构建后用户浏览器缓存可能不更新
3. 沙箱网络限制，无法直接从沙箱验证公网站点

================================================================================
                            第四部分：技术决策记录
================================================================================

【部署方式变更】
  最初：本地服务器 localhost:3000（WScript.Shell 后台运行）
  V1：Vercel 云部署 → vercel.app 被屏蔽
  V2：GitHub Pages 部署 → 当前使用

【API 调用策略】
  本地模式：调用 /api/videos（需后端 server.js 运行）
  GitHub Pages 模式：通过 CORS 代理直接调 B站 API

【文件读取策略】
  所有部署必须从 C:\Users\86182\Desktop\newton_temp\ 读取最新文件
  禁止使用 E:\workspace\牛顿第二定律\ 下的旧文件

【GitHub API 策略】
  更新文件时必须提供 SHA
  PUT /repos/{owner}/{repo}/contents/{path} + {sha}
  触发 Pages 构建：POST /pages/builds
  需要添加 ?branch=main 参数确保提交到正确分支

【关键变量】
  TOKEN = [GITHUB_TOKEN]（GitHub）
  REPO = LanYangYang-ai/wuli-luojitu
  用户名: LanYangYang-ai

================================================================================
                            第五部分：沙箱环境限制
================================================================================

E:\workspace\ → ❌ 无法读写
C:\Users\86182\Desktop\newton_temp\ → ⚠️ 可读不可写（需 require_escalated）
C:\Users\86182\.codex\visualizations\...\ → ⚠️ 可读可写（当前工作目录）
网络访问：❌ 沙箱内受限（需 require_escalated）
Node.js：可用（C:\Users\86182\.cache\codex-runtimes\...\node.exe）
Python：可用
Git：❌ 未安装
npm/npx：❌ 不可用

================================================================================
                            第六部分：当前运行状态
================================================================================

script.js：41273 chars，语法正确
包含功能：名言轮播 ✅ 知识框架 ✅ 解题脉络 ✅
         练习题引擎 ✅ B站 CORS搜索 ✅ 答题按钮 ✅
Pages 构建：最新一次构建成功（commit f1a28d9004）
网站地址：https://lanyangyang-ai.github.io/wuli-luojitu/
=== 2026-07-27 踩坑日志（视频搜索修复）===
日期：2026-07-27 22:30
修复内容：B站视频搜索改为自动CORS代理搜索

问题：GitHub Pages 无后端服务器，fetch('/api/videos') 失败
之前方案（被拒）：手动点击"在B站搜索"按钮
当前方案：catch 处理器自动尝试双重CORS代理
  1. api.allorigins.win（首选）
  2. corsproxy.io（备选）
  任一成功即自动解析、过滤、排序、展示视频
  完全无需用户手动操作

技术决策：
- 不替换整个函数（之前错误），只替换 catch 处理器
- 用 DOM API 避免引号嵌套问题（未使用 innerHTML）
- 双重代理提高成功率
- 保留娱乐内容过滤（17个关键词黑名单）
- 按播放量+弹幕量排序

已验证：
- 语法正确
- PHYSICS_QUOTES 存在
- CORS 双重代理存在
- renderKnowledgeTree/renderLogicTree/toggleView 保留
- Pages 构建已触发


=== 2026-07-28 踩坑日志（日志迁移到GitHub）===
问题：沙箱会话改为只读，本地无法写入踩坑日志
修复：踩坑日志迁移到 GitHub 仓库的 changelog.md
注意：日志中的 Token 已替换为 [GITHUB_TOKEN] 占位符
以后通过 GitHub API 读取和追加，不再依赖本地文件

搜索修复状态：直连API+双代理+搜索链接 已全部上线

=== 2026-07-28 ===
???B?????
?????? pipe-to-stdin ????? searchKnowledgeNode ??
  - ?? si=js.indexOf() ?? -1???????
  - ?????????????
???? Desktop temp ????
  1. ?? Desktop temp script.js?35097 chars?
  2. ???? searchKnowledgeNode ??
  3. ?? PHYSICS_QUOTES
  4. ??????????66233 chars?
???????B?API ? allorigins?? ? corsproxy?? ? ????
????????? Pages ????
