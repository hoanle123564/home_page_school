document.addEventListener("DOMContentLoaded", function () {
    const newsItems = document.querySelectorAll(".list-news .item-news");

    if (newsItems.length > 0) {
        newsItems[0].classList.add("show");
    }

    newsItems.forEach(item => {
        item.addEventListener("mouseenter", function () {
            newsItems.forEach(el => el.classList.remove("show"));
            this.classList.add("show");
        });
    });
});