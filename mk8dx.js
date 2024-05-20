function botanClick(){
    /*const imageArea = document.getElementById('randimageArea');
    const images = ['./image/mariokartcourse/1.jpg',
    './image/mariokartcourse/2.jpg',
    './image/mariokartcourse/3.jpg',
    './image/mariokartcourse/4.jpg',
    './image/mariokartcourse/5.jpg',
    './image/mariokartcourse/6.jpg',
    './image/mariokartcourse/7.jpg',
    './image/mariokartcourse/8.jpg',
    './image/mariokartcourse/9.jpg',
    './image/mariokartcourse/10.jpg',
    './image/mariokartcourse/11.jpg',
    './image/mariokartcourse/12.jpg',
    './image/mariokartcourse/13.jpg',
    './image/mariokartcourse/14.jpg',
    './image/mariokartcourse/15.jpg',
    './image/mariokartcourse/16.jpg',
    './image/mariokartcourse/17.jpg',
    './image/mariokartcourse/18.jpg',
    './image/mariokartcourse/19.jpg',
    './image/mariokartcourse/20.jpg',
    './image/mariokartcourse/21.jpg',
    './image/mariokartcourse/22.jpg',
    './image/mariokartcourse/23.jpg',
    './image/mariokartcourse/24.jpg',
    './image/mariokartcourse/25.jpg',
    './image/mariokartcourse/26.jpg',
    './image/mariokartcourse/27.jpg',
    './image/mariokartcourse/28.jpg',
    './image/mariokartcourse/29.jpg',
    './image/mariokartcourse/30.jpg',
    './image/mariokartcourse/31.jpg',
    './image/mariokartcourse/32.jpg',
    './image/mariokartcourse/33.jpg',
    './image/mariokartcourse/34.jpg',
    './image/mariokartcourse/35.jpg',
    './image/mariokartcourse/36.jpg',
    './image/mariokartcourse/37.jpg',
    './image/mariokartcourse/38.jpg',
    './image/mariokartcourse/39.jpg',
    './image/mariokartcourse/40.jpg',
    './image/mariokartcourse/41.jpg',
    './image/mariokartcourse/42.jpg',
    './image/mariokartcourse/43.jpg',
    './image/mariokartcourse/44.jpg',
    './image/mariokartcourse/45.jpg',
    './image/mariokartcourse/46.jpg',
    './image/mariokartcourse/47.jpg',
    './image/mariokartcourse/48.jpg',
    './image/mariokartcourse/49.jpg',
    './image/mariokartcourse/50.jpg',
    './image/mariokartcourse/51.jpg',
    './image/mariokartcourse/52.jpg',
    './image/mariokartcourse/53.jpg',
    './image/mariokartcourse/54.jpg',
    './image/mariokartcourse/55.jpg',
    './image/mariokartcourse/56.jpg',
    './image/mariokartcourse/57.jpg',
    './image/mariokartcourse/58.jpg',
    './image/mariokartcourse/59.jpg',
    './image/mariokartcourse/60.jpg',
    './image/mariokartcourse/61.jpg',
    './image/mariokartcourse/62.jpg',
    './image/mariokartcourse/63.jpg',
    './image/mariokartcourse/64.jpg',
    './image/mariokartcourse/65.jpg',
    './image/mariokartcourse/66.jpg',
    './image/mariokartcourse/67.jpg',
    './image/mariokartcourse/68.jpg',
    './image/mariokartcourse/69.jpg',
    './image/mariokartcourse/70.jpg',
    './image/mariokartcourse/71.jpg',
    './image/mariokartcourse/72.jpg',
    './image/mariokartcourse/73.jpg',
    './image/mariokartcourse/74.jpg',
    './image/mariokartcourse/75.jpg',
    './image/mariokartcourse/76.jpg',
    './image/mariokartcourse/77.jpg',
    './image/mariokartcourse/78.jpg',
    './image/mariokartcourse/79.jpg',
    './image/mariokartcourse/80.jpg',
    './image/mariokartcourse/81.jpg',
    './image/mariokartcourse/82.jpg',
    './image/mariokartcourse/83.jpg',
    './image/mariokartcourse/84.jpg',
    './image/mariokartcourse/85.jpg',
    './image/mariokartcourse/86.jpg',
    './image/mariokartcourse/87.jpg',
    './image/mariokartcourse/88.jpg',
    './image/mariokartcourse/89.jpg',
    './image/mariokartcourse/90.jpg',
    './image/mariokartcourse/91.jpg',
    './image/mariokartcourse/92.jpg',
    './image/mariokartcourse/93.jpg',
    './image/mariokartcourse/94.jpg',
    './image/mariokartcourse/95.jpg',
    './image/mariokartcourse/96.jpg'];
    const imageNo = Math.floor( Math.random() * images.length)
    randimageArea.src = images[imageNo];*/

    const imageArea = document.getElementById('randimageArea');
        if (conditionList.length === 0) {
            alert("表示できる画像がありません。");
            return;
        }
        const randomIndex = Math.floor(Math.random() * conditionList.length);
        const imageId = conditionList[randomIndex];
        imageArea.src = `./image/mariokartcourse/${imageId}.jpg`;
}

let button = document.getElementById('randbtn');

// addEventListener( 'イベント', 処理)で要素にイベントが発火した際に処理を実行する
button.addEventListener('click', botanClick);

document.addEventListener("DOMContentLoaded", function() {
    // 条件リストの配列を初期化
    const conditionList = Array.from({ length: 96 }, (_, i) => i + 1);

    // 全てのボタンを取得
    const buttons = document.querySelectorAll(".toggle-button");

    // 各ボタンにクリックイベントリスナーを追加
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            // ボタンのテキストを切り替え
            const id = parseInt(button.dataset.id, 10);
            if (button.textContent === "ON") {
                button.textContent = "OFF";
                // 条件リストから要素を削除
                const index = conditionList.indexOf(id);
                if (index > -1) {
                    conditionList.splice(index, 1);
                }
            } else {
                button.textContent = "ON";
                // 条件リストに要素を追加
                if (!conditionList.includes(id)) {
                    conditionList.push(id);
                }
            }
            console.log("現在の条件リスト:", conditionList);
        });
    });
