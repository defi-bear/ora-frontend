import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from "@heroicons/react/outline";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Fade from 'react-reveal/Fade';

import Header from '../components/Header'
import Footer from '../components/Footer'

import AboutImage1 from '../assets/png/0101.png';
import AboutImage2 from '../assets/png/0102.png';
import AboutLogoImage from '../assets/gif/aboutlogo.gif';
import EcoSystemImage from '../assets/png/02.png';
import TickSvg from '../components/TickSvg';
// import WhitePaperSvg from '../components/WhitePaperSvg';

import { SPREADSHEET_ID, API_KEY, CLIENT_ID, SCOPE } from '../constants/gsheet';

const Home: NextPage = () => {
  const [piece, setPiece] = useState('Future');
  const [ind, setInd] = useState(0);
  const [email, setEmail] = useState('');
  let emailInput : any = null;

  useEffect(() => {
    if (ind%3 === 0) {
      setPiece('Future');
    } else if (ind%3 === 1) {
      setPiece('Power');
    } else {
      setPiece('Evolution');
    }
  }, [ind]);

  function updateSignInStatus(isSignedIn: any) {
    console.log(isSignedIn);
    if (isSignedIn)
      console.log(isSignedIn);
  }

  useEffect(() => {
    console.log('useffect');
    const interval = setInterval(() => {
      setInd(prevInd => prevInd + 1);
    }, 2000);

    AOS.init({
      // initialise with other settings
      duration : 1200
    });

    emailInput.focus();
  
    function initClient() { //provide the authentication credentials you set up in the Google developer console
      gapi.client.init({
        'apiKey': API_KEY,
        'clientId': CLIENT_ID,
        'scope': SCOPE,
        'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
      }).then(()=> {
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignInStatus); //add a function called updateSignInStatus if you want to do something once a user is logged in with Google
        updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
      });
    }

    function handleClientLoad() { //initialize the Google API
      gapi.load('client:auth2', initClient);
    }

    handleClientLoad();
  
    return () => {
      console.log(`clearing interval`);
      clearInterval(interval);
    };
  }, []);

  function onRegister() {
    const params = {
      // The ID of the spreadsheet to update.
      spreadsheetId: SPREADSHEET_ID, 
      // The A1 notation of a range to search for a logical table of data.Values will be appended after the last row of the table.
      range: 'emoji', //this is the default spreadsheet name, so unless you've changed it, or are submitting to multiple sheets, you can leave this
      // How the input data should be interpreted.
      valueInputOption: 'RAW', //RAW = if no conversion or formatting of submitted data is needed. Otherwise USER_ENTERED
      // How the input data should be inserted.
      insertDataOption: 'INSERT_ROWS', //Choose OVERWRITE OR INSERT_ROWS
    };

    const valueRangeBody = {
      'majorDimension': 'ROWS', //log each entry as a new row (vs column)
      'values': [[email]] //convert the object's values to an array
    };

    console.log(valueRangeBody);

    let request = gapi.client.sheets.spreadsheets.values.append(params, valueRangeBody);
    request.then(function (response: any) {
      // TODO: Insert desired response behaviour on submission
      console.log(response.result);
    }, function (reason: any) {
      console.error('error: ' + reason.result.error.message);
    });
  }

  return (
    <div className='flex flex-col overflow-hidden'>
      <Head>
        <title>Ora</title>
        <meta name="description" content="Ora is on a mission to re-invent and modernize the data industry" />
        <link rel="icon" href="/logo.png" />
        <script async defer src="https://apis.google.com/js/api.js"></script>
      </Head>
      <Header height={0} />
      <div className='flex justify-between 2xl:mx-auto xl:mx-36 lg:mx-16 md:mx-6'>
        <div className='flex flex-col flex-1 sm:mt-28'>
          <div className='flex about-headline-roboto justify-between opacity-80 about-text-blue'>
            <div>
              The
            </div>
            <div>
              { piece }
            </div>
            <div>
              of
            </div>
          </div>
          <div className='about-headline-roboto opacity-80 about-text-blue'>
            Data
          </div>
          <div className='about-subline-roboto opacity-80 sm:mt-5 about-text-blue'>
            Discover the easiest way to earn lucrative rewards for your data!
          </div>
          <div className='about-subline2-kanit sm:mt-14'>
            Register below for the app launch, initial token offering and be eligible for early registration to receive our Airdrop! 
          </div>
          <div className='flex items-center sm:mt-6'>
            <input type='text' className='about-email-input px-3 py-2' placeholder='Enter your email address' onChange={(e) => { setEmail(e.target.value); }} ref={(text) => { emailInput = text; }} value={email} />
            <div className='sm:ml-3 about-text-blue-light cursor-pointer' onClick={(e) => {onRegister()}}>
              <ArrowRightIcon width={26} height={26} />
            </div>
          </div>
          <div className='flex items-center sm:mt-4 about-email-input-tip'>
            By registering your email with us you are agreeing with our&nbsp;<span className='about-text-blue-light underline'>privacy policy</span>&nbsp;and&nbsp;
          <a href="/terms" target='_blank' rel='noreferrer'><span className='about-text-blue-light underline'>terms of service</span></a>.
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
      <Fade bottom>
        <div className='flex flex-col xl:mx-auto lg:mx-16 md:mx-10 about-ora-description sm:px-20 sm:py-16 sm:mt-28'>
          <div className='about-ora-description-title about-text-blue'>
            Ora is on a mission to re-invent and modernize the data industry
          </div>
          <div className='about-ora-description-subtitle about-text-blue sm:mt-12'>
            Ora offers online users: 
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
            Ora offers online consumers: 
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
            It is no secret that the most valuable commodity for humans is time! It is no coincidence that
            Ora’s ecosystem is powered by a utility token called TIME.
          </div>
        </div>
      </Fade>
      <Fade bottom>
        <div className='flex flex-col 2xl:mx-auto xl:mx-24 lg:mx-12 md:mx-8 items-center about-ora-ecosystem-back sm:px-20 sm:py-16 sm:mt-28'>
          <div className='about-ora-ecosystem-title about-text-blue'>
            TIME powers the Ora ecosystem.
          </div>
          <div className='sm:mt-20 sm:mb-32'>
            <Image src={EcoSystemImage} alt='EcoSystem Image' />
          </div>
        </div>
      </Fade>
      <Fade bottom>
        <div className='about-how-it-works flex flex-col xl:mx-auto lg:mx-16 md:mx-8' data-aos='about-animation'>
          <div className='about-how-it-works-title flex justify-center'>
            How It Works
          </div>
          <div className='about-ora-description-title about-text-blue sm:mt-10'>
            Registration
          </div>
          <ul className='list-disc about-ora-description-content list-outside sm:mt-2 sm:ml-6'>
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
          <ul className='list-disc about-ora-description-content list-outside sm:mt-2 sm:ml-6'>
            <li>
              Eligible users will receive a notification that there is a new data request available.
            </li>
            <li>
              Click a few multiple choice answers in less than 30 seconds and receive TIME for every answer provided.
            </li>
            <li>
              Grow your TIME by staking on chain to receive generous staking rewards (see whitepaper for details).
            </li>
            <li>
              Collected metadata is made available to data consumers.  The privacy of the user’s name and the exact location is protected.
            </li>
            <li>
              Refer as many people as you like to earn ongoing TIME rewards from friends and family’s data!
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
            {/* <WhitePaperSvg width={16} height={16} fill={"#4AA3E0"} /> */}
          </div>
        </a>
      </div>
      <div className='flex relative sm:mt-96'>
        <div className='absolute about-footer'>
          <div className='about-preregister text-white lg:mt-16 md:mt-24'>
            Pre-register below to be one of the lucky individuals to receive the <Link href='/airdrop'><span className='underline cursor-pointer'>Ora Airdrop!</span></Link>
          </div>
          <div className='about-totalsupply text-white'>
            5% of the total TIME supply will be used for an airdrop to early users!
          </div>
          <div className='flex justify-center items-center sm:mt-6'>
            <input type='text' className='about-preregister-email-input px-4 py-2' placeholder='Enter your email address' onChange={(e) => {}} />
            <div className='sm:ml-3 text-white cursor-pointer'>
              <ArrowRightIcon width={26} height={26} />
            </div>
          </div>
        </div>
      </div>
      <Footer height={0} />
    </div>
  )
}

export default Home
