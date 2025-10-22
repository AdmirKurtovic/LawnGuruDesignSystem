// LawnGuru Design System - JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    if (navToggle && sidebar) {
        navToggle.addEventListener('click', function() {
            sidebar.classList.toggle('open');
            
            // Update aria-expanded for accessibility
            const isExpanded = sidebar.classList.contains('open');
            navToggle.setAttribute('aria-expanded', isExpanded);
        });
    }

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 1024) {
            if (sidebar && sidebar.classList.contains('open')) {
                if (!sidebar.contains(event.target) && !navToggle.contains(event.target)) {
                    sidebar.classList.remove('open');
                    navToggle.setAttribute('aria-expanded', 'false');
                }
            }
        }
    });

    // Close sidebar on window resize to desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 1024 && sidebar) {
            sidebar.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Copy code functionality
    document.querySelectorAll('pre code').forEach(block => {
        const button = document.createElement('button');
        button.className = 'copy-button';
        button.textContent = 'Copy';
        button.setAttribute('aria-label', 'Copy code to clipboard');
        
        const pre = block.parentElement;
        pre.style.position = 'relative';
        pre.appendChild(button);
        
        button.addEventListener('click', async function() {
            try {
                await navigator.clipboard.writeText(block.textContent);
                button.textContent = 'Copied!';
                button.style.backgroundColor = 'var(--color-success)';
                
                setTimeout(() => {
                    button.textContent = 'Copy';
                    button.style.backgroundColor = '';
                }, 2000);
            } catch (err) {
                console.error('Failed to copy: ', err);
                button.textContent = 'Failed';
                setTimeout(() => {
                    button.textContent = 'Copy';
                }, 2000);
            }
        });
    });

    // Add copy button styles
    const style = document.createElement('style');
    style.textContent = `
        .copy-button {
            position: absolute;
            top: 8px;
            right: 8px;
            background-color: var(--color-gray-700);
            color: var(--color-white);
            border: none;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 12px;
            cursor: pointer;
            transition: background-color 150ms ease-out;
        }
        
        .copy-button:hover {
            background-color: var(--color-gray-600);
        }
    `;
    document.head.appendChild(style);

    // Interactive component examples
    initializeComponentExamples();
    
    // Search functionality (if search input exists)
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        initializeSearch(searchInput);
    }

    // Theme toggle (if theme toggle exists)
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        initializeThemeToggle(themeToggle);
    }
});

// Initialize interactive component examples
function initializeComponentExamples() {
    // Button examples
    const buttonExamples = document.querySelectorAll('.button-example');
    buttonExamples.forEach(example => {
        const buttons = example.querySelectorAll('.btn');
        buttons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Add click animation
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
                
                // Show feedback
                showToast('Button clicked!', 'success');
            });
        });
    });

    // Form examples
    const formExamples = document.querySelectorAll('.form-example');
    formExamples.forEach(form => {
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', function() {
                this.parentElement.classList.remove('focused');
            });
        });
    });

    // Card examples
    const cardExamples = document.querySelectorAll('.card-example');
    cardExamples.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
}

// Initialize search functionality
function initializeSearch(searchInput) {
    const searchResults = document.querySelector('.search-results');
    let searchTimeout;
    
    searchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        const query = this.value.trim();
        
        if (query.length < 2) {
            if (searchResults) {
                searchResults.style.display = 'none';
            }
            return;
        }
        
        searchTimeout = setTimeout(() => {
            performSearch(query);
        }, 300);
    });
    
    function performSearch(query) {
        // Simple search implementation
        const searchableElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, .nav-link');
        const results = [];
        
        searchableElements.forEach(element => {
            const text = element.textContent.toLowerCase();
            if (text.includes(query.toLowerCase())) {
                results.push({
                    element: element,
                    text: element.textContent,
                    type: element.tagName.toLowerCase()
                });
            }
        });
        
        displaySearchResults(results, query);
    }
    
    function displaySearchResults(results, query) {
        if (!searchResults) return;
        
        if (results.length === 0) {
            searchResults.innerHTML = '<p>No results found for "' + query + '"</p>';
        } else {
            const html = results.slice(0, 10).map(result => {
                const link = result.element.closest('a') || result.element;
                const href = link.href || '#' + result.element.id;
                
                return `
                    <div class="search-result">
                        <a href="${href}" class="search-result-link">
                            <span class="search-result-type">${result.type}</span>
                            <span class="search-result-text">${highlightText(result.text, query)}</span>
                        </a>
                    </div>
                `;
            }).join('');
            
            searchResults.innerHTML = html;
        }
        
        searchResults.style.display = 'block';
    }
    
    function highlightText(text, query) {
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    }
}

// Initialize theme toggle
function initializeThemeToggle(themeToggle) {
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Update toggle button text/icon
        this.textContent = newTheme === 'light' ? '🌙' : '☀️';
    });
}

// Toast notification system
function showToast(message, type = 'info', duration = 3000) {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    
    // Add toast styles
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: var(--color-white);
        color: var(--color-gray-900);
        padding: 12px 16px;
        border-radius: 8px;
        box-shadow: var(--shadow-lg);
        border-left: 4px solid var(--color-primary-500);
        z-index: 9999;
        transform: translateX(100%);
        transition: transform 250ms ease-out;
    `;
    
    if (type === 'success') {
        toast.style.borderLeftColor = 'var(--color-success)';
    } else if (type === 'error') {
        toast.style.borderLeftColor = 'var(--color-error)';
    } else if (type === 'warning') {
        toast.style.borderLeftColor = 'var(--color-warning)';
    }
    
    document.body.appendChild(toast);
    
    // Animate in
    setTimeout(() => {
        toast.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after duration
    setTimeout(() => {
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 250);
    }, duration);
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    // ESC key closes mobile menu
    if (e.key === 'Escape') {
        const sidebar = document.querySelector('.sidebar');
        const navToggle = document.querySelector('.nav-toggle');
        
        if (sidebar && sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    }
    
    // Ctrl/Cmd + K opens search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.querySelector('.search-input');
        if (searchInput) {
            searchInput.focus();
        }
    }
});

// Performance optimization: Lazy load images
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading when DOM is ready
if ('IntersectionObserver' in window) {
    initializeLazyLoading();
}

// Export functions for use in other scripts
window.LawnGuruDS = {
    showToast,
    debounce,
    throttle
};
