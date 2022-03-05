import { Suspense, useRef } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function Cybertruck() {
	const ref = useRef<THREE.Mesh | null>(null)
	const gltf = useLoader(GLTFLoader, '/models/cybertruck.gltf')

	useFrame(() => {
		if (ref.current) {
			ref.current.rotation.y += 0.0025
		}
	})

	return (
		<Suspense fallback={null}>
			<primitive
				ref={ref}
				scale={2}
				position={[0, -1, 0]}
				object={gltf.scene}
			/>
		</Suspense>
	)
}

export default function Model() {
	return (
		<Canvas>
			<Suspense fallback={null}>
				<ambientLight intensity={0.3} />
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
