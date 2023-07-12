function showTestimonial(index) {
  var testimonialItems = document.getElementsByClassName('testimonial-item');
  var controls = document.getElementsByClassName('control');
  
  for (var i = 0; i < testimonialItems.length; i++) {
    testimonialItems[i].classList.remove('active');
    controls[i].classList.remove('active');
  }
  
  testimonialItems[index].classList.add('active');
  controls[index].classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
  var navbarToggler = document.querySelector('.navbar-toggler');
  var navbarCollapse = document.querySelector('.navbar-collapse');

  navbarToggler.addEventListener('click', function() {
    navbarCollapse.classList.toggle('show');
  });
});