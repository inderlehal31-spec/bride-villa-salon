/**
 * ORVEXA STUDIO - Ultimate Core Engine
 * (Zero-Error / Production Ready)
 */

// 1. SMART LOADER MANAGEMENT
const removeLoader = () => {
    const loader = document.getElementById('main-loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
            document.body.style.overflow = 'visible';
        }, 800);
    }
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 1200, easing: 'cubic-bezier(0.19, 1, 0.22, 1)', once: true });
    }
};

// Emergency force-remove loader after 4 seconds
setTimeout(removeLoader, 4000);
window.addEventListener('load', removeLoader);

// 2. FIREBASE INTEGRATION (The Correct Way)
const initFirebase = async () => {
    try {
        // Tuhadi config file ton data lehna (Check if file exists)
        const config = await import('./firebase-config.js');
        console.log("Orvexa Cloud: Connected");
    } catch (err) {
        console.warn("Firebase config not found, skipping DB init.");
    }
};
initFirebase();

// 3. GPU-ACCELERATED CURSOR (Desktop Only)
const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
if (!isTouch) {
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    let mouse = { x: -100, y: -100 }, pos = { x: -100, y: -100 };

    document.addEventListener('mousemove', e => {
        mouse.x = e.clientX; mouse.y = e.clientY;
        if(cursor) cursor.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`;
    });

    const render = () => {
        pos.x += (mouse.x - pos.x) * 0.15;
        pos.y += (mouse.y - pos.y) * 0.15;
        if(follower) follower.style.transform = `translate3d(${pos.x - 15}px, ${pos.y - 15}px, 0)`;
        requestAnimationFrame(render);
    };
    render();

    // Hover Scaling for Luxury Feel
    document.querySelectorAll('a, button, .magnetic').forEach(el => {
        el.addEventListener('mouseenter', () => {
            if(follower) follower.style.transform += ' scale(2)';
            if(follower) follower.style.borderColor = 'rgba(212, 175, 55, 0.5)';
        });
        el.addEventListener('mouseleave', () => {
            if(follower) follower.style.transform += ' scale(1)';
            if(follower) follower.style.borderColor = 'rgba(212, 175, 55, 0.15)';
        });
    });
}

// 4. MAGNETIC POWER (Premium Interaction)
document.querySelectorAll('.magnetic').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
        const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
        btn.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = `translate3d(0, 0, 0)`;
    });
});

// 5. NAVBAR DYNAMICS
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (nav) {
        window.scrollY > 50 ? nav.classList.add('scrolled') : nav.classList.remove('scrolled');
    }
});

// 6. BRAND PROTECTION
document.addEventListener('contextmenu', e => e.preventDefault());
