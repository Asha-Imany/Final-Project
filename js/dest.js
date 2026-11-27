const tombol = document.querySelectorAll(".button-color");

    tombol.forEach((btn) => {
      btn.addEventListener("click", () => {
        tombol.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
      });
    });

const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

const cards = $("#cards");

const kartuHTML = ({ nama, daerah, badge, deskripsi, tag, foto }) => `
  <article style="background-image: url('${foto}')">
    <span class="badge">${badge}</span>

    <div class="isi">
      <h3>${nama}, ${daerah}</h3>
      <p>${deskripsi}</p>

      <div class="bawah">
        <div class="tags">${tag.map((t) => `<span>${t}</span>`).join("")}</div>
        <button class="panah" data-daerah="${daerah.toLowerCase()}">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 12h16M13 5l7 7-7 7"/>
            </svg>
        </button>
      </div>
    </div>
  </article>`;

const render = (daerah = "semua") => {
  const data = DESTINASI_UNGGULAN.filter((d) =>
    daerah === "semua" ? d.perwakilan : d.daerah.toLowerCase() === daerah
  );

  cards.innerHTML = data.map(kartuHTML).join("");
};

tombol.forEach((btn) => {
  btn.addEventListener("click", () => {
    tombol.forEach((b) => b.classList.toggle("active", b === btn));
    render(btn.dataset.daerah);
  });
});

cards.addEventListener("click", (e) => {
  const daerah = e.target.closest(".panah")?.dataset.daerah;
  if (daerah) $(`.button-color[data-daerah="${daerah}"]`).click();
});

render();