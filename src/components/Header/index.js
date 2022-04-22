import React from 'react'
import styled from 'styled-components';
import { question } from '../../state/config'

const Container = styled.div`
    height: ${({ theme }) => theme.constant.navHeight};


    border-bottom: 1px solid #fff;
    width: 100vw;
    text-align: center;
    margin: 0 0 20px 0;
    padding: 0 10px;

    p{
        color:#fff;
    }
`
function index() {
    return (
        <Container>
            <p>{question}</p>
        </Container>
    )
}

export default index