const observer = new IntersectionObserver(([entry]) => {
    // Nếu chưa lướt tới (hoặc chưa hiển thị đủ 50%) thì bỏ qua
    if (!entry.isIntersecting) return;

    document.querySelectorAll('.counter').forEach(el => {
        const target = +el.dataset.target;
        const suffix = el.dataset.suffix || '';
        let start;

        const animate = (time) => {
            if (!start) start = time;
            const percent = Math.min((time - start) / 2000, 1);

            el.innerText = Math.floor(percent * target) + suffix;

            // Nếu chưa đạt 100% (1) thì gọi lại hàm
            if (percent < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
    });

    observer.disconnect(); // Chạy xong thì hủy theo dõi
    // chỉ chạy 1 lần sau khi lướt tới section-8
}, { threshold: 0.5 });

// Bắt đầu theo dõi section-8
observer.observe(document.querySelector('.section-8'));