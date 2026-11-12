(function () {
  'use strict';

  var status = document.getElementById('visitor-stats-status');
  if (!status) return;

  var container = status.parentElement;
  var timeout;
  var observer = new MutationObserver(function () {
    var visitors = document.getElementById('busuanzi_value_site_uv').textContent;
    var views = document.getElementById('busuanzi_value_site_pv').textContent;
    if (/^\d+$/.test(visitors) && /^\d+$/.test(views)) {
      status.hidden = true;
      clearTimeout(timeout);
      observer.disconnect();
    }
  });
  observer.observe(container, { childList: true, subtree: true, characterData: true });

  function unavailable() {
    if (!status.hidden) status.textContent = 'Visitor statistics temporarily unavailable';
  }

  timeout = setTimeout(unavailable, 12000);
  var script = document.createElement('script');
  script.src = 'https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js';
  script.async = true;
  script.onerror = unavailable;
  document.head.appendChild(script);
}());
