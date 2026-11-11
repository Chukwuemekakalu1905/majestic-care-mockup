(function(){
  var header = document.querySelector('header');
  var toggle = document.querySelector('.nav-toggle');
  if (toggle){
    toggle.addEventListener('click', function(){
      var open = header.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    document.querySelectorAll('#site-menu a').forEach(function(link){
      link.addEventListener('click', function(){
        header.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open menu');
      });
    });
  }
  var form = document.getElementById('referral-form');
  var thanks = document.getElementById('thanks');
  if (form && thanks){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      form.classList.add('is-sent');
      thanks.classList.add('show');
    });
  }
})();
