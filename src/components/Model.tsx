import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Car from './Car'

export default function Model() {
	return (
		<Canvas>
			<Suspense fallback={null}>
				<ambientLight intensity={0.2} />
				<pointLight position={[0, 10, 0]} intensity={0.1} />
				<Car scale={0.1} />
				<OrbitControls
					enablePan={false}
					enableZoom={false}
					enableRotate={true}
				/>
			</Suspense>
		</Canvas>
	)
}
