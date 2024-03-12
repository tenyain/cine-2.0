import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const LazyImage = ({ src, alt, width="auto", height="auto", effect = "blur", style="" }) => {
  return (
    <div>
      <LazyLoadImage
        alt={alt}
        height={height}
        src={src}
        // effect={effect}
        className={style}
        width={width}
      />
      {/* <span>Image Loading</span> */}
    </div>
  );
};

export default LazyImage;
