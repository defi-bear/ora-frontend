import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import RegButton from './RegButton';

import Logo from '../assets/svg/logo.svg';
import WhitePaperSvg from './WhitePaperSvg';

interface HeaderProps {
  height: number
};

export default function Header({ height } : HeaderProps) {
  function getStyle() {
    let styles = {};
    if (height) styles = Object.assign(styles, { height: height });
    return styles;
  }
  return (
    <div className='z-50'>
      <div
        className='flex items-center text-white header-back header-kanit 2xl:px-60 xl:px-36 lg:px-16 md:px-2 sm:justify-between'
        style={getStyle()}
      >
        <a href='/' rel='noreferrer'>
          <Image src={Logo} alt='Logo' className='cursor-pointer' />
        </a>
        <a href='/Whitepaper.pdf' target='_blank' rel='noreferrer'>
          <div className='flex items-center cursor-pointer'>
            <div className='mr-1'>
              Whitepaper
            </div>
            <WhitePaperSvg width={16} height={16} fill={"#ffffff"} />
          </div>
        </a>
        <Link href="/roadmap">
          <div className='flex items-center cursor-pointer'>
            Roadmap
          </div>
        </Link>
        <Link href="/team">
          <div className='flex items-center cursor-pointer'>
            Team
          </div>
        </Link>
        <Link href="/timetoken">
          <div className='flex items-center cursor-pointer'>
            TIME Token
          </div>
        </Link>
        <Link href="/airdrop">
          <div className='flex items-center cursor-pointer'>
            Airdrop
          </div>
        </Link>
        <Link href="/faq">
          <div className='flex items-center cursor-pointer'>
            FAQ
          </div>
        </Link>
        <RegButton width={153} height={36} title={'Registration'} />
      </div>
    </div>
  );
}
