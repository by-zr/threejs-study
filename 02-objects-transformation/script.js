import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// console.log(THREE)

// Scene - Like a container in which objects, models, particles, lights are store
// Instantiate the Scene class
const scene = new THREE.Scene()

// Objects - Can be things like primitive geometries, imported models, particles, light
// Red cube, need to create a Mesh, which is a combination of geometry (shape) and material (surface)
const geometry = new THREE.BoxGeometry(1, 1, 1) // (width, height, depth)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 }) // { wireframe: true }
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh) // add is a method

// Camera - Theoretical pov used when rendering, can have multiple but usually only use one
// PespectiveCamera (object close = big, object far = small), with two essential parameters 
// 1. field of view = how large the vision angle is, expressed in degress and corresponds to the vertical vision angle
// 2. aspect ratio = the width of the canvas divided by height

// Sizes 
const sizes = {
    width: 800,
    height: 600
}

// Camera (object)
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
// Transform objects using position, rotation and scale properties (x, y, z)
camera.position.x = 1
camera.position.y = 1
camera.position.z = 3
scene.add(camera) // adding the camera is optional but can result in bug

// Renderer - render the scene from the camera's pov, the result will be drawn into a canvas
// Create the canvas (in index.html), OR let the renderer generate it and then add it to the web page
// Instantiate the WebGLRenderer class and send an object with a canvas property
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
// Resize the renderer with setSize(...) method using sizes object
renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)


