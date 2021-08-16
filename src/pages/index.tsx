import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ArrowRightIcon } from "@heroicons/react/outline";

import Header from '../components/Header'
import Footer from '../components/Footer'

import AboutImage1 from '../assets/png/0101.png';
import AboutImage2 from '../assets/png/0102.png';
import AboutLogoImage from '../assets/gif/aboutlogo.gif';
import EcoSystemImage from '../assets/png/02.png';
import TickSvg from '../components/TickSvg';
import WhitePaperSvg from '../components/WhitePaperSvg';

const Home: NextPage = () => {
  return (
    <div className='flex flex-col overflow-hidden'>
      <Head>
        <title>Ora</title>
        <meta name="description" content="Ora is on a mission to re-invent and modernize the data industry" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Header height={123} />
      <div className='flex justify-between 2xl:mx-60 xl:mx-36 lg:mx-16 md:mx-6'>
        <div className='flex flex-col flex-1 sm:mt-28'>
          <div className='about-headline-roboto opacity-80'>
            The Future of Data
          </div>
          <div className='about-subline-roboto opacity-80 sm:mt-5'>
            Discover the easiest way to earn lucrative rewards for your data!
          </div>
          <div className='about-subline2-kanit sm:mt-14'>
            Register below for the app launch, initial token offering and be eligible for early registration to receive our Airdrop! 
          </div>
          <div className='flex items-center sm:mt-6'>
            <input type='text' className='about-email-input px-3 py-2' placeholder='Enter your email address' onChange={(e) => {}} />
            <div className='sm:ml-3 about-text-blue-light cursor-pointer'>
              <ArrowRightIcon width={26} height={26} />
            </div>
          </div>
          <div className='flex items-center sm:mt-4 about-email-input-tip'>
            By registering your email with us you are agreeing to our privacy policy
          </div>
        </div>
        <div className='flex-1 sm:mt-20 flex'>
          <Image src={AboutImage1} alt='About Image1' layout='intrinsic' />
          <div className='mx-5 mt-10'>
            <Image src={AboutLogoImage} alt='About Image Logo' layout='intrinsic' />
          </div>
          <Image src={AboutImage2} alt='About Image2' layout='intrinsic' />
        </div>
      </div>
      <div className='flex flex-col xl:mx-auto lg:mx-16 md:mx-10 about-ora-description sm:px-20 sm:py-16 sm:mt-28'>
        <div className='about-ora-description-title about-text-blue'>
          Ora is on a mission to re-invent and modernize the data industry
        </div>
        <div className='about-ora-description-subtitle about-text-blue sm:mt-12'>
          Ora will offers online users: 
        </div>
        <div className='about-ora-description-subtitle sm:mt-3 flex items-center'>
          <TickSvg width={23.62} height={16.66} fill={"#2E3192"} />
          <div className='about-ora-description-content sm:ml-3'>
            The <span className='font-bold'>most lucrative rewards</span> for their data.
          </div>
        </div>
        <div className='about-ora-description-subtitle flex items-center'>
          <TickSvg width={23.62} height={16.66} fill={"#2E3192"} />
          <div className='about-ora-description-content sm:ml-3'>
            Complete privacy with <span className='font-bold'>no name or exact location linked to data.</span>
          </div>
        </div>
        <div className='about-ora-description-subtitle about-text-blue sm:mt-8'>
          Ora will offers online consumers: 
        </div>
        <div className='about-ora-description-subtitle sm:mt-3 flex items-center'>
          <TickSvg width={23.62} height={16.66} fill={"#2E3192"} />
          <div className='about-ora-description-content sm:ml-3'>
            The <span className='font-bold'>most detailed, accurate real-time data avaliable anywhere.</span>
          </div>
        </div>
        <div className='about-ora-description-subtitle flex items-center'>
          <TickSvg width={23.62} height={16.66} fill={"#2E3192"} />
          <div className='about-ora-description-content sm:ml-3'>
            The ability to <span className='font-bold'>initiate data requests</span> and gain unprecedented <span className='font-bold'>real-time market insights.</span>
          </div>
        </div>
        <div className='about-ora-description-footer about-text-blue sm:mt-12'>
          It is no secret that human’s most valuable commodity for humans is time!  It is no coincidence that
          Ora’s ecosystem is powered by a utility token called TIME.
        </div>
      </div>
      <div className='flex flex-col 2xl:mx-60 xl:mx-24 lg:mx-12 md:mx-8 items-center about-ora-ecosystem-back sm:px-20 sm:py-16 sm:mt-28'>
        <div className='about-ora-ecosystem-title'>
          TIME powers the Ora ecosystem.
        </div>
        <div className='sm:mt-20 sm:mb-32'>
          <Image src={EcoSystemImage} alt='EcoSystem Image' />
        </div>
      </div>
      <div className='about-how-it-works flex flex-col xl:mx-auto lg:mx-16 md:mx-8'>
        <div className='about-how-it-works-title flex justify-center'>
          How It Works
        </div>
        <div className='about-ora-description-title about-text-blue sm:mt-10'>
          Registration
        </div>
        <ul className='list-disc about-ora-description-content list-inside sm:mt-2 sm:ml-3'>
          <li>
            Download and install the FREE Ora app on your mobile phone (Android and iOS available).
          </li>
          <li>
            Upon registration, your account will receive a generous TIME reward.
          </li>
          <li>
            Turn on Ora app notifications to receive bonus TIME rewards.
          </li>
          <li>
            Use a friends referral code (even if already signed up) and send out yours to receive bonus TIME rewards.
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
        <ul className='list-disc about-ora-description-content list-inside sm:mt-2 sm:ml-3'>
          <li>
            Eligible users will receive a notification that there is a new data request available.
          </li>
          <li>
            Click a few multiple choice answers in less than 30 seconds and receive TIME for every answer provided.
          </li>
          <li>
            Receive generous staking rewards and grow your TIME by staking on chain (see whitepaper for details).
          </li>
          <li>
            Collected metadata is made available to data consumers.  The privacy of the user’s name and the exact location is protected.
          </li>
          <li>
            Refer as many people as possible to maximize TIME rewards earning from friends and family’s data!
          </li>
        </ul>
      </div>
      <div className='sm:mx-auto flex about-learn-more sm:mt-12'>
        <div className='about-text-blue'>
          Learn more by reading our
        </div>
        <a href='/Whitepaper.pdf' target='_blank' rel='noreferrer'>
          <div className='about-text-blue-light flex items-center cursor-pointer'>
            &nbsp;Whitepaper&nbsp;
            <WhitePaperSvg width={16} height={16} fill={"#4AA3E0"} />
          </div>
        </a>
      </div>
      <div className='flex relative sm:mt-96'>
        <div className='absolute about-footer'>
          <div className='about-preregister text-white lg:mt-16 md:mt-24'>
            Pre-register below to be one of the lucky individuals to receive the <span className='underline cursor-pointer'>Ora Airdrop!</span>
          </div>
          <div className='about-totalsupply text-white'>
            Ora is using 5% of the total supply for an airdrop to early users!
          </div>
          <div className='flex justify-center items-center sm:mt-6'>
            <input type='text' className='about-preregister-email-input px-3 py-2' placeholder='Enter your email address' onChange={(e) => {}} />
            <div className='sm:ml-3 text-white cursor-pointer'>
              <ArrowRightIcon width={26} height={26} />
            </div>
          </div>
        </div>
      </div>
      <Footer height={270} />
    </div>
  )
}

export default Home
