// Derma Art Clinic Proposal - Interactive Features
// Maysan IT Solutions

class ProposalApp {
    constructor() {
        this.currentLanguage = 'en';
        this.isLoaded = false;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.handleLoading();
        this.initializeAnimations();
        this.setupNavigation();
        this.trackAnalytics();
    }

    // Setup all event listeners
    setupEventListeners() {
        // Language toggle
        document.getElementById('lang-toggle')?.addEventListener('click', () => {
            this.toggleLanguage();
        });

        // Contact form submission
        document.getElementById('contact-form')?.addEventListener('submit', (e) => {
            this.handleContactSubmission(e);
        });

        // Navigation smooth scrolling
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                this.handleNavigation(e);
            });
        });

        // Package selection buttons
        document.querySelectorAll('[data-package]').forEach(button => {
            button.addEventListener('click', (e) => {
                this.handlePackageSelection(e);
            });
        });

        // Intersection Observer for animations
        this.setupIntersectionObserver();

        // Window events
        window.addEventListener('scroll', () => this.handleScroll());
        window.addEventListener('resize', () => this.handleResize());
    }

    // Handle loading screen
    handleLoading() {
        setTimeout(() => {
            const loadingScreen = document.getElementById('loading-screen');
            const mainContent = document.getElementById('main-content');
            
            if (loadingScreen) {
                loadingScreen.style.opacity = '0';
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                }, 500);
            }
            
            if (mainContent) {
                mainContent.style.opacity = '1';
            }
            
            this.isLoaded = true;
            this.animateOnLoad();
        }, 2000);
    }

    // Language toggle functionality
    toggleLanguage() {
        const html = document.documentElement;
        const langText = document.getElementById('lang-text');
        
        if (this.currentLanguage === 'en') {
            this.currentLanguage = 'ar';
            html.setAttribute('dir', 'rtl');
            html.setAttribute('lang', 'ar');
            if (langText) langText.textContent = 'English';
            this.loadArabicContent();
        } else {
            this.currentLanguage = 'en';
            html.setAttribute('dir', 'ltr');
            html.setAttribute('lang', 'en');
            if (langText) langText.textContent = 'العربية';
            this.loadEnglishContent();
        }
        
        this.showNotification(`Language changed to ${this.currentLanguage === 'ar' ? 'Arabic' : 'English'}`, 'success');
    }

    // Load Arabic content
    loadArabicContent() {
        const translations = {
            'Transform Your Clinic': 'حوّل عيادتك',
            'Into Digital Excellence': 'إلى التميز الرقمي',
            'Complete digital ecosystem for Dr. Maart Clinic': 'نظام رقمي متكامل لعيادة د. مارت',
            'Overview': 'نظرة عامة',
            'Modules': 'الوحدات',
            'Pricing': 'الأسعار',
            'Timeline': 'الجدول الزمني',
            'Our Team': 'فريقنا',
            'Contact': 'اتصل بنا'
        };
        
        // Apply translations (simplified for demo)
        Object.keys(translations).forEach(english => {
            const elements = document.querySelectorAll(`[data-translate="${english}"]`);
            elements.forEach(el => {
                el.textContent = translations[english];
            });
        });
    }

    // Load English content (default)
    loadEnglishContent() {
        // Reload page or reset to English content
        // For demo purposes, we'll just show notification
        console.log('Loading English content...');
    }

    // Handle navigation
    handleNavigation(e) {
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');
        const targetId = href?.substring(1);
        
        if (targetId) {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 100; // Account for sticky header
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                this.updateActiveNavigation(targetId);
            }
        }
    }

    // Update active navigation item
    updateActiveNavigation(activeId) {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        
        const activeLink = document.querySelector(`[href="#${activeId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    // Handle contact form submission
    async handleContactSubmission(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        
        // Show loading state
        const submitButton = e.target.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
        submitButton.disabled = true;
        
        try {
            const response = await axios.post('/api/contact', data);
            
            if (response.data.success) {
                this.showNotification('Thank you! We will contact you within 24 hours.', 'success');
                e.target.reset();
                this.trackEvent('contact_form_submitted', data);
            }
        } catch (error) {
            console.error('Contact form error:', error);
            this.showNotification('There was an error sending your message. Please try again.', 'error');
        } finally {
            // Restore button state
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
        }
    }

    // Handle package selection
    handlePackageSelection(e) {
        const packageType = e.target.getAttribute('data-package');
        const packageName = e.target.closest('.pricing-card')?.querySelector('h4')?.textContent || 'Unknown Package';
        
        this.showNotification(`${packageName} selected! Scroll down to contact us.`, 'info');
        
        // Scroll to contact section
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            setTimeout(() => {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }, 1000);
        }
        
        // Pre-fill contact form
        const packageSelect = document.querySelector('select[data-package-select]');
        if (packageSelect) {
            packageSelect.value = packageName;
        }
        
        this.trackEvent('package_selected', { package: packageName, type: packageType });
    }

    // Setup intersection observer for animations
    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    
                    // Update navigation
                    if (entry.target.id) {
                        this.updateActiveNavigation(entry.target.id);
                    }
                }
            });
        }, observerOptions);
        
        // Observe all sections
        document.querySelectorAll('section[id]').forEach(section => {
            observer.observe(section);
        });
        
        // Observe module cards for staggered animation
        document.querySelectorAll('.module-card').forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = `all 0.6s ease ${index * 0.1}s`;
            observer.observe(card);
        });
    }

    // Initialize animations
    initializeAnimations() {
        // Add animation classes to elements
        const animatedElements = document.querySelectorAll('.animate-fade-in');
        animatedElements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = `all 0.6s ease ${index * 0.2}s`;
        });
    }

    // Animate elements on load
    animateOnLoad() {
        const animatedElements = document.querySelectorAll('.animate-fade-in');
        animatedElements.forEach(element => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        });
    }

    // Handle scroll events
    handleScroll() {
        const scrollY = window.scrollY;
        
        // Header shadow effect
        const header = document.querySelector('header');
        if (header) {
            if (scrollY > 50) {
                header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
            } else {
                header.style.boxShadow = '';
            }
        }
        
        // Parallax effect for hero section
        const hero = document.querySelector('#overview');
        if (hero && scrollY < hero.offsetHeight) {
            hero.style.transform = `translateY(${scrollY * 0.5}px)`;
        }
    }

    // Handle window resize
    handleResize() {
        // Adjust layouts for different screen sizes
        const isMobile = window.innerWidth < 768;
        
        if (isMobile) {
            // Mobile-specific adjustments
            document.querySelectorAll('.module-card').forEach(card => {
                card.style.marginBottom = '1rem';
            });
        }
    }

    // Setup smooth navigation
    setupNavigation() {
        // Auto-highlight navigation based on scroll position
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        const observerOptions = {
            threshold: 0.3,
            rootMargin: '-100px 0px -66%'
        };
        
        const navObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${id}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, observerOptions);
        
        sections.forEach(section => navObserver.observe(section));
    }

    // Show notification
    showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notification => notification.remove());
        
        const notification = document.createElement('div');
        notification.className = `notification fixed top-24 right-4 z-50 p-4 rounded-lg text-white max-w-sm`;
        
        switch (type) {
            case 'success':
                notification.classList.add('bg-green-600');
                break;
            case 'error':
                notification.classList.add('bg-red-600');
                break;
            case 'warning':
                notification.classList.add('bg-yellow-600');
                break;
            default:
                notification.classList.add('bg-blue-600');
        }
        
        notification.innerHTML = `
            <div class="flex items-center justify-between">
                <span>${message}</span>
                <button class="ml-4 text-white hover:text-gray-200" onclick="this.parentElement.parentElement.remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 5000);
    }

    // Track analytics events
    trackEvent(eventName, data = {}) {
        const eventData = {
            event: eventName,
            timestamp: new Date().toISOString(),
            page: window.location.pathname,
            language: this.currentLanguage,
            userAgent: navigator.userAgent,
            ...data
        };
        
        console.log('Analytics Event:', eventData);
        
        // In production, send to analytics service
        // axios.post('/api/analytics', eventData);
    }

    // Track page analytics
    trackAnalytics() {
        // Track page load
        this.trackEvent('page_loaded', {
            referrer: document.referrer,
            loadTime: performance.now()
        });
        
        // Track scroll depth
        let maxScroll = 0;
        window.addEventListener('scroll', () => {
            const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
            if (scrollPercent > maxScroll) {
                maxScroll = scrollPercent;
                
                // Track milestone scrolls
                if ([25, 50, 75, 90].includes(scrollPercent)) {
                    this.trackEvent('scroll_depth', { percent: scrollPercent });
                }
            }
        });
        
        // Track time on page
        let timeOnPage = 0;
        setInterval(() => {
            timeOnPage += 10;
            if (timeOnPage % 30 === 0) { // Every 30 seconds
                this.trackEvent('time_on_page', { seconds: timeOnPage });
            }
        }, 10000);
    }

    // Get proposal statistics
    async getProposalStats() {
        try {
            const response = await axios.get('/api/proposal-stats');
            return response.data;
        } catch (error) {
            console.error('Error fetching proposal stats:', error);
            return null;
        }
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.proposalApp = new ProposalApp();
});

// Additional utility functions

// Format currency
function formatCurrency(amount, currency = 'SAR') {
    return new Intl.NumberFormat('en-SA', {
        style: 'currency',
        currency: 'SAR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount).replace('SAR', currency);
}

// Format date
function formatDate(date, locale = 'en') {
    return new Intl.DateTimeFormat(locale === 'ar' ? 'ar-SA' : 'en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(new Date(date));
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Smooth scroll to element
function scrollToElement(elementId, offset = 100) {
    const element = document.getElementById(elementId);
    if (element) {
        const offsetTop = element.offsetTop - offset;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Print proposal
function printProposal() {
    window.print();
}

// Share proposal
async function shareProposal() {
    if (navigator.share) {
        try {
            await navigator.share({
                title: 'Derma Art Clinic - Digital Transformation Proposal',
                text: 'Check out this comprehensive clinic management system proposal',
                url: window.location.href
            });
        } catch (error) {
            console.log('Error sharing:', error);
        }
    } else {
        // Fallback to copying URL
        navigator.clipboard.writeText(window.location.href);
        if (window.proposalApp) {
            window.proposalApp.showNotification('Proposal URL copied to clipboard!', 'success');
        }
    }
}

// Export proposal data
function exportProposalData() {
    const proposalData = {
        client: 'Derma Art Clinic',
        provider: 'Maysan IT Solutions',
        packages: [
            {
                name: 'Core Digital Package',
                price: 25000,
                currency: 'SAR',
                includes: ['Website', 'CRM', 'Clinic Management']
            },
            {
                name: 'Inventory Add-on',
                price: { min: 15000, max: 20000 },
                currency: 'SAR',
                includes: ['Inventory Management', 'Billing Integration']
            }
        ],
        timeline: '8-16 weeks',
        contact: {
            name: 'Eng. Ahmed Abu Hashem',
            company: 'Maysan IT Solutions',
            email: 'ahmed@maysan-it.com'
        },
        generated: new Date().toISOString()
    };
    
    const dataStr = JSON.stringify(proposalData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'derma-art-clinic-proposal.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
}

console.log('🚀 Derma Art Clinic Proposal System Loaded - Maysan IT Solutions');