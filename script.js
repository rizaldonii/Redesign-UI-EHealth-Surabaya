document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    // Menambahkan event listener untuk form
    const form = document.getElementById('registrationForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Mencegah pengiriman form
        // Ganti 'halaman-baru.html' dengan URL halaman yang ingin Anda tuju
        window.location.href = 'submit-pendaftaran.html';
    });
});

// Fungsi untuk tombol "Print"
document.querySelector('.print-button').addEventListener('click', () => {
    window.print();
});

// Fungsi untuk tombol "Tutup"
document.querySelector('.close-button').addEventListener('click', () => {
    window.close();
});
