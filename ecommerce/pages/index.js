import React from 'react';
//
import { Cart, HeroBanner, FooterBanner, Product } from '../components'
import AboutUs from '../components/AboutUs';
import { client } from '../lib/client';

const Home = ({ products, bannerData, banner2Data }) => {
  return (
    <>

      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

      <div className='products-heading'>
        <h2>This Season's Selections:</h2>
      </div>

      <div className='products-wrapper'>
        <div className='products-container'>
          {products?.map(
            (product) => <Product key={product._id} product={product} />)}
        </div>
      </div>

      <FooterBanner footerBanner={banner2Data && banner2Data[0]} />

      <AboutUs />
    </>
  );
}


//NextJS requires getServerSideProps rather than a fetch function like Vanilla React for SSR
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const banner2Query = '*[_id == "bdedc206-3a7c-41e6-bfd5-9292d06f728d"]';
  const banner2Data = await client.fetch(banner2Query);

  return { props: { products, bannerData, banner2Data, } }
}

export default Home;
