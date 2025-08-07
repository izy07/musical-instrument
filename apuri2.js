// DOMContentLoadedイベントリスナー: HTMLの読み込みが完了したらスクリプトを実行します。
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoadedイベントが発火しました。スクリプトが開始されます。'); // デバッグ用ログ

    // --- 画面要素の取得 ---
    const loginScreen = document.getElementById('loginScreen');
    const instrumentSelectionScreen = document.getElementById('instrumentSelectionScreen');
    const calendarDisplayScreen = document.getElementById('calendarDisplayScreen');
    const graphScreen = document.getElementById('graphScreen');
    const timerScreen = document.getElementById('timerScreen'); // タイマー/ストップウォッチ画面
    const goalSettingScreen = document.getElementById('goalSettingScreen'); // 目標設定画面
    const basicPracticeScreen = document.getElementById('basicPracticeScreen'); // 新しい「基礎練」画面を追加
    const mainMenuBar = document.getElementById('mainMenuBar');
    const overlay = document.getElementById('overlay');
    const selectedInstrumentDisplay = document.getElementById('selectedInstrumentDisplay'); // 選択楽器表示要素
    const settingsScreen = document.getElementById('settingsScreen'); // 設定画面
    const tunerScreen = document.getElementById('tunerScreen'); // チューナー画面

    // カレンダー関連の要素
    const calendarGrid = document.getElementById('calendarGrid');
    const currentMonthYear = document.getElementById('currentMonthYear');
    const prevMonthBtn = document.getElementById('prevMonth');
    const nextMonthBtn = document.getElementById('nextMonth');
    const totalPracticeTimeSpan = document.getElementById('totalPracticeTime');
    const overallTotalPracticeTimeSpan = document.getElementById('overallTotalPracticeTime');

    // 楽器選択関連の要素
    const instrumentButtons = document.querySelectorAll('.instrument-button');
    const selectionMessage = document.getElementById('selectionMessage');
    const otherInstrumentModal = document.getElementById('otherInstrumentModal');
    const closeOtherInstrumentModalBtn = document.getElementById('closeOtherInstrumentModalBtn');
    const otherInstrumentInput = document.getElementById('otherInstrumentInput');
    const confirmOtherInstrumentBtn = document.getElementById('confirmOtherInstrumentBtn');

    // 練習記録モーダル関連の要素
    const practiceModal = document.getElementById('practiceModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modalDateDisplay = document.getElementById('modalDate');
    const practiceTimeInput = document.getElementById('practiceTime');
    const practiceTimeSlider = document.getElementById('practiceTimeSlider');
    const practiceNotesTextarea = document.getElementById('practiceNotes');
    const savePracticeBtn = document.getElementById('savePractice');
    const deletePracticeBtn = document.getElementById('deletePractice');
    // const presetButtons = document.querySelectorAll('.preset-button'); // 削除されたため、この行をコメントアウトまたは削除

    // カスタムメッセージボックス要素
    const messageBoxModal = document.getElementById('messageBoxModal');
    const messageBoxText = document.getElementById('messageBoxText');
    const messageBoxOkBtn = document.getElementById('messageBoxOkBtn');
    const closeMessageBoxBtn = document.getElementById('closeMessageBoxBtn');

    // タイマー/ストップウォッチ関連の要素
    const timerModeBtn = document.getElementById('timerModeBtn');
    const stopwatchModeBtn = document.getElementById('stopwatchModeBtn');
    const timerContent = document.getElementById('timerContent');
    const stopwatchContent = document.getElementById('stopwatchContent');

    // タイマーモードの要素
    const timerDisplay = document.getElementById('timerDisplay');
    const timerPresetButtons = document.querySelectorAll('.timer-preset-buttons .timer-button');
    const timerAdjustmentButtons = document.querySelectorAll('.timer-adjustment-buttons .timer-button');
    const startTimerBtn = document.getElementById('startTimerBtn');
    const pauseTimerBtn = document.getElementById('pauseTimerBtn');
    const resetTimerBtn = document.getElementById('resetTimerBtn');
    const clearTimerBtn = document.getElementById('clearTimerBtn');

    // ストップウォッチモードの要素
    const stopwatchDisplay = document.getElementById('stopwatchDisplay');
    const startStopwatchBtn = document.getElementById('startStopwatchBtn');
    const pauseStopwatchBtn = document.getElementById('pauseStopwatchBtn');
    const resetStopwatchBtn = document.getElementById('resetStopwatchBtn');

    // ログイン画面の要素（認証ロジックは削除）
    const loginForm = document.querySelector('.login-form'); // フォーム自体を取得
    const emailInput = document.getElementById('emailInput'); // メールアドレス入力フィールド（参照のみ）
    const passwordInput = document.getElementById('passwordInput'); // パスワード入力フィールド（参照のみ）

    // 目標設定画面の要素
    const yearlyGoalInput = document.getElementById('yearlyGoalInput');
    const personalGoalInput = document.getElementById('personalGoalInput');
    const saveGoalsBtn = document.getElementById('saveGoalsBtn');

    // グラフ表示切り替えボタン
    const graphDailyBtn = document.getElementById('graphDailyBtn'); // ★★★ 追加: 日ごとのボタン
    const graphMonthlyBtn = document.getElementById('graphMonthlyBtn');
    const graphYearlyBtn = document.getElementById('graphYearlyBtn');

    // 設定画面内の要素
    const currentInstrumentInSettings = document.getElementById('currentInstrumentInSettings');
    const changeInstrumentBtn = document.getElementById('changeInstrumentBtn');
    const logoutBtnInSettings = document.getElementById('logoutBtnInSettings');
    const viewGraphBtn = document.getElementById('viewGraphBtn');

    // イベント目標関連の要素を新しいモーダルから取得する
    const openEventSettingsModalBtn = document.getElementById('openEventSettingsModalBtn');
    const eventSettingsModal = document.getElementById('eventSettingsModal');
    const closeEventSettingsModalBtn = document.getElementById('closeEventSettingsModalBtn');
    const eventsList = document.getElementById('eventsList');
    const eventNameInput = document.getElementById('eventNameInput');
    const eventDateInput = document.getElementById('eventDateInput');
    const addEventBtn = document.getElementById('addEventBtn');

    // ★★★ 修正箇所: 憧れの演奏機能の要素を取得 ★★★
    const dreamPerformanceUrlInput = document.getElementById('dreamPerformanceUrlInput');
    const saveDreamPerformanceBtn = document.getElementById('saveDreamPerformanceBtn');
    const playDreamPerformanceBtn = document.getElementById('playDreamPerformanceBtn');
    const dreamPerformanceInputSection = document.getElementById('dreamPerformanceInputSection');
    const dreamPerformancePlaySection = document.getElementById('dreamPerformancePlaySection');
    const changeDreamPerformanceBtn = document.getElementById('changeInstrumentBtn'); // この行はHTMLのIDと一致するように修正が必要
    const dreamPerformanceModal = document.getElementById('dreamPerformanceModal');
    const closeDreamPerformanceModalBtn = document.getElementById('closeDreamPerformanceModalBtn');
    const dreamPerformanceVideoContainer = document.getElementById('dreamPerformanceVideoContainer');

    // ミニ記録ボタン関連の要素
    const miniRecordContainer = document.getElementById('miniRecordContainer');
    const miniRecordMainButton = document.getElementById('miniRecordMainButton');
    const miniRecordMenu = document.getElementById('miniRecordMenu');
    const miniRecordOptions = document.querySelectorAll('.mini-record-option');

    // ★★★ 基礎練の要素取得部分を修正: levelButtonsをグローバルスコープで宣言 ★★★
    const levelButtons = document.querySelectorAll('.level-button');

    // チューナー画面の要素
    const startButton = document.getElementById('start-button');
    const noteNameEl = document.getElementById('note-name');
    const frequencyEl = document.getElementById('frequency');
    const meterEl = document.getElementById('meter');
    const tunerMessage = document.getElementById('tuner-message');

    // --- グローバル変数と初期設定 ---
    let currentDate = new Date();
    let selectedDateString = '';
    let practiceRecords = JSON.parse(localStorage.getItem('practiceRecords')) || {};
    let selectedInstrument = localStorage.getItem('selectedInstrument') || '';
    let timerIntervalId;
    let timerRemainingTime = 0;
    let stopwatchElapsedTime = 0;
    let timerLastUpdateTime = 0;
    let currentTimerMode = 'timer';
    let currentGraphViewMode = 'monthly'; 
    let goals = JSON.parse(localStorage.getItem('goals')) || { yearly: '', personal: '' };
    let eventGoals = JSON.parse(localStorage.getItem('eventGoals')) || [];
    let dreamPerformanceUrl = localStorage.getItem('dreamPerformanceUrl') || '';
    let audioContext;
    let analyser;
    let mediaStreamSource;
    const noteStrings = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    const A4 = 440;

    // --- 基礎練メニューのデータ（オブジェクトで定義） ---
    const basicPracticeMenus = {
        'ピアノ': {
            '初級': [
                { title: 'ハノン (指の独立)', description: 'すべての指を均等に動かすための定番練習です。', link: 'https://www.youtube.com/embed/youtube-video-id', pdf: 'https://cdn.example.com/hanon.pdf' },
                { title: 'スケール練習', description: '主要な長調と短調のスケールを練習します。', link: 'https://www.youtube.com/embed/youtube-video-id', pdf: 'https://cdn.example.com/scales.pdf' }
            ],
            '中級': [
                { title: 'ツェルニー30番', description: '技術力を高めるための練習曲集です。', link: 'https://www.youtube.com/embed/youtube-video-id', pdf: 'https://cdn.example.com/czerny30.pdf' },
                { title: 'アルペジオ練習', description: '和音を分散して弾く練習です。', link: 'https://www.youtube.com/embed/youtube-video-id' }
            ],
            '上級': [
                { title: 'ツェルニー40番・50番', description: 'より高度なテクニックを習得するための練習曲集です。', link: 'https://www.youtube.com/embed/youtube-video-id', pdf: 'https://cdn.example.com/czerny40.pdf' },
                { title: 'ショパンのエチュード', description: '表現力と技術を同時に磨くための練習曲です。', link: 'https://www.youtube.com/embed/youtube-video-id' }
            ]
        },
        'ギター': {
            '初級': [
                { title: 'クロマチックスケール', description: '指板上のすべてのフレットを均等に使うための練習です。', link: 'https://www.youtube.com/embed/youtube-video-id', pdf: 'https://cdn.example.com/chromatic.pdf' },
                { title: 'コードチェンジ', description: 'C、G、Am、Fなどの基本コードをスムーズに切り替える練習です。', link: 'https://www.youtube.com/embed/youtube-video-id', pdf: 'https://cdn.example.com/chord_change.pdf' }
            ],
            '中級': [
                { title: 'バレーコード練習', description: 'Fコードなどのセーハを安定させるための練習です。', link: 'https://www.youtube.com/embed/youtube-video-id' },
                { title: 'ペンタトニックスケール', description: 'アドリブやソロの基礎となるスケールです。', link: 'https://www.youtube.com/embed/youtube-video-id' }
            ],
            '上級': [
                { title: 'スウィープピッキング', description: '高速なアルペジオを弾くためのテクニックです。', link: 'https://www.youtube.com/embed/youtube-video-id' },
                { title: 'タッピング', description: '左右の手で指板を叩いて音を出す奏法です。', link: 'https://www.youtube.com/embed/youtube-video-id' }
            ]
        },
        'トランペット': {
            '初級': [
                { title: 'ロングトーン', description: '安定した音を長く伸ばすための練習です。', link: 'https://www.youtube.com/embed/youtube-video-id', pdf: 'https://cdn.example.com/long_tone_trumpet.pdf' },
                { title: 'リップスラー', description: '同じ運指で音を変える練習です。', link: 'https://www.youtube.com/embed/youtube-video-id' }
            ],
            '中級': [],
            '上級': []
        },
        'フルート': {
            '初級': [
                { title: 'ロングトーン', description: '安定した音色と息のコントロールを養います。', link: 'https://www.youtube.com/embed/youtube-video-id', pdf: 'https://cdn.example.com/long_tone_flute.pdf' },
                { title: 'タンギング練習', description: '舌を使って音を区切る練習です。', link: 'https://www.youtube.com/embed/youtube-video-id' }
            ],
            '中級': [],
            '上級': []
        },
        '打楽器': {
            '初級': [
                { title: 'ルーディメンツ練習', description: 'スティックコントロールの基礎であるパラディドルなどを練習します。', link: 'https://www.youtube.com/embed/youtube-video-id' },
                { title: 'シングルストローク・ダブルストローク', description: '基本的なストロークを均等に打つ練習です。', link: 'https://www.youtube.com/embed/youtube-video-id' }
            ],
            '中級': [],
            '上級': []
        },
        'サックス': {
            '初級': [
                { title: 'ロングトーン', description: '音程と音色を安定させるための練習です。', link: 'https://www.youtube.com/embed/youtube-video-id', pdf: 'https://cdn.example.com/long_tone_sax.pdf' },
                { title: 'スケール練習', description: '主要な音階をスムーズに吹く練習です。', link: 'https://www.youtube.com/embed/youtube-video-id' }
            ],
            '中級': [],
            '上級': []
        },
        'バイオリン': {
            '初級': [
                { title: 'ボーイング練習', description: '弓の持ち方や動かし方、弦の移り方を練習します。', link: 'https://www.youtube.com/embed/youtube-video-id', pdf: 'https://cdn.example.com/bowing.pdf' },
                { title: '音階練習', description: '指の配置と音程を正確にするための練習です。', link: 'https://www.youtube.com/embed/youtube-video-id' }
            ],
            '中級': [],
            '上級': []
        },
        'ホルン': {
            '初級': [
                { title: 'リップスラー', description: '唇の振動だけで音階を滑らかに変える練習です。', link: 'https://www.youtube.com/embed/youtube-video-id' },
                { title: 'ロングトーン', description: '安定した音色と響きを保つための練習です。', link: 'https://www.youtube.com/embed/youtube-video-id' }
            ],
            '中級': [],
            '上級': []
        },
        'クラリネット': {
            '初級': [
            { title: 'ロングトーン', description: '安定した音色と息の支えを意識する練習です。', link: 'https://www.youtube.com/embed/youtube-video-id', pdf: 'https://cdn.example.com/long_tone_clarinet.pdf' },
            { title: 'スケール練習', description: '主要な音階をスムーズに演奏する練習です。', link: 'https://www.youtube.com/embed/youtube-video-id' }
            ],
            '中級': [],
            '上級': []
        },
        'チューバ': {
           '初級': [
            { title: 'リップスラー', description: '唇の振動だけで音階を滑らかに変える練習です。', link: 'https://www.youtube.com/embed/youtube-video-id' },
            { title: 'ロングトーン', description: '安定した大きな音を出すための練習です。', link: 'https://www.youtube.com/embed/youtube-video-id' }
           ],
           '中級': [],
           '上級': []
        },
        'チェロ': {
           '初級': [
            { title: '開放弦のボーイング', description: '弓をまっすぐに動かす練習です。', link: 'https://www.youtube.com/embed/youtube-video-id', pdf: 'https://cdn.example.com/bowing_cello.pdf' },
            { title: '音階練習', description: '指の配置を正確にし、音程を安定させる練習です。', link: 'https://www.youtube.com/embed/youtube-video-id' }
           ],
           '中級': [],
           '上級': []
        },
        'ファゴット': {
           '初級': [
            { title: 'ロングトーン', description: '豊かな響きと安定したピッチを養います。', link: 'https://www.youtube.com/embed/youtube-video-id' },
            { title: 'タンギング練習', description: 'スタッカートとレガートを使い分ける練習です。', link: 'https://www.youtube.com/embed/youtube-video-id' }
            ],
           '中級': [],
           '上級': []
        },
        'トロンボーン': {
           '初級': [
            { title: 'ロングトーン', description: '安定した音色と息の支えを意識する練習です。', link: 'https://www.youtube.com/embed/youtube-video-id' },
            { title: 'リップスラー', description: 'スライドを使わずに音を変える練習です。', link: 'https://www.youtube.com/embed/youtube-video-id' }
            ],
           '中級': [],
           '上級': []
        },
        'オーボエ': {
        '初級': [
            { title: 'ロングトーン', description: '安定した音色と息のコントロールを養います。', link: 'https://www.youtube.com/embed/youtube-video-id' },
            { title: 'タンギング練習', description: '素早く正確なタンギングを身につける練習です。', link: 'https://www.youtube.com/embed/youtube-video-id' }
        ],
        '中級': [],
        '上級': []
        },
        'ハープ': {
           '初級': [
            { title: 'アルペジオ練習', description: '指を均等に動かし、滑らかな音を出す練習です。', link: 'https://www.youtube.com/embed/youtube-video-id' },
            { title: '和音練習', description: '複数の弦を同時に弾き、美しいハーモニーを作る練習です。', link: 'https://www.youtube.com/embed/youtube-video-id' }
            ],
           '中級': [],
           '上級': []
        },
        'コントラバス': {
           '初級': [
            { title: '開放弦のボーイング', description: '弓の重さを感じながら、均等な音を出す練習です。', link: 'https://www.youtube.com/embed/youtube-video-id', pdf: 'https://cdn.example.com/bowing_contrabass.pdf' },
            { title: '指板上の音探し', description: '音程を確かめながら、正確な指の位置を覚える練習です。', link: 'https://www.youtube.com/embed/youtube-video-id' }
            ],
           '中級': [],
           '上級': []
        },
        // 選択された楽器が上記にない場合のデフォルトメニュー
        'default': {
            '初級': [
                { title: '基礎練習のヒント', description: 'まずは楽器を構える姿勢や音の出し方を確認してみましょう。' },
                { title: 'メトロノーム練習', description: 'タイマー画面でメトロノーム機能を試してみましょう！' }
            ],
            '中級': [],
            '上級': []
        }
    };
    
    // テーマを適用する関数
    function applyTheme(instrument) {
        const theme = instrument || 'default';
        const bodyClassList = document.body.classList;
        
        // 既存のテーマクラスをすべて削除
        const existingThemes = [
            'theme-default',
            'theme-ピアノ',
            'theme-ギター',
            'theme-トランペット',
            'theme-フルート',
            'theme-打楽器',
            'theme-サックス',
            'theme-バイオリン',
            'theme-ホルン',
            'theme-クラリネット',
            'theme-チューバ',
            'theme-チェロ',
            'theme-ファゴット',
            'theme-トロンボーン',
            'theme-オーボエ',
            'theme-ハープ',
            'theme-コントラバス',
            'theme-その他'
        ];
        existingThemes.forEach(themeClass => {
            bodyClassList.remove(themeClass);
        });
        
        // 新しいテーマクラスを付与
        bodyClassList.add(`theme-${theme}`);
    }

    // --- アプリの初期表示 ---
    showScreen('login');

    // --- カスタムメッセージボックス関数 ---
    function showMessageBox(message, onOk = null, onCancel = null) {
        messageBoxText.textContent = message;
        messageBoxModal.classList.add('active');
        messageBoxOkBtn.onclick = () => {
            closeMessageBox();
            if (onOk) onOk();
        };
        closeMessageBoxBtn.onclick = () => {
            closeMessageBox();
            if (onCancel) onCancel();
        };
    }

    function closeMessageBox() {
        messageBoxModal.classList.remove('active');
    }

    // --- 画面切り替え関数 ---
    function showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        overlay.classList.remove('active');
        hideMenuBar();
        closePracticeModal();
        closeMessageBox();
        document.body.classList.remove('calendar-active');
        document.body.classList.remove('screen-active-padding');
        closeEventSettingsModal();

         // ログイン画面と楽器選択画面ではメニューバーを非表示にする
        if (screenId === 'login' || screenId === 'instrumentSelection') {
            // メニューバーは非表示のまま
        } else {
            showMenuBar();
            document.body.classList.add('screen-active-padding');
        }

        // 画面切り替え時にテーマと楽器表示を更新 ★★★
        applyTheme(selectedInstrument);
        if (screenId === 'login' || screenId === 'instrumentSelection') {
            selectedInstrumentDisplay.classList.add('hidden');
        } else {
            updateSelectedInstrumentDisplay();
        }

        if (screenId === 'login') {
            loginScreen.classList.add('active');
        } else if (screenId === 'instrumentSelection') {
            instrumentSelectionScreen.classList.add('active');
            overlay.classList.add('active');
            showMenuBar();
            document.body.classList.add('screen-active-padding');
        } else if (screenId === 'calendarDisplay') {
            calendarDisplayScreen.classList.add('active');
            document.body.classList.add('calendar-active');
            showMenuBar();
            document.body.classList.add('screen-active-padding');
            renderCalendar(currentDate);
        } else if (screenId === 'graph') {
            graphScreen.classList.add('active');
            showMenuBar();
            document.body.classList.add('screen-active-padding');
            renderGraph(currentGraphViewMode);
        } else if (screenId === 'timer') {
            timerScreen.classList.add('active');
            showMenuBar();
            document.body.classList.add('screen-active-padding');
            if (currentTimerMode === 'timer') {
                showTimerMode();
            } else {
                showStopwatchMode();
            }
        } else if (screenId === 'goalSetting') {
            goalSettingScreen.classList.add('active');
            showMenuBar();
            document.body.classList.add('screen-active-padding');
            loadGoals();
        } else if (screenId === 'basicPractice') {
            basicPracticeScreen.classList.add('active');
            showMenuBar();
            document.body.classList.add('screen-active-padding');
            renderBasicPracticeMenu();
        } else if (screenId === 'settings') {
            settingsScreen.classList.add('active');
            showMenuBar();
            document.body.classList.add('screen-active-padding');
            updateSettingsScreen();
            updateDreamPerformanceSection();
        } else if (screenId === 'tuner') {
            tunerScreen.classList.add('active');
            showMenuBar();
            document.body.classList.add('screen-active-padding');
        }
    }

    // --- メニューバーの表示/非表示関数 ---
    function showMenuBar() {
        mainMenuBar.classList.add('active');
    }

    function hideMenuBar() {
        mainMenuBar.classList.remove('active');
    }

    // --- 選択楽器の表示更新関数 ---
    function updateSelectedInstrumentDisplay() {
        if (selectedInstrument) {
            selectedInstrumentDisplay.textContent = `楽器: ${selectedInstrument}`;
            selectedInstrumentDisplay.classList.remove('hidden');
            selectedInstrumentDisplay.classList.add('active');
        } else {
            selectedInstrumentDisplay.classList.add('hidden');
            selectedInstrumentDisplay.classList.remove('active');
            selectedInstrumentDisplay.textContent = '';
        }
    }

    // --- 楽器選択ボタンのイベントリスナー ---
    instrumentButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const instrument = event.target.dataset.instrument;
            if (instrument === 'その他') {
                openOtherInstrumentModal();
            } else {
                selectedInstrument = instrument; // 選択された楽器を保存
                localStorage.setItem('selectedInstrument', selectedInstrument); // localStorageに保存
                selectionMessage.textContent = `${selectedInstrument}を選びました！練習を始めましょう！`;
                console.log(`ユーザーが選択した楽器: ${selectedInstrument}`);

                // ★★★ 修正箇所: テーマ適用をここでも呼び出し ★★★
                applyTheme(selectedInstrument);

                showScreen('calendarDisplay');
            }
        });
    });

    // --- 「その他」楽器入力モーダル関連関数 ---
    function openOtherInstrumentModal() {
        otherInstrumentInput.value = ''; // 入力フィールドをクリア
        otherInstrumentModal.classList.add('active');
    }

    function closeOtherInstrumentModal() {
        otherInstrumentModal.classList.remove('active');
    }

    confirmOtherInstrumentBtn.addEventListener('click', () => {
        const customInstrument = otherInstrumentInput.value.trim();
        if (customInstrument) {
            selectedInstrument = customInstrument; // 選択された楽器を保存
            localStorage.setItem('selectedInstrument', selectedInstrument); // localStorageに保存
            selectionMessage.textContent = `${customInstrument}を選びました！練習を始めましょう！`;
            console.log(`ユーザーが選択した楽器: ${customInstrument}`);

            // ★★★ 修正箇所: テーマ適用をここでも呼び出し ★★★
            applyTheme(selectedInstrument);

            closeOtherInstrumentModal();
            showScreen('calendarDisplay');
        } else {
            showMessageBox('楽器名を入力してください。');
        }
    });

    closeOtherInstrumentModalBtn.addEventListener('click', closeOtherInstrumentModal);

    // --- カレンダー関連の関数 ---
    function renderCalendar(date) {
        calendarGrid.innerHTML = '';
        const dayOfWeekNames = ['日', '月', '火', '水', '木', '金', '土'];
        dayOfWeekNames.forEach(dayName => {
            const dayOfWeekDiv = document.createElement('div');
            dayOfWeekDiv.classList.add('day-of-week');
            dayOfWeekDiv.textContent = dayName;
            calendarGrid.appendChild(dayOfWeekDiv);
        });
        const year = date.getFullYear();
        const month = date.getMonth();
        const today = new Date();
        currentMonthYear.textContent = `${year}年 ${month + 1}月`;
        const firstDayOfMonth = new Date(year, month, 1);
        const lastDayOfMonth = new Date(year, month + 1, 0);
        const firstDayOfWeek = firstDayOfMonth.getDay();
        const daysInMonth = lastDayOfMonth.getDate();
        for (let i = 0; i < firstDayOfWeek; i++) {
            const emptyDay = document.createElement('div');
            emptyDay.classList.add('calendar-day', 'empty');
            calendarGrid.appendChild(emptyDay);
        }
        let monthlyTotalMinutes = 0;
        for (let day = 1; day <= daysInMonth; day++) {
            const dayCell = document.createElement('div');
            dayCell.classList.add('calendar-day');
            dayCell.textContent = day;
            const fullDateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            if (year === today.getFullYear() && month === today.getMonth() && day === today.getDate()) {
                dayCell.classList.add('today');
            }
            if (practiceRecords[fullDateString]) {
                dayCell.classList.add('has-practice');
                const indicator = document.createElement('div');
                indicator.classList.add('practice-indicator');
                dayCell.appendChild(indicator);
                monthlyTotalMinutes += practiceRecords[fullDateString].time || 0;
            }
            dayCell.addEventListener('click', () => {
                selectedDateString = fullDateString;
                openPracticeModal(selectedDateString);
            });
            calendarGrid.appendChild(dayCell);
        }
        const hours = Math.floor(monthlyTotalMinutes / 60);
        const minutes = monthlyTotalMinutes % 60;
        totalPracticeTimeSpan.textContent = `${hours}時間${minutes}分`;
        updateOverallTotalPracticeTime();

        // ★★★ 登録済みイベントをカレンダーに表示する処理 ★★★
        if (eventGoals.length > 0) {
            const dayCells = calendarGrid.querySelectorAll('.calendar-day:not(.empty)');
            eventGoals.forEach(event => {
                const eventDate = new Date(event.date + 'T00:00:00');
                if (eventDate.getFullYear() === date.getFullYear() && eventDate.getMonth() === date.getMonth()) {
                    const eventDay = eventDate.getDate();
                    const eventCell = dayCells[eventDay - 1];
                    if (eventCell) {
                        eventCell.classList.add('event-day');
                        const eventLabel = document.createElement('div');
                        eventLabel.classList.add('event-label');
                        eventLabel.textContent = event.name;
                        eventCell.appendChild(eventLabel);
                    }
                }
            });
        }
    }

    function updateOverallTotalPracticeTime() {
        let overallTotalMinutes = 0;
        for (const dateKey in practiceRecords) {
            if (practiceRecords.hasOwnProperty(dateKey)) {
                overallTotalMinutes += practiceRecords[dateKey].time || 0;
            }
        }
        const hours = Math.floor(overallTotalMinutes / 60);
        const minutes = overallTotalMinutes % 60;
        overallTotalPracticeTimeSpan.textContent = `${hours}時間${minutes}分`;
    }

    // --- 練習記録モーダル関連関数 ---
    function openPracticeModal(dateString) {
        modalDateDisplay.textContent = new Date(dateString).toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' });
        const record = practiceRecords[dateString];
        let initialTime = record ? (record.time || 30) : 30;
        practiceTimeInput.value = Math.max(0, Math.min(480, initialTime)); // 0-480の範囲に制限
        practiceTimeSlider.value = Math.max(0, Math.min(480, initialTime));
        practiceNotesTextarea.value = record ? (record.notes || '') : '';
        deletePracticeBtn.style.display = record ? 'block' : 'none';
        practiceModal.classList.add('active');
    }

    function closePracticeModal() {
        practiceModal.classList.remove('active');
        selectedDateString = '';
    }

    function savePracticeRecord() {
        const time = parseInt(practiceTimeInput.value);
        const notes = practiceNotesTextarea.value.trim();
        if (isNaN(time) || time < 0 || time > 480) {
            showMessageBox('練習時間は0から480の間の数字で入力してください。');
            return;
        }
        practiceRecords[selectedDateString] = { time: time, notes: notes};
        localStorage.setItem('practiceRecords', JSON.stringify(practiceRecords));
        closePracticeModal();
        renderCalendar(currentDate);
    }

    function deletePracticeRecord() {
        showMessageBox('この日の練習記録を削除してもよろしいですか？', () => { // OKボタンがクリックされた時の処理
            delete practiceRecords[selectedDateString];
            localStorage.setItem('practiceRecords', JSON.stringify(practiceRecords));
            closePracticeModal();
            renderCalendar(currentDate);
        });
    }

    // --- グラフ生成関数 ---
    function renderGraph(mode) {
        const graphData = {};
        const practiceGraph = document.querySelector('#graphScreen .bar-chart');
        practiceGraph.innerHTML = '';
        if (Object.keys(practiceRecords).length === 0) {
            practiceGraph.innerHTML = '<p style="text-align: center; color: #555;">まだ練習記録がありません。カレンダーで練習を記録してみましょう！</p>';
            return;
        }
        
        // 日付をキーにしてデータを集計
        for (const dateString in practiceRecords) {
            if (practiceRecords.hasOwnProperty(dateString)) {
                const record = practiceRecords[dateString];
                const date = new Date(dateString);
                let key;
                let label;
                
                if (mode === 'daily') {
                    key = dateString;
                    label = `${date.getMonth() + 1}/${date.getDate()}`;
                } else if (mode === 'monthly') {
                    key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
                    label = `${parseInt(date.getMonth() + 1)}月`;
                } else if (mode === 'yearly') {
                    key = `${date.getFullYear()}`;
                    label = `${date.getFullYear()}年`;
                }
                
                if (!graphData[key]) {
                    graphData[key] = { totalMinutes: 0, label: label };
                }
                graphData[key].totalMinutes += record.time || 0;
            }
        }
        
        const sortedKeys = Object.keys(graphData).sort();
        
        // 日ごとの場合は直近30日分のみ表示
        let displayKeys = sortedKeys;
        if (mode === 'daily') {
            const today = new Date();
            const thirtyDaysAgo = new Date(today);
            thirtyDaysAgo.setDate(today.getDate() - 30);
            displayKeys = sortedKeys.filter(key => new Date(key) >= thirtyDaysAgo);
        }
        
        const practiceDataForGraph = displayKeys.map(key => {
            const data = graphData[key];
            const hours = data.totalMinutes / 60;
            return { label: data.label, hours: hours.toFixed(1) };
        });
        
        const maxHours = Math.max(...practiceDataForGraph.map(data => parseFloat(data.hours)));
        const graphHeight = 300;
        
        practiceDataForGraph.forEach(data => {
            const bar = document.createElement('div');
            bar.classList.add('bar');
            bar.style.height = `${maxHours > 0 ? (parseFloat(data.hours) / maxHours) * graphHeight : 0}px`;
            const valueSpan = document.createElement('span');
            valueSpan.classList.add('bar-value');
            valueSpan.textContent = `${data.hours}h`;
            const labelSpan = document.createElement('span');
            labelSpan.classList.add('bar-label');
            labelSpan.textContent = data.label;
            bar.appendChild(valueSpan);
            bar.appendChild(labelSpan);
            practiceGraph.appendChild(bar);
        });
    }

    // --- タイマー/ストップウォッチ機能関連関数 ---
    function formatTime(ms) {
        const totalSeconds = Math.floor(ms / 1000);
        const hours = Math.floor((totalSeconds / 3600));
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        return [hours, minutes, seconds]
        .map(unit => String(unit).padStart(2, '0'))
        .join(':');
    }

    function showTimerMode() {
        currentTimerMode = 'timer';
        timerModeBtn.classList.add('active');
        stopwatchModeBtn.classList.remove('active');
        timerContent.classList.remove('hidden');
        stopwatchContent.classList.add('hidden');
    }

    function showStopwatchMode() {
        currentTimerMode = 'stopwatch';
        stopwatchModeBtn.classList.add('active');
        timerModeBtn.classList.remove('active');
        stopwatchContent.classList.remove('hidden');
        timerContent.classList.add('hidden');
    }

    function updateTimerDisplayLogic() {
        const now = Date.now();
        const elapsedSinceLastUpdate = now - timerLastUpdateTime;
        timerLastUpdateTime = now;
        timerRemainingTime -= elapsedSinceLastUpdate;
        if (timerRemainingTime <= 0) {
            timerRemainingTime = 0;
            clearInterval(timerIntervalId);
            timerIntervalId = null;
            timerDisplay.textContent = '00:00:00';
            startTimerBtn.disabled = false;
            pauseTimerBtn.disabled = true;
            resetTimerBtn.disabled = false;
            clearTimerBtn.disabled = false;
            showMessageBox('タイマーが終了しました！');
            return;
        }
        timerDisplay.textContent = formatTime(timerRemainingTime);
        startTimerBtn.disabled = true;
        pauseTimerBtn.disabled = false;
        resetTimerBtn.disabled = false;
        clearTimerBtn.disabled = false;
    }

    function startTimerFunc() {
        if (timerIntervalId) return;
        if (timerRemainingTime === 0) {
            showMessageBox('タイマーの時間を設定してください。');
            return;
        }
        timerLastUpdateTime = Date.now();
        timerIntervalId = setInterval(updateTimerDisplayLogic, 1000);
        startTimerBtn.disabled = true;
        pauseTimerBtn.disabled = false;
        resetTimerBtn.disabled = false;
        clearTimerBtn.disabled = false;
    }

    function pauseTimerFunc() {
        clearInterval(timerIntervalId);
        timerIntervalId = null;
        startTimerBtn.disabled = false;
        pauseTimerBtn.disabled = true;
    }

    function resetTimer() {
        clearInterval(timerIntervalId);
        timerIntervalId = null;
        timerRemainingTime = 0;
        timerDisplay.textContent = '00:00:00';
        startTimerBtn.disabled = false;
        pauseTimerBtn.disabled = true;
        resetTimerBtn.disabled = true;
        clearTimerBtn.disabled = true;
    }

    function clearTimer() {
        resetTimer();
    }

    function updateStopwatchDisplayLogic() {
        const now = Date.now();
        stopwatchElapsedTime += (now - timerLastUpdateTime);
        timerLastUpdateTime = now;
        stopwatchDisplay.textContent = formatTime(stopwatchElapsedTime);
    }

    function startStopwatchFunc() {
        if (timerIntervalId) return;
        timerLastUpdateTime = Date.now();
        timerIntervalId = setInterval(updateStopwatchDisplayLogic, 10);
        startStopwatchBtn.disabled = true;
        pauseStopwatchBtn.disabled = false;
        resetStopwatchBtn.disabled = false;
    }

    function pauseStopwatchFunc() {
        clearInterval(timerIntervalId);
        timerIntervalId = null;
        startStopwatchBtn.disabled = false;
        pauseStopwatchBtn.disabled = true;
    }

    function resetStopwatch() {
        clearInterval(timerIntervalId);
        timerIntervalId = null;
        stopwatchElapsedTime = 0;
        stopwatchDisplay.textContent = '00:00:00';
        startStopwatchBtn.disabled = false;
        pauseStopwatchBtn.disabled = true;
        resetStopwatchBtn.disabled = true;
    }

    // --- 目標設定機能関連関数 ---
    function saveGoals() {
        goals.yearly = yearlyGoalInput.value.trim();
        goals.personal = personalGoalInput.value.trim();
        localStorage.setItem('goals', JSON.stringify(goals));
        showMessageBox('目標を保存しました！');
    }

    function loadGoals() {
        const loadedGoals = JSON.parse(localStorage.getItem('goals'));
        if (loadedGoals) {
            goals = loadedGoals;
            yearlyGoalInput.value = goals.yearly;
            personalGoalInput.value = goals.personal;
        } else {
            yearlyGoalInput.value = '';
            personalGoalInput.value = '';
        }
    }

    // ★★★ 修正箇所: 憧れの演奏機能の状態を更新する関数を追加 ★★★
    function updateDreamPerformanceSection() {
        if (dreamPerformanceUrl) {
            dreamPerformanceUrlInput.value = dreamPerformanceUrl; // URL入力欄にURLを表示
            dreamPerformanceInputSection.style.display = 'none';
            dreamPerformancePlaySection.style.display = 'block';
        } else {
            dreamPerformanceUrlInput.value = '';
            dreamPerformanceInputSection.style.display = 'block';
            dreamPerformancePlaySection.style.display = 'none';
        }
    }

    // --- 設定画面の表示内容を更新する関数 ---
    function updateSettingsScreen() {
        currentInstrumentInSettings.textContent = selectedInstrument || '未設定';
        updateDreamPerformanceSection();
    }

    // --- ここから追加したコード ---
    /**
     * ミニ記録ボタンのメニュー表示を切り替える
     */
    function toggleMiniRecordMenu() {
        miniRecordMenu.classList.toggle('active');
    }

    /**
     * ミニ記録ボタンで練習時間を追加する
     * @param {number} minutes - 追加する練習時間（分）
     */
    function addPracticeTimeFromMiniButton(minutes) {
        const today = new Date().toISOString().split('T')[0];
        const notes = 'ミニ記録ボタンで追加';

        if (practiceRecords[today]) {
            // 既存の記録に時間を追加
            practiceRecords[today].time += minutes;
        } else {
            // 新規に記録を作成
            practiceRecords[today] = { time: minutes, notes: notes };
        }

        // localStorageを更新
        localStorage.setItem('practiceRecords', JSON.stringify(practiceRecords));
        showMessageBox(`${minutes}分の練習記録を追加しました！`, () => {
            renderCalendar(currentDate);
            toggleMiniRecordMenu();
        });
    }
    // --- ここまで追加したコード ---

    // --- 基礎練メニューをレンダリングする関数 ---
    const renderBasicPracticeMenu = () => {
        const selectedInstrument = localStorage.getItem('selectedInstrument') || '';
        const selectedLevel = document.querySelector('.level-button.active').dataset.level;
        const menus = (basicPracticeMenus[selectedInstrument] && basicPracticeMenus[selectedInstrument][selectedLevel])
            ? basicPracticeMenus[selectedInstrument][selectedLevel]
            : basicPracticeMenus['default'][selectedLevel];
        const container = document.getElementById('practiceMenuContainer');
        const title = document.getElementById('basicPracticeTitle');
        const description = document.getElementById('basicPracticeDescription');
        container.innerHTML = '';
        if (basicPracticeMenus[selectedInstrument] && basicPracticeMenus[selectedInstrument][selectedLevel]) {
            title.textContent = `${selectedInstrument}の基礎練メニュー (${selectedLevel})`;
            description.textContent = 'これらのメニューを日々の練習に取り入れてみましょう！';
        } else {
            title.textContent = '基礎練メニュー';
            description.textContent = 'まだこの楽器のメニューはありません。まずは基本的な練習から始めましょう！';
        }
        const ul = document.createElement('ul');
        ul.id = 'practiceMenuList';
        if (menus && menus.length > 0) {
            menus.forEach(item => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <h4>${item.title}</h4>
                    <p>${item.description}</p>
                `;
                if (item.link) {
                    li.innerHTML += `
                        <div class="video-wrapper">
                            <iframe src="${item.link}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    `;
                }
                ul.appendChild(li);
            });
            container.appendChild(ul);
        } else {
            container.innerHTML = '<p style="text-align: center; color: #555;">このレベルのメニューはまだありません。</p>';
        }
    };

    // --- チューナー機能関連関数 ---
    function noteFromPitch(frequency) {
        const noteNum = 12 * (Math.log(frequency / A4) / Math.log(2));
        return Math.round(noteNum) + 69;
    }

    function frequencyFromNoteNumber(note) {
        return A4 * Math.pow(2, (note - 69) / 12);
    }

    function centsOffFromPitch(frequency, note) {
        return Math.floor(1200 * Math.log(frequency / frequencyFromNoteNumber(note)) / Math.log(2));
    }

    function autoCorrelate(buf, sampleRate) {
        const SIZE = buf.length;
        let rms = 0;
        for (let i = 0; i < SIZE; i++) {
            const val = buf[i];
            rms += val * val;
        }
        rms = Math.sqrt(rms / SIZE);
        if (rms < 0.01) return -1;

        let r1 = 0, r2 = SIZE - 1, thres = 0.2;
        for (let i = 0; i < SIZE / 2; i++) {
            if (Math.abs(buf[i]) < thres) { r1 = i; break; }
        }
        for (let i = 1; i < SIZE / 2; i++) {
            if (Math.abs(buf[SIZE - i]) < thres) { r2 = SIZE - i; break; }
        }

        buf = buf.slice(r1, r2);
        const new_SIZE = buf.length;
        const c = new Array(new_SIZE).fill(0);
        for (let i = 0; i < new_SIZE; i++) {
            for (let j = 0; j < new_SIZE - i; j++) {
                c[i] = c[i] + buf[j] * buf[j + i];
            }
        }

        let d = 0;
        while (c[d] > c[d + 1]) d++;
        let maxval = -1, maxpos = -1;
        for (let i = d; i < new_SIZE; i++) {
            if (c[i] > maxval) {
                maxval = c[i];
                maxpos = i;
            }
        }

        let T0 = maxpos;
        const x1 = c[T0 - 1], x2 = c[T0], x3 = c[T0 + 1];
        const a = (x1 + x3 - 2 * x2) / 2;
        const b = (x3 - x1) / 2;
        if (a) T0 = T0 - b / (2 * a);

        return sampleRate / T0;
    }

    function updatePitch() {
        const buffer = new Float32Array(analyser.fftSize);
        analyser.getFloatTimeDomainData(buffer);
        const pitch = autoCorrelate(buffer, audioContext.sampleRate);

        if (pitch !== -1) {
            const note = noteFromPitch(pitch);
            const noteName = noteStrings[note % 12];
            const detune = centsOffFromPitch(pitch, note);

            noteNameEl.textContent = noteName;
            frequencyEl.textContent = `${Math.round(pitch)} Hz`;

            const meterOffset = Math.max(-50, Math.min(50, detune));
            meterEl.style.left = `${49 + meterOffset / 2}%`;
        }

        requestAnimationFrame(updatePitch);
    }

    function startTunerFunc() {
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }

        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                mediaStreamSource = audioContext.createMediaStreamSource(stream);
                analyser = audioContext.createAnalyser();
                analyser.fftSize = 2048;
                mediaStreamSource.connect(analyser);

                startButton.style.display = 'none';
                tunerMessage.textContent = '楽器を演奏してください。';
                updatePitch();
            })
            .catch(err => {
                alert('マイクへのアクセスを許可してください。');
                console.error(err);
                tunerMessage.textContent = 'マイクへのアクセスが拒否されました。';
            });
    }

    // --- イベント目標関連の関数 ---
    function openEventSettingsModal() {
        eventSettingsModal.classList.add('active');
        renderEventGoals();
    }

    function closeEventSettingsModal() {
        eventSettingsModal.classList.remove('active');
        renderCalendar(currentDate);
    }

    function saveEventGoal() {
        const eventName = eventNameInput.value.trim();
        const eventDate = eventDateInput.value;

        if (eventName && eventDate) {
            eventGoals.push({ name: eventName, date: eventDate });
            localStorage.setItem('eventGoals', JSON.stringify(eventGoals));
            showMessageBox('イベントを登録しました！', () => {
                eventNameInput.value = '';
                eventDateInput.value = '';
                renderEventGoals();
            });
        } else {
            alert('イベント名と日付を入力してください。');
        }
    }

    function renderEventGoals() {
        let eventsHtml = '';
        if (eventGoals.length > 0) {
            eventGoals.forEach((event, index) => {
                eventsHtml += `
                    <div class="event-item">
                        <span>${event.name} (${event.date})</span>
                        <button class="delete-event-btn" data-index="${index}">削除</button>
                    </div>
                `;
            });
        } else {
            eventsHtml = '<p>登録されたイベントはありません。</p>';
        }
        eventsList.innerHTML = `<h3>登録済みイベント</h3>${eventsHtml}`;
    }

    // ★★★ 修正箇所: 憧れの演奏機能の関数を追加 ★★★
    function updateDreamPerformanceSection() {
        if (dreamPerformanceUrl) {
            dreamPerformanceUrlInput.value = dreamPerformanceUrl; // URL入力欄にURLを表示
            dreamPerformanceInputSection.style.display = 'none';
            dreamPerformancePlaySection.style.display = 'block';
        } else {
            dreamPerformanceUrlInput.value = '';
            dreamPerformanceInputSection.style.display = 'block';
            dreamPerformancePlaySection.style.display = 'none';
        }
    }

    function saveDreamPerformance() {
        const url = dreamPerformanceUrlInput.value.trim();
        if (url) {
            dreamPerformanceUrl = url;
            localStorage.setItem('dreamPerformanceUrl', dreamPerformanceUrl);
            updateDreamPerformanceSection(); // 画面を更新して「演奏を聴く」ボタンを表示
            showMessageBox('憧れの演奏URLを保存しました！');
        } else {
            showMessageBox('URLを入力してください。');
        }
    }

    function changeDreamPerformance() {
        dreamPerformanceUrl = '';
        localStorage.removeItem('dreamPerformanceUrl');
        updateDreamPerformanceSection(); // 画面を更新して入力欄を表示
    }

    function playDreamPerformance() {
        window.open(dreamPerformanceUrl, '_blank'); // 新しいタブでURLを開く
    }

    // --- イベントリスナーの統合 ---
    if (loginForm) {
        console.log('ログインフォーム要素が見つかりました。');
        loginForm.addEventListener('submit', (event) => {
            console.log('ログインフォームのsubmitイベントが発火しました。');
            event.preventDefault();

            if (selectedInstrument) {
                showScreen('calendarDisplay');
            } else {
                showScreen('instrumentSelection');
            }
            updateSelectedInstrumentDisplay();
        });
    } else {
        console.error('エラー: ログインフォーム要素が見つかりませんでした。HTMLを確認してください。');
    }

    prevMonthBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
    });

    nextMonthBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate);
    });

    closeModalBtn.addEventListener('click', closePracticeModal);
    savePracticeBtn.addEventListener('click', savePracticeRecord);
    deletePracticeBtn.addEventListener('click', deletePracticeRecord);

    practiceTimeSlider.addEventListener('input', (event) => {
        practiceTimeInput.value = event.target.value;
    });

    practiceTimeInput.addEventListener('input', (event) => {
        practiceTimeSlider.value = event.target.value;
    });

    // presetButtons.forEach(button => { // 削除されたため、このイベントリスナーをコメントアウトまたは削除
    //     button.addEventListener('click', (event) => {
    //         const time = event.target.dataset.time;
    //         practiceTimeInput.value = time;
    //         practiceTimeSlider.value = time;
    //     });
    // });

    // --- ここから追加したコード ---
    // ミニ記録ボタンのイベントリスナー
    miniRecordMainButton.addEventListener('click', toggleMiniRecordMenu);

    document.addEventListener('click', (event) => {
        if (!miniRecordContainer.contains(event.target)) {
            miniRecordMenu.classList.remove('active');
        }
    });

    miniRecordOptions.forEach(button => {
        button.addEventListener('click', (event) => {
            const minutes = parseInt(event.target.dataset.minutes);
            addPracticeTimeFromMiniButton(minutes);
        });
    });
    // --- ここまで追加したコード ---

    document.getElementById('menuCalendar').addEventListener('click', (event) => {
        event.preventDefault();
        showScreen('calendarDisplay');
    });

    document.getElementById('menuTimer').addEventListener('click', (event) => {
        event.preventDefault();
        showScreen('timer');
    });

    document.getElementById('menuGoals').addEventListener('click', (event) => {
        event.preventDefault();
        showScreen('goalSetting');
    });

    document.getElementById('menuBasicPractice').addEventListener('click', (event) => {
        event.preventDefault();
        showScreen('basicPractice');
    });

    document.getElementById('menuTuner').addEventListener('click', (event) => {
        event.preventDefault();
        showScreen('tuner');
    });

    document.getElementById('menuSettings').addEventListener('click', (event) => {
        event.preventDefault();
        showScreen('settings');
    });

    viewGraphBtn.addEventListener('click', () => {
        showScreen('graph');
    });

    changeInstrumentBtn.addEventListener('click', () => {
        showScreen('instrumentSelection');
    });

    logoutBtnInSettings.addEventListener('click', () => {
        showMessageBox('ログアウトします。よろしいですか？', () => {
            localStorage.clear();
            selectedInstrument = '';
            applyTheme();
            updateSelectedInstrumentDisplay();
            showScreen('login');
        });
    });

    timerModeBtn.addEventListener('click', showTimerMode);
    stopwatchModeBtn.addEventListener('click', showStopwatchMode);

    timerPresetButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const timeMs = parseInt(event.target.dataset.time);
            timerRemainingTime = timeMs;
            timerDisplay.textContent = formatTime(timerRemainingTime);
            startTimerBtn.disabled = false;
            pauseTimerBtn.disabled = true;
            resetTimerBtn.disabled = false;
            clearTimerBtn.disabled = false;
            clearInterval(timerIntervalId);
            timerIntervalId = null;
        });
    });

    timerAdjustmentButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const adjustMs = parseInt(event.target.dataset.adjust);
            timerRemainingTime = Math.max(0, timerRemainingTime + adjustMs);
            timerDisplay.textContent = formatTime(timerRemainingTime);
            startTimerBtn.disabled = false;
            pauseTimerBtn.disabled = true;
            resetTimerBtn.disabled = false;
            clearTimerBtn.disabled = false;
            clearInterval(timerIntervalId);
            timerIntervalId = null;
        });
    });

    startTimerBtn.addEventListener('click', startTimerFunc);
    pauseTimerBtn.addEventListener('click', pauseTimerFunc);
    resetTimerBtn.addEventListener('click', resetTimer);
    clearTimerBtn.addEventListener('click', clearTimer);

    startStopwatchBtn.addEventListener('click', startStopwatchFunc);
    pauseStopwatchBtn.addEventListener('click', pauseStopwatchFunc);
    resetStopwatchBtn.addEventListener('click', resetStopwatch);

    saveGoalsBtn.addEventListener('click', saveGoals);

    graphDailyBtn.addEventListener('click', () => {
        currentGraphViewMode = 'daily';
        renderGraph(currentGraphViewMode);
        graphDailyBtn.classList.add('active');
        graphMonthlyBtn.classList.remove('active');
        graphYearlyBtn.classList.remove('active');
    });

    graphMonthlyBtn.addEventListener('click', () => {
        currentGraphViewMode = 'monthly';
        renderGraph(currentGraphViewMode);
        graphMonthlyBtn.classList.add('active');
        graphDailyBtn.classList.remove('active');
        graphYearlyBtn.classList.remove('active');
    });

    graphYearlyBtn.addEventListener('click', () => {
        currentGraphViewMode = 'yearly';
        renderGraph(currentGraphViewMode);
        graphYearlyBtn.classList.add('active');
        graphDailyBtn.classList.remove('active');
        graphMonthlyBtn.classList.remove('active');
    });

    levelButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            document.querySelector('.level-button.active').classList.remove('active');
            e.target.classList.add('active');
            renderBasicPracticeMenu();
        });
    });

    startButton.addEventListener('click', startTunerFunc);

    openEventSettingsModalBtn.addEventListener('click', openEventSettingsModal);
    closeEventSettingsModalBtn.addEventListener('click', closeEventSettingsModal);
    addEventBtn.addEventListener('click', saveEventGoal);

    eventsList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-event-btn')) {
            const indexToDelete = e.target.dataset.index;
            eventGoals.splice(indexToDelete, 1);
            localStorage.setItem('eventGoals', JSON.stringify(eventGoals));
            renderEventGoals();
            renderCalendar(currentDate); // カレンダーも更新する
        }
    });

    // ★★★ 修正箇所: 憧れの演奏機能のイベントリスナーを追加 ★★★
    saveDreamPerformanceBtn.addEventListener('click', saveDreamPerformance);
    playDreamPerformanceBtn.addEventListener('click', playDreamPerformance);
    changeDreamPerformanceBtn.addEventListener('click', changeDreamPerformance);

}); // DOMContentLoadedの終わり
