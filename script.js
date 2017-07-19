//yayayayayayayayayayayayay

//navbar fixed-top
$(document).ready(function(){
    $(".pic1").click(function() {
        $("#gallery-main").attr("src","http://www.brainserver.net/uploads/sirius/contentImages/Needed_Goods2_Dog_toys.jpg");
        $(".buy").html("$15: Mr.Squeakertons");
        $("#description").html("The mr.squeakerton is a squeak toy of the best quality and is gauranteed to satisfy you as well as your pup.")
    });

    $(".pic2").click(function() {
        $("#gallery-main").attr("src","https://cdn.shopify.com/s/files/1/0155/5001/products/PlanetToys_large.jpg?v=1490568809%27");
        $(".buy").html("$15: Yarny the ball");
        $("#description").html("Yarny the ball is as it sounds,a yarn ball that doubles as your dogs best freind.")
        
    });

    $(".pic3").click(function() {
        $("#gallery-main").attr("src","http://blog.spartadog.com/wp-content/uploads/2015/03/dsc_05501.jpg");
        $(".buy").html("$15: Mr.Squeakertons");
        $("#description").html("The mr.squeakerton is a squeak toy of the best quality and is gauranteed to satisfy you as well as your pup.")
        $(".buy").attr("href","toy3.html");
    });
    
    
});

//no-repeat center center fixed





