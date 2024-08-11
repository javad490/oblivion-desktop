import { Language } from './type';

const indonesia: Language = {
    global: {},
    status: {
        connecting: 'Menghubungkan ...',
        connected: 'Terhubung',
        connected_confirm: 'Berhasil Terhubung',
        disconnecting: 'Memutuskan ...',
        disconnected: 'Terputus',
        ip_check: 'Mengecek IP ...'
    },
    home: {
        title_warp_based: 'Berbasis Warp',
        drawer_settings_warp: 'Pengaturan Warp',
        drawer_settings_routing_rules: 'Aturan Perutean',
        drawer_settings_app: 'Pengaturan Aplikasi',
        drawer_settings_scanner: 'Pengaturan Pemindai',
        drawer_settings_network: 'Pengaturan Jaringan',
        drawer_log: 'Log Aplikasi',
        drawer_update: 'Perbarui',
        drawer_update_label: 'Pembaruan Baru',
        drawer_speed_test: 'Uji kecepatan',
        drawer_about: 'Tentang Aplikasi',
        drawer_lang: 'Ganti Bahasa'
    },
    toast: {
        ip_check_please_wait: 'Mohon tunggu beberapa detik untuk mencoba kembali pemeriksaan!',
        ir_location:
            'Cloudflare telah tersambung ke IP dengan lokasi Iran, yang berbeda dengan IP Anda yang sebenarnya. Anda bisa menggunakannya untuk melewati penyaringan, tetapi tidak untuk sanksi. \nJangan khawatir! Anda bisa mengubah lokasi dalam pengaturan menggunakan opsi "Gool" atau "psiphon".',
        btn_submit: 'Mengerti',
        copied: 'Tersalin!',
        cleared: 'Log telah dibersihkan!',
        please_wait: 'Mohon Tunggu ...',
        offline: 'Anda sedang offline!',
        settings_changed: 'Menerapkan pengaturan memerlukan penyambungan ulang.'
    },
    settings: {
        title: 'Pengaturan Warp',
        more: 'Pengaturan Lebih',
        method_warp: 'Warp',
        method_warp_desc: 'Aktifkan Warp',
        method_gool: 'Gool',
        method_gool_desc: 'Aktifkan WarpInWarp',
        method_psiphon: 'Psiphon',
        method_psiphon_desc: 'Aktifkan Psiphon',
        method_psiphon_location: 'Negara',
        method_psiphon_location_auto: 'Otomatis',
        method_psiphon_location_desc: 'Pilih IP negara yang diinginkan',
        endpoint: 'Titik Akhir',
        endpoint_desc: 'Kombinasi IP atau nama domain, bersama dengan port',
        license: 'Lisensi',
        license_desc: 'Konsumsi lisensi menjadi dua kali lipat',
        option: 'Pengaturan Aplikasi',
        network: 'Pengaturan Jaringan',
        proxy_mode: 'Konfigurasi',
        proxy_mode_desc: 'Menentukan Pengaturan Proxy',
        port: 'Port Proxy',
        port_desc: 'Tentukan port proxy aplikasi',
        share_vpn: 'Berbagi (LAN)',
        share_vpn_desc: 'Bagikan proxy di jaringan',
        dns: 'DNS',
        dns_desc: 'Blokir iklan & konten dewasa',
        dns_error: 'Ini berlaku untuk metode Warp dan Gool',
        ip_data: 'Cek IP',
        ip_data_desc: 'Tampilkan IP & Lokasi setelah koneksi',
        data_usage: 'Penggunaan Data',
        data_usage_desc: 'Tampilkan penggunaan data & kecepatan waktu nyata',
        dark_mode: 'Mode Gelap',
        dark_mode_desc: 'Menentukan mode tampilan aplikasi',
        lang: 'Bahasa',
        lang_desc: 'Ganti bahasa antarmuka aplikasi',
        open_login: 'Mulai saat masuk',
        open_login_desc: 'Buka saat sistem dinyalakan',
        auto_connect: 'Koneksi Otomatis',
        auto_connect_desc: 'Hubungkan saat aplikasi dibuka',
        system_tray: 'Baki Sistem',
        system_tray_desc: 'Tidak menempatkan ikon program di bilah tugas',
        force_close: 'Paksa Tutup',
        force_close_desc: 'Jangan berada di baki sistem saat keluar',
        shortcut: 'Navigator',
        shortcut_desc: 'Pintasan di halaman beranda',
        restore: 'Pulihkan',
        restore_desc: 'Menerapkan pengaturan bawaan aplikasi',
        scanner: 'Pengaturan Pemindai',
        scanner_alert: 'Pemindai diaktifkan jika Anda menggunakan alamat titik akhir bawaan.',
        scanner_ip_type: 'Tipe Titik Akhir',
        scanner_ip_type_auto: 'Otomatis',
        scanner_ip_type_desc: 'Untuk mencari IP titik akhir',
        scanner_rtt: 'Selang Waktu',
        scanner_rtt_default: 'Bawaan',
        scanner_rtt_desc: 'Batas Pemindai RTT',
        scanner_reserved: 'Dicadangkan',
        scanner_reserved_desc: 'Mengesampingkan nilai cadangan penjaga keamanan',
        routing_rules: 'Daftar Hitam',
        routing_rules_desc: 'Mencegah lalu lintas agar tidak lewat warp',
        routing_rules_disabled: 'Dimatikan',
        routing_rules_items: 'Item',
        profile: 'Profil',
        profile_desc: 'Titik akhir yang disimpan oleh Anda'
    },
    tabs: {
        home: 'Hubungkan',
        warp: 'Warp',
        network: 'Network',
        scanner: 'Scanner',
        app: 'App'
    },
    modal: {
        endpoint_title: 'Endpoint',
        license_title: 'Lisensi',
        license_desc:
            'Program ini tidak memerlukan lisensi Warp untuk menjalankannya, tetapi jika Anda mau, Anda bisa memasukkan lisensi Anda di sini.',
        license_clear: 'Hapus',
        port_title: 'Port Proxy',
        restore_title: 'Pulihkan Perubahan',
        restore_desc:
            'Dengan mengonfirmasi operasi pemulihan perubahan, semua pengaturan program akan kembali ke kondisi bawaan dan koneksi Anda akan terputus.',
        routing_rules_sample: 'Sampel',
        endpoint_default: 'Bawaan',
        endpoint_suggested: 'Disarankan',
        endpoint_latest: 'Terkini',
        endpoint_update: 'Menerima titik akhir yang disarankan',
        endpoint_paste: 'Menempelkan titik akhir aktif',
        profile_title: 'Profil',
        profile_name: 'Judul',
        profile_endpoint: 'Titik Akhir',
        profile_limitation: (value) => `Anda dapat menambahkan maksimal ${value} titik akhir.`,
        confirm: 'Saya mengerti',
        update: 'Perbarui',
        cancel: 'Batalkan'
    },
    log: {
        title: 'Log Aplikasi',
        desc: 'Jika log dibuat oleh program, log akan ditampilkan di sini.',
        error_invalid_license: 'Lisensi yang dimasukkan tidak valid.',
        error_too_many_connected: 'Batas penggunaan lisensi sudah terisi.',
        error_access_denied: 'Jalankan program sebagai Administrator.',
        error_failed_set_endpoint: 'Periksa atau ganti nilai titik akhir, atau coba lagi.',
        error_warp_identity: 'Kesalahan otentikasi di cloudflare; Coba lagi.',
        error_script_failed: 'Program mengalami kesalahan; Coba lagi.',
        error_object_null: 'Program mengalami kesalahan; Coba lagi.',
        error_port_already_in_use: (value) => `Port ${value} sedang digunakan program lain.`,
        error_port_socket: 'Gunakan port lain.',
        error_unknown_flag: 'Perintah yang tidak valid dieksekusi di latar belakang.',
        error_deadline_exceeded: 'Waktu koneksi habis; Coba Lagi.',
        error_configuration_encountered: 'Konfigurasi proxy mengalami kesalahan!',
        error_desktop_not_supported: 'Lingkungan desktop tidak didukung!',
        error_configuration_not_supported:
            'Konfigurasi proxy tidak didukung pada sistem operasi Anda, tetapi Anda dapat menggunakan Warp Proxy secara manual.',
        error_configuring_proxy: (value) => `Kesalahan mengkonfigurasi proxy untuk ${value}!`,
        error_wp_not_found: 'File warp-plus tidak terletak di samping paket aplikasi!',
        error_connection_failed: 'Koneksi ke 1.1.1.1 tidak berhasil.',
        error_country_failed: 'Tidak dapat terhubung ke negara yang dipilih.'
    },
    about: {
        title: 'Tentang Aplikasi',
        desc: 'Program ini merupakan versi tidak resmi, namun dapat diandalkan dari aplikasi Oblivion untuk Windows, Linux, dan Mac.\nProgram Oblivion Desktop dimodelkan berdasarkan antarmuka pengguna dari versi asli yang dikembangkan oleh Yousef Ghobadi. Program ini ditulis dan dipersiapkan untuk tujuan akses gratis ke Internet, dan perubahan nama atau penggunaan komersial apa pun tidak diperbolehkan..',
        slogan: 'Internet, untuk semua atau tidak sama sekali!'
    },
    systemTray: {
        connect: 'Hubungkan',
        connecting: 'Menghubungkan ...',
        connected: 'Terhubung',
        disconnecting: 'Memutuskan ...',
        settings: 'Pengaturan',
        settings_warp: 'Warp',
        settings_network: 'Jaringan',
        settings_scanner: 'Pemindai',
        settings_app: 'Aplikasi',
        about: 'Tentang',
        log: 'Log',
        speed_test: 'Uji Kecepatan',
        exit: 'Keluar'
    },
    update: {
        available: 'Pembaruan Tersedia',
        available_message: (value) =>
            `Versi terbaru dari ${value} sudah tersedia. Apakah ingin memperbarui sekarang?`,
        ready: 'Pembaruan telah Siap',
        ready_message: (value) =>
            `Versi terbaru dari ${value} sudah siap. Ini akan diinstal setelah restart. Apakah Anda ingin memulai ulang sekarang?`
    },
    speedTest: {
        title: 'Uji Kecepatan',
        initializing: 'Inisialisasi uji kecepatan ...',
        click_start: 'Klik tombol untuk memulai uji kecepatan.',
        error_msg: 'Terjadi kesalahan selama uji kecepatan. Silakan coba lagi.',
        server_unavailable: 'Server uji kecepatan tidak tersedia',
        download_speed: 'Kecepatan unduh',
        upload_speed: 'Kecepatan upload',
        latency: 'Latensi',
        jitter: 'Jitter'
    }
};
export default indonesia;
