import IPage from './IPage';

export function flipPage(index, curr, setCurr) {
    const dir_from = index < curr ? "left" : "right";
    const dir_to = index < curr ? "right" : "left";
    let bookSpine = document.getElementById("ibook-spine")
    if (bookSpine){
        bookSpine.style.zIndex = 0;
        document.getElementById("ibook-curr-"+dir_from).classList.add("flip-"+dir_to);
        document.getElementById("ibook-curr-"+dir_to).classList.add("flip-"+dir_to);
        setTimeout(() => {
            document.getElementById("ibook-curr-"+dir_from).classList.remove("flip-"+dir_to);
            document.getElementById("ibook-curr-"+dir_to).classList.remove("flip-"+dir_to);
            setCurr(index);
            setTimeout(() => {
                document.getElementById("ibook-spine").style.zIndex = 100;
            }, 500)
        }, 500);
    } else {
        setCurr(index);
    }
}

export default function IBackPage({icon, title, index, left, length, curr, setCurr}) {
    function onClick () {
        flipPage(index, curr, setCurr);
    }
    const pagetitle_inner = left ? (
        <>
            <img src={icon} className="pagetitle-icon" alt={title + " icon"}/>
            <h4 className="pagetitle-text">
                {title}
            </h4>
        </>
    ) : (
        <>
            <h4 className="pagetitle-text">
                {title}
            </h4>
            <img src={icon} className="pagetitle-icon" alt={title + " icon"}/>
        </>
    );
    return (
        <IPage index={index} left={left} length={length}>
            <nav className="pageheader bookmark">
                <button 
                    className="pagetitle"
                    onClick={onClick} 
                    tabIndex={index+1}
                >
                    {pagetitle_inner}
                </button>
            </nav>
        </IPage>
    )
}