function filmAra() {
  const arama = document.getElementById("searchInput").value;
  if (!arama.trim()) return;

  document.getElementById("onerilenFilmler").innerHTML = "";

  fetch(`https://www.omdbapi.com/?s=${arama}&apikey=77429b05`)
    .then((res) => res.json())
    .then((data) => {
      const alan = document.getElementById("filmListesi");
      alan.innerHTML = "";

      if (data.Response === "True") {
        data.Search.forEach((film) => {
          alan.innerHTML += `
                    <article class="col-md-3 mb-4">
                        <div class="card">
                            <img src="${
                              film.Poster !== "N/A"
                                ? film.Poster
                                : "placeholder.jpg"
                            }" class="card-img-top" alt="${film.Title}">
                            <div class="card-body">
                                <h5>${film.Title}</h5>
                                <p>${film.Year}</p>
                            </div>
                        </div>
                    </article>
                    `;
        });
      } else {
        alan.innerHTML = "<p>Film bulunamadı</p>";
      }
    })
    .catch((err) => {
      console.error("Hata:", err);
      document.getElementById("filmListesi").innerHTML =
        "<p class='text-danger'>Bir hata oluştu</p>";
    });
}

function populerFilmler() {
  fetch(`https://www.omdbapi.com/?s=batman&apikey=77429b05`)
    .then((res) => res.json())
    .then((data) => {
      if (data.Response !== "True") {
        return;
      }

      const alan = document.getElementById("onerilenFilmler");
      alan.innerHTML = `
            <div class="col-12">
                <h4>⭐️ Önerilen Filmler</h4>
            </div>
            `;

      data.Search.slice(0, 6).forEach((film) => {
        alan.innerHTML += `
                <article class="col-md-4 mb-4">
                    <div class="card">
                        <img src="${
                          film.Poster !== "N/A"
                            ? film.Poster
                            : "placeholder.jpg"
                        }" alt="${film.Title}">
                        <div class="card-body">
                            <h6>${film.Title}</h6>
                        </div>
                    </div>
                </article>`;
      });
    })
    .catch((err) => console.error(err));
}

window.onload = function () {
  populerFilmler();
  ligTakimlariGetir();
};

function filmTab() {
  document.getElementById("filmSection").classList.add("active");
  document.getElementById("futbolSection").classList.remove("active");

  document.querySelectorAll(".nav-tabs .nav-link").forEach((btn) => {
    btn.classList.remove("active");
  });
  document.querySelectorAll(".nav-tabs .nav-link")[0].classList.add("active");
}

function futbolTab() {
  document.getElementById("filmSection").classList.remove("active");
  document.getElementById("futbolSection").classList.add("active");

  document.querySelectorAll(".nav-tabs .nav-link").forEach((btn) => {
    btn.classList.remove("active");
  });
  document.querySelectorAll(".nav-tabs .nav-link")[1].classList.add("active");
}

function ligTakimlariGetir() {
  const lig = document.getElementById("ligSec").value;
  fetch(
    `https://www.thesportsdb.com/api/v1/json/123/search_all_teams.php?l=${lig}`
  )
    .then((res) => res.json())
    .then((data) => {
      const alan = document.getElementById("takimListesi");
      alan.innerHTML = "";
      if (data.teams) {
        data.teams.forEach((team) => {
          alan.innerHTML += `
                    <article class="col-lg-3 col-md-4 col-sm-6 mb-4">
                        <div class="card h-100">
                            <img src="${team.strBadge}" class="card-img-top p-4" alt="${team.strTeam}">
                            <div class="card-body text-center">
                                <h5 class="card-title">
                                    ${team.strTeam}
                                </h5>
                                <p class="card-text">
                                    ${team.strLeague}
                                </p>
                                <p class="text-muted">
                                    ${team.strCountry}
                                </p>
                            </div>
                        </div>
                    </article>
                    `;
        });
      } else {
        alan.innerHTML = `
                <p class="text-danger">
                    Takımlar Bulunamadı!
                </p>
                `;
      }
    })
    .catch((err) => {
      console.error(err);
      document.getElementById("takimListesi").innerHTML =
        "<p class='text-danger'>Bir hata oluştu!</p>";
    });
}
