import * as THREE from 'three'

import Camera from './Camera'
import Controls from './Controls'
import Renderer from './Renderer'
import Car from './world/Car'
import Sun from './world/Sun'

export default () => {
	const canvas = document.querySelector('canvas#webgl')

	const scene = new THREE.Scene()

	const camera = new Camera()

	const sun = new Sun()
	sun.init(scene)

	const car = new Car()
	car.init(scene)

	const renderer = new Renderer(canvas || undefined)
	renderer.init()

	new Controls(camera.camera, renderer.renderer)

	window.addEventListener('resize', () => {
		camera.resize()
		renderer.resize()
	})

	const render = () => {
		requestAnimationFrame(render)
		renderer.render(scene, camera.camera)
	}

	render()
}
