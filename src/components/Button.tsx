import type { ReactNode } from 'react'
import { Link, To } from 'react-router-dom'

interface ButtonProps {
	children: ReactNode
	to: To
	className?: string
	selected?: boolean
}

export default function Button(props: ButtonProps) {
	return (
		<Link
			className={`px-3 py-2 rounded-lg font-medium text-base text-slate-200 hover:bg-slate-900 
			${props.selected ? 'bg-slate-900' : ''} ${props.className}`}
			to={props.to}
		>
			{props.children}
		</Link>
	)
}
