import { useState } from "react";
import { ImageSkeleton } from "./style";
interface imageProps {
  alt: React.ImgHTMLAttributes<HTMLImageElement> | string | any;
  src: React.ImgHTMLAttributes<HTMLImageElement> | string | any;
}
const Image: React.FC<imageProps> = ({ alt, src, ...props }) => {
  const [skeleton, setSkeleton] = useState(true);

  function handleLoad({ target }: any) {
    setSkeleton(false);
    target.style.opacity = 1;
  }
  return (
    <ImageSkeleton>
      <div className="wrapper">
        {skeleton && <div className="skeleton"></div>}
        <img onLoad={handleLoad} src={src} alt={alt} {...props} />
      </div>
    </ImageSkeleton>
  );
};

export default Image;
