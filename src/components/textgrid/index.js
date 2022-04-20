import React from 'react'
import styled from 'styled-components';
import { useGridState } from '../../state'

const Container = styled.div`
    width: 330px;
    height: calc(1.185 * 330px);
    margin: 0 auto 10px auto;
`
const Row = styled.div`
    display: grid;
    grid-template-columns: ${({ columns }) => `repeat(${columns},1fr)`};
    grid-gap: 5px;
    height: 100%;

`
const GridItem = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    /* padding-top:100% ; */
    color:#fff;
    position: relative;
    cursor: pointer;
    text-transform: capitalize;

    p{
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
        margin:0;
    }
`
function Index() {

    const { row, column, array } = useGridState();

    let baseIndex = 0;

    return (
        <Container>
            <Row columns={column}>
                {
                    array.map((ele, index) => {
                        // console.log("ele", ele.length, ele.map(e => "yo"))
                        baseIndex = index * (row - 1);
                        return (
                            <React.Fragment key={`Grid-Fragment-${index}`}>
                                {ele.map((element, index) => {
                                    // console.log("element", element)
                                    return (
                                        <GridItem id={`grid-item-${baseIndex + index}`} key={`griditem-${index}`} className={"emptyTile"}>
                                            <p>
                                            {/* {element} */}
                                        </p>
                                        </GridItem>
                                    )
                                })}
                            </React.Fragment>
                        )
                    })}

            </Row>
        </Container>
    )
}

export default Index