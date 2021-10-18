import React, { ReactElement, useState, useEffect } from 'react'

import { Container } from './styles'
import ApiMovie from '../../api'

export default function MovieCard({movieId, style} : any) : ReactElement | null {

  const [movieData, setMovieData] = useState<any>()

  useEffect(() => {
    ApiMovie.get(`/movie/${movieId}`).then((res) => {
      setMovieData(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }, []);

	return (movieData? (
     <Container style={{...style}}>
      <div className='image'>
         {movieData.poster_path? (
           <img src={'https://image.tmdb.org/t/p/w500' + movieData.poster_path} alt={movieData.original_title + '_movie'}/>
         ) : (
           <img src='https://4.bp.blogspot.com/-OCutvC4wPps/XfNnRz5PvhI/AAAAAAAAEfo/qJ8P1sqLWesMdOSiEoUH85s3hs_vn97HACLcBGAsYHQ/s1600/no-image-found-360x260.png' alt='dont_load'/>
         ) }
         <span className='rate'>{movieData.vote_average}</span>
      </div>
      <div className='info display-flex'>
        <span>{movieData.original_title}</span>
        <p>{movieData.genres.map((gen : any) => `${gen.name} `).slice(0, 2)}</p>
      </div>
    </Container>) 
  : null)
};
