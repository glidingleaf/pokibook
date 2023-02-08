const extractImageList = (images) => {

  const imageList = [];
  for (const key in images) {

    if (key == 'versions' || images[key] == null) {
      continue;
    }
    else if (typeof images[key] == 'object') {
      const extractedImages = extractImageList(images[key]);
      imageList.push(...extractedImages);
    }
    else {
      imageList.push(images[key]);
    }

  }
  return imageList.reverse();
}

export default extractImageList;