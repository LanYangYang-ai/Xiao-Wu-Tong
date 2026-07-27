// 物理名言数组（自动轮播）
var PHYSICS_QUOTES = [
    '"如果我看得更远，那是因为我站在巨人的肩膀上。" — 牛顿',
    '"给我一个支点，我可以撬动整个地球。" — 阿基米德',
    '"自然界和自然规律隐藏在黑暗中，上帝说，让牛顿去吧！于是一切都亮了。" — 蒲柏',
    '"宇宙最不可理解的事情是它是可以被理解的。" — 爱因斯坦',
    '"想象力比知识更重要，因为知识是有限的。" — 爱因斯坦',
    '"不要停止提问。" — 爱因斯坦',
    '"物理定律是上帝思想的印记。" — 开普勒',
    '"在科学上，每一条道路都应该走一走。" — 法拉第',
    '"万有引力、电磁力、强力和弱力，宇宙就靠这四种力。"',
    '"F=ma，这可能是你人生中最重要的一条方程。"',
    '"物理不只是公式，它是描述宇宙的语言。"',
    '"理解物理，就是理解世界如何运作。"',
    '"物理不会让你变聪明，但会让你更难被欺骗。"',
    '"力是改变物体运动状态的原因，而不是维持运动的原因。"',
    '"每一个物理公式背后，都有一个精彩的故事。"',
];

// DOM 引用
var q = document.getElementById("questionInput");
var sb = document.getElementById("submitBtn");
var le = document.getElementById("loadingIndicator");
var ee = document.getElementById("errorMsg");
var ra = document.getElementById("resultArea");
var dc = document.getElementById("diagnosisCard");
var vs = document.getElementById("videoSection");
var vg = document.getElementById("videoGrid");
var qt = document.getElementById("quoteText");

// 鼓励语
var EM = {
    "概念混淆": "基础概念是物理的根基，慢慢梳理清楚就好！",
    "模型恐惧": "物理模型有套路可循，掌握一个模型就能秒杀一类题！",
    "计算粗心": "计算出错不是能力问题，慢下来检查，一定可以避免！",
    "审题障碍": "审题是解题的第一步，学会圈关键词，你就能掌控全局！",
    "心态崩盘": "别担心，每个人都会遇到瓶颈，突破过去就是新的高度！",
};

// 诊断卡片 CSS 类名
var TC = {
    "概念混淆": "card-concept",
    "模型恐惧": "card-model",
    "计算粗心": "card-calculation",
    "审题障碍": "card-exam",
    "心态崩盘": "card-mindset",
};

// ==================== 物理名言轮播 ====================
var quoteIndex = 0;
function showNextQuote() {
    if (!qt) return;
    qt.textContent = PHYSICS_QUOTES[quoteIndex];
    quoteIndex = (quoteIndex + 1) % PHYSICS_QUOTES.length;
}
// 页面加载后立即显示第一条，之后每 8 秒切换
if (qt) {
    showNextQuote();
    setInterval(showNextQuote, 8000);
}

// ==================== 提交诊断 ====================
async function handleSubmit() {
    var question = q.value.trim();
    if (!question) {
        showError("请描述你的物理困惑");
        return;
    }
    hideError();
    hideResult();
    hideVideo();
    sb.disabled = true;
    showLoading();
    try {
        var r = await fetch("/api/diagnose", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ question: question })
        });
        var d = await r.json();
        if (!r.ok || !d.success) {
            throw new Error(d.error || "诊断失败，请确保服务器已启动");
        }
        renderDiag(d.data);
        fetchVideos(d.data.type, d.data.keywords || []);
    } catch (e) {
        showError("诊断失败：" + e.message + "。如果服务器未运行，请双击 start_hidden.vbs 启动。");
    } finally {
        hideLoading();
        sb.disabled = false;
    }
}

// ==================== 渲染诊断卡片 ====================
function renderDiag(d) {
    var c = TC[d.type] || "card-concept";
    var en = EM[d.type] || "加油！";
    var emoji = "\uD83D\uDCA1"; // 💡
    dc.innerHTML = '<div class="diagnosis-card ' + c + '">' +
        '<div class="label">诊 断 结 果</div>' +
        '<div class="type">' + esc(d.type) + '</div>' +
        '<div class="subtype">' + esc(d.label || "") + '</div>' +
        '<div class="encourage">' + emoji + ' ' + esc(en) + '</div>' +
        '</div>';
    ra.style.display = "block";
}

// ==================== 搜索并显示视频 ====================
async function fetchVideos(type, kws) {
    var qs = [];
    if (kws && kws.length) {
        qs.push(kws.slice(0, 3).join(" ") + " 牛顿第二定律");
    }
    var tks = {
        "概念混淆": "牛顿第二定律 概念",
        "模型恐惧": "牛顿第二定律 模型",
        "计算粗心": "牛顿第二定律 易错",
        "审题障碍": "牛顿第二定律 审题",
        "心态崩盘": "牛顿第二定律 秒杀"
    };
    qs.push(tks[type] || "牛顿第二定律");
    var all = [];
    var seen = {};
    try {
        var promises = qs.map(function(kw) {
            return fetch("/api/videos?keyword=" + encodeURIComponent(kw))
                .then(function(r) { return r.json(); })
                .then(function(data) {
                    if (data.success && data.data) {
                        data.data.forEach(function(v) {
                            if (!seen[v.id]) {
                                seen[v.id] = true;
                                all.push(v);
                            }
                        });
                    }
                })
                .catch(function() {});
        });
        await Promise.all(promises);
    } catch (e) {}
    if (all.length === 0) {
        vs.style.display = "none";
        return;
    }
    all.sort(function(a, b) { return b.view - a.view; });
    renderV(all);
}

// ==================== 渲染视频卡片 ====================
function renderV(videos) {
    var html = "";
    videos.forEach(function(v) {
        html += '<div class="video-card" data-url="' + esc(v.url) + '" data-title="' + esc(v.title) + '">' +
            '<div class="cover-wrap">' +
            '<img src="' + esc(v.cover) + '" alt="' + esc(v.title) + '" loading="lazy">' +
            '</div>' +
            '<div class="info">' +
            '<div class="title">' + esc(v.title) + '</div>' +
            '<div class="meta">' +
            '<span class="author">👤 ' + esc(v.author) + '</span>' +
            '<span>' + fmt(v.view) + '</span>' +
            '</div>' +
            '<div style="margin-top:8px">' +
            '<span class="source-tag">来源：B站</span>' +
            '</div>' +
            '</div>' +
            '</div>';
    });
    vg.innerHTML = html;
    vs.style.display = "block";
    // 点击视频卡片事件
    vg.onclick = function(e) {
        var card = e.target.closest(".video-card");
        if (card) {
            var url = card.getAttribute("data-url");
            var title = card.getAttribute("data-title") || "";
            if (url && confirm("即将跳转至 B站 观看《" + title.substring(0, 30) + "》\n内容版权归原作者所有。本站仅提供导航，不存储任何视频。\n确认跳转？")) {
                window.open(url, "_blank");
            }
        }
    };
}

// ==================== 工具函数 ====================
function fmt(n) {
    if (!n) return "0";
    if (n >= 100000000) return (n / 100000000).toFixed(1) + "亿";
    if (n >= 10000) return (n / 10000).toFixed(1) + "万";
    return n + "";
}

function esc(t) {
    var d = document.createElement("div");
    d.appendChild(document.createTextNode(t));
    return d.innerHTML;
}

function showLoading() { le.classList.add("active"); }
function hideLoading() { le.classList.remove("active"); }
function showError(m) { ee.textContent = m; ee.classList.add("active"); }
function hideError() { ee.classList.remove("active"); ee.textContent = ""; }
function hideResult() { ra.style.display = "none"; }
function hideVideo() { vs.style.display = "none"; }

// GitHub Pages fallback
(function(){var a=false;fetch("/api/videos?keyword=test").then(function(r){if(r.ok||r.status<500)a=true}).catch(function(){a=false});window.__apiOk=a;})();var _os=searchKnowledgeNode;searchKnowledgeNode=function(nm,kw){if(window.__apiOk!==false)_os(nm,kw);else{var h=document.getElementById("videoHint");if(h)h.textContent="正在B站搜索:"+nm;var u="https://search.bilibili.com/all?keyword="+encodeURIComponent(kw+" 高中物理");if(confirm("即将跳转B站搜索，确认？"))window.open(u,"_blank");}};window.addEventListener("load",function(){setTimeout(function(){window.__apiOk=false;},3000);});