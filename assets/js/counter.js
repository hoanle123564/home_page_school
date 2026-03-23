document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Khi cuộn tới section này
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.counter');

                counters.forEach(el => {
                    const target = +el.dataset.target;
                    const suffix = el.dataset.suffix || '';
                    const duration = 3000;
                    let startTimestamp = null;

                    const step = (timestamp) => {
                        if (!startTimestamp) startTimestamp = timestamp;

                        // Tính toán phần trăm thời gian đã trôi qua (tối đa là 1 ~ 100%)
                        const progress = Math.min((timestamp - startTimestamp) / duration, 1);

                        // Cập nhật số dựa trên đúng phần trăm thời gian
                        el.innerText = Math.floor(progress * target) + suffix;

                        // Nếu chưa hết 2 giây thì tiếp tục chạy
                        if (progress < 1) {
                            requestAnimationFrame(step);
                        } else {
                            // Đảm bảo kết thúc hiển thị đúng số đích
                            el.innerText = target + suffix;
                        }
                    };

                    // Kích hoạt animation
                    requestAnimationFrame(step);
                });

                // Ngừng theo dõi để không chạy lại khi cuộn ngược lên
                observer.unobserve(entry.target);
            }
        });
    }, {
        // Bắt buộc section phải hiện lên ít nhất 50% màn hình mới kích hoạt
        threshold: 0.5
    });

    // Chỉ định theo dõi section-8
    const section = document.querySelector('.section-8');
    if (section) observer.observe(section);
});