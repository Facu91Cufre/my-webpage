const modalImg = document.getElementById("modal-img");
const closeBtn = document.getElementById("close-modal-btn");
const modalOverlay = document.querySelector(".modal-overlay");
const images = document.querySelectorAll("img");
const projectsContainer = document.querySelector(".cont-projects");
const certificates = document.querySelector(".cont-diplomas");
const modalBtns = document.querySelector(".cont-modal-buttons");
const projectLink = document.getElementById("project-link");
const repositoryLink = document.getElementById("repository-link");

// Projects Array

const projectsURLs = [
  {
    name: "project-1",
    repoURL: "https://github.com/Facu91Cufre/mitos-y-leyendas",
    projectURL: "https://mitos-y-leyendas.vercel.app/cartas.html",
    projectImg: "./images/project-1.png",
  },
  {
    name: "project-2",
    repoURL: "https://github.com/Facu91Cufre/quiz-app/blob/master/app.js",
    projectURL: "https://quiz-app-alpha-three.vercel.app/",
    projectImg: "./images/project-2.png",
  },
  {
    name: "project-3",
    repoURL: "https://github.com/Facu91Cufre/simple-calculator",
    projectURL: "https://simple-calculator-xi-orcin.vercel.app/",
    projectImg: "./images/project-3.png",
  },
  {
    name: "project-4",
    repoURL: "https://github.com/Facu91Cufre/rock-paper-scissors",
    projectURL: "https://rock-paper-scissors-ashy-tau.vercel.app/",
    projectImg: "./images/project-4.png",
  },
  {
    name: "project-5",
    repoURL: "https://github.com/Facu91Cufre/text-to-voice-converter",
    projectURL: "https://text-to-voice-converter-eta.vercel.app/",
    projectImg: "./images/project-5.png",
  },
  {
    name: "project-6",
    repoURL: "https://github.com/Facu91Cufre/music-player",
    projectURL: "https://music-player-lac-one.vercel.app/",
    projectImg: "./images/project-6.png",
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

// Create Projects Function

const createProject = () => {
  projectsURLs.forEach((item) => {
    const project = document.createElement("div");
    project.classList.add("cont-project", item.name);
    project.innerHTML = `<img src="${item.projectImg}" alt="project preview" />`;
    projectsContainer.appendChild(project);
  });
  const projects = document.querySelectorAll(".cont-project");
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
    });
  });
};
projectsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("cont-project")) {
    openModal(e.target);
  }
});
certificates.addEventListener("click", (e) => {
  if (e.target.classList.contains("cont-diploma")) {
    openModal(e.target);
  }
});

closeBtn.addEventListener("click", closeModal);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    closeModal();
  }
});

createProject();
