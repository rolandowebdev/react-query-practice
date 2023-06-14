import { useState, useEffect } from 'react'
import { Superheroes as SuperheroesType } from '../../types/superheroes'
import axios from 'axios'

interface CustomError extends Error {
	statusCode: number
}

export const Superheroes = () => {
	const [datas, setDatas] = useState<SuperheroesType[] | null>(null)
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [error, setError] = useState<CustomError | null>(null)

	const getSuperheroes = async () => {
		try {
			setIsLoading(true)
			const response = await axios.get<SuperheroesType[]>(
				'http://localhost:3000/superheroes'
			)
			setDatas(response.data)
			setIsLoading(false)
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			const customError: CustomError = {
				name: 'CustomError',
				message: error.message,
				statusCode: error.response?.status || 500,
			}
			setError(customError)
		}
	}

	useEffect(() => {
		getSuperheroes()
	}, [])

	if (error) {
		return (
			<div>
				<h2>Error:</h2>
				<p>Message: {error.message}</p>
				<p>Status Code: {error.statusCode}</p>
			</div>
		)
	}

	if (isLoading) return <h1>Loading...</h1>

	return (
		<div>
			<h1>Using Axios</h1>
			{datas?.map((data) => (
				<ul key={data.id}>
					<p>{data.hero}</p>
					<p>{data.actor}</p>
				</ul>
			))}
		</div>
	)
}
