import React, { useState } from 'react'
import styled from '@emotion/styled'
import { Categories } from './categories'
import { Display } from './display'

const Overlay = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100vh;
    background-color: RGB(100, 100, 100, 0.7);
`

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
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

export const CategoriesOverlay = props => {
    
    const [selectedCategory, setSelectedCategory] = useState(-1)
    
    return (
        <Overlay>
            <Wrapper>
                <Img src="components/images/close.png" alt='X' onClick={() => props.setExpanded(false)}/>
                <H2>Alle Kategorien</H2>
                <CategoriesAndDisplay>
                    <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
                    <Display selectedCategory={selectedCategory}/>
                </CategoriesAndDisplay>
            </Wrapper>
        </Overlay>
    )
}