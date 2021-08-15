import React from 'react';
import { ArrowRightIcon } from "@heroicons/react/outline";

interface RegButtonProps {
  width: number,
  height: number,
  title: string
};

export default function RegButton({ width, height, title } : RegButtonProps) {
  function getStyle() {
    let styles = {};
    if (width) styles = Object.assign(styles, { width: width });
    if (height) styles = Object.assign(styles, { height: height });
    return styles;
  }
  return (
    <div style={getStyle()} className='flex justify-center items-center reg-btn cursor-pointer'>
      {title && (
        <div className='flex justify-center items-center'>
          { title }
          <div className='sm:ml-1'>
            <ArrowRightIcon width={20} height={20} />
          </div>
        </div>
      )}
    </div>
  );
}
