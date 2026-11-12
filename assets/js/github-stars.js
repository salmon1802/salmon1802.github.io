(function () {
  'use strict';

  var links = document.querySelectorAll('[data-github-stars]');
  if (!links.length) return;

  // Actions publishes this public JSON snapshot; visitors never call GitHub's API.
  fetch('https://raw.githubusercontent.com/salmon1802/salmon1802.github.io/github-stars-stats/github-stars.json', {
    cache: 'no-store'
  })
    .then(function (response) {
      if (!response.ok) throw new Error('Star snapshot unavailable');
      return response.json();
    })
    .then(function (snapshot) {
      links.forEach(function (link) {
        var repository = snapshot.repositories && snapshot.repositories[link.dataset.githubStars];
        if (!repository || !Number.isInteger(repository.stars) || repository.stars < 0) return;
        link.querySelector('.github-stars__count').textContent = repository.stars.toLocaleString('en-US');
        link.setAttribute('aria-label', link.dataset.githubStars + ' has ' + repository.stars + ' GitHub stars');
        link.title = 'Star count updated ' + snapshot.updated_at + ' (UTC); refreshed hourly';
      });
    })
    .catch(function () {
      // Retain the server-rendered snapshot and its timestamp on network failure.
      links.forEach(function (link) {
        link.title += ' · Live snapshot unavailable; showing saved count';
      });
    });
}());
