import { useEffect } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function Home() {
	useEffect(() => {
		const canvas = document.querySelector('canvas#webgl')

		const scene = new THREE.Scene()

		const material = new THREE.MeshBasicMaterial()
		material.color = new THREE.Color(0xff0000)

		const loader = new GLTFLoader()

		loader.load('./cybertruck.glb', (gltf) => {
			scene.add(gltf.scene)
		})

		const pointLight = new THREE.PointLight(0xffffff, 3)
		pointLight.position.set(3, 3, 3)
		scene.add(pointLight)

		const sizes = {
			width: window.innerWidth,
			height: window.innerHeight,
		}

		window.addEventListener('resize', () => {
			sizes.width = window.innerWidth
			sizes.height = window.innerHeight

			camera.aspect = sizes.width / sizes.height
			camera.updateProjectionMatrix()

			renderer.setSize(sizes.width, sizes.height)
			renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
		})

		// Three js camera
		const camera = new THREE.PerspectiveCamera(
			75,
			sizes.width / sizes.height,
			0.1,
			100
		)
		camera.position.set(2.5, 1.5, 1)
		camera.rotation.set(-1, 45, 1)
		scene.add(camera)

		// Three js renderer
		const renderer = new THREE.WebGLRenderer({
			canvas: canvas as Element,
			antialias: true,
		})
		renderer.setSize(sizes.width, sizes.height)
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

		const tick = () => {
			renderer.render(scene, camera)

			window.requestAnimationFrame(tick)
		}

		tick()
	}, [])

	return <canvas id='webgl' />
}
