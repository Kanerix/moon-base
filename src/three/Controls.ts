import type * as THREE from 'three'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export default class Controls {
	controls: OrbitControls

	constructor(camera: THREE.Camera, renderer: THREE.Renderer) {
		this.controls = new OrbitControls(camera, renderer.domElement)
		this.controls.enablePan = false
	}
}
