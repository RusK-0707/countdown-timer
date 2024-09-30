window.addEventListener('DOMContentLoaded', (event) => {
    const countdownElement = document.getElementById('countdown');
    const inputDateElement = document.getElementById('inputDate'); // 日時入力要素
    const toggleButton = document.getElementById('toggleBackground');
    const bodyElement = document.body;

    function updateCountdown(inputDate) {
        const now = new Date();
        const timeDifference = inputDate - now;

        if (timeDifference > 0) {
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            countdownElement.textContent = `${days} 日 ${hours} 時間 ${minutes} 分 ${seconds} 秒`;
        } else {
            countdownElement.textContent = "カウントダウン終了!";
        }
    }

    // ユーザーが日時を設定してカウントダウンを開始
    document.getElementById('startCountdown').addEventListener('click', () => {
        const inputDateValue = inputDateElement.value;
        const inputDate = new Date(inputDateValue); // ユーザーが入力した日時

        if (!isNaN(inputDate.getTime())) {
            countdownElement.textContent = "カウントダウン中...";
            setInterval(() => updateCountdown(inputDate), 1000);
        } else {
            countdownElement.textContent = "無効な日時です。再入力してください。";
        }
    });

    // 色変更
    document.getElementById('bgColor').addEventListener('input', (event) => {
        bodyElement.style.backgroundColor = event.target.value; // 背景色を変更
    });

    document.getElementById('textColor').addEventListener('input', (event) => {
        bodyElement.style.color = event.target.value; // 文字色を変更
    });

    // 背景色と文字色の切り替えボタン
    toggleButton.addEventListener('click', () => {
        bodyElement.classList.toggle('white-background');
    });
});
