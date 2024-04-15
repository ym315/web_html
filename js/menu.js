$(document).ready(function(){
    //start    



        $('header').load('menu.html header>div');
        $('.main_left').load('menu.html .main_menu, menu.html .main_left_dummy');
        $('.main_left_dummy').load('menu.html .main_left_dummy>div');
        $('footer').load('menu.html footer>div');
        // $('aside').load('menu.html aside');   


        $('.btn_close').on('click',function(e){
            e.preventDefault();
            $(this).parents().find('.popupdiv').hide();            
            

        });
    
    
    
});

