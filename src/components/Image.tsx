interface ImageProps {
  imgSrc: string;
  width?: string;
  height?: string;
  altText: string;
  className?: string;
}

function Image({imgSrc, width, height, altText, className}: ImageProps) {
  return <img src={imgSrc} width={width} height={height} alt={altText} className={className} />
}

export default Image;
