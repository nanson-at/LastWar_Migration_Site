const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxpEDk7a_ZX0TnRjAfyQVIPdclPOOUkB4oNMJeZSKfVCyn5-Suabio7EB9-JdMi3B_C/exec";
const API_ENDPOINT = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    ? GOOGLE_SCRIPT_URL
    : '/submit';

const i18n = {
    en: {
        title: "SS6-MIGRATION APPLICATION",
        subtitle: "Join the elite forces of RUN x HUG in Server 561. Apply now to migrate.",
        nickname: "Game Nickname *",
        server: "Current Server *",
        alliance: "Current Alliance *",
        heroPower: "Total Hero Power (M) *",
        migrationColor: "Migration Color *",
        migrationPoints: "Migration Points *",
        hqLevel: "HQ Level *",
        remarks: "Remarks / Notes",
        submit: "SUBMIT APPLICATION",
        placeholder_nickname: "Your in-game name",
        placeholder_alliance: "Alliance tag/name",
        placeholder_remarks: "Any additional information...",
        success: "Application submitted successfully! Our recruiters will contact you soon.",
        error: "An error occurred. Please try again later.",
        submitting: "SUBMITTING...",
        totalApps: "TOTAL APPLICATIONS"
    },
    ja: {
        title: "SS6-移民申請フォーム",
        subtitle: "サーバー561 RUN x HUG連盟のエリート部隊に参加しましょう。今すぐ申請を。",
        nickname: "ゲーム内名前 *",
        server: "現在のサーバー *",
        alliance: "現在の同盟 *",
        heroPower: "英雄総戦力 (M) *",
        migrationColor: "移民の色 *",
        migrationPoints: "移民スコア *",
        hqLevel: "基地レベル *",
        remarks: "備考",
        submit: "申請を送信する",
        placeholder_nickname: "ゲーム内の名前を入力",
        placeholder_alliance: "同盟タグ/名前",
        placeholder_remarks: "その他の情報...",
        success: "申請が完了しました！担当者からの連絡をお待ちください。",
        error: "エラーが発生しました。後でもう一度試してください。",
        submitting: "送信中...",
        totalApps: "現在の申請総数"
    },
    zh: {
        title: "SS6-移民申請表",
        subtitle: "加入 561 伺服器 RUN x HUG 聯盟的精英部隊。立即提交移民申請。",
        nickname: "遊戲名字 *",
        server: "現所屬伺服器 *",
        alliance: "現所屬同盟 *",
        heroPower: "英雄總戰力 (M) *",
        migrationColor: "移民顏色 *",
        migrationPoints: "移民分數 *",
        hqLevel: "總部等級 *",
        remarks: "備註",
        submit: "提交申請",
        placeholder_nickname: "輸入您的遊戲名稱",
        placeholder_alliance: "同盟簡稱/名稱",
        placeholder_remarks: "其他備註事項...",
        success: "申請已成功提交！招募官將盡快與您聯繫。",
        error: "發生錯誤。請稍後再試。",
        submitting: "提交中...",
        totalApps: "目前申請總數"
    },
    ko: {
        title: "SS6-이민 신청서",
        subtitle: "561 서버 RUN x HUG 연맹의 정예 부대에 합류하세요. 지금 신청하십시오.",
        nickname: "게임 닉네임 *",
        server: "현 소속 서버 *",
        alliance: "현 소속 연맹 *",
        heroPower: "영웅 총 전투력 (M) *",
        migrationColor: "이민 색상 *",
        migrationPoints: "이민 점수 *",
        hqLevel: "본부 레벨 *",
        remarks: "비고",
        submit: "신청서 제출",
        placeholder_nickname: "게임 내 닉네임 입력",
        placeholder_alliance: "연맹 태그/이름",
        placeholder_remarks: "추가 정보...",
        success: "신청서가 성공적으로 제출되었습니다! 담당자가 곧 연락드리겠습니다.",
        error: "오류가 발생했습니다. 나중에 다시 시도하세요.",
        submitting: "제출 중...",
        totalApps: "현재 총 신청 수"
    },
    th: {
        title: "SS6-แบบ폼ย้ายเซิร์ฟเวอร์",
        subtitle: "เข้าร่วมกองกำลังชั้นยอดของ RUN x HUG ในเซิร์ฟเวอร์ 561 สมัครเพื่อย้ายตอนนี้เลย",
        nickname: "ชื่อในเกม *",
        server: "เซิร์ฟเวอร์ปัจจุบัน *",
        alliance: "พันธมิตรปัจจุบัน *",
        heroPower: "พลังฮีโร่รวม (M) *",
        migrationColor: "สีการย้าย *",
        migrationPoints: "คะแนนการย้าย *",
        hqLevel: "เลเวลกองบัญชาการ *",
        remarks: "หมายเหตุ",
        submit: "ส่งใบสมัคร",
        placeholder_nickname: "ระบุชื่อในเกมของคุณ",
        placeholder_alliance: "แท็ก/ชื่อพันธมิตร",
        placeholder_remarks: "ข้อมูลเพิ่มเติม...",
        success: "ส่งใบสมัครเรียบร้อยแล้ว! ฝ่ายรับสมัครจะติดต่อคุณกลับโดยเร็ว",
        error: "เกิดข้อผิดพลาด โปรดลองอีกครั้งภายหลัง",
        submitting: "กำลังส่ง...",
        totalApps: "จำนวนผู้สมัครทั้งหมด"
    }
};

let currentLang = localStorage.getItem('lastWar_lang') || 'ja';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lastWar_lang', lang);
    document.documentElement.lang = lang;
    document.body.setAttribute('lang', lang);

    const t = i18n[lang];

    // Update elements
    document.getElementById('title').textContent = t.title;
    document.getElementById('title').setAttribute('data-text', t.title);
    document.getElementById('subtitle').textContent = t.subtitle;
    document.getElementById('lbl-nickname').textContent = t.nickname;
    document.getElementById('lbl-server').textContent = t.server;
    document.getElementById('lbl-alliance').textContent = t.alliance;
    document.getElementById('lbl-heroPower').textContent = t.heroPower;
    document.getElementById('lbl-migrationColor').textContent = t.migrationColor;
    document.getElementById('lbl-migrationPoints').textContent = t.migrationPoints;
    document.getElementById('lbl-hqLevel').textContent = t.hqLevel;
    document.getElementById('lbl-remarks').textContent = t.remarks;
    document.getElementById('btn-submit').textContent = t.submit;
    document.getElementById('lbl-total-apps').textContent = t.totalApps;

    // Placeholders
    document.getElementById('nickname').placeholder = t.placeholder_nickname;
    document.getElementById('currentAlliance').placeholder = t.placeholder_alliance;
    document.getElementById('remarks').placeholder = t.placeholder_remarks;

    // Active button state
    document.querySelectorAll('.lang-switcher button').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
    fetchStats();

    // Lang buttons event
    document.querySelectorAll('.lang-switcher button').forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.getAttribute('data-lang'));
        });
    });

    // Color Selector interaction
    const colorOpts = document.querySelectorAll('.color-opt');
    const colorInput = document.getElementById('migrationColor');

    colorOpts.forEach(opt => {
        // Set initial active
        if (opt.getAttribute('data-color') === colorInput.value) {
            opt.classList.add('active');
        }

        opt.addEventListener('click', () => {
            colorOpts.forEach(o => o.classList.remove('active'));
            opt.classList.add('active');
            colorInput.value = opt.getAttribute('data-color');
        });
    });

    const limits = {
        Gold: 1,
        Purple: 5,
        Blue: 50,
        White: 80
    };

    async function fetchStats() {
        try {
            // Using the dynamic endpoint (handles Local and CF)
            const response = await fetch(API_ENDPOINT);
            if (!response.ok) throw new Error('Failed to fetch stats');

            const stats = await response.json();

            // Update UI
            document.getElementById('val-total-apps').textContent = stats.total || 0;

            updateStat('gold', stats.Gold || 0, limits.Gold);
            updateStat('purple', stats.Purple || 0, limits.Purple);
            updateStat('blue', stats.Blue || 0, limits.Blue);
            updateStat('white', stats.White || 0, limits.White);

        } catch (err) {
            console.error("Dashboard error:", err);
            // Don't disturb the user with dashboard fetch errors
        }
    }

    function updateStat(id, value, limit) {
        const valueEl = document.getElementById(`val-${id}`);
        const container = document.getElementById(`stat-${id}`);

        valueEl.textContent = value;

        if (value >= limit) {
            container.classList.add('limit-exceeded');
        } else {
            container.classList.remove('limit-exceeded');
        }
    }

    // Form Submission
    const form = document.getElementById('migrationForm');
    const statusMsg = document.getElementById('statusMessage');
    const submitBtn = document.getElementById('btn-submit');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        submitBtn.disabled = true;
        submitBtn.textContent = i18n[currentLang].submitting;
        statusMsg.classList.add('hidden');

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        data.timestamp = new Date().toISOString();
        data.language = currentLang;

        try {
            // Call our Cloudflare Pages Function proxy or direct Google Script
            const response = await fetch(API_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain;charset=utf-8' // Using text/plain to avoid CORS preflight locally
                },
                body: JSON.stringify(data)
            });

            const contentType = response.headers.get("content-type");

            // If not JSON, it might be a 404 or a server error (HTML)
            if (!contentType || !contentType.includes("application/json")) {
                const rawText = await response.text();
                console.error("Server returned non-JSON content:", rawText);
                throw new Error(`Invalid response format. Status: ${response.status}`);
            }

            const result = await response.json();

            if (result.status === 'success') {
                showStatus(i18n[currentLang].success, 'success');
                form.reset();
                // Reset color selector to default
                colorOpts[0].click();
                // Refresh dashboard
                fetchStats();
            } else {
                throw new Error(result.message || 'Submission failed');
            }
        } catch (err) {
            console.error("Submission error details:", err);
            // Show more helpful error in UI
            showStatus(i18n[currentLang].error + " (Debug: " + err.message + ")", 'error');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = i18n[currentLang].submit;
        }
    });

    function showStatus(msg, type) {
        statusMsg.textContent = msg;
        statusMsg.className = type;
        statusMsg.classList.remove('hidden');
    }
});
