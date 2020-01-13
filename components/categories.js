import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Category } from './category'
import { categoriesData } from './categories-data'
import { Display } from './display'
import { breakpoint, categoryWidth, gap } from './theme'

const Wrapper = styled.div`
    display: flex;    
    flex-direction: column;
    width: 100%;

    @media only screen and (min-width: ${breakpoint}) { 
        flex-firection: row;
        width: ${((categoryWidth * 2) + gap) + "px"};
    }
`

const CategoriesWrapper = styled.div`
    display: flex;    
    flex-direction: column;

    @media only screen and (min-width: ${breakpoint}) { 
        display: grid;
        grid-template-columns: 200px 200px;    
        grid-column-gap: ${gap + "px"};
        grid-row-gap: ${gap + "px"};
    }
`

const DisplayWrapper = styled.div`
    display: flex;
    order: ${props => props.selectedCategory};
    margin-bottom: ${gap + "px"};
    
    @media only screen and (min-width: ${breakpoint}) { 
        display: none;
    }
` 

export const Categories = (props) => 
    <Wrapper>
        <CategoriesWrapper>
            {
                categoriesData.map(category => 
                    <Category
                        key={category.id}  
                        id={category.id} 
                        title={category.title} 
                        isMobileDevice={props.isMobileDevice}
                        selectedCategory={props.selectedCategory}
                        setSelectedCategory={props.setSelectedCategory}
                    />)
            }
        <DisplayWrapper selectedCategory={props.selectedCategory}>
            {props.selectedCategory > -1 && <Display selectedCategory={props.selectedCategory}/>}
        </DisplayWrapper>        
        </CategoriesWrapper>
        
    </Wrapper>

Categories.propTypes = {
    selectedCategory: PropTypes.number.isRequired,
    setSelectedCategory: PropTypes.func.isRequired,
    isMobileDevice: PropTypes.bool.isRequired,
}