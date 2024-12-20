const color3D = {
  Blue: `rgb(51, 113, 235)`,
  BrightBlue: `rgb(47, 58, 201)`,
  LightBlue: `rgb(150, 176, 243)`,
  DarkBlue: `rgb(12, 49, 112)`,
  SkyLightBlue: `rgb(161, 200, 240)`,
  MountainBlue: `rgb(101, 152, 219)`,
  DominantRed: `rgb(255, 32, 66)`,
  LightDominantRed: `rgb(255, 105, 120)`,
  ShadowedDominantRed: `rgb(124, 26, 48)`,
  Purple: `rgb(163, 118, 235)`,
  BrightPurple: `rgb(118, 76, 225)`,
  LightPurple: `rgb(194, 153, 225)`,
  AdditionalPurple: `rgb(119, 85, 189)`,
  DarkPurple: `rgb(76, 49, 121)`,
  ShadowedPurple: `rgb(75, 50, 116)`,
  ShadowedBrightPurple: `rgb(56, 37, 108)`,
  ShadowedLightPurple: `rgb(77, 53, 106)`,
  ShadowedAdditionalPurple: `rgb(55, 38, 89)`,
  ShadowedDarkPurple: `rgb(49, 42, 71)`,
  Grey: `rgb(118, 125, 143)`,
  MetalGrey: `rgb(126, 141, 164)`,
  Orange: `rgb(230, 80, 0)`,
  Green: `rgb(0, 210, 134)`,
  White: `rgb(255, 255, 255)`,
  SnowColor: `rgb(182, 206, 240)`,
};
const reflection3D = {
  soft: {
    roughness: 0.8,
    metalness: 0.1,
  },
  basic: {
    roughness: 0.7,
    metalness: 0.2,
  },
  strong: {
    roughness: 0.7,
    metalness: 0.5,
  },
};
export { color3D, reflection3D };
