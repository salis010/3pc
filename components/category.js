import React from 'react'
import styled from '@emotion/styled'
import { blue3pc } from './theme'

const Wrapper = styled.div`
    width: 200px;
    height: 95px;
    font-family: 'Roboto';
    font-size: 1.1em;
    font-weight: 700;
    color: ${props => props.isSelected ? "white" : blue3pc};
    background-color: ${props => props.isSelected ? blue3pc : "white"};
    cursor: pointer;
`

const Content = styled.div`
    margin: 10px;
`

export const Category = props => {

    const toggleSelectStatus = () => {
        if(props.id === props.selectedCategory) {
            props.setSelectedCategory(-1)
        } else {
            props.setSelectedCategory(props.id)
        }       
    }

    return (
        <Wrapper onClick={toggleSelectStatus} isSelected={props.id === props.selectedCategory}>
            <Content>{props.title}</Content>        
        </Wrapper>
    )
}