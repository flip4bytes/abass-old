/* --------------------------------------------------------------

INDEX:

[1] External Links / Popout Window
[2] Mobile Nav
[3] Smooth Scroll
[4] Google Analytics

-------------------------------------------------------------- */

/* --------------------------------------------------------------

[1*] External Links / Popout Window

-------------------------------------------------------------- */

$.expr[':'].external = function(obj){
    return !obj.href.match(/^mailto\:/)
           && (obj.hostname != location.hostname || /.pdf$/.test(obj.href) || /.png$/.test(obj.href))
           && !obj.href.match(/^javascript\:/)
           && !obj.href.match(/^$/)
           && !obj.href.match(/^tel:/)
};

$('a:external').attr('target', '_blank');

// $('a.window').click(function(e) {
//     e.preventDefault();
//     poptastic(this.href);
// });

// function poptastic(url) {
//     var newwindow = window.open(url, 'name', 'height=260,width=500,scrollbars=yes');
//     if (newwindow.focus) {
//         newwindow.focus()
//     }
// }

/* --------------------------------------------------------------

[2*] Mobile Nav

-------------------------------------------------------------- */

$(function() {
  // $("a.search").click(function(e) {
  //   $("#search").toggleClass('hidden');
  //   $("#search-icon").toggleClass('fa-search');
  //   $("#search-icon").toggleClass('fa-search-minus');
  //   $("#search-icon").toggleClass('red');
  //   $("#search-field").focus();
  //   e.preventDefault();
  // });
  $(".menu a").click(function(e) {
    $("#nav").toggleClass('visible-desktop');
    $(".menu a").toggleClass('gray');
    $("#header").toggleClass('header-active');
    e.preventDefault();
  });
  // $("a.1-toggle").click(function(e) {
  //   $("#1").removeClass('hidden');
  //   $("a.1-toggle").addClass('toggle-selected')
  //   $("#2").addClass('hidden');
  //   $("a.2-toggle").removeClass('toggle-selected')
  //   e.preventDefault();
  // });
  // $("a.2-toggle").click(function(e) {
  //   $("#2").removeClass('hidden');
  //   $("a.2-toggle").addClass('toggle-selected')
  //   $("#1").addClass('hidden');
  //   $("a.1-toggle").removeClass('toggle-selected')
  //   e.preventDefault();
  // });
});

/* --------------------------------------------------------------

[3*] Smooth Scroll

-------------------------------------------------------------- */
// jQuery(function($){
//     $('.scroll a[href^="#"], a.scroll').bind('click',function(event){
//         var $anchor=$(this);

//         $('html, body').stop().animate({
//             scrollTop:$($anchor.attr('href')).offset().top
//         },700,'easeOutExpo');

//         event.preventDefault()
//     })
// });


/* --------------------------------------------------------------

[4*] Google Analytics

-------------------------------------------------------------- */
//abass.co
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-46859701-1']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();