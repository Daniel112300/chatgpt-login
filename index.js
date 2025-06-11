// 要打開的 Rickroll 影片網址
const rickrollUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXCgBwE%3D';

// 偵測表單送出事件，打開 Rickroll
document.querySelector('.login-box').addEventListener('submit', function(e) {
    e.preventDefault();
    window.open(rickrollUrl, '_blank');
});

// 偵測社群按鈕點擊事件，打開 Rickroll
document.querySelectorAll('.social-btn').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        window.open(rickrollUrl, '_blank');
    });
});

// 偵測 help-link 點擊，打開 Rickroll
document.querySelector('.help-link').addEventListener('click', function(e) {
    e.preventDefault();
    window.open(rickrollUrl, '_blank');
});

// 偵測忘記密碼，打開 Rickroll
document.querySelector('.forgot-link').addEventListener('click', function(e) {
    e.preventDefault();
    window.open(rickrollUrl, '_blank');
});
