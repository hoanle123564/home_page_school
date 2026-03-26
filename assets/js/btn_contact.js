const contactData = {
    headoffice: { phone: "+1 (444) 010-8888", email: "headoffice@example.com", address: "12/A, New Jone, NYC" },
    suboffice: { phone: "+1 (444) 222-8888", email: "suboffice@example.com", address: "13/B, New Jone, NYC" },
    campus: { phone: "+1 (444) 000-8888", email: "jobs@webtrueexample.com", address: "12/C, New Jone, NYC" }
};

const phoneEl = document.getElementById('phone-link');
const emailEl = document.getElementById('email-link');
const addressEl = document.getElementById('address-text');

document.querySelectorAll('.btn-place').forEach(btn => {
    btn.addEventListener('click', function () {

        document.querySelector('.btn-place.active').classList.remove('active');
        this.classList.add('active');
        const { phone, email, address } = contactData[this.dataset.target];

        phoneEl.textContent = phone; phoneEl.href = `tel:${phone}`;
        emailEl.textContent = email; emailEl.href = `mailto:${email}`;
        addressEl.textContent = address;
    });
});