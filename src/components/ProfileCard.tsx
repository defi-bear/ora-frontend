import React, { useState } from 'react';
import Image from 'next/image'

import { ProfileDesc } from '../constants/types';

import LoadMoreSvg from '../components/LoadMoreSvg';

interface ProfileCardProps {
  avatar: string,
  name: string,
  position: string,
  description: Array<ProfileDesc>
};

export default function ProfileCard({ avatar, name, position, description } : ProfileCardProps) {
  const [loadmore, setLoadmore] = useState(false);

  return (
    <div className='flex flex-col'>
      <div className='flex flex-col justify-center items-center team-member-title sm:mb-3'>
        <div className='flex justify-center cursor-pointer' onClick={(e) => {
            if (loadmore)
              setLoadmore(false);
            else
              setLoadmore(true);
          }}>
          <Image src={avatar ? require(`../assets/png/${avatar}.png`) : ""} width={225} height={225} alt={avatar} className='rounded-full' />
        </div>
        {name && (
          <div className='flex justify-center cursor-pointer sm:mt-3' onClick={(e) => {
            if (loadmore)
              setLoadmore(false);
            else
              setLoadmore(true);
          }}>
            { name }
          </div>
        )}
        {position && (
          <div className='flex justify-center cursor-pointer' onClick={(e) => {
            if (loadmore)
              setLoadmore(false);
            else
              setLoadmore(true);
          }}>
            { position }
          </div>
        )}
      </div>
      <div className='flex flex-col'>
        {description && (
          <div className='team-member-description opacity-50'>
            <ul className='list-disc text-justify'>
              {Object.keys(description).map((key: any) => (
                <div key={key}>
                  {loadmore || description[key].abstr ? (
                    <li key={key}>{ description[key].desc }</li>
                  ) : ('')}
                </div>
              ))}
            </ul>
          </div>
        )}
      </div>
        {!loadmore ? (
          <div className='team-member-load-more flex justify-center cursor-pointer' onClick={(e) => {
            if (loadmore)
              setLoadmore(false);
            else
              setLoadmore(true);
          }}>
            Bio
          </div>
        ) : (
          <div className='team-member-load-more flex justify-center cursor-pointer sm:mt-10' onClick={(e) => {
            if (loadmore)
              setLoadmore(false);
            else
              setLoadmore(true);
          }}>
            <LoadMoreSvg width={44} height={44} fill={"#4AA3E0"} />
          </div>
        )}
    </div>
  );
}
