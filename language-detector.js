(function() {
  if (localStorage.getItem('pz-lang')) return;
  var p = location.pathname;
  if (/^\/(pt-BR|es|fr|de)\//.test(p)) return;
  var l = (navigator.language || '').toLowerCase();
  var r = '';
  if (l.startsWith('pt')) r = '/pt-BR';
  else if (l.startsWith('es')) r = '/es';
  else if (l.startsWith('fr')) r = '/fr';
  else if (l.startsWith('de')) r = '/de';
  if (r) {
    localStorage.setItem('pz-lang', '1');
    location.replace(r + p);
  }
})();
