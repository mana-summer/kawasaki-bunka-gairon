document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');

    // マウスの位置を常に追跡
    document.addEventListener('mousemove', (e) => {
        // カーソルの中心がマウスの先端に来るように調整
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // 画面からマウスが出た時に消えないようにする設定
    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = "1";
    });
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = "0";
    });
    
    // 全てのインタラクティブな要素に対してホバーエフェクトを適用する
    const targetElements = document.querySelectorAll('a, button, .grid-item, .nav-link');

    targetElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    });
});
