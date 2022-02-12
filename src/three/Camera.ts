import * as THREE from 'three'

export default class Camera {
	camera: THREE.PerspectiveCamera

	constructor() {
		const aspectRatio = window.innerWidth / window.innerHeight
		this.camera = new THREE.PerspectiveCamera(75, aspectRatio, 1, 100)
		this.camera.position.set(0, 0, 3)
	}

	public resize() {
		const aspectRatio = window.innerWidth / window.innerHeight
		this.camera.aspect = aspectRatio
		this.camera.updateProjectionMatrix()
	}
}
