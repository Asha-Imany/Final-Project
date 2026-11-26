const KUNCI_STORAGE = "DATA_REVIEW_v2";
let daftarReview = [];

function muatData() {
  const dataTersimpan = localStorage.getItem(KUNCI_STORAGE);

  if (dataTersimpan) {
    daftarReview = JSON.parse(dataTersimpan);
  } else {

    daftarReview =
      typeof dataAwalReview !== "undefined" ? [...dataAwalReview] : [];
    simpanData();
  }
}

function simpanData() {
  localStorage.setItem(KUNCI_STORAGE, JSON.stringify(daftarReview));
}


document.addEventListener("DOMContentLoaded", () => {
  muatData();
  tampilkanDaftarReview();

  const form = document.getElementById("form-rating");
  if (form) {
    form.addEventListener("submit", handleFormSubmit);
  }
});

function buatBintang(jumlah) {
  let hasil = "";

  for (let i = 1; i <= 5; i++) {
    if (i <= jumlah) {
      hasil += `<span class="star filled">★</span>`;
    } else {
      hasil += `<span class="star">★</span>`;
    }
  }

  return hasil;
}

function ambilInisial(nama) {
  const kata = nama
    .trim()
    .split(" ")
    .filter((k) => k !== "");

  if (kata.length === 0) {
    return "?";
  }

  if (kata.length === 1) {
    return kata[0].charAt(0).toUpperCase();
  }

  const awal = kata[0].charAt(0);
  return awal.toUpperCase();
}

function hitungWaktu(waktu) {
  const selisih = Date.now() - waktu;
  const menit = Math.floor(selisih / (60 * 1000));
  const jam = Math.floor(menit / 60);
  const hari = Math.floor(jam / 24);

  if (menit < 1) return "Baru saja";
  if (menit < 60) return `${menit} menit lalu`;
  if (jam < 24) return `${jam} jam lalu`;
  return `${hari} hari lalu`;
}

function amankanTeks(teks) {
  const elemen = document.createElement("div");
  elemen.textContent = teks;
  return elemen.innerHTML;
}

// ---------- TAMPILKAN ----------
function tampilkanDaftarReview() {
  const daftar = document.getElementById("daftar-review");

  if (!daftar) {
    return;
  }

  daftar.innerHTML = "";

  daftarReview.forEach((review) => {
    daftar.appendChild(buatKartuReview(review));
  });
}

function buatKartuReview(review) {
  const kartu = document.createElement("div");
  kartu.className = "review-card";

  kartu.innerHTML = `
        <div class="avatar">${amankanTeks(ambilInisial(review.nama))}</div>
        <div class="review-body">
            <div class="review-head">
                <div>
                    <h3 class="review-name">
                        ${amankanTeks(review.nama)}
                    </h3>
                    <span class="review-time">${hitungWaktu(review.waktu)}</span>
                </div>
            </div>
            <div class="stars">${buatBintang(review.rating)}</div>
            <p class="review-text">${amankanTeks(review.pesan)}</p>
        </div>
    `;

  return kartu;
}

// ---------- KIRIM FORM ----------
function handleFormSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const nama = form.nama.value.trim();
  const rating = Number(form.rating.value);
  const pesan = form.pesan.value.trim();

  if (!nama || !pesan) {
    Swal.fire({
      icon: "warning",
      title: "Oops...",
      text: "Nama dan pesan harus diisi ya",
    });
    return;
  }

  const reviewBaru = {
    id: `rev-${Date.now()}`,
    nama: nama,
    rating: rating,
    pesan: pesan,
    waktu: Date.now(),
  };

  daftarReview.unshift(reviewBaru); // terbaru di paling atas
  simpanData();
  tampilkanDaftarReview();
  form.reset();

  Swal.fire({
    icon: "success",
    title: "Review terkirim!",
    text: "Terima kasih sudah memberi rating.",
    timer: 1500,
    showConfirmButton: false,
  });
}
