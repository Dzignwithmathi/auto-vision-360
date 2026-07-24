interface PlaceholderImageProps {
  filename: string;
  tag?: string;
  aspect?: string; // Tailwind arbitrary aspect-ratio, e.g. "aspect-[4/3]"
  onDark?: boolean;
  className?: string;
}

/**
 * Stand-in for real photography/renders. Carries a descriptive filename so
 * assets can be dropped in later (see /public/images) — replace usages with
 * <Image src={`/images/${filename}`} .../> once final art exists.
 */
export default function PlaceholderImage({
  filename,
  tag,
  aspect = "aspect-[4/3]",
  onDark = false,
  className = "",
}: PlaceholderImageProps) {
  return (
    <div className={`ph ${aspect} ${onDark ? "on-dark" : ""} ${className}`}>
      <div className="ph-label">
        <span>{filename}</span>
        {tag && <span>{tag}</span>}
      </div>
    </div>
  );
}
