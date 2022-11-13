import * as THREE from '../three.module.js';
//import { OrbitControls } from '../OrbitControls.js';
import { PointerLockControls } from '../PointerLockControls.js';

var scene = new THREE.Scene();
var frontSpot = new THREE.SpotLight(0xeeeece);
frontSpot.position.set(1000,
  1000,
  1000);
scene.add(frontSpot);
var frontSpot2 = new THREE.SpotLight(0xddddce);
frontSpot2.position.set(-300,
  -300,
  -300);
scene.add(frontSpot2);
var camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight,
  0.1,
  1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


var geometryNew = new THREE.SphereGeometry(50,
  20,
  20,
  0,Math.PI*2,
  0,Math.PI);
var geometry = new THREE.BoxGeometry(10,
  10,
  10);
var geometry2 = new THREE.BoxGeometry( 10,
  10,
  10);
var material = new THREE.MeshPhongMaterial( {
color: 0xdaa520,
specular: 0xbcbcbc,
  } );
var mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

var mesh2 = new THREE.Mesh(geometry2, material);
scene.add(mesh2);
var mesh3 = new THREE.Mesh(geometry2, material);
scene.add(mesh3);
var mesh4 = new THREE.Mesh(geometry2, material);
scene.add(mesh4);

var mesh5 = new THREE.Mesh(geometry2, material);
scene.add(mesh5);
var mesh6 = new THREE.Mesh(geometry2, material);
scene.add(mesh6);
var mesh7 = new THREE.Mesh(geometry2, material);
scene.add(mesh7);
var mesh8 = new THREE.Mesh(geometry2, material);
scene.add(mesh8);

var sphereMy = new THREE.Mesh(geometryNew, Mat());
scene.add(sphereMy);

function Mat(){
  var materialNew = new THREE.MeshPhongMaterial({
    color      : new THREE.Color("rgb(35,35,213)"), //Diffuse color of the material
    emissive   : new THREE.Color("rgb(64,128,255)"), //Emissive(light) color of the material, essentially a solid color unaffected by other lighting. Default is black.
    specular   : new THREE.Color("rgb(93,195,255)"), /*Specular color of the material, i.e., how shiny the material is and the color of its shine. 
                                                       Setting this the same color as the diffuse value (times some intensity) makes the material more metallic-looking; 
                                                       setting this to some gray makes the material look more plastic. Default is dark gray.*/
    shininess  : 1, //How shiny the specular highlight is; a higher value gives a sharper highlight. Default is 30.
    shading    : THREE.FlatShading, //How the triangles of a curved surface are rendered: THREE.SmoothShading, THREE.FlatShading, THREE.NoShading
    wireframe  : 1, //THREE.Math.randInt(0,1)
    transparent: 1,
    opacity    : 0.15 //THREE.Math.randFloat(0,1) 
    });
  return materialNew;
  }

let body = document.getElementById('body');

mesh2.position.x = 10;
mesh.position.x = -10;
mesh3.position.x = 10;
mesh4.position.x = -10;

mesh2.position.y = -10;
mesh.position.y = -10;
mesh3.position.y = 10;
mesh4.position.y = 10;

mesh5.position.x = 10;
mesh6.position.x = -10;
mesh7.position.x = 10;
mesh8.position.x = -10;

mesh5.position.y = -10;
mesh6.position.y = -10;
mesh7.position.y = 10;
mesh8.position.y = 10;


mesh5.position.z = 20;
mesh6.position.z = 20;
mesh7.position.z = 20;
mesh8.position.z = 20;

//var controls = new OrbitControls(camera, renderer.domElement);
var controls2 = new PointerLockControls(camera, renderer.domElement);

//camera.position.set( 0, 20, 100 );
//controls.update();

let iz = 25;

camera.position.z = iz;

let a = 0;
let mouseX = 0;
let mouseY = 0;

let targetX = 0;
let targetY = 0;

const windowX = window.innerWidth / 2;
const windowY = window.innerHeight / 2;

function render() {
    requestAnimationFrame(render);
    //controls.update();
  //mesh.rotation.y += a;
    //mesh.rotation.z += a;
  renderer.render( scene, camera );
 //camera.lookAt(mesh.position);
    //targetX = mouseX * .001;
    // targetY = mouseY * .001;
    //mesh.rotation.y += .4 * (targetX - mesh.rotation.y)
    //mesh.rotation.x += .09 * (targetY - mesh.rotation.x)
    //mesh.rotation.z += -.09 * (targetY - mesh.rotation.x)
  }
render();

function onDocumentMouseMove(event){
  mouseX = (event.clientX - windowX);
  mouseY = (event.clientY - windowY);
  }
function onDocumentMouseLeave(event){
  mouseX = null;
  mouseY = null;
  }
  //document.addEventListener('mousemove', onDocumentMouseMove);
  //document.addEventListener('mouseleave', onDocumentMouseLeave);

document.onkeydown = function (event) {
    if (event.key == 'w') {
      controls2.moveForward(.25);
      ball.position.z += -0.25;
    }
    if (event.key == 's') {
      controls2.moveForward(-.25);
      ball.position.z += 0.25;
    }
    if (event.key == 'd') {
      controls2.moveRight(.25);
      ball.position.x += 0.25;
    }
    if (event.key == 'a') {
      controls2.moveRight(-.25);
      ball.position.x += -0.25;
    }
    if (event.key == 'F11') {
        if (body.classList.contains('el1')) {
            controls2.unlock();
            body.classList.remove('el1');
            //but.style.opacity = '0';
        } else {
            //but.style.opacity = '0';
            body.classList.add('el1');
            controls2.lock();
        }
    }
  if (event.key == ' ') {
    if (body.classList.contains('jump')) {
      return false;
     } else {
      body.classList.add('jump');
    jump();
    }
    }
}

document.onkeyup = function (event) {
  if (event.key == ' ') {
    if (body.classList.contains('dw')) {
      return false;
     } else {
      body.classList.remove('jump');
    clearInterval(id1);
    dw();
    }
  }
}

let id1;
let id2;

camera.position.y = -10;

function jump() {
  id1 = setInterval(function () {
    camera.position.y += 0.2;
    if (camera.position.y >= 0) {
      clearInterval(id1);
      dw();
    }
  },1)
}

function dw() {
  id2 = setInterval(function () {
    camera.position.y += -0.25;
    body.classList.add('dw');
    if (camera.position.y <= -10) {
      clearInterval(id2);
      body.classList.remove('dw');
    }
  },1)
}

window.addEventListener('resize', function () {
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width, height);
})



var geometryBall = new THREE.SphereGeometry( 4, 100, 100, 4);
var materialBall = new THREE.MeshPhongMaterial({
  color: 0xff0000,
  specular:0x000000,
}
)
var ball = new THREE.Mesh(geometryBall, materialBall);
scene.add(ball);

ball.position.y = -10;

let id11;
let id12;

function mover1() {
  id11 = setInterval(function () {
    ball.position.y += 0.3;
    if (ball.position.y >= 0) {
      clearInterval(id11);
      mover2();
    }
  },1)
}


function mover2() {
  id12 = setInterval(function () {
    ball.position.y += -0.3;
    if (ball.position.y <= -10) {
      clearInterval(id12);
    }
  },1)
}

let pri = document.getElementById('pri');
scene.add('pri');