
# PipTrade

Website PipTrade merupakan alat bantu untuk trader dan investor dalam manajemen risiko pada setiap posisi trading maupun investasi yang terbuka. Fitur utama yang disediakan adalah kalkulator manajemen risiko dan jurnal trading, yang membantu pengguna dalam memantau portofolio di pasar kripto, saham, dan forex.


## Demo

https://piptrade.vercel.app


## Instalasi

Prerequisites
- Node.js: Node.js diperlukan untuk menjalankan proyek. Unduh dan instal Node.js dari situs resmi https://nodejs.org/en
- Vue JS: Proyek ini menggunakan Vue.js sebagai framework frontend dan Tailwind CSS untuk styling. Tidak perlu menginstalnya secara terpisah karena dependensi ini akan otomatis diunduh melalui npm.

Clone Repositori
```bash
  git clone https://github.com/Zapip/piptrade
```
Ekstrak File ZIP (Alternatif)
Jika menerima file dalam format .zip atau .rar, lakukan langkah berikut:

    1. Ekstrak file .zip atau .rar menggunakan aplikasi seperti WinRAR atau 7-Zip.
    2. Navigasikan ke folder hasil ekstraksi tersebut.

Install Dependencies
 ```bash
  npm install
```
Setelah instalasi selesai, jalankan server pengembangan menggunakan perintah berikut:
 ```bash
  npm run dev
```
Website akan berjalan di http://localhost:3000 (atau port lain yang ditentukan). Buka browser dan akses URL tersebut untuk melihat Website.



## Teknologi

**Client:** Vue, TailwindCSS


## Catatan

    1. Website ini belum responsif sepenuhnya. Disarankan untuk mengaksesnya menggunakan PC atau laptop.
    2. Jika mengalami kendala saat instalasi atau penggunaan, silakan hubungi pengembang proyek.


## Struktur Folder
```
.
├── .vscode/               # Konfigurasi untuk Visual Studio Code
├── node_modules/          # Folder dependensi proyek (dihasilkan oleh npm)
├── public/                # Folder untuk file publik seperti favicon dan index.html
└── src/                   # Folder utama untuk sumber kode aplikasi
    ├── assets/            # Folder untuk asset proyek
    │   ├── images/        # Folder untuk gambar
    │   ├── font/          # Folder untuk font
    │   ├── styles/        # Folder untuk file CSS atau SASS
    │   └── icons/         # Folder untuk ikon aplikasi
    ├── components/        # Folder untuk komponen Vue
    │   ├── auth/          # Komponen terkait autentikasi
    │   ├── dashboard/     # Komponen terkait dashboard
    │   └── shared/        # Komponen yang dapat digunakan ulang
    ├── layouts/           # Folder untuk layout aplikasi
    ├── router/            # Folder untuk konfigurasi rute Vue Router
    ├── views/             # Folder untuk halaman utama aplikasi
    │   ├── Auth/          # Halaman untuk autentikasi
    │   ├── Dashboard/     # Halaman untuk dashboard
    │   ├── LandingPage.vue # Halaman landing page
    │   └── NotFound.vue   # Halaman untuk 404 error
    ├── App.vue            # Komponen utama Vue
    ├── main.js            # Entry point aplikasi
├── .gitignore             # File untuk mengabaikan file saat menggunakan Git
├── package.json           # File konfigurasi proyek Node.js
├── postcss.config.js      # Konfigurasi PostCSS untuk TailwindCSS
├── readme.md              # Dokumentasi proyek
├── tailwind.config.js     # Konfigurasi TailwindCSS
└── vite.config.js         # Konfigurasi Vite sebagai bundler aplikasi
```
