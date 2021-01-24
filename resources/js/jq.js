// Event Listener for mouse enter
$(".planet").mouseenter(function(event) {
    var planetNumber = this.classList[0];
    animationState(event,planetNumber);
    highLight(event , planetNumber);
    tooltipText(event , planetNumber);
});

// Event Listener for mouse leave
$(".planet").mouseleave(function(event) {
    var planetNumber = this.classList[0];
    animationState(event,planetNumber);
    highLight(event , planetNumber);
    tooltipText(event , planetNumber);
});

// Stopping and playing orbit animation based on event that happend
function animationState(e , planetNumber) {
    if (e.type === "mouseenter") {
        $(".orbit-" + planetNumber).eq(1).addClass("js--stop-orbit");
        $(".tooltip-" + planetNumber).addClass("js--stop-orbit");
    } else if (e.type === "mouseleave") {
        $(".orbit-" + planetNumber).eq(1).removeClass("js--stop-orbit");
        $(".tooltip-" + planetNumber).removeClass("js--stop-orbit");
    }
}

// Highlighting orbit and planet border based on event that happend
function highLight(e , planetNumber) {
    if (e.type === "mouseenter") {
        $("." + planetNumber).addClass("js--orbit-highlight-on");
        $(".orbit-" + planetNumber).eq(0).removeClass("js--orbit-highlight-off")
        $(".orbit-" + planetNumber).eq(0).addClass("js--orbit-highlight-on");
    } else if (e.type === "mouseleave") {
        $("." + planetNumber).removeClass("js--orbit-highlight-on");
        $(".orbit-" + planetNumber).eq(0).removeClass("js--orbit-highlight-on");
        $(".orbit-" + planetNumber).eq(0).addClass("js--orbit-highlight-off");
    }
}

// Tooltip visibility based on planet location
function tooltipText(e , planetNumber) {

    // Finding device width and planet distance from viewport
    var deviceWidth = $(window).width();
    var deviceHeight = $(window).height();
    var planetPosition = $("." + planetNumber).offset();

    if (e.type === "mouseenter") {

        // Removing the last tooltip
        var tooltipClasses = document.querySelector(".js--text-" + planetNumber).classList;
        for (var i = 0; i < tooltipClasses.length; i++) {
            if (tooltipClasses[i].startsWith("tooltip")) {
                var tooltip = tooltipClasses[i];
            }
        }
        tooltipClasses.remove(tooltip);

        // Applying the appropriate tooltip
        if (planetPosition.top < (deviceHeight * 0.2)) {
            $(".js--text-" + planetNumber).addClass(" tooltip-text-bottom js--tooltip-text");
        } else if (planetPosition.left < (deviceWidth * 0.1)) {
            $(".js--text-" + planetNumber).addClass(" tooltip-text-right js--tooltip-text");
        } else {
            $(".js--text-" + planetNumber).addClass(" tooltip-text js--tooltip-text");
        }

    } else if (e.type === "mouseleave") {
        $(".js--text-" + planetNumber).removeClass("js--tooltip-text")
    }
}
