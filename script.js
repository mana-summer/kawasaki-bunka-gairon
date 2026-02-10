document.addEventListener('DOMContentLoaded', () => {
  const title = document.getElementById('main-title');
  const button = document.getElementById('glitch-button');

  // タイトルの色がランダムに変わるコード
  setInterval(() => {
      const colors = ['#ff00ff', '#ffff00', '#ff0000', '#00ffff', '#ffffff'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      title.style.textShadow = `5px 5px 0px ${randomColor}`;
  }, 150);

  // ボタンクリック時の演出のコード
  button.addEventListener('click', () => {
      alert('川崎の深淵へようこそ。');
      document.body.style.backgroundColor = '#ff0000';
      setTimeout(() => {
          document.body.style.backgroundColor = '#000000';
      }, 100);
  });

  // スクロールに合わせて要素を動かすコード
  window.addEventListener('scroll', () => {
      const offset = window.pageYOffset;
      document.querySelector('.content-box').style.transform = `translateY(${offset * 0.1}px)`;
  });
});
