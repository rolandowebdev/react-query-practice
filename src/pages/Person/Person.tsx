import { UseQueryResult, useQuery } from 'react-query'
import { User } from '../../types/users'
import { Link } from 'react-router-dom'

const fetchUsers = async (): Promise<User[]> => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users')
	if (res.ok) return res.json()
	throw new Error('Network response not ok!')
}

export const Person = () => {
	const { isLoading, isError, error, data }: UseQueryResult<User[], Error> =
		useQuery<User[], Error, User[], string>('person', fetchUsers)

	if (isLoading) return <p>Loading...</p>
	if (isError) return <p>{error?.message}</p>

	return (
		<>
			<h1>Using React Query</h1>
			{data?.map((users: User) => (
				<ul key={users?.id}>
					<Link to={`/react-query/${users.id}`}>
						<li>{users?.id}</li>
					</Link>
					<li>{users?.name}</li>
					<li>{users?.phone}</li>
				</ul>
			))}
		</>
	)
}
