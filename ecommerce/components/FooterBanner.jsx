import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const FooterBanner = ({ footerBanner: { largeText1, largeText2, saleTime, smallText, midText, desc, product, buttonText, image, discount } }) => {
    return (
        <div className='footer-banner-container' style={{ backgroundImage: `url(${urlFor(image)})` }}>
            <div className='banner-desc'>
                <div className='left'>
                    <span className='banner-large-text'>{largeText1}</span>
                    <br />
                    <span className='banner-large-text'>{discount}% off</span>
                    <br />
                    <span style={{ fontSize: 18, fontWeight: 500, marginLeft: 10 }}>{saleTime}</span>
                </div>
                <div className='right'>
                </div>
            </div>
        </div>
    );
}


export default FooterBanner;