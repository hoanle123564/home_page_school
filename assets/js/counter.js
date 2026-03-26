const observer = new IntersectionObserver((entries, observer) => {
    // 1. Duyệt qua TẤT CẢ các mục đang được quan sát có sự thay đổi
    entries.forEach(entry => {
        // Nếu section này chưa lướt tới (hoặc chưa đủ 50%) thì bỏ qua nó
        if (!entry.isIntersecting) return;

        // 2. CHỈ tìm các thẻ '.counter' BÊN TRONG section vừa lọt vào khung hình
        entry.target.querySelectorAll('.counter').forEach(el => {
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

        // 3. Chỉ ngừng theo dõi ĐÚNG section này sau khi đã chạy hiệu ứng
        // Các section khác vẫn tiếp tục được chờ lướt tới
        observer.unobserve(entry.target);
    });
}, { threshold: 0.5 });

// Bắt đầu theo dõi các section (Nên kiểm tra xem thẻ có tồn tại không trước khi quan sát)
const section8 = document.querySelector('.section-8');
const sectionEducator = document.querySelector('.section-educator');

if (section8) observer.observe(section8);
if (sectionEducator) observer.observe(sectionEducator);