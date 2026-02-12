/**
 * Global Search Functionality
 * Handles search input across all pages and redirects to tourist.html (as a demo search result page)
 * or filters content if on the search result page.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Sync desktop and mobile search inputs
  const desktopSearch = document.getElementById('desktop-search-input');
  const mobileSearch = document.getElementById('mobile-search-input');
  const searchInputs = [desktopSearch, mobileSearch];

  // Function to handle search execution
  const handleSearch = (query) => {
    if (!query) return;

    // specialized behavior for tourist.html which has its own filter
    if (window.location.pathname.includes('tourist.html') || window.location.href.includes('tourist.html')) {
      const localFilter = document.getElementById('searchInput');
      if (localFilter) {
        localFilter.value = query;
        // Trigger input event to run the filtering logic
        localFilter.dispatchEvent(new Event('input', {
          bubbles: true
        }));

        // Scroll to results
        const grid = document.getElementById('tourismGrid');
        if (grid) {
          grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    } else {
      // Redirect to tourist.html with search param
      // Using tourist.html as the "search results" page for this demo
      window.location.href = `tourist.html?search=${encodeURIComponent(query)}`;
    }
  };

  searchInputs.forEach(input => {
    if (!input) return;

    // Listen for "Enter" key
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleSearch(input.value.trim());
      }
    });

    // Also listen for the search icon click if it's a sibling
    const parent = input.parentElement;
    if (parent) {
      const icon = parent.querySelector('.bi-search');
      if (icon) {
        icon.style.cursor = 'pointer';
        icon.addEventListener('click', () => {
          handleSearch(input.value.trim());
        });
      }
    }
  });

  // Check for URL parameters on load (mainly for tourist.html)
  if (window.location.pathname.includes('tourist.html') || window.location.href.includes('tourist.html')) {
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get('search');
    if (searchParam) {
      const localFilter = document.getElementById('searchInput');
      const desktopInput = document.getElementById('desktop-search-input');

      if (localFilter) {
        // slight delay to ensure other scripts initialized
        setTimeout(() => {
          localFilter.value = searchParam;
          localFilter.dispatchEvent(new Event('input', { bubbles: true }));
          if (desktopInput) desktopInput.value = searchParam;

          const grid = document.getElementById('tourismGrid');
          if (grid) {
            grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    }
  }

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
});
