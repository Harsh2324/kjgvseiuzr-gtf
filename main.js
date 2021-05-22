var canvas=new fabric.Canvas('mycanvas');
var hero_img_hight=30;
var hero_img_width=30;
playerx=10;
playery=10;
var player_object="";
var block_image="";

function player_update(){
    fabric.Image.fromURL("player.png",function(img){
        player_object=img;
     player_object.scaleToWidth(150);
     player_object.scaleToHeight(140);
     player_object.set({
         top:playery,
         left:playerx
     });
     canvas.add(player_object);

    });

}

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(img){
        block_image_object=img;
        block_image_object.scaleToWidth(hero_img_width);
        block_image_object.scaleToHeight(hero_img_hight);
        block_image_object.set({
            top:playery,
            left:playerx
        });
        canvas.add(block_image_object);
    });
    }