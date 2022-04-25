import './Cover.scss';

import { flipPage } from '../components/IBackPage';

import EyeIcon from '../icons/eye.svg';

const coverleft = (
    <div className="cover-left-container">
        <div className="cover-greeting">Hello!</div>
        <div className="cover-message">
            <p>Welcome to my portfolio.</p>
            <p>Click on the button to start your journey!</p>
        </div>
        <div className="cover-signature">An.</div>
    </div>
);

const coverright = (setCurr) => (
    <div className="cover-right-container">
        <img src={EyeIcon} className="cover-icon"/>
        <div className="cover-button" onClick={() => flipPage(1, 0, setCurr)}>
            <div className="cover-button-ripple"/>
        </div>
    </div>
);

const cover = (setCurr) => ({
    left: coverleft,
    right: coverright(setCurr),
});

export default cover;