import './Education.scss';

import { useState, useEffect } from 'react';

let updateOutside;

function Course (id, name, instructor, units, content, stars, review) {
    this.id = id;
    this.name = name;
    this.instructor = instructor;
    this.units = units;
    this.content = content;
    this.stars = "★".repeat(stars);
    this.review = review;
}

function Major(name, courses) {
    this.name = name;
    this.courses = courses;
}

function Education(school, degree, majors, duration, location) {
    this.school = school;
    this.degree = degree;
    this.majors = majors;
    this.duration = duration;
    this.location = location;
}

// Creating Courses, Majors, School

const c11411 = new Course(
    "11411",
    "NLP",
    "xxx",
    "12",
    "[some content]",
    4,
    "[some review]"
)
const c11442 = new Course(
    "11442",
    "Search Engine",
    "xxx",
    "12",
    "[some content]",
    4,
    "[some review]"
)
const c05430 = new Course(
    "05430",
    "PUI",
    "Scott Hudson",
    "12",
    "[some content]",
    4,
    "[some review]"
)
const c05499 = new Course(
    "05499",
    "Accessibility",
    "Patrick Carrington",
    "12",
    "[some content]",
    5,
    "[some review]"
)
const c16467 = new Course(
    "16467",
    "Human Robot Interaction",
    "xxx",
    "12",
    "[some content]",
    5,
    "[some review]"
)

const AI = new Major(
    "Artificial Intelligence",
    [c11411, c11442]
);

const HCI = new Major(
    "Human Computer Interaction",
    [c05430, c05499, c16467]
);

const CMU = new Education(
    "Carnegie Mellon University",
    "B.S.",
    [AI, HCI],
    "Aug 2019 - May 2023",
    "Pittsburgh, PA"
);

const eduList = [
    CMU
];

function selectMajor(eduId, majorId) {
    const major = eduList[eduId].majors[majorId];

    let prevMajorContainer = document.getElementsByClassName("edu-major-selected")[0];
    if (prevMajorContainer) {
        prevMajorContainer.classList.remove("edu-major-selected");
        prevMajorContainer.firstChild.textContent = "•";
    }

    let majorContainer = document.getElementById(`edu-${eduId}-major-${majorId}`);
    majorContainer.classList.add("edu-major-selected");
    majorContainer.firstChild.textContent = ">";

    updateOutside(major);
}

function getEduSummary(edu, eduId) {    
    return (
    <div 
        className="edu-row" 
        id={`edu-${eduId}`} 
        key={`edu-${eduId}`} 
    >
        <div className="edu-title">
            {edu.degree} at <b>{edu.school}</b>
        </div>
        <div className="edu-majors">
            {edu.majors.map((major, majorId) => 
            <div 
                className="edu-major" 
                id={`edu-${eduId}-major-${majorId}`} 
                key={`edu-${eduId}-major-${majorId}`} 
                onClick = {() => selectMajor(eduId, majorId)}
            >
                <div className="edu-major-pointer">
                    •
                </div>
                <div className="edu-major-name">
                    {major.name}
                </div>
            </div>
            )}
        </div>
        <div className="edu-info">
            {edu.duration} | {edu.location}
        </div>
    </div>
    );
};

function getCourseRow(course, index, selectedCourseId, selectCourseId) {
    const isSelected = index == selectedCourseId;
    return (
        <div className={"course-row" + (isSelected ? " course-row-selected":"")}>
            <div className="course-title" onClick={() => selectCourseId(index)}>
                <div className="course-title-pointer">
                    {isSelected ? ">" : "•"}
                </div>
                <div className="course-title-name">
                    {course.id} {course.name}
                </div>
            </div>
            {
                index == selectedCourseId &&
                <div className="course-info">
                    <div className="course-instructor">
                        Instructor: {course.instructor}
                    </div>
                    <div className="course-units">
                        Course unit: {course.units} units
                    </div>
                    <div className="course-content">
                        Course Content: {course.content}
                    </div>
                    <div className="course-review">
                        <div className="course-rating">
                            Review: {course.stars}
                        </div>
                        <div className="course-review-content">
                            {course.review}
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

function EduLeft () {
    return (
        <div className="edu-left-container">
            {eduList.map((edu, index) => getEduSummary(edu, index))}
        </div>
    );
}

function EduRight () {
    const [major, updateMajor] = useState();
    const [courseId, setCourseId] = useState(null);

    useEffect(() => {
        /* Assign update to outside variable */
        updateOutside = updateMajor
        setCourseId(null);
    
        /* Unassign when component unmounts */
        return () => updateOutside = null
    }, [major])

    if (!major) {
        return <div />;
    }

    return (
        <div className="edu-right-container">
            <div className="edu-major-name">
                {major && major.name} Courses
            </div>
            <div className="edu-major-courses">
                {major && major.courses.map((course, index) => getCourseRow(course, index, courseId, setCourseId))}
            </div>
        </div>
    )
}

const education = {
    left: <EduLeft />,
    right: <EduRight />
}
export default education;