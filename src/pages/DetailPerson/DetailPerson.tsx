import { useParams } from 'react-router-dom'
import { User } from '../../types/users'
import { useQuery } from 'react-query'

const getUserById = async (id: string | undefined): Promise<User> => {
	if (typeof id === 'string') {
		const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
		return res.json()
	}
	throw new Error('Invalid id!') // react query function need to have error thrown
}

export const DetailPerson = () => {
	const { id } = useParams()

	const { isLoading, isError, error, data } = useQuery<User, Error>(
		['person', id],
		() => getUserById(id),
		{
			enabled: !!id, // enabled will stop a query from running, so will only call when id is avaiable (depended query)
		}
	)

	if (isLoading) return <p>Loading...</p>
	if (isError) return <p>{error?.message}</p>

	return (
		<ul>
			<li>{data?.id}</li>

			<li>{data?.name}</li>
			<li>{data?.phone}</li>
		</ul>
	)
}
