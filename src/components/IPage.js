export default function IPage({index, left, length, children}) {
    return (
        <div 
            className={"page " + (left ? "leftpage " : "rightpage ") + "page-" + index} 
            style={{
                '--index': index,
                '--length': length,
            }}
        >
            {children}
        </div>
    )
};