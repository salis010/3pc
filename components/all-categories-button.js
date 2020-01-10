import React from 'react'
import styled from '@emotion/styled'
import { blue3pc } from './theme'

const Button = styled.button`
    width: 200px;
    height: 80px;
    font-family: 'Roboto';
    font-size: 1.3em;
    font-weight: 700;
    color: white;
    background-color: ${blue3pc};
    border: none;
    outline: none;
`

export const AllCategoriesButton = props => 
    <Button onClick={() => props.setExpanded(!props.isExpanded)} >Alle Kategorien</Button>