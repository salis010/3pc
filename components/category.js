import React from 'react'
import styled from '@emotion/styled'
import { breakpoint, categoryWidth, categoryHeight,  gap, blue3pc } from './theme'

const Wrapper = styled.div`    
    order: ${props => props.id};
    width: 100%;
    height: ${(categoryHeight  / 2) + "px"};
    margin-bottom: ${gap + "px"};
    font-family: 'Roboto';
    font-size: 1.1em;
    font-weight: 700;
    color: ${props => props.isSelected ? "white" : blue3pc};
    background-color: ${props => props.isSelected ? blue3pc : "white"};
    cursor: pointer;

    @media only screen and (min-width: ${breakpoint}) { 
        width: ${categoryWidth + "px"};
        height: ${categoryHeight + "px"};
        margin-bottom: 0px;
    }
`

const Content = styled.p`
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
        <Wrapper
            onClick={props.isMobileDevice ? toggleSelectStatus : null} 
            onFocus={props.isMobileDevice ? null : toggleSelectStatus}
            onMouseOver={props.isMobileDevice ? null : () => props.setSelectedCategory(props.id)} 
            isSelected={props.id === props.selectedCategory} 
            id={props.id}
            tabIndex={0}
        >
            <Content
                onClick={props.isMobileDevice ? toggleSelectStatus : null} 
                onMouseOver={props.isMobileDevice ? null : () => props.setSelectedCategory(props.id)} 
            >{
                props.title}
            </Content>        
        </Wrapper>
    )
}