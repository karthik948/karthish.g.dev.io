(function () {
  var root = document.documentElement;
  var toggle = document.getElementById('t');
  var year = document.getElementById('y');

  if (toggle) {
    toggle.addEventListener('click', function () {
      var isDark = root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
      root.dataset.theme = isDark ? 'light' : 'dark';
      toggle.textContent = root.dataset.theme === 'dark' ? '☀️' : '🌙';
    });
  }

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  document.querySelectorAll('.spot').forEach(function (card) {
    card.addEventListener('pointermove', function (event) {
      var bounds = card.getBoundingClientRect();
      card.style.setProperty('--mx', (event.clientX - bounds.left) + 'px');
      card.style.setProperty('--my', (event.clientY - bounds.top) + 'px');
    });
  });

  var still = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!still) {
    var words = ['identity lifecycles', 'access governance', 'SSO and MFA', 'cloud access security'];
    var i = 0;
    var el = document.getElementById('rot');

    if (el) {
      setInterval(function () {
        el.classList.add('out');
        setTimeout(function () {
          i = (i + 1) % words.length;
          el.textContent = words[i];
          el.classList.remove('out');
        }, 350);
      }, 2600);
    }
  }
})();
