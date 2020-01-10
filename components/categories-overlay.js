import React, { useState } from 'react'
import styled from '@emotion/styled'
import { gap } from './theme'
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

const CategoriesAndDisplay = styled.div`
    display: flex;
`

export const CategoriesOverlay = props =>
    <Overlay>
        <CategoriesAndDisplay>
            <Categories />
            <Display />
        </CategoriesAndDisplay>
    </Overlay>