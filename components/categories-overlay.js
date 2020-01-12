import React, { useState } from 'react'
import styled from '@emotion/styled'
import { Categories } from './categories'
import { Display } from './display'
import { breakpoint } from './theme'

const Overlay = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 1300px;
    min-height: 100vh;
    background-color: RGB(100, 100, 100, 0.7);

    @media only screen and (min-width: ${breakpoint}) { 
        height: 100vh;
        align-items: center;
    }
`

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 800px;
    margin-top: 80px;

    @media only screen and (min-width: ${breakpoint}) { 
        margin-top: 0px;
    }
`

const Img = styled.img`
    position: absolute;
    top: -32px;
    right: -32px;
    width: 32px;
    height: 32px;    
    cursor: pointer;
`

export const H2 = styled.h2`
    font-family: 'Roboto';
    font-size: 1.4em;
    font-weight: 700;    
    color: white;
`

const CategoriesAndDisplay = styled.div`
    display: flex;
    
`

const DisplayWrapper = styled.div`
    display: none;
    
    @media only screen and (min-width: ${breakpoint}) { 
        display: flex;
        width: 500px;
    }
` 

export const CategoriesOverlay = props => {
    
    const [selectedCategory, setSelectedCategory] = useState(-1)
    
    return (
        <Overlay>
            <Wrapper>
                <Img src="components/images/close.png" alt='X' onClick={() => props.setExpanded(false)}/>
                <H2>Alle Kategorien</H2>
                <CategoriesAndDisplay>
                    <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} isMobileDevice={props.isMobileDevice} />
                    <DisplayWrapper>
                        <Display selectedCategory={selectedCategory}/>
                    </DisplayWrapper>
                </CategoriesAndDisplay>
            </Wrapper>
        </Overlay>
    )
}