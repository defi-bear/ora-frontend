import React from "react";

interface WhitePaperSvgProps {
  width: number;
  height: number;
  fill: string;
};

export default function WhitePaperSvg({ width, height, fill }:WhitePaperSvgProps) {
  const viewBox = "0 0 " + width + " " + height;
  return (
    <svg width={width} height={height} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 8.67539L7.22996 12.6867L23.6197 0L7.28823 16.663L0 8.67539Z" fill={fill} />
    </svg>    
  );
}
