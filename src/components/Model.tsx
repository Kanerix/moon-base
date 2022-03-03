import { Suspense } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function Cybertruck() {
	const gltf = useLoader(GLTFLoader, '/models/cybertruck.gltf')

	return (
		<Suspense fallback={null}>
			<primitive scale={2} object={gltf.scene} />
		</Suspense>
	)
}

export default function Model() {
	return (
		<Canvas>
			<Suspense fallback={null}>
				<ambientLight intensity={0.2} />
				<pointLight position={[0, 10, 0]} intensity={0.1} />
				<Cybertruck />
				<OrbitControls
					enablePan={false}
					enableZoom={false}
					enableRotate={true}
				/>
			</Suspense>
		</Canvas>
	)
}
