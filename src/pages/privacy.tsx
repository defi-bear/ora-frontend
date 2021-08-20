import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

import LogoS from '../assets/svg/logos.svg';

const Terms: NextPage = () => {
  return (
    <div className='flex flex-col'>
      <Head>
        <title>Ora - Privacy Policy</title>
        <meta name="description" content="Ora is on a mission to re-invent and modernize the data industry" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className='sm:mx-12 sm:mt-10 flex justify-end cursor-pointer'>
        <a href='/' rel='noreferrer'>
          <Image src={LogoS} alt='LogoS' />
        </a>
      </div>
      <div className='sm:mt-12 terms xl:mx-auto lg:mx-12 md:mx-8'>
        <div className='terms-description'>
          <span className='terms-title'>
            Ora Privacy Policy
          </span>
          <br />
          <br />
          <span className='opacity-65'>
            Updated August 12,2021
          </span>
          <br />
          <br />
          <span className='opacity-65'>Your privacy is very important to us. This website ora.app, Ora mobile applications and Ora browser extensions are hosted by Ora Technology Holdings Inc. or one of its affiliates (collectively, “</span><span className='terms-description-bold-500'>Ora</span><span className='opacity-65'>”).  This Privacy Policy has been prepared to explain how we collect, use, protect, and share information and data when you use this website, Ora mobile applications and browser extensions (collectively, the “</span><span className='terms-description-bold-500'>Services</span><span className='opacity-65'>”), including information and data that we share with service providers, data consumers, third-parties and alike who are Authorized Users of Services.By visiting or using all or any part of Services, you consent to this Privacy Policy.</span>
          <br />
          <br />
          <span className='terms-subtitle'>
            Visitors
          </span>
          <br />
          <span className='opacity-65'>
            Services have links to this Privacy Policy because Ora collects, uses, and retains all information, including Personal Information and Usage Data, that users share with or otherwise make available via Services.  For example, when you provide your contact information, this information is collected and stored by Ora pursuant to the </span><Link href='/terms'><span className='terms-description-bold-500 about-text-blue-light cursor-pointer'>Terms of Service Agreement</span></Link><span className='opacity-65'>.
          </span>
          <br />
          <br />
          <span className='terms-subtitle'>
            Information We Collect
          </span>
          <br />
          <span className='opacity-65'>
            Personal Information. Ora collects information that personally identifies, relates to, describes, references, is capable of being associated with, or could reasonably be linked, directly or indirectly, with a particular consumer or device (herein, “</span><span className='terms-description-bold-500'>Personal Information</span><span className='opacity-65'>”).  In particular, Services has collected the following categories of Personal Information from its users within the past twelve (12) months:
          </span>
          <br />
          <br />
          <br />
          <br />
          <div className='flex'>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Terms
