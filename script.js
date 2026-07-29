// ==================== 高中物理 · 逻辑脉络图 ====================
// 核心原则：理性 · 从容 · 长期主义
// 所有逻辑树数据硬编码在前端，运行时零API消耗

// ==================== 逻辑树数据 ====================
var LOGIC_TREES = {
    "牛顿第二定律": {
        name: "牛顿第二定律",
        intro: "理清这5步，所有动力学大题迎刃而解",
        note: "解题思路不唯一，此路径基于通用模型总结，供你梳理脉络。",
        dualTitle: "另一条路径：能量视角法",
        dualNote: "两条路径均可解题，选择适合你的思维习惯",
        steps: [
            { id: "nd1", name: "① 定对象", short: "定对象",
              desc: "明确研究对象：一个物体或系统（整体法/隔离法）",
              tip: "隔离法与整体法——选错了对象，后面全错",
              bili: ["高中物理 牛顿第二定律 确定研究对象","整体法 隔离法 牛顿定律"] },
            { id: "nd2", name: "② 受力分析", short: "受力分析",
              desc: "画出物体所受所有力：重力、弹力、摩擦力",
              tip: "漏掉摩擦力是多数学生的第一失误；检查是否有推力、拉力",
              bili: ["受力分析 高中物理","牛顿第二定律 受力分析"] },
            { id: "nd3", name: "③ 建坐标", short: "建坐标",
              desc: "沿加速度方向和垂直加速度方向建立正交坐标系",
              tip: "坐标轴建议沿a方向建，另一轴垂直于a——否则你给自己增加了难度",
              bili: ["正交分解 牛顿第二定律","力的正交分解】"] },
            { id: "nd4", name: "④ 列方程", short: "列方程",
              desc: "根据 F=ma 列方程：Fx=ma，Fy=0（平衡方向）",
              tip: "注意合力方向必须与加速度方向一致，正负号别弄反",
              bili: ["牛顿第二定律 列方程 F=ma","牛顿第二定律 解题步骤"] },
            { id: "nd5", name: "⑤ 解结果", short: "解结果",
              desc: "解方程求解未知量，检查量纲与合理性",
              tip: "算完后检查单位是否一致，结果是否在合理数量级内",
              bili: ["牛顿第二定律 计算 技巧"] }
        ],
        dualSteps: [
            { id: "nd_e1", name: "① 定初末态", short: "定初末",
              desc: "明确物体运动的初状态和末状态（速度、高度）",
              tip: "初末态是能量法的核心——选对了能大幅简化计算",
              bili: ["动能定理 确定初末状态"] },
            { id: "nd_e2", name: "② 算总功", short: "算总功",
              desc: "计算所有外力对物体做的总功（W合）",
              tip: "注意正负功：力与位移同向为正，反向为负",
              bili: ["功的计算 高中物理","合外力做功 动能定理"] },
            { id: "nd_e3", name: "③ 定动能变化", short: "定动能变化",
              desc: "计算初末动能的变化量 ΔEk = ½mv₂² - ½mv₁²",
              tip: "动能定理不关心中间过程——只要初末态相同，结果一样",
              bili: ["动能定理 高中物理","动能变化 计算"] },
            { id: "nd_e4", name: "④ 列方程", short: "列方程",
              desc: "W合 = ΔEk，代入数据求解",
              tip: "动能定理是一个标量方程，注意方向用正负号体现即可",
              bili: ["动能定理 解题 步骤","动能定理 列方程"] }
        ]
    },
    "动量守恒": {
        name: "动量守恒",
        intro: "理清这4步，碰撞类问题不再丢分",
        note: "解题思路不唯一，此路径基于通用模型总结，供你梳理脉络。",
        steps: [
            { id: "dc1", name: "① 判系统", short: "判系统",
              desc: "判断研究对象系统：哪些物体参与碰撞或相互作用",
              tip: "系统选取很关键——选对了才能使动量守恒条件成立",
              bili: ["动量守恒 系统 选取","动量守恒定律 条件"] },
            { id: "dc2", name: "② 看外力", short: "看外力",
              desc: "判断系统所受合外力是否为零（或远大于内力）",
              tip: "合外力为零或内力远大于外力时，动量守恒成立",
              bili: ["动量守恒条件 合外力为零","动量守恒 内力外力"] },
            { id: "dc3", name: "③ 定初末", short: "定初末",
              desc: "确定相互作用前和后的动量（矢量）",
              tip: "必须选定正方向——动量是矢量，正负号是关键",
              bili: ["动量守恒 列式 正方向","动量 矢量 方向"] },
            { id: "dc4", name: "④ 列矢量式", short: "列矢量式",
              desc: "m₁v₁ + m₂v₂ = m₁v₁' + m₂v₂'，带正负号代入",
              tip: "最终检查：碰撞后总动能是否减少（弹性碰撞不变）",
              bili: ["动量守恒 列方程 计算","动量守恒 弹性碰撞 非弹性"] }
        ]
    },
    "动能定理": {
        name: "动能定理",
        intro: "理清这4步，含位移、速度的问题优先用动能定理",
        note: "解题思路不唯一，此路径基于通用模型总结，供你梳理脉络。",
        steps: [
            { id: "dn1", name: "① 定对象", short: "定对象",
              desc: "确定研究对象（单个物体或系统），明确运动过程",
              tip: "动能定理适用于单个物体，系统动能定理需小心",
              bili: ["动能定理 研究对象 选取","动能定理 基本步骤"] },
            { id: "dn2", name: "② 算总功", short: "算总功",
              desc: "计算从初态到末态过程中所有力做的总功",
              tip: "每个力的功单独算——重力做功最简单，摩擦力做功要小心路径",
              bili: ["功的计算 合外力做功 动能定理","变力做功 动能定理"] },
            { id: "dn3", name: "③ 定初末动能", short: "定初末动能",
              desc: "找出初状态和末状态的动能 Ek = ½mv²",
              tip: "速度为零的位置动能也为零——常见隐含条件",
              bili: ["动能 计算 ½mv²","动能定理 初末动能"] },
            { id: "dn4", name: "④ 列方程", short: "列方程",
              desc: "W总 = Ek末 - Ek初，代入求解未知量",
              tip: "动能定理不关心中间过程细节——只与初末状态有关",
              bili: ["动能定理 列方程 解题","动能定理 应用 技巧"] }
        ]
    },
    "万有引力": {
        name: "万有引力与航天",
        intro: "理清这4步，天体运动不再神秘",
        note: "解题思路不唯一，此路径基于通用模型总结，供你梳理脉络。",
        steps: [
            { id: "wy1", name: "① 定环绕体", short: "定环绕体",
              desc: "确定中心天体和环绕天体，分清谁是M谁是m",
              tip: "中心天体质量大，环绕天体质量小——混淆了公式就全错",
              bili: ["万有引力 中心天体 环绕天体","天体运动 基本概念"] },
            { id: "wy2", name: "② 代公式", short: "代公式",
              desc: "GMm/r² = 向心力（mv²/r 或 mω²r 或 m·4π²r/T²）",
              tip: "选择合适的向心力表达式——已知什么代什么",
              bili: ["万有引力定律 公式 应用 F=GMm/r²","万有引力 向心力 关系"] },
            { id: "wy3", name: "③ 找半径周期", short: "找半径周期",
              desc: "根据题目条件找到轨道半径r和周期T的关系",
              tip: "轨道半径≠星球半径！近地卫星的r≈R+h",
              bili: ["天体运动 轨道半径 周期","卫星 轨道 规律"] },
            { id: "wy4", name: "④ 算比值", short: "算比值",
              desc: "利用比例法简化计算——r越大v越小、T越大",
              tip: "高轨低速长周期——记住六个字，选择题秒判",
              bili: ["万有引力 比例法 天体运动","高轨低速 长周期"] }
        ]
    },
    "静电场": {
        name: "静电场",
        intro: "理清这4步，电场问题有迹可循",
        note: "解题思路不唯一，此路径基于通用模型总结，供你梳理脉络。",
        steps: [
            { id: "jc1", name: "① 判电场线", short: "判电场线",
              desc: "从电场线分布判断电场强弱和方向（疏密判强弱）",
              tip: "电场线密的地方电场强——画出电场线是分析的第一步",
              bili: ["电场线 电场强度 判断","电场线 疏密 方向"] },
            { id: "jc2", name: "② 定电势高低", short: "定电势高低",
              desc: "沿电场线方向电势降低，等势面垂直于电场线",
              tip: "电场线方向→电势降低方向——这是最基础的判断方法",
              bili: ["电势 高低 判断 等势面","电势 电场线 关系"] },
            { id: "jc3", name: "③ 析电荷受力", short: "析电荷受力",
              desc: "正电荷受力与电场同向，负电荷反向（F=qE）",
              tip: "电荷正负决定受力方向——这是最容易忘记的细节",
              bili: ["电场力 F=qE 方向","带电粒子 电场中 受力"] },
            { id: "jc4", name: "④ 算功与能", short: "算功与能",
              desc: "W=qU，电场力做功等于电势能变化量的负值",
              tip: "电场力做功与路径无关——只与始末位置电势差有关",
              bili: ["电场力做功 qU","电势能 变化 电场力做功"] }
        ]
    },
    "电磁感应": {
        name: "电磁感应",
        intro: "理清这4步，电磁感应大题稳拿分",
        note: "解题思路不唯一，此路径基于通用模型总结，供你梳理脉络。",
        dualTitle: "另一条路径：能量守恒法",
        dualNote: "两条路径均可解题，选择适合你的思维习惯",
        steps: [
            { id: "dg1", name: "① 找'源'", short: "找'源'",
              desc: "确定产生感应电动势的部分（切割磁感线的导体）",
              tip: "切割磁感线的导体就是电源——分清内电路和外电路",
              bili: ["电磁感应 电源 感应电动势","法拉第电磁感应定律 感应电动势"] },
            { id: "dg2", name: "② 判'向'", short: "判'向'",
              desc: "用楞次定律或右手定则判断感应电流方向",
              tip: "增反减同、来拒去留——楞次定律的八字口诀",
              bili: ["楞次定律 判断感应电流方向","右手定则 电磁感应"] },
            { id: "dg3", name: "③ 算'大'", short: "算'大'",
              desc: "计算感应电动势的大小：E=BLv 或 E=nΔΦ/Δt",
              tip: "E=BLv用于导体切割，E=nΔΦ/Δt用于磁通量变化",
              bili: ["感应电动势 计算 E=BLv","法拉第电磁感应定律 E=nΔΦ/Δt"] },
            { id: "dg4", name: "④ 析'路'", short: "析'路'",
              desc: "分析电路结构，计算电流、安培力等",
              tip: "安培力方向用左手定则——与感应电流方向右手定则区分开",
              bili: ["电磁感应 电路分析 安培力","电磁感应 综合 题型"] }
        ],
        dualSteps: [
            { id: "dg_e1", name: "① 定能量来源", short: "定能量来源",
              desc: "明确机械能如何转化为电能（谁做功提供了电能）",
              tip: "外力克服安培力做功 = 转化为电能",
              bili: ["电磁感应 能量转化 机械能","电磁感应 能量守恒 外力做功"] },
            { id: "dg_e2", name: "② 列能量转化式", short: "列能量式",
              desc: "W外 = 电能 + 焦耳热 + 动能变化 + 势能变化",
              tip: "安培力做功的绝对值 = 回路产生的焦耳热",
              bili: ["电磁感应 焦耳热 计算","安培力做功 焦耳热"] },
            { id: "dg_e3", name: "③ 算焦耳热", short: "算焦耳热",
              desc: "焦耳热 Q = I²Rt，或根据能量转化关系求解",
              tip: "用能量守恒求焦耳热比直接用焦耳定律更简洁",
              bili: ["焦耳热 电磁感应 Q=I²Rt","电磁感应 能量守恒 解题"] },
            { id: "dg_e4", name: "④ 检查守恒", short: "检查守恒",
              desc: "验证能量是否守恒——总能量转化前后应相等",
              tip: "能量守恒是检验答案的终极手段",
              bili: ["能量守恒定律 电磁感应"] }
        ]
    },
    "交变电流": {
        name: "交变电流",
        intro: "理清这4步，交流电问题不再绕",
        note: "解题思路不唯一，此路径基于通用模型总结，供你梳理脉络。",
        steps: [
            { id: "jl1", name: "① 看转轴", short: "看转轴",
              desc: "确定线圈转轴位置：从中性面还是平行面开始转动",
              tip: "中性面时磁通量最大，感应电动势为零——是计时起点",
              bili: ["交变电流 中性面 转轴","交流电 产生 原理"] },
            { id: "jl2", name: "② 定峰值", short: "定峰值",
              desc: "计算电动势峰值 Em = NBSω",
              tip: "峰值由N、B、S、ω四个量决定——缺一不可",
              bili: ["交变电流 峰值 Em=NBSω","感应电动势 最大值"] },
            { id: "jl3", name: "③ 写瞬时值", short: "写瞬时值",
              desc: "根据开始位置写瞬时值表达式：e = Emsinωt 或 Emcosωt",
              tip: "从中性面开始用sin，从平行面开始用cos",
              bili: ["交流电 瞬时值 表达式","正弦交流电 sin cos"] },
            { id: "jl4", name: "④ 算有效值", short: "算有效值",
              desc: "有效值 E = Em/√2，用于计算功率和热量",
              tip: "计算电功、电热必须用有效值——峰值不行",
              bili: ["交流电 有效值 计算","有效值 峰值 关系"] }
        ]
    },
    "理想气体": {
        name: "理想气体",
        intro: "理清这4步，气体实验定律题稳拿",
        note: "解题思路不唯一，此路径基于通用模型总结，供你梳理脉络。",
        steps: [
            { id: "qt1", name: "① 选对象", short: "选对象",
              desc: "确定被研究的气体（哪部分气体、质量是否一定）",
              tip: "气体质量必须一定——有漏气时不能直接用气体定律",
              bili: ["理想气体 研究对象 选取","气体实验定律 基础"] },
            { id: "qt2", name: "② 定状态参量", short: "定状态参量",
              desc: "找出初末状态的p、V、T三个参量",
              tip: "注意单位统一：温度用开尔文(K)，压强用Pa或atm",
              bili: ["理想气体 状态参量 p V T","气体 初末状态 分析"] },
            { id: "qt3", name: "③ 选定律", short: "选定律",
              desc: "根据不变的条件选定律：T不变→玻意耳，p不变→盖-吕萨克",
              tip: "看清哪个量不变——这是选对定律的关键",
              bili: ["玻意耳定律 等温","盖吕萨克定律 等压","查理定律 等容"] },
            { id: "qt4", name: "④ 列方程", short: "列方程",
              desc: "p₁V₁/T₁ = p₂V₂/T₂，代入数据求解",
              tip: "温度一定要用开尔文——这是最常见的失分点",
              bili: ["理想气体状态方程 pV=nRT","气体定律 列方程 解题"] }
        ]
    }
};

// ==================== 模块列表（按顺序） ====================
var MODULE_LIST = [
    { id: "牛顿第二定律", shortName: "牛二定律", emoji: "🚀" },
    { id: "动量守恒", shortName: "动量守恒", emoji: "💥" },
    { id: "动能定理", shortName: "动能定理", emoji: "⚡" },
    { id: "万有引力", shortName: "万有引力", emoji: "🌍" },
    { id: "静电场", shortName: "静电场", emoji: "⚡" },
    { id: "电磁感应", shortName: "电磁感应", emoji: "✨" },
    { id: "交变电流", shortName: "交变电流", emoji: "～" },
    { id: "理想气体", shortName: "理想气体", emoji: "🔥" }
];

// ==================== 引用名言 ====================
var QUOTES = [
    '"逻辑清晰，自然下笔有神。"',
    '"理解物理，就是理解世界如何运作。"',
    '"力是改变物体运动状态的原因，不是维持运动的原因。"',
    '"物理定律是上帝思想的印记。" — 开普勒',
    '"不要停止提问。" — 爱因斯坦',
    '"在科学上，每一条道路都应该走一走。" — 法拉第',
    '"自然界喜欢简单。" — 牛顿',
    '"宇宙中最不可理解的事情，是它居然是可以被理解的。" — 爱因斯坦'
];

// ==================== 状态 ====================
var currentModule = "牛顿第二定律";
var selectedSteps = {};
var usingDualPath = false;
var moduleVisits = {};  // 学习足迹

// DOM 缓存
var dom = {};

function initDOM() {
    dom.moduleNav = document.getElementById("moduleNav");
    dom.logicTree = document.getElementById("logicTree");
    dom.treeIntro = document.getElementById("treeIntro");
    dom.treeNote = document.getElementById("treeNote");
    dom.videoArea = document.getElementById("videoArea");
    dom.videoGrid = document.getElementById("videoGrid");
    dom.videoHint = document.getElementById("videoHint");
    dom.pathToggle = document.getElementById("pathToggle");
    dom.pathLabel = document.getElementById("pathLabel");
    dom.searchInput = document.getElementById("searchInput");
    dom.searchBtn = document.getElementById("searchBtn");
    dom.footprint = document.getElementById("footprint");
    dom.greeting = document.getElementById("greeting");
}

// ==================== 渲染模块导航 ====================
function renderModuleNav() {
    var html = "";
    for (var i = 0; i < MODULE_LIST.length; i++) {
        var m = MODULE_LIST[i];
        var active = (m.id === currentModule) ? " module-active" : "";
        html += '<div class="module-tab' + active + '" data-module="' + m.id + '" onclick="switchModule(\'' + m.id + '\')">' +
            m.emoji + ' ' + m.shortName + '</div>';
    }
    dom.moduleNav.innerHTML = html;
}

// ==================== 切换模块 ====================
function switchModule(moduleId) {
    currentModule = moduleId;
    selectedSteps = {};
    usingDualPath = false;

    // 更新学习足迹
    var visits = JSON.parse(localStorage.getItem("physicsVisitLog") || "{}");
    visits[moduleId] = new Date().toLocaleString();
    localStorage.setItem("physicsVisitLog", JSON.stringify(visits));

    renderModuleNav();
    renderLogicTree();
    showVideoHint();
    updateFootprint();
}

// ==================== 渲染逻辑树 ====================
function renderLogicTree() {
    var tree = LOGIC_TREES[currentModule];
    if (!tree) return;
    var treeIntro = document.getElementById("treeIntro");
    var treeNote = document.getElementById("treeNote");
    var networkNodes = document.getElementById("networkNodes");
    var networkSvg = document.getElementById("networkSvg");
    if (treeIntro) treeIntro.textContent = tree.intro;
    if (treeNote) treeNote.textContent = tree.note;

    var activeSteps = usingDualPath && tree.dualSteps ? tree.dualSteps : tree.steps;

    // 渲染节点
    var html = "";
    for (var i = 0; i < activeSteps.length; i++) {
        var s = activeSteps[i];
        var selected = selectedSteps[s.id] || false;
        var cls = selected ? " step-card selected" : " step-card";
        html += "'" + '<div class="step-card' + cls + '" data-step="' + s.id + '" onclick="toggleStep(\'' + s.id + '\')">' +
            '<div class="step-number">' + (i+1) + '</div>' +
            '<div class="step-name">' + escHtml(s.name) + '</div>' +
            '<div class="step-desc">' + escHtml(s.desc) + '</div>' +
            '<div class="step-tip">' + escHtml(s.tip) + '</div>' +
            '</div>';
    }
    networkNodes.innerHTML = html;

    // SVG 连线
    var svgHtml = "";
    if (activeSteps.length > 1) {
        svgHtml = '<defs>' +
            '<marker id="arrowhead" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">' +
            '<polygon points="0 0, 8 3, 0 6" fill="#a0aec0" />' +
            '</marker></defs>';
        for (var li = 0; li < activeSteps.length - 1; li++) {
            var fStep = activeSteps[li];
            var tStep = activeSteps[li+1];
            var sel = selectedSteps[fStep.id] || selectedSteps[tStep.id];
            var lc = sel ? "#3182ce" : "#a0aec0";
            var lw = sel ? 2.5 : 1.5;
            svgHtml += '<line class="connector-line" data-from="' + fStep.id + '" data-to="' + tStep.id + '" ' +
                'x1="0" y1="0" x2="0" y2="0" stroke="' + lc + '" stroke-width="' + lw + '" marker-end="url(#arrowhead)" />';
        }
    }
    networkSvg.innerHTML = svgHtml;
    setTimeout(updateConnectors, 200);

    // 路径切换
    var pathToggle = document.getElementById("pathToggle");
    var pathLabel = document.getElementById("pathLabel");
    if (tree.dualSteps) {
        if (pathToggle) pathToggle.style.display = "block";
        if (pathLabel) pathLabel.textContent = usingDualPath ?
            "当前：能量视角法 | 点击切换" : "当前：基本路径 | 点击切换";
    } else {
        if (pathToggle) pathToggle.style.display = "none";
    }
}

function updateConnectors() {
    try {
        var lines = document.querySelectorAll(".connector-line");
        var container = document.querySelector(".network-container");
        if (!container || lines.length === 0) return;
        var cRect = container.getBoundingClientRect();
        for (var li = 0; li < lines.length; li++) {
            var line = lines[li];
            var fromId = line.getAttribute("data-from");
            var toId = line.getAttribute("data-to");
            var fromNode = document.querySelector('.step-card[data-step="' + fromId + '"]');
            var toNode = document.querySelector('.step-card[data-step="' + toId + '"]');
            if (fromNode && toNode) {
                var fRect = fromNode.getBoundingClientRect();
                var tRect = toNode.getBoundingClientRect();
                line.setAttribute("x1", Math.round(fRect.left - cRect.left + fRect.width));
                line.setAttribute("y1", Math.round(fRect.top - cRect.top + fRect.height / 2));
                line.setAttribute("x2", Math.round(tRect.left - cRect.left));
                line.setAttribute("y2", Math.round(tRect.top - cRect.top + tRect.height / 2));
            }
        }
    } catch(e) {}
}
function toggleStep(stepId) {
    if (selectedSteps[stepId]) {
        delete selectedSteps[stepId];
    } else {
        selectedSteps[stepId] = true;
    }
    renderLogicTree();
    if (Object.keys(selectedSteps).length > 0) {
        showVideoSearchButton();
    } else {
        showVideoHint();
    }
}

// ==================== 切换路径 ====================
function togglePath() {
    usingDualPath = !usingDualPath;
    selectedSteps = {};
    renderLogicTree();
    showVideoHint();
}

// ==================== 搜索视频（选中步骤）====================
function showVideoSearchButton() {
    var tree = LOGIC_TREES[currentModule];
    var activeSteps = usingDualPath && tree.dualSteps ? tree.dualSteps : tree.steps;
    var keywords = [];
    for (var i = 0; i < activeSteps.length; i++) {
        var s = activeSteps[i];
        if (selectedSteps[s.id]) {
            for (var k = 0; k < s.bili.length; k++) {
                keywords.push(s.bili[k]);
            }
        }
    }
    if (keywords.length === 0) { showVideoHint(); return; }
    dom.videoHint.textContent = "已选中 " + Object.keys(selectedSteps).length + " 个步骤，可选择以下操作";
    dom.videoGrid.innerHTML = "";
    dom.videoArea.style.display = "block";
    var combinedKw = keywords.join(" ");
    var url = "https://search.bilibili.com/video?keyword=" + encodeURIComponent(combinedKw + " 解题方法 知识点") + "&order=click&duration=2";
    // 合规性：显示B站搜索按钮，用户主动点击并确认后才跳转
    var btn = document.createElement("button");
    btn.textContent = "在B站观看相关讲解视频";
    btn.style.cssText = "display:block;width:100%;padding:14px;margin-top:8px;background:#4a90d9;color:#fff;border:none;border-radius:10px;font-size:16px;cursor:pointer;transition:background 0.2s;";
    btn.onclick = function() {
        if (confirm("即将跳转至 B站 观看相关讲解视频，内容版权归原作者所有。确认跳转？")) {
            window.open(url, "_blank");
        }
    };
    dom.videoGrid.appendChild(btn);
}
// ==================== 学习足迹 ====================
function updateFootprint() {
    var visits = JSON.parse(localStorage.getItem("physicsVisitLog") || "{}");
    var keys = Object.keys(visits);
    if (keys.length === 0) {
        dom.footprint.innerHTML = "📖 暂无浏览记录";
        return;
    }
    var html = "📖 最近浏览：";
    // 取最近的3个
    var sorted = keys.sort(function(a, b) { return new Date(visits[b]) - new Date(visits[a]); });
    var count = Math.min(3, sorted.length);
    for (var i = 0; i < count; i++) {
        html += '<span class="footprint-item" onclick="switchModule(\'' + sorted[i] + '\')">' + sorted[i] + '</span>';
        if (i < count - 1) html += " · ";
    }
    dom.footprint.innerHTML = html;
}

// ==================== 显示视频提示 ====================
function showVideoHint() {
    dom.videoHint.textContent = "点击上方任意步骤卡片，为你推荐对应讲解视频";
    dom.videoGrid.innerHTML = "";
    dom.videoArea.style.display = "block";
}

// ==================== 工具函数 ====================
function escHtml(t) {
    if (!t) return "";
    var d = document.createElement("div");
    d.appendChild(document.createTextNode(t));
    return d.innerHTML;
}
function escAttr(t) {
    if (!t) return "";
    return t.replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function fmtViews(n) {
    if (!n) return "0";
    if (n >= 100000000) return (n/100000000).toFixed(1) + "亿";
    if (n >= 10000) return (n/10000).toFixed(1) + "万";
    return n + "";
}

// ==================== 欢迎语（首次访问）====================
function showGreeting() {
    var visited = localStorage.getItem("physicsVisited");
    if (!visited) {
        dom.greeting.textContent = "欢迎来到「高中物理 · 逻辑脉络图」——从框架入手，从容学物理。";
        localStorage.setItem("physicsVisited", "true");
    } else {
        // 欢迎回来
        var lastModule = localStorage.getItem("physicsLastModule");
        if (lastModule && LOGIC_TREES[lastModule]) {
            dom.greeting.textContent = "欢迎回来！上次你在看「' + lastModule + '」，要继续吗？";
        } else {
            dom.greeting.textContent = "欢迎回来！每次梳理一点脉络，物理会越来越清晰。";
        }
    }
    setTimeout(function() {
        dom.greeting.textContent = "";
    }, 6000);
}

// ==================== 初始化 ====================
(function() {
    initDOM();
    showGreeting();

    // 从存储中恢复上次浏览
    var lastModule = localStorage.getItem("physicsLastModule");
    if (lastModule && LOGIC_TREES[lastModule]) {
        currentModule = lastModule;
    }

    renderModuleNav();
    renderLogicTree();
    showVideoHint();
    updateFootprint();

    // 轮播名言
    var qi = 0;
    var qEl = document.getElementById("quoteText");
    if (qEl) {
        qEl.textContent = QUOTES[0];
        setInterval(function() {
            qi = (qi + 1) % QUOTES.length;
            qEl.textContent = QUOTES[qi];
        }, 8000);
    }

    // 存储当前模块
    setInterval(function() {
        localStorage.setItem("physicsLastModule", currentModule);
    }, 3000);

    // 搜索回车
    if (dom.searchInput) {
        dom.searchInput.addEventListener("keydown", function(e) {
            if (e.keyCode === 13) handleSearch();
        });
    }
})();
// ==================== 知识框架视图 ====================
var currentView = "tree"; // "tree" = 知识框架, "logic" = 解题脉络

function toggleView(view) {
    currentView = view;
    var treeView = document.getElementById("treeView");
    var logicView = document.getElementById("logicView");
    var treeTab = document.getElementById("viewTabTree");
    var logicTab = document.getElementById("viewTabLogic");
    var moduleNav = document.getElementById("moduleNav");

    if (view === "tree") {
        if (treeView) treeView.style.display = "block";
        if (logicView) logicView.style.display = "none";
        if (treeTab) treeTab.classList.add("tab-active");
        if (logicTab) logicTab.classList.remove("tab-active");
        if (moduleNav) moduleNav.style.display = "block";
        renderKnowledgeTree();
    } else {
        if (treeView) treeView.style.display = "none";
        if (logicView) logicView.style.display = "block";
        if (logicTab) logicTab.classList.add("tab-active");
        if (treeTab) treeTab.classList.remove("tab-active");
        if (moduleNav) moduleNav.style.display = "flex";
        renderLogicTree();
    }
}

function renderKnowledgeTree() {
    var container = document.getElementById("knowledgeTreeContainer");
    if (!container || !KNOWLEDGE_TREE) return;

    var html = "";
    var branches = KNOWLEDGE_TREE.branches || [];

    for (var b = 0; b < branches.length; b++) {
        var branch = branches[b];
        html += '<div class="tree-branch">' +
            '<div class="branch-header" onclick="toggleBranch(this)">' +
                '<span class="branch-icon">' + (branch.emoji || "📁") + '</span>' +
                '<span class="branch-name">' + branch.branch + '</span>' +
                '<span class="branch-count">' + (branch.modules || []).length + ' 模块</span>' +
                '<span class="toggle-arrow">▶</span>' +
            '</div>' +
            '<div class="branch-children" style="display:none">';

        var modules = branch.modules || [];
        for (var m = 0; m < modules.length; m++) {
            var mod = modules[m];
            html += '<div class="tree-module">' +
                '<div class="module-header" onclick="toggleModule(this)">' +
                    '<span class="module-name">📐 ' + escHtml(mod.name) + '</span>' +
                    '<span class="toggle-arrow">▶</span>' +
                '</div>' +
                '<div class="module-children" style="display:none">';

            var points = mod.points || [];
            for (var p = 0; p < points.length; p++) {
                var pt = points[p];
                html += '<div class="tree-point" onclick="searchKnowledgeNode(' + "'" + escAttr(pt.name) + "', '" + escAttr(pt.bili) + "'" + ')">' +
                    '<span class="point-icon">🎯</span>' +
                    '<span class="point-name">' + escHtml(pt.name) + '</span>' +
                    '<span class="point-search">🔍 搜索视频</span>' +
                '</div>';
            }

            html += '</div></div>';
        }

        html += '</div></div>';
    }

    container.innerHTML = html;
}

function toggleBranch(header) {
    var children = header.nextElementSibling;
    var arrow = header.querySelector(".toggle-arrow");
        var isHidden = children.style.display === "none" || !children.style.display;
        children.style.display = isHidden ? "block" : "none";
        if (arrow) arrow.textContent = isHidden ? "▼" : "▶";
    }


function toggleModule(header) {
    var children = header.nextElementSibling;
    var arrow = header.querySelector(".toggle-arrow");
    if (children) {
        var isHidden = children.style.display === "none" || !children.style.display;
        children.style.display = isHidden ? "block" : "none";
        if (arrow) arrow.textContent = isHidden ? "▼" : "▶";
    }
}
function searchKnowledgeNode(nodeName, biliKeywords) {
    // 直接跳转 B站 搜索
    var hint = document.getElementById("videoHint");
    if (hint) hint.textContent = "正在跳转至 B站 搜索相关视频...";
    var grid = document.getElementById("videoGrid");
    if (grid) grid.innerHTML = "";
    var url = "https://search.bilibili.com/video?keyword=" + encodeURIComponent(nodeName + " 高中物理 知识点") + "&order=click&duration=2";
    // 合规性：跳转前获取用户确认，明确告知版权归属
    if (confirm("即将跳转至 B站 观看相关讲解视频，内容版权归原作者所有。确认跳转？")) {
        window.open(url, "_blank");
    }
}

// 初始化知识框架
var KT_INIT = function() {
    try { toggleView('tree'); } catch(e) {
        // fallback
        var c = document.getElementById('knowledgeTreeContainer');
        if (c && typeof KNOWLEDGE_TREE !== 'undefined' && KNOWLEDGE_TREE.branches) { renderKnowledgeTree(); }
        var lv = document.getElementById('logicView');
        var tv = document.getElementById('treeView');
        if (lv) lv.style.display = 'none';
        if (tv) tv.style.display = 'block';
    }
    // 如果默认视图是知识框架，渲染它
    var treeContainer = document.getElementById("knowledgeTreeContainer");
    if (treeContainer && KNOWLEDGE_TREE) {
        renderKnowledgeTree();
    }
    // 隐藏逻辑树区域（由视图切换控制）
    var logicView = document.getElementById("logicView");
    var treeView = document.getElementById("treeView");
    if (logicView) logicView.style.display = "none";
    if (treeView) treeView.style.display = "block";
};
// 初始化知识框架视图
try {
    KT_INIT();
} catch(e) {
    // 如果 KT_INIT 未定义，简单初始化
    var logicView = document.getElementById("logicView");
    var treeView = document.getElementById("treeView");
    if (logicView) logicView.style.display = "none";
    if (treeView) treeView.style.display = "block";
    var treeContainer = document.getElementById("knowledgeTreeContainer");
    if (treeContainer && typeof KNOWLEDGE_TREE !== "undefined") {
        renderKnowledgeTree();
    }
}
// ==================== 学习人格画像系统 ====================
function trackModuleClick(bn) {
    if (!bn) return;
    var d = JSON.parse(localStorage.getItem("physicsPersonality") || "{}");
    if (!d.clicks) d.clicks = {};
    if (!d.clicks[bn]) d.clicks[bn] = {c:0,f:Date.now(),l:Date.now()};
    d.clicks[bn].c++; d.clicks[bn].l = Date.now();
    localStorage.setItem("physicsPersonality",JSON.stringify(d));
    updatePersonalityBadge();
}

function getPersonalityLabel(){
    var d = JSON.parse(localStorage.getItem("physicsPersonality")||"{}");
    if(!d.clicks) return {l:"物理新兵",e:"开始探索，你的物理之旅刚刚启程"};
    var ks = Object.keys(d.clicks), n = ks.length;
    var ml = ["运动的描述","牛顿运动定律","受力分析与平衡","动量与冲量","机械能","曲线运动","万有引力","振动与波"];
    var el = ["静电场","恒定电流","磁场","电磁感应","交变电流"];
    if(n >= 3){
        var am = true, ae = true;
        for(var i=0;i<ks.length;i++){if(ml.indexOf(ks[i])<0) am=false;if(el.indexOf(ks[i])<0) ae=false;}
        if(am) return {l:"力学侦察兵",e:"力学是你的主场，力的世界被你掌握"};
        if(ae) return {l:"电磁探险家",e:"电磁场中游刃有余，继续深入探索"};
        return {l:"六边形战士",e:"全面发展的物理强者，继续拓宽知识边界"};
    }
    if(n === 0) return {l:"物理新兵",e:"开始探索，你的物理之旅刚刚启程"};
    var firstMod = ks[0], fc = d.clicks[firstMod].f;
    if((Date.now()-fc)/60000 < 2) return {l:"物理新兵",e:"欢迎来到物理的世界，每一步都是成长"};
    var im = ml.indexOf(firstMod)>=0, ie = el.indexOf(firstMod)>=0;
    if(im) return {l:"力学侦察兵",e:"从力学入手，稳扎稳打，你的根基在生长"};
    if(ie) return {l:"电磁探险家",e:"从电磁入手，探索看不见的力场"};
    return {l:"知识探索者",e:"你的逻辑脉络正在生长，继续探索"};
}

function updatePersonalityBadge(){
    var b = document.getElementById("personalityBadge");
    if(!b) return;
    var info = getPersonalityLabel();
    b.innerHTML = "🧠 人格画像：<strong>" + info.l + "</strong> — " + info.e;
}

// ==================== 费曼挑战 ====================
function showFeynmanModal(sid,sname){
    document.getElementById("feynmanOverlay").style.display="block";
    document.getElementById("feynmanModal").style.display="block";
    document.getElementById("feynmanStepId").value=sid;
    document.getElementById("feynmanStepName").textContent=sname;
    var d=JSON.parse(localStorage.getItem("physicsFeynman")||"{}");
    var ex=d[sid];
    document.getElementById("feynmanText").value=ex?ex.text:"";
    var inf=document.getElementById("feynmanSavedInfo");
    if(inf){if(ex){inf.textContent="上次记录："+ex.t;inf.style.display="block"}else{inf.style.display="none"}}
}
function closeFeynmanModal(){
    document.getElementById("feynmanOverlay").style.display="none";
    document.getElementById("feynmanModal").style.display="none";
}
function submitFeynman(){
    var sid=document.getElementById("feynmanStepId").value;
    var txt=document.getElementById("feynmanText").value.trim();
    if(!txt){alert("请写点什么吧。");return;}
    var d=JSON.parse(localStorage.getItem("physicsFeynman")||"{}");
    d[sid]={text:txt,t:new Date().toLocaleString()};
    localStorage.setItem("physicsFeynman",JSON.stringify(d));
    closeFeynmanModal();
    alert("输出是最好的内化。这个知识点，你已经开始真正掌握了。");
}

// 在步骤卡片上添加费曼按钮
function addFeynmanButtons(){
    var cards = document.querySelectorAll(".step-card");
    for(var i=0;i<cards.length;i++){
        var c=cards[i];if(c.querySelector(".feynman-btn")) continue;
        var b=document.createElement("button");
        b.className="feynman-btn"; b.textContent="🎤 讲给自己听";
        c.appendChild(b);
    }
}

// 重写 renderLogicTree 使其渲染后自动添加费曼按钮
var _origRLT = renderLogicTree;
renderLogicTree = function(){
    _origRLT();
    setTimeout(addFeynmanButtons, 100);
};

// 全局事件：人格画像跟踪 + 费曼按钮点击
document.addEventListener("click", function(e){
    // 知识树点击 -> 人格跟踪
    var pt = e.target.closest(".tree-point");
    if(pt){
        var br = pt.closest(".tree-branch");
        if(br){
            var nm = br.querySelector(".branch-name");
            if(nm) trackModuleClick(nm.textContent.trim());
        }
    }
    // 费曼按钮点击
    var fb = e.target.closest(".feynman-btn");
    if(fb){
        var card = fb.closest(".step-card");
        if(card){
            var sid = card.getAttribute("data-step");
            var sn = card.querySelector(".step-name");
            if(sid && sn) showFeynmanModal(sid, sn.textContent);
        }
    }
});

// 初始化时更新人格标签
try{updatePersonalityBadge();}catch(e){}

// === 物理名言 ===
// ==================== 渲染视频卡片 ====================
// 合规性：仅做跳转导航，不存储任何视频内容
function renderVideos(videos) {
    var grid = document.getElementById("videoGrid");
    if (!grid || !videos || videos.length === 0) return;
    grid.innerHTML = "";
    var html = "";
    for (var i = 0; i < videos.length; i++) {
        var v = videos[i];
        var title = (v.title || "").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
        html += '<div class="video-card" onclick="confirmJump(\"' + (v.url || "") + '\")">' +
            '<div class="video-cover-wrap"><img class="video-cover" src="' + (v.cover || "") + '" alt="' + title + '" loading="lazy" onerror="this.style.display=\'none\'"></div>' +
            '<div class="video-info"><div class="video-title">' + title + '</div>' +
            '<div class="video-meta"><span>' + (v.author || "未知") + '</span><span>' + fmtViews(v.view || 0) + " 播放</span></div>" +
            '<div class="video-source">来源：B站</div></div></div>';
    }
    grid.innerHTML = html;
    var hint = document.getElementById("videoHint");
    if (hint) hint.textContent = "找到 " + videos.length + " 个相关视频";
}

// ==================== 确认跳转弹窗 ====================
// 合规性：仅做导航跳转，不存储视频，明确告知用户版权归属
function confirmJump(url) {
    if (!url) return;
    if (confirm("即将跳转至 B站 观看，内容版权归原作者所有。本站仅提供导航，不存储任何视频。确认跳转？")) {
        window.open(url, "_blank");
    }
}

// ==================== B站搜索辅助函数 ====================
// 合规性：仅通过公开API获取视频信息，不存储任何视频内容
// 使用双重CORS代理解决浏览器跨域限制
function tryBiliSearch(keyword, callback) {
    if (!keyword) { if (callback) callback(null); return; }
    var u = "https://api.bilibili.com/x/web-interface/wbi/search/type?search_type=video&keyword=" + encodeURIComponent(keyword + " 高中物理") + "&page=1";
    var done = false;
    var timer = setTimeout(function() { if (!done) { done = true; if (callback) callback(null); } }, 3000);
    var scb = function(d) { if (done) { return; } done = true; clearTimeout(timer); if (callback) callback(d); };
    fetch(u).then(function(r) { if (r.ok) return r.json(); throw Error(); }).then(function(d) { scb(d); }).catch(function(){});
    fetch("https://api.allorigins.win/raw?url=" + encodeURIComponent(u)).then(function(r) { return r.json(); }).then(function(d) { scb(d); }).catch(function(){});
    fetch("https://api.allorigins.io/raw?url=" + encodeURIComponent(u)).then(function(r) { return r.json(); }).then(function(d) { scb(d); }).catch(function(){});
    fetch("https://corsproxy.io/?url=" + encodeURIComponent(u)).then(function(r) { return r.json(); }).then(function(d) { scb(d); }).catch(function(){});
    fetch("https://corsproxy.org/?url=" + encodeURIComponent(u)).then(function(r) { return r.json(); }).then(function(d) { scb(d); }).catch(function(){});
}

var QUESTIONS = {
  "nd1": [
    {
      "stem": "用牛顿第二定律分析问题，第一步应该做什么？",
      "options": [
        "A. 直接写F=ma",
        "B. 明确研究对象",
        "C. 画受力图",
        "D. 建坐标系"
      ],
      "correct": 1,
      "explanation": "选对研究对象是解题的起点。",
      "encouragement": "发现问题先找对象，好习惯！",
      "tags": "研究对象"
    },
    {
      "stem": "A、B两物体要求A对B的作用力，应该选谁研究？",
      "options": [
        "A. 选A",
        "B. 选B",
        "C. 选整体",
        "D. 先整体后隔离B"
      ],
      "correct": 3,
      "explanation": "先整体求加速度，再隔离B求内力。",
      "encouragement": "整体隔离法是关键方法！",
      "tags": "整体法隔离法"
    },
    {
      "stem": "研究对象选错最常见的后果？",
      "options": [
        "A. 公式用错",
        "B. 漏掉或多了力",
        "C. 方向反了",
        "D. 质量算错"
      ],
      "correct": 1,
      "explanation": "选错对象会漏掉或多余某些力。",
      "encouragement": "犯错是进步的开始。",
      "tags": "研究对象选取"
    },
    {
      "stem": "整体法中绳子拉力属于什么力？",
      "options": [
        "A. 外力",
        "B. 内力",
        "C. 有时外力",
        "D. 重力"
      ],
      "correct": 1,
      "explanation": "系统内部物体间力是内力，整体方程中不出现。",
      "encouragement": "内力不出现！",
      "tags": "内力外力"
    },
    {
      "stem": "最适合用隔离法的是求什么？",
      "options": [
        "A. 系统加速度",
        "B. 物体间相互作用力",
        "C. 整体合外力",
        "D. 系统运动"
      ],
      "correct": 1,
      "explanation": "隔离法求内力，整体法求加速度。",
      "encouragement": "求内力用隔离法！",
      "tags": "隔离法应用"
    },
    {
      "stem": "A、B叠放推A求B受摩擦力，第一步？",
      "options": [
        "A. 直接隔离B",
        "B. 先整体求a再隔离B",
        "C. 直接隔离A",
        "D. 分析B"
      ],
      "correct": 1,
      "explanation": "先整体求出共同加速度，再隔离B列方程。",
      "encouragement": "叠放问题先整体。",
      "tags": "叠放问题"
    },
    {
      "stem": "连接体加速度相同时最方便的方法？",
      "options": [
        "A. 分别隔离",
        "B. 先整体求加速度",
        "C. 能量法",
        "D. 动量法"
      ],
      "correct": 1,
      "explanation": "加速度相同→先整体求a，再隔离求内力。",
      "encouragement": "先整体再隔离。",
      "tags": "连接体方法"
    },
    {
      "stem": "m₁m₂绳连受F，绳中张力T=？",
      "options": [
        "A. F",
        "B. m₂F/(m₁+m₂)",
        "C. m₁F/(m₁+m₂)",
        "D. F/2"
      ],
      "correct": 1,
      "explanation": "整体a=F/(m₁+m₂)，隔离m₂：T=m₂a=m₂F/(m₁+m₂)。",
      "encouragement": "记住这个公式！",
      "tags": "连接体张力"
    }
  ],
  "nd2": [
    {
      "stem": "物体向右滑时滑动摩擦力方向？",
      "options": [
        "A. 向右",
        "B. 向左",
        "C. 竖直向上",
        "D. 无法确定"
      ],
      "correct": 1,
      "explanation": "滑动摩擦力与相对运动方向相反。",
      "encouragement": "方向问题很多同学都搞反过。",
      "tags": "摩擦力方向"
    },
    {
      "stem": "斜面静止物体受几个力？",
      "options": [
        "A. 2个",
        "B. 3个",
        "C. 4个",
        "D. 都不对"
      ],
      "correct": 1,
      "explanation": "重力、支持力、静摩擦力3个。没有下滑力。",
      "encouragement": "没有下滑力这个力！",
      "tags": "受力分析"
    },
    {
      "stem": "匀速上升电梯中物体受力？",
      "options": [
        "A. 重力>支持力",
        "B. 支持力>重力",
        "C. 重力和支持力平衡",
        "D. 不受支持力"
      ],
      "correct": 2,
      "explanation": "匀速→合力为零→重力和支持力平衡。",
      "encouragement": "匀速就是平衡。",
      "tags": "平衡状态"
    },
    {
      "stem": "轻绳拉力方向特点？",
      "options": [
        "A. 沿绳指向收缩",
        "B. 沿绳背离物体",
        "C. 垂直接触面",
        "D. 竖直向上"
      ],
      "correct": 0,
      "explanation": "轻绳拉力一定沿绳指向绳收缩的方向。",
      "encouragement": "绳子方向有规律。",
      "tags": "绳的拉力"
    },
    {
      "stem": "作用力和反作用力的性质？",
      "options": [
        "A. 等大反向同体",
        "B. 等大反向异体",
        "C. 大小不等",
        "D. 不同时产生"
      ],
      "correct": 1,
      "explanation": "等大、反向、共线、异体。关键在异体。",
      "encouragement": "和平衡力混淆是常事。",
      "tags": "牛顿第三定律"
    },
    {
      "stem": "受拉力F未拉动，摩擦力大小？",
      "options": [
        "A. μmg",
        "B. 等于F",
        "C. 0",
        "D. 大于F"
      ],
      "correct": 1,
      "explanation": "静止→静摩擦力与拉力平衡。",
      "encouragement": "静摩擦力被动适应。",
      "tags": "静摩擦力"
    },
    {
      "stem": "轻杆弹力一定沿杆吗？",
      "options": [
        "A. 一定",
        "B. 不一定",
        "C. 一定不",
        "D. 只沿拉伸时"
      ],
      "correct": 1,
      "explanation": "杆的弹力不一定沿杆！绳才一定沿绳。",
      "encouragement": "绳有方向杆无定向！",
      "tags": "轻杆弹力"
    },
    {
      "stem": "受力分析时哪个力不应画？",
      "options": [
        "A. 重力",
        "B. 支持力",
        "C. 合力",
        "D. 摩擦力"
      ],
      "correct": 2,
      "explanation": "受力分析只画实际受到的力，合力是效果力。",
      "encouragement": "不画合力！",
      "tags": "受力分析原则"
    }
  ],
  "nd3": [
    {
      "stem": "正交分解坐标轴怎么建最方便？",
      "options": [
        "A. 水平竖直",
        "B. 斜面垂直斜面",
        "C. 沿a方向和垂直a方向",
        "D. 任意"
      ],
      "correct": 2,
      "explanation": "沿a方向建坐标列Fx=ma，垂直方向Fy=0。",
      "encouragement": "沿a方向建最省力。",
      "tags": "正交分解"
    },
    {
      "stem": "垂直加速度方向的合力？",
      "options": [
        "A. 为0",
        "B. 为ma",
        "C. 最大",
        "D. 不确定"
      ],
      "correct": 0,
      "explanation": "垂直方向无运动分量，Fy=0。",
      "encouragement": "Fy=0是铁律。",
      "tags": "正交分解原则"
    },
    {
      "stem": "斜向上拉力F加速，水平分力？",
      "options": [
        "A. F",
        "B. Fsinθ",
        "C. Fcosθ",
        "D. 0"
      ],
      "correct": 2,
      "explanation": "水平分力=Fcosθ，竖直分力=Fsinθ。",
      "encouragement": "找准邻边和对边。",
      "tags": "力的分解"
    },
    {
      "stem": "斜面加速下滑，沿斜面方向方程？",
      "options": [
        "A. mg=ma",
        "B. mgsinθ=ma",
        "C. mgsinθ-f=ma",
        "D. N-mgcosθ=ma"
      ],
      "correct": 2,
      "explanation": "下滑力mgsinθ减摩擦力f等于ma。",
      "encouragement": "这是斜面核心方程！",
      "tags": "斜面加速度"
    },
    {
      "stem": "加速度方向未知怎么建坐标系？",
      "options": [
        "A. 随便",
        "B. 假设a方向",
        "C. 不建",
        "D. 等知道"
      ],
      "correct": 1,
      "explanation": "假设a方向建，解出正则方向正确。",
      "encouragement": "假设法很重要。",
      "tags": "坐标系假设"
    },
    {
      "stem": "三力平衡需几个方程？",
      "options": [
        "A. 1个",
        "B. 2个",
        "C. 3个",
        "D. 4个"
      ],
      "correct": 1,
      "explanation": "Fx=0和Fy=0，两个方程。",
      "encouragement": "两个方向两个方程。",
      "tags": "正交分解方程"
    },
    {
      "stem": "坐标轴必须互相垂直？",
      "options": [
        "A. 必须",
        "B. 垂直最方便",
        "C. 不能",
        "D. 无所谓"
      ],
      "correct": 1,
      "explanation": "正交分解要求垂直，不垂直也能解但更复杂。",
      "encouragement": "正交=垂直。",
      "tags": "正交坐标系"
    },
    {
      "stem": "斜面静止沿斜面方向平衡方程？",
      "options": [
        "A. mg=0",
        "B. mgsinθ-f=0",
        "C. N-mg=0",
        "D. F=ma"
      ],
      "correct": 1,
      "explanation": "mgsinθ与静摩擦力f平衡。",
      "encouragement": "斜面平衡基本方程。",
      "tags": "斜面平衡"
    }
  ],
  "nd4": [
    {
      "stem": "F合=ma中F合指什么？",
      "options": [
        "A. 任意力",
        "B. 所有外力矢量和",
        "C. 支持力",
        "D. 重力"
      ],
      "correct": 1,
      "explanation": "F合是所有外力的矢量和。",
      "encouragement": "合力不是某一个力！",
      "tags": "合力理解"
    },
    {
      "stem": "2kg物体受6N，加速度？",
      "options": [
        "A. 12m/s²",
        "B. 3m/s²",
        "C. 8m/s²",
        "D. 4m/s²"
      ],
      "correct": 1,
      "explanation": "a=F/m=6/2=3m/s²。",
      "encouragement": "基本功扎实！",
      "tags": "F=ma计算"
    },
    {
      "stem": "正方向影响什么？",
      "options": [
        "A. a大小",
        "B. 正负号",
        "C. 力大小",
        "D. 质量"
      ],
      "correct": 1,
      "explanation": "正方向只影响正负号，不影响大小。",
      "encouragement": "正方向定正负。",
      "tags": "正方向"
    },
    {
      "stem": "摩擦力f减速，a的方程？",
      "options": [
        "A. f=ma",
        "B. -f=ma",
        "C. f+mg=ma",
        "D. f=-ma"
      ],
      "correct": 1,
      "explanation": "摩擦力与运动反向为负，-f=ma。",
      "encouragement": "符号错了全题皆错。",
      "tags": "方程符号"
    },
    {
      "stem": "已知受力求运动，求a后？",
      "options": [
        "A. 直接得速度",
        "B. 用运动学公式",
        "C. 重新受力",
        "D. 换对象"
      ],
      "correct": 1,
      "explanation": "求a后用运动学公式求速度位移。",
      "encouragement": "a之后是运动学。",
      "tags": "动力学步骤"
    },
    {
      "stem": "光滑斜面物体加速度？",
      "options": [
        "A. g",
        "B. gsinθ",
        "C. gcosθ",
        "D. gtanθ"
      ],
      "correct": 1,
      "explanation": "a=mgsinθ/m=gsinθ。",
      "encouragement": "gsinθ常考！",
      "tags": "斜面加速度"
    },
    {
      "stem": "列车加速θ角，a=？",
      "options": [
        "A. gtanθ",
        "B. gsinθ",
        "C. gcosθ",
        "D. g/tanθ"
      ],
      "correct": 0,
      "explanation": "tanθ=ma/mg，a=gtanθ。加速度计原理。",
      "encouragement": "加速度计原题！",
      "tags": "加速度计"
    },
    {
      "stem": "ma是不是力？",
      "options": [
        "A. 是",
        "B. 不是是效果",
        "C. 等于重力",
        "D. 不确定"
      ],
      "correct": 1,
      "explanation": "ma不是力，是力的效果。F=ma=力产生加速度。",
      "encouragement": "ma不是力！",
      "tags": "力的本质"
    }
  ],
  "nd5": [
    {
      "stem": "加速度为负说明？",
      "options": [
        "A. 计算错",
        "B. 方向与正方向相反",
        "C. 静止",
        "D. 题目错"
      ],
      "correct": 1,
      "explanation": "负值只表示方向与正方向相反。",
      "encouragement": "负号表示方向。",
      "tags": "结果检验"
    },
    {
      "stem": "a=10m/s²合理吗？",
      "options": [
        "A. 不合理",
        "B. 合理≈g",
        "C. 只在真空",
        "D. 不可能"
      ],
      "correct": 1,
      "explanation": "10m/s²≈g，自由落体时合理。",
      "encouragement": "常见值要有感觉。",
      "tags": "量纲判断"
    },
    {
      "stem": "忘摩擦力至a偏大，为什么？",
      "options": [
        "A. 方向反",
        "B. 应从合力中减",
        "C. 不影响",
        "D. 方向变"
      ],
      "correct": 1,
      "explanation": "摩擦力应从合力中减去，忘了则合力偏大。",
      "encouragement": "检查受力图！",
      "tags": "摩擦力遗漏"
    },
    {
      "stem": "时间t为负值原因？",
      "options": [
        "A. 时间可负",
        "B. 正方向设错",
        "C. a算大",
        "D. m算错"
      ],
      "correct": 1,
      "explanation": "时间不能为负，检查正方向设定。",
      "encouragement": "负时间查方向。",
      "tags": "时间负值"
    },
    {
      "stem": "力的国际单位？",
      "options": [
        "A. kg",
        "B. m/s",
        "C. N",
        "D. m/s²"
      ],
      "correct": 2,
      "explanation": "力的单位是N(牛顿)，1N=1kg·m/s²。",
      "encouragement": "量纲查错最快！",
      "tags": "力的单位"
    },
    {
      "stem": "两未知数一方程说明？",
      "options": [
        "A. 题错",
        "B. 需再找一对象列式",
        "C. 放弃",
        "D. 猜"
      ],
      "correct": 1,
      "explanation": "换一个对象再列一个方程。",
      "encouragement": "方程不够换对象！",
      "tags": "多未知数"
    },
    {
      "stem": "怎么验证结果正确？",
      "options": [
        "A. 再算一遍",
        "B. 用F=ma验证",
        "C. 看符号",
        "D. 看大小"
      ],
      "correct": 1,
      "explanation": "代入F=ma看是否成立。",
      "encouragement": "代入验证最直接！",
      "tags": "结果验证"
    },
    {
      "stem": "整体法a可用于隔离体？",
      "options": [
        "A. 整体隔离a相同",
        "B. 总是相等",
        "C. 质量相同",
        "D. 力相同"
      ],
      "correct": 0,
      "explanation": "连接体各物体加速度相同。",
      "encouragement": "a相同是关键！",
      "tags": "加速度相同"
    }
  ],
  "dc1": [
    {
      "stem": "动量守恒步骤1(判系统)的核心要点？",
      "options": [
        "A. 判系统",
        "B. 看外力",
        "C. 定初末",
        "D. 列矢量式"
      ],
      "correct": 0,
      "explanation": "动量守恒第1步是判系统。",
      "encouragement": "步骤要记清！",
      "tags": "动量守恒"
    },
    {
      "stem": "动量守恒的条件？",
      "options": [
        "A. 合外力不为零",
        "B. 合外力为零或内力>>外力",
        "C. 只要有力",
        "D. 与速度无关"
      ],
      "correct": 1,
      "explanation": "合外力为零时守恒；内力>>外力时近似守恒。",
      "encouragement": "条件=合外力为零！",
      "tags": "动量守恒条件"
    }
  ],
  "dc2": [
    {
      "stem": "动量守恒步骤2(看外力)的核心要点？",
      "options": [
        "A. 判系统",
        "B. 看外力",
        "C. 定初末",
        "D. 列矢量式"
      ],
      "correct": 1,
      "explanation": "动量守恒第2步是看外力。",
      "encouragement": "步骤要记清！",
      "tags": "动量守恒"
    },
    {
      "stem": "动量守恒的条件？",
      "options": [
        "A. 合外力不为零",
        "B. 合外力为零或内力>>外力",
        "C. 只要有力",
        "D. 与速度无关"
      ],
      "correct": 1,
      "explanation": "合外力为零时守恒；内力>>外力时近似守恒。",
      "encouragement": "条件=合外力为零！",
      "tags": "动量守恒条件"
    }
  ],
  "dc3": [
    {
      "stem": "动量守恒步骤3(定初末)的核心要点？",
      "options": [
        "A. 判系统",
        "B. 看外力",
        "C. 定初末",
        "D. 列矢量式"
      ],
      "correct": 2,
      "explanation": "动量守恒第3步是定初末。",
      "encouragement": "步骤要记清！",
      "tags": "动量守恒"
    },
    {
      "stem": "动量守恒的条件？",
      "options": [
        "A. 合外力不为零",
        "B. 合外力为零或内力>>外力",
        "C. 只要有力",
        "D. 与速度无关"
      ],
      "correct": 1,
      "explanation": "合外力为零时守恒；内力>>外力时近似守恒。",
      "encouragement": "条件=合外力为零！",
      "tags": "动量守恒条件"
    }
  ],
  "dc4": [
    {
      "stem": "动量守恒步骤4(列矢量式)的核心要点？",
      "options": [
        "A. 判系统",
        "B. 看外力",
        "C. 定初末",
        "D. 列矢量式"
      ],
      "correct": 3,
      "explanation": "动量守恒第4步是列矢量式。",
      "encouragement": "步骤要记清！",
      "tags": "动量守恒"
    },
    {
      "stem": "动量守恒的条件？",
      "options": [
        "A. 合外力不为零",
        "B. 合外力为零或内力>>外力",
        "C. 只要有力",
        "D. 与速度无关"
      ],
      "correct": 1,
      "explanation": "合外力为零时守恒；内力>>外力时近似守恒。",
      "encouragement": "条件=合外力为零！",
      "tags": "动量守恒条件"
    }
  ],
  "dn1": [
    {
      "stem": "动能定理表达式？",
      "options": [
        "A. F=ma",
        "B. W合=ΔEk",
        "C. p=mv",
        "D. mgh=½mv²"
      ],
      "correct": 1,
      "explanation": "W合=Ek末-Ek初。",
      "encouragement": "W合=ΔEk！",
      "tags": "动能定理"
    },
    {
      "stem": "速度减半动能变多少？",
      "options": [
        "A. 1/2",
        "B. 1/4",
        "C. 1/8",
        "D. 不变"
      ],
      "correct": 1,
      "explanation": "Ek=½mv²，v减半v²变1/4。",
      "encouragement": "平方关系要牢记！",
      "tags": "动能与速度"
    }
  ],
  "dn2": [
    {
      "stem": "动能定理表达式？",
      "options": [
        "A. F=ma",
        "B. W合=ΔEk",
        "C. p=mv",
        "D. mgh=½mv²"
      ],
      "correct": 1,
      "explanation": "W合=Ek末-Ek初。",
      "encouragement": "W合=ΔEk！",
      "tags": "动能定理"
    },
    {
      "stem": "速度减半动能变多少？",
      "options": [
        "A. 1/2",
        "B. 1/4",
        "C. 1/8",
        "D. 不变"
      ],
      "correct": 1,
      "explanation": "Ek=½mv²，v减半v²变1/4。",
      "encouragement": "平方关系要牢记！",
      "tags": "动能与速度"
    }
  ],
  "dn3": [
    {
      "stem": "动能定理表达式？",
      "options": [
        "A. F=ma",
        "B. W合=ΔEk",
        "C. p=mv",
        "D. mgh=½mv²"
      ],
      "correct": 1,
      "explanation": "W合=Ek末-Ek初。",
      "encouragement": "W合=ΔEk！",
      "tags": "动能定理"
    },
    {
      "stem": "速度减半动能变多少？",
      "options": [
        "A. 1/2",
        "B. 1/4",
        "C. 1/8",
        "D. 不变"
      ],
      "correct": 1,
      "explanation": "Ek=½mv²，v减半v²变1/4。",
      "encouragement": "平方关系要牢记！",
      "tags": "动能与速度"
    }
  ],
  "dn4": [
    {
      "stem": "动能定理表达式？",
      "options": [
        "A. F=ma",
        "B. W合=ΔEk",
        "C. p=mv",
        "D. mgh=½mv²"
      ],
      "correct": 1,
      "explanation": "W合=Ek末-Ek初。",
      "encouragement": "W合=ΔEk！",
      "tags": "动能定理"
    },
    {
      "stem": "速度减半动能变多少？",
      "options": [
        "A. 1/2",
        "B. 1/4",
        "C. 1/8",
        "D. 不变"
      ],
      "correct": 1,
      "explanation": "Ek=½mv²，v减半v²变1/4。",
      "encouragement": "平方关系要牢记！",
      "tags": "动能与速度"
    }
  ],
  "wy1": [
    {
      "stem": "F=GMm/r²中r指？",
      "options": [
        "A. 表面距",
        "B. 质心距",
        "C. 地球半径",
        "D. 轨道高度"
      ],
      "correct": 1,
      "explanation": "r是两物体质心间的距离。",
      "encouragement": "r是质心距！",
      "tags": "万有引力"
    },
    {
      "stem": "卫星半径越大线速度？",
      "options": [
        "A. 越大",
        "B. 越小",
        "C. 不变",
        "D. 先大后小"
      ],
      "correct": 1,
      "explanation": "v=√(GM/r)，r越大v越小。高轨低速。",
      "encouragement": "高轨低速常考！",
      "tags": "卫星规律"
    }
  ],
  "wy2": [
    {
      "stem": "F=GMm/r²中r指？",
      "options": [
        "A. 表面距",
        "B. 质心距",
        "C. 地球半径",
        "D. 轨道高度"
      ],
      "correct": 1,
      "explanation": "r是两物体质心间的距离。",
      "encouragement": "r是质心距！",
      "tags": "万有引力"
    },
    {
      "stem": "卫星半径越大线速度？",
      "options": [
        "A. 越大",
        "B. 越小",
        "C. 不变",
        "D. 先大后小"
      ],
      "correct": 1,
      "explanation": "v=√(GM/r)，r越大v越小。高轨低速。",
      "encouragement": "高轨低速常考！",
      "tags": "卫星规律"
    }
  ],
  "wy3": [
    {
      "stem": "F=GMm/r²中r指？",
      "options": [
        "A. 表面距",
        "B. 质心距",
        "C. 地球半径",
        "D. 轨道高度"
      ],
      "correct": 1,
      "explanation": "r是两物体质心间的距离。",
      "encouragement": "r是质心距！",
      "tags": "万有引力"
    },
    {
      "stem": "卫星半径越大线速度？",
      "options": [
        "A. 越大",
        "B. 越小",
        "C. 不变",
        "D. 先大后小"
      ],
      "correct": 1,
      "explanation": "v=√(GM/r)，r越大v越小。高轨低速。",
      "encouragement": "高轨低速常考！",
      "tags": "卫星规律"
    }
  ],
  "wy4": [
    {
      "stem": "F=GMm/r²中r指？",
      "options": [
        "A. 表面距",
        "B. 质心距",
        "C. 地球半径",
        "D. 轨道高度"
      ],
      "correct": 1,
      "explanation": "r是两物体质心间的距离。",
      "encouragement": "r是质心距！",
      "tags": "万有引力"
    },
    {
      "stem": "卫星半径越大线速度？",
      "options": [
        "A. 越大",
        "B. 越小",
        "C. 不变",
        "D. 先大后小"
      ],
      "correct": 1,
      "explanation": "v=√(GM/r)，r越大v越小。高轨低速。",
      "encouragement": "高轨低速常考！",
      "tags": "卫星规律"
    }
  ],
  "jc1": [
    {
      "stem": "电场线疏密表示？",
      "options": [
        "A. 电势",
        "B. 电场强弱",
        "C. 电荷",
        "D. 力方向"
      ],
      "correct": 1,
      "explanation": "电场线越密电场越强。",
      "encouragement": "疏密=强弱。",
      "tags": "电场线"
    },
    {
      "stem": "正电荷受力方向？",
      "options": [
        "A. 与电场线反向",
        "B. 与电场线同向",
        "C. 垂直",
        "D. 不确定"
      ],
      "correct": 1,
      "explanation": "正电荷受力与电场方向相同。",
      "encouragement": "正电荷顺电场线！",
      "tags": "电场力方向"
    }
  ],
  "jc2": [
    {
      "stem": "电场线疏密表示？",
      "options": [
        "A. 电势",
        "B. 电场强弱",
        "C. 电荷",
        "D. 力方向"
      ],
      "correct": 1,
      "explanation": "电场线越密电场越强。",
      "encouragement": "疏密=强弱。",
      "tags": "电场线"
    },
    {
      "stem": "正电荷受力方向？",
      "options": [
        "A. 与电场线反向",
        "B. 与电场线同向",
        "C. 垂直",
        "D. 不确定"
      ],
      "correct": 1,
      "explanation": "正电荷受力与电场方向相同。",
      "encouragement": "正电荷顺电场线！",
      "tags": "电场力方向"
    }
  ],
  "jc3": [
    {
      "stem": "电场线疏密表示？",
      "options": [
        "A. 电势",
        "B. 电场强弱",
        "C. 电荷",
        "D. 力方向"
      ],
      "correct": 1,
      "explanation": "电场线越密电场越强。",
      "encouragement": "疏密=强弱。",
      "tags": "电场线"
    },
    {
      "stem": "正电荷受力方向？",
      "options": [
        "A. 与电场线反向",
        "B. 与电场线同向",
        "C. 垂直",
        "D. 不确定"
      ],
      "correct": 1,
      "explanation": "正电荷受力与电场方向相同。",
      "encouragement": "正电荷顺电场线！",
      "tags": "电场力方向"
    }
  ],
  "jc4": [
    {
      "stem": "电场线疏密表示？",
      "options": [
        "A. 电势",
        "B. 电场强弱",
        "C. 电荷",
        "D. 力方向"
      ],
      "correct": 1,
      "explanation": "电场线越密电场越强。",
      "encouragement": "疏密=强弱。",
      "tags": "电场线"
    },
    {
      "stem": "正电荷受力方向？",
      "options": [
        "A. 与电场线反向",
        "B. 与电场线同向",
        "C. 垂直",
        "D. 不确定"
      ],
      "correct": 1,
      "explanation": "正电荷受力与电场方向相同。",
      "encouragement": "正电荷顺电场线！",
      "tags": "电场力方向"
    }
  ],
  "dg1": [
    {
      "stem": "感应电动势产生条件？",
      "options": [
        "A. 有磁场",
        "B. 磁通量变化",
        "C. 有导体",
        "D. 有电流"
      ],
      "correct": 1,
      "explanation": "磁通量变化产生感应电动势。",
      "encouragement": "磁通量变化是根因！",
      "tags": "电磁感应"
    },
    {
      "stem": "楞次定律内容？",
      "options": [
        "A. 磁通量大感应强",
        "B. 感应电流阻碍引起它的原因",
        "C. 同向",
        "D. 与电阻无关"
      ],
      "correct": 1,
      "explanation": "增反减同、来拒去留。",
      "encouragement": "增反减同！",
      "tags": "楞次定律"
    }
  ],
  "dg2": [
    {
      "stem": "感应电动势产生条件？",
      "options": [
        "A. 有磁场",
        "B. 磁通量变化",
        "C. 有导体",
        "D. 有电流"
      ],
      "correct": 1,
      "explanation": "磁通量变化产生感应电动势。",
      "encouragement": "磁通量变化是根因！",
      "tags": "电磁感应"
    },
    {
      "stem": "楞次定律内容？",
      "options": [
        "A. 磁通量大感应强",
        "B. 感应电流阻碍引起它的原因",
        "C. 同向",
        "D. 与电阻无关"
      ],
      "correct": 1,
      "explanation": "增反减同、来拒去留。",
      "encouragement": "增反减同！",
      "tags": "楞次定律"
    }
  ],
  "dg3": [
    {
      "stem": "感应电动势产生条件？",
      "options": [
        "A. 有磁场",
        "B. 磁通量变化",
        "C. 有导体",
        "D. 有电流"
      ],
      "correct": 1,
      "explanation": "磁通量变化产生感应电动势。",
      "encouragement": "磁通量变化是根因！",
      "tags": "电磁感应"
    },
    {
      "stem": "楞次定律内容？",
      "options": [
        "A. 磁通量大感应强",
        "B. 感应电流阻碍引起它的原因",
        "C. 同向",
        "D. 与电阻无关"
      ],
      "correct": 1,
      "explanation": "增反减同、来拒去留。",
      "encouragement": "增反减同！",
      "tags": "楞次定律"
    }
  ],
  "dg4": [
    {
      "stem": "感应电动势产生条件？",
      "options": [
        "A. 有磁场",
        "B. 磁通量变化",
        "C. 有导体",
        "D. 有电流"
      ],
      "correct": 1,
      "explanation": "磁通量变化产生感应电动势。",
      "encouragement": "磁通量变化是根因！",
      "tags": "电磁感应"
    },
    {
      "stem": "楞次定律内容？",
      "options": [
        "A. 磁通量大感应强",
        "B. 感应电流阻碍引起它的原因",
        "C. 同向",
        "D. 与电阻无关"
      ],
      "correct": 1,
      "explanation": "增反减同、来拒去留。",
      "encouragement": "增反减同！",
      "tags": "楞次定律"
    }
  ],
  "jl1": [
    {
      "stem": "交流电步骤1(看转轴)要点？",
      "options": [
        "A. 看转轴",
        "B. 定峰值",
        "C. 写瞬时值",
        "D. 算有效值"
      ],
      "correct": 0,
      "explanation": "第1步是看转轴。",
      "encouragement": "步骤顺序要记牢！",
      "tags": "交流电"
    },
    {
      "stem": "有效值与峰值关系？",
      "options": [
        "A. 相等",
        "B. U=Um/√2",
        "C. Um=U/√2",
        "D. U=2Um"
      ],
      "correct": 1,
      "explanation": "正弦交流电有效值=峰值/√2。",
      "encouragement": "U=Um/√2常考！",
      "tags": "有效值"
    }
  ],
  "jl2": [
    {
      "stem": "交流电步骤2(定峰值)要点？",
      "options": [
        "A. 看转轴",
        "B. 定峰值",
        "C. 写瞬时值",
        "D. 算有效值"
      ],
      "correct": 1,
      "explanation": "第2步是定峰值。",
      "encouragement": "步骤顺序要记牢！",
      "tags": "交流电"
    },
    {
      "stem": "有效值与峰值关系？",
      "options": [
        "A. 相等",
        "B. U=Um/√2",
        "C. Um=U/√2",
        "D. U=2Um"
      ],
      "correct": 1,
      "explanation": "正弦交流电有效值=峰值/√2。",
      "encouragement": "U=Um/√2常考！",
      "tags": "有效值"
    }
  ],
  "jl3": [
    {
      "stem": "交流电步骤3(写瞬时值)要点？",
      "options": [
        "A. 看转轴",
        "B. 定峰值",
        "C. 写瞬时值",
        "D. 算有效值"
      ],
      "correct": 2,
      "explanation": "第3步是写瞬时值。",
      "encouragement": "步骤顺序要记牢！",
      "tags": "交流电"
    },
    {
      "stem": "有效值与峰值关系？",
      "options": [
        "A. 相等",
        "B. U=Um/√2",
        "C. Um=U/√2",
        "D. U=2Um"
      ],
      "correct": 1,
      "explanation": "正弦交流电有效值=峰值/√2。",
      "encouragement": "U=Um/√2常考！",
      "tags": "有效值"
    }
  ],
  "jl4": [
    {
      "stem": "交流电步骤4(算有效值)要点？",
      "options": [
        "A. 看转轴",
        "B. 定峰值",
        "C. 写瞬时值",
        "D. 算有效值"
      ],
      "correct": 3,
      "explanation": "第4步是算有效值。",
      "encouragement": "步骤顺序要记牢！",
      "tags": "交流电"
    },
    {
      "stem": "有效值与峰值关系？",
      "options": [
        "A. 相等",
        "B. U=Um/√2",
        "C. Um=U/√2",
        "D. U=2Um"
      ],
      "correct": 1,
      "explanation": "正弦交流电有效值=峰值/√2。",
      "encouragement": "U=Um/√2常考！",
      "tags": "有效值"
    }
  ],
  "qt1": [
    {
      "stem": "气体方程中温度单位？",
      "options": [
        "A. 摄氏",
        "B. 开尔文(K)",
        "C. 华氏",
        "D. 都可以"
      ],
      "correct": 1,
      "explanation": "温度必须用开尔文T(K)。",
      "encouragement": "必须用开尔文！",
      "tags": "气体温度"
    },
    {
      "stem": "等温变化用哪个定律？",
      "options": [
        "A. 玻意耳",
        "B. 查理",
        "C. 盖-吕萨克",
        "D. 都行"
      ],
      "correct": 0,
      "explanation": "等温用玻意耳定律p₁V₁=p₂V₂。",
      "encouragement": "等温玻意耳！",
      "tags": "气体定律"
    }
  ],
  "qt2": [
    {
      "stem": "气体方程中温度单位？",
      "options": [
        "A. 摄氏",
        "B. 开尔文(K)",
        "C. 华氏",
        "D. 都可以"
      ],
      "correct": 1,
      "explanation": "温度必须用开尔文T(K)。",
      "encouragement": "必须用开尔文！",
      "tags": "气体温度"
    },
    {
      "stem": "等温变化用哪个定律？",
      "options": [
        "A. 玻意耳",
        "B. 查理",
        "C. 盖-吕萨克",
        "D. 都行"
      ],
      "correct": 0,
      "explanation": "等温用玻意耳定律p₁V₁=p₂V₂。",
      "encouragement": "等温玻意耳！",
      "tags": "气体定律"
    }
  ],
  "qt3": [
    {
      "stem": "气体方程中温度单位？",
      "options": [
        "A. 摄氏",
        "B. 开尔文(K)",
        "C. 华氏",
        "D. 都可以"
      ],
      "correct": 1,
      "explanation": "温度必须用开尔文T(K)。",
      "encouragement": "必须用开尔文！",
      "tags": "气体温度"
    },
    {
      "stem": "等温变化用哪个定律？",
      "options": [
        "A. 玻意耳",
        "B. 查理",
        "C. 盖-吕萨克",
        "D. 都行"
      ],
      "correct": 0,
      "explanation": "等温用玻意耳定律p₁V₁=p₂V₂。",
      "encouragement": "等温玻意耳！",
      "tags": "气体定律"
    }
  ],
  "qt4": [
    {
      "stem": "气体方程中温度单位？",
      "options": [
        "A. 摄氏",
        "B. 开尔文(K)",
        "C. 华氏",
        "D. 都可以"
      ],
      "correct": 1,
      "explanation": "温度必须用开尔文T(K)。",
      "encouragement": "必须用开尔文！",
      "tags": "气体温度"
    },
    {
      "stem": "等温变化用哪个定律？",
      "options": [
        "A. 玻意耳",
        "B. 查理",
        "C. 盖-吕萨克",
        "D. 都行"
      ],
      "correct": 0,
      "explanation": "等温用玻意耳定律p₁V₁=p₂V₂。",
      "encouragement": "等温玻意耳！",
      "tags": "气体定律"
    }
  ],
  "nd_e1": [
    {
      "stem": "能量法第1步(定初末态)要点？",
      "options": [
        "A. 定初末态",
        "B. 算总功",
        "C. 定动能变化",
        "D. 列方程"
      ],
      "correct": 0,
      "explanation": "第1步是定初末态。",
      "encouragement": "能量法步骤要记清！",
      "tags": "能量法"
    },
    {
      "stem": "初末态核心是什么？",
      "options": [
        "A. 力和时间",
        "B. 速度和高度",
        "C. 质量和加速度",
        "D. 时间和位移"
      ],
      "correct": 1,
      "explanation": "初末态核心是速度和高度（动能和势能）。",
      "encouragement": "速度和高度是关键！",
      "tags": "初末态"
    }
  ],
  "nd_e2": [
    {
      "stem": "能量法第2步(算总功)要点？",
      "options": [
        "A. 定初末态",
        "B. 算总功",
        "C. 定动能变化",
        "D. 列方程"
      ],
      "correct": 1,
      "explanation": "第2步是算总功。",
      "encouragement": "能量法步骤要记清！",
      "tags": "能量法"
    },
    {
      "stem": "初末态核心是什么？",
      "options": [
        "A. 力和时间",
        "B. 速度和高度",
        "C. 质量和加速度",
        "D. 时间和位移"
      ],
      "correct": 1,
      "explanation": "初末态核心是速度和高度（动能和势能）。",
      "encouragement": "速度和高度是关键！",
      "tags": "初末态"
    }
  ],
  "nd_e3": [
    {
      "stem": "能量法第3步(定动能变化)要点？",
      "options": [
        "A. 定初末态",
        "B. 算总功",
        "C. 定动能变化",
        "D. 列方程"
      ],
      "correct": 2,
      "explanation": "第3步是定动能变化。",
      "encouragement": "能量法步骤要记清！",
      "tags": "能量法"
    },
    {
      "stem": "初末态核心是什么？",
      "options": [
        "A. 力和时间",
        "B. 速度和高度",
        "C. 质量和加速度",
        "D. 时间和位移"
      ],
      "correct": 1,
      "explanation": "初末态核心是速度和高度（动能和势能）。",
      "encouragement": "速度和高度是关键！",
      "tags": "初末态"
    }
  ],
  "nd_e4": [
    {
      "stem": "能量法第4步(列方程)要点？",
      "options": [
        "A. 定初末态",
        "B. 算总功",
        "C. 定动能变化",
        "D. 列方程"
      ],
      "correct": 3,
      "explanation": "第4步是列方程。",
      "encouragement": "能量法步骤要记清！",
      "tags": "能量法"
    },
    {
      "stem": "初末态核心是什么？",
      "options": [
        "A. 力和时间",
        "B. 速度和高度",
        "C. 质量和加速度",
        "D. 时间和位移"
      ],
      "correct": 1,
      "explanation": "初末态核心是速度和高度（动能和势能）。",
      "encouragement": "速度和高度是关键！",
      "tags": "初末态"
    }
  ],
  "dg_e1": [
    {
      "stem": "能量法第1步要点？",
      "options": [
        "A. 定能量来源",
        "B. 列能量转化式",
        "C. 算焦耳热",
        "D. 检查守恒"
      ],
      "correct": 0,
      "explanation": "第1步正确。",
      "encouragement": "记住步骤顺序！",
      "tags": "电磁感应能量"
    },
    {
      "stem": "电磁感应中焦耳热怎么求？",
      "options": [
        "A. U²/R",
        "B. I²Rt",
        "C. Fs",
        "D. mgh"
      ],
      "correct": 1,
      "explanation": "焦耳热Q=I²Rt，或由能量转化关系求。",
      "encouragement": "Q=I²Rt！",
      "tags": "焦耳热"
    }
  ],
  "dg_e2": [
    {
      "stem": "能量法第2步要点？",
      "options": [
        "A. 定能量来源",
        "B. 列能量转化式",
        "C. 算焦耳热",
        "D. 检查守恒"
      ],
      "correct": 1,
      "explanation": "第2步正确。",
      "encouragement": "记住步骤顺序！",
      "tags": "电磁感应能量"
    },
    {
      "stem": "电磁感应中焦耳热怎么求？",
      "options": [
        "A. U²/R",
        "B. I²Rt",
        "C. Fs",
        "D. mgh"
      ],
      "correct": 1,
      "explanation": "焦耳热Q=I²Rt，或由能量转化关系求。",
      "encouragement": "Q=I²Rt！",
      "tags": "焦耳热"
    }
  ],
  "dg_e3": [
    {
      "stem": "能量法第3步要点？",
      "options": [
        "A. 定能量来源",
        "B. 列能量转化式",
        "C. 算焦耳热",
        "D. 检查守恒"
      ],
      "correct": 2,
      "explanation": "第3步正确。",
      "encouragement": "记住步骤顺序！",
      "tags": "电磁感应能量"
    },
    {
      "stem": "电磁感应中焦耳热怎么求？",
      "options": [
        "A. U²/R",
        "B. I²Rt",
        "C. Fs",
        "D. mgh"
      ],
      "correct": 1,
      "explanation": "焦耳热Q=I²Rt，或由能量转化关系求。",
      "encouragement": "Q=I²Rt！",
      "tags": "焦耳热"
    }
  ],
  "dg_e4": [
    {
      "stem": "能量法第4步要点？",
      "options": [
        "A. 定能量来源",
        "B. 列能量转化式",
        "C. 算焦耳热",
        "D. 检查守恒"
      ],
      "correct": 3,
      "explanation": "第4步正确。",
      "encouragement": "记住步骤顺序！",
      "tags": "电磁感应能量"
    },
    {
      "stem": "电磁感应中焦耳热怎么求？",
      "options": [
        "A. U²/R",
        "B. I²Rt",
        "C. Fs",
        "D. mgh"
      ],
      "correct": 1,
      "explanation": "焦耳热Q=I²Rt，或由能量转化关系求。",
      "encouragement": "Q=I²Rt！",
      "tags": "焦耳热"
    }
  ]
};

// ==================== 练习题逻辑模块 ====================
var QUIZ_STATE = {};
function startQuiz(stepId) {
  var qs = QUESTIONS[stepId];
  if(!qs || qs.length === 0) { alert('暂无题库'); return; }
  QUIZ_STATE.stepId = stepId;
  QUIZ_STATE.questions = qs;
  QUIZ_STATE.used = [];
  QUIZ_STATE.index = 0;
  QUIZ_STATE.correct = 0;
  QUIZ_STATE.total = 0;
  QUIZ_STATE.results = [];
  // 随机选3道
  QUIZ_STATE.batch = shufflePick(qs, 3);
  QUIZ_STATE.used = QUIZ_STATE.used.concat(QUIZ_STATE.batch);
  showQuestion(0);
}
function shufflePick(arr, n) {
  var copy = arr.slice();
  var result = [];
  for(var i=0;i<n && copy.length>0;i++) {
    var idx = Math.floor(Math.random() * copy.length);
    result.push(copy.splice(idx,1)[0]);
  }
  return result;
}
function showQuestion(idx) {
  QUIZ_STATE.index = idx;
  var q = QUIZ_STATE.batch[idx];
  var html = '<div class="quiz-overlay"><div class="quiz-box"><div class="quiz-close" onclick="closeQuiz()">&times;</div><div class="quiz-counter">第'+(idx+1)+'/'+QUIZ_STATE.batch.length+'题</div>';
  html += '<div class="quiz-stem">'+q.stem+'</div><div class="quiz-options">';
  for(var i=0;i<q.options.length;i++) {
    html += '<div class="quiz-option" onclick="submitQuizAnswer('+i+')">'+q.options[i]+'</div>';
  }
  html += '</div></div></div>';
  var el = document.getElementById('quizContainer');
  if(el) el.innerHTML = html;
}
function submitQuizAnswer(selected) {
  var q = QUIZ_STATE.batch[QUIZ_STATE.index];
  var isCorrect = (selected === q.correct);
  QUIZ_STATE.total++;
  if(isCorrect) QUIZ_STATE.correct++;
  QUIZ_STATE.results.push({q:q, selected:selected, correct:isCorrect});
  var html = '<div class="quiz-overlay"><div class="quiz-box"><div class="quiz-close" onclick="closeQuiz()">&times;</div>';
  if(isCorrect) {
    html += '<div class="quiz-result quiz-correct">&#10004; 回答正确！</div>';
  } else {
    html += '<div class="quiz-result quiz-wrong">&#10008; 回答错误</div>';
    html += '<div class="quiz-answer">正确答案：'+q.options[q.correct]+'</div>';
  }
  html += '<div class="quiz-explain">'+q.explanation+'</div>';
  html += '<div class="quiz-encourage">&#128170; '+q.encouragement+'</div>';
  if(QUIZ_STATE.index+1 < QUIZ_STATE.batch.length) {
    html += '<button class="quiz-btn" onclick="showQuestion('+(QUIZ_STATE.index+1)+')">下一题</button>';
  } else {
    html += '<div class="quiz-result-title">你答对了 '+QUIZ_STATE.correct+'/'+QUIZ_STATE.total+' 题</div>';
    var remaining = QUIZ_STATE.questions.length - QUIZ_STATE.used.length;
    if(remaining > 0) {
      html += '<button class="quiz-btn" onclick="continueQuiz()">继续练习</button>';
    }
    html += '<button class="quiz-btn quiz-btn-exit" onclick="closeQuiz()">退出练习</button>';
    if(remaining === 0) {
      html += '<div class="quiz-done">&#127881; 你已挑战完本步骤所有卡点！你的物理直觉正在变得锋利。</div>';
    }
  }
  html += '</div></div>';
  var el = document.getElementById('quizContainer');
  if(el) el.innerHTML = html;
}
function continueQuiz() {
  var remaining = QUIZ_STATE.questions.slice();
  for(var i=0;i<QUIZ_STATE.used.length;i++) {
    var idx = remaining.indexOf(QUIZ_STATE.used[i]);
    if(idx >= 0) remaining.splice(idx,1);
  }
  QUIZ_STATE.batch = shufflePick(remaining, Math.min(3, remaining.length));
  QUIZ_STATE.used = QUIZ_STATE.used.concat(QUIZ_STATE.batch);
  showQuestion(0);
}
function closeQuiz() {
  var el = document.getElementById('quizContainer');
  if(el) el.innerHTML = '';
}
// 修改 renderLogicTree 在步骤卡片后添加"来测三道"按钮
function addQuizButtons() {
  var cards = document.querySelectorAll('.step-card');
  for(var i=0;i<cards.length;i++) {
    if(cards[i].querySelector('.quiz-btn-start')) continue;
    var sid = cards[i].getAttribute('data-step');
    if(sid && QUESTIONS[sid]) {
      var btn = document.createElement('button');
      btn.className = 'quiz-btn-start';
      btn.innerHTML = '&#128221; 来测三道这个步骤的核心卡点';
      btn.onclick = function(id) { return function(){ startQuiz(id); }; }(sid);
      cards[i].appendChild(btn);
    }
  }
}
var _origRLT2 = renderLogicTree;
renderLogicTree = function() { _origRLT2(); setTimeout(addQuizButtons, 200); };



// ==================== 自习室模块 ====================
// 物理天气
var PHYSICS_WEATHER = [
  {start:5, end:8, text:"清晨，物理世界正在苏醒。"},
  {start:8, end:12, text:"万物都在遵守运动定律。"},
  {start:12, end:14, text:"正午，能量守恒定律正忙着分配阳光。"},
  {start:14, end:18, text:"熵在悄悄增加，你的专注在悄悄积累。"},
  {start:18, end:20, text:"黄昏，光速依然恒定在30万公里/秒。"},
  {start:20, end:23, text:"星河在旋转，你的思维也在旋转。"},
  {start:23, end:5, text:"夜深了，但物理世界从不打烊。"}
];

function updatePhysicsWeather() {
  var el = document.getElementById("physicsWeather");
  if(!el) return;
  var h = new Date().getHours();
  for(var i=0;i<PHYSICS_WEATHER.length;i++) {
    var w = PHYSICS_WEATHER[i];
    if(w.start < w.end) { if(h >= w.start && h < w.end) { el.textContent = w.text; return; } }
    else { if(h >= w.start || h < w.end) { el.textContent = w.text; return; } }
  }
  el.textContent = "物理世界永远值得探索。";
}

// 自习室状态
var STUDY_MODE = false;
var STUDY_START = null;
var STUDY_GOAL = "";
var STUDY_NOISE = null;
var STUDY_TIMER = null;
var STUDY_MODE_TYPE = 0;

// 显示模式选择器
function showStudyModeSelector(goal) {
  var hasGoal = goal && goal.trim().length > 0;
  var el = document.getElementById("modeSelector");
  if(!el) return;
  var html = "<div class=\"mode-select-overlay\"><div class=\"mode-select-box\">";
  html += "<div class=\"mode-select-title\">选择自习模式</div>";
  html += "<div class=\"mode-card\" data-mode=\"focus\">";
  html += "<div class=\"mode-icon\">🎯</div><div class=\"mode-name\">专注模式</div>";
  html += "<div class=\"mode-desc\">保留逻辑树，全神贯注解题</div></div>";
  html += "<div class=\"mode-card\" data-mode=\"quote\">";
  html += "<div class=\"mode-icon\">⏳</div><div class=\"mode-name\">凝思模式</div>";
  html += "<div class=\"mode-desc\">时间沙漏与物理格言相伴</div></div>";
  if(hasGoal) {
    html += "<div class=\"mode-card\" data-mode=\"summary\">";
    html += "<div class=\"mode-icon\">📋</div><div class=\"mode-name\">梳理模式</div>";
    html += "<div class=\"mode-desc\">知识点分条列项系统回顾</div></div>";
  }
  html += "</div></div>";
  el.innerHTML = html;
  el.style.display = "block";
  var cards = el.querySelectorAll(".mode-card");
  for(var i=0;i<cards.length;i++) {
    (function(card) {
      card.onclick = function() {
        var mode = card.getAttribute("data-mode");
        if(mode === "focus") enterFocusMode(goal);
        else if(mode === "quote") enterQuoteMode();
        else if(mode === "summary") enterSummaryMode(goal);
      };
    })(cards[i]);
  }
}
  STUDY_GOAL = (goal && goal.trim()) ? goal.trim() : "";
  showStudyModeSelector(STUDY_GOAL);
}

// 模式1: 专注模式
function enterFocusMode(goal) {
  STUDY_MODE_TYPE = 1;
  STUDY_GOAL = goal || "";
  hideModeSelector();
  var overlay = document.getElementById("studyOverlay");
  if(overlay) { overlay.style.display = "flex"; overlay.style.pointerEvents = "none"; }
  var nav = document.getElementById("moduleNav");
  if(nav) nav.style.opacity = "0.15";
  var views = document.querySelector(".view-tabs");
  if(views) views.style.opacity = "0.15";
  var footer = document.querySelector("footer");
  if(footer) footer.style.opacity = "0.15";
  var weather = document.getElementById("physicsWeather");
  if(weather) weather.style.opacity = "0";
  var mainContent = document.querySelector(".main-content, .app-container, #app");
  if(mainContent) mainContent.style.opacity = "1";
  document.body.style.backgroundColor = "#C7EDCC";
  document.body.style.transition = "background-color 0.5s";
  document.getElementById("studyArea").style.display = "block";
  document.getElementById("focusArea").style.display = "block";
  document.getElementById("quoteArea").style.display = "none";
  document.getElementById("summaryArea").style.display = "none";
  var goalEl = document.getElementById("studyGoal");
  if(goalEl && STUDY_GOAL) { goalEl.textContent = "🎯 " + STUDY_GOAL; goalEl.style.display = "block"; }
  else if(goalEl) { goalEl.style.display = "none"; }
  updateStudyTimer();
  STUDY_TIMER = setInterval(updateStudyTimer, 60000);
  var weatherEl = document.getElementById("physicsWeather");
  if(weatherEl) weatherEl.style.display = "none";
  var roomBtn = document.getElementById("studyRoomBtn");
  if(roomBtn) roomBtn.style.display = "none";
}

// 模式2: 凝思模式（时间沙漏+物理名言）
function enterQuoteMode() {
  STUDY_MODE_TYPE = 2;
  hideModeSelector();
  document.body.style.backgroundColor = "#1a1a2e";
  document.body.style.transition = "background-color 0.5s";
  var nav = document.getElementById("moduleNav");
  if(nav) nav.style.opacity = "0";
  var views = document.querySelector(".view-tabs");
  if(views) views.style.opacity = "0";
  var weather = document.getElementById("physicsWeather");
  if(weather) weather.style.opacity = "0";
  document.getElementById("focusArea").style.display = "none";
  document.getElementById("summaryArea").style.display = "none";
  document.getElementById("quoteArea").style.display = "flex";
  var roomBtn = document.getElementById("studyRoomBtn");
  if(roomBtn) roomBtn.style.display = "none";
  // 显示名言轮播
  showQuoteModeQuote();
  STUDY_TIMER = setInterval(showQuoteModeQuote, 10000);
}

function showQuoteModeQuote() {
  var el = document.getElementById("quoteText");
  if(!el) return;
  var quotes = [
    "如果我看得更远，那是因为我站在巨人的肩膀上。——牛顿",
    "给我一个支点，我可以撬动整个地球。——阿基米德",
    "宇宙最不可理解的事情，是它居然是可以被理解的。——爱因斯坦",
    "想象力比知识更重要。——爱因斯坦",
    "不要停止提问。——爱因斯坦",
    "物理定律是上帝思想的印记。——开普勒",
    "在科学上，每一条道路都应该走一走。——法拉第",
    "自然界喜欢简单。——牛顿",
    "理解物理，就是理解世界如何运作。",
    "逻辑清晰，自然下笔有神。"
  ];
  var idx = Math.floor(Math.random() * quotes.length);
  el.textContent = "\u201C" + quotes[idx] + "\u201D";
}

// 模式3: 梳理模式（知识点总结）
function enterSummaryMode(goal) {
  STUDY_MODE_TYPE = 3;
  STUDY_GOAL = goal || "";
  hideModeSelector();
  document.body.style.backgroundColor = "#FDF6E3";
  document.body.style.transition = "background-color 0.5s";
  var nav = document.getElementById("moduleNav");
  if(nav) nav.style.opacity = "0";
  var views = document.querySelector(".view-tabs");
  if(views) views.style.opacity = "0";
  var weather = document.getElementById("physicsWeather");
  if(weather) weather.style.opacity = "0";
  document.getElementById("focusArea").style.display = "none";
  document.getElementById("quoteArea").style.display = "none";
  document.getElementById("summaryArea").style.display = "block";
  var roomBtn = document.getElementById("studyRoomBtn");
  if(roomBtn) roomBtn.style.display = "none";
  // 生成知识点总结
  generateSummary(STUDY_GOAL);
}

function generateSummary(goal) {
  var el = document.getElementById("summaryContent");
  if(!el) return;
  var input = goal.toLowerCase();
  var html = "<div class="summary-title">\u{1F4D6} 基于你的目标，为你梳理以下知识点</div>";
  // 从 LOGIC_TREES 中匹配
  var found = false;
  var moduleNames = LOGIC_TREES ? Object.keys(LOGIC_TREES) : [];
  for(var m=0; m<moduleNames.length; m++) {
    var modName = moduleNames[m];
    if(input.indexOf(modName.toLowerCase()) >= 0) {
      found = true;
      var mod = LOGIC_TREES[modName];
      var steps = mod.steps || [];
      html += "<div class="summary-module">";
      html += "<div class="summary-module-title">\u{1F539} " + modName + "</div>";
      html += "<div class="summary-intro">" + (mod.intro || "") + "</div>";
      html += "<div class="summary-steps">";
      for(var s=0; s<steps.length; s++) {
        html += "<div class="summary-step">";
        html += "<div class="summary-step-name">" + steps[s].name + "</div>";
        html += "<div class="summary-step-desc">" + steps[s].desc + "</div>";
        if(steps[s].tip) html += "<div class="summary-step-tip">\u{26A0} " + steps[s].tip + "</div>";
        html += "</div>";
      }
      html += "</div></div>";
    }
  }
  // 检查双路径
  for(var m=0; m<moduleNames.length; m++) {
    var modName = moduleNames[m];
    if(input.indexOf(modName.toLowerCase()) >= 0) {
      var mod = LOGIC_TREES[modName];
      if(mod.dualSteps && mod.dualSteps.length > 0) {
        html += "<div class="summary-module">";
        html += "<div class="summary-module-title">\u{1F538} " + modName + "（能量视角）</div>";
        html += "<div class="summary-steps">";
        for(var s=0; s<mod.dualSteps.length; s++) {
          html += "<div class="summary-step">";
          html += "<div class="summary-step-name">" + mod.dualSteps[s].name + "</div>";
          html += "<div class="summary-step-desc">" + mod.dualSteps[s].desc + "</div>";
          if(mod.dualSteps[s].tip) html += "<div class="summary-step-tip">\u{26A0} " + mod.dualSteps[s].tip + "</div>";
          html += "</div>";
        }
        html += "</div></div>";
      }
    }
  }
  if(!found) {
    html += "<div class="summary-empty">\u{1F4AD} 没有找到完全匹配的知识点，但别担心——" +
             "你的每一次梳理都是在加固物理思维。\u{1F680}</div>";
  }
  html += "<div style="text-align:center;margin-top:24px;">" +
           "<button onclick="exitStudyRoom()" style="padding:10px 30px;background:#e74c3c;color:#fff;border:none;border-radius:8px;font-size:15px;cursor:pointer;">退出自习室</button></div>";
  el.innerHTML = html;
}

function exitStudyRoom() {
  if(!STUDY_MODE) return;
  STUDY_MODE = false;
  var elapsed = Math.floor((Date.now() - STUDY_START) / 60000);
  if(STUDY_TIMER) { clearInterval(STUDY_TIMER); STUDY_TIMER = null; }
  stopNoise();
  var stats = JSON.parse(localStorage.getItem("studyStats") || "{\"totalMin\":0,\"sessions\":0}");
  stats.totalMin += elapsed;
  stats.sessions += 1;
  localStorage.setItem("studyStats", JSON.stringify(stats));
  var overlay = document.getElementById("studyOverlay");
  if(overlay) overlay.style.display = "none";
  document.getElementById("focusArea").style.display = "none";
  document.getElementById("quoteArea").style.display = "none";
  document.getElementById("summaryArea").style.display = "none";
  var nav = document.getElementById("moduleNav");
  if(nav) nav.style.opacity = "1";
  var views = document.querySelector(".view-tabs");
  if(views) views.style.opacity = "1";
  var footer = document.querySelector("footer");
  if(footer) footer.style.opacity = "1";
  document.body.style.backgroundColor = "";
  var goalEl = document.getElementById("studyGoal");
  if(goalEl) goalEl.style.display = "none";
  var weatherEl = document.getElementById("physicsWeather");
  if(weatherEl) { weatherEl.style.display = "block"; weatherEl.style.opacity = "1"; }
  var roomBtn = document.getElementById("studyRoomBtn");
  if(roomBtn) roomBtn.style.display = "flex";
  hideModeSelector();
  var msg = "今天你完成了 " + elapsed + " 分钟的专注梳理。";
  if(STUDY_GOAL) msg += "\n\n今天你攻克了「" + STUDY_GOAL + "」吗？无论进度如何，你已经在路上了。";
  msg += "\n\n你距离清晰又近了一步。";
  alert(msg);
}

function updateStudyTimer() {
  if(!STUDY_START) return;
  var el = document.getElementById("studyTimer");
  if(!el) return;
  var min = Math.floor((Date.now() - STUDY_START) / 60000);
  el.textContent = "\u23F3 已专注 " + min + " 分钟";
}

var AUDIO_ELEMENTS = {};
function playNoise(type) {
  stopNoise();
  var src = "";
  if(type === "gravity") { src = "audio/gravity.mp3"; STUDY_NOISE = "gravity"; }
  else if(type === "star") { src = "audio/star.mp3"; STUDY_NOISE = "star"; }
  else if(type === "silence") { src = "audio/silence.mp3"; STUDY_NOISE = "silence"; }
  if(!src) return;
  var audio = document.getElementById("studyAudio");
  if(audio) {
    audio.src = src; audio.loop = true; audio.volume = 0.3;
    audio.play().catch(function(){});
    var btns = document.querySelectorAll(".noise-btn");
    for(var i=0;i<btns.length;i++) btns[i].classList.remove("noise-active");
    var btn = document.getElementById("noise-" + type);
    if(btn) btn.classList.add("noise-active");
  }
}
function stopNoise() {
  var audio = document.getElementById("studyAudio");
  if(audio) { audio.pause(); audio.src = ""; }
  STUDY_NOISE = null;
  var btns = document.querySelectorAll(".noise-btn");
  for(var i=0;i<btns.length;i++) btns[i].classList.remove("noise-active");
}
function loadStudyStats() {
  var el = document.getElementById("studyStats");
  if(!el) return;
  var stats = JSON.parse(localStorage.getItem("studyStats") || "{\"totalMin\":0,\"sessions\":0}");
  el.textContent = "\u{1F4CA} 你已累计专注 " + stats.totalMin + " 分钟，完成了 " + stats.sessions + " 次物理梳理。";
}

(function() {
  updatePhysicsWeather();
  setInterval(updatePhysicsWeather, 60000);
  setTimeout(loadStudyStats, 500);
})();
var PHYSICS_QUOTES=["\"如果我看得更远，那是因为我站在巨人的肩膀上。\" — 牛顿","\"给我一个支点，我可以撬动整个地球。\" — 阿基米德","\"宇宙最不可理解的事情是它是可以被理解的。\" — 爱因斯坦","\"想象力比知识更重要。\" — 爱因斯坦","\"不要停止提问。\" — 爱因斯坦","\"物理定律是上帝思想的印记。\" — 开普勒","\"在科学上，每一条道路都应该走一走。\" — 法拉第","\"万有引力、电磁力、强力和弱力，宇宙就靠这四种力。\"","\"F=ma，这可能是你人生中最重要的一条方程。\"","\"物理不只是公式，它是描述宇宙的语言。\"","\"理解物理，就是理解世界如何运作。\"","\"力是改变物体运动状态的原因，而不是维持运动的原因。\"","\"每一个物理公式背后，都有一个精彩的故事。\"","\"自然界喜欢简单。\" — 牛顿","\"宇宙中最不可理解的事情，是它居然是可以被理解的。\" — 爱因斯坦"];
var PHYSICS_QUOTES_INDEX=0;
function showNextQuote(){var qt=document.getElementById('quoteText');if(!qt)return;qt.textContent=PHYSICS_QUOTES[PHYSICS_QUOTES_INDEX];PHYSICS_QUOTES_INDEX=(PHYSICS_QUOTES_INDEX+1)%PHYSICS_QUOTES.length;}setTimeout(function(){showNextQuote();setInterval(showNextQuote,8000);},500);


























