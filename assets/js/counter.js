const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const el = entry.target;
        const target = +el.dataset.target;
        const suffix = el.dataset.suffix || '';
        let start;

        const animate = (time) => {
            if (!start) start = time;
            const percent = Math.min((time - start) / 2000, 1);

            el.innerText = Math.floor(percent * target) + suffix;

            if (percent < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
        observer.unobserve(el);
    });
}, { threshold: 0.5 });

// Theo dõi trực tiếp các thẻ '.counter' thay vì các section lớn
// Điều này giúp trên mobile (khi section rất dài) bộ đếm vẫn hoạt động ngay khi lọt vào màn hình
document.querySelectorAll('.counter').forEach(counter => {
    observer.observe(counter);
});