
    (function () {
      const btn = document.getElementById('theme-toggle');
      function toggleTheme() {
        const current = document.documentElement.getAttribute('data-bs-theme') || 'light';
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-bs-theme', next);
        localStorage.setItem('theme', next);
        updateButtonText();
      }
      function updateButtonText() {
        const theme = document.documentElement.getAttribute('data-bs-theme') || 'light';
        btn.textContent = theme === 'dark' ? '☀️ Světlé téma' : '🌙 Tmavé téma';
      }
      updateButtonText();
      btn.addEventListener('click', toggleTheme);
    })();