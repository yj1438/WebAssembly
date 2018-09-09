export default {
  /**
   * 连环画
   * R = |g – b + g + r| * r / 256
    G = |b – g + b + r| * r / 256;
    B = |b – g + b + r | * g / 256;
   * @param {*} pixel
   */
  comic(pixelData) {
    const len = pixelData.length;
    for (let i = 0; i < len; i = i + 4) {
      const _pixel = pixelData.slice(i, i + 4);
      const [r, g, b, a] = _pixel;
      const R = (Math.abs(g - b + g + r) * r) / 256;
      const G = (Math.abs(b - g + b + r) * r) / 256;
      const B = (Math.abs(b - g + b + r) * g) / 256;
      pixelData[i] = R;
      pixelData[i + 1] = G;
      pixelData[i + 2] = B;
      pixelData[i + 3] = a;
    }
    return pixelData;
  },

  grayScale(pixelData) {
    const len = pixelData.length;
    for (let i = 0; i < len; i = i + 4) {
      const _pixel = pixelData.slice(i, i + 4);
      const [r, g, b, a] = _pixel;
      pixelData[i] = r;
      pixelData[i + 1] = r;
      pixelData[i + 2] = r;
      pixelData[i + 3] = a;
    }
  },

  reverse(pixelData) {
    const len = pixelData.length;
    for (let i = 0; i < len; i = i + 4) {
      const _pixel = pixelData.slice(i, i + 4);
      const [r, g, b, a] = _pixel;
      pixelData[i] = 255 - r;
      pixelData[i + 1] = 255 - g;
      pixelData[i + 2] = 255 - b;
      pixelData[i + 3] = a;
    }
    return pixelData;
  },
  blur(pixelData, tmpPixelData,  width, height) {
    const blurR = 3; // 模糊半径
    const totalnum = (2 * blurR + 1) * (2 * blurR + 1); // 一个模糊单位区域
    for (let i = blurR; i < height - blurR; i++) {
      for (let j = blurR; j < width - blurR; j++) {
        const totalr = 0,
          totalg = 0,
          totalb = 0;
        for (let dx = -blurR; dx <= blurR; dx++)
          for (let dy = -blurR; dy <= blurR; dy++) {
            const x = i + dx;
            const y = j + dy;

            const pOfBlurArea = x * width + y;
            totalr += tmpPixelData[pOfBlurArea * 4 + 0];
            totalg += tmpPixelData[pOfBlurArea * 4 + 1];
            totalb += tmpPixelData[pOfBlurArea * 4 + 2];
          }

        const p = i * width + j;
        pixelData[p * 4 + 0] = totalr / totalnum;
        pixelData[p * 4 + 1] = totalg / totalnum;
        pixelData[p * 4 + 2] = totalb / totalnum;
      }
    }
  }
};
