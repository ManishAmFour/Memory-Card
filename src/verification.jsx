let score = 0;

export function verificationFunction(image, clickedImages) {
  let clickedImageArray = clickedImages;

  if (clickedImageArray.includes(image)) {
    clickedImageArray.splice(0, clickedImageArray.length);
    score = 0;
  } else {
    clickedImageArray.push(image);
    score += 1;
  }
  return score;
}

let BestScore = 0;

export function calculateBestScore(currentScore) {
  if (currentScore === 0) {
    return BestScore;
  } else {
    if (currentScore > BestScore || BestScore === 0) {
      BestScore += 1;
    }
  }
  return BestScore;
}
