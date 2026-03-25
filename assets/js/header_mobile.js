$(document).ready(function () {
    // Mở/đóng menu tổng trên mobile
    $('.mobile-menu-toggle').click(function () {
        $('.menu-wrapper').slideToggle(300); // Trượt từ trên xuống

        var $icon = $(this).find('i');
        if ($icon.hasClass('fa-bars')) {
            $icon.removeClass('fa-bars').addClass('fa-xmark');
        } else {
            $icon.removeClass('fa-xmark').addClass('fa-bars');
        }
    });

    // Đóng/Mở submenu (Accordion)
    $('.submenu-toggle').click(function () {
        var $submenu = $(this).siblings('.sub-menu');
        var $icon = $(this).find('i');

        // Toggle submenu hiện tại
        $submenu.slideToggle(300);

        // Đổi icon + và -
        if ($icon.hasClass('fa-plus')) {
            $icon.removeClass('fa-plus').addClass('fa-minus');
        } else {
            $icon.removeClass('fa-minus').addClass('fa-plus');
        }
    });
});