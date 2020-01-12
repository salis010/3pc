import React from 'react'
import styled from '@emotion/styled'
import { Category } from './category'
import { categoriesData } from './categories-data'
import { blue3pc, gap } from './theme'

const Wrapper = styled.div`
    display: inline-grid;
    grid-template-columns: 200px 200px;    
    grid-column-gap: ${gap};
    grid-row-gap: ${gap};
`

export const Categories = (props) => 
    <Wrapper>
        {
            categoriesData.map(category => 
                <Category
                    key={category.id}  
                    id={category.id} 
                    title={category.title} 
                    selectedCategory={props.selectedCategory}
                    setSelectedCategory={props.setSelectedCategory}
                />)}
    </Wrapper>
