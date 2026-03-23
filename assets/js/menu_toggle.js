document.addEventListener('DOMContentLoaded', function () {
    const searchToggleBtn = document.getElementById('search-menu-toggle');
    const sideMenu = document.getElementById('side-search-menu');
    const overlay = document.getElementById('menu-overlay');

    // Khi click vào icon kính lúp -> Mở menu & bật vùng đen
    searchToggleBtn.addEventListener('click', function (e) {
        e.preventDefault(); // Ngăn chặn load lại trang
        sideMenu.classList.add('active');
        overlay.classList.add('active');
    });

    // Khi click vào vùng nền đen -> Tắt popup
    overlay.addEventListener('click', function () {
        sideMenu.classList.remove('active');
        overlay.classList.remove('active');
    });
});