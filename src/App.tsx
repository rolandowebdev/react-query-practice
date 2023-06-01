import { Routes, Route } from 'react-router-dom'
import { Home, Superheroes } from './pages'
import { QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient()

export const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/superheroes' element={<Superheroes />} />
			</Routes>
		</QueryClientProvider>
	)
}
