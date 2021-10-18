import React, { ReactElement, useEffect, useState, useRef } from 'react'
import { Transition, config } from 'react-spring'
import { BiSearchAlt } from "react-icons/bi";

import { Container, InputWrapper, Separator, Grid } from './styles'

import CardMovie from '../../components/CardMovie'
import ApiMovie from '../../api'

export default function HomePage() : ReactElement {

	const inputRef = useRef<HTMLInputElement | null>(null)
	const [movieList, setMovieList] = useState<any>()

	useEffect(() => {
		ApiMovie.get(`/search/movie?query=avengers`).then((res) => {
			setMovieList(res.data.results)
		}).catch((err) => {
			console.log(err)
		})
	}, [])

	const searchMovie = () => {
		setMovieList(null)
		let movieQuery = inputRef.current?.value;

		ApiMovie.get(`/search/movie?query=${movieQuery}`).then((res) => {
			setMovieList(res.data.results)
		}).catch((err) => {
			console.log(err)
		})
	}

	window.addEventListener("keydown", ({key} : any) => {
		if(key === 'Enter'){
			searchMovie()
		}
	})

	return (
		<Container>
			<div className='content display-flex'>
				<InputWrapper className='display-flex'>
					<input ref={inputRef} type='text' placeholder='Type name of movie...'/>
					<BiSearchAlt onClick={searchMovie}/>
				</InputWrapper>

				<Grid>
					{movieList? (movieList.map((movie : any, index: number) => (
						 <Transition
						  items={true}
						  from={{ opacity: 0, y: 190 }}
						  enter={{ opacity: 1, y: 0 }}
						  leave={{ opacity: 0, y: 190 }}
						  delay={1600}
						  config={config.molasses}
						>
							{(style => (
							    <CardMovie style={style} key={index} movieId={movie.id}/>
							))}
						</Transition>
					))) : null}
				</Grid>
			</div>
		</Container>
	)
}
