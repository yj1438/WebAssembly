import filter from './js/filter';

const IMG_URL = '/img/demopic.jpg';

const canvas = document.getElementById('canvas');
const canvasRes = document.getElementById('canvasRes');
const img = new Image();
img.onload = () => {
  const width = img.width;
  const height = img.height;
  canvas.width = width;
  canvas.height = height;
  canvasRes.width = width;
  canvasRes.height = height;
  const ctx = canvas.getContext('2d');
  const ctxR = canvasRes.getContext('2d');
  ctx.drawImage(img, 0, 0, width, height);
  //
  setTimeout(() => {
    const imgData = ctx.getImageData(0, 0, width, height);
    const pixelData = imgData.data;
    console.log('总共计算象素: ' + pixelData.length);
    console.time();

    const len = pixelData.length
    const mem = window._malloc(len);
    window.HEAPU8.set(pixelData, mem); 
    window.Module.asm._comic(mem, len);
    const filtered = window.HEAPU8.subarray(mem, mem + len);
    window._free(mem);
    pixelData.set(filtered)

    // filter.grayScale(pixelData);
    // filter.reverse(pixelData);
    // filter.comic(pixelData);
    // filter.blur(pixelData, tmpPixelData, width, height);
    ctxR.putImageData(imgData , 0 , 0 , 0 , 0 , width , height);
    console.timeEnd();
  }, 1000);
};
img.src = IMG_URL;
