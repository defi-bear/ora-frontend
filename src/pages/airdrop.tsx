import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';

import Header from '../components/Header';
import Footer from '../components/Footer';

import AirdropImage from '../assets/svg/04.svg';

const AirDrop: NextPage = () => {
  function onRegisterClick() {}

    return (
    <div className='flex flex-col'>
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
        <title>Ora - Airdrop</title>
        <meta name="description" content="Powered by Ora’s utility token TIME, Ora offers users the most lucrative financial rewards for their data while maintaining complete privacy" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <Header height={0} onRegisterClick={onRegisterClick} />
      <div className='2xl:mx-96 xl:mx-36 lg:mx-16 md:mx-6 mt-24 sm:mt-28 px-8 sm:px-0'>
        <div className='flex justify-center items-center'>
          <div className='roadmap-headline'>
            Air<span className='about-text-blue'>drop</span>
          </div>
          <div className='sm:ml-5 roadmap-headline-line flex-1 sm:mt-2' />
        </div>
      </div>
      <div className='flex flex-col 2xl:mx-auto xl:mx-36 lg:mx-16 md:mx-6 mt-11 sm:mt-10 items-center sm:mb-10'>
        <div className="w-64 sm:w-1/2" >
          <Image src={AirdropImage} alt='Airdrop Image' />
        </div>
        <div className='airdrop-headline mt-7 sm:mt-20 px-20 sm:px-0'>
          <span className='opacity-65'>Ora has allocated up to</span><span className='airdrop-notes-bold about-text-blue'>&nbsp;5% of the total TIME supply&nbsp;</span><span className='opacity-65'>for a FREE airdrop to early registrants and users.</span>
        </div>
      </div>

        <div className='flex airdrop-split sm:mb-10 mt-7 sm:mt-0  xl:mx-36 lg:mx-16 md:mx-6 mx-8 sm:mx-0 ' />
      <div className='flex 2xl:mx-auto xl:mx-36 lg:mx-16 md:mx-6 sm:mb-10 airdrop-free items-center px-8 sm:px-0 mt-8 sm:mt-0'>
        How to get this<span className='about-text-blue-light time-token-free'>&nbsp;FREE&nbsp;</span>airdrop?
        <div className='hidden sm:block italic about-text-blue time-token-simple sm:mt-1'>
          &nbsp;-&nbsp;Simple!
        </div>
      </div>
        <div className='italic about-text-blue time-token-simple  px-8 sm:hidden mt-7 '>
            &nbsp;-&nbsp;Simple!
        </div>
      <div className='flex flex-col 2xl:mx-auto xl:mx-36 lg:mx-16 md:mx-6 airdrop-free-description px-8 sm:px-0'>
        <div className='flex flex-col about-text-blue sm:mb-20 pb-12'>
          <div className='sm:mb-8 opacity-65 mt-7 sm:mt-0'>
            Be one of the first 10,000 app registrations or register within the first month of app launch.
          </div>
          <div className="mt-7 sm:mt-0" >
            <span className='opacity-65 '>
              Step 1: </span><Link href='/'><span className='about-text-blue-light cursor-pointer'>Preregister</span></Link><span className='opacity-65'> for the app release via email in our </span><Link href='/'><span className='about-text-blue-light cursor-pointer'>Registration</span></Link><span className='opacity-65'> tab.
            </span>
          </div>
          <div className='opacity-65'>
            Step 2: Wait for our email to let you know the app is live.
          </div>
          <div className='opacity-65'>
            Step 3: Register for FREE when the app goes live.
          </div>
          <div className='opacity-65'>
            Step 4: Do nothing, sit back and relax and see the tokens appear in your in-app wallet.
          </div>
          <div className='opacity-65'>
            Step 5: Welcome to the Time Tribe&trade;, refer friends to start earning even more!
          </div>
        </div>
      </div>
      <Footer height={0} />
    </div>
  )
}

export default AirDrop
