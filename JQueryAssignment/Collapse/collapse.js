$(document).ready(function () {
    $("button").click(function(){
        if($(this).next().css("display") == "block")
            $(this).next().css("display","none");
        else
            $(this).next().css("display","block");
    });
});