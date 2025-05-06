
document.querySelector('.login-box').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('這是一個釣魚網站');
});


document.querySelectorAll('.social-btn').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        alert('這是一個釣魚網站');
    });
});
