import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'

// https://github.com/mrdoob/three.js/blob/master/examples/webgl_materials_car.html

// Grap canvas element
export default () => {
	const canvas = document.querySelector('canvas#webgl')

	// Create scene object
	const scene = new THREE.Scene()

	// Create draco loader
	const dracoLoader = new DRACOLoader()
	dracoLoader.setDecoderPath('js/libs/draco/gltf/')

	// Create GLTF file loader and  load file from given path
	const loader = new GLTFLoader()
	loader.setDRACOLoader(dracoLoader)
	loader.load('./models/cybertruck.glb', (gltf) => {
		const model = gltf.scene

		// Add loaded model to scene
		scene.add(model)
	})

	// Create and add plane
	const geometry = new THREE.PlaneGeometry(50, 50)
	const material = new THREE.MeshBasicMaterial({
		color: 0x878a9b,
	})
	const plane = new THREE.Mesh(geometry, material)
	plane.rotateX((Math.PI / 2) * -1)
	scene.add(plane)

	// Add lights
	const light = new THREE.DirectionalLight(0xffffff, 2)
	light.position.set(50, 50, 50)
	scene.add(light)

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
}
