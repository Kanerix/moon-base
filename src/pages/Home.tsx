import { useEffect } from 'react'

import * as THREE from 'three'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function Home() {
	useEffect(() => {
		// Grap canvas element
		const canvas = document.querySelector('canvas#webgl')

		// Create scene object
		const scene = new THREE.Scene()

		// Create FLTG file loader
		const loader = new GLTFLoader()
		// Load file from path
		loader.load('./models/cybertruck.glb', (gltf) => {
			const model = gltf.scene

			// Add loaded model to scene
			scene.add(model)
		})

		// Add lights
		const pointLight1 = new THREE.PointLight(0xffffff, 1)
		pointLight1.position.set(-10, 3, -10)
		scene.add(pointLight1)

		const pointLight2 = new THREE.PointLight(0xffffff, 1)
		pointLight2.position.set(-10, 3, 10)
		scene.add(pointLight2)

		const pointLight3 = new THREE.PointLight(0xffffff, 2)
		pointLight3.position.set(10, 3, 0)
		scene.add(pointLight3)

		// Define sizes for window
		const sizes = {
			width: window.innerWidth,
			height: window.innerHeight,
		}

		// Makes the window responsive
		window.addEventListener('resize', () => {
			// Set height and width to full
			sizes.width = window.innerWidth
			sizes.height = window.innerHeight

			// Sets camera aspect ratio to its proper size
			camera.aspect = sizes.width / sizes.height
			camera.updateProjectionMatrix()

			// Resizes the canvas element
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
		camera.position.set(5, 2, 8)
		scene.add(camera)

		// Three js renderer
		const renderer = new THREE.WebGLRenderer({
			canvas: canvas as Element,
			antialias: true,
		})
		renderer.setSize(sizes.width, sizes.height)
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

		// Add controls for the camera
		const controls = new OrbitControls(camera, renderer.domElement)

		// Function called each tick
		const tick = () => {
			renderer.render(scene, camera)

			controls.update()

			window.requestAnimationFrame(tick)
		}

		tick()
	}, [])

	return <canvas id='webgl' />
}
