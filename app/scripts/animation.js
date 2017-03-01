//jQuery: runs when the document is ready
$(document).ready(function() {
  //gives us our sidenav with click to close, check Materialize documentation for more options
    $('#sidenav-toggle').sideNav({
	     closeOnClick: true
     });
  //settings for fullpage.js: anchors are for the sections on the menu, responsiveWidth is breakpoint
    var sections = ['sa','sb','sc','sd','se'];
    $('#fullpage').fullpage({
        menu: '#nav',
       	anchors: ['a', 'b', 'c', 'd', 'e'],
       	normalScrollElements: '#nav',
        paddingTop: 0,
        paddingBottom: 0,
        responsiveWidth: 640,
        css3: true,
        onLeave: function(index, nextIndex, direction){
          if (index == 1) {
            $('#firstCard').addClass('animated bounceInRight');
          }
          if (index == 2) {
            $('#firstCard').removeClass('animated bounceInRight bounceInLeft');
          }
          if (index == 3) {
            $('#firstCard').addClass('animated bounceInLeft');
          }
        }
      });
});
//fixes a bug with the sidenav during responsive mode that causes it to kill scrolling events
 $(document).on('click', '#sidenav', '.drag-target', function(e) {
     //in responsive mode?
    if($('.fp-responsive').length){
         $('body').css('overflow', 'visible');
     }

});
