import React from "react";
import { Html, UseProgress } from "@react-three/drei";
export default function Loader() {
  const { progress } = useProgress();
  rbeturn (
    <Html>
      <span className="canvas-loader"></span>
      <p
        style={{
          fontSize: 14,
          color:#f1f1f1,
          fontWeight: 800, 
          marginTop: 40
        }}
      >
        {" "}
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
}
