import { useState } from "react";

const ImageLoader = ({ src, alt, className, ...props }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="image-loader-wrapper" style={{ position: "relative" }}>
      {isLoading && (
        <div className="image-skeleton">
          <div className="skeleton-shimmer"></div>
        </div>
      )}
      {hasError ? (
        <div className="image-error">
          <i className="bi bi-image"></i>
          <span>Image not available</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={className}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
          style={{ opacity: isLoading ? 0 : 1, transition: "opacity 0.3s ease" }}
          {...props}
        />
      )}
    </div>
  );
};

export default ImageLoader;

