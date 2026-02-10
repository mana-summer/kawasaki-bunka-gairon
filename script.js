document.addEventListener('DOMContentLoaded', () => {
    // カスタムカーソルの動き
    const cursor = document.querySelector('.cursor');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // スクロール監視
    // 画面内に要素が入ってきたら 'active' クラスを付与する
    const observerOptions = {
        threshold: 0.2 // 20%見えたら実行
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    // ホバー時にカーソルを大きくする演出
    const links = document.querySelectorAll('a, button, .grid-item');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(4)';
            cursor.style.background = 'rgba(255, 255, 255, 0.5)';
        });
        link.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.background = 'var(--neon-yellow)';
        });
    });
});
