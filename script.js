document.addEventListener('DOMContentLoaded', () => {
    const ghost = document.getElementById('ghost');

    // 一定時間（5000ミリ秒＝5秒後）にお化けが表示される
    setTimeout(() => {
        ghost.style.opacity = '1'; // お化けを表示
        moveGhost(); // お化けを動かす関数を呼び出す
    }, 5000); // 5秒後に表示

    // お化けがランダムに画面を移動する関数
    function moveGhost() {
        let lastTimestamp = 0;
        const interval = 1000; // 1秒ごとにお化けを移動

        function updatePosition(timestamp) {
            if (timestamp - lastTimestamp >= interval) {
                lastTimestamp = timestamp;

                // ランダムな位置を計算
                const x = Math.random() * (window.innerWidth - ghost.clientWidth);
                const y = Math.random() * (window.innerHeight - ghost.clientHeight);

                // お化けの位置を更新 (translateでスムーズに移動)
                ghost.style.transition = 'transform 1s'; // 1秒間の移動アニメーション
                ghost.style.transform = `translate(${x}px, ${y}px)`;
            }

            // 次のフレームで再度位置を更新
            requestAnimationFrame(updatePosition);
        }

        // 初回の呼び出し
        requestAnimationFrame(updatePosition);
    }
});
