// Modern Portfolio Enhancements
class ModernPortfolio {
    constructor() {
        this.init();
    }

    init() {
        this.initScrollEffects();
        this.initIntersectionObserver();
        this.initParallaxEffects();
        this.initSmoothScrolling();
        this.initPreloader();
        this.initNavbarEffects();
        this.initTypingEffect();
        this.initParticleBackground();
    }

    // Enhanced scroll effects
    initScrollEffects() {
        window.addEventListener('scroll', () => {
            this.updateNavbar();
            this.updateProgressBar();
        });
    }

    // Update navbar on scroll
    updateNavbar() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }
    }

    // Update scroll progress bar
    updateProgressBar() {
        const progressBar = document.querySelector('.progress-wrap');
        if (progressBar) {
            const scrolled = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            const circle = progressBar.querySelector('.progress-circle path');
            if (circle) {
                const length = circle.getTotalLength();
                circle.style.strokeDasharray = length;
                circle.style.strokeDashoffset = length - (length * scrolled) / 100;
            }
        }
    }

    // Intersection Observer for animations
    initIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    
                    // Trigger skill progress animations
                    if (entry.target.classList.contains('skill-progress')) {
                        this.animateSkillProgress(entry.target);
                    }
                }
            });
        }, observerOptions);

        // Observe elements
        const elementsToAnimate = document.querySelectorAll(
            '.glass-card, .item, .skill-progress, .profile-img, .resume .item'
        );
        elementsToAnimate.forEach(el => observer.observe(el));
    }

    // Animate skill progress bars
    animateSkillProgress(progressBar) {
        const progress = progressBar.querySelector('.progres');
        const value = progress?.getAttribute('data-value');
        
        if (progress && value) {
            progress.style.width = '0%';
            setTimeout(() => {
                progress.style.transition = 'width 2s ease-in-out';
                progress.style.width = value;
            }, 100);
        }
    }

    // Parallax effects
    initParallaxEffects() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.parallax-element');
            
            parallaxElements.forEach(element => {
                const speed = element.dataset.speed || 0.5;
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        });
    }

    // Smooth scrolling for anchor links
    initSmoothScrolling() {
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
    }

    // Enhanced preloader
    initPreloader() {
        const loader = document.querySelector('.loader-wrap');
        
        window.addEventListener('load', () => {
            setTimeout(() => {
                if (loader) {
                    loader.style.opacity = '0';
                    loader.style.visibility = 'hidden';
                    setTimeout(() => {
                        loader.style.display = 'none';
                        document.body.classList.add('loaded');
                    }, 500);
                }
            }, 1000);
        });

        // Animate loader text
        const loadText = document.querySelectorAll('.load-text span');
        loadText.forEach((span, index) => {
            span.style.animationDelay = `${index * 0.1}s`;
            span.style.animation = 'bounce 1s infinite alternate';
        });
    }

    // Enhanced navbar effects
    initNavbarEffects() {
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px)';
            });
            
            link.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
    }

    // Typing effect for hero text
    initTypingEffect() {
        const heroText = document.querySelector('.hero-typing-text');
        if (heroText) {
            const text = heroText.textContent;
            heroText.textContent = '';
            
            let i = 0;
            const typing = setInterval(() => {
                if (i < text.length) {
                    heroText.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typing);
                    heroText.classList.add('typing-complete');
                }
            }, 100);
        }
    }

    // Particle background effect
    initParticleBackground() {
        const canvas = document.createElement('canvas');
        canvas.id = 'particle-canvas';
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = '-1';
        canvas.style.opacity = '0.5';
        
        document.body.appendChild(canvas);
        
        const ctx = canvas.getContext('2d');
        let particles = [];
        
        // Resize canvas
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        
        // Create particles
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2 + 1;
                this.opacity = Math.random() * 0.5 + 0.2;
            }
            
            update() {
                this.x += this.vx;
                this.y += this.vy;
                
                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
            }
            
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(102, 126, 234, ${this.opacity})`;
                ctx.fill();
            }
        }
        
        // Initialize particles
        for (let i = 0; i < 50; i++) {
            particles.push(new Particle());
        }
        
        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });
            
            requestAnimationFrame(animate);
        };
        
        animate();
    }

    // Add modern button effects
    static addButtonEffects() {
        document.querySelectorAll('.butn, .modern-btn').forEach(button => {
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px) scale(1.05)';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
            
            button.addEventListener('click', function(e) {
                // Ripple effect
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    background: rgba(255, 255, 255, 0.6);
                    border-radius: 50%;
                    transform: scale(0);
                    animation: ripple 0.6s linear;
                    pointer-events: none;
                `;
                
                this.style.position = 'relative';
                this.style.overflow = 'hidden';
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    }

    // Add tilt effects to cards
    static addTiltEffects() {
        document.querySelectorAll('.glass-card, .item').forEach(card => {
            card.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
            });
        });
    }
}

// CSS for animations
const modernAnimationCSS = `
    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
        40% { transform: translateY(-10px); }
        60% { transform: translateY(-5px); }
    }
    
    @keyframes ripple {
        to { transform: scale(4); opacity: 0; }
    }
    
    .animate-in {
        animation: slideInUp 0.6s ease forwards;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .loaded .glass-card {
        animation: glassAppear 0.8s ease forwards;
    }
    
    @keyframes glassAppear {
        from {
            opacity: 0;
            backdrop-filter: blur(0px);
            transform: scale(0.9);
        }
        to {
            opacity: 1;
            backdrop-filter: blur(20px);
            transform: scale(1);
        }
    }
`;

// Inject CSS
const style = document.createElement('style');
style.textContent = modernAnimationCSS;
document.head.appendChild(style);

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new ModernPortfolio();
    ModernPortfolio.addButtonEffects();
    ModernPortfolio.addTiltEffects();
});

// Export for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ModernPortfolio;
}
