import './INote.scss';

import { useState } from 'react';

function IMenu({curr, setCurr, pages}) {

    const [open, setOpen] = useState(false);

    const changePage = (index) => {
        setCurr(index);
        setOpen(false);
    }

    const getMenuItemSelectedIcon = () => {
        return (
            <div 
                className={
                    `inote-menu-item inote-menu-item-${curr} inote-menu-item-selected`}
                key={`inote-menu-item-${curr}`} 
                id={`inote-menu-item-${curr}`}
                style={{'--id': curr}}
            >
                <div className="inote-icon" 
                onClick={() => setOpen(true)}>
                    <img src={pages[curr].icon}/>
                </div>
            </div>
        );
    };

    const getMenuItem = (p, index) => {
        return (
            <div 
                className={
                    `inote-menu-item inote-menu-item-${index}` + 
                    (index==curr ? 
                    " inote-menu-item-selected" : "")
                }
                key={`inote-menu-item-${index}`} 
                id={`inote-menu-item-${index}`}
                style={{'--id': index}}
                onClick={() => changePage(index)}
            >
                <div className="inote-icon">
                    <img src={p.icon}/>
                </div>
                <div className="inote-title">
                    {p.title}
                </div>
            </div>
        );
    }
    return (
        <div className="inote-navbar">
            <div className={"inote-menu" + (open ? " inote-menu-open" : "")}>
                {
                    open ? 
                    pages.map((page, index) => 
                        getMenuItem(page, index)
                    ) 
                    : getMenuItemSelectedIcon()
                }
            </div>
        </div>
    );
}

export default function INote({curr, setCurr, pages}) {
    const length = pages.length;

    return (
        <div className="inote-container">
            <div className="inote-header">
                <div className="inote-spine" id="inote-spine">
                    <div className="inote-spine-1" />
                    <div className="inote-spine-2" />
                    <div className="inote-spine-3" />
                    <div className="inote-spine-4" />
                    <div className="inote-spine-5" />
                </div>
            </div>
            <IMenu curr={curr} setCurr={setCurr} pages={pages} />
            {/* <div className="inote-back-pages">
                <div className="inote-left-pages">
                    {pages.slice(0, curr).map(({icon, title}, index) => 
                        <IBackPage 
                            key={index}
                            icon={icon} 
                            title={title} 
                            left={true}
                            index={index} 
                            curr={curr}
                            setCurr={setCurr}
                        />
                    )}
                </div>
                <div className="inote-right-pages">
                    {pages.slice(curr + 1).map(({icon, title}, index) => 
                        <IBackPage 
                            key={index}
                            icon={icon} 
                            title={title} 
                            left={false}
                            index={curr+1+index} 
                            length={length}
                            curr={curr}
                            setCurr={setCurr}
                        />
                    ).reverse()}
                </div>
            </div> */}
            <div className="inote-curr-page">
                {pages[curr].content.left}
                {pages[curr].content.right}
            </div>
        </div>
    )
}