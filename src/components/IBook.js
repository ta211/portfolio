import './IBook.scss';

import IPage from './IPage';
import IBackPage from './IBackPage';

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

function RightPageCurr({children, index, length}) {
    return (
        <IPage index={index} left={false} length={length}>
            {children}
        </IPage>
    );
}

export default function IBook({curr, setCurr, pages}) {
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
                        <IBackPage 
                            icon={icon} 
                            title={title} 
                            left={true}
                            index={index} 
                            onclick={() => setCurr(index)}
                        />
                    )}
                </div>
                <div className="ibook-right-pages">
                    {pages.slice(curr + 1).map(({icon, title}, index) => 
                        <IBackPage 
                            icon={icon} 
                            title={title} 
                            left={false}
                            index={curr+1+index} 
                            length={length}
                            onclick={() => setCurr(curr+1+index)}
                        />
                    ).reverse()}
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
                        index={curr}
                        length={length}
                    >
                        {pages[curr].content}
                    </RightPageCurr>
                </div>
            </div>
        </div>
    )
}