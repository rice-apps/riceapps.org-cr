$(function() {
  feather.replace();
  var currentTab = location.pathname;
  $('.nav-item').each(function() {
    var navlink = $(this).find('.nav-link');
    if (navlink.attr('href').indexOf(currentTab) !== -1) {
      $(this).addClass('active');
    }
  })
});