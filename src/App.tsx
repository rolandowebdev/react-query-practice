import { QueryClient, QueryClientProvider } from 'react-query'
import { Route, Routes } from 'react-router-dom'
import { Home, Superheroes } from './pages'

const queryClient = new QueryClient()

export const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/fetch' element={<Superheroes />} />
			</Routes>
		</QueryClientProvider>
	)
}
