import React,{useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {useMediaQuery} from "react-responsive";

import RegButton from './RegButton';

import Logo from '../assets/svg/logo.svg';
import WhitePaperSvg from './WhitePaperSvg';


interface HeaderProps {
    height: number,
    onRegisterClick: () => void;
};

export default function Header({height = 0, onRegisterClick}: HeaderProps) {

    const {asPath} = useRouter()
    const isNotMobile = useMediaQuery({ query: '(min-width: 640px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 640px)' });
    const [isShowMenu, setShowMenu] =useState(false);

    function getStyle() {
        let styles = {};
        if (height) styles = Object.assign(styles, {height: height});
        return styles;
    }

    return (
        <div className='z-50 w-full fixed '>

            {isNotMobile &&
            <div
                className='flex items-center text-white header-back header-kanit 2xl:px-60 xl:px-36 lg:px-16 md:px-2 sm:justify-between sm:py-5'
                style={getStyle()}
            >
                {/* <a href='/' rel='noreferrer'> */}
                <Link href='/'>
                    <Image src={Logo} width={50} height={44} alt='Logo' className='cursor-pointer'/>
                </Link>
                {/* </a> */}
                <a href='/Whitepaper.pdf' target='_blank' rel='noreferrer'>
                    <div className='flex items-center cursor-pointer'>
                        <div className='mr-1'>
                            Whitepaper
                        </div>
                        <WhitePaperSvg width={16} height={16} fill={"#ffffff"}/>
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
                {asPath !== '/' ? (
                    <a href='/' rel='noreferrer'>
                        <RegButton width={153} height={36} title={'Registration'}/>
                    </a>
                ) : (
                    <div onClick={(e) => {
                        if (onRegisterClick) onRegisterClick();
                    }}>
                        <RegButton width={153} height={36} title={'Registration'}/>
                    </div>
                )}
                {/* </a> */}
            </div>
            }

            {isMobile &&
              <div className="flex  flex-col w-full header-back">
                     <div className="flex ">
                         <div className="ml-auto py-3 pr-3"
                        onClick={() => setShowMenu(!isShowMenu)}>
                            <svg viewBox="0 0 100 80" width="27" height="23" fill="white">
                                <rect width="100" height="12"></rect>
                                <rect y="30" width="100" height="12"></rect>
                                <rect y="60" width="100" height="12"></rect>
                            </svg>
                        </div>
                    </div>
                    <div className="h-1 bg-gray-50"></div>
                    <div className="flex flex-col text-white" style={{height: isShowMenu ? "auto" :0, overflow: 'hidden'}}>
                        <div className="py-1.5 p-3 hover:bg-gray-500">Whitepaper</div>
                        <Link href="/roadmap">
                            <div className="py-1.5 p-3 hover:bg-gray-500 ">Roadmap</div>
                        </Link>
                        <Link href="/team">
                            <div className="py-1.5 p-3 hover:bg-gray-500">Team</div>
                        </Link>
                        <div className="py-1.5 p-3 hover:bg-gray-500">TIME Token</div>
                        <div className="py-1.5 p-3 hover:bg-gray-500">Airdrop</div>
                        <div className="py-1.5 p-3 hover:bg-gray-500">FAQ</div>
                        <div className="bg-gray-50" style={{height:1}}></div>
                        <div className="py-1.5 p-3 hover:bg-gray-500">Registration</div>
                    </div>
                </div>
            }


        </div>
    );
}
