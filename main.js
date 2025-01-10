window.addEventListener('hashchange', hashed);
document.addEventListener('DOMContentLoaded', init);

function init() {
  let page = location.hash ?? '#One';
  //use #One if no hash value
  page = ['#One', '#Two'].includes(page) ? page : '#One';
  //make sure that the hash value was #One or #Two
  //call the function to update the UI
  setPage(page);
}

function hashed(ev) {
  let url = new URL(ev.newURL);
  let hash = url.hash;
  setPage(hash);
}

function setPage(hash) {
  document.querySelectorAll('.page').forEach((page) => page.classList.add('inactive'));

  switch (hash) {
    case '#One':
      document.body.className = 'pageOne';
      document.querySelector('#pageOne').className = 'page';
      break;
    case '#Two':
      document.body.className = 'pageTwo';
      document.querySelector('#pageTwo').className = 'page';
      break;
    default:
      document.body.className = 'pageOne';
      document.querySelector('#pageOne').className = 'page';
  }
}
