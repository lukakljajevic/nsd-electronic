let urlArray = window.location.pathname.split('/');
let lang = 'rs';

if (urlArray.length === 3) {
  lang = urlArray[1]; 
}

// Header and Footer
$('#header').load(`../partials/${lang}/header.html`);
$('#footer').load(`../partials/${lang}/footer.html`);

// Navbar
let page = urlArray[urlArray.length - 1];
if (page === '') page = 'index.html';

$('#navbar').load(`../partials/${lang}/navbar.html`, () => {
  $(`.nav-link[href$='${page}']`).parent().addClass('active');

  $('.dropdown-menu a.dropdown-item').click(function() {
    console.log(this.id);
    console.log(window.location.pathname);
    let targetLang = '';
    
    if (this.id !== 'rs') {
      targetLang = `/${this.id}`;
    }

    window.location.pathname = `${targetLang}/${page}`;

  });
});


