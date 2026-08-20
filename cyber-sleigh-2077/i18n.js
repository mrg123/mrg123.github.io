// Localization
const translations = {
    zh: {
        title: "赛博雪橇 2077",
        start_btn: "启动运行 [ENTER]",
        game_over: "系统故障",
        score_label: "得分: ",
        restart_btn: "重启系统 [ENTER]",
        win_title: "任务完成",
        win_msg: "祝您圣诞快乐! Merry Christmas!",
        final_score_label: "最终得分: ",
        play_again_btn: "再次挑战 [ENTER]",
        hud_score: "得分: ",
        hud_speed: "速度: ",
        upgrade_notif: "弹跳能力升级! 高度 X2",
        diff_easy: "简单 (二段跳)",
        diff_hard: "困难 (经典)",
        hyper_jump_notif: "超级跳跃激活! 10秒无限跳!"
    },
    en: {
        title: "Cyber Sleigh 2077",
        start_btn: "INITIATE RUN [ENTER]",
        game_over: "SYSTEM FAILURE",
        score_label: "SCORE: ",
        restart_btn: "REBOOT SYSTEM [ENTER]",
        win_title: "MISSION COMPLETE",
        win_msg: "Merry Christmas! Mission Accomplished!",
        final_score_label: "FINAL SCORE: ",
        play_again_btn: "RETRY MISSION [ENTER]",
        hud_score: "SCORE: ",
        hud_speed: "SPEED: ",
        upgrade_notif: "JUMP UPGRADED! HEIGHT X2",
        diff_easy: "EASY (DOUBLE JUMP)",
        diff_hard: "HARD (CLASSIC)",
        hyper_jump_notif: "HYPER JUMP ACTIVE! 10s INFINITE JUMPS!"
    }
};

// Auto-detect language
let userLang = navigator.language || navigator.userLanguage; 
let currentLang = userLang.toLowerCase().includes('zh') ? 'zh' : 'en';

function updateTexts() {
    const t = translations[currentLang];
    if (!t) {
        console.error('Translation not found for lang:', currentLang);
        return;
    }

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        
        // Safety check
        if (t[key] === undefined) {
            console.warn(`Missing translation for key: "${key}" in language: "${currentLang}"`);
            return; // Keep default HTML text
        }

        const target = el.getAttribute('data-i18n-target') || 'text';
        const targets = target.split(',');
        
        targets.forEach(tgt => {
            if (tgt === 'text') {
                el.innerText = t[key];
            } else if (tgt.startsWith('attr:')) {
                const attr = tgt.split(':')[1];
                el.setAttribute(attr, t[key]);
            }
        });
    });
}

function toggleLanguage() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    updateTexts();
}

// Initialize texts
console.log('Initializing i18n with lang:', currentLang);
updateTexts();
