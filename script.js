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
        submitting: "SUBMITTING..."
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
        submitting: "送信中..."
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
        submitting: "提交中..."
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
        submitting: "제출 중..."
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
        submitting: "กำลังส่ง..."
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

        /*
           IMPORTANT: The user needs to deploy a Google Apps Script as a web app
           and put the executable URL here.
        */
        const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxpEDk7a_ZX0TnRjAfyQVIPdclPOOUkB4oNMJeZSKfVCyn5-Suabio7EB9-JdMi3B_C/exec";

        if (GOOGLE_SCRIPT_URL === "https://script.google.com/macros/s/AKfycbxpEDk7a_ZX0TnRjAfyQVIPdclPOOUkB4oNMJeZSKfVCyn5-Suabio7EB9-JdMi3B_C/exec") {
            // Demo mode - simulate success if URL is not set
            setTimeout(() => {
                showStatus(i18n[currentLang].success, 'success');
                submitBtn.disabled = false;
                submitBtn.textContent = i18n[currentLang].submit;
                form.reset();
                console.log("Mock submission success:", data);
            }, 1500);
            return;
        }

        try {
            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors', // standard for GAS web apps cross-origin
                cache: 'no-cache',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            // Since no-cors doesn't return response body, we assume success if no error thrown
            showStatus(i18n[currentLang].success, 'success');
            form.reset();
        } catch (err) {
            console.error(err);
            showStatus(i18n[currentLang].error, 'error');
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
