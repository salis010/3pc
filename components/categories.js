import React from 'react'
import styled from '@emotion/styled'
import { Category } from './category'
import { blue3pc, gap } from './theme'
import { categoryNames } from './category-names'

const Wrapper = styled.div`
    display: inline-grid;
    grid-template-columns: 200px 200px;    
    grid-column-gap: ${gap};
    grid-row-gap: ${gap};
`

export const Categories = props => 
    <Wrapper>
        {categoryNames.map((category, i) => <Category key={i} title={category.title} />)}
    </Wrapper>
