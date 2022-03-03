import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Topnav from './components/Topnav'

import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'

export default function App() {
	return (
		<div className='flex flex-col bg-slate-100 min-h-screen'>
			<BrowserRouter>
				<Topnav />
				<div className='mt-20' />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='*' element={<PageNotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}
