import { Link, useLocation } from 'react-router-dom'
import Button from './Button'

export default function Topnav() {
	const location = useLocation()

	return (
		<nav className='px-8 bg-slate-800 flex space-x-4 items-center border-b-2'>
			<Link
				to='/'
				className='text-2xl text-slate-50 font-semibold whitespace-nowrap'
			>
				moon-base
			</Link>
			<div className='flex flex-grow justify-start self-stretch'>
				<Link
					className='px-4 flex items-center text-slate-50 font-medium h-full border-b-4 border-purple-500'
					to='contact'
				>
					Contact
				</Link>
				<Link
					className='px-4 flex items-center text-slate-50 font-medium h-full'
					to='contact'
				>
					Buy
				</Link>
			</div>
			<Button
				className='my-2'
				selected={location.pathname.includes('/signup')}
				to='/signup'
			>
				Signup
			</Button>
			<Button
				className='my-2'
				selected={location.pathname.includes('/login')}
				to='/login'
			>
				Login
			</Button>
		</nav>
	)
}
