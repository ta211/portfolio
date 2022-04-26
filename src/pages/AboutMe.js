import './AboutMe.scss'

const aboutmeLeft = 
<div className="aboutme-left-container">
    <div className="aboutme-intro">
        Hello! This is An Tang.
        <br/>
        I am a AI and HCI student at Carnegie Mellon University in my third undergraduate year.
        <br/>
        And I am bad at writing intro, so you can ignore this block, but please check out the photo on the right though, it is a sliding game.
    </div>
</div>;

const aboutme = {
    left: aboutmeLeft,
    right: <div></div>
}
export default aboutme;