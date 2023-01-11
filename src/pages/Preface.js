import './Preface.scss'
import resume from '../media/Resume-A4.pdf';

const prefaceLeft = 
<div className="preface-left-container container">
    <div className="preface-arrow"></div>
</div>;

const prefaceRight = 
<div className="preface-right-container container">
    <div className="preface-arrow" />
    <div className="preface-arrow-lower"/>
    <div className="photo">

    </div>
    <div className="education">
        Carnegie Mellon Univserity <br/>
        Aug 2019 - May 2023 | Pittsburgh <br/>
        B.S. in 
        <ul>
            <li>Aritificial Intelligence</li>
            <li>Human-Computer Interaction</li>
        </ul>
        GPA: 3.80 <br />
        <a href={resume} className="link">Link to resume</a>
    </div>
</div>

const preface = {
    left: prefaceLeft,
    right: prefaceRight
}
export default preface;