import React, { useState } from 'react'
import styled from '@emotion/styled'
import { AllCategoriesButton } from './all-categories-button'
import { CategoriesOverlay } from './categories-overlay'
import { checkIfMobileDevice } from './check-if-mobile-device'


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

	const isMobileDevice = checkIfMobileDevice()

	return (
		<Wrapper isExpanded={isExpanded}>
			<AllCategoriesButton 
				setExpanded={setExpanded}
			/>
			{isExpanded && <CategoriesOverlay
				setExpanded={setExpanded}
				isMobileDevice={isMobileDevice}
				/>
			}
		</Wrapper>
	)
}
