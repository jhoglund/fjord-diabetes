// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require timeline/timeline
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require foundation
//= require_tree .

$(document).foundation();

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });


});

$(document).foundation(
                        //add custom options to orbit
                        'orbit', {
                            navigation_arrows: true,
                            bullets: true,
                            slide_number: false,
                            next_on_click: false,
                            swipe: true,
                            timer: false,
                            circular: true
                        }).bind("ready.fndtn.orbit", function() {
                    $(".orbit-container").each(function() {
                        var orbitContainer = $(this);
                        var numberOfPages = orbitContainer.find(".orbit-bullets li").size();
                        if (numberOfPages === 3) {
                            orbitContainer.find(".orbit-slide-number").hide();
                            orbitContainer.find(".orbit-timer").hide();
                        }
                    });
                });