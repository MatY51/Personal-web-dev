
    document.addEventListener('DOMContentLoaded', () => {
      // Nastavení tématu
      const stored = localStorage.getItem('theme');
      if(stored){
        document.documentElement.setAttribute('data-bs-theme', stored);
      } else {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      }

      // Offcanvas + hamburger
      const sidebar = document.getElementById('sidebar');
      const hamburger = document.getElementById('hamburger-btn');
      sidebar.addEventListener('show.bs.offcanvas', () => { hamburger.style.display = 'none'; });
      sidebar.addEventListener('hidden.bs.offcanvas', () => { hamburger.style.display = 'block'; });
    });