import React, {useState} from 'react';
import Image from 'next/image';
import {Squash as Hamburger} from 'hamburger-react'
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
    const isNotMobile = useMediaQuery({query: '(min-width: 640px)'})
    const isMobile = useMediaQuery({query: '(max-width: 640px)'});
    const [isShowMenu, setShowMenu] = useState(false);

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
            <div
                className={isShowMenu ? " flex  flex-col w-full header-white-back" : " flex  flex-col w-full header-back"}>
                <div className="flex ">
                    <div className="ml-auto py-3 pr-3"
                        // onClick={() => setShowMenu(!isShowMenu)}
                    >
                        <Hamburger rounded color={isShowMenu ? "#041D44" : "#FFFFFF"} label="Show Menu" hideOutline={false} onToggle={toggled => {
                            if (toggled) {
                                setShowMenu(true)
                                // open a menu
                            } else {
                                // close a menu
                                setShowMenu(false)
                            }
                        }}/>
                    </div>
                </div>
                {/*<div className="h-1 bg-gray-50"></div>*/}
                <div className="flex flex-col about-text-blue   font-25  header-animation"
                     style={{height: isShowMenu ? "100vh" : 0, overflow: 'hidden'}}>
                    <div className="flex items-center py-2.5  mt-24 self-center">
                        <a href='/Whitepaper.pdf' target='_blank' rel='noreferrer'>
                            <div className="flex items-center    self-center">
                                <div className='mr-1'>
                                    Whitepaper
                                </div>
                                <WhitePaperSvg width={16} height={16} fill={"#041D44"}/>
                            </div>

                        </a>
                    </div>


                    <Link href="/roadmap">
                        <div className="py-2.5  self-center">Roadmap</div>
                    </Link>
                    <Link href="/team">
                        <div className="py-2.5   self-center">Team</div>
                    </Link>
                    <Link href="/timetoken">
                        <div className="py-2.5   self-center">TIME Token</div>
                    </Link>
                    <Link href="/airdrop">
                        <div className="py-2.5   self-center">Airdrop</div>

                    </Link>
                    <Link href="/faq">
                        <div className="py-2.5   self-center">FAQ</div>
                    </Link>
                    {/*<div className="bg-gray-50" style={{height: 1}}></div>*/}
                    {/*<div className="py-2.5   hover:bg-gray-500 self-center">Registration</div>*/}
                    {asPath !== '/' ? (
                        <div className="py-2.5    self-center text-white font-25">
                            <a href='/' rel='noreferrer'>
                                <RegButton width={212} height={50} title={'Registration'}/>
                            </a>
                        </div>

                    ) : (
                        <div className="py-2.5    self-center text-white font-25" onClick={(e) => {
                            if (onRegisterClick) onRegisterClick();
                        }}>
                            <RegButton width={212} height={50} title={'Registration'}/>
                        </div>
                    )}

                </div>
            </div>
            }

        </div>
    );
}
