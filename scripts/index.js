let visited = false;
const observer = new IntersectionObserver(function(entries) {
	// isIntersecting is true when element and viewport are overlapping
  // isIntersecting is false when element and viewport don't overlap
  
	if (entries[0].isIntersecting === true && !visited) {
    $('.count').each(function () {
      $(this).prop('Counter', 0).animate({
          Counter: $(this).text()
      }, {
          duration: 2500,
          easing: 'swing',
          step: function(now) {
              $(this).text(Math.ceil(now));
          }
      });
    });
    visited = true;
  }
  
}, { threshold: [0.1] });

observer.observe(document.querySelector("#numbers"));