import styled from 'styled-components'
import { animated } from 'react-spring'

export const Container = styled(animated.div)`
	width: 100%;
	display: flex;
	flex-direction: column;
	border-radius: 8px;
	background: transparent;

	.image{
		width: 100%;
		min-height: 253px;
		max-height: 253px;
		position: relative;

		img{
			width: 100%;
			border-radius: 4px;
			height: 100%;
			object-fit: cover;
		}

		.rate{
			background: goldenrod;
			position: absolute;
			bottom: 4px;
			right: 8px;

			padding: 0 3px;
			border-radius: 3px;
		}
	}

	.info{
		width: 100%;
		margin-top: 5px;
		flex-direction: column;

	  align-items: flex-start !important;

		span{
			font-size: 0.9rem;
			text-align: start;
			color: white;
			text-transform: capitalize;
			line-height: 1.4rem;
			font-weight: 600;
		}

		p{
			font-size: 0.6rem;
			line-height: 0.6rem;
			text-align: start;
			font-weight: 300;
			opacity: 0.8;
			color: white;

			margin-top: 4px;
		}
	}

`
