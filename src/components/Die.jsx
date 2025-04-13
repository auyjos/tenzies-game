export default function Die(props) {
    const styles = {
        backgroundColor: props.failed ? "#ff6b6b" : props.isHeld ? "#59E391" : "white",
        display: "grid",
        gridTemplateAreas: getDieGridTemplate(props.value)
    }
    
    function getDieGridTemplate(value) {
        switch(value) {
            case 1: return '"a"';
            case 2: return '"a ." ". b"';
            case 3: return '"a . ." ". b ." ". . c"';
            case 4: return '"a . b" ". . ." "c . d"';
            case 5: return '"a . b" ". c ." "d . e"';
            case 6: return '"a . b" "c . d" "e . f"';
            default: return '"a"';
        }
    }

    function getDots(value) {
        return Array(value).fill(0).map((_, i) => (
            <span 
                key={i} 
                className="dot" 
                style={{ gridArea: String.fromCharCode(97 + i) }}
            />
        ))
    }
    
    return (
        <button 
            className="die-face"
            style={styles}
            onClick={props.hold}
            aria-pressed={props.isHeld}
            aria-label={`Die with value ${props.value}, 
            ${props.isHeld ? "held" : "not held"}`}
        >
            {getDots(props.value)}
        </button>
    )
}