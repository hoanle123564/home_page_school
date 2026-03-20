document.addEventListener("DOMContentLoaded", function () {
    const Btn = document.getElementById("backToTop");

    window.onscroll = function () {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            Btn.style.display = "block";
        } else {
            Btn.style.display = "none";
        }
    }

    Btn.addEventListener("click", function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })

})