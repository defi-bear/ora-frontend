import React from 'react';
import Image from 'next/image';
import {useMediaQuery} from "react-responsive";

import Logo2 from '../assets/svg/logo2.svg';
import Reddit from '../assets/svg/reddit.svg';
import Twitter from '../assets/svg/twitter.svg';
import Telegram from '../assets/svg/telegram.svg';
import LogoImg2 from "../assets/png/logo2.png";
import WhitePaperSvg from './WhitePaperSvg';

interface FooterProps {
  height: number
};

export default function Footer({ height=0 } : FooterProps) {

  const isNotMobile = useMediaQuery({minWidth: 640});
  const isMobile = useMediaQuery({maxWidth: 640});

  function getStyle() {
    let styles = {};
    if (height) styles = Object.assign(styles, { height: height });
    return styles;
  }
  return (
    <div className='z-50 header-back header-kanit' style={getStyle()}>
      <div className='flex flex-col sm:flex-row items-center text-white pt-10 sm:pt-0 2xl:px-60 xl:px-36 lg:px-16 md:px-8 sm:justify-between sm:pt-5 '>
        <a href='/' rel='noreferrer'>

          {isNotMobile && <Image src={Logo2} width={240} height={85} alt='Logo2' />}
          {isMobile && <Image src={LogoImg2} width={100} height={37} alt='Logo2' />}

        </a>
        <div className='flex flex-col text-white items-end about-contact-us'>
          <div className="self-center sm:self-auto" >
            Contact Us
          </div>
          <div className='about-email-info sm:mb-3'>
            Email : <a href='mailto:info@ora.app' rel='noreferrer'>info@ora.app</a>
          </div>
          <div className='flex flex-col self-center sm:self-auto'>
            <div className='sm:mb-2'>
              Ora on Social Media
            </div>
            <div className='flex justify-end self-center sm:self-auto'>
              <div className='mr-2'>
                <a href='https://www.reddit.com/user/Ora_Time' target='_blank' rel='noreferrer'>
                  <Image src={Reddit} alt='Reddit' />
                </a>
              </div>
              <div className='mr-2'>
                <a href='https://twitter.com/Ora_Time' target='_blank' rel='noreferrer'>
                  <Image src={Twitter} alt='Twitter' />
                </a>
              </div>
              <div>
                <a href='https://t.me/joinchat/Sd0c9GeJoNdiNzZh' target='_blank' rel='noreferrer'>
                  <Image src={Telegram} alt='Telegram' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col text-white about-terms justify-center items-center sm:pb-5'>
        <div className='flex'>
          <a href="/terms" target='_blank' rel='noreferrer'>
            <div className='flex items-center cursor-pointer'>
              <div className='mr-1'>
                Terms of Services
              </div>
              <WhitePaperSvg width={16} height={16} fill={"#ffffff"} />
            </div>
          </a>
          <div className='border-r border-white mx-1 sm:mx-3' />
          <a href="/privacy" target='_blank' rel='noreferrer'>
            <div className='flex items-center'>
              <div className='mr-1'>
                Privacy Policy
              </div>
              <WhitePaperSvg width={16} height={16} fill={"#ffffff"} />
            </div>
          </a>
        </div>

            <div className='about-allrights-reserved'>
              {isNotMobile ? (
                  "© Ora.app 2021 - All Rights Reserved."
              ) : (
              "Perkins Coie is the Ora legal counsel."
              )}
            </div>

      </div>
    </div>
  );
}
