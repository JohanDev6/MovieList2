import styled from 'styled-components'

export const Container = styled.section`
	width: 100%;
	height: 100vh;
	padding: 15px;

	background: linear-gradient(-95deg, #000003, #09071c, #030312);

	.content{
		width: 100%;
		height: 100%;
	  flex-direction: column;
	}
`

export const InputWrapper = styled.div`
	width: 100%;
	height: 62px;

	border-bottom: 3px solid ${props => props.theme.main};

	background: white;
  border-radius: 9px;
  margin-bottom: 20px;
	padding: 12px;

	svg{
		height: 22px;
		width: 22px;
		cursor: pointer;
	}

	input{
		width: 100%;
		height: 100%;
		padding-left: 10px;

		background: transparent;
	}
`

export const Separator = styled.div`
	width: 98%;
	height: 2px;

	background: ${props => props.theme.main};
`

export const Grid = styled.section`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-gap: 10px;
	overflow-x: auto;

	width: 100%;
	height: 100%;

	::-webkit-scrollbar{
		width: 7px;
	}

	::-webkit-scrollbar-thumb{
		background: ${props => props.theme.main};
		border-radius: 3px;
	}

	::-webkit-scrollbar-track{
		background: transparent;
	}

	@media screen and (max-width: 800px){
		grid-template-columns: repeat(4, 1fr);
	}

	@media screen and (max-width: 600px){
		grid-template-columns: repeat(3, 1fr);
	}

	@media screen and (max-width: 490px){
		grid-template-columns: repeat(2, 1fr);
	}

	@media screen and (max-width: 350px){
		grid-template-columns: repeat(1, 1fr);

		.info{
			align-items: center !important;
		}
	}
`
