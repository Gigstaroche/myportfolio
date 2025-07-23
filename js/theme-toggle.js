// Theme Toggle Functionality
class ThemeToggle {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        // Apply saved theme on page load
        this.applyTheme(this.theme);
        
        // Create toggle button
        this.createToggleButton();
        
        // Add event listeners
        this.addEventListeners();
    }

    createToggleButton() {
        // Check if toggle button already exists
        if (document.querySelector('.theme-toggle')) {
            return;
        }

        const toggleButton = document.createElement('button');
        toggleButton.className = 'theme-toggle';
        toggleButton.setAttribute('aria-label', 'Toggle dark/light mode');
        toggleButton.innerHTML = `
            <i class="theme-toggle-icon fas fa-${this.theme === 'dark' ? 'sun' : 'moon'}"></i>
            <span class="theme-toggle-text">${this.theme === 'dark' ? 'Light' : 'Dark'}</span>
        `;
        
        document.body.appendChild(toggleButton);
    }

    addEventListeners() {
        document.addEventListener('click', (e) => {
            if (e.target.closest('.theme-toggle')) {
                this.toggleTheme();
            }
        });

        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                this.theme = e.matches ? 'dark' : 'light';
                this.applyTheme(this.theme);
                this.updateToggleButton();
            }
        });
    }

    toggleTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        this.applyTheme(this.theme);
        this.updateToggleButton();
        localStorage.setItem('theme', this.theme);
        
        // Add animation effect
        this.addToggleAnimation();
    }

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        
        // Update meta theme-color for mobile browsers
        let metaThemeColor = document.querySelector('meta[name="theme-color"]');
        if (!metaThemeColor) {
            metaThemeColor = document.createElement('meta');
            metaThemeColor.setAttribute('name', 'theme-color');
            document.head.appendChild(metaThemeColor);
        }
        metaThemeColor.setAttribute('content', theme === 'dark' ? '#1a1a1a' : '#ffffff');
    }

    updateToggleButton() {
        const toggleButton = document.querySelector('.theme-toggle');
        const icon = toggleButton.querySelector('.theme-toggle-icon');
        const text = toggleButton.querySelector('.theme-toggle-text');
        
        if (icon && text) {
            icon.className = `theme-toggle-icon fas fa-${this.theme === 'dark' ? 'sun' : 'moon'}`;
            text.textContent = this.theme === 'dark' ? 'Light' : 'Dark';
        }
    }

    addToggleAnimation() {
        const toggleButton = document.querySelector('.theme-toggle');
        toggleButton.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            toggleButton.style.transform = 'scale(1)';
        }, 150);
    }

    // Auto-detect system preference if no saved preference
    detectSystemTheme() {
        if (!localStorage.getItem('theme')) {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            this.theme = prefersDark ? 'dark' : 'light';
            this.applyTheme(this.theme);
            this.updateToggleButton();
        }
    }
}

// Initialize theme toggle when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = new ThemeToggle();
    
    // Detect system theme preference
    themeToggle.detectSystemTheme();
});

// Initialize immediately if DOM is already loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        const themeToggle = new ThemeToggle();
        themeToggle.detectSystemTheme();
    });
} else {
    const themeToggle = new ThemeToggle();
    themeToggle.detectSystemTheme();
}
