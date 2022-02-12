import * as THREE from 'three'

import Camera from './Camera'
import Controls from './Controls'
import Renderer from './Renderer'
import Car from './world/Car'
import Sun from './world/Sun'

export default (canvas: HTMLCanvasElement) => {
	const parent = canvas.parentElement

	let { width, height } = { width: 0, height: 0 }

	if (parent) {
		width = parent.getBoundingClientRect().width
		height = parent.getBoundingClientRect().height
	}

	canvas.width = width
	canvas.height = height

	const scene = new THREE.Scene()

	const camera = new Camera(width, height)

	const sun = new Sun()
	sun.init(scene)

	const car = new Car()
	car.init(scene)

	const renderer = new Renderer(canvas)
	renderer.init()
	renderer.resize(canvas.width, canvas.height)

	new Controls(camera.camera, renderer.renderer)

	window.addEventListener('resize', () => {
		const parent = canvas.parentElement

		let { width, height } = { width: 0, height: 0 }

		if (parent) {
			width = parent.getBoundingClientRect().width
			height = parent.getBoundingClientRect().height
		}

		camera.resize(width, height)
		renderer.resize(width, height)
	})

	const render = () => {
		requestAnimationFrame(render)
		renderer.render(scene, camera.camera)
	}

	render()
}
