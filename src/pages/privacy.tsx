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
          <div className='flex opacity-65 terms-subtitle'>
            <div className='w-4/12'>
              Category
            </div>
            <div className='w-6/12'>
              Examples
            </div>
            <div className='flex justify-end w-2/12'>
              Collected
            </div>
          </div>
          <br />
          <br />
          <div className='flex opacity-65 terms-description'>
            <div className='w-4/12'>
              A. Identifiers.
            </div>
            <div className='w-6/12'>
              A real name, alias, postal address, unique personal identifier, online identifier, Internet Protocol address, email address, account name, Social Security number, driver's license number, passport number, or other similar identifiers.
            </div>
            <div className='flex justify-end w-2/12'>
              YES
            </div>
          </div>
          <br />
          <div className='flex opacity-65 terms-description'>
            <div className='w-4/12'>
              <div className='w-4/5'>
                B. Personal information categorieslisted in the California Customer Records statute (Cal. Civ. Code § 1798.80(e)).
              </div>
            </div>
            <div className='w-6/12'>
              A name, signature, Social Security number, physical characteristics or description, address, telephone number, passport number, driver's license or state identification card number, insurance policy number, education, employment, employment history, bank account number, credit card number, debit card number, or any other financial information, medical information, or health insurance information. (Some personal information included in this category may overlap with other categories.)
            </div>
            <div className='flex justify-end w-2/12'>
              YES
            </div>
          </div>
          <br />
          <div className='flex opacity-65 terms-description'>
            <div className='w-4/12'>
              <div className='w-4/5'>
                C. Protected classification characteristics under California or federal law.
              </div>
            </div>
            <div className='w-6/12'>
              Age (40 years or older), race, color, ancestry,national origin, citizenship, religion or creed, marital status, medical condition, physical or mental disability, sex (including gender, gender identity, gender expression, pregnancy or childbirth and related medical conditions), sexual orientation, veteran or military status, genetic information (includingfamilial genetic information).
            </div>
            <div className='flex justify-end w-2/12'>
              YES
            </div>
          </div>
          <br />
          <div className='flex opacity-65 terms-description'>
            <div className='w-4/12'>
              <div className='w-4/5'>
                D. Commercial information.
              </div>
            </div>
            <div className='w-6/12'>
              Records of personal property, products or services purchased, obtained, or considered, or other purchasing or consuming histories ortendencies.
            </div>
            <div className='flex justify-end w-2/12'>
              YES
            </div>
          </div>
          <br />
          <div className='flex opacity-65 terms-description'>
            <div className='w-4/12'>
              <div className='w-4/5'>
                E. Biometric information.
              </div>
            </div>
            <div className='w-6/12'>
              Genetic, physiological, behavioral, and biological characteristics, or activity patterns used to extract a template or other identifier or identifying information, such as, fingerprints, faceprints, and voiceprints, iris or retina scans, keystroke, gait, or other physical patterns, and sleep, health, or exercise data.
            </div>
            <div className='flex justify-end w-2/12'>
              NO
            </div>
          </div>
          <br />
          <div className='flex opacity-65 terms-description'>
            <div className='w-4/12'>
              <div className='w-4/5'>
                F. Internet or other similar network activity.
              </div>
            </div>
            <div className='w-6/12'>
              Browsing history, search history, information on a consumer's interaction with a web Services, application, or advertisement.
            </div>
            <div className='flex justify-end w-2/12'>
              YES
            </div>
          </div>
          <br />
          <div className='flex opacity-65 terms-description'>
            <div className='w-4/12'>
              <div className='w-4/5'>
                G. Geolocation data.
              </div>
            </div>
            <div className='w-6/12'>
              Physical location or movements.
            </div>
            <div className='flex justify-end w-2/12'>
              NO
            </div>
          </div>
          <br />
          <div className='flex opacity-65 terms-description'>
            <div className='w-4/12'>
              <div className='w-4/5'>
                H. Sensory data.
              </div>
            </div>
            <div className='w-6/12'>
              Audio, electronic, visual, thermal, olfactory, or similar information.
            </div>
            <div className='flex justify-end w-2/12'>
              NO
            </div>
          </div>
          <br />
          <div className='flex opacity-65 terms-description'>
            <div className='w-4/12'>
              <div className='w-4/5'>
                I. Professional or employment-related information.
              </div>
            </div>
            <div className='w-6/12'>
              Current or past job history or performance evaluations.
            </div>
            <div className='flex justify-end w-2/12'>
              YES
            </div>
          </div>
          <br />
          <div className='flex opacity-65 terms-description'>
            <div className='w-4/12'>
              <div className='w-4/5'>
                J. Non-public educationinformation (per the Family Educational Rights and Privacy Act (20 U.S.C. Section 1232g, 34 C.F.R. Part 99)).
              </div>
            </div>
            <div className='w-6/12'>
              Education records directly related to a student maintained by an educational institution or party acting on its behalf, such as grades, transcripts, class lists, student schedules, student identification codes, student financial information, or student disciplinary records.
            </div>
            <div className='flex justify-end w-2/12'>
              YES
            </div>
          </div>
          <br />
          <div className='flex opacity-65 terms-description'>
            <div className='w-4/12'>
              <div className='w-4/5'>
                K. Inferences drawn from other personal information.
              </div>
            </div>
            <div className='w-6/12'>
              Profile reflecting a person's preferences, characteristics, psychological trends, predispositions, behavior, attitudes, intelligence, abilities, and aptitudes.
            </div>
            <div className='flex justify-end w-2/12'>
              YES
            </div>
          </div>
          <br />
          <br />
          <br />
          <span className='terms-subtitle'>
            For purposes of this Privacy Policy, “Personal Information” does not include:- 
          </span>
          <br />
          <br />
          <span className='opacity-65'>
            Publicly available information from government records.- Deidentified or aggregated consumer information.- Information excluded from “Personal Information”like: health or medical information covered by the Health Insurance Portability and Accountability Act of 1996 (HIPAA) and the California Confidentiality of Medical Information Act (CMIA) or clinical trial data; personal information covered by certain sector-specific privacy laws, including the Fair Credit Reporting Act (FRCA), the Gramm-Leach-Bliley Act (GLBA) or California Financial Information Privacy Act (FIPA), and the Driver's Privacy Protection Act of 1994. Ora collects Personal Information only if you choose to share it (for example, by inserting your information into forms you complete when registering or updating in the app). The decision to provide this information is optional. However, if you choose not to provide the requested information, you may not be able to use certain features of Services.
          </span>
          <br />
          <br />
          <br />
          <span className='terms-subtitle'>
            Anonymous Usage Data
          </span>
          <br />
          <br />
          <span className='opacity-65'>
            Services automatically collects anonymous usage information that does not identify an individual user (“Usage Data”).  For example, each time you use Services, it automatically collects the type of Web browser you use, your operating system, your Internet Service Provider, your IP address, the pages you view, and the time and duration of your visits.  Ora uses this information to help understand how people use Services, and to enhance Services Ora offers.
          </span>
          <br />
          <br />
          <br />
          <span className='terms-subtitle'>
            Cookies and Web Beacons
          </span>
          <br />
          <br />
          <span className='opacity-65'>
            Services may use cookies (a small text file placed on your computer to identify yourcomputer and browser) and Web beacons (an electronic file placed on a Web Services that monitors usage).  These technologies may be used in connection with Services.  Ora uses cookies and Web beacons to improve the quality and convenience of Services.  Ora does not use cookies or Web beacons to collect Personal Information.  Most Web browsers are initially set up to accept cookies.  Youmay set most browsers to notify you if you receive a cookie, or you may choose to block cookies, though either of those actions may affect your use of Services.
          </span>
          <br />
          <br />
          <br />
          <span className='terms-subtitle'>
            How We Use Information and When We May Share and Disclose Information
          </span>
          <br />
          <br />
          <span className='terms-subtitle'>
            In General
          </span>
          <br />
          <span className='opacity-65'>
            Ora uses Personal Information only at the direction and for the benefit of the User for internal purposes, such as to provide you with Services, to ensure eligibility for Services, to enable Ora or the User to notify you of new products or services, and tootherwise communicate with you about your use of Services or the User.  Ora will disclose your Personal Information in accordance with this Privacy Policy.  Ora will not disclose Personal Information to data consumers or third parties without your consent, including for their direct marketing purposes, except as explained in this Privacy Policy.
          </span>
          <br />
          <br />
          <span className='terms-subtitle'>
            Service Providers
          </span>
          <br />
          <span className='opacity-65'>
            From time to time, Ora or the User may establish a business relationship with other businesses whom Ora believes is trustworthy and who we have asked to confirm that their privacy practices are consistent with ours (“Service Providers”).  For example, Ora may contract with Service Providers to provide certain services.  Ora only provides our Service Providers with the information necessary or helpful for them to perform these services on Ora's behalf.  Each Service Provider must agree to use reasonable security procedures and practices, appropriate to the nature of the information involved, in order to protect your Personal Information from unauthorized access, use, or disclosure.  Service Providers are prohibited from usingPersonal Information other than for the purpose for which such information was provided or as authorized by you.
          </span>
          <br />
          <br />
          <span className='terms-subtitle'>
            Advertising
          </span>
          <br />
          <span className='opacity-65'>
            We may work with third-party advertisers, search providers and ad networks (“Advertisers”).  These companies may collect and use information about your use of Services in order to provide advertisements about goods and services that may be of interest to you.  These companies may place or recognize a unique cookie on your computer or use other technologies such as Web beacons. This Privacy Policy does not cover any use of information that an Ad Network may collect from you.
          </span>
          <br />
          <br />
          <span className='terms-subtitle'>
            Standard Analytics
          </span>
          <br />
          <span className='opacity-65'>
            InformationOra may use, and disclose to third parties, certain Usage Data regarding Services.  However, in such cases, your Usage Data is aggregated with the Usage Data of others and does not identify you individually.
          </span>
          <br />
          <br />
          <span className='terms-subtitle'>
            Other Transfers
          </span>
          <br />
          <span className='opacity-65'>
            Ora may share Personal Information and Usage Data with businesses controlling, controlled by, or under common control with it.  If Ora is merged, acquired, or sold, or in the event of a transfer of some or all of Ora's assets, we may disclose or transfer Personal Information and Usage Data in connection with such transaction.
          </span>
          <br />
          <br />
          <span className='terms-subtitle'>
            Compliance with Laws and Law Enforcement
          </span>
          <br />
          <span className='opacity-65'>
            Ora cooperates with government and law enforcement officials and private parties to enforce and comply with the law.  Ora may disclose Personal Information and anyother information about you to government or law enforcement officials or private parties if, in its discretion, it believes it is necessary or appropriate for any of the following reasons: 
            <br />
            (a) to respond to legal requests (including court orders and subpoenas); 
            <br />
            (b) to protect the safety, property, or rights of Ora, or any third-party; 
            <br />
            (c) to prevent or stop any illegal, unethical, or legally actionable activity; or 
            <br />
            (d) to comply with the law.
          </span>
          <br />
          <br />
          <span className='terms-subtitle'>
            Be Careful When You Share Information with Others
          </span>
          <br />
          <span className='opacity-65'>
            Please be aware that whenever you send messages, make postings, or otherwise post or transmit any information or content on this Services or any other of Servicesor any public forum available on or through Services, that information or content may be accessed by others.  In addition, when you share information or any other communications with third parties, that information may be passed along or made public by others.  This means that anyone with access to such information can potentially use it for any purpose, including sending unsolicited communications.
          </span>
          <br />
          <br />
          <span className='terms-subtitle'>
            Security
          </span>
          <br />
          <span className='opacity-65'>
            Ora is very concerned about safeguarding the confidentiality of your Personal Information.  Ora employs reasonable physical and electronic measures designed toprotect your information from unauthorized access.  However, no data transmission over the Internet or other network can be guaranteed to be 100% secure.  As a result, while Ora strives to protect information transmitted on or through Services, Ora cannot and does not guarantee the security of any information you upload, store, share, transmit, or provide on or through any Services and you do so at your own risk.
          </span>
          <br />
          <br />
          <span className='terms-subtitle'>
            Links to Other Web Services
          </span>
          <br />
          <span className='opacity-65'>
            Services may contain links to other Web Services, or allow others to send you such links.  A link to a third-party's Web Services does not mean that Ora or the User endorses it or that we are affiliated with it.  Ora dos not exercise control over third-party Web Services.  You access such third-party Web Services or content at your own risk.  You should always read the privacy policy of a third-party Web Services before providing any information to the Web Services. 
          </span>
          <br />
          <br />
          <br />
          <span className='terms-subtitle'>
            Children's Privacy
          </span>
          <br />
          <span className='opacity-65'>
            Ora does not knowingly collect Personal Information from children under the age of 13.  If Ora becomes aware that a user is under the age of 13, Ora will terminate any account that user may have with it.  If Ora becomes aware that it has inadvertently received Personal Information from a child under the age of 13, Ora will delete such information from its records.
          </span>
          <br />
          <br />
          <span className='terms-subtitle'>
            Processing in the United States
          </span>
          <br />
          <span className='opacity-65'>
            Please be aware that your Personal Information may be transferred to and maintained on servers or databases located outside your state, province, or country.  If you are located outside of the United States, please be advised that we process and store all information in the United States.  The laws in the United Statesmay not be as protective of your privacy as those in your location.  By using Services, you agree that the collection, use, transfer, and disclosure of your Personal Information will be governed by the applicable laws in the United States.
          </span>
          <br />
          <br />
          <span className='terms-subtitle'>
            Privacy Policy Changes
          </span>
          <br />
          <span className='opacity-65'>
            From time to time, this Privacy Policy may be changed.  If this Privacy Policy is changed, you will be informed by posting of the revised Privacy Policy on Services.  Those changes will go into effect on the Revision Date shown in the revised Privacy Policy.  Your continued use of Services constitutes your consent to the revised Privacy Policy.
          </span>
          <br />
          <br />
          <span className='terms-subtitle' style={{fontStyle: 'italic !important'}}>
            FOR CALIFORNIA CONSUMERS ONLY:
          </span>
          <br />
          <span className='opacity-65 italic'>
            The California Consumer Privacy Act of 2018 ("CCPA"), as amended from time to time, applies solely to visitors, users, and others who reside in the State of California.  The CCPA provides California residents with specific rights regarding their personal information.  If you are a California resident, this section describes your CCPA rights and explains how to exercise those rights.
          </span>
          <br />
          <br />
          <span className='terms-subtitle' style={{fontStyle: 'italic !important'}}>
            Access to Specific Information and Data Portability Rights
          </span>
          <br />
          <span className='opacity-65 italic'>
            You have the right to request that Ora disclose certain information to you about its collection and use of your Personal Information over the past 12 months.  Once Ora receives and confirms your verifiable consumer request, it will disclose to you:
            <br />
            <br />
            <ul className='list-disc list-outside opacity-65 sm:ml-6'>
              <li>The categories of Personal Information it collected about you.</li>
              <li>The categories of sources for the Personal Information it collected about you.</li>
              <li>Its business or commercial purpose for collecting or selling that Personal Information.</li>
              <li>The categories of third parties with whom it shares that Personal Information.</li>
              <li>The specific pieces of Personal Information it collected about you (also called a data portability request).</li>
              <li>If Ora sold or disclosed your Personal Information for a business purpose, two separate lists disclosing: Sales, identifying the Personal Information categories that each category of recipient purchased; and Disclosures for a business purpose, identifying the Personal Information categories that each category of recipient obtained.</li>
            </ul>
          </span>
          <br />
          <span className='terms-subtitle' style={{fontStyle: 'italic !important'}}>
            Deletion Request Rights
          </span>
          <br />
          <span className='opacity-65 italic'>
            You have the right to request that Ora delete any of your Personal Information that it has collected from you and retained, subject to certain exemptions.  Once Ora receives and confirms your verifiable consumer request, Ora will delete (and direct its service provider(s) to delete) your Personal Information from our records, unless an exemption applies.  Ora may deny your deletion request if retaining the information is necessary for Ora or its service provider(s) to: Complete or reverse the transaction for which the Personal Information was collected, provide a good or service that you requested, take actions reasonably anticipated within the context of its ongoing business relationship with you, or otherwise perform or reverse our contract with you.Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal activity, or prosecute those responsible for such activities.  Debug products to identify and repair errors that impair existing intended functionality.Exercise free speech, ensure the right of another consumer to exercise their free speech rights, or exercise another right provided for by law.  Comply with the California Electronic Communications Privacy Act (Cal. Penal Code § 1546, et seq.).Engage in public or peer-reviewed scientific, historical, or statistical research in the public interest that adheres to all other applicable ethics and privacy laws, when theinformation's deletion may likely render impossible or seriously impair the research's achievement, if you previously provided informed consent.Enable solely internal uses that are reasonably aligned with consumer expectations based on your relationship with Ora.  Comply with a legal obligation.Make other internal and lawful uses of that information that are compatible with thecontext in which you provided it.
          </span>
          <br />
          <br />
          <span className='terms-subtitle' style={{fontStyle: 'italic !important'}}>
            Exercising Access, Data Portability, and Deletion Rights
          </span>
          <br />
          <span className='opacity-65 italic'>
            To exercise the access, data portability, and deletion rights described above, pleasesubmit a verifiable consumer request to Ora by emailing </span><a href='mailto:info@ora.app' rel='noreferrer'><span className='about-text-blue-light italic terms-description-bold-600'>info@ora.app</span></a><span className='opacity-65 italic'> directly.Only you, or someone legally authorized by you to act on your behalf, may make a verifiable consumer request related to your personal information.  You may also make a verifiable consumer request on behalf of your minor child.You may only make a verifiable consumer request for access or data portability twice within a 12-month period.  The verifiable consumer request must: Provide sufficient information that allows Ora to reasonably verify you are the person about whom Ora collected personal information or an authorized representative.Describe your request with sufficient detail that allows Ora to properly understand, evaluate and respond to it.Ora cannot respond to your request or provide you with personal information if it cannot verify your identity or authority to make the request and confirm the personal information relates to you.  Making a verifiable consumer request does not require you to create an account with Ora.  Ora will only use personal information provided in a verifiable consumer request to verify the requestor's identity or authority to make the request. 
          </span>
          <br />
          <br />
          <span className='terms-subtitle' style={{fontStyle: 'italic !important'}}>
            Response Timing and Format
          </span>
          <br />
          <span className='opacity-65 italic'>
            Ora endeavors to respond to a verifiable consumer request within forty-five (45) days of its receipt.  If more time is required (up to ninety (90) days), you will be informed of the reason and extension period in writing by mail or electronically, at your option.Any disclosures Ora provides will only cover the 12-month period preceding the verifiable consumer request's receipt.  The response Ora provide will also explain the reasons it cannot comply with a request, if applicable.  For data portability requests, Ora will select a format to provide your personal information that is readily useable and should allow you to transmit the information from one entity to another entity without hindrance.  Ora does not charge a fee to process or respond to your verifiable consumer request unless it is excessive, repetitive, or manifestly unfounded.  If Ora determines that the request warrants a fee, it will tell you why that decision was made and provide you with a cost estimate before completing your request.
          </span>
          <br />
          <br />
          <span className='terms-subtitle' style={{fontStyle: 'italic !important'}}>
            Other California Privacy Rights
          </span>
          <br />
          <span className='opacity-65 italic'>
            California's “Shine the Light” law (Civil Code § 1798.83) permits users of Services that are California residents to request certain information regarding Ora's disclosure of personal information to third-parties for their direct marketing purposes.  To make such a request, please send an email to </span><a href='mailto:info@ora.app' rel='noreferrer'><span className='about-text-blue-light italic terms-description-bold-600'>info@ora.app</span></a><span className='opacity-65 italic'>.
          </span>
          <br />
          <br />
          <span className='opacity-65 italic'>
            © Ora.app all Rights Reserved.
          </span>
        </div>
      </div>
    </div>
  )
}

export default Terms
