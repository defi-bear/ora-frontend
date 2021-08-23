import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import RegButton from './RegButton';

import Logo from '../assets/svg/logo.svg';
import WhitePaperSvg from './WhitePaperSvg';

interface HeaderProps {
  height: number,
  onRegisterClick: () => void;
};

export default function Header({ height=0, onRegisterClick } : HeaderProps) {
  const { asPath } = useRouter()

  function getStyle() {
    let styles = {};
    if (height) styles = Object.assign(styles, { height: height });
    return styles;
  }

  return (
    <div className='z-50 w-full fixed'>
      <div
        className='flex items-center text-white header-back header-kanit 2xl:px-60 xl:px-36 lg:px-16 md:px-2 sm:justify-between sm:py-5'
        style={getStyle()}
      >
        {/* <a href='/' rel='noreferrer'> */}
        <Link href='/'>
          <Image src={Logo} width={50} height={44} alt='Logo' className='cursor-pointer' />
        </Link>
        {/* </a> */}
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
        {/* <a href='/' rel='noreferrer'> */}
        { asPath !== '/' ? (
          <Link href='/'>
            <RegButton width={153} height={36} title={'Registration'} />
          </Link>
        ) : (
          <div onClick={(e) => {if (onRegisterClick) onRegisterClick();}}>
            <RegButton width={153} height={36} title={'Registration'} />
          </div>
        )}
        {/* </a> */}
      </div>
    </div>
  );
}
