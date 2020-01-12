import React, { useState } from 'react'
import styled from '@emotion/styled'
import { grey3pc } from './theme'
import { AllCategoriesButton } from './all-categories-button'
import { CategoriesOverlay } from './categories-overlay'


const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	width: 100%;
	height: 100vh;
`

export const App = () => {
	
	const [isExpanded, setExpanded] = useState(false)

	return (
		<Wrapper isExpanded={isExpanded}>
			<AllCategoriesButton setExpanded={setExpanded} />
			{isExpanded && <CategoriesOverlay setExpanded={setExpanded} />}
		</Wrapper>
	)
}
