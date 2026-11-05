(() => {
  const CHAVE_TEMA = 'portfolio-tema';
  const toggleTema = document.getElementById('tema');
  const toggleMenu = document.getElementById('menu-toggle');

  try {
    if (localStorage.getItem(CHAVE_TEMA) === 'claro') {
      toggleTema.checked = true;
    }
  } catch {}

  toggleTema?.addEventListener('change', () => {
    try {
      localStorage.setItem(CHAVE_TEMA, toggleTema.checked ? 'claro' : 'escuro');
    } catch {}
  });

  document.querySelectorAll('.nav__link').forEach((link) => {
    link.addEventListener('click', () => {
      if (toggleMenu) toggleMenu.checked = false;
    });
  });

  const ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();
})();
