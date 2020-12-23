canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
/*all cars var are create here*/
//car1 var are create here
car1_width=120;
car1_height=70;
car1_img="Pink.png";
car1_x=10;
car1_y=10;
//car2 var are create here
car2_width=120;
car2_height=70;
car2_img="Blue.png";
car2_x=10;
car2_y=100;

background_img="racing.jpg";
//function add is create here
function add(){
    img_tag=new Image();
    img_tag.onload=uploadBackground;
    img_tag.src=background_img;
    
    car1_tag=new Image();
    car1_tag.onload=uploadcar1;
    car1_tag.src=car1_img;

    car2_tag=new Image();
    car2_tag.onload=uploadcar2;
    car2_tag.src=car2_img;
    }

    function uploadBackground(){
        ctx.drawImage(img_tag,0,0,canvas.width,canvas.height);
    }
    function uploadcar1(){
        ctx.drawImage(car1_tag,car1_x,car1_y,car1_width,car1_height);
    }
    function uploadcar2(){
        ctx.drawImage(car2_tag,car2_x,car2_y,car2_width,car2_height);
    }
    window.addEventListener("keydown",my_keydown);
    function my_keydown(e){
        key_pressed=e.keyCode;
        console.log(key_pressed);
        if(key_pressed == "38"){
            console.log("UP arrow key");
            car1_up();
        }
        if(key_pressed == "37"){
            console.log("LEFT arrow key");
            car1_left();
        }
        if(key_pressed == "39"){
            console.log("RIGHT arrow key");
            car1_right();
        }
        if(key_pressed == "40"){
            console.log("DOWN arrow key");
            car1_down();
        }
    
       
        if(key_pressed == "87"){
            console.log("Key w");
            car2_up();
        }
        if(key_pressed == "65"){
            console.log("Key a");
            car2_left();
        }
        if(key_pressed == "68"){
            console.log("Key d");
            car2_right();
        }
        if(key_pressed == "83"){
            console.log("Key s");
            car2_down();
        }

        
        if(car1_x > 700){
            console.log("Car1 Won");
            document.getElementById("game_status").innerHTML="Car1 Won!!";
        }
        if(car2_x > 700){
            console.log("Car2 Won");
            document.getElementById("game_status").innerHTML="Car2 Won!!";
        }
    }



    function car1_up(){
        if(car1_y >= 10){
        car1_y = car1_y -10;
        console.log("When up arrow is pressed, x = "+ car1_x + "y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
        }
    }
    
    function car1_down(){
        if(car1_y <= 600){
        car1_y = car1_y +10;
        console.log("When up arrow is pressed, x = "+ car1_x + "y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
        }
    }
    
    function car1_left() { 
        if(car1_x >= 0) { 
        car1_x =car1_x - 10; 
        console.log("When left arrow is pressed, x = " + car1_x + " | y = " +car1_y); 
        uploadBackground(); 
        uploadcar1(); 
        uploadcar2(); 
        }
    }
    function car1_right() { 
        if(car1_x <= 700) { 
        car1_x =car1_x + 10; 
        console.log("When right arrow is pressed, x = " + car1_x + " | y = " +car1_y); 
        uploadBackground(); 
        uploadcar1(); 
        uploadcar2(); 
        } 
    }





    
    function car2_up(){
        if(car2_y >= 10){
        car2_y = car2_y -10;
        console.log("When up arrow is pressed, x = "+ car2_x + "y = " + car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
        }
    }
    
    function car2_down(){
        if(car2_y <= 600){
        car2_y = car2_y +10;
        console.log("When up arrow is pressed, x = "+ car2_x + "y = " + car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
        }
    }
    
    function car2_left() { 
        if(car2_x >= 0) { 
        car2_x =car2_x - 10; 
        console.log("When left arrow is pressed, x = " + car2_x + " | y = " +car2_y); 
        uploadBackground(); 
        uploadcar1(); 
        uploadcar2(); 
        }
    }
        function car2_right() { 
        if(car2_x <= 700) { 
        car2_x =car2_x + 10; 
        console.log("When right arrow is pressed, x = " + car2_x + " | y = " +car2_y); 
        uploadBackground(); 
        uploadcar1(); 
        uploadcar2(); 
        } 
    }
    
    
    