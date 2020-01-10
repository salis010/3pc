import React from 'react'
import styled from '@emotion/styled'
import { gap, blue3pc } from './theme'

const Wrapper = styled.div`
    display: inline-block;
    width: 500px;
    height: 100;
    margin-left: ${gap};
    color: white;
    font-family: 'Roboto';
    font-size: 1.1em;
    font-weight: 700;
    background-color: ${blue3pc};
`

const H2 = styled.h2`
    font-family: 'Roboto';
    font-size: 1.4em;
    font-weight: 700;
    margin: 30px;
`

export const Display = props =>
    <Wrapper>
        <H2>Bitte wählen Sie eine Kategorie oder eine Textsorte aus.</H2>
    </Wrapper>