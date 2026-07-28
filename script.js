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
        searchVideosForSelected();
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
function searchVideosForSelected() {
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

    dom.videoHint.textContent = "正在搜索相关讲解视频...";
    dom.videoGrid.innerHTML = "";
    dom.videoArea.style.display = "block";

    var allVideos = [];
    var seen = {};
    var completed = 0;

    for (var ki = 0; ki < keywords.length; ki++) {
        (function(kw) {
            tryBiliSearch(kw, function(d) {
                if (d && d.code === 0 && d.data && d.data.result && d.data.result.length > 0) {
                    var bw = ["搞笑","鬼畜","游戏","娱乐","网红","吃鸡","王者","抖音","快手","电影","动漫","我的世界","Minecraft","模组","原神","英雄联盟","第五人格"];
                    var vs = d.data.result.filter(function(it) {
                        var t = (it.title || "").replace(/<[^>]+>/g, "");
                        for (var i = 0; i < bw.length; i++) { if (t.indexOf(bw[i]) >= 0) return false; }
                        return true;
                    }).sort(function(a, b) { return (b.play || 0) - (a.play || 0); }).slice(0, 20).map(function(it) {
                        return { id: it.bvid || "", title: (it.title || "").replace(/<[^>]+>/g, ""), cover: it.pic || "", author: it.author || "未知", url: "https://www.bilibili.com/video/" + (it.bvid || ""), view: it.play || 0, duration: it.duration || "00:00" };
                    });
                    renderVideos(vs);
                } else {
                    var _g = document.getElementById("videoGrid");
                    if (_g && _g.children.length === 0) {
                        var _h = document.getElementById("videoHint");
                        if (_h) _h.textContent = "搜索失败，试试手动搜索";
                        var _a = document.createElement("a");
                        _a.href = "https://search.bilibili.com/all?keyword=" + encodeURIComponent(kw + " 高中物理");
                        _a.target = "_blank"; _a.textContent = "在B站中搜索";
                        _a.style.cssText = "display:block;text-align:center;padding:12px;color:#3182ce;font-size:15px;margin-top:16px;text-decoration:none";
                        if (_g) { _g.innerHTML = ""; _g.appendChild(_a); }
                    }
                }
            });
        })(keywords[ki]);

    }
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
    var url = "https://search.bilibili.com/all?keyword=" + encodeURIComponent(biliKeywords + " 高中物理");
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

var PHYSICS_QUOTES=["\"如果我看得更远，那是因为我站在巨人的肩膀上。\" — 牛顿","\"给我一个支点，我可以撬动整个地球。\" — 阿基米德","\"宇宙最不可理解的事情是它是可以被理解的。\" — 爱因斯坦","\"想象力比知识更重要。\" — 爱因斯坦","\"不要停止提问。\" — 爱因斯坦","\"物理定律是上帝思想的印记。\" — 开普勒","\"在科学上，每一条道路都应该走一走。\" — 法拉第","\"万有引力、电磁力、强力和弱力，宇宙就靠这四种力。\"","\"F=ma，这可能是你人生中最重要的一条方程。\"","\"物理不只是公式，它是描述宇宙的语言。\"","\"理解物理，就是理解世界如何运作。\"","\"力是改变物体运动状态的原因，而不是维持运动的原因。\"","\"每一个物理公式背后，都有一个精彩的故事。\"","\"自然界喜欢简单。\" — 牛顿","\"宇宙中最不可理解的事情，是它居然是可以被理解的。\" — 爱因斯坦"];
var PHYSICS_QUOTES_INDEX=0;
function showNextQuote(){var qt=document.getElementById('quoteText');if(!qt)return;qt.textContent=PHYSICS_QUOTES[PHYSICS_QUOTES_INDEX];PHYSICS_QUOTES_INDEX=(PHYSICS_QUOTES_INDEX+1)%PHYSICS_QUOTES.length;}setTimeout(function(){showNextQuote();setInterval(showNextQuote,8000);},500);


















