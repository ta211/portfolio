import './Cover.scss';

import { flipPage } from '../components/IBackPage';

import EyeIcon from '../icons/eye.svg';

const coverleft = (
    <div className="cover-left-container">
        <h1 className="cover-greeting">Hello!</h1>
        <div className="cover-message">
            <h3>Welcome to my portfolio.</h3>
            <h3>Click on the button to start your journey!</h3>
        </div>
        <h1 className="cover-signature">An.</h1>
    </div>
);

const coverright = (setCurr) => (
    <div className="cover-right-container">
        <img src={EyeIcon} className="cover-icon" alt="An eye shape is staring at you on the cover of the bookfolio, which is also the website's logo."/>
        <button className="cover-button" onClick={() => flipPage(1, 0, setCurr)} aria-label="Click to opne my bookfolio">
            <div className="cover-button-ripple"/>
        </button>
    </div>
);

const cover = (setCurr) => ({
    left: coverleft,
    right: coverright(setCurr),
});

export default cover;