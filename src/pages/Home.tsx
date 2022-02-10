import { useEffect } from 'react'
import * as THREE from 'three'

export default function Home() {
	useEffect(() => {
		const scene = new THREE.Scene()
		const camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		)
		const renderer = new THREE.WebGLRenderer()

		document.getElementById('scene')?.appendChild(renderer.domElement)

		renderer.setSize(window.innerWidth, window.innerHeight)

		const geometry = new THREE.BoxGeometry(1, 1, 1)
		const cube = new THREE.Mesh(geometry)

		scene.add(cube)
		camera.position.z = 5

		const animate = function () {
			requestAnimationFrame(animate)
			cube.rotation.x += 0.01
			cube.rotation.y += 0.01
			renderer.render(scene, camera)
		}

		animate()

		return () => {
			document.getElementById('scene')?.removeChild(renderer.domElement)
		}
	}, [])

	return <div id='scene' />
}
