(() => {
  const log = document.querySelector('#log');
  const input = document.createElement('input');
  input.type = 'search'; input.placeholder = 'Filtrar por actor, acción o correlación…'; input.setAttribute('aria-label', 'Filtrar eventos');
  input.style.cssText = 'width:100%;margin:12px 0;padding:12px;border:1px solid #263653;border-radius:10px;background:#0d1728;color:#e8eef8';
  log.before(input);
  input.addEventListener('input', () => {
    const term = input.value.trim().toLowerCase();
    log.querySelectorAll('.row').forEach(row => { row.hidden = term && !row.textContent.toLowerCase().includes(term); });
  });
})();
