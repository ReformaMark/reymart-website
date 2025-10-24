"use client";
import React from "react";
import { ReactLenis } from "lenis/react";
function ReactLenisContext({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.4, // Lower = smoother/slower, higher = snappier/faster
        duration: 0.8, // Duration of scroll animation (default ~1.2)
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default ReactLenisContext;
