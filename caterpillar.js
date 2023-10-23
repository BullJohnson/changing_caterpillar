"use strict";

const newList = $("<ul>");

$(document).ready(function() {  
    $('#restore').hide();
    $("#transform").on('click', function() {
        // Add your code here
        $("h1").text("The Butterfly").css("color","#dd8d40").css("background-color","#000000");
        $("#p1").html("<mark>This is a <strong>butterfly</strong> in its natural habitat:</mark>");
        $("img").attr("src","https://www.kasandbox.org/programming-images/animals/butterfly_monarch.png");
        //$("h1").css("color","#dd8d40");
        $("main").append(newList);
        $("ul").append("<li>There are more than 20,000 species of butterflies</li>");
        $("ul").append("<li>Butterflies have up to 12.000 eyes</li>");
        $("ul").append("<li>Butterflies live only a few weeks</li>");
        $("ul").append("<li>Butterflies use their feet to taste</li>");
        $("a").attr("href","https://en.wikipedia.org/wiki/Butterfly").text("Butterfly");
        //$("a").text("Butterfly");
        $("ul").addClass("result");
        $("#transform").css("display","none");
        $("#restore").css("display","inline");
    });

    $("#restore").on('click', function() {
        location.reload(true); 
    }); 

});