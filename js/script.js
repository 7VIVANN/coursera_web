 $(document).ready(function()
 {
            /*customizing the carousel functionality*/
            $("#myCarousel").carousel( { interval: 2000 } );
            $('#carouselButton').click(function(){
              if($('#carouselButton').children('span').hasClass('fa-pause')){
                $('#myCarousel').carousel('pause');
                $('#carouselButton').children('span').removeClass('fa-pause');
                $('#carouselButton').children('span').addClass('fa-play');

              }
              else if ($('#carouselButton').children('span').hasClass('fa-play')) {
                $('#myCarousel').carousel('cycle');
                $('#carouselButton').children('span').removeClass('fa-play');
                $('#carouselButton').children('span').addClass('fa-pause');
              }
            });

            /*removing the data-toggle and data-target for login*/
            $("#loginModalTrigger").click(function(){
              $("#loginModal").modal('toggle');
              $("#loginModal").modal('show');
            });
            
            /*removing the data-toggle and data-target for reservation*/
            $("#reservationModalTrigger").click(function(){
              $("#reservationModal").modal('toggle');
              $("#reservationModal").modal('show');
            });

            /*silencing the loginModal by hiding it*/
            $(".loginModalSilencer").click(function(){
              $("#loginModal").modal('toggle');
              $("#loginModal").modal('hide');
            });

              /*silencing the reservation by hiding it*/
            $(".reservationModalSilencer").click(function(){
              $("#reservationModal").modal('toggle');
              $("#reservationModal").modal('hide');
            });
  });