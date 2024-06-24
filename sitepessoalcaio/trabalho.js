const gostosfoto = document.querySelector(".carouselzinho"); 
const nomegit = document.querySelector(".nome");
const documentgit = document.querySelector(".document");
const imagemgit = document.querySelector(".img");
const locationgit = document.querySelector(".location");
const urlfetch = "https://dd3b3784-84af-4920-a095-60e54207036d-00-21q7daj4f548b.kirk.replit.dev/colegas";
const conteudosfetch = "https://dd3b3784-84af-4920-a095-60e54207036d-00-21q7daj4f548b.kirk.replit.dev/conteudos";
const apigitfetch = "https://api.github.com/users/CaioFaleiro";
window.onload = function() {
    fetch(conteudosfetch)
        .then(res => {
            return res.json()
        })
        .then(data => {
           
            gostosfoto.src = data.imagem; 
        })
        .catch(err => {
            console.error(err)
        });

    fetch(conteudosfetch) 
        .then(res => {
            return res.json()
        })
        .then(data => {
            data.forEach(repo => {
                gostosfoto.innerHTML += `
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="${repo.imagem}" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="${repo.imagem}" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="${repo.imagem}" class="d-block w-100" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
</div>`
            })
        })
        .catch(err => {
            console.error(err);
        })
        fetch(apigitfetch).then(res=> {
        return res.json()    
        }).then(data => {
            console.log(data);
            nomegit.textContent = data.login
            imagemgit.src = data.avatar_url
            locationgit.textContent=data.location
            documentgit.textContent=data.bio
        })
}
let pagina = []
