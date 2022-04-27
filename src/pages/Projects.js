import './Projects.scss';
import defaultImg from '../icons/image_NA.png';

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
    "mentra.me",
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
        <div className="project-pointer">
            •
        </div>
        <div className="project-overview">
            <div className="project-title" key={index}>
                {project.name} | {project.role}
            </div>
            <div className="project-info">
                {project.duration} | {project.location}
            </div>
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
                <img className="project-img" src={defaultImg}/>
            </a>
            <div className="project-descrip-container">
                {defaultContent}
            </div>
        </div>
    )
}

const projects = {
    left: <ProjectLeft />,
    right: <ProjectRight />
}
export default projects;