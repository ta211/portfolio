import './Contact.scss';
import leftBG from '../media/contact_left_bg.png';
import rightBG from '../media/contact_right_bg.png';
import githubIcon from '../icons/github_icon.png';
import twitterIcon from '../icons/twitter_icon.png';
import linkedinIcon from '../icons/linkedin_icon.png';

const contactLeft = 
<div className="contact-left-container container">
    <img className="contact-left-bg" src={leftBG} />
</div>

const contactRight = 
<div className="contact-right-container container">
    <img className="contact-right-bg" src={rightBG} />
    <a className="github_icon" href="https://github.com/ta211/" target="_blank">
        <img src={githubIcon} alt="Click to go to my Github page ta211"/>
    </a>
    <a className="linkedin_icon" href="https://www.linkedin.com/in/antang211" target="_blank">
        <img src={linkedinIcon} alt="Click to go to my LinkedIn page antang211"/>
    </a>
</div>

const contact = {
    left: contactLeft,
    right: contactRight,
}
export default contact;