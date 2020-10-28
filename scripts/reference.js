let activeCategory = 'industrija';

$('.menu .menu-list li a').click(function() {
  const itemId = this.id.substring(0, this.id.length - 5);
  if (itemId !== activeCategory) {
    $(`#${activeCategory}`).fadeOut(function() {
      $(`#${itemId}`).fadeIn();
    });
    activeCategory = itemId;
    $('.menu .menu-list li a').removeClass('active');
    $(`#${this.id}`).addClass('active');
  }
});