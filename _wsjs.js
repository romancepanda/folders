    $('#favorite').on('click', function(e) {
        var bookmarkURL = window.location.href;
        var bookmarkTitle = document.title;
        var triggerDefault = false;

        if (window.sidebar && window.sidebar.addPanel) {
            // Firefox version < 23
            window.sidebar.addPanel(bookmarkTitle, bookmarkURL, '');
        } else if ((window.sidebar && (navigator.userAgent.toLowerCase().indexOf('firefox') > -1)) || (window.opera && window.print)) {
            // Firefox version >= 23 and Opera Hotlist
            var $this = $(this);
            $this.attr('href', bookmarkURL);
            $this.attr('title', bookmarkTitle);
            $this.attr('rel', 'sidebar');
            $this.off(e);
            triggerDefault = true;
        } else if (window.external && ('AddFavorite' in window.external)) {
            // IE Favorite
            window.external.AddFavorite(bookmarkURL, bookmarkTitle);
        } else {
            // WebKit - Safari/Chrome
            alert((navigator.userAgent.toLowerCase().indexOf('mac') != -1 ? 'Cmd' : 'Ctrl') + '+D 키를 눌러 즐겨찾기에 등록하실 수 있습니다.');
        }

        return triggerDefault;
    });




        var full = 1024;
        var width = $(window).width();;


        if (full > width) {

            $( ".gnbCover1" ).click(function() {
                $( ".gnbCover1 ul" ).slideToggle();
            });


            $( ".gnbCover2" ).click(function() {
                $( ".gnbCover2 ul" ).slideToggle();
            });


            $( ".gnbCover3" ).click(function() {
                $( ".gnbCover3 ul" ).slideToggle();
            });

             $( ".gnbCover4" ).click(function() {
                $( ".gnbCover4 ul" ).slideToggle();
            });

             $( ".gnbCover5" ).click(function() {
                $( ".gnbCover5 ul" ).slideToggle();
            });

             $( ".gnbCover6" ).click(function() {
                $( ".gnbCover6 ul" ).slideToggle();
            });

             $( ".gnbCover7" ).click(function() {
                $( ".gnbCover7 ul" ).slideToggle();
            });



        }

/*
            $( "#micon" ).click(function() {
              $( ".mmenu" ).slideToggle();
            });

*/
/*
              $( ".mmenu ul>li" ).click(function() {
                // $( "ul>li").children("ul").slideToggle();

                    $(this).children("ul").fadeToggle();
            });

*/

/*
              $( ".navMenu ul>li" ).hover(function() {
                // $( "ul>li").children("ul").slideToggle();

                    $(this).children("ul").toggle();
            });




              $( "#mclose" ).click(function() {
              $( ".mmenu" ).slideToggle();
            });

*/



$(function(){
    $(".mmenu").click(function(event) {
        var menu = $(this);
        var sub = $(this).find("ul");

        if (sub.is(":visible") && !$.contains(sub.get(0), event.target)) {
            sub.slideUp("fast");
            return;
        }
        sub.slideDown("fast");

        var handler = function(event) {
            if (!$.contains(menu.get(0), event.target)) {
                sub.slideUp("fast");
            }
        };
        $(document).bind('click', handler);
    });
});


$(function(){
    $(".navMenu ul>li").hover(function(event) {
        var menu = $(this);
        var sub = $(this).find("ul");

        if (sub.is(":visible") && !$.contains(sub.get(0), event.target)) {
            sub.slideUp("fast");
            return;
        }
        sub.slideDown("fast");

        var handler = function(event) {
            if (!$.contains(menu.get(0), event.target)) {
                sub.slideUp("fast");
            }
        };
        $(document).bind('click', handler);
        
    });
});







            $('[data-toggle="tooltip"]').tooltip()




         /*var jbOffset2 = $( '.gnbCover3' ).offset();

            console.log(jbOffset2)

            $( window ).scroll( function() {

        });*/


        /*  var jbOffset;



            $( window ).scroll( function() {

              if ($("div").hasClass("gnbCover3")) {
                // 3
                jbOffset  = $('.gnbCover3').offset();

                if ( $( document ).scrollTop() > jbOffset.top ) {
                  $( '.gnbCover3' ).addClass( 'jbFixed' );
                }
                else {
                  $( '.gnbCover3' ).removeClass( 'jbFixed' );
                }

              }

              else if ($("div").hasClass("gnbCover4")) {

                jbOffset  = $('.gnbCover4').offset();

                if ( $( document ).scrollTop() > jbOffset.top ) {
                  $( '.gnbCover4' ).addClass( 'jbFixed' );
                }
                else {
                  $( '.gnbCover4' ).removeClass( 'jbFixed' );
                }

              }


              else if ($("div").hasClass("gnbCover1")) {

                jbOffset  = $('.gnbCover1').offset();

                if ( $( document ).scrollTop() > jbOffset.top ) {
                  $( '.gnbCover1' ).addClass( 'jbFixed' );
                }
                else {
                  $( '.gnbCover1' ).removeClass( 'jbFixed' );
                }

              }



        });*/


/*부트스트랩*/

              $('#myTabs a').click(function (e) {
                e.preventDefault()
                $(this).tab('show')
              })



/*모달 */

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})

$('#myModal2').on('shown.bs.modal', function () {
  $('#myInput').focus()
})





/*$( ".thumbnail>img" ).hover(
  function() {
    $( ".namespan" ).css("display","block");
  }, function() {
    $( ".namespan" ).css("display","none");
  }
);
*/

$(".doctorThumb").hover(function(){
  $(".namespan", $(this)).fadeIn(400);
}, function(){
  $(".namespan", $(this)).fadeOut(400);
});

$(".doctorThumb").click(function(){
  var doctor_idx = $(this).attr("data-idx");
  $.post("/doctor/getDoctorProfile/"+doctor_idx, function( data ) {
    $dataArray = data.split("‡");
    $("#doctorName").text($dataArray[0]);
    $("#imgProfileFace").attr("src", "/static/upload/doctor/thum/"+$dataArray[1]);
    $("#profileContents").html($dataArray[2]);
    $("#doctorProfile").modal("show");
  });

});


if ($("ul").hasClass("bxslider")) {
  $('.bxslider').bxSlider({
    pagerCustom: '#bx-pager',
    captions:true,
      pager: true

  });
}

$(document).ready(function(){
if ($("ul").hasClass("bxslider2")) {
    $('.bxslider2').bxSlider({
      pager: true,
      controls : false,
      adaptiveHeight: true,
      auto : true
    });
}

});




var nav1 = $('.gnbCover1');

$(window).scroll(function () {
    if ($(this).scrollTop() > 136) {
        nav1.addClass("f-nav");
    } else {
        nav1.removeClass("f-nav");
    }
});

var nav2 = $('.gnbCover2');

$(window).scroll(function () {
    if ($(this).scrollTop() > 136) {
        nav2.addClass("f-nav");
    } else {
        nav2.removeClass("f-nav");
    }
});
var nav3 = $('.gnbCover3');

$(window).scroll(function () {
    if ($(this).scrollTop() > 136) {
        nav3.addClass("f-nav");
    } else {
        nav3.removeClass("f-nav");
    }
});
var nav4 = $('.gnbCover4');

$(window).scroll(function () {
    if ($(this).scrollTop() > 136) {
        nav4.addClass("f-nav");
    } else {
        nav4.removeClass("f-nav");
    }
});
var nav5 = $('.gnbCover5');

$(window).scroll(function () {
    if ($(this).scrollTop() > 136) {
        nav5.addClass("f-nav");
    } else {
        nav5.removeClass("f-nav");
    }
});
var nav6 = $('.gnbCover6');

$(window).scroll(function () {
    if ($(this).scrollTop() > 136) {
        nav6.addClass("f-nav");
    } else {
        nav6.removeClass("f-nav");
    }
});
var nav7 = $('.gnbCover7');

$(window).scroll(function () {
    if ($(this).scrollTop() > 136) {
        nav7.addClass("f-nav");
    } else {
        nav7.removeClass("f-nav");
    }
});
var nav8 = $('.gnbCover8');

$(window).scroll(function () {
    if ($(this).scrollTop() > 136) {
        nav8.addClass("f-nav");
    } else {
        nav8.removeClass("f-nav");
    }
});