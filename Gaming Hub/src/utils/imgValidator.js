const imageUrlRegex = /\.(jpeg|jpg|gif|png)$/;

export default function isValidImageUrl(url) {
  return imageUrlRegex.test(url);
};  