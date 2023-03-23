// pages/index.js

import Head from 'next/head';
import Navbar from '../app/components/Navbar';
import HeroSection from '../app/components/HeroSection';
import FeaturedProducts from '../app/components/FeaturedProducts';

const sampleProducts = [
  {
    id: '1',
    title: 'Eco-friendly Water Bottle',
    imageUrl: 'water-bottle.jpg',
    price: '$19.99',
    productUrl: '/products/1',
  },
  {
    id: '2',
    title: 'Organic Cotton Tote Bag',
    imageUrl: 'tote-bag.jpg',
    price: '$14.99',
    productUrl: '/products/2',
  },
  {
    id: '3',
    title: 'Biodegradable Bamboo Toothbrush',
    imageUrl: 'toothbrush.jpg',
    price: '$9.99',
    productUrl: '/products/3',
  },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>EarthwiseTrends - Eco-friendly and Green Products</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap" rel="stylesheet" />
      </Head>

      <Navbar />
      <HeroSection />
      <FeaturedProducts products={sampleProducts} />

      <footer>
        <p>&copy; 2023 EarthwiseTrends. All rights reserved.</p>
      </footer>
    </div>
  );
}