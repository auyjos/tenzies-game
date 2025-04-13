export default function Failed({ rolls, newGame }) {
    return (
        <div className="failed-overlay">
            <div className="failed-message">
                <h2>Game Over!</h2>
                <p>You rolled {rolls} times</p>
                <button className="btn-newgame" onClick={() => newGame()}>New Game</button>
            </div>
        </div>
    )
}