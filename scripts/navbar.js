let url = window.location.pathname.split('/')[1];

if (url === '')
  url = 'index.html';

$('#navbar').load('../partials/navbar.html', () => {
  $(`.nav-link[href$='${url}']`).parent().addClass('active');
});
