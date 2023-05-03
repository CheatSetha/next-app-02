import { API_KEY, BACKDROP_BASE_PATH, BASE_URL, YT_BASE_PATH } from "@/lib"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"

const movieDetail = () => {
	const router = useRouter()
	const { id } = router.query
	const [movies, setMovies] = useState([])
	const [video, setVideo] = useState([])
	useEffect(() => {
		fetch(BASE_URL + `/movie/${id}?api_key=${API_KEY}`)
			.then((res) => res.json())
			.then((data) => setMovies(data))

		fetch(BASE_URL + `/movie/${id}/videos?api_key=${API_KEY}`)
			.then((res) => res.json())
			.then((data) => setVideo(data.results[0].key))
	}, [])

	console.log(video)

	return (
		<div className='w-10/12 mx-auto flex gap-10 bg-base-200'>
			<img
				src={BACKDROP_BASE_PATH + movies.backdrop_path}
				alt=''
			/>
			<div >
				<h1 className='text-3xl font-bold mb-5'>{movies.title}</h1>
				<p className='text-base mb-5'>{movies.overview}</p>
				{/* modal part */}
				{/* The button to open modal */}
				<label
					htmlFor='my-modal-3'
					className='btn text-white bg-blue-500'
				>
					Watch now!
				</label>

				{/* Put this part before </body> tag */}
				<input
					type='checkbox'
					id='my-modal-3'
					className='modal-toggle'
				/>
				<div className='modal w-10/12 h-[90vh] mx-auto'>
					<div className='w-full '>
						<label
							htmlFor='my-modal-3'
							className='btn btn-sm btn-circle absolute right-2 top-2'
						>
							✕
						</label>
						<iframe 
                        className="w-full h-[100vh]"
                        
							src={YT_BASE_PATH + video}
							frameborder='0'
                            
						></iframe>
					</div>
				</div>
			</div>
		</div>
	)
}

export default movieDetail
