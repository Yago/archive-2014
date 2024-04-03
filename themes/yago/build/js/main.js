(function ($) {
  $(document).ready(function(){
    $('.img-focus').focusPoint();
  });
}(jQuery));
window.addEventListener('DOMContentLoaded', function () {
  BackgroundCheck.init({
    targets: '.navbar-brand, .main-nav li a, .navbar .navbar-toggle',
    classes: { dark: 'background-dark', light: 'background-light', complex: 'background-complex' }
  });
});

if ($('#chart').length !== 0) {

  var data = [
    {
      value: 26,
      color: "#e35730",
      label: "HTML"
    }, {
      value: 5,
      color: "#d81713",
      label: "Ruby"
    }, {
      value: 22,
      color: "#f63882",
      label: "SASS"
    }, {
      value: 16,
      color: "#6067a3",
      label: "PHP"
    }, {
      value: 8,
      color: "#4d56e8",
      label: "jQuery"
    }, {
      value: 18,
      color: "#a0d5ee",
      label: "JavaScript"
    }, {
      value: 5,
      color: "#C2968F",
      label: "Other"
    }
  ];

  var options = {
  animation: false
  };

  //Get the context of the canvas element we want to select
  var c = $('#chart');
  var ct = c.get(0).getContext('2d');
  var ctx = document.getElementById("chart").getContext("2d");
  /*************************************************************************/
  myNewChart = new Chart(ct).Doughnut(data, options);

}
(function($) {
  $(document).ready(function() {
    var yagoSlidebars = new $.slidebars({
      disableOver: 767
    });
    $('#open-menu').on('click', function() {
      yagoSlidebars.slidebars.toggle('right');
    });
  });
}) (jQuery);
(function ($) {
  $(document).ready(function() {
    $('.tooltip').tooltipster();
  });
}(jQuery));
(function(){
  $(document).ready(function(){
    $('iframe').each(function(){
      $(this).wrap('<div class="video-container"></div>');
    });
  });
}(jQuery));