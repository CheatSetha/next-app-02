import { IMAGE_BASE_PATH } from "@/lib"
import { useRouter } from "next/router";
import React from "react"
import {AiFillStar}from "react-icons/ai"

const MovieCard = ({id,title, thumbnail, popularity, average}) => {
    const router = useRouter();
    const viewDetailHadler = (id) => {
        router.push(`/movie/${id}`)
    }
	return (
		<div className='card card-compact w-96 bg-base-300 shadow-xl ' onClick={()=> viewDetailHadler(id)}>
			<figure>
				<img
					src={thumbnail ? IMAGE_BASE_PATH+thumbnail : 'https://cdn.shopify.com/s/files/1/0291/6925/4434/products/Arab2_1600x.png?v=1654103876'}
					alt='Shoes'
				/>
			</figure>
			<div className='card-body'>
				<h2 className='card-title'>{title?title:"no title"}</h2>
				<small className="opacity-60">Popularity {popularity}</small>
				<small className="opacity-60">Vote average  {average} <AiFillStar className="inline text-yellow-600 " /> </small>
			
				
			</div>
		</div>
	)
}

export default MovieCard
