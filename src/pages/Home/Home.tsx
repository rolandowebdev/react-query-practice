import { Link } from 'react-router-dom'

export const Home = () => {
	return (
		<div style={{ display: 'flex', gap: '1rem' }}>
			<Link to='/axios'>Fetch Axios</Link>
			<Link to='/react-query'>Fetch React Query</Link>
		</div>
	)
}
