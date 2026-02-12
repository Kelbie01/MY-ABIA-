document.addEventListener('DOMContentLoaded', () => {
  // Select all elements that need animation
  // We will target cards, sections, and headers automatically if they don't have specific classes, 
  // or we can just look for a utility class we will add.
  
  // Strategy: Add 'animate-on-scroll' class to key elements in the HTML updates.
  // Also auto-target common card classes to save manual editing time.
  const targets = document.querySelectorAll('.animate-on-scroll, .team-card, article, .bg-white.border.border-gray-200');

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, observerOptions);

  targets.forEach((target, index) => {
    // Add base transition class if not present
    target.classList.add('scroll-enter');
    
    // Stagger animations for siblings
    // We check if the parent is a grid/flex container to apply staggered delays
    const parent = target.parentElement;
    if (parent && (parent.classList.contains('grid') || parent.classList.contains('flex'))) {
       // Simple index-based delay calculation would require knowing the index among current view.
       // We'll just rely on the CSS transition delay or natural scroll timing.
    }
    
    observer.observe(target);
  });
});
