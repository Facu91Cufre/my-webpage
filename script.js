const modalImg = document.getElementById("modal-img");
const closeBtn = document.getElementById("close-modal-btn");
const modalOverlay = document.querySelector(".modal-overlay");
const images = document.querySelectorAll("img");
const projects = document.querySelector(".cont-projects");
const repositoryBtn = document.getElementById("repository-btn");
const certificates = document.querySelector(".cont-diplomas");
const modalBtns = document.querySelector(".cont-modal-buttons");

// Projects Array

const projectsURLs = [
  {
    name: "project-1",
    repoURL: "https://github.com/Facu91Cufre/mitos-y-leyendas",
    projectURL: "https://mitos-y-leyendas.vercel.app/cartas.html"
  },
  {
    name: "project-2",
    repoURL: "https://github.com/Facu91Cufre/mitos-y-leyendas",
    projectURL: "https://mitos-y-leyendas.vercel.app/cartas.html"
  },
  {
    name: "project-3",
    repoURL: "https://github.com/Facu91Cufre/mitos-y-leyendas",
    projectURL: "https://mitos-y-leyendas.vercel.app/cartas.html"
  },
  {
    name: "project-4",
    repoURL: "https://github.com/Facu91Cufre/mitos-y-leyendas",
    projectURL: "https://mitos-y-leyendas.vercel.app/cartas.html"
  },
  {
    name: "project-5",
    repoURL: "https://github.com/Facu91Cufre/mitos-y-leyendas",
    projectURL: "https://mitos-y-leyendas.vercel.app/cartas.html"
  }
]
// Open Modal Function

const openModal = (item) => {
  modalOverlay.style.display = "flex";
  document.body.style.overflow = "hidden";
  const image = item.querySelector("img");
  modalImg.src = image.src;
  console.log(item);
  if (item.classList.contains("cont-diploma")) {
    modalBtns.style.display = "none";
    console.log("Si, es un diploma");
  } else{
    modalBtns.style.display = "flex";
  }
};

// Close Modal Function

const closeModal = () => {
  modalOverlay.style.display = "none";
  document.body.style.overflow = "scroll";
}

projects.addEventListener("click", (e) => {
  openModal(e.target);
});
certificates.addEventListener("click", (e) => {
  openModal(e.target);
});
closeBtn.addEventListener("click", closeModal);