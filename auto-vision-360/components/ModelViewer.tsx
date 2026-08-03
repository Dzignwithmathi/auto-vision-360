"use client";

import {
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
  type ReactNode,
  type CSSProperties,
  type MouseEvent as ReactMouseEvent,
} from "react";

export interface ModelViewerHandle {
  setCamera: (orbit: string, target: string) => void;
  setCalibrationMode: (enabled: boolean) => void;
}

interface ModelViewerProps {
  src: string;
  alt: string;
  className?: string;
  children?: ReactNode;
}

const ModelViewer = forwardRef<ModelViewerHandle, ModelViewerProps>(function ModelViewer(
  { src, alt, className = "", children },
  ref
) {
  const elRef = useRef<any>(null);
  const calibrateRef = useRef(false);

  useEffect(() => {
    import("@google/model-viewer");
  }, []);

  useImperativeHandle(ref, () => ({
    setCamera: (orbit: string, target: string) => {
      const el = elRef.current;
      if (!el) return;
      el.cameraOrbit = orbit;
      el.cameraTarget = target;
    },
    setCalibrationMode: (enabled: boolean) => {
      calibrateRef.current = enabled;
      if (enabled) {
        console.log(
          "Calibration mode on — click anywhere on the model to log its data-position / data-normal."
        );
      }
    },
  }));

  const handleClick = (e: ReactMouseEvent<HTMLElement>) => {
    if (!calibrateRef.current) return;
    const el = elRef.current;
    if (!el || typeof el.positionAndNormalFromPoint !== "function") return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const hit = el.positionAndNormalFromPoint(x, y);
    if (hit) {
      const p = hit.position;
      const n = hit.normal;
      console.log(
        `data-position="${p.x.toFixed(2)}m ${p.y.toFixed(2)}m ${p.z.toFixed(2)}m" data-normal="${n.x.toFixed(2)}m ${n.y.toFixed(2)}m ${n.z.toFixed(2)}m"`
      );
    }
  };

  return (
    <model-viewer
      ref={elRef}
      src={src}
      alt={alt}
      camera-controls
      touch-action="pan-y"
      interaction-prompt="none"
      shadow-intensity="0.9"
      exposure="1"
      environment-image="neutral"
      loading="lazy"
      reveal="auto"
      onClick={handleClick}
      className={className}
      style={{ width: "100%", height: "100%", "--poster-color": "transparent" } as CSSProperties}
    >
      {children}
    </model-viewer>
  );
});

export default ModelViewer;
