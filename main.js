// Chapter-spine scroll progress
(function () {
  var bar = document.querySelector('.spine .progress');
  if (!bar) return;
  function update() {
    var scrollTop = window.scrollY;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var pct = docHeight > 0 ? scrollTop / docHeight : 0;
    var spineHeight = window.innerHeight;
    bar.style.transform = 'translateY(' + (pct * spineHeight * 0.94) + 'px)';
  }
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
})();
