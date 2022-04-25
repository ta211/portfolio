import IPage from './IPage';

export default function IBackPage({icon, title, index, left, length, onclick}) {
    const pagetitle_inner = left ? (
        <>
            <img src={icon} className="pagetitle-icon" /><div className="pagetitle-text">
                {title}
            </div>
        </>
    ) : (
        <>
            <div className="pagetitle-text">
                {title}
            </div>
            <img src={icon} className="pagetitle-icon"/>
        </>
    );
    return (
        <IPage index={index} left={left} length={length}>
            <div className="pageheader bookmark">
                <div className="pagetitle" onClick={onclick}>
                    {pagetitle_inner}
                </div>
            </div>
        </IPage>
    )
}