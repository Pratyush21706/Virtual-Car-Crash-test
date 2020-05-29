HELLO MAM ,
SUBMITTING THE PROJECT NOW AND AS YOU GAVE A CHALLANGE FOR THE BOUNCE OFF CONDITION ,SO HAVE A LOOK ONB THIS;
CODE:

 if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2&&
    fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2&&
    movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2&&
    fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
    fixedRect.velocityX =random(-5,5)
    fixedRect.velocityY =random(-5,5)
    }else{
    fixedRect.velocityX =0;
    fixedRect.velocityY  = 0;
    }
