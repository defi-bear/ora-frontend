import React from "react";

interface LoadMoreSvgProps {
  width: number;
  height: number;
  fill: string;
};

export default function LoadMoreSvg({ width, height, fill }:LoadMoreSvgProps) {
  const viewBox = "0 0 " + width + " " + height;
  return (
    <svg width={width} height={height} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="22" cy="22" r="21" stroke={fill}/>
      <path d="M22.8839 11.1161C22.3957 10.628 21.6043 10.628 21.1161 11.1161L13.1612 19.0711C12.673 19.5592 12.673 20.3507 13.1612 20.8388C13.6493 21.327 14.4408 21.327 14.9289 20.8388L22 13.7678L29.0711 20.8388C29.5592 21.327 30.3507 21.327 30.8388 20.8388C31.327 20.3507 31.327 19.5592 30.8388 19.0711L22.8839 11.1161ZM23.25 34L23.25 12L20.75 12L20.75 34L23.25 34Z" fill={fill} />
    </svg>    
  );
}
