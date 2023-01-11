        
$(document).ready(function(){
    /*
    $("#main-div-container1").slick({
        infinit:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows : true,
        dots : true ,
        autoplay : true,
        centerMode: true
    })
    */
  


    var clicked1 = false;
                    $('#id-div-container-1').on('mouseenter',function(){
                        if(clicked1 == false){
                        $('#id-div-container-1').css("border","6px solid Orange");
                        }   
                    })
            
                    $('#id-img-container-1').on('click',function(){
                        $('#id-div-container-1').css("border","6px solid Green");
                        $('#id-content-div2-1').css("display","block");
                        if(clicked1 == false){
                        clicked1 = true;
                        $('#item-checkbox-1').prop('checked', true);
            
                        }
                        else{
                            clicked1 = false;
                            $('#id-div-container-1').css("border","6px solid Orange");
                            $('#id-content-div2-1').css("display","none");
                            $('#item-checkbox-1').prop('checked', false);
                        }
                    })
            
                    $('#id-div-container-1').on('mouseleave',function(){
                        if(clicked1 == false){
                        $('#id-div-container-1').css("border","None");
                    }
                    })
            
            
                    //////////////////////////////////////////
            
                    var clicked2 = false;
                    $('#id-div-container-2').on('mouseenter',function(){
                        if(clicked2 == false){
                        $('#id-div-container-2').css("border","6px solid Orange");
                        }   
                    })
            
                    $('#id-img-container-2').on('click',function(){
                        $('#id-div-container-2').css("border","6px solid Green");
                        $('#id-content-div2-2').css("display","block");
                        if(clicked2 == false){
                        clicked2 = true;
                        $('#item-checkbox-2').prop('checked', true);
            
                        }
                        else{
                            clicked2 = false;
                            $('#id-div-container-2').css("border","6px solid Orange");
                            $('#id-content-div2-2').css("display","none");
                            $('#item-checkbox-2').prop('checked', false);
                        }
                    })
            
                    $('#id-div-container-2').on('mouseleave',function(){
                        if(clicked2 == false){
                        $('#id-div-container-2').css("border","None");
                    }
                    })
            
            
                    //////////////////////////////////////////
            
                    var clicked3 = false;
                    $('#id-div-container-3').on('mouseenter',function(){
                        if(clicked3 == false){
                        $('#id-div-container-3').css("border","6px solid Orange");
                        }   
                    })
            
                    $('#id-img-container-3').on('click',function(){
                        $('#id-div-container-3').css("border","6px solid Green");
                        $('#id-content-div2-3').css("display","block");
                        if(clicked3 == false){
                        clicked3 = true;
                        $('#item-checkbox-3').prop('checked', true);
            
                        }
                        else{
                            clicked3 = false;
                            $('#id-div-container-3').css("border","6px solid Orange");
                            $('#id-content-div2-3').css("display","None");
                            $('#item-checkbox-3').prop('checked', false);
                        }
                    })
            
                    $('#id-div-container-3').on('mouseleave',function(){
                        if(clicked3 == false){
                        $('#id-div-container-3').css("border","None");
                    }
                    })
            
            
                        //////////////////////////////////////////
            
                     var clicked4 = false;
                    $('#id-div-container-4').on('mouseenter',function(){
                        if(clicked4 == false){
                        $('#id-div-container-4').css("border","6px solid Orange");
                        }   
                    })
            
                    $('#id-img-container-4').on('click',function(){
                        $('#id-div-container-4').css("border","6px solid Green");
                        $('#id-content-div2-4').css("display","block");
                        if(clicked4 == false){
                        clicked4 = true;
                        $('#item-checkbox-4').prop('checked', true);
            
                        }
                        else{
                            clicked4 = false;
                            $('#id-div-container-4').css("border","6px solid Orange");
                            $('#id-content-div2-4').css("display","None");
                            $('#item-checkbox-4').prop('checked', false);
                        }
                    })
            
                    $('#id-div-container-4').on('mouseleave',function(){
                        if(clicked4 == false){
                        $('#id-div-container-4').css("border","None");
                    }
                    })
            
            
                    
                    //////////////////////////////////////////
            
                    var clicked5 = false;
                    $('#id-div-container-5').on('mouseenter',function(){
                        if(clicked5 == false){
                        $('#id-div-container-5').css("border","6px solid Orange");
                        }   
                    })
            
                    $('#id-img-container-5').on('click',function(){
                        $('#id-div-container-5').css("border","6px solid Green");
                        $('#id-content-div2-5').css("display","block");
                        if(clicked5 == false){
                        clicked5 = true;
                        $('#item-checkbox-5').prop('checked', true);
            
                        }
                        else{
                            clicked5 = false;
                            $('#id-div-container-5').css("border","6px solid Orange");
                            $('#id-content-div2-5').css("display","None");
                            $('#item-checkbox-5').prop('checked', false);
                        }
                    })
            
                    $('#id-div-container-5').on('mouseleave',function(){
                        if(clicked5 == false){
                        $('#id-div-container-5').css("border","None");
                    }
                    })
            
            
            /////////////////////
                    var clicked6 = false;
                    $('#id-div-container-6').on('mouseenter',function(){
                        if(clicked6 == false){
                        $('#id-div-container-6').css("border","6px solid Orange");
                        }   
                    })
            
                    $('#id-img-container-6').on('click',function(){
                        $('#id-div-container-6').css("border","6px solid Green");
                        $('#id-content-div2-6').css("display","block");
                        if(clicked6 == false){
                        clicked6 = true;
                        $('#item-checkbox-6').prop('checked', true);
            
                        }
                        else{
                            clicked6 = false;
                            $('#id-div-container-6').css("border","6px solid Orange");
                            $('#id-content-div2-6').css("display","none");
                            $('#item-checkbox-6').prop('checked', false);
                        }
                    })
            
                    $('#id-div-container-6').on('mouseleave',function(){
                        if(clicked6 == false){
                        $('#id-div-container-6').css("border","None");
                    }
                    })



                    var clicked7 = false;
                    $('#id-div-container-2-1').on('mouseenter',function(){
                        if(clicked7 == false){
                        $('#id-div-container-2-1').css("border","6px solid Orange");
                        }   
                    })

                    $('#id-img-container-2-1').on('click',function(){
                        $('#id-div-container-2-1').css("border","6px solid Green");
                        $('#id-content-div2-1-2').css("display","block");
                        if(clicked7 == false){
                        clicked7 = true;
                        $('#item-checkbox-7').prop('checked', true);
            
                        }
                        else{
                            clicked7 = false;
                            $('#id-div-container-2-1').css("border","6px solid Orange");
                            $('#id-content-div2-1-2').css("display","none");
                            $('#item-checkbox-7').prop('checked', false);
                        }
                    })

                    $('#id-div-container-2-1').on('mouseleave',function(){
                        if(clicked7 == false){
                        $('#id-div-container-2-1').css("border","None");
                    }
                    })



                    var clicked8 = false;
                    $('#id-div-container-2-2').on('mouseenter',function(){
                        if(clicked8 == false){
                        $('#id-div-container-2-2').css("border","6px solid Orange");
                        }   
                    })

                    $('#id-img-container-2-2').on('click',function(){
                        $('#id-div-container-2-2').css("border","6px solid Green");
                        $('#id-content-div2-2-2').css("display","block");
                        if(clicked8 == false){
                        clicked8 = true;
                        $('#item-checkbox-8').prop('checked', true);
            
                        }
                        else{
                            clicked8 = false;
                            $('#id-div-container-2-2').css("border","6px solid Orange");
                            $('#id-content-div2-2-2').css("display","none");
                            $('#item-checkbox-8').prop('checked', false);
                        }
                    })

                    $('#id-div-container-2-2').on('mouseleave',function(){
                        if(clicked8 == false){
                        $('#id-div-container-2-2').css("border","None");
                    }
                    })                    


                    var clicked9 = false;
                    $('#id-div-container-2-3').on('mouseenter',function(){
                        if(clicked9 == false){
                        $('#id-div-container-2-3').css("border","6px solid Orange");
                        }   
                    })

                    $('#id-img-container-2-3').on('click',function(){
                        $('#id-div-container-2-3').css("border","6px solid Green");
                        $('#id-content-div2-3-2').css("display","block");
                        if(clicked9 == false){
                        clicked9 = true;
                        $('#item-checkbox-9').prop('checked', true);
            
                        }
                        else{
                            clicked9 = false;
                            $('#id-div-container-2-3').css("border","6px solid Orange");
                            $('#id-content-div2-3-2').css("display","none");
                            $('#item-checkbox-9').prop('checked', false);
                        }
                    })

                    $('#id-div-container-2-3').on('mouseleave',function(){
                        if(clicked9 == false){
                        $('#id-div-container-2-3').css("border","None");
                    }
                    }) 
                    
                    
   
                    var clicked10 = false;
                    $('#id-div-container-2-4').on('mouseenter',function(){
                        if(clicked10 == false){
                        $('#id-div-container-2-4').css("border","6px solid Orange");
                        }   
                    })

                    $('#id-img-container-2-4').on('click',function(){
                        $('#id-div-container-2-4').css("border","6px solid Green");
                        $('#id-content-div2-4-2').css("display","block");
                        if(clicked10 == false){
                        clicked10 = true;
                        $('#item-checkbox-10').prop('checked', true);
            
                        }
                        else{
                            clicked10 = false;
                            $('#id-div-container-2-4').css("border","6px solid Orange");
                            $('#id-content-div2-4-2').css("display","none");
                            $('#item-checkbox-10').prop('checked', false);
                        }
                    })

                    $('#id-div-container-2-4').on('mouseleave',function(){
                        if(clicked10 == false){
                        $('#id-div-container-2-4').css("border","None");
                    }
                    })                      




                    var clicked11 = false;
                    $('#id-div-container-2-5').on('mouseenter',function(){
                        if(clicked11 == false){
                        $('#id-div-container-2-5').css("border","6px solid Orange");
                        }   
                    })

                    $('#id-img-container-2-5').on('click',function(){
                        $('#id-div-container-2-5').css("border","6px solid Green");
                        $('#id-content-div2-5-2').css("display","block");
                        if(clicked11 == false){
                        clicked11 = true;
                        $('#item-checkbox-11').prop('checked', true);
            
                        }
                        else{
                            clicked11 = false;
                            $('#id-div-container-2-5').css("border","6px solid Orange");
                            $('#id-content-div2-5-2').css("display","none");
                            $('#item-checkbox-11').prop('checked', false);
                        }
                    })

                    $('#id-div-container-2-5').on('mouseleave',function(){
                        if(clicked11 == false){
                        $('#id-div-container-2-5').css("border","None");
                    }
                    }) 
                    
                    


                    var clicked12 = false;
                    $('#id-div-container-2-6').on('mouseenter',function(){
                        if(clicked12 == false){
                        $('#id-div-container-2-6').css("border","6px solid Orange");
                        }   
                    })

                    $('#id-img-container-2-6').on('click',function(){
                        $('#id-div-container-2-6').css("border","6px solid Green");
                        $('#id-content-div2-6-2').css("display","block");
                        if(clicked12 == false){
                        clicked12 = true;
                        $('#item-checkbox-12').prop('checked', true);
            
                        }
                        else{
                            clicked12 = false;
                            $('#id-div-container-2-6').css("border","6px solid Orange");
                            $('#id-content-div2-6-2').css("display","none");
                            $('#item-checkbox-12').prop('checked', false);
                        }
                    })

                    $('#id-div-container-2-6').on('mouseleave',function(){
                        if(clicked12 == false){
                        $('#id-div-container-2-6').css("border","None");
                    }
                    })                    


                    var clicked13 = false;
                    $('#id-div-container-3-1').on('mouseenter',function(){
                        if(clicked13 == false){
                        $('#id-div-container-3-1').css("border","6px solid Orange");
                        }   
                    })

                    $('#id-img-container-3-1').on('click',function(){
                        $('#id-div-container-3-1').css("border","6px solid Green");
                        $('#id-content-div2-1-3').css("display","block");
                        if(clicked13 == false){
                        clicked13 = true;
                        $('#item-checkbox-13').prop('checked', true);
            
                        }
                        else{
                            clicked13 = false;
                            $('#id-div-container-3-1').css("border","6px solid Orange");
                            $('#id-content-div2-1-3').css("display","none");
                            $('#item-checkbox-13').prop('checked', false);
                        }
                    })

                    $('#id-div-container-3-1').on('mouseleave',function(){
                        if(clicked13 == false){
                        $('#id-div-container-3-1').css("border","None");
                    }
                    }) 
                    
                    

                    var clicked14 = false;
                    $('#id-div-container-3-2').on('mouseenter',function(){
                        if(clicked14 == false){
                        $('#id-div-container-3-2').css("border","6px solid Orange");
                        }   
                    })

                    $('#id-img-container-3-2').on('click',function(){
                        $('#id-div-container-3-2').css("border","6px solid Green");
                        $('#id-content-div2-2-3').css("display","block");
                        if(clicked14 == false){
                        clicked14 = true;
                        $('#item-checkbox-14').prop('checked', true);
            
                        }
                        else{
                            clicked14 = false;
                            $('#id-div-container-3-2').css("border","6px solid Orange");
                            $('#id-content-div2-2-3').css("display","none");
                            $('#item-checkbox-14').prop('checked', false);
                        }
                    })

                    $('#id-div-container-3-2').on('mouseleave',function(){
                        if(clicked14 == false){
                        $('#id-div-container-3-2').css("border","None");
                    }
                    })                      



                    var clicked15 = false;
                    $('#id-div-container-3-3').on('mouseenter',function(){
                        if(clicked15 == false){
                        $('#id-div-container-3-3').css("border","6px solid Orange");
                        }   
                    })

                    $('#id-img-container-3-3').on('click',function(){
                        $('#id-div-container-3-3').css("border","6px solid Green");
                        $('#id-content-div2-3-3').css("display","block");
                        if(clicked15 == false){
                        clicked15 = true;
                        $('#item-checkbox-15').prop('checked', true);
            
                        }
                        else{
                            clicked15 = false;
                            $('#id-div-container-3-3').css("border","6px solid Orange");
                            $('#id-content-div2-3-3').css("display","none");
                            $('#item-checkbox-15').prop('checked', false);
                        }
                    })

                    $('#id-div-container-3-3').on('mouseleave',function(){
                        if(clicked15 == false){
                        $('#id-div-container-3-3').css("border","None");
                    }
                    })                     





                    var clicked16 = false;
                    $('#id-div-container-3-4').on('mouseenter',function(){
                        if(clicked16 == false){
                        $('#id-div-container-3-4').css("border","6px solid Orange");
                        }   
                    })

                    $('#id-img-container-3-4').on('click',function(){
                        $('#id-div-container-3-4').css("border","6px solid Green");
                        $('#id-content-div2-4-3').css("display","block");
                        if(clicked16 == false){
                        clicked16 = true;
                        $('#item-checkbox-16').prop('checked', true);
            
                        }
                        else{
                            clicked16 = false;
                            $('#id-div-container-3-4').css("border","6px solid Orange");
                            $('#id-content-div2-4-3').css("display","none");
                            $('#item-checkbox-16').prop('checked', false);
                        }
                    })

                    $('#id-div-container-3-4').on('mouseleave',function(){
                        if(clicked16 == false){
                        $('#id-div-container-3-4').css("border","None");
                    }
                    }) 
                    
                    


                    var clicked17 = false;
                    $('#id-div-container-3-5').on('mouseenter',function(){
                        if(clicked17 == false){
                        $('#id-div-container-3-5').css("border","6px solid Orange");
                        }   
                    })

                    $('#id-img-container-3-5').on('click',function(){
                        $('#id-div-container-3-5').css("border","6px solid Green");
                        $('#id-content-div2-5-3').css("display","block");
                        if(clicked17 == false){
                        clicked17 = true;
                        $('#item-checkbox-17').prop('checked', true);
            
                        }
                        else{
                            clicked17 = false;
                            $('#id-div-container-3-5').css("border","6px solid Orange");
                            $('#id-content-div2-5-3').css("display","none");
                            $('#item-checkbox-17').prop('checked', false);
                        }
                    })

                    $('#id-div-container-3-5').on('mouseleave',function(){
                        if(clicked17 == false){
                        $('#id-div-container-3-5').css("border","None");
                    }
                    })                      




                    var clicked18 = false;
                    $('#id-div-container-3-6').on('mouseenter',function(){
                        if(clicked18 == false){
                        $('#id-div-container-3-6').css("border","6px solid Orange");
                        }   
                    })

                    $('#id-img-container-3-6').on('click',function(){
                        $('#id-div-container-3-6').css("border","6px solid Green");
                        $('#id-content-div2-6-3').css("display","block");
                        if(clicked18 == false){
                        clicked18 = true;
                        $('#item-checkbox-18').prop('checked', true);
            
                        }
                        else{
                            clicked18 = false;
                            $('#id-div-container-3-6').css("border","6px solid Orange");
                            $('#id-content-div2-6-3').css("display","none");
                            $('#item-checkbox-18').prop('checked', false);
                        }
                    })

                    $('#id-div-container-3-6').on('mouseleave',function(){
                        if(clicked18 == false){
                        $('#id-div-container-3-6').css("border","None");
                    }
                    })                
                    


                    /*
        $("#main-div-container1").slick({
            infinit:false,
            slidesToShow: 4,
            arrows : true,
            dots : false ,
            autoplay : false,
            centerMode: false,
            infinite: false,
            responsive: [
                
            {
            breakpoint: 1100,
 
            slidesToShow: 3,
            },
        ],
      })
*/

      // -------------------------------------------------
      $('#main-div-container1').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });

      //----------------------------------


        $("#main-div-container2").slick({
            infinit:false,
            slidesToShow: 4,
            arrows : true,
            dots : false ,
            autoplay : false,
            centerMode: false,
            infinite: false,
        })
        
        $("#main-div-container3").slick({
            infinit:false,
            slidesToShow: 4,
            arrows : true,
            dots : false ,
            autoplay : false,
            centerMode: false,
            infinite: false,
        })
    





});
