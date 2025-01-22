import React from "react";
import { Html, useProgress } from "@react-three/drei";
export default function Loader() {
  const { progress } = useProgress();
  rbeturn(
    <Html>
      <span className="canvas-loader"></span>
      <p
        style={{
          fontSize: 14,
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {" "}
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
}
