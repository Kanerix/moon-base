export default function Topnav() {
	return (
		<div className='px-10 py-4 bg-slate-800'>
			<div className='flex items-center'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='h-12 w-12 text-purple-700'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
				>
					<path d='M12 14l9-5-9-5-9 5 9 5z' />
					<path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' />
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
					/>
				</svg>
				<div className='ml-2 pr-4 text-3xl text-slate-100 font-medium hidden md:block'>
					Måne-base
				</div>
			</div>
		</div>
	)
}
