
const DESTINASI_AWAL = [
  {
    id: 1, nama: "Pura Uluwatu", daerah: "Bali", kategori: "Budaya",
    tagline: "Pura di tebing samudra",
    deskripsi: "Pura di atas tebing setinggi 70 meter. Datang sore hari untuk melihat matahari terbenam dan tari kecak.",
    harga: 50000, jam: "07.00 - 19.00", foto: "img/uluwatu.jpg", rating: 5,
    warna: "#0e5a6b, #f2a65a"
  },
  {
    id: 2, nama: "Tegalalang", daerah: "Bali", kategori: "Alam",
    tagline: "Sawah terasering di Ubud",
    deskripsi: "Hamparan sawah bertingkat di Ubud. Cocok untuk jalan santai, foto, dan ayunan di tengah hutan tropis.",
    harga: 15000, jam: "08.00 - 18.00", foto: "img/tegalalang.jpg", rating: 4,
    warna: "#1f5d3a, #b7d36b"
  },
  {
    id: 3, nama: "Labuan Bajo", daerah: "NTT", kategori: "Bahari",
    tagline: "Rumah sang naga purba",
    deskripsi: "Pintu gerbang Taman Nasional Komodo. Berlayar antar pulau, snorkeling, dan bertemu komodo di habitat aslinya.",
    harga: 150000, jam: "06.00 - 17.00", foto: "img/labuanbajo.jpg", rating: 5,
    warna: "#0b4f6c, #20bf9f"
  },
  {
    id: 4, nama: "Danau Kelimutu", daerah: "NTT", kategori: "Gunung",
    tagline: "Danau tiga warna di Flores",
    deskripsi: "Tiga danau kawah di puncak Gunung Kelimutu yang warnanya bisa berubah. Terbaik dinikmati saat matahari terbit.",
    harga: 10000, jam: "05.00 - 17.00", foto: "img/kelimutu.jpg", rating: 4,
    warna: "#2c3e50, #3fb8af"
  },
  {
    id: 5, nama: "Candi Prambanan", daerah: "Jogja", kategori: "Budaya",
    tagline: "Candi Hindu termegah di Nusantara",
    deskripsi: "Kompleks candi abad ke-9 dengan relief Ramayana. Pemandangan paling indah saat senja.",
    harga: 50000, jam: "06.30 - 17.00", foto: "img/prambanan.jpg", rating: 5,
    warna: "#4a2c2a, #e0a458"
  }
];

const DESTINASI_UNGGULAN = [
  {
    nama: "Pantai Uluwatu",
    daerah: "Bali",
    perwakilan: true,
    badge: "60+ Destinasi Pilihan",
    deskripsi: "Pantai dengan tebing megah, pasir putih, dan panorama laut biru yang menjadi daya tarik pesisir selatan Bali.",
    tag: ["Alam", "Petualangan"],
    foto: "img/pantaiuluwatu.jpg"
  },
  {
    nama: "Pantai Kelingking",
    daerah: "Bali",
    badge: "55+ Destinasi Pilihan",
    deskripsi: "Nikmati keindahan Pantai Kelingking dengan tebing berbentuk menyerupai kepala dinosaurus, pasir putih, dan air laut biru jernih.",
    tag: ["Alam", "Petualangan"],
    foto: "img/kelingking.jpg"
  },
  {
    nama: "Tanah Lot",
    daerah: "Bali",
    badge: "70+ Destinasi Pilihan",
    deskripsi: "Nikmati keindahan Pantai Kelingking dengan tebing berbentuk menyerupai kepala dinosaurus, pasir putih, dan air laut biru jernih.",
    tag: ["Alam", "Petualangan"],
    foto: "img/tanah.jpg"
  },
  {
    nama: "Ubud",
    daerah: "Bali",
    badge: "65+ Destinasi Pilihan",
    deskripsi: "Jelajahi pesona Ubud, tempat alam yang menenangkan, budaya yang kaya, dan keindahan Bali berpadu dalam suasana yang begitu memikat.",
    tag: ["Alam", "Petualangan"],
    foto: "img/ubud.jpg"
  },
  {
    nama: "Bedugul",
    daerah: "Bali",
    badge: "40+ Destinasi Pilihan",
    deskripsi: "Temukan pesona Bedugul melalui keindahan Danau Beratan, hamparan kebun yang hijau, dan suasana pegunungan yang membuat setiap perjalanan terasa istimewa.",
    tag: ["Alam", "Petualangan"],
    foto: "img/bedugul.jpg"
  },
  {
    nama: "Malioboro",
    daerah: "Yogyakarta",
    perwakilan: true,
    badge: "50+ Destinasi Pilihan",
    deskripsi: "Nikmati suasana khas Malioboro dengan deretan pertokoan, pedagang kaki lima, dan wisata kuliner yang ramai.",
    tag: ["Alam", "Petualangan"],
    foto: "img/malioboro.jpg"
  },
  {
    nama: "Candi Prambanan",
    daerah: "Yogyakarta",
    badge: "70+ Destinasi Pilihan",
    deskripsi: "Jelajahi kemegahan Candi Prambanan dengan arsitektur candi yang menjulang tinggi dan relief bersejarah yang penuh cerita.",
    tag: ["Alam", "Petualangan"],
    foto: "img/prambanan.jpg"
  },
  {
    nama: "Pantai Parangtritis",
    daerah: "Yogyakarta",
    badge: "100+ Destinasi Pilihan",
    deskripsi: "Nikmati keindahan Pantai Parangtritis dengan hamparan pasir hitam, deburan ombak, dan panorama matahari terbenam yang memukau.",
    tag: ["Alam", "Petualangan"],
    foto: "img/parangtritis.jpg"
  },
  {
    nama: "Candi Borobudur",
    daerah: "Yogyakarta",
    badge: "50+ Destinasi Pilihan",
    deskripsi: "Tempat yang menyuguhkan keindahan arsitektur bersejarah dengan ukiran penuh makna dan panorama alam yang indah, menjadikan Borobudur begitu istimewa.",
    tag: ["Alam", "Petualangan"],
    foto: "img/borobudur.jpg"
  },
  {
    nama: "Keraton",
    daerah: "Yogyakarta",
    badge: "65+ Destinasi Pilihan",
    deskripsi: "Jelajahi tempat penuh sejarah dan budaya Jawa yang memikat, dengan arsitektur khas keraton serta tradisi luhur yang masih terjaga hingga kini.",
    tag: ["Alam", "Petualangan"],
    foto: "img/keraton.jpg"
  },
  {
    nama: "Labuan Bajo",
    daerah: "NTT",
    perwakilan: true,
    badge: "60+ Destinasi Pilihan",
    deskripsi: "Jelajahi keindahan Labuan Bajo dengan perairan biru gugusan pulau yang eksotis, dan panorama alam yang memukau.",
    tag: ["Alam", "Petualangan"],
    foto: "img/labuanbajo.jpg"
  },
  {
    nama: "Pink Beach",
    daerah: "NTT",
    badge: "75+ DEstinasi Pilihan",
    deskripsi: "Nikmati keunikan Pink Beach dengan hamparan pasir berwarna merah muda, air laut yang jernih, dan keindahan bawah laut yang memikat.",
    tag: ["Alam", "Petualangan"],
    foto: "img/pinkbeach.jpg"
  },
  {
    nama: "Pulau Padar",
    daerah: "NTT",
    badge: "100+ Destinasi Pilihan",
    deskripsi: "Jelajahi Pulau Padar dengan perbukitan hijau yang bergelombang dan panorama laut biru yang membentang luas.",
    tag: ["Alam", "Petualangan"],
    foto: "img/padar.jpg"
  },
  {
    nama: "Danau Kelimutu",
    daerah: "NTT",
    badge: "40+ Destinasi Pilihan",
    deskripsi: "Nikmati pesona Danau Kelimutu dengan tiga danau kawah berwarna unik yang berpadu dengan panorama pegunungan yang begitu memikat.",
    tag: ["Alam", "Petualangan"],
    foto: "img/kelimutu.jpg"
  },
  {
    nama: "Desa Wae Rebo",
    daerah: "NTT",
    badge: "50+ Destinasi Pilihan",
    deskripsi: "Tempat yang menyimpan kehangatan budaya Manggarai melalui rumah adat Mbaru Niang, tradisi leluhur, dan kehidupan desa yang masih begitu kental.",
    tag: ["Alam", "Petualangan"],
    foto: "img/segi.jpg"
  },
  {
    nama: "Gili Trawangan",
    daerah: "Lombok",
    perwakilan: true,
    badge: "60+ Destinasi Pilihan",
    deskripsi: "Gili Trawangan adalah pulau wisata di Lombok yang terkenal dengan pantai pasir putih dan keindahan bawah lautnya.",
    tag: ["Alam", "Petualangan"],
    foto: "img/gili.jpg"
  },
  {
    nama: "Gunung Rinjani",
    daerah: "Lombok",
    badge: "35+ Destinasi Pilihan",
    deskripsi: "Terkenal dengan pemandangan alam yang menakjubkan, Danau Segara Anak, dan keindahan panorama pegunungannya.",
    tag: ["Alam", "Petualangan"],
    foto: "img/rinjani.jpg"
  },
  {
    nama: "Mandalika",
    daerah: "Lombok",
    badge: "100+ Destinasi Pilihan",
    deskripsi: "Kawasan wisata di Lombok yang terkenal dengan pantai-pantai indah, pasir putih, dan Sirkuit Internasional Mandalika.",
    tag: ["Alam", "Petualangan"],
    foto: "img/manda.jpg"
  },
  {
    nama: "Pantai Tanjung Aan",
    daerah: "Lombok",
    badge: "50+ Destinasi Pilihan",
    deskripsi: "Destinasi pantai yang menawarkan pasir putih, air laut jernih, dan angin sejuk dengan panorama alam Lombok yang memanjakan mata.",
    tag: ["Alam", "Petualangan"],
    foto: "img/tanjung.jpg"
  },
  {
    nama: "Bukit Merese",
    daerah: "Lombok",
    badge: "40+ Destinasi Pilihan",
    deskripsi: "Nikmati keindahan Bukit Merese, destinasi perbukitan dengan hamparan rumput hijau dan panorama laut lepas yang memukau, terutama saat matahari terbenam.",
    tag: ["Alam", "Petualangan"],
    foto: "img/bukit.jpg"
  },
  {
    nama: "Raja Ampat",
    daerah: "Papua",
    perwakilan: true,
    badge: "60+ Destinasi Pilihan",
    deskripsi: "Raja Ampat memanjakan mata dengan gugusan pulau karst yang ikonik dan terumbu karang yang kaya akan kehidupan.",
    tag: ["Alam", "Petualangan"],
    foto: "img/raja.jpg"
  },
  {
    nama: "Danau Sentani",
    daerah: "Papua",
    badge: "75+ Destiasi Pilihan",
    deskripsi: "Terletak di Papua, Danau Sentani menawarkan panorama perairan luas yang dikelilingi perbukitan hijau dan pulau-pulau kecil.",
    tag: ["Alam", "Petualangan"],
    foto: "img/sentani.jpg"
  },
  {
    nama: "Lembah Baliem",
    daerah: "Papua",
    badge: "100+ Destinasi",
    deskripsi: "Lembah Baliem menyuguhkan panorama pegunungan hijau yang memukau di jantung Papua.",
    tag: ["Alam", "Petualangan"],
    foto: "img/lembah.jpg"
  },
  {
    nama: "Pegunungan Arfak",
    daerah: "Papua",
    badge: "50+ Destinasi Pilihan",
    deskripsi: "Jelajahi Pegunungan Arfak, surga alam di Papua Barat dengan perbukitan hijau, danau yang memesona, serta udara sejuk yang menenangkan.",
    tag: ["Alam", "Petualangan"],
    foto: "img/arfak.jpg"
  },
  {
    nama: "Teluk Triton",
    daerah: "Papua",
    badge: "35+ Destinasi Pilihan",
    deskripsi: "Teluk Triton menawarkan pesona laut biru jernih, gugusan pulau karang, dan tebing alami yang menghadirkan panorama indah khas Papua Barat.",
    tag: ["Alam", "Petualangan"],
    foto: "img/teluk.jpg"
  },
]

const dataAwalReview = [
  {
    id: "rev-1",
    nama: "Guevara Tamtaka",
    rating: 5,
    pesan:
      "Superrr nice website!! so easy to use and the design is really pretty",
    waktu: Date.now() - 2 * 60 * 60 * 1000,
  },
  {
    id: "rev-2",
    nama: "Faqih Athalah",
    rating: 5,
    pesan:
      "Rekomendasi tempat wisatanya akurat, tampilannya juga rapi. Jadi tahu mau ke mana saja pas liburan kemarin",
    waktu: Date.now() - 24 * 60 * 60 * 1000,
  },
  {
    id: "rev-3",
    nama: "Marceyon",
    rating: 4,
    pesan:
      "Websitenya membantu banget buat nyusun itinerary liburan! Info destinasinya lengkap dan gampang dicari",
    waktu: Date.now() - 3 * 24 * 60 * 60 * 1000,
  },
];
