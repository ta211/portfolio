export default function IPage({index, left, children}) {
    return (
        <div 
            className={"page " + (left ? "leftpage" : "rightpage")} 
            style={{'--index': index}}
        >
            {children}
        </div>
    )
};