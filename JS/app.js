function filmTab() {
    document.getElementById("filmSection").classList.remove("d-none");
    document.getElementById("futbolSection").classList.add("d-none");
}

function futbolTab() {
    document.getElementById("filmSection").classList.add("d-none");
    document.getElementById("futbolSection").classList.remove("d-none");
}

function filmAra() {
    const arama = document.getElementById("searchInput").value;

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
                <article class="col-md-4 mb-4">
                    <div class="card h-100">
                        <img src="${mac.strThumb}" class="card-img-top" alt="maç görseli">
                        <div class="card-body">
                            <h5 class="card-title">
                                ${mac.strHomeTeam} vs ${mac.strAwayTeam}
                            </h5>
                            <p class="card-text">
                                Skor: ${mac.intHomeScore} - ${mac.intAwayScore}
                            </p>
                            <p class="text-muted">
                                Tarih: ${mac.dateEvent}
                            </p>
                        </div>
                    </div>
                </article>
                `;
            });
        })
        .catch(err => {
            console.error("Hata:", err);
        })
}