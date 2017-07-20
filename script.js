//yayayayayayayayayayayayay
/*global $*/
//navbar fixed-top
$(document).ready(function(){
        $("#a").click(function(){
            
        var num = 0;
        var num2=num++;
        });
    $(".pic1").click(function() {
        $("#gallery-main").attr("src","http://www.brainserver.net/uploads/sirius/contentImages/Needed_Goods2_Dog_toys.jpg");
        $(".buy").html("$15: Mr.Squeakertons");
        $("#description").html("The mr.squeakerton is a squeak toy of the squeakiest quality and is gauranteed to squeakify you as well as your pup to satisfaction.");
        $("#purchase").attr("href","toy1.html");
    });

    $(".pic2").click(function() {
        $("#gallery-main").attr("src","https://cdn.shopify.com/s/files/1/0155/5001/products/PlanetToys_large.jpg?v=1490568809%27");
        $(".buy").html("$15: Yarny the best ball");
        $("#description").html("Yarny the ball is as it sounds,a yarn ball that doubles as your dogs best freind.");
        $("#purchase").attr("href","toy2.html");
    });

    $(".pic3").click(function() {
        $("#gallery-main").attr("src","http://blog.spartadog.com/wp-content/uploads/2015/03/dsc_05501.jpg");
        $(".buy").html("$15: Senior Tugs a lot");
        $("#description").html("Senior tugs a lot is a dog toy whose purpose is to tugged upon as well as be appealing to the eyes. I mean seriously even I want to sink my teeth into that.");
        $("#purchase").attr("href","toy3.html");
    });
    
    
    $("#a").click(function(){
        $("p").attr("style","display:full");
    });
    
});

//no-repeat center center fixed

$(function () {
  $('[data-toggle="popover"]').popover();
});



