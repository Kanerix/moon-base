import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Model from './pages/Model'
import PageNotFound from './pages/PageNotFound'

export default function App() {
	return (
		<div className='flex flex-col bg-slate-200 h-full'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/model' element={<Model />} />
					<Route path='*' element={<PageNotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}
