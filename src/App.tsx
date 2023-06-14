import { QueryClient, QueryClientProvider } from 'react-query'
import { Route, Routes } from 'react-router-dom'
import { Home, Person, Superheroes } from './pages'

const queryClient = new QueryClient()

export const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/axios' element={<Superheroes />} />
				<Route path='/react-query' element={<Person />} />
			</Routes>
		</QueryClientProvider>
	)
}
