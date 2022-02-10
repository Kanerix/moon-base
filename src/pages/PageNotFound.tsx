import { Link } from 'react-router-dom'

export default function PageNotFound() {
	return (
		<div className='flex flex-col justify-center items-center h-full'>
			<div className='text-3xl font-medium m-2'>Siden ikke fundet</div>
			<Link
				to='/'
				className='text-2xl font-medium m-2 text-gray-700 underline'
			>
				Tilbage til forsiden?
			</Link>
		</div>
	)
}
