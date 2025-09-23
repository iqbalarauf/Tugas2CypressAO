# Cypress Automation - Tugas 2

Repository ini merupakan pengerjaan tugas 2 API Automation untuk kelas Bootcamp Cypress Automation Testing
Lakukan penyalinan repo ini dengan langkah berikut:

## Proses Instalasi

Gunakan Git untuk meng-clone repositori ini ke dalam komputer

```
git clone <link Gitlab>
```

## Instalasi Script

Sebelum melanjutkan proses instalasi project Cypress, pastikan sudah menginstall Node.js pada komputer
Jika telah meng-install Node.js, lanjut langkan berikut:

1. Ganti Lokasi Folder sesuai dengan Lokasi Folder yang diharapkan
```
npm init -y
```

2. Install seluruh library NPM yang terdapat dalam project Cypress
```
npm install --save-dev
```

3. Buka Cypress
```
npx cypress open
```

### Cara Penggunaan

Jika menggunakan project local, pastikan bahwa anda telah menjalankan
```
npx cypress run
```
dan jika diperlukan artisan lain (misal queue) juga silakan diaktifkan.

Command untuk menjalankan automation testing secara headless
```
npx cypress run
```

Command untuk menjalankan automation testing secara headed (proses pengujian ditampilkan Cypress)
```
npx cypress run --headed
```

Command untuk menjalankan Launchpad Cypress
```
npx cypress open
```

## Instalasi Environment
Lakukan penyalinan pada file .env.example.
Ubah nama file tersebut menjadi .env
