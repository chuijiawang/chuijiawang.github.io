/* Mobile navigation toggle */
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.querySelector('.nav-toggle');
  var ul = document.querySelector('.site-nav ul');
  if (!btn || !ul) return;

  btn.addEventListener('click', function () {
    var open = ul.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  ul.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      ul.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
});
