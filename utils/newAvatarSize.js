const Jimp = require("jimp");

const newAvatarSize = async (tempUplLoad) => {
  const image = await Jimp.read(tempUplLoad);
  image
    .resize(250, 250, Jimp.RESIZE_BEZIER)
    .contain(250, 250, Jimp.HORIZONTAL_ALIGN_RIGHT | Jimp.VERTICAL_ALIGN_BOTTOM)
    .circle();
  await image.writeAsync(tempUplLoad);
};

module.exports = newAvatarSize;
