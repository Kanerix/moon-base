import * as THREE from 'three'

export default class Sun {
	ambientLight: THREE.AmbientLight
	directionalLight: THREE.DirectionalLight

	constructor() {
		this.ambientLight = new THREE.AmbientLight(0xffffff, 0.5)

		this.directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
		this.directionalLight.position.set(10, 20, 0)
	}

	public init(scene: THREE.Scene) {
		scene.add(this.ambientLight, this.directionalLight)
	}
}
