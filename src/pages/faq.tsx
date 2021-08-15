import type { NextPage } from 'next'
import Head from 'next/head'

import Header from '../components/Header';
import Footer from '../components/Footer';

import RegButton from '../components/RegButton';

const Faq: NextPage = () => {
  return (
    <div className='flex flex-col'>
      <Head>
        <title>Ora</title>
        <meta name="description" content="Ora is on a mission to re-invent and modernize the data industry" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Header height={123} />
      <div className='sm:mx-96 sm:mt-28'>
        <div className='flex justify-center items-center'>
          <div className='roadmap-headline'>
            FAQ
          </div>
          <div className='sm:ml-5 roadmap-headline-line flex-1 sm:mt-2' />
        </div>
      </div>
      <div className='flex sm:mx-96 faq-description sm:mt-16 sm:mb-10'>
        <div className='sm:mr-3'>
          1.
        </div>
        <div className='flex flex-col'>
          <div className='about-text-blue'>
            Q - How can I earn TIME?
          </div>
          <div className='time-token-opacity-65 faq-pair'>
            A – Anyone can earn TIME by downloading the Ora app in the app store or google play store and registering!
          </div>
        </div>
      </div>
      <div className='flex sm:mx-96 faq-description sm:mb-10'>
        <div className='sm:mr-3'>
          2.
        </div>
        <div className='flex flex-col'>
          <div className='about-text-blue'>
            Q – Just by registering, can I earn TIME? 
          </div>
          <div className='time-token-opacity-65 faq-pair'>
            A – Yes! Your registration details allow us to learn who you are, and in return, we pay you in TIME for it. 
          </div>
        </div>
      </div>
      <div className='flex sm:mx-96 faq-description sm:mb-10'>
        <div className='sm:mr-3'>
          3.
        </div>
        <div className='flex flex-col'>
          <div className='about-text-blue'>
            Q – How can I earn more TIME after registration?
          </div>
          <div className='time-token-opacity-65 faq-pair'>
            A – If you allow notifications, you will receive a notification anytime Ora needs more information.  These data requests will be simple, fun questions that you can answer in a couple of minutes or likely just seconds! 
          </div>
        </div>
      </div>
      <div className='flex sm:mx-96 faq-description sm:mb-10'>
        <div className='sm:mr-3'>
          4.
        </div>
        <div className='flex flex-col'>
          <div className='about-text-blue'>
            Q – How is my privacy protected?
          </div>
          <div className='time-token-opacity-65 faq-pair'>
            A – Your name and exact location is never associated with any data!  We don’t care about your name or exact location and we ensure it is never associated with your data to protect your privacy.
          </div>
        </div>
      </div>
      <div className='flex sm:mx-96 faq-description sm:mb-10'>
        <div className='sm:mr-3'>
          5.
        </div>
        <div className='flex flex-col'>
          <div className='about-text-blue'>
            Q – What is staking with Ora?
          </div>
          <div className='time-token-opacity-65 faq-pair'>
            A – Staking is Ora’s reward to TIME token holders every time Ora collects data.  In the early years, the rewards are more lucrative to incentivize early users.
          </div>
        </div>
      </div>
      <div className='flex sm:mx-96 faq-description sm:mb-10'>
        <div className='sm:mr-3'>
          6.
        </div>
        <div className='flex flex-col'>
          <div className='about-text-blue'>
            Q – Can I earn staking rewards on my own data?
          </div>
          <div className='time-token-opacity-65 faq-pair'>
            A – Yes!  Ora provides a time delay before staking rewards are paid out.  This allows the user the opportunity to stake their newly earned TIME rewards before the staking rewards get paid out for their data inputs.
          </div>
        </div>
      </div>
      <div className='flex sm:mx-96 faq-description sm:mb-10'>
        <div className='sm:mr-3'>
          7.
        </div>
        <div className='flex flex-col'>
          <div className='about-text-blue'>
            Q – How can I stake my TIME?
          </div>
          <div className='time-token-opacity-65 faq-pair'>
            A – In our app, you will find a tab that shows “staking” and “unstaking,” by clicking the staking to stake your TIME, you will begin earning staking rewards until you unstake your TIME. 
          </div>
        </div>
      </div>
      <div className='flex sm:mx-96 faq-description sm:mb-10'>
        <div className='sm:mr-3'>
          8.
        </div>
        <div className='flex flex-col'>
          <div className='about-text-blue'>
            Q – How do referrals work?
          </div>
          <div className='time-token-opacity-65 faq-pair'>
            A – Ora has extremely lucrative referral rewards.  Users can earn an additional 20% TIME with a friends’ referral link.  The friend will also earn an extra 20% TIME by providing you with their referral link.
          </div>
          <div className='time-token-opacity-65 faq-pair'>
            Only one individual can refer you at any time.  Make sure to always have a referral link used for your own bonus!
          </div>
        </div>
      </div>
      <div className='flex sm:mx-96 faq-description sm:mb-10'>
        <div className='sm:mr-3'>
          9.
        </div>
        <div className='flex flex-col'>
          <div className='about-text-blue'>
            Q – How many people can I refer?
          </div>
          <div className='time-token-opacity-65 faq-pair'>
            A – You can refer as many as you want, the more, the better!  If you refer 100 people, you will be earning 20% of all their rewards, for life!
          </div>
          <div className='time-token-opacity-65 faq-pair sm:mt-10'>
            This referral situation means that every time they earn $1 in TIME, you earn .20 cents.
          </div>
        </div>
      </div>
      <div className='flex sm:mx-96 faq-description sm:mb-10'>
        <div className='sm:mr-3'>
          10.
        </div>
        <div className='flex flex-col'>
          <div className='about-text-blue'>
            Q – Are my funds safe in the wallet?
          </div>
          <div className='time-token-opacity-65 faq-pair'>
            A – Safety is always one of Ora’s top priorities.  Our technology team and third party security audits work hard to ensure the safety for our users’ funds.
          </div>
        </div>
      </div>
      <div className='flex airdrop-split sm:mt-10 sm:mb-20' />
      <div className='flex justify-center sm:mx-96 faq-welcome sm:mb-10'>
        Ora welcomes further questions and discussion
      </div>
      <div className='flex justify-center sm:mx-96 sm:mb-10 text-white items-center'>
        <RegButton width={224} height={36} title={'Join Our Community'} />
      </div>
      <Footer height={270} />
    </div>
  )
}

export default Faq
