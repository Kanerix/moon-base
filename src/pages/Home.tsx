import { useEffect } from 'react'
import three from '../three/index'

export default function Home() {
	useEffect(three, [])

	return <canvas id='webgl' />
}
