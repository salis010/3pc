import React from 'react'
import styled from '@emotion/styled'
import { blue3pc } from './theme'

const Wrapper = styled.div`
    width: 200px;
    height: 95px;
    font-family: 'Roboto';
    font-size: 1.1em;
    font-weight: 700;
    color: ${blue3pc};
    background-color: white;
`

const Content = styled.div`
    margin: 10px;
`

export const Category = props =>
    <Wrapper>
        <Content>{props.title}</Content>        
    </Wrapper>