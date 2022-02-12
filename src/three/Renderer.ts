import * as THREE from 'three'

export default class Renderer {
	renderer: THREE.WebGLRenderer

	constructor(canvas: Element | undefined) {
		this.renderer = new THREE.WebGLRenderer({
			antialias: true,
			canvas: canvas,
		})
	}

	public init() {
		this.renderer.setClearColor(0xe2e8f0)
	}

	public resize(width: number, height: number) {
		this.renderer.setSize(width, height)
	}

	public render(scene: THREE.Scene, camera: THREE.Camera) {
		this.renderer.render(scene, camera)
	}
}
