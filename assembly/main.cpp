#include <stdio.h>
#include <stdlib.h>

extern "C" {
  // int getPixel (int x, int y, int* arr, int width, int height) {
  //   if (x < 0 || y < 0) return 0;
  //   if (x >= (width) || y >= (height)) return 0;
  //   return (arr[((width * y) + x)]);
  // }

  extern void callJs(int val);

  void grayScale (unsigned char* data, int len) {
    for (int i = 0; i < len; i += 4) {
      int r = data[i];
      int g = data[i+1];
      int b = data[i+2];
      int a = data[i+3];
      data[i] = r;
      data[i+1] = r;
      data[i+2] = r;
      data[i+3] = a;
    }
  }

  void comic (unsigned char* data, int len) {
    for (int i = 0; i < len; i += 4) {
      int r = data[i];
      int g = data[i+1];
      int b = data[i+2];
      int a = data[i+3];
      int R = (abs(g - b + g + r) * r) / 256;
      int G = (abs(b - g + b + r) * r) / 256;
      int B = (abs(b - g + b + r) * g) / 256;
      data[i] = R;
      data[i + 1] = G;
      data[i + 2] = B;
      data[i + 3] = a;
    }
    callJs(88);
  }
}