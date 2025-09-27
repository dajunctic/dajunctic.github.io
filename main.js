document.addEventListener("DOMContentLoaded", function() {
    // --- Translation Logic ---
    const setLanguage = (lang) => {
        document.documentElement.lang = lang;
        
        // Ensure translations object is available
        if (typeof translations !== 'undefined' && translations[lang]) {
            document.querySelectorAll('[data-translate-key]').forEach(element => {
                const key = element.getAttribute('data-translate-key');
                if (translations[lang][key]) {
                    if (element.placeholder) {
                        element.placeholder = translations[lang][key];
                    } else {
                        // Check if the element has child nodes (like an <i> icon)
                        if (element.children.length > 0 && element.querySelector('i')) {
                            // Only update the text content, preserving the icon
                            const iconHTML = element.querySelector('i').outerHTML;
                            element.innerHTML = iconHTML + ' ' + translations[lang][key];
                        } else {
                            element.innerHTML = translations[lang][key];
                        }
                    }
                }
            });
        }

        // Update active class on language buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
    };

    // Function to initialize scripts that depend on the header
    const initializeHeaderScripts = () => {
        // Hamburger menu
        const toggleBtn = document.querySelector('.toggle_btn');
        if (toggleBtn) {
            const toggleBtnIcon = document.querySelector('.toggle_btn i');
            const dropdownMenu = document.querySelector('.dropdown_menu');
            toggleBtn.onclick = function() {
                dropdownMenu.classList.toggle('open');
                const isOpen = dropdownMenu.classList.contains('open');
                toggleBtnIcon.className = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
            };
        }

        // --- Theme Toggle Logic ---
        const themeToggle = document.getElementById('theme-toggle');
        const themeToggleMobile = document.getElementById('theme-toggle-mobile');
        
        const applyTheme = (theme) => {
            document.body.classList.toggle('light-mode', theme === 'light');
            const iconClass = theme === 'light' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
            if (themeToggle) themeToggle.querySelector('i').className = iconClass;
            if (themeToggleMobile) themeToggleMobile.querySelector('i').className = iconClass;
            localStorage.setItem('theme', theme);
        };

        const toggleTheme = () => {
            const currentTheme = localStorage.getItem('theme') || 'dark';
            applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
        };

        if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
        if (themeToggleMobile) themeToggleMobile.addEventListener('click', toggleTheme);

        // Apply saved theme on initial load
        applyTheme(localStorage.getItem('theme') || 'dark');

        // Initialize click listeners for language buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                localStorage.setItem('language', btn.dataset.lang);
                location.reload();
            });
        });
    };

    // Function to initialize scripts that depend on the footer
    const initializeFooterScripts = () => {
        // --- Copyright Year Logic ---
        const copyrightYearSpan = document.getElementById('copyright-year');
        if (copyrightYearSpan) {
            const startYear = 2024;
            const currentYear = new Date().getFullYear();
            copyrightYearSpan.textContent = startYear === currentYear 
                ? startYear 
                : `${startYear} - ${currentYear}`;
        }
    };

    // Load Header and initialize its scripts
    fetch('/header.html')
        .then(res => res.text())
        .then(data => {
            document.querySelector('header-placeholder').innerHTML = data;
            initializeHeaderScripts();
            // Set language after header is loaded to translate it
            const savedLang = localStorage.getItem('language') || 'vi';
            setLanguage(savedLang);
        }).catch(error => console.error("Error loading header:", error));

    // Load Footer and initialize its scripts
    fetch('/footer.html')
        .then(res => res.text())
        .then(data => {
            document.querySelector('footer-placeholder').innerHTML = data;
            initializeFooterScripts();
        }).catch(error => console.error("Error loading footer:", error));
});