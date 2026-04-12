/**
 * ORVEXA STUDIO - Core Engine
 * Handcrafted for High-Performance & Security
 */

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 1. GLOBAL STATE & DEVICE DETECTION
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
window.Orvexa = window.Orvexa || {};

// 2. ELITE LOADER & AOS INITIALIZATION
const initExperience = () => {
    const loader = document.getElementById('main-loader');
    
    // Simulate luxury loading time
    setTimeout(() => {
        if (loader) {
            loader.style.opacity = '0';
            // Wait for transition, then remove from DOM
            setTimeout(() => {
                loader.style.display = 'none';
                document.body.style.overflow = 'visible';
            }, 800);
        }

        // Trigger AOS (Animate on Scroll)
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 1200,
                easing: 'cubic-bezier(0.19, 1, 0.22, 1)',
                once: true,
                offset: 100
            });
        }
    }, 1200);
};

window.addEventListener('DOMContentLoaded', initExperience);

// 3. GPU-ACCELERATED CURSOR ENGINE (Desktop Only)
const initCursor = () => {
    if (isTouchDevice) return; // Exit if mobile

    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    
    let mouse = { x: -100, y: -100 }; // Current mouse position
    let pos = { x: -100, y: -100 };   // Lagging follower position
    const speed = 0.15; // Smoothness factor

    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        
        // Inner dot: Instant movement using translate3d (GPU)
        cursor.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`;
    });

    // RequestAnimationFrame for smooth 60fps movement
    const render = () => {
        pos.x += (mouse.x - pos.x) * speed;
        pos.y += (mouse.y - pos.y) * speed;
        
        follower.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
        requestAnimationFrame(render);
    };
    render();

    // Interaction states
    const activeLinks = document.querySelectorAll('a, button, .magnetic');
    activeLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            follower.style.width = '80px';
            follower.style.height = '80px';
            follower.style.borderColor = 'rgba(212, 175, 55, 0.5)';
            follower.style.backgroundColor = 'rgba(212, 175, 55, 0.05)';
        });
        link.addEventListener('mouseleave', () => {
            follower.style.width = '40px';
            follower.style.height = '40px';
            follower.style.borderColor = 'rgba(212, 175, 55, 0.15)';
            follower.style.backgroundColor = 'transparent';
        });
    });
};
initCursor();

// 4. MAGNETIC POWER LOGIC
const initMagneticElements = () => {
    const magneticElements = document.querySelectorAll('.magnetic');
    
    magneticElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            // Calculate distance from center (move 30% of distance)
            const moveX = (e.clientX - centerX) * 0.3;
            const moveY = (e.clientY - centerY) * 0.3;
            
            el.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
        });

        el.addEventListener('mouseleave', () => {
            el.style.transform = `translate3d(0, 0, 0)`;
        });
    });
};
initMagneticElements();

// 5. NAV SCROLL ADAPTATION
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 80) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// 6. BRAND PROTECTION & CONTEXT
document.addEventListener('contextmenu', e => e.preventDefault()); // Anti-theft

console.log("ORVEXA Engine Build 2.0: Locked & Operational.");
