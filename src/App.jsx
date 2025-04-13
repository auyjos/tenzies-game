import { useState, useEffect } from "react"
import Die from "./components/Die"
import Failed from "./components/Failed"
import { nanoid } from "nanoid"
import Confetti from "react-confetti"

const MAX_ROLLS = 10  // You can adjust this number to change the difficulty

export default function App() {
    const [dice, setDice] = useState(() => generateAllNewDice())
    const [rolls, setRolls] = useState(0)
    const [time, setTime] = useState(0)
    const [isRunning, setIsRunning] = useState(false)
    const [failed, setFailed] = useState(false)
    
    const gameWon = dice.every(die => die.isHeld) &&
        dice.every(die => die.value === dice[0].value)

    useEffect(() => {
        let intervalId
        if (isRunning && !failed) {
            intervalId = setInterval(() => {
                setTime(prevTime => prevTime + 1)
            }, 1000)
        }
        return () => clearInterval(intervalId)
    }, [isRunning, failed])

    function startNewGame() {
        setDice(generateAllNewDice())
        setRolls(0)
        setTime(0)
        setIsRunning(false)
        setFailed(false)
    }

    function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => ({
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: nanoid()
            }))
    }
    
    function rollDice() {
        if (failed) {
            startNewGame()
            return
        }
        
        if (!gameWon) {
          setRolls(prevRolls => {
            const newRolls = prevRolls + 1;
      
            // If the new number of rolls would exceed MAX_ROLLS, update state accordingly.
            if (newRolls > MAX_ROLLS) {
              setFailed(true);
              setIsRunning(false);
              // Returning the previous value so the roll count doesn't update further.
              return prevRolls;
            }
      
            return newRolls;
          });
            if (!isRunning) {
                setIsRunning(true)
            }
           
            setDice(oldDice => oldDice.map(die =>
                die.isHeld ?
                    die :
                    { ...die, value: Math.ceil(Math.random() * 6) }
            ))
        } else {
            startNewGame()
        }
    }

    function hold(id) {
        if (failed) return
        if (!isRunning) {
            setIsRunning(true)
        }
        setDice(oldDice => oldDice.map(die =>
            die.id === id ?
                { ...die, isHeld: !die.isHeld } :
                die
        ))
    }

    useEffect(() => {
        if (gameWon) {
            setIsRunning(false)
        }
    }, [gameWon])

    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60)
        const secs = seconds % 60
        return `${mins}:${secs.toString().padStart(2, '0')}`
    }

    const diceElements = dice.map(dieObj => (
        <Die
            key={dieObj.id}
            value={dieObj.value}
            isHeld={dieObj.isHeld}
            hold={() => hold(dieObj.id)}
            failed={failed}
        />
    ))

    return (
        <main>
            {gameWon && <Confetti />}
            {failed && <Failed rolls={rolls} maxRolls={MAX_ROLLS} newGame = {startNewGame} />}
            <div aria-live="polite" className="sr-only">
                {gameWon && <p>Congratulations! You won! Press "New Game" to start again.</p>}
                {failed && <p>Game Over! You exceeded {MAX_ROLLS} rolls. Press "New Game" to try again.</p>}
            </div>
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="stats">
                <p>Time: {formatTime(time)}</p>
                <p>Rolls: {rolls}/{MAX_ROLLS}</p>
            </div>
            <div className="dice-container">
                {diceElements}
            </div>
            <button className="roll-dice" onClick={rollDice}>
                {gameWon || failed ? "New Game" : "Roll"}
            </button>
        </main>
    )
}