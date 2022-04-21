import React from 'react'
import styled from 'styled-components';
import { useGridState } from '../../state'

const Container = styled.div`
    width: 100%;
    height: 200px;
    
    button{
        display: inline-flex;
        justify-content: center;
        align-items:center;
        background: ${({ theme }) => theme.colors.btnBasic};
        border: none;
        border-radius: 3px;
        margin: 0 5px;
        height: 100%;
        
        text-transform: capitalize;
        font-weight: 600;
        color: #fff;

        flex: 1;
        cursor:pointer;
        position: relative ;

        :after{
            content: '';
            height: 100%;
            width:100%;
            background:#5d5d5e;
            position: absolute ;
            top:0;
            left:0;
            z-index:0;
            border-radius: 3px;
            opacity:0;
        }
        :hover:after{
            opacity:1;
        }
        p{
            z-index: 2;
        }
    }
`
const Row = styled.div`
    display: flex;
    justify-content: center;
    align-items: stretch;
    flex-wrap: nowrap;
    height: 30%;
    margin: 0 auto 5px;
    width: 100%;
`

const Icon = styled.svg`
    /* width: 80%; */
`

const BackSpaceIcon = () => <Icon style={{ zIndex: '2' }} xmlns="http://www.w3.org/2000/svg" width="60%" viewBox="0 0 24 24" >
    <path fill="#fff" d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"></path>
</Icon>



const Button = ({ children, id, attribute }) => {
    const btnRef = React.useRef(null);
    const { updateGuessedWords, handleSubmit } = useGridState();
    // console.log("currentword",guessedWords)

    // console.log("pos", currentPos)
    const handleClick = () => {

        if (attribute && attribute === 'del') {
            updateGuessedWords(attribute, true)
        }
        else if (children === 'Enter') {
            handleSubmit()

        }

        else {
            updateGuessedWords(children)
            // validateWord()


        }

        console.log(attribute ? attribute : children)
    }

    // console.log(currentPos);
    React.useEffect(() => {
        const element = btnRef.current
        element.addEventListener("click", handleClick)
        return (() => {
            element.removeEventListener("click", handleClick)
        })
    }, [updateGuessedWords])
    return (
        <button id={id} ref={btnRef}>
            {attribute ?
                children
                : <p>
                    {children}
                </p>
            }

        </button>
    )
}
const OutputLetters = ({ input }) => {
    return (
        <>
            {input.split('').map((letter, key) => {
                return (
                    <React.Fragment key={`button-${key}`}>
                        <Button id={`button-${letter}`}>{letter}</Button>
                    </React.Fragment>
                )
            })}
        </>
    )
}

function Index() {

    const firstrow = `qwertyuiop`
    const secondrow = `asdfghjkl`
    const thirdrow = `zxcvbnm`

    return (
        <Container id="keyboard">
            <Row>
                <OutputLetters input={firstrow} />
            </Row>
            <Row>
                <OutputLetters input={secondrow} />
            </Row>
            <Row>
                <Button id="button-enter">Enter</Button>
                <OutputLetters input={thirdrow} />
                <Button id="button-del" attribute="del">
                    <BackSpaceIcon />
                </Button>
            </Row>


        </Container>
    )
}

export default Index