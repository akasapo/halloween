// JavaScriptを使ってお化けを一定時間後に表示し、アニメーションを実行

const ghost = document.getElementById('ghost');

// 一定時間（5000ミリ秒＝5秒後）にお化けが表示される
setTimeout(() => {
    ghost.style.opacity = '1'; // お化けを表示
    moveGhost(); // お化けを動かす関数を呼び出す
}, 5000); // 5秒後に表示

// お化けが画面をぐるぐる飛び回る関数
function moveGhost() {
    let angle = 0; // 回転の初期角度
    let radius = 150; // 円の半径

    // 一定間隔でお化けの位置を更新
    setInterval(() => {
        // 角度を少しずつ増加
        angle += 5;

        // お化けのx, y位置を計算 (画面中央を基準にする)
        let x = window.innerWidth / 2 + radius * Math.cos(angle * Math.PI / 180) - ghost.clientWidth / 2;
        let y = window.innerHeight / 2 + radius * Math.sin(angle * Math.PI / 180) - ghost.clientHeight / 2;

        // お化けの位置を更新
        ghost.style.transform = `translate(${x}px, ${y}px)`;
    }, 50); // 50ミリ秒ごとに位置を更新
}
