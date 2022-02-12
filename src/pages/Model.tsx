import { useEffect } from 'react'
import three from '../three/index'

export default function Model() {
	useEffect(three, [])

	return <canvas id='webgl' />
}
