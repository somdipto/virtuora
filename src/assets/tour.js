const panorama = new PANOLENS.ImagePanorama( './pano1.jpg' );

const panorama2 = new PANOLENS.ImagePanorama('./pano5.jpg');

const fullLink = "https://en.m.wikipedia.org/wiki/Arecaceae";
const url = new URL(fullLink);

let imageContainer = document.querySelector('.image-container')


var infospotPositions = [
    new THREE.Vector3(-2136.06, 16.30, 890.14),
    new THREE.Vector3(-3136.06, 296.30, -4290.14),
    
  ];


var infospotPositions2 = [
  new THREE.Vector3(-2236.06, 16.30, 890.14),
  new THREE.Vector3(-336.06, 206.30, -4290.14),
    
];






const viewer = new PANOLENS.Viewer({
    container: imageContainer,
    autoRotate: true,
    autoRotateSpeed: 0.3,
    controlBar: true,
});

panorama.link( panorama2, infospotPositions[0]);
panorama2.link( panorama, infospotPositions[1]);
panorama2.link( panorama, infospotPositions2[0]);
panorama2.link( url, infospotPositions2[1]);

viewer.add( panorama,panorama2 );

