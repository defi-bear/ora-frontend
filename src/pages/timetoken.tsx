import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image';

import Header from '../components/Header';
import Footer from '../components/Footer';

import LogoX from '../assets/svg/logox.svg';
import TimeTokenImage from '../assets/svg/03.svg';
import DownloadSvg from '../assets/svg/download.svg';
// import WhitePaperSvg from '../components/WhitePaperSvg';

const TimeToken: NextPage = () => {
  function onRegisterClick() {}

  return (
    <div className='flex flex-col'>
      <Head>
        <title>Ora - TIME Token</title>
        <meta name="description" content="Ora is on a mission to re-invent and modernize the data industry" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Header height={0} onRegisterClick={onRegisterClick} />
      <div className='2xl:mx-96 xl:mx-36 lg:mx-16 md:mx-6 mt-24 sm:mt-28 px-8 sm:px-0'>
        <div className='flex justify-center items-center'>
          <div className='roadmap-headline'>
            TIME<span className='about-text-blue'>&nbsp;Token</span>
          </div>
          <div className='sm:ml-5 roadmap-headline-line flex-1 sm:mt-2' />
        </div>
      </div>
      <div className='flex 2xl:mx-auto xl:mx-36 lg:mx-16 md:mx-6  sm:mt-10 px-10 sm:px-0 justify-between sm:mb-16'>
        <div className='flex-1 flex items-center hidden sm:block'>
          <Image src={TimeTokenImage} alt='Time Token Image' />
        </div>
        <div className='flex flex-col flex-1 time-token-dashed justify-center items-center 2xl:ml-56 sm:pt-10'>
          <div className="w-28 sm:w-40">
            <Image src={LogoX} alt='LogoX Image'/>
          </div>
          <div className='flex flex-col time-token-percent sm:p-10'>
            <div>
              <span className='opacity-65'>
                Token:&nbsp;
              </span>
              <span className='about-text-blue'>
                TIME
              </span>
            </div>
            <div>
              <span className='opacity-65'>
                Protocol:&nbsp;
              </span>
              <span className='about-text-blue'>
                Ethereum's&nbsp;
              </span>
              <span className='about-text-blue'>
                ERC-20
              </span>
            </div>
            <div>
              <span className='opacity-65'>
                Supply:&nbsp;
              </span>
              <span className='about-text-blue'>
                150,000,000
              </span>
            </div>
            <div className='flex time-token-percent'>
              <span className='opacity-65'>
                Supply Breakdown:
              </span>
            </div>
            <div className='flex time-token-percent items-center'>
              <span className='time-token-tick time-token-tick-team'>
              </span>
              <span className='about-text-blue'>
                &nbsp;35%&nbsp;
              </span>
              <span className='opacity-65'>
                Team, Advisors, Future Hires
              </span>
            </div>
            <div className='flex time-token-percent items-center'>
              <span className='time-token-tick time-token-tick-presale'>
              </span>
              <span className='about-text-blue'>
                &nbsp;15%&nbsp;
              </span>
              <span className='opacity-65'>
                Token Pre-Sale
              </span>
            </div>
            <div className='flex time-token-percent items-center'>
              <span className='time-token-tick time-token-tick-airdrop'>
              </span>
              <span className='opacity-65'>
                &nbsp;5
              </span>
              <span className='about-text-blue'>
                %&nbsp;
              </span>
              <span className='opacity-65'>
                Airdrop To Early Registrations
              </span>
            </div>
            <div className='flex time-token-percent items-center'>
              <span className='time-token-tick time-token-tick-offering'>
              </span>
              <span className='opacity-65'>
                &nbsp;45
              </span>
              <span className='about-text-blue'>
                %&nbsp;
              </span>
              <span className='opacity-65'>
                Initial Token Offering
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col 2xl:mx-auto xl:mx-36 lg:mx-16 md:mx-6 sm:mt-10 sm:mb-32 time-token-notes'>
        <div className='about-text-blue time-token-notes-bold'>
          Additional notes:
        </div>
        <ul className='list-disc list-inside sm:list-outside sm:ml-6 '>
          <li>
            <span className='opacity-65 font-14'>
              The supply is infinite since TIME is a mintable ERC-20 token, but inflation only occurs when data is collected, as explained in the&nbsp;
              <a href='/Whitepaper.pdf' target='_blank' rel='noreferrer'>
                <span className='about-text-blue-light time-token-whitepaper time-token-notes-bold'>
                  whitepaper
                  {/* <WhitePaperSvg width={16} height={16} fill={"#4AA3E0"} /> */}
                  <span className='ml-1'><Image src={DownloadSvg} alt='Download Image' /></span>
                </span>
                .
              </a>
            </span>
          </li>
          <li>
            <span className='opacity-65 relative font-14'>
              Inflation is directly correlated to registrations, data creation and is managed with smart contracts.
            </span>
          </li>
          <li>
            <span className='opacity-65 relative font-14'>
              <span className='italic'>Staking</span>&nbsp;: 4:1 staking rewards to data payments in year one, 3:1 ratio in year two, 2:1 ratio in year three and a 1:1 ratio moving forward from year four.  Example: 1,000 TIME provided to users providing data, 4,000 TIME provided to individuals staking in year 1 as explained in the&nbsp;<a href='/Whitepaper.pdf' target='_blank' rel='noreferrer'><span className='about-text-blue-light time-token-notes-bold'>whitepaper<span className='ml-1'><Image src={DownloadSvg} alt='Download Image' /></span></span></a>.
            </span>
          </li>
          <li>
            <span className='opacity-65 relative font-14'>
              5% of Ora’s revenue will eventually go towards buying and burning TIME from existence to create a complete circle utility for data providers and TIME holders.
            </span>
          </li>
          <li>
            <span className='opacity-65 relative font-14'>
              Pre-sale and team tokens are vested.
            </span>
          </li>
          <li>
            <span className='opacity-65 relative font-14'>
              With the constant payment of TIME to users for data and eventually attention, despite the staking mechanism, the TIME token will become <span className='time-token-notes-bold' style={{fontStyle: 'italic !important'}}>more decentralized with each passing year.</span>
            </span>
          </li>
        </ul>
      </div>
      <Footer height={0} />
    </div>
  )
}

export default TimeToken
