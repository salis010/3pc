import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { categoriesData, defaultTitle } from './categories-data'
import { breakpoint, gap, blue3pc } from './theme'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 0px;
    color: white;
    font-family: 'Roboto';
    font-size: 1.1em;
    font-weight: 700;
    background-color: ${blue3pc};

    @media only screen and (min-width: ${breakpoint}) { 
        margin-left: ${gap + "px"};
    }
`
export const H2 = styled.h2`
    font-family: 'Roboto';
    font-size: 1.4em;
    font-weight: 700;
    margin: 30px 30px 0 30px;
    color: white;
`

const Body = styled.p`
    font-family: 'Roboto';
    font-size: 1em;
    font-weight: 400;
    line-height: 1.5em;
    margin: 15px 30px;
`

export const Display = props =>
    <Wrapper>
        <H2>{props.selectedCategory === -1 ? defaultTitle : categoriesData[props.selectedCategory].title}</H2>
        {(props.selectedCategory > -1) && <Body>{categoriesData[props.selectedCategory].body}</Body>}
    </Wrapper>

Display.propTypes = {
    selectedCategory: PropTypes.number.isRequired,
}