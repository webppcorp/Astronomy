$(".planet").mouseenter(function(event) {
    var planetNumber = this.classList[0];
    animationState(event,planetNumber);
    highLight(event , planetNumber);
    tooltipText(event , planetNumber);
})

$(".planet").mouseleave(function(event) {
    var planetNumber = this.classList[0];
    animationState(event,planetNumber);
    highLight(event , planetNumber);
    tooltipText(event , planetNumber);
})

function animationState(e , planetNumber) {
    if (e.type === "mouseenter") {
        $(".orbit-" + planetNumber).eq(1).addClass("js--stop-orbit");
        $(".tooltip-" + planetNumber).addClass("js--stop-orbit");
    } else if (e.type === "mouseleave") {
        $(".orbit-" + planetNumber).eq(1).removeClass("js--stop-orbit");
        $(".tooltip-" + planetNumber).removeClass("js--stop-orbit");
    }
}

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

function tooltipText(e , planetNumber) {
    if (e.type === "mouseenter") {
        $(".js--text-" + planetNumber).addClass("js--tooltip-text");
    } else if (e.type === "mouseleave") {
        $(".js--text-" + planetNumber).removeClass("js--tooltip-text")
    }
}
