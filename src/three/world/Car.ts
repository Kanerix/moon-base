import type * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default class Car {
	loader: GLTFLoader

	constructor() {
		this.loader = new GLTFLoader()
	}

	public init(scene: THREE.Scene) {
		this.loader.load('models/cybertruck.glb', (gltf) => {
			const model = gltf.scene
			model.position.set(0, -0.5, 0)
			scene.add(model)
		})
	}
}
