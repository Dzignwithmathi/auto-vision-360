import type { ReactNode, CSSProperties } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": {
        ref?: any;
        src?: string;
        alt?: string;
        poster?: string;
        "camera-controls"?: boolean;
        "auto-rotate"?: boolean;
        "shadow-intensity"?: string;
        "shadow-softness"?: string;
        exposure?: string;
        "environment-image"?: string;
        "camera-orbit"?: string;
        "camera-target"?: string;
        "field-of-view"?: string;
        "min-camera-orbit"?: string;
        "max-camera-orbit"?: string;
        "interaction-prompt"?: string;
        "touch-action"?: string;
        loading?: string;
        reveal?: string;
        ar?: boolean;
        className?: string;
        style?: CSSProperties;
        onClick?: (event: any) => void;
        children?: ReactNode;
        [key: string]: any;
      };
    }
  }
}

export {};
