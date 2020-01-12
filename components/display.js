import React from 'react'
import styled from '@emotion/styled'
import { categoriesData, defaultTitle } from './categories-data'
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
export const H2 = styled.h2`
    font-family: 'Roboto';
    font-size: 1.4em;
    font-weight: 700;
    margin: 30px;
    color: white;
`

const Body = styled.p`
    font-family: 'Roboto';
    font-size: 1em;
    font-weight: 400;
    line-height: 1.5em;
    margin: 30px;
`

export const Display = props =>
    <Wrapper>
        <H2>{props.selectedCategory === -1 ? defaultTitle : categoriesData[props.selectedCategory].title}</H2>
        {(props.selectedCategory > -1) && <Body>{categoriesData[props.selectedCategory].body}</Body>}
    </Wrapper>