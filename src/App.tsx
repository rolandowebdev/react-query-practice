import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Route, Routes } from 'react-router-dom'
import { DetailPerson, Home, Person, Superheroes } from './pages'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 5 * 1000,
		},
	},
})

export const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools initialIsOpen={false} />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/axios' element={<Superheroes />} />
				<Route path='/react-query' element={<Person />} />
				<Route path='/react-query/:id' element={<DetailPerson />} />
			</Routes>
		</QueryClientProvider>
	)
}
