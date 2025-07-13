// Simple and Reliable Custom Cursor
class SimpleCursor {
    constructor() {
        this.cursor = null;
        this.mouseX = 0;
        this.mouseY = 0;
        this.init();
    }

    init() {
        // Create cursor element
        this.cursor = document.createElement('div');
        this.cursor.className = 'custom-cursor';
        this.cursor.style.position = 'fixed';
        this.cursor.style.left = '50%';
        this.cursor.style.top = '50%';
        this.cursor.style.zIndex = '999999';
        this.cursor.style.pointerEvents = 'none';
        this.cursor.style.opacity = '1';
        this.cursor.style.visibility = 'visible';
        document.body.appendChild(this.cursor);

        // Track mouse movement
        document.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
            this.updatePosition();
        });

        // Add hover listeners
        this.addHoverListeners();

        console.log('Custom cursor initialized'); // Debug log
    }

    updatePosition() {
        if (this.cursor) {
            this.cursor.style.left = this.mouseX + 'px';
            this.cursor.style.top = this.mouseY + 'px';
        }
    }

    addHoverListeners() {
        // Navigation links
        document.querySelectorAll('nav a, .nav-link').forEach(el => {
            el.addEventListener('mouseenter', () => this.setState('nav-hover'));
            el.addEventListener('mouseleave', () => this.setState('default'));
        });

        // Buttons and CTAs
        document.querySelectorAll('button, .magnetic, a[href="#contact"], a[href*=".pdf"]').forEach(el => {
            el.addEventListener('mouseenter', () => this.setState('cta-hover'));
            el.addEventListener('mouseleave', () => this.setState('default'));
        });

        // Project cards
        document.querySelectorAll('.hover-lift, .card-shadow').forEach(el => {
            el.addEventListener('mouseenter', () => this.setState('project-hover'));
            el.addEventListener('mouseleave', () => this.setState('default'));
        });

        // Text inputs
        document.querySelectorAll('input, textarea').forEach(el => {
            el.addEventListener('mouseenter', () => this.setState('text'));
            el.addEventListener('mouseleave', () => this.setState('default'));
        });

        // All clickable elements
        document.querySelectorAll('a, button').forEach(el => {
            if (!el.matches('input, textarea')) {
                el.addEventListener('mouseenter', () => this.setState('pointer'));
                el.addEventListener('mouseleave', () => this.setState('default'));
            }
        });
    }

    setState(state) {
        if (this.cursor) {
            this.cursor.className = 'custom-cursor';
            if (state !== 'default') {
                this.cursor.classList.add(state);
            }
        }
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Only on devices with hover capability
    if (window.matchMedia('(hover: hover)').matches) {
        new SimpleCursor();
        console.log('Cursor should be visible now'); // Debug log
    } else {
        console.log('Mobile device detected, cursor disabled'); // Debug log
    }
});
