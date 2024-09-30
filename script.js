// カウントダウンタイマーを開始する関数
function startCountdown() {
    const dateInput = document.getElementById("date-input").value;
    const targetDate = new Date(dateInput);


    // 入力された日時が有効かをチェック
    if (isNaN(targetDate)) {
        alert("有効な日時を入力してください！");
        return;
    }


    // 1秒ごとに残り時間を更新するインターバル設定
    const interval = setInterval(() => {
        const now = new Date();
        const remainingTime = targetDate - now;


        if (remainingTime <= 0) {
            clearInterval(interval);
            document.getElementById("countdown").innerText = "時間になりました！";
            return;
        }


        // 残り時間を計算して表示する
        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);


        document.getElementById("countdown").innerText = `あと ${days}日 ${hours}時間 ${minutes}分 ${seconds}秒`;
    }, 1000);
}


// 背景色を設定する関数（白または黒のみ）
function setBackgroundColor(color) {
    if (color !== 'black' && color !== 'white') return; // 白と黒以外の色は無視
    document.body.style.backgroundColor = color;


    // 文字の読みやすさを調整（背景色が黒なら文字色を明るめに、白なら暗めに）
    const textColor = (color === 'black') ? '#00FFFF' : '#333333';
    document.body.style.color = textColor;


    // その他要素のスタイルも変更
    const elementsToUpdate = document.querySelectorAll('.container, #date-input, #countdown');
    elementsToUpdate.forEach(element => {
        element.style.borderColor = textColor;
        element.style.boxShadow = `0px 0px 10px ${textColor}`;
    });


    // ボタンのスタイルも調整
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.style.backgroundColor = textColor;
        button.style.color = color;
    });
}


// 文字色を変更する関数
function applyTextColor() {
    // ユーザーが選択した文字色を取得
    const textColor = document.getElementById("text-color").value;


    // 各要素の文字色を変更
    document.body.style.color = textColor;


    // その他の要素（ボーダー、影など）も文字色に合わせて変更
    const elementsToUpdate = document.querySelectorAll('.container, #date-input, #countdown');
    elementsToUpdate.forEach(element => {
        element.style.borderColor = textColor;
        element.style.boxShadow = `0px 0px 10px ${textColor}`;
    });


    // ボタンのスタイルも調整（背景色との対比を考慮）
    const bgColor = document.body.style.backgroundColor;
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.style.backgroundColor = textColor;
        button.style.color = bgColor;
    });
}