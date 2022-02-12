import { useEffect, useRef } from 'react'

import three from '../three/index'

export default function Model() {
	const canvas = useRef<HTMLCanvasElement | null>(null)

	useEffect(() => {
		if (canvas.current) {
			three(canvas.current)
		}
	}, [])

	return <canvas ref={canvas} className='w-full h-5' />
}
