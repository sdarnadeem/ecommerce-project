import React from "react";
// prettier-ignore
import {  Product, HeroBanner, FooterBanner, Cart} from '../components'

import { client } from "../lib/client";

const Home = ({ products, banners }) => {
  return (
    <>
      <HeroBanner heroBanner={banners.length && banners[0]} />
      <div className="products-heading">
        <h2>Best selling products</h2>
        <p>speaking of many variations</p>
      </div>
      <div className="products-container">
        {products?.map((product) => (
          <Product product={product} key={product._id} />
        ))}
      </div>
      <FooterBanner footerBanner={banners && banners[0]} />
    </>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  const bannerQuery = '*[_type == "banner"]';
  const banners = await client.fetch(bannerQuery);
  return {
    props: {
      products,
      banners,
    },
  };
};
