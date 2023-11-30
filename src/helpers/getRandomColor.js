function generateRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const rgbColor = 'rgb(' + red + ', ' + green + ', ' + blue + ')';

  return rgbColor;
}

export default generateRandomColor;
