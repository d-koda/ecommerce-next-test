import React from 'react';
import Link from 'next/link'
import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className='hero-banner-container' style={{ backgroundImage: `url(${urlFor(heroBanner.image)})` }}>
      <div>
        <div className='hero-banner-text-container'>
          <span className='hero-banner-small-text'>{heroBanner.smallText}</span>
          <span className='hero-banner-mid-text'>{heroBanner.midText}</span>
          <span className='hero-banner-large-text'>{heroBanner.largeText1}</span>
        </div>
        <div>
        </div>

      </div>
    </div>
  );
}


export default HeroBanner;