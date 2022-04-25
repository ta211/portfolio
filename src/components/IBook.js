import './IBook.scss';

import IPage from './IPage';

import EyeIcon from '../icons/eye.svg';

function LeftPageCurr({icon, title, children, index}) {
    return (
        <IPage index={index} left={true}>
            <div className="pageheader">
                <div className="pagetitle">
                    <img src={icon} className="pagetitle-icon"/>
                    <div className="pagetitle-text">
                        {title}
                    </div>
                </div>
                <img src={EyeIcon} className="pagelogo"/>
            </div>
            {children}
        </IPage>
    );
}

function RightPageCurr({children, index}) {
    return (
        <IPage index={index} left={false}>
            {children}
        </IPage>
    );
}

function LeftPageBack({icon, title, index}) {
    return (
        <IPage index={index} left={true}>
            <div className="pageheader bookmark">
                <div className="pagetitle">
                    <img src={icon} className="pagetitle-icon"/>
                    <div className="pagetitle-text">
                        {title}
                    </div>
                </div>
            </div>
        </IPage>
    );
}

function RightPageBack({icon, title, index}) {
    return (
        <IPage index={index} left={false}>
            <div className="pageheader bookmark">
                <div className="pagetitle">
                    <div className="pagetitle-text">
                        {title}
                    </div>
                    <img src={icon} className="pagetitle-icon"/>
                </div>
            </div>
        </IPage>
    );
}

export default function IBook({curr, pages}) {
    const length = pages.length;

    return (
        <div className="ibook-container">
            <div className="ibook-spine">
                <div className="ibook-spine-1" />
                <div className="ibook-spine-2" />
                <div className="ibook-spine-3" />
                <div className="ibook-spine-4" />
                <div className="ibook-spine-5" />
                <div className="ibook-spine-6" />
            </div>
            <div className="ibook-back-pages">
                <div className="ibook-left-pages">
                    {pages.slice(0, curr).map(({icon, title}, index) => 
                        <LeftPageBack icon={icon} title={title} index={index} />
                    )}
                </div>
                <div className="ibook-right-pages">
                    {pages.slice(curr + 1).reverse().map(({icon, title}, index) => 
                        <RightPageBack icon={icon} title={title} index={index}/>
                    )}
                </div>
            </div>
            <div className="ibook-curr-page">
                <div className="ibook-curr-left">
                    <LeftPageCurr 
                        icon={pages[curr].icon} 
                        title={pages[curr].title}
                        index={curr}
                    >
                        {pages[curr].content}
                    </LeftPageCurr>
                </div>
                <div className="ibook-curr-right">
                    <RightPageCurr 
                        index={length-1-curr}
                    >
                        {pages[curr].content}
                    </RightPageCurr>
                </div>
            </div>
        </div>
    )
}