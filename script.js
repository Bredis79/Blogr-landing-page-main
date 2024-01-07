$(function(){

    //open navigation after click on hamburger icon
    $('.hamburger').on('click', function() {
       
        $(".nav").fadeIn( 200 )
           
          /*  $(".header__login").toggle().css({
                "display":"flex",
                "flex-direction":"column"
            }) */
           
           $(".product").click(function(){
                $("#product").slideToggle("slow");   
              });

            
            $(".company").click(function(){
                $("#company").slideToggle("slow");
                  });
            
            $(".connect").click(function(){
                $("#connect").slideToggle("slow");
                  });

                  
            $(".nav").toggle().css({"display":"flex"})
          
        

            $(".hamburger").toggle().css({"display":"none"})
            $(".close").toggle().css({"display":"block"})

    })
    

    //close navigation after click on the close btn
    $('.close').on('click', function() {
       
            $(".nav").toggle()
            $(".hamburger").toggle().css({"display":"block"})
            $(".close").toggle().css({"display":"none"})

    })
  
})