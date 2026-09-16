(() => {
  const policies = {
    infante: { defaultView: 'home', views: ['home','jan','people','ops','quality','learning','payroll','agents'], org: 'INFANTE' },
    janitorial: { defaultView: 'jan', views: ['jan','ops','quality','learning','payroll'], org: 'JANITORIAL' },
    supervisor: { defaultView: 'ops', views: ['ops','quality','learning'], org: 'SUP-001' },
    hr: { defaultView: 'people', views: ['people','learning'], org: 'HR-001' },
    worker: { defaultView: 'ops', views: ['ops','learning'], org: 'JAN-007' }
  };
  const select = document.querySelector('#role');
  const nav = document.querySelector('#nav');
  const roleKeys = Object.keys(policies);
  const apply = () => {
    const policy = policies[roleKeys[select.selectedIndex] || 'infante'];
    nav.querySelectorAll('button[data-v]').forEach(button => { button.hidden = !policy.views.includes(button.dataset.v); });
    const current = nav.querySelector('button.active:not([hidden])');
    if (!current) nav.querySelector(`button[data-v="${policy.defaultView}"]`)?.click();
    document.querySelector('#org').textContent = policy.org;
    document.body.dataset.activeRole = roleKeys[select.selectedIndex] || 'infante';
  };
  select.addEventListener('change', apply);
  new MutationObserver(apply).observe(nav, { childList: true });
  apply();
})();
