import { useEffect } from 'react'

import * as THREE from 'three'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'

export default function Home() {
	useEffect(() => {
		const canvas = document.querySelector('canvas#webgl')

		const scene = new THREE.Scene()

		const material = new THREE.MeshBasicMaterial()
		material.color = new THREE.Color(0xff0000)

		const dracoLoader = new DRACOLoader()
		dracoLoader.setDecoderPath('js/libs/draco/gltf/')

		const loader = new GLTFLoader()
		loader.load('./cybertruck.glb', (gltf) => {
			const model = gltf.scene

			model.position.set(1, 1, 0)

			scene.add(model)
		})

		const pointLight1 = new THREE.PointLight(0xffffff, 2)
		pointLight1.position.set(-2, 10, -10)
		scene.add(pointLight1)

		const pointLight2 = new THREE.PointLight(0xffffff, 2)
		pointLight2.position.set(-2, 10, 10)
		scene.add(pointLight2)

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
		camera.position.set(5, 2, 8)
		scene.add(camera)

		// Three js renderer
		const renderer = new THREE.WebGLRenderer({
			canvas: canvas as Element,
			antialias: true,
		})
		renderer.setSize(sizes.width, sizes.height)
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

		const controls = new OrbitControls(camera, renderer.domElement)

		const tick = () => {
			renderer.render(scene, camera)

			controls.update()

			window.requestAnimationFrame(tick)
		}

		tick()
	}, [])

	return <canvas id='webgl' />
}
