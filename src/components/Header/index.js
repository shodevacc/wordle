import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    height: ${({ theme }) => theme.constant.navHeight};


    border-bottom: 1px solid #fff;
    width: 100vw;
    text-align: center;
    margin: 0 0 20px 0;

    p{
        color:#fff;
    }
`
function index() {
    return (
        <Container>
            <p>Wordle</p>
        </Container>
    )
}

export default index