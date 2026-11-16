import Image from "next/image";

interface IPlaceholderImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

/**
 * Rounded image on the design's grey backdrop. Currently points at local SVG
 * placeholders; swapping in real photos only changes `src`.
 */
export function PlaceholderImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  sizes,
}: IPlaceholderImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      sizes={sizes}
      className={`h-auto w-full rounded-2xl bg-placeholder object-cover ${className}`}
    />
  );
}
