$(window).scroll(function(){  
    if ($(this).scrollTop()>=500){
        $('.main-nav').css({ 'position':'fixed', 'top':'0', 'left':'0', 'z-index':'9999','width': '100%'})        
    }
    else{
        $('.main-nav').css({ 'position':'static','background': '#0aad0a','width': '100%'}) 
    }

    if ($(this).scrollTop()>=100)
        $('.backtotop').show()
    else
        $('.backtotop').hide()
})

$('#btn-nav').click(function(){
    $('#header').toggle('slide')
})

$(document).ready (function() {
    setTimeout(function(){
        $('.signUpModal').modal('show');
    }, 3000);
    
    // back-to-top
    $('.backtotop').hide()

   

    $(".backtotop").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
    
          // Store hash
          var hash = this.hash;
    
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
    
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });

   // Owl-carousel
    $('#category').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        autoplay: true,
        responsive: {
        0: {
            items: 2,
            nav: true
        },
        600: {
            items: 3,
            nav: true
        },
        1000: {
            items: 6,
            nav: true,
            loop: true,
            margin: 20
        }
        }
    })

// Countdown
    var myDate = new Date();
    myDate.setDate(myDate.getDate() + 50);
                $("#countdown").countdown(myDate, function (event) {
                    $(this).html(
                        event.strftime(
                            '<div class="timer-wrapper"><div class="time">%D</div><span class="text">days</span></div><div class="timer-wrapper"><div class="time">%H</div><span class="text">hrs</span></div><div class="timer-wrapper"><div class="time">%M</div><span class="text">mins</span></div><div class="timer-wrapper"><div class="time">%S</div><span class="text">sec</span></div>'
                        )
                    );
                });
    var myDate = new Date();
    myDate.setDate(myDate.getDate() + 40);
                $("#countdown1").countdown(myDate, function (event) {
                    $(this).html(
                        event.strftime(
                            '<div class="timer-wrapper"><div class="time">%D</div><span class="text">days</span></div><div class="timer-wrapper"><div class="time">%H</div><span class="text">hrs</span></div><div class="timer-wrapper"><div class="time">%M</div><span class="text">mins</span></div><div class="timer-wrapper"><div class="time">%S</div><span class="text">sec</span></div>'
                        )
                    );
                });
    var myDate = new Date();
    myDate.setDate(myDate.getDate() + 30);
                $("#countdown2").countdown(myDate, function (event) {
                    $(this).html(
                        event.strftime(
                            '<div class="timer-wrapper"><div class="time">%D</div><span class="text">days</span></div><div class="timer-wrapper"><div class="time">%H</div><span class="text">hrs</span></div><div class="timer-wrapper"><div class="time">%M</div><span class="text">mins</span></div><div class="timer-wrapper"><div class="time">%S</div><span class="text">sec</span></div>'
                        )
                    );
                });

    var chieucao = $('.card-pr').height();
    $('.daily-banner').height(chieucao);

    // Zoom
    $("#slider").ezPlus({
        gallery: 'gallery_01',
        cursor: 'pointer',
        galleryActiveClass: "active2",
        imageCrossfade: true,
        loadingIcon: "https://www.elevateweb.co.uk/spinner.gif"
    });

    $("#slider").bind("click", function (e) {
        var ez = $('#slider').data('ezPlus');
        ez.closeAll(); //NEW: This function force hides the lens, tint and window
        $.fancyboxPlus(ez.getGalleryList());
        return false;
    });

    $(".slider1").ezPlus({
        gallery: 'gallery_01',
        cursor: 'pointer',
        galleryActiveClass: "active2",
        imageCrossfade: true,
        loadingIcon: "https://www.elevateweb.co.uk/spinner.gif"
    });

    $(".slider1").bind("click", function (e) {
        var ez = $('.slider1').data('ezPlus');
        ez.closeAll(); //NEW: This function force hides the lens, tint and window
        $.fancyboxPlus(ez.getGalleryList());
        return false;
    });
    
   
                
})


// Input Group

$('.btn-minus').click(function(){
    var soluong=$('.quanty').val();
    soluong= parseInt(soluong,10);
    soluong= soluong-1;
    if(soluong<0)
        soluong=0;
    $('.quanty').val(soluong)
})

$('.btn-plus').click(function(){
    var soluong=$('.quanty').val();
    soluong= parseInt(soluong,10);
    soluong= soluong+1;
    $('.quanty').val(soluong)
})

$('#btnsidebar').click(function(){
    $('.sidebar').toggle('fade')
})

$('#sidebarclose').click(function(){
    $('.sidebar').toggle('close')
})

$('.sidebarclose').click(function(){
    $('#header').toggle('close')
})


