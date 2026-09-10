// ===== НАВІГАЦІЯ МІЖ СТОРІНКАМИ =====
function goToPage(pageNum) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById('page' + pageNum).classList.add('active');
    window.scrollTo(0, 0);
}

// ===== СТВОРЕННЯ СЕРДЕЧОК НА ФОНІ - ВСІ СТОРІНКИ =====
function createHearts() {
    const container = document.getElementById('hearts');
    const hearts = ['💕', '💖', '💗', '💝', '💜', '❤️', '💘', '💞'];

    // Очищаємо старі сердечка
    container.innerHTML = '';

    // Створюємо 25 сердечок для гарного ефекту
    for (let i = 0; i < 25; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 15 + 's';
        heart.style.animationDuration = (12 + Math.random() * 8) + 's';
        heart.style.fontSize = (16 + Math.random() * 22) + 'px';
        container.appendChild(heart);
    }
}

// ===== СЛАЙДЕР =====
let currentSlide = 0;
const totalSlides = 6;
let autoSlideInterval;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    if (index >= totalSlides) currentSlide = 0;
    if (index < 0) currentSlide = totalSlides - 1;

    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
    resetAutoSlide();
}

function goToSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
    resetAutoSlide();
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        currentSlide++;
        showSlide(currentSlide);
    }, 4000);
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

// ===== ВИБІР ПЛАНУ =====
function selectPlan(card, planName) {
    document.querySelectorAll('.plan-card').forEach(c => {
        c.classList.remove('selected');
    });

    card.classList.add('selected');

    const selectedPlan = document.getElementById('selectedPlan');
    const planNameEl = document.getElementById('planName');

    planNameEl.textContent = planName;
    selectedPlan.style.display = 'block';

    createConfetti();
    createHeartBurst();
}

// ===== КОНФЕТІ =====
function createConfetti() {
    const colors = ['#ff6b9d', '#f8b500', '#c44569', '#ffffff', '#ff9ff3'];

    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confetti.style.zIndex = '9999';
        confetti.style.pointerEvents = 'none';
        document.body.appendChild(confetti);

        const animation = confetti.animate([
            { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
            { transform: `translateY(${window.innerHeight + 100}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
        ], {
            duration: 2000 + Math.random() * 2000,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });

        animation.onfinish = () => confetti.remove();
    }
}

// ===== ВИБУХ СЕРДЕЧОК ПРИ ВИБОРІ =====
function createHeartBurst() {
    const hearts = ['💕', '💖', '💗', '💝', '💜', '❤️'];
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.position = 'fixed';
        heart.style.left = centerX + 'px';
        heart.style.top = centerY + 'px';
        heart.style.fontSize = (20 + Math.random() * 20) + 'px';
        heart.style.zIndex = '9999';
        heart.style.pointerEvents = 'none';
        document.body.appendChild(heart);

        const angle = (Math.PI * 2 * i) / 15;
        const velocity = 150 + Math.random() * 150;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;

        const animation = heart.animate([
            { transform: 'translate(0, 0) scale(0)', opacity: 1 },
            { transform: `translate(${vx}px, ${vy}px) scale(1.5)`, opacity: 0 }
        ], {
            duration: 1000 + Math.random() * 500,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });

        animation.onfinish = () => heart.remove();
    }
}

// ===== ІНІЦІАЛІЗАЦІЯ =====
document.addEventListener('DOMContentLoaded', () => {
    createHearts();
    goToPage(1);
    startAutoSlide();

    // Свайп для мобільних
    let touchStartX = 0;
    let touchEndX = 0;
    const slider = document.querySelector('.slider-container');

    slider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    slider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                changeSlide(1);
            } else {
                changeSlide(-1);
            }
        }
    }
});
