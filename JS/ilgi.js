function filmTab() {
    document.getElementById("filmSection").classList.add("active");
    document.getElementById("futbolSection").classList.remove("active");
}

function futbolTab() {
    document.getElementById("filmSection").classList.remove("active");
    document.getElementById("futbolSection").classList.add("active");
}

function filmAra() {
    const arama = document.getElementById("searchInput").value;
    document.getElementById("onerilenFilmler").innerHTML="";

    fetch(`https://www.omdbapi.com/?s=${arama}&apikey=77429b05`)
        .then(res => res.json())
        .then(data => {
            const alan = document.getElementById("filmListesi");
            alan.innerHTML = "";

            if (data.Response === "True") {
                data.Search.forEach(film => {
                    alan.innerHTML += `
                    <article class="col-md-3 mb-4">
                        <div class="card">
                            <img src="${film.Poster}" class="card-img-top">
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
        .catch(err => {
            console.error("Hata:", err);
        });
}

function maclariGetir() {
    fetch("https://www.thesportsdb.com/api/v1/json/3/eventspastleague.php?id=4328")
        .then(res => res.json())
        .then(data => {
            const alan = document.getElementById("macListesi");
            alan.innerHTML="";

            data.events.slice(0,6).forEach(mac => {
                alan.innerHTML += `
                <div class="list-group mb-3">
                    <div class="list-group-item">
                        <h6>
                            ${mac.strHomeTeam} vs ${mac.strAwayTeam}
                            <span class="badge bg-danger ms-2">SON</span>
                        </h6>
                        <p>Skor: ${mac.intHomeScore} - ${mac.intAwayScore}</p>
                        <small>${mac.dataEvent}</small>
                    </div>
                </div>
                `;
            });
        })
        .catch(err => {
            console.error("Hata:", err);
        })
}

function pupulerFilmler() {
    fetch(`https://www.omdbapi.com/?s=batman&apikey=77429b05`)
        .then(res => res.json())
        .then(data => {
            const alan = document.getElementById("onerilenFilmler");
            alan.innerHTML = "<h4>⭐️ Önerilen Filmler</h4>";

            data.Search.slice(0,6).forEach(film => {
                alan.innerHTML += `
                <article class="col-md-4 mb-4">
                    <div class="card">
                        <img src="${film.Poster}">
                        <div class="card-body">
                            <h6>${film.Title}</h6>
                        </div>
                    </div>
                </aritcle>`;
            });
        });
}

window.onload = function() {
    pupulerFilmler();
    maclariGetir();
}