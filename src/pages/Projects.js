import './Projects.scss';
import defaultImg from '../icons/image_NA.png';
// Import project logos

const defaultContent = 
<>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ex turpis, sollicitudin et magna in, maximus semper est. Interdum et malesuada fames ac ante ipsum primis in faucibus. </p>
    <p>Aliquam commodo iaculis turpis a bibendum. Nam facilisis, mi in vulputate sodales, quam tellus aliquam diam, id semper velit leo sed ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus."</p>
</>;

const defaultLink = "#";

function Project(name, link, role, duration, location, img) {
    this.name = name;
    this.link = link;
    this.role = role;
    this.duration = duration;
    this.location = location;
    this.img = img;
}

const Mentra2020 = new Project(
    "Mentra", 
    "https://mentra.me",
    "Front-End Engineer Intern",
    "Jun 2020 - Aug 2020",
    "Remote",
    "https://miro.medium.com/max/1400/1*W0HGy1iEdaXsdYHIpBxNUw.png"
);
const CAIRaoke2021 = new Project(
    "Meta CAIRaoke", 
    "https://ai.facebook.com/blog/project-cairaoke/",
    "Software Engineer Intern",
    "May 2021 - Aug 2021",
    "Remote",
    "https://scontent.fagc2-1.fna.fbcdn.net/v/t39.2365-6/274126922_2019376288240013_9113420154352223925_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=ad8a9d&_nc_ohc=uWbW9dHJCnoAX92wMCE&_nc_ht=scontent.fagc2-1.fna&oh=00_AT_5Rkuo9lxzHzVC0paPAVMcNN5fhBo54CLO3sZwlGFRnQ&oe=626CEDAC"
);
const Meta2022 = new Project(
    "Meta AI Experience CAIRaoke", 
    "#",
    "Software Engineer Intern",
    "May 2022 - Aug 2022",
    "Menlo Park, CA"
);

const projectList = [
    Mentra2020,
    CAIRaoke2021,
    Meta2022
];

function selectProject(projectId) {
    let prevSelected = document.getElementsByClassName("project-row-selected")[0];
    if (prevSelected) {
        prevSelected.classList.remove("project-row-selected");
        prevSelected.getElementsByClassName("project-pointer")[0].textContent = "•";
    }

    let selected = document.getElementById(`project-${projectId}`);
    selected.classList.add("project-row-selected");
    selected.getElementsByClassName("project-pointer")[0].textContent = ">";

    // Update right page
    let project = projectList[projectId];
    
    let rightPage = document.getElementsByClassName("project-right-container")[0];
    let rightIMG = rightPage.getElementsByClassName("project-img-container")[0];

    rightIMG.setAttribute("href", project.link ?? defaultLink);

    rightIMG.firstChild.setAttribute("src", project.img ?? defaultImg);
    rightIMG.firstChild.setAttribute("alt", project.img ? "Image coming soon!" : `Link to ${project.name}`);

    rightPage.style.display = "block";
}

function getProjectSummary(project, index) {    
    return (
    <div 
        className="project-row" 
        id={`project-${index}`} 
        key={`project-${index}`} 
        onClick={() => selectProject(index)}
    >
        <button className="project-overview">
            <div className="project-pointer">
                •
            </div>
            <h4 className="project-title" key={index}>
                {project.name} | {project.role}
            </h4>
        </button>
        <div className="project-info">
            {project.duration} | {project.location}
        </div>
    </div>
    );
};

function ProjectLeft () {
    return (
        <div className="project-left-container container">
            {projectList.map((project, index) => getProjectSummary(project, index))}
        </div>
    );
}

function ProjectRight () {
    return (
        <div className="project-right-container">
            <a className="project-img-container" href={defaultLink}>
                <img className="project-img" src={defaultImg} alt={`Link to project`}/>
            </a>
            <div className="project-descrip-container">
                {defaultContent}
            </div>
        </div>
    )
}

// 2023 update -> project list
function ProjectList(title, subtitle, projects) {
    this.title = title;
    this.subtitle = subtitle;
    this.projects = projects;
}

const UXDesignList = new ProjectList(
    "UX Design",
    null,
    []
);

const UXResearchList = new ProjectList(
    "UX Research",
    null,
    []
);

const InternList = new ProjectList(
    "iNtern!",
    "My past internships",
    []
);

const OtherList = new ProjectList(
    "Other",
    "Clubs, Hackathons, or just for fun!",
    []
);

const projectLists = [
    UXDesignList,
    UXResearchList,
    InternList,
    OtherList,
];

function ProjectListCard({list, index}) {
    return (
        <div
            className="project-title-card"
            id={`project-title-card-${index}`}
            key={`project-title-card-${index}`}
            onClick={() => selectProjectList(index)}
        >
            <div className="project-titles-wrapper">
                <div className="project-title">{list.title}</div>
                {
                    list.subtitle && 
                    <div className="project-subtitle">
                        {"(" + list.subtitle + ")"}
                    </div>
                }
            </div>
        </div>
    )
}


function selectProjectList(index) {
    const selectedClassName = "project-title-card-selected";
    let prevSelected = document.getElementsByClassName(selectedClassName)[0];
    if (prevSelected) {
        prevSelected.classList.remove(selectedClassName);
    }

    let selected = document.getElementById(`project-title-card-${index}`);
    selected.classList.add(selectedClassName);

    // Update right page
    
    // let project = projectList[projectId];
    
    let rightPage = document.getElementsByClassName("project-right-container")[0];
    // let rightIMG = rightPage.getElementsByClassName("project-img-container")[0];

    // rightIMG.setAttribute("href", project.link ?? defaultLink);

    // rightIMG.firstChild.setAttribute("src", project.img ?? defaultImg);
    // rightIMG.firstChild.setAttribute("alt", project.img ? "Image coming soon!" : `Link to ${project.name}`);

    // rightPage.style.display = "block";
}

const projects = {
    left: 
    <div className="project-left-container container">
        <div className="project-title-cards">
            {projectLists.map((list, index) => <ProjectListCard list={list} index={index} />)}
        </div>
    </div>,
    right: 
    <div class="project-right-container container">
        <div class="column-wrapper">
            <div class="column left-column">
                <div class="project-overview"></div>
                <div class="project-gap"></div>
                <div class="project-overview"></div>
            </div>
            <div class="column right-column">
                <div class="project-gap"></div>
                <div class="project-overview"></div>
                <div class="project-gap"></div>
            </div>
        </div>
    </div>
}
export default projects;