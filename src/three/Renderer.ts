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
		this.renderer.setClearColor(0x0f0f0f)
		this.renderer.setSize(window.innerWidth, window.innerHeight)
	}

	public resize() {
		this.renderer.setSize(window.innerWidth, window.innerHeight)
	}

	public render(scene: THREE.Scene, camera: THREE.Camera) {
		this.renderer.render(scene, camera)
	}
}
