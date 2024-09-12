const modalImg = document.getElementById("modal-img");
const closeBtn = document.getElementById("close-modal-btn");
const modalOverlay = document.querySelector(".modal-overlay");
const images = document.querySelectorAll("img");
const projectsContainer = document.querySelector(".cont-projects");
const certificates = document.querySelector(".cont-diplomas");
const modalBtns = document.querySelector(".cont-modal-buttons");
const projects = document.querySelectorAll(".cont-project");
const projectLink = document.getElementById("project-link");
const repositoryLink = document.getElementById("repository-link");

// Projects Array

const projectsURLs = [
  {
    name: "project-1",
    repoURL: "https://github.com/Facu91Cufre/mitos-y-leyendas",
    projectURL: "https://mitos-y-leyendas.vercel.app/cartas.html",
  },
  {
    name: "project-2",
    repoURL: "https://github.com/Facu91Cufre/quiz-app/blob/master/app.js",
    projectURL: "https://quiz-app-alpha-three.vercel.app/",
  },
  {
    name: "project-3",
    repoURL: "https://github.com/Facu91Cufre/simple-calculator",
    projectURL: "https://simple-calculator-xi-orcin.vercel.app/",
  },
  {
    name: "project-4",
    repoURL: "https://github.com/Facu91Cufre/rock-paper-scissors",
    projectURL: "https://rock-paper-scissors-ashy-tau.vercel.app/",
  },
  {
    name: "project-5",
    repoURL: "https://github.com/Facu91Cufre/text-to-voice-converter",
    projectURL: "https://text-to-voice-converter-eta.vercel.app/",
  },
];
// Open Modal Function

const openModal = (item) => {
  modalOverlay.style.display = "flex";
  document.body.style.overflow = "hidden";
  const image = item.querySelector("img");
  modalImg.src = image.src;
  if (item.classList.contains("cont-diploma")) {
    modalBtns.style.display = "none";
  } else {
    modalBtns.style.display = "flex";
  }
};

// Close Modal Function

const closeModal = () => {
  modalOverlay.style.display = "none";
  document.body.style.overflow = "scroll";
};

projectsContainer.addEventListener("click", (e) => {
  openModal(e.target);
});
certificates.addEventListener("click", (e) => {
  openModal(e.target);
});
closeBtn.addEventListener("click", closeModal);

projects.forEach((project) => {
  project.addEventListener("click", () => {
    const projectNum = project.classList[1];
    const projectInfo = projectsURLs.find(
      (project) => project.name === projectNum
    );
    const repoURL = projectInfo.repoURL;
    const projectURL = projectInfo.projectURL;
    projectLink.setAttribute("href", projectURL);
    repositoryLink.setAttribute("href", repoURL);
    console.log(projectInfo.repoURL);
    console.log(projectNum);
  });
});
