function filmAra() {
    const arama = document.getElementById("searchInput").value;
    if(!arama.trim())
        return;

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
                            <img src="${film.Poster !== "N/A" ? film.Poster : "placeholder.jpg"}" class="card-img-top">
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
            document.getElementById("filmListesi").innerHTML = "<p class='text-danger'>Bir hata oluştu</p>";
        });
}

function populerFilmler() {
    fetch(`https://www.omdbapi.com/?s=batman&apikey=77429b05`)
        .then(res => res.json())
        .then(data => {
            const alan = document.getElementById("onerilenFilmler");
            alan.innerHTML = `
            <div class="col-12">
                <h4>⭐️ Önerilen Filmler</h4>
            </div>
            `;

            data.Search.slice(0,6).forEach(film => {
                alan.innerHTML += `
                <article class="col-md-4 mb-4">
                    <div class="card">
                        <img src="${film.Poster !== "N/A" ? film.Poster : "placeholder.jpg"}">
                        <div class="card-body">
                            <h6>${film.Title}</h6>
                        </div>
                    </div>
                </article>`;
            });
        });
}

window.onload = function() {
    populerFilmler();
}