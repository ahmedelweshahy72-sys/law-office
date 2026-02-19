/**
 * مكتب المستشار حسين الوشاحي
 * Vanilla JavaScript - Professional Law Office Website
 */

(function () {
    'use strict';

    var navToggle = document.querySelector('.nav-toggle');
    var navList = document.querySelector('.nav-list');
    var navLinks = document.querySelectorAll('.nav-list a');

    // Mobile menu toggle
    if (navToggle && navList) {
        navToggle.addEventListener('click', function () {
            navList.classList.toggle('is-open');
            navToggle.setAttribute('aria-expanded', navList.classList.contains('is-open'));
        });

        // Close menu when clicking a link (mobile)
        navLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                navList.classList.remove('is-open');
            });
        });
    }

    // Smooth scroll for anchor links (fallback for older browsers)
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;
            var target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
})();
