// Sommaire de la page, menu mobile et agrandissement des images.
(function () {
  var toc = document.getElementById('toc');
  if (toc) {
    document.querySelectorAll('.content article h2[id]').forEach(function (h) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = '#' + h.id; a.textContent = h.textContent;
      li.appendChild(a); toc.appendChild(li);
    });
  }
  var btn = document.querySelector('.menu-btn');
  btn.addEventListener('click', function () {
    var open = document.body.classList.toggle('nav-open');
    btn.setAttribute('aria-expanded', open);
  });
  document.querySelectorAll('.sidebar a').forEach(function (a) {
    a.addEventListener('click', function () { document.body.classList.remove('nav-open'); });
  });
  // Ne jamais agrandir une image au-delà de sa taille réelle (évite le flou).
  document.querySelectorAll('.content article img').forEach(function (img) {
    function cap() { if (img.naturalWidth) img.style.maxWidth = 'min(100%, ' + img.naturalWidth + 'px)'; }
    if (img.complete) cap(); else img.addEventListener('load', cap);
  });
  var box = document.querySelector('.lightbox'), big = box.querySelector('img');
  document.querySelectorAll('.content article img').forEach(function (img) {
    img.addEventListener('click', function () { big.src = img.src; big.alt = img.alt; box.hidden = false; });
  });
  box.addEventListener('click', function () { box.hidden = true; });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') box.hidden = true; });
})();
