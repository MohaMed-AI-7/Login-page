function switchTab(button, tabName) {
    const container = button.parentElement;
    const slider = container.querySelector('.toggle-slider');
    const buttons = container.querySelectorAll('.toggle-btn');

  // إزالة التفعيل وتطبيقه على الزر المضغوط
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

  // عناصر الفورم في الصفحة
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    if (tabName === 'register') {
    // 1. تحريك السلايدر الأسود ناحية اليمين (Register)
        slider.style.transform = 'translateX(100%)';
    
    // 2. إخفاء دخول وإظهار تسجيل جديد
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    } else {
    // 1. إرجاع السلايدر الأسود لـ Login
        slider.style.transform = 'translateX(0)';
    
    // 2. إظهار دخول وإخفاء تسجيل جديد
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        }
}

const lanternButtons = document.querySelectorAll('.dev, .toggle-container');

lanternButtons.forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        button.style.setProperty('--x', `${x}px`);
        button.style.setProperty('--y', `${y}px`);
    });
});