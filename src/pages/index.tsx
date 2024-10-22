import type {NextPage} from 'next';
import React, {useEffect, useState} from 'react';
import {useMediaQuery} from "react-responsive";
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {ArrowRightIcon} from "@heroicons/react/outline";
// import AOS from 'aos';
import 'aos/dist/aos.css';
import Fade from 'react-reveal/Fade';
import {toast, ToastContainer} from 'react-nextjs-toast';
import ReactPlayer from 'react-player';

import Header from '../components/Header'
import Footer from '../components/Footer'

import AboutImage1 from '../assets/svg/0101.svg';
import AboutImage2 from '../assets/svg/0102.svg';
import EcoSystemImage from '../assets/svg/02.svg';
import MobileEcoSystemImage from "../assets/svg/02_mobile.svg";
import TickSvg from '../components/TickSvg';
import WhitePaperSvg from '../components/WhitePaperSvg';

const Home: NextPage = () => {
    const [piece, setPiece] = useState('Future');
    const [ind, setInd] = useState(0);
    const [email, setEmail] = useState('');
    const [type, setType] = useState(1);
    const isNotMobile = useMediaQuery({ query: '(min-width: 640px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 640px)' });
    let emailInput: any = null;

    useEffect(() => {
        if (ind % 3 === 0) {
            setPiece('Future');
        } else if (ind % 3 === 1) {
            setPiece('Power');
        } else {
            setPiece('Evolution');
        }
    }, [ind]);

    useEffect(() => {
        console.log('useffect');
        // const interval = setInterval(() => {
        //   setInd(prevInd => prevInd + 1);
        // }, 2000);

        // AOS.init({
        //   // initialise with other settings
        //   duration : 1200
        // });

        emailInput.focus();

        // return () => {
        //   console.log(`clearing interval`);
        //   clearInterval(interval);
        // };
    }, []);

    function onRegisterClick() {
        console.log('onregister');
        emailInput.focus();
    }

    async function onRegister(type: number) {
        if (email.indexOf('@') === -1) {
            toast.notify(`An email must contain a single @`, {
                duration: 50,
                type: 'error',
                title: 'Notification'
            });
            if (type === 2)
                document.getElementsByClassName('toast-message-container')[0].classList.add('toast-position-relative');
            return;
        }
        const res = await fetch(
            // 'https://oratech-back.vercel.app/api/emails/add',
            'https://oratech.uc.r.appspot.com/emails',
            {
                body: JSON.stringify({
                    email: email
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
            }
        ).then(async (re: any) => {
            // const result = await re.json()
            // console.log(re);
            toast.notify(`Congrats on registering!`, {
                duration: 5,
                type: 'success',
                title: 'Notification'
            })
            if (type === 2)
                document.getElementsByClassName('toast-message-container')[0].classList.add('toast-position-relative');
        }).catch((e: any) => {
            console.log(e);
        });
    }

    return (
        <div className='flex flex-col overflow-hidden'>
            <ToastContainer position={type === 1 ? 'bottom' : 'top'} align={'right'}/>
            <Head>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-10DM1PRJWR"></script>
                <script
                    async
                    dangerouslySetInnerHTML={{
                        __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-10DM1PRJWR');`
                    }}
                />
                <title>Ora</title>
                <meta name="description" content="Powered by Ora’s utility token TIME, Ora offers users the most lucrative financial rewards for their data while maintaining complete privacy"/>
                <link rel="icon" href="/logo.png"/>
            </Head>

            <Header height={0} onRegisterClick={onRegisterClick}/>
            <div className='flex lg:mx-auto md:mx-10 mt-16 flex-col-reverse sm:flex-row'>
                <div className='flex flex-col flex-1 sm:mt-28 about-headline-max-width 2xl:mr-20 xl:mr-10'>
                    <div className='flex about-headline-roboto justify-center sm:justify-between opacity-80 about-text-blue'>
                        <div>
                            The
                        </div>
                        <div className="mx-3 sm:mx-0">
                            {piece}
                        </div>
                        <div className="mr-3 sm:mr-0">
                            of
                        </div>
                        <div className="sm:hidden" >Data</div>

                    </div>
                        <div className='hidden sm:block about-headline-roboto opacity-80 about-text-blue'>
                            Data
                        </div>

                    <div className='about-subline-roboto  opacity-80 sm:mt-5 about-text-blue'>
                        Discover the easiest way to earn lucrative rewards for your data!
                    </div>
                    <div className='about-subline2-kanit sm:mt-14'>
                        Subscribe below and stay up to date on our app launch, initial token offering and early
                        registration to receive our Airdrop.
                    </div>
                    <div className='flex items-center mt-4 sm:mt-6 mx-4 justify-center sm:justify-start sm:mx-0'>
                        <input type='text' className='about-email-input px-3 py-2'
                               placeholder='Enter your email address' onChange={(e) => {
                            setEmail(e.target.value);
                        }} ref={(text) => {
                            emailInput = text;
                        }} onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                setType(1);
                                onRegister(1);
                            }
                        }}/>
                        <div className='sm:ml-3 about-text-blue-light cursor-pointer' onClick={(e) => {
                            setType(1);
                            onRegister(1);
                        }}>
                            <ArrowRightIcon width={26} height={26}/>
                        </div>
                    </div>
                    <div className='flex items-center mt-4 sm:mt-4 about-email-input-tip  '>
                        By registering your email with us you are agreeing with our&nbsp;
                        <a href="/privacy" target='_blank' rel='noreferrer'><span
                            className='about-text-blue-light underline'>privacy policy</span></a>&nbsp;and&nbsp;
                        <a href="/terms" target='_blank' rel='noreferrer'><span
                            className='about-text-blue-light underline'>terms of service</span></a>.
                    </div>
                </div>
                <div className='flex-1 sm:mt-20 flex items-center px-20 sm:px-0'>
                    <div>
                        <Image src={AboutImage1} alt='About Image1' layout='intrinsic'/>
                    </div>
                    <div className='mx-5 mt-12 about-animation-max-width'>
                        {/* <Image src={AboutLogoImage} alt='About Image Logo' layout='intrinsic' /> */}
                        <ReactPlayer muted width='100%' height='100%' playing loop url={[`/aboutlogo.mp4`]}/>
                    </div>
                    <div className='mt-6'>
                        <Image src={AboutImage2} alt='About Image2' layout='intrinsic'/>
                    </div>
                </div>
            </div>
            <Fade bottom>
                <div
                    className='flex flex-col xl:mx-auto lg:mx-16 md:mx-10 about-ora-description sm:px-20 sm:py-16 sm:mt-28'>
                    <div className='about-ora-description-title about-text-blue'>
                        Ora is on a mission to re-invent and modernize the data industry
                    </div>
                    <div className='about-ora-description-subtitle about-text-blue mt-12'>
                        Ora offers online users:
                    </div>
                    <div className='about-ora-description-subtitle mt-3 flex items-center'>
                        <TickSvg width={23.62} height={16.66} fill={"#2E3192"}/>
                        <div className='about-ora-description-content sm:ml-3'>
                            The <span className='font-bold'>most lucrative rewards</span> for their data.
                        </div>
                    </div>
                    <div className='about-ora-description-subtitle flex items-center mt-3 sm:mt-0'>
                        <TickSvg width={23.62} height={16.66} fill={"#2E3192"}/>
                        <div className='about-ora-description-content sm:ml-3'>
                            Complete privacy with <span
                            className='font-bold'>no name or exact location linked to data.</span>
                        </div>
                    </div>
                    <div className='about-ora-description-subtitle about-text-blue mt-8'>
                        Ora offers online consumers:
                    </div>
                    <div className='about-ora-description-subtitle mt-3 flex items-center'>
                        <TickSvg width={23.62} height={16.66} fill={"#2E3192"}/>
                        <div className='about-ora-description-content sm:ml-3'>
                            The <span
                            className='font-bold'>most detailed, accurate real-time data avaliable anywhere.</span>
                        </div>
                    </div>
                    <div className='about-ora-description-subtitle flex items-center mt-3 sm:mt-3'>
                        <TickSvg width={23.62} height={16.66} fill={"#2E3192"}/>
                        <div className='about-ora-description-content sm:ml-3'>
                            The ability to <span className='font-bold'>initiate data requests</span> and gain
                            unprecedented <span className='font-bold'>real-time market insights.</span>
                        </div>
                    </div>
                    <div className='about-ora-description-footer about-text-blue sm:mt-12'>
                        It is no secret that the most valuable commodity for humans is time! It is no coincidence that
                        Ora’s ecosystem is powered by a utility token called TIME.
                    </div>
                </div>
            </Fade>
            <Fade bottom>
                <div
                    className='flex flex-col 2xl:mx-auto xl:mx-24 lg:mx-12 md:mx-8 items-center about-ora-ecosystem-back sm:px-20 sm:py-16 sm:mt-28'>
                    <div className='about-ora-ecosystem-title about-text-blue'>
                        TIME powers the Ora ecosystem.
                    </div>
                        <div className='hidden sm:block  sm:mt-20 sm:mb-32'>
                            <Image src={EcoSystemImage} alt='EcoSystem Image'/>
                        </div>
                        <div className='block sm:hidden mt-6'>
                            <Image src={MobileEcoSystemImage} alt='EcoSystem Image'/>
                        </div>

                </div>
            </Fade>
            <Fade bottom>
                <div className='about-how-it-works flex flex-col xl:mx-auto lg:mx-16 md:mx-8'
                     data-aos='about-animation'>
                    <div className='about-how-it-works-title flex justify-center'>
                        How It Works
                    </div>
                    <div className='about-ora-description-title about-text-blue sm:mt-10'>
                        Registration
                    </div>
                    <ul className='list-disc about-ora-description-content list-outside sm:mt-2 sm:ml-6'>
                        <li>
                            Download and install the <span className='font-bold'> FREE</span> Ora app on your mobile
                            phone (Android and iOS available).
                        </li>
                        <li>
                            Upon registration, your account will receive a generous TIME reward.
                        </li>
                        <li>
                            Turn on Ora app notifications to receive bonus TIME rewards.
                        </li>
                        <li>
                            Use a friends referral code (even if already signed up) and send out yours to receive bonus
                            TIME rewards.
                        </li>
                        <li>
                            You are now all set to receive data requests and continued rewards!
                        </li>
                    </ul>
                    <div className='border-b sm:my-6'>
                    </div>
                    <div className='about-ora-description-title about-text-blue'>
                        After Registration
                    </div>
                    <ul className='list-disc about-ora-description-content list-outside sm:mt-2 sm:ml-6'>
                        <li>
                            Eligible users will receive a notification that there is a new data request available.
                        </li>
                        <li>
                            Click a few multiple choice answers in less than 30 seconds and receive TIME for every
                            answer provided.
                        </li>
                        <li>
                            Grow your TIME by staking on chain to receive generous staking rewards (see whitepaper for
                            details).
                        </li>
                        <li>
                            Collected metadata is made available to data consumers. The privacy of the user’s name and
                            the exact location is protected.
                        </li>
                        <li>
                            Refer as many people as you like to earn ongoing TIME rewards from friends and family’s
                            data!
                        </li>
                    </ul>
                </div>
            </Fade>
            <div className='sm:mx-auto flex about-learn-more sm:mt-12'>
                <div className='about-text-blue'>
                    Learn more by reading our
                </div>
                <a href='/Whitepaper.pdf' target='_blank' rel='noreferrer'>
                    <div className='about-text-blue-light flex items-center cursor-pointer'>
                        &nbsp;Whitepaper&nbsp;
                        <WhitePaperSvg width={16} height={16} fill={"#4AA3E0"}/>
                    </div>
                </a>
            </div>
            <div className='flex relative mt-16 h-48 sm:h-0 sm:mt-96'>
                <div className='absolute about-footer'>
                    <div className='about-preregister text-white lg:mt-16 md:mt-24'>
                        Pre-register below to be one of the lucky individuals to receive the <Link href='/airdrop'><span
                        className='underline cursor-pointer'>Ora Airdrop!</span></Link>
                        <span className='about-totalsupply text-white sm:hidden'>
                        &nbsp;&nbsp; Ora is using 5% of the total supply for an airdrop to early users!
                    </span>
                    </div>

                    <div className='about-totalsupply text-white hidden sm:block'>
                        Ora is using 5% of the total TIME supply to airdrop to early users!
                    </div>

                    <div className='flex justify-center mt-4 items-center sm:mt-6'>
                        <input type='text' className='about-preregister-email-input px-4 py-2'
                               placeholder='Enter your email address' onChange={(e) => {
                            setEmail(e.target.value);
                        }} onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                setType(2);
                                onRegister(2);
                            }
                        }}/>
                        <div className='sm:ml-3 text-white cursor-pointer' onClick={(e) => {
                            setType(2);
                            onRegister(2);
                        }}>
                            <ArrowRightIcon width={26} height={26}/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer height={0} />
        </div>
    )
}

export default Home
