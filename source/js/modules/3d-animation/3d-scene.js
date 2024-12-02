import * as THREE from "three";

export class Scene3d {
  constructor(config = {}) {
    this.meshObjects = new Set();
    this.transformationsLoop = [];
    this.canvasElement = document.getElementById(config.elementId);

    this.initScene();
    this.initCamera();
    this.initRenderer();
    this.initCamera(config.cameraConfig);
    this.initLight();
    this.initTextureLoader();

    window.addEventListener(`resize`, this.onWindowResize.bind(this));
    this.animate = this.animate.bind(this);
    this.render();
    if (config.enableAnimation) {
      this.animate();
    }
  }

  initScene() {
    this.scene = new THREE.Scene();
  }

  initCamera(cameraConfig = {}) {
    this.camera = new THREE.PerspectiveCamera(
      cameraConfig.fov || 75,
      cameraConfig.aspect || window.innerWidth / window.innerHeight,
      cameraConfig.near || 0.1,
      cameraConfig.far || 1000
    );

    this.camera.position.z = cameraConfig.positionZ || 5;
  }

  initRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvasElement,
      alpha: true,
    });

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(0x5f458c, 0);
    this.renderer.setPixelRatio(window.devicePixelRatio);
  }

  initTextureLoader() {
    this.textureLoader = new THREE.TextureLoader();
  }

  initLight() {
    this.light = new THREE.Group();
    const light1 = new THREE.DirectionalLight(
      new THREE.Color(`rgb(255,255,255)`),
      0.84
    );
    const targetObject = new THREE.Object3D().translateY(
      this.camera.position.z * Math.tan((15 * Math.PI) / 180)
    );
    this.scene.add(targetObject);
    light1.target = targetObject;
    const light2 = new THREE.PointLight(
      new THREE.Color(`rgb(246,242,255)`),
      0.6,
      975,
      2
    );
    light2.position.set(-785, -350, -710);
    const light3 = new THREE.PointLight(
      new THREE.Color(`rgb(245,254,255)`),
      0.95,
      975,
      2
    );
    light3.position.set(730, 800, -985);
    this.light.add(light1, light2, light3);
    this.light.position.z = this.camera.position.z;
    this.scene.add(this.light);
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  animate(timestamp) {
    requestAnimationFrame(this.animate);

    this.transformationsLoop.forEach((callback) => {
      callback(timestamp);
    });

    this.render();
  }

  clearScene() {
    this.clearTransformationsLoop();

    this.meshObjects.forEach((mesh) => {
      this.scene.remove(mesh);

      this.meshObjects.delete(mesh);
    });
  }

  addTransformationsToLoop(transformations) {
    this.transformationsLoop.push(...transformations);
  }

  clearTransformationsLoop() {
    this.transformationsLoop = [];
  }

  addSceneObject(meshObject) {
    this.meshObjects.add(meshObject);
    this.scene.add(meshObject);
  }

  setSceneObjects(...meshObjects) {
    this.clearScene();

    this.meshObjects.add(...meshObjects);
    this.scene.add(...meshObjects);
    this.render();
  }
}
