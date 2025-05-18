//DOWNLOAD CV
const downloadCV =() =>{
    document.getElementById('downloadCV').click();
}

//Navigation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else{
            entry.target.classList.remove('show')
        }
    })
})
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=>observer.observe(el));

const navBarToggle = () =>{
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link=>{
        link.addEventListener('click', () => {
            document.querySelector('.nav-link.active')?.classList.remove('active')
            link.classList.add('active')
        })
    })
}

//Projects
const projects = [
    {
      title: "Employee Expenses Management",
      description: "This powerful web application was designed to streamline the workflow of technicians and supervisors by providing an intuitive platform for time and cost tracking. Technicians can easily log their working hours, upload invoice attachments, and monitor their accumulated income in real time.",
      webLink: "https://luimi55.github.io/ICloudNetworkFrontend",
      codeLink: "https://github.com/Luimi55/ICloudNetworkFrontend",
      backendLink: "https://github.com/Luimi55/ICloudNetworkAppBackend",
      image: "images/Screenshot 2024-09-17 064357.png"
    }
  ];
  


function getProjectsPerSlide() {
    if (window.innerWidth < 992) return 1;       // Mobile
    else if (window.innerWidth < 1200) return 2;  // Tablet
    else return 3;                               // Desktop
  }


  function createProjectHTML(project) {
    const webLink = project.webLink?`<a class="link btnPrimary m-3" target="_blank" href="${project.webLink}">Web</a>`:""
    const backendLink = project.backendLink?`<a class="link btnPrimary m-3" target="_blank" href="${project.backendLink}">Backend</a>`:""
    const codeLink = project.codeLink?`<a class="link btnPrimary m-3" target="_blank" href="${project.codeLink}">Code</a>`:""
    return `
      <div class="projectStyle imageContainer img-fluid m-3 rounded">
        <div class="hid-box d-flex flex-column justify-content-center align-items-center rounded">
          <div class="projectTitle">${project.title}</div>
          <div><p class="text-justify">${project.description}</p></div>
          <div class="d-flex justify-content-center align-items-center projectButtons">`+
          webLink+backendLink+codeLink+
         ` </div>
        </div>
        <img class="projectImage" src="${project.image}" alt="">
      </div>
    `;
  }

  const  renderCarousel =  async() => {
    const container = document.querySelector('.carousel-inner');
    container.innerHTML = ""; // Clear existing content
  
    const perSlide = getProjectsPerSlide();
    let currentItem = document.createElement("div");
    currentItem.classList.add("carousel-item", "active");
  
    const row = document.createElement("div");
    row.classList.add("d-flex", "flex-row", "flex-wrap", "justify-content-center", "align-items-center");
  

    projects.forEach((project, index) => {
        row.innerHTML += createProjectHTML(project);
    

        if ((index + 1) % perSlide === 0 || index === projects.length - 1) {
            currentItem.appendChild(row.cloneNode(true));
            container.appendChild(currentItem);
            
            currentItem = document.createElement("div");
            currentItem.classList.add("carousel-item");
            row.innerHTML = ""; 
        }
        });

  }

    window.addEventListener("load", renderCarousel);
    window.addEventListener("resize", () => {
        renderCarousel(); 
    });

//Main
const main = () => {
    navBarToggle()
}

main();

