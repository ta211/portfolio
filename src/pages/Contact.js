import './Contact.scss';

const contactLeft = 
<div className="contact-left-container container">
    <h4 className="contact-email">
        Email: atang1@andrew.cmu.edu
    </h4>
    <h4 className="contact-github">
        <a href="https://github.com/ta211">Github</a>
    </h4>
</div>

const contact = {
    left: contactLeft,
    right: <div></div>
}
export default contact;