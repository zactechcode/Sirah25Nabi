/**
 * ====================================================================
 * File ini berisi data 25 Nabi dan Rasul.
 * Setiap objek memiliki data yang ringkas, padat, dan mudah dipahami:
 * - id        : Nomor urut (1 - 25)
 * - name      : Nama Nabi
 * - arabic    : Teks Arab
 * - title     : Gelar / Julukan
 * - era       : Era sejarah (1 sampai 5)
 * - kaum      : Tempat diutus / Kaum
 * - usia      : Perkiraan usia
 * - ululAzmi  : true jika termasuk 5 Rasul Ulul Azmi
 * - mukjizat  : Daftar mukjizat utama
 * - kisah     : Ringkasan kisah perjuangan dakwah
 * - ayat      : Kutipan ayat Al-Qur'an terkait
 * - hikmah    : Pelajaran moral penting
 * ====================================================================
 */

const dataNabi = [
  {
    id: 1,
    name: "Adam A.S.",
    arabic: "آدَمُ عَلَيْهِ السَّلَامُ",
    title: "Abul Basyar (Bapak Manusia)",
    era: "Era Awal Kemanusiaan",
    kaum: "Bumi / Jazirah Arab",
    usia: "930 Tahun",
    ululAzmi: false,
    mukjizat: [
      "Diciptakan langsung oleh Allah dari tanah liat",
      "Diajarkan segala nama-nama benda di alam semesta",
      "Para malaikat diperintahkan bersujud hormat kepadanya"
    ],
    kisah: "Nabi Adam adalah manusia dan nabi pertama. Diciptakan sebagai khalifah di bumi, Adam sempat tinggal di surga bersama Hawa. Setelah terbujuk tipu daya Iblis memakan buah terlarang, Adam dan Hawa bertobat dengan tulus dan diturunkan ke bumi untuk memakmurkan alam dan mengajarkan tauhid kepada keturunannya.",
    ayat: "QS. Al-Baqarah : 31 — Dan Dia ajarkan kepada Adam nama-nama (benda) semuanya...",
    hikmah: "Pintu tobat selalu terbuka bagi yang tulus, dan kesombongan adalah sifat tercela yang menghancurkan."
  },
  {
    id: 2,
    name: "Idris A.S.",
    arabic: "إِدْرِيسُ عَلَيْهِ السَّلَامُ",
    title: "Asadul Usud (Singa Keberanian)",
    era: "Era Awal Kemanusiaan",
    kaum: "Babilonia & Mesir",
    usia: "345 Tahun",
    ululAzmi: false,
    mukjizat: [
      "Manusia pertama yang menulis dengan pena",
      "Menguasai ilmu falak (astronomi) dan menjahit pakaian",
      "Diangkat oleh Allah ke tempat yang tinggi"
    ],
    kisah: "Nabi Idris adalah keturunan keenam Nabi Adam. Beliau sangat tekun belajar wahyu terdahulu dan menjadi pelopor literasi manusia. Beliau berdakwah mengajak kaum Babilonia dan Mesir kembali menyembah Allah dengan penuh keberanian.",
    ayat: "QS. Maryam : 56 — Dan ceritakanlah kisah Idris, sesungguhnya dia seorang yang sangat mencintai kebenaran...",
    hikmah: "Ilmu pengetahuan dan keterampilan tangan adalah bekal ibadah untuk memajukan umat."
  },
  {
    id: 3,
    name: "Nuh A.S.",
    arabic: "نُوحٌ عَلَيْهِ السَّلَامُ",
    title: "Syaikhul Anbiya",
    era: "Era Awal Kemanusiaan",
    kaum: "Mesopotamia Selatan",
    usia: "950 Tahun Berdakwah",
    ululAzmi: true,
    mukjizat: [
      "Membuat bahtera raksasa penyelamat di atas bukit",
      "Selamat dari banjir bandang dahsyat bersama orang beriman",
      "Diberkahi ketabahan berdakwah hampir seribu tahun"
    ],
    kisah: "Rasul Ulul Azmi pertama yang mendakwahi kaum penyembah berhala selama 950 tahun dengan kesabaran luar biasa. Ketika kaumnya tetap membangkang, Allah memerintahkan Nuh membuat bahtera besar sebelum menurunkan azab banjir bandang.",
    ayat: "QS. Hud : 37 — Dan buatlah bahtera itu dengan pengawasan dan petunjuk wahyu Kami...",
    hikmah: "Kebenaran tidak ditentukan oleh banyaknya pengikut, melainkan oleh ketaatan kepada Allah."
  },
  {
    id: 4,
    name: "Hud A.S.",
    arabic: "هُودٌ عَلَيْهِ السَّلَامُ",
    title: "Nabi Kaum 'Ad",
    era: "Era Awal Kemanusiaan",
    kaum: "Al-Ahqaf (Yaman/Oman)",
    usia: "130 Tahun",
    ululAzmi: false,
    mukjizat: [
      "Selamat dari amukan badai topan beku 7 malam 8 hari",
      "Keberanian menghadapi kaum raksasa yang sombong"
    ],
    kisah: "Nabi Hud diutus kepada Kaum 'Ad yang berpostur perkasa dan memiliki istana-istana bertiang tinggi. Mereka menyombongkan kekuatan fisiknya hingga Allah menimpakan angin topan dingin yang memusnahkan orang-orang kafir.",
    ayat: "QS. Al-Haqqah : 6 — Sedangkan kaum 'Ad, mereka dibinasakan dengan angin topan yang sangat dingin...",
    hikmah: "Kekuatan fisik dan kemewahan bangunan fana di hadapan kekuasaan Allah."
  },
  {
    id: 5,
    name: "Shaleh A.S.",
    arabic: "صَالِحٌ عَلَيْهِ السَّلَامُ",
    title: "Nabi Kaum Tsamud",
    era: "Era Awal Kemanusiaan",
    kaum: "Al-Hijr (Mada'in Saleh)",
    usia: "70 Tahun",
    ululAzmi: false,
    mukjizat: [
      "Mengeluarkan unta betina mukjizat dari batu cadas",
      "Air susu unta mencukupi seluruh warga kota"
    ],
    kisah: "Diutus kepada Kaum Tsamud pemahat gunung batu. Kaumnya menantang mukjizat berupa unta betina dari batu karang. Setelah unta itu muncul, orang-orang zalim justru membunuhnya hingga diazab suara gemuruh petir dan gempa.",
    ayat: "QS. Asy-Syu'ara : 155 — Shaleh berkata: Inilah seekor unta betina; ia berhak mendapat giliran minum...",
    hikmah: "Menghormati perjanjian dan tidak menantang peringatan Tuhan."
  },
  {
    id: 6,
    name: "Ibrahim A.S.",
    arabic: "إِبْرَاهِيمُ عَلَيْهِ السَّلَامُ",
    title: "Khalilullah & Abul Anbiya",
    era: "Era Pemurnian Tauhid",
    kaum: "Babilonia, Syam, & Makkah",
    usia: "175 Tahun",
    ululAzmi: true,
    mukjizat: [
      "Tubuh tidak terbakar dalam kobaran api raksasa Namrud",
      "Menghidupkan kembali burung yang telah dicincang",
      "Membangun Ka'bah Baitullah bersama Ismail"
    ],
    kisah: "Bapak para nabi yang menegakkan ketauhidan murni. Ibrahim berani menghancurkan berhala kaumnya, selamat dari api Namrud, dan ikhlas mengorbankan putranya Ismail yang kemudian diganti Allah dengan domba surga.",
    ayat: "QS. Al-Anbiya : 69 — Kami berfirman: Wahai api! Jadilah dingin dan penyelamat bagi Ibrahim!",
    hikmah: "Pengorbanan yang dilandasi keikhlasan total akan dibalas kemuliaan abadi."
  },
  {
    id: 7,
    name: "Luth A.S.",
    arabic: "لُوطٌ عَلَيْهِ السَّلَامُ",
    title: "Penyeru Kesucian Fitrah",
    era: "Era Pemurnian Tauhid",
    kaum: "Sadum (Laut Mati)",
    usia: "175 Tahun",
    ululAzmi: false,
    mukjizat: [
      "Selamat dari azab batu belerang yang membalikkan kota",
      "Didatangi malaikat pelindung berwujud pemuda rupawan"
    ],
    kisah: "Keponakan Nabi Ibrahim yang diutus meluruskan moralitas Kaum Sodom yang menyimpang dari fitrah penciptaan manusia dengan perilaku sesama jenis. Kaumnya dibinasakan dengan gempa dan hujan batu belerang.",
    ayat: "QS. Al-A'raf : 80 — Mengapa kamu melakukan perbuatan keji yang belum pernah dilakukan siapa pun sebelumnya?",
    hikmah: "Menjaga kesucian fitrah moral adalah syarat utama kelestarian martabat peradaban."
  },
  {
    id: 8,
    name: "Ismail A.S.",
    arabic: "إِسْمَاعِيلُ عَلَيْهِ السَّلَامُ",
    title: "Adz-Dzabih & Shodiqul Wa'di",
    era: "Era Pemurnian Tauhid",
    kaum: "Makkah Al-Mukarramah",
    usia: "137 Tahun",
    ululAzmi: false,
    mukjizat: [
      "Memancarkan mata air suci Zamzam lewat hentakan kaki",
      "Tebusan qurban domba surga saat hendak disembelih",
      "Meninggikan pondasi Ka'bah bersama Nabi Ibrahim"
    ],
    kisah: "Putra sulung Nabi Ibrahim dan Sayyidah Hajar. Ditinggalkan di lembah Makkah yang tandus saat bayi hingga memancar air Zamzam. Beliau menunjukkan ketaatan luar biasa saat diuji perintah sembelihan qurban.",
    ayat: "QS. Maryam : 54 — Sesungguhnya ia adalah seorang yang benar janjinya, dan seorang rasul dan nabi.",
    hikmah: "Bakti dan kepatuhan anak yang saleh kepada orang tua mendatangkan keberkahan akbar."
  },
  {
    id: 9,
    name: "Ishaq A.S.",
    arabic: "إِسْحَاقُ عَلَيْهِ السَّلَامُ",
    title: "An-Nabi Ash-Shalih",
    era: "Era Pemurnian Tauhid",
    kaum: "Kanaan (Palestina)",
    usia: "180 Tahun",
    ululAzmi: false,
    mukjizat: [
      "Lahir dari mukjizat kabar gembira Sarah di usia 90 tahun",
      "Menurunkan nabi-nabi Bani Israil yang berilmu tinggi"
    ],
    kisah: "Putra kedua Nabi Ibrahim dari Sarah. Kelahirannya membawa kegembiraan besar dan melanjutkan dakwah ayahnya di tanah Palestina dengan akhlak mulia dan kedalaman ilmu agama.",
    ayat: "QS. Ash-Shaffat : 112 — Dan Kami beri dia kabar gembira dengan kelahiran Ishaq seorang nabi yang saleh.",
    hikmah: "Harapan dan doa tidak boleh padam meski secara logika manusia tampak mustahil."
  },
  {
    id: 10,
    name: "Ya'qub A.S.",
    arabic: "يَعْقُوبُ عَلَيْهِ السَّلَامُ",
    title: "Isra'il (Hamba Pilihan)",
    era: "Era Pemurnian Tauhid",
    kaum: "Kanaan & Mesir",
    usia: "147 Tahun",
    ululAzmi: false,
    mukjizat: [
      "Matanya yang buta karena duka sembuh seketika usai mengusapkan jubah Yusuf",
      "Firasat tajam kenabian yang yakin Yusuf masih hidup"
    ],
    kisah: "Putra Nabi Ishaq yang dikaruniai 12 putra. Beliau mencontohkan kesabaran yang indah (shabrun jamil) selama puluhan tahun terpisah dari Yusuf sebelum akhirnya berkumpul kembali di Mesir dalam suasana haru.",
    ayat: "QS. Yusuf : 86 — Hanya kepada Allah aku mengadukan kesusahan dan kesedihanku...",
    hikmah: "Mengadukan segala duka hanya kepada Allah dan tidak pernah berputus asa dari rahmat-Nya."
  },
  {
    id: 11,
    name: "Yusuf A.S.",
    arabic: "يُوسُفُ عَلَيْهِ السَّلَامُ",
    title: "Ash-Shiddiq (Kisah Terbaik)",
    era: "Era Pemurnian Tauhid",
    kaum: "Mesir",
    usia: "110 Tahun",
    ululAzmi: false,
    mukjizat: [
      "Dianugerahi separuh ketampanan manusia di bumi",
      "Tafsir mimpi akurat yang menyelamatkan krisis pangan",
      "Integritas moral tertinggi menolak godaan zina"
    ],
    kisah: "Dibuang ke sumur oleh saudaranya, dijual jadi budak di Mesir, difitnah hingga dipenjara, lalu diangkat jadi menteri pangan karena keahlian menafsirkan mimpi raja. Yusuf memaafkan saudara-saudaranya dengan mulia.",
    ayat: "QS. Yusuf : 92 — Pada hari ini tidak ada cercaan terhadap kamu, mudah-mudahan Allah mengampunimu.",
    hikmah: "Integritas moral dan rasa takut kepada Allah lebih berharga daripada kenikmatan dunia sesaat."
  },
  {
    id: 12,
    name: "Ayyub A.S.",
    arabic: "أَيُّوبُ عَلَيْهِ السَّلَامُ",
    title: "Sayyidush Shabirin",
    era: "Era Ujian & Pembebasan",
    kaum: "Hauran (Syam)",
    usia: "120 Tahun",
    ululAzmi: false,
    mukjizat: [
      "Mata air kesembuhan memancar dari hentakan kaki",
      "Harta dan keluarga dipulihkan berlipat ganda"
    ],
    kisah: "Teladan puncak kesabaran manusia. Diuji dengan habisnya harta kekayaan, wafatnya seluruh anak-anaknya, dan penyakit kulit parah belasan tahun tanpa pernah berhenti berzikir dan bertasbih kepada Allah.",
    ayat: "QS. Al-Anbiya : 83 — Sungguh, aku telah ditimpa penyakit, padahal Engkau Maha Penyayang...",
    hikmah: "Kesabaran sejati adalah menjaga lisan dan hati dari berburuk sangka kepada takdir Allah."
  },
  {
    id: 13,
    name: "Syu'aib A.S.",
    arabic: "شُعَيْبٌ عَلَيْهِ السَّلَامُ",
    title: "Khatibul Anbiya",
    era: "Era Ujian & Pembebasan",
    kaum: "Madyan & Aikah",
    usia: "110 Tahun",
    ululAzmi: false,
    mukjizat: [
      "Kefasihan tutur kata diplomasi dakwah yang memikat",
      "Selamat dari bencana awan panas yang membakar kaum zalim"
    ],
    kisah: "Nabi yang memperjuangkan keadilan muamalah ekonomi bagi penduduk Madyan yang gemar curang mengurangi timbangan dan menipu pembeli. Beliau dijuluki juru bicara para nabi karena tutur katanya yang fasih.",
    ayat: "QS. Hud : 84 — Dan janganlah kamu kurangi takaran dan timbangan...",
    hikmah: "Kejujuran dalam perniagaan adalah bagian mendasar dari keimanan seorang muslim."
  },
  {
    id: 14,
    name: "Musa A.S.",
    arabic: "مُوسَىٰ عَلَيْهِ السَّلَامُ",
    title: "Kalimullah",
    era: "Era Ujian & Pembebasan",
    kaum: "Bani Israil & Mesir",
    usia: "120 Tahun",
    ululAzmi: true,
    mukjizat: [
      "Tongkat kayu berubah jadi ular pemakan sihir Fir'aun",
      "Membelah Laut Merah jadi jalan kering yang kokoh",
      "Menerima Kitab Taurat langsung di Bukit Sinai"
    ],
    kisah: "Rasul Ulul Azmi yang meruntuhkan tirani Fir'aun di Mesir dan membebaskan Bani Israil. Berbicara langsung dengan Allah di Lembah Thuwa dan memimpin kaumnya dengan Kitab Taurat.",
    ayat: "QS. Thaha : 77 — Dan pukullah (buatlah) untuk mereka jalan yang kering di laut itu...",
    hikmah: "Kekuatan tiran sezalim apa pun pasti runtuh di hadapan kebenaran tauhid Ilahi."
  },
  {
    id: 15,
    name: "Harun A.S.",
    arabic: "هَارُونُ عَلَيْهِ السَّلَامُ",
    title: "Wazir Nabi Musa",
    era: "Era Ujian & Pembebasan",
    kaum: "Bani Israil & Mesir",
    usia: "123 Tahun",
    ululAzmi: false,
    mukjizat: [
      "Kefasihan lisan diplomasi yang mendampingi Musa",
      "Kepemimpinan lembut penjaga keutuhan umat"
    ],
    kisah: "Kakak kandung dan mitra setia dakwah Nabi Musa. Diberkahi kepribadian tenang dan diplomatis, beliau mendampingi Musa menghadapi Fir'aun dan menjaga persatuan Bani Israil.",
    ayat: "QS. Thaha : 29-30 — Dan jadikanlah untukku seorang wazir dari keluargaku, yaitu Harun saudaraku...",
    hikmah: "Kerja sama tim dan komunikasi santun memperkuat keberhasilan perjuangan dakwah."
  },
  {
    id: 16,
    name: "Dzulkifli A.S.",
    arabic: "ذُو ٱلْكِفْلِ عَلَيْهِ السَّلَامُ",
    title: "Sang Penanggung Amanah",
    era: "Era Ujian & Pembebasan",
    kaum: "Syam & Irak",
    usia: "75 Tahun",
    ululAzmi: false,
    mukjizat: [
      "Ketahanan stamina berpuasa siang dan tahajud malam",
      "Kekebalan dari provokasi amarah Iblis"
    ],
    kisah: "Diyakini putra Nabi Ayyub bernama Basyar. Menepati sayembara raja tua untuk berpuasa di siang hari, beribadah di malam hari, dan memimpin sidang rakyat dengan adil tanpa pernah marah.",
    ayat: "QS. Al-Anbiya : 85 — Dan Ismail, Idris dan Dzulkifli. Mereka semua termasuk orang-orang yang sabar.",
    hikmah: "Menepati janji dan mampu menahan amarah adalah karakter utama pemimpin sejati."
  },
  {
    id: 17,
    name: "Daud A.S.",
    arabic: "دَاوُۥدُ عَلَيْهِ السَّلَامُ",
    title: "Khalifah & Pemilik Zabur",
    era: "Era Kerajaan Agung",
    kaum: "Palestina (Baitul Maqdis)",
    usia: "100 Tahun",
    ululAzmi: false,
    mukjizat: [
      "Membaca Zabur dengan suara merdu hingga burung dan gunung bertasbih",
      "Melunakkan besi baja dengan tangan kosong untuk baju zirah",
      "Mengalahkan raksasa Jalut dengan batu ketapel"
    ],
    kisah: "Pemuda pemberani penumbang Jalut yang diangkat jadi raja Bani Israil. Allah memberinya Kitab Zabur dan kemampuan melunakkan besi. Daud hidup dari hasil keringat tangannya sendiri dan rajin puasa Daud.",
    ayat: "QS. Saba : 10 — Dan Kami telah melunakkan besi untuknya...",
    hikmah: "Kemandirian ekonomi dan etos kerja keras adalah tanda kemuliaan seorang mukmin."
  },
  {
    id: 18,
    name: "Sulaiman A.S.",
    arabic: "سُلَيْمَانُ عَلَيْهِ السَّلَامُ",
    title: "Raja Penakluk Angin & Jin",
    era: "Era Kerajaan Agung",
    kaum: "Yerusalem (Global)",
    usia: "55 Tahun",
    ululAzmi: false,
    mukjizat: [
      "Memahami bahasa burung hud-hud, semut, dan fauna",
      "Menundukkan pasukan jin dan mengendalikan hembusan angin",
      "Mengalirkan cairan tembaga dari bumi"
    ],
    kisah: "Putra Nabi Daud yang mewarisi takhta dengan kekuasaan teragung dalam sejarah dunia atas manusia, jin, dan angin. Sulaiman berdakwah kepada Ratu Bilqis dari Saba dan tetap sangat rendah hati.",
    ayat: "QS. An-Naml : 19 — Maka dia (Sulaiman) tersenyum karena mendengar perkataan semut itu...",
    hikmah: "Kekayaan dan kekuasaan tertinggi tidak boleh membuat seseorang lupa bersyukur kepada Allah."
  },
  {
    id: 19,
    name: "Ilyas A.S.",
    arabic: "إِلْيَاسُ عَلَيْهِ السَّلَامُ",
    title: "Penentang Berhala Ba'al",
    era: "Era Kerajaan Agung",
    kaum: "Ba'labak (Lebanon)",
    usia: "60 Tahun",
    ululAzmi: false,
    mukjizat: [
      "Doa menahan hujan selama 3 tahun hingga kaumnya bertaubat",
      "Doa mendatangkan hujan lebat yang memulihkan kesuburan"
    ],
    kisah: "Berdakwah menentang penyembahan patung berhala emas dewa matahari Ba'al di Kota Baalbek. Menghadapi ancaman raja zalim dengan doa pembuktian kekuasaan Allah atas iklim dan alam semesta.",
    ayat: "QS. Ash-Shaffat : 124 — Mengapa kamu tidak bertakwa? Patutkah kamu menyembah Ba'al?",
    hikmah: "Hanya Allah Penguasa alam, tiada berhala atau benda yang mampu mendatangkan manfaat tanpa izin-Nya."
  },
  {
    id: 20,
    name: "Ilyasa' A.S.",
    arabic: "إِلْيَسَعُ عَلَيْهِ السَّلَامُ",
    title: "Penerus Obor Tauhid",
    era: "Era Kerajaan Agung",
    kaum: "Syam & Palestina",
    usia: "90 Tahun",
    ululAzmi: false,
    mukjizat: [
      "Menyembuhkan sumber mata air beracun menjadi tawar",
      "Menghidupkan kembali anak orang mukmin atas izin Allah"
    ],
    kisah: "Murid setia yang disembuhkan dan dididik oleh Nabi Ilyas. Melanjutkan estafet kepemimpinan Bani Israil dengan teladan akhlak mulia, hukum adil, dan kepribadian santun.",
    ayat: "QS. Al-An'am : 86 — Dan Ismail, Ilyasa', Yunus, dan Luth. Masing-masing Kami lebihkan derajatnya...",
    hikmah: "Kesetiaan menuntut ilmu dan mendampingi guru saleh membuka jalan kemuliaan hidup."
  },
  {
    id: 21,
    name: "Yunus A.S.",
    arabic: "يُونُسُ عَلَيْهِ السَّلَامُ",
    title: "Dzan-Nun & Shahibul Hut",
    era: "Era Kerajaan Agung",
    kaum: "Ninawa (Irak)",
    usia: "70 Tahun",
    ululAzmi: false,
    mukjizat: [
      "Selamat hidup di dalam perut ikan paus raksasa",
      "Pohon labu pelindung tumbuh di pantai",
      "Seratus ribu penduduk Ninawa bertaubat serentak"
    ],
    kisah: "Meninggalkan kaumnya yang membangkang dengan rasa marah, lalu dilempar ke laut saat badai dan ditelan ikan paus. Di kegelapan perut ikan, Yunus memanjatkan doa tobat agung hingga diselamatkan Allah.",
    ayat: "QS. Al-Anbiya : 87 — Tiada tuhan selain Engkau, Mahasuci Engkau, sungguh aku termasuk orang zalim.",
    hikmah: "Jangan terburu-buru putus asa; doa tobat dan pengakuan salah adalah kunci jalan keluar dari kesulitan."
  },
  {
    id: 22,
    name: "Zakariya A.S.",
    arabic: "زَكَرِيَّا عَلَيْهِ السَّلَامُ",
    title: "Kafil Sayyidah Maryam",
    era: "Era Mukjizat Ruhani",
    kaum: "Baitul Maqdis (Palestina)",
    usia: "95 Tahun",
    ululAzmi: false,
    mukjizat: [
      "Dikaruniai putra Yahya di usia senja saat istri mandul",
      "Tanda kenabian tidak bisa bicara 3 hari kecuali isyarat",
      "Menyaksikan hidangan surga di mihrab Maryam"
    ],
    kisah: "Imam Baitul Maqdis yang merawat Sayyidah Maryam. Terinspirasi oleh rezeki Maryam, beliau berdoa dengan suara lembut di keheningan malam hingga dikaruniai putra bernama Yahya.",
    ayat: "QS. Maryam : 4 — Tuhanku, sungguh tulangku telah lemah dan kepalaku beruban, dan aku belum pernah kecewa berdoa...",
    hikmah: "Doa tulus dengan suara lembut dan hati yang penuh harap kepada Allah tidak akan pernah ditolak."
  },
  {
    id: 23,
    name: "Yahya A.S.",
    arabic: "يَحْيَىٰ عَلَيْهِ السَّلَامُ",
    title: "As-Sayyidul Hashur",
    era: "Era Mukjizat Ruhani",
    kaum: "Palestina & Yordan",
    usia: "32 Tahun",
    ululAzmi: false,
    mukjizat: [
      "Dianugerahi hikmah kenabian sejak masih kanak-kanak",
      "Kesucian hati yang terjaga dari dosa dan kasih sayang mendalam",
      "Membenarkan kedatangan Nabi Isa A.S."
    ],
    kisah: "Putra Nabi Zakariya yang zuhud dan berilmu sejak belia. Beliau memandikan orang yang bertaubat di Sungai Yordan dan gugur sebagai syahid karena menentang pernikahan sedarah terlarang Raja Herodes.",
    ayat: "QS. Maryam : 12 — Wahai Yahya! Ambillah Kitab itu dengan sungguh-sungguh...",
    hikmah: "Masa muda adalah waktu terbaik menuntut ilmu dan memegang teguh syariat tanpa kompromi maksiat."
  },
  {
    id: 24,
    name: "Isa A.S.",
    arabic: "عِيسَىٰ عَلَيْهِ السَّلَامُ",
    title: "Ruhullah & Al-Masih",
    era: "Era Mukjizat Ruhani",
    kaum: "Bani Israil (Palestina)",
    usia: "33 Tahun (Diangkat ke Langit)",
    ululAzmi: true,
    mukjizat: [
      "Lahir tanpa ayah dari perawan suci Sayyidah Maryam",
      "Bisa berbicara membela ibunya saat masih bayi di buaian",
      "Menyembuhkan kusta, orang buta, dan menghidupkan mayat",
      "Menerima Kitab Injil dan diangkat ke langit dengan selamat"
    ],
    kisah: "Rasul Ulul Azmi pembawa Injil yang lahir melalui tiupan ruh ciptaan Allah. Membawa kabar gembira tentang nabi penutup bernama Ahmad (Muhammad SAW) dan diselamatkan Allah dari rencana salib musuh.",
    ayat: "QS. Ali 'Imran : 49 — Dan sebagai Rasul kepada Bani Israil, aku membuatkan burung dari tanah liat...",
    hikmah: "Ketulusan hati dan kasih sayang sejati harus melandasi pengamalan hukum agama."
  },
  {
    id: 25,
    name: "Muhammad S.A.W.",
    arabic: "مُحَمَّدٌ صَلَّىٰ اللَّهُ عَلَيْهِ وَسَلَّمَ",
    title: "Khatamun Nabiyyin & Habibullah",
    era: "Era Mukjizat Ruhani",
    kaum: "Makkah, Madinah, & Seluruh Alam",
    usia: "63 Tahun",
    ululAzmi: true,
    mukjizat: [
      "Mukjizat abadi sepanjang masa: Kitab Suci Al-Qur'an Al-Karim",
      "Peristiwa Isra' Mi'raj menembus Sidratul Muntaha menerima salat",
      "Membelah bulan dan memancarkan air dari jemari tangan",
      "Rahmatan lil 'Alamin: risalah universal bagi seluruh alam semesta"
    ],
    kisah: "Penutup para nabi yang lahir yatim di Makkah dan digelari Al-Amin. Menerima wahyu di Gua Hira, berdakwah 23 tahun dengan akhlak paling agung, memimpin Fathu Makkah dengan damai, dan meninggalkan Al-Qur'an serta As-Sunnah.",
    ayat: "QS. Al-Anbiya : 107 — Dan Kami tidak mengutus engkau (Muhammad) melainkan untuk menjadi rahmat bagi seluruh alam.",
    hikmah: "Akhlak mulia dan kasih sayang universal adalah inti sari dari seluruh ajaran agama Islam."
  }
];
