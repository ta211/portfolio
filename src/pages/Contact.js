import './Contact.scss';

const contactLeft = 
<div className="contact-left-container container">
    <div className="contact-email">
        Email: atang1@andrew.cmu.edu
    </div>
    <div className="contact-github">
        <a href="https://github.com/ta211">Github</a>
    </div>
</div>

const contact = {
    left: contactLeft,
    right: <div></div>
}
export default contact;