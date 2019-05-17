$(() => {
    cheet("i l i k e c o d e", () => {
        window.open("https://github.com/oliverbooth/olivr.me", "_blank");
    });

    cheet("m i r r o r", () => {
        $(".row").addClass("anim-mirror-flip");
    });

    cheet("↑ ↑ ↓ ↓ ← → ← → b a", () => {
        $("body,html,p,h5").css({
            "font-family": "'Comic Sans MS','Times New Roman',cursive,serif",
            "background": "#ff0",
            "color": "#0ff"
        });
        $(".card").css({
            "font-family": "'Comic Sans MS','Times New Roman',cursive,serif",
            "background": "#f00",
            "color": "#0f0"
        });
    });
});