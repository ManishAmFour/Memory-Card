export function verificationFunction(image, clickedImages) {
  let clickedImageArray = clickedImages;

  if (clickedImageArray.includes(image)) {
    clickedImageArray.splice(0, clickedImageArray.length);
  } else {
    clickedImageArray.push(image);
  }

  return clickedImageArray;
}
