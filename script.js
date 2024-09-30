function startCountdown() {
    const dateInput = document.getElementById("date-input").value;
    const targetDate = new Date(dateInput);

    if (isNaN(targetDate)) {
        alert("有効な日時を入力してください！");
        return;
    }

    const interval = setInterval(() => {
        const now = new Date();
        const remainingTime = targetDate - now;

        if (remainingTime <= 0) {
            clearInterval(interval);
            document.getElementById("countdown").innerText = "時間になりました！";
            return;
        }

        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerText = `あと ${days}日 ${hours}時間 ${minutes}分 ${seconds}秒`;
    }, 1000);
}

function setBackgroundColor(color) {
    if (color !== 'black' && color !== 'white') return;
    document.body.style.backgroundColor = color;

    const textColor = (color === 'black') ? '#00FFFF' : '#333333';
    document.body.style.color = textColor;

    const elementsToUpdate = document.querySelectorAll('.container, #date-input, #countdown');
    elementsToUpdate.forEach(element => {
        element.style.borderColor = textColor;
        element.style.boxShadow = `0px 0px 10px ${textColor}`;
    });

    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.style.backgroundColor = textColor;
        button.style.color = color;
    });
}

function applyTextColor() {
    const textColor = document.getElementById("text-color").value;

    document.body.style.color = textColor;

    const elementsToUpdate = document.querySelectorAll('.container, #date-input, #countdown');
    elementsToUpdate.forEach(element => {
        element.style.borderColor = textColor;
        element.style.boxShadow = `0px 0px 10px ${textColor}`;
    });

    const bgColor = document.body.style.backgroundColor;
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.style.backgroundColor = textColor;
        button.style.color = bgColor;
    });
}
