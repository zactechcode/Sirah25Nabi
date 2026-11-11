// Indeks nabi yang sedang dibuka di buku (0 = Adam A.S.)
let indeksNabiAktif = 0;

/* --------------------------------------------------------------------
   1. JAM REALTIME & KALENDER
   -------------------------------------------------------------------- */
function jalankanJamRealtime() {
  const elJam = document.getElementById('jam-realtime');
  const elTanggal = document.getElementById('tanggal-realtime');

  function perbaruiWaktu() {
    const sekarang = new Date();
    
    // Format Jam:Menit:Detik
    const jam = String(sekarang.getHours()).padStart(2, '0');
    const menit = String(sekarang.getMinutes()).padStart(2, '0');
    const detik = String(sekarang.getSeconds()).padStart(2, '0');
    if (elJam) elJam.textContent = `${jam}:${menit}:${detik}`;

    // Format Hari, Tanggal Bulan Tahun
    const opsiTanggal = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    if (elTanggal) elTanggal.textContent = sekarang.toLocaleDateString('id-ID', opsiTanggal);
  }

  perbaruiWaktu();
  setInterval(perbaruiWaktu, 1000); // Berdetik setiap 1 detik
}

/* --------------------------------------------------------------------
   2. TAMPILKAN DAFTAR 25 NABI KE KATALOG
   -------------------------------------------------------------------- */
function tampilkanKatalogNabi(daftar = dataNabi) {
  const wadahKatalog = document.getElementById('katalog-grid');
  if (!wadahKatalog) return;

  if (daftar.length === 0) {
    wadahKatalog.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #bad3c8;">Nabi tidak ditemukan.</p>`;
    return;
  }

  // Buat kartu nabi dengan perulangan sederhana
  wadahKatalog.innerHTML = daftar.map(nabi => `
    <div class="kartu-nabi">
      <span class="kartu-nomor">#${nabi.id}</span>
      <div class="kartu-arab">${nabi.arabic}</div>
      <h3 class="kartu-nama">${nabi.name} ${nabi.ululAzmi ? '★' : ''}</h3>
      <div class="kartu-gelar">${nabi.title}</div>
      <p class="kartu-ringkasan">${nabi.kisah.substring(0, 95)}...</p>
      <button class="btn-baca-kartu" onclick="bukaBuku(${nabi.id - 1})">
        📖 Buka Buku Kisah
      </button>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------
   3. LOGIKA BUKA BUKU 3D & GANTI HALAMAN
   -------------------------------------------------------------------- */
function bukaBuku(indeks) {
  if (indeks < 0 || indeks >= dataNabi.length) return;
  indeksNabiAktif = indeks;

  const nabi = dataNabi[indeks];
  const seksiBuku = document.getElementById('seksi-buku');

  // 1. Tampilkan Halaman Kiri (Profil & Mukjizat)
  document.getElementById('buku-nomor').textContent = `Nabi Ke-${nabi.id} dari 25 ${nabi.ululAzmi ? '(★ Ulul Azmi)' : ''}`;
  document.getElementById('buku-arab').textContent = nabi.arabic;
  document.getElementById('buku-nama').textContent = nabi.name;
  document.getElementById('buku-gelar').textContent = nabi.title;
  document.getElementById('buku-kaum').textContent = nabi.kaum;
  document.getElementById('buku-usia').textContent = nabi.usia;
  document.getElementById('buku-era').textContent = nabi.era;

  const daftarMukjizat = document.getElementById('buku-mukjizat');
  daftarMukjizat.innerHTML = nabi.mukjizat.map(m => `<li>${m}</li>`).join('');

  //Tampilkan Halaman Kanan 
  document.getElementById('buku-kisah').textContent = nabi.kisah;
  document.getElementById('buku-ayat').textContent = nabi.ayat;
  document.getElementById('buku-hikmah').textContent = `Hikmah: ${nabi.hikmah}`;
  document.getElementById('buku-indikator').textContent = `Kitab Nabi: ${nabi.name} (${nabi.id}/25)`;

  //Tampilkan seksi buku dan gulir layar ke buku
  if (seksiBuku) {
    seksiBuku.style.display = 'block';
    seksiBuku.scrollIntoView({ behavior: 'smooth' });
  }
}

// Fungsi ganti ke nabi sebelumnya atau berikutnya
function gantiHalaman(arah) {
  if (arah === 'sebelumnya' && indeksNabiAktif > 0) {
    bukaBuku(indeksNabiAktif - 1);
  } else if (arah === 'berikutnya' && indeksNabiAktif < dataNabi.length - 1) {
    bukaBuku(indeksNabiAktif + 1);
  }
}

// Fungsi menutup buku
function tutupBuku() {
  const seksiBuku = document.getElementById('seksi-buku');
  if (seksiBuku) seksiBuku.style.display = 'none';

  const katalog = document.getElementById('katalog');
  if (katalog) katalog.scrollIntoView({ behavior: 'smooth' });
}

/* --------------------------------------------------------------------
   4. PENCARIAN & FILTER KATALOG
   -------------------------------------------------------------------- */
function inisialisasiPencarianDanFilter() {
  const inputCari = document.getElementById('input-cari');
  const btnSemua = document.getElementById('filter-semua');
  const btnUlulAzmi = document.getElementById('filter-ululazmi');

  let filterAktif = 'semua';

  function filterData() {
    const kataKunci = inputCari ? inputCari.value.toLowerCase().trim() : '';

    const hasilFilter = dataNabi.filter(nabi => {
      const cocokKategori = filterAktif === 'semua' || (filterAktif === 'ululazmi' && nabi.ululAzmi);
      const cocokKata = nabi.name.toLowerCase().includes(kataKunci) || 
                        nabi.kaum.toLowerCase().includes(kataKunci) ||
                        nabi.title.toLowerCase().includes(kataKunci);
      return cocokKategori && cocokKata;
    });

    tampilkanKatalogNabi(hasilFilter);
  }

  if (inputCari) {
    inputCari.addEventListener('input', filterData);
  }

  if (btnSemua) {
    btnSemua.addEventListener('click', () => {
      filterAktif = 'semua';
      btnSemua.classList.add('aktif');
      if (btnUlulAzmi) btnUlulAzmi.classList.remove('aktif');
      filterData();
    });
  }

  if (btnUlulAzmi) {
    btnUlulAzmi.addEventListener('click', () => {
      filterAktif = 'ululazmi';
      btnUlulAzmi.classList.add('aktif');
      if (btnSemua) btnSemua.classList.remove('aktif');
      filterData();
    });
  }
}

/* --------------------------------------------------------------------
   5. MODUL QUIZ INTERAKTIF 25 NABI & RASUL
   -------------------------------------------------------------------- */
const bankSoalQuiz = [
  {
    soal: "Siapakah nabi yang dianugerahi julukan 'Abul Basyar' (Bapak Seluruh Manusia)?",
    opsi: ["Nabi Nuh A.S.", "Nabi Adam A.S.", "Nabi Ibrahim A.S.", "Nabi Idris A.S."],
    jawaban: 1,
    pembahasan: "Nabi Adam A.S. adalah manusia dan nabi pertama yang diciptakan Allah SWT dari sari pati tanah."
  },
  {
    soal: "Nabi yang pertama kali memelopori kemampuan menulis dengan pena dan menjahit pakaian adalah...",
    opsi: ["Nabi Idris A.S.", "Nabi Shaleh A.S.", "Nabi Hud A.S.", "Nabi Syits"],
    jawaban: 0,
    pembahasan: "Nabi Idris A.S. dikaruniai Allah kecerdasan luar biasa, menjadi pelopor literasi menulis dengan pena, ilmu falak (astronomi), dan membuat pakaian."
  },
  {
    soal: "Di antara para nabi berikut, manakah yang BUKAN termasuk dalam 5 Rasul penerima gelar Ulul Azmi?",
    opsi: ["Nabi Nuh A.S.", "Nabi Musa A.S.", "Nabi Daud A.S.", "Nabi Isa A.S."],
    jawaban: 2,
    pembahasan: "5 Rasul Ulul Azmi adalah Nabi Nuh A.S., Ibrahim A.S., Musa A.S., Isa A.S., dan Muhammad S.A.W. Nabi Daud A.S. adalah rasul penerima Zabur namun bukan Ulul Azmi."
  },
  {
    soal: "Nabi yang membangun bahtera raksasa untuk menyelamatkan orang-orang beriman dari bencana banjir bandang dahsyat adalah...",
    opsi: ["Nabi Yunus A.S.", "Nabi Hud A.S.", "Nabi Nuh A.S.", "Nabi Luth A.S."],
    jawaban: 2,
    pembahasan: "Nabi Nuh A.S. berdakwah selama 950 tahun dengan ketabahan luar biasa, kemudian diperintahkan membuat bahtera di atas bukit."
  },
  {
    soal: "Nabi yang selamat dari kobaran api raksasa yang dinyalakan oleh Raja Namrud karena api diperintahkan menjadi dingin adalah...",
    opsi: ["Nabi Ibrahim A.S.", "Nabi Ismail A.S.", "Nabi Ya'qub A.S.", "Nabi Yusuf A.S."],
    jawaban: 0,
    pembahasan: "Allah SWT berfirman: 'Wahai api! Jadilah dingin dan selamatkanlah Ibrahim!' (QS. Al-Anbiya: 69)."
  },
  {
    soal: "Nabi yang dengan tulus dan ikhlas bersedia disembelih oleh ayahnya demi menaati perintah wahyu Allah adalah...",
    opsi: ["Nabi Ishaq A.S.", "Nabi Ismail A.S.", "Nabi Yusuf A.S.", "Nabi Yahya A.S."],
    jawaban: 1,
    pembahasan: "Nabi Ismail A.S. (Dzabihullah) menunjukkan ketaatan mutlak kepada perintah Allah sebelum digantikan dengan sembelihan hewan kurban yang besar."
  },
  {
    soal: "Nabi yang dianugerahi ketampanan luar biasa, kemampuan menafsirkan mimpi, dan menjadi bendahara negeri Mesir adalah...",
    opsi: ["Nabi Yusuf A.S.", "Nabi Harun A.S.", "Nabi Daud A.S.", "Nabi Sulaiman A.S."],
    jawaban: 0,
    pembahasan: "Kisah Nabi Yusuf A.S. diabadikan dalam Al-Qur'an sebagai Ahsanul Qashash (Kisah Terbaik), menggambarkan perjalanan dari sumur hingga istana Mesir."
  },
  {
    soal: "Nabi yang menjadi teladan kesabaran tertinggi saat diuji dengan penyakit berat, kehilangan harta, dan wafatnya anak-anaknya adalah...",
    opsi: ["Nabi Zakariya A.S.", "Nabi Ayyub A.S.", "Nabi Dzulkifli A.S.", "Nabi Syu'aib A.S."],
    jawaban: 1,
    pembahasan: "Nabi Ayyub A.S. senantiasa berzikir dan bersyukur dalam derita hingga Allah menyembuhkan penyakitnya dan melipatgandakan kembali nikmat-Nya."
  },
  {
    soal: "Nabi yang memiliki mukjizat tongkat yang dapat membelah Laut Merah saat dikejar oleh bala tentara Fir'aun adalah...",
    opsi: ["Nabi Musa A.S.", "Nabi Harun A.S.", "Nabi Isa A.S.", "Nabi Syu'aib A.S."],
    jawaban: 0,
    pembahasan: "Nabi Musa A.S. (Kalimullah) memukulkan tongkatnya ke laut atas izin Allah sehingga Laut Merah terbelah menjadi jalan kering bagi Bani Israil."
  },
  {
    soal: "Nabi yang dianugerahi kitab Zabur, bersuara merdu saat bertasbih, serta mampu melunakkan besi dengan tangan kosong adalah...",
    opsi: ["Nabi Sulaiman A.S.", "Nabi Daud A.S.", "Nabi Ilyas A.S.", "Nabi Zakariya A.S."],
    jawaban: 1,
    pembahasan: "Nabi Daud A.S. menerima kitab Zabur dan memiliki mukjizat melunakkan besi untuk membuat baju zirah pelindung yang kokoh."
  },
  {
    soal: "Nabi yang dianugerahi kerajaan agung dan mampu berkomunikasi dengan binatang, mengendalikan angin, serta menundukkan jin adalah...",
    opsi: ["Nabi Daud A.S.", "Nabi Sulaiman A.S.", "Nabi Yunus A.S.", "Nabi Zakariya A.S."],
    jawaban: 1,
    pembahasan: "Nabi Sulaiman A.S. berdoa meminta kerajaan yang tidak dimiliki siapa pun setelahnya, dan dianugerahi kepahaman atas bahasa semut dan burung hud-hud."
  },
  {
    soal: "Nabi yang sempat ditelan oleh ikan paus besar (Nun) di lautan luas dan selamat setelah bertasbih memohon ampun adalah...",
    opsi: ["Nabi Ilyas A.S.", "Nabi Yunus A.S.", "Nabi Yahya A.S.", "Nabi Shaleh A.S."],
    jawaban: 1,
    pembahasan: "Nabi Yunus A.S. memanjatkan doa: 'Laa ilaaha illaa Anta, subhaanaka innii kuntu minadz-dzaalimiin' di dalam kegelapan perut ikan paus hingga diselamatkan."
  },
  {
    soal: "Nabi yang dilahirkan tanpa seorang ayah dari rahim Maryam dan dapat berbicara sejak masih dalam buaian adalah...",
    opsi: ["Nabi Yahya A.S.", "Nabi Isa A.S.", "Nabi Zakariya A.S.", "Nabi Syits"],
    jawaban: 1,
    pembahasan: "Nabi Isa A.S. (Ruhullah) diciptakan melalui kalimat Allah kepada Maryam binti Imran dan dianugerahi kitab Injil serta mukjizat menyembuhkan orang buta dan kusta."
  },
  {
    soal: "Nabi yang dijuluki 'Khatibul Anbiya' (Juru Bicara Para Nabi) karena kefasihannya menasihati kaumnya yang curang dalam timbangan adalah...",
    opsi: ["Nabi Syu'aib A.S.", "Nabi Hud A.S.", "Nabi Luth A.S.", "Nabi Harun A.S."],
    jawaban: 0,
    pembahasan: "Nabi Syu'aib A.S. diutus kepada kaum Madyan dan Ashabul Aikah yang terkenal sering mengurangi takaran dan timbangan dalam berniaga."
  },
  {
    soal: "Mukjizat terbesar yang diturunkan kepada Nabi Muhammad S.A.W. yang abadi sepanjang masa adalah...",
    opsi: ["Membelah bulan menjadi dua", "Air memancar dari jari-jemari", "Kitab Suci Al-Qur'an", "Peristiwa Isra dan Mi'raj"],
    jawaban: 2,
    pembahasan: "Al-Qur'an Al-Karim adalah mukjizat agung nan abadi yang keasliannya dijamin langsung oleh Allah SWT hingga hari akhir zaman."
  }
];

let soalAktifQuiz = [];
let indeksSoalQuiz = 0;
let skorQuiz = 0;
let jawabanBenarCount = 0;
let jawabanSalahCount = 0;
let sudahMenjawabQuiz = false;

function mulaiQuiz() {
  // Acak dan ambil 10 soal dari bank soal
  const bankAcak = [...bankSoalQuiz].sort(() => 0.5 - Math.random());
  soalAktifQuiz = bankAcak.slice(0, 10);
  
  indeksSoalQuiz = 0;
  skorQuiz = 0;
  jawabanBenarCount = 0;
  jawabanSalahCount = 0;
  sudahMenjawabQuiz = false;

  // Atur tampilan layar panel
  document.getElementById('quiz-layar-mulai').style.display = 'none';
  document.getElementById('quiz-layar-hasil').style.display = 'none';
  document.getElementById('quiz-layar-soal').style.display = 'block';

  tampilkanSoalQuiz();
}

function tampilkanSoalQuiz() {
  sudahMenjawabQuiz = false;
  const soalSekarang = soalAktifQuiz[indeksSoalQuiz];
  const totalSoal = soalAktifQuiz.length;

  // Update header progres
  document.getElementById('quiz-nomor-soal').textContent = `Soal ${indeksSoalQuiz + 1} dari ${totalSoal}`;
  document.getElementById('quiz-skor-live').textContent = `Skor: ${skorQuiz}`;

  // Update progress bar
  const persenProgres = ((indeksSoalQuiz + 1) / totalSoal) * 100;
  document.getElementById('quiz-progress-bar').style.width = `${persenProgres}%`;

  // Update teks pertanyaan
  document.getElementById('quiz-teks-soal').textContent = soalSekarang.soal;

  // Render opsi jawaban A, B, C, D
  const wadahOpsi = document.getElementById('quiz-opsi-jawaban');
  const labelHuruf = ['A', 'B', 'C', 'D'];
  wadahOpsi.innerHTML = soalSekarang.opsi.map((opsiTeks, idx) => `
    <button class="btn-opsi-quiz" id="opsi-quiz-${idx}" onclick="pilihJawabanQuiz(${idx})">
      <span class="huruf-opsi">${labelHuruf[idx]}</span>
      <span>${opsiTeks}</span>
    </button>
  `).join('');

  // Sembunyikan box pembahasan & tombol berikutnya
  const elPembahasan = document.getElementById('quiz-pembahasan');
  elPembahasan.style.display = 'none';
  
  const btnNext = document.getElementById('btn-soal-berikutnya');
  btnNext.style.display = 'none';
  btnNext.textContent = (indeksSoalQuiz === totalSoal - 1) ? 'Lihat Hasil Akhir 🏆' : 'Soal Selanjutnya →';
}

function pilihJawabanQuiz(indeksDipilih) {
  if (sudahMenjawabQuiz) return;
  sudahMenjawabQuiz = true;

  const soalSekarang = soalAktifQuiz[indeksSoalQuiz];
  const apakahBenar = (indeksDipilih === soalSekarang.jawaban);

  // Nonaktifkan semua tombol opsi agar tidak bisa diklik berulang
  const semuaTombol = document.querySelectorAll('.btn-opsi-quiz');
  semuaTombol.forEach(btn => btn.disabled = true);

  // Beri warna visual status jawaban
  const btnDipilih = document.getElementById(`opsi-quiz-${indeksDipilih}`);
  const btnKunci = document.getElementById(`opsi-quiz-${soalSekarang.jawaban}`);

  if (apakahBenar) {
    skorQuiz += 10;
    jawabanBenarCount++;
    if (btnDipilih) btnDipilih.classList.add('benar');
  } else {
    jawabanSalahCount++;
    if (btnDipilih) btnDipilih.classList.add('salah');
    if (btnKunci) btnKunci.classList.add('benar');
  }

  // Update skor live
  document.getElementById('quiz-skor-live').textContent = `Skor: ${skorQuiz}`;

  // Tampilkan pembahasan detail
  const elPembahasan = document.getElementById('quiz-pembahasan');
  const elStatus = document.getElementById('pembahasan-status');
  const elTeks = document.getElementById('pembahasan-teks');

  elStatus.textContent = apakahBenar ? '✓ Jawaban Tepat!' : '✕ Jawaban Kurang Tepat';
  elStatus.className = `pembahasan-status ${apakahBenar ? 'tepat' : 'keliru'}`;
  elTeks.textContent = soalSekarang.pembahasan;
  elPembahasan.style.display = 'block';

  // Tampilkan tombol lanjut
  document.getElementById('btn-soal-berikutnya').style.display = 'inline-block';
}

function soalBerikutnya() {
  if (indeksSoalQuiz < soalAktifQuiz.length - 1) {
    indeksSoalQuiz++;
    tampilkanSoalQuiz();
  } else {
    selesaiQuiz();
  }
}

function selesaiQuiz() {
  document.getElementById('quiz-layar-soal').style.display = 'none';
  const layarHasil = document.getElementById('quiz-layar-hasil');
  layarHasil.style.display = 'block';

  document.getElementById('hasil-angka-skor').textContent = skorQuiz;
  document.getElementById('hasil-total-benar').textContent = jawabanBenarCount;
  document.getElementById('hasil-total-salah').textContent = jawabanSalahCount;

  const elIkon = document.getElementById('hasil-ikon');
  const elPredikat = document.getElementById('hasil-predikat');
  const elPesan = document.getElementById('hasil-pesan');

  if (skorQuiz === 100) {
    elIkon.textContent = '🏆';
    elPredikat.textContent = 'Mumtaz (Sempurna & Istimewa)';
    elPesan.textContent = 'Maa Syaa Allah! Pengetahuanmu tentang sejarah 25 Nabi dan Rasul sangat sempurna!';
  } else if (skorQuiz >= 70) {
    elIkon.textContent = '🌟';
    elPredikat.textContent = 'Jayyid Jiddan (Sangat Bagus)';
    elPesan.textContent = 'Bagus sekali! Wawasan sirah kenabianmu sudah sangat baik dan memahami intisari perjuangan para nabi.';
  } else if (skorQuiz >= 50) {
    elIkon.textContent = '📖';
    elPredikat.textContent = 'Jayyid (Cukup Baik)';
    elPesan.textContent = 'Sudah cukup memahami dasar-dasar kisah para nabi. Buka kembali Kitab Kisah 3D untuk menambah wawasanmu!';
  } else {
    elIkon.textContent = '🌱';
    elPredikat.textContent = 'Perlu Belajar Lagi';
    elPesan.textContent = 'Jangan berkecil hati! Mempelajari sejarah para nabi adalah ibadah dan bekal hikmah yang berharga. Yuk coba lagi!';
  }

  layarHasil.scrollIntoView({ behavior: 'smooth' });
}

/* --------------------------------------------------------------------
   6. INISIALISASI SAAT HALAMAN SELESAI DIMUAT
   -------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  jalankanJamRealtime();
  tampilkanKatalogNabi();
  inisialisasiPencarianDanFilter();
  
  // Pastikan tombol atau tautan yang mengarah ke buku selalu menampilkan seksi buku
  document.querySelectorAll('a[href="#seksi-buku"]').forEach(tautan => {
    tautan.addEventListener('click', () => {
      const seksiBuku = document.getElementById('seksi-buku');
      if (seksiBuku) seksiBuku.style.display = 'block';
    });
  });

  // Tampilkan buku pertama (Nabi Adam) sebagai demo awal
  bukaBuku(0);
});
