document.addEventListener('DOMContentLoaded', () => {
    // =======================================================
    // 1. Mobile Navigation Toggle
    // =======================================================
    const mobileMenuIcon = document.getElementById('mobile-menu');
    const mobileNavList = document.getElementById('mobile-nav-list');

    if (mobileMenuIcon && mobileNavList) {
        mobileMenuIcon.addEventListener('click', () => {
            // Toggle the 'open' class for the mobile navigation list
            mobileNavList.classList.toggle('open');
            
            // Toggle the icon between bars and close (optional visual feedback)
            const icon = mobileMenuIcon.querySelector('i');
            if (mobileNavList.classList.contains('open')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close mobile menu when a link is clicked (for single-page navigation)
        const mobileLinks = mobileNavList.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileNavList.classList.remove('open');
                // Reset icon
                const icon = mobileMenuIcon.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }

    // =======================================================
    // 2. "Buy Now" Button Functionality
    // =======================================================
    const buyNowButtons = document.querySelectorAll('.buy-now-btn');

    buyNowButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const commissionType = event.target.getAttribute('data-commission-type');
            
            // In a real application, you would redirect to a checkout page,
            // a custom form, or a detailed pricing page.
            
            // For now, we will use a polite alert/confirmation:
            if (confirm(`You are about to commission a ${commissionType} piece. Would you like to proceed to the inquiry form?`)) {
                
                // --- Action Simulation ---
                // Best Practice: Redirect to a dedicated commission form or payment gateway
                // Example: window.location.href = `/checkout-form.html?type=${commissionType}`;

                // Simple simulated action:
                alert(`Redirecting to a secure inquiry form for ${commissionType} commissions. Thank you for choosing Tara Saskara!`);
                
                // You could also scroll to the contact section:
                // document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            } else {
                alert('Commission request canceled. Feel free to explore our gallery!');
            }
        });
    });


    // =======================================================
    // 3. Simple Scroll Animation Trigger (to improve visibility)
    // =======================================================
    const elementsToAnimate = document.querySelectorAll('.animate-slide-up, .animate-fade-in-slow');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove the 'animate-' class to let the CSS 'forwards' take over,
                // or you can set a specific class to trigger the animation.
                // Since our CSS uses 'forwards', we just need to ensure the element
                // is visible. However, to re-trigger or ensure it only plays when in view,
                // a class-toggle approach is often better for a JavaScript-controlled animation.

                // For simplicity with the existing CSS setup, we'll keep the CSS as is
                // (it animates on load). For a true scroll-triggered effect, you'd
                // initially hide the element and add a class like 'is-visible' here.
                
                // Example of a true scroll-trigger:
                // entry.target.classList.add('is-visible'); 
                
                // We will *stop* observing once it's visible to save performance
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});