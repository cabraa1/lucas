window.addEventListener('scroll', function() {
    var nav = document.querySelector('.transparent-nav');
    if (window.scrollY > 0) {
      nav.classList.add('opaque');
    } else {
      nav.classList.remove('opaque');
    }
});