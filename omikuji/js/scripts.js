document.getElementById('draw').addEventListener('click', function () {
    const omikujiResults = [
        '大大吉', '大吉', '中吉', '小吉', '末吉', '大凶', '凶'
    ];

    const result = omikujiResults[Math.floor(Math.random() * omikujiResults.length)];

    const resultElement = document.getElementById('result');
    resultElement.textContent = `あなたの運勢は... ${result}!`;

    // 結果ごとに色を変更
    switch (result) {
        case '大大吉':
            resultElement.style.color = 'pink';
            break;
        case '大吉':
            resultElement.style.color = 'red';
            break;
        case '中吉':
            resultElement.style.color = 'orange';
            break;
        case '小吉':
            resultElement.style.color = 'green';
            break;
        case '末吉':
            resultElement.style.color = 'blue';
            break;
        case '凶':
            resultElement.style.color = 'black';
            break;
        case '大凶':
            resultElement.style.color = 'purple';
            break;
    }
});