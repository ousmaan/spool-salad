// ===================================
// LCD BANNER DISPLAY APP
// ===================================

const { createApp } = Vue;

createApp({
    data() {
        return {
            settings: {
                shopName: 'Spool',
                shopNameAr: 'سبول',
                tagline: 'For all that the fields produce',
                taglineAr: 'لكل ما تنتجه الحقول',
                language: 'ar',
                primaryColor: '#2d5016',
                accentColor: '#d4af37',
                slideInterval: 8000,
                transitionDuration: 1000,
                autoRefreshInterval: 60000,
                currency: 'SAR'
            },
            products: [],
            activeSlides: [],
            currentSlideIndex: 0,
            currentSlide: null,
            isConnected: true,
            progressWidth: 0,
            transitionType: 'fade',
            intervalId: null,
            progressIntervalId: null,
            refreshIntervalId: null,
            imageLoaded: false,
            imageCache: {}
        };
    },

    computed: {
        lang() {
            return this.settings.language;
        }
    },

    mounted() {
        console.log('🎬 LCD Banner Display Starting...');
        this.loadData();
        this.setupAutoRefresh();
        this.setupFullscreen();
        this.preventScreenSleep();
    },

    methods: {
        // ===================================
        // DATA LOADING
        // ===================================
        
        async loadData() {
            try {
                console.log('📦 Loading product data...');
                const timestamp = new Date().getTime();
                const response = await fetch(`data/products.json?t=${timestamp}`);
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const data = await response.json();
                
                // Update settings
                this.settings = { ...this.settings, ...data.settings };
                
                // Update CSS variables
                document.documentElement.style.setProperty('--primary-color', this.settings.primaryColor);
                document.documentElement.style.setProperty('--accent-color', this.settings.accentColor);
                
                // Update language
                document.documentElement.setAttribute('lang', this.settings.language);
                
                // Filter and sort active products
                this.products = data.products
                    .filter(p => p.active)
                    .sort((a, b) => a.displayOrder - b.displayOrder);
                
                this.activeSlides = [...this.products];
                
                console.log(`✅ Loaded ${this.activeSlides.length} active slides`);
                
                // Preload all images
                this.activeSlides.forEach(slide => {
                    const img = new Image();
                    img.src = slide.imageUrl;
                });
                
                // Start carousel if not already running
                if (!this.currentSlide && this.activeSlides.length > 0) {
                    this.currentSlide = this.activeSlides[0];
                    this.preloadImage(this.currentSlide.imageUrl);
                    this.startCarousel();
                }
                
                this.isConnected = true;
                
            } catch (error) {
                console.error('❌ Error loading data:', error);
                this.isConnected = false;
                
                // If we have no slides yet, show error
                if (this.activeSlides.length === 0) {
                    this.showErrorSlide();
                }
            }
        },

        // ===================================
        // CAROUSEL CONTROL
        // ===================================
        
        startCarousel() {
            console.log('▶️ Starting carousel...');
            
            // Clear any existing intervals
            this.stopCarousel();
            
            // Start slide interval
            this.intervalId = setInterval(() => {
                this.nextSlide();
            }, this.settings.slideInterval);
            
            // Start progress bar animation
            this.startProgress();
        },

        stopCarousel() {
            if (this.intervalId) {
                clearInterval(this.intervalId);
                this.intervalId = null;
            }
            if (this.progressIntervalId) {
                clearInterval(this.progressIntervalId);
                this.progressIntervalId = null;
            }
        },

        nextSlide() {
            if (this.activeSlides.length === 0) return;
            
            this.currentSlideIndex = (this.currentSlideIndex + 1) % this.activeSlides.length;
            this.currentSlide = this.activeSlides[this.currentSlideIndex];
            
            console.log(`📄 Slide ${this.currentSlideIndex + 1}/${this.activeSlides.length}: ${this.currentSlide.name}`);
            
            // Preload image
            this.preloadImage(this.currentSlide.imageUrl);
            
            // Restart progress bar
            this.startProgress();
        },

        // ===================================
        // IMAGE PRELOADING
        // ===================================
        
        preloadImage(url) {
            // Always set loaded to true for instant display
            this.imageLoaded = true;
            
            // Cache for next time
            if (!this.imageCache[url]) {
                const img = new Image();
                img.onload = () => {
                    this.imageCache[url] = true;
                };
                img.src = url;
            }
        },

        onImageLoad() {
            this.imageLoaded = true;
        },

        // ===================================
        // PROGRESS BAR
        // ===================================
        
        startProgress() {
            // Clear existing progress interval
            if (this.progressIntervalId) {
                clearInterval(this.progressIntervalId);
            }
            
            // Reset progress
            this.progressWidth = 0;
            
            // Calculate step for smooth animation
            const steps = this.settings.slideInterval / 100; // Update every 100ms
            const increment = 100 / steps;
            
            this.progressIntervalId = setInterval(() => {
                this.progressWidth += increment;
                if (this.progressWidth >= 100) {
                    this.progressWidth = 100;
                }
            }, 100);
        },

        // ===================================
        // AUTO REFRESH DATA
        // ===================================
        
        setupAutoRefresh() {
            console.log(`🔄 Auto-refresh enabled (every ${this.settings.autoRefreshInterval / 1000}s)`);
            
            this.refreshIntervalId = setInterval(() => {
                console.log('🔄 Refreshing data...');
                this.loadData();
            }, this.settings.autoRefreshInterval);
        },

        // ===================================
        // FULLSCREEN MODE
        // ===================================
        
        setupFullscreen() {
            // Prompt for fullscreen on first click
            document.addEventListener('click', () => {
                this.requestFullscreen();
            }, { once: true });

            // Also try on keypress (F11 alternative)
            document.addEventListener('keydown', (e) => {
                if (e.key === 'f' || e.key === 'F') {
                    this.requestFullscreen();
                }
            });
        },

        requestFullscreen() {
            const elem = document.documentElement;
            if (elem.requestFullscreen) {
                elem.requestFullscreen().catch(err => {
                    console.log('Fullscreen request failed:', err);
                });
            } else if (elem.webkitRequestFullscreen) {
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) {
                elem.msRequestFullscreen();
            }
        },

        // ===================================
        // PREVENT SCREEN SLEEP
        // ===================================
        
        preventScreenSleep() {
            // Request wake lock if supported
            if ('wakeLock' in navigator) {
                navigator.wakeLock.request('screen').then(wakeLock => {
                    console.log('🔓 Screen wake lock activated');
                }).catch(err => {
                    console.log('Wake lock failed:', err);
                });
            }

            // Fallback: Invisible video trick for older browsers
            const video = document.createElement('video');
            video.setAttribute('loop', '');
            video.setAttribute('muted', '');
            video.style.display = 'none';
            
            // Create a minimal video data URL
            video.src = 'data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAACKBtZGF0AAAC';
            
            document.body.appendChild(video);
            video.play().catch(() => {});
        },

        // ===================================
        // ERROR HANDLING
        // ===================================
        
        showErrorSlide() {
            this.currentSlide = {
                id: 'error',
                type: 'announcement',
                name: 'Menu Temporarily Unavailable',
                nameAr: 'القائمة غير متاحة مؤقتاً',
                subtitle: 'Please check back shortly',
                subtitleAr: 'يرجى المحاولة لاحقاً',
                imageUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%232d5016" width="800" height="600"/%3E%3C/svg%3E',
                accentColor: '#f44336',
                badge: 'OFFLINE',
                badgeAr: 'غير متصل'
            };
        }
    },

    beforeUnmount() {
        // Cleanup intervals
        this.stopCarousel();
        if (this.refreshIntervalId) {
            clearInterval(this.refreshIntervalId);
        }
    }
}).mount('#app');

// ===================================
// KEYBOARD SHORTCUTS (for testing)
// ===================================

document.addEventListener('keydown', (e) => {
    // Press 'R' to manually refresh
    if (e.key === 'r' || e.key === 'R') {
        console.log('🔄 Manual refresh triggered');
        location.reload();
    }
    
    // Press 'C' to open console (Ctrl+Shift+J alternative reminder)
    if (e.key === 'c' || e.key === 'C') {
        console.log('💡 Press Ctrl+Shift+J (Windows) or Cmd+Option+J (Mac) to open console');
    }
});

console.log('✅ Display app initialized');
console.log('💡 Press F to enter fullscreen');
console.log('💡 Press R to reload data');
