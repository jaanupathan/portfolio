document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    const navMobileMenu = document.querySelectorAll('.nav__menu .menu');
    const themeColors = document.querySelectorAll('.themes span');

    const settingSection = document.querySelector('.settings__section');
    const themeMenuIcon = document.querySelector('.setting__icon');
    const darkLightIcon = document.querySelector('.dark__light__icon');

    const scrollUp = document.querySelector('.scroll__up');
    const scrollUpArrow = document.querySelector('.scroll__up span');

    // initialize theme color swatches
    if (themeColors && themeColors.length) {
        const initial = ['salmon', 'orange', 'lightblue', 'navy', 'pink'];
        themeColors.forEach((el, i) => {
            el.style.backgroundColor = initial[i] || getComputedStyle(el).backgroundColor;
            el.addEventListener('click', () => {
                themeColors.forEach(s => s.classList.remove('show'));
                el.classList.add('show');
                const bg = getComputedStyle(el).backgroundColor;
                document.documentElement.style.setProperty('--name-color', bg);
            });
        });
    }

    // mobile nav toggle (accessible)
    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            const expanded = hamburger.getAttribute('aria-expanded') === 'true';
            hamburger.setAttribute('aria-expanded', String(!expanded));
            nav.classList.toggle('show');
            hamburger.classList.toggle('show');
            if (!expanded) window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // close mobile nav when a menu item is chosen
    if (navMobileMenu && navMobileMenu.length && nav) {
        navMobileMenu.forEach(li => li.addEventListener('click', () => nav.classList.remove('show')));
    }

    // theme accordion open/auto-close
    if (themeMenuIcon && settingSection) {
        themeMenuIcon.addEventListener('click', () => {
            settingSection.classList.toggle('show');
            setTimeout(() => settingSection.classList.remove('show'), 5000);
        });
    }

    // dark / light mode toggle
    if (darkLightIcon) darkLightIcon.addEventListener('click', () => document.body.classList.toggle('light'));

    // scroll up button
    if (scrollUp) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                scrollUp.classList.add('show');
                if (scrollUpArrow) scrollUpArrow.style.top = '-30px';
            } else {
                scrollUp.classList.remove('show');
                if (scrollUpArrow) scrollUpArrow.style.top = '-1000px';
            }
        });
        scrollUp.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    // rotating/typing-like headline (safe selection)
    const rotatingElement = document.querySelector('.home__sub__headline .name');
    if (rotatingElement) {
        const words = ['Web Developer', 'Java(DSA)', 'UI/UX Designer', 'Frontend Developer'];
        let idx = 0;
        rotatingElement.textContent = words[0];
        setInterval(() => {
            rotatingElement.classList.add('fade-out');
            setTimeout(() => {
                idx = (idx + 1) % words.length;
                rotatingElement.textContent = words[idx];
                rotatingElement.classList.remove('fade-out');
            }, 500);
        }, 2000);
    }
});
