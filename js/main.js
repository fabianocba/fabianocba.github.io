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

  const videoHero = document.querySelector('.hero__video');
  if (videoHero && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    videoHero.addEventListener('playing', () => {
      videoHero.classList.add('hero__video--ativo');
    });
    videoHero.addEventListener('ended', () => {
      videoHero.classList.remove('hero__video--ativo');
      setTimeout(() => {
        videoHero.currentTime = 0;
        videoHero.play().catch(() => {});
      }, 3000);
    });
    videoHero.play().catch(() => {});
  }

  window.formspree = window.formspree || function () {
    (window.formspree.q = window.formspree.q || []).push(arguments);
  };
  window.formspree('initForm', {
    formElement: '#form-contato',
    formId: 'xpppbnyd',
    useDefaultStyles: false,
  });
})();
