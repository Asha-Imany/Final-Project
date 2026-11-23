const KEY_DESTINASI = "wk_destinasi_v2";
const KEY_FAVORIT = "wk_favorit";

const $ = (id) => document.getElementById(id);

function ambil(key, awal) {
  try {
    const teks = localStorage.getItem(key);
    return teks ? JSON.parse(teks) : awal;
  } catch (e) {
    return awal;
  }
}

function simpan(key, nilai) {
  localStorage.setItem(key, JSON.stringify(nilai));
}

function esc(teks) {
  const el = document.createElement("div");
  el.textContent = teks;
  return el.innerHTML;
}

let timerToast;

function toast(pesan) {
  const el = $("toast");
  el.textContent = pesan;
  el.classList.add("tampil");
  clearTimeout(timerToast);
  timerToast = setTimeout(() => el.classList.remove("tampil"), 2500);
}

let destinasi = ambil(KEY_DESTINASI, DESTINASI_AWAL);
let favorit = ambil(KEY_FAVORIT, []);
let aktif = 0;
let slot = 0;
let timer;

simpan(KEY_DESTINASI, destinasi);

const ikonSimpan = '<svg viewBox="0 0 24 24" width="13" height="13"><path d="M6 3h12v18l-6-4-6 4z"/></svg>';
const bintang = (n) => "★".repeat(n) + "☆".repeat(5 - n);
const fotoBg = (d) => `url('${d.foto}'), linear-gradient(135deg, ${d.warna})`;

function pindah(i) {
  aktif = i;
  tampilHero();
  mulaiOtomatis();
}

function mulaiOtomatis() {
  clearInterval(timer);
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  timer = setInterval(() => pindah((aktif + 1) % destinasi.length), 6500);
}

function tampilHero() {
  const d = destinasi[aktif];
  const lapis = [$("bg-a"), $("bg-b")];
  const teks = $("hero-teks");

  slot = 1 - slot;
  lapis[slot].style.backgroundImage = fotoBg(d);
  lapis[slot].classList.add("tampil");
  lapis[1 - slot].classList.remove("tampil");

  $("hero-nama").textContent = d.nama;
  $("hero-nama").dataset.nama = d.nama;
  $("hero-deskripsi").textContent = d.deskripsi;

  teks.classList.remove("ganti");
  void teks.offsetWidth;
  teks.classList.add("ganti");

  tampilKartu();
  tampilPenanda();
}

function tampilKartu() {
  const n = destinasi.length;
  const urutan = Array.from({ length: n - 1 }, (_, k) => (aktif + k + 1) % n);

  $("hero-kartu").innerHTML = urutan.map((i) => {
    const d = destinasi[i];
    return `
      <div class="kartu-slide">
        <p class="ks-nama">${esc(d.nama)}, ${esc(d.daerah)}</p>
        <p class="ks-bintang" aria-label="Rating ${d.rating} dari 5">${bintang(d.rating)}</p>
        <button class="ks-foto" data-i="${i}" style="background-image:${fotoBg(d)}" aria-label="Tampilkan ${esc(d.nama)}"></button>
        <button class="ks-simpan ${favorit.includes(d.id) ? "on" : ""}" data-simpan="${d.id}" aria-label="Simpan ${esc(d.nama)} ke favorit">${ikonSimpan}</button>
      </div>`;
  }).join("");
}

function tampilPenanda() {
  $("rail").innerHTML = destinasi.map((d, i) => `
    <li><button class="rail-titik ${i === aktif ? "aktif" : ""}" data-i="${i}" aria-label="${esc(d.nama)}">${i === aktif ? i + 1 : ""}</button></li>`).join("");

  $("titik").innerHTML = destinasi.map((d, i) => `
    <button class="${i === aktif ? "aktif" : ""}" data-i="${i}" aria-label="${esc(d.nama)}"></button>`).join("");
}

function klikPenanda(e) {
  const tombol = e.target.closest("[data-i]");
  if (tombol) pindah(Number(tombol.dataset.i));
}

function klikKartu(e) {
  const tombol = e.target.closest("[data-simpan]");
  if (!tombol) return klikPenanda(e);

  const id = Number(tombol.dataset.simpan);
  const sudah = favorit.includes(id);
  favorit = sudah ? favorit.filter((x) => x !== id) : [...favorit, id];
  simpan(KEY_FAVORIT, favorit);
  tombol.classList.toggle("on", !sudah);
  toast(sudah ? "Dihapus dari favorit" : "Ditambahkan ke favorit");
}

$("hero-kartu").onclick = klikKartu;
$("rail").onclick = klikPenanda;
$("titik").onclick = klikPenanda;

$("beranda").onmouseenter = () => clearInterval(timer);
$("beranda").onmouseleave = mulaiOtomatis;

$("btn-cari").onclick = () => {
  $("katalog").scrollIntoView({ behavior: "smooth" });
  $("cari").focus({ preventScroll: true });
};

window.addEventListener("scroll", () => {
  $("nav").classList.toggle("solid", window.scrollY > 40);
});

tampilHero();
mulaiOtomatis();
isiKategori();
tampilKatalog();