$(document).ready(function() {
    $(".header-wrap-mobile input + label" ).click(function() {
        $(this).toggleClass("fixed");
    });
});