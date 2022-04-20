import React from 'react'
import { row, column, setword, wrongColor, correctColor, wrongPositionColor } from './config'

const GridContext = React.createContext();

const createArray = (row, column) => {
    return [...Array(row)].map(() => [...Array(column)].map(() => null))
}



export const GridContextProvider = ({ children }) => {
    const array = createArray(row, column);
    const [guessedWords, setGuessedWords] = React.useState([[]]);

    const [currentPos, setCurrentPos] = React.useState(0);

    const getCurrentWord = () => {
        return guessedWords[guessedWords.length - 1]
    }
    const getCurrentWordString = ()=>{
        return guessedWords[guessedWords.length - 1].join('')
    }
    const checkIfWordComplete = () => {
        return getCurrentWord().length === column;
    }
    const getTileColor = (setword,letter, index) => {
        // console.log("ENETRED",setword,letter,index);
        const correctLetter = setword.includes(letter);
        if (!correctLetter) {
            return wrongColor
        }
        // const wrongPosition = word.charAt(index)
        const correctPosition = letter === setword.charAt(index)
        // console.log(letter, setword,correctPosition)
        if (correctPosition) {
            return correctColor
        }
        else {
            return wrongPositionColor
        }
    }
    // const validateWord =(word)=>{
        
    // }
    const handleSubmit = () => {
        // console.log(getCurrentWord())
       

        if (checkIfWordComplete()) {
            console.log("word completed")
            const currentWord = getCurrentWord()
            currentWord.forEach((letter,index)=>{
                const color = getTileColor(setword.toLowerCase(),letter.toLowerCase(),index)
                const tile = document.querySelector(`#grid-item-${((guessedWords.length-1)*5+index)}`)
                // console.log(currentWord,letter,guessedWords.length-1,(guessedWords.length-1)*5,index)
                tile.style.background = color;
            })

            if (getCurrentWordString().toLowerCase() === setword.toLowerCase()) {
                window.alert(`Congratulations, you've won!`);
            }
            if (guessedWords.length === row) {
                window.alert(`Unforutnately, you've lost! The word was ${setword}`);
            }
           
            setGuessedWords(state => {
                return [...state, []]
            })
        }
        else {
            window.alert("not completed")
        }
    }
    const updateGuessedWords = (letter, decrement = false) => {
        if (!decrement && getCurrentWord().length < column) {
            setGuessedWords((state) => {
                return state.map((word, index) => {
                    //Filter for last word guesssed
                    if (index === guessedWords.length - 1) {
                        return [...word, letter]
                    }
                    return word
                })
            })
            const gridItem = document.querySelector(`#grid-item-${currentPos}`)
            // const gridItem.children;
            gridItem.children[0].textContent = letter
            gridItem.classList.add(`inputTile`)
            setCurrentPos(state => state + 1)
        }
        else if (decrement && (getCurrentWord().length > 0)) {
            setGuessedWords((state) => {
                return state.map((word, index) => {
                    //Filter for last word guesssed
                    if (index === guessedWords.length - 1) {
                        return word.slice(0, word.length - 1)
                    }
                    return word
                })
            })
            const gridItem = document.querySelector(`#grid-item-${currentPos - 1}`)
            gridItem.children[0].textContent = null
            gridItem.classList.remove(`inputTile`)
            setCurrentPos(state => state - 1)
        }
        else {
            window.alert("Invalid Option");
        }
    }

    const validateWord = () => {
        const word = getCurrentWord();
        console.log("SUBMIT", word)
    }


    return (
        <GridContext.Provider value={{ row, column, array, getCurrentWord, currentPos, validateWord, setCurrentPos, updateGuessedWords, guessedWords, handleSubmit }}>
            {children}
        </GridContext.Provider>
    )
}

export const useGridState = () => {

    return React.useContext(GridContext)
}