import * as THREE from 'three'

export default class Camera {
	camera: THREE.PerspectiveCamera

	constructor(width: number, height: number) {
		const aspectRatio = width / height
		this.camera = new THREE.PerspectiveCamera(75, aspectRatio, 1, 100)
		this.camera.position.set(0, 0, 2.8)
	}

	public resize(width: number, height: number) {
		const aspectRatio = width / height
		this.camera.aspect = aspectRatio
		this.camera.updateProjectionMatrix()
	}
}
