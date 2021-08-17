import type { NextPage } from 'next'
import Head from 'next/head'

import Header from '../components/Header';
import ProfileCard from '../components/ProfileCard';
import Footer from '../components/Footer';

import { ProfileDesc } from '../constants/types';

const Team: NextPage = () => {
  const team: Array<Array<ProfileDesc>> = [
    [ // CEO
      {
        desc: 'Serial entrepreneur with 30 years’ experience building, leading and growing companies.',
        abstr: false
      },
      {
        desc: 'Previously held positions leading Canadian companies including IBM, Canadian Pacific, Platinum Technologies and Ericsson Communications Canada.',
        abstr: false
      },
      {
        desc: 'Founded Parlay Entertainment in 1996, a premier Canadian gaming technology developer listed on Nasdaq OTC under ticker symbol DCEG and later on the TSXV with symbol PEI.',
        abstr: false
      },
      {
        desc: 'Served as Executive Chairman of Quantum Numbers Corp (QNC on TSXV) in 2017.',
        abstr: false
      },
      {
        desc: 'Co-founded Hyperblock Technologies in 2017, North America’s largest crypto mining company where he served as President and Director. Hyperblock was listed on the CSE exchange under the ticker symbol HYPR.',
        abstr: false
      },
      {
        desc: 'Graduated from the University of Toronto in 1988 with a Bachelor of Science degree in Physics.',
        abstr: false
      }
    ],
    [ // Chairman
      {
        desc: '30 years of experience consulting for UNFAO, UNCTAD, UNILO, UNESCO, UNEP and UNDP and many other international organizations and governments.',
        abstr: false
      },
      {
        desc: 'Previously a Professor Emeritus of Economics at McMaster University (Canada), taught economics at Purdue University (USA), was visiting scholar at Cambridge University (UK),  a Fellow for the Institute for Social and Economic Policy at Harvard University (USA) and an Adjunct Professor of Environmental Studies at York University (Canada).',
        abstr: false
      },
      {
        desc: 'Served as the Acting Executive Secretary and Undersecretary General of The United Nations Economic and Social Commission for Western Asia.',
        abstr: false
      },
      {
        desc: 'Holds Ph.D. and M.Sc. degrees from Purdue University and a BA in Economics from the American University of Beirut.',
        abstr: false
      },
    ],
    [ // CMO
      {
        desc: 'Ex-Deloitte employee, serial entrepreneur and successful sports wagerer with a track record of consistently beating the house.',
        abstr: false
      },
      {
        desc: 'Driven by a vision to build the world’s first global data network powered by blockchain technology that will deliver instant in app rewards and payments that will allow users to enjoy the financial benefits of their data.',
        abstr: false
      },
      {
        desc: 'Architected Ora’s strategy and is a crypto and blockchain enthusiast.',
        abstr: false
      },
      {
        desc: 'Graduated from the Queens Commerce program with Honours at Queens University in Canada and was awarded the Vaughan Business Economic Center entrepreneur award with Hatch Marketing. ',
        abstr: false
      },
    ],
    [ // CTO
      {
        desc: 'Systems Architect with over 25 years of experience, specializing in designing and building distributed, scalable systems.',
        abstr: false
      },
      {
        desc: 'Founder & CTO of several start-ups with 3 successful exits; 2 acquired, 1 IPO.',
        abstr: false
      },
      {
        desc: 'Began his first start-up in 1995 which was acquired by Jana Systems in 1999 and later bought by Siebel for $1.4 Billion.',
        abstr: false
      },
      {
        desc: 'Senior Systems Architect for online gaming developer IQ Ludorum building secure gaming systems and financial transaction processing systems.',
        abstr: false
      },
      {
        desc: 'Technical Lead and Architect at RBC working on Phase 1 of a global cloud deployment initiative. Total budget of $300M.',
        abstr: false
      },
      {
        desc: 'Most recently served as NEM’s Interim COO, crypto symbol XEM with $1.7 Billion market cap.',
        abstr: false
      },
    ],
    [ // CFO
      {
        desc: 'Led and managed financial and operational risk for both public and private companies operating in complex regulatory environments for over 18 years.',
        abstr: false
      },
      {
        desc: 'Previously held CFO roles at Independent Trading Group (ITG), BBS Securities (Virtual Brokers), Wells Fargo Securities Canada and Queensbury Securities.',
        abstr: false
      },
      {
        desc: 'Co-Founder of Tritum Inc. with significant ownership interests in Bloctane, a Brazilian Digital Asset Exchange and LINQ Inc, a digital asset industry connected liquidity provider into Ethereum Layer 2 scaled decentralized exchanges.',
        abstr: false
      },
      {
        desc: 'Holds a CPA, CA, an MBA from the Rotman School, University of Toronto and a BComm from Smith School of Business from Queens University.',
        abstr: false
      },
    ],
    [ // VP Business Development
      {
        desc: 'Founder and President of the Extreme Health Club Chain for 10 years, at its peak grew to $100M in revenues and employed 1400 employees, which was sold to Falcon Head Capital',
        abstr: false
      },
      {
        desc: 'Founder and President of Boston Capital, a commercial real estate company with $100M in transactions.',
        abstr: false
      },
      {
        desc: 'Founder of Rocketfrac Services that provides fracking services to the oil & gas industry using solid rocket propellant instead of water.',
        abstr: false
      },
      {
        desc: 'Founder of HyperBlock, a leader in blockchain security services listed on the CSE stock exchange under ticker HYPR.',
        abstr: false
      },
      {
        desc: 'Founder of GrowPacker, a leader in the California Cannabis co-packing sector. Raised over US$14M in non-brokered capital and is now a fully operational plant with over 40 staff.',
        abstr: false
      },
      {
        desc: 'Graduated with Bachelor of Science degree from the University of Toronto.',
        abstr: false
      },
    ],
    [ // VP Operations
      {
        desc: 'Co-founded Imperial Green Energy in 2017, a successful and growing Solar Energy Brokerage and Project Management firm in Ontario, Canada where he personally generated just under 7 figures in revenue.',
        abstr: false
      },
      {
        desc: 'In his current role at Ora, Dylan leads the management and growth of Ora’s business operations and infrastructure operations.',
        abstr: false
      },
      {
        desc: 'Graduated from Queens University with an Honours BA in Applied Economics.',
        abstr: false
      },
    ],
    [ // Design
      {
        desc: 'Award winning web and graphics designer with 12 years experience designing websites and marketing collateral for numerus successful start-up ventures.',
        abstr: false
      },
      {
        desc: 'Donald recently did the design work for well-known crypto start-ups Band Protocol and Badger Dao who each saw success reaching 9 figure market caps for their respective tokens.',
        abstr: false
      },
      {
        desc: 'Fluent in Adobe Photoshop, Adobe Illustrator and other industry standard graphic design tools, motion video editing and video production tools.',
        abstr: false
      },
      {
        desc: 'Responsible for creative design at Line Corporation, a Tokyo-based subsidiary of the South Korean internet search engine company Naver Corporation where he won 1st place in their annual Rising Star competition.',
        abstr: false
      },
    ],
    [ // Developer
      {
        desc: 'Senior Full Stack and Blockchain Developer with considerable experience at all stages of the development life-cycle leading to the creation and deployment of dynamic web and mobile projects.',
        abstr: false
      },
      {
        desc: 'Blockchain developer at Tokenizer where he created TMP token on ERC-20 blockchain, implemented DAO (Decentralized Autonomous Organization) and dYdX protocol, a leading decentralized exchange that supports perpetual, margin trading and spot trading.',
        abstr: false
      },
      {
        desc: 'Blockchain developer with Zoracles where he developed technology to improved Zora credit scores using Etherscan and Horizon APIs.',
        abstr: false
      },
      {
        desc: 'DeFi web developer for DEUS Finance where he developed integrated systems to gather and analyze staking and vault contract data.',
        abstr: false
      },
      {
        desc: 'Blockchain developer with Krosscoin where he built the HashGreed webapp Waves, an app which is used for smart contract signing on the blockchain network. ',
        abstr: false
      },
    ],
    [ // AI & Advanced Analytics
      {
        desc: 'Ph.D. in computer science (computational finance stream), Masters in Quantitative Finance from the University of Waterloo and a Master in Mathematics and Statistics from Concordia University.',
        abstr: false
      },
      {
        desc: 'Led AI and Advanced Analytic Initiatives team within the Professional Practices Area at the Bank of Montreal.',
        abstr: false
      },
      {
        desc: 'Led the Quantitative and Data Analytics Team for the Liquidity and Funding Management project for Corporate Treasury at Bank of Montreal and launched fully integrated liquidity risk optimization platform as well as leading multiple high-impact quantitative modeling exercises for calculating stressed liquidity risk positions for the enterprise.',
        abstr: false
      },
      {
        desc: 'Acted as Senior Consultant, Economic Scenario Generation (ESG) Group at Sun Life Financial where he oversaw the migration of the ESG platforms to the cloud and led the design and implementation of the BASEL Standardized Approach for counterparty credit risk measurement in the Credit Risk Group. ',
        abstr: false
      },
      {
        desc: 'Served as Lead Quant where he developed optimal asset allocation models at Manulife\'s Product and Investment Strategy Group.',
        abstr: false
      },
    ],
    [ // Data Scientist
      {
        desc: 'Specialist in algorithm design and data analytics with statistical and machine learning approaches in aerodynamics, capital market, oil production, web traffic, customer networks and generating insights that touch billions of users.',
        abstr: false
      },
      {
        desc: 'Senior Data Scientist at a top 5 Canadian insurance firm where he specialized in AI, robotics and cloud infrastructures and led the development of anti-money laundering (AML) systems, systems for alleviating policy risks and special projects to optimize businesses channels.',
        abstr: false
      },
      {
        desc: 'Machine Learning Specialist at Royal Dutch Shell where he developed reinforcement learning algorithms to identify optimal stratigraphic wellbore locations based on field and simulation data.',
        abstr: false
      },
      {
        desc: 'Quantitative Analyst at a Canadian quant trading firm where he routinely improved and developed new statistical arbitrage trading strategies.',
        abstr: false
      },
      {
        desc: 'PhD in Aerospace Engineering from University of Toronto in Canada researching high performance algorithms for large scale stochastic linear and nonlinear PDEs/ODEs applied to aerospace engineering.',
        abstr: false
      },
    ],
    [ // Crypto Law
      {
        desc: 'High profile Canadian securities lawyer and partner at McLeod Law in Calgary, Canada where he services various businesses and entrepreneurs, mainly in the cryptocurrency and private lending industries.',
        abstr: false
      },
      {
        desc: 'Has been advising companies in the cryptocurrency space since 2013, making him one of the first Canadian lawyers to act for cryptocurrency companies in Canada. Led efforts at McLeod Law to accept bitcoin as payment for legal services in 2013 making McLeod Law the first full-service law firm in Canada to accept bitcoin.',
        abstr: false
      },
      {
        desc: 'Matthew’s clients in the cryptocurrency and blockchain space include cryptocurrency exchange platforms, cryptocurrency wallet developers, issuers of digital currency (including stablecoins and NFTs), cryptocurrency miners and cryptocurrency investment funds.',
        abstr: false
      },
      {
        desc: 'Regularly called upon to give his opinion to the media on issues relating to cryptocurrency and Canadian law, and has been quoted in the Globe and Mail, Toronto Star, Bloomberg, Winnipeg Free Press, The Logic and Vice Media and has also been interviewed on CBC radio and CBC television.',
        abstr: false
      },
      {
        desc: 'Matthew sits on a variety of advisory boards of his clients and is currently an advisor to the Alberta Securities Commission’s New Economy Advisory Committee.',
        abstr: false
      },
    ],
    [ // Crypto and Gaming
      {
        desc: 'Serial entrepreneur passionate about betting, gambling, technology, internet payment systems and an early crypto adopter / advocate. systems and an early crypto adopter / advocate.',
        abstr: false
      },
      {
        desc: 'Designed and built a number of industrial strength technology systems with over 25 years experience operating online gambling sites and launched the world\'s first online gaming site ‘Plus Lotto’ in 1995.',
        abstr: false
      },
      {
        desc: 'CEO of FUN Token, an ERC-20 gaming token designed to leverage latest crypto technology for the online gaming space. Fun launched as an ICO in June 2017 and is listed on many major exchanges such as Binance and Bitfinex. FUN has a market cap of around $200M and is ranked 150th largest coin on CoinMarketCap.',
        abstr: false
      },
      {
        desc: 'Founder and CEO of BETR (Better Betting), a forward-looking company that utilizes crypto technology for in-house peer-to-peer sports betting applications and for existing external sports operators.',
        abstr: false
      },
      {
        desc: 'Served as President for Dynasty Gaming where he engineered an RTO and TSX listing as a holding company for Mahjong Mania acquisition. Successfully grew Dynasty’s market cap from $4M to $138M within 2 years prior to his exit.',
        abstr: false
      },
      {
        desc: 'Founding director and original CTO of Earthport PLC which introduced pioneering cross-border cross-currency wallet payments. Successfully raised £27M, was listed on LSE/AIM with ticker symbol EPO and was eventually bought by Visa International in 2019 for £340M.',
        abstr: false
      },
    ],
    [ // Blockchain
      {
        desc: 'Dutch serial entrepreneur owning and running multiple companies as CEO / CTO over the past 25 years and started investing in Bitcoin in 2013.',
        abstr: false
      },
      {
        desc: 'Served as interim CTO / CIO for several companies, including Triple I Sourcing Group (Netherlands) and Yme Kuiper B.V.',
        abstr: false
      },
      {
        desc: 'Founded Munt Computer Shop, an online computer store that featured one of the world’s first smart contract shopping system',
        abstr: false
      },
      {
        desc: 'Launched MunInternet Networks in 2004 in North America, Asia and in the Netherlands which was eventually sold to Denit, one of the largest web hosting companies in Europe. ',
        abstr: false
      },
      {
        desc: 'Entered the crypto space in 2013 by designing, building and operating mining servers to mine Bitcoin and Litecoin and later expanded his expertise into blockchain infrastructure and smart contracts.',
        abstr: false
      },
      {
        desc: 'Jaap is a hands on blockchain expert and acts as an advisor for numerous companies around the world.',
        abstr: false
      },
    ],
    [ // Regulatory / Governance
      {
        desc: '35 years public service experience with the Government of Ontario.',
        abstr: false
      },
      {
        desc: 'Served as the Assistant Deputy Minister for the Ontario Casino Project with the Ontario Ministry of Consumer & Commercial Relations where he developed and implemented legislation, regulations and policies necessary to establish the casino industry in Ontario.',
        abstr: false
      },
      {
        desc: 'Served as the first CEO and President of the Ontario Casino Corporation responsible for the development and operations of the new commercial casino industry in Ontario.',
        abstr: false
      },
      {
        desc: 'Established Casino Windsor, Casino Rama and Casino Niagara in Ontario. Currently, Ontario’s casino industry generates $8.3 Billion in revenues per year.',
        abstr: false
      },
      {
        desc: 'Provides Ora with high level regulatory advice, negotiating and business strategy.',
        abstr: false
      },
      {
        desc: 'Recipient of an honorary doctorate of law degree from the University of Windsor. ',
        abstr: false
      },
    ],
    [ // M & A
      {
        desc: 'Brings over 10 years experience in audit, accounting, taxation and valuation with top accounting firms in Toronto such as KPMG and Collins Barrow (acquired by RSM).',
        abstr: false
      },
      {
        desc: 'Earned his CPA, CA designation in Ontario',
        abstr: false
      },
      {
        desc: 'Strong internal processes knowledge and experience in developing start-ups and early-stage companies.',
        abstr: false
      },
      {
        desc: 'Will be leveraged to help Ora identify and assess strategic M&A opportunities, valuations and mitigating transaction risks. ',
        abstr: false
      },
      {
        desc: 'Completed his CBV in Canada and is currently a Valuations Manager.',
        abstr: false
      },
      {
        desc: 'Graduated from York University (Toronto) in 2009 with a Bachelor of Commerce degree in accounting.',
        abstr: false
      },
    ],
    [ // Crypto Social Media Influencer
      {
        desc: 'Well-known social media crypto influencer that will lead Ora’s social media presence.',
        abstr: false
      },
      {
        desc: 'An anonymous figure, has amassed 150,000 followers on his Twitter account @cryptunez making him one of the world’s leading and most trusted crypto influencers.',
        abstr: false
      },
      {
        desc: 'Tunez has established himself as a proficient trader with a venerable personality that keeps followers engaged and wanting more.',
        abstr: false
      },
      {
        desc: 'Tunez’s social media reach has been instrumental in allowing him to establish strong relationships with many other high-profile crypto influencers and prominent, well-known crypto personalities.',
        abstr: false
      },
      {
        desc: 'Ora will leverage Tunez’s large following, access to other influencers, high-profile contacts and market insights to deliver winning media campaigns designed to accelerate the adoption of Ora’s data ecosystem.',
        abstr: false
      },
    ]
  ];
  return (
    <div className='flex flex-col'>
      <Head>
        <title>Ora - Team</title>
        <meta name="description" content="Ora is on a mission to re-invent and modernize the data industry" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Header />
      <div className='2xl:mx-96 xl:mx-36 lg:mx-16 md:mx-6 sm:mt-28'>
        <div className='flex justify-center items-center'>
          <div className='roadmap-headline'>
            Team<span className='about-text-blue'>&nbsp;Memebers</span>
          </div>
          <div className='sm:ml-5 roadmap-headline-line flex-1 sm:mt-2' />
        </div>
      </div>
      <div className='flex sm:mt-20 2xl:mx-auto xl:mx-36 lg:mx-16 md:mx-6'>
        <div className='flex-1 team-member-profilecard sm:mr-10 lg:mr-32'>
          <ProfileCard avatar={'avatar01'} name={'Ted Colivas'} position={'CEO'} description={team[0]}/>
        </div>
        <div className='flex-1 team-member-profilecard'>
          <ProfileCard avatar={'avatar02'} name={'Dr. Atif Kubursi Ph.D.'} position={'Chairman'} description={team[1]}/>
        </div>
      </div>
      <div className='flex sm:mt-20 2xl:mx-auto xl:mx-36 lg:mx-16 md:mx-6'>
        <div className='flex-1 team-member-profilecard sm:mr-10 lg:mr-32'>
          <ProfileCard avatar={'avatar03'} name={'Adam Berze'} position={'Founder | President & CMO'} description={team[2]}/>
        </div>
        <div className='flex-1 team-member-profilecard'>
          <ProfileCard avatar={'avatar04'} name={'Victor Ruscitto'} position={'CTO'} description={team[3]}/>
        </div>
      </div>
      <div className='flex sm:mt-20 2xl:mx-auto xl:mx-36 lg:mx-16 md:mx-6'>
        <div className='flex-1 team-member-profilecard sm:mr-10 lg:mr-32'>
          <ProfileCard avatar={'avatar05'} name={'Jim Andriopoulos CPA, CA, MBA'} position={'CFO'} description={team[4]}/>
        </div>
        <div className='flex-1 team-member-profilecard'>
          <ProfileCard avatar={'avatar06'} name={'Steve Colivas'} position={'VP Business Development'} description={team[5]}/>
        </div>
      </div>
      <div className='flex sm:mt-20 2xl:mx-auto xl:mx-36 lg:mx-16 md:mx-6'>
        <div className='flex-1 team-member-profilecard sm:mr-10 lg:mr-32'>
          <ProfileCard avatar={'avatar07'} name={'Dylan Payne'} position={'VP Operations'} description={team[6]}/>
        </div>
        <div className='flex-1 team-member-profilecard'>
          <ProfileCard avatar={'avatar08'} name={'Donald Thanate'} position={'Design'} description={team[7]}/>
        </div>
      </div>
      <div className='flex sm:mt-20 2xl:mx-auto xl:mx-36 lg:mx-16 md:mx-6 justify-center items-center'>
        <div className='flex-1 team-member-profilecard'>
          <ProfileCard avatar={'avatar09'} name={'Shing Ho Tan'} position={'Blockchain & Full Stack Developer'} description={team[8]}/>
        </div>
      </div>
      <div className='2xl:mx-auto xl:mx-36 lg:mx-16 md:mx-6 sm:mt-28'>
        <div className='flex justify-center items-center'>
          <div className='roadmap-headline'>
            Ad<span className='about-text-blue'>visors</span>
          </div>
          <div className='sm:ml-5 roadmap-headline-line flex-1 sm:mt-2' />
        </div>
      </div>
      <div className='flex sm:mt-20 2xl:mx-auto xl:mx-36 lg:mx-16 md:mx-6'>
        <div className='flex-1 team-member-profilecard sm:mr-10 lg:mr-32'>
          <ProfileCard avatar={'avatar10'} name={'Dr. Amir Memar Ph.D. - Advisor'} position={'AI & Advanced Analytics'} description={team[9]}/>
        </div>
        <div className='flex-1 team-member-profilecard'>
          <ProfileCard avatar={'avatar11'} name={'Dr. Lin Gao Ph.D. - Advisor'} position={'Data Scientist'} description={team[10]}/>
        </div>
      </div>
      <div className='flex sm:mt-20 2xl:mx-auto xl:mx-36 lg:mx-16 md:mx-6'>
        <div className='flex-1 team-member-profilecard sm:mr-10 lg:mr-32'>
          <ProfileCard avatar={'avatar12'} name={'Matthew Burgoyne - Advisor'} position={'Canadian Securities and Crypto Law'} description={team[11]}/>
        </div>
        <div className='flex-1 team-member-profilecard'>
          <ProfileCard avatar={'avatar13'} name={'Adriaan Brink'} position={'Crypto and Gaming'} description={team[12]}/>
        </div>
      </div>
      <div className='flex sm:mt-20 2xl:mx-auto xl:mx-36 lg:mx-16 md:mx-6'>
        <div className='flex-1 team-member-profilecard sm:mr-10 lg:mr-32'>
          <ProfileCard avatar={'avatar14'} name={'Jaap Harmsma - Advisor'} position={'Blockchain'} description={team[13]}/>
        </div>
        <div className='flex-1 team-member-profilecard'>
          <ProfileCard avatar={'avatar15'} name={'Domenic Alfieri - Advisor'} position={'Regulatory / Governance'} description={team[14]}/>
        </div>
      </div>
      <div className='flex sm:mt-20 2xl:mx-auto xl:mx-36 lg:mx-16 md:mx-6 sm:mb-40'>
        <div className='flex-1 team-member-profilecard sm:mr-10 lg:mr-32'>
          <ProfileCard avatar={'avatar16'} name={'Claudio Martellacci CPA, CA, CBV - Advisor'} position={'M&A'} description={team[15]}/>
        </div>
        <div className='flex-1 team-member-profilecard'>
          <ProfileCard avatar={'avatar17'} name={'Tunez'} position={'Crypto Social Media Influencer and Marketing'} description={team[16]}/>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Team
