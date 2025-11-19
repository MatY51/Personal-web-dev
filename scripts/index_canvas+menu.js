
  document.addEventListener('DOMContentLoaded', () => {
    // Téma
    const stored = localStorage.getItem('theme');
    if (stored) {
      if (stored === 'auto') {
        document.documentElement.setAttribute(
          'data-bs-theme',
          window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        );
      } else {
        document.documentElement.setAttribute('data-bs-theme', stored);
      }
    } else {
      document.documentElement.setAttribute(
        'data-bs-theme',
        window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      );
    }

    // Offcanvas + hamburger
    const sidebar = document.getElementById('sidebar');
    const hamburger = document.getElementById('hamburger-btn');

    sidebar.addEventListener('show.bs.offcanvas', () => {
      hamburger.style.display = 'none';
    });
    sidebar.addEventListener('hidden.bs.offcanvas', () => {
      hamburger.style.display = 'block';
    });
  });