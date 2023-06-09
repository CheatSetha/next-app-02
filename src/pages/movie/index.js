import MovieCard from "@/components/MovieCard"
import { API_KEY } from "@/lib"

import React from "react"

const index = ({ data }) => {
	const movies = data?.results || []
	console.log(movies)

	return (
		<div className='w-10/12 mx-auto '>
			<div className='flex flex-wrap gap-4 mb-5'>
				{movies.map((movie) => (
					<MovieCard
						key={movie.id}
						id={movie.id}
						title={movie.title}
						thumbnail={movie.backdrop_path}
						popularity={movie.popularity}
					/>
				))}
			</div>
		</div>
	)
}
// getserver side props
export async function getServerSideProps(context) {
	const res = await fetch(
		`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=1%60`
	)
	const data = await res.json()
	return {
		props: { data }, // will be passed to the page component as props
	}
}

export default index
