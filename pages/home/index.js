import { jobsData } from "../../pages/home/jobsData.js";
const dataBase = jobsData;
console.log(dataBase);
let vagas = [];
console.log(vagas);
function criarCard(element) {
  const conteiner = document.querySelector(".conteiner");
  const myUl = document.createElement("ul");
  myUl.setAttribute("class", "ulContent");
  const li = document.createElement("li");
  li.setAttribute("class", "liContent");
  const h2Title = document.createElement("h2");
  h2Title.setAttribute("class", "h2titulo");
  const spanLocal = document.createElement("span");
  spanLocal.setAttribute("class", "location");
  const h4Enterprise = document.createElement("h4");
  h4Enterprise.setAttribute("class", "enterprise");
  const h4Local = document.createElement("h4");
  h4Local.setAttribute("class", "local");
  const ptext = document.createElement("p");
  ptext.setAttribute("class", "description");
  const spanBtn = document.createElement("span");
  spanBtn.setAttribute("class", "SpanBtn  spanButton");
  const btnEstyleprof = document.createElement("button");
  btnEstyleprof.setAttribute("class", "estyleprof");
  const buttonCandidatar = document.createElement("button");
  buttonCandidatar.setAttribute("id", "btncandidatarText");
  buttonCandidatar.setAttribute("class", "btnCandidatar");

  h2Title.innerText = element.title;
  h4Enterprise.innerText = element.enterprise;
  h4Local.innerText = element.location;
  ptext.innerText = element.descrition;
  btnEstyleprof.innerText = element.modalities;
  buttonCandidatar.innerText = "Candidatar";
  buttonCandidatar.addEventListener("click", () => {});

  spanLocal.append(h4Enterprise, h4Local);
  spanBtn.append(btnEstyleprof, buttonCandidatar);
  li.append(h2Title, ptext, spanLocal, spanBtn);
  myUl.appendChild(li);

  conteiner.appendChild(myUl);
}

function renderizarCard(list) {
  list.forEach((element) => {
    criarCard(element);
  });
}
renderizarCard(dataBase);
function renderizarVagaSelecionada(data) {
  const myUl = document.querySelector(".asideVagas");
  myUl.innerHTML = "";
  data.forEach((elemento) => {
    const li = document.createElement("li");
    li.setAttribute("class", "liContent");

    const titulo = document.createElement("h2");
    titulo.setAttribute("class", "h2titulo");

    const spanLocal = document.createElement("span");
    spanLocal.setAttribute("class", "location");

    const h4 = document.createElement("h4");
    h4.setAttribute("class", "enterprise");

    const h4Local = document.createElement("h4");
    h4Local.setAttribute("class", "local");

    const ptext = document.createElement("p");
    ptext.setAttribute("class", "description");

    const spanBtn = document.createElement("span");
    spanBtn.setAttribute("class", "SpanBtn");

    const btnEstyleprof = document.createElement("button");
    btnEstyleprof.setAttribute("class", "estyleprof");

    const buttonCandidatar = document.createElement("button");
    buttonCandidatar.setAttribute("id", "btncandidatarText");
    buttonCandidatar.setAttribute("class", "btnCandidatar");
    const img = document.createElement("img");

    buttonCandidatar.setAttribute("class", "btncand");
    buttonCandidatar.addEventListener("click", () => {
      remover();
    });
    titulo.innerText = elemento.title;

    h4.innerText = elemento.enterprise;
    h4Local.innerText = elemento.location;
    // ptext.innerText = elemento.descrition;
    btnEstyleprof.innerText = elemento.modalities;
    img.src = "src../../assets/img/trash.svg";
    buttonCandidatar.appendChild(img);
    ///////*////////////////

    /////////////////
    spanLocal.append(h4, h4Local);
    spanBtn.append(btnEstyleprof, buttonCandidatar);
    li.append(titulo, spanLocal, spanBtn);
    myUl.appendChild(li);
  });
}

function renderLocal(data) {
  const btnCandidatar = document.querySelectorAll(".btnCandidatar");
  const getInfo = JSON.stringify(
    localStorage.getItem("@kenzieVagas:vagaSelecionada")
  );

  const myUl = document.querySelector(".asideVagas");
  myUl.innerHTML = "";

  btnCandidatar.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      const myUl = document.querySelector(".asideVagas");
      myUl.innerHTML = "";
      e.preventDefault();
      let elementos = dataBase.find((elementos) => elem.id != elementos.id);
      if (elem.innerText == "Candidatar") {
        vagas = [...vagas, elementos];

        elem.innerText = "Remover";
        renderizarVagaSelecionada(vagas);
        localStorage.setItem(
          "@kenzieVagas:vagaSelecionada",
          JSON.stringify(vagas)
        );
      } else {
        const index = vagas.indexOf(elementos);

        elem.innerText = "Candidatar";
        vagas.splice(index, 1);
        renderizarVagaSelecionada(vagas);
        vagasVazia();
      }
    });
  });
}
renderLocal(jobsData);
function remover() {
  console.log(vagas);
  const myUl = document.querySelector(".asideVagas");
  myUl.innerHTML = "";
  console.log(vagas);
}
remover();

function vagasVazia() {
  const myUl = document.querySelector(".asideVagas");
  myUl.innerHTML = "";
  if (vagas.length > 0) {
    myUl.classList.add("displayNone");
  } else {
    myUl.classList.remove("displayNone");
  }
}
