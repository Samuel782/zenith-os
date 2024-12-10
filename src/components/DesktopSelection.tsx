"use client";
import React, { useState, useRef } from "react";

const DesktopSelection: React.FC = () => {
  const [selection, setSelection] = useState<{
    startX: number;
    startY: number;
    endX: number;
    endY: number;
  } | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    setSelection({
      startX: e.clientX - rect.left,
      startY: e.clientY - rect.top,
      endX: e.clientX - rect.left,
      endY: e.clientY - rect.top,
    });

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!selection) return;

    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    setSelection((prev) => ({
      ...prev!,
      endX: e.clientX - rect.left,
      endY: e.clientY - rect.top,
    }));
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  
    setSelection({
      startX: 0,
      startY: 0,
      endX: 0,
      endY: 0,
    })
  };

  const calculateRectangleStyle = () => {
    if (!selection) return {};
    const { startX, startY, endX, endY } = selection;
    const left = Math.min(startX, endX);
    const top = Math.min(startY, endY);
    const width = Math.abs(endX - startX);
    const height = Math.abs(endY - startY);
    return {
      left,
      top,
      width,
      height,
    };
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      style={{
        position: "absolute",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {selection && (
        <div
          style={{
            position: "absolute",
            zIndex: 1,
            borderRadius: "4px",
            backgroundColor: "rgba(173, 216, 230, 0.2)",
            pointerEvents: "none",
            ...calculateRectangleStyle(),
          }}
        />
      )}
    </div>
  );
};

export default DesktopSelection;
