function openNav() {
  document.getElementById("mySidenav").style.width = "350px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


$(document).ready(function () { 
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop:true,
        nav:true,
        autoplay:true,
        autoplayTimeout: 5000
    });
    
    $("main .sect p").click(function() {
        $("main .sect p").removeClass();
        $(this).addClass("active");
    });
    
    $("main .sect p:first-child").click(function() {
        $("main .blocK").addClass("invisible");
        $("main .informComp").removeClass("invisible");
    });
    
    $("main .sect p:last-child").click(function() {
        $("main .blocK").addClass("invisible");
        $("main .informLocation").removeClass("invisible");
    });
    
    $("main .sect p:nth-child(2)").click(function() {
        $("main .blocK").addClass("invisible");
        $("main .informContact").removeClass("invisible");
    });

    $("nav .section.furniture").click(function() {
        $("nav .sub.section").removeClass("visible");
        $("nav .sub.section.furniture").addClass("visible");  
    });
    
    $("nav .sub.section.corpus").click(function() {
        $("nav .subsub.section").removeClass("visible");
        $("nav .subsub.section.corpus").addClass("visible d");
    });
    
    $("nav .section.kitcenFurniture").click(function() {
        $("nav .sub.section").removeClass("visible");
        $("nav .sub.section.kitcenFurniture").addClass("visible");  
    });
    
    $("nav .section.interactive").click(function() {
        $("nav .sub.section").removeClass("visible");
        $("nav .sub.section.interactive").addClass("visible");  
    });
    
});