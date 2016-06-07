$(".new_click").click(function () {
    if ($(".slide_div").css('right') === '-235px') {

        $(".slide_div").animate({
            right: "0"
        });
        $("body").animate({
            right: "235px"
        });

    } else {
        $(".slide_div").animate({
            right: "-235px"

        });
        $("body").animate({
            right: "0"
        });
    }

});
$(".slide_div").blur(function () {
    $(".slide_div").animate({
        right: "-235px"
    });
    $("body").animate({
        right: "0"
    });
});