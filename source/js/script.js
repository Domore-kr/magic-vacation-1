// modules
import mobileHeight from "./modules/mobile-height-adjust.js";
import slider from "./modules/slider.js";
import menu from "./modules/menu.js";
import footer from "./modules/footer.js";
import chat from "./modules/chat.js";
import result from "./modules/result.js";
import form from "./modules/form.js";
import social from "./modules/social.js";
import FullPageScroll from "./modules/full-page-scroll";
import loading from "./modules/loading";
import scene from "./modules/3d-animation/3d-scene.js";

// init modules
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();
loading();
const mainScene = new scene();

document.body.addEventListener(`screenChanged`, (e) => {
  if (e.detail.screenName === `top`) {
    mainScene.init();
  }
});

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();
