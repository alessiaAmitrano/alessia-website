interface ImageProps {
  imgSrc: string;
  width?: string;
  height?: string;
  altText: string;
}

function Image({imgSrc, width, height, altText}: ImageProps) {
  return <img src={imgSrc} width={width} height={height} alt={altText} />
}

export default Image;
