let renderer, camera, scene, geometry, material, mesh, aLight, pLight, vertices;

// RENDERER
renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("myCanvas"),
  antialias: true
});
renderer.setClearColor(0x000000);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

// CAMERA
camera = new THREE.PerspectiveCamera(
  35,
  window.innerWidth / window.innerHeight,
  300,
  10000
);

// SCENE
scene = new THREE.Scene();

// LIGHTS
aLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(aLight);
pLight = new THREE.PointLight(0xffffff, 0.5);
scene.add(pLight);

// MATERIAL
material = new THREE.PointsMaterial({
});

// GEOMETRY
geometry = new THREE.BoxGeometry(100, 100, 100);
mesh = new THREE.Points(geometry, material);
mesh.position.z = -1000;
mesh.position.x = -100;
scene.add(mesh);

var geometry2 = new THREE.SphereGeometry(50, 20, 20);
var mesh2 = new THREE.Points(geometry2, material);
mesh2.position.z = -1000;
mesh2.position.x = 100;
scene.add(mesh2);

var geometry3 = new THREE.PlaneGeometry(10000, 10000, 100, 100);
var mesh3 = new THREE.Points(geometry3, material);
mesh3.rotation.x = (-90 * Math.PI) / 180;
mesh3.position.y = -100;
scene.add(mesh3);

// RENDER LOOP
function render() {
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;

  renderer.render(scene, camera);
  requestAnimationFrame(render);
}

render();
